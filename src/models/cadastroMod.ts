import { RowDataPacket } from "mysql2";
import conn from "../database/connection";
import Cadastro from "../interfaces/cadastroInt";
import { SimpleModel } from "./model";

const DATABASE = 'cadastro';

export default class CadastroModel implements SimpleModel<Cadastro> {
    
    constructor(private tableName: string = 'Usuarios', private connection = conn){}

    async create(obj: Cadastro): Promise<void> {
        await this.connection.execute(
            `INSERT INTO ${DATABASE}.${this.tableName}
            (nome, email, fone) VALUES (?, ?, ?);`,
            [obj.nome, obj.email, obj.fone]
        );
    }

    async list(): Promise<Partial<Cadastro>[]> {
        const result = await this.connection.execute(
            `SELECT * FROM ${DATABASE}.${this.tableName}`
        );
        const [ allData ] = result;
        return allData as Cadastro[]; 
    }

    async find(id: number): Promise<Partial<Cadastro> | null> {
        const result = await this.connection.execute(
            `SELECT * FROM ${DATABASE}.${this.tableName} AS User
            WHERE User.id = ?;`, [id]
        );
        const [ user ] = result as RowDataPacket[];
        return user[0] as Cadastro;
    }
}
