import { Application,  Assets,  Container,  Point,  Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});


window.addEventListener("resize", () =>
{
	const scaleX = window.innerWidth /app.screen.width;
	const scaleY = window.innerHeight /app.screen.height;
	const scale =  Math.min(scaleX, scaleY);

	const gameWidth = Math.round(app.screen.width*scale);
	const gameHeight = Math.round(app.screen.height*scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

	app.view.style!.width = gameWidth+"px";
	app.view.style!.height = gameHeight+"px";

	(app.view.style as any).marginLeft = marginHorizontal + "px";
	(app.view.style as any).marginRight = marginHorizontal + "px";

	(app.view.style as any).marginTop = marginVertical + "px";
	(app.view.style as any).marginBottom = marginVertical + "px";
});

window.dispatchEvent(new Event("resize"));

Assets.add("myFish", "./myFish.png");
Assets.add("clampy", "./clampy.png");
Assets.add("monoculo", "./monoculo.png");



Assets.load(["clampy", "myFish", "monoculo"]).then(() =>
{
	const fish: Sprite = Sprite.from("myFish");
	const monoculo: Sprite = Sprite.from("monoculo");

	const fish_a: Sprite = Sprite.from("myFish");
	const fish_b: Sprite = Sprite.from("myFish");

	const character: Container = new Container();
	character.addChild(fish);
	character.addChild(monoculo);
	monoculo.position = new Point(250,170);
	character.scale.set(0.5);

	
	const other: Container = new Container();
	other.addChild(fish_a);
	fish_a.position = new Point(500,200);
	fish_a.angle = -35;
	fish_a.scale.x = -0.8;
	fish_a.scale.y = 0.8;
	other.addChild(fish_b);
	fish_b.position = new Point(150,200);
	fish_b.angle = -35;
	fish_b.scale.x = 0.7;
	fish_b.scale.y = 0.7;
	fish_b.tint = 0x357C2F;

	app.stage.addChild(character);
	app.stage.addChild(other);
})

