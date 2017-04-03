import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Member = new Schema({
  name: { type: String },
  availabilityDates: { type: [String] },
  team_id: { type: String}
})

const MemberModel = mongoose.model('member', Member);

export { MemberModel, Member };
