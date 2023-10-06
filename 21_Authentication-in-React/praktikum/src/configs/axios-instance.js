import { APIURL } from "../constants/api-url";
import axios from "axios";

export const AxiosInstance = axios.create({
	baseURL: APIURL.BASE_URL_API,
});
