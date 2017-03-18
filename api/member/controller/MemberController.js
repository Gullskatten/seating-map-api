import mongoose from 'mongoose';
import { MemberModel } from '../model/Member';

class MemberController {
  static findAll(req, res) {
    MemberModel.find({}, (err, docs) => {
      if (err) {
        return res.json({error: err});
      }
      return res.json(docs);
    });
  }

  static findById(req, res) {

  }

  static insert(req, res) {
    const member = new MemberModel(req.body);

    member.save((err) => {
     if (err) {
       return res.json({error: err});
     }
     return res.json({success: "Successfully added a new member"});
    });
  }

  static update(req, res) {

  }

  static destroy() {

  }
}

export default MemberController;
