import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://www.opendota.com/api/',
})
