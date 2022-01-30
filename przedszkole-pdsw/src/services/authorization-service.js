import { db } from "../db";
import React, { useState, useEffect, Profiler } from "react";

class AuthService {


    async login(userName, password) {
        return db.users.where(["username+password"]).equals([userName, password]).first().then((user) => {
            if(user!==undefined){
                return {id: user.id, username: user.username, role: user.role};
            } else {
                return "USER NOT FOUND"
            }
        });
    };

    async changePass(login, oldPassword, newPassword) {
            let checkOldPassword = db.users.where(["username", "password"]).equals([login, oldPassword]);
            if (checkOldPassword != null) {
                db.users.where(["username", "password"]).equals([login, oldPassword]).modify(user => {
                    user.password = newPassword
                    console.log("Haslo zmienione");
                    
                });
                return "PASSWORD_CHANGED"
            } else{
                return "INCORRECT_PASSWORD"
            }
        
    }

    async addUser(login, uPassword, uphone) {
        await db.users.add({ username: login, password: uPassword, phone: uphone, role: "PARENT"})
    }

    async addChild(parentName, name, surname, group) {
        await db.children.add({ username: parentName, name: name, surname: surname, group: group})
    }

    async deleteChild(id) {
        await db.children.where("id").equals(id).delete()
    }

    async getAll(){
        return await db.users.where("role").equals("PARENT").toArray()
    }
    async getUserChild(username){
        return await db.children.where("username").equals(username).toArray()
    }

    setUser(user){
        localStorage.setItem("user", JSON.stringify(user));
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
      }

    logout() {
        localStorage.removeItem("user");
    }
}
export default new AuthService();

