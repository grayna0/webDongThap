
import Admin from '../admin/Admin';
import LoginAdmin from '../compoents/auth/LoginAdmin';
import SinginAdmin from '../compoents/auth/SigninAdmin';
import CartList from '../page/cart/CartList';
import Checkout from '../page/checkout/Checkout';
import Contact from '../page/contact/Contact';
import Introduction from '../page/introduction/Introduction';
import ProductDetail from '../page/productdetail/ProductDetail';
// import LayOut from "../compoents/layout";
import Home from './../page/home/Home';
import Shop from './../page/shop/Shop';

 export const router  =[
    {
        title: "Trang Chu",
        path:"/",
        compoent: Home
    },
    {
        title: "San pham",
        path:"/sanpham",
        compoent: Shop
    }
    ,
    {
        title: "Gioi thieu",
        path:"/goithieu",
        compoent: Introduction
    },
    {
        title: "Lien he",
        path:"/lienhe",
        compoent: Contact
    }
    ,
    {
        title: "",
        path:"/cart",
        compoent: CartList
    },
    {
        title: "",
        path:"/checkout",
        compoent: Checkout
    },
    {
        title: "",
        path:"/:id",
        compoent: ProductDetail
    }
    , {
        title: "",
        path:"/admin",
        compoent: Admin
    }
    , {
        title: "",
        path:"/admin/login",
        compoent: LoginAdmin
    }, {
        title: "",
        path:"/admin/singin",
        compoent: SinginAdmin
    }
    , {
        title: "",
        path:"/admin/addProduct",
        compoent: SinginAdmin
    }
]