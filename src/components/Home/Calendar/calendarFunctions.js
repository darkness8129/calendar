export const getDaysOfMonth = (year, month) => {
    const result = [];
    const date = new Date(year, month);
    const daysInMonth = getDaysInMonth(date);
    const monthStart = getDayOfWeek(date);

    let day = 1;

    for (let i = 0; i < (daysInMonth + monthStart) / 7; i++) {
        result[i] = []

        //j < 7 because 7 days in week
        for (let j = 0; j < 7; j++) {
            //can fix this!!!!!
            if ((i === 0 && j < monthStart) || day > daysInMonth) {
                result[i][j] = undefined;
            }
            else {
                result[i][j] = new Date(year, month, day++);
            }

        }
    }

    return result;
}

const numberOfDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const isLeapYear = (year) => ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);

const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const daysInMonth = numberOfDaysInMonth[date.getMonth()]
    //1 because february has index 1
    return (isLeapYear(year) && month === 1) ? daysInMonth + 1 : daysInMonth;
}

const getDayOfWeek = (date) => {
    const dayOfWeek = date.getDay();

    return dayOfWeek === 0 ? 6 : dayOfWeek - 1;
}
