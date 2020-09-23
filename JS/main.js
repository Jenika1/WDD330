const links = [{
        label: "Week 1 notes",
        url: "week1/notes.html"
    },
    {
        label: "Week 2 notes",
        url: "week2/notes.html"
    }
]

const myNotes = document.getElementById("notes");

for (let i=0; i < links.length; i++){
    //add il to the "notes" id in the html
    //grab info from the array
    let listItem = document.createElement('li');
    let anchor = document.createElement('a');
    
    anchor.setAttribute("href", links[i].url);
    anchor.innerText = links[i].label;

    listItem.appendChild(anchor);
    myNotes.appendChild(listItem);
}