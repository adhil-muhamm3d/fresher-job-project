const express = require("express");
const cors = require("cors");

const testroutes = require("./src/routes/testroutes");
const pool = require("./src/config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api",testroutes);

app.get("/", (req, res) => {
  res.send("Backend server running");
});

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Database connection error", err);
  } else {
    console.log("Database connected:", res.rows[0]);
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});