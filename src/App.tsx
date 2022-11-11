import React from 'react';
import AppRouter from "./components/AppRouter";
import {Header} from "./shared/Header/Header";
import {Footer} from "./shared/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import store from "./store/store";
import {Provider} from "react-redux";
import {Cart} from "./shared/Cart/Cart";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import {Telegram} from "./pages/Telegram/Telegram";


function App() {

    return (
        <Provider store={store}>
            <PersistGate persistor={persistStore(store)} loading={<div>Loading...</div>}>
        <BrowserRouter>
            <Header/>
            <AppRouter/>
            <Cart />
            <Footer/>
        </BrowserRouter>
            </PersistGate>
        </Provider>

    )
}

export default App;
