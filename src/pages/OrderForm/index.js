import "./index.css"
import Navbar from '../../components/Navbar'
import {Link} from "react-router-dom";


const OrderForm = () => {
    return <>
        <Navbar/>
        <body class="body-order-form">
        <section class="form-section">
            <h1 class="title-order-form">Order Form</h1>
            <form action="#">
                <div class="main-box">
                    <div class="input-field">
                        <span class="order-text">Product ID</span>
                        <input type="order-text" placeholder="" required></input>
                    </div>

                    <div class="input-field">
                        <span class="order-text">First Name</span>
                        <input type="order-text" placeholder="" required></input>
                    </div>

                    <div class="input-field">
                        <span class="order-text">Last Name</span>
                        <input type="order-text" placeholder="" required></input>
                    </div>

                    <div class="input-field">
                        <span class="order-text">Mobile</span>
                        <input type="Number" placeholder="" required></input>
                    </div>

                    <div class="input-field">
                        <span class="order-text">Email</span>
                        <input type="email" placeholder="" required></input>
                    </div>

                    <div class="input-field">
                        <span class="order-text">Shipping Address</span>
                        <input type="text" placeholder="" required></input>
                    </div>

                    <div class="input-field">
                        <span class="text">Card Number</span>
                        <input type="text" placeholder="" required></input>
                    </div>
                    <div class="input-field">
                        <span class="text">Quantity</span>
                        <input type="text" placeholder="" required></input>
                    </div>
                </div>
                

                <div class = "box-below">
                    <input type="radio" name="shippingRadio" id="ShippingOption1"></input>
                    <input type="radio" name="shippingRadio" id="ShippingOption2"></input>
                    <input type="radio" name="shippingRadio" id="ShippingOption3"></input>

                    <span class="shipping">Shipping</span>
                    <div class="options">
                        <label for="ShippingOption1">
                            <span class="circle c1"></span>
                            <span class="option1">1Day</span>
                        </label>

                        <label for="ShippingOption2">
                            <span class="circle c2"></span>
                            <span class="option2">2Day</span>
                        </label>

                        <label for="ShippingOption3">
                            <span class="circle c3"></span>
                            <span class="option3">noRush</span>
                        </label>

                
                    </div>
                </div>


                <div class="order-button">
                    <input type="submit" value="Order"></input>
                </div>
            </form>
        </section>
        </body>
    </>
}

export default OrderForm;