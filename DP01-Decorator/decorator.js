// dofactory Example 
var User = function (name) {
    this.name = name;

    this.say = function () {
        console.log(`User : ${this.name}`);
    }
}

var DecoratedUser = function (user, street, city) {
    this.user = user;
    this.name = user.name;
    this.street = street;
    this.city = city;

    this.say = function () {
        console.log(`DecoratedUser : ${this.name} ${this.street} ${this.city}`);
    }

}

function run() {

    var user1 = new User('Joe');
    user1.say();

    var detailedUser1 = new DecoratedUser(user1, 'Freeway', 'NewYork');
    detailedUser1.say();

}

// run();

// ES6 Syntax Sugar
class Student {
    constructor(fstName, lstName, gender, age, grade) {
        this.school = 'MYCENA';
        this.fstName = fstName;
        this.lstName = lstName;
        this.gender = gender;
        this.age = age;
    }

    setGrade(grade) {
        this.grade = grade;
    }

    who() {
        console.log(`I am ${this.fstName} ${this.lstName}`);
    }

}

class StudentInEngClass {
    constructor(Student, engScore) {
        this.student = Student;
        this.engScore = engScore;
    }

    getEngGrade(grade) {
        console.log(`${this.student.fstName} Scored ${this.engScore} in English Class`);

    }

}

var student1 = new Student('Joe', 'Lee', 'Male', 23, 1);
student1.who();

var engStudent3 = new StudentInEngClass(student1, 90);
engStudent3.getEngGrade();

