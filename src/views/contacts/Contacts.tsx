import React from 'react';
import styles from './Contacts.module.css';

const Contacts: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>Contact Us</div>
            <div className={styles.item}>
                <span className={styles.label}>Email:</span>
                <span className={styles.content}>support@accountingservices.com</span>
            </div>
            <div className={styles.item}>
                <span className={styles.label}>Phone:</span>
                <span className={styles.content}>+1 (123) 456-7890</span>
            </div>
            <div className={styles.item}>
                <span className={styles.label}>Address:</span>
                <span className={styles.content}>123 Accounting St., Finance City, 90210</span>
            </div>
        </div>
    );
};

export default Contacts;