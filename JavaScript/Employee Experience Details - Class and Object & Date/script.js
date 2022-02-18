class Employee 
{
    constructor(name,designation,year_of_experience)
    {
    this.name=name;
    this.designation=designation;
    this.year_of_experience=year_of_experience;
    }
}

function createEmployee(name, designation, year_of_experience)
{
    const emp=new Employee(name,designation,year_of_experience);
    return emp;

}

function validateObject(employee)
{
    return employee instanceof Employee;

}
function displayEmployee(name,designation,year_of_experience)
{
    const emp=createEmployee(name,designation,year_of_experience);
    if(validateObject(emp))
    {
        var date=new Date().getFullYear();
        var exp=date-year_of_experience-2;
        return(emp.name+" is serving the position of "+emp.designation+" since "+exp);
    }
}

console.log(displayEmployee("Jerold","Manager",15));