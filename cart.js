
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  if (window.location.pathname.endsWith('cart.html')) {
    loadCartItems();
    document.getElementById('place-order').addEventListener('click', placeOrder);
  }
});

function addToCart(id, name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const productIndex = cart.findIndex(item => item.id === id);
  if (productIndex !== -1) {
    cart[productIndex].quantity += 1;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`${name} added to cart`);
}

function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  loadCartItems();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const cartCountElement = document.getElementById('cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = totalItems;
  }
}

function loadCartItems() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cart-items');
  const totalItemsElement = document.getElementById('total-items');
  const totalPriceElement = document.getElementById('total-price');

  if (!cartItemsContainer || !totalItemsElement || !totalPriceElement) {
    console.error("Cart elements not found");
    return;
  }

  cartItemsContainer.innerHTML = '';
  let totalItems = 0;
  let totalPrice = 0;

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';

    const itemText = document.createElement('span');
    itemText.textContent = `${item.name} - ${item.quantity} x $${item.price.toFixed(2)}`;
    cartItem.appendChild(itemText);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => removeFromCart(item.id);
    cartItem.appendChild(removeButton);

    cartItemsContainer.appendChild(cartItem);

    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  totalItemsElement.textContent = totalItems;
  totalPriceElement.textContent = totalPrice.toFixed(2);
}

// function placeOrder() {
//   localStorage.removeItem('cart');
//   updateCartCount();
//   loadCartItems();
//   const orderMsgElement = document.getElementById('order-msg');
//   if (orderMsgElement) {
//     orderMsgElement.style.display = 'block';
//   }
// }
function placeOrder() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  const newOrder = {
    orderId: Date.now(),
    items: cart,
    totalItems: cart.reduce((total, item) => total + item.quantity, 0),
    totalPrice: cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2),
    date: new Date().toLocaleString()
  };

  orders.push(newOrder);
  localStorage.setItem('orders', JSON.stringify(orders));
  localStorage.removeItem('cart'); // Clear the cart after placing order
  updateCartCount();
  loadCartItems();

  const orderMsgElement = document.getElementById('order-msg');
  if (orderMsgElement) {
    orderMsgElement.style.display = 'block';
    setTimeout(() => {
      orderMsgElement.style.display = 'none';
    }, 3000);
  }
}

