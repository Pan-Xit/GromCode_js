export default {
    firstName: 'John',
    lastName: 'Doe',

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(name) {
        const [firstName, lastName] = name.split(' ');

        if (!firstName || !lastName) {
            return 'Wrong name format, should be "Name Surname"'
        }

        this.firstName = firstName;
        this.lastName = lastName;
    }
}