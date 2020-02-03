export const createCalculator = () => {
    let result = 0;

    const add = (increaser) => {
        result += increaser;
    };

    const decrease = (decreaser) => {
        result -= decreaser;
    };

    const reset = () => {
        result = 0;
    };

    const getMemo = () => {
        return result
    }

    return {
        add,
        decrease,
        reset,
        getMemo,
    }
}