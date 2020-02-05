export const spy = (func) => {
    function currentSpy () {
        currentSpy.calls.push([...arguments])
        return func.apply(this, arguments)
    }

    currentSpy.calls = [];

    return currentSpy;
};
