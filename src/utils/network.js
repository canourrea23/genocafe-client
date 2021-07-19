require("dotenv").config();

const network = () => {
  if (window.location.origin === "https://genocafe-client.herokuapp.com/") {
    return process.env.REACT_APP_SEVER_PROD_URL;
  } else {
    return process.env.REACT_APP_SEVER_URL;
  }
};
export default network;
