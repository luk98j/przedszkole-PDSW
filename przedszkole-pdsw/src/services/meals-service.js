import {db} from "../db";

class MealsService {
    async randMeals() {
        let limit = await db.meals.count().then((count)=>{
            let rand = Math.ceil(Math.random() * count)
            return db.meals.get(rand).then((meal)=>{
                return meal;
            })
        })
        return limit;
    };
}
export default new MealsService();