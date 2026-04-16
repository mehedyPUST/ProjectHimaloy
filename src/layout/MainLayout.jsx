// src/layout/MainLayout.jsx
import React from 'react';
import Navbar from '../components/navBar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';
import FriendsContext from '../context/FriendsContext'; // Changed import

const MainLayout = () => {
    return (
        <FriendsContext>
            <div>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </FriendsContext>
    );
};

export default MainLayout;