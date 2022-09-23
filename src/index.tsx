import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss'
import {BrowserRouter as Router} from "react-router-dom";
import {Header} from "./shared/Header/Header";
import {Footer} from "./shared/Footer/Footer";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>
    <Header />
    <Router>
        <App />
    </Router>
    <Footer />
    </React.StrictMode>
)