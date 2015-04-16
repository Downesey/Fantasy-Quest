$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	initializeLib(ctx);
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;

	numObjects = 0;
	numObjectsLoaded =0;
	var screen = 0;
	var backy = makePicture('Images/backy.PNG');
	var backyBonus = makePicture('Images/Backy3.PNG');
	var scoreboard = 0
	var logo1 = makePicture('Images/GameLogo2.PNG');
	
	///////Characters
	
	var mjmp = createObjectPic("Images/MarioJump.PNG")
	var sncstnd = createObjectPic("Images/SonicStand.PNG")
	var linksh = createObjectPic("Images/LinkShield.PNG")
	//Wizard
	var Wizard= createObjectPic("Images/MainWizardard2.PNG")
	Wizard.addFrames('Images/MainWizard2.PNG');
	Wizard.addFrames('Images/MainWizard3.PNG');
	Wizard.addFrames('Images/MainWizard4.PNG');
	Wizard.addFrames('Images/MainWizard6.PNG');
	Wizard.addFrames('Images/MainWizard7.PNG');
	Wizard.addFrames('Images/MainWizard8.PNG');
	Wizard.animationDelay=0
	//Mexican
	var Mexican= createObjectPic("Images/Mexican 1.PNG")
	Mexican.addFrames('Images/Mexican 2.PNG');
	Mexican.addFrames('Images/Mexican 3.PNG');
	Mexican.addFrames('Images/Mexican 4.PNG');
	Mexican.addFrames('Images/Mexican 5.PNG');
	Mexican.addFrames('Images/Mexican 6.PNG');
	Mexican.addFrames('Images/Mexican 7.PNG');
	Mexican.addFrames('Images/Mexican 8.PNG');
		Mexican.animationDelay=0
	//Zombies
	var Zombie= createObjectPic("Images/Zombie.PNG")
		Zombie.addFrames('Images/Zombie2.PNG');
		
		var Zombie1= createObjectPic("Images/Zombie.PNG")
		Zombie1.addFrames('Images/Zombie2.PNG');
		
		var Zombie2= createObjectPic("Images/Zombie.PNG")
		Zombie2.addFrames('Images/Zombie2.PNG');
		
		var Zombie3= createObjectPic("Images/Zombie.PNG")
		Zombie3.addFrames('Images/Zombie2.PNG');
		
		var Zombie4= createObjectPic("Images/Zombie.PNG")
		Zombie4.addFrames('Images/Zombie2.PNG');
		
	//Fed
	var Fed= createObjectPic("Images/Feds.PNG")
		var Fed2= createObjectPic("Images/Feds.PNG")
			var Fed3= createObjectPic("Images/Feds.PNG")
				var Fed4= createObjectPic("Images/Feds.PNG")
					var Fed5= createObjectPic("Images/Feds.PNG")
	
		
	/////////Buttons
	var button1 =createButton(205,410,200,50,null,"Play Game") 
	button1.colour='grey' 
	button1.textCol = 'red'
	button1.job = function(){
		screen=2 
		IntenseBattleTheme.play();	
		scoreboard=0
		Zombie.x = Math.random()*300+400
	Zombie.y = Math.random()*300+100
	Zombie1.x = Math.random()*300+400
	Zombie1.y = Math.random()*300+100
	Zombie2.x = Math.random()*300+400
	Zombie2.y = Math.random()*300+100
	Zombie3.x = Math.random()*300+400
	Zombie3.y = Math.random()*300+100
	Zombie4.x = Math.random()*300+400
	Zombie4.y = Math.random()*300+100
	Wizard.x = 100
	Wizard.y = 230

		Fed.x = Math.random()*300+400
	Fed.y = Math.random()*300+100
	Fed2.x = Math.random()*300+400
	Fed2.y = Math.random()*300+100
	Fed3.x = Math.random()*300+400
	Fed3.y = Math.random()*300+100
	Fed4.x = Math.random()*300+400
	Fed4.y = Math.random()*300+100
	Fed5.x = Math.random()*300+400
	Fed5.y = Math.random()*300+100
	Mexican.x = 100
	Mexican.y = 100
	}
	var button2 =createButton(400,350,200,50, null,"Credits")
	button2.colour='grey' 
	button2.textCol = 'red'
	button2.job = function(){
		screen=3
	}
	var button3 =createButton(10,350,200,50, null,"Instructions")
	button3.colour='grey' 
	button3.textCol = 'red'
	button3.job = function(){
		//IntenseBattleTheme.play();
		screen=5
	}
	
	
	var button4 =createButton(210,200,200,50, null,"Retry")
	button4.colour='grey' 
	button4.textCol = 'red'
	button4.job = function(){
		screen=2
	IntenseBattleTheme.play();
	scoreboard = 0
	Zombie.x = Math.random()*300+400
	Zombie.y = Math.random()*300+100
	Zombie1.x = Math.random()*300+400
	Zombie1.y = Math.random()*300+100
	Zombie2.x = Math.random()*300+400
	Zombie2.y = Math.random()*300+100
	Zombie3.x = Math.random()*300+400
	Zombie3.y = Math.random()*300+100
	Zombie4.x = Math.random()*300+400
	Zombie4.y = Math.random()*300+100
	Wizard.x = 100
	Wizard.y = 230

		Fed.x = Math.random()*300+400
	Fed.y = Math.random()*300+100
	Fed2.x = Math.random()*300+400
	Fed2.y = Math.random()*300+100
	Fed3.x = Math.random()*300+400
	Fed3.y = Math.random()*300+100
	Fed4.x = Math.random()*300+400
	Fed4.y = Math.random()*300+100
	Fed5.x = Math.random()*300+400
	Fed5.y = Math.random()*300+100
	Mexican.x = 100
	Mexican.y = 100
	}
	var button5 =createButton(210,150,200,50, null,"Move to bonus level!")
	button5.colour='grey' 
	button5.textCol = 'red'
	button5.job = function(){
		IntenseBattleTheme.play();
		
		screen=6
		
	}
	var button6 =createButton(210,300,200,50, null,"Back To Menu")
	button6.colour='grey' 
	button6.textCol = 'red'
	button6.job = function(){
		
		
		screen=1
	
		
	}
	
	
	////button sounds
	var IntenseBattleTheme = addSound('Sounds/IntenseBattleTheme.mp3',false); 
	var SaberON = addSound('Sounds/SaberON.mp3',false); 
	var swingS1 = addSound('Sounds/SwordSwing1.mp3',false); 
	
	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{
	/////////////////////
	///STATE VARIABLES
	/// All your variables get their start values here.
	
	mjmp.x = 100
	mjmp.y = 300
	mjmp.speedx = 15;
	mjmp.speedy = 15;
	mjmp.scale = 0.04
	
	Zombie.x = Math.random()*300+400
	Zombie.y = Math.random()*300+100
	Zombie.speedx = -8;
	Zombie.speedy = 15;
	Zombie.scale = 0.15
	
	Zombie1.x = Math.random()*300+400
	Zombie1.y = Math.random()*300+100
	Zombie1.speedx = -8;
	Zombie1.speedy = 15;
	Zombie1.scale = 0.15
	
	Zombie2.x = Math.random()*300+400
	Zombie2.y = Math.random()*300+100
	Zombie2.speedx = -8;
	Zombie2.speedy = 15;
	Zombie2.scale = 0.15
	
	Zombie3.x = Math.random()*300+400
	Zombie3.y = Math.random()*300+100
	Zombie3.speedx = -10;
	Zombie3.speedy = 15;
	Zombie3.scale = 0.15
	
	Zombie4.x = Math.random()*300+400
	Zombie4.y = Math.random()*300+100
	Zombie4.speedx = -8;
	Zombie4.speedy = 15;
	Zombie4.scale = 0.15
	
	
	Wizard.x = 100
	Wizard.y = 230
	Wizard.speedx = 12.5;
	Wizard.speedy = 12.5;
	Wizard.scale = 0.25
	
		Mexican.x = 100
	Mexican.y = 100
	Mexican.speedx =15;
	Mexican.speedy = 15;
	Mexican.scale = 0.1

	
	Fed.x = Math.random()*300+400
	Fed.y = Math.random()*300+100
	Fed.speedx = -13;
	Fed.speedy = 15;
	Fed.scale = 0.05
	
	Fed2.x = Math.random()*300+400
	Fed2.y = Math.random()*300+100
	Fed2.speedx = -13;
	Fed2.speedy = 15;
	Fed2.scale = 0.05
	
	Fed3.x = Math.random()*300+400
	Fed3.y = Math.random()*300+100
	Fed3.speedx = -13;
	Fed3.speedy = 25;
	Fed3.scale = 0.05
	
	Fed4.x = Math.random()*300+400
	Fed4.y = Math.random()*300+100
	Fed4.speedx = -13;
	Fed4.speedy = 15;
	Fed4.scale = 0.05
	
	Fed5.x = Math.random()*300+400
	Fed5.y = Math.random()*300+100
	Fed5.speedx = -13;
	Fed5.speedy = 15;
	Fed5.scale = 0.05
	

	
	
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	init();	
	


	
	
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		///////////////////////
		//	CLEAR THE SCREEN
		////////////////////
		ctx.fillStyle = 'white';
		ctx.fillRect(0,0, w, h);	
		
		
		
		if(screen == 0){
		/////////////////////
		//	LOADING SCREEN
			ctx.fillStyle = 'red';
			ctx.fillText("DERPING STUFF" + numObjectsLoaded + "/" + numObjects,1,10)
		
			if(numObjectsLoaded >= numObjects) screen = 1;
		
		}else if(screen == 1){//Menu
		////////////////////
		//	MAIN MENU
		
			ctx.fillStyle = 'black'
			ctx.fillRect(0,0,800,600)
			
			ctx.fillStyle = 'red'
			ctx.font='30pt Arial';
			ctx.drawImage(logo1 ,-100,-100,800,600);
			
		
			
			
			//DRAWINGS
			//mjmp.draw();
			//sncstnd.draw();
			//linksh.draw();
			button1.draw();
			button2.draw();
			button3.draw();
			
			////DRAWINGS END
			
		
			
				
			
		
		}else if(screen == 2){//Game1
		////////////////////
		//	GAME SCREEN 1
		ctx.drawImage (backy, 0,0,w,h)
			
		
		//drawings
		
		Wizard.draw();
			Zombie.draw();
			Zombie1.draw();
			Zombie2.draw();
			Zombie3.draw();
			Zombie4.draw();
			ctx.fillStyle='red'
			ctx.fillText('score:',270,70) 
					ctx.font='30pt Chiller';
			ctx.fillText(scoreboard,340,70)
		//zombie movement
		Zombie.x = Zombie.x + Zombie.speedx
		Zombie1.x = Zombie1.x + Zombie1.speedx
        Zombie2.x = Zombie2.x + Zombie2.speedx
		Zombie3.x = Zombie3.x + Zombie3.speedx
		Zombie4.x = Zombie4.x + Zombie4.speedx
		//kill
		if(Wizard.collideObject(Zombie)){
				Zombie.x = Math.random()*300+400
	            Zombie.y = Math.random()*300+100
				scoreboard += 1
			
			}
			
		if(Wizard.collideObject(Zombie1)){
				Zombie1.x = Math.random()*300+400
				Zombie1.y = Math.random()*300+100
			scoreboard += 1
			}
        
		if(Wizard.collideObject(Zombie2)){
				Zombie2.x = Math.random()*300+400
				Zombie2.y = Math.random()*300+100
		scoreboard += 1
		}
		
        if(Wizard.collideObject(Zombie3)){
				Zombie3.x = Math.random()*300+400
				Zombie3.y = Math.random()*300+100
			scoreboard += 1
			}
        
		if(Wizard.collideObject(Zombie4)){
				Zombie4.x = Math.random()*300+400
				Zombie4.y = Math.random()*300+100
			scoreboard += 1
			}
		if(Zombie.x <0||Zombie1.x <0||Zombie2.x <0||Zombie3.x <0||Zombie4.x<0){
		screen=4 
			IntenseBattleTheme.stop();
		}
		if (scoreboard >= 100) screen=7;
		}else if(screen == 3){//Credits
		//TITLE
		ctx.fillStyle = 'black'
			ctx.fillRect(0,0,800,600)
			
			ctx.fillStyle = 'white'
						ctx.font='30pt Arial';
			ctx.fillText("Fantasy Quest Credits",235,40,150,150);
			//CREDITS
			ctx.fillStyle = 'red'
						ctx.font='10pt Arial';
			ctx.fillText("Creator:Jake Downes",245,100);
			ctx.fillText(" Coding:Jake Downes.",245,120);
			ctx.fillText(" Influence:My own design",235,140);
			ctx.fillText("SPECIAL THANKS TO:",235,160);
			ctx.fillText(" Nathan Churcher",255,180);
			ctx.fillText(" Jaeden MacIsaac",255,200);
			ctx.fillText(" GUZY!!!!",278,220);
			ctx.fillText("Mom",298,240);
			ctx.fillText("The Academy",270,260);
			ctx.fillText("Julianna CUMINSO",250,280);
			button6.draw();
		}else if(screen == 4){//GAME OVER SCREEN
	
		
		//Game Over!!
		
		ctx.fillStyle = 'black'
			ctx.fillRect(0,0,800,600)
			
			ctx.fillStyle = 'white'
						ctx.font='30pt Arial';
			ctx.fillText("GAME OVER!!",235,60,150,150);
			ctx.fillText("Score:",255,120,150,150);
		
		//score
		ctx.fillText(scoreboard,290,160)
		//button
		button4.draw();
		button6.draw();
		}else if(screen == 5){//Instructions
		//
		ctx.fillStyle = 'black'
			ctx.fillRect(0,0,800,600)
			
			ctx.fillStyle = 'red'
			ctx.font='30pt Arial';
			ctx.fillText("Instructions:",235,60,150,150);
			ctx.font='10pt Arial';
			ctx.fillText("use the left,right,up and down arrow keys to move the wizard." ,150,120);
			ctx.fillText("The objective is to kill as many zombies with your fire spell before one crosses into the forest.",60,145);
			button6.draw();
		//
	}else if(screen == 6){//Bonus Level
	ctx.drawImage (backyBonus, 0,0,w,h)
			
		
		//drawings
		
		Mexican.draw();
			Fed.draw();
			Fed2.draw();
			Fed3.draw();
			Fed4.draw();
			Fed5.draw();
						ctx.fillStyle='red'
			ctx.fillText('score:',270,370) 
					ctx.font='30pt Chiller';
			ctx.fillText(scoreboard,340,370)
		//Fed movement
		Fed.x = Fed.x + Fed.speedx
		Fed2.x = Fed2.x + Fed2.speedx
        Fed3.x = Fed3.x + Fed3.speedx
		Fed4.x = Fed4.x + Fed4.speedx
		Fed5.x = Fed5.x + Fed5.speedx
		//kill
		if(Mexican.collideObject(Fed)){
				Fed.x = Math.random()*300+400
	            Fed.y = Math.random()*300+100
				scoreboard += 2
			
			}
			
		if(Mexican.collideObject(Fed2)){
				Fed2.x = Math.random()*300+400
				Fed2.y = Math.random()*300+100
			scoreboard += 5
			}
        
		if(Mexican.collideObject(Fed3)){
				Fed3.x = Math.random()*300+400
				Fed3.y = Math.random()*300+100
		scoreboard += 4
		}
		
        if(Mexican.collideObject(Fed4)){
				Fed4.x = Math.random()*300+400
				Fed4.y = Math.random()*300+100
			scoreboard += 2
			}
        
		if(Mexican.collideObject(Fed5)){
				Fed5.x = Math.random()*300+400
				Fed5.y = Math.random()*300+100
			scoreboard += 3
			}
		if(Fed.x <0||Fed2.x <0||Fed3.x <0||Fed4.x <0||Fed5.x<0){
		screen=4 
			IntenseBattleTheme.stop();
		}
	
	
	}else if(screen == 7){//Level Swap
			ctx.fillStyle = 'black'
			ctx.fillRect(0,0,800,600)
			
			ctx.fillStyle = 'white'
						ctx.font='30pt Arial';
			ctx.fillText("BONUS LEVEL!!",235,60,150,150);
			//button
			button5.draw();
		
		
		
		
		
		
		}
	
	
	
	}  
	
	////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	

	

	
	
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	
	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
		
		//Runs this code whenever the mouse is clicked
		//For more screens for your game, just add more else ifs
		if(screen == 0){
		
		
		}else if (screen == 1){
		
			if(button1.isMouseOver()) button1.job()
			if(button2.isMouseOver()) button2.job()
			if(button3.isMouseOver()) button3.job()
		
			
				//button pause
			
			//if(button1p.isMouseOver()) button1p.job()
			//if(button2p.isMouseOver()) button2p.job()
			//if(button3p.isMouseOver()) button3p.job()
		
		
		}else if (screen == 4){
		
			if(button4.isMouseOver()) button4.job()
			if(button6.isMouseOver()) button6.job()
		}else if (screen == 7){
		
			if(button5.isMouseOver()) button5.job()
		
		}else if (screen == 5){
		
			
			if(button6.isMouseOver()) button6.job()
		}else if (screen == 3){
		
			
			if(button6.isMouseOver()) button6.job()
		}
		
	   
		 
	}, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;
		updateMouse(mx,my);

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
	// up 38
	//down 40
	//right 39
	//left 37
	
	
		if(key==37){//left
			Wizard.x -= Math.abs (Wizard.speedx)
			if(Wizard.x < 0) Wizard.x=0
		}else if (key == 38){//up
			Wizard.y -= Math.abs (Wizard.speedy)
			if(Wizard.y < 0) Wizard.y=0
		}else if (key == 39){//right
			Wizard.x += Math.abs (Wizard.speedx)
			if(Wizard.x > 640 - Wizard.width) Wizard.x=640 -Wizard.width
		}else if (key == 40){//down
			Wizard.y += Math.abs (Wizard.speedy)
			if(Wizard.y > 480 -Wizard.height) Wizard.y=480 - Wizard.height
			
		}
		
		
		if(key==37){//left (a) 
			Mexican.x -= Math.abs (Mexican.speedx)
			if(Mexican.x < 0) Mexican.x=0
		}else if (key == 38){//up (w)
			Mexican.y -= Math.abs (Mexican.speedy)
			if(Mexican.y < 0) Mexican.y=0
		}else if (key == 39){//right (d)
			Mexican.x += Math.abs (Mexican.speedx)
			if(Mexican.x > 640 - Mexican.width) Mexican.x=640 -Mexican.width
		}else if (key == 40){//down (s) 
			Mexican.y += Math.abs (Mexican.speedy) 
			if(Mexican.y > 480 -Mexican.height) Mexican.y=480 - Mexican.height
		}
		
		Math.abs
	}, false); //End the event listener
//

	

	

})

