import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        NProgress.start();
        const timeout = setTimeout(() => {
            NProgress.done();
        },400);

        return () => clearTimeout(timeout); 
    },[location]);

    return (
        <>
        <Outlet/>
        </>
    );
};

export default Layout;