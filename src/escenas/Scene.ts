import { Container} from "pixi.js";

import {tablaUI_puntuacion } from "../entidades/UI/TablaUI";
//import { Fish, Fish_Monoculo } from "../entidades/Fish";

export class Scene extends Container {
    constructor() {
        super();
/*
        const fish_monoculo: Fish_Monoculo = new Fish_Monoculo();
        fish_monoculo.x = 200;
        fish_monoculo.y = 200;
        this.addChild(fish_monoculo);

        const fish: Fish = new Fish();
        fish.x = 450;
        fish.y = 450;
        this.addChild(fish);
*/

        const tabla_UI: tablaUI_puntuacion = new tablaUI_puntuacion("","0117",2);

        this.addChild(tabla_UI);

    }

}