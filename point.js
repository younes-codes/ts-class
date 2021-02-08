export default class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log("X: " + this.x + " Y: " + this.y);
    }
}
