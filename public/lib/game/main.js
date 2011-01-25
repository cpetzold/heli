ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	
	'game.entities.player',
	
	'game.map'
)
.defines(function(){

Heli = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	map: new RandomMap('media/tiles-grass.png'),
	gravity: 1000,
	speed: 200,
	
	init: function() {
    ig.input.bind(ig.KEY.SPACE, 'up');
    ig.input.bind(ig.KEY.MOUSE1, 'up');
    
    this.backgroundMaps.push(this.map);
    
    // this.player = this.spawnEntity(EntityPlayer, 200, 248);
	},
	
	update: function() {
    this.screen.x += ig.system.tick * this.speed;
		this.parent();
	},
	
	draw: function() {
		this.parent();
	}
});

ig.main( '#canvas', Heli, 60, 1024, 512, 1 );
});
