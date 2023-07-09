import express from 'express';
const router = express.Router();

//import controller
import * as tasksubmisionController from '../controller/tasksubmision.controller.js';

router.post("/save",tasksubmisionController.save);

router.get("/fetch",tasksubmisionController.fetch);

router.delete("/delete",tasksubmisionController.deletetasksubmision);

router.patch("/update",tasksubmisionController.updatetasksubmision);


export default router;