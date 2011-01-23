ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'game.entities.robot',
	'game.levels.test'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	gravity: 1000,
	
	init: function() {

    ig.input.bind(ig.KEY.SPACE, 'up');
    ig.input.bind(ig.KEY.MOUSE1, 'up');

    this.loadLevel(LevelTest);
    
    this.robot = this.getEntityByName('robot');

	},
	
	update: function() {
		this.parent();

    
    this.screen.x = this.robot.pos.x - 200;

	},
	
	draw: function() {
		this.parent();
		

	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 800, 600, 1 );

});
