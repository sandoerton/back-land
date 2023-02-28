import { SimpleModel } from "../models/model";

export default abstract class Service<T> {
    protected model: SimpleModel<T>;
    constructor(model: SimpleModel<T>) {
        this.model = model;
    }

    async create(obj: T): Promise<void> {
        await this.model.create(obj);
    }

    async list(): Promise<T[]> {
        return await this.model.list() as T[];
    }

    async find(id: number): Promise<T> {
        return await this.model.find(id) as T;
    }
}