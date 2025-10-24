/**
 * Obtiene todas las categorías únicas de los productos
 * @param {Array} products - Array de productos
 * @returns {Array} Array de categorías únicas
 */
export function getUniqueCategories(products) {
  const categories = products.map(p => p.category).filter(Boolean);
  return [...new Set(categories)];
}

/**
 * Genera el título formateado para mostrar la categoría
 * @param {string} category - Nombre de la categoría
 * @returns {string} Título formateado
 */
export function formatCategoryTitle(category) {
  return category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ');
}

/**
 * Genera el ID del contenedor para la categoría
 * @param {string} category - Nombre de la categoría
 * @returns {string} ID del contenedor
 */
export function generateCategoryId(category) {
  return `${category.toLowerCase().replace(/\s+/g, '-')}-carousel`;
}

/**
 * Renderiza las secciones de categorías dinámicamente
 * @param {Array} categories - Array de categorías
 */
export function renderCategorySections(categories) {
  const container = document.getElementById('categories-container');

  categories.forEach(category => {
    const section = document.createElement('section');
    section.classList.add('category');

    const categoryId = generateCategoryId(category);
    const categoryTitle = formatCategoryTitle(category);

    section.innerHTML = `
      <h2>${categoryTitle}</h2>
      <div class="carousel" id="${categoryId}"></div>
    `;

    container.appendChild(section);
  });
}

/**
 * Renderiza productos en el contenedor de una categoría específica
 * @param {string} categoryId - ID del contenedor HTML
 * @param {Array} productArray - Array de productos a renderizar
 */
export function renderProducts(categoryId, productArray) {
  const container = document.getElementById(categoryId);

  if (!container) return;

  productArray.forEach(p => {
    const article = document.createElement('article');
    article.classList.add('product-card');
    article.innerHTML = `
      <div class="product-image-wrapper">
        <img src="${p.image}" alt="${p.title}" class="product-image" loading="lazy">
      </div>
      <div class="product-content">
        <h3 class="product-title">${p.title}</h3>
        <div class="product-footer">
          <span class="product-price">$${p.price.toFixed(2)}</span>
          <button class="add-to-cart-btn" data-id="${p.id}" aria-label="Agregar ${p.title} al carrito">
            <span class="btn-text">Agregar</span>
          </button>
        </div>
      </div>
    `;
    container.appendChild(article);
  });
}

/**
 * Organiza y renderiza todos los productos por categoría
 * @param {Array} products - Array de productos
 * @param {Array} categories - Array de categorías
 */
export function organizeAndRenderProducts(products, categories) {
  categories.forEach(category => {
    const categoryProducts = products.filter(p => p.category === category);
    const categoryId = generateCategoryId(category);
    renderProducts(categoryId, categoryProducts);
  });
}