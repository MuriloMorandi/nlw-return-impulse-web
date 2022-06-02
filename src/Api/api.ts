import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3333",
})

export async function sendFeedback({ data }: { data: any }) {
    try {
        return await api.post('/feedback', data)
    } catch (error) {
        console.log(error)
    }
}