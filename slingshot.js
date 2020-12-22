class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 1
        }
        this.chain = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            fill("blue")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
        attach(body){
            this.chain.bodyA = body;
        }
    fly(){
        this.chain.bodyA=null
        
    }
}