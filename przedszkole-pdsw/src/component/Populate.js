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
        { username: "AnnaNowak", name: "Sebastian", surname: "Nowak" },
        { username: "AnnaNowak", name: "Jessica", surname: "Nowak" },
        { username: "IwonaPolak", name: "Jozef", surname: "Polak" },
        { username: "AndrzejZdun", name: "Joanna", surname: "Zdun" },
        { username: "AndrzejZdun", name: "Krystyna", surname: "Zdun" },
        { username: "AndrzejZdun", name: "Jan", surname: "Zdun" },
        { username: "AdamKielbasa", name: "Adrian", surname: "Kielbasa" },
        { username: "AdamKielbasa", name: "Piotr", surname: "Kielbasa" },
        { username: "AdamKielbasa", name: "Lukasz", surname: "Kielbasa"  },
        { username: "AdamKielbasa", name: "Natalia", surname: "Kielbasa"  },
        { username: "KatarzynaKowal", name: "Irena", surname: "Kowal"  }
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