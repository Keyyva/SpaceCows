/* 
 * AnswerButtons.js
 * Space Cows
 * 
 * Displays a multiplication question.
 * 		Displays three buttons on the bottom of the game for the user
 * 		to choose the answer. Uses the class QuestionAnswerGenerator.js
 * 
 * Created by Keyyva on Nov 3 2018
 */

class AnswerButtons {
	// AnswerButtons private variables
	constructor(){		
		// Buttons
		this.button1;
		this.button2;
		this.button3;
		
		// The frame numbers in the ButtonAnswer sprite for each button state
		this.buttonType = {IDLE: 0, HOVER: 1, CLICK: 2};
		
		// Text
		this.question;
		this.answer1;
		this.answer2;
		this.answer3;
		
		this.create();
	}
	
	create(){
		// Buttons
		this.button1 = game.add.button(spaceCowsBackground.x - spaceCowsBackground.width/3, spaceCowsBackground.y + spaceCowsBackground.height / 3, "ButtonAnswer", this.button1Click, this, this.buttonType.HOVER, this.buttonType.IDLE, this.buttonType.CLICK);
		this.button1.anchor.setTo(0.5);
		this.button2 = game.add.button(spaceCowsBackground.x, spaceCowsBackground.y + spaceCowsBackground.height / 3, "ButtonAnswer", this.button2Click, this, this.buttonType.HOVER, this.buttonType.IDLE, this.buttonType.CLICK);
		this.button2.anchor.setTo(0.5);
		this.button3 = game.add.button(spaceCowsBackground.x + spaceCowsBackground.width/3, spaceCowsBackground.y + spaceCowsBackground.height / 3, "ButtonAnswer", this.button3Click, this, this.buttonType.HOVER, this.buttonType.IDLE, this.buttonType.CLICK);
		this.button3.anchor.setTo(0.5);
		
		// Text
		this.answer1 = game.add.text(this.button1.x, this.button1.y, "0", {font: "70px Arial", fill: "#000"});
		this.answer1.anchor.setTo(0.5);
		this.answer2 = game.add.text(this.button2.x, this.button3.y, "1", {font: "70px Arial", fill: "#00"});
		this.answer2.anchor.setTo(0.5);
		this.answer3 = game.add.text(this.button3.x, this.button3.y, "5", {font: "70px Arial", fill: "#000"});
		this.answer3.anchor.setTo(0.5);
		
		
		this.reset();
	}
	
	// Resets the question and answer (also creates the first question and answer)
	reset(){
		
	}
	
	
	/********** BUTTON FUNCTIONS **********/
	/*** Called when button1 is clicked ***/
	button1Click(){
		// TODO: test if answer1 is the answer
	}
	
	/*** Called when button2 is clicked ***/
	button2Click(){
		// TODO: test if answer2 is the answer
	}
	
	/*** Called when button3 is clicked ***/
	button3Click(){
		// TODO: test if answer3 is the answer
	}
}