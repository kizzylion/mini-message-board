const messageObject = require("../db");

const getAllMessages = async (req, res) => {
  const messages = await messageObject.getMessages();
  res.render("../views/index", { messages });
};

const getMessageDetail = async (req, res) => {
  const message = await messageObject.getMessageById(
    parseInt(req.params.messageId)
  );
  res.render("../views/message-detail", { message });
};

module.exports = { getAllMessages, getMessageDetail };
