// make this dynamic somehow...for (let i = 1; i<8; i++){}
// I could not get this to work using getElementByClassName().
let btn1 = document.getElementById("click1");
let btn2 = document.getElementById("click2");
let btn3 = document.getElementById("click3");
let btn4 = document.getElementById("click4");
let btn5 = document.getElementById("click5");
let btn6 = document.getElementById("click6");
let btn7 = document.getElementById("click7");

btn1.addEventListener('click', function () {
    //find the last box in first column that is not "taken" let box = "box";
    let box = "box";
    for (let i = 1; i < 7; i++) {
        let v = box + i;
        let div = document.querySelector('.' + v);
        console.log(div);
        if (div.classList.contains('box6') || !div.classList.contains('taken') && div.nextElementSibling.classList.contains('taken')) {
            div.classList.add('taken');
        }
    }

});
btn2.addEventListener('click', function () {
    let box = "box";
    for (let i = 1; i < 7; i++) {
        let v = box + i;
        let div = document.querySelector('.' + v);
        console.log(div);
        if (div.classList.contains('box6') || !div.classList.contains('taken') && div.nextElementSibling.classList.contains('taken')) {
            div.classList.add('taken');
        }
    }

});
btn3.addEventListener('click', function () {
    let box = "box";
    for (let i = 1; i < 7; i++) {
        let v = box + i;
        let div = document.querySelector('.' + v);
        console.log(div);
        if (div.classList.contains('box6') || !div.classList.contains('taken') && div.nextElementSibling.classList.contains('taken')) {
            div.classList.add('taken');
        }
    }

});
btn4.addEventListener('click', function () {
    alert('You Clicked!');
});
btn5.addEventListener('click', function () {
    alert('You Clicked!');
});
btn6.addEventListener('click', function () {
    alert('You Clicked!');
});
btn7.addEventListener('click', function () {
    alert('You Clicked!');
});