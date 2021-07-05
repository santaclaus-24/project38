class Blue {
    constructor(x,y,width,height){
        var options = {
            isStatic : false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        this.image = loadImage("lightblue.png");
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed < 3){
            var pos = this.body.position;
            var angle = this.body.angle;

            push();
            rotate(angle);
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image,0,0,this.width,this.height);
            pop ();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
            pop();
        }
    }
    score(){
        if(this.Visiblity < 0 && this.Visiblity > -1005){
          score++;
        }
      }
}
