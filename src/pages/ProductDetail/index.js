
import "./index.css"
import Data from "../../assets/database/chocolates.json" 

import Navbar from '../../components/Navbar'
import {Link} from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";


const ProductDetail = () => {
  let productInfo = {};

  let products = JSON.parse(JSON.stringify(Data));

  let productIdLocalStorage = localStorage.getItem('productId');


  for(let i of products) {
    if (i.id == productIdLocalStorage) {
      productInfo = i;
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

      <br/><br/><br/><br/><br/>

      <Container id='productInfo'>
        <Row id='leftside'>
          <Col id="leftside" sm={6}>
            <img id="productImage" src={productInfo.image}/>
          </Col>
          
          <Col id="rightside">
            <h1>{productInfo.name}</h1>

            <h3>{productInfo.description}</h3>
            <br/>
            <h3>Cost: ${productInfo.cost}</h3>
            <br/>
            <h4>Flavor: {productInfo.category}</h4>
            <h4>Brand: {productInfo.brand}</h4>
            
            <h4>ProductID Number: {productInfo.id}</h4>
          </Col>
        </Row>
        
      </Container>

    <Link to = "/OrderForm" class="button-product-detail">Order</Link> 
    </>
}


export default ProductDetail;