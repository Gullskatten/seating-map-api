import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import TeamController from '../team/controller/TeamController';

const app = express();
const port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/seatdb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root route.
app.get('/', (req, res) => {
  res.json({
    description: 'Welcome to the Seating-map API'
  });
});

app.get('/team/all', TeamController.findAll);

app.post('/team/add', TeamController.insert);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
