import { NextFunction, Request, Response } from "express";
import BadRequest from "../errors/badRequest";
import NotFound from "../errors/notFound";
import ICadastro from "../interfaces/cadastroInt";
import { CadastroService } from "../services/cadastroServ";

export async function create(req: Request, res: Response, next: NextFunction) {
    const { nome, email, fone } = req.body as ICadastro;
    const cadastroServ = new CadastroService();
    try {
        if (nome === undefined) {
            throw new BadRequest("Você precisa enviar o nome");
        }
        await cadastroServ.create({nome, email, fone});
        return res.status(201).send();
    } catch (err) {
        next(err)
    }
}

export async function list(_req: Request, res: Response, next: NextFunction) {
    const cadastroServ = new CadastroService();
    try {
        const allData = await cadastroServ.list();
        if (!allData) {
            throw new NotFound("Dados não encontrados");
        }
        return res.status(200).json(allData)
    } catch (err) {
        next(err)
    }
}

export async function find(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const cadastroServ = new CadastroService();
    try {
        if (id === undefined) {
            throw new BadRequest("Você precisa enviar o id da busca");
        }
        const user = await cadastroServ.find(+id);
        if (!user) {
            throw new NotFound(`Usuário nº ${id}, não encontrado`);
        }
        return res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}