import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {Header} from "./shared/Header/Header";
import {Footer} from "./shared/Footer/Footer";


import {Home} from "./pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Blog} from "./pages/Blog/components/Blog";
import {PaymentAndDelivery} from "./pages/Payment-and-delivery/components/Payment-and-delivery";
import {Reviews} from "./pages/Reviews/components/Reviews";
import Products from "./pages/Products/components/Products";
import store from "./store/store";
import {Provider} from "react-redux";
import {Cart} from "./shared/Cart/Cart";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";



function App() {

    return (
        <Provider store={store}>
            <PersistGate persistor={persistStore(store)} loading={<div>Loading...</div>}>
        <BrowserRouter>
            <Header/>

            <AppRouter/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/payment-and-delivery' element={<PaymentAndDelivery/>}/>
                <Route path='/reviews' element={<Reviews/>}/>
            </Routes>
            <Cart />

            <Footer/>
        </BrowserRouter>
            </PersistGate>
        </Provider>

    )
}

export default App;
