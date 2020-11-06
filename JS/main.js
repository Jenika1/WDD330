const links = [{
        label: "Week 1 notes",
        url: "week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "week2/index.html"
    },
    {
        label: "Week 3 notes",
        url: "week3/index.html"
    },
    {
        label: "Week 4 notes",
        url: "week4/index.html"
    },
    {
        label: "Week 5 notes",
        url: "week5/index.html"
    },
    {
        label: "Week 6 notes",
        url: "week6/index.html"
    },
    {
        label: "Week 7 notes",
        url: "week7/index.html"
    },
    {
        label: "Week 8 notes",
        url: "week8/index.html"
    },
    {
        label: "Week 9 notes",
        url: "week9/index.html"
    },
    {
        label: "Week 10 notes",
        url: "week10/index.html"
    },
    {
        label: "Week 11 notes",
        url: "week11/index.html"
    },
    {
        label: "Week 12 notes",
        url: "week12/index.html"
    },
    {
        label: "Week 13 notes",
        url: "week13/index.html"
    },
    {
        label: "Week 14 notes",
        url: "week14/index.html"
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