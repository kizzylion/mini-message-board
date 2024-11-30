const { Router } = require("express");
const homeRouter = Router();
const {
  getAllMessages,
  getMessageDetail,
  getNewMessage,
  createMessage,
  deleteMessage,
} = require("../controllers/indexRouterController");

homeRouter.get("/", getAllMessages);

homeRouter.get("/new-message", getNewMessage);

homeRouter.get("/:messageId", getMessageDetail);

homeRouter.post("/new-message", createMessage);

homeRouter.delete("/:messageId", deleteMessage);

module.exports = homeRouter;
