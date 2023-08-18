import express from 'express'
import {  signin, signup  } from './user.control.js'
import { validation } from '../../middleware/validation.js'
import {  signInSchema, signUpSchema  } from './user.validation.js'

const router=express.Router()

router.post("/signup",validation(signUpSchema),signup)
router.post("/signin",validation(signInSchema),signin)







export default router