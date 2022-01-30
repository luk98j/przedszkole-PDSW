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

    async assignMealToChild(childId, mealId) {
        await db.children.where("id").equals(childId).modify(child => {
            child.meal = mealId});
        return "MEALS_CHANGED";
    }
}
export default new MealsService();