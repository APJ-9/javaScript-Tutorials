//Create a person object that contains three keys: names, age, and country.
//use yourself as an example to set the values for name, age, and country

let person = {
    name: 'Akhil',
    age: 23,
    country: 'India'
}
//Createa function, logData(), that uses the person object to create a
//string in the following format:
//"per is 35 years old and lives in norway"
function logData() {
    console.log(person.name + ' is ' + person.age + ' years old and lives in ' + person.country);
}
//Call the logData() function to verify that it works
logData();