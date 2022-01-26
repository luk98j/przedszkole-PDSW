import { db } from "../db";

export async function populate() {
    console.log("XDDDDDDDDD" )
    await db.users.add([
        { username: "Admin", password: "Admin123", phone: "", role: "ADMIN"},
        { username: "Rodzic", password: "pass123", phone: "321", role: "PARENT" }
    ]);
    await db.children.add([
        { username: "Rodzic", name: "Dziecko1", surname: "nazwisko" },
        { username: "Rodzic", name: "Dziecko2", surname: "nazwisko" },
        { username: "Rodzic", name: "Dziecko3", surname: "nazwisko" }
    ]);
    await db.meals.add([
        { breakfast: "owsianka", dinner: "zupa pomidorowa", supper: "jabłko" },
        { breakfast: "kanapka", dinner: "kotlet mielony", supper: "drożdżówka" },
        { breakfast: "kakao", dinner: "spaghetti", supper: "banan" }
    ]);
}