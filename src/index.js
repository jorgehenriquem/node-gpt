import { ChatGPTAPIBrowser } from 'chatgpt'
import dotenv from 'dotenv'


dotenv.config()

const api = new ChatGPTAPIBrowser({
  email: process.env.OPENAI_EMAIL,
  password: process.env.OPENAI_PASSWORD
})
await api.initSession()

const result = await api.sendMessage('poderia criar um poema sobre saudade?')
console.log(result.response)