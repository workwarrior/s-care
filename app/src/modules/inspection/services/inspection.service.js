import { Inspection } from "../models/inspection.model.js";
import { InspectionRepository } from "../repositories/inspection.repository.js";

export class InspectionService {

    constructor() {
        this.repository = new InspectionRepository();
    }

    async create(data) {

        const inspection = new Inspection(data);

        return this.repository.save(inspection);

    }

    async getAll() {

        return this.repository.getAll();

    }

}