'use strict'
const Game = new Phaser.Game(1600, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

let player,player2
let keyA , keyW, keyS, keyD 
function preload() {
Game.load.spritesheet("player", "playercutted.png", 288/6,95/2,12 )
//Game.load.spritesheet("player2","",156/4,160/4,16)
Game.load.tilemap("map","GameMap.json",null,Phaser.Tilemap.TILED_JSON)
Game.load.image("plain","Maps/plains.png")
Game.load.image("Tile","Maps/Tileset.png")
Game.load.image("decor16x16","Maps/decor_16x16.png")
Game.load.image("waterdecor","Maps/water_decorations.png")
Game.load.image("Simple","Maps/MasterSimple.png")
Game.load.image("Serene","Maps/SERENE_VILLAGE_REVAMPED/Serene_Village_16x16.png")
Game.load.image("Basechip","Maps/Pipoya RPG Tileset 16x16/[Base]BaseChip_pipo.png")
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
   map.addTilesetImage("Tileset","Tile")
   map.addTilesetImage("decor_16x16","decor16x16")
   map.addTilesetImage("water_decorations","waterdecor")
   map.addTilesetImage("MasterSimple","Simple")
   map.addTilesetImage("Serene_Village_16x16","Serene")
   map.addTilesetImage("[Base]BaseChip_pipo","Basechip")

   map.createLayer("Ground")
   map.createLayer("Upper Ground")
   map.createLayer("Farm")
   map.createLayer("Decors")
   map.createLayer("House")
   map.createLayer("Farming Station")
   map.createLayer("Shops")

   //createPlayer()
   //map.createLayer("Ground")
   //cursors = Game.input.keyboard.createCursorKeys()


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
