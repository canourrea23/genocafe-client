require("dotenv").config();


const network = () => {
    if (window.location.origin === "https://genocafe-client.herokuapp.com/"){
        return REACT_APP_SEVER_PROD_URL
    } else {
   return REACT_APP_SEVER_URL
    }
}
export default network;