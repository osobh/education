var TheGame = function(rounds, player01, player02){
	this.rounds= rounds;
	this.player01 = player01;
	this.player02 = player02;
	this.winsCounted = 0;
	
};

var ThePlayer = function(name, wins, roshamboChoice){
	this.name = name;
	this.wins = 0;
	this.roshamboChoice = roshamboChoice;
	
};

TheGame.prototype.playGame= function(){
		for( var i = 0 ; i < this.rounds ; i ++){
			this.playRound();
		}
		return this.compareWinner();
};


TheGame.prototype.playRound= function(){
		
			this.player01.choose();
			this.player02.choose();
			this.gameChoice();
			
};

TheGame.prototype.compareWinner= function(){
		
			if(this.player01.wins > this.player02.wins){
				this.winsCounted = this.player01.wins;
				return "player01 Wins";
			}else if( this.player01.wins < this.player02.wins){
					this.winsCounted = this.player02.wins;
					return "player02 Wins";
			}else{
				this.winsCounted = this.player01.wins;
				return "there has been a tie!";

				}
};
			


ThePlayer.prototype.choose= function(){
		var randomNum = Math.floor(Math.random() * 6) + 1 ;
		if (randomNum <= 2){
			this.roshamboChoice = "rock";
		} else if(randomNum <=4){
			this.roshamboChoice = "paper";
		} else{
			this.roshamboChoice = "scissors";
		}
		
};


TheGame.prototype.gameChoice= function(){
		if(this.player01.roshamboChoice === "rock"){
			if(this.player02.roshamboChoice === "rock"){
				console.log("This is a draw");
				return;
			}else if(this.player02.roshamboChoice === "paper"){
				console.log("player02 Wins!");
				this.player02.wins++;
				return;
			} else if(this.player02.roshamboChoice === "scissors"){
				console.log("player02 loses!, Player01 Wins!");
				this.player01.wins++;
				return;
			}
		} else if(this.player01.roshamboChoice === "paper"){
				if(this.player02.roshamboChoice === "rock"){
				console.log("player02 loses!, player01 Wins!");
				this.player01.wins++;
				return;
				} else if(this.player02.roshamboChoice === "paper"){
					console.log("This is a draw");
					return;
				} else if(this.player02.roshamboChoice === "scissors"){
					console.log("player02 wins!, player01 loses!");
					this.player02.wins++;
					return;
				}

		} else if(this.player01.roshamboChoice === "scissors"){
				if(this.player02.roshamboChoice === "rock"){
				console.log("player02 wins!, player01 loses!");
				this.player02.wins++;
				return;
				} else if(this.player02.roshamboChoice === "paper"){
					console.log("player01 wins!, player02 loses!");
					this.player01.wins++;
					return;
				} else if(this.player02.roshamboChoice === "scissors"){
					console.log("This is a draw!");
					return;
				}
			}

		
};

//New Instance of the Class

var player01 = new ThePlayer("player01", 0);
var player02 = new ThePlayer("player02", 0);
var game01 = new TheGame(10, player01, player02);
game01.playgame();
