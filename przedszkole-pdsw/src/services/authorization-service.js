import { db } from "../db";

class AuthService {
    async login(userName, password) {
        return db.users.where(["username+password"]).equals([userName, password]).first().then((user) => {
            return {id: user.id, username: user.username, role: user.role};
        });
    };

    async changePass(login, oldPassword, newPassword, newPassword2) {
        if (newPassword === newPassword2) {
            let checkOldPassword = db.users.where(["username", "password"]).equals([login, oldPassword]);
            if (checkOldPassword != null) {
                db.users.where(["username", "password"]).equals([login, oldPassword]).modify(user => {
                    user.password = newPassword
                    console.log("Haslo zmienione");
                });
            }
        }
    }
}
export default new AuthService();

