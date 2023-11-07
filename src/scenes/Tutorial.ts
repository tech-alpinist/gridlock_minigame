import Phaser from 'phaser';

import { key } from '../data';
import { state } from '../store';
import { Vector } from 'matter';
import Button from '../component/button';
import { ModalBehavoir } from 'phaser3-rex-plugins/plugins/modal.js';

const pathTextStyle = {
    fontFamily: '"Lucida Grande", Helvetica, Arial, sans-serif',
    fontSize: '24px',
};

const distanceTextStyle = {
    fontFamily: '"Lucida Grande", Helvetica, Arial, sans-serif',
    fontSize: '28px',
    align: 'center'
};
const distanceStyle = {
  fill: '0x007006',
  fontFamily: '"Lithos Pro", Helvetica, Arial, sans-serif',
  fontSize: '48px',
  align: 'center'
}
const roundTextStyle = {
    fontFamily: '"Lucida Grande", Helvetica, Arial, sans-serif',
    fontSize: '48px',
    align: 'center',
    color: '#000',
    stroke: '#02e',
    strokeThickness: 3
}
const narratorTextStyle = {
  fontFamily: '"Lucida Grande", Helvetica, Arial, sans-serif',
  fontSize: '28px',
  align: 'center'
}
const scoreTextStyle = {
    fontFamily: '"Lucida Grande", Helvetica, Arial, sans-serif',
    fontSize: '18px',
    align: 'center'
}

const timerTextStyle = {
  fontFamily: '"Lucida Grande", Helvetica, Arial, sans-serif',
  fontSize: '18px',
  align: 'center'
}

export default class Tutorial extends Phaser.Scene {
  
    map: number[];
    score: number;
    timer: Phaser.Time.TimerEvent | null;
    timerBar: Phaser.GameObjects.Graphics | null;
    timerText: Phaser.GameObjects.Text | null;
    scoreRound: Phaser.GameObjects.Image | null;
    handNarrator: Phaser.GameObjects.Image | null;
    step: number;

  constructor() {
    super(key.scene.tutorial);
    this.map = [];
    this.score = 0;
    this.timerBar = null;
    this.timerText = null;
    this.timer = null;
    this.scoreRound = null;
    this.handNarrator = null;
    this.step = 0;
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
  drawMap() {
    //
  }

  drawNarrator() {
    // skip tutorial
    new ModalBehavoir(this.add.text(600, 150, 'Truck', narratorTextStyle), {
      duration: {
        in: 200,
        hold: 1000,
        out: 200
      }
    }).on('open', () => {
      //
    }).on('close', () => {
      new ModalBehavoir(this.add.text(410, 500, 'Fire', narratorTextStyle), {
        duration: {
          in: 200,
          hold: 1000,
          out: 200
        }
      }).on('open', () => {
        //
      }).on('close', () => {
        new ModalBehavoir(this.add.text(120, 300, 'Bonus', narratorTextStyle), {
          duration: {
            in: 200,
            hold: 1000,
            out: 200
          }
        }).on('open', () => {
          //
        }).on('close', () => {
          //
          new ModalBehavoir(this.add.text(600, 300, 'Obstacles', narratorTextStyle), {
            duration: {
              in: 200,
              hold: 1000,
              out: 200
            }
            
          }).on('open', () => {
            //
          }).on('close', () => {

            new ModalBehavoir(this.add.text(800, 340, 'Click Here to move objects', narratorTextStyle), {
              duration: {
                in: 200,
                hold: 2000,
                out: 200
              }
            }).on('open', () => {
              this.handNarrator = this.add.image(800, 295, key.image.hands, 0).setScale(0.3).setDepth(1)
            })
          })
        })
      })
    })
  }

  nextStep(step: number) {
    switch(step) {
      case 1:
        this.handNarrator?.setPosition(690, 195);
        break;
      case 2:
        this.handNarrator?.setPosition(560, 295)
        break;
      case 3:
        this.handNarrator?.setPosition(300, 295)
        break;
    }
  }

  drawUI() {
    //
  }
  
  returnHome () {
    window.location.assign("/index.html")
    console.log('return to home')
  }

  showBeginMessage() {
    // new ModalBehavoir(this.add.image(this.scale.width / 2, this.scale.height / 2, key.image.modal).setDepth(1), {})
    // .on('open', () => {
    //   // this.handNarrator?.setFrame(1).setScale(0.8).setPosition(this.scale.width / 2, this.scale.height / 2 - 100).setDepth(2)
    //   // this.add.text(this.scale.width / 2, this.scale.height / 2 - 150, 'Begin a game', {
    //   //   fontFamily: '"Stencil Std", Helvetica, Arial, sans-serif',
    //   //   fontSize: '36px',
    //   //   align: 'center'
    //   // }).setOrigin(0.5).setDepth(2)
    //   new Button(this.scale.width / 2, this.scale.height / 2 + 180, 3, () => {
    //     console.log('skip')
    //     this.scene.stop(key.scene.tutorial);
    //     this.scene.start(key.scene.main);
    //   }, this).setDepth(2)
    // })

  }

  skipTutorial() {
    // end of the tutorial
    this.map = [];
    this.showBeginMessage()
  }

  create() {
    // A simple background for our game.
    this.add.image(0, 0, key.image.background).setOrigin(0);
    this.drawMap();
    this.drawUI();
    // start tutorial
    this.drawNarrator();

    this.cameras.main.fadeIn(300);
  }

  update() {
    //
  }
}
