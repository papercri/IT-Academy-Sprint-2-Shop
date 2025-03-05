let products = [];
let cart = [];
let total = 0;

fetch("./js/products.json")
    .then(response => response.json())
    .then(data => {
        products = data;
    })
    .catch(error => console.error('Errors in products loading', error));

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
    printCart();
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
            console.error(`Error in the cart: ${cart[prod].id}`);
        }
    }
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
    }
    return subtotalWithDiscount;
}

// Exercise 5
function printCart() {
    const cartList = document.getElementById('cart_list');
    const totalPrice = document.getElementById('total_price');
    cartList.innerHTML = "";
    total = 0;

    for (let prod = 0; prod < cart.length; prod++) {
        let product = cart[prod];
        let subTotal = product.price * product.quantity;
        subTotal = applyPromotionsCart(product, subTotal);

        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${product.name}</th>
            <td>$${product.price.toFixed(2)}</td>
            <td>${product.quantity}</td>
            <td>$${subTotal.toFixed(2)}</td>
            <td><button type="button" class="btn-close" onclick="removeFromCart(${product.id})"></button></td>
        `;  
        cartList.appendChild(row);
        total += subTotal;
    }
    totalPrice.textContent = total.toFixed(2);
}
function open_modal() {
    printCart();
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    for (let prod = 0; prod < cart.length; prod++) {
        if (cart[prod].id === id) {
            if(cart[prod].quantity === 1){
                cart.splice(prod, 1);
                break;
            } else {
                cart[prod].quantity --;
            }
        }
    }
    updateCartCount();
    calculateTotal();
    printCart();
}

function open_modal() {
    printCart();
}