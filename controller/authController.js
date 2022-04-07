import modelUser from "../model/userModel";
import createError from "http-errors";
// import { json } from "express/lib/response";

export const register = async (req, res, next) => {
    // const { username, password } = req;
    const { body } = req;
    try {
        console.log("this username", body.username);
        // return res.json("OK");
        let existUser = await modelUser.findByName(body.username);
        console.log(existUser);
    } catch (error) {
        next(error);
    }
}