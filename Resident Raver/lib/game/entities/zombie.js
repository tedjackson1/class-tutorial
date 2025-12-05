// lib/game/entities/zombie.js
ig.module(
  "game.entities.zombie"
)
.requires(
  "impact.entity"
)
.defines(function(){
  EntityZombie = ig.Entity.extend({
    size: {x:16, y:16},
    animSheet: new ig.AnimationSheet("media/zombie.png", 16, 16),
    speed: 20,
    flip: false,
    type: ig.Entity.TYPE.B,
    collides: ig.Entity.COLLIDES.PASSIVE,

    init: function(x,y,settings){
      this.parent(x,y,settings);
      this.addAnim("walk", 0.2, [0]);
      this.vel.x = this.speed;
    },

    update: function(){
      if (this.standing && !this.canWalkForward()) {
        this.flip = !this.flip;
        this.vel.x = this.flip ? -this.speed : this.speed;
      }
      this.parent();
    },

    canWalkForward: function(){
      var aheadX = this.flip ? this.pos.x - 1 : this.pos.x + this.size.x + 1;
      var aheadY = this.pos.y + this.size.y + 1;
      var res = ig.game.collisionMap.trace(aheadX, aheadY, 0, 0);
      return !res.collision;
    }
  });
});
