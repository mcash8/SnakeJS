
/**let canvas = document.getElementById('canvas')

let ROWS = 30; 
let CLMNS = 50; 
let PIXEL = 10;

function initializeCanvas(){
    for(let i =0; i< ROWS; i++){
        for(let j = 0; j < CLMNS; j++){
            let pixel = document.createElement('div');
            pixel.style.postion = 'absolute'
            pixel.style.border = '1px solid red'
            pixel.style.left = j * PIXEL + 'px';
            pixel.style.top = i * PIXEL + 'px';
            pixel.style.width = PIXEL + 'px';
            pixel.style.height = PIXEL + 'px';
            canvas.appendChild(pixel)
        }
    }
}

initializeCanvas()

function drawSnake(snake){

}**/

let canvas = document.getElementById("canvas");

let ROWS = 30;
let COLS = 50;
let PIXEL = 10;

let pixels = new Map()


// --- rendering ---

function initializeCanvas() {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      let pixel = document.createElement("div");
      pixel.style.position = "absolute";
      pixel.style.border = "1px solid #aaa";
      pixel.style.left = j * PIXEL + "px";
      pixel.style.top = i * PIXEL + "px";
      pixel.style.width = PIXEL + "px";
      pixel.style.height = PIXEL + "px";
      let position = i + "_" + j; 
      canvas.appendChild(pixel);
      
    }
  }
}

initializeCanvas();

function drawSnake(snake) {
    for (let i =0; i < ROWS; i++){
        for(let j = 0; j< COLS; j++){

        }
    }


}