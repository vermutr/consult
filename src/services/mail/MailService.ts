import { Offer } from "../../components/offer/Offer";

const BASE_URL = 'http://localhost:8080';

export const sendEmail = async (email: string, offer: Offer): Promise<void> => {
    try {
        const response = await fetch(`${BASE_URL}/api/v1/send-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mailFrom: email,
                mailTo: offer.email,
                offerTitle: offer.title,
                offerDescription: offer.description
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
        }

        alert('Email sent successfully');
    } catch (error) {
        console.error("Error sending email:", error);
        alert('Failed to send email. Please try again.');
    }
};