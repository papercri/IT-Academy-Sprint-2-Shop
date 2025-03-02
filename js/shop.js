// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let products = [
    {
        id: 1,
        name: 'Cooking Oil',
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
        name: 'All-in-1',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero makeup kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-chiffon combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
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
    let subtotalWithoutDiscount = subTotal;
    let subtotalWithDiscount = subTotal;

    if (product.offer && product.offer.number > 0) {
        if (product.quantity >= product.offer.number) {
            discount = product.offer.percent;
           
        }
    }
    if (discount > 0) {
        subtotalWithDiscount -= subtotalWithDiscount * (discount / 100);
        console.log(`Descuento de ${discount}% aplicado al producto ${product.name} y el precio final es de: ${subtotalWithDiscount} en vez que ${subtotalWithoutDiscount}`);
    }
    return subtotalWithDiscount;
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