class Player{
    constructor(){

        this.body=Bodies.rectangle(100,100,50,100);
        World.add(world,this.body);
        this.score=0;
        this.index=0;
        this.name=null;
        var option={
            isStatic:true
        }
        this.enemy = Bodies.rectangle(100,100,50,100);
        World.add(world,this.enemy);
        
    }
    
    async getPlayerCount(){
        var dbref=database.ref("playerCount")
        await dbref.on("value",(data)=>{
            playerCount=data.val();
        })
    }

    updatePlayerCount(count){
        var dbref=database.ref("/");
        dbref.update({
            playerCount: count
        })
        
        
    }
    update(){
        var playerIndex="Players/player"+this.index
        database.ref(playerIndex).update({
            name:this.name,
            score:this.score,
            
          });
    }

    static getPlayersInfo(){
        var dbref=database.ref("Players")
        dbref.on("value",(d)=>{
            allplayers=d.val()
        })
    }
    updateLocation(xPos,yPos){
        var playerIndex="Players/player"+this.index;
        database.ref(playerIndex).update({
            
            x:xPos,
            y:yPos
          });
    }
    
}