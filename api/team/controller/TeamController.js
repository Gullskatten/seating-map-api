import mongoose from 'mongoose';
import TeamModel from '../model/Team';
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

  static deleteMember(req, res) {
    TeamModel.update({'members._id': new ObjectId(req.params._id) },
                    {$pull: { 'members._id': new ObjectId(req.params._id)}},
                    function (err,val) {
                        res.json("Success");
                    });
  }

  static updateMember(req, res) {
    let member = req.body;

    TeamModel.update({'members._id': member._id},
    {$set: {
    'members.$.availabilityDates': member.availabilityDates,
    'members.$.name': member.name
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
