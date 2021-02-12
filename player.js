class Player{
    constructor(){
       this.name=null;
       this.distance=0;
    }
    getPlayerCount(){
        database.ref("PlayerCount").on("value",function(data){
            playerCount=data.val()
        })
    
    }
    static getAllPlayers(){
        database.ref("Players").on("value",function(data){
           allPlayers=data.val()
        })
    }
    writePlayers(){
        database.ref("Players/Player"+playerCount).set({Distance:this.distance,Name:this.name})
    }
    updatePlayerCount(count){
        database.ref("/").update({PlayerCount:count})
    }
}
