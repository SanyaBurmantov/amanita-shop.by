import {Suspense} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {publicRoutes} from "../routes";
import {AnimatePresence} from "framer-motion";

const AppRouter = () => {

    const location = useLocation();

    return (
        // <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path.toString()} path={path} element={<Suspense fallback={<div>Loading</div>}>
                    <Component/>
                </Suspense>}/>
            )}
        </Routes>
        // {/*</AnimatePresence>*/}
    );
};

export default AppRouter;