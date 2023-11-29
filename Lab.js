  
   let person = {
    firtname: 'Niel', 
    lastname: 'Armstrong',
    occupation: 'astronaut',
    year: ' July 20th 1969',
   }
   console.log(`On ${person.year} ${person.firtname}, ${person.lastname}, was a first ${person.occupation} to set foot on earth.`)

   //Q:2

   class myGreeting {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    hello() {
        console.log(`Hello, ${this.name}, from ${this.location}!`)
    }
   }
   let greeting = new myGreeting('Aseel', 'MT')
   greeting.hello()

   //Q3:
   
   class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;

    }
    describe() {
        console.log(`Title: ${this.title} Author: ${this.author}`);
    }
   }
   const myBook = new Book("Pride and Prejudice" , "Jane Austen");
   console.log(myBook.title);
   console.log(myBook.author);
   console.log(myBook.describe());

const yourBook = new Book("Hamlet", "William Shakespeare");
console.log(yourBook.describe());

//Q4:

class Fruit{
    constructor(name, color, taste) {
        this.name = name;
        this.color = color;
        this.taste = taste;
    }
    describeFruit() {
        console.log(`A ${this.name} is ${this.color}, and has a ${this.taste} taste.`)
    }
}
let fruit1 = new Fruit("lime", "green", "sour");
let fruit2 = new Fruit("banana", "yellow", "sweet");

fruit1.describeFruit();
fruit2.describeFruit();

// Q: 5

// Define the student class:

class Student {
    constructor(name, role) {
      this.name = name;
      this.role = role;
    }
  
    introduction() {
      console.log(`Hello, my name is ${this.name} and I am a ${this.role}.`);
    }
  
    details() {
      console.log(`Student Details: Name - ${this.name}, Role - ${this.role}`);
    }
  }
  
  // Define the Teacher class
  class Teacher {
    constructor(name, role) {
      this.name = name;
      this.role = role;
    }
  
    introduction() {
      console.log(`Greetings, I am ${this.name}, your ${this.role}.`);
    }
  
    details() {
      console.log(`Teacher Details: Name - ${this.name}, Role - ${this.role}`);
    }
  }
  
  // Instantiate a new student called 'student'
  const student = new Student("Jacky", "student");
  
  // Instantiate a new teacher called 'teacher'
  const teacher = new Teacher("Mr. Bean", "teacher");
  
  // Call the introduction method on the student instance and print to the console
  student.introduction();
  
  // Call the details method on the student instance and print to the console
  student.details();
  
  // Call the introduction method on the teacher instance and print to the console
  teacher.introduction();
  
  // Call the details method on the teacher instance and print to the console
  teacher.details();


// Q 6:

class Parent {
    constructor(name, age) {
       this.name = name;
    this.age = age; 
    }
    details() {
        console.log(`${this.name}, is ${this.age} years old.`)

    }
}
class Child extends Parent{
    constructor(name, age){
        super(name, age);
    }
}
let child = new Child("Pugsley", 10);
child.details();

//Q 7:

class Movie {
    constructor(title, director) {
        this.title = title;
        this.director = director;
    }
    describe() {
        console.log(`"The movie ${this.title}, was directed by ${this.director}.`);

    }
}
class List {
    constructor() {
        this.movies = [];
    }
    addMovies(movie) {
        this.movies.push(movie);
    }
    displayMovies() {
        let movieInfo = "";
        for(let i = 0; i < this.movies.length; i++) {
            movieInfo += `${this.movies[i]}, dirceted by ${this.movies[i].director}`;
        }
        return movieInfo;
    }
}
let movie1 = new Movie("Jurassic Park", "Steven Spielberg");
let movie2 = new Movie("How the Grinch stole Christmas", "Ron Howard");
console.log(movie1.describe());
console.log(movie2.describe());

let list = new List;
list.addMovies(movie1);
list.addMovies(movie2);
console.log(list.displayMovies());


console.log(`-----------Finished------------`)