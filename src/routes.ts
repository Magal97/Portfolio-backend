import express from 'express';
import {celebrate, Joi} from 'celebrate';

import FormController from './controllers/FormController';


const routes = express.Router();

const formController = new FormController();

routes.post('/form', celebrate({
    body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        subject: Joi.string().required(),
        message: Joi.string().required(),
    })
    },
    {
        abortEarly: false,
}), formController.create);
routes.get('/form', formController.show);



export default routes;