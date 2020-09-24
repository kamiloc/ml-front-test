const { join }  = require("path");
const cors      = require("cors");
const express   = require("express");

const port      = process.env.PORT || 8000;
const apiRouter = require("./routes/api");
const app       = express();

app.use(cors());
app.use("/api", apiRouter);
app.use(express.static(join(__dirname, '/public')));

app.get("/*", (_, res) => {
  res.sendFile(join(__dirname, "/public/index.html"));
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
