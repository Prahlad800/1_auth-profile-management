import Joi from "joi";

export const signupValidation = (req, res, next) => {

    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        number: Joi.string().pattern(/^[0-9]{10}$/).required(),
        password: Joi.string().min(4).max(100).required(),
        DOB: Joi.date().optional()
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: "Bad request", error });
    }

    next();
};



export const loginValidation = (req, res, next) => {

    const schema = Joi.object({
        // name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        // number: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        password: Joi.string().min(4).max(100).required()
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: "Bad request",
            error: error.details[0].message
        });
    }

    next();
};