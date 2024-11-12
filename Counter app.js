 
let count = 0;

let displaybnt = document.getElementById("display")
displaybnt.innerHTML = count
console.log(displaybnt)


const increase = () => {
    count = count + 1;
    displaybnt.innerHTML = count
}
 

const decrease = () => {
    count =  count - 1;
    displaybnt.innerHTML = count
}
 
 
const save = () => {
    count = count
     displaybnt.innerHTML = count
}

const deleteBtn = () =>{
    count = ''
     displaybnt.innerHTML = count
}
 
