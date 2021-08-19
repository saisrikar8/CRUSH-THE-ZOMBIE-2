class Stone{
    constructor(x, radius){
        var options = {
            restitution: 0.2,
            friction:0.1
        };

        this.body = Bodies.circle(x, -(radius), radius, options);
        this.radius= radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        
        push();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius);
        pop();
    }
}