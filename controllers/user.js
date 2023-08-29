const userModel = require('../modules/user');

class userController {
    static async show(ctx) {
        const users = await userModel.showAllUsers();
        ctx.response.status = 200;
        ctx.body = {
            status: 200,
            message: 'success',
            data: users
        };
    }

    static async create(ctx) {
        const data = ctx.request.body;
        const username = data.username;
        const password = data.password;
        console.log(username + ' ' + password);

        const newUser = await userModel.createUser(username, password);
        ctx.response.status = 200;
        ctx.body = {
            status: 200,
            message: 'success',
            data: newUser
        };
    }

    static async delete(ctx) {
        const data = ctx.request.body;
        const username = data.username;
        const result = await userModel.deleteUser(username);
        ctx.response.status = 200;
        ctx.body = {
            status: 200,
            message: 'success',
            data: result
        };
    }

    static async search(ctx) {
        const data = ctx.request.body;
        const username = data.username;
        const result = await userModel.searchUser(username);
        ctx.response.status = 200;
        ctx.body = {
            status: 200,
            message: 'success',
            data: result
        };
    }

    static async update(ctx) {
        const data = ctx.request.body;
        const userId = data.userId;
        const username = data.username;
        const password = data.password;
        const result = await userModel.updateUser(userId, username, password);
        ctx.response.status = 200;
        ctx.body = {
            status: 200,
            message: 'success',
            data: result
        };
    }
}

module.exports = userController;
