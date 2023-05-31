import { Application,  Assets,  Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

Assets.add("myFish", "./myFish.png");
Assets.add("clampy", "./clampy.png");

Assets.load(["clampy", "myFish"]).then(() =>
{
	const clampy: Sprite = Sprite.from("myFish");

	console.log("hola mundo!", clampy.width, clampy.height);
//clampy.anchor.set(0.5);
		
clampy.x = 0;
clampy.y = 0;

app.stage.addChild(clampy);
})

