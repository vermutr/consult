import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import BaseForm from "../form/BaseForm";
import {loginService} from "../../services/auth/AuthService";
import {useAuth} from "../auth/AuthContext";
import {setDataWithExpiry} from "../../services/auth/StoreItem";

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {setLoggedIn} = useAuth();

    const handleSubmit = async () => {
        try {
            const data = await loginService(email, password);
            setDataWithExpiry('jwtToken', data.token, 100000);
            setDataWithExpiry('email', email, 100000);
            setLoggedIn(true);
            navigate('/profile');
        } catch (error) {
            navigate('/login');
            setEmail('');
            setPassword('');
        }
    };

    return (
        <BaseForm
            headerText="Sign in with existing account"
            buttonText="Sign In"
            onSubmit={handleSubmit}
            email={email}
            onEmailChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
            password={password}
            onPasswordChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
        />
    );
}

export default SignIn;