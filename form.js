class Form{
constructor(){
this.title=createElement("h1")
this.input=createInput("Enter your name")
this.button=createButton("play")
this.greet=createElement("h1")
this.reset=createButton("reset")
}
hide(){
    this.greet.hide()
}

display(){
    this.title.html("HEAD FOOTBALL!!")
    this.title.position(600,50)
    this.reset.position(1100,100)

    this.input.position(600,200)
    this.button.position(600,300)

    this.button.mousePressed(()=>{
        playerCount=playerCount+1;
        player.index=playerCount;
        player.updatePlayerCount(playerCount)
        this.input.hide()
        this.button.hide()
        this.title.hide()
        player.name = this.input.value();
        player.update()
        this.greet.position(600,200)
        this.greet.html("Wait for the other person to join or invite a friend")

        //to set each player at different x positions
        if(player.index ===1){
            Matter.Body.setPosition(player.body, {x:100,y:200})
        }else{
            Matter.Body.setPosition(player.body, {x:800,y:200})
        }

        //update the DB with the new position of the players when each player joins
        player.updateLocation(player.body.position.x,player.body.position.y);
    
    })
    this.reset.mousePressed(()=>{
        player.updatePlayerCount(0)
        game.update(0)
    })

}


}