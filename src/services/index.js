import axios from 'axios'

import { login, user } from './auth'

const client = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  }
})

const auth = {
  login: login(client),
  user: user(client),
}

export {
  auth,
}