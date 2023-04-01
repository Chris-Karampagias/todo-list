This is a todo list project.

It's functions are:

- Adding projects
- Deleting projects
- Adding todos to a specific project
- Deleting todos
- Expanding a single todo to view and/or edit its details (except its name)

The functions that do all of the above are seperated in different modules based on whether they edit localStorage object's data or just retrieve it to populate the user's interface.
All of the projects are inside an array inside the localStorage object in order for them to be displayed in the order that they are added.

Each project is an object that contains the following properties:

- a 'projectName' property
- a 'selected' property with a value of true or false based on whether the project is currently selected or not
- a 'todos' property with an array as its value

Each todo is an object that is stored inside the todos array and has the following properties:

- a 'title' property
- a 'duedate' property
- a 'priority' property
- a 'description' property
- a 'completed' property with a value of true or false based on whether the user marked it as completed or not
