class Ball{
    constructor(){
        var option={
            restitution:1
        }
        this.body=Bodies.circle(600,0,40,option)
        World.add(world,this.body)
      
    }
    
    static updateBallPosition(xPos,yPos){
        database.ref("ball").update({
            x:xPos,
            y:yPos
        });
    }
    static async getBallPosition(){
    var dbref=await database.ref("ball");
    await dbref.on("value",(data)=>{
    ballPosition=data.val();

    })
    }



}