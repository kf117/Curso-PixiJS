import { Container, Point, Sprite } from "pixi.js";

export class Fish_Monoculo extends Container {
    constructor()
    {
        super();
        const fish: Sprite = Sprite.from("myFish");
        const monoculo: Sprite = Sprite.from("monoculo");

        const character: Container = new Container();
        character.addChild(fish);
        character.addChild(monoculo);
        monoculo.position = new Point(0,-80);
        //character.scale.set(0.8);
        fish.anchor.set(0.5);

        this.addChild(character);
    }
}

export class Fish extends Container {
    constructor()
    {
        super();
        const fish: Sprite = Sprite.from("myFish");

        const character: Container = new Container();
        character.addChild(fish);
        //character.scale.set(0.8);
        fish.scale.x = -1;
        fish.anchor.set(0.5);

        this.addChild(character);
    }
}
