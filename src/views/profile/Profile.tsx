import React, {useState, useEffect, useContext} from 'react';
import CreateOfferForm from "../../components/offer/form/CreateOfferForm";
import styles from './ProfilePage.module.css';
import OfferCard from "../../components/offer/OfferCard";
import {Offer} from "../../components/offer/Offer";
import {deleteOffer, fetchUserOffers} from "../../services/offer/OfferService";
import AuthContext, {useAuth} from "../../components/auth/AuthContext";
import {useNavigate} from "react-router-dom";
import {getDataWithExpiry} from "../../services/auth/StoreItem";

const ProfilePage: React.FC = () => {
    const [activeOption, setActiveOption] = useState<string>('myOffers');
    const [offers, setOffers] = useState<Offer[]>([]);

    const navigate = useNavigate();
    const { isLoggedIn, setLoggedIn } = useAuth();

    useEffect(() => {
        const interval = setInterval(() => {
            const hasToken = !!getDataWithExpiry('jwtToken');
            if (!hasToken && isLoggedIn) {
                setLoggedIn(false);
                navigate('/login');
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [isLoggedIn, navigate, setLoggedIn]);

    const handleAddOffer = (newOffer: Offer) => {
        setOffers(prevOffers => [...prevOffers, newOffer]);
    };

    useEffect(() => {
            fetchUserOffers().then(data => {
                setOffers(data);
            });
    }, []);

    const handleDeleteOffer = async (id: string) => {
        try {
            await deleteOffer(id);
            const updatedOffers = offers.filter(offer => offer.id !== id);
            setOffers(updatedOffers);
        } catch (error) {
            console.error('Ошибка при удалении предложения:', error);
        }
    };


    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <button onClick={() => setActiveOption('myOffers')}>My offers</button>
                <button onClick={() => setActiveOption('createOffer')}>Create offer</button>
            </div>
            <div className={styles.content}>
                {activeOption === 'createOffer' && <CreateOfferForm onOfferCreated={handleAddOffer} />}
                {activeOption === 'myOffers' &&
                    <section className={styles.section}>
                        {offers.map(offer => (
                            <OfferCard key={offer.id} offer={offer} text="Delete" onButtonClick={handleDeleteOffer}/>
                        ))}
                    </section>
                }
            </div>
        </div>
    );
}
export default ProfilePage;