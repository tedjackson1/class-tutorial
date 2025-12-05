// lib/game/main.js
ig.module(
  "game.main"
)
.requires(
  "impact.game",
  "impact.font",
  "game.entities.player",
  "game.entities.zombie",
  "game.levels.dorm1"
)
.defines(function(){
  MyGame = ig.Game.extend({
    font: new ig.Font("media/04b03.font.png"),

    init: function(){
      ig.input.bind(ig.KEY.LEFT_ARROW, "left");
      ig.input.bind(ig.KEY.RIGHT_ARROW, "right");
      ig.input.bind(ig.KEY.X, "jump");
      this.loadLevel(LevelDorm1);
    },

    update: function(){
      this.parent();
    },

    draw: function(){
      this.parent();
    }
  });

  ig.main("#canvas", MyGame, 60, 320, 240, 2);
});
