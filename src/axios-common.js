import axios from "axios";
const instance = axios.create({
  baseURL: "https://genocafe.herokuapp.com/",
});
export default instance;
