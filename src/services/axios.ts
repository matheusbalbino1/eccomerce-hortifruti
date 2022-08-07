import axios from "axios";

const PORT = process.env.PORT || 5000
const URL = process.env.URL || `https://api-hortifruti-eccomerce.herokuapp.com/api/fruit/all`

export const api = axios.create({
    baseURL:URL
}
)