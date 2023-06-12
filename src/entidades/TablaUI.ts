import { Container, Sprite, Point, TextStyle,Text} from "pixi.js";

export class tablaUI_Ancho extends Container {
    constructor()
    {
        super();
        const A1: Sprite = Sprite.from("tablaUI_A1");
        const A2_1: Sprite = Sprite.from("tablaUI_A2");
        const A2_2: Sprite = Sprite.from("tablaUI_A2");
        const A2_3: Sprite = Sprite.from("tablaUI_A2");
        const A2_4: Sprite = Sprite.from("tablaUI_A2");
        const A2_5: Sprite = Sprite.from("tablaUI_A2");
        const A2_6: Sprite = Sprite.from("tablaUI_A2");
        const A3: Sprite = Sprite.from("tablaUI_A3");

        const B1: Sprite = Sprite.from("tablaUI_B1");
        const B2_1: Sprite = Sprite.from("tablaUI_B2");
        const B2_2: Sprite = Sprite.from("tablaUI_B2");
        const B2_3: Sprite = Sprite.from("tablaUI_B2");
        const B2_4: Sprite = Sprite.from("tablaUI_B2");
        const B2_5: Sprite = Sprite.from("tablaUI_B2");
        const B2_6: Sprite = Sprite.from("tablaUI_B2");
        const B3: Sprite = Sprite.from("tablaUI_B3");

        const C1: Sprite = Sprite.from("tablaUI_C1");
        const C2_1: Sprite = Sprite.from("tablaUI_C2");
        const C2_2: Sprite = Sprite.from("tablaUI_C2");
        const C2_3: Sprite = Sprite.from("tablaUI_C2");
        const C2_4: Sprite = Sprite.from("tablaUI_C2");
        const C2_5: Sprite = Sprite.from("tablaUI_C2");
        const C2_6: Sprite = Sprite.from("tablaUI_C2");
        const C3: Sprite = Sprite.from("tablaUI_C3");

        const tablaUI: Container = new Container();


        //posicionamiento <---- tienen 16x16

const a = 0;
const b = a+16;
const c = b+16;
const d = c+16;
const e = d+16;
const f= e+16;
const g = f+16;
const h = g+16;

        tablaUI.addChild(A1)  .position = new Point(a,a);
        tablaUI.addChild(A2_1).position = new Point(b,a);
        tablaUI.addChild(A2_2).position = new Point(c,a);
        tablaUI.addChild(A2_3).position = new Point(d,a);
        tablaUI.addChild(A2_4).position = new Point(e,a);
        tablaUI.addChild(A2_5).position = new Point(f,a);
        tablaUI.addChild(A2_6).position = new Point(g,a);
        tablaUI.addChild(A3)  .position = new Point(h,a);
        
        tablaUI.addChild(B1)  .position = new Point(a,b);
        tablaUI.addChild(B2_1).position = new Point(b,b);
        tablaUI.addChild(B2_2).position = new Point(c,b);
        tablaUI.addChild(B2_3).position = new Point(d,b);
        tablaUI.addChild(B2_4).position = new Point(e,b);
        tablaUI.addChild(B2_5).position = new Point(f,b);
        tablaUI.addChild(B2_6).position = new Point(g,b);
        tablaUI.addChild(B3)  .position = new Point(h,b);

        tablaUI.addChild(C1)  .position = new Point(a,c);
        tablaUI.addChild(C2_1).position = new Point(b,c);
        tablaUI.addChild(C2_2).position = new Point(c,c);
        tablaUI.addChild(C2_3).position = new Point(d,c);
        tablaUI.addChild(C2_4).position = new Point(e,c);
        tablaUI.addChild(C2_5).position = new Point(f,c);
        tablaUI.addChild(C2_6).position = new Point(g,c);
        tablaUI.addChild(C3)  .position = new Point(h,c);

        tablaUI.scale.set(1);
        this.addChild(tablaUI);
    }
}

export class tablaUI_Alto extends Container {
    constructor()
    {
        super();
        const A1: Sprite = Sprite.from("tablaUI_A1");
        const A2_1: Sprite = Sprite.from("tablaUI_A2");
        const A2_2: Sprite = Sprite.from("tablaUI_A2");
        const A2_3: Sprite = Sprite.from("tablaUI_A2");
        const A2_4: Sprite = Sprite.from("tablaUI_A2");
        const A2_5: Sprite = Sprite.from("tablaUI_A2");
        const A2_6: Sprite = Sprite.from("tablaUI_A2");
        const A3: Sprite = Sprite.from("tablaUI_A3");

        const BA1: Sprite = Sprite.from("tablaUI_B1");
        const BA2_1: Sprite = Sprite.from("tablaUI_B2");
        const BA2_2: Sprite = Sprite.from("tablaUI_B2");
        const BA2_3: Sprite = Sprite.from("tablaUI_B2");
        const BA2_4: Sprite = Sprite.from("tablaUI_B2");
        const BA2_5: Sprite = Sprite.from("tablaUI_B2");
        const BA2_6: Sprite = Sprite.from("tablaUI_B2");
        const BA3: Sprite = Sprite.from("tablaUI_B3");

        const BB1: Sprite = Sprite.from("tablaUI_B1");
        const BB2_1: Sprite = Sprite.from("tablaUI_B2");
        const BB2_2: Sprite = Sprite.from("tablaUI_B2");
        const BB2_3: Sprite = Sprite.from("tablaUI_B2");
        const BB2_4: Sprite = Sprite.from("tablaUI_B2");
        const BB2_5: Sprite = Sprite.from("tablaUI_B2");
        const BB2_6: Sprite = Sprite.from("tablaUI_B2");
        const BB3: Sprite = Sprite.from("tablaUI_B3");

        const BC1: Sprite = Sprite.from("tablaUI_B1");
        const BC2_1: Sprite = Sprite.from("tablaUI_B2");
        const BC2_2: Sprite = Sprite.from("tablaUI_B2");
        const BC2_3: Sprite = Sprite.from("tablaUI_B2");
        const BC2_4: Sprite = Sprite.from("tablaUI_B2");
        const BC2_5: Sprite = Sprite.from("tablaUI_B2");
        const BC2_6: Sprite = Sprite.from("tablaUI_B2");
        const BC3: Sprite = Sprite.from("tablaUI_B3");

        const BD1: Sprite = Sprite.from("tablaUI_B1");
        const BD2_1: Sprite = Sprite.from("tablaUI_B2");
        const BD2_2: Sprite = Sprite.from("tablaUI_B2");
        const BD2_3: Sprite = Sprite.from("tablaUI_B2");
        const BD2_4: Sprite = Sprite.from("tablaUI_B2");
        const BD2_5: Sprite = Sprite.from("tablaUI_B2");
        const BD2_6: Sprite = Sprite.from("tablaUI_B2");
        const BD3: Sprite = Sprite.from("tablaUI_B3");

        const BE1: Sprite = Sprite.from("tablaUI_B1");
        const BE2_1: Sprite = Sprite.from("tablaUI_B2");
        const BE2_2: Sprite = Sprite.from("tablaUI_B2");
        const BE2_3: Sprite = Sprite.from("tablaUI_B2");
        const BE2_4: Sprite = Sprite.from("tablaUI_B2");
        const BE2_5: Sprite = Sprite.from("tablaUI_B2");
        const BE2_6: Sprite = Sprite.from("tablaUI_B2");
        const BE3: Sprite = Sprite.from("tablaUI_B3");

        const BF1: Sprite = Sprite.from("tablaUI_B1");
        const BF2_1: Sprite = Sprite.from("tablaUI_B2");
        const BF2_2: Sprite = Sprite.from("tablaUI_B2");
        const BF2_3: Sprite = Sprite.from("tablaUI_B2");
        const BF2_4: Sprite = Sprite.from("tablaUI_B2");
        const BF2_5: Sprite = Sprite.from("tablaUI_B2");
        const BF2_6: Sprite = Sprite.from("tablaUI_B2");
        const BF3: Sprite = Sprite.from("tablaUI_B3");

        const BG1: Sprite = Sprite.from("tablaUI_B1");
        const BG2_1: Sprite = Sprite.from("tablaUI_B2");
        const BG2_2: Sprite = Sprite.from("tablaUI_B2");
        const BG2_3: Sprite = Sprite.from("tablaUI_B2");
        const BG2_4: Sprite = Sprite.from("tablaUI_B2");
        const BG2_5: Sprite = Sprite.from("tablaUI_B2");
        const BG2_6: Sprite = Sprite.from("tablaUI_B2");
        const BG3: Sprite = Sprite.from("tablaUI_B3");

        const BH1: Sprite = Sprite.from("tablaUI_B1");
        const BH2_1: Sprite = Sprite.from("tablaUI_B2");
        const BH2_2: Sprite = Sprite.from("tablaUI_B2");
        const BH2_3: Sprite = Sprite.from("tablaUI_B2");
        const BH2_4: Sprite = Sprite.from("tablaUI_B2");
        const BH2_5: Sprite = Sprite.from("tablaUI_B2");
        const BH2_6: Sprite = Sprite.from("tablaUI_B2");
        const BH3: Sprite = Sprite.from("tablaUI_B3");

        const BI1: Sprite = Sprite.from("tablaUI_B1");
        const BI2_1: Sprite = Sprite.from("tablaUI_B2");
        const BI2_2: Sprite = Sprite.from("tablaUI_B2");
        const BI2_3: Sprite = Sprite.from("tablaUI_B2");
        const BI2_4: Sprite = Sprite.from("tablaUI_B2");
        const BI2_5: Sprite = Sprite.from("tablaUI_B2");
        const BI2_6: Sprite = Sprite.from("tablaUI_B2");
        const BI3: Sprite = Sprite.from("tablaUI_B3");

        const BJ1: Sprite = Sprite.from("tablaUI_B1");
        const BJ2_1: Sprite = Sprite.from("tablaUI_B2");
        const BJ2_2: Sprite = Sprite.from("tablaUI_B2");
        const BJ2_3: Sprite = Sprite.from("tablaUI_B2");
        const BJ2_4: Sprite = Sprite.from("tablaUI_B2");
        const BJ2_5: Sprite = Sprite.from("tablaUI_B2");
        const BJ2_6: Sprite = Sprite.from("tablaUI_B2");
        const BJ3: Sprite = Sprite.from("tablaUI_B3");

        const BK1: Sprite = Sprite.from("tablaUI_B1");
        const BK2_1: Sprite = Sprite.from("tablaUI_B2");
        const BK2_2: Sprite = Sprite.from("tablaUI_B2");
        const BK2_3: Sprite = Sprite.from("tablaUI_B2");
        const BK2_4: Sprite = Sprite.from("tablaUI_B2");
        const BK2_5: Sprite = Sprite.from("tablaUI_B2");
        const BK2_6: Sprite = Sprite.from("tablaUI_B2");
        const BK3: Sprite = Sprite.from("tablaUI_B3");

        const BL1: Sprite = Sprite.from("tablaUI_B1");
        const BL2_1: Sprite = Sprite.from("tablaUI_B2");
        const BL2_2: Sprite = Sprite.from("tablaUI_B2");
        const BL2_3: Sprite = Sprite.from("tablaUI_B2");
        const BL2_4: Sprite = Sprite.from("tablaUI_B2");
        const BL2_5: Sprite = Sprite.from("tablaUI_B2");
        const BL2_6: Sprite = Sprite.from("tablaUI_B2");
        const BL3: Sprite = Sprite.from("tablaUI_B3");


        const C1: Sprite = Sprite.from("tablaUI_C1");
        const C2_1: Sprite = Sprite.from("tablaUI_C2");
        const C2_2: Sprite = Sprite.from("tablaUI_C2");
        const C2_3: Sprite = Sprite.from("tablaUI_C2");
        const C2_4: Sprite = Sprite.from("tablaUI_C2");
        const C2_5: Sprite = Sprite.from("tablaUI_C2");
        const C2_6: Sprite = Sprite.from("tablaUI_C2");
        const C3: Sprite = Sprite.from("tablaUI_C3");

        const tablaUI: Container = new Container();


        //posicionamiento <---- tienen 16x16

const a = 0;
const b = a+16;
const c = b+16;
const d = c+16;
const e = d+16;
const f= e+16;
const g = f+16;
const h = g+16;
const i = h+16;
const j = i+16;
const k = j+16;
const l = k+16;
const m = l+16;
const n = m+16;

        tablaUI.addChild(A1)  .position = new Point(a,a);
        tablaUI.addChild(A2_1).position = new Point(b,a);
        tablaUI.addChild(A2_2).position = new Point(c,a);
        tablaUI.addChild(A2_3).position = new Point(d,a);
        tablaUI.addChild(A2_4).position = new Point(e,a);
        tablaUI.addChild(A2_5).position = new Point(f,a);
        tablaUI.addChild(A2_6).position = new Point(g,a);
        tablaUI.addChild(A3)  .position = new Point(h,a);
        
        tablaUI.addChild(BA1)  .position = new Point(a,b);
        tablaUI.addChild(BA2_1).position = new Point(b,b);
        tablaUI.addChild(BA2_2).position = new Point(c,b);
        tablaUI.addChild(BA2_3).position = new Point(d,b);
        tablaUI.addChild(BA2_4).position = new Point(e,b);
        tablaUI.addChild(BA2_5).position = new Point(f,b);
        tablaUI.addChild(BA2_6).position = new Point(g,b);
        tablaUI.addChild(BA3)  .position = new Point(h,b);

        tablaUI.addChild(BB1)  .position = new Point(a,c);
        tablaUI.addChild(BB2_1).position = new Point(b,c);
        tablaUI.addChild(BB2_2).position = new Point(c,c);
        tablaUI.addChild(BB2_3).position = new Point(d,c);
        tablaUI.addChild(BB2_4).position = new Point(e,c);
        tablaUI.addChild(BB2_5).position = new Point(f,c);
        tablaUI.addChild(BB2_6).position = new Point(g,c);
        tablaUI.addChild(BB3)  .position = new Point(h,c);

        tablaUI.addChild(BC1)  .position = new Point(a,d);
        tablaUI.addChild(BC2_1).position = new Point(b,d);
        tablaUI.addChild(BC2_2).position = new Point(c,d);
        tablaUI.addChild(BC2_3).position = new Point(d,d);
        tablaUI.addChild(BC2_4).position = new Point(e,d);
        tablaUI.addChild(BC2_5).position = new Point(f,d);
        tablaUI.addChild(BC2_6).position = new Point(g,d);
        tablaUI.addChild(BC3)  .position = new Point(h,d);
        
        tablaUI.addChild(BD1)  .position = new Point(a,e);
        tablaUI.addChild(BD2_1).position = new Point(b,e);
        tablaUI.addChild(BD2_2).position = new Point(c,e);
        tablaUI.addChild(BD2_3).position = new Point(d,e);
        tablaUI.addChild(BD2_4).position = new Point(e,e);
        tablaUI.addChild(BD2_5).position = new Point(f,e);
        tablaUI.addChild(BD2_6).position = new Point(g,e);
        tablaUI.addChild(BD3)  .position = new Point(h,e);
        
        tablaUI.addChild(BE1)  .position = new Point(a,f);
        tablaUI.addChild(BE2_1).position = new Point(b,f);
        tablaUI.addChild(BE2_2).position = new Point(c,f);
        tablaUI.addChild(BE2_3).position = new Point(d,f);
        tablaUI.addChild(BE2_4).position = new Point(e,f);
        tablaUI.addChild(BE2_5).position = new Point(f,f);
        tablaUI.addChild(BE2_6).position = new Point(g,f);
        tablaUI.addChild(BE3)  .position = new Point(h,f);
        
        tablaUI.addChild(BF1)  .position = new Point(a,g);
        tablaUI.addChild(BF2_1).position = new Point(b,g);
        tablaUI.addChild(BF2_2).position = new Point(c,g);
        tablaUI.addChild(BF2_3).position = new Point(d,g);
        tablaUI.addChild(BF2_4).position = new Point(e,g);
        tablaUI.addChild(BF2_5).position = new Point(f,g);
        tablaUI.addChild(BF2_6).position = new Point(g,g);
        tablaUI.addChild(BF3)  .position = new Point(h,g);

        tablaUI.addChild(BG1)  .position = new Point(a,h);
        tablaUI.addChild(BG2_1).position = new Point(b,h);
        tablaUI.addChild(BG2_2).position = new Point(c,h);
        tablaUI.addChild(BG2_3).position = new Point(d,h);
        tablaUI.addChild(BG2_4).position = new Point(e,h);
        tablaUI.addChild(BG2_5).position = new Point(f,h);
        tablaUI.addChild(BG2_6).position = new Point(g,h);
        tablaUI.addChild(BG3)  .position = new Point(h,h);


        tablaUI.addChild(BH1)  .position = new Point(a,i);
        tablaUI.addChild(BH2_1).position = new Point(b,i);
        tablaUI.addChild(BH2_2).position = new Point(c,i);
        tablaUI.addChild(BH2_3).position = new Point(d,i);
        tablaUI.addChild(BH2_4).position = new Point(e,i);
        tablaUI.addChild(BH2_5).position = new Point(f,i);
        tablaUI.addChild(BH2_6).position = new Point(g,i);
        tablaUI.addChild(BH3)  .position = new Point(h,i);


        tablaUI.addChild(BI1)  .position = new Point(a,j);
        tablaUI.addChild(BI2_1).position = new Point(b,j);
        tablaUI.addChild(BI2_2).position = new Point(c,j);
        tablaUI.addChild(BI2_3).position = new Point(d,j);
        tablaUI.addChild(BI2_4).position = new Point(e,j);
        tablaUI.addChild(BI2_5).position = new Point(f,j);
        tablaUI.addChild(BI2_6).position = new Point(g,j);
        tablaUI.addChild(BI3)  .position = new Point(h,j);

        tablaUI.addChild(BJ1)  .position = new Point(a,k);
        tablaUI.addChild(BJ2_1).position = new Point(b,k);
        tablaUI.addChild(BJ2_2).position = new Point(c,k);
        tablaUI.addChild(BJ2_3).position = new Point(d,k);
        tablaUI.addChild(BJ2_4).position = new Point(e,k);
        tablaUI.addChild(BJ2_5).position = new Point(f,k);
        tablaUI.addChild(BJ2_6).position = new Point(g,k);
        tablaUI.addChild(BJ3)  .position = new Point(h,k);

        tablaUI.addChild(BK1)  .position = new Point(a,l);
        tablaUI.addChild(BK2_1).position = new Point(b,l);
        tablaUI.addChild(BK2_2).position = new Point(c,l);
        tablaUI.addChild(BK2_3).position = new Point(d,l);
        tablaUI.addChild(BK2_4).position = new Point(e,l);
        tablaUI.addChild(BK2_5).position = new Point(f,l);
        tablaUI.addChild(BK2_6).position = new Point(g,l);
        tablaUI.addChild(BK3)  .position = new Point(h,l);

        tablaUI.addChild(BL1)  .position = new Point(a,m);
        tablaUI.addChild(BL2_1).position = new Point(b,m);
        tablaUI.addChild(BL2_2).position = new Point(c,m);
        tablaUI.addChild(BL2_3).position = new Point(d,m);
        tablaUI.addChild(BL2_4).position = new Point(e,m);
        tablaUI.addChild(BL2_5).position = new Point(f,m);
        tablaUI.addChild(BL2_6).position = new Point(g,m);
        tablaUI.addChild(BL3)  .position = new Point(h,m);

        tablaUI.addChild(C1)  .position = new Point(a,n);
        tablaUI.addChild(C2_1).position = new Point(b,n);
        tablaUI.addChild(C2_2).position = new Point(c,n);
        tablaUI.addChild(C2_3).position = new Point(d,n);
        tablaUI.addChild(C2_4).position = new Point(e,n);
        tablaUI.addChild(C2_5).position = new Point(f,n);
        tablaUI.addChild(C2_6).position = new Point(g,n);
        tablaUI.addChild(C3)  .position = new Point(h,n);

        tablaUI.scale.set(1);
        this.addChild(tablaUI);
    }
}

export class tablaUI_puntuacion extends Container {
    constructor(texto:string, puntuacion:any, starts: any)
    {
        super();

        
        const A1: Sprite = Sprite.from("tabla_score");
        const lvCompleto: Sprite = Sprite.from("tabla_lv_completo");

        this.addChild(A1);
        this.addChild(lvCompleto);
        this.x= (480/2) - (64) ;
        this.y=(270/2) - (208/2);

        const style = new TextStyle({
            fontFamily: ['Courier new'],
            fontSize: 16,
            fontWeight: "800",
          });
        const mytext: Text = new Text(texto);
        mytext.style = style;
        mytext.position.x = 10;
        this.addChild(mytext);

        if(starts !== null && starts !== undefined)
            switch(starts)
            {
                case 0: console.log("cero"); break;
                case 1: console.log("uno"); break;
                case 2: console.log("dos"); break;
            }

        if(puntuacion !== null && puntuacion !== undefined)
        {
            const style = new TextStyle({
                fontFamily: ['Courier new'],
                fontSize: 20,
                fontWeight: "800",
              });
            const puntuacion_text: Text = new Text(puntuacion);
            puntuacion_text.style = style;
            puntuacion_text.position.x = 40;
            puntuacion_text.position.y = 100;
            this.addChild(puntuacion_text);
        }


    }
}