import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Landingmain from "./components/Landingmain";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";


const Landing = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user token exists
        const token = localStorage.getItem("token");
        
        if (token) {
            // Redirect to /explore if token exists
            navigate("/explore", { replace: true });
        }
    }, [navigate]);

    return (
        <>
        <Navbar />
        <Landingmain/>
        <Footer/>
        </>
    );
};

export default Landing;