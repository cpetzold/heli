ig.module( 
  'game.entities.player' 
)
.requires(
  'impact.entity'
)
.defines(function(){

  EntityPlayer = ig.Entity.extend({
    name: 'player',
    size: { x: 32, y: 32 },
    collides: ig.Entity.COLLIDES.STATIC,

    maxVel: { x: 1000, y: 1000 },

    animSheet: new ig.AnimationSheet('media/robot.png', 32, 32),

    init: function(x, y, settings) {
      this.parent(x, y, settings);

      this.addAnim('idle', 1, [0]);
    },

    update: function() {    
      if( ig.input.state('up') ) {
        this.accel.y = -2500;
      } else {
        this.accel.y = 0;
      }

      this.parent();
    }

  });

});