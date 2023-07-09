
import'../models/connection.js';
import assignprojectSchemaModel from '../models/assignproject.model.js';
import url from "url";


export const save=async(req,res,next)=>{
 var assignprojectList=await assignprojectSchemaModel.find().sort({"_id":-1});
 var _id=(assignprojectList.length==0?1:assignprojectList[0]._id+1);
  var assignprojectDetails={...req.body,"_id":_id,};
 var p=await assignprojectSchemaModel.create(assignprojectDetails);
  if(p)
  return res.status(201).json({"status":true});
else
  return res.status(500).json({"status": false});
}

export const fetch=async (req,res,next)=>{
  var condition_object=url.parse(req.url,true).query;
  var assignprojectList = await assignprojectSchemaModel.find(condition_object);
  if(assignprojectList.length!=0)
    return res.status(201).json(assignprojectList);
  else
  return res.status(500).json({"result": "Server Error"});
  
}

export const deleteassignproject=async(req,res,next)=>{
  var condition_obj=JSON.parse(req.body.condition_obj);          
  var assignprojectList = await assignprojectSchemaModel.find(condition_obj);
  if(assignprojectList.length!=0){
    let result = await assignprojectSchemaModel.deleteMany(condition_obj); 
    if(result)
     return res.status(201).json({"msg":"record deleted successfully...."});
    else
     return res.status(500).json({error:"Server Error"});
  }
  else
    return res.status(404).json({error:"Resource not found"}); 
}

export const updateassignproject=async(req,res,next)=>{
  let aDetails = await assignprojectSchemaModel.findOne(JSON.parse(req.body.condition_obj));
  if(aDetails){
     let result=await assignprojectSchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
     if(result)
      return res.status(201).json({"msg":"record updated successfully"});
     else
      return res.status(500).json({error:"Server Error"});
  }
  else
   return res.status(404).json({error:"request resource not available"});
}




/*import url from 'url';
import '../models/connection.js';
import UserSchemaModel from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';

export const save=async (req,res,next)=>{
 var userList=await UserSchemaModel.find().sort({"_id":-1});
 var _id=userList.length==0?1:userList[0]._id+1;var userDetails={...req.body,"_id":_id,"status":0,"role":"user","info":Date()};    
 var user = await UserSchemaModel.create(userDetails);
 if(user)
   return res.status(201).json({"status":true});
 else
   return res.status(500).json({"status": false});
}

export const fetch=async (req,res,next)=>{
  var condition_object=url.parse(req.url,true).query;
  var userList = await UserSchemaModel.find(condition_object);
  var l=userList.length;
  if(l!=0)
    return res.status(201).json(userList);
  else
    return res.status(500).json({"result": "Server Error"});
}

export const deleteUser=async(req,res,next)=>{
  var condition_obj=JSON.parse(req.body.condition_obj);          
  var user = await UserSchemaModel.find(condition_obj);
  if(user.length!=0){
    let result = await UserSchemaModel.deleteMany(condition_obj); 
    if(result)
     return res.status(201).json({"msg":"record deleted successfully...."});
    else
     return res.status(500).json({error: "Server Error"});
  }
  else
    return res.status(404).json({error: "Resource not found"}); 
}


export const updateUser=async(req,res,next)=>{
  let userDetails = await UserSchemaModel.findOne(JSON.parse(req.body.condition_obj));
  if(userDetails){
     let user=await UserSchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
     if(user)
      return res.status(201).json({"msg":"record updated successfully"});
     else
      return res.status(500).json({error: "Server Error"});
  }
  else
   return res.status(404).json({error: "Requested resource not available"});
}


export const login=async (req,res,next)=>{
  var userDetails=req.body;
  userDetails={...userDetails,"status":1};
  var userList = await UserSchemaModel.find(userDetails);
  var l=userList.length;
  if(l!=0)
  {
    let payload={"subject":userList[0].email};
    let key=rs.generate();
    let token=jwt.sign(payload,key);
    return res.status(201).json({"token":token,"userDetails":userList[0]});
  }
  else
    return res.status(500).json({"token": "error"});
}*/