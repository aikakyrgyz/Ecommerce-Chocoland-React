import "./index.css"
import Navbar from '../../components/Navbar'
import Factory1 from "../../assets/images/factory1.jpg"
import Factory2 from "../../assets/images/factory2.jpg"
import Factory3 from "../../assets/images/factory3.jpg"

const About = () => {

    return <>
        <Navbar/>


        <section class="featured" id="featured">
            <div class="centered-text">
                <h2>Featured Categories</h2>
            </div>

            <div class="about-content">
                <div class="row about-center">
                    <img className="about-image" src={Factory1}></img>
                </div>

                <div class="row about-center">
                    <img className="about-image" src={Factory2}></img>
                </div>

                <div class="row about-center">
                    <img className="about-image" src={Factory3}></img>
                </div>  
            </div>
        </section>

        <section class="featured" id="featured">
            <div class="centered-text border-box">
                <h2>Who We Are?</h2>
            </div>
            <div class="about-content">
                <div class="row about-center border-box">
                    <h1>Orhan Ozbasaran</h1>
                </div>

                <div class="row about-center border-box">
                    <h1>Ayako Kuwayama</h1>
                </div>

                <div class="row about-center border-box">
                    <h1>Aigerim Kubanychbek Kyzy</h1>
                </div>
            </div>
        </section>

        <section class="featured" id="featured">
            <div class="centered-text">
                <p className="border-box">
                    One of the most iconic brands of the Chocoland Group was created in 1982 in Alba, a small town in the hills of Piedmont in Italy. It was inspired by the desire to make all the pleasure of a sophisticated chocolate specialty accessible to a much wider public. Initially sold in Europe, Chocoland soon became the favorite boxed chocolate for millions of people around the world. Today, it is the world leader in its category and is sold in 140 countries across five continents.
                </p>
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


export default About;