import { ChatGPTAPIBrowser } from 'chatgpt'
import dotenv from 'dotenv'


dotenv.config()

const api = new ChatGPTAPIBrowser({
  email: process.env.OPENAI_EMAIL,
  password: process.env.OPENAI_PASSWORD
})
await api.initSession()

const result = await api.sendMessage('Hello World!')
console.log(result.response)