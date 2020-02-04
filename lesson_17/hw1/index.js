export const user = {
    firstName: 'John',
    lastName: 'Doe',

    getFullName() {
        return (`${this.firstName} ${this.lastName}`)
    },

    setFullName(fullName) {
        const separetedFullName = fullName.split(' ');

        if (separetedFullName.length !== 2) {
            return 'Wrong format. Full name should be like "Name surname"'
        }

        this.firstName = separetedFullName[0];
        this.lastName = separetedFullName[1];
    }
}