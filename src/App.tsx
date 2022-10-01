import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {Header} from "./shared/Header/Header";
import {Footer} from "./shared/Footer/Footer";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;
