import Service from "./service";
import CadastroModel from "../models/cadastroMod";
import Cadastro from "../interfaces/cadastroInt";
import { SimpleModel } from "../models/model";

export class CadastroService extends Service<Cadastro> {
    constructor(model: SimpleModel<Cadastro> = new CadastroModel()) {
        super(model);
    }

    async create(obj: Cadastro): Promise<void> {
        // Implementar todos os métodos abaixo********************************
        return super.create(obj);
    }

    async list(): Promise<Cadastro[]> {
        return super.list();
    }

    async find(id: number): Promise<Cadastro> {
        return super.find(id);
    }
}