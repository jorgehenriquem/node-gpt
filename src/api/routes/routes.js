'use strict';
module.exports = function(app) {
var chatGpt = require('../controllers/chatGptController');

app.route('/chat-gpt')
   .post(chatGpt.heathCheck);
};