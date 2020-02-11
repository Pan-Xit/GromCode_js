const month = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
}

export const studentsBirthDays = (students) => {   
    const formatedStuds = students
        .map(({ name, birthDate }) => {
            return { name, birthDate: new Date(Date.parse(birthDate))}
        }).sort((a, b) => a.birthDate.getTime() - b.birthDate.getTime())

    const studBirthdays = {};

    Object.entries(month).forEach(([mon, index]) => {
        const birthdayArray = formatedStuds
            .filter(({ birthDate }) => birthDate.getMonth() === index)
            .map(({ name }) => name);

        if (birthdayArray.length > 0) {
            studBirthdays[mon] = birthdayArray;
        }
    });

    return studBirthdays;
}


// const stud = [
//     { name: '1', birthDate: '01/15/2010' },
//     { name: '4', birthDate: '05/15/2010' },
//     { name: '3', birthDate: '02/20/2010' },
//     { name: '2', birthDate: '02/15/2010' },
//     { name: '6', birthDate: '08/15/2010' },
//     { name: '5', birthDate: '08/08/2010' },
// ]


// console.log(studentsBirthDays(studs))