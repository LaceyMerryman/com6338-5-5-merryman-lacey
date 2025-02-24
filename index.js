document.addEventListener('DOMContentLoaded', function () {
    const addTodoForm = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');
  
    // Function to handle adding a new todo item
    function addTodoItem(event) {
      event.preventDefault();
  
      const input = addTodoForm.querySelector('input');
      const todoText = input.value.trim();
  
      if (todoText) {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = todoText;
  
        button.addEventListener('click', function () {
          if (button.style.textDecoration === 'line-through') {
            // If item is marked done, remove
            li.remove();
          } else {
            // If item is not marked done, mark
            button.style.textDecoration = 'line-through';
          }
        });
  
        li.appendChild(button);
        todoList.appendChild(li);
        input.value = '';
      }
    }

    addTodoForm.addEventListener('submit', addTodoItem);
  });  