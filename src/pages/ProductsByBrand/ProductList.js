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

    const lindor = () => {
        let str = "";

        products.forEach(function(product) {
            if(product.brand === "lindor") {
                str += 
                '<div class="box">'+
                '<a href=../ProductDetail onclick={localStorage.setItem("productId",'+product.id+');}>'+
                '<img src='+product.image+'></img></a>' +
                '<h5>' + product.name + '</h5>' +
                '<h6>$' + product.cost + '</h6>' +
                '</div>';
            }
        
        }); 
        
        return {__html: str}
    };

    const godiva = () => {
        let str = "";

        products.forEach(function(product) {
            if(product.brand === "godiva") {
                str += 
                '<div class="box">'+
                '<a href=../ProductDetail onclick={localStorage.setItem("productId",'+product.id+');}>'+
                '<img src='+product.image+'></img></a>' +
                '<h5>' + product.name + '</h5>' +
                '<h6>$' + product.cost + '</h6>' +
                '</div>';
            }
        
        }); 
        return {__html: str}
    };

    const milka = () => {
        let str = "";

        products.forEach(function(product) {
            if(product.brand === "milka") {
                str += 
                '<div class="box">'+
                '<a href=../ProductDetail onclick={localStorage.setItem("productId",'+product.id+');}>'+
                '<img src='+product.image+'></img></a>' +
                '<h5>' + product.name + '</h5>' +
                '<h6>$' + product.cost + '</h6>' +
                '</div>';
            }
        
        }); 
        return {__html: str}
    };
    
    const ferrero = () => {
        let str = "";

        products.forEach(function(product) {
            if(product.brand === "ferrero") {
                str += 
                '<div class="box">'+
                '<a href=../ProductDetail onclick={localStorage.setItem("productId",'+product.id+');}>'+
                '<img src='+product.image+'></img></a>' +
                '<h5>' + product.name + '</h5>' +
                '<h6>$' + product.cost + '</h6>' +
                '</div>';
            }
        
        }); 
        return {__html: str}
    };

    const sees = () => {
        let str = "";

        products.forEach(function(product) {
            if(product.brand === "sees") {
                str += 
                '<div class="box">'+
                '<a href=../ProductDetail onclick={localStorage.setItem("productId",'+product.id+');}>'+
                '<img src='+product.image+'></img></a>' +
                '<h5>' + product.name + '</h5>' +
                '<h6>$' + product.cost + '</h6>' +
                '</div>';
            }
        
        }); 
        return {__html: str}
    };

    const other = () => {
        let str = "";

        products.forEach(function(product) {
            if(product.brand === "other") {
                str += 
                '<div class="box">'+
                '<a href=../ProductDetail onclick={localStorage.setItem("productId",'+product.id+');}>'+
                '<img src='+product.image+'></img></a>' +
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
                <h2>Godiva</h2>
            </div>

            <div id="godiva" class="new-content" dangerouslySetInnerHTML={godiva()}>
            </div>
        </section>

        <section class="new" id="new">
            <div class="centered-text">
                <h2>Lindt Lindor</h2>
            </div>

            <div id="lindor" class="new-content" dangerouslySetInnerHTML={lindor()}>
            </div>
        </section>

        <section class="new" id="new">
            <div class="centered-text">
                <h2>Milka</h2>
            </div>

            <div id="milka" class="new-content" dangerouslySetInnerHTML={milka()}>
            </div>
        </section>

        <section class="new" id="new">
            <div class="centered-text">
                <h2>Ferrero</h2>
            </div>

            <div id="ferrero" class="new-content" dangerouslySetInnerHTML={ferrero()}>
            </div>
        </section>

        <section class="new" id="new">
            <div class="centered-text">
                <h2>Sees Candy</h2>
            </div>

            <div id="sees" class="new-content" dangerouslySetInnerHTML={sees()}> 
            </div>
        </section>

        <section class="new" id="new">
            <div class="centered-text">
                <h2>Others</h2>
            </div>

            <div id="other" class="new-content" dangerouslySetInnerHTML={other()}>
            </div>
        </section>
    </>
}

export default ProductList;