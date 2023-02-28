import Service from "./service";
import CadastroModel from "../models/cadastroMod";
import ICadastro from "../interfaces/cadastroInt";
import { SimpleModel } from "../models/model";

export class CadastroService extends Service<ICadastro> {
    constructor(model: SimpleModel<ICadastro> = new CadastroModel()) {
        super(model);
    }

    async create(obj: ICadastro): Promise<void> {
        // Implementar todos os métodos abaixo com Middlewares *******************************************************************
        return super.create(obj);
    }

    async list(): Promise<ICadastro[]> {
        return super.list();
    }

    async find(id: number): Promise<ICadastro> {
        return super.find(id);
    }
}