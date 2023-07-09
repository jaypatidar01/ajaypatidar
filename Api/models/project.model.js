import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const projectSchema = mongoose.Schema({
  _id: Number,
  ptitle:{
    type:String,
    required:[true,"project title is required"],
    lowercase:true,
    unique:true,
    trim:true,
  },
  pstream:{
    type:String,
    required:[true,"project stream is required"],
    lowercase:true,
    trim:true
  },
  pdescription:{
    type:String,
    required:[true,"project pdescription is required"],
    lowercase:true,
    trim:true
  }
});

// Apply the uniqueValidator plugin to UserSchema
projectSchema
projectSchema.plugin(uniqueValidator);

// compile schema to model
const projectSchemaModel = mongoose.model('project_collection',projectSchema);

export default projectSchemaModel