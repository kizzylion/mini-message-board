const express = require("express");
const app = express();
const homeRouter = require("./routes/indexRouter");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

app.use("/", homeRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
