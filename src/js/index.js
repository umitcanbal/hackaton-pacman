document.addEventListener('DOMContentLoaded', () => {
  const move = document.querySelector("#divElm");
  
  let xPos = 0;
  let yPos = 0;
  const tileSize = 85;

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
    // yPos = 170;
    // xPos += 85
    // if(yPos === 2*tileSize)
    yPos = 2*tileSize
    // move.style.backgroundPositionY = yPos + "px";
    move.style.backgroundPosition = xPos + "px " + yPos + "px";
  } else if (event.key === "ArrowUp") { 
    yPos = 1*tileSize;
    // move.style.backgroundPositionY = yPos + "px";
    
    move.style.backgroundPosition = xPos + "px " + yPos + "px";
  } else if (event.key === "ArrowRight") {
    // xPos = 0;
    yPos = 0;
    move.style.backgroundPosition = xPos + "px " + yPos + "px";
  } else if (event.key === "ArrowLeft") {
    // xPos = 0;
    yPos = 3*tileSize;
    move.style.backgroundPosition = xPos + "px " + yPos + "px";
    // move.style.backgroundPositionX = xPos + "px";
  }
});
  
});
