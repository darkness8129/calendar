//number days in each months
const numberOfDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// func for getting year of date 
export const getYear = (date) => date.getFullYear();

// func for getting month of date
export const getMonth = (date) => date.getMonth();

// func for getting name of month
export const getNameOfMonthInLetters = (date) =>
    date.toLocaleString('eng', {
        month: 'long',
    });

// func for getting name of day
export const getNameOfDayInLetters = (date) =>
    date.toLocaleString('eng', { weekday: 'long' });

//func for getting day number
export const getDayNum = (date) =>
    date.toLocaleString('eng', {
        day: 'numeric',
    });

//func for checking is year leap
const isLeapYear = (year) => ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);

//func that return arr with days for specific month 
export const getDaysOfMonth = (year, month) => {
    const result = [];
    const date = new Date(year, month);
    const daysInMonth = getDaysInMonth(date);
    const monthStart = getDayOfWeek(date);

    let day = 1;

    for (let i = 0; i < (daysInMonth + monthStart) / 7; i++) {
        result[i] = []

        // j < 7 because 7 days in week
        for (let j = 0; j < 7; j++) {
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

//func getting number of days in month
const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const daysInMonth = numberOfDaysInMonth[date.getMonth()]
    //1 because february has index 1
    return (isLeapYear(year) && month === 1) ? daysInMonth + 1 : daysInMonth;
}

// func for getting number of day in week (0 - Monday, 6 - Sunday)
const getDayOfWeek = (date) => {
    const dayOfWeek = date.getDay();

    return dayOfWeek === 0 ? 6 : dayOfWeek - 1;
}

//func for checking are dates equal
export const areDatesEqual = (date1, date2) => {
    if (!date1 || !date2) return false;

    return (date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate());

}