import express from "express";

const PORT = 5000;

const app = express();

app.get("/", (req, res) => {
  res.status(200).json("nu vse ok");
});

app.listen(PORT, () => {
  console.log(`server started ${PORT} port - http://localhost:5000/ `);
});
