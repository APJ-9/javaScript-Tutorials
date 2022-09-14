//Objects - store data in-depth composite / complex data type
//key-value pairs

let course = {
    title: 'learn css grid for free',
    lessons: 16,
    creator: 'per haralad borgen',
    length: 63,
    level: 2,
    isfree: true,
    tags: ['html', 'css']
}
console.log(course.tags[0]);    //dot notations
console.log(course['tags']);    //Known as bracket notations

//Create an object that represnts an airbnb castle listing.
//It should contain at least one boolean, one string,one number and one array
//Log out at least two of the keys using the dot notation

let castle = {
    title: 'live like a king in my palace',
    price: 190,
    isSuperHost: true,
    images: ['img/castle1.png','img/castle2.png'],
    sayHello : function(){
        console.log("hello");
    }
}
console.log(castle.price);
console.log(castle.images);
castle.sayHello();  //Prints hello in console