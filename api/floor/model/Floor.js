import mongoose from 'mongoose';
import { Team } from '../../team/model/Team';

const Schema = mongoose.Schema;

const Floor = new Schema({
  name: { type: String },
  teams: [Team]
})

const FloorModel = mongoose.model('floor', Floor);

export default FloorModel;
