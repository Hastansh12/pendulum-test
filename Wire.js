class Wire{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bob,
           bodyB: wall,
            stiffness: 0.04,
            length: 10
        }
        this.Wire = Constraint.create(options);
        World.add(world, this.Wire);
        fill('black');
    }

    display(){
       if(this.Wire.bodyA){
        var pointA = this.Wire.bodyA.position;
        var pointB=this.pointB
        strokeWeight(8);
        stroke('black');
        line(wall.x , wall.y, bob.x , bob.y);
       }
    }
}