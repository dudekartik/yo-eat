class Block{
    constructor(x, y) {
        var options = {
            'restitution':0.2,
            'friction':0.2,
            'density':0.3
        }
        this.visibility = 255
        this.body = Bodies.rectangle(x, y,30, 40, options);
        this.width = 30;
        this.height = 40;
        World.add(world, this.body);
      }
      display(){
      
        if(this.body.speed <4){
        var angle = this.body.angle;
        var pos=this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        this.visibilty=255
        this.visibilty=this.visibilty-5
        pop();
        }else{
          World.remove(world,this.body)
          push();
          this.visibility =this.visibility -5
          pop();
        }
      }
      score(){
        if (this.visibility < 0 && this.visibility > -105){
          score++;
        }
      }

}