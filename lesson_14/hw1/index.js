let numberInMemo = 0;

export const add = (number) => {
    numberInMemo += number;
};

export const decrease = (number) => {
    numberInMemo -= number;
};

export const reset = () => {
    numberInMemo = 0;
};

export const getMemo = () => {
    return numberInMemo;
};