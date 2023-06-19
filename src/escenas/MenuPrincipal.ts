import { Application, Container } from "pixi.js";
import { menu_principal_UI } from "../entidades/UI/MenuPrincipal_UI";
import { Keyboard } from "../utils/Keyboard";

let menu: menu_principal_UI;


export class MenuPrincipal extends Container {
    constructor(app: Application) {
        super();
        menu = new menu_principal_UI();
        menu.x = app.screen.width / 2 - menu.width / 2;
        menu.y = app.screen.height / 2 - menu.height / 2;
        this.addChild(menu);

        Keyboard.down.on("ArrowUp", this.onArrowUp, this);
        Keyboard.down.on("ArrowDown", this.onArrowDown, this);
        Keyboard.down.on("Enter", this.onEnterPress, this);
    }

    ///////////WTF... WHYYYY!?!?!?! D: ///////////////////////////////
    private onArrowUp() { menu.onArrowUp(); }
    private onArrowDown() { menu.onArrowDown(); }

    private onEnterPress(): void {
        console.log("HACER ALGO -> opcion ", menu.getBotonSelectedId())
    }

    public clearButtons(): void {
        menu.clearButtons();
    }
}

