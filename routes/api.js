import express  from "express";
const router = express.Router();

import {register, login} from "../controller/authController";

// authenticate
router.post('/signUp', register);
router.post('/signIn', login);


export default router;