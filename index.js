const incbtn = document.getElementById("increment-btn");
const heading = document.getElementById("count-el");
let count = 0;

// incbtn.addEventListener("click",function(){
//     heading.innerHTML++;
// })

function increment(){

    count = count+ 1;
    heading.innerText = count;
}

function save(){
    console.log(heading.innerHTML);
}

save()