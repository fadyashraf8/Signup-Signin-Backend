export const validation = (schema) => {
    return (req, res, next) => {
        let { error } = schema.validate(req.body, { abortEarly: false })
        if (error == undefined) {
            next()
        } else {
            res.json(error.details)
           
        }
    }
}