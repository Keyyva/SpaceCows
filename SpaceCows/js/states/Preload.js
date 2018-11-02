/* 
 * Preload.js
 * Space Cows
 * 
 * Handles all the preloading of assets. Then starts the 
 * 		next state which is the first state the user will see.
 * 
 * Created by Keyyva on Oct 31 2018
 */

const menuButtonDims = {WIDTH: 272, HEIGHT: 101}	// Pixel width and height of an individual button in the MainMenuButton spritesheet
const xButtonDims = {WIDTH: 88, HEIGHT: 89}

class Preload extends Phaser.State {
	preload(){
		// Preloads the required assets
		// Main Menu
		game.load.image("mainMenuBackground", "SpaceCows/assets/MainMenu.png");
		game.load.spritesheet("MainMenuButtons", "SpaceCows/assets/MainMenuButtons.png", menuButtonDims.WIDTH, menuButtonDims.HEIGHT);
		
		// How to Play
		game.load.image("HowToPlayPopup", "SpaceCows/assets/HowToPlayPopup.png");
		game.load.spritesheet("ButtonX", "SpaceCows/assets/ButtonX.png", xButtonDims.WIDTH, xButtonDims.HEIGHT);
	}
	
	create(){
		// Starts the next state
		this.game.state.start("MainMenu");
	}
}