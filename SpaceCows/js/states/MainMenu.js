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

var buttonPlay;	// Global for HowToPlay's access (wish Javascript had pointers...)

class MainMenu extends Phaser.State {
	constructor(){
		super();
		this.mainMenuBackground;
		this.buttonHow;	// "HowToPlay" button
		this.howPopup;

		// The frame numbers in MainMenuButtons sprite for each button state
		this.buttonPlayType = {IDLE: 0, HOVER: 1, CLICK: 2};
		this.buttonHowType = {IDLE: 3, HOVER: 4, CLICK: 5};
	}
	
	create(){
		this.howPopup = new HowToPlay();	// Initialize the How To Play Popup
		
		/*** Places the Main Menu Background in the centre of the screen ***/
		this.mainMenuBackground = game.add.sprite(game.world.centerX, game.world.centerY, 'mainMenuBackground');
		this.mainMenuBackground.anchor.setTo(0.5);
		
		/*** Places the menu buttons relative to the MainMenuBackground ***/
		// Play button
		buttonPlay = game.add.button(this.mainMenuBackground.x + this.mainMenuBackground.width/4, this.mainMenuBackground.y + this.mainMenuBackground.height/8, "MainMenuButtons", this.playClick, this, this.buttonPlayType.HOVER, this.buttonPlayType.IDLE, this.buttonPlayType.CLICK);
		buttonPlay.anchor.setTo(0.5);
		// How to Play button
		this.buttonHow = game.add.button(this.mainMenuBackground.x + this.mainMenuBackground.width/4, this.mainMenuBackground.y + this.mainMenuBackground.height/3, "MainMenuButtons", this.HowToPlayClick, this, this.buttonHowType.HOVER, this.buttonHowType.IDLE, this.buttonHowType.CLICK);
		this.buttonHow.anchor.setTo(0.5);
	}
	
	
	/********** BUTTON FUNCTIONS **********/
	/*** Called when the "Play" button [buttonPlay] is clicked ***/
	playClick(){
		// Fades the camera then goes to the next state
		this.game.camera.fade(0x000000, 500);
		this.game.camera.onFadeComplete.add(nextState, this);
		
		function nextState(){
			this.game.state.start("SpaceCows");
		}
		
	}
	
	/*** Called when the "How to Play" button [buttonHow] is clicked ***/
	HowToPlayClick(){
		if(!isAlive)	// isAlive located in HowToPlay
			this.howPopup.showPopup();
	}
}