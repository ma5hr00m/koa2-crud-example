const db = require('../database/db');

const sequelize = db.sequelize;

const user = require('../schema/user')(sequelize);
user.sync({force: false});

class userModel {
    static async showAllUsers() {
        const users = await user.findAll();
        return users;
    }

    static async createUser(username, password) {
        const newUser = await user.create({
            username,
            password
        });
        return newUser;
    }

    static async deleteUser(username) {
        const result = await user.destroy({
            where: {
                username
            }
        });
        return result;
    }

    static async searchUser(username) {
        const result = await user.findOne({
            where: {
                username
            }
        });
        return result;
    }

    static async updateUser(userId, username, password) {
        const result = await user.update({
            username,
            password,
        }, {
            where: {
                id: userId
            }
        });
        return result;
    }
}

module.exports = userModel;