const now = new Date();
console.log(now);//2026-02-14T17:01:24.325Z

const specificDate = new Date("2023-05-21");
console.log(specificDate);//2023-05-21T00:00:00.000Z

const dateTime = new Date(2032, 10, 12, 30, 0);
console.log(dateTime);//2032-11-13T00:00:00.000Z

const date1 = new Date('2028 - 11 -01');
const date2 = new Date('2029-021-16');
const diffInMiliSeconds = date1 - date2;
console.log(diffInMiliSeconds);
const diffInDays = diffInMiliSeconds / (1000 * 60 * 60 * 24);
console.log(diffInDays);


const day = new Date();
const  year = day.getFullYear();
console.log(year);
