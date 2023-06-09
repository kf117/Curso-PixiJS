import { Application, Assets, } from 'pixi.js'
import { assets } from './assets';
import * as PIXI from 'pixi.js';
//import { MenuPrincipal } from './escenas/MenuPrincipal';
import { Keyboard } from './utils/Keyboard';
import { TickerScene } from './escenas/TickerScene';

PIXI.settings.ROUND_PIXELS = true;
PIXI.BaseTexture.defaultOptions.scaleMode = PIXI.SCALE_MODES.NEAREST;

const app = new Application({
	
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	//backgroundColor: 0x252526,
	backgroundColor: 0x44939b,
	width: 480*2,
	height: 270*2,

	
});

(globalThis as any).__PIXI_APP__ = app; //app es su instancia de Application



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



Keyboard.initialize();
////////////////////////////////////////////////////////////////////////////

Assets.loadBundle(["myAssets"]).then(() => {
	
	//const MenuPr = new MenuPrincipal(app);
	//app.stage.addChild(MenuPr);
	const tickerScn = new TickerScene(app);
	app.stage.addChild(tickerScn);
	PIXI.Ticker.shared.add(function(deltaFrame){
		tickerScn.update(PIXI.Ticker.shared.deltaMS, deltaFrame)
	})
})
