//Problem-1
const time = new Date();
console.log(time);
//output:2026-02-14T17:16:11.630Z

//Problem-2
const date = new Date(2035, 6, 15, 14, 45, 30);
console.log(date);
//output:2035-07-15T08:45:30.000Z

//Problem-3
const findYear = new Date();
const fullYear = findYear.getFullYear();
console.log(fullYear);
//output:2026

//Problem-4
const againYear = new Date("2040");
console.log(againYear);
//output:2040-01-01T00:00:00.000Z

//Problem-5
const day = new Date();
const dayNumber = day.getDay();
console.log(dayNumber);

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',  'Saturday'];
console.log(days[dayNumber - 1]);
