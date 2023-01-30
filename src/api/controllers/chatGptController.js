const ChatGptService = require('../services/chatGptService');

exports.heathCheck = async function(req, res) {

    try {
        const callChat = await ChatGptService.heathCheck(req.body)
        res.status(200).send(callChat)
      } catch (err) {
        console.log(err)
        res.status(500).send(err)
      }
};