var contacts = [
    {
        'firstName': 'ABC',
        'lastName': 'XYZ',
        'number': '1234565',
        'likes': ['pizza', 'coding', 'browine points']
    },
    {
        'firstName': 'Harry',
        'lastName': 'Potter',
        'number': '54654872',
        'likes': ['potter', 'Magic', 'Hagrid']
    },
    {
        'firstName': 'Sherlock',
        'lastName': 'Holmes',
        'number': '32121548464',
        'likes': ['pizza', 'coding', 'Intriguing Cases']
    },
    {
        'firstName': 'Kristian',
        'lastName': 'Vos',
        'number': 'unknown',
        'likes': ['javaScript', 'Gaming', 'Foxes']
    }
];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name){
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contacts";
}

var data = lookUpProfile('ABC', 'likes');
console.log(data);