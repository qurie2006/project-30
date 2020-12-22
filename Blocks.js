class Block{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.body.Visiblity = 225;
        //this.static=true;
        World.add(world, this.body);
      }
      display(){
        if(this.body.position.y<480){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        fill("lightpink")
        rect( 0, 0, this.width, this.height);
        pop();
        }
        else{
            World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     pop();
        }
    }
}