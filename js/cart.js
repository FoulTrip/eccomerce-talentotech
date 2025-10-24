let cartData = [];

const cartBtn = document.getElementById("cart-btn");
const cart = document.getElementById("cart");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalDisplay = document.getElementById("total");

/**
 * Agrega un producto al carrito
 * @param {number} id - ID del producto
 * @param {Array} products - Array de productos disponibles
 */
export function addToCart(id, products) {
  const product = products.find(p => p.id === id);

  if (!product) return;

  const existing = cartData.find(item => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cartData.push({ ...product, quantity: 1 });
  }
  updateCart();
}

/**
 * Actualiza la visualización del carrito
 */
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cartData.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.title} x${item.quantity}
      <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
    `;
    cartItems.appendChild(li);
    total += item.price * item.quantity;
  });

  totalDisplay.textContent = total.toFixed(2);
  cartCount.textContent = cartData.reduce((sum, item) => sum + item.quantity, 0);
}

/**
 * Inicializa los event listeners del carrito
 * @param {Array} products - Array de productos disponibles
 */
export function initCartListeners(products) {
  document.addEventListener("click", (e) => {
    if (e.target.matches(".product button")) {
      const productId = parseInt(e.target.dataset.id);
      addToCart(productId, products);
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.matches(".add-to-cart-btn") || e.target.closest(".add-to-cart-btn")) {
      const button = e.target.closest(".add-to-cart-btn");
      const productId = parseInt(button.dataset.id);
      addToCart(productId, products);
    }
  });

  cartBtn.addEventListener("click", () => {
    cart.classList.toggle("hidden");
  });

  document.getElementById("checkout-btn").addEventListener("click", () => {
    alert("Compra realizada con éxito ✅");
    cartData = [];
    updateCart();
    cart.classList.add("hidden");
  });
}