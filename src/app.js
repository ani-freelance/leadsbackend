const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", require("./routes/auth.routes"));
app.use("/leads", require("./routes/lead.routes"));
app.use("/ping", require("./routes/ping.routes"));
app.use("/masterdata", require("./routes/masterData.routes"));
app.use("/tenders", require("./routes/tender.routes"));

sequelize.sync();

module.exports = app;