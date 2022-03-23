class Employee {

    constructor(name, salary, hireDate) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;

    }

    getName() {
        console.log(this.name.toUpperCase());
    }

    getSalary() {
        console.log(this.salary);
    }

    getHireDate() {
        console.log(this.hireDate);
    }

}

class Manager extends Employee {

    constructor(name, hireDate, salary, descriptionOfJop) {
        super(name, salary, hireDate);
        this.descriptionOfJop = descriptionOfJop;
    }

    jobDescription() {

        console.log(this.name + " start working in " + this.hireDate + " receiving a salsry of " + this.salary + " $ " + ". He is the " + this.descriptionOfJop)
    }
}
//name - date -salary -......
class Designer extends Employee {

    constructor(name, hireDate, salary, experience) {
        super(name, salary, hireDate);
        this.experience = experience;
    }

    yearsExperience() {
        console.log(this.name + ", start working with us in " + this.hireDate + " and receiving a salsry of " + this.salary + " $ " + ". She is the " + this.experience + " in our coumpany with an experience of 10 years in her field.")
    }
}

class salesAssociate extends Employee {

    constructor(name, hireDate, salary, degree) {
        super(name, salary, hireDate);
        this.degree = degree;
    }

    degreeCompleted() {
        console.log(this.name + ", start working with us in " + this.hireDate + " and receiving a salsry of " + this.salary + " $ " + ". He " + this.degree)
    }
}

let Employee1 = new Manager("Mr.MOHAMMED", "01/07/2010", 11500, "Genral Manager");

Employee1.jobDescription();

///////////////////////////////////

let Employee2 = new Designer("Ms.AMAL", "01/01/2015", 5500, "Interior Designers");

Employee2.yearsExperience();

//////////////////////////////////////////

let Employee3 = new salesAssociate("Mr.KHALID", "01/07/2020", 3850, " graduated from high school last summer ");

Employee3.degreeCompleted();

////////////////////////////////////////////