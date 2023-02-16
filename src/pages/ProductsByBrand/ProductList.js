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