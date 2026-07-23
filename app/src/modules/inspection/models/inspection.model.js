export class Inspection {

    constructor({
        id = crypto.randomUUID(),
        title = "",
        location = "",
        inspector = "",
        status = "draft",
        createdAt = new Date().toISOString(),
        updatedAt = new Date().toISOString(),
        sync = false
    } = {}) {

        this.id = id;
        this.title = title;
        this.location = location;
        this.inspector = inspector;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.sync = sync;

    }

}