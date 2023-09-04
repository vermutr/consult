import React from 'react';
import styles from './BaseForm.module.css';

interface BaseFormProps {
    headerText: string;
    buttonText: string;
    onSubmit: (email: string, password: string) => void;
    email: string;
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    password: string;
    onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BaseForm: React.FC<BaseFormProps> = ({
                                               headerText,
                                               buttonText,
                                               onSubmit,
                                               email,
                                               onEmailChange,
                                               password,
                                               onPasswordChange
                                           }) => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(email, password);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.headerText}>{headerText}</h2>
            <div>
                <input type="email"
                       placeholder="Email address"
                       value={email}
                       onChange={onEmailChange}
                       required
                       className={styles.input}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onPasswordChange}
                    required
                    className={`${styles.input} ${styles.passwordInput}`}
                />
            </div>
            <div>
                <button type="submit" className={styles.button}>{buttonText}</button>
            </div>
        </form>
    );
}

export default BaseForm;