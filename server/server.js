import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import TeamController from '../api/team/controller/TeamController';
import MemberController from '../api/member/controller/MemberController';

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

// teams
app.get('/team/all', TeamController.findAll);
app.post('/team/add', TeamController.insert);

// members
app.get('/team/members', MemberController.findAll);
app.post('/team/members/add', MemberController.insert);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
