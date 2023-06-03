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
  
	app.renderer.resize(gameWidth, gameHeight);				//<-------------------
	const container = app.view.parentNode as HTMLElement;   //<-------------------

	container.style.marginLeft = marginHorizontal + "px";
	container.style.marginRight = marginHorizontal + "px";

	container.style.marginTop = marginVertical + "px";
	container.style.marginBottom = marginVertical + "px";
});

window.dispatchEvent(new Event("resize"));

Assets.add("myFish", "./myFish.png");
Assets.add("clampy", "./clampy.png");
Assets.add("monoculo", "./monoculo.png");



Assets.load(["clampy", "myFish", "monoculo"]).then(() =>
{
	const fish: Sprite = Sprite.from("myFish");
	const monoculo: Sprite = Sprite.from("monoculo");

	monoculo.position = new Point(250,170);
	const character: Container = new Container();

	character.scale.set(0.5);
	character.addChild(fish);
	character.addChild(monoculo);

	app.stage.addChild(character);
})

