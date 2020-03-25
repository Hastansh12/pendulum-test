class Bob {
    constructor(x,y,radius) {
      var options = {}
      this.body = Bodies.circle(x,y,radius,options);
      World.add(world, this.body);
      fill('violet')
    }
    display(){
      var pos=this.body.position;
      ellipseMode(RADIUS);
ellipse(pos.x,pos.y,40);

    }
  };