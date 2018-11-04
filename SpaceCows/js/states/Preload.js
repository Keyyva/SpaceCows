/* 
 * Preload.js
 * Space Cows
 * 
 * Handles all the preloading of assets. Then starts the 
 * 		next state which is the first state the user will see.
 * 
 * Created by Keyyva on Oct 31 2018
 */

class Preload extends Phaser.State {
	constructor(){
		super();
		this.menuButtonDims = {WIDTH: 272, HEIGHT: 101};	// Pixel width and height of an individual button in the MainMenuButton spritesheet
		this.xButtonDims = {WIDTH: 88, HEIGHT: 89};
		this.buttonAnswerDims = {WIDTH: 118, HEIGHT: 118};
		this.continueButtonDims = {WIDTH: 550, HEIGHT: 220};
	}
	
	preload(){
		// Preloads the required assets
		// Main Menu
		game.load.image("mainMenuBackground", "SpaceCows/assets/MainMenu.png");
		game.load.spritesheet("MainMenuButtons", "SpaceCows/assets/MainMenuButtons.png", this.menuButtonDims.WIDTH, this.menuButtonDims.HEIGHT);
		
		// How to Play
		game.load.image("HowToPlayPopup", "SpaceCows/assets/HowToPlayPopup.png");
		game.load.spritesheet("ButtonX", "SpaceCows/assets/ButtonX.png", this.xButtonDims.WIDTH, this.xButtonDims.HEIGHT);
		
		// Space Cows
		game.load.image("SpaceCowsBackground", "SpaceCows/assets/SpaceCows.png");
		game.load.image("UfoLight", "SpaceCows/assets/UfoLight.png");
		game.load.image("TryAgain", "SpaceCows/assets/TryAgain.png");
		game.load.spritesheet("ButtonAnswer", "SpaceCows/assets/ButtonAnswer.png", this.buttonAnswerDims.WIDTH, this.buttonAnswerDims.HEIGHT);
		game.load.spritesheet("ContinueButton", "SpaceCows/assets/ButtonContinue.png", this.continueButtonDims.WIDTH, this.continueButtonDims.HEIGHT);
	}
	
	create(){
		// Starts the next state
		this.game.state.start("MainMenu");
	}
}