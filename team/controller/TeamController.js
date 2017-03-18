import mongoose from 'mongoose';
import TeamModel from '../model/Team';

class TeamController {

static findAll(request, response) {
  TeamModel.find({}, function (err, docs) {
  if(err) {
    return response.json({error: err});
  }
  return response.json(docs);
});
}

static findById(request, response) {

}
static update(request, response) {

}
static insert(request, response) {
  const newTeam = new TeamModel(request.body);

  newTeam.save((err) => {
     if (err) {
       return response.json({error: err});
     }
     return response.json({success: "Success"});
  });

}
static destroy() {

}

}

export default TeamController;
