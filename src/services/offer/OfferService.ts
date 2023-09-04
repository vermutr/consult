import {FormOfferData} from "../../components/offer/form/FormOfferData";
import authHeader from "../auth/AuthHeader";
import {getDataWithExpiry} from "../auth/StoreItem";

const BASE_URL = 'http://localhost:8080';

export const fetchUserOffers = async () => {
    const email = getDataWithExpiry('email');
    const headers = {
        ...authHeader()
    };

    try {
        const response = await fetch(`${BASE_URL}/api/v1/offers/${email}`, {
            method: 'GET',
            headers: headers
        });
        return await response.json();
    } catch (error) {
        console.error('Ошибка при получении предложений:', error);
        return [];
    }
};

export const fetchOffers = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/v1/offers`, {
            method: 'GET',
        });
        return await response.json();
    } catch (error) {
        console.error('Ошибка при получении предложений:', error);
        return [];
    }
};

export const deleteOffer = async (id: string) => {
    const headers = {
        ...authHeader()
    };

    try {
        await fetch(`${BASE_URL}/api/v1/offers/${id}`, {
            method: 'DELETE',
            headers: headers
        });
    } catch (error) {
        console.error('Ошибка при удалении предложения:', error);
    }
};

export const createOffer = async (formOfferData: FormOfferData) => {
    const headers = {
        ...authHeader(),
        'Content-Type': 'application/json'
    };

    return await fetch(`${BASE_URL}/api/v1/offers`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            title: formOfferData.title,
            description: formOfferData.description,
            price: formOfferData.price,
            email: formOfferData.email
        })
    });
};