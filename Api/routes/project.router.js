import express from 'express';
const router = express.Router();

//import controller
import * as projectController from '../controller/project.controller.js';

router.post("/save",projectController.save);

router.get("/fetch",projectController.fetch);

router.delete("/delete",projectController.deleteproject);

router.patch("/update",projectController.updateproject);


export default router;