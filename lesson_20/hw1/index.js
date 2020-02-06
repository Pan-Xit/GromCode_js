class Order {
    constructor(price, city, type) {
        this.id = Math.random().toString();
        this.price = price;
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.dateConfirmed = null;
        this.city = city;
        this.type = type;
    }

    checkPrice() {
        if (this.price > 1000) {
            return true;
        }

        return false;
    }

    confirmOrder() {
        if (this.isConfirmed === false) {
            this.isConfirmed = true;
        }

        this.dateConfirmed = new Date();
    }

    isValidType() {
        switch (this.type) {
            case ('Buy'):
            case ('Sell'):
                return true
            default:
                return false
        }
    }
}