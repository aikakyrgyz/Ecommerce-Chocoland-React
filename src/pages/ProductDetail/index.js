

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
    
  return <>
      <Navbar/>

      {/* <br/><br/><br/><br/><br/> */}
    <body class="product-detail-body">
      <Container id='productInfo'>
        <Row id='leftside'>
          <Col id="leftside" sm={6}>
            <img id="productImage" src={productInfo.image}/>
          </Col>
          
          <Col id="rightside">
            <h1 class="pd-h1">{productInfo.name}</h1>

            <h3 class="pd-h3">{productInfo.description}</h3>
            {/* <br/> */}
            {/* <h3 class="pd-cost">Cost: ${productInfo.cost}</h3> */}
            {/* <br/> */}
            <h4 class="pd-h4"><span>Flavor:</span> {productInfo.category}</h4>
            <h4 class="pd-h4"><span>Brand:</span> {productInfo.brand}</h4>
            <h4 class="pd-h4"><span>ProductID Number: </span> {productInfo.id}</h4>
            <Link to = "/OrderForm" class="button-product-detail">Order ${productInfo.cost}</Link> 
          </Col>
        </Row>
        
      </Container>

    </body>
    </>
}


export default ProductDetail;
