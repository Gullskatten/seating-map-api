import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Team = new Schema({
  teamName     : String,
  members      : [{
    name              : String,
    availabilityDates :  [Date]
     }],
});

export default mongoose.model('team', Team);
