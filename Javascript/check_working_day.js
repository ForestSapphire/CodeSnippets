const isWeekday = (date) => date.getDay() % 6 !== 0;
isWeekday(new Date(2022, 03, 11));
// true
