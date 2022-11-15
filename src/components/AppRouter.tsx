import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {publicRoutes} from "../routes";
import {Home} from "../pages/Home/Home";
import {AnimatePresence} from "framer-motion";

const AppRouter = () => {

    const location = useLocation();

    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path.toString()} path={path} element={<Component />}/>
            )}
            <Route
                path="*" element={<Home/>}/>
        </Routes>
        </AnimatePresence>
    );
};

export default AppRouter;