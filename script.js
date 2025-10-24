import { getProducts } from "./js/products.js";
import { initCartListeners } from "./js/cart.js";
import {
    getUniqueCategories,
    renderCategorySections,
    organizeAndRenderProducts,
} from "./js/categories.js";

const products = await getProducts();

const categories = getUniqueCategories(products);
renderCategorySections(categories);
organizeAndRenderProducts(products, categories);

initCartListeners(products);