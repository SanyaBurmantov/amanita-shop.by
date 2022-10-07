import Admin from "./pages/Admin/Admin";
import {ADMIN_ROUTE, BLOG_ROUTE, HOME_ROUTE, PAYMENT_ROUTE, PRODUCTS_ROUTE, REVIEWS_ROUTE} from "./utils/consts";
import {Home} from "./pages/Home/Home";

import {Blog} from "./pages/Blog/Blog";
import {Reviews} from "./pages/Reviews/components/Reviews";
import {PaymentAndDelivery} from "./pages/Payment-and-delivery/components/Payment-and-delivery";
import Products from "./pages/Products/components/Products";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    }, {
        path: PRODUCTS_ROUTE + '/:id',
        Component: Products
    },{
        path: BLOG_ROUTE,
        Component: Blog
    },{
        path: REVIEWS_ROUTE,
        Component: Reviews
    },{
        path: PAYMENT_ROUTE,
        Component: PaymentAndDelivery
    }
]


