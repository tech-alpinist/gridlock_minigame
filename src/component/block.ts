import Phaser from "phaser";
import { key } from '../data';
import { state } from '../store';

class Block extends Phaser.GameObjects.Container {
    color: number;
    shape: number;
    scene: Phaser.Scene;
    positions: Array<Array<number>>;
    elements: Array<Phaser.GameObjects.Sprite>;
    origin: Array<number>;
    canDrag: boolean;
    isDragged: boolean;
    isCompleted: boolean;
    startPosition: Array<number>;
    rotating: number;

    constructor(color: number, shape: number, position: Array<number>, scene: Phaser.Scene, checking: ()=>boolean) {
        super(scene, position[0], position[1])
        this.origin = position;
        this.color = color;
        this.shape = shape;
        this.scene = scene;
        this.elements = [];
        this.positions = [];

        this.canDrag = false;
        this.isDragged = false;
        this.isCompleted = false;
        this.rotating = 0;
        this.startPosition = [0, 0]
        
        for(const i in key.rotation[shape][0]) {
            const x = key.rotation[shape][0][i][0];
            const y = key.rotation[shape][0][i][1];
            this.positions[i] = [x, y]
            this.elements[i] = this.scene.add.sprite(x, y, key.image.blocks, this.color).setOrigin(0, 0)
            .setInteractive({useHandCursor: true})
            .on('dragstart', (pointer: Phaser.Input.Pointer) => {
                this.isDragged = true;
                this.startPosition = [pointer.downX, pointer.downY]
                if(this.isSnap()) {
                    this.removeFromGrid();
                } else {
                    this.setScale(1)
                    this.setPosition(this.x - (pointer.downX - this.x) * 3 / 7, this.y - (pointer.downY - this.y) * 3 / 7)
                }
                
                this.setDepth(2)
            })
            .on('drag', (pointer: Phaser.Input.Pointer) => {
                const deltaX = pointer.x - this.startPosition[0];
                const deltaY = pointer.y - this.startPosition[1];
                this.startPosition = [pointer.x, pointer.y]
                this.setPosition(this.x + deltaX, this.y + deltaY)
            })
            .on('dragend', () => {
                this.setDepth(1)
                if(this.isDroppable()){
                    this.snapTo();
                    this.isCompleted = checking();
                } else {
                    if(this.isSnap()) {
                        this.removeFromGrid();
                    }
                    this.setScale(0.7)
                    this.setPosition(this.origin[0], this.origin[1])
                }
            })
            .on('pointerup', () => {
                if(this.isCompleted) return;
                if(!this.isDragged) {
                    if(this.isSnap()) {
                        this.removeFromGrid();
                    }
                    this.rotate();
                    this.setScale(0.7)
                    this.setPosition(this.origin[0], this.origin[1])
                }
                this.isDragged = false;
            })

            this.scene.input.setDraggable(this.elements[i])
            this.add(this.elements[i])
        }
        this.setScale(0.7)
        this.setDepth(1)
        scene.add.existing(this)
    }

    isSnap = () => {
        let count = 0;
        for(const position of this.positions) {
            const posX = this.x + position[0];
            const posY = this.y + position[1];
            const snapX = Math.round((posX - state.map.position[0]) / 50)
            const snapY = Math.round((posY - state.map.position[1]) / 50)
            if( snapX < state.map.row && snapY < state.map.col) {
                if(state.map.grid[snapX * state.map.row + snapY] == 2) {
                    count++;
                }
            }
        }
        if(count == this.positions.length) 
            return true;
        else 
            return false;
    }
    isDroppable = () => {
        let count = 0;
        for(const position of this.positions) {
            const posX = this.x + position[0];
            const posY = this.y + position[1];
            const snapX = Math.round((posX - state.map.position[0]) / 50)
            const snapY = Math.round((posY - state.map.position[1]) / 50)
            if( snapX < state.map.row && snapY < state.map.col) {
                if(state.map.grid[snapX * state.map.row + snapY] == 1) {
                    count++;
                }
            }
        }
        if(count == this.positions.length) 
            return true;
        else 
            return false;
    }
    rotate = () => {
        this.rotating  = (this.rotating + 1) % key.rotation[this.shape].length;
        for(const i in this.elements) {
            const x = key.rotation[this.shape][this.rotating][i][0];
            const y = key.rotation[this.shape][this.rotating][i][1];
            this.elements[i].setPosition(x, y)
            this.positions[i] = [x, y]
        }
    }
    snapTo = () => {
        for(const position of this.positions) {
            const posX = this.x + position[0];
            const posY = this.y + position[1];
            const snapX = Math.round((posX - state.map.position[0]) / 50)
            const snapY = Math.round((posY - state.map.position[1]) / 50)
            state.map.grid[snapX * state.map.row + snapY] = 2;
            this.x = Phaser.Math.Snap.To(this.x, 50)
            this.y = Phaser.Math.Snap.To(this.y, 50)
        }
    }

    removeFromGrid = () => {
        for(const position of this.positions) {
            const posX = this.x + position[0];
            const posY = this.y + position[1];
            const snapX = Math.round((posX - state.map.position[0]) / 50)
            const snapY = Math.round((posY - state.map.position[1]) / 50)
            state.map.grid[snapX * state.map.row + snapY] = 1
        }
    }
}

export default Block;
