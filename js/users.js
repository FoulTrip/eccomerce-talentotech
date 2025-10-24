import { fetchAPI } from "./utils";

const GetUsers = async () => await fetchAPI("https://fakestoreapi.com/users");
const CreateUser = async (data) => await fetchAPI("https://fakestoreapi.com/users", "POST", data);


