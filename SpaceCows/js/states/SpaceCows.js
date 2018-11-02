/* 
 * SpaceCows.js
 * Space Cows
 * 
 * The actual gameplay state. Asks user multiplication questions. There are three options
 * 		to choose from. Two of them must be '0' or '1'.
 * 
 * Created by Keyyva on Nov 1 2018
 */

class SpaceCows extends Phaser.State {
	constructor(){
		super();
		this.spaceCowsBackground;
		this.ufoLight;
	}
	
	create(){
		// Background
		this.spaceCowsBackground = game.add.sprite(game.world.centerX, game.world.centerY, "SpaceCowsBackground");
		this.spaceCowsBackground.anchor.setTo(0.5);
		// UFO Light
		this.ufoLight = game.add.sprite(this.spaceCowsBackground.x - this.spaceCowsBackground.width/20, this.spaceCowsBackground.y + this.spaceCowsBackground.height / 8, "UfoLight");
		this.ufoLight.anchor.setTo(0.5);
		this.ufoLight.alpha = 0;
	}
}