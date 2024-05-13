

import Products from "../pages/admin/Products/Products";
import Home from "../pages/site/Home/Home"
import Basket from "../pages/site/Home/components/Basket/Basket";
import Details from "../pages/site/Home/components/Details/Details";
import AdminRoot from './../pages/admin/AdminRoot';
import SiteRoot from './../pages/site/SiteRoot';


const ROUTES = [
    {
       path: '/',
       element: <SiteRoot/>,
       children: [
         {
            path: "",
            element: <Home/>
        },
        {
         path: "/details/:id",
         element: <Details/>
        },
        {
         path: "/basket",
         element: <Basket/>
        },
        {
            path: "*",
            element: <Error/>
        }

       ]

       
    },
    {
      path: "/admin",
      element: <AdminRoot/>,
      children: [
         {
            path: "",
            element: <Products/>
         }
      ]
    }
]




export default ROUTES