import express  from "express";
const router = express.Router();

import {register} from "../controller/authController";

// authenticate
router.post('/signUp', register);


export default router;