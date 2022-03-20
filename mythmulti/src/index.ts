import * as mithril from 'mithril';
import m from 'mithril';
import { tata} from "./view/test";

var root = document.body

const toto2 =  m("div",{id:"toto"},"titi")
let views: any  = [];

views.push(toto2);
views.push(tata);

const View = {
    view: function() {
        return views;
    }
}


m.mount(document.body, View);
