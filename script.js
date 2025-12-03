function dragstarthandler(ev){
    ev.dataTransfer.setData("text",ev.target.id);
    }
    function dragoverhandeler(ev){
        ev.preventDefault();
    }
   function drophandeler(ev){
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const target = ev.target;
    if (target.classList.contains('img1')) {
        // Do nothing or show a message
        return;
    }
    target.appendChild(document.getElementById(data));
}

const toDo = document.getElementById("toDo");
var nextId = 0;
function addTask(){
    const taskName = document.getElementById("name").value;
    const task = document.createElement("div");
    task.classList.add("task");
    task.classList.add("img1");
    task.setAttribute("draggable","true");
    task.setAttribute("id","task"+nextId);
    task.ondragstart = dragstarthandler;
    const p = document.createElement("p");
    const butt = document.createElement("button");
    butt.textContent = "X";
    butt.onclick = function(){
        task.remove();
    }
    task.appendChild(butt);
    p.textContent = taskName;
    task.appendChild(p);
    toDo.appendChild(task);
    nextId++;
}