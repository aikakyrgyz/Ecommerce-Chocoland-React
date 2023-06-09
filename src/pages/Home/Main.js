import "./Main.css"
import White from "../../assets/images/white.jpg"
import Dark from "../../assets/images/dark.jpg"
import Milk from "../../assets/images/milk.jpg"
import Kinder from "../../assets/images/kinder.jpeg"
import Godiva from "../../assets/images/godivalogo.png"
import ProductDetail from "../ProductDetail"
import {Link} from "react-router-dom";
import { HashLink } from "react-router-hash-link"


const Main = () => {
    let products = [
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
            "id": 8,
            "name": "Godiva White Chocolate Assortment Gift Box",
            "category": "white",
            "description": "A box full of Godiva's white chocolate assortment",
            "cost": 30,
            "image": "../../images/godivawhite.jpg",
            "brand": "godiva"
        },

        {
            "id": 1,
            "name": "Kinder",
            "category": "milk",
            "description": "Round chocolate with white chocolate filling.",
            "cost": 2,
            "image": "../../images/kinder.jpeg",
            "brand": "kinder"
        },
      ];

    const sublistCards = () => {
        let str = "";

        products.forEach(function(product) {
            str += 
                '<div class="box">'+
                '<a href=../ProductDetail onclick={localStorage.setItem("productId",'+product.id+');}>'+
                '<img src='+product.image+'></img></a>' +
                '<h5>' + product.name + '</h5>' +
                '<h6>$' + product.cost + '</h6>' +
                '</div>';
        }); 
        return {__html: str}
    };

    return <>
        
        <section className="home" id="home">
            <div className="home-text">
                <h1> New Chocolate <br/> <span> Arrivals</span></h1>
                <p> Swiss chocolate available in bulks!</p>
                <a href="#" class="button">View yummy</a>
            </div>
        </section>

        <section class="featured" id="featured">
            <div class="centered-text">
                <h2>Featured Categories</h2>
            </div>

            <div class="featured-content">
                <div class="row">
                    <HashLink to="../Products#white">
                        <img src={White}></img>
                        <div class="feature-text">
                            <h5>White</h5>
                        </div>
                    </HashLink>
                </div>

                <div class="row">
                    <HashLink to="../Products#darkheader">
                    <img src={Dark}></img>
                    <div class="feature-text">
                        <h5>Dark</h5>
                    </div>
                    </HashLink>
                </div>

                <div class="row">
                    <HashLink to="../Products#milkheader">
                        <img src={Milk}></img>
                        <div class="feature-text">
                            <h5>Milk</h5>
                        </div>
                    </HashLink>
                </div>  
            </div>
        </section>

        <section class="cta">
            <div class="cta-text">
                <h6> Chocolates on Sale</h6>
                <h4> 20% OFF <br/> FERRERO</h4>
                <a href="#" class="button">Shop Now</a>
            </div>
        </section>

        <section class="new" id="new">
            <div class="centered-text">
                <h2>New Tastes!</h2>
            </div>

            {/* <div className="center">
                <div class="category-content" dangerouslySetInnerHTML={sublistCards()}>
                </div>
            </div> */}
            <div class="new-content" dangerouslySetInnerHTML={sublistCards()} >

            </div>


        </section>


        <section class="contact" id="contact">

            <div class="main-contact">
                <h3>ChocoLand</h3>
                <h5>Contact us</h5>
                <div class="icons">
                    <a href="#"><i class='bx bxl-gmail'></i></a>
                    <a href="#"><i class='bx bxl-instagram'></i></a>
                    <a href="#"><i class='bx bxl-facebook-circle'></i></a>
                </div>
            </div>

            <div class="main-contact">
                <h3>Keep browsing</h3>
                <li><a href="#home">Home</a></li>
                <li><a href="#featured">Featured</a></li>
                <li><a href="#new">New</a></li>
                <li><a href="#contact">Contact</a></li>
            </div>

            <div class="main-contact">
                <h3> Services </h3>
                <li><a href="#home">Order</a></li>
                <li><a href="#home">Check order status</a></li>
            </div>
        </section>
    </>
}

export default Main;