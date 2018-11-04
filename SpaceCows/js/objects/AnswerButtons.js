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
		
		this.create();
	}
	
	create(){
		// Questions and Answers
		this.generator = new QuestionAnswerGenerator();
		
		// Buttons
		this.button1 = game.add.button(spaceCowsBackground.x - spaceCowsBackground.width/3, spaceCowsBackground.y + spaceCowsBackground.height / 3, "ButtonAnswer", this.button1Click, this, this.buttonType.HOVER, this.buttonType.IDLE, this.buttonType.CLICK);
		this.button1.anchor.setTo(0.5);
		this.button2 = game.add.button(spaceCowsBackground.x, spaceCowsBackground.y + spaceCowsBackground.height / 3, "ButtonAnswer", this.button2Click, this, this.buttonType.HOVER, this.buttonType.IDLE, this.buttonType.CLICK);
		this.button2.anchor.setTo(0.5);
		this.button3 = game.add.button(spaceCowsBackground.x + spaceCowsBackground.width/3, spaceCowsBackground.y + spaceCowsBackground.height / 3, "ButtonAnswer", this.button3Click, this, this.buttonType.HOVER, this.buttonType.IDLE, this.buttonType.CLICK);
		this.button3.anchor.setTo(0.5);
		this.continueButton = game.add.button(spaceCowsBackground.x, spaceCowsBackground.y, "continueButton", this.reset, this, this.buttonType.HOVER, this.buttonType.IDLE, this.buttonType.CLICK);
		this.continueButton.anchor.setTo(0.5);
		
		// Text
		this.question = game.add.text(spaceCowsBackground.x + spaceCowsBackground.width/3, spaceCowsBackground.y - spaceCowsBackground.height/9, this.getQuestion(), {font: "60px Arial", fill: "#000"});
		this.question.anchor.setTo(0.5);
		this.answer1 = game.add.text(this.button1.x, this.button1.y, "0", {font: "70px Arial", fill: "#000"});
		this.answer1.anchor.setTo(0.5);
		this.answer2 = game.add.text(this.button2.x, this.button3.y, "1", {font: "70px Arial", fill: "#00"});
		this.answer2.anchor.setTo(0.5);
		this.answer3 = game.add.text(this.button3.x, this.button3.y, "3", {font: "70px Arial", fill: "#000"});
		this.answer3.anchor.setTo(0.5);
		
		
		this.reset();
	}
	
	/*** Resets the question and answer (also creates the first question and answer) ***/
	reset(){
		this.continueButton.x = -1000;
		this.continueButton.y = -1000;
		this.QA = this.generator.generate();
		
		// Set the question
		this.question.text = this.getQuestion();
		
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
		// TODO: Display "continue" button. When clicked, reset the game.
		this.continueButton.x = spaceCowsBackground.x;
		this.continueButton.y = spaceCowsBackground.y;
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
		}
	}
}