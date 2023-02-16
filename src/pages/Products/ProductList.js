import "./index.css"
import Kinder from "../../assets/images/kinder.jpeg"
//import Data from "../../assets/database/chocolates.json" 
import {Link} from "react-router-dom";


const ProductList = () => {

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