import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Product from '../pages/Product';
import Checkout from '../pages/Checkout';
import Payment from '../pages/Payment';


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
  },
  {
    path: "/product/:id",
    element: <Product/>
  },
  {
    path: "/checkout",
    element: <Checkout/>
  },
  {
    path: "/payment",
    element: <Payment/>
  },
]);

export {router}