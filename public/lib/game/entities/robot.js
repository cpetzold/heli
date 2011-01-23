ig.module( 
    'game.entities.robot' 
)
.requires(
    'impact.entity'
)
.defines(function(){

EntityRobot = ig.Entity.extend({
  name: 'robot',
  size: { x: 48, y: 48 },
  collides: ig.Entity.COLLIDES.STATIC,
  
  maxVel: { x: 1000, y: 1000 },
  
  animSheet: new ig.AnimationSheet('media/robot.png', 48, 48),
  
  init: function(x, y, settings) {
    this.parent(x, y, settings);
    
    this.addAnim('idle', 1, [0]);
    
    this.vel.x = 300;
  },
  
  update: function() {
    this.vel.x = 300;
    
    if( ig.input.state('up') ) {
      this.accel.y = -2000;
    } else {
      this.accel.y = 0;
    }
    
    this.parent();
  }
  
});

});