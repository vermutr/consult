import {useState} from "react";
import styles from '../../../views/profile/ProfilePage.module.css';
import {FormOfferData} from "./FormOfferData";
import {createOffer} from "../../../services/offer/OfferService";
import {getDataWithExpiry} from "../../../services/auth/StoreItem";
import {Offer} from "../Offer";


type CreateOfferFormProps = {
    onOfferCreated: (offer: Offer) => void;
};

const CreateOfferForm: React.FC<CreateOfferFormProps> = ({ onOfferCreated }) => {

    const [formData, setFormData] = useState<FormOfferData>({
        title: '',
        description: '',
        price: 0,
        email: getDataWithExpiry('email') || ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await createOffer(formData);

            console.log(response);
            if (response.ok) {
                const newOffer = await response.json();
                onOfferCreated(newOffer);

                setFormData({
                    title: '',
                    description: '',
                    price: 0,
                    email: getDataWithExpiry('email') || ''
                });
            }
        } catch (error) {
            console.error("There was an error sending the request:", error);
        }
    }

    return (
        <div className={styles.formField}>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                />
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Price"
                />
                <input type="hidden" name="email" value={formData.email}/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default CreateOfferForm;