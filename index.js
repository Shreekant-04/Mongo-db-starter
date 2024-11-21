const express = require("express");
const app = express();
const morgan = require("morgan");
const indexRoute = require("./routes/indexRoute");
const toDORoute = require("./routes/todoRoutes");

app.use(morgan("dev"));
app.use(express.json());

app.use("/", indexRoute);
app.use("/", toDORoute);

let port = 4000;
app.listen(port, () => {
  console.log("listening on port", port);
});
