import {db} from "../db";

class NewsService {
    async addNews(title, content) {
        await db.news.add({title: title, content: content});
    }

    async getAll(){
        return await db.news.toArray()
    }
}
export default new NewsService();