<<<<<<< HEAD
import "./index.css"

import Navbar from '../../components/Navbar'
import {Link} from "react-router-dom";


const ProductDetail = () => {
    return <>
        <Navbar/>
      <Link to = "/OrderForm" class="button-product-detail">Order</Link> 
=======
import "./index.css";
import Navbar from '../../components/Navbar';
import OrderForm from "../../components/OrderForm";

import { ReactDOM } from "react";


import { useState } from 'react';


const ProductDetail = () => {
    
    return (<>
     <Navbar />
     

     <br/>
     <br/>
     <br/>
     <br/>

     <OrderForm />
    
>>>>>>> 1817495bdc8c0923f8d7af975e8403d75460d72f
    </>
    );
}


export default ProductDetail;