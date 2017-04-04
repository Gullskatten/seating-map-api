import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import TeamController from '../api/team/controller/TeamController';
import MemberController from '../api/member/controller/MemberController';
import FloorController from '../api/floor/controller/FloorController';

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
app.get('/team/:floor_id', TeamController.findAllTeamsByFloorId);
app.post('/team/add', TeamController.insert);
app.delete('/team/delete/:_id', TeamController.deleteTeam);
app.put('/team/add/member/:team_id', TeamController.insertNewMember);
app.delete('/team/delete/member/:team_id/:_id/', TeamController.deleteMember);
app.put('/team/update/member/', TeamController.updateMember);

// floor
app.get('/floor/all', FloorController.findAll);
app.get('/floor/:_id', FloorController.findById);
app.put('/floor/:_id/:name', FloorController.update);
app.delete('/floor/:_id', FloorController.deleteFloor);
app.post('/floor/add', FloorController.insert);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
