import "./index.css"
import Kinder from "../../assets/images/kinder.jpeg"
import Data from "../../assets/database/chocolates.json" 
import {Link} from "react-router-dom";


const ProductList = () => {

    let products = JSON.parse(JSON.stringify(Data));

    const categories = () => {
        let str = '<div class="white-chocolate"> <section class="new" id="new"> <div class="centered-text"> <h2 class="category-name">White</h2></div> <div class="new-content" >';
        products.forEach(function(product) {
            if(product.category === "white") {
                str += 
                '<div class="box">'+
                '<a href=../ProductDetail onclick={localStorage.setItem("productId",'+product.id+');}>'+
                '<img src='+product.image+'></img></a>' +
                '<h5>' + product.name + '</h5>' +
                '<h6>Brand: ' + product.brand + '</h6>' +
                '<div class="sale">' + '<h4>$' + product.cost + '</h4></div>' +
                '</div>';
            }
        });
        str += '</div> </section></div>';
        str += '<section class="new" id="new"> <div class="centered-text"> <h2>Dark</h2></div> <div class="new-content" >';
        products.forEach(function(product) {
                if(product.category === "dark") {
                    str += 
                    '<div class="box">'+
                    '<a href=../ProductDetail onclick={localStorage.setItem("productId",'+product.id+');}>'+
                    '<img src='+product.image+'></img></a>' +
                    '<h5>' + product.name + '</h5>' +
                    '<h6>Brand: ' + product.brand + '</h6>' +
                    '<div class="sale">' + '<h4>$' + product.cost + '</h4></div>' +
                    '</div>';
                } 
        }); 
        str += '</div> </section>';
        str += '<div class="milk-chocolate"><section class="new" id="new"> <div class="centered-text"> <h2>Milk</h2></div> <div class="new-content" >';
        products.forEach(function(product) {
            if(product.category === "milk") {
                str += 
                '<div class="box">'+
                '<a href=../ProductDetail onclick={localStorage.setItem("productId",'+product.id+');}>'+
                '<img src='+product.image+'></img></a>' +
                '<h5>' + product.name + '</h5>' +
                '<h6>Brand: ' + product.brand + '</h6>' +
                '<div class="sale">' + '<h4>$' + product.cost + '</h4></div>' +
                    '</div>';
            }
        
        }); 
        str += '</div> </section></div>';



        //document.getElementById("white").innerHTML = str;
        return {__html: str}
    };
    
    

    return <>
        <body class="productList-body" dangerouslySetInnerHTML={categories()}></body>
    </>
}

export default ProductList;