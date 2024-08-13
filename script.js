console.log("initalizing...");
let boxes = document.getElementsByClassName("box");
console.log(boxes);

function getRandomColour(){
    let val1 = Math.ceil(Math.random()* 255);
    let val2 = Math.ceil(Math.random()* 255);
    let val3 = Math.ceil(Math.random()* 255);
    return `rgb(${val1},${val2},${val3})`;
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColour();
    e.style.color = getRandomColour();
})