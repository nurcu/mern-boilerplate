import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4000/",  //ToDo: use .env
  headers: {
    "Content-type": "application/json"
  }
});