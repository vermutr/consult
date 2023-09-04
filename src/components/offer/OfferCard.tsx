
import React from 'react';
import styles from './Offer.module.css';
import { Offer } from './Offer';

interface Props {
    offer: Offer;
    text: string
    onButtonClick: (id: string) => void;
}

const OfferCard: React.FC<Props> = ({ offer, text, onButtonClick }) => {
    return (
        <div className={styles.offerCard}>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <p>{offer.price} USD</p>
            <p>{offer.email}</p>
            <button onClick={() => onButtonClick(offer.id)}>{text}</button>
        </div>
    );
}

export default OfferCard;