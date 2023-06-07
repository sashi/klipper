(function(){"use strict";var A=(e=>(e.Clockwise="clockwise",e.CounterClockwise="counter-clockwise",e))(A||{}),p=(e=>(e.Relative="relative",e.Absolute="absolute",e))(p||{});const ne=(e,t)=>e in t;var ie=typeof global=="object"&&global&&global.Object===Object&&global,oe=ie,ae=typeof self=="object"&&self&&self.Object===Object&&self,se=oe||ae||Function("return this")(),I=se,ce=I.Symbol,d=ce,L=Object.prototype,le=L.hasOwnProperty,ue=L.toString,w=d?d.toStringTag:void 0;function fe(e){var t=le.call(e,w),r=e[w];try{e[w]=void 0;var n=!0}catch{}var o=ue.call(e);return n&&(t?e[w]=r:delete e[w]),o}var he=Object.prototype,pe=he.toString;function de(e){return pe.call(e)}var ge="[object Null]",ye="[object Undefined]",U=d?d.toStringTag:void 0;function F(e){return e==null?e===void 0?ye:ge:U&&U in Object(e)?fe(e):de(e)}function N(e){return e!=null&&typeof e=="object"}var _e="[object Symbol]";function M(e){return typeof e=="symbol"||N(e)&&F(e)==_e}function me(e,t){for(var r=-1,n=e==null?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}var be=Array.isArray,C=be,ve=1/0,Q=d?d.prototype:void 0,k=Q?Q.toString:void 0;function q(e){if(typeof e=="string")return e;if(C(e))return me(e,q)+"";if(M(e))return k?k.call(e):"";var t=e+"";return t=="0"&&1/e==-ve?"-0":t}function P(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function we(e){return e}var Ce="[object AsyncFunction]",xe="[object Function]",Oe="[object GeneratorFunction]",Se="[object Proxy]";function Pe(e){if(!P(e))return!1;var t=F(e);return t==xe||t==Oe||t==Ce||t==Se}var Ee=I["__core-js_shared__"],j=Ee,X=function(){var e=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Te(e){return!!X&&X in e}var $e=Function.prototype,ze=$e.toString;function Ae(e){if(e!=null){try{return ze.call(e)}catch{}try{return e+""}catch{}}return""}var Ie=/[\\^$.*+?()[\]{}|]/g,Fe=/^\[object .+?Constructor\]$/,Ne=Function.prototype,Me=Object.prototype,je=Ne.toString,Ge=Me.hasOwnProperty,Re=RegExp("^"+je.call(Ge).replace(Ie,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function De(e){if(!P(e)||Te(e))return!1;var t=Pe(e)?Re:Fe;return t.test(Ae(e))}function He(e,t){return e==null?void 0:e[t]}function G(e,t){var r=He(e,t);return De(r)?r:void 0}function Le(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}var Ue=800,Qe=16,ke=Date.now;function qe(e){var t=0,r=0;return function(){var n=ke(),o=Qe-(n-r);if(r=n,o>0){if(++t>=Ue)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function Xe(e){return function(){return e}}var Je=function(){try{var e=G(Object,"defineProperty");return e({},"",{}),e}catch{}}(),E=Je,Ke=E?function(e,t){return E(e,"toString",{configurable:!0,enumerable:!1,value:Xe(t),writable:!0})}:we,Be=Ke,Ye=qe(Be),Ze=Ye,We=9007199254740991,Ve=/^(?:0|[1-9]\d*)$/;function J(e,t){var r=typeof e;return t=t??We,!!t&&(r=="number"||r!="symbol"&&Ve.test(e))&&e>-1&&e%1==0&&e<t}function et(e,t,r){t=="__proto__"&&E?E(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function K(e,t){return e===t||e!==e&&t!==t}var tt=Object.prototype,rt=tt.hasOwnProperty;function nt(e,t,r){var n=e[t];(!(rt.call(e,t)&&K(n,r))||r===void 0&&!(t in e))&&et(e,t,r)}var B=Math.max;function it(e,t,r){return t=B(t===void 0?e.length-1:t,0),function(){for(var n=arguments,o=-1,s=B(n.length-t,0),c=Array(s);++o<s;)c[o]=n[t+o];o=-1;for(var a=Array(t+1);++o<t;)a[o]=n[o];return a[t]=r(c),Le(e,this,a)}}var ot=9007199254740991;function at(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ot}var st="[object Arguments]";function Y(e){return N(e)&&F(e)==st}var Z=Object.prototype,ct=Z.hasOwnProperty,lt=Z.propertyIsEnumerable,ut=Y(function(){return arguments}())?Y:function(e){return N(e)&&ct.call(e,"callee")&&!lt.call(e,"callee")},W=ut,ft=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ht=/^\w*$/;function pt(e,t){if(C(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||M(e)?!0:ht.test(e)||!ft.test(e)||t!=null&&e in Object(t)}var dt=G(Object,"create"),x=dt;function gt(){this.__data__=x?x(null):{},this.size=0}function yt(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var _t="__lodash_hash_undefined__",mt=Object.prototype,bt=mt.hasOwnProperty;function vt(e){var t=this.__data__;if(x){var r=t[e];return r===_t?void 0:r}return bt.call(t,e)?t[e]:void 0}var wt=Object.prototype,Ct=wt.hasOwnProperty;function xt(e){var t=this.__data__;return x?t[e]!==void 0:Ct.call(t,e)}var Ot="__lodash_hash_undefined__";function St(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=x&&t===void 0?Ot:t,this}function y(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}y.prototype.clear=gt,y.prototype.delete=yt,y.prototype.get=vt,y.prototype.has=xt,y.prototype.set=St;function Pt(){this.__data__=[],this.size=0}function T(e,t){for(var r=e.length;r--;)if(K(e[r][0],t))return r;return-1}var Et=Array.prototype,Tt=Et.splice;function $t(e){var t=this.__data__,r=T(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():Tt.call(t,r,1),--this.size,!0}function zt(e){var t=this.__data__,r=T(t,e);return r<0?void 0:t[r][1]}function At(e){return T(this.__data__,e)>-1}function It(e,t){var r=this.__data__,n=T(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function b(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}b.prototype.clear=Pt,b.prototype.delete=$t,b.prototype.get=zt,b.prototype.has=At,b.prototype.set=It;var Ft=G(I,"Map"),Nt=Ft;function Mt(){this.size=0,this.__data__={hash:new y,map:new(Nt||b),string:new y}}function jt(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function $(e,t){var r=e.__data__;return jt(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Gt(e){var t=$(this,e).delete(e);return this.size-=t?1:0,t}function Rt(e){return $(this,e).get(e)}function Dt(e){return $(this,e).has(e)}function Ht(e,t){var r=$(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function _(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}_.prototype.clear=Mt,_.prototype.delete=Gt,_.prototype.get=Rt,_.prototype.has=Dt,_.prototype.set=Ht;var Lt="Expected a function";function R(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Lt);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],s=r.cache;if(s.has(o))return s.get(o);var c=e.apply(this,n);return r.cache=s.set(o,c)||s,c};return r.cache=new(R.Cache||_),r}R.Cache=_;var Ut=500;function Qt(e){var t=R(e,function(n){return r.size===Ut&&r.clear(),n}),r=t.cache;return t}var kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qt=/\\(\\)?/g,Xt=Qt(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(kt,function(r,n,o,s){t.push(o?s.replace(qt,"$1"):n||r)}),t}),Jt=Xt;function Kt(e){return e==null?"":q(e)}function z(e,t){return C(e)?e:pt(e,t)?[e]:Jt(Kt(e))}var Bt=1/0;function D(e){if(typeof e=="string"||M(e))return e;var t=e+"";return t=="0"&&1/e==-Bt?"-0":t}function Yt(e,t){t=z(t,e);for(var r=0,n=t.length;e!=null&&r<n;)e=e[D(t[r++])];return r&&r==n?e:void 0}function Zt(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}var V=d?d.isConcatSpreadable:void 0;function Wt(e){return C(e)||W(e)||!!(V&&e&&e[V])}function ee(e,t,r,n,o){var s=-1,c=e.length;for(r||(r=Wt),o||(o=[]);++s<c;){var a=e[s];t>0&&r(a)?t>1?ee(a,t-1,r,n,o):Zt(o,a):n||(o[o.length]=a)}return o}function Vt(e){var t=e==null?0:e.length;return t?ee(e,1):[]}function er(e){return Ze(it(e,void 0,Vt),e+"")}function tr(e,t){return e!=null&&t in Object(e)}function rr(e,t,r){t=z(t,e);for(var n=-1,o=t.length,s=!1;++n<o;){var c=D(t[n]);if(!(s=e!=null&&r(e,c)))break;e=e[c]}return s||++n!=o?s:(o=e==null?0:e.length,!!o&&at(o)&&J(c,o)&&(C(e)||W(e)))}function nr(e,t){return e!=null&&rr(e,t,tr)}function ir(e,t,r,n){if(!P(e))return e;t=z(t,e);for(var o=-1,s=t.length,c=s-1,a=e;a!=null&&++o<s;){var f=D(t[o]),i=r;if(f==="__proto__"||f==="constructor"||f==="prototype")return e;if(o!=c){var u=a[f];i=n?n(u,f,a):void 0,i===void 0&&(i=P(u)?u:J(t[o+1])?[]:{})}nt(a,f,i),a=a[f]}return e}function or(e,t,r){for(var n=-1,o=t.length,s={};++n<o;){var c=t[n],a=Yt(e,c);r(a,c)&&ir(s,z(c,e),a)}return s}function ar(e,t){return or(e,t,function(r,n){return nr(e,n)})}var sr=er(function(e,t){return e==null?{}:ar(e,t)}),te=sr;function cr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var re={};(function(e){class t{constructor(n){this.i=0,this.string=n,this.whitespace=` 	\r
`,this.quotes=`'"`,this.escapes="\\",this.escapedQuotes='"',this.ansiCQuotes=!0,this.localeQuotes=!0,this.debug=!1}readChar(){return this.string.charAt(this.i++)}processEscapes(n,o,s){if(!s&&!this.escapedQuotes.includes(o))return n;const c="["+this.escapes.replace(/(.)/g,"\\$1")+"]";if(!s&&this.escapedQuotes.includes(o)){const a=new RegExp(c+"("+c+"|\\"+o+")","g");return n.replace(a,"$1")}if(s){const a={"([\\\\'\"?])":i=>i,a:()=>"\x07",b:()=>"\b","e|E":()=>"\x1B",f:()=>"\f",n:()=>`
`,r:()=>"\r",t:()=>"	",v:()=>"\v","([0-7]{1,3})":i=>String.fromCharCode(parseInt(i,8)),"x([0-9a-fA-F]{1,2})":i=>String.fromCharCode(parseInt(i,16)),"u([0-9a-fA-F]{1,4})":i=>String.fromCharCode(parseInt(i,16)),"U([0-9a-fA-F]{1,8})":i=>String.fromCharCode(parseInt(i,16)),"c(.)":i=>i==="?"?"":i==="@"?"\0":String.fromCharCode(i.charCodeAt(0)&31)},f=new RegExp(c+"("+Object.keys(a).join("|")+")","g");return n.replace(f,function(i,u){for(const g in a){const O=new RegExp("^"+g+"$").exec(u);if(O!==null)return a[g].apply(null,O.slice(1))}})}}*[Symbol.iterator](){let n=!1,o=!1,s=!1,c=-2,a;for(this.debug&&console.log("full input:",">"+this.string+"<");;){const f=this.i,i=this.readChar();if(this.debug&&console.log("position:",f,"input:",">"+i+"<","accumulated:",a,"inQuote:",n,"inDollarQuote:",o,"lastDollar:",c,"escaped:",s),i===""){if(n)throw new Error("Got EOF while in a quoted string");if(s)throw new Error("Got EOF while in an escape sequence");a!==void 0&&(yield a);return}if(s){i===`
`||(n?a=(a||"")+s+i:a=(a||"")+i),s=!1;continue}if(this.escapes.includes(i)&&(!n||o!==!1||this.escapedQuotes.includes(n))){s=i;continue}if(n!==!1){if(i===n){a=this.processEscapes(a,n,o==="'"),n=!1,o=!1;continue}a=(a||"")+i;continue}if(this.quotes.includes(i)){n=i,c===f-1&&(i==="'"&&!this.ansiCQuotes||i==='"'&&!this.localeQuotes||(o=i)),a=a||"",o!==!1&&(a=a.slice(0,-1));continue}if(n===!1&&i==="$"&&(c=f),this.whitespace.includes(i)){a!==void 0&&(yield a),a=void 0;continue}a=(a||"")+i}}}e.split=function(r){return Array.from(new t(r))},e.quote=function(r){return r===""?"''":/[^\w@%\-+=:,./]/.test(r)?("'"+r.replace(/('+)/g,`'"$1"'`)+"'").replace(/^''|''$/g,""):r},e.join=function(r){if(!Array.isArray(r))throw new TypeError("args should be an array");return r.map(e.quote).join(" ")}})(re);var lr=cr(re);const ur=e=>{const t={};for(const[,r,n]of e.matchAll(/([a-z])[ \t]*(-?(?:\d+(?:\.\d+)?|\.\d+))/ig))t[r.toLowerCase()]=Number(n);return t},fr=e=>{const t={};for(const r of lr.split(e)){const n=r.indexOf("="),o=r.substring(0,n),s=r.substring(n+1);t[o.toLowerCase()]=s}return t},hr=e=>{const t=e.trim().split(";",2)[0],[,r,n=""]=t.split(/^([gm][0-9]+)\s*/i);if(r)return{type:"gcode",command:r.toUpperCase(),args:ur(n)};const[,o,s=""]=t.split(/^(SET_PRINT_STATS_INFO|EXCLUDE_OBJECT_DEFINE)\s+/i);return o?{type:"macro",command:o.toUpperCase(),args:fr(s)}:{type:"other"}},m=e=>Math.round(e*1e4)/1e4,pr=(e,t)=>{const r=[],n=[],o=[],s=e.split(`
`);let c=!1,a=p.Relative,f=p.Absolute;const i={x:0,y:0,z:0,e:0,filePosition:0},u={length:1,extrudeExtra:0,z:0};for(let g=0;g<s.length;g++){const{type:O,command:H,args:h}=hr(s[g])??{};let l=null;if(O==="macro")switch(H){case"SET_PRINT_STATS_INFO":"current_layer"in h&&(c=!0);break;case"EXCLUDE_OBJECT_DEFINE":if("polygon"in h&&h.polygon){const v={polygon:JSON.parse(h.polygon).map(([yr,_r])=>({x:yr,y:_r}))};o.push(Object.freeze(v))}break}else if(O==="gcode"){switch(H){case"G0":case"G1":l={...te(h,["x","y","z","e"]),filePosition:i.filePosition};break;case"G2":case"G3":l={...te(h,["x","y","z","e","i","j","k","r"]),direction:H==="G2"?A.Clockwise:A.CounterClockwise,filePosition:i.filePosition};break;case"G10":l={e:-u.length,filePosition:0},u.z!==0&&(l.z=m(i.z+u.z));break;case"G11":l={e:m(u.length+u.extrudeExtra),filePosition:i.filePosition},u.z!==0&&(l.z=m(i.z-u.z));break;case"G90":f=p.Absolute;case"M82":a=p.Absolute,i.e=0;break;case"G91":f=p.Relative;case"M83":a=p.Relative;break;case"G92":a===p.Absolute&&(i.e=h.e??i.e),f===p.Absolute&&(i.x=h.x??i.x,i.y=h.y??i.y,i.z=h.z??i.z);break;case"M207":u.length=h.s??u.length,u.extrudeExtra=h.s??u.extrudeExtra,u.z=h.z??u.z;break}if(l){if(a===p.Absolute&&l.e!==void 0){const S=m(l.e-i.e);i.e=l.e,l.e=S}if(f===p.Relative&&(l.x!==void 0&&(l.x=m(l.x+i.x)),l.y!==void 0&&(l.y=m(l.y+i.y)),l.z!==void 0&&(l.z=m(l.z+i.z))),c&&l.e&&l.e>0){const S=l;if(["x","y","i","j"].some(v=>ne(v,S)&&S[v]!==0)){const v={z:i.z,move:r.length-1,filePosition:i.filePosition};n.push(Object.freeze(v)),c=!1}}i.x=l.x??i.x,i.y=l.y??i.y,i.z=l.z??i.z,r.push(Object.freeze(l))}}g%Math.floor(s.length/100)===0&&t(i.filePosition),i.filePosition+=s[g].length+1}return t(i.filePosition),{moves:r,layers:n,parts:o}},dr=e=>{const t={action:"progress",filePosition:e};self.postMessage(t)},gr=(e,t,r)=>{const n={action:"result",moves:e,layers:t,parts:r};self.postMessage(n)};self.onmessage=e=>{const t=e.data;switch(t.action){case"parse":{const{moves:r,layers:n,parts:o}=pr(t.gcode,dr);gr(r,n,o);break}}}})();