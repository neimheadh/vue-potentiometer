(function(t){function e(e){for(var o,a,s=e[0],u=e[1],l=e[2],p=0,c=[];p<s.length;p++)a=s[p],r[a]&&c.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);m&&m(e);while(c.length)c.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var m=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"app--potentiometers"},[n("div",{staticClass:"app--potentiometer app--potentiometer-volume"},[n("div",{staticClass:"app--potentiometer--title"},[t._v("\n        Volume\n      ")]),n("Potentiometer",{attrs:{min:0,max:200},model:{value:t.volume,callback:function(e){t.volume=t._n(e)},expression:"volume"}})],1),n("div",{staticClass:"app--potentiometer app--potentiometer-room"},[n("div",{staticClass:"app--potentiometer--title"},[t._v("\n        Room\n      ")]),n("Potentiometer",{model:{value:t.room,callback:function(e){t.room=t._n(e)},expression:"room"}})],1),n("div",{staticClass:"app--potentiometer app--potentiometer-chorus"},[n("div",{staticClass:"app--potentiometer--title"},[t._v("\n        Chorus\n      ")]),n("Potentiometer",{attrs:{min:0,max:200,"mark-step":2},model:{value:t.chorus,callback:function(e){t.chorus=t._n(e)},expression:"chorus"}})],1)]),n("form",{staticClass:"app--form"},[n("label",[t._v("\n      Volume:\n      "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.volume,expression:"volume",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.volume},on:{input:function(e){e.target.composing||(t.volume=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),n("label",[t._v("\n      Room:\n      "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.room,expression:"room",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.room},on:{input:function(e){e.target.composing||(t.room=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),n("label",[t._v("\n      Chorus:\n      "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.chorus,expression:"chorus",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.chorus},on:{input:function(e){e.target.composing||(t.chorus=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])])},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"potentiometer"},[n("div",{staticClass:"potentiometer--container",attrs:{title:t.dataTitle}},[n("ul",{staticClass:"potentiometer--surround"},t._l(t.marks,function(e){return n("li",{key:e,staticClass:"potentiometer--surround--mark",style:t.getMarkStyle(e),attrs:{title:e}})}),0),n("div",{staticClass:"potentiometer--button",on:{mousedown:t.drag}})]),n("input",t._g({directives:[{name:"model",rawName:"v-model",value:t.dataValue,expression:"dataValue"}],class:{"potentiometer--input":!0,"potentiometer--input-hidden":!t.displayInput},attrs:{type:"number"},domProps:{value:t.dataValue},on:{input:function(e){e.target.composing||(t.dataValue=e.target.value)}}},t.$listeners))])},s=[],u=(n("c5f6"),{name:"potentiometer",data:function(){return{button:void 0,dataValue:0,dataTitle:void 0,dragged:!1,dragY:0,input:void 0,minDeg:0,maxDeg:359,marks:[]}},created:function(){window.addEventListener("mousemove",this.move),window.addEventListener("mouseup",this.leave),window.addEventListener("selectstart",this.select)},destroyed:function(){window.removeEventListener("mousemove",this.move),window.removeEventListener("mouseup",this.leave),window.removeEventListener("selectstart",this.select)},mounted:function(){this.button=this.$el.getElementsByClassName("potentiometer--button")[0],this.input=this.$el.getElementsByClassName("potentiometer--input")[0],this.minDeg=360*this.lowValueGap,this.maxDeg=360-360*this.lowValueGap,this.input.min=this.min,this.input.max=this.max,this.dataValue=this.value,this.dataTitle=this.title;for(var t=this.min;t<=this.max;t+=this.markStep)this.marks.push(t);this.refresh()},props:{displayInput:{type:Boolean,default:function(){return!1}},min:{type:Number,default:function(){return-100}},markStep:{type:Number,default:function(){return 20}},max:{type:Number,default:function(){return 100}},lowValueGap:{type:Number,default:function(){return.1}},value:{type:Number,default:function(){return 0}},title:void 0},methods:{drag:function(t){this.dragged=!0,this.dragY=t.clientY},getDegree:function(t){return(t-this.min)*(this.maxDeg-this.minDeg)/(this.max-this.min)+this.minDeg},getMarkStyle:function(t){return"transform: rotate(".concat(this.getDegree(t)-90,"deg)")},handleDataChange:function(){this.$emit("input",this.dataValue)},leave:function(){this.dragged&&(this.dragged=!1)},move:function(t){if(this.dragged){t.preventDefault(),t.stopPropagation();var e=this.dragY-t.clientY;this.dataValue=e<this.min?this.min:e>this.max?this.max:e}},refresh:function(){this.button.style.transform="rotate(".concat(this.getDegree(this.dataValue),"deg)"),void 0===this.title&&(this.dataTitle=this.dataValue),this.handleDataChange()},select:function(t){this.dragged&&t.preventDefault()}},watch:{dataValue:function(){this.refresh()},value:function(){this.dataValue=this.value}}}),l=u,m=(n("bb53"),n("2877")),p=Object(m["a"])(l,a,s,!1,null,null,null),c=p.exports,d={components:{Potentiometer:c},data:function(){return{room:0,chorus:100,volume:100}}},f=d,v=(n("034f"),Object(m["a"])(f,r,i,!1,null,null,null)),h=v.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(h)}}).$mount("#app")},"64a9":function(t,e,n){},b451:function(t,e,n){},bb53:function(t,e,n){"use strict";var o=n("b451"),r=n.n(o);r.a}});
//# sourceMappingURL=app.f271ec12.js.map