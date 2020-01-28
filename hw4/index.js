const sortAsc = (arr) => {
    if (!Array.isArray(arr)) {
        return null
    }
    let next_iteration;
    do {
        next_iteration = false;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i-1] > arr[i]) {
                let temp = arr[i-1];
                arr[i-1] = arr[i];
                arr[i] = temp;

                next_iteration = true;
            };
        };
    } while (next_iteration);

    return arr
};

const sortDesc = (arr) => {
    if (!Array.isArray(arr)) {
        return null
    }
    let next_iteration;
    do {
        next_iteration = false;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i-1] < arr[i]) {
                let temp = arr[i-1];
                arr[i-1] = arr[i];
                arr[i] = temp;

                next_iteration = true;
            };
        };
    } while (next_iteration);

    return arr
}