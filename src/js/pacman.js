class Pacman {
  constructor (x, mouth) {
    this.x = x;
    this.mouth = mouth;
  } 

  moveRight() {
    const tileSize = 85;
    // let xPos = 0;
    // let yPos = 0;

      // if (this.x < 1020-tileSize) {
        // yPos = 0;
        this.x += tileSize;
        // this.myElement.style.backgroundPosition = xPos + "px " + yPos + "px";
        // this.myElement.style.left = xPos + "px";
      // }
      this.update();
  }
  


  render() {
    this.myElement = document.createElement("div");

    this.myElement.className = "entity entity--pac pacboy-active-light";
  }

  update() {
    const tileSize = 85;
    this.myElement.style.left = this.x + "px";

    if (this.mouth = "open") {
      this.myElement.style.backgroundPositionX = 0;
    } else if (this.mouth = "closed") {
      this.myElement.style.backgroundPositionX = tileSize;
    }

  }

  mount(parent) {
    this.render();
    this.update();
    parent.appendChild(this.myElement);
  }

}

//in index.js
// const pacman = new Pacman(0, 'open')

//in constructor
// const move = document.querySelector("#divElm");