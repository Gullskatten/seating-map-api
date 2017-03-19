import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import TeamController from '../api/team/controller/TeamController';
import MemberController from '../api/member/controller/MemberController';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/seatdb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Root route.
app.get('/', (req, res) => {
  res.json({
    description: 'Welcome to the Seating-map API'
  });
});

// teams
app.get('/team/all', TeamController.findAll);
app.post('/team/add', TeamController.insert);
app.put('/team/add/member/:team_id', TeamController.insertNewMember);
app.put('/team/delete/member/:_id', TeamController.deleteMember);
app.put('/team/update/member/', TeamController.updateMember);

// members
// app.get('/team/members/', MemberController.findAll);
// app.post('/team/members/add', MemberController.insert);
// app.put('/team/members/update/availability/:_id', MemberController.updateMemberWithNewDate);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
