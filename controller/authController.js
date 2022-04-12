import modelUser from "../model/userModel";
import createError from "http-errors";
import bcrypt from 'bcrypt';

export const register = async (req, res, next) => {
    // const { username, password } = req;
    const { body } = req;
    try {
        // check user
        let existUser = await modelUser.findByPhone(body.tel);
        if (!existUser[0]) {
            // dataOption
            let data = {
                username: body.username,
                password: await bcrypt.hash(body.password, 10),
                tel: body.tel,
            }
            //save
            let addUser = await modelUser.create(data);
            // console.log(addUser);
            if (addUser.affectedRows > 0) {
                // find user by id after create
                let data = await modelUser.findOne(addUser.insertId);
                return res.json({ data: data[0], message: "User created successfully" });
            } else {
                throw createError.UnprocessableEntity("Failed creaet");
            }

        } else {
            throw createError.BadRequest("This user is already exist");
        }

    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    const { body } = req;
    try {
        // check user
        let existUser = await modelUser.findByPhone(body.tel);
    
        if (!existUser[0]) {
            // not found
            throw createError.BadRequest("User not register");
        } else {
            // check password match
            let isMatch = await bcrypt.compare(body.password, existUser[0].password);
            if (isMatch) {
                return res.json("Password true")
            } else {
                return res.json("Password false")
            }
        }
    } catch (error) {
        next(error);
    }
}