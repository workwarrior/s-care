import { BaseRepository } from "../../../core/repository/base.repository.js";
import { LocalDataSource } from "../../../core/datasource/local.datasource.js";
import { STORES } from "../../../core/storage/stores.js";

export class InspectionRepository extends BaseRepository {

    constructor() {
        super(
            new LocalDataSource(STORES.INSPECTION)
        );
    }

}