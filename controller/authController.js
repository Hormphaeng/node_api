import modelUser from "../model/userModel";
import createError from "http-errors";
// import { json } from "express/lib/response";

export const register = async (req, res, next) => {
    // const { username, password } = req;
    const { body } = req;
    try {
        // console.log("this username", body.username);
        // return res.json("OK");
        let existUser = await modelUser.findByName(body.username);
        if (!existUser[0]) throw createError.NotFound("User not found");
        return res.json(existUser);
    } catch (error) {
        next(error);
    }
}