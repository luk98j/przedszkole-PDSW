import {db} from "../db";

class MealsService {
    randMeals() {
        let limit = db.meals.count();
        return db.meals.get(Math.floor(Math.random() * limit));
    };
}
export default new MealsService();