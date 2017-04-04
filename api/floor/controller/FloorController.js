import mongoose from 'mongoose';
import FloorModel from '../model/Floor';

class FloorController {
  static findAll(req, res) {
    FloorModel.find({}, (err, docs) => {
      if (err) {
        return res.json({error: err});
      }
      return res.json(docs);
    });
  }

  static findById(req, res) {
    FloorModel.find({"_id": req.params._id}, (err, docs) => {
      if (err) {
        return res.json({error: err});
      }
      return res.json(docs);
    });
  }

  static insert(req, res) {
    const newFloor = new FloorModel(req.body);
    newFloor.save((err, floor) => {
     if (err) {
       return res.json({error: err});
     }
     return res.json(floor);
    });
  }

  static update(req, res) {
    FloorModel.findByIdAndUpdate(
    req.params._id,
    {"name": req.params.name},
    {safe: true, upsert: true, new: true},
    function(err, model) {
      if(err) {
        res.json(err);
      } else {
        res.json("Success");
      }
    });
  }

  static deleteFloor(req, res) {
      FloorModel.remove({"_id": req.params._id},
                      function (err,val) {
                          res.json("Success");
                      });
  }

}

export default FloorController;
