const axios = require('axios');

class ChatService {
  constructor({ externalUrl }) {
    this.externalUrl = externalUrl;
  }

  async postMessage(message) {
    try {
      let url = this.externalUrl + '/api/schemas/responses?message=' + message;
      const response = await axios.get(url);
      return response.data.items.length > 0 ? response.data.items[0].response_text : []; // Adjust based on actual response structure
    } catch (error) {
      console.error('Error sending message to external service:', error);
      throw error;
    }
  }

  async getDefaultResponse() {
    try {
      let url = this.externalUrl + '/api/schemas/default_message';
      const response = await axios.get(url);
      return response.data.items.length > 0 ? response.data.items[0].response_text : [];
    } catch (error) {
      console.error('Error sending message to external service:', error);
      throw error;
    }
  }
}

module.exports = ChatService;