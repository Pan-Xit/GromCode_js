class User {
    #id;
    #name;
    #sessionId;

    constructor(id, name, sessionId) {
        this.#id = id;
        this.#name = name;
        this.#sessionId = sessionId;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get sessionId() {
        return this.#sessionId;
    }
}


class UserRepository {
    #users;

    constructor(users) {
        this.#users = Object.freeze(users);
    }

    get users() {
        return this.#users;
    }

    getUserNames() {
        return this.#users.map(userObj => userObj.name)
    }

    getUserIds() {
        return this.#users.map(userObj => userObj.id)
    }

    getUserNameById(id) {
        return this.#users
            .filter(userObj => userObj.id === id)
            .map(userObj => userObj.name)
    }
}