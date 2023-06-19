import { Container, Sprite, Texture,/* TextStyle,Text*/ } from "pixi.js";
import { Button } from "./Button"

const selected = 1;
const deselected = 0;

let btn_selected: number = 0;
export class menu_principal_UI extends Container {


    private btnIniciar: Button;
    private btnOpciones: Button;
    private btnSalir: Button;

    constructor() {
        super();
        const background: Sprite = Sprite.from("menu_principal");
        const titulo: Sprite = Sprite.from("menu_titulo");

        this.btnIniciar = new Button(
            Texture.from("menu_iniciar"),  //default
            Texture.from("menu_iniciar"),  //down
            Texture.from("menu_iniciar_s"), //over
            this, 0
        );

        this.btnOpciones = new Button(
            Texture.from("menu_opciones"),  //default
            Texture.from("menu_opciones"),  //down
            Texture.from("menu_opciones_s"), //over
            this, 1
        );

        this.btnSalir = new Button(
            Texture.from("menu_salir"),  //default
            Texture.from("menu_salir"),  //down
            Texture.from("menu_salir_s"), //over
            this, 2
        );


        titulo.x = background.width / 2 - titulo.width / 2;
        titulo.y = 5;
        this.btnIniciar.x = background.width / 2 - this.btnIniciar.width / 2;
        this.btnIniciar.y = background.height / 2 - this.btnIniciar.height / 2;
        this.btnOpciones.x = background.width / 2 - this.btnOpciones.width / 2;
        this.btnOpciones.y = this.btnIniciar.y + this.btnOpciones.height;
        this.btnSalir.x = background.width / 2 - this.btnSalir.width / 2;
        this.btnSalir.y = this.btnOpciones.y + this.btnSalir.height;

        this.addChild(background);
        this.addChild(titulo);
        this.addChild(this.btnIniciar);
        this.addChild(this.btnOpciones);
        this.addChild(this.btnSalir);


    }

    select(btn_selected: number) {
        const buttons = [this.btnIniciar, this.btnOpciones, this.btnSalir];
        buttons.forEach((button, index) => {
            const isSelected = index === btn_selected;
            button.forceState(isSelected ? selected : deselected);
        });
    }


    public clearButtons(): void {
        const buttons = [this.btnIniciar, this.btnOpciones, this.btnSalir];
        buttons.forEach((button) => {
            button.forceState(deselected);
        });
    }

    public setButtonSelected(id: number) {
        btn_selected = id;
    }

    public onArrowUp(): void {
        btn_selected--;

        if (btn_selected < 0)
            btn_selected = 2;

        this.select(btn_selected);
    }

    public onArrowDown(): void {
        btn_selected++;
        if (btn_selected > 2)
            btn_selected = 0;
        this.select(btn_selected);
    }

    public getBotonSelectedId(): number {
        return btn_selected;
    }
}