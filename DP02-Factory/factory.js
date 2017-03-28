// dofactory Example

function EmployeeFactory() {
    this.createEmployee = function (name, type) {

        var employee;

        switch (type) {
            case 'fulltime': employee = new FullTime();
                break;
            case 'parttime': employee = new PartTime();
                break;
            case 'temporay': employee = new Temporary();
                break;
            case 'contractor': employee = new Contractor();
                break;
        }

        employee.type = type;
        employee.name = name;

        employee.say = function () {
            console.log(`${this.name} - ${this.type} : ${this.hourly}/hour`);
        }

        return employee;
    }
}

var FullTime = function () {
    this.hourly = '$12';
};

var PartTime = function () {
    this.hourly = '$11';
};

var Temporary = function () {
    this.hourly = '$10';
};

var Contractor = function () {
    this.hourly = '$15'
};

var mycenaCompany = new EmployeeFactory();
var mycenaEmployees = [];

mycenaEmployees.push(mycenaCompany.createEmployee('Joe', 'fulltime'));
mycenaEmployees.push(mycenaCompany.createEmployee('Bill', 'fulltime'));
mycenaEmployees.push(mycenaCompany.createEmployee('Zen', 'parttime'));
mycenaEmployees.push(mycenaCompany.createEmployee('Robert', 'contractor'));

console.log(mycenaEmployees);
mycenaEmployees[3].say();
