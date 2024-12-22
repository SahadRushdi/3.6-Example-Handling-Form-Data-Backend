var express = require("express");
var db = require("./database.js");
var app = express();

// Enabling CORS
const cors = require("cors");
app.use(
  cors({
    exposedHeaders: ["Const-Length", "X-Foo", "x-Bar"],
    credentials: true,
    origin: "*",
  })
);

// Start server
var HTTP_PORT = 8000;

app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

//HTTP GET method
app.get("/api/products", (req, res, next) => {
  try {
    // SQL query to Select all Data
    var sql = "Select * from products";
    var params = [];

    // Running the SQL query
    db.all(sql, params, (err, rows) => {
      // Error Response
      if (err) {
        res.status(400).json({error : err.message});
        return;
      }

      // Success Response
      res.status(200).json({
        message: "Success",
        data: rows,
      });
    });

  } catch (E) {
    res.status(400).send(E);
  }
});

//HTTP POST method
app.post("/api/products", (req, res, next) => {
  
});
