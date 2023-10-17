import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Objetivo from '../models/Objetivo';

class ObjetivoController {
    async list(req: Request, res: Response){
        const repository = getRepository(Objetivo);
        const lista = await repository.find();
        return res.json(lista);
    }

    
    //metodos para adicao, alteração, remoção
    async store(req: Request, res: Response){

        const repository = getRepository(Objetivo);//recupera o repositorio de Endereço
        console.log(req.body);
        const end = repository.create(req.body);
        await repository.save(end);
        return res.json(end);
    }

    async delete(req: Request, res: Response){
        try{
            const repository = getRepository(Objetivo);
            const {id} = req.body;
            const end = await repository.findOne({where : {"id" : id }});
            if(end){
                await repository.remove(end);
                return res.sendStatus(204);
            }else{
                return res.sendStatus(404);
            }
        }catch(e:unknown){
        
            console.log(e);
            return res.sendStatus(500);
        }

        }
}

export default new ObjetivoController();