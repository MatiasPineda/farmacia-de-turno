(function(e){function t(t){for(var a,i,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c3fbca7c"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var u=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}o[e]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/farmacia-de-turno/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Nav"),n("div",{attrs:{id:"cont-contenido"}},[n("Contenido"),n("div",{attrs:{id:"cont-view"}},[n("router-view")],1),n("div",{attrs:{id:"footer"}},[e._v(" Matías Pineda - 2020 ")])],1)],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("b-navbar",{attrs:{toggleable:"lg"}},[n("b-navbar-brand",[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v(" Farmacias de Turno ")])],1)],1)],1)},s=[],c={name:"Nav",props:{msg:String}},u=c,l=n("2877"),d=Object(l["a"])(u,i,s,!1,null,null,null),f=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contenido"})},m=[],v={name:"Contenido",props:{msg:String}},b=v,h=Object(l["a"])(b,p,m,!1,null,null,null),g=h.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cont-view"},[n("div",[n("b-form",{on:{submit:e.onSubmit}},[n("b-form-select",{staticClass:"location-select",on:{change:e.resetProvincia},model:{value:e.selected.region,callback:function(t){e.$set(e.selected,"region",t)},expression:"selected.region"}},[n("option",{attrs:{value:"",disabled:""}},[e._v("Selecciona Región")]),e._l(e.regiones,(function(t,a){return n("option",{key:a,domProps:{value:t}},[e._v(e._s(t.name))])}))],2),n("b-form-select",{staticClass:"location-select",attrs:{disabled:!e.selected.region},on:{change:e.resetComuna},model:{value:e.selected.provincia,callback:function(t){e.$set(e.selected,"provincia",t)},expression:"selected.provincia"}},[n("option",{attrs:{value:"",disabled:""}},[e._v("Selecciona Provincia")]),e._l(e.selected.region.provincias,(function(t,a){return n("option",{key:a,domProps:{value:t}},[e._v(e._s(t.name))])}))],2),n("b-form-select",{staticClass:"location-select",attrs:{disabled:!e.selected.provincia},model:{value:e.selected.comuna,callback:function(t){e.$set(e.selected,"comuna",t)},expression:"selected.comuna"}},[n("option",{attrs:{value:"",disabled:""}},[e._v("Selecciona Comuna")]),e._l(e.selected.provincia.comunas,(function(t,a){return n("option",{key:a,domProps:{value:t}},[e._v(e._s(t.name))])}))],2),n("b-button",{staticClass:"location-btn",attrs:{type:"submit",block:"",variant:"success",disabled:!e.selected.comuna}},[e._v("Buscar")])],1)],1),n("div",[1==e.showInfo?n("div",{staticClass:"cards-group"},e._l(e.filteredFarmacias,(function(t){return n("b-card",{key:t.id,staticClass:"card-container",attrs:{title:t.nombre,"sub-title":"Direccion: "+t.direccion,footer:e.stringHorario(e.formatDate(t.apertura),e.formatDate(t.cierre))}},[n("p",{staticClass:"card-text"},[e._v(" Contacto: "+e._s(t.telefono)+" ")]),null!=t.lat?n("b-button",{attrs:{href:"https://www.google.cl/maps/search/"+t.lat+","+t.lng,target:"_blank",variant:"outline-success"}},[e._v(" Google Maps ")]):n("b-button",{attrs:{href:"https://www.google.cl/maps/search/"+t.nombre.replace(" ","+"),target:"_blank",variant:"outline-success"}},[e._v(" Google Maps ")])],1)})),1):e._e()])])},w=[],y=(n("4de4"),n("bc3a")),k=n.n(y),C={name:"FarmaciaTurno",data:function(){return{farmacias:[],filteredFarmacias:[],selected:{region:"",provincia:"",comuna:""},showInfo:!1,regiones:[]}},methods:{getFarmacias:function(){var e=this,t="http://farmacias-de-turno.herokuapp.com/api/v1.0/farmaciasturno/";k.a.get(t).then((function(t){e.farmacias=t.data})).catch((function(e){console.log(e)}))},getRegiones:function(){var e=this,t="http://farmacias-de-turno.herokuapp.com/api/v1.0/localidades";k.a.get(t).then((function(t){e.regiones=t.data})).catch((function(e){console.log(e)}))},resetProvincia:function(){this.selected.provincia="",this.selected.comuna="",this.showInfo=!1},resetComuna:function(){this.selected.comuna="",this.showInfo=!1},onSubmit:function(e){var t=this;e.preventDefault(),this.filteredFarmacias=this.farmacias.filter((function(e){return e.comuna===t.selected.comuna.number})),this.selected.comuna!=[]&&this.filteredFarmacias.length>0&&(this.showInfo=!0)},formatDate:function(e){var t=e.substr(0,4),n=e.substr(5,2),a=e.substr(8,2),o=e.substr(11,5),r="";return r=o.substr(0,2)<"12"?" AM":" PM",[a+"/"+n+"/"+t,o+r]},stringHorario:function(e,t){return e[0]+" - Turno desde "+e[1]+" hasta las "+t[1]+" de "+t[0]}},created:function(){this.getFarmacias(),this.getRegiones()}},P=C,j=Object(l["a"])(P,_,w,!1,null,"41e42cee",null),O=j.exports,x={name:"app",components:{Contenido:g,Nav:f},views:{FarmaciaTurno:O}},S=x,F=(n("5c0b"),Object(l["a"])(S,o,r,!1,null,null,null)),T=F.exports,M=(n("d3b7"),n("8c4f"));a["default"].use(M["a"]);var $=[{path:"/",name:"FarmaciaTurno",component:O,meta:{title:"Farmacias de Turno"}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],E=new M["a"]({mode:"history",base:"/farmacia-de-turno/",routes:$}),D=E,I=n("5f5b"),A=n("b1e0");n("f9e3"),n("2dd8");a["default"].use(I["a"]),a["default"].use(A["a"]),a["default"].config.productionTip=!1,new a["default"]({router:D,render:function(e){return e(T)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),o=n.n(a);o.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.180947b1.js.map