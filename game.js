class Game{
    constructor(){

    }
    getGameState(){
        database.ref("GameState").on("value",function(data){
            gameState=data.val()
        })
    }
    updatingGameState(state){
        database.ref("/").update({GameState:state})
    }
    start(){
        console.log("calling start");
        if(gameState===0){
            
            player=new Player();
            player.getPlayerCount();
            form=new Form();
            form.display();
        }
        car1=createSprite(250,250,5,10);
        car1.addImage("player1White",car1Img);

        car2=createSprite(300,250,5,10);
        car2.addImage("player2Red",car2Img);

        car3=createSprite(350,250,5,10);
        car3.addImage("player3Blue",car3Img);

        car4=createSprite(400,250,5,10);
        car4.addImage("player4Black",car4Img);

        allCars=[car1,car2,car3,car4]
    }
    play(){
        form.hide()
        Player.getAllPlayers()
        //console.log(allPlayers)
        var x=0
        var y=50
        var index=0
        for(var p in allPlayers){
            y=y+50
            index=index+1
            x=x+100
            allCars[index-1].x=x
            allCars[index-1].y=y
            text(allPlayers[p].Name+":"+allPlayers[p].Distance,250,y)
        
                   
        }
        drawSprites();
    }
}