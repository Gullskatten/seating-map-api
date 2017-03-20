import mongoose from 'mongoose';
import { Member } from '../../member/model/Member';
const Schema = mongoose.Schema;

const Team = new Schema({
  teamName: { type: String },
  location: { type: String},
  members: [Member]
});

const TeamModel = mongoose.model('team', Team);

export default TeamModel;
