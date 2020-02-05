export const event = {
    message: 'Welcome to the party!',
    guests: [
        { name: 'John', age: 18, email: 'example@server.com', },
    ],
    getInvitations() {
        return this.guests.filter(({ age }) => age >= 18).map(({ name, email }) => {
            return {
                email,
                message: `Dear ${name}! ${this.message}`
            }
        });
    },
}