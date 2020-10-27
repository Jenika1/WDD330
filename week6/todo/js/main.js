function List() {
    //add checkbox to the "todo" div
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    let todo = document.getElementById('todo');
    todo.appendChild(checkbox);

    //add label to the "todo" div
    let label = document.createElement("label");
    todo.appendChild(label);

    //push class to label. Make it dynamic.
    label.setAttribute('class', 'td');
}