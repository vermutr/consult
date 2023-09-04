import React from 'react';
import styles from './MainPage.module.css';
import accounting from '../../assets/images/accounting.svg';
import {Link} from "react-router-dom";


const MainPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <h1>Find Your Numbers Guru!</h1>
                <Link to="/offers">
                    <button className={styles.offersButton}>Click to find offers</button>
                </Link>
            </div>
            <div className={styles.rightSection}>
                <img src={accounting} alt="Accounting woman" className={styles.bigImage}/>
            </div>
        </div>
    );
};

export default MainPage;