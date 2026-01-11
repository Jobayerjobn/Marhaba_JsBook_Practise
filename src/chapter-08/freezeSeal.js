const person ={
    name: "Alice",
    age: 25,
    country: "Bangladesh"
};
delete person.age;
console.log(person);

const person2 = {
    name: "Jobayer",
    age : 21,
    email: "jobayerjoban0048@gmail.com"

}
delete person2.age;
console.log(person2);

const person3 = {
    name: "Hossain",
    age: 7,
    email: "jobayerjoban0048@gmail.com",
    topic:['name', 'email', 'value']
}
delete person3.topic;
console.log(person3);


const adminUser = {
    username: "admin",
    email: "admin@example.com",
    role: "superadmin"
}
Object.freeze(adminUser);
adminUser.role = 'User';
adminUser.password = '12345';
delete adminUser.email;
console.log(adminUser);

const user = {
    username: "johndoe",
    email: "john.doe@example.com",
    password: "oldPassword",
    value: "two"
};
Object.seal(user);
user.password = "newPassword";
user.email = "new@gmail.com",
delete user.value;
console.log(user);

