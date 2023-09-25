--  add information that will go into the tables
INSERT INTO departments (department_name)
VALUES ("Personal Training"),
    ("Sales & Marketing"),
    ("Management & Operations"),
    ("Janitorial");

INSERT INTO roles (title, salary, department_id)
VALUES ("Manager", '$14.50/hr', 3),
    ("PT Manager", '$13.50/hr', 1),
    ("Trainer", '$12.50/hr', 1),
    ("Cleaner", '$8.50/hr', 4),
    ("Sales Assistant", '$12.50/hr', 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Joelene", "Roberts", 1, null),
    ("Jeff", "Warner", 2, 1),
    ("Anna", "Hudgens", 3, 1),
    ("Amy", "Sutherland", 5, 1),
    ("Rachel", "Swartz", 4, 1);



