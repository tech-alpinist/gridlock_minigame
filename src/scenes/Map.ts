import Phaser from 'phaser';

import { key } from '../data';
import { state } from '../store';
import Block from '../component/block';
import Button from '../component/button';

const roundTextStyle = {
  fontFamily: '"Lucida Grande", Helvetica, Arial, sans-serif',
  fontSize: '48px',
  align: 'center',
  color: '#000',
  stroke: '#02e',
  strokeThickness: 3
}

const timerTextStyle = {
  fontFamily: '"Lucida Grande", Helvetica, Arial, sans-serif',
  fontSize: '18px',
  align: 'center'
}

export default class Map extends Phaser.Scene {

  timer: Phaser.Time.TimerEvent | null;
  timerBar: Phaser.GameObjects.Graphics | null;
  timerText: Phaser.GameObjects.Text | null;

  constructor() {
    super({
      key: key.scene.map
    });

    this.timer = null;
    this.timerBar = null;
    this.timerText = null;
  }
  init(data: any) {
    state.map.scale = data.map.scale;
    state.map.row = data.map.row;
    state.map.col = data.map.col;
    state.map.position = data.map.position;
    state.map.grid = data.map.grid;
    state.map.blocks = data.map.blocks;
  }
  formatTime(t: number) {
    const min = Math.floor(t / 60);
    const sec = t % 60;
    return `${min < 10 ? '0'+min : min}:${sec < 10 ? '0'+sec : sec}`
  }
  onTimerEvent() {
    state.timer -= 1;
    if( state.timer == 0 ) {
      console.log('Timeout!!!')
      // finish game
      this.timer?.destroy();
      this.scene.stop(key.scene.map)
      this.scene.start(key.scene.result)
    }
    if(state.timer == 30) {
      console.log('Hurry up!')
      this.timerText?.setColor('red');
    }

    this.timerBar?.setScale(state.timer / 300, 1);
    this.timerText?.setText(this.formatTime(state.timer));
  }
  makeBar(x: number, y: number, w: number, h: number, color: number) {
    //draw the bar
    const barBack = this.add.graphics();
    barBack.fillStyle(0x23211e, 1);
    barBack.fillRect(x, y, w, h).setScale(1)
    const bar = this.add.graphics();
    //color the bar
    bar.fillStyle(color, 1);
    //fill the bar with a rectangle
    bar.fillRect(0, 0, w, h);
    
    //position the bar
    bar.x = x;
    bar.y = y;

    //return the bar
    return bar;
  }

  returnHome = () => {
    window.location.assign('/index.html')
  }
  nextRound = () => {
    if( state.round < state.totalRound) {
      state.round++;
      this.scene.start(key.scene.map, {map: state.rounds[state.round - 1]})
    } else {
      this.scene.stop(key.scene.map)
      this.scene.start(key.scene.result)
    }
  }
  resetRound = () => {
    //
  }

  checkingComplete = () => {
    for(const el of state.map.grid) 
      if(el==1) {
        // not completed
        return false;
      }
    // mission completed
    state.score++;
    // animation
  
    const completeSprite = this.add.sprite(state.map.position[0] + 50 * state.map.col / 2, state.map.position[1] + 50 * state.map.row / 2, key.image.star).setDepth(3)
    this.tweens.add({
      targets: completeSprite,
      scale: '+=1',
      ease: 'Bounce',
      duraton: 200,
      repeat: 0,
      yoyo: false
    }).on('complete', () => {
      this.nextRound()
    })
    return true;
  }

  drawMap() {
    
    // draw grid
    for(let i = 0; i < state.map.row; i++) 
      for(let j = 0; j < state.map.col; j++) {
        if(state.map.grid[i * state.map.row + j]) {
          this.add.image(state.map.position[0] + 50 * state.map.scale * i, state.map.position[1] + 50 * state.map.scale * j, key.image.blocks, 0).setOrigin(0)
        }
      }

    //draw blocks
    for( const block of state.map.blocks) {
      new Block(block.color, block.shape, block.position, this, this.checkingComplete)
    }
  }
  drawUI() {
    
    // draw buttons
    new Button(60, this.scale.height - 45, 6, () => {
      // home button
      this.returnHome();
    }, this)
    new Button(950, this.scale.height - 45, 14, () => {
      // skip button
      this.nextRound();
    }, this)
    // new Button(260, this.scale.height - 45, 5, () => {
    //   // reset button
    // }, this);

    // draw Round
    this.add.image(1182, this.scale.height - 45, key.image.round).setOrigin(0.5).setScale(0.7)
    this.add.text(1168, this.scale.height - 45, `${state.round}`, roundTextStyle).setOrigin(0, 0.5)

    // draw Score


    // draw timer
    this.timerBar = this.makeBar(200, 675, 700, 30, 0x2ecc71)
    this.timerBar?.setScale(state.timer / 300, 1);
    this.timerText = this.add.text(550, 681, this.formatTime(state.timer), timerTextStyle).setOrigin(0.5, 0)
    this.timer = this.time.addEvent({ delay: 1000, callback: this.onTimerEvent, callbackScope: this, loop: true });

  }

  create() {
    this.add.image(0, 0, key.image.background).setOrigin(0);
    this.input.dragDistanceThreshold = 12;

    this.drawUI();
    this.drawMap();

    this.cameras.main.fadeIn(300);
  }

  update() {
    //
  }

}
