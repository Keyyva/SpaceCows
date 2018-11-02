/* 
 * MainMenu.js
 * Space Cows
 * 
 * The main menu of the game. Shows "Play" and "How to Play" buttons.
 * 		"Play" starts the game
 * 		"How to Play" shows a dialog box with game instructions
 * 
 * Created by Keyyva on Oct 31 2018
 */

var mainMenuBackground;
var buttonPlay;
var buttonHow;	// "HowToPlay" button
var howPopup;

// The frame numbers in MainMenuButtons sprite for each button state
var buttonPlayType = {IDLE: 0, HOVER: 1, CLICK: 2};
var buttonHowType = {IDLE: 3, HOVER: 4, CLICK: 5};

class MainMenu extends Phaser.State {
	create(){
		howPopup = new HowToPlay();	// Initialize the How To Play Popup
		
		/*** Places the Main Menu Background in the centre of the screen ***/
		mainMenuBackground = game.add.sprite(game.world.centerX, game.world.centerY, 'mainMenuBackground');
		mainMenuBackground.anchor.setTo(0.5);
		
		/*** Places the menu buttons relative to the MainMenuBackground ***/
		// Play button
		buttonPlay = game.add.button(mainMenuBackground.x + mainMenuBackground.width/4, mainMenuBackground.y + mainMenuBackground.height/8, "MainMenuButtons", this.playClick, this, buttonPlayType.HOVER, buttonPlayType.IDLE, buttonPlayType.CLICK);
		buttonPlay.anchor.setTo(0.5);
		// How to Play button
		buttonHow = game.add.button(mainMenuBackground.x + mainMenuBackground.width/4, mainMenuBackground.y + mainMenuBackground.height/3, "MainMenuButtons", this.HowToPlayClick, this, buttonHowType.HOVER, buttonHowType.IDLE, buttonHowType.CLICK);
		buttonHow.anchor.setTo(0.5);
	}
	
	
	/********** BUTTON FUNCTIONS **********/
	/*** Called when the "Play" button [buttonPlay] is clicked ***/
	playClick(){
		// Fades the camera then goes to the next state
		game.camera.fade(0x000000, 500);
		this.game.camera.onFadeComplete.add(nextState, this);
		
		function nextState(){
			this.game.state.start("SpaceCows");
		}
		
	}
	
	/*** Called when the "How to Play" button [buttonHow] is clicked ***/
	HowToPlayClick(){
		if(!isAlive)	// isAlive located in HowToPlay
			howPopup.showPopup();
	}
}