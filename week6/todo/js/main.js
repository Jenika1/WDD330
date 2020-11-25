function List() {
    //add checkbox to the "todo" div
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    const todo = document.getElementById('todo');
    todo.appendChild(checkbox);

    //add label to the "todo" div
    const label = document.createElement("label");
    todo.appendChild(label);

    //Take the users text and put it into label
    const text = document.getElementById("text");
    label.innerHTML = text.value;

    //Local storage
    
    localStorage.setItem('Task', text.value);

    //push class to label. Make it dynamic.
    // label.setAttribute('class', 'td');
}

function tasksLeft() {

}

function all() {

}

function active() {

}

function completed() {

}