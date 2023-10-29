

const girdElement = document.querySelector(".grid")
 let grid = []
 let result = ""
for (let i = 0; i <= 100; i++) 
{
   
    if (i <= 100)
    {
        result = (i)
        grid.push(result)
    }
}
console.log(grid)

for (let i = 1; i <= grid.length; i++)

{
const curNumber = grid[i]
const cell = generateGridCell(curNumber);
// cell.addEventListener("click", press)
girdElement.append(cell);
}
function generateGridCell(innerNumber) {
    const newCell = document.createElement("div");
    newCell.classList.add("square");
    newCell.innerHTML = innerNumber;
    return newCell;
}


