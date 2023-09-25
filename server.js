// const express = require('express');
const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');




// const PORT = process.env.PORT || 3001;
// const app = express();

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());


// Connect to database
const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    // MySQL username,
    user: 'root',
    port: 3306,
    // TODO: Add MySQL password here
    password: 'MySQL',
    database: 'employees_db'
  },
);


db.connect(err => {
  if (err) throw err;
  console.log('Connected to the employees_db database.');
  options();
});

function options() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'list',
      message: 'Welcome to the employee management program. What would you like to do?',
      choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    }
  ])
    .then((answers) => {
      const { choices } = answers;

      if (choices === "View all departments") {
        // showDepartments();
        db.query(`SELECT * FROM departments`, function (err, results) {
          console.log(results);
        });
        options();
      }

      if (choices === "View all roles") {
        // showRoles();
        db.query(`SELECT * FROM roles JOIN departments ON roles.department_id = department.id`, function (err, results) {
          console.log(results);
        });
        options();
      }

      if (choices === "View all employees") {
        // showEmployees();
        db.query(`SELECT * FROM employees JOIN departments on employees.department_id = department.id JOIN roles on employees.role_id = roles.id`, function (err, results) {
          console.log(results);
        });
        options();
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
    });
};

addDepartment = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'addDept',
      message: "What department would you like to add?",

    }
  ])
    .then((answer) => {
      db.query(`INSERT INTO departments SET ?`,
        {
          department_name: answer.addDept,
        },
        (err, result) => {
          if (err) throw err;
          console.log(`Added ${answer.addDept} to the department table.`)
          options();
        })
    })
};


addRole = () => {
  inquirer.prompt([
    {
      // adding a role
      type: 'input',
      name: 'addRole',
      message: "What role would you like to add?",
      validate: roleInput => {
        if (roleInput) {
          return true;
        } else {
          console.log('Please Add A Role!');
          return false;
        }
      }
    },
    {
      // adding a salary
      type: 'input',
      name: 'salary',
      message: "what is the salary for this position?",
      validate: salaryInput => {
        if (salaryInput) {
          return true;
        } else {
          console.log('Please Add A Salary!');
          return false;
        }
      }
    },
    {
      // adding a department
      type: 'input',
      name: 'department',
      message: 'what department does this role belong to?',
      validate: departmentInput => {
        if (departmentInput) {
          return true;
        } else {
          console.log('Please Add A Department!');
          return false;
        }
      }
    }
  ])
    .then((answer) => {
      db.query(`INSERT INTO role SET ?`,
        {
          title: answer.addRole,
          salary: answer.salary,
          department_id: answer.department,
        },
        (err, result) => {
          if (err) throw err;
          console.log(`Added ${answer.addRole} to the database.`)
          options();
        })
    })
};

addEmployee = () => {
  inquirer.prompt([
    {
      // Adding Employee First Name
      type: 'input',
      name: 'firstName',
      message: 'What is the employees first name?',
      validate: firstNameInput => {
        if (firstNameInput) {
          return true;
        } else {
          console.log('Please Add A First Name!');
          return false;
        }
      }
    },
    {
      // Adding Employee Last Name
      type: 'input',
      name: 'lastName',
      message: 'What is the employees last name?',
      validate: lastNameInput => {
        if (lastNameInput) {
          return true;
        } else {
          console.log('Please Add A Salary!');
          return false;
        }
      }
    },
    {
      // adding employee role
      type: 'input',
      name: 'employeeRole',
      message: 'What is the employees role?',
      validate: employeeRoleInput => {
        if (employeeRoleInput) {
          return true;
        } else {
          console.log('Please Add A Role!');
          return false;
        }
      }
    },
    {
      // adding mamager 
      type: 'input',
      name: 'manager',
      message: 'Who is the employees manager?',
      validate: managerInput => {
        if (managerInput) {
          return true;
        } else {
          console.log('Please Add A Manager!');
          return false;
        }
      }
    }
  ])
    .then((answer) => {
      db.query(`INSERT INTO employees SET ?`,
        {
          first_name: answer.firstName,
          last_name: answer.lastName,
          role_id: answer.employeeRole,
          manager_id: answer.manager,
        },
        (err, result) => {
          if (err) throw err;
          console.log(`Added ${answer.addRole} to the database.`)
          options();
        })
    })
};

updateEmployee = () => {
  inquirer.prompt([
    // choose an employee to update
    {
      type: 'input',
      name: 'employee',
      message: 'Which employee would you like to change?',
      validate: employeeInput => {
        if (employeeInput) {
          return true;
        } else {
          console.log('Please Choose An Employee Via Last Name!');
          return false;
        }
      }
    },
    // choose which role the employee is assigned to
    {
      type: 'input',
      name: 'role',
      message: 'What is the employees new role?',
      validate: employeeInput => {
        if (employeeInput) {
          return true;
        } else {
          console.log('Please Choose A Role!');
          return false;
        }
      }
    }
  ])
    .then((answer) => {
      db.query(`UPDATE employee SET ? WHERE ?`,
        [
          { role_id: answer.role },
          { last_name: answer.employee }
        ], (err, result) => {
          if (err) throw err;
          console.log(`Updated ${answer.employee} role to the database.`)
          options();
        });
    })
}

// app.use((req, res) => {
//   res.status(404).end();
// });


// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);

// });
