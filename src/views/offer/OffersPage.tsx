import React, { useState, useEffect } from 'react';
import { Offer } from "../../components/offer/Offer";
import OfferCard from "../../components/offer/OfferCard";
import styles from "./OffersPage.module.css";
import { fetchOffers } from "../../services/offer/OfferService";
import { sendEmail } from "../../services/mail/MailService";

const OffersPage: React.FC = () => {

    const [offers, setOffers] = useState<Offer[]>([]);

    const [emails, setEmails] = useState<{ [key: string]: string }>({});

    const handleButtonClick = (offer: Offer) => {
        sendEmail(emails[offer.id], offer);
        setEmails(prev => ({
            ...prev,
            [offer.id]: ''  // Clear the email for this specific offer
        }));
    };

    useEffect(() => {
        fetchOffers().then(data => {
            setOffers(data);
        });
    }, []);

    const setEmailForOffer = (id: string, value: string) => {
        setEmails(prev => ({
            ...prev,
            [id]: value
        }));
    };

    return (
        <div className={styles.container}>
            <section className={styles.section}>
                {offers.map(offer => (
                    <div key={offer.id} className={styles.offerContainer}>
                        <OfferCard offer={offer} text="Send Email" onButtonClick={() => handleButtonClick(offer)} />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={styles.emailInput}
                            value={emails[offer.id] || ''}
                            onChange={e => setEmailForOffer(offer.id, e.target.value)}
                        />
                    </div>
                ))}
            </section>
        </div>
    );
};

export default OffersPage;