const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const tasklist = document.getElementById('tasklist');

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value;

    if (taskText === '') {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');
    
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    li.addEventListener('click', function(e) {
            if(e.target.tagName === 'BUTTON') return;
            li.classList.toggle('completed');
    });

    const deleteBtn = li.querySelector('.delete-btn');

    deleteBtn.addEventListener('click', function() {
        tasklist.removeChild(li);
    });

    tasklist.appendChild(li);

    taskInput.value = '';

}