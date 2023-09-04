import React from 'react';
import logo from '../../assets/images/logo.svg';
import profile from '../../assets/images/profile.svg';
import logoutIcon from '../../assets/images/logout.svg';
import styles from './Header.module.css';
import {Link} from 'react-router-dom';
import {useAuth} from "../auth/AuthContext";
import {removeLocalStorageItem} from "../../services/auth/StoreItem";

const Header: React.FC = () => {
    const {isLoggedIn, setLoggedIn} = useAuth();

    const handleLogout = () => {
        removeLocalStorageItem('jwtToken');
        removeLocalStorageItem('email');
        setLoggedIn(false);
    }

    return (
        <div className={styles.header}>
            <Link to="/">
                <img src={logo} alt="Логотип" className={styles.logo}/>
            </Link>
            <div className={styles.buttonsContainer}>
                <Link to="/offers">
                    <button className={styles.button}>Offers</button>
                </Link>
                <Link to="/about">
                    <button className={styles.button}>About</button>
                </Link>
                <Link to="/contacts">
                    <button className={styles.button}>Contacts</button>
                </Link>
            </div>

            <div>
                {isLoggedIn &&
                    <Link to="/login">
                        <img src={logoutIcon} alt="Logout" className={styles.logout} onClick={handleLogout}/>
                    </Link>
                }

                <Link to={isLoggedIn ? "/profile" : "/login"}>
                    <img src={profile} alt="Профиль" className={styles.profile}/>
                </Link>
            </div>
        </div>
    );
};

export default Header;





