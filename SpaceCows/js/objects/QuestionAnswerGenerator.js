/* 
 * QuestionAnswerGenerator.js
 * Space Cows
 * 
 * Handles the generating of a question and answer. ###### Questions are formatted as; q1 X a = q2 ######
 * 		The user wants to find 'a' [answer].
 * 
 * Created by Keyyva on Nov 3 2018
 */

class QuestionAnswerGenerator {
	constructor(){
		this.question = {q1: 0, q2: 0};		// First and second parts of given question
		this.a;								// The answer to the question
	}
	
	/*** Generates a question and stores the answer. Returns the two parts of the question as an enum ***/
	generate(){
		// Questions go up to 7x7. Possible answers are; 0, 1 or another number.
		var rand = Math.floor((Math.random() * 4)); 	// Random number to choose which type of question.
		console.log("The type of question is: " + rand);
		
		switch(rand){
		// Sets q1=random	q2=0	a=0
		case 0:
			this.question = {q1: Math.floor((Math.random() * 8)), q2: 0}
			this.a = 0;
			break;
			
		// Sets q1=random	q2=same random	a=1
		case 1:
			var rand = Math.floor((Math.random() * 7) + 1);
			this.question = {q1: rand, q2: rand}
			this.a = 1;
			break;
			
		// Sets q1=random	a=random	q2=q1*a
		case 3:
			this.question.q1 = Math.floor((Math.random() * 6) + 2);
			this.a = Math.floor((Math.random() * 6) + 2);
			this.question.q2 = this.question.q1 * this.a;
			break;
			
		default:
				console.error("Error in QuestionAnswerGenerator.js, generate(). Random number out of bounds!");
		}
		
		return this.question;
	}
	
	
	/*** Compares "check" to the answer for the question. Returns a bool ***/
	checkAnswer(check){
	}
}