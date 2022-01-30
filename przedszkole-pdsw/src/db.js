import Dexie from "dexie";
import { populate } from "./component/Populate";

export const db = new Dexie("Preschool");
db.version(4).stores({
    users: '++id, username, password, phone, role,[username+password]', // Primary key and indexed props
    children: '++id, username, name, surname, group',
    meals: '++id, breakfast, dinner, supper',
    news: '++id, title, content'
});
db.open().catch(function (e) {
    console.error("Open failed: " + e.stack);
})

db.on("populate", populate);