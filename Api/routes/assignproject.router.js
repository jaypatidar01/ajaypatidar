import express from 'express';
const router = express.Router();

//import controller
import * as assignprojectController from '../controller/assignproject.controller.js';

router.post("/save",assignprojectController.save);

router.get("/fetch",assignprojectController.fetch);

router.delete("/delete",assignprojectController.deleteassignproject);

router.patch("/update",assignprojectController.updateassignproject);


export default router;