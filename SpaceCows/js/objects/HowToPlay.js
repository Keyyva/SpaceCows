/* 
 * HowToPlay.js
 * Space Cows
 * 
 * Displays a popup with instructions on how to play the game. The close button (buttonX) handles
 * 		closing the popup in this class as well.
 * 
 * Created by Keyyva on Nov 1 2018
 */

var isAlive = false;

class HowToPlay {
	constructor(){
		// HowToPlay private variables
		this.popupBackground;
		this.buttonX;
	}
	
	/*** Called externally of class - CALL THIS TO MAKE POPUP APPEAR ***/
	showPopup(){
		isAlive = true;
		buttonPlay.inputEnabled = false;	// Ensures user doesn't start the game without closing the popup first
		
		// Popup background
		this.popupBackground = game.add.sprite(game.world.centerX, game.world.centerY, "HowToPlayPopup");
		this.popupBackground.anchor.setTo(0.5);
		
		// Popup 'X' button
		this.buttonX = game.add.button(this.popupBackground.x + (this.popupBackground.width/2 - 20), this.popupBackground.y - (this.popupBackground.height/2 - 20), "ButtonX", this.destroyPopup, this, 1, 0, 2);
		this.buttonX.anchor.setTo(0.5);
	}
	
	/*** Destroys the popup and resets attributes ***/
	destroyPopup(){
		this.popupBackground.destroy();
		this.buttonX.destroy();
		isAlive = false;
		buttonPlay.inputEnabled = true;	// Re-enables the play button
	}
}