import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const groupSchema = mongoose.Schema({
  _id: Number,
  gname: {
    type: String,
    required: [true," group Name is required"],
    lowercase: true,
    unique:true,
    trim: true
  }
});

// Apply the uniqueValidator plugin to UserSchema
groupSchema
groupSchema.plugin(uniqueValidator);

// compile schema to model
const groupSchemaModel = mongoose.model('group_collection',groupSchema);

export default groupSchemaModel