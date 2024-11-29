const { Router } = require("express");
const homeRouter = Router();
const {
  getAllMessages,
  getMessageDetail,
} = require("../controllers/indexRouterController");

homeRouter.get("/", getAllMessages);

homeRouter.get("/new-message", (req, res) => {
  res.render("new-message");
});

homeRouter.get("/message-detail/:messageId", getMessageDetail);

module.exports = homeRouter;
