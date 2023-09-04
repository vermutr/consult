import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthView from "./views/auth/AuthView";
import Header from "./components/header/Header";
import {AuthProvider} from "./components/auth/AuthContext";
import MainPage from "./views/mainpage/MainPage";
import Contacts from "./views/contacts/Contacts";
import About from "./views/about/About";
import ProfilePage from "./views/profile/Profile";
import OffersPage from "./views/offer/OffersPage";
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Header/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/offers" element={<OffersPage/>}/>
                    <Route path="/login" element={<AuthView/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;