class Projectile{
     constructor(bodyA,pointB){
        var options = {
               bodyA:bodyB,
               pointB:pointB, 
               stiffness:0.04, 
               lenght:10,
        }
               this.pointB = pointB;
               this.body = Connstraint.create(options);
               World.add(world,this.body); 
     }
           release(){
                this.body.bodyA = null;
           }
             display(){
                 if(this.body.bodyA){
                      var pointA=this.body.bodyA.position;
                      var pointB=thi.pointB;
                      strokeWeight(1);
                      stroke("blue");
                      line(pointA.x,pointA.y,pointB.x,pointB.y); 

                 }
             }  
         } 