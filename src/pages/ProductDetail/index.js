
import "./index.css"

import Navbar from '../../components/Navbar'
import {Link} from "react-router-dom";


const ProductDetail = () => {
  let product;
  let productInfo = {};
  let productName;

  let products = [
    {
        "id": 1,
        "name": "Kinder",
        "category": "milk",
        "description": "Round chocolate with white chocolate filling.",
        "cost": 2,
        "image": "../../images/kinder.jpeg",
        "brand": "kinder"
    },
    {
        "id": 2,
        "name": "Chocolate bars",
        "category": "dark",
        "description": "Assorted chocolate bars",
        "cost": 3,
        "image": "../../images/bars.jpg",
        "brand": "other"
    },
    {
        "id": 3,
        "name": "Ferrero By Piece",
        "category": "dark",
        "description": "Round chocolate truffles",
        "cost": 3,
        "image": "../../images/ferrero.jpeg",
        "brand": "ferrero"
    },
    {
        "id": 4,
        "name": "Milka",
        "category": "milk",
        "description": "Normal Milk Chocolates",
        "cost": 4,
        "image": "../../images/milka.jpeg",
        "brand": "milka"
    },
    {
        "id": 5,
        "name": "Assorted Sees Candy Box",
        "category": "dark",
        "description": "Box full of assorted Sees Candy chocolates",
        "cost": 30,
        "image": "../../images/sees.jpg",
        "brand": "sees"
    },
    {
        "id": 6,
        "name": "Sees Candy - White Chocolate Box",
        "category": "white",
        "description": "20 pcs of Sees Candy white chocolate!",
        "cost": 35,
        "image": "../../images/seeswhite.jpg",
        "brand": "sees"
    },
    {
        "id": 7,
        "name": "Lindt Lindor White Chocolate Truffle",
        "category": "white",
        "description": "A bag of the famous lindt lindor's white chocolate!",
        "cost": 14,
        "image": "../../images/lindorwhite.jpg",
        "brand": "lindor"
    },
    {
        "id": 8,
        "name": "Godiva White Chocolate Assortment Gift Box",
        "category": "white",
        "description": "A box full of Godiva's white chocolate assortment",
        "cost": 30,
        "image": "../../images/godivawhite.jpg",
        "brand": "godiva"
    },
    {
        "id": 9,
        "name": "Godiva Milk Chocolate Gift Box",
        "category": "milk",
        "description": "A box of Godiva's milk chocolate!",
        "cost": 28,
        "image": "../../images/godiva.jpg",
        "brand": "godiva"
    },
    {
        "id": 10,
        "name": "Lindt Lindor Milk Chocolate Candy Truffles",
        "category": "milk",
        "description": "A bag of the famous lindt lindor's milk chocolate!",
        "cost": 14,
        "image": "../../images/lindor.jpg",
        "brand": "lindor"
    }
  ];

  product = localStorage.getItem('productId');

  //console.log(product);

  for(let i of products) {
    if (i.id == product) {
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