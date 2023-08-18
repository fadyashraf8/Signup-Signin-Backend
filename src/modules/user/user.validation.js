import joi from 'joi'

export const signUpSchema = joi.object({
    first_name: joi.string().min(3).max(30).required(),
    last_name: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    age: joi.number().min(10).max(60).required(),
    password: joi.string().pattern(/^[a-z]{2,}[0-9]{1,}?$/).required(),
    rePassword: joi.ref('password')
})
export const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().pattern(/^[a-z]{2,}[0-9]{1,}?$/).required(),
})



