const PubSub = {
  publish: function (channel, payload) {  //channel is name of the event - publish input etc. Payload is the data you are trying to send, in this case the number.
   const event = new CustomEvent(channel, {
     detail: payload
   });
   document.dispatchEvent(event);
  },
  subscribe: function (channel, callback ) {
    document.addEventListener(channel, callback);
  }

};

module.exports = PubSub;
