var fs = require('fs');
//Start talking with Myo Connect
var Myo = require('myo');
Myo.connect('com.thomdabeast.HearthStoneControl');
console.log("initializing...");
var i = 0;
var heroAttacked = 0;
var numAttacks = 0;

logCutter();
heroAttacked = numAttacks;
numAttacks = 0;

Myo.on('accelerometer', function(d){
	logCutter();
	
	if((numAttacks-heroAttacked) > 0)
		console.log(++i + ". Enemy is attacking");
		
    for(var i = 0; i < numAttacks-heroAttacked; ++i)
	{
		this.vibrate("medium");
	}
	
	heroAttacked += numAttacks-heroAttacked;
	numAttacks = 0;
});

function logCutter() {
	var data = fs.readFileSync('C:\\Program Files (x86)\\Hearthstone\\Hearthstone_Data\\output_log.txt');
	lines = data.toString().split('\n');
	
	// Tests for minions attacking
	var regex1 = /^\[Power\] GameState\.DebugPrintPower\(\) - ACTION_START BlockType=ATTACK Entity=\[name\=/;
	var regex2 = /(cardId=HERO_)/;

	var regex3 = /^\[Power\] PowerTaskList\.DebugPrintPower\(\) - ACTION_START BlockType=POWER Entity=\[name=(Steady Shot|Fireblast)/;
	
	for(var i = 0; i < lines.length; ++i)
	{
		//console.log("Test 1: " + regex1.test(lines[i]) + ", Test 2: " + regex2.test(lines[i]));
		if((regex1.test(lines[i]) && regex2.test(lines[i])) ||
			regex3.test(lines[i]))
		{
			numAttacks++;
			//console.log("match");
		}
	}
}