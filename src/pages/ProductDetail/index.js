
import "./index.css"
import Data from "../../assets/database/chocolates.json" 

import Navbar from '../../components/Navbar'
import {Link} from "react-router-dom";


const ProductDetail = () => {
  let productInfo = {};

  let products = JSON.parse(JSON.stringify(Data));

  let productIdLocalStorage = localStorage.getItem('productId');


  for(let i of products) {
    if (i.id == productIdLocalStorage) {
      productInfo = i;
      //console.log(productInfo);
      break;
    }
  }

  function convertToHtml() {
    // let str = "";

    // str += 
    //       //'<img src='+product.image+'> </img>'+
    //         '<h1>' + product.name + '</h1>'+
    //         '<h2>' + product.description + '</h2>' +
    //         '<h2>$' + product.cost + '</h2>';

    // document.getElementById("productInfo").innerHTML = str;
  
  }
    
  
    
  return <>
      <Navbar/>

      <br/><br/><br/><br/>

      <div id='productInfo'>
        <h1>{productInfo.name}</h1>
        <h3>{productInfo.description}</h3>
        <h3>${productInfo.cost}</h3>
        <img src={productInfo.image}/>
      </div>

    <Link to = "/OrderForm" class="button-product-detail">Order</Link> 
    </>
}


export default ProductDetail;