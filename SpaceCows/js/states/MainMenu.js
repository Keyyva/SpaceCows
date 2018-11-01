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

class MainMenu extends Phaser.State {	
	create(){
		// Places the Main Menu Background in the centre of the screen
		mainMenuBackground = game.add.sprite(game.world.centerX, game.world.centerY, 'mainMenuBackground');
		mainMenuBackground.anchor.setTo(0.5);
	}
}