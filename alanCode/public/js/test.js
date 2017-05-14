// alert('testing yo')
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-container', { preload: preload, create: create, update: update });

var platforms;
var player;
var cursors;

function preload() {
  game.load.image('ocean', 'assets/img/ocean.png');
  game.load.image('ball', 'assets/img/red_ball.png');
  game.load.spritesheet('octopus', 'assets/img/octopus.png', 32, 48);
  game.load.image('ground', 'assets/img/platform.png');
}

function create() {
  //  We're going to be using physics, so enable the Arcade Physics system
  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.add.sprite(0, 0, 'ocean')
  player = game.add.sprite(200, 300, 'ball');  // HERO
  player.anchor.setTo(0.5, 0.5);
  game.physics.enable(player, Phaser.Physics.ARCADE);
  // player.anchor.setTo(0.5, 0.5);
  // game.physics.enable(player, Phaser.Physics.ARCADE);
  //  game.add.sprite(10, 50, 'octopus');

  // Player cursor
  cursors = game.input.keyboard.createCursorKeys();

  // //  The platforms group contains the ground and the 2 ledges we can jump on
  // platforms = game.add.group();
  // platforms.enableBody = true; // enable physics on any of these
  // var ground = platforms.create(0, game.world.height - 64, 'ground'); // Here we create the ground from platfrom
  // ground.scale.setTo(2, 2);
  // ground.body.immovable = true; // stops ground from falling when you touch it

  // //  Now Create a ledge
  // var ledge = platforms.create(400, 400, 'ground');
  // ledge.body.immovable = true;
  // ledge = platforms.create(-150, 250, 'ground');
  // ledge.body.immovable = true;


}

function update () {
  if (cursors.left.isDown) {
    player.body.velocity.x = -200;
    console.log('pressing down')
  } else if (cursors.right.isDown) {
    player.body.velocity.x = 200;
    console.log('pressing right')
  }
}

// function update() {
// }