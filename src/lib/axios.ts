import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:5264/api',
  headers: {
    'Content-Type': 'application/json',
  },
})
