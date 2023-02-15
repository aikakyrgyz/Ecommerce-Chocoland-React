// import main from "./Main.module.css"

import White from "../../assets/images/white.jpg"
import Dark from "../../assets/images/dark.jpg"
import Milk from "../../assets/images/milk.jpg"
import Kinder from "../../assets/images/kinder.jpeg"
import ProductDetail from "../ProductDetail"
import {Link} from "react-router-dom";


const Main = () => {
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
                    <img src={White}></img>
                    <div class="feature-text">
                        <h5>White</h5>
                        <p> 10 items</p>
                    </div>
                    <div class="arrow-into">
                        <a href="#"><i class='bx bx-chevrons-right'></i></a>
                    </div>
                </div>

                <div class="row">
                    <img src={Dark}></img>
                    <div class="feature-text">
                        <h5>Dark</h5>
                        <p> 10 items</p>
                    </div>
                    <div class="arrow-into">
                        <a href="#"><i class='bx bx-chevrons-right'></i></a>
                    </div>
                </div>

                <div class="row">
                    <img src={Milk}></img>
                    <div class="feature-text">
                        <h5>Milk</h5>
                        <p> 10 items</p>
                    </div>
                    <div class="arrow-into">
                        <a href="#"><i class='bx bx-chevrons-right'></i></a>
                    </div>
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

            <div class="new-content">
                <div class="box">
                    <Link to= "/ProductDetail"> <img src={Kinder}></img> </Link>
                    <a href={ProductDetail}> <h5>Lorem</h5> </a>
                    <h6>$188</h6> 
                    <div class="sale">
                        <h4>Sale</h4>
                    </div>
                </div>


                <div class="box">
                <img src={Kinder}></img>
                    <h5>Lorem</h5>
                    <h6>$188</h6> 
                    <div class="sale">
                        <h4>Sale</h4>
                    </div>
                </div>


                <div class="box">
                    <img src={Kinder}></img>
                    <h5>Lorem</h5>
                    <h6>$188</h6> 
                    <div class="sale">
                        <h4>Sale</h4>
                    </div>
                </div>


                <div class="box">
                    <img src={Kinder}></img>
                    <h5>Lorem</h5>
                    <h6>$188</h6> 
                    <div class="sale">
                        <h4>Sale</h4>
                    </div>
                </div>
            </div>
        </section>

        <section class="brand">
            <div class="brand-content">
                <div class="main">
                    <img src={Kinder}></img>    
                </div>
                <div class="main">
                    <img src={Kinder}></img>    
                </div>
                <div class="main">
                    <img src={Kinder}></img>    
                </div>
                <div class="main">
                    <img src={Kinder}></img>
                </div>
                <div class="main">
                    <img src={Kinder}></img>
                </div>
                <div class="main">
                    <img src={Kinder}></img>
                </div>
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