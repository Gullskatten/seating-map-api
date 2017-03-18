import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Team = new Schema({
  teamName     : String,
  members      : [{
    name              : String,
    availabilityDates :  [Date]
     }],
});

const TeamModel = mongoose.model('team', Team);

export default TeamModel;
