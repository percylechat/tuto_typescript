import * as mithril from 'mithril';
import m from 'mithril';
import * as PIXI from 'pixi.js';

var root = document.body

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container


// The application will create a canvas element for you that you
// can then insert into the DOM
//document.body.appendChild(app.view);

// load the texture we need
const app = new PIXI.Application({
    width: 640,
    height: 360,
    backgroundColor: 0x1099bb
  });
  const basicText = new PIXI.Text('Mithril.js rocks!');
  basicText.x = 50
  basicText.y = 100
  app.stage.addChild(basicText)
  
  m.mount(document.body, {
    view: () => m('.pixiContainer', {
      oncreate: ({ dom }) => dom.appendChild(app.view)
    })
  })