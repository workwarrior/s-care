import { AppShell } from "./core/ui/app-shell";
import { Router } from "./core/router/router";
import { subscribe } from "./core/state/app-state";

const app = document.querySelector("#app");

let currentPage = null;

async function render() {

    if (currentPage?.destroy) {
        currentPage.destroy();
    }

    currentPage = await Router();

    app.innerHTML = AppShell(currentPage.html);

    currentPage.bind();

}

subscribe(render);

window.addEventListener("hashchange", render);

render();

import { dbPromise } from "./core/storage";

(async () => {
    const db = await dbPromise;
    console.log("Database Ready:", db.name);
})();

import { databaseService, STORES } from "./core/storage";

(async () => {

    await databaseService.add(STORES.SETTINGS, {
        key: "theme",
        value: "light"
    });

    const settings = await databaseService.getAll(STORES.SETTINGS);

    console.log(settings);

})();

import { InspectionRepository } from "./modules/inspection/repositories/inspection.repository.js";

const repository = new InspectionRepository();

(async () => {

    const saveResult = await repository.save({
        id: crypto.randomUUID(),
        title: "Inspeksi APAR",
        createdAt: new Date().toISOString()
    });

    console.log("SAVE :", saveResult);

    const allResult = await repository.getAll();

    console.log("GET ALL :", allResult);

})();