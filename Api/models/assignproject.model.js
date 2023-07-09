import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const assignprojectSchema = mongoose.Schema({
  _id: Number,
  assignid:{
    type:String,
    required:[true,"project id is required"],
    lowercase:true,
    unique:true,
    trim:true,
  },
  ptitle:{
    type:String,
    required:[true,"project title is required"],
    lowercase:true,
    trim:true
  },
  pgroup:{
    type:String,
    required:[true,"project group is required"],
    lowercase:true,
    trim:true
  },
  pdescription:{
    type:String,
    required:[true,"project description is required"],
    lowercase:true,
    trim:true
  },
  pstartdeath:{
    type:String,
    required:[true,"project startdeath is required"],
    lowercase:true,
    trim:true
  },
  penddeath:{
    type:String,
    required:[true,"project enddeath is required"],
    lowercase:true,
    trim:true
  },
  pinfo:{
    type:String,
    required:[true,"project info is required"],
    lowercase:true,
    trim:true
  }
 
    
  

  
  

});

// Apply the uniqueValidator plugin to UserSchema
assignprojectSchema
assignprojectSchema.plugin(uniqueValidator);

// compile schema to model
const assignprojectSchemaModel = mongoose.model('assignproject_collection',assignprojectSchema);

export default assignprojectSchemaModel