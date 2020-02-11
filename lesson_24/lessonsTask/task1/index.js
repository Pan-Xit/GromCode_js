const daysNames = {
    0: 'Su',
    1: 'Mo',
    2: 'Tu',
    3: 'We',
    4: 'Th',
    5: 'Fr',
    6: 'St',
}

export const dayOfWeek = (date, days) => {
    const dayOfMounth = new Date(date).getDate() + days;
    const day = new Date(new Date(date).setDate(dayOfMounth)).getDay();

    return daysNames[day];
}