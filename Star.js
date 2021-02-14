class Star extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("star.png");
   this.visiblity=255
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      if(this.body.speed<0.8){
        super.display()
      }
    else{
      World.remove(world,this.body)
      push()
      this.Visiblity=this.Visiblity-5
      tint(255,this.Visiblity)
      image(this.image,this.body.position.x,this.body.position.y,50,50)
      pop()
    }
    
       
    }

}