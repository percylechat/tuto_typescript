import * as mithril from 'mithril';
import m from 'mithril';
var root = document.body
m("div",{id:"toto"},"titi")
m.request({
    method: "Get",
    url: "http://localhost:3000/profile/:user",
    responseType:"json",
    params: {user: "toto"},
    body: {name: "test"}
})
.then(function(result) {
    console.log(result)
})
m.request({
    method: "Post",
    url: "http://localhost:3000/profile/",
    responseType:"json",
    body: {user: "toto",token:"456"},
})
.then(function(result) {
    console.log('result2')
    console.log(result)
})
mithril.render(root,"hello world")

