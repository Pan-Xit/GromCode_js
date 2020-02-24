export const getLocalStorageData = () => {
    return Object.entries(localStorage)
        .reduce((acc, [key, value]) => {
            let newValue;
            try {
                newValue = JSON.parse(value);
            } catch(e) {
                newValue = value;
            }

            return {
                ...acc,
                [key]: newValue,
            };
        }, {});
};


// localStorage.clear()
// localStorage.setItem('bool', true);
// localStorage.setItem('str', 'str');
// localStorage.setItem('null', null);
// localStorage.setItem('num', 1);
// localStorage.setItem('arr', JSON.stringify([1, 2, 3]));
// localStorage.setItem('obj', JSON.stringify({some: 'value', 1: 2}))


// console.log(getLocalStorageData())