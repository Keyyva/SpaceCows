/* 
 * game.js
 * Space Cows
 * 
 * The very beginning of the game (before the user sees anything). The game
 * 		and states are declared here. Starting the first state also happens here.
 * 
 * Created by Keyyva on Oct 31 2018
 */

class Game extends Phaser.Game {
	constructor(){
		// Size game to window's dimentions
		super(window.innerWidth * window.devicePixelRatio,
				window.innerHeight * window.devicePixelRatio,
				Phaser.AUTO, "SpaceCows");
		
		// States
		this.state.add("Boot", Boot, false);
		this.state.add("Preload", Preload, false);
		
		
		// Start the boot state
		this.state.start("Boot");
		
	}
}

new Game();