import { Container, Sprite, Texture,/* TextStyle,Text*/ } from "pixi.js";
import { Button } from "../UI/Button"

export class menu_principal extends Container {

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
            Texture.from("menu_iniciar_s") //over
        );

        this.btnOpciones = new Button(
            Texture.from("menu_opciones"),  //default
            Texture.from("menu_opciones"),  //down
            Texture.from("menu_opciones_s") //over
        );


        this.btnSalir = new Button(
            Texture.from("menu_salir"),  //default
            Texture.from("menu_salir"),  //down
            Texture.from("menu_salir_s") //over
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


}