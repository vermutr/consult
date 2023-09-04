import React, {useState} from 'react';
import BaseForm from "../form/BaseForm";
import {useNavigate} from "react-router-dom";
import {registerService} from "../../services/auth/AuthService";
import {useAuth} from "../auth/AuthContext";
import {setDataWithExpiry} from "../../services/auth/StoreItem";

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {setLoggedIn} = useAuth();

    const handleSubmit = async (email: string, password: string) => {
        try {
            const data = await registerService(email, password);
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
            headerText="Not registered yet? Create Verrom Account"
            buttonText="Sign up"
            onSubmit={handleSubmit}
            email={email}
            onEmailChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
            password={password}
            onPasswordChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
        />
    );
}

export default Register;