ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'impact.timer',
	
	'game.entities.player',
	
	'game.map'
)
.defines(function(){

Heli = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	map: new RandomMap('media/tiles-grass.png'),
  gravity: 1500,
	speed: 300,
	
	init: function() {
    ig.input.bind(ig.KEY.SPACE, 'up');
    ig.input.bind(ig.KEY.MOUSE1, 'up');
    
    // this.collisionMap = new ig.CollisionMap(16, this.map.data);
    this.backgroundMaps.push(this.map);
    // this.collisionMap.lastSolidTile = 2;
        
    this.player = this.spawnEntity(EntityPlayer, 200, 248);
	},
	
	update: function() {
	  this.screen.x += this.speed * ig.system.tick;
	  this.player.pos.x = this.screen.x + 140;
	  
	  if (this.screen.x > 16) {
	    this.screen.x -= 16;
      for( var i =0; i < this.entities.length; i++ ) {
        this.entities[i].pos.x -= 16;
      }

      this.map.update();
	  }
    
		this.parent();
	},
	
	draw: function() {
		this.parent();
	}
});

ig.main( '#canvas', Heli, 60, 1024, 512, 1 );
});
