import express from 'express';
const router = express.Router();

//import controller
import * as groupController from '../controller/group.controller.js';

router.post("/save",groupController.save);

router.get("/fetch",groupController.fetch);

router.delete("/delete",groupController.deletegroup);

router.patch("/update",groupController.updategroup);


export default router;