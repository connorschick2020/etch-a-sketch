const container = document.getElementById("container");
let arr = ['blue','red','yellow','orange',
           'purple',,'green',]
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  let size = 960/rows;
  let sizeString = size.toString() + 'px'
  console.log(size)
  container.style.setProperty('--size',sizeString)
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.style.backgroundColor='white';
    cell.addEventListener('mouseover',()=>{
        if(cell.style.backgroundColor!=='white'){
            cell.style.backgroundColor='white'; 

        }
        else{
            cell.style.backgroundColor= arr[Math.floor((Math.random()*arr.length))]; 
        }
        
    });
    container.appendChild(cell).className = "grid-item";
  };
};

function clearGrid(){
    //const cells= document.querySelectorAll('.grid-item');
    const spanList = [...document.querySelectorAll(".grid-item")];
    console.log(spanList)
    spanList.forEach(element => {
       element.style.backgroundColor='white';
   });

}

function removeGrid(){
    const spanList = [...document.querySelectorAll(".grid-item")];
    const container = document.getElementById("container");

    console.log(spanList)
    spanList.forEach(element => {
        container.removeChild(element)
    });
}

function gridSize(){
    let size=101;
    while(size>50) {
        size = prompt("Input a value less than 100");

    }
    removeGrid()
    makeRows(size,size)
}

makeRows(16,16)

