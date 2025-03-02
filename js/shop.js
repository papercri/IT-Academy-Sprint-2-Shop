// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let products = [
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
        name: 'Olive Oil',
        price: 15,
        type: 'grocery'
    },
    {
        id: 5,
        name: 'Makeup',
        price: 8,
        type: 'grocery',
        offer: {
            number: 2,
            percent: 40
        }
    },
    {
        id: 6,
        name: 'Butter',
        price: 8,
        type: 'grocery'
    },
    {
        id: 7,
        name: 'Cookies',
        price: 5,
        type: 'grocery'
    },
    {
        id: 8,
        name: 'Bread',
        price: 1,
        type: 'grocery'
    },
    {
        id: 9,
        name: 'Rice',
        price: 5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    }

];

let cart = [];
let total = 0;

// Exercise 1
function buy(id) {
    let product = null;
    let inCart = false;

    for (let i = 0; i < products.length; i++){
        if(products[i].id === id){
            product = products[i];
            break;
        }
    }
  
    for (let i = 0; i < cart.length; i++){
        if (cart[i].id === id){
            cart[i].quantity++;
            inCart = true;
            break;
        } 
        
    }
    if (!inCart){
        cart.push({...product, quantity: 1})
    }
    updateCartCount();
    calculateTotal();
    console.log(cart);
}
function updateCartCount() {
    let totalItems = 0;
    for (let i in cart) {
        totalItems += cart[i].quantity;
    }
    document.getElementById('count_product').textContent = totalItems;
   
}
// Exercise 2
function cleanCart() {
    cart = [];
    updateCartCount();  
    console.log("Cart is empty");
}

// Exercise 3
function calculateTotal() {
    let subTotal = 0;
    total = 0;

    for(let prod = 0; prod < cart.length; prod++){
        if (!isNaN(cart[prod].price) && !isNaN(cart[prod].quantity)) {
          
            subTotal = cart[prod].price * cart[prod].quantity;
            subTotal = applyPromotionsCart(cart[prod], subTotal);
            
            total  += subTotal;
           
        } else {
            console.error(`Error con el producto en el carrito: ${cart[prod].id}`);
        }
       
    }
    
    console.log("Total: " + total);
}

// Exercise 4
function applyPromotionsCart(product, subTotal) {
    let discount = 0;
    if (product.offer && product.offer.number > 0) {
        if (product.quantity >= product.offer.number) {
            discount = product.offer.percent;
            console.log(`Descuento de ${discount}% aplicado al producto ${product.name}`);
        }
    }
    if (discount > 0) {
        subTotal -= subTotal * (discount / 100);
    }
    return subTotal;
}


// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}