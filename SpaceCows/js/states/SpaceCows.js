/* 
 * SpaceCows.js
 * Space Cows
 * 
 * The actual gameplay state. Asks user multiplication questions. There are three options
 * 		to choose from. Two of them must be '0' or '1'.
 * 
 * Created by Keyyva on Nov 1 2018
 */

class SpaceCows extends Phaser.State {
	constructor(){
		super();
		// Images
		this.spaceCowsBackground;
		this.ufoLight;
		this.tryAgain;
		
		// Buttons
		this.button1;
		this.button2;
		this.button3;
		this.continueButton;
		
		// The frame numbers in the ButtonAnswer sprite for each button state
		this.buttonType = {IDLE: 0, HOVER: 1, CLICK: 2};
		
		// Text
		this.question;
		this.answer1;
		this.answer2;
		this.answer3;
		
		// Questions and Answers
		this.generator;
		this.QA = {q1: 0, a: 0, q2: 0};		// Questions are formatted as; q1 X a = q2
	}
	
	create(){
		// Background
		this.spaceCowsBackground = game.add.sprite(game.world.centerX, game.world.centerY, "SpaceCowsBackground");
		this.spaceCowsBackground.anchor.setTo(0.5);
		// Try Again
		this.tryAgain = game.add.sprite(this.spaceCowsBackground.x + this.spaceCowsBackground.width/2, this.spaceCowsBackground.y - this.spaceCowsBackground.height/2, "TryAgain");
		this.tryAgain.anchor.setTo(1, 0);
		this.tryAgain.alpha = 0;
		// UFO Light
		this.ufoLight = game.add.sprite(this.spaceCowsBackground.x - this.spaceCowsBackground.width/20, this.spaceCowsBackground.y + this.spaceCowsBackground.height / 8, "UfoLight");
		this.ufoLight.anchor.setTo(0.5);
		this.ufoLight.alpha = 0;
		
		// Questions and Answers
		this.generator = new QuestionAnswerGenerator();
		
		// Buttons
		this.button1 = game.add.button(this.spaceCowsBackground.x - this.spaceCowsBackground.width/3, this.spaceCowsBackground.y + this.spaceCowsBackground.height / 3, "ButtonAnswer", this.button1Click, this, this.buttonType.HOVER, this.buttonType.IDLE, this.buttonType.CLICK);
		this.button1.anchor.setTo(0.5);
		this.button2 = game.add.button(this.spaceCowsBackground.x, this.spaceCowsBackground.y + this.spaceCowsBackground.height / 3, "ButtonAnswer", this.button2Click, this, this.buttonType.HOVER, this.buttonType.IDLE, this.buttonType.CLICK);
		this.button2.anchor.setTo(0.5);
		this.button3 = game.add.button(this.spaceCowsBackground.x + this.spaceCowsBackground.width/3, this.spaceCowsBackground.y + this.spaceCowsBackground.height / 3, "ButtonAnswer", this.button3Click, this, this.buttonType.HOVER, this.buttonType.IDLE, this.buttonType.CLICK);
		this.button3.anchor.setTo(0.5);
		this.continueButton = game.add.button(-1000, -1000, "ContinueButton", this.reset, this, this.buttonType.HOVER, this.buttonType.IDLE, this.buttonType.CLICK);
		this.continueButton.anchor.setTo(0.5);
		
		// Text
		this.question = game.add.text(this.spaceCowsBackground.x + this.spaceCowsBackground.width/3, this.spaceCowsBackground.y - this.spaceCowsBackground.height/9, this.getQuestion(), {font: "60px Arial", fill: "#000"});
		this.question.anchor.setTo(0.5);
		this.answer1 = game.add.text(this.button1.x, this.button1.y, "0", {font: "70px Arial", fill: "#000"});
		this.answer1.anchor.setTo(0.5);
		this.answer2 = game.add.text(this.button2.x, this.button3.y, "1", {font: "70px Arial", fill: "#00"});
		this.answer2.anchor.setTo(0.5);
		this.answer3 = game.add.text(this.button3.x, this.button3.y, "3", {font: "70px Arial", fill: "#000"});
		this.answer3.anchor.setTo(0.5);
		
		
		this.reset();
		
		game.camera.flash(0, 500);	// FadeIn
	}
	
	/*** Resets the question and answer (also creates the first question and answer) ***/
	reset(){
		this.continueButton.x = -1000;
		this.continueButton.y = -1000;	// Sets continue button into negative space so it's not visible
		this.tryAgain.alpha = 0;
		this.QA = this.generator.generate();		// Generate a question and answer
		this.question.text = this.getQuestion();	// Set the question
		
		// Fill last answer button with a random if it's not the answer
		if(this.QA.a == 0 || this.QA.a == 1){
			this.answer3.text = Math.floor((Math.random() * 6) + 2);
		}
		// Fill the last answer button with the answer
		else{
			this.answer3.text = this.QA.a;
		}
	}
	
	
	/*** A continue button is displayed, when clicked the game get reset ***/
	// When the user picks the correct answer, this function is called
	correct(){
		this.tryAgain.alpha = 0;
		this.continueButton.x = this.spaceCowsBackground.x;
		this.continueButton.y = this.spaceCowsBackground.y;
	}
	
	/*** Returns the question as a string ***/
	getQuestion(){
		return String(this.QA.q1) + " x ? = " + String(this.QA.q2);
	}
	
	
	
	/********** BUTTON FUNCTIONS **********/
	/*** Called when button1 is clicked ***/
	button1Click(){
		if(parseInt(this.answer1.text) == this.QA.a){
			// CORRECT
			console.log("Correct!");
			this.correct();
		}
		else{
			// INCORRECT
			console.log("Try Again");
			this.tryAgain.alpha = 1;
		}
	}
	
	/*** Called when button2 is clicked ***/
	button2Click(){
		if(parseInt(this.answer2.text) == this.QA.a){
			// CORRECT
			console.log("Correct!");
			this.correct();
		}
		else{
			// INCORRECT
			console.log("Try Again");
			this.tryAgain.alpha = 1;
		}
	}
	
	/*** Called when button3 is clicked ***/
	button3Click(){
		if(parseInt(this.answer3.text) == this.QA.a){
			// CORRECT
			console.log("Correct!");
			this.correct();
		}
		else{
			// INCORRECT
			console.log("Try Again ");
			this.tryAgain.alpha = 1;
		}
	}
}