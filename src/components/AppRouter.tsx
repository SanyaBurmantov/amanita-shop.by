import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {publicRoutes} from "../routes";
import {Home} from "../pages/Home/Home";

const AppRouter = () => {

    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path.toString()} path={path} element={<Component />}/>
            )}
            <Route
                path="*" element={<Home/>}/>
        </Routes>
    );
};

export default AppRouter;