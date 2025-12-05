// lib/game/entities/player.js
ig.module(
  "game.entities.player"
)
.requires(
  "impact.entity"
)
.defines(function(){
  EntityPlayer = ig.Entity.extend({
    size: {x:16, y:16},
    offset: {x:0, y:0},
    maxVel: {x:100, y:200},
    friction: {x:600, y:0},
    animSheet: new ig.AnimationSheet("media/player.png", 16, 16),
    type: ig.Entity.TYPE.A,
    collides: ig.Entity.COLLIDES.PASSIVE,

    init: function(x,y,settings){
      this.parent(x,y,settings);
      this.addAnim("idle", 1, [0]);
      this.startPosition = {x:x, y:y};
    },

    update: function(){
      if( ig.input.state("left") ){ this.vel.x = -60; this.flip = true; }
      else if( ig.input.state("right") ){ this.vel.x = 60; this.flip = false; }
      else { this.vel.x = 0; }

      if( ig.input.pressed("jump") && this.standing ){
        this.vel.y = -150;
      }

      this.parent();
    },

    kill: function(){
      this.parent();
      ig.game.spawnEntity(EntityPlayer, this.startPosition.x, this.startPosition.y);
    }
  });
});
