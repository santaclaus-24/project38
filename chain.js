class Chain {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 20,
            stiffness : 0.04
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;

            push();
            strokeWeight(5);
            stroke("red");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }
    fly(){
        this.chain.bodyA = null;
    }
    attach(bodyA){
        this.chain.bodyA = bodyA;
    }

}