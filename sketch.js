/*

Officer: 6474092
CaseNum: 701-3-76252937-6474092

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from lesley casimere.
All they need is for you to do the detective work.

This time you must implement two functions:

- A testProperties function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A traverseSuspects function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testProperties(suspectObj){}
 - function traverseSuspects(){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. They were carrying a big black envelope. I'm not quite sure. I'll never forget their grey eyes. They were fairly tall, I think between a height of 150 and 197 cm. They seemed to be between the age of 30 and 52 years old. They had long white hair. It was very dark and I could barely see, They brobably weigh between 68 and 87 kg. I remember they had a sword tattoo. Their expression seemed confused. It's hard to say. I distinctly remember that they were wearing a fur vest, I remember thinking that was quite unusual. Can I go home now Sir? 

*/

var usualSuspects = [
	{ 
		"name": "NICOLE WARMAN",
		"hair": "shaved",
		"accessory": "black duffle bag",
		"tattoo": "anchor",
		"item": "net weave shirt",
		"weight": 69,
		"height": 183,
		"age": 37
	},
	{ 
		"name": "GAYLA THAXTER",
		"hair": "no",
		"accessory": "laptop bag",
		"tattoo": "neck",
		"item": "dotted necktie",
		"weight": 86,
		"height": 204,
		"age": 23
	},
	{ 
		"name": "BRIDGET PHINNEY",
		"hair": "thick black",
		"accessory": "orange tote bag",
		"tattoo": "ox",
		"item": "pink scarf",
		"weight": 83,
		"height": 169,
		"age": 40
	},
	{ 
		"name": "JESSIA GOODBURY",
		"hair": "long white",
		"accessory": "big black envelope",
		"tattoo": "sword",
		"item": "fur vest",
		"weight": 84,
		"height": 190,
		"age": 46
	},
	{ 
		"name": "NELSON MOHWAWK",
		"hair": "dark brown",
		"accessory": "red backpack",
		"tattoo": "dragon",
		"item": "purple hat",
		"weight": 71,
		"height": 189,
		"age": 44
	},
	{ 
		"name": "JAUNITA JENI",
		"hair": "thin blond",
		"accessory": "glass bottle",
		"tattoo": "facial",
		"item": "pair of leather trousers",
		"weight": 60,
		"height": 185,
		"age": 36
	},
	{ 
		"name": "BRAD COURTWOOD",
		"hair": "short black",
		"accessory": "orange plasic bag",
		"tattoo": "jellyfish",
		"item": "red necktie",
		"weight": 79,
		"height": 166,
		"age": 27
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare both your functions here



function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(traverseSuspects().name + " is guilty!", 60, 80);
}
