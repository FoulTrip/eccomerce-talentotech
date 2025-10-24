import { fetchAPI } from "./utils.js"

export const getProducts = async () => await fetchAPI("https://fakestoreapi.com/products");