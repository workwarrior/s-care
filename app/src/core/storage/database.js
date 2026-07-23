import { openDB } from "idb";
import { STORES } from "./stores";

export const DB_NAME = "scare-db";
export const DB_VERSION = 1;

export const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    Object.values(STORES).forEach((store) => {
      if (!db.objectStoreNames.contains(store)) {
        db.createObjectStore(store, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    });
  },
});