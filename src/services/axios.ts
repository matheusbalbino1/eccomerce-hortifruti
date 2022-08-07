import axios from "axios";

const URL = process.env.URL || "http://locahost:5000/api/fruit/all"

export const api = axios.create({
    baseURL:URL
}
)