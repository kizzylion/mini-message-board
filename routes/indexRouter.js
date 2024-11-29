const { Router } = require("express");
const homeRouter = Router();
const {
  getAllMessages,
  getMessageDetail,
  getNewMessage,
  createMessage,
} = require("../controllers/indexRouterController");

homeRouter.get("/", getAllMessages);

homeRouter.get("/new-message", getNewMessage);

homeRouter.get("/:messageId", getMessageDetail);

homeRouter.post("/new-message", createMessage);

module.exports = homeRouter;
