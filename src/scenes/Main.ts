import Phaser from 'phaser';

import { key } from '../data';
import { state } from '../store';

export default class Main extends Phaser.Scene {

  constructor() {
    super(key.scene.main);
  }

  randomRounds() {
    const rounds = []
    for(let i = 0; i < 9; i++) {
      rounds.push(this.randNum(i * 3))
    }
    return rounds;
  }
  randNum(start: number) {
    return Math.floor(Math.random() * 3) + start
  }

  create() {
    const rounds = this.randomRounds();
    state.rounds = []
    console.log(rounds)
    for(const round of rounds) {
      state.rounds.push(key.map[round])
    }
    
    state.timer = 300;
    state.round = 1;
    this.scene.start(key.scene.map, {
      map: state.rounds[0]
    })
  }

  update() {
    //
  }
}
