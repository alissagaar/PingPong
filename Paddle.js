const SPEED = .02
export default class Paddle{
    constructor(paddleElem){
        this.paddleElem = paddleElem
    }
    get position(){
        return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"))
    }
    set position(value){
        this.paddleElem.style.setProperty("--position", value)
    }

    update(delta, ballHeight){
        // this.position = ballHeight => this would make computer impossible to beat
        this.position += SPEED * delta * (ballHeight - this.position)
    }
}