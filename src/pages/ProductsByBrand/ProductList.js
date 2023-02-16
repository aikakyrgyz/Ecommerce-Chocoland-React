import "./index.css"
import Kinder from "../../assets/images/kinder.jpeg"
import Data from "../../assets/database/chocolates.json" 
import {Link} from "react-router-dom";


const ProductList = () => {

    let products = JSON.parse(JSON.stringify(Data));

    const lindor = () => {
        let str = "";

        products.forEach(function(product) {
            if(product.brand === "lindor") {
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

    const godiva = () => {
        let str = "";

        products.forEach(function(product) {
            if(product.brand === "godiva") {
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

    const milka = () => {
        let str = "";

        products.forEach(function(product) {
            if(product.brand === "milka") {
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
    
    const ferrero = () => {
        let str = "";

        products.forEach(function(product) {
            if(product.brand === "ferrero") {
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

    const sees = () => {
        let str = "";

        products.forEach(function(product) {
            if(product.brand === "sees") {
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

    const other = () => {
        let str = "";

        products.forEach(function(product) {
            if(product.brand === "other") {
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
                <h2>Godiva</h2>
            </div>

            <div className="center">
                <div id="milk" class="category-content" dangerouslySetInnerHTML={godiva()}>
                </div>
            </div>
        </section>

        <section class="new" id="new">
            <div class="centered-text">
                <h2>Lindt Lindor</h2>
            </div>

            <div className="center">
                <div id="milk" class="category-content" dangerouslySetInnerHTML={lindor()}>
                </div>
            </div>
        </section>

        <section class="new" id="new">
            <div class="centered-text">
                <h2>Milka</h2>
            </div>

            <div className="center">
                <div id="milk" class="category-content" dangerouslySetInnerHTML={milka()}>
                </div>
            </div>
        </section>

        <section class="new" id="new">
            <div class="centered-text">
                <h2>Ferrero</h2>
            </div>

            <div className="center">
                <div id="milk" class="category-content" dangerouslySetInnerHTML={ferrero()}>
                </div>
            </div>
        </section>

        <section class="new" id="new">
            <div class="centered-text">
                <h2>Sees Candy</h2>
            </div>

            <div className="center">
                <div id="milk" class="category-content" dangerouslySetInnerHTML={sees()}>
                </div>
            </div>
        </section>

        <section class="new" id="new">
            <div class="centered-text">
                <h2>Others</h2>
            </div>

            <div className="center">
                <div id="milk" class="category-content" dangerouslySetInnerHTML={other()}>
                </div>
            </div>
        </section>
    </>
}

export default ProductList;