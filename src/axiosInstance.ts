import axios, { AxiosInstance } from "axios"

export const mockInstance: AxiosInstance = axios.create({ baseURL: import.meta.env.VITE_SERVER_BASE_URL });