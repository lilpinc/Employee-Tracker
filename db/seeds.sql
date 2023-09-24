--  add information that will go into the tables
INSERT INTO departments (department_name)
VALUES ("Personal Training"),
    ("Sales & Marketing"),
    ("Management & Operations"),
    ("Janitorial");

INSERT INTO roles (job_title, salary, department_id)
VALUES ("Manager", 14.50, 3),
    ("Trainer", 12.50, 1),
    ("Cleaner", 8.50, 4),
    ("Sales Assistant", 12.50, 2);

INSERT INTO employees (first_name, last_name, role_id, department_id, manager_id)
VALUES ("Joelene", "Roberts", 1, 3, null),
    ("Jeff", "Warner", 1, 1, 1),
    ("Anna", "Hudgens", 2, 1, 1),
    ("Amy", "Sutherland", 4, 2, 1),
    ("Rachel", "Swartz", 3, 4, 1);



