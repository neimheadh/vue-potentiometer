(function(t){function e(e){for(var i,r,u=e[0],s=e[1],l=e[2],d=0,p=[];d<u.length;d++)r=u[d],a[r]&&p.push(a[r][0]),a[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);m&&m(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var m=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"app--potentiometers"},[n("div",{staticClass:"app--potentiometer"},[n("div",{staticClass:"app--potentiometer--title"},[t._v("\n        Volume\n      ")]),n("Potentiometer",{attrs:{name:"volume",min:0,max:200},model:{value:t.volume,callback:function(e){t.volume=t._n(e)},expression:"volume"}})],1),n("div",{staticClass:"app--potentiometer"},[n("div",{staticClass:"app--potentiometer--title"},[t._v("\n        Room\n      ")]),n("Potentiometer",{attrs:{name:"room"},model:{value:t.room,callback:function(e){t.room=t._n(e)},expression:"room"}})],1)]),n("form",{staticClass:"app--form"},[n("label",[t._v("\n      Volume: \n      "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.volume,expression:"volume",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.volume},on:{input:function(e){e.target.composing||(t.volume=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),n("label",[t._v("\n      Room:\n      "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.room,expression:"room",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.room},on:{input:function(e){e.target.composing||(t.room=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])])},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"potentiometer"},[n("div",{staticClass:"potentiometer--container",attrs:{title:t.dataTitle}},[n("ul",{staticClass:"potentiometer--surround"},t._l(t.marks,function(e){return n("li",{key:e,staticClass:"potentiometer--surround--mark",style:t.getMarkStyle(e),attrs:{title:e}})}),0),n("div",{staticClass:"potentiometer--button",on:{mousedown:t.drag}})]),n("input",t._g({directives:[{name:"model",rawName:"v-model",value:t.dataValue,expression:"dataValue"}],class:{"potentiometer--input":!0,"potentiometer--input-hidden":!t.displayInput},attrs:{type:"number"},domProps:{value:t.dataValue},on:{input:function(e){e.target.composing||(t.dataValue=e.target.value)}}},t.$listeners))])},u=[],s=(n("c5f6"),{name:"potentiometer",data:function(){return{button:void 0,dataValue:0,dataTitle:void 0,dragged:!1,dragY:0,input:void 0,minDeg:0,maxDeg:359,marks:[]}},created:function(){window.addEventListener("mousemove",this.move),window.addEventListener("mouseup",this.leave),window.addEventListener("selectstart",this.select)},destroyed:function(){window.removeEventListener("mousemove",this.move),window.removeEventListener("mouseup",this.leave),window.removeEventListener("selectstart",this.select)},mounted:function(){this.button=this.$el.getElementsByClassName("potentiometer--button")[0],this.input=this.$el.getElementsByClassName("potentiometer--input")[0],this.minDeg=360*this.lowValueGap,this.maxDeg=360-360*this.lowValueGap,this.input.min=this.min,this.input.max=this.max,this.dataValue=this.value,this.dataTitle=this.title;for(var t=this.min;t<=this.max;t+=this.markStep)this.marks.push(t);this.refresh()},props:{displayInput:{type:Boolean,default:function(){return!1}},min:{type:Number,default:function(){return-100}},markStep:{type:Number,default:function(){return 20}},max:{type:Number,default:function(){return 100}},lowValueGap:{type:Number,default:function(){return.1}},value:{type:Number,default:function(){return 0}},title:void 0},methods:{drag:function(t){this.dragged=!0,this.dragY=t.clientY},getDegree:function(t){return(t-this.min)*(this.maxDeg-this.minDeg)/(this.max-this.min)+this.minDeg},getMarkStyle:function(t){return"transform: rotate(".concat(this.getDegree(t)-90,"deg)")},handleDataChange:function(){this.$emit("input",this.dataValue)},leave:function(){this.dragged&&(this.dragged=!1)},move:function(t){if(this.dragged){t.preventDefault(),t.stopPropagation();var e=this.dragY-t.clientY;this.dataValue=e<this.min?this.min:e>this.max?this.max:e}},refresh:function(){this.button.style.transform="rotate(".concat(this.getDegree(this.dataValue),"deg)"),void 0===this.title&&(this.dataTitle=this.dataValue),this.handleDataChange()},select:function(t){this.dragged&&t.preventDefault()}},watch:{dataValue:function(){this.refresh()},value:function(){this.dataValue=this.value}}}),l=s,m=(n("bb53"),n("2877")),d=Object(m["a"])(l,r,u,!1,null,null,null),p=d.exports,c={components:{Potentiometer:p},data:function(){return{room:0,volume:100}}},f=c,v=(n("034f"),Object(m["a"])(f,a,o,!1,null,null,null)),h=v.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(h)}}).$mount("#app")},"64a9":function(t,e,n){},b451:function(t,e,n){},bb53:function(t,e,n){"use strict";var i=n("b451"),a=n.n(i);a.a}});
//# sourceMappingURL=app.7174a2ba.js.map