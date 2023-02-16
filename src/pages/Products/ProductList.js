import "./index.css"
import Kinder from "../../assets/images/kinder.jpeg"
import Data from "../../assets/database/chocolates.json" 
import {Link} from "react-router-dom";


const ProductList = () => {

    let products = JSON.parse(JSON.stringify(Data));
    
    const white = () => {
        let str = "";

        products.forEach(function(product) {
            if(product.category === "white") {
                str += 
                '<div class="box">'+
                '<a href=../ProductDetail onclick={localStorage.setItem("productId",'+product.id+');}>'+
                '<img class="product-image" src='+product.image+'></img></a>' +
                '<h5>' + product.name + '</h5>' +
                '<h6>$' + product.cost + '</h6>' +
                '</div>';
            }
        
        }); 
        //document.getElementById("white").innerHTML = str;
        return {__html: str}
    };

    const dark = () => {
        let str = "";

        products.forEach(function(product) {
            if(product.category === "dark") {
                str += 
                '<div class="box">'+
                '<a href=../ProductDetail onclick={localStorage.setItem("productId",'+product.id+');}>'+
                '<img class="product-image" src='+product.image+'></img></a>' +
                '<h5>' + product.name + '</h5>' +
                '<h6>$' + product.cost + '</h6>' +
                '</div>';
            }
        
        }); 
        return {__html: str}
    };

    const milk = () => {
        let str = "";

        products.forEach(function(product) {
            if(product.category === "milk") {
                str += 
                '<div class="box">'+
                '<a href=../ProductDetail onclick={localStorage.setItem("productId",'+product.id+');}>'+
                '<img class="product-image" src='+product.image+'></img></a>' +
                '<h5>' + product.name + '</h5>' +
                '<h6>$' + product.cost + '</h6>' +
                '</div>';
            }
        
        }); 
        return {__html: str}
    };
    
    

    return <>
        <section class="new" id="new">
            <div class="centered-text">
                <h2>White</h2>
            </div>

            <div className="center">
                <div id="milk" class="category-content" dangerouslySetInnerHTML={white()}>
                </div>
            </div>
        </section>

        <section class="new" id="new">
            <div class="centered-text" id="darkheader">
                <h2>Dark</h2>
            </div>

            <div className="center">
                <div id="milk" class="category-content" dangerouslySetInnerHTML={dark()}>
                </div>
            </div>
        </section>

        <section class="new" id="new">
            <div class="centered-text" id="milkheader">
                <h2 className="brand-header">Milk</h2>
            </div>
            <div className="center">
                <div id="milk" class="category-content" dangerouslySetInnerHTML={milk()}>
                </div>
            </div>
        </section>
    </>
}

export default ProductList;