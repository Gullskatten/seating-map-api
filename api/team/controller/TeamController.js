import mongoose from 'mongoose';
import TeamModel from '../model/Team';

class TeamController {
  static findAll(req, res) {
    TeamModel.find({}, (err, docs) => {
      if (err) {
        return res.json({error: err});
      }
      return res.json(docs);
    });
  }

  static findById(req, res) {

  }

  static insert(req, res) {
    const newTeam = new TeamModel(req.body);

    newTeam.save((err) => {
     if (err) {
       return res.json({error: err});
     }
     return res.json({success: "Success"});
    });
  }

  static update(req, res) {

  }

  static destroy() {

  }
}

export default TeamController;
