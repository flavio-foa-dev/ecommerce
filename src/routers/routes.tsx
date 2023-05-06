import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Product from '../pages/Product';
import Checkout from '../pages/Checkout';
import Products from '../pages/Products';


const router = createBrowserRouter([
  {
    path: "*",
    element: <Home/>
  },
  {
    path: "/",
    element: <Home/>
  },{
    path: "/login",
    element: <Login/>
  },{
    path: "/products",
    element: <Products/>
  },
  {
    path: "/product/:id",
    element: <Product/>
  },
  {
    path: "/checkout",
    element: <Checkout/>
  },
]);

export {router}