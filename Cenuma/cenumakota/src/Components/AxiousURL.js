import axios from "axios";
import { baseURL } from "../Constants/Constant";



const instance = axios.create({
    baseURL: baseURL,
})

  export default instance