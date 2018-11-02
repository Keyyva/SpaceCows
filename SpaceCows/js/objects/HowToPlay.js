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
var popupBackground;
var buttonX;

class HowToPlay{
	
	/*** Called externally of class - CALL THIS TO MAKE POPUP APPEAR ***/
	showPopup(){
		isAlive = true;
		buttonPlay.inputEnabled = false;	// Ensures user doesn't start the game without closing the popup first
		
		// Popup background
		popupBackground = game.add.sprite(game.world.centerX, game.world.centerY, "HowToPlayPopup");
		popupBackground.anchor.setTo(0.5);
		
		// Popup 'X' button
		buttonX = game.add.button(popupBackground.x + (popupBackground.width/2 - 20), popupBackground.y - (popupBackground.height/2 - 20), "ButtonX", this.destroyPopup, this, 1, 0, 2);
		buttonX.anchor.setTo(0.5);
	}
	
	/*** Destroys the popup and resets attributes ***/
	destroyPopup(){
		popupBackground.destroy();
		buttonX.destroy();
		isAlive = false;
		buttonPlay.inputEnabled = true;	// Re-enables the play button
	}
}