//verifySudoku()
//result

document.addEventListener("DOMContentLoaded", function(){
    const sudokuBase = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];
    
    generateSudoku(sudokuBase)
});

function generateSudoku(sudoku){
    const gridElement = document.querySelector(".sudoku-grid");
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            const input = document.createElement("input");
            input.type = "number";
            input.min = 1;
            input.max = 9;
            if(sudoku[i][j] == 0){
                input.value = sudoku[i][j];
                input.disabled = true;
            }else{
                input.value = '';
            }
            input.id = `cell-${i}-${j}`;
            gridElement.appendChild(input);
        }
    }
}