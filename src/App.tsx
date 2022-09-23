import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {Products} from "./pages/Products/components/Products";
import {Blog} from "./pages/Blog/components/Blog";
import {Reviews} from "./pages/Reviews/components/Reviews";
import {PaymentAndDelivery} from "./pages/Payment-and-delivery/components/Payment-and-delivery";

function App() {

  return (
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/products" element={ <Products /> } />
        <Route path="/payment-and-delivery" element={ <PaymentAndDelivery /> } />
        <Route path="/reviews" element={ <Reviews /> } />
        <Route path="/blog" element={ <Blog /> } />
      </Routes>
  )
}

export default App;
