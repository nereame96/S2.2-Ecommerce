
"use strict"

// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];


const total = 0;



// Exercise 1
// 1. Loop for to the array products to get the item to add to cart





const findPosition = (id, array = products, property = 'id') => {
    let position = -1

    if(array.length < 1) return position
    
    for (let i = 0; i < array.length; i++) {
        if(array[i][property] == id){
            position = i;
            break;
        }
        
    }

    return position;

}

const updateProductCount = () => {

    let productCount = document.getElementById('count_product')


    const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0 )

    if (productCount) productCount.textContent = totalItems
}





// 2. Add found product to the cart array

const buy = (id) => {

    let productPosition = findPosition(id)

    if (productPosition === -1) return console.log(`Error: Product with ID ${id} not found `)

    let selectedProduct = products[productPosition]


    const cartPosition = findPosition(id, cart, 'id')

    if (cartPosition === -1) {
        const newItem = {...selectedProduct, quantity: 1}
        cart.push(newItem)
        
    } else {
        cart[cartPosition].quantity++
        
    }

    console.log(cart)
    updateProductCount()
}


function addItemToCart(event) {

    const button = event.currentTarget
    const id = parseInt(button.getAttribute('data-product-id'))
    buy(id)
}

// document.addEventListener('DOMContentLoaded', () => {
//     const addButtons = document.querySelectorAll('.add-to-cart')

//     addButtons.forEach(button => {
//         button.addEventListener('click', addItemToCart )
//     })
// })




//FALTA CONTADOR ICONO CESTA, QUE VAYA INDICANDO EL NUM DE ARTICULOS DENTRO





// Exercise 2

// id="clean-cart"


const cleanCartUI = () => {
    
    const finalTotal = 0

    const totalPriceElement = document.getElementById('total_price')

    if(totalPriceElement)  totalPriceElement.textContent = finalTotal.toFixed(2)
    
}


const cleanCart = () =>  {

    cart.length = 0

    cleanCartUI()
    updateCartList(); 

    console.log(cart)

}

// const buttonCleanCart = document.getElementById('clean-cart')

// if (buttonCleanCart) buttonCleanCart.addEventListener('click', cleanCart)






// Exercise 3

// id = 'total_price'

//  class="btn btn-outline-dark cart-button"



const calculateTotal = () =>  {
    // Calculate total price of the cart using the "cartList" array
   

    return cart.reduce((total, item) => total + Number(item.subtotalWithDiscount || 0), 0)
    
}


const updateCartUI = () => {
    const finalTotal = calculateTotal()

    const totalPriceElement = document.getElementById('total_price')

    if(totalPriceElement)  totalPriceElement.textContent = finalTotal
    
}



// document.addEventListener('DOMContentLoaded', () =>{

//     const buttonShowCart = document.querySelector('.cart-button')

//     if(buttonShowCart) {
//         buttonShowCart.addEventListener('click', updateCartUI)
//     }

// }
// )





// Exercise 4
const applyPromotionsCart = () =>  {
    // Apply promotions to each item in the array "cart"
    
    cart.forEach(item => {
    
    let subtotal = item.price * item.quantity

    if( item.offer && item.quantity >= item.offer.number) {

       let discount =  (item.offer.percent / 100) 
       subtotal = (subtotal * (1 - discount)).toFixed(2)
    }

    item.subtotalWithDiscount = subtotal
    console.log(cart)
})

    return calculateTotal()
}


// document.addEventListener('DOMContentLoaded', () =>{

//     const buttonShowCart = document.querySelector('.cart-button')

//     if(buttonShowCart) {
//         buttonShowCart.addEventListener('click', applyPromotionsCart)
//     }

// }
// )





// Exercise 5


const updateCartList = () => {

    const cartListContainer = document.getElementById('cart_list')

    if (!cartListContainer) {
        console.log('Not found')  // pasarlo a return print luego
        return 
    }
        

    cartListContainer.innerHTML = '';

    if (cart.length === 0) {
        
        cartListContainer.innerHTML = '<tr><td colspan="4" class="text-center">No product added</td></tr>';

        updateCartUI()
        updateProductCount()

        return;

        
    }
    cart.forEach(product => {
        
        cartListContainer.innerHTML += printCartRow(product)

    })

    updateCartUI() // Actualiza el precio final
    updateProductCount()
    
} 


const printCartRow = (product) => {
    // Fill the shopping cart modal manipulating the shopping cart dom

    let subtotalDisplay = product.subtotalWithDiscount

    const row = 
        ` 
        <tr>
			<th scope="row">${product.name}</th>
			<td>${product.price}</td>
			<td>${product.quantity}</td>
			<td>${subtotalDisplay}</td>
			<td>
                <button class="btn  btn-md my-0 py-0 remove-item" data-product-id="${product.id}" aria-label="Remove ${product.name} from cart">
                <i class="bi bi-file-minus fs-4 red"></i> 
                
            </button> 
            </td>

		</tr>
        `
    return row    


}

// document.addEventListener('DOMContentLoaded', () =>{

//     const buttonShowCart = document.querySelector('.cart-button')

//     if(buttonShowCart) {
//         buttonShowCart.addEventListener('click', updateCartList)
//     }

// }
// )


// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {

  const cartPosition = findPosition(id, cart, 'id')
  

  if (cartPosition === -1) return;

  const selectedProduct = cart[cartPosition]
   
   
   if (selectedProduct.quantity > 1) {
    
        selectedProduct.quantity--
   }  else if ( selectedProduct.quantity === 1 ){

        cart.splice(cartPosition, 1)
        
        }
     
    applyPromotionsCart()
    updateCartList();

    if (cart.length === 0) {
        cleanCartUI()
    }
}





const open_modal = () =>  {
    printCartRow();

    
}


// document.addEventListener('DOMContentLoaded', () => {
//     const addButtons = document.querySelectorAll('.add-to-cart')

//     addButtons.forEach(button => {
//         button.addEventListener('click', addItemToCart )
//     })

//     const cartListContainer = document.getElementById('cart_list')

//     if (cartListContainer) {
//         cartListContainer.addEventListener('click', (event) => {

//             const targetButton = event.target.closest('.remove-item')

//             if (targetButton) {
//                 const id = targetButton.getAttribute('data-product-id')

//                 if(id) {
//                     removeFromCart(id)
//                 }
//             }
//         })
//     }

//     const buttonCleanCart = document.getElementById('clean-cart')

//     if (buttonCleanCart) buttonCleanCart.addEventListener('click', cleanCart)



//     const buttonShowCart = document.querySelector('.cart-button')

//     if(buttonShowCart) {
//         buttonShowCart.addEventListener('click', updateCartList)
//     }


// })


// 💡 Código final limpio: Todos los event listeners en un solo lugar.
document.addEventListener('DOMContentLoaded', () => {
    
    // Asignación simple para los botones estáticos (Añadir y Limpiar)
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addItemToCart);
    });

    const buttonCleanCart = document.getElementById('clean-cart');
    if (buttonCleanCart) buttonCleanCart.addEventListener('click', cleanCart);

    const buttonShowCart = document.querySelector('.cart-button');
    if (buttonShowCart) {
        // Al mostrar el carrito, aplicamos promociones y lo redibujamos
        buttonShowCart.addEventListener('click', () => {
            applyPromotionsCart();
            updateCartList();
        });
    }

    // Delegación de Eventos para botones de eliminar (DINÁMICOS)
    const cartListContainer = document.getElementById('cart_list');
    if (cartListContainer) {
        cartListContainer.addEventListener('click', (event) => {
            const targetButton = event.target.closest('.remove-item');
            if (targetButton) {
                const id = targetButton.getAttribute('data-product-id');
                if (id) {
                    removeFromCart(id);
                }
            }
        });
    }
});

