import { DataSourceContract } from "../contracts/datasource.contract.js";
import { dbPromise } from "../storage/database.js";
import { execute } from "../result/result.helper.js";

export class LocalDataSource extends DataSourceContract {

    constructor(storeName) {
        super();
        this.storeName = storeName;
    }

    async db() {
        return await dbPromise;
    }

    async get(id) {
        return execute(async () => {

            const db = await this.db();

            return await db.get(this.storeName, id);

        });
    }

    async getAll() {
        return execute(async () => {

            const db = await this.db();

            return await db.getAll(this.storeName);

        });
    }

    async save(data) {
        return execute(async () => {

            const db = await this.db();

            if (data.id) {
                await db.put(this.storeName, data);
            } else {
                await db.add(this.storeName, data);
            }

            return data;

        });
    }

    async delete(id) {
        return execute(async () => {

            const db = await this.db();

            await db.delete(this.storeName, id);

            return true;

        });
    }

    async clear() {
        return execute(async () => {

            const db = await this.db();

            await db.clear(this.storeName);

            return true;

        });
    }

}