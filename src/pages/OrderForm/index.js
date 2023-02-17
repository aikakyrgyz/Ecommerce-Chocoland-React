import "./index.css"
import Navbar from '../../components/Navbar'
import {Link} from "react-router-dom";



function containsNumber(str) {
    return /\d/.test(str);
}


function doesNotContainNumber(str) {
    return !(/\d/.test(str));
}


function validPhoneNumber(phone)
{
    var p = /^\(?([0-9]{3})\)?-([0-9]{3})-([0-9]{4})$/;
    if(phone.match(p))
        return true;
    return false;
}

function validCardNumber(cardNumber)
{
    var validCardNo = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if(cardNumber.match(validCardNo))
        return true;
    return false;
}
 
function validateForm()
{

    console.log("CALLING VALIDATE FORM");
    // productID check
    var productID = document.orderForm.productID;
    console.log(productID.value);
    if(parseInt(productID.value)< 0 ||  parseInt(productID.value)>10)
    {
        alert("Invalid product ID");
        //document.OrderForm.productID.focus() ;
        return false;

    }
    // first Name check
   var firstName = document.orderForm.firstName;
   console.log(firstName.value); 
   if(containsNumber(firstName.value))
   {
        alert("First name cannot contain numbers")
        //document.OrderForm.firstName.focus() ;
        return (false);
   }

   //last name check

   var lastName = document.orderForm.lastName;
   console.log(lastName.value); 
   if(containsNumber(firstName.value))
   {
        alert("Last name cannot contain numbers");
        //document.OrderForm.lastName.focus() ;
        return false;
   }


    // Phone Number check
    var phoneNumber = document.orderForm.phoneNumber;
    console.log(phoneNumber.value);
    if(!validPhoneNumber(phoneNumber.value))
    {
        alert("Improperly formatted phone number " + phoneNumber.value);
        //document.OrderForm.phoneNumber.focus() ;
        return false;
    }

    // Check address
   var address = document.orderForm.address;
   console.log(address.value); 
   if(doesNotContainNumber(address.value))
   {
        alert("Address must contain house/apt number");
        //document.OrderForm.address.focus() ;
        return false;
   }

   // card number check
   var cardNumber = document.orderForm.cardNumber;
   console.log(cardNumber.value); 
   if(!validCardNumber(cardNumber.value))
   {
    alert("Not a valid Visa credit card number!\nMust start with number 4 for visa!");
    //document.OrderForm.lastName.focus() ;
    return false;
   }


   //quantity check
   var quantity = document.orderForm.quantity;
   console.log(quantity.value)
   if (parseInt(quantity.value)<1)
   {
      alert ("You must order 1 or more items");
    //   document.OrderForm.quantity.focus() ;
      return false;
   }

   // check radio button

   var checkRadio = document.querySelector('input[name="shippingRadio"]:checked');
   console.log(checkRadio.value);
   if(checkRadio == null)
   {
        alert("Shipping option is not selected");
        return false;
   }

   return true;

}

function clear()
{
    document.getElementById("orderForm").reset();
}


let oF = document.OrderForm;

// console.log(of)
if(oF){
    oF.addEventListener('submit', function (event) {
    event.preventDefault()

    if (validateForm()) {
        oF.submit()
    } 
    else {
        // Give some sort of error feedback
        oF.classList.add('invalid')
    }
    })
}

const OrderForm = () => {
    return <>
        <Navbar/>
        <body class="body-order-form">
        <section class="form-section">
        <h1 class="title-order-form">Order Form</h1>

            <form method="POST" action="mailto:aikamusiconly@gmail.com" name="orderForm" id="orderForm"  enctype="text/plain" onSubmit={validateForm}>
                <div class="main-box">
                    <div class="input-field">
                        <span class="order-text">Product ID</span>
                        <input type="order-text" name="productID" placeholder="" required></input>
                    </div>

                    <div class="input-field">
                        <span class="order-text">First Name</span>
                        <input type="order-text" name="firstName" placeholder="" required></input>
                    </div>

                    <div class="input-field">
                        <span class="order-text">Last Name</span>
                        <input type="order-text" name="lastName" placeholder="" required></input>
                    </div>

                    <div class="input-field">
                        <span class="order-text">Mobile Number</span>
                        <input type="text" name="phoneNumber" placeholder="000-000-0000" required></input>
                    </div>

                    <div class="input-field">
                        <span class="order-text">Email</span>
                        <input type="email" name="email" placeholder="email@address.com" required></input>
                    </div>

                    <div class="input-field">
                        <span class="order-text">Shipping Address</span>
                        <input type="text" name="address" placeholder="Address must contain house/apt number" required></input>
                    </div>

                    <div class="input-field">
                        <span class="text">Card Number</span>
                        <input type="text" name="cardNumber" placeholder="4111111111111111" required></input>
                    </div>
                    <div class="input-field">
                        <span class="text">Quantity</span>
                        <input type="text" name="quantity" placeholder="1" required></input>
                    </div>
                </div>
                

                <div class = "box-below">
                    <input type="radio" name="shippingRadio" value= "Overnight" id="ShippingOption1"></input>
                    <input type="radio" name="shippingRadio" value = "Next Day" id="ShippingOption2"></input>
                    <input type="radio" name="shippingRadio" value = "No Rush" id="ShippingOption3"></input>

                    <span class="shipping">Shipping</span>
                    <div class="options">
                        <label for="ShippingOption1">
                            <span class="circle c1"></span>
                            <span class="option1">Overnight</span>
                        </label>

                        <label for="ShippingOption2">
                            <span class="circle c2"></span>
                            <span class="option2">Next Day</span>
                        </label>

                        <label for="ShippingOption3">
                            <span class="circle c3"></span>
                            <span class="option3">No Rush</span>
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