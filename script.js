function dragstarthandler(ev){
    ev.dataTransfer.setData("text",ev.target.id);
}
function dragoverhandeler(ev){
    ev.preventDefault();
}
function drophandeler(ev){
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    // Find the column container where the drop occurred. If the user drops on a child element, find the closest .div1 container.
    let dropZone = ev.target;
    if (!dropZone.classList.contains('div1')) {
        dropZone = ev.target.closest('.div1');
    }
    if (!dropZone) return;
    dropZone.appendChild(document.getElementById(data));
    saveTasks();
}

const toDo = document.getElementById("toDo");
var nextId = 0;

// Create a task DOM element from an object {id, text}
function createTaskElement(taskObj){
    const task = document.createElement("div");
    task.classList.add("task");
    task.classList.add("img1");
    task.setAttribute("draggable","true");
    task.setAttribute("id", taskObj.id);
    task.ondragstart = dragstarthandler;

    const butt = document.createElement("button");
    butt.textContent = "X";
    butt.onclick = function(){
        task.remove();
        saveTasks();
    }
    
    const p = document.createElement("p");
    p.textContent = taskObj.text;
    task.appendChild(p);
    task.appendChild(butt);

    return task;
}

function saveTasks(){
    const columns = ['toDo','inProgress','done'];
    const tasks = [];
    columns.forEach(col => {
        const container = document.getElementById(col);
        if (!container) return;
        Array.from(container.querySelectorAll('.task')).forEach(task => {
            const p = task.querySelector('p');
            tasks.push({ id: task.id, text: p ? p.textContent : '', column: col });
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('nextId', String(nextId));
}

function loadTasks(){
    const stored = localStorage.getItem('tasks');
    if (stored){
        try{
            const tasks = JSON.parse(stored);
            tasks.forEach(t => {
                const el = createTaskElement(t);
                const container = document.getElementById(t.column) || document.getElementById('toDo');
                container.appendChild(el);
            });
        }catch(e){
            console.error('Failed to parse tasks from localStorage', e);
        }
    }
    const storedNext = localStorage.getItem('nextId');
    if (storedNext) nextId = parseInt(storedNext,10) || nextId;
}

function addTask(){
    const taskName = document.getElementById("name").value.trim();
    if (!taskName) return; // don't add empty tasks
    const taskObj = { id: 'task' + nextId, text: taskName };
    const task = createTaskElement(taskObj);
    toDo.appendChild(task);
    nextId++;
    document.getElementById("name").value = '';
    saveTasks();
}

// Load saved tasks when the document is ready
document.addEventListener('DOMContentLoaded', loadTasks);