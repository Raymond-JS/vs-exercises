// Empty Array For Employees
let employees = [];

// Employee constructor function
function Employee( name, jobTitle, salary ) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time"
}

// Employee method
Employee.prototype.printEmployeeForm = function() {
    console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`);
}

// Create or Instantiate 3 Employees
const firstEmployee = new Employee( "Richard Hart", "Chief Executive Officer", 250000);
const secondEmployee = new Employee("Janis Watley", "Chief Marketing Officer", 155000);
const thirdEmployee = new Employee( "Mark Gold", "Public Relations", 80000);
thirdEmployee.status = "Contract";

// Call printEmployeeForm for each employee
firstEmployee.printEmployeeForm();
secondEmployee.printEmployeeForm();
thirdEmployee.printEmployeeForm();

// Put the generated employee into employees array
employees.push(firstEmployee, secondEmployee, thirdEmployee);

