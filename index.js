const incbtn = document.getElementById("increment-btn");
const heading = document.getElementById("count-el");
const saveEl = document.getElementById("save-El");
let count = 0;

// incbtn.addEventListener("click",function(){
//     heading.innerHTML++;
// })

function increment(){

    count = count+ 1;
    heading.textContent = count;
}

function save(){
    let content = count + " ~ ";
    saveEl.textContent += content;
    count = 0;
    heading.textContent = count;
}
