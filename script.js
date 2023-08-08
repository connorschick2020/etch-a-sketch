const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover',()=>{
        if(cell.style.backgroundColor==='black'){
            cell.style.backgroundColor='white'; 

        }
        else{
            cell.style.backgroundColor='black'; 
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
    let size = prompt("Input a value less than 100");
    removeGrid()
    makeRows(size,size)
}

makeRows(16,16)

