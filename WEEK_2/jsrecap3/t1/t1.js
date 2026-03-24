// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
for (const task of todoList) {
  const list = document.querySelector('ul');
  const items = `<li>
<input type='checkbox' id="todo-${task.id}"checked>
<label for="todo-${task.id}">${task.task}</label>
</li>`
  list.insertAdjacentHTML('afterbegin', items);
}
