import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Team = new Schema({
  teamName: { type: String },
  members: [{
    name: { type: String },
    availabilityDates: { type: [String] }
  }],
});

const TeamModel = mongoose.model('team', Team);

export default TeamModel;
