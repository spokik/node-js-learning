import express from "express";

const PORT = 5000;

const app = express();

app.get("/", (req, res) => {
  console.log(req.query);
  res.status(200).json("Ну нормалек все");
});

app.listen(PORT, () => {
  console.log(`server started ${PORT} port - http://localhost:5000/ `);
});
