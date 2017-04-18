import mongoose from 'mongoose';
import { Member } from '../../member/model/Member';
const Schema = mongoose.Schema;

const Team = new Schema({
  teamName: { type: String },
  floor_id: { type: String },
  x:        { type: Number },
  y:        { type: Number },
  size:     { type: String },
  members:  [ Member ]
});

const TeamModel = mongoose.model('team', Team);

export { TeamModel, Team };
