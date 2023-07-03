import { AnimatedSprite, Application, Container, Texture} from "pixi.js";
import { assets } from "../assets";
import { IUpdateable } from "../utils/IUpdateable";
import { Keyboard } from "../utils/Keyboard";

export class TickerScene extends Container implements IUpdateable{
    private runningGuy :AnimatedSprite;
    private runningGuyLooking = 1;
    private screenWidth = 0;
    private screenHeight = 0;
    constructor(app: Application)
    {
        super();
        //animatedSprite
        this.runningGuy = new AnimatedSprite(
            [
                Texture.from(assets.guy_running1),
                Texture.from(assets.guy_running2),
                Texture.from(assets.guy_running3),
                Texture.from(assets.guy_running4),
                Texture.from(assets.guy_running5),
                Texture.from(assets.guy_running6),
                Texture.from(assets.guy_running7),
                Texture.from(assets.guy_running8),
                Texture.from(assets.guy_running9),
            ], false
        );

        this.runningGuy.play();
        this.runningGuy.animationSpeed = 0.25;
        this.runningGuy.anchor.set(0.5);
        this.runningGuy.y = 15;
        this.addChild(this.runningGuy);

        this.screenWidth = app.view.width;
        this.screenHeight = app.view.height;
    }

    public update(_deltaTime: number, deltaFrame: number): void {
        this.runningGuy.update(deltaFrame);
        
        checkScreenInside(this.runningGuy, this.screenHeight, this.screenWidth);

        if(Keyboard.state.get("KeyD"))
        {
            this.runningGuy.x+=2;
            if(this.runningGuyLooking == -1)
            {
                this.runningGuyLooking = 1;
                this.runningGuy.width = -1*this.runningGuy.width;
            }
        }
        if(Keyboard.state.get("KeyA"))
        {
            this.runningGuy.x-=2;
            if(this.runningGuyLooking == 1)
            {
                this.runningGuyLooking = -1;
                this.runningGuy.width = -1*this.runningGuy.width;
            }
        }

        if(Keyboard.state.get("KeyS"))
        {
            this.runningGuy.y+=2;
        }

        if(Keyboard.state.get("KeyW"))
        {
            this.runningGuy.y-=2;
        }
    }

}

function checkScreenInside(runningGuy: AnimatedSprite, screenHeight: number, screenWidth: number) 
{
    if(runningGuy.x > screenWidth)
        runningGuy.x = 0;

    if(runningGuy.x < 0)
        runningGuy.x = screenWidth;

    if(runningGuy.y > screenHeight)
        runningGuy.y = 0;

    if(runningGuy.y < 0)
        runningGuy.y = screenHeight;
}

