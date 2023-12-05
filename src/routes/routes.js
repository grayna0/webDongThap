
import Admin from '../admin/Admin';
import Contact from '../page/contact/Contact';
import Introduction from '../page/introduction/Introduction';
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
    , {
        title: "",
        path:"/admin",
        compoent: Admin
    }
]