import { dbPromise } from "./database";
import { DatabaseError } from "../errors/database.error";

class DatabaseService {

    async getDB() {
        return await dbPromise;
    }

    async getAll(store) {
        try {
            const db = await this.getDB();
            return await db.getAll(store);
        } catch (err) {
            throw new DatabaseError(err.message);
        }
    }

    async get(store, id) {
        try {
            const db = await this.getDB();
            return await db.get(store, id);
        } catch (err) {
            throw new DatabaseError(err.message);
        }
    }

    async add(store, data) {
        try {
            const db = await this.getDB();
            return await db.add(store, data);
        } catch (err) {
            throw new DatabaseError(err.message);
        }
    }

    async put(store, data) {
        try {
            const db = await this.getDB();
            return await db.put(store, data);
        } catch (err) {
            throw new DatabaseError(err.message);
        }
    }

    async delete(store, id) {
        try {
            const db = await this.getDB();
            return await db.delete(store, id);
        } catch (err) {
            throw new DatabaseError(err.message);
        }
    }

    async clear(store) {
        try {
            const db = await this.getDB();
            return await db.clear(store);
        } catch (err) {
            throw new DatabaseError(err.message);
        }
    }

}

export const databaseService = new DatabaseService();