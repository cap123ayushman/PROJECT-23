class Computer {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image=loadImage("./assets/player.png")
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      var angle=this.body.angle
      push();
      translate(pos.x, pos.y);
      rotate(angle) 
      fill("brown");
      //rectMode(CENTER);
     // rect(pos.x,pos.y, this.width, this.height);
     imageMode(CENTER)
     image(this.image,0,0,this.width,this.height)
      pop();
    }
  }