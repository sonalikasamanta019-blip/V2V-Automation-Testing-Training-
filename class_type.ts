class Employee{
    name: string;
    age: number;
    department: string;

    constructor(name:string,age:number,department:string){
        this.name = name;
        this.age = age;
        this.department = department;
    }
    employeedetails(){
        console.log(`employee name us ${this.name} from ${this.department}`)
    }
}
const employee = new Employee("amit",25,"finance")
employee.employeedetails()