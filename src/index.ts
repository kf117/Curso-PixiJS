import { Application, Assets, } from 'pixi.js'
import { assets } from './assets';
import * as PIXI from 'pixi.js';
import { MenuPrincipal } from './escenas/MenuPrincipal';

PIXI.settings.ROUND_PIXELS = true;
PIXI.BaseTexture.defaultOptions.scaleMode = PIXI.SCALE_MODES.NEAREST;

const app = new Application({
	
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 480,
	height: 270,

	
});



////////////////////CONTROL DE TAMAÑO DE VENTANA ///////////////////////////
window.addEventListener("resize", () => {
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY);

	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

	app.view.style!.width = gameWidth + "px";
	app.view.style!.height = gameHeight + "px";

	(app.view.style as any).marginLeft = marginHorizontal + "px";
	(app.view.style as any).marginRight = marginHorizontal + "px";

	(app.view.style as any).marginTop = marginVertical + "px";
	(app.view.style as any).marginBottom = marginVertical + "px";
});
window.dispatchEvent(new Event("resize"));
////////////////////////////////////////////////////////////////////////////

////////////////////CARGA DE ASSETS ///////////////////////////////////////
Assets.addBundle("myAssets", assets); 


////////////////////////////////////////////////////////////////////////////

Assets.loadBundle(["myAssets"]).then(() => {
	
	const MenuPr = new MenuPrincipal(app);
	app.stage.addChild(MenuPr);
})

