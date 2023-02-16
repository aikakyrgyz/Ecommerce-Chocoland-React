import "./index.css"
import Kinder from "../../assets/images/kinder.jpeg"
//import Data from "../../assets/database/chocolates.json" 


const ProductList = () => {
   
    // let request = new XMLHttpRequest();
    // request.open("GET", Data, false);
    // request.send(null);
    // let products = JSON.parse(request.responseText);

    // console.log(products);

    // let products = JSON.parse(Data).products;

   


    let products = [
        {
            "id": 1,
            "name": "Kinder",
            "category": "dilk",
            "description": "Round chocolate with white chocolate filling.",
            "cost": 2,
            "image": "../../assets/images/kinder.jpeg"
        },
        {
            "id": 2,
            "name": "Chocolate bars",
            "category": "dark",
            "description": "Assorted chocolate bars",
            "cost": 3,
            "image": "../../assets/images/bars.jpg"
        },
        {
            "id": 3,
            "name": "Ferrero",
            "category": "dark",
            "description": "Round chocolate truffles",
            "cost": 3,
            "image": "../../assets/images/ferrero.jpeg"
        },
        {
            "id": 4,
            "name": "Milka",
            "category": "milk",
            "description": "Normal Milk Chocolates",
            "cost": 4,
            "image": "../../assets/images/milka.jpeg"
        },
        {
            "id": 5,
            "name": "Assorted Sees Candy Box",
            "category": "dark",
            "description": "Box full of assorted Sees Candy chocolates",
            "cost": 30,
            "image": "../../assets/images/sees.jpg"
        },
        {
            "id": 6,
            "name": "Sees Candy - White Chocolate Box",
            "category": "white",
            "description": "20 pcs of Sees Candy white chocolate!",
            "cost": 35,
            "image": "../../assets/images/seeswhite.jpg"
        },
        {
            "id": 7,
            "name": "Lindt Lindor White Chocolate Truffle",
            "category": "white",
            "description": "A bag of the famous lindt lindor's white chocolate!",
            "cost": 14,
            "image": "../../assets/images/lindorwhite.jpg"
        },
        {
            "id": 8,
            "name": "Godiva White Chocolate Assortment Gift Box",
            "category": "white",
            "description": "A box full of Godiva's white chocolate assortment",
            "cost": 30,
            "image": "../../assets/images/godivawhite.jpg"
        },
        {
            "id": 9,
            "name": "Godiva Milk Chocolate Gift Box",
            "category": "milk",
            "description": "A box of Godiva's milk chocolate!",
            "cost": 28,
            "image": "../../assets/images/godiva.jpg"
        },
        {
            "id": 10,
            "name": "Lindt Lindor Milk Chocolate Candy Truffles",
            "category": "milk",
            "description": "A bag of the famous lindt lindor's milk chocolate!",
            "cost": 14,
            "image": "../../assets/images/lindor.jpg"
        }
    ];

    
    window.onload = function () {
        white();
        dark();
        milk();
    }
    
    const white = () => {
        let str = "";

        products.forEach(function(product) {
            if(product.category === "white") {
                str += 
                '<div class="box">'+
                '<a href=../ProductDetails/'+ product.id+ '>'+
                '<img src='+product.image+'></img></a>' +
                '<h5>' + product.name + '</h5>' +
                '<h6>$' + product.cost + '</h6>' +
                '</div>';
            }
        
        }); 
        document.getElementById("white").innerHTML = str;
    };

    const dark = () => {
        let str = "";

        products.forEach(function(product) {
            if(product.category === "dark") {
                str += '<div class="box">'+
                '<a href=../ProductDetails/'+ product.id+ '>'+
                '<img src='+product.image+'></img></a>' +
                '<h5>' + product.name + '</h5>' +
                '<h6>$' + product.cost + '</h6>' +
                '</div>';
            }
        
        }); 
        document.getElementById("dark").innerHTML = str;
    };

    const milk = () => {
        let str = "";

        products.forEach(function(product) {
            if(product.category === "milk") {
                str += '<div class="box">'+
                '<a href=../ProductDetails/'+ product.id+ '>'+
                '<img src='+product.image+'></img></a>' +
                '<h5>' + product.name + '</h5>' +
                '<h6>$' + product.cost + '</h6>' +
                '</div>';
            }
        
        }); 
        document.getElementById("milk").innerHTML = str;
    };
    
    

    return <>
        <section class="new" id="new">
            <div class="centered-text">
                <h2>White</h2>
            </div>

            <div id="white" class="new-content">
            </div>
        </section>

        <section class="new" id="new">
            <div class="centered-text">
                <h2>Dark</h2>
            </div>

            <div id="dark" class="new-content"> 
            </div>
        </section>

        <section class="new" id="new">
            <div class="centered-text">
                <h2>Milk</h2>
            </div>

            <div id="milk" class="new-content">
            </div>
        </section>
    </>
}

export default ProductList;