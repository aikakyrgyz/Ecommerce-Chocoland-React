import "./index.css"
import Navbar from '../../components/Navbar'
import ProductList from "./ProductList";


const ProductsByBrand = () => {
    return <>
        <Navbar/>
        <ProductList/>
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

export default ProductsByBrand;