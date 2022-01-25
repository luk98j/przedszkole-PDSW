import { db } from "../db";

const login = (userName, password, role) => {
    const users = db.users.get({ username: "Rodzic" });
    console.log(users);

    return users;
};

const logout = () => {};

const getCurrentUser = () => {};

export default {
    login,
    logout,
    getCurrentUser
};