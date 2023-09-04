import React from 'react';
import styles from './AuthView.module.css';
import SignIn from "../../components/signIn/SignIn";  // We'll also need a corresponding CSS for this
import Register from "../../components/register/Register";  // We'll also need a corresponding CSS for this

const AuthView: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.welcomeSection}>
                <h1>Welcome to Verrom Account</h1>
                <p>We are glad that you are using our website.</p>
                <p>We will do everything to make you feel comfortable!</p>
            </div>
            <div className={styles.formsSection}>
                <SignIn/>
                <Register/>
            </div>
        </div>
    );
}

export default AuthView;