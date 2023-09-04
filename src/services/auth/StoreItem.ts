type StoredItem<T> = {
    value: T;
    expiry: number;
};

export const setDataWithExpiry = <T>(key: string, value: T, ttl: number): void => {
    const now = new Date();

    const item: StoredItem<T> = {
        value: value,
        expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
};

export const getDataWithExpiry = <T>(key: string): T | null => {
    const itemStr = localStorage.getItem(key);

    if (!itemStr) {
        return null;
    }

    const item: StoredItem<T> = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }

    return item.value;
};

export const removeLocalStorageItem = (key: string): void => {
    localStorage.removeItem(key);
};