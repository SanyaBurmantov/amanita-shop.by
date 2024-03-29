import AppRouter from "./components/AppRouter";
import {Header} from "./shared/Header/Header";
import {Footer} from "./shared/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import store from "./store/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import {Background} from "./shared/Background/Background";


function App() {

    return (
        <Provider store={store}>
            <PersistGate persistor={persistStore(store)} loading={<div>Loading...</div>}>
                <BrowserRouter>
                    <Header/>
                    <AppRouter/>
                    <Footer/>
                    <Background/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}

export default App;
