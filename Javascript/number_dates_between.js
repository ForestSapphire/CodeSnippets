const dayDiff = (date1, date2) =>
  Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
dayDiff(new Date("2021-10-21"), new Date("2022-02-12"));
// Result: 114
