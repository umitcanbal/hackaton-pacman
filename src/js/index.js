document.addEventListener('DOMContentLoaded', () => {

  const stage = document.querySelector(".stage");
  // console.log(stage);

  const pacman1 = new Pacman (85, "open");
  // console.log(pacman1);

  pacman1.mount(stage);

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      pacman1.moveRight();
    } else if (event.key === "ArrowLeft") {
      pacman1.moveLeft();
    } else if (event.key === "ArrowUp") {
      pacman1.moveUp();
    } else if (event.key === "ArrowDown") {
      pacman1.moveDown();
    }
  })


  // const move = document.querySelector("#divElm");
  
  // let xPos = 0;
  // let yPos = 0;
  // const tileSize = 85;

  //   document.addEventListener("keydown", (event) => {
  //     if (event.key === "ArrowDown") {
  //       yPos = 2*tileSize
  //       xPos += tileSize;
  //       move.style.backgroundPosition = xPos + "px " + yPos + "px";
  //     }  
  //     else if (event.key === "ArrowUp") { 
  //       yPos = 1*tileSize;
  //       xPos += tileSize;
  //       move.style.backgroundPosition = xPos + "px " + yPos + "px";
  //     } 
  //     else if (event.key === "ArrowRight") {
  //       if (xPos < 1020-tileSize) {
  //         yPos = 0;
  //         xPos += tileSize;
  //         move.style.backgroundPosition = xPos + "px " + yPos + "px";
  //         move.style.left = xPos + "px";
  //       }
  //     } 
  //     else if (event.key === "ArrowLeft") {
  //       if (xPos > 0) {
  //         yPos = 3*tileSize;
  //         xPos -= tileSize;
  //         move.style.backgroundPosition = xPos + "px " + yPos + "px";
  //         move.style.left = xPos + "px";
  //       }
  //     }
  // });
  
});
