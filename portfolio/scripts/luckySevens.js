function playGame(){
	var stBet = Number(document.forms["luckySevens"]["bet"].value);
	var money = stBet;
	var firstDie;
	var secondDie;
	var diceSum;
	var maxWinnings = 0;
	var rolls = 0;
	var maxRolls = 0;

	if(money<1){
		alert("Starting Bet must greater than $0.99");
		return false;
	}
	else{
		while(money >= 1){
			firstDie = Math.floor(Math.random() * 6) + 1;
			secondDie = Math.floor(Math.random() * 6) + 1;
			diceSum = firstDie + secondDie;
			rolls++;
			if(diceSum == 7){
				money += 4;
				if(money > maxWinnings){
					maxWinnings += (money-maxWinnings);
					maxRolls = rolls;
				}
			}
			else{
				money--;
			}
		}
	}
	document.forms["luckySevens"]["bet"].value = stBet.toFixed(2);
	document.getElementById("results").style.display = "block";
	document.getElementById("start").innerText = "$" + stBet.toFixed(2);
	document.getElementById("rollsNum").innerText = rolls;
	document.getElementById("max").innerText = "$" +maxWinnings.toFixed(2);
	document.getElementById("rollsMax").innerText = maxRolls;
	return false;
}
