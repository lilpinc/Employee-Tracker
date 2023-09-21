
function choices (answers){

    if (choices === "View all departments") {
    showDepartments();
  }

  if (choices === "View all roles") {
    showRoles();
  }

  if (choices === "View all employees") {
    showEmployees();
  }
  if (choices === "Add a department") {
    addDepartment();
  }

  if (choices === "Add a role") {
    addRole();
  }

  if (choices === "Add an employee") {
    addEmployee();
  }

  if (choices === "Update an employee role") {
    updateEmployee();
  }
};


showDepartments = () =>
// connect to sql table


showRoles = () =>
// connect to Roles table

showEmployees = () =>
// connect to employees table



// export choices
module.exports = choices;


