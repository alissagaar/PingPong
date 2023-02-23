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
}