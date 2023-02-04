function addTask(){ 
    var p = document.createElement("p");
    
    var input =document.getElementById("text-input").value;
    var text = document.createTextNode(input);

    p.appendChild(text);
    
    
    document.getElementById("task-container").appendChild(p);

}
