import { RepositoryContract } from "../contracts/repository.contract.js";

export class BaseRepository extends RepositoryContract {

    constructor(dataSource) {
        super();
        this.dataSource = dataSource;
    }

    async get(id) {
        return this.dataSource.get(id);
    }

    async getAll() {
        return this.dataSource.getAll();
    }

    async save(data) {
        return this.dataSource.save(data);
    }

    async delete(id) {
        return this.dataSource.delete(id);
    }

    async clear() {
        return this.dataSource.clear();
    }

}