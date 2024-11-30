const express = require("express");
const app = express();
const homeRouter = require("./routes/indexRouter");

require("dotenv").config();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

app.use("/", homeRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
