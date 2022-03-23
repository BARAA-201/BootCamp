class MainPerson {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting() {
        console.log("Person Greeting: Hello, my name is " + this.firstName + ".");
    }
}
class NewStudent extends MainPerson {
    constructor(studentID, firstName, lastName) {
        super(firstName, lastName);
        this.studentID = studentID;
    }
    studentInfo() {
        console.log("Student Info: " + this.studentID + " " + this.firstName + ", " + this.lastName);
    }
}
let student = new NewStudent(12, "John", "Smith");
student.greeting();
student.studentInfo();

console.log(this.name + " start working in " + this.hireDate + " receiving a salsry of " + this.salary + ",thats is for working with us as " + this.descriptionOfJop)