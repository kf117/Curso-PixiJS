import { Container, Sprite, Texture } from "pixi.js";

export class Button extends Container {

    private def: Texture;
    private down: Texture;
    private over: Texture;
    private id: number;
    private actualSpr: Sprite;
    private padre: any = null;

    constructor(def: Texture, down: Texture, over: Texture, padre: any, id: number) {
        super();
        this.def = def;
        this.down = down;
        this.over = over;
        this.actualSpr = Sprite.from(def);
        this.id = id;
        
        this.addChild(this.actualSpr);
        this.actualSpr.interactive = true;

        this.actualSpr.on("mousedown", this.onMouseDown, this);
        this.actualSpr.on("mouseup", this.onMouseUp, this);
        this.actualSpr.on("mouseover", this.onMouseOver, this);
        this.actualSpr.on("mouseout", this.onMouseOut, this);
        this.actualSpr.on("mousemove", this.onMouseOver, this);

        if (padre != null)
            this.padre = padre;
    }


    private onMouseDown() {
        this.actualSpr.texture = this.down;
    }
    private onMouseUp() {
        this.actualSpr.texture = this.over;
    }
    private onMouseOver() {
        this.padre.clearButtons();
        this.actualSpr.texture = this.over;
        this.padre.setButtonSelected(this.id);
    }
    private onMouseOut() {
        //this.actualSpr.texture = this.def;
    }

    public forceState(val: number) {
        switch (val) {
            case 0:
                this.actualSpr.texture = this.def;
                break;
            case 1:
                this.actualSpr.texture = this.over;
                break;
        }
    }
}