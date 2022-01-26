import Dexie from "dexie";
import { populate } from "./component/Populate";

export const db = new Dexie("Preschool");
db.version(3).stores({
    users: '++id, username, password, phone, role,[username+password]', // Primary key and indexed props
    children: '++id, username, name, surname',
    meals: '++id, breakfast, dinner, supper'
});
db.open().catch(function (e) {
    console.error("Open failed: " + e.stack);
})

db.on("populate", populate);