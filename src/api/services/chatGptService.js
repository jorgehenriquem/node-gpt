require('dotenv').config();


exports.heathCheck = async function (messageChat) { 


    const callChat = await callGpt();  

    console.log(callChat.data.choices); //Return Error with response


    return { responseChat: callChat };  
  };

  async function callGpt(){
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say Hi, just a test",
        temperature: 0,
        max_tokens: 7,
    });
    
    return response;
  }
