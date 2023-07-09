import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const tasksubmisionSchema = mongoose.Schema({
  _id:Number,
  info:{
    type:String,
    required:[true,"submision info is required"],
    lowercase:true,
    unique:true,
    trim:true
  },
  submisiontitle:{
    type:String,
    required:[true,"submision title is required"],
    lowercase:true,
    trim:true
  },
  gname:{
    type:String,
    required:[true,"submision group name is required"],
    lowercase:true,
    trim:true
  },
  submisiondescription:{
    type:String,
    required:[true,"submision description is required"],
    lowercase:true,
    trim:true
  },
  filename:{
    type:String,
    required:[true,"submision file name is required"],
    lowercase:true,
    trim:true
  }
  

});

// Apply the uniqueValidator plugin to tasksubmisionSchema
tasksubmisionSchema
tasksubmisionSchema.plugin(uniqueValidator);

// compile schema to model
const tasksubmisionSchemaModel = mongoose.model('tasksubmision_collection',tasksubmisionSchema);

export default tasksubmisionSchemaModel
