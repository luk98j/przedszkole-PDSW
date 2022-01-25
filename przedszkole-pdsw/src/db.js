import Dexie from "dexie";
import { populate } from "./component/Populate";

export const db = new Dexie("Preschool");
db.version(1).stores({
    users: "++id, username, password, phone, role", // Primary key and indexed props
    children: "++id, username, name, surname",
    meals: "++id, breakfast, dinner, supper"
});

db.on("populate", populate);