const person = {
    name: "Sodor Uddain",
    age: 25,
    profession: "Developer",
    salary: 25000,
    married: true,
    FavPlaces : ['Bandarban', 'Saintamartin', 'kuakata'],


}
console.log(person);
console.log(person.salary);
console.log(person["FavPlaces"]);
console.log(person["married"]);
const propertyName = "profession";
console.log(person[propertyName]);

const cricket = {
    position: 4,
    specialty:"better",
    age: 24,
    runs: 8000

}
console.log(cricket.position);
console.log(cricket["specialty"]); //value add  way use the bracket Notation

cricket.position = 1;
cricket["specialty"] = "very good"; // value add way use the bracket Notation.

console.log(cricket.position);
console.log(cricket["position"]);//Bracket Notation
console.log(cricket.specialty);
console.log(cricket["specialty"]); //Bracket Notation

const obj = {};
obj.name = "Jobayer";
obj.age = 33;
obj.email = "jobayerjoban0048@gmail.com";
obj.bloodGroup = "A+";

console.log(obj);
console.log(obj['name']);
console.log(obj.email);


const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['Science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
        //gpa: 5,
        merit: 'top',
        result:{
            gpa: 5,
            merit: 'top'

        }
    }

}
console.log(college);
console.log(college.unique.gpa);
console.log(college.unique.color);
console.log(college["events"]);
console.log(college["unique"]["result"]["merit"]);
console.log(college["events"][2]);

