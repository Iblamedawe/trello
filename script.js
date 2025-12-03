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
    // If the cell already has an element inside, block the drop
    if (target.children.length > 0) {
        return; // stop
    }
    target.appendChild(document.getElementById(data));
}

/*
const yormom = document.getElementById("yormom");
function generateYorMom(){
    for (let i = 0; i<10; i++){
        var newAbortion = document.createElement("div");
        newAbortion.innerHTML = `
        <div class="div1" ondrop="drophandeler(event)"ondragover="dragoverhandeler(event)"></div>
        <div class="div1" ondrop="drophandeler(event)"ondragover="dragoverhandeler(event)"></div>
        <div class="div1" ondrop="drophandeler(event)"ondragover="dragoverhandeler(event)"></div>
        <div class="div1" ondrop="drophandeler(event)"ondragover="dragoverhandeler(event)"></div>
        <div class="div1" ondrop="drophandeler(event)"ondragover="dragoverhandeler(event)"></div>
        <div class="div1" ondrop="drophandeler(event)"ondragover="dragoverhandeler(event)"></div>
        <div class="div1" ondrop="drophandeler(event)"ondragover="dragoverhandeler(event)"></div>
        <div class="div1" ondrop="drophandeler(event)"ondragover="dragoverhandeler(event)"></div>
        <div class="div1" ondrop="drophandeler(event)"ondragover="dragoverhandeler(event)"></div>
        <div class="div1" ondrop="drophandeler(event)"ondragover="dragoverhandeler(event)"></div>
        `;
        yormom.appendChild(newAbortion);
    }
}*/