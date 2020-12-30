class createDrop{
    constructor(x,y){
        var dropOptions ={
         friction:0.001,
         restitution:0.1
        }
      this.drop = Bodies.circle(x,y,5,dropOptions);
      World.add(world,this.drop)
    }
    updateY(){     
        if(this.drop.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }
    display(){
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(this.drop.position.x,this.drop.position.y,5);
    }
}