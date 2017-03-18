import express from 'express';
import mongoose from 'mongoose';
import TeamController from '../team/controller/TeamController';
const app = express();

mongoose.connect('mongodb://localhost/seatdb');

app.get("/team/all", TeamController.findAll);

app.post("/team/add", TeamController.insert);

app.listen(8080, () => {
  console.log("Server listening on 8080.");
});
