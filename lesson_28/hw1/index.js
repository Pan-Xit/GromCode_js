export const shmoment = (date) => {
    let dateCopy = new Date(date)

    return {
        add(param, value) {
            switch(param) {
                case ('years'):
                    dateCopy.setFullYear(dateCopy.getFullYear() + value);
                    return this
                case ('months'):
                    dateCopy.setMonth(dateCopy.getMonth() + value);
                    return this
                case ('days'):
                    dateCopy.setDate(dateCopy.getDate() + value);
                    return this
                case ('hours'):
                    dateCopy.setHours(dateCopy.getHours() + value);
                    return this
                case ('minutes'):
                    dateCopy.setMinutes(dateCopy.getMinutes() + value);
                    return this
                case ('seconds'):
                    dateCopy.setSeconds(dateCopy.getSeconds() + value);
                    return this
                case ('milliseconds'):
                    dateCopy.setMilliseconds(dateCopy.getMilliseconds() + value);
                    return this
                default:
                    return `${param} is not allowed`
            }
        },

        subtract(param, value) {
            switch(param) {
                case ('years'):
                    dateCopy.setFullYear(dateCopy.getFullYear() - value);
                    return this
                case ('months'):
                    dateCopy.setMonth(dateCopy.getMonth() - value);
                    return this
                case ('days'):
                    dateCopy.setDate(dateCopy.getDate() - value);
                    return this
                case ('hours'):
                    dateCopy.setHours(dateCopy.getHours() - value);
                    return this
                case ('minutes'):
                    dateCopy.setMinutes(dateCopy.getMinutes() - value);
                    return this
                case ('seconds'):
                    dateCopy.setSeconds(dateCopy.getSeconds() - value);
                    return this
                case ('milliseconds'):
                    dateCopy.setMilliseconds(dateCopy.getMilliseconds() - value);
                    return this
                default:
                    return `${param} is not allowed`
            }
        },

        result() {
            return dateCopy
        }
    }
}