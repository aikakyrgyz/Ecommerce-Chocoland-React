### ===================== General Layout of the Pages ===================== </br>

When you first open the site, you are taken to the home page. 
All of the pages includes a navigation bar on the top and if the page is narrow
the naviagation bar moves to the bottom and can be closed if necessary.
On the navigation bar we have buttons to take you to the home, about, flavor, 
and brand page. If can also go to the home page by clicking the site name.

### --------------------------- Home Page ----------------------------- </br>
On this page we have some information of what kind of categories we have which 
is the different flavors of chocolate. For each of these flavors, you can click 
and will take you to the flavor pages to the corrensponding section/flavor.

If move more to the bottom, you will see some of the products in the New Tastes! 
section and can click on those images to take you to the product detail page of that product.

On the bottom in the footer, if you click on some of the words, it will take
 you to scrolling to specific page of the home page.

### ---------------------------About Page-----------------------------</br>

There are 3 pictures of how the product is made, the owners, and the history of the company.

### --------------------------- Flavor Page -----------------------------</br>

Chocolates sorted by their flavor. Clicking one takes the user to the corresponding product page to order it.

### --------------------------- Brand Page -----------------------------</br>

Chocolates sorted by their brands. Clicking one takes the user to the corresponding product page to order it.

### --------------------------- OrderForm Page -----------------------------</br>

When the user chooses a specific product from either the home page,
flavors or brands page, the link will lead to the product-detail page.
On the detail page, when the "order" button is clicked it will 
take the user to the "Order Form" page where the user is able to fill in
the order by specifying:
1. id of the product (which is validated as must be a number in the range
of the possible ids of our products)
2. First Name (validated to not include any numbers nor be empty)
3. Last Name (validated to not inclide any numbers nor be empty)
4. Mobile Number (validated for the US number only in the format of 000-000-0000)
5. Email (must be of existing domain, automatically validated by html)
6. Address (must contain both numbers and characters)
7. Card Number (must be a VISA card number that starts with 4 and contain 16 digits, 
ex:  4111111111111111)
8. Quantity (must order one or more items)
9. Shipping (there are three options where one of them must be chosen in order to proceed)
When the user submits the form all of the data goes through validation, and only if 
the validation is successful and there are no alerts given, the email client will
open up with the body of the email containing the order information. 

### ===================== Requirements Specification ===================== </br>

1.An overview of your business, the products you sell, the management team, and any other 
information that you think makes sense for the customers to know about your company. 

This is satisfied by the Home and About page. 
On the home page there are some links to some of the categories and products we have selling.
On the About page, the information regarding the management team and all other information
about the company.


2.Display a list of products (at least 10) available for sale in a table with multiple rows
 and columns, where each product is shown within a separate cell.

On the Flavor and Brand page, all of the products are listed by the categories and 
each product have its own cell to display the product's image, name, and cost.
The more products there are, the more rows there will be added on to each category
and will change depending the window size.


3.Display an image for each product available for sale in each cell.

All products shown in the Flavor and Brand page have its own cell and show an image of the product.


4.Display the price and other key information (e.g., color, material, etc.) associated with 
each product in the corresponding table cell.

In the flavor and brand page, each product shows the name, cost, and image in each cell.


5.The user should be able to choose a product from this table by clicking on the corresponding 
image, which should lead to a new page that provides additional details about the product,
 e.g., more images, detailed description, etc. 

From the flavor and brand pages, the user can click on any of the products to get more information
regarding it. In the product detail page, it shows the image, name, description, cost, brand name,
flavor, and the product id of the product. 


6.On the detailed description page, the user should be able to order a product by filling a form.
 The form should allow the user to enter the product identifier, quantity, first name, last name, 
 phone number, shipping address, shipping method (e.g., overnight, 2-days expedited, 6-days ground), 
 credit card information, and anything else that you think makes sense for your business.

On the product detail page, it has a button on the bottom to take the user to another page to fill out
the order form. This order form includes product identifier, quantity, first name, last name, phone number, 
shipping address, credit card information, and shipping method. 


7.Upon submitting the form, the website should send an email with the purchase order information 
included in the body of the email. Note that to send an email, one needs to connect to the SMTP 
server, which is not possible with the client-side software. Thus, this requirement simply 
requires bringing up the email client with the purchase order information included in the body 
of the email and allowing the user to send the email. 

Once the user correctly inputs all data and click on the submit button, the user will be taken to its 
preset email client page with the information. If the user have their computer set up properly, an email 
will show up with the entered information.
**This may have some error if the computer/email/browser setting was not set up correctly to make 
the email client come up. We had some issues sometimes where it will work and not work for some reason.


8.Before submitting the form, it should be checked for proper formatting, including whether all 
fields are filled properly, whether the phone number, address, and credit card are properly 
formatted, etc. An alarm should be raised if a field is empty or not properly formatted to prevent 
submission of bad data. 

Almost all of the fields have some kind of validation such as not inputting correct formation for 
the phone number or email address. The user cannot send an email if any of the fields are not 
correctly inputted. Any incorrect input will trigger a small window indicating which input was 
wrong when pressing submit.


9.Your website should use CSS for layout and styling. You should create style rules so that 
the general design of the website, mainly the products page, is as close as possible to this image.

Although our product pages are not exactly like the image since we divided it by subcategoies 
the products are listed in a table/grid format. Almost all of the styling is done in the css file.
If you look at the folders in the src->page folder, all of the pages have their own css file.


10.The website should be responsive and mobile friendly.

All of the pages have a navigation bar, that is responsive to the width of the screen.
When the screen becomes narrower, the navigation bar will move to the bottom and is able to close if necessary.
On the home page and about page, the images will change row/column numbers depending on the the width of the window.


11.Provide the ability to to track the mouse movement, such that when the mouse moves over a product image, the size of the image is increased, and when the mouse moves out, the size of the image is returned back to normal. This feature can be implemented on either the page that displays the various products, or on the pages that show the details of each product, or both. 

Almost on all pages where it is clickable, when the mouse hover overs the image, the image respond by decreasing
the size just a little to indicate that it senses the mouse. When the mouse is not hovered over, then the image 
reverts back to its original size.



=====================Automatically Generated Information===================== </br>
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10040054&assignment_repo_type=AssignmentRepo)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

