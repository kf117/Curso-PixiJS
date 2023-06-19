import { Container, Sprite, Texture } from "pixi.js";

export class Button extends Container {

    private def: Texture;
    private down: Texture;
    private over: Texture;

    private actualSpr: Sprite;

    constructor(def: Texture, down: Texture, over: Texture) {

        super();
        this.def = def;
        this.down = down;
        this.over = over;

        this.actualSpr = Sprite.from(def);
        
        this.addChild(this.actualSpr);
        this.actualSpr.interactive = true;

        this.actualSpr.on("mousedown", this.onMouseDown, this);
        this.actualSpr.on("mouseup", this.onMouseUp, this);
        this.actualSpr.on("mouseover", this.onMouseOver, this);
        this.actualSpr.on("mouseout", this.onMouseOut, this);

    }


    private onMouseDown() {
        this.actualSpr.texture = this.down;
    }
    private onMouseUp() {
        this.actualSpr.texture = this.over;
    }
    private onMouseOver() {
        this.actualSpr.texture = this.over;
    }
    private onMouseOut() {
        this.actualSpr.texture = this.def;
    }
}