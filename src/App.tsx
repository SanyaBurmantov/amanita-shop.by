import React from 'react';
import {Header} from "./shared/Header/Header";
import {Footer} from "./shared/Footer/Footer";
import {Home} from "./pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Products} from "./pages/Products/components/Products";
import {Blog} from "./pages/Blog/components/Blog";
import {PaymentAndDelivery} from "./pages/Payment-and-delivery/components/Payment-and-delivery";
import {Reviews} from "./pages/Reviews/components/Reviews";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/payment-and-delivery' element={<PaymentAndDelivery/>}/>
                <Route path='/reviews' element={<Reviews/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;
