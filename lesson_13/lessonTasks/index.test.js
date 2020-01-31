// simple tests

it('17 equel to 17', () => {
    expect(17).toEqual(17);
});

it('18 not equal to 17', () => {
    expect(18).not.toEqual(17)
});

const getEvenNumbers = numbersArray => numbersArray.slice().filter(element => element % 2 === 0)

it('shoult return only even numbers', () => {
    const testArray = [1, 2, 3, 4, 5, 6]
    expect(getEvenNumbers(testArray)).toEqual([2, 4, 6])
})

