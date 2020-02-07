class Pacman {
  constructor (x, mouth) {
    this.x = x;
    this.mouth = mouth;
    this.yPos = 0;
    this.y = 0;
  } 

  // move(moveRight, moveLeft, moveUp, moveDown) 

  moveRight() {
    const tileSize = 85;
    this.x += tileSize; 
    this.yPos = 0;
    this.update();

  }

  moveLeft() {
    const tileSize = 85;
    this.x -= tileSize;
    this.yPos = 3*tileSize;
    this.update();
  }

  moveUp() {
    const tileSize = 85;
    // this.x -= tileSize;
    this.yPos = 1*tileSize;
    this.y -= tileSize;
    this.update();
  }

  moveDown() {
    const tileSize = 85;
    // this.x -= tileSize;
    this.yPos = 2*tileSize;
    this.y += tileSize;
    this.update();
  }

  render() {
    this.myElement = document.createElement("div");

    this.myElement.className = "entity entity--pac pacboy-active-light";
  }

  update() {

    const tileSize = 85;
    this.myElement.style.left = this.x + "px";
    this.myElement.style.top = this.y + "px";

    if (this.mouth === "open") {
      this.mouth = "closed";
      this.myElement.style.backgroundPositionX = 0 + "px";
      this.myElement.style.backgroundPositionY = this.yPos + "px";
    } else {
      this.mouth = "open";
      this.myElement.style.backgroundPositionX = tileSize + "px";
      this.myElement.style.backgroundPositionY = this.yPos + "px";
    }
  }


  mouth() {

  } 

  mount(parent) {
    this.render();
    this.update();
    parent.appendChild(this.myElement);
  }

}
