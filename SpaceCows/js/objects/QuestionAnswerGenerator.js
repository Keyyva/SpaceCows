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
		this.QA = {q1: 0, a: 0, q2: 0};		// Questions are formatted as; q1 X a = q2
	}
	
	/*** Generates a question and stores the answer. Returns the two parts of the question as an enum ***/
	generate(){
		// Questions go up to 7x7. Possible answers are; 0, 1 or another number.
		var rand = Math.floor((Math.random() * 3)); 	// Random number to choose which type of question.
		
		switch(rand){
		// Sets q1=random	q2=0	a=0
		case 0:
			this.QA = {q1: Math.floor((Math.random() * 7) + 1), a: 0, q2: 0}
			break;
			
		// Sets q1=random	q2=same random	a=1
		case 1:
			rand = Math.floor((Math.random() * 7) + 1);
			this.QA = {q1: rand, a: 1, q2: rand}
			break;
			
		// Sets q1=random	a=random	q2=q1*a
		case 2:
			this.QA.q1 = Math.floor((Math.random() * 6) + 2);
			this.QA.a = Math.floor((Math.random() * 6) + 2);
			this.QA.q2 = this.QA.q1 * this.QA.a;
			break;
			
		default:
				console.error("Error in QuestionAnswerGenerator.js, generate(). Random number out of bounds!");
		}
		
		return this.QA;
	}
}