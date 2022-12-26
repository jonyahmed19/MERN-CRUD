const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limiter");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const { readdirSync } = require("fs");
const path = require("path");
/**
 * Global middlewares
 */
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
// const apiLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
//   standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
//   legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// });
// app.use(apiLimiter);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

/**
 * Development router
 */

app.use(morgan("dev"));

/**
 * Routers calling
 */

readdirSync("./src/routes").map((fileName) =>
  app.use("/api/v1", require(`./src/routes/${fileName}`))
);

// // Add React Front End Routing
// app.get("*", function (req, res) {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is on", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
