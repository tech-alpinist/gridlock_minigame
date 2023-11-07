import Phaser from 'phaser';

import { background, star, starFill, round, buttons, blocks, hands, flares, flaresJSON } from '../assets';
import { key } from '../data';

export default class Boot extends Phaser.Scene {
  constructor() {
    super(key.scene.boot);
  }

  preload() {
    this.load.image(key.image.background, background);
    this.load.image(key.image.star, star);
    this.load.image(key.image.round, round);
    this.load.spritesheet(key.image.hands, hands, {
      frameWidth: 326, frameHeight: 326, margin: 0, spacing: 0
    })
    this.load.spritesheet(key.image.buttons, buttons, {
      frameWidth: 50, frameHeight: 50, margin: 0, spacing: 0
    });
    this.load.spritesheet(key.image.blocks, blocks, {
      frameWidth: 50, frameHeight: 50, margin: 0, spacing: 0
    });
    this.load.spritesheet(key.image.starFill, starFill,  {
      frameWidth: 100, frameHeight: 96, margin: 0, spacing: 0
    })
    this.load.atlas(key.atlas.flares, flares, flaresJSON);
  }

  create() {
    this.scene.start(key.scene.main);
  }
}
