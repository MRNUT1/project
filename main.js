'use strict'
const Game = new Phaser.Game(1600, 500, Phaser.AUTO, 'game-canvas', { preload, create, update })

let player
let player2
let keyA , keyW, keyS, keyD 
function preload() {
Game.load.spritesheet("player", "playercutted.png", 288/6,95/2,12 )
Game.load.spritesheet("player2","monster.156x160.4x4.png",156/4,160/4,16)
Game.load.tilemap("map","GameMap.json",null,Phaser.Tilemap.TILED_JSON)
Game.load.image("plain","Maps/plains.png")
Game.load.image("BaseChip","Maps/Pipoya RPG Tileset16x16/Pipoya RPG Tileset16x16/[Base]BaseChip_pipo.png")
}

function create() {
    player = Game.add.sprite(Game.width / 2,Game.height / 2,"player")
   player.animations.add("", [0,1,2,3,4,5,6,7,8,9,10,11,12], 10,true).play()
   player.scale.setTo(2)
   player.anchor.setTo(3)

   player2 = Game.add.sprite(0,0,"player2")
   player2.animations.add("",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],10,true).play()
   player2.scale.setTo(2)
   player2.anchor.setTo(3)

   const map = Game.add.tilemap("map")
   map.addTilesetImage("plains","plain")
   map.addTilesetImage("[Base]BaseChip_pipo","BaseChip")

   map.createLayer("Ground")


 keyA = Game.input.keyboard.addKey(Phaser.Keyboard.A)
 keyW = Game.input.keyboard.addKey(Phaser.Keyboard.W)
 keyS = Game.input.keyboard.addKey(Phaser.Keyboard.S)
 keyD = Game.input.keyboard.addKey(Phaser.Keyboard.D)

 Game.physics.enable(player, Phaser.Physics.ARCADE)

 player.body.bounce = 0.2
 player.body.collideWorldBounds = true
}

function update() {
  
if(keyW.isDown){
    player.y-= 2
}

if(keyS.isDown){
    player.y+=2
}

if(keyA.isDown){
    player.x-=2
}
if(keyD.isDown){
    player.x+=2
}


     }
