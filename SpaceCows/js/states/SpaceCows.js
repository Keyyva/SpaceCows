/* 
 * SpaceCows.js
 * Space Cows
 * 
 * The actual gameplay state. Asks user multiplication questions. There are three options
 * 		to choose from. Two of them must be '0' or '1'.
 * 
 * Created by Keyyva on Nov 1 2018
 */

var spaceCowsBackground;

class SpaceCows extends Phaser.State {
	constructor(){
		super();
		this.ufoLight;
		this.tryAgain;
		this.answerButtons;
	}
	
	create(){
		// Background
		spaceCowsBackground = game.add.sprite(game.world.centerX, game.world.centerY, "SpaceCowsBackground");
		spaceCowsBackground.anchor.setTo(0.5);
		// Try Again
		this.tryAgain = game.add.sprite(spaceCowsBackground.x + spaceCowsBackground.width/2, spaceCowsBackground.y - spaceCowsBackground.height/2, "TryAgain");
		this.tryAgain.anchor.setTo(1, 0);
		this.tryAgain.alpha = 0;
		// UFO Light
		this.ufoLight = game.add.sprite(spaceCowsBackground.x - spaceCowsBackground.width/20, spaceCowsBackground.y + spaceCowsBackground.height / 8, "UfoLight");
		this.ufoLight.anchor.setTo(0.5);
		this.ufoLight.alpha = 0;
		// Answer Buttons
		this.answerButtons = new AnswerButtons();
		
		game.camera.flash(0, 500);	// FadeIn
	}
}