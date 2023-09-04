import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>About Us</div>
            <div className={styles.content}>
                Welcome to Accounting Services! We are an online platform that connects accountants with those in need
                of accounting services. Our mission is to provide an easy and reliable way for individuals and
                businesses
                to find the best accounting expertise tailored to their needs. Whether you're looking for tax
                preparation,
                bookkeeping, or financial consulting, we have a wide range of professionals ready to assist you.
            </div>
        </div>
    );
};

export default About;