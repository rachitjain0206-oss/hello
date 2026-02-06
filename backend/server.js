const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./config/passport");
const passportLib = require("passport");

const response = require("./middleware/response");

const app = express();

(app.use(express.json()), app.use(helmet()));
app.use(morgan("dev"));
app.use(
  cors({
    origin:
      (process.env.ALLOWED_ORIGIN || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean) || "*",
    credentials: true,
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(response);

app.use(passportLib.initialize());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log("MMongoDB connection error: ", err));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/doctor", require("./routes/doctor"));
app.use("/api/patient", require("./routes/patient"));
app.use("/api/appointment", require("./routes/appointment"));

app.get("/health", (req, res) =>
  res.ok({ time: new Date().toISOString() }, "OK"),
);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`server is connected on port ${port}`));
