import axios from "axios";

export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
});