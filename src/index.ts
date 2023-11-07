import Phaser from 'phaser';

import scenes from './scenes';

new Phaser.Game({
  width: 1250, // 1024
  height: 732, // 768
  title: 'GridLock',
  url: process.env.URL,
  version: process.env.VERSION || '1.0',
  scene: scenes,
  physics: {
    default: 'arcade',
  },
  disableContextMenu: true,
  backgroundColor: '#fff',
  scale: {
    parent: 'game_container',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
});
