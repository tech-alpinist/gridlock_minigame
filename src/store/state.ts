import { observable } from 'mobx';

class Map {
  scale: number;
  position: Array<number>;
  row: number;
  col: number;
  grid: Array<number>;
  blocks: Array<any>;

  constructor() {
    this.scale = 1;
    this.position = []
    this.row = 0;
    this.col = 0;
    this.grid = []
    this.blocks = []
  }
}

const map = new Map();

export const state = observable({
  totalRound: 9,
  round: 1,
  rounds: [],
  timer: 180, // seconds
  score: 0,
  map: map,
});