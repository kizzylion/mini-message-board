const messageObject = require("../db");

const { v4: uuidv4 } = require("uuid");

const getAllMessages = async (req, res) => {
  try {
    const messages = await messageObject.getMessages();
    res.render("../views/index", { messages });
  } catch (error) {
    res.render("../views/404", { message: error.message });
  }
};

const getMessageDetail = async (req, res) => {
  try {
    const messages = await messageObject.getMessages();
    const message = await messageObject.getMessageById(req.params.messageId);
    if (!message) {
      throw new Error("Message not found");
    }
    res.render("../views/message-detail", { message, messages });
  } catch (error) {
    res.render("../views/404", { message: error.message });
  }
};

const getNewMessage = async (req, res) => {
  const messages = await messageObject.getMessages();
  res.render("../views/new-message", { messages });
};

const createMessage = async (req, res) => {
  const message = req.body;

  message.id = uuidv4();
  message.dateCreated = new Date();
  await messageObject.createMessage(message);
  res.redirect("/");
};

const deleteMessage = async (req, res) => {
  await messageObject.deleteMessage(req.params.messageId);
  res.redirect("/");
};

module.exports = {
  getAllMessages,
  getMessageDetail,
  getNewMessage,
  createMessage,
  deleteMessage,
};
