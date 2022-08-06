import axios from "axios";
const PORT = process.env.PORT || 5000

export const api = axios.create({
    baseURL:`http://localhost:${PORT}/api/fruit`
}
)