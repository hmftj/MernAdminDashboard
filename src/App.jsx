import { useState } from 'react'
 import { Routes, Route } from 'react-router-dom';
//import {Minus, Plus} from './mymodule/calc';
//import Img from './components/MyImg';
import './App.scss'
import Home from './components/pages/home/Home';
import Customers from './components/pages/customers/Customers';
import LayoutWrapper from './components/layout-wrapper/layoutWrapper';
import ServiceCategories from './components/pages/service-categories/ServiceCategories';
import ServiceProviders from './components/pages/service-providers/ServiceProviders';
import OrdersRecord from './components/pages/orders-record/OrdersRecord'; 
import Help from './components/pages/help/help';

function App() {
  const [count, setCount] = useState(0)

  return (<>

     <Routes>
      <Route path="/" element={<LayoutWrapper />}>
        <Route index element={<Home />} />
        <Route path="service-categories" element={<ServiceCategories />} />
        <Route path="customers" element={<Customers />} />
        <Route path="service-providers" element={<ServiceProviders />} />
        <Route path="orders-record" element={<OrdersRecord />} />
        <Route path="help" element={<Help />} />
      </Route>
    </Routes> 
{/* <h1>my Summ is:<Plus /></h1>
<h1>my Diff is:< Minus /> </h1> <Img></Img>*/}
         

    </>
  )
}

export default App;
