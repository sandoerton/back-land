export interface SimpleModel<T> {
    create(obj: T): Promise<void>;
    list(): Promise<Partial<T>[]>;
    find(id: number): Promise<Partial<T> | null>;
}