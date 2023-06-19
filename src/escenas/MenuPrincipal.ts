import { Application, Container } from "pixi.js";
import { menu_principal } from "../entidades/UI/MenuPrincipal";
import { Keyboard } from "../utils/Keyboard";

let btn_selected: number = 0;
export class MenuPrincipal extends Container {
    constructor(app: Application) {
        super();


        const menu: menu_principal = new menu_principal();
        menu.x = app.screen.width / 2 - menu.width / 2;
        menu.y = app.screen.height / 2 - menu.height / 2;
        this.addChild(menu);

        Keyboard.down.on("KeyL", this.onArrowUp, this);
        Keyboard.down.on("ArrowDown", this.onArrowDown, this);

        console.log(btn_selected);

    }
    private onArrowUp():void {
        btn_selected--;
        console.log(btn_selected);

        if (btn_selected < 0)
            btn_selected = 2;
    }


    private onArrowDown():void {
        btn_selected++;
        if (btn_selected > 2)
            btn_selected = 0;
    }


}