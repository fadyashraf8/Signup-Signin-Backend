import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


import { userModel } from "../../../database/models/user.model.js"
import { catchError } from "../../utils/catchError.js"





export const signup = async (req, res) => {
    try {
        const { first_name, last_name, age, email, password } = req.body
        let user = await userModel.findOne({ email })
        if (user) {
            res.json({ message: "email already exists" })

        } else {
            bcrypt.hash(password, Number(process.env.ROUND), async function (err, hash) {

                let user = await userModel.insertMany({ first_name, last_name, age, email, password: hash })
                //user.save()
                res.json({message:"success",user})
            });
        }
    } catch (error) {
        console.log(error);
    }
}

export const signin = catchError(async (req, res) => {
    const { email, password } = req.body
    let user = await userModel.findOne({ email })
    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            let token = jwt.sign({ useremail: user.email, user_id: user._id }, process.env.JWT_KEY)
            res.json({ message: "success", token })
        } else {
            res.json({ message: "incorrect email or password" })
        }
    } else {
        res.json({ message: "incorrect email or password" })
    }
})







