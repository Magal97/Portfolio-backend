import {Request, Response} from 'express';
import Form from '../models/Form';

export default class FormController{

    async create(request: Request, response: Response){
        
        const {name, email, subject, message} = request.body;

        const form = await Form.create({
            name,
            email,
            subject,
            message,
        });

        return response.status(200).json(form);

    }

    async show(request: Request, response: Response){
        const forms = await Form.find();

        return response.json(forms);


    }

}