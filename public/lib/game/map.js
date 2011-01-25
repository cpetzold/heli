ig.module( 
	'game.map' 
)
.requires(
  'impact.background-map'
)
.defines(function(){

RandomMap = ig.BackgroundMap.extend({
	tilesize: 16,
	width: 64,
	height: 32,
	
	init: function(tileset) {
	  this.setTileset(tileset);
	  
	  this.data = this.generateColumns(this.width, 2);
	},
	
	generateColumns: function( n, thickness ) {
	  var columns = [];
	  for (var i = 0; i < n; i++) {
	    columns.push(this.generateColumn(thickness));
	  }
	  return columns;
	},
	
	generateColumn: function( thickness, offset ) {
	  var column = [];
	  for (var i = 0; i < this.height; i++) {
	    if (i < thickness || i > this.height - thickness - 1) {
        column[i] = 1;
      } else if (i == thickness || i == this.height - thickness - 1) {
        column[i] = 2;
      } else {
        column[i] = 0;
      }
    }
    return column;
	},
	
	drawTiled: function() {	
		var tile = 0,
			anim = null,
			tileOffsetX = (this.scroll.x / this.tilesize).toInt(),
			tileOffsetY = (this.scroll.y / this.tilesize).toInt(),
			pxOffsetX = this.scroll.x % this.tilesize,
			pxOffsetY = this.scroll.y % this.tilesize,
			pxMinX = -pxOffsetX - this.tilesize,
			pxMinY = -pxOffsetY - this.tilesize,
			pxMaxX = ig.system.width + this.tilesize - pxOffsetX,
			pxMaxY = ig.system.height + this.tilesize - pxOffsetY;
			
		
		// FIXME: could be sped up for non-repeated maps: restrict the for loops
		// to the map size instead of to the screen size and skip the 'repeat'
		// checks inside the loop.
		
		for( var mapY = -1, pxY = pxMinY; pxY < pxMaxY; mapY++, pxY += this.tilesize) {
			var tileY = mapY + tileOffsetY;
				
			// Repeat Y?
			if( tileY >= this.height || tileY < 0 ) {
				if( !this.repeat ) { continue; }
				tileY = tileY > 0
					? tileY % this.height
					: ((tileY+1) % this.height) + this.height - 1;
			}
			
			for( var mapX = -1, pxX = pxMinX; pxX < pxMaxX; mapX++, pxX += this.tilesize ) {
				var tileX = mapX + tileOffsetX;
				
				// Repeat X?
				if( tileX >= this.width || tileX < 0 ) {
					if( !this.repeat ) { continue; }
					tileX = tileX > 0
						? tileX % this.width
						: ((tileX+1) % this.width) + this.width - 1;
				}
				
				// Draw!
				if( (tile = this.data[tileX][tileY]) ) {
					if( (anim = this.anims[tile-1]) ) { 
						anim.draw( pxX, pxY );
					}
					else {
						this.tiles.drawTile( pxX, pxY, tile-1, this.tilesize );
					}
				}
			}
		}
	},
	
	update: function() {
	  
	  
	  
		this.parent();
	},
	
	draw: function() {
		this.parent();
	}
});

});
