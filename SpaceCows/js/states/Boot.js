/* 
 * Boot.js
 * Space Cows
 * 
 * The boot state of the game. Handles scaleMode and any other
 * 		attributes to be set before the preload state.
 * 
 * Created by Keyyva on Oct 31 2018
 */

class Boot extends Phaser.State {
	create(){
		// Set attributes
		this.scale.scaleMode = Phaser.ScaleManager.Show_ALL;
		
		// Start the next state
		this.game.state.start("Preload");
	}
}