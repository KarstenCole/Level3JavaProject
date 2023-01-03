function initialize(num){
    PlayerDieRoll = null;
    ComputerDieRoll = null;
    DieRolled = false;
    console.log("dieroll=false");
    ComputerJustRolled = false;
    
    Log = document.getElementById("Log");
    if(num===1){originalHTML = Log.innerHTML;}

    Winner = document.getElementById("PreviousWinner");

    PlayerRoll = document.getElementById("Player-Roll");
    ComputerRoll = document.getElementById("Computer-Roll");

    ComputerBlackDisplay = document.getElementById("C-B");
    ComputerBlack = 12;
    ComputerRedDisplay = document.getElementById("C-R");
    ComputerRed = 12;

    PlayerBlackDisplay = document.getElementById("P-B");
    PlayerBlack = 12;
    PlayerRedDisplay = document.getElementById("P-R");
    PlayerRed = 12;

    display();
}

function RollDice(Player){
    if(!DieRolled){
        if(Player === 'P'){
            PlayerDieRoll = parseInt(Math.random()*6+1);
            DieRoll = PlayerDieRoll;
            DieRolled = true;
            console.log("dieroll=true");

            display();
        }
        if(Player === 'C'){
            ComputerDieRoll = parseInt(Math.random()*6+1);
            DieRoll = ComputerDieRoll;
            DieRolled = true;
            console.log("dieroll=true");

            display();

            MovePeices(parseInt(Math.random()*4+1));
        }
    }
}

function MovePeices(Elementid){
    if(DieRolled){
        switch (Elementid){
            case 1:
                PlayerRed += DieRoll;
                ComputerBlack -= DieRoll;
                // adding a new log of the past changes
                var newRow = Log.insertRow();
                var newCell = newRow.insertCell();
                newCell.innerHTML = "There was "+DieRoll+" added to Players Red, and "+DieRoll+" subtracted from Computers black";

                break;
            case 2:
                PlayerBlack += DieRoll;
                ComputerRed -= DieRoll;
                // adding a new log of the past changes
                var newRow = Log.insertRow();
                var newCell = newRow.insertCell();
                newCell.innerHTML = "There was "+DieRoll+" added to Players Black, and "+DieRoll+" subtracted from Computers Red";
                
                break;
            case 3:
                PlayerRed -= DieRoll;
                ComputerBlack += DieRoll;
                // adding a new log of the past changes
                var newRow = Log.insertRow();
                var newCell = newRow.insertCell();
                newCell.innerHTML = "There was "+DieRoll+" added to Computers Black, and "+DieRoll+" subtracted from Players Red";
                
                break;
            case 4:
                PlayerBlack -= DieRoll;
                ComputerRed += DieRoll;
                // adding a new log of the past changes
                var newRow = Log.insertRow();
                var newCell = newRow.insertCell();
                newCell.innerHTML = "There was "+DieRoll+" added to Computers Red, and "+DieRoll+" subtracted from Players Black";
                
                break;
        }
        
        
        display();
        DieRolled = false;
        console.log("dieroll=false");
        if(!ComputerJustRolled && !(Log.innerHTML == originalHTML)){ 
            console.log("computer just rolled");
            ComputerRolls();
        }
    }
    
   
}

function ComputerRolls(){
    ComputerJustRolled = true;
    RollDice('C');
   
    ComputerJustRolled = false;
    DieRolled=false;
    console.log("dieroll=false");
    console.log("computer finished rolling")
}

function display(){
    if(PlayerRed < 0){ PlayerRed = 0;}
    if(ComputerRed < 0){ ComputerRed = 0;}
    if(PlayerBlack < 0){ 
        reset();
        Winner.innerHTML = "Player";
        // ComputerJustRolled = true;
    }
    if(ComputerBlack < 0){
        reset();
        Winner.innerHTML = "Computer";
        // ComputerJustRolled = true;
    }

    PlayerRoll.innerHTML = PlayerDieRoll;
    ComputerRoll.innerHTML = ComputerDieRoll;

    ComputerBlackDisplay.innerHTML = ComputerBlack;
    ComputerRedDisplay.innerHTML = ComputerRed;
    PlayerBlackDisplay.innerHTML = PlayerBlack;
    PlayerRedDisplay.innerHTML = PlayerRed;
}

function reset(){
    initialize(2);
    Log.innerHTML = originalHTML ;

}