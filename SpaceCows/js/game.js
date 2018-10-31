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
		super(window.innerWidth * window.devicePixelRatio,
				window.innerHeight * window.devicePixelRatio,
				Phaser.AUTO, "SpaceCows");
		
		
		this.state.add("Boot", Boot, false);
		
		this.state.start("Boot");
		
	}
}

new Game();