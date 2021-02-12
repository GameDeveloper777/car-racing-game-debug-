class Form{
    constructor(){
        this.input=createInput("ENTER YOUR NAME")
        this.button=createButton("PLAY")
        this.input.position(250,250)
        this.button.position(250,270)
        this.greeting=createElement("H1")
    }
    display(){

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            console.log()
            player.name=this.input.value()
            playerCount=playerCount+1;
            player.writePlayers();
            player.updatePlayerCount(playerCount);
            this.greeting.html("hello "+player.name);
            this.greeting.position(250,290)
        })
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
}