import Phaser from 'phaser';

import { key } from '../data';
import { state } from '../store';
import Button from '../component/button';

const ScoreStyle = {
    fontFamily: '"Lucida Grande", Helvetica, Arial, sans-serif',
    fontSize: '32px',
    align: 'center'
}

export default class Result extends Phaser.Scene {

  constructor() {
    super(key.scene.result);
  }

  endEffect = () => {
    const particles = this.add.particles(key.atlas.flares);
    const emitter = particles.createEmitter({
      frame: [ 'red', 'blue', 'green', 'yellow' ],
      x: this.scale.width / 2,
      y: 300,
      speed: 500,
      quantity: 10,
      lifespan: 3000,
      blendMode: 'ADD'
    })
    setTimeout(() => {
      emitter.stop();
      // star animation
      let text = '';
      if(state.score == 9) 
        text = 'Excellent'
      else if(state.score < 9 && state.score >= 6)
        text = 'Good'
      else if(state.score < 6 && state.score >= 3)
        text = 'OK'
      else 
        text = 'Try again';
      this.add.text(this.scale.width / 2, 400, text, ScoreStyle).setOrigin(0.5);
      
      const resetButton = new Button(this.scale.width / 2, this.scale.height / 2 + 100, 5, () => {
        this.restart();
      }, this);
    }, 200)
  }
  create() {
    this.cameras.main.setBackgroundColor('#06061c');
    // this.add.image(0, 0, key.image.result).setOrigin(0);
    this.anims.create({
      key: 'fill_0',
      frames: this.anims.generateFrameNumbers(key.image.starFill, {start: 0, end: 0}),
      frameRate: 6,
    })
    this.anims.create({
      key: 'fill_1',
      frames: this.anims.generateFrameNumbers(key.image.starFill, {start: 0, end: 2}),
      frameRate: 6,
    })
    this.anims.create({
      key: 'fill_2',
      frames: this.anims.generateFrameNumbers(key.image.starFill, {start: 0, end: 5}),
      frameRate: 6,
    })
    const star1_frame = state.score - 3 < 0 ? state.score : 2;
    let temp = state.score - 3;
    const star2_frame = temp - 3 < 0 ? (temp < 0 ? 0 : temp) : 2;
    temp = temp - 3;
    const star3_frame = temp - 3 < 0 ? (temp < 0 ? 0 : temp) : 2;

    const star1 = this.add.sprite(this.scale.width / 2 - 120, 300, key.image.starFill).setDepth(2)
    const star2 = this.add.sprite(this.scale.width / 2, 270, key.image.starFill).setDepth(2).setScale(1.2)
    const star3 = this.add.sprite(this.scale.width / 2 + 120, 300, key.image.starFill).setDepth(2)
    if(star1_frame == 0) {
      this.endEffect();
    } else {
      star1.play(`fill_${star1_frame}`).on('animationcomplete', () => {
        if(star2_frame == 0) {
          this.endEffect();
        } else {
          star2.play(`fill_${star2_frame}`).on('animationcomplete', () => {
            if(star3_frame == 0) {
              this.endEffect();
            } else {
              star3.play(`fill_${star3_frame}`).on('animationcomplete', () => {
                this.endEffect()
              })
            }
          })
        }
        
      })
    }
    
    this.cameras.main.fadeIn(300);

  }
  restart() {
    this.scene.stop(key.scene.result);
    state.score = 0;
    this.scene.start(key.scene.main);
  }
}
