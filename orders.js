// // // Load and display orders
// // function loadOrders() {
// //     const ordersContainer = document.getElementById('orders-container');
// //     const orders = JSON.parse(localStorage.getItem('orders')) || [];
  
// //     ordersContainer.innerHTML = '';
// //     if (orders.length === 0) {
// //       ordersContainer.textContent = 'You have no orders yet.';
// //       return;
// //     }
  
// //     orders.forEach(order => {
// //       const orderElement = document.createElement('div');
// //       orderElement.className = 'order';
  
// //       const orderTitle = document.createElement('h3');
// //       orderTitle.textContent = `Order #${order.id}`;
// //       orderElement.appendChild(orderTitle);
  
// //       const orderDate = document.createElement('p');
// //       orderDate.textContent = `Placed on: ${new Date(order.timestamp).toLocaleString()}`;
// //       orderElement.appendChild(orderDate);
  
// //       const orderItems = document.createElement('ul');
// //       order.items.forEach(item => {
// //         const orderItem = document.createElement('li');
// //         orderItem.textContent = `${item.name} - ${item.quantity} x $${item.price.toFixed(2)}`;
// //         orderItems.appendChild(orderItem);
// //       });
// //       orderElement.appendChild(orderItems);
  
// //       ordersContainer.appendChild(orderElement);
// //     });
// //   }
  
// //   // Initial load
// //   document.addEventListener('DOMContentLoaded', () => {
// //     loadOrders();
// //   });
// function loadOrders() {
//   const orders = JSON.parse(localStorage.getItem('orders')) || [];
//   const orderItemsContainer = document.getElementById('order-items');

//   if (!orderItemsContainer) {
//     console.error("Order items container not found");
//     return;
//   }

//   orderItemsContainer.innerHTML = '';

//   if (orders.length === 0) {
//     orderItemsContainer.textContent = "No orders placed yet.";
//     return;
//   }

//   orders.forEach(order => {
//     const orderItem = document.createElement('div');
//     orderItem.className = 'order-item';

//     const orderDetails = `
//       <p>Order ID: ${order.id}</p>
//       <p>Date: ${new Date(order.date).toLocaleString()}</p>
//       <p>Total Items: ${order.totalItems}</p>
//       <p>Total Price: $${order.totalPrice.toFixed(2)}</p>
//       <ul>
//         ${order.items.map(item => `
//           <li>${item.name} - ${item.quantity} x $${item.price.toFixed(2)}</li>
//         `).join('')}
//       </ul>
//     `;

//     orderItem.innerHTML = orderDetails;
//     orderItemsContainer.appendChild(orderItem);
//   });
// }

// // Call loadOrders when the DOM is loaded
// document.addEventListener('DOMContentLoaded', () => {
//   if (window.location.pathname.endsWith('order.html')) {
//     loadOrders();
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  loadOrders();
});

function loadOrders() {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const ordersContainer = document.getElementById('orders-container');

  if (!ordersContainer) {
    console.error("Orders container element not found");
    return;
  }

  ordersContainer.innerHTML = '';

  if (orders.length === 0) {
    ordersContainer.textContent = "No orders placed yet.";
    return;
  }

  orders.forEach(order => {
    const orderElement = document.createElement('div');
    orderElement.className = 'order';

    const orderId = document.createElement('h3');
    orderId.textContent = `Order ID: ${order.orderId}`;
    orderElement.appendChild(orderId);

    const orderDate = document.createElement('p');
    orderDate.textContent = `Date: ${order.date}`;
    orderElement.appendChild(orderDate);

    const orderItems = document.createElement('ul');
    order.items.forEach(item => {
      const itemElement = document.createElement('li');
      itemElement.textContent = `${item.name} - ${item.quantity} x $${item.price.toFixed(2)}`;
      orderItems.appendChild(itemElement);
    });
    orderElement.appendChild(orderItems);

    const totalItems = document.createElement('p');
    totalItems.textContent = `Total Items: ${order.totalItems}`;
    orderElement.appendChild(totalItems);

    const totalPrice = document.createElement('p');
    totalPrice.textContent = `Total Price: $${order.totalPrice}`;
    orderElement.appendChild(totalPrice);

    ordersContainer.appendChild(orderElement);
  });
}

