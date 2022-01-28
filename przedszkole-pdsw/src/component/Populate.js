import { db } from "../db";

export async function populate() {
    await db.users.bulkAdd([
        { username: "Admin", password: "Admin123", phone: "", role: "ADMIN"},
        { username: "AnnaNowak", password: "pass123", phone: "321239785", role: "PARENT" },
        { username: "IwonaPolak", password: "pass456", phone: "796321427", role: "PARENT" },
        { username: "AndrzejZdun", password: "pass789", phone: "69213742", role: "PARENT" },
        { username: "AdamKielbasa", password: "pass216", phone: "797536574", role: "PARENT" },
        { username: "KatarzynaKowal", password: "pass379", phone: "253689425", role: "PARENT" }
    ]);
    await db.children.bulkAdd([
        { username: "AnnaNowak", name: "Sebastian", surname: "Nowak", group: "1a"},
        { username: "AnnaNowak", name: "Jessica", surname: "Nowak", group: "2a"},
        { username: "IwonaPolak", name: "Jozef", surname: "Polak",group: "2b" },
        { username: "AndrzejZdun", name: "Joanna", surname: "Zdun",group: "3a"},
        { username: "AndrzejZdun", name: "Krystyna", surname: "Zdun",group: "3b"},
        { username: "AndrzejZdun", name: "Jan", surname: "Zdun",group: "1a"},
        { username: "AdamKielbasa", name: "Adrian", surname: "Kielbasa",group: "1a" },
        { username: "AdamKielbasa", name: "Piotr", surname: "Kielbasa",group: "2a" },
        { username: "AdamKielbasa", name: "Lukasz", surname: "Kielbasa",group: "2a"  },
        { username: "AdamKielbasa", name: "Natalia", surname: "Kielbasa" ,group: "3b" },
        { username: "KatarzynaKowal", name: "Irena", surname: "Kowal",group: "3a"  }
    ]);
    await db.meals.bulkAdd([
        { breakfast: "naleśnik", dinner: "rosół", supper: "batonik" },
        { breakfast: "owsianka", dinner: "zupa pomidorowa", supper: "jabłko" },
        { breakfast: "kanapka", dinner: "kotlet mielony", supper: "drożdżówka" },
        { breakfast: "kakao", dinner: "spaghetti", supper: "banan" }
    ]);
    await db.news.bulkAdd([
        { title: "Dzień Zdrowia", content: "W naszym przedszkolu w dniu 29 maja odbędzie się Dzień Zdrowia. Nasze dzieci poznają świat zdrowej żywności z nutą dobrej zabawy i w dobrym smaku :)" },
        { title: "Dzien Dziecka", content: "Zapraszamy wszystkie dzieci wraz z rodzicami do uczestnictwa w Dniu Dziecka, które odbędzie się w naszym przedszkolu. Dzieci będą mogły bawić się z animatorami, tworzyć rozmaite prace plastyczne oraz " },
    ]);
}