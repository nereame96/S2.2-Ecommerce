# IT Academy Shop - Cart Demo

This is a frontend e-commerce project developed with vanilla JavaScript (ES6+), focusing on the logic for a dynamic shopping cart and product promotions.


## Main Features

The application handles the complete lifecycle of products and includes essential checkout features:

Add & Remove: Users can add products (increasing quantity) and remove products (decreasing quantity, or deleting the item if quantity is 1).

Dynamic Promotions: Discounts are automatically calculated and applied (e.g., Oil: 20% off for 3+ units; Cupcakes: 30% off for 10+ units).

Total Calculation: Calculates the final price, including all applied discounts.

Sign In Validation: The checkout form (checkout.js) validates all fields for mandatory presence, minimum length (3 chars), and specific formats (letters-only, numbers-only, and email/password patterns).

Dynamic UI: The cart modal updates in real-time, displaying quantities, subtotals, and the final price.

Item Counter: The cart badge updates to show the total number of items in the cart.

Clean Code: Uses modern JavaScript methods like reduce() and Event Delegation for efficient code.


## How to Run

Clone the repository.

Open the project folder.

Open index.html in your web browser.


## Live Demo 

You can also view the e-commerce project hosted live here:

https://nereame96.github.io/S2.2-Ecommerce/


## Files & Structure

The core logic is implemented in the following files:

js/shop.js: Contains all the cart functions (buy, removeFromCart, applyPromotionsCart, updateCartList). This is where the main cart logic resides.

js/checkout.js: Contains the form validation logic for the checkout page.

index.html: The main interface showing the products and the cart modal.

## Autor

Nerea Medina Carrasco

GitHub : https://github.com/nereame96