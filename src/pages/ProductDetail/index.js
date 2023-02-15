import "./index.css"

import Navbar from '../../components/Navbar'
import {Link} from "react-router-dom";


const ProductDetail = () => {
    return <>
        <Navbar/>
      <Link to = "/OrderForm" class="button-product-detail">Order</Link> 
    </>
}

export default ProductDetail;