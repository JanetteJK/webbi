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
  const items = `<li id="elm${task.id}">
<input type='checkbox' id="todo-${task.id}" ${task.completed}>
<label for="todo-${task.id}">${task.task}</label>
</li>`
  const btn = `<button id="${task.id}" >Delete</button>`
  list.insertAdjacentHTML('afterbegin', items + btn);
}
for (let i =1; i <= 5;i++){
const btn = document.getElementById(i)
btn.addEventListener('click', () => {
  remove(i)

});
}

function remove(id){
  const remove = document.getElementById('elm'+ id);
  const items = document.getElementById('ul');
  const removeBtn = document.getElementById(id);
  items.removeChild(remove)
  items.removeChild(removeBtn)
}
