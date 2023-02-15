import { NavLink } from "react-router-dom";
import React, {useState, useRef} from 'react';
import "./index.css"
import emailjs, {init} from 'emailjs-com';


const OrderForm = () => {
    //init("user_xxxxxxxxxxxxxxxxxxx");
    const form = useRef();

    const [fields, error] = useState("");
    const [productId, setProductId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();

        alert("working");

        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
    }

    const contactSubmit = (e) => {
        e.preventDefault();
    
        if (this.handleValidation()) {
          alert("Form submitted");
        } else {
          alert("Form has errors.");
        }
    }

    const handleChange = (field, e) => {
        let fields = fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    const handleValidation = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
        //Name
        if (!fields["name"]) {
          formIsValid = false;
          errors["name"] = "Cannot be empty";
        }
    
        if (typeof fields["name"] !== "undefined") {
          if (!fields["name"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["name"] = "Only letters";
          }
        }
    
        //Email
        if (!fields["email"]) {
          formIsValid = false;
          errors["email"] = "Cannot be empty";
        }
    
        if (typeof fields["email"] !== "undefined") {
          let lastAtPos = fields["email"].lastIndexOf("@");
          let lastDotPos = fields["email"].lastIndexOf(".");
    
          if (
            !(
              lastAtPos < lastDotPos &&
              lastAtPos > 0 &&
              fields["email"].indexOf("@@") == -1 &&
              lastDotPos > 2 &&
              fields["email"].length - lastDotPos > 2
            )
          ) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
          }
        }
    
        this.setState({ errors: errors });
        return formIsValid;
      }



    
    return <>

    <div className="container">
        <form onSubmit={contactSubmit}>
        <h1 className="text-center">Order Form</h1>
        <div className="form-row">
            <div className="form-group col-md-6">
                <label htmlFor="First Name">Product Identifier</label>
                <input type="text" 
                       className="form-control" 
                       name="productId" 
                       required
                       />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="First Name">First Name</label>
                <input type="text" className="form-control" name="firstName" required/>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="Last Name">Last Name</label>
                <input type="text" className="form-control" name="lastName" required/>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="Last Name">Phone Number</label>
                <input type="text" className="form-control" name="phoneNumber" required/>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="Last Name">Shipping Address</label>
                <input type="text" className="form-control" name="shippingAddress" required />
            </div>
            {/* <div className="form-group col-md-6">
                <label htmlFor="Last Name">Email Address</label>
                <input type="text" 
                       className="form-control" 
                       name="emailAddress"
                       onChange={handleChange(this, "emailAddress")}
                       value={this.state.fields["email"]}
                       required/>
                <span style={{ color: "red" }}>{this.state.errors["emailAddress"]}</span>
            </div> */}
          {/* <div className="form-group col-12">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              name="user_address"
            /> */}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>


        {/* <form onSubmit={handleSubmit}>
            <label>Product Identifier:
                <input 
                    type="text"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)} 
                />
            </label>
            <br/>
            <label>First Name:
                <input 
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} 
                />
            </label>
            <br/>
            <label>Last Name:
                <input 
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} 
                />
            </label>

            <br/>
            <label>Phone Number:
                <input 
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                />
            </label>
            
            <br/>
            <label>Shipping Address:
                <input 
                    type="text"
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)} 
                />
            </label>
            <br/>
            <label>Email Address:
                <input 
                    type="text"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)} 
                />
            </label>
            <br/>
            <input type="submit" />
        </form> */}
    </>
}

export default OrderForm;