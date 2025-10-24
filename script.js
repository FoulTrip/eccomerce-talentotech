const products = {
  tecnologia: [
    { id: 1, name: "Laptop Ultraligera", price: 3000, image: "img/tech1.jpg" },
    { id: 2, name: "Auriculares Bluetooth", price: 450, image: "img/tech2.jpg" },
    { id: 3, name: "Smartwatch", price: 700, image: "img/tech3.jpg" },
  ],
  moda: [
    { id: 4, name: "Chaqueta Casual", price: 250, image: "img/fashion1.jpg" },
    { id: 5, name: "Zapatillas Urbanas", price: 400, image: "img/fashion2.jpg" },
    { id: 6, name: "Gafas de Sol", price: 150, image: "img/fashion3.jpg" },
  ],
  hogar: [
    { id: 7, name: "Lámpara Moderna", price: 180, image: "img/home1.jpg" },
    { id: 8, name: "Silla de Oficina", price: 600, image: "img/home2.jpg" },
    { id: 9, name: "Set de Cocina", price: 350, image: "img/home3.jpg" },
  ]
};

let cartData = [];

function renderProducts(categoryId, productArray) {
  const container = document.getElementById(categoryId);
  productArray.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id})">Agregar</button>
    `;
    container.appendChild(div);
  });
}

// Renderizamos cada categoría
renderProducts("tech-carousel", products.tecnologia);
renderProducts("fashion-carousel", products.moda);
renderProducts("home-carousel", products.hogar);

// Carrito
const cartBtn = document.getElementById("cart-btn");
const cart = document.getElementById("cart");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalDisplay = document.getElementById("total");

function addToCart(id) {
  const allProducts = [...products.tecnologia, ...products.moda, ...products.hogar];
  const product = allProducts.find(p => p.id === id);
  const existing = cartData.find(item => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cartData.push({ ...product, quantity: 1 });
  }
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cartData.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} x${item.quantity}
      <strong>$${item.price * item.quantity}</strong>
    `;
    cartItems.appendChild(li);
    total += item.price * item.quantity;
  });

  totalDisplay.textContent = total;
  cartCount.textContent = cartData.reduce((sum, item) => sum + item.quantity, 0);
}

cartBtn.addEventListener("click", () => {
  cart.classList.toggle("hidden");
});

document.getElementById("checkout-btn").addEventListener("click", () => {
  alert("Compra realizada con éxito ✅");
  cartData = [];
  updateCart();
});
