import mongoose from 'mongoose';
import { TeamModel } from '../model/Team';
import Member from '../../member/model/Member'
var ObjectId = require('mongoose').Types.ObjectId;

class TeamController {
  static findAll(req, res) {
    TeamModel.find({}, (err, docs) => {
      if (err) {
        return res.json({error: err});
      }
      return res.json(docs);
    });
  }

  static findAllTeamsByFloorId(req, res) {
    TeamModel.find({}).where('floor_id').equals(req.params.floor_id).exec((err, docs) => {
      if (err) {
        return res.json({error: err});
      }
      return res.json(docs);
    }
  );
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

  static insertNewMember(req, res) {
    let newMember = req.body;

    TeamModel.findByIdAndUpdate(
    req.params.team_id,
    {$push: {"members": newMember}},
    {safe: true, upsert: true, new: true},
    function(err, model) {
      if(err) {
        res.json(err);
      } else {
        res.json("Success");
      }
    }
);
  }

  static deleteTeam(req, res) {
      TeamModel.remove({'_id': new ObjectId(req.params._id)},
                      function (err,val) {
                          res.json("Success");
                      });
  }

  static updateTeam(req, res) {
    TeamModel.findByIdAndUpdate(
      req.params.team_id,
      {"x": req.params.x,
      "y": req.params.y},
      {safe: true, upsert: true, new: true},
      function(err, model) {
        if(err) {
          res.json(err);
        } else {
          res.json("Success");
        }
      }
    );
  }


  static deleteMember(req, res) {
    TeamModel.update(
      { _id: req.params.team_id },
      { $pull: { "members" : { _id: req.params._id } } },
      function (err,val) {
          res.json("Success");
      });
  }

  static updateMember(req, res) {
    let member = req.body;

    TeamModel.update({'members._id': member._id},
    {$set: {
    'members.$.availabilityDates': member.availabilityDates,
    'members.$.name': member.name,
    'members.$.team_id' : member.team_id
    }}, function(err) {
      if(err) {
        res.json(err);
      } else {
        res.json("Success");
      }
  })
  }

  static destroy() {

  }
}

export default TeamController;
