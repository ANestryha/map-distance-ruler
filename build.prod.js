!function(a){function b(a,b,e){return 4===arguments.length?c.apply(this,arguments):void d(a,{declarative:!0,deps:b,declare:e})}function c(a,b,c,e){d(a,{declarative:!1,deps:b,executingRequire:c,execute:e})}function d(a,b){b.name=a,a in o||(o[a]=b),b.normalizedDeps=b.deps}function e(a,b){if(b[a.groupIndex]=b[a.groupIndex]||[],-1==p.call(b[a.groupIndex],a)){b[a.groupIndex].push(a);for(var c=0,d=a.normalizedDeps.length;d>c;c++){var f=a.normalizedDeps[c],g=o[f];if(g&&!g.evaluated){var h=a.groupIndex+(g.declarative!=a.declarative);if(void 0===g.groupIndex||g.groupIndex<h){if(void 0!==g.groupIndex&&(b[g.groupIndex].splice(p.call(b[g.groupIndex],g),1),0==b[g.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");g.groupIndex=h}e(g,b)}}}}function f(a){var b=o[a];b.groupIndex=0;var c=[];e(b,c);for(var d=!!b.declarative==c.length%2,f=c.length-1;f>=0;f--){for(var g=c[f],i=0;i<g.length;i++){var k=g[i];d?h(k):j(k)}d=!d}}function g(a){return s[a]||(s[a]={name:a,dependencies:[],exports:{},importers:[]})}function h(b){if(!b.module){var c=b.module=g(b.name),d=b.module.exports,e=b.declare.call(a,function(a,b){if(c.locked=!0,"object"==typeof a)for(var e in a)d[e]=a[e];else d[a]=b;for(var f=0,g=c.importers.length;g>f;f++){var h=c.importers[f];if(!h.locked)for(var i=0;i<h.dependencies.length;++i)h.dependencies[i]===c&&h.setters[i](d)}return c.locked=!1,b},{id:b.name});c.setters=e.setters,c.execute=e.execute;for(var f=0,i=b.normalizedDeps.length;i>f;f++){var j,k=b.normalizedDeps[f],l=o[k],m=s[k];m?j=m.exports:l&&!l.declarative?j=l.esModule:l?(h(l),m=l.module,j=m.exports):j=n(k),m&&m.importers?(m.importers.push(c),c.dependencies.push(m)):c.dependencies.push(null),c.setters[f]&&c.setters[f](j)}}}function i(a){var b,c=o[a];if(c)c.declarative?m(a,[]):c.evaluated||j(c),b=c.module.exports;else if(b=n(a),!b)throw new Error("Unable to load dependency "+a+".");return(!c||c.declarative)&&b&&b.__useDefault?b.default:b}function j(b){if(!b.module){var c={},d=b.module={exports:c,id:b.name};if(!b.executingRequire)for(var e=0,f=b.normalizedDeps.length;f>e;e++){var g=b.normalizedDeps[e],h=o[g];h&&j(h)}b.evaluated=!0;var l=b.execute.call(a,function(a){for(var c=0,d=b.deps.length;d>c;c++)if(b.deps[c]==a)return i(b.normalizedDeps[c]);throw new TypeError("Module "+a+" not declared as a dependency.")},c,d);l&&(d.exports=l),c=d.exports,c&&c.__esModule?b.esModule=c:b.esModule=k(c)}}function k(b){var c={};if(("object"==typeof b||"function"==typeof b)&&b!==a)if(q)for(var d in b)"default"!==d&&l(c,b,d);else{var e=b&&b.hasOwnProperty;for(var d in b)"default"===d||e&&!b.hasOwnProperty(d)||(c[d]=b[d])}return c.default=b,r(c,"__useDefault",{value:!0}),c}function l(a,b,c){try{var d;(d=Object.getOwnPropertyDescriptor(b,c))&&r(a,c,d)}catch(d){return a[c]=b[c],!1}}function m(b,c){var d=o[b];if(d&&!d.evaluated&&d.declarative){c.push(b);for(var e=0,f=d.normalizedDeps.length;f>e;e++){var g=d.normalizedDeps[e];-1==p.call(c,g)&&(o[g]?m(g,c):n(g))}d.evaluated||(d.evaluated=!0,d.module.execute.call(a))}}function n(a){if(u[a])return u[a];if("@node/"==a.substr(0,6))return u[a]=k(t(a.substr(6)));var b=o[a];if(!b)throw"Module "+a+" not present.";return f(a),m(a,[]),o[a]=void 0,b.declarative&&r(b.module.exports,"__esModule",{value:!0}),u[a]=b.declarative?b.module.exports:b.esModule}var o={},p=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},q=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(a){q=!1}var r;!function(){try{Object.defineProperty({},"a",{})&&(r=Object.defineProperty)}catch(a){r=function(a,b,c){try{a[b]=c.value||c.get.call(a)}catch(a){}}}}();var s={},t="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,u={"@empty":{}};return function(a,d,e,f){return function(g){g(function(g){for(var h={_nodeRequire:t,register:b,registerDynamic:c,get:n,set:function(a,b){u[a]=b},newModule:function(a){return a}},i=0;i<d.length;i++)(function(a,b){b&&b.__esModule?u[a]=b:u[a]=k(b)})(d[i],arguments[i]);f(h);var j=n(a[0]);if(a.length>1)for(var i=1;i<a.length;i++)n(a[i]);return e?j.default:j})}}}("undefined"!=typeof self?self:global)(["1"],[],!1,function(a){this.require,this.exports,this.module;a.registerDynamic("2",[],!0,function(a,b,c){var d=this||self,d=c.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();return"number"==typeof __g&&(__g=d),c.exports}),a.registerDynamic("3",[],!0,function(a,b,c){this||self;return c.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a},c.exports}),a.registerDynamic("4",["3"],!0,function(a,b,c){var d=(this||self,a("3"));return c.exports=function(a,b,c){if(d(a),void 0===b)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}},c.exports}),a.registerDynamic("5",["2","6","4"],!0,function(a,b,c){var d=this||self,d=a("2"),e=a("6"),f=a("4"),g="prototype",h=function(a,b,c){var i,j,k,l=a&h.F,m=a&h.G,n=a&h.S,o=a&h.P,p=a&h.B,q=a&h.W,r=m?e:e[b]||(e[b]={}),s=m?d:n?d[b]:(d[b]||{})[g];m&&(c=b);for(i in c)j=!l&&s&&i in s,j&&i in r||(k=j?s[i]:c[i],r[i]=m&&"function"!=typeof s[i]?c[i]:p&&j?f(k,d):q&&s[i]==k?function(a){var b=function(b){return this instanceof a?new a(b):a(b)};return b[g]=a[g],b}(k):o&&"function"==typeof k?f(Function.call,k):k,o&&((r[g]||(r[g]={}))[i]=k))};return h.F=1,h.G=2,h.S=4,h.P=8,h.B=16,h.W=32,c.exports=h,c.exports}),a.registerDynamic("7",[],!0,function(a,b,c){var d=(this||self,Object);return c.exports={create:d.create,getProto:d.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:d.getOwnPropertyDescriptor,setDesc:d.defineProperty,setDescs:d.defineProperties,getKeys:d.keys,getNames:d.getOwnPropertyNames,getSymbols:d.getOwnPropertySymbols,each:[].forEach},c.exports}),a.registerDynamic("8",[],!0,function(a,b,c){this||self;return c.exports=function(a){if(void 0==a)throw TypeError("Can't call method on  "+a);return a},c.exports}),a.registerDynamic("9",["8"],!0,function(a,b,c){var d=(this||self,a("8"));return c.exports=function(a){return Object(d(a))},c.exports}),a.registerDynamic("a",[],!0,function(a,b,c){var d=(this||self,{}.toString);return c.exports=function(a){return d.call(a).slice(8,-1)},c.exports}),a.registerDynamic("b",["a"],!0,function(a,b,c){var d=(this||self,a("a"));return c.exports=Object("z").propertyIsEnumerable(0)?Object:function(a){return"String"==d(a)?a.split(""):Object(a)},c.exports}),a.registerDynamic("c",[],!0,function(a,b,c){this||self;return c.exports=function(a){try{return!!a()}catch(a){return!0}},c.exports}),a.registerDynamic("d",["7","9","b","c"],!0,function(a,b,c){var d=(this||self,a("7")),e=a("9"),f=a("b");return c.exports=a("c")(function(){var a=Object.assign,b={},c={},d=Symbol(),e="abcdefghijklmnopqrst";return b[d]=7,e.split("").forEach(function(a){c[a]=a}),7!=a({},b)[d]||Object.keys(a({},c)).join("")!=e})?function(a,b){for(var c=e(a),g=arguments,h=g.length,i=1,j=d.getKeys,k=d.getSymbols,l=d.isEnum;h>i;)for(var m,n=f(g[i++]),o=k?j(n).concat(k(n)):j(n),p=o.length,q=0;p>q;)l.call(n,m=o[q++])&&(c[m]=n[m]);return c}:Object.assign,c.exports}),a.registerDynamic("e",["5","d"],!0,function(a,b,c){var d=(this||self,a("5"));return d(d.S+d.F,"Object",{assign:a("d")}),c.exports}),a.registerDynamic("6",[],!0,function(a,b,c){var d=(this||self,c.exports={version:"1.2.6"});return"number"==typeof __e&&(__e=d),c.exports}),a.registerDynamic("f",["e","6"],!0,function(a,b,c){this||self;return a("e"),c.exports=a("6").Object.assign,c.exports}),a.registerDynamic("10",["f"],!0,function(a,b,c){this||self;return c.exports={default:a("f"),__esModule:!0},c.exports}),a.register("11",[],function(a){"use strict";var b;return{setters:[],execute:function(){b=L.Class.extend({data:null,next:null,prev:null,initialize:function(a){this.data=a},index:0}),a("default",L.Class.extend({_length:0,_head:null,_tail:null,_hash:{},_count:0,add:function(a){var c=new b(a);return 0==this._length?(this._head=c,this._tail=c):(this._tail.next=c,c.prev=this._tail,this._tail=c),this._length++,c.index=this._count,this._hash[this._count]=c,this._count++,c},insertAfter:function(a,b){var c=this._head;if(!(0==this._length||b>this._length||b<0)&&null!==c){var d=this.get(b),e=this.get(b+1),f=this.add(a);return this._tail=f.prev,d.next=f,e.prev=f,f.prev=d,f.next=e,f}},get:function(a){var c=this._head,d=this._length,e=0;if(0===d||a<0||a>d)return new b;for(;e<a;)c=c.next,e++;return c},getLast:function(){return this.get(this._length-1)},getFirst:function(){return this.get(0)},remove:function(a){if(a>-1&&a<this._length){var b=this._head,c=0;if(0===a)this._head=b.next,this._head?this._head.prev=null:this._tail=null;else if(a===this._length-1)b=this._tail,this._tail=b.prev,this._tail.next=null;else{for(;c++<a;)b=b.next;b.prev.next=b.next}return this._length--,delete this._hash[b.index],b.data}return null},isEmpty:function(){return 0===this._length},each:function(a){for(var b=this._head;null!==b;)null!==b&&a.call(this,b),b=b.next},_beforeClear:function(){},clear:function(){this._beforeClear(),this._length=0,this._head=null,this._tail=null,this._hash={},this._count=0}}))}}}),a.register("12",["10","11"],function(a){var b,c,d,e;return{setters:[function(a){b=a.default},function(a){c=a.default}],execute:function(){"use strict";d=L.Polyline.extend({options:{color:"black",weight:2,clickable:!0}}),e=L.DivIcon.extend({options:{className:"ruler-icon",iconSize:new L.Point(6,6)}}),a("default",L.Class.extend({initialize:function(a){this._map=a,this._map.__dr._options._updateTooltipDistance&&(this._updateTooltipDistance=this._map.__dr._options._updateTooltipDistance),this._map.__dr._options._createTooltip&&(this._createTooltip=this._map.__dr._options._createTooltip),this.rulerOptions=this._map.__dr._options},addMarker:function(a){var b=L.marker(a,{icon:new e(this.rulerOptions.iconOptions)}).addTo(this._layerPaint);this.hash.add(b)},insertAfter:function(){},get:function(){},getLast:function(){},getFirst:function(){},removeMarker:function(){},clear:function(){},__enabled:!1,_toggleMeasure:function(){this.__enabled=!this.__enabled,this.__enabled?this._startMeasuring():this._stopMeasuring()},_startMeasuring:function(){this._oldCursor=this._map._container.style.cursor,this._map._container.style.cursor="crosshair",this._doubleClickZoom=this._map.doubleClickZoom.enabled(),this._map.doubleClickZoom.disable(),L.DomEvent.on(this._map,"mousemove",this._mouseMove,this).on(this._map,"click",this._mouseClick,this).on(this._map,"dblclick",this._finishPath,this).on(document,"keydown",this._onKeyDown,this),this._layerPaint||(this._layerPaint=L.layerGroup().addTo(this._map)),this._points||(this._points=[])},_stopMeasuring:function(){this._map._container.style.cursor=this._oldCursor,L.DomEvent.off(document,"keydown",this._onKeyDown,this).off(this._map,"mousemove",this._mouseMove,this).off(this._map,"click",this._mouseClick,this).off(this._map,"dblclick",this._mouseClick,this),this._doubleClickZoom&&this._map.doubleClickZoom.enable(),this._layerPaint&&this._layerPaint.clearLayers(),this._restartPath()},_mouseMove:function(a){if(a.latlng&&this._lastPoint&&(this._layerPaintPathTemp?this._layerPaintPathTemp.spliceLatLngs(0,2,this._lastPoint,a.latlng):this._layerPaintPathTemp=L.polyline([this._lastPoint,a.latlng],b({color:"black",weight:1.5,clickable:!1,dashArray:"6,3"},this.rulerOptions.paintLineOptions)).addTo(this._layerPaint),this._tooltip)){this._distance||(this._distance=0),this._updateTooltipPosition(a.latlng);var c=a.latlng.distanceTo(this._lastPoint);this._updateTooltipDistance(this._tooltip,this._distance+c,c)}},_mouseClick:function(a){if(a.latlng){if(this._lastPoint&&this._tooltip){this._distance||(this._distance=0),this._updateTooltipPosition(a.latlng);var c=a.latlng.distanceTo(this._lastPoint);this._updateTooltipDistance(this._tooltip,this._distance+c,c),this._distance+=c}this.addMarker(a.latlng,this._tooltip),this._createTooltip.call(this,a.latlng),this._lastPoint&&!this._layerPaintPath&&(this._layerPaintPath=new d([this._lastPoint],this.rulerOptions.lineOptions).addTo(this._layerPaint)),this._layerPaintPath&&this._layerPaintPath.addLatLng(a.latlng),this._lastCircle&&this._layerPaint.removeLayer(this._lastCircle),this._lastCircle=L.marker(a.latlng,b({icon:new e(this.rulerOptions.iconOptions),clickable:!!this._lastCircle},this.rulerOptions.lastNodeOptions)).addTo(this._layerPaint),this._lastCircle.on("click",function(){this._finishPath()},this),this._lastPoint=a.latlng}},_finishPath:function(){this._lastCircle&&this._layerPaint.removeLayer(this._lastCircle),this._tooltip&&this._layerPaint.removeLayer(this._tooltip),this._layerPaint&&this._layerPaintPathTemp&&this._layerPaint.removeLayer(this._layerPaintPathTemp),this._restartPath()},_restartPath:function(){this._distance=0,this._tooltip=void 0,this._lastCircle=void 0,this._lastPoint=void 0,this._layerPaintPath=void 0,this._layerPaintPathTemp=void 0},_createTooltip:function(a){var b=L.divIcon({className:"ruler-tooltip",iconAnchor:[-5,-5]});this._tooltip=L.marker(a,{icon:b,clickable:!1}).addTo(this._layerPaint)},_updateTooltipPosition:function(a){this._tooltip.setLatLng(a)},_updateTooltipDistance:function(a,b,c){var d=b,e=c,f='<div class="ruler-tooltip-total">'+d+" m</div>";e>0&&d!=e&&(f+='<div class="ruler-tooltip-difference">(+'+e+" m)</div>"),a._icon.innerHTML=f},_onKeyDown:function(a){27==a.keyCode&&(this._lastPoint?this._finishPath():this._toggleMeasure())},hash:new c}))}}}),a.register("1",["10","12"],function(a){var b,c;return{setters:[function(a){b=a.default},function(a){c=a.default}],execute:function(){"use strict";L.MapDistanceRuler=L.Class.extend({baseOptions:{renderRuler:null,iconOptions:{},lastNodeOptions:{},lineOptions:{},paintLineOptions:{}},initialize:function(a){this._options=b({},this.baseOptions,a)},onAdd:function(a){this._map=a,this._map.__dr=this,this.view=new c(this._map)},onRemove:function(a){},view:null}),L.mapDistanceRuler=function(a){return new L.MapDistanceRuler(a)}}}})})(function(a){a()});