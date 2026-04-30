const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/web-Bt5jzzGz.js","assets/definitions-CyA1bjkW.js","assets/puzzle-geometry-86qNLuhG.js","assets/chunk-O6HEZXGY-jOb-Pjb4.js"])))=>i.map(i=>d[i]);
import{n as e,o as t,r as n,t as r}from"./definitions-CyA1bjkW.js";import{C as i,D as a,E as o,O as s,S as c,_ as l,a as u,b as d,c as f,f as p,g as m,h,i as g,l as _,m as v,n as y,o as b,p as x,r as S,s as C,t as w,u as T,w as E,x as D,y as O}from"./chunk-FLK6AZKB-Babrv3AX.js";import{_ as k,a as A,c as j,d as M,f as N,g as P,h as F,i as I,l as ee,m as L,n as te,o as R,p as ne,s as z,t as B,v as re,y as ie}from"./chunk-O6HEZXGY-jOb-Pjb4.js";var ae=Object.create,oe=Object.defineProperty,se=Object.getOwnPropertyDescriptor,ce=Object.getOwnPropertyNames,le=Object.getPrototypeOf,ue=Object.prototype.hasOwnProperty,V=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),de=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=ce(t),a=0,o=i.length,s;a<o;a++)s=i[a],!ue.call(e,s)&&s!==n&&oe(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=se(t,s))||r.enumerable});return e},fe=(e,t,n)=>(n=e==null?{}:ae(le(e)),de(t||!e||!e.__esModule?oe(n,`default`,{value:e,enumerable:!0}):n,e));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var H=new Promise(e=>{let t=indexedDB.open(`Rubiks Timer`);t.onupgradeneeded=e=>{e.target.result.createObjectStore(`Session`,{keyPath:`SessionID`})},t.onsuccess=t=>{let n=t.target.result;e(n)}});async function pe({SessionName:e=`Session 1`,solves:t=[],SessionID:n=null,mo3:r=[],ao5:i=[],ao12:a=[],ao100:o=[]}){(await H).transaction(`Session`,`readwrite`).objectStore(`Session`).put({SessionName:e,solves:t,SessionID:n,mo3:r,ao5:i,ao12:a,ao100:o})}async function me(e){let t=(await H).transaction(`Session`,`readonly`).objectStore(`Session`);return new Promise(n=>{let r=t.get(e);r.onsuccess=()=>{let e=r.result;n(e||null)}})}async function he(){let e=(await H).transaction(`Session`,`readonly`).objectStore(`Session`);return new Promise(t=>{let n=e.getAll();n.onsuccess=()=>{let e=n.result;t(e||null)}})}async function U(e){(await H).transaction(`Session`,`readwrite`).objectStore(`Session`).delete(e)}function ge(e){e.CapacitorUtils.Synapse=new Proxy({},{get(t,n){return new Proxy({},{get(t,r){return(t,i,a)=>{let o=e.Capacitor.Plugins[n];if(o===void 0){a(Error(`Capacitor plugin ${n} not found`));return}if(typeof o[r]!=`function`){a(Error(`Method ${r} not found in Capacitor plugin ${n}`));return}(async()=>{try{i(await o[r](t))}catch(e){a(e)}})()}}})}})}function W(e){e.CapacitorUtils.Synapse=new Proxy({},{get(t,n){return e.cordova.plugins[n]}})}function G(e=!1){typeof window>`u`||(window.CapacitorUtils=window.CapacitorUtils||{},window.Capacitor!==void 0&&!e?ge(window):window.cordova!==void 0&&W(window))}var _e=t(`Filesystem`,{web:()=>s(()=>import(`./web-Bt5jzzGz.js`).then(e=>new e.FilesystemWeb),__vite__mapDeps([0,1]))});G();var ve=V(((e,t)=>{(function(n,r){typeof e==`object`&&typeof t==`object`?t.exports=r():typeof define==`function`&&define.amd?define([],r):typeof e==`object`?e[`sr-scrambler`]=r():n[`sr-scrambler`]=r()})(self,(function(){return(()=>{var e,t,n,r={d:(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{typeof Symbol<`u`&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:`Module`}),Object.defineProperty(e,`__esModule`,{value:!0})}},i={};function a(e){return!Array.isArray(e)||e.length<1?null:e[Math.floor(Math.random()*e.length)]}r.r(i),r.d(i,{cube:()=>u,megaminx:()=>d,pyraminx:()=>f,skewb:()=>p,square1:()=>m}),function(e){e.X=`x`,e.Y=`y`,e.Z=`z`}(e||={}),function(e){e.L=`L`,e.R=`R`,e.U=`U`,e.D=`D`,e.F=`F`,e.B=`B`}(t||={}),function(e){e.Double=`2`,e.CounterClockwise=`'`,e.Clockwise=``}(n||={});let o=(e,t,n,r,i)=>{let o,s,c=[];for(var l=0;l<i;l++){do s=a(e);while(t[o]===t[s]);c.push({face:s,depth:Math.floor(Math.random()*r)+1,modifier:a(n)}),o=s}return c},s=[`D`,`R`],c=[`++`,`--`],l=e=>e.map((e=>Array.isArray(e)?l(e)+`
`:(e=>{let t=e.depth>2?`${e.depth}`:``,n=e.depth>1?`w`:``;return`${t}${e.face}${n}${e.modifier}`})(e))).join(` `),u=(r=3,i=21)=>l(((r=3,i=21)=>o([t.L,t.R,t.U,t.D,t.F,t.B],{[t.L]:e.X,[t.R]:e.X,[t.U]:e.Y,[t.D]:e.Y,[t.F]:e.Z,[t.B]:e.Z},[n.Double,n.CounterClockwise,n.Clockwise],Math.floor(r/2),i))(r,i)),d=()=>l(((e=10,t=6)=>{let n=[];for(let r=0;r<t;r++){n[r]=[];for(let t=0;t<e;t++)n[r].push({face:s[t%s.length],modifier:a(c),depth:1});n[r].push({face:`U`,modifier:a([``,`'`]),depth:1})}return n})()),f=e=>l(((e=10)=>{let r=o([t.L,t.R,t.U,t.B],{[t.L]:`L`,[t.R]:`R`,[t.U]:`U`,[t.B]:`B`},[n.CounterClockwise,n.Clockwise],1,e);var i;return(i=[`l`,`r`,`u`,`b`],i.map((e=>({value:e,sort:Math.random()}))).sort(((e,t)=>e.sort-t.sort)).map((({value:e})=>e))).forEach((e=>{let t=a([n.Clockwise,n.CounterClockwise,null]);t!=null&&r.push({face:e,modifier:t,depth:1})})),r})(e)),p=e=>l(((e=9)=>o([t.L,t.R,t.U,t.B],{[t.L]:`L`,[t.R]:`R`,[t.U]:`U`,[t.B]:`B`},[n.CounterClockwise,n.Clockwise],1,e))(e)),m=e=>((e=12)=>{let t=[2,1,2,1,2,1,2,1],n=[1,2,1,2,1,2,1,2],r=e=>{for(;e!=0;)if(e<0){let n=t.shift();e+=n,t.push(n)}else if(e>0){let n=t.pop();e-=n,t.unshift(n)}},i=e=>{for(;e!=0;)if(e<0){let t=n.shift();e+=t,n.push(t)}else if(e>0){let t=n.pop();e-=t,n.unshift(t)}},o=()=>{let e=0,r=0,i=0;for(let n=t.length;n>0&&i<6;n--)i+=t[n-1],e++;i=0;for(let e=0;e<n.length&&i<6;e++)i+=n[e],r++;let a=t.splice(t.length-e,t.length),o=n.splice(0,r);t=t.concat(o),n=a.concat(n)},s=e=>{let t=0;for(let n=0;n<e.length&&t<6;n++)if(t+=e[n],t>6)return!1;return!0},c=(e,t)=>{if(t<0){for(;t<0;){let n=e.shift();if(n>Math.abs(t))return!1;t+=n,e.push(n)}return s(e)}if(t>0){for(;t>0;){let n=e.pop();if(t<n)return!1;t-=n,e.unshift(n)}return s(e)}return!0},l=()=>{let e=[],r=[];for(let i=-6;i<=6;i++)c([...t],i)&&e.push(i),c([...n],i)&&r.push(i);return{possibleTop:e,possibleBottom:r}},u=[];for(let t=0;t<e;t++){let e=l(),t=0,n=0;do t=a(e.possibleTop),n=a(e.possibleBottom);while(t===0&&n===0);u.push({top:t,bottom:n}),r(t),i(n),o()}return u})(e).map((e=>` (${e.top}, ${e.bottom}) /`)).join(``);return i})()}))})),ye=V(((e,t)=>{(function(){var e,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N=[0,1,2,3,4,5],P,F,I;y=N[0],v=N[1],m=N[2],a=N[3],_=N[4],e=N[5],P=[0,1,2,3,4,5,6,7],D=P[0],C=P[1],T=P[2],x=P[3],l=P[4],d=P[5],s=P[6],p=P[7],F=[0,1,2,3,4,5,6,7,8,9,10,11],E=F[0],S=F[1],w=F[2],b=F[3],f=F[4],c=F[5],u=F[6],o=F[7],g=F[8],h=F[9],n=F[10],r=F[11],I=(function(){var e,t,n,r,i,a=function(e){return e-1};return i=function(e){return a(9)+e},n=function(e){return i(9)+e},t=function(e){return n(9)+e},r=function(e){return t(9)+e},e=function(e){return r(9)+e},[[4,13,22,31,40,49],[[a(9),i(1),n(3)],[a(7),n(1),r(3)],[a(1),r(1),e(3)],[a(3),e(1),i(3)],[t(3),n(9),i(7)],[t(1),r(9),n(7)],[t(7),e(9),r(7)],[t(9),i(9),e(7)]],[[a(6),i(2)],[a(8),n(2)],[a(4),r(2)],[a(2),e(2)],[t(6),i(8)],[t(2),n(8)],[t(4),r(8)],[t(8),e(8)],[n(6),i(4)],[n(4),r(6)],[e(6),r(4)],[e(4),i(6)]]]})(),I[0],A=I[1],M=I[2],O=[`U`,`R`,`F`,`D`,`L`,`B`],k=[[`U`,`R`,`F`],[`U`,`F`,`L`],[`U`,`L`,`B`],[`U`,`B`,`R`],[`D`,`F`,`R`],[`D`,`L`,`F`],[`D`,`B`,`L`],[`D`,`R`,`B`]],j=[[`U`,`R`],[`U`,`F`],[`U`,`L`],[`U`,`B`],[`D`,`R`],[`D`,`F`],[`D`,`L`],[`D`,`B`],[`F`,`R`],[`F`,`L`],[`B`,`L`],[`B`,`R`]],i=(function(){var t,i,N;function P(e){e==null?this.identity():this.init(e),this.newCenter=(function(){var e,t=[];for(e=0;e<=5;++e)t.push(0);return t})(),this.newCp=(function(){var e,t=[];for(e=0;e<=7;++e)t.push(0);return t})(),this.newEp=(function(){var e,t=[];for(e=0;e<=11;++e)t.push(0);return t})(),this.newCo=(function(){var e,t=[];for(e=0;e<=7;++e)t.push(0);return t})(),this.newEo=(function(){var e,t=[];for(e=0;e<=11;++e)t.push(0);return t})()}return P.prototype.init=function(e){return this.center=e.center.slice(0),this.co=e.co.slice(0),this.ep=e.ep.slice(0),this.cp=e.cp.slice(0),this.eo=e.eo.slice(0)},P.prototype.identity=function(){return this.center=[0,1,2,3,4,5],this.cp=[0,1,2,3,4,5,6,7],this.co=(function(){var e,t=[];for(e=0;e<=7;++e)t.push(0);return t})(),this.ep=[0,1,2,3,4,5,6,7,8,9,10,11],this.eo=(function(){var e,t=[];for(e=0;e<=11;++e)t.push(0);return t})()},P.prototype.toJSON=function(){return{center:this.center,cp:this.cp,co:this.co,ep:this.ep,eo:this.eo}},P.prototype.asString=function(){var e,t,n,r,i,a,o,s,c,l,u=[];for(n=r=0;r<=5;n=++r)u[9*n+4]=O[this.center[n]];for(n=i=0;i<=7;n=++i)for(e=this.cp[n],c=this.co[n],o=a=0;a<=2;o=++a)u[A[n][(o+c)%3]]=k[e][o];for(n=s=0;s<=11;n=++s)for(t=this.ep[n],c=this.eo[n],o=l=0;l<=1;o=++l)u[M[n][(o+c)%2]]=j[t][o];return u.join(``)},P.fromString=function(e){var t,n,r=new P,i,a,o,s,c,l,u,d,f,p,m;for(i=o=0;o<=5;i=++o)for(a=s=0;s<=5;a=++s)e[9*i+4]===O[a]&&(r.center[i]=a);for(i=c=0;c<=7;i=++c){for(u=l=0;l<=2&&!((p=e[A[i][u]])===`U`||p===`D`);u=++l);for(t=e[A[i][(u+1)%3]],n=e[A[i][(u+2)%3]],a=d=0;d<=7;a=++d)t===k[a][1]&&n===k[a][2]&&(r.cp[i]=a,r.co[i]=u%3)}for(i=f=0;f<=11;i=++f)for(a=m=0;m<=11;a=++m){if(e[M[i][0]]===j[a][0]&&e[M[i][1]]===j[a][1]){r.ep[i]=a,r.eo[i]=0;break}if(e[M[i][0]]===j[a][1]&&e[M[i][1]]===j[a][0]){r.ep[i]=a,r.eo[i]=1;break}}return r},P.prototype.clone=function(){return new P(this.toJSON())},P.prototype.randomize=(function(){var e,t,n=function(e,t){return e+(Math.random()*(t-e+1)|0)},r;return e=function(e){var t,r,i=e.length-1,a,o,s,c,l=[];for(t=r=0,o=i-2;0<=o?r<=o:r>=o;t=0<=o?++r:--r)a=n(t,i),t===a?l.push(void 0):(s=[e[a],e[t]],e[t]=s[0],e[a]=s[1],l.push((c=[e[i-1],e[i]],e[i]=c[0],e[i-1]=c[1],c)));return l},t=function(e,t){var r,i,a=0,o;for(r=i=0,o=e.length-2;0<=o?i<=o:i>=o;r=0<=o?++i:--i)a+=e[r]=n(0,t-1);return e[e.length-1]=(t-a%t)%t},r=function(){return e(this.cp),e(this.ep),t(this.co,3),t(this.eo,2),this},r})(),P.random=function(){return new P().randomize()},P.prototype.isSolved=function(){var e,t,n=this.clone(),r,i,a,o;for(n.move(n.upright()),t=i=0;i<=5;t=++i)if(n.center[t]!==t)return!1;for(e=a=0;a<=7;e=++a)if(n.cp[e]!==e||n.co[e]!==0)return!1;for(r=o=0;o<=11;r=++o)if(n.ep[r]!==r||n.eo[r]!==0)return!1;return!0},P.prototype.centerMultiply=function(e){var t,n,r,i;for(i=n=0;n<=5;i=++n)t=e.center[i],this.newCenter[i]=this.center[t];return r=[this.newCenter,this.center],this.center=r[0],this.newCenter=r[1],this},P.prototype.cornerMultiply=function(e){var t,n,r,i,a;for(a=n=0;n<=7;a=++n)t=e.cp[a],this.newCp[a]=this.cp[t],this.newCo[a]=(this.co[t]+e.co[a])%3;return r=[this.newCp,this.cp],this.cp=r[0],this.newCp=r[1],i=[this.newCo,this.co],this.co=i[0],this.newCo=i[1],this},P.prototype.edgeMultiply=function(e){var t,n,r,i,a;for(a=n=0;n<=11;a=++n)t=e.ep[a],this.newEp[a]=this.ep[t],this.newEo[a]=(this.eo[t]+e.eo[a])%2;return r=[this.newEp,this.ep],this.ep=r[0],this.newEp=r[1],i=[this.newEo,this.eo],this.eo=i[0],this.newEo=i[1],this},P.prototype.multiply=function(e){return this.centerMultiply(e),this.cornerMultiply(e),this.edgeMultiply(e),this},P.moves=[{center:[0,1,2,3,4,5],cp:[x,D,C,T,l,d,s,p],co:[0,0,0,0,0,0,0,0],ep:[b,E,S,w,f,c,u,o,g,h,n,r],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[l,C,T,D,p,d,s,x],co:[2,0,0,1,1,0,0,2],ep:[g,S,w,b,r,c,u,o,f,h,n,E],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[C,d,T,x,D,l,s,p],co:[1,2,0,0,2,1,0,0],ep:[E,h,w,b,f,g,u,o,S,c,n,r],eo:[0,1,0,0,0,1,0,0,1,1,0,0]},{center:[0,1,2,3,4,5],cp:[D,C,T,x,d,s,p,l],co:[0,0,0,0,0,0,0,0],ep:[E,S,w,b,c,u,o,f,g,h,n,r],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[D,T,s,x,l,C,d,p],co:[0,1,2,0,0,2,1,0],ep:[E,S,n,b,f,c,h,o,g,w,u,r],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[D,C,x,p,l,d,T,s],co:[0,0,1,2,0,0,2,1],ep:[E,S,w,r,f,c,u,n,g,h,b,o],eo:[0,0,0,1,0,0,0,1,0,0,1,1]},{center:[y,m,_,a,e,v],cp:[D,C,T,x,l,d,s,p],co:[0,0,0,0,0,0,0,0],ep:[E,S,w,b,f,c,u,o,h,n,r,g],eo:[0,0,0,0,0,0,0,0,1,1,1,1]},{center:[e,v,y,m,_,a],cp:[D,C,T,x,l,d,s,p],co:[0,0,0,0,0,0,0,0],ep:[E,b,w,o,f,S,u,c,g,h,n,r],eo:[0,1,0,1,0,1,0,1,0,0,0,0]},{center:[_,y,m,v,a,e],cp:[D,C,T,x,l,d,s,p],co:[0,0,0,0,0,0,0,0],ep:[w,S,u,b,E,c,f,o,g,h,n,r],eo:[1,0,1,0,1,0,1,0,0,0,0,0]}],i={U:0,R:1,F:2,D:3,L:4,B:5,E:6,M:7,S:8,x:9,y:10,z:11,u:12,r:13,f:14,d:15,l:16,b:17},t={0:`U`,1:`R`,2:`F`,3:`D`,4:`L`,5:`B`,6:`E`,7:`M`,8:`S`,9:`x`,10:`y`,11:`z`,12:`u`,13:`r`,14:`f`,15:`d`,16:`l`,17:`b`},N=function(e){var t,n,r,a,o,s,c;if(typeof e==`string`){for(s=e.split(/\s+/),c=[],t=0,n=s.length;t<n;t++)if(a=s[t],a.length!==0){if(a.length>2||(r=i[a[0]],r===void 0))throw Error(`Invalid move: `+a);if(a.length===1)o=0;else if(a[1]===`2`)o=1;else if(a[1]===`'`)o=2;else throw Error(`Invalid move: `+a);c.push(r*3+o)}return c}else if(e.length!=null)return e;else return[e]},P.prototype.move=function(e){var t,n,r,i,a,o,s=N(e),c;for(n=0,i=s.length;n<i;n++)for(a=s[n],t=a/3|0,o=a%3,r=0,c=o;0<=c?r<=c:r>=c;0<=c?++r:--r)this.multiply(P.moves[t]);return this},P.prototype.upright=function(){var t=this.clone(),n,r,i,o,s=[];for(n=i=0;i<=5&&t.center[n]!==m;n=++i);switch(n){case a:s.push(`x`);break;case y:s.push(`x'`);break;case e:s.push(`x2`);break;case v:s.push(`y`);break;case _:s.push(`y'`)}for(s.length&&t.move(s[0]),r=o=0;o<=5&&t.center[r]!==y;r=++o);switch(r){case _:s.push(`z`);break;case v:s.push(`z'`);break;case a:s.push(`z2`)}return s.join(` `)},P.inverse=function(e){var n,r,i,a,o,s=(function(){var t,r,i=N(e),s=[];for(t=0,r=i.length;t<r;t++)a=i[t],n=a/3|0,o=a%3,s.push(n*3+-(o-1)+1);return s})(),c;if(s.reverse(),typeof e==`string`){for(c=``,r=0,i=s.length;r<i;r++)a=s[r],n=a/3|0,o=a%3,c+=t[n],o===1?c+=`2`:o===2&&(c+=`'`),c+=` `;return c.substring(0,c.length-1)}else if(e.length!=null)return s;else return s[0]},P.moves.push(new P().move(`R M' L'`).toJSON()),P.moves.push(new P().move(`U E' D'`).toJSON()),P.moves.push(new P().move(`F S B'`).toJSON()),P.moves.push(new P().move(`U E'`).toJSON()),P.moves.push(new P().move(`R M'`).toJSON()),P.moves.push(new P().move(`F S`).toJSON()),P.moves.push(new P().move(`D E`).toJSON()),P.moves.push(new P().move(`L M`).toJSON()),P.moves.push(new P().move(`B S'`).toJSON()),P})(),t==null?this.Cube=i:t.exports=i}).call(e)})),be=ve(),xe=fe(ye(),1),Se={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ce={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},we=1e3,Te=1001,Ee=1002,De=1003,Oe=1004,ke=1005,Ae=1006,je=1007,Me=1008,Ne=1009,Pe=1010,Fe=1011,Ie=1012,Le=1013,Re=1014,ze=1015,Be=1016,Ve=1017,He=1018,Ue=1020,We=35902,Ge=35899,Ke=1021,qe=1022,Je=1023,Ye=1026,Xe=1027,Ze=1028,Qe=1029,$e=1030,et=1031,tt=1033,nt=33776,rt=33777,it=33778,at=33779,ot=35840,st=35841,ct=35842,lt=35843,ut=36196,dt=37492,ft=37496,pt=37488,mt=37489,ht=37490,gt=37491,_t=37808,vt=37809,yt=37810,bt=37811,xt=37812,St=37813,Ct=37814,wt=37815,Tt=37816,Et=37817,Dt=37818,Ot=37819,kt=37820,At=37821,jt=36492,Mt=36494,Nt=36495,Pt=36283,Ft=36284,It=36285,Lt=36286,Rt=2300,zt=2301,Bt=2302,Vt=2303,Ht=2400,Ut=2401,Wt=2402,Gt=3200,Kt=`srgb`,qt=`srgb-linear`,Jt=`linear`,Yt=`srgb`,Xt=7680,Zt=35044,Qt=2e3;function $t(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function en(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function tn(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function nn(){let e=tn(`canvas`);return e.style.display=`block`,e}var rn={},an=null;function on(...e){let t=`THREE.`+e.shift();an?an(`log`,t,...e):console.log(t,...e)}function sn(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function K(...e){e=sn(e);let t=`THREE.`+e.shift();if(an)an(`warn`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function q(...e){e=sn(e);let t=`THREE.`+e.shift();if(an)an(`error`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function cn(...e){let t=e.join(` `);t in rn||(rn[t]=!0,K(...e))}function ln(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var un={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},fn=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),pn=1234567,mn=Math.PI/180,hn=180/Math.PI;function gn(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(fn[e&255]+fn[e>>8&255]+fn[e>>16&255]+fn[e>>24&255]+`-`+fn[t&255]+fn[t>>8&255]+`-`+fn[t>>16&15|64]+fn[t>>24&255]+`-`+fn[n&63|128]+fn[n>>8&255]+`-`+fn[n>>16&255]+fn[n>>24&255]+fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]).toLowerCase()}function J(e,t,n){return Math.max(t,Math.min(n,e))}function _n(e,t){return(e%t+t)%t}function vn(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function yn(e,t,n){return e===t?0:(n-e)/(t-e)}function bn(e,t,n){return(1-n)*e+n*t}function xn(e,t,n,r){return bn(e,t,1-Math.exp(-n*r))}function Sn(e,t=1){return t-Math.abs(_n(e,t*2)-t)}function Cn(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function wn(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Tn(e,t){return e+Math.floor(Math.random()*(t-e+1))}function En(e,t){return e+Math.random()*(t-e)}function Dn(e){return e*(.5-Math.random())}function On(e){e!==void 0&&(pn=e);let t=pn+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kn(e){return e*mn}function An(e){return e*hn}function jn(e){return(e&e-1)==0&&e!==0}function Mn(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Nn(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Pn(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:K(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Fn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function In(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var Ln={DEG2RAD:mn,RAD2DEG:hn,generateUUID:gn,clamp:J,euclideanModulo:_n,mapLinear:vn,inverseLerp:yn,lerp:bn,damp:xn,pingpong:Sn,smoothstep:Cn,smootherstep:wn,randInt:Tn,randFloat:En,randFloatSpread:Dn,seededRandom:On,degToRad:kn,radToDeg:An,isPowerOfTwo:jn,ceilPowerOfTwo:Mn,floorPowerOfTwo:Nn,setQuaternionFromProperEuler:Pn,normalize:In,denormalize:Fn},Y=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=J(this.x,e.x,t.x),this.y=J(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=J(this.x,e,t),this.y=J(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(J(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(J(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:K(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(J(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bn.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bn.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=J(this.x,e.x,t.x),this.y=J(this.y,e.y,t.y),this.z=J(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=J(this.x,e,t),this.y=J(this.y,e,t),this.z=J(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(J(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zn.copy(this).projectOnVector(e),this.sub(zn)}reflect(e){return this.sub(zn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(J(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zn=new X,Bn=new Rn,Z=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vn.makeScale(e,t)),this}rotate(e){return this.premultiply(Vn.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Vn=new Z,Hn=new Z().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Un=new Z().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wn(){let e={enabled:!0,workingColorSpace:qt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Kn(e.r),e.g=Kn(e.g),e.b=Kn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=qn(e.r),e.g=qn(e.g),e.b=qn(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Jt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return cn(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return cn(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[qt]:{primaries:t,whitePoint:r,transfer:Jt,toXYZ:Hn,fromXYZ:Un,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:t,whitePoint:r,transfer:Yt,toXYZ:Hn,fromXYZ:Un,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),e}var Gn=Wn();function Kn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function qn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Jn,Yn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jn===void 0&&(Jn=tn(`canvas`)),Jn.width=e.width,Jn.height=e.height;let t=Jn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Jn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=tn(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Kn(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Kn(t[e]/255)*255):t[e]=Kn(t[e]);return{data:t,width:e.width,height:e.height}}else return K(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Xn=0,Zn=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,`id`,{value:Xn++}),this.uuid=gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Qn(r[t].image)):e.push(Qn(r[t]))}else e=Qn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Qn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Yn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(K(`Texture: Unable to serialize Texture.`),{})}var $n=0,er=new X,tr=class e extends dn{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Te,i=Te,a=Ae,o=Me,s=Je,c=Ne,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,`id`,{value:$n++}),this.uuid=gn(),this.name=``,this.source=new Zn(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Z,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(er).x}get height(){return this.source.getSize(er).y}get depth(){return this.source.getSize(er).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){K(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){K(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case we:e.x-=Math.floor(e.x);break;case Te:e.x=e.x<0?0:1;break;case Ee:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case we:e.y-=Math.floor(e.y);break;case Te:e.y=e.y<0?0:1;break;case Ee:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tr.DEFAULT_IMAGE=null,tr.DEFAULT_MAPPING=300,tr.DEFAULT_ANISOTROPY=1;var nr=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=J(this.x,e.x,t.x),this.y=J(this.y,e.y,t.y),this.z=J(this.z,e.z,t.z),this.w=J(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=J(this.x,e,t),this.y=J(this.y,e,t),this.z=J(this.z,e,t),this.w=J(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(J(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rr=class extends dn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nr(0,0,e,t),this.scissorTest=!1,this.viewport=new nr(0,0,e,t),this.textures=[];let r=new tr({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Ae,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Zn(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:`dispose`})}},ir=class extends rr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ar=class extends tr{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=De,this.minFilter=De,this.wrapR=Te,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},or=class extends tr{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=De,this.minFilter=De,this.wrapR=Te,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},sr=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/cr.setFromMatrixColumn(e,0).length(),i=1/cr.setFromMatrixColumn(e,1).length(),a=1/cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ur,e,dr)}lookAt(e,t,n){let r=this.elements;return mr.subVectors(e,t),mr.lengthSq()===0&&(mr.z=1),mr.normalize(),fr.crossVectors(n,mr),fr.lengthSq()===0&&(Math.abs(n.z)===1?mr.x+=1e-4:mr.z+=1e-4,mr.normalize(),fr.crossVectors(n,mr)),fr.normalize(),pr.crossVectors(mr,fr),r[0]=fr.x,r[4]=pr.x,r[8]=mr.x,r[1]=fr.y,r[5]=pr.y,r[9]=mr.y,r[2]=fr.z,r[6]=pr.z,r[10]=mr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinant();if(i===0)return n.set(1,1,1),t.identity(),this;let a=cr.set(r[0],r[1],r[2]).length(),o=cr.set(r[4],r[5],r[6]).length(),s=cr.set(r[8],r[9],r[10]).length();i<0&&(a=-a),lr.copy(this);let c=1/a,l=1/o,u=1/s;return lr.elements[0]*=c,lr.elements[1]*=c,lr.elements[2]*=c,lr.elements[4]*=l,lr.elements[5]*=l,lr.elements[6]*=l,lr.elements[8]*=u,lr.elements[9]*=u,lr.elements[10]*=u,t.setFromRotationMatrix(lr),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Qt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Qt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},cr=new X,lr=new sr,ur=new X(0,0,0),dr=new X(1,1,1),fr=new X,pr=new X,mr=new X,hr=new sr,gr=new Rn,_r=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(J(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-J(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(J(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-J(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(J(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-J(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:K(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gr.setFromEuler(this),this.setFromQuaternion(gr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_r.DEFAULT_ORDER=`XYZ`;var vr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},yr=0,br=new X,xr=new Rn,Sr=new sr,Cr=new X,wr=new X,Tr=new X,Er=new Rn,Dr=new X(1,0,0),Or=new X(0,1,0),kr=new X(0,0,1),Ar={type:`added`},jr={type:`removed`},Mr={type:`childadded`,child:null},Nr={type:`childremoved`,child:null},Pr=class e extends dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,`id`,{value:yr++}),this.uuid=gn(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new X,n=new _r,r=new Rn,i=new X(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new sr},normalMatrix:{value:new Z}}),this.matrix=new sr,this.matrixWorld=new sr,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(Dr,e)}rotateY(e){return this.rotateOnAxis(Or,e)}rotateZ(e){return this.rotateOnAxis(kr,e)}translateOnAxis(e,t){return br.copy(e).applyQuaternion(this.quaternion),this.position.add(br.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dr,e)}translateY(e){return this.translateOnAxis(Or,e)}translateZ(e){return this.translateOnAxis(kr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sr.lookAt(wr,Cr,this.up):Sr.lookAt(Cr,wr,this.up),this.quaternion.setFromRotationMatrix(Sr),r&&(Sr.extractRotation(r.matrixWorld),xr.setFromRotationMatrix(Sr),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(q(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ar),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):q(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jr),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ar),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,Tr),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Er,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Pr.DEFAULT_UP=new X(0,1,0),Pr.DEFAULT_MATRIX_AUTO_UPDATE=!0,Pr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fr=class extends Pr{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Ir={type:`move`},Lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position),s=.02,l=.005;c.inputState.pinching&&o>s+l?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=s-l&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ir)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Fr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Rr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},Br={h:0,s:0,l:0};function Vr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Hr=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Gn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gn.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Gn.workingColorSpace){if(e=_n(e,1),t=J(t,0,1),n=J(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Vr(i,r,e+1/3),this.g=Vr(i,r,e),this.b=Vr(i,r,e-1/3)}return Gn.colorSpaceToWorking(this,r),this}setStyle(e,t=Kt){function n(t){t!==void 0&&parseFloat(t)<1&&K(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:K(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);K(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let n=Rr[e.toLowerCase()];return n===void 0?K(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Gn.workingToColorSpace(Ur.copy(this),e),Math.round(J(Ur.r*255,0,255))*65536+Math.round(J(Ur.g*255,0,255))*256+Math.round(J(Ur.b*255,0,255))}getHexString(e=Kt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gn.workingColorSpace){Gn.workingToColorSpace(Ur.copy(this),t);let n=Ur.r,r=Ur.g,i=Ur.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Gn.workingColorSpace){return Gn.workingToColorSpace(Ur.copy(this),t),e.r=Ur.r,e.g=Ur.g,e.b=Ur.b,e}getStyle(e=Kt){Gn.workingToColorSpace(Ur.copy(this),e);let t=Ur.r,n=Ur.g,r=Ur.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+t,zr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zr),e.getHSL(Br);let n=bn(zr.h,Br.h,t),r=bn(zr.s,Br.s,t),i=bn(zr.l,Br.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ur=new Hr;Hr.NAMES=Rr;var Wr=class extends Pr{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _r,this.environmentIntensity=1,this.environmentRotation=new _r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gr=new X,Kr=new X,qr=new X,Jr=new X,Yr=new X,Xr=new X,Zr=new X,Qr=new X,$r=new X,ei=new X,ti=new nr,ni=new nr,ri=new nr,ii=class e{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Gr.subVectors(e,t),r.cross(Gr);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Gr.subVectors(r,t),Kr.subVectors(n,t),qr.subVectors(e,t);let a=Gr.dot(Gr),o=Gr.dot(Kr),s=Gr.dot(qr),c=Kr.dot(Kr),l=Kr.dot(qr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jr)===null?!1:Jr.x>=0&&Jr.y>=0&&Jr.x+Jr.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Jr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Jr.x),s.addScaledVector(a,Jr.y),s.addScaledVector(o,Jr.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return ti.setScalar(0),ni.setScalar(0),ri.setScalar(0),ti.fromBufferAttribute(e,t),ni.fromBufferAttribute(e,n),ri.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ti,i.x),a.addScaledVector(ni,i.y),a.addScaledVector(ri,i.z),a}static isFrontFacing(e,t,n,r){return Gr.subVectors(n,t),Kr.subVectors(e,t),Gr.cross(Kr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gr.subVectors(this.c,this.b),Kr.subVectors(this.a,this.b),Gr.cross(Kr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Yr.subVectors(r,n),Xr.subVectors(i,n),Qr.subVectors(e,n);let s=Yr.dot(Qr),c=Xr.dot(Qr);if(s<=0&&c<=0)return t.copy(n);$r.subVectors(e,r);let l=Yr.dot($r),u=Xr.dot($r);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Yr,a);ei.subVectors(e,i);let f=Yr.dot(ei),p=Xr.dot(ei);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Xr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Zr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Zr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Yr,a).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ai=class{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,si):si.fromBufferAttribute(r,t),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ci.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ci.copy(e.boundingBox)),ci.applyMatrix4(e.matrixWorld),this.union(ci)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hi),gi.subVectors(this.max,hi),li.subVectors(e.a,hi),ui.subVectors(e.b,hi),di.subVectors(e.c,hi),fi.subVectors(ui,li),pi.subVectors(di,ui),mi.subVectors(li,di);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-mi.z,mi.y,fi.z,0,-fi.x,pi.z,0,-pi.x,mi.z,0,-mi.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-mi.y,mi.x,0];return!yi(t,li,ui,di,gi)||(t=[1,0,0,0,1,0,0,0,1],!yi(t,li,ui,di,gi))?!1:(_i.crossVectors(fi,pi),t=[_i.x,_i.y,_i.z],yi(t,li,ui,di,gi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},oi=[new X,new X,new X,new X,new X,new X,new X,new X],si=new X,ci=new ai,li=new X,ui=new X,di=new X,fi=new X,pi=new X,mi=new X,hi=new X,gi=new X,_i=new X,vi=new X;function yi(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){vi.fromArray(e,a);let o=i.x*Math.abs(vi.x)+i.y*Math.abs(vi.y)+i.z*Math.abs(vi.z),s=t.dot(vi),c=n.dot(vi),l=r.dot(vi);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var bi=new X,xi=new Y,Si=0,Ci=class extends dn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,`id`,{value:Si++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Zt,this.updateRanges=[],this.gpuType=ze,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xi.fromBufferAttribute(this,t),xi.applyMatrix3(e),this.setXY(t,xi.x,xi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bi.fromBufferAttribute(this,t),bi.applyMatrix3(e),this.setXYZ(t,bi.x,bi.y,bi.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bi.fromBufferAttribute(this,t),bi.applyMatrix4(e),this.setXYZ(t,bi.x,bi.y,bi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bi.fromBufferAttribute(this,t),bi.applyNormalMatrix(e),this.setXYZ(t,bi.x,bi.y,bi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bi.fromBufferAttribute(this,t),bi.transformDirection(e),this.setXYZ(t,bi.x,bi.y,bi.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array),r=In(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array),r=In(r,this.array),i=In(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},wi=class extends Ci{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ti=class extends Ci{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ei=class extends Ci{constructor(e,t,n){super(new Float32Array(e),t,n)}},Di=new ai,Oi=new X,ki=new X,Ai=class{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Di.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oi.subVectors(e,this.center);let t=Oi.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Oi,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ki.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oi.copy(e.center).add(ki)),this.expandByPoint(Oi.copy(e.center).sub(ki))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ji=0,Mi=new sr,Ni=new Pr,Pi=new X,Fi=new ai,Ii=new ai,Li=new X,Ri=class e extends dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,`id`,{value:ji++}),this.uuid=gn(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($t(e)?Ti:wi)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Z().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,t,n){return Mi.makeTranslation(e,t,n),this.applyMatrix4(Mi),this}scale(e,t,n){return Mi.makeScale(e,t,n),this.applyMatrix4(Mi),this}lookAt(e){return Ni.lookAt(e),Ni.updateMatrix(),this.applyMatrix4(Ni.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Ei(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&K(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){q(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Fi.setFromBufferAttribute(n),this.morphTargetsRelative?(Li.addVectors(this.boundingBox.min,Fi.min),this.boundingBox.expandByPoint(Li),Li.addVectors(this.boundingBox.max,Fi.max),this.boundingBox.expandByPoint(Li)):(this.boundingBox.expandByPoint(Fi.min),this.boundingBox.expandByPoint(Fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&q(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){q(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new X,1/0);return}if(e){let n=this.boundingSphere.center;if(Fi.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ii.setFromBufferAttribute(n),this.morphTargetsRelative?(Li.addVectors(Fi.min,Ii.min),Fi.expandByPoint(Li),Li.addVectors(Fi.max,Ii.max),Fi.expandByPoint(Li)):(Fi.expandByPoint(Ii.min),Fi.expandByPoint(Ii.max))}Fi.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Li.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Li));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Li.fromBufferAttribute(a,t),o&&(Pi.fromBufferAttribute(e,t),Li.add(Pi)),r=Math.max(r,n.distanceToSquared(Li))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&q(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){q(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new Ci(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new X,s[e]=new X;let c=new X,l=new X,u=new X,d=new Y,f=new Y,p=new Y,m=new X,h=new X;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new X,y=new X,b=new X,x=new X;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new Ci(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new X,i=new X,a=new X,o=new X,s=new X,c=new X,l=new X,u=new X;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Li.fromBufferAttribute(e,t),Li.normalize(),e.setXYZ(t,Li.x,Li.y,Li.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Ci(a,r,i)}if(this.index===null)return K(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},zi=0,Bi=class extends dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,`id`,{value:zi++}),this.uuid=gn(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Hr(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xt,this.stencilZFail=Xt,this.stencilZPass=Xt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){K(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){K(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Vi=new X,Hi=new X,Ui=new X,Wi=new X,Gi=new X,Ki=new X,qi=new X,Ji=class{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Hi.copy(e).add(t).multiplyScalar(.5),Ui.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(Hi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ui),o=Wi.dot(this.direction),s=-Wi.dot(Ui),c=Wi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Hi).addScaledVector(Ui,d),f}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);let n=Vi.dot(this.direction),r=Vi.dot(Vi)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,n,r,i){Gi.subVectors(t,e),Ki.subVectors(n,e),qi.crossVectors(Gi,Ki);let a=this.direction.dot(qi),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wi.subVectors(this.origin,e);let s=o*this.direction.dot(Ki.crossVectors(Wi,Ki));if(s<0)return null;let c=o*this.direction.dot(Gi.cross(Wi));if(c<0||s+c>a)return null;let l=-o*Wi.dot(qi);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yi=class extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Hr(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xi=new sr,Zi=new Ji,Qi=new Ai,$i=new X,ea=new X,ta=new X,na=new X,ra=new X,ia=new X,aa=new X,oa=new X,sa=class extends Pr{constructor(e=new Ri,t=new Yi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ia.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ra.fromBufferAttribute(s,e),a?ia.addScaledVector(ra,r):ia.addScaledVector(ra.sub(t),r))}t.add(ia)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(i),Zi.copy(e.ray).recast(e.near),!(Qi.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Qi,$i)===null||Zi.origin.distanceToSquared($i)>(e.far-e.near)**2))&&(Xi.copy(i).invert(),Zi.copy(e.ray).applyMatrix4(Xi),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=la(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=la(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=la(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=la(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function ca(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;oa.copy(s),oa.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(oa);return l<n.near||l>n.far?null:{distance:l,point:oa.clone(),object:e}}function la(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ea),e.getVertexPosition(c,ta),e.getVertexPosition(l,na);let u=ca(e,t,n,r,ea,ta,na,aa);if(u){let e=new X;ii.getBarycoord(aa,ea,ta,na,e),i&&(u.uv=ii.getInterpolatedAttribute(i,s,c,l,e,new Y)),a&&(u.uv1=ii.getInterpolatedAttribute(a,s,c,l,e,new Y)),o&&(u.normal=ii.getInterpolatedAttribute(o,s,c,l,e,new X),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new X,materialIndex:0};ii.getNormal(ea,ta,na,t.normal),u.face=t,u.barycoord=e}return u}var ua=class extends tr{constructor(e=null,t=1,n=1,r,i,a,o,s,c=De,l=De,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},da=new X,fa=new X,pa=new Z,ma=class{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=da.subVectors(n,t).cross(fa.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(da),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||pa.getNormalMatrix(e),r=this.coplanarPoint(da).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ha=new Ai,ga=new Y(.5,.5),_a=new X,va=class{constructor(e=new ma,t=new ma,n=new ma,r=new ma,i=new ma,a=new ma){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ha.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ha.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ha)}intersectsSprite(e){return ha.center.set(0,0,0),ha.radius=.7071067811865476+ga.distanceTo(e.center),ha.applyMatrix4(e.matrixWorld),this.intersectsSphere(ha)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(_a.x=r.normal.x>0?e.max.x:e.min.x,_a.y=r.normal.y>0?e.max.y:e.min.y,_a.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_a)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ya=class extends tr{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ba=class extends tr{constructor(e,t,n=Re,r,i,a,o=De,s=De,c,l=Ye,u=1){if(l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},xa=class extends ba{constructor(e,t=Re,n=301,r,i,a=De,o=De,s,c=Ye){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Sa=class extends tr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ca=class e extends Ri{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Ei(c,3)),this.setAttribute(`normal`,new Ei(l,3)),this.setAttribute(`uv`,new Ei(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new X;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},wa=class e extends Ri{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Ei(p,3)),this.setAttribute(`normal`,new Ei(m,3)),this.setAttribute(`uv`,new Ei(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ta(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Da(i))i.isRenderTargetTexture?(K(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(Da(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function Ea(e){let t={};for(let n=0;n<e.length;n++){let r=Ta(e[n]);for(let e in r)t[e]=r[e]}return t}function Da(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Oa(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ka(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gn.workingColorSpace}var Aa={clone:Ta,merge:Ea},ja=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ma=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Na=class extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ja,this.fragmentShader=Ma,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ta(e.uniforms),this.uniformsGroups=Oa(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Pa=class extends Na{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Fa=class extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Hr(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Hr(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ia=class extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Gt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},La=class extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ra(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var za=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Ba=class extends za{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ht,endingEnd:Ht}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ut:i=e,o=2*t-n;break;case Wt:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ut:a=e,s=2*n-t;break;case Wt:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Va=class extends za{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ha=class extends za{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ua=class extends za{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.settings||this.DefaultSettings_,u=l.inTangents,d=l.outTangents;if(!u||!d){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let f=o*2,p=e-1;for(let l=0;l!==o;++l){let o=a[c+l],m=a[s+l],h=p*f+l*2,g=d[h],_=d[h+1],v=e*f+l*2,y=u[v],b=u[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[l]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},Wa=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ra(t,this.TimeBufferType),this.values=Ra(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ra(e.times,Array),values:Ra(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ua(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Rt:t=this.InterpolantFactoryMethodDiscrete;break;case zt:t=this.InterpolantFactoryMethodLinear;break;case Bt:t=this.InterpolantFactoryMethodSmooth;break;case Vt:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return K(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rt;case this.InterpolantFactoryMethodLinear:return zt;case this.InterpolantFactoryMethodSmooth:return Bt;case this.InterpolantFactoryMethodBezier:return Vt}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(q(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(q(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){q(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){q(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&en(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){q(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Bt,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Wa.prototype.ValueTypeName=``,Wa.prototype.TimeBufferType=Float32Array,Wa.prototype.ValueBufferType=Float32Array,Wa.prototype.DefaultInterpolation=zt;var Ga=class extends Wa{constructor(e,t,n){super(e,t,n)}};Ga.prototype.ValueTypeName=`bool`,Ga.prototype.ValueBufferType=Array,Ga.prototype.DefaultInterpolation=Rt,Ga.prototype.InterpolantFactoryMethodLinear=void 0,Ga.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends Wa{constructor(e,t,n,r){super(e,t,n,r)}};Ka.prototype.ValueTypeName=`color`;var qa=class extends Wa{constructor(e,t,n,r){super(e,t,n,r)}};qa.prototype.ValueTypeName=`number`;var Ja=class extends za{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Rn.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ya=class extends Wa{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}};Ya.prototype.ValueTypeName=`quaternion`,Ya.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends Wa{constructor(e,t,n){super(e,t,n)}};Xa.prototype.ValueTypeName=`string`,Xa.prototype.ValueBufferType=Array,Xa.prototype.DefaultInterpolation=Rt,Xa.prototype.InterpolantFactoryMethodLinear=void 0,Xa.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends Wa{constructor(e,t,n,r){super(e,t,n,r)}};Za.prototype.ValueTypeName=`vector`;var Qa=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},$a=class{constructor(e){this.manager=e===void 0?Qa:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};$a.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var eo=class extends Pr{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Hr(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},to=new sr,no=new X,ro=new X,io=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Y(512,512),this.mapType=Ne,this.map=null,this.mapPass=null,this.matrix=new sr,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new va,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new nr(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;no.setFromMatrixPosition(e.matrixWorld),t.position.copy(no),ro.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ro),t.updateMatrixWorld(),to.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(to,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(to)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ao=new X,oo=new Rn,so=new X,co=class extends Pr{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new sr,this.projectionMatrix=new sr,this.projectionMatrixInverse=new sr,this.coordinateSystem=Qt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ao,oo,so),so.x===1&&so.y===1&&so.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ao,oo,so.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ao,oo,so),so.x===1&&so.y===1&&so.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ao,oo,so.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},lo=new X,uo=new Y,fo=new Y,po=class extends co{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=hn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hn*2*Math.atan(Math.tan(mn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){lo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lo.x,lo.y).multiplyScalar(-e/lo.z),lo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lo.x,lo.y).multiplyScalar(-e/lo.z)}getViewSize(e,t){return this.getViewBounds(e,uo,fo),t.subVectors(fo,uo)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mn*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mo=class extends co{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ho=class extends io{constructor(){super(new mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},go=class extends eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Pr.DEFAULT_UP),this.updateMatrix(),this.target=new Pr,this.shadow=new ho}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},_o=class extends eo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},vo=-90,yo=1,bo=class extends Pr{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new po(vo,yo,e,t);r.layers=this.layers,this.add(r);let i=new po(vo,yo,e,t);i.layers=this.layers,this.add(i);let a=new po(vo,yo,e,t);a.layers=this.layers,this.add(a);let o=new po(vo,yo,e,t);o.layers=this.layers,this.add(o);let s=new po(vo,yo,e,t);s.layers=this.layers,this.add(s);let c=new po(vo,yo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},xo=class extends po{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},So=`\\[\\]\\.:\\/`,Co=RegExp(`[`+So+`]`,`g`),wo=`[^`+So+`]`,To=`[^`+So.replace(`\\.`,``)+`]`,Eo=`((?:WC+[\\/:])*)`.replace(`WC`,wo),Do=`(WCOD+)?`.replace(`WCOD`,To),Oo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,wo),ko=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,wo),Ao=RegExp(`^`+Eo+Do+Oo+ko+`$`),jo=[`material`,`materials`,`bones`,`map`],Mo=class{constructor(e,t,n){let r=n||No.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},No=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Co,``)}static parseTrackName(e){let t=Ao.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);jo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){K(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){q(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){q(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){q(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){q(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){q(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){q(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){q(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;q(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){q(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){q(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};No.Composite=Mo,No.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},No.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},No.prototype.GetterByBindingType=[No.prototype._getValue_direct,No.prototype._getValue_array,No.prototype._getValue_arrayElement,No.prototype._getValue_toArray],No.prototype.SetterByBindingTypeAndVersioning=[[No.prototype._setValue_direct,No.prototype._setValue_direct_setNeedsUpdate,No.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[No.prototype._setValue_array,No.prototype._setValue_array_setNeedsUpdate,No.prototype._setValue_array_setMatrixWorldNeedsUpdate],[No.prototype._setValue_arrayElement,No.prototype._setValue_arrayElement_setNeedsUpdate,No.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[No.prototype._setValue_fromArray,No.prototype._setValue_fromArray_setNeedsUpdate,No.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Po=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=J(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(J(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Fo=class extends dn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){K(`Controls: connect() now requires an element.`);return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Io(e,t,n,r){let i=Lo(r);switch(n){case Ke:return e*t;case Ze:return e*t/i.components*i.byteLength;case Qe:return e*t/i.components*i.byteLength;case $e:return e*t*2/i.components*i.byteLength;case et:return e*t*2/i.components*i.byteLength;case qe:return e*t*3/i.components*i.byteLength;case Je:return e*t*4/i.components*i.byteLength;case tt:return e*t*4/i.components*i.byteLength;case nt:case rt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case it:case at:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case st:case lt:return Math.max(e,16)*Math.max(t,8)/4;case ot:case ct:return Math.max(e,8)*Math.max(t,8)/2;case ut:case dt:case pt:case mt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ft:case ht:case gt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _t:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case vt:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case yt:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case bt:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case xt:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case St:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ct:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case wt:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Tt:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Et:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Dt:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ot:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case kt:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case At:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case jt:case Mt:case Nt:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Pt:case Ft:return Math.ceil(e/4)*Math.ceil(t/4)*8;case It:case Lt:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Lo(e){switch(e){case Ne:case Pe:return{byteLength:1,components:1};case Ie:case Fe:case Be:return{byteLength:2,components:1};case Ve:case He:return{byteLength:2,components:4};case Re:case Le:case ze:return{byteLength:4,components:1};case We:case Ge:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`184`}})),typeof window<`u`&&(window.__THREE__?K(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`184`);function Ro(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function zo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},$={common:{diffuse:{value:new Hr(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Z},alphaMap:{value:null},alphaMapTransform:{value:new Z},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Z}},envmap:{envMap:{value:null},envMapRotation:{value:new Z},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Z}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Z}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Z},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Z},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Z},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Z}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Z}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Z}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Hr(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new Hr(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Z},alphaTest:{value:0},uvTransform:{value:new Z}},sprite:{diffuse:{value:new Hr(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Z},alphaMap:{value:null},alphaMapTransform:{value:new Z},alphaTest:{value:0}}},Bo={basic:{uniforms:Ea([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:Q.meshbasic_vert,fragmentShader:Q.meshbasic_frag},lambert:{uniforms:Ea([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Hr(0)},envMapIntensity:{value:1}}]),vertexShader:Q.meshlambert_vert,fragmentShader:Q.meshlambert_frag},phong:{uniforms:Ea([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Hr(0)},specular:{value:new Hr(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Q.meshphong_vert,fragmentShader:Q.meshphong_frag},standard:{uniforms:Ea([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new Hr(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag},toon:{uniforms:Ea([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new Hr(0)}}]),vertexShader:Q.meshtoon_vert,fragmentShader:Q.meshtoon_frag},matcap:{uniforms:Ea([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:Q.meshmatcap_vert,fragmentShader:Q.meshmatcap_frag},points:{uniforms:Ea([$.points,$.fog]),vertexShader:Q.points_vert,fragmentShader:Q.points_frag},dashed:{uniforms:Ea([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Q.linedashed_vert,fragmentShader:Q.linedashed_frag},depth:{uniforms:Ea([$.common,$.displacementmap]),vertexShader:Q.depth_vert,fragmentShader:Q.depth_frag},normal:{uniforms:Ea([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:Q.meshnormal_vert,fragmentShader:Q.meshnormal_frag},sprite:{uniforms:Ea([$.sprite,$.fog]),vertexShader:Q.sprite_vert,fragmentShader:Q.sprite_frag},background:{uniforms:{uvTransform:{value:new Z},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Q.background_vert,fragmentShader:Q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Z}},vertexShader:Q.backgroundCube_vert,fragmentShader:Q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Q.cube_vert,fragmentShader:Q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Q.equirect_vert,fragmentShader:Q.equirect_frag},distance:{uniforms:Ea([$.common,$.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Q.distance_vert,fragmentShader:Q.distance_frag},shadow:{uniforms:Ea([$.lights,$.fog,{color:{value:new Hr(0)},opacity:{value:1}}]),vertexShader:Q.shadow_vert,fragmentShader:Q.shadow_frag}};Bo.physical={uniforms:Ea([Bo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Z},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Z},clearcoatNormalScale:{value:new Y(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Z},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Z},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Z},sheen:{value:0},sheenColor:{value:new Hr(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Z},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Z},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Z},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Z},attenuationDistance:{value:0},attenuationColor:{value:new Hr(0)},specularColor:{value:new Hr(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Z},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Z},anisotropyVector:{value:new Y},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Z}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag};var Vo={r:0,b:0,g:0},Ho=new sr,Uo=new Z;Uo.set(-1,0,0,0,1,0,0,0,1);function Wo(e,t,n,r,i,a){let o=new Hr(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new sa(new Ca(1,1,1),new Na({name:`BackgroundCubeMaterial`,uniforms:Ta(Bo.backgroundCube.uniforms),vertexShader:Bo.backgroundCube.vertexShader,fragmentShader:Bo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,`envMap`,{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ho.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Uo),l.material.toneMapped=Gn.getTransfer(i.colorSpace)!==Yt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new sa(new wa(2,2),new Na({name:`BackgroundMaterial`,uniforms:Ta(Bo.background.uniforms),vertexShader:Bo.background.vertexShader,fragmentShader:Bo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,`map`,{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Gn.getTransfer(i.colorSpace)!==Yt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Vo,ka(e)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Go(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ko(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function qo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(K(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&K(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Jo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ma,s=new Z,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Yo=4,Xo=[.125,.215,.35,.446,.526,.582],Zo=20,Qo=256,$o=new mo,es=new Hr,ts=null,ns=0,rs=0,is=!1,as=new X,os=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=as}=i;ts=this._renderer.getRenderTarget(),ns=this._renderer.getActiveCubeFace(),rs=this._renderer.getActiveMipmapLevel(),is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ps(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ts,ns,rs),this._renderer.xr.enabled=is,e.scissorTest=!1,ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ts=this._renderer.getRenderTarget(),ns=this._renderer.getActiveCubeFace(),rs=this._renderer.getActiveMipmapLevel(),is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ae,minFilter:Ae,generateMipmaps:!1,type:Be,format:Je,colorSpace:qt,depthBuffer:!1},r=cs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cs(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ss(r)),this._blurMaterial=ds(r,e,t),this._ggxMaterial=us(r,e,t)}return r}_compileMaterial(e){let t=new sa(new Ri,e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,n,r,i){let a=new po(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(es),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new sa(new Ca,new Yi({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(es),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;ls(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ps()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fs());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;ls(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,$o)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Yo?n-d+Yo:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,ls(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,$o),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,ls(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,$o)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&q(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Zo-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):Zo;m>Zo&&K(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zo}`);let h=[],g=0;for(let e=0;e<Zo;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];ls(t,3*v*(r>_-Yo?r-_+Yo:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,$o)}};function ss(e){let t=[],n=[],r=[],i=e,a=e-Yo+1+Xo.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Yo?s=Xo[o-e+Yo-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Ri;h.setAttribute(`position`,new Ci(f,3)),h.setAttribute(`uv`,new Ci(p,2)),h.setAttribute(`faceIndex`,new Ci(m,1)),r.push(new sa(h,null)),i>Yo&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function cs(e,t,n){let r=new ir(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function ls(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function us(e,t,n){return new Na({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Qo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ms(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ds(e,t,n){let r=new Float32Array(Zo),i=new X(0,1,0);return new Na({name:`SphericalGaussianBlur`,defines:{n:Zo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function fs(){return new Na({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ps(){return new Na({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ms(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var hs=class extends ir{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1};this.texture=new ya([n,n,n,n,n,n]),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ca(5,5,5),i=new Na({name:`CubemapFromEquirect`,uniforms:Ta(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new sa(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Ae),new bo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function gs(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new hs(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new os(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new os(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function _s(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&cn(`WebGLRenderer: `+e+` extension not supported.`),t}}}function vs(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Ti:wi)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ys(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function bs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:q(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function xs(e,t,n){let r=new WeakMap,i=new nr;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new ar(h,p,m,u);g.type=ze,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new Y(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ss(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Cs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ws(e,t,n,r,i){let a=new ir(t,n,{type:e,depthBuffer:r,stencilBuffer:i,depthTexture:r?new ba(t,n):void 0}),o=new ir(t,n,{type:Be,depthBuffer:!1,stencilBuffer:!1}),s=new Ri;s.setAttribute(`position`,new Ei([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute(`uv`,new Ei([0,2,0,0,2,0],2));let c=new Pa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new sa(s,c),u=new mo(-1,1,1,-1,0,1),d=null,f=null,p=!1,m,h=null,g=[],_=!1;this.setSize=function(e,t){a.setSize(e,t),o.setSize(e,t);for(let n=0;n<g.length;n++){let r=g[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){g=e,_=g.length>0&&g[0].isRenderPass===!0;let t=a.width,n=a.height;for(let e=0;e<g.length;e++){let r=g[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(p||e.toneMapping===0&&g.length===0)return!1;if(h=t,t!==null){let e=t.width,n=t.height;(a.width!==e||a.height!==n)&&this.setSize(e,n)}return _===!1&&e.setRenderTarget(a),m=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return _},this.end=function(e,t){e.toneMapping=m,p=!0;let n=a,r=o;for(let i=0;i<g.length;i++){let a=g[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(d!==e.outputColorSpace||f!==e.toneMapping){d=e.outputColorSpace,f=e.toneMapping,c.defines={},Gn.getTransfer(d)===`srgb`&&(c.defines.SRGB_TRANSFER=``);let t=Cs[f];t&&(c.defines[t]=``),c.needsUpdate=!0}c.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(h),e.render(l,u),h=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),s.dispose(),c.dispose()}}var Ts=new tr,Es=new ba(1,1),Ds=new ar,Os=new or,ks=new ya,As=[],js=[],Ms=new Float32Array(16),Ns=new Float32Array(9),Ps=new Float32Array(4);function Fs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=As[i];if(a===void 0&&(a=new Float32Array(i),As[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Is(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ls(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Rs(e,t){let n=js[t];n===void 0&&(n=new Int32Array(t),js[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function zs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Bs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Is(n,t))return;e.uniform2fv(this.addr,t),Ls(n,t)}}function Vs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Is(n,t))return;e.uniform3fv(this.addr,t),Ls(n,t)}}function Hs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Is(n,t))return;e.uniform4fv(this.addr,t),Ls(n,t)}}function Us(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Is(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ls(n,t)}else{if(Is(n,r))return;Ps.set(r),e.uniformMatrix2fv(this.addr,!1,Ps),Ls(n,r)}}function Ws(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Is(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ls(n,t)}else{if(Is(n,r))return;Ns.set(r),e.uniformMatrix3fv(this.addr,!1,Ns),Ls(n,r)}}function Gs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Is(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ls(n,t)}else{if(Is(n,r))return;Ms.set(r),e.uniformMatrix4fv(this.addr,!1,Ms),Ls(n,r)}}function Ks(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function qs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Is(n,t))return;e.uniform2iv(this.addr,t),Ls(n,t)}}function Js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Is(n,t))return;e.uniform3iv(this.addr,t),Ls(n,t)}}function Ys(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Is(n,t))return;e.uniform4iv(this.addr,t),Ls(n,t)}}function Xs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Zs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Is(n,t))return;e.uniform2uiv(this.addr,t),Ls(n,t)}}function Qs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Is(n,t))return;e.uniform3uiv(this.addr,t),Ls(n,t)}}function $s(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Is(n,t))return;e.uniform4uiv(this.addr,t),Ls(n,t)}}function ec(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Es.compareFunction=n.isReversedDepthBuffer()?518:515,a=Es):a=Ts,n.setTexture2D(t||a,i)}function tc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Os,i)}function nc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ks,i)}function rc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ds,i)}function ic(e){switch(e){case 5126:return zs;case 35664:return Bs;case 35665:return Vs;case 35666:return Hs;case 35674:return Us;case 35675:return Ws;case 35676:return Gs;case 5124:case 35670:return Ks;case 35667:case 35671:return qs;case 35668:case 35672:return Js;case 35669:case 35673:return Ys;case 5125:return Xs;case 36294:return Zs;case 36295:return Qs;case 36296:return $s;case 35678:case 36198:case 36298:case 36306:case 35682:return ec;case 35679:case 36299:case 36307:return tc;case 35680:case 36300:case 36308:case 36293:return nc;case 36289:case 36303:case 36311:case 36292:return rc}}function ac(e,t){e.uniform1fv(this.addr,t)}function oc(e,t){let n=Fs(t,this.size,2);e.uniform2fv(this.addr,n)}function sc(e,t){let n=Fs(t,this.size,3);e.uniform3fv(this.addr,n)}function cc(e,t){let n=Fs(t,this.size,4);e.uniform4fv(this.addr,n)}function lc(e,t){let n=Fs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function uc(e,t){let n=Fs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function dc(e,t){let n=Fs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function fc(e,t){e.uniform1iv(this.addr,t)}function pc(e,t){e.uniform2iv(this.addr,t)}function mc(e,t){e.uniform3iv(this.addr,t)}function hc(e,t){e.uniform4iv(this.addr,t)}function gc(e,t){e.uniform1uiv(this.addr,t)}function _c(e,t){e.uniform2uiv(this.addr,t)}function vc(e,t){e.uniform3uiv(this.addr,t)}function yc(e,t){e.uniform4uiv(this.addr,t)}function bc(e,t,n){let r=this.cache,i=t.length,a=Rs(n,i);Is(r,a)||(e.uniform1iv(this.addr,a),Ls(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Es:Ts;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function xc(e,t,n){let r=this.cache,i=t.length,a=Rs(n,i);Is(r,a)||(e.uniform1iv(this.addr,a),Ls(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Os,a[e])}function Sc(e,t,n){let r=this.cache,i=t.length,a=Rs(n,i);Is(r,a)||(e.uniform1iv(this.addr,a),Ls(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ks,a[e])}function Cc(e,t,n){let r=this.cache,i=t.length,a=Rs(n,i);Is(r,a)||(e.uniform1iv(this.addr,a),Ls(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ds,a[e])}function wc(e){switch(e){case 5126:return ac;case 35664:return oc;case 35665:return sc;case 35666:return cc;case 35674:return lc;case 35675:return uc;case 35676:return dc;case 5124:case 35670:return fc;case 35667:case 35671:return pc;case 35668:case 35672:return mc;case 35669:case 35673:return hc;case 5125:return gc;case 36294:return _c;case 36295:return vc;case 36296:return yc;case 35678:case 36198:case 36298:case 36306:case 35682:return bc;case 35679:case 36299:case 36307:return xc;case 35680:case 36300:case 36308:case 36293:return Sc;case 36289:case 36303:case 36311:case 36292:return Cc}}var Tc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ic(t.type)}},Ec=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wc(t.type)}},Dc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Oc=/(\w+)(\])?(\[|\.)?/g;function kc(e,t){e.seq.push(t),e.map[t.id]=t}function Ac(e,t,n){let r=e.name,i=r.length;for(Oc.lastIndex=0;;){let a=Oc.exec(r),o=Oc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){kc(n,l===void 0?new Tc(s,e,t):new Ec(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new Dc(s),kc(n,e)),n=e}}}var jc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ac(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Mc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Nc=37297,Pc=0;function Fc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Ic=new Z;function Lc(e){Gn._getMatrix(Ic,Gn.workingColorSpace,e);let t=`mat3( ${Ic.elements.map(e=>e.toFixed(4))} )`;switch(Gn.getTransfer(e)){case Jt:return[t,`LinearTransferOETF`];case Yt:return[t,`sRGBTransferOETF`];default:return K(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Rc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Fc(e.getShaderSource(t),r)}else return i}function zc(e,t){let n=Lc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Bc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Vc(e,t){let n=Bc[t];return n===void 0?(K(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Hc=new X;function Uc(){return Gn.getLuminanceCoefficients(Hc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Hc.x.toFixed(4)}, ${Hc.y.toFixed(4)}, ${Hc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Wc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(qc).join(`
`)}function Gc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Kc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function qc(e){return e!==``}function Jc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(e){return e.replace(Xc,$c)}var Qc=new Map;function $c(e,t){let n=Q[t];if(n===void 0){let e=Qc.get(t);if(e!==void 0)n=Q[e],K(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Zc(n)}var el=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tl(e){return e.replace(el,nl)}function nl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function rl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var il={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function al(e){return il[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ol={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function sl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:ol[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var cl={302:`ENVMAP_MODE_REFRACTION`};function ll(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:cl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var ul={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function dl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:ul[e.combine]||`ENVMAP_BLENDING_NONE`}function fl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function pl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=al(n),l=sl(n),u=ll(n),d=dl(n),f=fl(n),p=Wc(n),m=Gc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(qc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(qc).join(`
`),_.length>0&&(_+=`
`)):(g=[rl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(qc).join(`
`),_=[rl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Q.tonemapping_pars_fragment,n.toneMapping===0?``:Vc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Q.colorspace_pars_fragment,zc(`linearToOutputTexel`,n.outputColorSpace),Uc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(qc).join(`
`)),o=Zc(o),o=Jc(o,n),o=Yc(o,n),s=Zc(s),s=Jc(s,n),s=Yc(s,n),o=tl(o),s=tl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Mc(i,i.VERTEX_SHADER,y),S=Mc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Rc(i,x,`vertex`),n=Rc(i,S,`fragment`);q(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):K(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new jc(i,h),T=Kc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Nc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Pc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var ml=0,hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gl(e),t.set(e,n)),n}},gl=class{constructor(e){this.id=ml++,this.code=e,this.usedTimes=0}};function _l(e){return e===1030||e===37490||e===36285}function vl(e,t,n,r,i,a){let o=new vr,s=new hl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&K(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Bo[C];D=e.vertexShader,O=e.fragmentShader}else D=i.vertexShader,O=i.fragmentShader,s.update(i),k=s.getVertexShaderID(i),A=s.getFragmentShaderID(i);let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,I=!!i.matcap,ee=!!x,L=!!i.aoMap,te=!!i.lightMap,R=!!i.bumpMap,ne=!!i.normalMap,z=!!i.displacementMap,B=!!i.emissiveMap,re=!!i.metalnessMap,ie=!!i.roughnessMap,ae=i.anisotropy>0,oe=i.clearcoat>0,se=i.dispersion>0,ce=i.iridescence>0,le=i.sheen>0,ue=i.transmission>0,V=ae&&!!i.anisotropyMap,de=oe&&!!i.clearcoatMap,fe=oe&&!!i.clearcoatNormalMap,H=oe&&!!i.clearcoatRoughnessMap,pe=ce&&!!i.iridescenceMap,me=ce&&!!i.iridescenceThicknessMap,he=le&&!!i.sheenColorMap,U=le&&!!i.sheenRoughnessMap,ge=!!i.specularMap,W=!!i.specularColorMap,G=!!i.specularIntensityMap,_e=ue&&!!i.transmissionMap,ve=ue&&!!i.thicknessMap,ye=!!i.gradientMap,be=!!i.alphaMap,xe=i.alphaTest>0,Se=!!i.alphaHash,Ce=!!i.extensions,we=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(we=e.toneMapping);let Te={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Gn.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:I,envMap:ee,envMapMode:ee&&x.mapping,envMapCubeUVHeight:S,aoMap:L,lightMap:te,bumpMap:R,normalMap:ne,displacementMap:z,emissiveMap:B,normalMapObjectSpace:ne&&i.normalMapType===1,normalMapTangentSpace:ne&&i.normalMapType===0,packedNormalMap:ne&&i.normalMapType===0&&_l(i.normalMap.format),metalnessMap:re,roughnessMap:ie,anisotropy:ae,anisotropyMap:V,clearcoat:oe,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:H,dispersion:se,iridescence:ce,iridescenceMap:pe,iridescenceThicknessMap:me,sheen:le,sheenColorMap:he,sheenRoughnessMap:U,specularMap:ge,specularColorMap:W,specularIntensityMap:G,transmission:ue,transmissionMap:_e,thicknessMap:ve,gradientMap:ye,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:be,alphaTest:xe,alphaHash:Se,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:L&&m(i.aoMap.channel),lightMapUv:te&&m(i.lightMap.channel),bumpMapUv:R&&m(i.bumpMap.channel),normalMapUv:ne&&m(i.normalMap.channel),displacementMapUv:z&&m(i.displacementMap.channel),emissiveMapUv:B&&m(i.emissiveMap.channel),metalnessMapUv:re&&m(i.metalnessMap.channel),roughnessMapUv:ie&&m(i.roughnessMap.channel),anisotropyMapUv:V&&m(i.anisotropyMap.channel),clearcoatMapUv:de&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:fe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:me&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:he&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:U&&m(i.sheenRoughnessMap.channel),specularMapUv:ge&&m(i.specularMap.channel),specularColorMapUv:W&&m(i.specularColorMap.channel),specularIntensityMapUv:G&&m(i.specularIntensityMap.channel),transmissionMapUv:_e&&m(i.transmissionMap.channel),thicknessMapUv:ve&&m(i.thicknessMap.channel),alphaMapUv:be&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ne||ae),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||be),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ne===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:we,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&Gn.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:B&&i.emissiveMap.isVideoTexture===!0&&Gn.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ce&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ce&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Bo[t];n=Aa.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new pl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function yl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function bl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function xl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Sl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||bl),r.length>1&&r.sort(t||xl),i.length>1&&i.sort(t||xl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Cl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Sl,e.set(t,[i])):n>=r.length?(i=new Sl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function wl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new X,color:new Hr};break;case`SpotLight`:n={position:new X,direction:new X,color:new Hr,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new X,color:new Hr,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new X,skyColor:new Hr,groundColor:new Hr};break;case`RectAreaLight`:n={color:new Hr,position:new X,halfWidth:new X,halfHeight:new X};break}return e[t.id]=n,n}}}function Tl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var El=0;function Dl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ol(e){let t=new wl,n=Tl(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new X);let i=new X,a=new sr,o=new sr;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Dl);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=El++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function kl(e){let t=new Ol(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Al(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new kl(e),t.set(n,[a])):r>=i.length?(a=new kl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var jl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ml=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Nl=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],Pl=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Fl=new sr,Il=new X,Ll=new X;function Rl(e,t,n){let r=new va,i=new Y,a=new Y,o=new nr,s=new Ia,c=new La,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Na({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:jl,fragmentShader:Ml}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ri;m.setAttribute(`position`,new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new sa(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(K(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){K(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){K(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new ir(i.x,i.y,{format:$e,type:Be,minFilter:Ae,magFilter:Ae,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new ba(i.x,i.y,ze),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Ye,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=De,d.map.depthTexture.magFilter=De}else l.isPointLight?(d.map=new hs(i.x),d.map.depthTexture=new xa(i.x,Re)):(d.map=new ir(i.x,i.y),d.map.depthTexture=new ba(i.x,i.y,Re)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Ye,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Ae,d.map.depthTexture.magFilter=Ae):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=De,d.map.depthTexture.magFilter=De);d.camera.updateProjectionMatrix()}let g=d.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<g;t++){if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Il.setFromMatrixPosition(l.matrixWorld),e.position.copy(Il),Ll.copy(e.position),Ll.add(Nl[t]),e.up.copy(Pl[t]),e.lookAt(Ll),e.updateMatrixWorld(),n.makeTranslation(-Il.x,-Il.y,-Il.z),Fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Fl,e.coordinateSystem,e.reversedDepth)}else d.updateMatrices(l);r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new ir(i.x,i.y,{format:$e,type:Be})),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function zl(e,t){function n(){let t=!1,n=new nr,r=null,i=new nr(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?re(e.DEPTH_TEST):ie(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=un[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?re(e.STENCIL_TEST):ie(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Hr(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,ee={},L=e.getParameter(e.SCISSOR_BOX),te=e.getParameter(e.VIEWPORT),R=new nr().fromArray(L),ne=new nr().fromArray(te);function z(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let B={};B[e.TEXTURE_2D]=z(e.TEXTURE_2D,e.TEXTURE_2D,1),B[e.TEXTURE_CUBE_MAP]=z(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[e.TEXTURE_2D_ARRAY]=z(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),B[e.TEXTURE_3D]=z(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),re(e.DEPTH_TEST),o.setFunc(3),de(!1),fe(1),re(e.CULL_FACE),ue(0);function re(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ie(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ae(t,n){return f[t]===n?!1:(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function oe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function se(t){return h===t?!1:(e.useProgram(t),h=t,!0)}let ce={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ce[103]=e.MIN,ce[104]=e.MAX;let le={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ue(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ie(e.BLEND),g=!1);return}if(g===!1&&(re(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:q(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:q(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:q(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:q(`WebGLState: Invalid blending: `,t);break}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ce[n],ce[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(le[r],le[i],le[o],le[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function V(t,n){t.side===2?ie(e.CULL_FACE):re(e.CULL_FACE);let r=t.side===1;n&&(r=!r),de(r),t.blending===1&&t.transparent===!1?ue(0):ue(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),pe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?re(e.SAMPLE_ALPHA_TO_COVERAGE):ie(e.SAMPLE_ALPHA_TO_COVERAGE)}function de(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function fe(t){t===0?ie(e.CULL_FACE):(re(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function H(t){t!==k&&(N&&e.lineWidth(t),k=t)}function pe(t,n,r){t?(re(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ie(e.POLYGON_OFFSET_FILL)}function me(t){t?re(e.SCISSOR_TEST):ie(e.SCISSOR_TEST)}function he(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function U(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=ee[r];i===void 0&&(i={type:void 0,texture:void 0},ee[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||B[t]),i.type=t,i.texture=n)}function ge(){let t=ee[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function W(){try{e.compressedTexImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function G(){try{e.compressedTexImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function _e(){try{e.texSubImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function ve(){try{e.texSubImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function ye(){try{e.compressedTexSubImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function be(){try{e.compressedTexSubImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function xe(){try{e.texStorage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Se(){try{e.texStorage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Ce(){try{e.texImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function we(){try{e.texImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Te(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ee(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function De(t){R.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),R.copy(t))}function Oe(t){ne.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ne.copy(t))}function ke(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ae(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function je(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,ee={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Hr(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,R.set(0,0,e.canvas.width,e.canvas.height),ne.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:re,disable:ie,bindFramebuffer:ae,drawBuffers:oe,useProgram:se,setBlending:ue,setMaterial:V,setFlipSided:de,setCullFace:fe,setLineWidth:H,setPolygonOffset:pe,setScissorTest:me,activeTexture:he,bindTexture:U,unbindTexture:ge,compressedTexImage2D:W,compressedTexImage3D:G,texImage2D:Ce,texImage3D:we,pixelStorei:Ee,getParameter:Te,updateUBOMapping:ke,uniformBlockBinding:Ae,texStorage2D:xe,texStorage3D:Se,texSubImage2D:_e,texSubImage3D:ve,compressedTexSubImage2D:ye,compressedTexSubImage3D:be,scissor:De,viewport:Oe,reset:je}}function Bl(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Y,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):tn(`canvas`)}function g(e,t,n){let r=1,i=W(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),K(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&K(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];K(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||K(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Jt:Gn.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,K(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function M(){let e=O;return e>=i.maxTextures&&K(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function N(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(t,i){let a=r.get(t);if(t.isVideoTexture&&U(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)K(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)K(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ie(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function F(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ie(a,t,i);return}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function I(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ie(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ee(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){ae(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let L={[we]:e.REPEAT,[Te]:e.CLAMP_TO_EDGE,[Ee]:e.MIRRORED_REPEAT},te={[De]:e.NEAREST,[Oe]:e.NEAREST_MIPMAP_NEAREST,[ke]:e.NEAREST_MIPMAP_LINEAR,[Ae]:e.LINEAR,[je]:e.LINEAR_MIPMAP_NEAREST,[Me]:e.LINEAR_MIPMAP_LINEAR},R={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ne(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&K(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,L[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,L[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,L[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,te[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,te[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,R[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function z(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=N(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function B(e,t,n){return Math.floor(Math.floor(e/n)/t)}function re(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=B(n.start,r.width,4),c=B(t.start,r.width,4);n.start<=i+1&&a===c&&B(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ie(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=z(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Gn.getPrimaries(Gn.workingColorSpace),r=o.colorSpace===``?null:Gn.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=ge(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ne(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===Xe,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture)if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&re(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data);else if(o.isCompressedTexture)if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023)if(r!==null)if(C){if(T)if(o.layerUpdates.size>0){let t=Io(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0);else K(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data)}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?K(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}else if(o.isDataArrayTexture)if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T)if(o.layerUpdates.size>0){let i=Io(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w)if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}let r=e.RGBA,i=e.RGBA,a=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,r,i,a,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=W(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=W(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ae(t,o,s){if(o.image.length!==6)return;let c=z(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Gn.getPrimaries(Gn.workingColorSpace),r=o.colorSpace===``?null:Gn.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=ge(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);ne(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?K(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=W(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function oe(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),he(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,me(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function se(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;he(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,me(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,me(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);he(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,me(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,me(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ce(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ne(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else P(i.depthTexture,0);let u=l.__webglTexture,d=me(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)he(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)he(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`Unknown depthTexture format`)}function le(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer)if(a)for(let e=0;e<6;e++)ce(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ce(i.__webglFramebuffer[0],t,0):ce(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),se(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),se(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ue(t,n,i){let a=r.get(t);n!==void 0&&oe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&le(t)}function V(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&he(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=me(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),se(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ne(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)oe(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else oe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ne(c,a),oe(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ne(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)oe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else oe(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&le(t)}function de(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let fe=[],H=[];function pe(t){if(t.samples>0){if(he(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(fe.length=0,H.length=0,fe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(fe.push(l),H.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,H)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,fe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function me(e){return Math.min(i.maxSamples,e.samples)}function he(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function U(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function ge(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Gn.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&K(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):q(`WebGLTextures: Unsupported texture color space:`,n)),t}function W(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=M,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=P,this.setTexture2DArray=F,this.setTexture3D=I,this.setTextureCube=ee,this.rebindTextures=ue,this.setupRenderTarget=V,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Vl(e,t){function n(n,r=``){let i,a=Gn.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Hl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ul=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Wl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Sa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Na({vertexShader:Hl,fragmentShader:Ul,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new sa(new wa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gl=class extends dn{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Wl,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new Y,C=null,w=new po;w.viewport=new nr;let T=new po;T.viewport=new nr;let E=[w,T],D=new xo,O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Lr,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Lr,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Lr,b[e]=t),t.getHandSpace()};function A(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function j(){r.removeEventListener(`select`,A),r.removeEventListener(`selectstart`,A),r.removeEventListener(`selectend`,A),r.removeEventListener(`squeeze`,A),r.removeEventListener(`squeezestart`,A),r.removeEventListener(`squeezeend`,A),r.removeEventListener(`end`,j),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}O=null,k=null,h.reset();for(let e in g)delete g[e];e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,R.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&K(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&K(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,A),r.addEventListener(`selectstart`,A),r.addEventListener(`selectend`,A),r.addEventListener(`squeeze`,A),r.addEventListener(`squeezestart`,A),r.addEventListener(`squeezeend`,A),r.addEventListener(`end`,j),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Xe:Ye,a=_.stencil?Ue:Re);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ir(d.textureWidth,d.textureHeight,{format:Je,type:Ne,depthTexture:new ba(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ir(f.framebufferWidth,f.framebufferHeight,{format:Je,type:Ne,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),R.setContext(r),R.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let N=new X,P=new X;function F(e,t,n){N.setFromMatrixPosition(t.matrixWorld),P.setFromMatrixPosition(n.matrixWorld);let r=N.distanceTo(P),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function I(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),D.near=T.near=w.near=t,D.far=T.far=w.far=n,(O!==D.near||k!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,k=D.far),D.layers.mask=e.layers.mask|6,w.layers.mask=D.layers.mask&-5,T.layers.mask=D.layers.mask&-3;let i=e.parent,a=D.cameras;I(D,i);for(let e=0;e<a.length;e++)I(a[e],i);a.length===2?F(D,w,T):D.projectionMatrix.copy(w.projectionMatrix),ee(e,D,i)};function ee(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=hn*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(D)},this.getCameraTexture=function(e){return g[e]};let L=null;function te(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==D.cameras.length&&(D.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=E[n];o===void 0&&(o=new po,o.layers.enable(n),o.viewport=new nr,E[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(D.matrix.copy(o.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),i===!0&&D.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Sa,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}L&&L(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let R=new Ro;R.setAnimationLoop(te),this.setAnimationLoop=function(e){L=e},this.dispose=function(){}}},Kl=new sr,ql=new Z;ql.set(-1,0,0,0,1,0,0,0,1);function Jl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ka(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Kl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(ql),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Yl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return q(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):ArrayBuffer.isView(o)?i.__data.set(new o.constructor(o.buffer,o.byteOffset,i.__data.length)):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:ArrayBuffer.isView(i)?r[a]=i.slice():r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?K(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):K(`WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Xl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zl=null;function Ql(){return Zl===null&&(Zl=new ua(Xl,16,16,$e,Be),Zl.name=`DFG_LUT`,Zl.minFilter=Ae,Zl.magFilter=Ae,Zl.wrapS=Te,Zl.wrapT=Te,Zl.generateMipmaps=!1,Zl.needsUpdate=!0),Zl}var $l=class{constructor(e={}){let{canvas:t=nn(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ne}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([tt,et,Qe]),g=new Set([Ne,Re,Ie,Ue,Ve,He]),_=new Uint32Array(4),v=new Int32Array(4),y=new X,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null;this._outputColorSpace=Kt;let O=0,k=0,A=null,j=-1,M=null,N=new nr,P=new nr,F=null,I=new Hr(0),ee=0,L=t.width,te=t.height,R=1,ne=null,z=null,B=new nr(0,0,L,te),re=new nr(0,0,L,te),ie=!1,ae=new va,oe=!1,se=!1,ce=new sr,le=new X,ue=new nr,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function fe(){return A===null?R:1}let H=n;function pe(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r184`),t.addEventListener(`webglcontextlost`,We,!1),t.addEventListener(`webglcontextrestored`,Ge,!1),t.addEventListener(`webglcontextcreationerror`,Ke,!1),H===null){let t=`webgl2`;if(H=pe(t,e),H===null)throw pe(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw q(`WebGLRenderer: `+e.message),e}let me,he,U,ge,W,G,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Pe,Fe;function Le(){me=new _s(H),me.init(),je=new Vl(H,me),he=new qo(H,me,e,je),U=new zl(H,me),he.reversedDepthBuffer&&d&&U.buffers.depth.setReversed(!0),ge=new bs(H),W=new yl,G=new Bl(H,me,U,W,he,je,ge),_e=new gs(T),ve=new zo(H),Pe=new Go(H,ve),ye=new vs(H,ve,ge,Pe),be=new Ss(H,ye,ve,Pe,ge),Oe=new xs(H,he,G),Te=new Jo(W),xe=new vl(T,_e,me,he,Pe,Te),Se=new Jl(T,W),Ce=new Cl,we=new Al(me),De=new Wo(T,_e,U,be,p,s),Ee=new Rl(T,be,he),Fe=new Yl(H,ge,he,U),ke=new Ko(H,me,ge),Ae=new ys(H,me,ge),ge.programs=xe.programs,T.capabilities=he,T.extensions=me,T.properties=W,T.renderLists=Ce,T.shadowMap=Ee,T.state=U,T.info=ge}Le(),m!==1009&&(w=new ws(m,t.width,t.height,r,i));let ze=new Gl(T,H);this.xr=ze,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let e=me.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=me.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(e){e!==void 0&&(R=e,this.setSize(L,te,!1))},this.getSize=function(e){return e.set(L,te)},this.setSize=function(e,n,r=!0){if(ze.isPresenting){K(`WebGLRenderer: Can't change size while VR device is presenting.`);return}L=e,te=n,t.width=Math.floor(e*R),t.height=Math.floor(n*R),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(L*R,te*R).floor()},this.setDrawingBufferSize=function(e,n,r){L=e,te=n,R=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){q(`THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){K(`THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(N)},this.getViewport=function(e){return e.copy(B)},this.setViewport=function(e,t,n,r){e.isVector4?B.set(e.x,e.y,e.z,e.w):B.set(e,t,n,r),U.viewport(N.copy(B).multiplyScalar(R).round())},this.getScissor=function(e){return e.copy(re)},this.setScissor=function(e,t,n,r){e.isVector4?re.set(e.x,e.y,e.z,e.w):re.set(e,t,n,r),U.scissor(P.copy(re).multiplyScalar(R).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(e){U.setScissorTest(ie=e)},this.setOpaqueSort=function(e){ne=e},this.setTransparentSort=function(e){z=e},this.getClearColor=function(e){return e.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(A!==null){let t=A.texture.format;e=h.has(t)}if(e){let e=A.texture.type,t=g.has(e),n=De.getClearColor(),r=De.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,H.clearBufferuiv(H.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,H.clearBufferiv(H.COLOR,0,v))}else r|=H.COLOR_BUFFER_BIT}t&&(r|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&H.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,We,!1),t.removeEventListener(`webglcontextrestored`,Ge,!1),t.removeEventListener(`webglcontextcreationerror`,Ke,!1),De.dispose(),Ce.dispose(),we.dispose(),W.dispose(),_e.dispose(),be.dispose(),Pe.dispose(),Fe.dispose(),xe.dispose(),ze.dispose(),ze.removeEventListener(`sessionstart`,nt),ze.removeEventListener(`sessionend`,rt),it.stop()};function We(e){e.preventDefault(),on(`WebGLRenderer: Context Lost.`),E=!0}function Ge(){on(`WebGLRenderer: Context Restored.`),E=!1;let e=ge.autoReset,t=Ee.enabled,n=Ee.autoUpdate,r=Ee.needsUpdate,i=Ee.type;Le(),ge.autoReset=e,Ee.enabled=t,Ee.autoUpdate=n,Ee.needsUpdate=r,Ee.type=i}function Ke(e){q(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function qe(e){let t=e.target;t.removeEventListener(`dispose`,qe),Je(t)}function Je(e){Ye(e),W.remove(e)}function Ye(e){let t=W.get(e).programs;t!==void 0&&(t.forEach(function(e){xe.releaseProgram(e)}),e.isShaderMaterial&&xe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=V);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=mt(e,t,n,r,i);U.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ye.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Pe.setup(i,r,s,n,c);let h,g=ke;if(c!==null&&(h=ve.get(c),g=Ae,g.setIndex(h)),i.isMesh)r.wireframe===!0?(U.setLineWidth(r.wireframeLinewidth*fe()),g.setMode(H.LINES)):g.setMode(H.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),U.setLineWidth(e*fe()),i.isLineSegments?g.setMode(H.LINES):i.isLineLoop?g.setMode(H.LINE_LOOP):g.setMode(H.LINE_STRIP)}else i.isPoints?g.setMode(H.POINTS):i.isSprite&&g.setMode(H.TRIANGLES);if(i.isBatchedMesh)if(me.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ve.get(c).bytesPerElement:1,o=W.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(H,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Xe(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ut(e,t,n),e.side=0,e.needsUpdate=!0,ut(e,t,n),e.side=2):ut(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),x=we.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Xe(a,n,e),r.add(a)}else Xe(t,n,e),r.add(t)}),x=C.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){W.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}me.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ze=null;function $e(e){Ze&&Ze(e)}function nt(){it.stop()}function rt(){it.start()}let it=new Ro;it.setAnimationLoop($e),typeof self<`u`&&it.setContext(self),this.setAnimationLoop=function(e){Ze=e,ze.setAnimationLoop(e),e===null?it.stop():it.start()},ze.addEventListener(`sessionstart`,nt),ze.addEventListener(`sessionend`,rt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){q(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=ze.enabled===!0&&ze.isPresenting===!0,r=w!==null&&(A===null||n)&&w.begin(T,A);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(t),t=ze.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,A),x=we.get(e,C.length),x.init(t),x.state.textureUnits=G.getTextureUnits(),C.push(x),ce.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ae.setFromProjectionMatrix(ce,Qt,t.reversedDepth),se=this.localClippingEnabled,oe=Te.init(this.clippingPlanes,se),b=Ce.get(e,S.length),b.init(),S.push(b),ze.enabled===!0&&ze.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&at(e,t,-1/0,T.sortObjects)}at(e,t,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(ne,z),de=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,de&&De.addToRenderList(b,e),this.info.render.frame++,oe===!0&&Te.beginShadows();let i=x.state.shadowsArray;if(Ee.render(i,e,t),oe===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];st(n,r,e,a)}de&&De.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];ot(b,e,n,n.viewport)}}else r.length>0&&st(n,r,e,t),de&&De.render(e),ot(b,e,t)}A!==null&&k===0&&(G.updateMultisampleRenderTarget(A),G.updateRenderTargetMipmap(A)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Pe.resetDefaultState(),j=-1,M=null,C.pop(),C.length>0?(x=C[C.length-1],G.setTextureUnits(x.state.textureUnits),oe===!0&&Te.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function at(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ae.intersectsSprite(e)){r&&ue.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ce);let t=be.update(e),i=e.material;i.visible&&b.push(e,t,i,n,ue.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ae.intersectsObject(e))){let t=be.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),ue.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ue.copy(e.boundingSphere.center)),ue.applyMatrix4(e.matrixWorld).applyMatrix4(ce)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&b.push(e,t,s,n,ue.z,o)}}else i.visible&&b.push(e,t,i,n,ue.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)at(i[e],t,n,r)}function ot(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),oe===!0&&Te.setGlobalState(T.clippingPlanes,n),r&&U.viewport(N.copy(r)),i.length>0&&ct(i,t,n),a.length>0&&ct(a,t,n),o.length>0&&ct(o,t,n),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function st(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=me.has(`EXT_color_buffer_half_float`)||me.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new ir(1,1,{generateMipmaps:!0,type:e?Be:Ne,minFilter:Me,samples:Math.max(4,he.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gn.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||N;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(I),ee=T.getClearAlpha(),ee<1&&T.setClearColor(16777215,.5),T.clear(),de&&De.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),oe===!0&&Te.setGlobalState(T.clippingPlanes,r),ct(e,n,r),G.updateMultisampleRenderTarget(a),G.updateRenderTargetMipmap(a),me.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,lt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(G.updateMultisampleRenderTarget(a),G.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(I,ee),d!==void 0&&(r.viewport=d),T.toneMapping=u}function ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&lt(o,t,n,s,l,c)}}function lt(e,t,n,r,i,a){e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function ut(e,t,n){t.isScene!==!0&&(t=V);let r=W.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=xe.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=xe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=_e.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,qe),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return ft(e,s),d}else s.uniforms=xe.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=xe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Te.uniform),ft(e,s),r.needsLights=gt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=jc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ft(e,t){let n=W.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function pt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function mt(e,t,n,r,i){t.isScene!==!0&&(t=V),G.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=A===null?T.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Gn.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=_e.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=W.get(r),y=x.state.lights;if(oe===!0&&(se===!0||e!==M)){let t=e===M&&r.id===j;Te.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Te.numPlanes||v.numIntersection!==Te.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=ut(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(U.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==j&&(j=r.id,w=!0),v.needsLights){let e=pt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||M!==e){U.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(H,`projectionMatrix`,e.projectionMatrix),O.setValue(H,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(H,le.setFromMatrixPosition(e.matrixWorld)),he.logarithmicDepthBuffer&&O.setValue(H,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(H,`isOrthographic`,e.isOrthographicCamera===!0),M!==e&&(M=e,w=!0,E=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&O.setValue(H,`directionalShadowMap`,y.state.directionalShadowMap,G),y.state.spotShadowMap.length>0&&O.setValue(H,`spotShadowMap`,y.state.spotShadowMap,G),y.state.pointShadowMap.length>0&&O.setValue(H,`pointShadowMap`,y.state.pointShadowMap,G)),i.isSkinnedMesh){O.setOptional(H,i,`bindMatrix`),O.setOptional(H,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(H,`boneTexture`,e.boneTexture,G))}i.isBatchedMesh&&(O.setOptional(H,i,`batchingTexture`),O.setValue(H,`batchingTexture`,i._matricesTexture,G),O.setOptional(H,i,`batchingIdTexture`),O.setValue(H,`batchingIdTexture`,i._indirectTexture,G),O.setOptional(H,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(H,`batchingColorTexture`,i._colorsTexture,G));let N=n.morphAttributes;if((N.position!==void 0||N.normal!==void 0||N.color!==void 0)&&Oe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(H,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Ql()),w){if(O.setValue(H,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ht(k,E),a&&r.fog===!0&&Se.refreshFogUniforms(k,a),Se.refreshMaterialUniforms(k,r,R,te,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}jc.upload(H,dt(v),k,G)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(jc.upload(H,dt(v),k,G),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(H,`center`,i.center),O.setValue(H,`modelViewMatrix`,i.modelViewMatrix),O.setValue(H,`normalMatrix`,i.normalMatrix),O.setValue(H,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Fe.update(n,S),Fe.bind(n,S)}}return S}function ht(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function gt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(e,t,n){let r=W.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),W.get(e.texture).__webglTexture=t,W.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=W.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let _t=H.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){A=e,O=t,k=n;let r=null,i=!1,a=!1;if(e){let o=W.get(e);if(o.__useDefaultFramebuffer!==void 0){U.bindFramebuffer(H.FRAMEBUFFER,o.__webglFramebuffer),N.copy(e.viewport),P.copy(e.scissor),F=e.scissorTest,U.viewport(N),U.scissor(P),U.setScissorTest(F),j=-1;return}else if(o.__webglFramebuffer===void 0)G.setupRenderTarget(e);else if(o.__hasExternalTextures)G.rebindTextures(e,W.get(e.texture).__webglTexture,W.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&W.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);G.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=W.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&G.useMultisampledRTT(e)===!1?W.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,N.copy(e.viewport),P.copy(e.scissor),F=e.scissorTest}else N.copy(B).multiplyScalar(R).floor(),P.copy(re).multiplyScalar(R).floor(),F=ie;if(n!==0&&(r=_t),U.bindFramebuffer(H.FRAMEBUFFER,r)&&U.drawBuffers(e,r),U.viewport(N),U.scissor(P),U.setScissorTest(F),i){let r=W.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=W.get(e.textures[t]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=W.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,t.__webglTexture,n)}j=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){q(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=W.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){U.bindFramebuffer(H.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s),!he.textureFormatReadable(c)){q(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!he.textureTypeReadable(l)){q(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&H.readPixels(t,n,r,i,je.convert(c),je.convert(l),a)}finally{let e=A===null?null:W.get(A).__webglFramebuffer;U.bindFramebuffer(H.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=W.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){U.bindFramebuffer(H.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s),!he.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!he.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,d),H.bufferData(H.PIXEL_PACK_BUFFER,a.byteLength,H.STREAM_READ),H.readPixels(t,n,r,i,je.convert(l),je.convert(u),0);let f=A===null?null:W.get(A).__webglFramebuffer;U.bindFramebuffer(H.FRAMEBUFFER,f);let p=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await ln(H,p,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,d),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,a),H.deleteBuffer(d),H.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;G.setTexture2D(e,0),H.copyTexSubImage2D(H.TEXTURE_2D,n,0,0,o,s,i,a),U.unbindTexture()};let vt=H.createFramebuffer(),yt=H.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=je.convert(t.format),_=je.convert(t.type),v;t.isData3DTexture?(G.setTexture3D(t,0),v=H.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(G.setTexture2DArray(t,0),v=H.TEXTURE_2D_ARRAY):(G.setTexture2D(t,0),v=H.TEXTURE_2D),U.activeTexture(H.TEXTURE0),U.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,t.flipY),U.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),U.pixelStorei(H.UNPACK_ALIGNMENT,t.unpackAlignment);let y=U.getParameter(H.UNPACK_ROW_LENGTH),b=U.getParameter(H.UNPACK_IMAGE_HEIGHT),x=U.getParameter(H.UNPACK_SKIP_PIXELS),S=U.getParameter(H.UNPACK_SKIP_ROWS),C=U.getParameter(H.UNPACK_SKIP_IMAGES);U.pixelStorei(H.UNPACK_ROW_LENGTH,h.width),U.pixelStorei(H.UNPACK_IMAGE_HEIGHT,h.height),U.pixelStorei(H.UNPACK_SKIP_PIXELS,l),U.pixelStorei(H.UNPACK_SKIP_ROWS,u),U.pixelStorei(H.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=W.get(e),r=W.get(t),h=W.get(n.__renderTarget),g=W.get(r.__renderTarget);U.bindFramebuffer(H.READ_FRAMEBUFFER,h.__webglFramebuffer),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,W.get(e).__webglTexture,i,d+n),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,W.get(t).__webglTexture,a,m+n)),H.blitFramebuffer(l,u,o,s,f,p,o,s,H.DEPTH_BUFFER_BIT,H.NEAREST);U.bindFramebuffer(H.READ_FRAMEBUFFER,null),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||W.has(e)){let n=W.get(e),r=W.get(t);U.bindFramebuffer(H.READ_FRAMEBUFFER,vt),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,yt);for(let e=0;e<c;e++)w?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,n.__webglTexture,i),T?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,r.__webglTexture,a),i===0?T?H.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):H.copyTexSubImage2D(v,a,f,p,l,u,o,s):H.blitFramebuffer(l,u,o,s,f,p,o,s,H.COLOR_BUFFER_BIT,H.NEAREST);U.bindFramebuffer(H.READ_FRAMEBUFFER,null),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?H.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h);U.pixelStorei(H.UNPACK_ROW_LENGTH,y),U.pixelStorei(H.UNPACK_IMAGE_HEIGHT,b),U.pixelStorei(H.UNPACK_SKIP_PIXELS,x),U.pixelStorei(H.UNPACK_SKIP_ROWS,S),U.pixelStorei(H.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&H.generateMipmap(v),U.unbindTexture()},this.initRenderTarget=function(e){W.get(e).__webglFramebuffer===void 0&&G.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?G.setTextureCube(e,0):e.isData3DTexture?G.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?G.setTexture2DArray(e,0):G.setTexture2D(e,0),U.unbindTexture()},this.resetState=function(){O=0,k=0,A=null,U.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Gn._getDrawingBufferColorSpace(e),t.unpackColorSpace=Gn._getUnpackColorSpace()}},eu={type:`change`},tu={type:`start`},nu={type:`end`},ru=new Ji,iu=new ma,au=Math.cos(70*Ln.DEG2RAD),ou=new X,su=2*Math.PI,cu={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},lu=1e-6,uu=class extends Fo{constructor(e,t=null){super(e,t),this.state=cu.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:Se.ROTATE,MIDDLE:Se.DOLLY,RIGHT:Se.PAN},this.touches={ONE:Ce.ROTATE,TWO:Ce.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Rn,this._lastTargetPosition=new X,this._quat=new Rn().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Po,this._sphericalDelta=new Po,this._scale=1,this._panOffset=new X,this._rotateStart=new Y,this._rotateEnd=new Y,this._rotateDelta=new Y,this._panStart=new Y,this._panEnd=new Y,this._panDelta=new Y,this._dollyStart=new Y,this._dollyEnd=new Y,this._dollyDelta=new Y,this._dollyDirection=new X,this._mouse=new Y,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fu.bind(this),this._onPointerDown=du.bind(this),this._onPointerUp=pu.bind(this),this._onContextMenu=bu.bind(this),this._onMouseWheel=gu.bind(this),this._onKeyDown=_u.bind(this),this._onTouchStart=vu.bind(this),this._onTouchMove=yu.bind(this),this._onMouseDown=mu.bind(this),this._onMouseMove=hu.bind(this),this._interceptControlDown=xu.bind(this),this._interceptControlUp=Su.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=``}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(eu),this.update(),this.state=cu.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;ou.copy(t).sub(this.target),ou.applyQuaternion(this._quat),this._spherical.setFromVector3(ou),this.autoRotate&&this.state===cu.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=su:n>Math.PI&&(n-=su),r<-Math.PI?r+=su:r>Math.PI&&(r-=su),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(ou.setFromSpherical(this._spherical),ou.applyQuaternion(this._quatInverse),t.copy(this.target).add(ou),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=ou.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new X(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new X(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=ou.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(ru.origin.copy(this.object.position),ru.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ru.direction))<au?this.object.lookAt(this.target):(iu.setFromNormalAndCoplanarPoint(this.object.up,this.target),ru.intersectPlane(iu,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>lu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>lu||this._lastTargetPosition.distanceToSquared(this.target)>lu?(this.dispatchEvent(eu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?su/60/60*this.autoRotateSpeed:su/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ou.setFromMatrixColumn(t,0),ou.multiplyScalar(-e),this._panOffset.add(ou)}_panUp(e,t){this.screenSpacePanning===!0?ou.setFromMatrixColumn(t,1):(ou.setFromMatrixColumn(t,0),ou.crossVectors(this.object.up,ou)),ou.multiplyScalar(e),this._panOffset.add(ou)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;ou.copy(r).sub(this.target);let i=ou.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(su*this._rotateDelta.x/t.clientHeight),this._rotateUp(su*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(su*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-su*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(su*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-su*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(su*this._rotateDelta.x/t.clientHeight),this._rotateUp(su*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Y,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function du(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function fu(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function pu(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(nu),this.state=cu.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function mu(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=cu.DOLLY;break;case Se.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=cu.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=cu.ROTATE}break;case Se.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=cu.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=cu.PAN}break;default:this.state=cu.NONE}this.state!==cu.NONE&&this.dispatchEvent(tu)}function hu(e){switch(this.state){case cu.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case cu.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case cu.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function gu(e){this.enabled===!1||this.enableZoom===!1||this.state!==cu.NONE||(e.preventDefault(),this.dispatchEvent(tu),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(nu))}function _u(e){this.enabled!==!1&&this._handleKeyDown(e)}function vu(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Ce.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=cu.TOUCH_ROTATE;break;case Ce.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=cu.TOUCH_PAN;break;default:this.state=cu.NONE}break;case 2:switch(this.touches.TWO){case Ce.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=cu.TOUCH_DOLLY_PAN;break;case Ce.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=cu.TOUCH_DOLLY_ROTATE;break;default:this.state=cu.NONE}break;default:this.state=cu.NONE}this.state!==cu.NONE&&this.dispatchEvent(tu)}function yu(e){switch(this._trackPointer(e),this.state){case cu.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case cu.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case cu.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case cu.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=cu.NONE}}function bu(e){this.enabled!==!1&&e.preventDefault()}function xu(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Su(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Cu=new X;function wu(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;Cu.copy(t),Cu[r]=0,Cu.normalize();let l=.5*o/(o+s),u=1-Cu.angleTo(e)/c;return Math.sign(Cu[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Tu=class e extends Ca{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new X,c=new X,l=new X(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new X,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=wu(m,c,`z`,`y`,i,n),f[a+1]=1-wu(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-wu(m,c,`z`,`y`,i,n),f[a+1]=1-wu(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-wu(m,c,`x`,`z`,i,e),f[a+1]=wu(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-wu(m,c,`x`,`z`,i,e),f[a+1]=1-wu(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-wu(m,c,`x`,`y`,i,e),f[a+1]=1-wu(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=wu(m,c,`x`,`y`,i,e),f[a+1]=1-wu(m,c,`y`,`x`,i,t);break}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function Eu(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function Du(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var Ou={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},ku={duration:.5,overwrite:!1,delay:0},Au,ju,Mu,Nu=1e8,Pu=1/Nu,Fu=Math.PI*2,Iu=Fu/4,Lu=0,Ru=Math.sqrt,zu=Math.cos,Bu=Math.sin,Vu=function(e){return typeof e==`string`},Hu=function(e){return typeof e==`function`},Uu=function(e){return typeof e==`number`},Wu=function(e){return e===void 0},Gu=function(e){return typeof e==`object`},Ku=function(e){return e!==!1},qu=function(){return typeof window<`u`},Ju=function(e){return Hu(e)||Vu(e)},Yu=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},Xu=Array.isArray,Zu=/random\([^)]+\)/g,Qu=/,\s*/g,$u=/(?:-?\.?\d|\.)+/gi,ed=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,td=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,rd=/[+-]=-?[.\d]+/,id=/[^,'"\[\]\s]+/gi,ad=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,od,sd,cd,ld,ud={},dd={},fd,pd=function(e){return(dd=Gd(e,ud))&&dm},md=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},hd=function(e,t){return!t&&console.warn(e)},gd=function(e,t){return e&&(ud[e]=t)&&dd&&(dd[e]=t)||ud},_d=function(){return 0},vd={suppressEvents:!0,isStart:!0,kill:!1},yd={suppressEvents:!0,kill:!1},bd={suppressEvents:!0},xd={},Sd=[],Cd={},wd,Td={},Ed={},Dd=30,Od=[],kd=``,Ad=function(e){var t=e[0],n,r;if(Gu(t)||Hu(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Od.length;r--&&!Od[r].targetTest(t););n=Od[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new xp(e[r],n)))||e.splice(r,1);return e},jd=function(e){return e._gsap||Ad(kf(e))[0]._gsap},Md=function(e,t,n){return(n=e[t])&&Hu(n)?e[t]():Wu(n)&&e.getAttribute&&e.getAttribute(t)||n},Nd=function(e,t){return(e=e.split(`,`)).forEach(t)||e},Pd=function(e){return Math.round(e*1e5)/1e5||0},Fd=function(e){return Math.round(e*1e7)/1e7||0},Id=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},Ld=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Rd=function(){var e=Sd.length,t=Sd.slice(0),n,r;for(Cd={},Sd.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},zd=function(e){return!!(e._initted||e._startAt||e.add)},Bd=function(e,t,n,r){Sd.length&&!ju&&Rd(),e.render(t,n,r||!!(ju&&t<0&&zd(e))),Sd.length&&!ju&&Rd()},Vd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(id).length<2?t:Vu(e)?e.trim():e},Hd=function(e){return e},Ud=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Wd=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},Gd=function(e,t){for(var n in t)e[n]=t[n];return e},Kd=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=Gu(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},qd=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Jd=function(e){var t=e.parent||od,n=e.keyframes?Wd(Xu(e.keyframes)):Ud;if(Ku(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Yd=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Xd=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Zd=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},Qd=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},$d=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ef=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},tf=function(e,t,n,r){return e._startAt&&(ju?e._startAt.revert(yd):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},nf=function e(t){return!t||t._ts&&e(t.parent)},rf=function(e){return e._repeat?af(e._tTime,e=e.duration()+e._rDelay)*e:0},af=function(e,t){var n=Math.floor(e=Fd(e/t));return e&&n===e?n-1:n},of=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},sf=function(e){return e._end=Fd(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pu)||0))},cf=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Fd(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),sf(e),n._dirty||$d(n,e)),e},lf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=of(e.rawTime(),t),(!t._dur||Cf(0,t.totalDuration(),n)-t._tTime>Pu)&&t.render(n,!0)),$d(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Pu}},uf=function(e,t,n,r){return t.parent&&Qd(t),t._start=Fd((Uu(n)?n:n||e!==od?bf(e,n,t):e._time)+t._delay),t._end=Fd(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Xd(e,t,`_first`,`_last`,e._sort?`_start`:0),mf(t)||(e._recent=t),r||lf(e,t),e._ts<0&&cf(e,e._tTime),e},df=function(e,t){return(ud.ScrollTrigger||md(`scrollTrigger`,t))&&ud.ScrollTrigger.create(t,e)},ff=function(e,t,n,r,i){if(Ap(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!ju&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&wd!==sp.frame)return Sd.push(e),e._lazy=[i,r],1},pf=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},mf=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},hf=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&pf(e)&&!(!e._initted&&mf(e))||(e._ts<0||e._dp._ts<0)&&!mf(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=Cf(0,e._tDur,t),l=af(s,o),e._yoyo&&l&1&&(a=1-a),l!==af(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||ju||r||e._zTime===Pu||!t&&e._zTime){if(!e._initted&&ff(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?Pu:0),n||=t&&!u,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&tf(e,t,n,!0),e._onUpdate&&!n&&Kf(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&Kf(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Qd(e,1),!n&&!ju&&(Kf(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},gf=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},_f=function(e,t,n,r){var i=e._repeat,a=Fd(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:Fd(a*(i+1)+e._rDelay*i):a,o>0&&!r&&cf(e,e._tTime=e._tDur*o),e.parent&&sf(e),n||$d(e.parent,e),e},vf=function(e){return e instanceof Cp?$d(e):_f(e,e._dur)},yf={_start:0,endTime:_d,totalDuration:_d},bf=function e(t,n,r){var i=t.labels,a=t._recent||yf,o=t.duration()>=Nu?a.endTime(!1):t._dur,s,c,l;return Vu(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(Xu(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},xf=function(e,t,n){var r=Uu(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=Ku(s.vars.inherit)&&s.parent;a.immediateRender=Ku(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new Lp(t[0],a,t[i+1])},Sf=function(e,t){return e||e===0?t(e):t},Cf=function(e,t,n){return n<e?e:n>t?t:n},wf=function(e,t){return!Vu(e)||!(t=ad.exec(e))?``:t[1]},Tf=function(e,t,n){return Sf(n,function(n){return Cf(e,t,n)})},Ef=[].slice,Df=function(e,t){return e&&Gu(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&Gu(e[0]))&&!e.nodeType&&e!==sd},Of=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return Vu(e)&&!t||Df(e,1)?(r=n).push.apply(r,kf(e)):n.push(e)})||n},kf=function(e,t,n){return Mu&&!t&&Mu.selector?Mu.selector(e):Vu(e)&&!n&&(cd||!cp())?Ef.call((t||ld).querySelectorAll(e),0):Xu(e)?Of(e,n):Df(e)?Ef.call(e,0):e?[e]:[]},Af=function(e){return e=kf(e)[0]||hd(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return kf(t,n.querySelectorAll?n:n===e?hd(`Invalid scope`)||ld.createElement(`div`):e)}},jf=function(e){return e.sort(function(){return .5-Math.random()})},Mf=function(e){if(Hu(e))return e;var t=Gu(e)?e:{each:e},n=gp(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return Vu(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,Nu])[1],!S){for(b=-Nu;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===Nu?0:s?f*u/S-.5:r/S|0,b=0,x=Nu,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):Ru(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&jf(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=wf(t.amount||t.each)||0,n=n&&f<0?hp(n):n}return f=(p[e]-p.min)/p.max||0,Fd(p.b+(n?n(f):f)*p.v)+p.u}},Nf=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=Fd(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Uu(n)?0:wf(n))}},Pf=function(e,t){var n=Xu(e),r,i;return!n&&Gu(e)&&(r=n=e.radius||Nu,e.values?(e=kf(e.values),(i=!Uu(e[0]))&&(r*=r)):e=Nf(e.increment)),Sf(t,n?Hu(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=Nu,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||Uu(t)?s:s+wf(t)}:Nf(e))},Ff=function(e,t,n,r){return Sf(Xu(e)?!t:n===!0?!!(n=0):!r,function(){return Xu(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},If=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},Lf=function(e,t){return function(n){return e(parseFloat(n))+(t||wf(n))}},Rf=function(e,t,n){return Uf(e,t,0,1,n)},zf=function(e,t,n){return Sf(n,function(n){return e[~~t(n)]})},Bf=function e(t,n,r){var i=n-t;return Xu(t)?zf(t,e(0,t.length),n):Sf(r,function(e){return(i+(e-t)%i)%i+t})},Vf=function e(t,n,r){var i=n-t,a=i*2;return Xu(t)?zf(t,e(0,t.length-1),n):Sf(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},Hf=function(e){return e.replace(Zu,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(Qu);return Ff(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},Uf=function(e,t,n,r,i){var a=t-e,o=r-n;return Sf(i,function(t){return n+((t-e)/a*o||0)})},Wf=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=Vu(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(Xu(t)&&!Xu(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=Gd(Xu(t)?[]:{},t));if(!u){for(c in n)Tp.call(s,t,c,`get`,n[c]);a=function(e){return Kp(e,s)||(o?t.p:t)}}}return Sf(r,a)},Gf=function(e,t,n){var r=e.labels,i=Nu,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},Kf=function(e,t,n){var r=e.vars,i=r[t],a=Mu,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&Sd.length&&Rd(),o&&(Mu=o),l=s?i.apply(c,s):i.call(c),Mu=a,l},qf=function(e){return Qd(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ju),e.progress()<1&&Kf(e,`onInterrupt`),e},Jf,Yf=[],Xf=function(e){if(e)if(e=!e.name&&e.default||e,qu()||e.headless){var t=e.name,n=Hu(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:_d,render:Kp,add:Tp,kill:Jp,modifier:qp,rawVars:0},a={targetTest:0,get:0,getSetter:Hp,aliases:{},register:0};if(cp(),e!==r){if(Td[t])return;Ud(r,Ud(qd(e,i),a)),Gd(r.prototype,Gd(i,qd(e,a))),Td[r.prop=t]=r,e.targetTest&&(Od.push(r),xd[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}gd(t,r),e.register&&e.register(dm,r,Zp)}else Yf.push(e)},Zf=255,Qf={aqua:[0,Zf,Zf],lime:[0,Zf,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Zf],navy:[0,0,128],white:[Zf,Zf,Zf],olive:[128,128,0],yellow:[Zf,Zf,0],orange:[Zf,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Zf,0,0],pink:[Zf,192,203],cyan:[0,Zf,Zf],transparent:[Zf,Zf,Zf,0]},$f=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Zf+.5|0},ep=function(e,t,n){var r=e?Uu(e)?[e>>16,e>>8&Zf,e&Zf]:0:Qf.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),Qf[e])r=Qf[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Zf,r&Zf,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Zf,e&Zf]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match($u),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=$f(s+1/3,i,a),r[1]=$f(s,i,a),r[2]=$f(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(ed),n&&r.length<4&&(r[3]=1),r}else r=e.match($u)||Qf.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/Zf,a=r[1]/Zf,o=r[2]/Zf,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},tp=function(e){var t=[],n=[],r=-1;return e.split(rp).forEach(function(e){var i=e.match(td)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},np=function(e,t,n){var r=``,i=(e+r).match(rp),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=ep(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=tp(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(rp,`1`).split(td),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(rp),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},rp=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in Qf)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),ip=/hsl[a]?\(/,ap=function(e){var t=e.join(` `),n;if(rp.lastIndex=0,rp.test(t))return n=ip.test(t),e[1]=np(e[1],n),e[0]=np(e[0],n,tp(e[1])),!0},op,sp=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){fd&&(!cd&&qu()&&(sd=cd=window,ld=sd.document||{},ud.gsap=dm,(sd.gsapVersions||=[]).push(dm.version),pd(dd||sd.GreenSockGlobals||!sd.gsap&&sd||{}),Yf.forEach(Xf)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},op=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),op=0,l=_d},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),cp(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),cp=function(){return!op&&sp.wake()},lp={},up=/^[\d.\-M][\d.\-,\s]/,dp=/["']/g,fp=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(dp,``).trim():+c,r=s.substr(o+1).trim();return t},pp=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},mp=function(e){var t=(e+``).split(`(`),n=lp[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[fp(t[1])]:pp(e).split(`,`).map(Vd)):lp._CE&&up.test(e)?lp._CE(``,e):n},hp=function(e){return function(t){return 1-e(1-t)}},gp=function(e,t){return e&&(Hu(e)?e:lp[e]||mp(e))||t},_p=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return Nd(e,function(e){for(var t in lp[e]=ud[e]=i,lp[a=e.toLowerCase()]=n,i)lp[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=lp[e+`.`+t]=i[t]}),i},vp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},yp=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/Fu*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*Bu((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:vp(s);return a=Fu/a,c.config=function(n,r){return e(t,n,r)},c},bp=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:vp(r);return i.config=function(n){return e(t,n)},i};Nd(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;_p(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),lp.Linear.easeNone=lp.none=lp.Linear.easeIn,_p(`Elastic`,yp(`in`),yp(`out`),yp()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};_p(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),_p(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),_p(`Circ`,function(e){return-(Ru(1-e*e)-1)}),_p(`Sine`,function(e){return e===1?1:-zu(e*Iu)+1}),_p(`Back`,bp(`in`),bp(`out`),bp()),lp.SteppedEase=lp.steps=ud.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-Pu;return function(e){return((r*Cf(0,a,e)|0)+i)*n}}},ku.ease=lp[`quad.out`],Nd(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return kd+=e+`,`+e+`Params,`});var xp=function(e,t){this.id=Lu++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Md,this.set=t?t.getSetter:Hp},Sp=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,_f(this,+e.duration,1,1),this.data=e.data,Mu&&(this._ctx=Mu,Mu.data.push(this)),op||sp.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,_f(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(cp(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(cf(this,e),!n._dp||n.parent||lf(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&uf(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===Pu||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),Bd(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+rf(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+rf(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?af(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-Pu?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?of(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-Pu?0:this._rts,this.totalTime(Cf(-Math.abs(this._delay),this.totalDuration(),n),t!==!1),sf(this),ef(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(cp(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pu&&(this._tTime-=Pu)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=Fd(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&uf(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(Ku(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?of(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=bd);var t=ju;return ju=e,zd(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),ju=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,vf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,vf(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(bf(this,e),Ku(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,Ku(t)),this._dur||(this._zTime=-Pu),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-Pu:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pu,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-Pu)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=Hu(e)?e:Hd,a=function(){var e=t.then;t.then=null,n&&n(),Hu(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){qf(this)},e}();Ud(Sp.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pu,_prom:0,_ps:!1,_rts:1});var Cp=function(e){Du(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=Ku(t.sortChildren),od&&uf(t.parent||od,Eu(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&df(Eu(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return xf(0,arguments,this),this},n.from=function(e,t,n){return xf(1,arguments,this),this},n.fromTo=function(e,t,n,r){return xf(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,Jd(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new Lp(e,t,bf(this,n),1),this},n.call=function(e,t,n){return uf(this,Lp.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new Lp(e,n,bf(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,Jd(n).immediateRender=Ku(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,Jd(r).immediateRender=Ku(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:Fd(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==od&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=Fd(o%f),o===i?(d=this._repeat,c=a):(_=Fd(o/f),d=~~_,d&&d===_&&(c=a,d--),c>a&&(c=a)),_=af(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:Fd(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&Kf(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,_=d),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=gf(this,Fd(r),Fd(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!_&&(Kf(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-Pu);break}}l=u}else{l=this._last;for(var S=e<0?e:c;l;){if(u=l._prev,(l._act||S<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(S-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(S-l._start)*l._ts,t,n||ju&&zd(l)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=S?-Pu:Pu);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-Pu)._zTime=c>=r?1:-1,this._ts))return this._start=g,sf(this),this.render(e,t,n);this._onUpdate&&!t&&Kf(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g===this._start||Math.abs(h)!==Math.abs(this._ts))&&(this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&Qd(this,1),!t&&!(e<0&&!r)&&(o||r||!i)&&(Kf(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(Uu(t)||(t=bf(this,t,e)),!(e instanceof Sp)){if(Xu(e))return e.forEach(function(e){return n.add(e,t)}),this;if(Vu(e))return this.addLabel(e,t);if(Hu(e))e=Lp.delayedCall(0,e);else return this}return this===e?this:uf(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-Nu);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof Lp?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return Vu(e)?this.removeLabel(e):Hu(e)?this.killTweensOf(e):(e.parent===this&&Zd(this,e),e===this._recent&&(this._recent=this._last),$d(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Fd(sp.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=bf(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=Lp.delayedCall(0,t||_d,n);return r.data=`isPause`,this._hasPause=1,uf(this,r,bf(this,e))},n.removePause=function(e){var t=this._first;for(e=bf(this,e);t;)t._start===e&&t.data===`isPause`&&Qd(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)Op!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=kf(e),i=this._first,a=Uu(t),o;i;)i instanceof Lp?Ld(i._targets,r)&&(a?(!Op||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=bf(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=Lp.to(n,Ud({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||Pu,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&_f(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,Ud({startAt:{time:bf(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),Gf(this,bf(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),Gf(this,bf(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+Pu)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=Fd(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return $d(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),$d(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=Nu,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,uf(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=Fd(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;_f(n,n===od&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(od._ts&&(Bd(od,of(e,od)),wd=sp.frame),sp.frame>=Dd){Dd+=Ou.autoSleep||120;var t=od._first;if((!t||!t._ts)&&Ou.autoSleep&&sp._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||sp.sleep()}}},t}(Sp);Ud(Cp.prototype,{_lock:0,_hasPause:0,_forcing:0});var wp=function(e,t,n,r,i,a,o){var s=new Zp(this._pt,e,t,0,1,Gp,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=Hf(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(nd)||[];u=nd.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?Id(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=nd.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(rd.test(r)||g)&&(s.e=0),this._pt=s,s},Tp=function(e,t,n,r,i,a,o,s,c,l){Hu(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?Hu(u)?c?e[t.indexOf(`set`)||!Hu(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=Hu(u)?c?Bp:zp:Rp,p;if(Vu(r)&&(~r.indexOf(`random(`)&&(r=Hf(r)),r.charAt(1)===`=`&&(p=Id(d,r)+(wf(d)||0),(p||p===0)&&(r=p))),!l||d!==r||kp)return!isNaN(d*r)&&r!==``?(p=new Zp(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?Wp:Up,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&md(t,r),wp.call(this,e,t,d,r,f,s||Ou.stringFilter,c))},Ep=function(e,t,n,r,i){if(Hu(e)&&(e=Pp(e,i,t,n,r)),!Gu(e)||e.style&&e.nodeType||Xu(e)||Yu(e))return Vu(e)?Pp(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=Pp(e[o],i,t,n,r);return a},Dp=function(e,t,n,r,i,a){var o,s,c,l;if(Td[e]&&(o=new Td[e]).init(i,o.rawVars?t[e]:Ep(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new Zp(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==Jf))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},Op,kp,Ap=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!Au,b=t.timeline,x=i.easeReverse||d,S,C,w,T,E,D,O,k,A,j,M,N,P;if(b&&(!f||!a)&&(a=`none`),t._ease=gp(a,ku.ease),t._rEase=x&&(gp(x)||t._ease),t._from=!b&&!!i.runBackwards,t._from&&(t.ratio=1),!b||f&&!i.stagger){if(k=g[0]?jd(g[0]).harness:0,N=k&&i[k.prop],S=qd(i,xd),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?yd:vd),h._lazy=0),o){if(Qd(t._startAt=Lp.set(g,Ud({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&Ku(c),startAt:null,delay:0,onUpdate:l&&function(){return Kf(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(ju||!s&&!p)&&t._startAt.revert(yd),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),w=Ud({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&Ku(c),immediateRender:s,stagger:0,parent:_},S),N&&(w[k.prop]=N),Qd(t._startAt=Lp.set(g,w)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(ju?t._startAt.revert(yd):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,Pu,Pu);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&Ku(c)||c&&!m,C=0;C<g.length;C++){if(E=g[C],O=E._gsap||Ad(g)[C]._gsap,t._ptLookup[C]=j={},Cd[O.id]&&Sd.length&&Rd(),M=v===g?C:v.indexOf(E),k&&(A=new k).init(E,N||S,t,M,v)!==!1&&(t._pt=T=new Zp(t._pt,E,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(e){j[e]=T}),A.priority&&(D=1)),!k||N)for(w in S)Td[w]&&(A=Dp(w,S,t,M,E,v))?A.priority&&(D=1):j[w]=T=Tp.call(t,E,w,`get`,S[w],M,v,0,i.stringFilter);t._op&&t._op[C]&&t.kill(E,t._op[C]),y&&t._pt&&(Op=t,od.killTweensOf(E,j,t.globalTime(n)),P=!t.parent,Op=0),t._pt&&c&&(Cd[O.id]=1)}D&&Xp(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!P,f&&n<=0&&b.render(Nu,!0,!0)},jp=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return kp=1,e.vars[t]=`+=0`,Ap(e,o),kp=0,s?hd(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&=Pd(n)+wf(u.e),u.b&&=l.s+wf(u.b)},Mp=function(e,t){var n=e[0]?jd(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=Gd({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},Np=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(Xu(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},Pp=function(e,t,n,r,i){return Hu(e)?e.call(t,n,r,i):Vu(e)&&~e.indexOf(`random(`)?Hf(e):e},Fp=kd+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,Ip={};Nd(Fp+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return Ip[e]=1});var Lp=function(e){Du(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:Jd(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=n.parent||od,g=(Xu(t)||Yu(t)?Uu(t[0]):`length`in n)?[t]:kf(t),_,v,y,b,x,S,C,w;if(a._targets=g.length?Ad(g):hd(`GSAP target `+t+` not found. https://gsap.com`,!Ou.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||Ju(s)||Ju(c)){n=a.vars;var T=n.easeReverse||n.yoyoEase;if(_=a.timeline=new Cp({data:`nested`,defaults:p||{},targets:h&&h.data===`nested`?h.vars.targets:g}),_.kill(),_.parent=_._dp=Eu(a),_._start=0,u||Ju(s)||Ju(c)){if(b=g.length,C=u&&Mf(u),Gu(u))for(x in u)~Fp.indexOf(x)&&(w||={},w[x]=u[x]);for(v=0;v<b;v++)y=qd(n,Ip),y.stagger=0,T&&(y.easeReverse=T),w&&Gd(y,w),S=g[v],y.duration=+Pp(s,Eu(a),v,S,g),y.delay=(+Pp(c,Eu(a),v,S,g)||0)-a._delay,!u&&b===1&&y.delay&&(a._delay=c=y.delay,a._start+=c,y.delay=0),_.to(S,y,C?C(v,S,g):0),_._ease=lp.none;_.duration()?s=c=0:a.timeline=0}else if(f){Jd(Ud(_.vars.defaults,{ease:`none`})),_._ease=gp(f.ease||n.ease||`none`);var E=0,D,O,k;if(Xu(f))f.forEach(function(e){return _.to(g,e,`>`)}),_.duration();else{for(x in y={},f)x===`ease`||x===`easeEach`||Np(x,f[x],y,f.easeEach);for(x in y)for(D=y[x].sort(function(e,t){return e.t-t.t}),E=0,v=0;v<D.length;v++)O=D[v],k={ease:O.e,duration:(O.t-(v?D[v-1].t:0))/100*s},k[x]=O.v,_.to(g,k,E),E+=k.duration;_.duration()<s&&_.to({},{duration:s-_.duration()})}}s||a.duration(s=_.duration())}else a.timeline=0;return d===!0&&!Au&&(Op=Eu(a),od.killTweensOf(g),Op=0),uf(h,Eu(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===Fd(h._time)&&Ku(l)&&nf(Eu(a))&&h.data!==`nested`)&&(a._tTime=-Pu,a.render(Math.max(0,-c)||0)),m&&df(Eu(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-Pu&&!o?i:e<Pu?0:e,c,l,u,d,f,p,m,h;if(!a)hf(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=Fd(s%d),s===i?(u=this._repeat,c=a):(f=Fd(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(c=a-c),f=af(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(Fd(d*u),!0).invalidate()._lock=0)}if(!this._initted){if(ff(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var g=c<r;if(g!==this._inv){var _=g?r:a-r;this._inv=g,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=_?(g?-1:1)/_:0,this._invScale=g?-this.ratio:1-this.ratio,this._invEase=g?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(c/a);if(this._from&&(this.ratio=m=1-m),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!f&&(Kf(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&tf(this,e,t,n),Kf(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&Kf(this,`onRepeat`),(s===this._tDur||!s)&&this._tTime===s&&(o&&!this._onUpdate&&tf(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&Qd(this,1),!t&&!(o&&!r)&&(s||r||p)&&(Kf(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return(!t||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){op||sp.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||Ap(this,a),o=this._ease(a/this._dur),jp(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(cf(this,0),this.parent||Xd(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?qf(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ju),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,Op&&Op.vars.overwrite!==!0)._first||qf(this),this.parent&&n!==this.timeline.totalDuration()&&_f(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?kf(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&Yd(r,i))return t===`all`&&(this._pt=0),qf(this);for(s=this._op=this._op||[],t!==`all`&&(Vu(t)&&(d={},Nd(t,function(e){return d[e]=1}),t=d),t=Mp(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&((!(`kill`in f.d)||f.d.kill(d)===!0)&&Zd(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&qf(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return xf(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return xf(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return od.killTweensOf(e,t,n)},t}(Sp);Ud(Lp.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Nd(`staggerTo,staggerFrom,staggerFromTo`,function(e){Lp[e]=function(){var t=new Cp,n=Ef.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var Rp=function(e,t,n){return e[t]=n},zp=function(e,t,n){return e[t](n)},Bp=function(e,t,n,r){return e[t](r.fp,n)},Vp=function(e,t,n){return e.setAttribute(t,n)},Hp=function(e,t){return Hu(e[t])?zp:Wu(e[t])&&e.setAttribute?Vp:Rp},Up=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Wp=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Gp=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Kp=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},qp=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},Jp=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Zd(this,t,`_pt`):t.dep||(n=1),t=r;return!n},Yp=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Xp=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},Zp=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||Up,this.d=o||this,this.set=s||Rp,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=Yp,this.m=e,this.mt=n,this.tween=t},e}();Nd(kd+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return xd[e]=1}),ud.TweenMax=ud.TweenLite=Lp,ud.TimelineLite=ud.TimelineMax=Cp,od=new Cp({sortChildren:!1,defaults:ku,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),Ou.stringFilter=ap;var Qp=[],$p={},em=[],tm=0,nm=0,rm=function(e){return($p[e]||em).map(function(e){return e()})},im=function(){var e=Date.now(),t=[];e-tm>2&&(rm(`matchMediaInit`),Qp.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=sd.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),rm(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),tm=e,rm(`matchMedia`))},am=function(){function e(e,t){this.selector=t&&Af(t),this.data=[],this._r=[],this.isReverted=!1,this.id=nm++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){Hu(e)&&(n=t,t=e,e=Hu);var r=this,i=function(){var e=Mu,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=Af(n)),Mu=r,a=t.apply(r,arguments),Hu(a)&&r._r.push(a),Mu=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===Hu?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=Mu;Mu=null,e(this),Mu=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof Lp&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof Cp?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof Lp)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=Qp.length;r--;)Qp[r].id===this.id&&Qp.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),om=function(){function e(e){this.contexts=[],this.scope=e,Mu&&Mu.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){Gu(e)||(e={matches:e});var r=new am(0,n||this.scope),i=r.conditions={},a,o,s;for(o in Mu&&!r.selector&&(r.selector=Mu.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=sd.matchMedia(e[o]),a&&(Qp.indexOf(r)<0&&Qp.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(im):a.addEventListener(`change`,im)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),sm={registerPlugin:function(){[...arguments].forEach(function(e){return Xf(e)})},timeline:function(e){return new Cp(e)},getTweensOf:function(e,t){return od.getTweensOf(e,t)},getProperty:function(e,t,n,r){Vu(e)&&(e=kf(e)[0]);var i=jd(e||{}).get,a=n?Hd:Vd;return n===`native`&&(n=``),e&&(t?a((Td[t]&&Td[t].get||i)(e,t,n,r)):function(t,n,r){return a((Td[t]&&Td[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=kf(e),e.length>1){var r=e.map(function(e){return dm.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=Td[t],o=jd(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;Jf._pt=0,r.init(e,n?t+n:t,Jf,0,[e]),r.render(1,r),Jf._pt&&Kp(1,Jf)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=dm.to(e,Ud((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return od.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=gp(e.ease,ku.ease)),Kd(ku,e||{})},config:function(e){return Kd(Ou,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!Td[e]&&!ud[e]&&hd(t+` effect requires `+e+` plugin.`)}),Ed[t]=function(e,t,r){return n(kf(e),Ud(t||{},i),r)},a&&(Cp.prototype[t]=function(e,n,r){return this.add(Ed[t](e,Gu(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){lp[e]=gp(t)},parseEase:function(e,t){return arguments.length?gp(e,t):lp},getById:function(e){return od.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Cp(e),r,i;for(n.smoothChildTiming=Ku(e.smoothChildTiming),od.remove(n),n._dp=0,n._time=n._tTime=od._time,r=od._first;r;)i=r._next,(t||!(!r._dur&&r instanceof Lp&&r.vars.onComplete===r._targets[0]))&&uf(n,r,r._start-r._delay),r=i;return uf(od,n,0),n},context:function(e,t){return e?new am(e,t):Mu},matchMedia:function(e){return new om(e)},matchMediaRefresh:function(){return Qp.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||im()},addEventListener:function(e,t){var n=$p[e]||($p[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=$p[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Bf,wrapYoyo:Vf,distribute:Mf,random:Ff,snap:Pf,normalize:Rf,getUnit:wf,clamp:Tf,splitColor:ep,toArray:kf,selector:Af,mapRange:Uf,pipe:If,unitize:Lf,interpolate:Wf,shuffle:jf},install:pd,effects:Ed,ticker:sp,updateRoot:Cp.updateRoot,plugins:Td,globalTimeline:od,core:{PropTween:Zp,globals:gd,Tween:Lp,Timeline:Cp,Animation:Sp,getCache:jd,_removeLinkedListItem:Zd,reverting:function(){return ju},context:function(e){return e&&Mu&&(Mu.data.push(e),e._ctx=Mu),Mu},suppressOverwrites:function(e){return Au=e}}};Nd(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return sm[e]=Lp[e]}),sp.add(Cp.updateRoot),Jf=sm.to({},{duration:0});var cm=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},lm=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=cm(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},um=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(Vu(n)&&(r={},Nd(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}lm(e,n)}}}},dm=sm.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)ju?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},um(`roundProps`,Nf),um(`modifiers`),um(`snap`,Pf))||sm;Lp.version=Cp.version=dm.version=`3.15.0`,fd=1,qu()&&cp(),lp.Power0,lp.Power1,lp.Power2,lp.Power3,lp.Power4,lp.Linear,lp.Quad,lp.Cubic,lp.Quart,lp.Quint,lp.Strong,lp.Elastic,lp.Back,lp.SteppedEase,lp.Bounce,lp.Sine,lp.Expo,lp.Circ;var fm,pm,mm,hm,gm,_m,vm,ym=function(){return typeof window<`u`},bm={},xm=180/Math.PI,Sm=Math.PI/180,Cm=Math.atan2,wm=1e8,Tm=/([A-Z])/g,Em=/(left|right|width|margin|padding|x)/i,Dm=/[\s,\(]\S/,Om={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},km=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Am=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jm=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Mm=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Nm=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Pm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Fm=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},Im=function(e,t,n){return e.style[t]=n},Lm=function(e,t,n){return e.style.setProperty(t,n)},Rm=function(e,t,n){return e._gsap[t]=n},zm=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Bm=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},Vm=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},Hm=`transform`,Um=Hm+`Origin`,Wm=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in bm&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=Om[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=lh(i,e)}):this.tfm[t]=o.x?o[t]:lh(i,t),t===Um&&(this.tfm.zOrigin=o.zOrigin);else return Om.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(Hm)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(Um,n,``)),t=Hm}(a||n)&&this.props.push(t,n,a[t])},Gm=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},Km=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,i,a;for(i=0;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(Tm,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=vm(),(!i||!i.isStart)&&!n[Hm]&&(Gm(n),r.zOrigin&&n[Um]&&(n[Um]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},qm=function(e,t){var n={target:e,props:[],revert:Km,save:Wm};return e._gsap||dm.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},Jm,Ym=function(e,t){var n=pm.createElementNS?pm.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):pm.createElement(e);return n&&n.style?n:pm.createElement(e)},Xm=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(Tm,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,Qm(n)||n,1)||``},Zm=`O,Moz,ms,Ms,Webkit`.split(`,`),Qm=function(e,t,n){var r=(t||gm).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(Zm[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?Zm[i]:``)+e},$m=function(){ym()&&window.document&&(fm=window,pm=fm.document,mm=pm.documentElement,gm=Ym(`div`)||{style:{}},Ym(`div`),Hm=Qm(Hm),Um=Hm+`Origin`,gm.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,Jm=!!Qm(`perspective`),vm=dm.core.reverting,hm=1)},eh=function(e){var t=e.ownerSVGElement,n=Ym(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),mm.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),mm.removeChild(n),i},th=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},nh=function(e){var t,n;try{t=e.getBBox()}catch{t=eh(e),n=1}return t&&(t.width||t.height)||n||(t=eh(e)),t&&!t.width&&!t.x&&!t.y?{x:+th(e,[`x`,`cx`,`x1`])||0,y:+th(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},rh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&nh(e))},ih=function(e,t){if(t){var n=e.style,r;t in bm&&t!==Um&&(t=Hm),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(Tm,`-$1`).toLowerCase())):n.removeAttribute(t)}},ah=function(e,t,n,r,i,a){var o=new Zp(e._pt,t,n,0,1,a?Fm:Pm);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},oh={deg:1,rad:1,turn:1},sh={grid:1,flex:1},ch=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=gm.style,c=Em.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||oh[i]||oh[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&rh(t),(p||o===`%`)&&(bm[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],Pd(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===pm||!h.appendChild)&&(h=pm.body),g=h._gsap,g&&p&&g.width&&c&&g.time===sp.time&&!g.uncache)return Pd(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:ih(t,n)}else (p||o===`%`)&&!sh[Xm(h,`display`)]&&(s.position=Xm(t,`position`)),h===t&&(s.position=`static`),h.appendChild(gm),m=gm[u],h.removeChild(gm),s.position=`absolute`;return c&&p&&(g=jd(h),g.time=sp.time,g.width=h[u]),Pd(f?m*a/d:m&&a?d/m*a:0)},lh=function(e,t,n,r){var i;return hm||$m(),t in Om&&t!==`transform`&&(t=Om[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),bm[t]&&t!==`transform`?(i=xh(e,r),i=t===`transformOrigin`?i.svg?i.origin:Sh(Xm(e,Um))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=mh[t]&&mh[t](e,t,n)||Xm(e,t)||Md(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?ch(e,t,i,n)+n:i},uh=function(e,t,n,r){if(!n||n===`none`){var i=Qm(t,e,1),a=i&&Xm(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=Xm(e,`borderTopColor`))}var o=new Zp(this._pt,e.style,t,0,1,Gp),s=0,c=0,l,u,d,f,p,m,h,g,_,v,y,b;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=Xm(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(m=e.style[t],e.style[t]=r,r=Xm(e,t)||r,m?e.style[t]=m:ih(e,t)),l=[n,r],ap(l),n=l[0],r=l[1],d=n.match(td)||[],b=r.match(td)||[],b.length){for(;u=td.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,y=m.substr((f+``).length),h.charAt(1)===`=`&&(h=Id(f,h)+y),g=parseFloat(h),v=h.substr((g+``).length),s=td.lastIndex-v.length,v||(v=v||Ou.units[t]||y,s===r.length&&(r+=v,o.e+=v)),y!==v&&(f=ch(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?Fm:Pm;return rd.test(r)&&(o.e=0),this._pt=o,o},dh={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},fh=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=dh[n]||n,t[1]=dh[r]||r,t.join(` `)},ph=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],bm[o]&&(s=1,o=o===`transformOrigin`?Um:Hm),ih(n,o);s&&(ih(n,Hm),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,xh(n,1),a.uncache=1,Gm(r)))}},mh={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new Zp(e._pt,t,n,0,0,ph);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},hh=[1,0,0,1,0,0],gh={},_h=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},vh=function(e){var t=Xm(e,Hm);return _h(t)?hh:t.substr(7).match(ed).map(Pd)},yh=function(e,t){var n=e._gsap||jd(e),r=e.style,i=vh(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?hh:i):(i===hh&&!e.offsetParent&&e!==mm&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,mm.appendChild(e)),i=vh(e),s?r.display=s:ih(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):mm.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},bh=function(e,t,n,r,i,a){var o=e._gsap,s=i||yh(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==hh&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=nh(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Um]=`0px 0px`,a&&(ah(a,o,`xOrigin`,c,y),ah(a,o,`yOrigin`,l,b),ah(a,o,`xOffset`,u,o.xOffset),ah(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},xh=function(e,t){var n=e._gsap||new xp(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=Xm(e,Um)||`0`,l=u=d=m=h=g=_=v=y=0,u,d,f=p=1,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,ee,L,te,R;return n.svg=!!(e.getCTM&&rh(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[Hm]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[Hm]===`none`?``:s[Hm])),r.scale=r.rotate=r.translate=`none`),S=yh(e,n.svg),n.svg&&(n.uncache?(N=e.getBBox(),c=n.xOrigin-N.x+`px `+(n.yOrigin-N.y)+`px`,M=``):M=!t&&e.getAttribute(`data-svg-origin`),bh(e,M||c,!!M||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,x=n.yOrigin||0,S!==hh&&(E=S[0],D=S[1],O=S[2],k=S[3],l=A=S[4],u=j=S[5],S.length===6?(f=Math.sqrt(E*E+D*D),p=Math.sqrt(k*k+O*O),m=E||D?Cm(D,E)*xm:0,_=O||k?Cm(O,k)*xm+m:0,_&&(p*=Math.abs(Math.cos(_*Sm))),n.svg&&(l-=b-(b*E+x*O),u-=x-(b*D+x*k))):(R=S[6],L=S[7],F=S[8],I=S[9],ee=S[10],te=S[11],l=S[12],u=S[13],d=S[14],C=Cm(R,ee),h=C*xm,C&&(w=Math.cos(-C),T=Math.sin(-C),M=A*w+F*T,N=j*w+I*T,P=R*w+ee*T,F=A*-T+F*w,I=j*-T+I*w,ee=R*-T+ee*w,te=L*-T+te*w,A=M,j=N,R=P),C=Cm(-O,ee),g=C*xm,C&&(w=Math.cos(-C),T=Math.sin(-C),M=E*w-F*T,N=D*w-I*T,P=O*w-ee*T,te=k*T+te*w,E=M,D=N,O=P),C=Cm(D,E),m=C*xm,C&&(w=Math.cos(C),T=Math.sin(C),M=E*w+D*T,N=A*w+j*T,D=D*w-E*T,j=j*w-A*T,E=M,A=N),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=Pd(Math.sqrt(E*E+D*D+O*O)),p=Pd(Math.sqrt(j*j+R*R)),C=Cm(A,j),_=Math.abs(C)>2e-4?C*xm:0,y=te?1/(te<0?-te:te):0),n.svg&&(M=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!_h(Xm(e,Hm)),M&&e.setAttribute(`transform`,M))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t||=n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Pd(f),n.scaleY=Pd(p),n.rotation=Pd(m)+o,n.rotationX=Pd(h)+o,n.rotationY=Pd(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[Um]=Sh(c)),n.xOffset=n.yOffset=0,n.force3D=Ou.force3D,n.renderTransform=n.svg?kh:Jm?Oh:wh,n.uncache=0,n},Sh=function(e){return(e=e.split(` `))[0]+` `+e[1]},Ch=function(e,t,n){var r=wf(t);return Pd(parseFloat(t)+parseFloat(ch(e,`x`,n+`px`,r)))+r},wh=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,Oh(e,t)},Th=`0deg`,Eh=`0px`,Dh=`) `,Oh=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==Th||l!==Th)){var x=parseFloat(l)*Sm,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*Sm,w=Math.cos(x),a=Ch(_,a,S*w*-v),o=Ch(_,o,-Math.sin(x)*-v),s=Ch(_,s,C*w*-v+v)}h!==Eh&&(y+=`perspective(`+h+Dh),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==Eh||o!==Eh||s!==Eh)&&(y+=s!==Eh||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+Dh),c!==Th&&(y+=`rotate(`+c+Dh),l!==Th&&(y+=`rotateY(`+l+Dh),u!==Th&&(y+=`rotateX(`+u+Dh),(d!==Th||f!==Th)&&(y+=`skew(`+d+`, `+f+Dh),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+Dh),_.style[Hm]=y||`translate(0, 0)`},kh=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=Sm,c*=Sm,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=Sm,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=Pd(b),x=Pd(x),S=Pd(S),C=Pd(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=ch(f,`x`,a,`px`),y=ch(f,`y`,o,`px`)),(p||m||h||g)&&(v=Pd(v+p-(p*b+m*S)+h),y=Pd(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=Pd(v+r/100*w.width),y=Pd(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[Hm]=w)},Ah=function(e,t,n,r,i){var a=360,o=Vu(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?xm:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*wm)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*wm)%a-~~(s/a)*a)),e._pt=u=new Zp(e._pt,t,n,r,s,Am),u.e=c,u.u=`deg`,e._props.push(n),u},jh=function(e,t){for(var n in t)e[n]=t[n];return e},Mh=function(e,t,n){var r=jh({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[Hm]=t,o=xh(n,1),ih(n,Hm),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[Hm],a[Hm]=t,o=xh(n,1),a[Hm]=c),bm)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=wf(c),p=wf(l),u=f===p?parseFloat(c):ch(n,s,c,p),d=parseFloat(l),e._pt=new Zp(e._pt,o,s,u,d-u,km),e._pt.u=p||0,e._props.push(s));jh(o,r)};Nd(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});mh[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return lh(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var Nh={name:`css`,register:$m,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;for(m in hm||$m(),this.styles=this.styles||qm(e),C=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(Td[m]&&Dp(m,t,n,r,e,i)))){if(f=typeof l,p=mh[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=Hf(l)),p)p(this,e,m,l,n)&&(S=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,rp.lastIndex=0,rp.test(c)||(h=wf(c),g=wf(l),g?h!==g&&(c=ch(e,m,c,g)+g):h&&(l+=h)),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),C.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],Vu(c)&&~c.indexOf(`random(`)&&(c=Hf(c)),wf(c+``)||c===`auto`||(c+=Ou.units[m]||wf(lh(e,m))||``),(c+``).charAt(1)===`=`&&(c=lh(e,m))):c=lh(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in Om&&(m===`autoAlpha`&&(d===1&&lh(e,`visibility`)===`hidden`&&u&&(d=0),C.push(`visibility`,0,o.visibility),ah(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=Om[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in bm,v){if(this.styles.save(m),w=l,f===`string`&&l.substring(0,6)===`var(--`){if(l=Xm(e,l.substring(4,l.indexOf(`)`))),l.substring(0,5)===`calc(`){var T=e.style.perspective;e.style.perspective=l,l=Xm(e,`perspective`),T?e.style.perspective=T:ih(e,`perspective`)}u=parseFloat(l)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||xh(e,t.parseTransform),x=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new Zp(this._pt,o,Hm,0,1,b.renderTransform,b,0,-1),y.dep=1),m===`scale`)this._pt=new Zp(this._pt,b,`scaleY`,b.scaleY,(_?Id(b.scaleY,_+u):u)-b.scaleY||0,km),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){C.push(Um,0,o[Um]),l=fh(l),b.svg?bh(e,l,0,x,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==b.zOrigin&&ah(this,b,`zOrigin`,b.zOrigin,g),ah(this,o,m,Sh(c),Sh(l)));continue}else if(m===`svgOrigin`){bh(e,l,1,x,0,this);continue}else if(m in gh){Ah(this,b,m,d,_?Id(d,_+l):l);continue}else if(m===`smoothOrigin`){ah(this,b,`smooth`,b.smooth,l);continue}else if(m===`force3D`){b[m]=l;continue}else if(m===`transform`){Mh(this,l,e);continue}}else m in o||(m=Qm(m)||m);if(v||(u||u===0)&&(d||d===0)&&!Dm.test(l)&&m in o)h=(c+``).substr((d+``).length),u||=0,g=wf(l)||(m in Ou.units?Ou.units[m]:h),h!==g&&(d=ch(e,m,c,g)),this._pt=new Zp(this._pt,v?b:o,m,d,(_?Id(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?Nm:km),this._pt.u=g||0,v&&w!==l?(this._pt.b=c,this._pt.e=w,this._pt.r=Mm):h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=jm);else if(m in o)uh.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){md(m,l);continue}v||(m in o?C.push(m,0,o[m]):typeof e[m]==`function`?C.push(m,2,e[m]()):C.push(m,1,c||e[m])),a.push(m)}}S&&Xp(this)},render:function(e,t){if(t.tween._time||!vm())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:lh,aliases:Om,getSetter:function(e,t,n){var r=Om[t];return r&&r.indexOf(`,`)<0&&(t=r),t in bm&&t!==Um&&(e._gsap.x||lh(e,`x`))?n&&_m===n?t===`scale`?zm:Rm:(_m=n||{})&&(t===`scale`?Bm:Vm):e.style&&!Wu(e.style[t])?Im:~t.indexOf(`-`)?Lm:Hp(e,t)},core:{_removeProperty:ih,_getMatrix:yh}};dm.utils.checkPrefix=Qm,dm.core.getStyleSaver=qm,(function(e,t,n,r){var i=Nd(e+`,`+t+`,`+n,function(e){bm[e]=1});Nd(t,function(e){Ou.units[e]=`deg`,gh[e]=1}),Om[i[13]]=e+`,`+t,Nd(r,function(e){var t=e.split(`:`);Om[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),Nd(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){Ou.units[e]=`px`}),dm.registerPlugin(Nh);var Ph=dm.registerPlugin(Nh)||dm;Ph.core.Tween;var Fh=class{constructor(e,t={rotateCube:!0,autoRotateCube:!1,zoomCube:!1,autoRotateCubeSpeed:2,perspectiveCamera:!1,orthographicCamera:!0}){let n={rotateCube:!0,autoRotateCube:!1,zoomCube:!1,autoRotateCubeSpeed:2,perspectiveCamera:!1,...t};this.canvas=e,this.rotateCube=n.rotateCube,this.autoRotateCube=n.autoRotateCube,this.zoomCube=n.zoomCube,this.autoRotateCubeSpeed=n.autoRotateCubeSpeed,this.perspectiveCamera=n.perspectiveCamera,this.scene,this.cubes,this.camera,this.renderer,this.activeTween,this.activeGroup,this.rotateID=null,this.renderID=null,this.moveID=0}async init(){this.scene=new Wr;let e=this.perspectiveCamera,t=this.scene,n=this.canvas,r=n.clientWidth/n.clientHeight,i=[];this.cubes=i;let a={black:new Fa({color:`black`,roughness:.5,metalness:.1}),red:new Fa({color:`red`,roughness:.5,metalness:.1}),orange:new Fa({color:`orange`,roughness:.5,metalness:.1}),blue:new Fa({color:42751,roughness:.5,metalness:.1}),green:new Fa({color:`green`,roughness:.5,metalness:.1}),white:new Fa({color:`white`,roughness:.5,metalness:.1}),yellow:new Fa({color:`yellow`,roughness:.5,metalness:.1})};for(let e=-1;e<=1;e++)for(let n=-1;n<=1;n++)for(let r=-1;r<=1;r++){if(e===0&&n===0&&r===0)continue;let o=new Tu(1,1,1,4,.15),s=[];for(let e=0;e<6;e++)s.push(a.black);e===1&&(s[0]=a.red),e===-1&&(s[1]=a.orange),n===1&&(s[2]=a.white),n===-1&&(s[3]=a.yellow),r===1&&(s[4]=a.green),r===-1&&(s[5]=a.blue);let c=new sa(o,s);c.userData={originalPosition:{x:e,y:n,z:r}},c.position.set(e*1,n*1,r*1),t.add(c),i.push(c)}this.rotateCube&&(n.style.cursor=`pointer`);let o=new _o(16777215,.5);t.add(o),[[5,5,5],[-5,-5,-5],[-5,5,5],[5,-5,-5],[5,5,-5],[-5,-5,5],[5,-5,5],[-5,5,-5]].forEach(e=>{let n=new go(16777215,1);n.position.set(...e),t.add(n)}),this.camera=new mo(5*r/-2,5*r/2,5/2,5/-2,.1,200),e&&(this.camera=new po(75,r,.1,200)),this.camera.position.set(5,2.5,5),this.camera.lookAt(0,0,0),this.renderer=new $l({canvas:n,antialias:!0,alpha:!0}),this.renderer.setSize(n.clientWidth,n.clientHeight,!1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.render(t,this.camera),this.controls=new uu(this.camera,n),this.controls.enablePan=!1,this.controls.enableDamping=!0,this.controls.autoRotateSpeed=this.autoRotateCubeSpeed,this.autoRotateCube?this.controls.autoRotate=!0:this.controls.autoRotate=!1,this.rotateCube?this.controls.enableRotate=!0:this.controls.enableRotate=!1,this.zoomCube?this.controls.enableZoom=!0:this.controls.enableZoom=!1,this.renderID&&cancelAnimationFrame(this.renderID);let s=()=>{this.controls.update(),this.renderer.render(t,this.camera),this.renderID=requestAnimationFrame(s)};s(),window.addEventListener(`resize`,()=>{let r=n.getBoundingClientRect(),i=r.width,a=r.height,o=i/a;this.renderer.setSize(i,a,!1),e?this.camera.aspect=o:(this.camera.left=-(5*o)/2,this.camera.right=5*o/2,this.camera.top=5/2,this.camera.bottom=-5/2),this.camera.updateProjectionMatrix(),this.renderer.render(t,this.camera)})}async moves(e,t=.1){let n=++this.moveID,r=e.trim().split(/\s+/);for(let e of r){if(n!==this.moveID)return;let r=e[0],i=.5,a=!0;e.length>1&&(e.includes(`'`)?a=!1:e.includes(`2`)&&(i=1)),this.rerender(),await this.rotateFace(r,i,a,t)}}rotateFace(e,t,n=!0,r=.4){return new Promise(i=>{let a=this.scene,o=this.cubes,s={R:1,L:-1,U:1,D:-1,F:1,B:-1},c={R:`x`,L:`x`,U:`y`,D:`y`,F:`z`,B:`z`},l={R:-1,L:1,U:-1,D:1,F:-1,B:1},u=o.filter(t=>Math.round(t.position[c[e]])===s[e]);this.activeGroup=new Fr,a.add(this.activeGroup),u.forEach(e=>this.activeGroup.add(e));let d=n?1:-1,f=Math.PI*t*(l[e]*d),p=c[e];this.activeTween=Ph.to(this.activeGroup.rotation,{[p]:f,duration:r,ease:`power2.inOut`,onComplete:()=>{this.finalizeRotation(),i()}})})}finalizeRotation(){this.activeGroup&&(this.activeGroup.updateMatrixWorld(!0),[...this.activeGroup.children].forEach(e=>{e.applyMatrix4(this.activeGroup.matrixWorld),this.scene.add(e),e.position.set(Math.round(e.position.x),Math.round(e.position.y),Math.round(e.position.z));let t=Math.PI/2;e.rotation.set(Math.round(e.rotation.x/t)*t,Math.round(e.rotation.y/t)*t,Math.round(e.rotation.z/t)*t),e.updateMatrix(),e.updateMatrixWorld(!0)}),this.scene.remove(this.activeGroup),this.activeGroup=null,this.activeTween=null)}stop(){this.moveID++}reset(){this.rerender(),this.moveID++,this.activeTween&&=(this.activeTween.kill(),null),this.activeGroup&&=([...this.activeGroup.children].forEach(e=>{this.scene.add(e)}),this.scene.remove(this.activeGroup),null),this.cubes.forEach(e=>{let t=e.userData.originalPosition;e.position.set(t.x,t.y,t.z),e.rotation.set(0,0,0),e.matrix.identity(),e.matrixWorld.identity()}),this.resetCamera(1)}resetCamera(e=1.5){!this.camera||!this.controls||(Ph.to(this.camera.position,{x:5,y:2.5,z:5,duration:e,ease:`power3.inOut`,onUpdate:()=>{this.camera.lookAt(0,0,0)}}),Ph.to(this.controls.target,{x:0,y:0,z:0,duration:e,ease:`power3.inOut`,onUpdate:()=>{this.controls.update()}}))}rerender(){let e=this.canvas.getBoundingClientRect(),t=e.width,n=e.height,r=t/n;this.renderer.setSize(t,n,!1),this.perspectiveCamera?this.camera.aspect=r:(this.camera.left=-(5*r)/2,this.camera.right=5*r/2,this.camera.top=5/2,this.camera.bottom=-5/2),this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera)}destroy(){cancelAnimationFrame(this.renderID)}};V(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).Chart=r()})(e,function(){var e=Object.freeze({__proto__:null,get Colors(){return Qa},get Decimation(){return to},get Filler(){return bo},get Legend(){return wo},get SubTitle(){return Oo},get Title(){return Eo},get Tooltip(){return Vo}});function t(){}let n=(()=>{let e=0;return()=>e++})();function r(e){return e==null}function i(e){if(Array.isArray&&Array.isArray(e))return!0;let t=Object.prototype.toString.call(e);return t.slice(0,7)===`[object`&&t.slice(-6)===`Array]`}function a(e){return e!==null&&Object.prototype.toString.call(e)===`[object Object]`}function o(e){return(typeof e==`number`||e instanceof Number)&&isFinite(+e)}function s(e,t){return o(e)?e:t}function c(e,t){return e===void 0?t:e}let l=(e,t)=>typeof e==`string`&&e.endsWith(`%`)?parseFloat(e)/100:+e/t,u=(e,t)=>typeof e==`string`&&e.endsWith(`%`)?parseFloat(e)/100*t:+e;function d(e,t,n){if(e&&typeof e.call==`function`)return e.apply(n,t)}function f(e,t,n,r){let o,s,c;if(i(e))if(s=e.length,r)for(o=s-1;o>=0;o--)t.call(n,e[o],o);else for(o=0;o<s;o++)t.call(n,e[o],o);else if(a(e))for(c=Object.keys(e),s=c.length,o=0;o<s;o++)t.call(n,e[c[o]],c[o])}function p(e,t){let n,r,i,a;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(i=e[n],a=t[n],i.datasetIndex!==a.datasetIndex||i.index!==a.index)return!1;return!0}function m(e){if(i(e))return e.map(m);if(a(e)){let t=Object.create(null),n=Object.keys(e),r=n.length,i=0;for(;i<r;++i)t[n[i]]=m(e[n[i]]);return t}return e}function h(e){return[`__proto__`,`prototype`,`constructor`].indexOf(e)===-1}function g(e,t,n,r){if(!h(e))return;let i=t[e],o=n[e];a(i)&&a(o)?_(i,o,r):t[e]=m(o)}function _(e,t,n){let r=i(t)?t:[t],o=r.length;if(!a(e))return e;let s=(n||={}).merger||g,c;for(let t=0;t<o;++t){if(c=r[t],!a(c))continue;let i=Object.keys(c);for(let t=0,r=i.length;t<r;++t)s(i[t],e,c,n)}return e}function v(e,t){return _(e,t,{merger:y})}function y(e,t,n){if(!h(e))return;let r=t[e],i=n[e];a(r)&&a(i)?v(r,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=m(i))}let b={"":e=>e,x:e=>e.x,y:e=>e.y};function x(e){let t=e.split(`.`),n=[],r=``;for(let e of t)r+=e,r.endsWith(`\\`)?r=r.slice(0,-1)+`.`:(n.push(r),r=``);return n}function S(e,t){return(b[t]||(b[t]=(function(e){let t=x(e);return e=>{for(let n of t){if(n===``)break;e&&=e[n]}return e}})(t)))(e)}function C(e){return e.charAt(0).toUpperCase()+e.slice(1)}let w=e=>e!==void 0,T=e=>typeof e==`function`,E=(e,t)=>{if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0};function D(e){return e.type===`mouseup`||e.type===`click`||e.type===`contextmenu`}let O=Math.PI,k=2*O,A=k+O,j=1/0,M=O/180,N=O/2,P=O/4,F=2*O/3,I=Math.log10,ee=Math.sign;function L(e,t,n){return Math.abs(e-t)<n}function te(e){let t=Math.round(e);e=L(e,t,e/1e3)?t:e;let n=10**Math.floor(I(e)),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function R(e){let t=[],n=Math.sqrt(e),r;for(r=1;r<n;r++)e%r==0&&(t.push(r),t.push(e/r));return n===(0|n)&&t.push(n),t.sort((e,t)=>e-t).pop(),t}function ne(e){return!(function(e){return typeof e==`symbol`||typeof e==`object`&&!!e&&!(Symbol.toPrimitive in e||`toString`in e||`valueOf`in e)})(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function z(e,t){let n=Math.round(e);return n-t<=e&&n+t>=e}function B(e,t,n){let r,i,a;for(r=0,i=e.length;r<i;r++)a=e[r][n],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function re(e){return O/180*e}function ie(e){return 180/O*e}function ae(e){if(!o(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function oe(e,t){let n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r),a=Math.atan2(r,n);return a<-.5*O&&(a+=k),{angle:a,distance:i}}function se(e,t){return Math.sqrt((t.x-e.x)**2+(t.y-e.y)**2)}function ce(e,t){return(e-t+A)%k-O}function le(e){return(e%k+k)%k}function ue(e,t,n,r){let i=le(e),a=le(t),o=le(n),s=le(a-i),c=le(o-i),l=le(i-a),u=le(i-o);return i===a||i===o||r&&a===o||s>c&&l<u}function V(e,t,n){return Math.max(t,Math.min(n,e))}function de(e){return V(e,-32768,32767)}function fe(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function H(e,t,n){n||=(n=>e[n]<t);let r,i=e.length-1,a=0;for(;i-a>1;)r=a+i>>1,n(r)?a=r:i=r;return{lo:a,hi:i}}let pe=(e,t,n,r)=>H(e,n,r?r=>{let i=e[r][t];return i<n||i===n&&e[r+1][t]===n}:r=>e[r][t]<n),me=(e,t,n)=>H(e,n,r=>e[r][t]>=n);function he(e,t,n){let r=0,i=e.length;for(;r<i&&e[r]<t;)r++;for(;i>r&&e[i-1]>n;)i--;return r>0||i<e.length?e.slice(r,i):e}let U=[`push`,`pop`,`shift`,`splice`,`unshift`];function ge(e,t){e._chartjs?e._chartjs.listeners.push(t):(Object.defineProperty(e,`_chartjs`,{configurable:!0,enumerable:!1,value:{listeners:[t]}}),U.forEach(t=>{let n=`_onData`+C(t),r=e[t];Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value(...t){let i=r.apply(this,t);return e._chartjs.listeners.forEach(e=>{typeof e[n]==`function`&&e[n](...t)}),i}})}))}function W(e,t){let n=e._chartjs;if(!n)return;let r=n.listeners,i=r.indexOf(t);i!==-1&&r.splice(i,1),r.length>0||(U.forEach(t=>{delete e[t]}),delete e._chartjs)}function G(e){let t=new Set(e);return t.size===e.length?e:Array.from(t)}let _e=typeof window>`u`?function(e){return e()}:window.requestAnimationFrame;function ve(e,t){let n=[],r=!1;return function(...i){n=i,r||(r=!0,_e.call(window,()=>{r=!1,e.apply(t,n)}))}}function ye(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}let be=e=>e===`start`?`left`:e===`end`?`right`:`center`,xe=(e,t,n)=>e===`start`?t:e===`end`?n:(t+n)/2,Se=(e,t,n,r)=>e===(r?`left`:`right`)?n:e===`center`?(t+n)/2:t;function Ce(e,t,n){let i=t.length,a=0,o=i;if(e._sorted){let{iScale:s,vScale:c,_parsed:l}=e,u=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,d=s.axis,{min:f,max:p,minDefined:m,maxDefined:h}=s.getUserBounds();if(m){if(a=Math.min(pe(l,d,f).lo,n?i:pe(t,d,s.getPixelForValue(f)).lo),u){let e=l.slice(0,a+1).reverse().findIndex(e=>!r(e[c.axis]));a-=Math.max(0,e)}a=V(a,0,i-1)}if(h){let e=Math.max(pe(l,s.axis,p,!0).hi+1,n?0:pe(t,d,s.getPixelForValue(p),!0).hi+1);if(u){let t=l.slice(e-1).findIndex(e=>!r(e[c.axis]));e+=Math.max(0,t)}o=V(e,a,i)-a}else o=i-a}return{start:a,count:o}}function we(e){let{xScale:t,yScale:n,_scaleRanges:r}=e,i={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!r)return e._scaleRanges=i,!0;let a=r.xmin!==t.min||r.xmax!==t.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),a}class Te{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,t,n,r){let i=t.listeners[r],a=t.duration;i.forEach(r=>r({chart:e,initial:t.initial,numSteps:a,currentStep:Math.min(n-t.start,a)}))}_refresh(){this._request||=(this._running=!0,_e.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let t=0;this._charts.forEach((n,r)=>{if(!n.running||!n.items.length)return;let i=n.items,a,o=i.length-1,s=!1;for(;o>=0;--o)a=i[o],a._active?(a._total>n.duration&&(n.duration=a._total),a.tick(e),s=!0):(i[o]=i[i.length-1],i.pop());s&&(r.draw(),this._notify(r,n,e,`progress`)),i.length||(n.running=!1,this._notify(r,n,e,`complete`),n.initial=!1),t+=i.length}),this._lastDate=e,t===0&&(this._running=!1)}_getAnims(e){let t=this._charts,n=t.get(e);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(e,n)),n}listen(e,t,n){this._getAnims(e).listeners[t].push(n)}add(e,t){t&&t.length&&this._getAnims(e).items.push(...t)}has(e){return this._getAnims(e).items.length>0}start(e){let t=this._charts.get(e);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((e,t)=>Math.max(e,t._duration),0),this._refresh())}running(e){if(!this._running)return!1;let t=this._charts.get(e);return!!(t&&t.running&&t.items.length)}stop(e){let t=this._charts.get(e);if(!t||!t.items.length)return;let n=t.items,r=n.length-1;for(;r>=0;--r)n[r].cancel();t.items=[],this._notify(e,t,Date.now(),`complete`)}remove(e){return this._charts.delete(e)}}var Ee=new Te;function De(e){return e+.5|0}let Oe=(e,t,n)=>Math.max(Math.min(e,n),t);function ke(e){return Oe(De(2.55*e),0,255)}function Ae(e){return Oe(De(255*e),0,255)}function je(e){return Oe(De(e/2.55)/100,0,1)}function Me(e){return Oe(De(100*e),0,100)}let Ne={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Pe=[...`0123456789ABCDEF`],Fe=e=>Pe[15&e],Ie=e=>Pe[(240&e)>>4]+Pe[15&e],Le=e=>(240&e)>>4==(15&e);function Re(e){var t=(e=>Le(e.r)&&Le(e.g)&&Le(e.b)&&Le(e.a))(e)?Fe:Ie;return e?`#`+t(e.r)+t(e.g)+t(e.b)+((e,t)=>e<255?t(e):``)(e.a,t):void 0}let ze=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Be(e,t,n){let r=t*Math.min(n,1-n),i=(t,i=(t+e/30)%12)=>n-r*Math.max(Math.min(i-3,9-i,1),-1);return[i(0),i(8),i(4)]}function Ve(e,t,n){let r=(r,i=(r+e/60)%6)=>n-n*t*Math.max(Math.min(i,4-i,1),0);return[r(5),r(3),r(1)]}function He(e,t,n){let r=Be(e,1,.5),i;for(t+n>1&&(i=1/(t+n),t*=i,n*=i),i=0;i<3;i++)r[i]*=1-t-n,r[i]+=t;return r}function Ue(e){let t=e.r/255,n=e.g/255,r=e.b/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2,s,c,l;return i!==a&&(l=i-a,c=o>.5?l/(2-i-a):l/(i+a),s=(function(e,t,n,r,i){return e===i?(t-n)/r+(t<n?6:0):t===i?(n-e)/r+2:(e-t)/r+4})(t,n,r,l,i),s=60*s+.5),[0|s,c||0,o]}function We(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(Ae)}function Ge(e,t,n){return We(Be,e,t,n)}function Ke(e){return(e%360+360)%360}function qe(e){let t=ze.exec(e),n,r=255;if(!t)return;t[5]!==n&&(r=t[6]?ke(+t[5]):Ae(+t[5]));let i=Ke(+t[2]),a=t[3]/100,o=t[4]/100;return n=t[1]===`hwb`?(function(e,t,n){return We(He,e,t,n)})(i,a,o):t[1]===`hsv`?(function(e,t,n){return We(Ve,e,t,n)})(i,a,o):Ge(i,a,o),{r:n[0],g:n[1],b:n[2],a:r}}let Je={x:`dark`,Z:`light`,Y:`re`,X:`blu`,W:`gr`,V:`medium`,U:`slate`,A:`ee`,T:`ol`,S:`or`,B:`ra`,C:`lateg`,D:`ights`,R:`in`,Q:`turquois`,E:`hi`,P:`ro`,O:`al`,N:`le`,M:`de`,L:`yello`,F:`en`,K:`ch`,G:`arks`,H:`ea`,I:`ightg`,J:`wh`},Ye={OiceXe:`f0f8ff`,antiquewEte:`faebd7`,aqua:`ffff`,aquamarRe:`7fffd4`,azuY:`f0ffff`,beige:`f5f5dc`,bisque:`ffe4c4`,black:`0`,blanKedOmond:`ffebcd`,Xe:`ff`,XeviTet:`8a2be2`,bPwn:`a52a2a`,burlywood:`deb887`,caMtXe:`5f9ea0`,KartYuse:`7fff00`,KocTate:`d2691e`,cSO:`ff7f50`,cSnflowerXe:`6495ed`,cSnsilk:`fff8dc`,crimson:`dc143c`,cyan:`ffff`,xXe:`8b`,xcyan:`8b8b`,xgTMnPd:`b8860b`,xWay:`a9a9a9`,xgYF:`6400`,xgYy:`a9a9a9`,xkhaki:`bdb76b`,xmagFta:`8b008b`,xTivegYF:`556b2f`,xSange:`ff8c00`,xScEd:`9932cc`,xYd:`8b0000`,xsOmon:`e9967a`,xsHgYF:`8fbc8f`,xUXe:`483d8b`,xUWay:`2f4f4f`,xUgYy:`2f4f4f`,xQe:`ced1`,xviTet:`9400d3`,dAppRk:`ff1493`,dApskyXe:`bfff`,dimWay:`696969`,dimgYy:`696969`,dodgerXe:`1e90ff`,fiYbrick:`b22222`,flSOwEte:`fffaf0`,foYstWAn:`228b22`,fuKsia:`ff00ff`,gaRsbSo:`dcdcdc`,ghostwEte:`f8f8ff`,gTd:`ffd700`,gTMnPd:`daa520`,Way:`808080`,gYF:`8000`,gYFLw:`adff2f`,gYy:`808080`,honeyMw:`f0fff0`,hotpRk:`ff69b4`,RdianYd:`cd5c5c`,Rdigo:`4b0082`,ivSy:`fffff0`,khaki:`f0e68c`,lavFMr:`e6e6fa`,lavFMrXsh:`fff0f5`,lawngYF:`7cfc00`,NmoncEffon:`fffacd`,ZXe:`add8e6`,ZcSO:`f08080`,Zcyan:`e0ffff`,ZgTMnPdLw:`fafad2`,ZWay:`d3d3d3`,ZgYF:`90ee90`,ZgYy:`d3d3d3`,ZpRk:`ffb6c1`,ZsOmon:`ffa07a`,ZsHgYF:`20b2aa`,ZskyXe:`87cefa`,ZUWay:`778899`,ZUgYy:`778899`,ZstAlXe:`b0c4de`,ZLw:`ffffe0`,lime:`ff00`,limegYF:`32cd32`,lRF:`faf0e6`,magFta:`ff00ff`,maPon:`800000`,VaquamarRe:`66cdaa`,VXe:`cd`,VScEd:`ba55d3`,VpurpN:`9370db`,VsHgYF:`3cb371`,VUXe:`7b68ee`,VsprRggYF:`fa9a`,VQe:`48d1cc`,VviTetYd:`c71585`,midnightXe:`191970`,mRtcYam:`f5fffa`,mistyPse:`ffe4e1`,moccasR:`ffe4b5`,navajowEte:`ffdead`,navy:`80`,Tdlace:`fdf5e6`,Tive:`808000`,TivedBb:`6b8e23`,Sange:`ffa500`,SangeYd:`ff4500`,ScEd:`da70d6`,pOegTMnPd:`eee8aa`,pOegYF:`98fb98`,pOeQe:`afeeee`,pOeviTetYd:`db7093`,papayawEp:`ffefd5`,pHKpuff:`ffdab9`,peru:`cd853f`,pRk:`ffc0cb`,plum:`dda0dd`,powMrXe:`b0e0e6`,purpN:`800080`,YbeccapurpN:`663399`,Yd:`ff0000`,Psybrown:`bc8f8f`,PyOXe:`4169e1`,saddNbPwn:`8b4513`,sOmon:`fa8072`,sandybPwn:`f4a460`,sHgYF:`2e8b57`,sHshell:`fff5ee`,siFna:`a0522d`,silver:`c0c0c0`,skyXe:`87ceeb`,UXe:`6a5acd`,UWay:`708090`,UgYy:`708090`,snow:`fffafa`,sprRggYF:`ff7f`,stAlXe:`4682b4`,tan:`d2b48c`,teO:`8080`,tEstN:`d8bfd8`,tomato:`ff6347`,Qe:`40e0d0`,viTet:`ee82ee`,JHt:`f5deb3`,wEte:`ffffff`,wEtesmoke:`f5f5f5`,Lw:`ffff00`,LwgYF:`9acd32`},Xe;function Ze(e){Xe||(Xe=(function(){let e={},t=Object.keys(Ye),n=Object.keys(Je),r,i,a,o,s;for(r=0;r<t.length;r++){for(o=s=t[r],i=0;i<n.length;i++)a=n[i],s=s.replace(a,Je[a]);a=parseInt(Ye[o],16),e[s]=[a>>16&255,a>>8&255,255&a]}return e})(),Xe.transparent=[0,0,0,0]);let t=Xe[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}let Qe=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,$e=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,et=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function tt(e,t,n){if(e){let r=Ue(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=Ge(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function nt(e,t){return e&&Object.assign(t||{},e)}function rt(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=Ae(e[3]))):(t=nt(e,{r:0,g:0,b:0,a:1})).a=Ae(t.a),t}function it(e){return e.charAt(0)===`r`?(function(e){let t=Qe.exec(e),n,r,i,a=255;if(t){if(t[7]!==n){let e=+t[7];a=t[8]?ke(e):Oe(255*e,0,255)}return n=+t[1],r=+t[3],i=+t[5],n=255&(t[2]?ke(n):Oe(n,0,255)),r=255&(t[4]?ke(r):Oe(r,0,255)),i=255&(t[6]?ke(i):Oe(i,0,255)),{r:n,g:r,b:i,a}}})(e):qe(e)}class at{constructor(e){if(e instanceof at)return e;let t=typeof e,n;var r,i,a;t===`object`?n=rt(e):t===`string`&&(a=(r=e).length,r[0]===`#`&&(a===4||a===5?i={r:255&17*Ne[r[1]],g:255&17*Ne[r[2]],b:255&17*Ne[r[3]],a:a===5?17*Ne[r[4]]:255}:a!==7&&a!==9||(i={r:Ne[r[1]]<<4|Ne[r[2]],g:Ne[r[3]]<<4|Ne[r[4]],b:Ne[r[5]]<<4|Ne[r[6]],a:a===9?Ne[r[7]]<<4|Ne[r[8]]:255})),n=i||Ze(e)||it(e)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var e=nt(this._rgb);return e&&(e.a=je(e.a)),e}set rgb(e){this._rgb=rt(e)}rgbString(){return this._valid?(e=this._rgb)&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${je(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`):void 0;var e}hexString(){return this._valid?Re(this._rgb):void 0}hslString(){return this._valid?(function(e){if(!e)return;let t=Ue(e),n=t[0],r=Me(t[1]),i=Me(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${i}%, ${je(e.a)})`:`hsl(${n}, ${r}%, ${i}%)`})(this._rgb):void 0}mix(e,t){if(e){let n=this.rgb,r=e.rgb,i,a=t===i?.5:t,o=2*a-1,s=n.a-r.a,c=((o*s==-1?o:(o+s)/(1+o*s))+1)/2;i=1-c,n.r=255&c*n.r+i*r.r+.5,n.g=255&c*n.g+i*r.g+.5,n.b=255&c*n.b+i*r.b+.5,n.a=a*n.a+(1-a)*r.a,this.rgb=n}return this}interpolate(e,t){return e&&(this._rgb=(function(e,t,n){let r=et(je(e.r)),i=et(je(e.g)),a=et(je(e.b));return{r:Ae($e(r+n*(et(je(t.r))-r))),g:Ae($e(i+n*(et(je(t.g))-i))),b:Ae($e(a+n*(et(je(t.b))-a))),a:e.a+n*(t.a-e.a)}})(this._rgb,e._rgb,t)),this}clone(){return new at(this.rgb)}alpha(e){return this._rgb.a=Ae(e),this}clearer(e){return this._rgb.a*=1-e,this}greyscale(){let e=this._rgb;return e.r=e.g=e.b=De(.3*e.r+.59*e.g+.11*e.b),this}opaquer(e){return this._rgb.a*=1+e,this}negate(){let e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return tt(this._rgb,2,e),this}darken(e){return tt(this._rgb,2,-e),this}saturate(e){return tt(this._rgb,1,e),this}desaturate(e){return tt(this._rgb,1,-e),this}rotate(e){return(function(e,t){var n=Ue(e);n[0]=Ke(n[0]+t),n=Ge(n),e.r=n[0],e.g=n[1],e.b=n[2]})(this._rgb,e),this}}function ot(e){if(e&&typeof e==`object`){let t=e.toString();return t===`[object CanvasPattern]`||t===`[object CanvasGradient]`}return!1}function st(e){return ot(e)?e:new at(e)}function ct(e){return ot(e)?e:new at(e).saturate(.5).darken(.1).hexString()}let lt=[`x`,`y`,`borderWidth`,`radius`,`tension`],ut=[`color`,`borderColor`,`backgroundColor`],dt=new Map;function ft(e,t,n){return(function(e,t){t||={};let n=e+JSON.stringify(t),r=dt.get(n);return r||(r=new Intl.NumberFormat(e,t),dt.set(n,r)),r})(t,n).format(e)}let pt={values:e=>i(e)?e:``+e,numeric(e,t,n){if(e===0)return`0`;let r=this.chart.options.locale,i,a=e;if(n.length>1){let t=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(t<1e-4||t>0x38d7ea4c68000)&&(i=`scientific`),a=(function(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n})(e,n)}let o=I(Math.abs(a)),s=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:i,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(c,this.options.ticks.format),ft(e,r,c)},logarithmic(e,t,n){if(e===0)return`0`;let r=n[t].significand||e/10**Math.floor(I(e));return[1,2,3,5,10,15].includes(r)||t>.8*n.length?pt.numeric.call(this,e,t,n):``}};var mt={formatters:pt};let ht=Object.create(null),gt=Object.create(null);function _t(e,t){if(!t)return e;let n=t.split(`.`);for(let t=0,r=n.length;t<r;++t){let r=n[t];e=e[r]||(e[r]=Object.create(null))}return e}function vt(e,t,n){return typeof t==`string`?_(_t(e,t),n):_(_t(e,``),t)}class yt{constructor(e,t){this.animation=void 0,this.backgroundColor=`rgba(0,0,0,0.1)`,this.borderColor=`rgba(0,0,0,0.1)`,this.color=`#666`,this.datasets={},this.devicePixelRatio=e=>e.chart.platform.getDevicePixelRatio(),this.elements={},this.events=[`mousemove`,`mouseout`,`click`,`touchstart`,`touchmove`],this.font={family:`'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`,size:12,style:`normal`,lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(e,t)=>ct(t.backgroundColor),this.hoverBorderColor=(e,t)=>ct(t.borderColor),this.hoverColor=(e,t)=>ct(t.color),this.indexAxis=`x`,this.interaction={mode:`nearest`,intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(t)}set(e,t){return vt(this,e,t)}get(e){return _t(this,e)}describe(e,t){return vt(gt,e,t)}override(e,t){return vt(ht,e,t)}route(e,t,n,r){let i=_t(this,e),o=_t(this,n),s=`_`+t;Object.defineProperties(i,{[s]:{value:i[t],writable:!0},[t]:{enumerable:!0,get(){let e=this[s],t=o[r];return a(e)?Object.assign({},t,e):c(e,t)},set(e){this[s]=e}}})}apply(e){e.forEach(e=>e(this))}}var bt=new yt({_scriptable:e=>!e.startsWith(`on`),_indexable:e=>e!==`events`,hover:{_fallback:`interaction`},interaction:{_scriptable:!1,_indexable:!1}},[function(e){e.set(`animation`,{delay:void 0,duration:1e3,easing:`easeOutQuart`,fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe(`animation`,{_fallback:!1,_indexable:!1,_scriptable:e=>e!==`onProgress`&&e!==`onComplete`&&e!==`fn`}),e.set(`animations`,{colors:{type:`color`,properties:ut},numbers:{type:`number`,properties:lt}}),e.describe(`animations`,{_fallback:`animation`}),e.set(`transitions`,{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:`transparent`},visible:{type:`boolean`,duration:0}}},hide:{animations:{colors:{to:`transparent`},visible:{type:`boolean`,easing:`linear`,fn:e=>0|e}}}})},function(e){e.set(`layout`,{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})},function(e){e.set(`scale`,{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:`ticks`,clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:``,padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:``,padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:mt.formatters.values,minor:{},major:{},align:`center`,crossAlign:`near`,showLabelBackdrop:!1,backdropColor:`rgba(255, 255, 255, 0.75)`,backdropPadding:2}}),e.route(`scale.ticks`,`color`,``,`color`),e.route(`scale.grid`,`color`,``,`borderColor`),e.route(`scale.border`,`color`,``,`borderColor`),e.route(`scale.title`,`color`,``,`color`),e.describe(`scale`,{_fallback:!1,_scriptable:e=>!e.startsWith(`before`)&&!e.startsWith(`after`)&&e!==`callback`&&e!==`parser`,_indexable:e=>e!==`borderDash`&&e!==`tickBorderDash`&&e!==`dash`}),e.describe(`scales`,{_fallback:`scale`}),e.describe(`scale.ticks`,{_scriptable:e=>e!==`backdropPadding`&&e!==`callback`,_indexable:e=>e!==`backdropPadding`})}]);function xt(){return typeof window<`u`&&typeof document<`u`}function St(e){let t=e.parentNode;return t&&t.toString()===`[object ShadowRoot]`&&(t=t.host),t}function Ct(e,t,n){let r;return typeof e==`string`?(r=parseInt(e,10),e.indexOf(`%`)!==-1&&(r=r/100*t.parentNode[n])):r=e,r}let wt=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function Tt(e,t){return wt(e).getPropertyValue(t)}let Et=[`top`,`right`,`bottom`,`left`];function Dt(e,t,n){let r={};n=n?`-`+n:``;for(let i=0;i<4;i++){let a=Et[i];r[a]=parseFloat(e[t+`-`+a+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}let Ot=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function kt(e,t){if(`native`in e)return e;let{canvas:n,currentDevicePixelRatio:r}=t,i=wt(n),a=i.boxSizing===`border-box`,o=Dt(i,`padding`),s=Dt(i,`border`,`width`),{x:c,y:l,box:u}=(function(e,t){let n=e.touches,r=n&&n.length?n[0]:e,{offsetX:i,offsetY:a}=r,o,s,c=!1;if(Ot(i,a,e.target))o=i,s=a;else{let e=t.getBoundingClientRect();o=r.clientX-e.left,s=r.clientY-e.top,c=!0}return{x:o,y:s,box:c}})(e,n),d=o.left+(u&&s.left),f=o.top+(u&&s.top),{width:p,height:m}=t;return a&&(p-=o.width+s.width,m-=o.height+s.height),{x:Math.round((c-d)/p*n.width/r),y:Math.round((l-f)/m*n.height/r)}}let At=e=>Math.round(10*e)/10;function jt(e,t,n,r){let i=wt(e),a=Dt(i,`margin`),o=Ct(i.maxWidth,e,`clientWidth`)||j,s=Ct(i.maxHeight,e,`clientHeight`)||j,c=(function(e,t,n){let r,i;if(t===void 0||n===void 0){let a=e&&St(e);if(a){let e=a.getBoundingClientRect(),o=wt(a),s=Dt(o,`border`,`width`),c=Dt(o,`padding`);t=e.width-c.width-s.width,n=e.height-c.height-s.height,r=Ct(o.maxWidth,a,`clientWidth`),i=Ct(o.maxHeight,a,`clientHeight`)}else t=e.clientWidth,n=e.clientHeight}return{width:t,height:n,maxWidth:r||j,maxHeight:i||j}})(e,t,n),{width:l,height:u}=c;if(i.boxSizing===`content-box`){let e=Dt(i,`border`,`width`),t=Dt(i,`padding`);l-=t.width+e.width,u-=t.height+e.height}return l=Math.max(0,l-a.width),u=Math.max(0,r?l/r:u-a.height),l=At(Math.min(l,o,c.maxWidth)),u=At(Math.min(u,s,c.maxHeight)),l&&!u&&(u=At(l/2)),(t!==void 0||n!==void 0)&&r&&c.height&&u>c.height&&(u=c.height,l=At(Math.floor(u*r))),{width:l,height:u}}function Mt(e,t,n){let r=t||1,i=At(e.height*r),a=At(e.width*r);e.height=At(e.height),e.width=At(e.width);let o=e.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${e.height}px`,o.style.width=`${e.width}px`),(e.currentDevicePixelRatio!==r||o.height!==i||o.width!==a)&&(e.currentDevicePixelRatio=r,o.height=i,o.width=a,e.ctx.setTransform(r,0,0,r,0,0),!0)}let Nt=(function(){let e=!1;try{let t={get passive(){return e=!0,!1}};xt()&&(window.addEventListener(`test`,null,t),window.removeEventListener(`test`,null,t))}catch{}return e})();function Pt(e,t){let n=Tt(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function Ft(e){return!e||r(e.size)||r(e.family)?null:(e.style?e.style+` `:``)+(e.weight?e.weight+` `:``)+e.size+`px `+e.family}function It(e,t,n,r,i){let a=t[i];return a||(a=t[i]=e.measureText(i).width,n.push(i)),a>r&&(r=a),r}function Lt(e,t,n,r){let a=(r||={}).data=r.data||{},o=r.garbageCollect=r.garbageCollect||[];r.font!==t&&(a=r.data={},o=r.garbageCollect=[],r.font=t),e.save(),e.font=t;let s=0,c=n.length,l,u,d,f,p;for(l=0;l<c;l++)if(f=n[l],f==null||i(f)){if(i(f))for(u=0,d=f.length;u<d;u++)p=f[u],p==null||i(p)||(s=It(e,a,o,s,p))}else s=It(e,a,o,s,f);e.restore();let m=o.length/2;if(m>n.length){for(l=0;l<m;l++)delete a[o[l]];o.splice(0,m)}return s}function Rt(e,t,n){let r=e.currentDevicePixelRatio,i=n===0?0:Math.max(n/2,.5);return Math.round((t-i)*r)/r+i}function zt(e,t){(t||e)&&((t||=e.getContext(`2d`)).save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function Bt(e,t,n,r){Vt(e,t,n,r,null)}function Vt(e,t,n,r,i){let a,o,s,c,l,u,d,f,p=t.pointStyle,m=t.rotation,h=t.radius,g=(m||0)*M;if(p&&typeof p==`object`&&(a=p.toString(),a===`[object HTMLImageElement]`||a===`[object HTMLCanvasElement]`))return e.save(),e.translate(n,r),e.rotate(g),e.drawImage(p,-p.width/2,-p.height/2,p.width,p.height),void e.restore();if(!(isNaN(h)||h<=0)){switch(e.beginPath(),p){default:i?e.ellipse(n,r,i/2,h,0,0,k):e.arc(n,r,h,0,k),e.closePath();break;case`triangle`:u=i?i/2:h,e.moveTo(n+Math.sin(g)*u,r-Math.cos(g)*h),g+=F,e.lineTo(n+Math.sin(g)*u,r-Math.cos(g)*h),g+=F,e.lineTo(n+Math.sin(g)*u,r-Math.cos(g)*h),e.closePath();break;case`rectRounded`:l=.516*h,c=h-l,o=Math.cos(g+P)*c,d=Math.cos(g+P)*(i?i/2-l:c),s=Math.sin(g+P)*c,f=Math.sin(g+P)*(i?i/2-l:c),e.arc(n-d,r-s,l,g-O,g-N),e.arc(n+f,r-o,l,g-N,g),e.arc(n+d,r+s,l,g,g+N),e.arc(n-f,r+o,l,g+N,g+O),e.closePath();break;case`rect`:if(!m){c=Math.SQRT1_2*h,u=i?i/2:c,e.rect(n-u,r-c,2*u,2*c);break}g+=P;case`rectRot`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+f,r-o),e.lineTo(n+d,r+s),e.lineTo(n-f,r+o),e.closePath();break;case`crossRot`:g+=P;case`cross`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o);break;case`star`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o),g+=P,d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o);break;case`line`:o=i?i/2:Math.cos(g)*h,s=Math.sin(g)*h,e.moveTo(n-o,r-s),e.lineTo(n+o,r+s);break;case`dash`:e.moveTo(n,r),e.lineTo(n+Math.cos(g)*(i?i/2:h),r+Math.sin(g)*h);break;case!1:e.closePath()}e.fill(),t.borderWidth>0&&e.stroke()}}function Ht(e,t,n){return n||=.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function Ut(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function Wt(e){e.restore()}function Gt(e,t,n,r,i){if(!t)return e.lineTo(n.x,n.y);if(i===`middle`){let r=(t.x+n.x)/2;e.lineTo(r,t.y),e.lineTo(r,n.y)}else i===`after`==!!r?e.lineTo(n.x,t.y):e.lineTo(t.x,n.y);e.lineTo(n.x,n.y)}function Kt(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function qt(e,t,n,r,i){if(i.strikethrough||i.underline){let a=e.measureText(r),o=t-a.actualBoundingBoxLeft,s=t+a.actualBoundingBoxRight,c=n-a.actualBoundingBoxAscent,l=n+a.actualBoundingBoxDescent,u=i.strikethrough?(c+l)/2:l;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(o,u),e.lineTo(s,u),e.stroke()}}function Jt(e,t){let n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function Yt(e,t,n,a,o,s={}){let c=i(t)?t:[t],l=s.strokeWidth>0&&s.strokeColor!==``,u,d;for(e.save(),e.font=o.string,(function(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),r(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)})(e,s),u=0;u<c.length;++u)d=c[u],s.backdrop&&Jt(e,s.backdrop),l&&(s.strokeColor&&(e.strokeStyle=s.strokeColor),r(s.strokeWidth)||(e.lineWidth=s.strokeWidth),e.strokeText(d,n,a,s.maxWidth)),e.fillText(d,n,a,s.maxWidth),qt(e,n,a,d,s),a+=Number(o.lineHeight);e.restore()}function Xt(e,t){let{x:n,y:r,w:i,h:a,radius:o}=t;e.arc(n+o.topLeft,r+o.topLeft,o.topLeft,1.5*O,O,!0),e.lineTo(n,r+a-o.bottomLeft),e.arc(n+o.bottomLeft,r+a-o.bottomLeft,o.bottomLeft,O,N,!0),e.lineTo(n+i-o.bottomRight,r+a),e.arc(n+i-o.bottomRight,r+a-o.bottomRight,o.bottomRight,N,0,!0),e.lineTo(n+i,r+o.topRight),e.arc(n+i-o.topRight,r+o.topRight,o.topRight,0,-N,!0),e.lineTo(n+o.topLeft,r)}function Zt(e,t=[``],n,r,i=()=>e[0]){let a=n||e;return r===void 0&&(r=q(`_fallback`,e)),new Proxy({[Symbol.toStringTag]:`Object`,_cacheable:!0,_scopes:e,_rootScopes:a,_fallback:r,_getTarget:i,override:n=>Zt([n,...e],t,a,r)},{deleteProperty:(t,n)=>(delete t[n],delete t._keys,delete e[0][n],!0),get:(n,r)=>nn(n,r,()=>(function(e,t,n,r){let i;for(let a of t)if(i=q(en(a,e),n),i!==void 0)return tn(e,i)?sn(n,r,e,i):i})(r,t,e,n)),getOwnPropertyDescriptor:(e,t)=>Reflect.getOwnPropertyDescriptor(e._scopes[0],t),getPrototypeOf:()=>Reflect.getPrototypeOf(e[0]),has:(e,t)=>cn(e).includes(t),ownKeys:e=>cn(e),set(e,t,n){let r=e._storage||=i();return e[t]=r[t]=n,delete e._keys,!0}})}function Qt(e,t,n,r){let o={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:$t(e,r),setContext:t=>Qt(e,t,n,r),override:i=>Qt(e.override(i),t,n,r)};return new Proxy(o,{deleteProperty:(t,n)=>(delete t[n],delete e[n],!0),get:(e,t,n)=>nn(e,t,()=>(function(e,t,n){let{_proxy:r,_context:o,_subProxy:s,_descriptors:c}=e,l=r[t];return T(l)&&c.isScriptable(t)&&(l=(function(e,t,n,r){let{_proxy:i,_context:a,_subProxy:o,_stack:s}=n;if(s.has(e))throw Error(`Recursion detected: `+Array.from(s).join(`->`)+`->`+e);s.add(e);let c=t(a,o||r);return s.delete(e),tn(e,c)&&(c=sn(i._scopes,i,e,c)),c})(t,l,e,n)),i(l)&&l.length&&(l=(function(e,t,n,r){let{_proxy:i,_context:o,_subProxy:s,_descriptors:c}=n;if(o.index!==void 0&&r(e))return t[o.index%t.length];if(a(t[0])){let n=t,r=i._scopes.filter(e=>e!==n);t=[];for(let a of n){let n=sn(r,i,e,a);t.push(Qt(n,o,s&&s[e],c))}}return t})(t,l,e,c.isIndexable)),tn(t,l)&&(l=Qt(l,o,s&&s[t],c)),l})(e,t,n)),getOwnPropertyDescriptor:(t,n)=>t._descriptors.allKeys?Reflect.has(e,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,n),getPrototypeOf:()=>Reflect.getPrototypeOf(e),has:(t,n)=>Reflect.has(e,n),ownKeys:()=>Reflect.ownKeys(e),set:(t,n,r)=>(e[n]=r,delete t[n],!0)})}function $t(e,t={scriptable:!0,indexable:!0}){let{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:n,indexable:r,isScriptable:T(n)?n:()=>n,isIndexable:T(r)?r:()=>r}}let en=(e,t)=>e?e+C(t):t,tn=(e,t)=>a(t)&&e!==`adapters`&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function nn(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t)||t===`constructor`)return e[t];let r=n();return e[t]=r,r}function rn(e,t,n){return T(e)?e(t,n):e}let an=(e,t)=>!0===e?t:typeof e==`string`?S(t,e):void 0;function on(e,t,n,r,i){for(let a of t){let t=an(n,a);if(t){e.add(t);let a=rn(t._fallback,n,i);if(a!==void 0&&a!==n&&a!==r)return a}else if(!1===t&&r!==void 0&&n!==r)return null}return!1}function sn(e,t,n,r){let o=t._rootScopes,s=rn(t._fallback,n,r),c=[...e,...o],l=new Set;l.add(r);let u=K(l,c,n,s||n,r);return u!==null&&(s===void 0||s===n||(u=K(l,c,s,u,r),u!==null))&&Zt(Array.from(l),[``],o,s,()=>(function(e,t,n){let r=e._getTarget();t in r||(r[t]={});let o=r[t];return i(o)&&a(n)?n:o||{}})(t,n,r))}function K(e,t,n,r,i){for(;n;)n=on(e,t,n,r,i);return n}function q(e,t){for(let n of t){if(!n)continue;let t=n[e];if(t!==void 0)return t}}function cn(e){let t=e._keys;return t||=e._keys=(function(e){let t=new Set;for(let n of e)for(let e of Object.keys(n).filter(e=>!e.startsWith(`_`)))t.add(e);return Array.from(t)})(e._scopes),t}function ln(e,t,n,r){let{iScale:i}=e,{key:a=`r`}=this._parsing,o=Array(r),s,c,l,u;for(s=0,c=r;s<c;++s)l=s+n,u=t[l],o[s]={r:i.parse(S(u,a),l)};return o}let un=2**-52||1e-14,dn=(e,t)=>t<e.length&&!e[t].skip&&e[t],fn=e=>e===`x`?`y`:`x`;function pn(e,t,n,r){let i=e.skip?t:e,a=t,o=n.skip?t:n,s=se(a,i),c=se(o,a),l=s/(s+c),u=c/(s+c);l=isNaN(l)?0:l,u=isNaN(u)?0:u;let d=r*l,f=r*u;return{previous:{x:a.x-d*(o.x-i.x),y:a.y-d*(o.y-i.y)},next:{x:a.x+f*(o.x-i.x),y:a.y+f*(o.y-i.y)}}}function mn(e,t=`x`){let n=fn(t),r=e.length,i=Array(r).fill(0),a=Array(r),o,s,c,l=dn(e,0);for(o=0;o<r;++o)if(s=c,c=l,l=dn(e,o+1),c){if(l){let e=l[t]-c[t];i[o]=e===0?0:(l[n]-c[n])/e}a[o]=s?l?ee(i[o-1])===ee(i[o])?(i[o-1]+i[o])/2:0:i[o-1]:i[o]}(function(e,t,n){let r=e.length,i,a,o,s,c,l=dn(e,0);for(let u=0;u<r-1;++u)c=l,l=dn(e,u+1),c&&l&&(L(t[u],0,un)?n[u]=n[u+1]=0:(i=n[u]/t[u],a=n[u+1]/t[u],s=i**2+a**2,s<=9||(o=3/Math.sqrt(s),n[u]=i*o*t[u],n[u+1]=a*o*t[u])))})(e,i,a),(function(e,t,n=`x`){let r=fn(n),i=e.length,a,o,s,c=dn(e,0);for(let l=0;l<i;++l){if(o=s,s=c,c=dn(e,l+1),!s)continue;let i=s[n],u=s[r];o&&(a=(i-o[n])/3,s[`cp1${n}`]=i-a,s[`cp1${r}`]=u-a*t[l]),c&&(a=(c[n]-i)/3,s[`cp2${n}`]=i+a,s[`cp2${r}`]=u+a*t[l])}})(e,a,t)}function hn(e,t,n){return Math.max(Math.min(e,n),t)}function gn(e,t,n,r,i){let a,o,s,c;if(t.spanGaps&&(e=e.filter(e=>!e.skip)),t.cubicInterpolationMode===`monotone`)mn(e,i);else{let n=r?e[e.length-1]:e[0];for(a=0,o=e.length;a<o;++a)s=e[a],c=pn(n,s,e[Math.min(a+1,o-+!r)%o],t.tension),s.cp1x=c.previous.x,s.cp1y=c.previous.y,s.cp2x=c.next.x,s.cp2y=c.next.y,n=s}t.capBezierPoints&&(function(e,t){let n,r,i,a,o,s=Ht(e[0],t);for(n=0,r=e.length;n<r;++n)o=a,a=s,s=n<r-1&&Ht(e[n+1],t),a&&(i=e[n],o&&(i.cp1x=hn(i.cp1x,t.left,t.right),i.cp1y=hn(i.cp1y,t.top,t.bottom)),s&&(i.cp2x=hn(i.cp2x,t.left,t.right),i.cp2y=hn(i.cp2y,t.top,t.bottom)))})(e,n)}let J=e=>e===0||e===1,_n=(e,t,n)=>-(2**(10*--e))*Math.sin((e-t)*k/n),vn=(e,t,n)=>2**(-10*e)*Math.sin((e-t)*k/n)+1,yn={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-(--e*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>--e*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>1-Math.cos(e*N),easeOutSine:e=>Math.sin(e*N),easeInOutSine:e=>-.5*(Math.cos(O*e)-1),easeInExpo:e=>e===0?0:2**(10*(e-1)),easeOutExpo:e=>e===1?1:1-2**(-10*e),easeInOutExpo:e=>J(e)?e:e<.5?.5*2**(10*(2*e-1)):.5*(2-2**(-10*(2*e-1))),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1- --e*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>J(e)?e:_n(e,.075,.3),easeOutElastic:e=>J(e)?e:vn(e,.075,.3),easeInOutElastic(e){let t=.1125;return J(e)?e:e<.5?.5*_n(2*e,t,.45):.5+.5*vn(2*e-1,t,.45)},easeInBack(e){let t=1.70158;return e*e*((t+1)*e-t)},easeOutBack(e){let t=1.70158;return--e*e*((t+1)*e+t)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?e*e*((1+(t*=1.525))*e-t)*.5:.5*((e-=2)*e*((1+(t*=1.525))*e+t)+2)},easeInBounce:e=>1-yn.easeOutBounce(1-e),easeOutBounce(e){let t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},easeInOutBounce:e=>e<.5?.5*yn.easeInBounce(2*e):.5*yn.easeOutBounce(2*e-1)+.5};function bn(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function xn(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r===`middle`?n<.5?e.y:t.y:r===`after`?n<1?e.y:t.y:n>0?t.y:e.y}}function Sn(e,t,n,r){let i={x:e.cp2x,y:e.cp2y},a={x:t.cp1x,y:t.cp1y},o=bn(e,i,n),s=bn(i,a,n),c=bn(a,t,n);return bn(bn(o,s,n),bn(s,c,n),n)}let Cn=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,wn=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Tn(e,t){let n=(``+e).match(Cn);if(!n||n[1]===`normal`)return 1.2*t;switch(e=+n[2],n[3]){case`px`:return e;case`%`:e/=100}return t*e}let En=e=>+e||0;function Dn(e,t){let n={},r=a(t),i=r?Object.keys(t):t,o=a(e)?r?n=>c(e[n],e[t[n]]):t=>e[t]:()=>e;for(let e of i)n[e]=En(o(e));return n}function On(e){return Dn(e,{top:`y`,right:`x`,bottom:`y`,left:`x`})}function kn(e){return Dn(e,[`topLeft`,`topRight`,`bottomLeft`,`bottomRight`])}function An(e){let t=On(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function jn(e,t){e||={},t||=bt.font;let n=c(e.size,t.size);typeof n==`string`&&(n=parseInt(n,10));let r=c(e.style,t.style);r&&!(``+r).match(wn)&&(console.warn(`Invalid font style specified: "`+r+`"`),r=void 0);let i={family:c(e.family,t.family),lineHeight:Tn(c(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:c(e.weight,t.weight),string:``};return i.string=Ft(i),i}function Mn(e,t,n,r){let a,o,s,c=!0;for(a=0,o=e.length;a<o;++a)if(s=e[a],s!==void 0&&(t!==void 0&&typeof s==`function`&&(s=s(t),c=!1),n!==void 0&&i(s)&&(s=s[n%s.length],c=!1),s!==void 0))return r&&!c&&(r.cacheable=!1),s}function Nn(e,t,n){let{min:r,max:i}=e,a=u(t,(i-r)/2),o=(e,t)=>n&&e===0?0:e+t;return{min:o(r,-Math.abs(a)),max:o(i,a)}}function Pn(e,t){return Object.assign(Object.create(e),t)}function Fn(e,t,n){return e?(function(e,t){return{x:n=>e+e+t-n,setWidth(e){t=e},textAlign:e=>e===`center`?e:e===`right`?`left`:`right`,xPlus:(e,t)=>e-t,leftForLtr:(e,t)=>e-t}})(t,n):{x:e=>e,setWidth(e){},textAlign:e=>e,xPlus:(e,t)=>e+t,leftForLtr:(e,t)=>e}}function In(e,t){let n,r;t!==`ltr`&&t!==`rtl`||(n=e.canvas.style,r=[n.getPropertyValue(`direction`),n.getPropertyPriority(`direction`)],n.setProperty(`direction`,t,`important`),e.prevTextDirection=r)}function Ln(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty(`direction`,t[0],t[1]))}function Y(e){return e===`angle`?{between:ue,compare:ce,normalize:le}:{between:fe,compare:(e,t)=>e-t,normalize:e=>e}}function Rn({start:e,end:t,count:n,loop:r,style:i}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n==0,style:i}}function X(e,t,n){if(!n)return[e];let{property:r,start:i,end:a}=n,o=t.length,{compare:s,between:c,normalize:l}=Y(r),{start:u,end:d,loop:f,style:p}=(function(e,t,n){let{property:r,start:i,end:a}=n,{between:o,normalize:s}=Y(r),c=t.length,l,u,{start:d,end:f,loop:p}=e;if(p){for(d+=c,f+=c,l=0,u=c;l<u&&o(s(t[d%c][r]),i,a);++l)d--,f--;d%=c,f%=c}return f<d&&(f+=c),{start:d,end:f,loop:p,style:e.style}})(e,t,n),m=[],h,g,_,v=!1,y=null,b=()=>v||c(i,_,h)&&s(i,_)!==0,x=()=>!v||s(a,h)===0||c(a,_,h);for(let e=u,n=u;e<=d;++e)g=t[e%o],g.skip||(h=l(g[r]),h!==_&&(v=c(h,i,a),y===null&&b()&&(y=s(h,i)===0?e:n),y!==null&&x()&&(m.push(Rn({start:y,end:e,loop:f,count:o,style:p})),y=null),n=e,_=h));return y!==null&&m.push(Rn({start:y,end:d,loop:f,count:o,style:p})),m}function zn(e,t){let n=[],r=e.segments;for(let i=0;i<r.length;i++){let a=X(r[i],e.points,t);a.length&&n.push(...a)}return n}function Bn(e,t){let n=e.points,r=e.options.spanGaps,i=n.length;if(!i)return[];let a=!!e._loop,{start:o,end:s}=(function(e,t,n,r){let i=0,a=t-1;if(n&&!r)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,n&&(a+=i);a>i&&e[a%t].skip;)a--;return a%=t,{start:i,end:a}})(n,i,a,r);return!0===r?Z(e,[{start:o,end:s,loop:a}],n,t):Z(e,(function(e,t,n,r){let i=e.length,a=[],o,s=t,c=e[t];for(o=t+1;o<=n;++o){let n=e[o%i];n.skip||n.stop?c.skip||(r=!1,a.push({start:t%i,end:(o-1)%i,loop:r}),t=s=n.stop?o:null):(s=o,c.skip&&(t=o)),c=n}return s!==null&&a.push({start:t%i,end:s%i,loop:r}),a})(n,o,s<o?s+i:s,!!e._fullLoop&&o===0&&s===i-1),n,t)}function Z(e,t,n,r){return r&&r.setContext&&n?(function(e,t,n,r){let i=e._chart.getContext(),a=Vn(e.options),{_datasetIndex:o,options:{spanGaps:s}}=e,c=n.length,l=[],u=a,d=t[0].start,f=d;function p(e,t,r,i){let a=s?-1:1;if(e!==t){for(e+=c;n[e%c].skip;)e-=a;for(;n[t%c].skip;)t+=a;e%c!=t%c&&(l.push({start:e%c,end:t%c,loop:r,style:i}),u=i,d=t%c)}}for(let e of t){d=s?d:e.start;let t,a=n[d%c];for(f=d+1;f<=e.end;f++){let s=n[f%c];t=Vn(r.setContext(Pn(i,{type:`segment`,p0:a,p1:s,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),Hn(t,u)&&p(d,f-1,e.loop,u),a=s,u=t}d<f-1&&p(d,f-1,e.loop,u)}return l})(e,t,n,r):t}function Vn(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function Hn(e,t){if(!t)return!1;let n=[],r=function(e,t){return ot(t)?(n.includes(t)||n.push(t),n.indexOf(t)):t};return JSON.stringify(e,r)!==JSON.stringify(t,r)}function Un(e,t,n){return e.options.clip?e[n]:t[n]}function Wn(e,t){let n=t._clip;if(n.disabled)return!1;let r=(function(e,t){let{xScale:n,yScale:r}=e;return n&&r?{left:Un(n,t,`left`),right:Un(n,t,`right`),top:Un(r,t,`top`),bottom:Un(r,t,`bottom`)}:t})(t,e.chartArea);return{left:!1===n.left?0:r.left-(!0===n.left?0:n.left),right:!1===n.right?e.width:r.right+(!0===n.right?0:n.right),top:!1===n.top?0:r.top-(!0===n.top?0:n.top),bottom:!1===n.bottom?e.height:r.bottom+(!0===n.bottom?0:n.bottom)}}var Gn=Object.freeze({__proto__:null,HALF_PI:N,INFINITY:j,PI:O,PITAU:A,QUARTER_PI:P,RAD_PER_DEG:M,TAU:k,TWO_THIRDS_PI:F,_addGrace:Nn,_alignPixel:Rt,_alignStartEnd:xe,_angleBetween:ue,_angleDiff:ce,_arrayUnique:G,_attachContext:Qt,_bezierCurveTo:Kt,_bezierInterpolation:Sn,_boundSegment:X,_boundSegments:zn,_capitalize:C,_computeSegments:Bn,_createResolver:Zt,_decimalPlaces:ae,_deprecated:function(e,t,n,r){t!==void 0&&console.warn(e+`: "`+n+`" is deprecated. Please use "`+r+`" instead`)},_descriptors:$t,_elementsEqual:p,_factorize:R,_filterBetween:he,_getParentNode:St,_getStartAndCountOfVisiblePoints:Ce,_int16Range:de,_isBetween:fe,_isClickEvent:D,_isDomSupported:xt,_isPointInArea:Ht,_limitValue:V,_longestText:Lt,_lookup:H,_lookupByKey:pe,_measureText:It,_merger:g,_mergerIf:y,_normalizeAngle:le,_parseObjectDataRadialScale:ln,_pointInLine:bn,_readValueToProps:Dn,_rlookupByKey:me,_scaleRangesChanged:we,_setMinAndMaxByKey:B,_splitKey:x,_steppedInterpolation:xn,_steppedLineTo:Gt,_textX:Se,_toLeftRightCenter:be,_updateBezierControlPoints:gn,addRoundedRectPath:Xt,almostEquals:L,almostWhole:z,callback:d,clearCanvas:zt,clipArea:Ut,clone:m,color:st,createContext:Pn,debounce:ye,defined:w,distanceBetweenPoints:se,drawPoint:Bt,drawPointLegend:Vt,each:f,easingEffects:yn,finiteOrDefault:s,fontString:function(e,t,n){return t+` `+e+`px `+n},formatNumber:ft,getAngleFromPoint:oe,getDatasetClipArea:Wn,getHoverColor:ct,getMaximumSize:jt,getRelativePosition:kt,getRtlAdapter:Fn,getStyle:Tt,isArray:i,isFinite:o,isFunction:T,isNullOrUndef:r,isNumber:ne,isObject:a,isPatternOrGradient:ot,listenArrayEvents:ge,log10:I,merge:_,mergeIf:v,niceNum:te,noop:t,overrideTextDirection:In,readUsedSize:Pt,renderText:Yt,requestAnimFrame:_e,resolve:Mn,resolveObjectKey:S,restoreTextDirection:Ln,retinaScale:Mt,setsEqual:E,sign:ee,splineCurve:pn,splineCurveMonotone:mn,supportsEventListenerOptions:Nt,throttled:ve,toDegrees:ie,toDimension:u,toFont:jn,toFontString:Ft,toLineHeight:Tn,toPadding:An,toPercentage:l,toRadians:re,toTRBL:On,toTRBLCorners:kn,uid:n,unclipArea:Wt,unlistenArrayEvents:W,valueOrDefault:c});function Kn(e,t,n,i){let{controller:a,data:o,_sorted:s}=e,c=a._cachedMeta.iScale,l=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(c&&t===c.axis&&t!==`r`&&s&&o.length){let s=c._reversePixels?me:pe;if(!i){let i=s(o,t,n);if(l){let{vScale:t}=a._cachedMeta,{_parsed:n}=e,o=n.slice(0,i.lo+1).reverse().findIndex(e=>!r(e[t.axis]));i.lo-=Math.max(0,o);let s=n.slice(i.hi).findIndex(e=>!r(e[t.axis]));i.hi+=Math.max(0,s)}return i}if(a._sharedOptions){let e=o[0],r=typeof e.getRange==`function`&&e.getRange(t);if(r){let e=s(o,t,n-r),i=s(o,t,n+r);return{lo:e.lo,hi:i.hi}}}}return{lo:0,hi:o.length-1}}function qn(e,t,n,r,i){let a=e.getSortedVisibleDatasetMetas(),o=n[t];for(let e=0,n=a.length;e<n;++e){let{index:n,data:s}=a[e],{lo:c,hi:l}=Kn(a[e],t,o,i);for(let e=c;e<=l;++e){let t=s[e];t.skip||r(t,n,e)}}}function Jn(e,t,n,r,i){let a=[];return!i&&!e.isPointInArea(t)||qn(e,n,t,function(n,o,s){(i||Ht(n,e.chartArea,0))&&n.inRange(t.x,t.y,r)&&a.push({element:n,datasetIndex:o,index:s})},!0),a}function Yn(e,t,n,r,i,a){let o=[],s=(function(e){let t=e.indexOf(`x`)!==-1,n=e.indexOf(`y`)!==-1;return function(e,r){let i=t?Math.abs(e.x-r.x):0,a=n?Math.abs(e.y-r.y):0;return Math.sqrt(i**2+a**2)}})(n),c=1/0;return qn(e,n,t,function(n,l,u){let d=n.inRange(t.x,t.y,i);if(r&&!d)return;let f=n.getCenterPoint(i);if(!(a||e.isPointInArea(f))&&!d)return;let p=s(t,f);p<c?(o=[{element:n,datasetIndex:l,index:u}],c=p):p===c&&o.push({element:n,datasetIndex:l,index:u})}),o}function Xn(e,t,n,r,i,a){return a||e.isPointInArea(t)?n!==`r`||r?Yn(e,t,n,r,i,a):(function(e,t,n,r){let i=[];return qn(e,n,t,function(e,n,a){let{startAngle:o,endAngle:s}=e.getProps([`startAngle`,`endAngle`],r),{angle:c}=oe(e,{x:t.x,y:t.y});ue(c,o,s)&&i.push({element:e,datasetIndex:n,index:a})}),i})(e,t,n,i):[]}function Zn(e,t,n,r,i){let a=[],o=n===`x`?`inXRange`:`inYRange`,s=!1;return qn(e,n,t,(e,r,c)=>{e[o]&&e[o](t[n],i)&&(a.push({element:e,datasetIndex:r,index:c}),s||=e.inRange(t.x,t.y,i))}),r&&!s?[]:a}var Qn={evaluateInteractionItems:qn,modes:{index(e,t,n,r){let i=kt(t,e),a=n.axis||`x`,o=n.includeInvisible||!1,s=n.intersect?Jn(e,i,a,r,o):Xn(e,i,a,!1,r,o),c=[];return s.length?(e.getSortedVisibleDatasetMetas().forEach(e=>{let t=s[0].index,n=e.data[t];n&&!n.skip&&c.push({element:n,datasetIndex:e.index,index:t})}),c):[]},dataset(e,t,n,r){let i=kt(t,e),a=n.axis||`xy`,o=n.includeInvisible||!1,s=n.intersect?Jn(e,i,a,r,o):Xn(e,i,a,!1,r,o);if(s.length>0){let t=s[0].datasetIndex,n=e.getDatasetMeta(t).data;s=[];for(let e=0;e<n.length;++e)s.push({element:n[e],datasetIndex:t,index:e})}return s},point:(e,t,n,r)=>Jn(e,kt(t,e),n.axis||`xy`,r,n.includeInvisible||!1),nearest(e,t,n,r){let i=kt(t,e),a=n.axis||`xy`,o=n.includeInvisible||!1;return Xn(e,i,a,n.intersect,r,o)},x:(e,t,n,r)=>Zn(e,kt(t,e),`x`,n.intersect,r),y:(e,t,n,r)=>Zn(e,kt(t,e),`y`,n.intersect,r)}};let $n=[`left`,`top`,`right`,`bottom`];function er(e,t){return e.filter(e=>e.pos===t)}function tr(e,t){return e.filter(e=>$n.indexOf(e.pos)===-1&&e.box.axis===t)}function nr(e,t){return e.sort((e,n)=>{let r=t?n:e,i=t?e:n;return r.weight===i.weight?r.index-i.index:r.weight-i.weight})}function rr(e,t){let n=(function(e){let t={};for(let n of e){let{stack:e,pos:r,stackWeight:i}=n;if(!e||!$n.includes(r))continue;let a=t[e]||(t[e]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=i}return t})(e),{vBoxMaxWidth:r,hBoxMaxHeight:i}=t,a,o,s;for(a=0,o=e.length;a<o;++a){s=e[a];let{fullSize:o}=s.box,c=n[s.stack],l=c&&s.stackWeight/c.weight;s.horizontal?(s.width=l?l*r:o&&t.availableWidth,s.height=i):(s.width=r,s.height=l?l*i:o&&t.availableHeight)}return n}function ir(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function ar(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function or(e,t,n,r){let{pos:i,box:o}=n,s=e.maxPadding;if(!a(i)){n.size&&(e[i]-=n.size);let t=r[n.stack]||{size:0,count:1};t.size=Math.max(t.size,n.horizontal?o.height:o.width),n.size=t.size/t.count,e[i]+=n.size}o.getPadding&&ar(s,o.getPadding());let c=Math.max(0,t.outerWidth-ir(s,e,`left`,`right`)),l=Math.max(0,t.outerHeight-ir(s,e,`top`,`bottom`)),u=c!==e.w,d=l!==e.h;return e.w=c,e.h=l,n.horizontal?{same:u,other:d}:{same:d,other:u}}function sr(e,t){let n=t.maxPadding;function r(e){let r={left:0,top:0,right:0,bottom:0};return e.forEach(e=>{r[e]=Math.max(t[e],n[e])}),r}return r(e?[`left`,`right`]:[`top`,`bottom`])}function cr(e,t,n,r){let i=[],a,o,s,c,l,u;for(a=0,o=e.length,l=0;a<o;++a){s=e[a],c=s.box,c.update(s.width||t.w,s.height||t.h,sr(s.horizontal,t));let{same:o,other:d}=or(t,n,s,r);l|=o&&i.length,u||=d,c.fullSize||i.push(s)}return l&&cr(i,t,n,r)||u}function lr(e,t,n,r,i){e.top=n,e.left=t,e.right=t+r,e.bottom=n+i,e.width=r,e.height=i}function ur(e,t,n,r){let i=n.padding,{x:a,y:o}=t;for(let s of e){let e=s.box,c=r[s.stack]||{count:1,placed:0,weight:1},l=s.stackWeight/c.weight||1;if(s.horizontal){let r=t.w*l,a=c.size||e.height;w(c.start)&&(o=c.start),e.fullSize?lr(e,i.left,o,n.outerWidth-i.right-i.left,a):lr(e,t.left+c.placed,o,r,a),c.start=o,c.placed+=r,o=e.bottom}else{let r=t.h*l,o=c.size||e.width;w(c.start)&&(a=c.start),e.fullSize?lr(e,a,i.top,o,n.outerHeight-i.bottom-i.top):lr(e,a,t.top+c.placed,o,r),c.start=a,c.placed+=r,a=e.right}}t.x=a,t.y=o}var dr={addBox(e,t){e.boxes||=[],t.fullSize=t.fullSize||!1,t.position=t.position||`top`,t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},e.boxes.push(t)},removeBox(e,t){let n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;let i=An(e.options.layout.padding),a=Math.max(t-i.width,0),o=Math.max(n-i.height,0),s=(function(e){let t=(function(e){let t=[],n,r,i,a,o,s;for(n=0,r=(e||[]).length;n<r;++n)i=e[n],{position:a,options:{stack:o,stackWeight:s=1}}=i,t.push({index:n,box:i,pos:a,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&a+o,stackWeight:s});return t})(e),n=nr(t.filter(e=>e.box.fullSize),!0),r=nr(er(t,`left`),!0),i=nr(er(t,`right`)),a=nr(er(t,`top`),!0),o=nr(er(t,`bottom`)),s=tr(t,`x`),c=tr(t,`y`);return{fullSize:n,leftAndTop:r.concat(a),rightAndBottom:i.concat(c).concat(o).concat(s),chartArea:er(t,`chartArea`),vertical:r.concat(i).concat(c),horizontal:a.concat(o).concat(s)}})(e.boxes),c=s.vertical,l=s.horizontal;f(e.boxes,e=>{typeof e.beforeLayout==`function`&&e.beforeLayout()});let u=c.reduce((e,t)=>t.box.options&&!1===t.box.options.display?e:e+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:n,padding:i,availableWidth:a,availableHeight:o,vBoxMaxWidth:a/2/u,hBoxMaxHeight:o/2}),p=Object.assign({},i);ar(p,An(r));let m=Object.assign({maxPadding:p,w:a,h:o,x:i.left,y:i.top},i),h=rr(c.concat(l),d);cr(s.fullSize,m,d,h),cr(c,m,d,h),cr(l,m,d,h)&&cr(c,m,d,h),(function(e){let t=e.maxPadding;function n(n){let r=Math.max(t[n]-e[n],0);return e[n]+=r,r}e.y+=n(`top`),e.x+=n(`left`),n(`right`),n(`bottom`)})(m),ur(s.leftAndTop,m,d,h),m.x+=m.w,m.y+=m.h,ur(s.rightAndBottom,m,d,h),e.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},f(s.chartArea,t=>{let n=t.box;Object.assign(n,e.chartArea),n.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class fr{acquireContext(e,t){}releaseContext(e){return!1}addEventListener(e,t,n){}removeEventListener(e,t,n){}getDevicePixelRatio(){return 1}getMaximumSize(e,t,n,r){return t=Math.max(0,t||e.width),n||=e.height,{width:t,height:Math.max(0,r?Math.floor(t/r):n)}}isAttached(e){return!0}updateConfig(e){}}class pr extends fr{acquireContext(e){return e&&e.getContext&&e.getContext(`2d`)||null}updateConfig(e){e.options.animation=!1}}let mr=`$chartjs`,hr={touchstart:`mousedown`,touchmove:`mousemove`,touchend:`mouseup`,pointerenter:`mouseenter`,pointerdown:`mousedown`,pointermove:`mousemove`,pointerup:`mouseup`,pointerleave:`mouseout`,pointerout:`mouseout`},gr=e=>e===null||e===``,_r=!!Nt&&{passive:!0};function vr(e,t,n){e&&e.canvas&&e.canvas.removeEventListener(t,n,_r)}function yr(e,t){for(let n of e)if(n===t||n.contains(t))return!0}function br(e,t,n){let r=e.canvas,i=new MutationObserver(e=>{let t=!1;for(let n of e)t||=yr(n.addedNodes,r),t&&=!yr(n.removedNodes,r);t&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function xr(e,t,n){let r=e.canvas,i=new MutationObserver(e=>{let t=!1;for(let n of e)t||=yr(n.removedNodes,r),t&&=!yr(n.addedNodes,r);t&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}let Sr=new Map,Cr=0;function wr(){let e=window.devicePixelRatio;e!==Cr&&(Cr=e,Sr.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function Tr(e,t,n){let r=e.canvas,i=r&&St(r);if(!i)return;let a=ve((e,t)=>{let r=i.clientWidth;n(e,t),r<i.clientWidth&&n()},window),o=new ResizeObserver(e=>{let t=e[0],n=t.contentRect.width,r=t.contentRect.height;n===0&&r===0||a(n,r)});return o.observe(i),(function(e,t){Sr.size||window.addEventListener(`resize`,wr),Sr.set(e,t)})(e,a),o}function Er(e,t,n){n&&n.disconnect(),t===`resize`&&(function(e){Sr.delete(e),Sr.size||window.removeEventListener(`resize`,wr)})(e)}function Dr(e,t,n){let r=e.canvas,i=ve(t=>{e.ctx!==null&&n((function(e,t){let n=hr[e.type]||e.type,{x:r,y:i}=kt(e,t);return{type:n,chart:t,native:e,x:r===void 0?null:r,y:i===void 0?null:i}})(t,e))},e);return(function(e,t,n){e&&e.addEventListener(t,n,_r)})(r,t,i),i}class Or extends fr{acquireContext(e,t){let n=e&&e.getContext&&e.getContext(`2d`);return n&&n.canvas===e?((function(e,t){let n=e.style,r=e.getAttribute(`height`),i=e.getAttribute(`width`);if(e[mr]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||`block`,n.boxSizing=n.boxSizing||`border-box`,gr(i)){let t=Pt(e,`width`);t!==void 0&&(e.width=t)}if(gr(r))if(e.style.height===``)e.height=e.width/(t||2);else{let t=Pt(e,`height`);t!==void 0&&(e.height=t)}})(e,t),n):null}releaseContext(e){let t=e.canvas;if(!t[mr])return!1;let n=t[mr].initial;[`height`,`width`].forEach(e=>{let i=n[e];r(i)?t.removeAttribute(e):t.setAttribute(e,i)});let i=n.style||{};return Object.keys(i).forEach(e=>{t.style[e]=i[e]}),t.width=t.width,delete t[mr],!0}addEventListener(e,t,n){this.removeEventListener(e,t);let r=e.$proxies||={};r[t]=({attach:br,detach:xr,resize:Tr}[t]||Dr)(e,t,n)}removeEventListener(e,t){let n=e.$proxies||={},r=n[t];r&&(({attach:Er,detach:Er,resize:Er}[t]||vr)(e,t,r),n[t]=void 0)}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,t,n,r){return jt(e,t,n,r)}isAttached(e){let t=e&&St(e);return!(!t||!t.isConnected)}}function kr(e){return!xt()||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas?pr:Or}var Ar=Object.freeze({__proto__:null,BasePlatform:fr,BasicPlatform:pr,DomPlatform:Or,_detectPlatform:kr});let jr=`transparent`,Mr={boolean:(e,t,n)=>n>.5?t:e,color(e,t,n){let r=st(e||jr),i=r.valid&&st(t||jr);return i&&i.valid?i.mix(r,n).hexString():t},number:(e,t,n)=>e+(t-e)*n};class Nr{constructor(e,t,n,r){let i=t[n];r=Mn([e.to,r,i,e.from]);let a=Mn([e.from,i,r]);this._active=!0,this._fn=e.fn||Mr[e.type||typeof a],this._easing=yn[e.easing]||yn.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=t,this._prop=n,this._from=a,this._to=r,this._promises=void 0}active(){return this._active}update(e,t,n){if(this._active){this._notify(!1);let r=this._target[this._prop],i=n-this._start,a=this._duration-i;this._start=n,this._duration=Math.floor(Math.max(a,e.duration)),this._total+=i,this._loop=!!e.loop,this._to=Mn([e.to,t,r,e.from]),this._from=Mn([e.from,r,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){let t=e-this._start,n=this._duration,r=this._prop,i=this._from,a=this._loop,o=this._to,s;if(this._active=i!==o&&(a||t<n),!this._active)return this._target[r]=o,void this._notify(!0);t<0?this._target[r]=i:(s=t/n%2,s=a&&s>1?2-s:s,s=this._easing(Math.min(1,Math.max(0,s))),this._target[r]=this._fn(i,o,s))}wait(){let e=this._promises||=[];return new Promise((t,n)=>{e.push({res:t,rej:n})})}_notify(e){let t=e?`res`:`rej`,n=this._promises||[];for(let e=0;e<n.length;e++)n[e][t]()}}class Pr{constructor(e,t){this._chart=e,this._properties=new Map,this.configure(t)}configure(e){if(!a(e))return;let t=Object.keys(bt.animation),n=this._properties;Object.getOwnPropertyNames(e).forEach(r=>{let o=e[r];if(!a(o))return;let s={};for(let e of t)s[e]=o[e];(i(o.properties)&&o.properties||[r]).forEach(e=>{e!==r&&n.has(e)||n.set(e,s)})})}_animateOptions(e,t){let n=t.options,r=(function(e,t){if(!t)return;let n=e.options;return n?(n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n):void(e.options=t)})(e,n);if(!r)return[];let i=this._createAnimations(r,n);return n.$shared&&(function(e,t){let n=[],r=Object.keys(t);for(let t=0;t<r.length;t++){let i=e[r[t]];i&&i.active()&&n.push(i.wait())}return Promise.all(n)})(e.options.$animations,n).then(()=>{e.options=n},()=>{}),i}_createAnimations(e,t){let n=this._properties,r=[],i=e.$animations||={},a=Object.keys(t),o=Date.now(),s;for(s=a.length-1;s>=0;--s){let c=a[s];if(c.charAt(0)===`$`)continue;if(c===`options`){r.push(...this._animateOptions(e,t));continue}let l=t[c],u=i[c],d=n.get(c);if(u){if(d&&u.active()){u.update(d,l,o);continue}u.cancel()}d&&d.duration?(i[c]=u=new Nr(d,e,c,l),r.push(u)):e[c]=l}return r}update(e,t){if(this._properties.size===0)return void Object.assign(e,t);let n=this._createAnimations(e,t);return n.length?(Ee.add(this._chart,n),!0):void 0}}function Fr(e,t){let n=e&&e.options||{},r=n.reverse,i=n.min===void 0?t:0,a=n.max===void 0?t:0;return{start:r?a:i,end:r?i:a}}function Ir(e,t){let n=[],r=e._getSortedDatasetMetas(t),i,a;for(i=0,a=r.length;i<a;++i)n.push(r[i].index);return n}function Lr(e,t,n,r={}){let i=e.keys,a=r.mode===`single`,s,c,l,u;if(t===null)return;let d=!1;for(s=0,c=i.length;s<c;++s){if(l=+i[s],l===n){if(d=!0,r.all)continue;break}u=e.values[l],o(u)&&(a||t===0||ee(t)===ee(u))&&(t+=u)}return d||r.all?t:0}function Rr(e,t){let n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function zr(e,t,n){let r=e[t]||(e[t]={});return r[n]||(r[n]={})}function Br(e,t,n,r){for(let i of t.getMatchingVisibleMetas(r).reverse()){let t=e[i.index];if(n&&t>0||!n&&t<0)return i.index}return null}function Vr(e,t){let{chart:n,_cachedMeta:r}=e,i=n._stacks||={},{iScale:a,vScale:o,index:s}=r,c=a.axis,l=o.axis,u=(function(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`})(a,o,r),d=t.length,f;for(let e=0;e<d;++e){let n=t[e],{[c]:a,[l]:d}=n;f=(n._stacks||={})[l]=zr(i,u,a),f[s]=d,f._top=Br(f,o,!0,r.type),f._bottom=Br(f,o,!1,r.type),(f._visualValues||={})[s]=d}}function Hr(e,t){let n=e.scales;return Object.keys(n).filter(e=>n[e].axis===t).shift()}function Ur(e,t){let n=e.controller.index,r=e.vScale&&e.vScale.axis;if(r){t||=e._parsed;for(let e of t){let t=e._stacks;if(!t||t[r]===void 0||t[r][n]===void 0)return;delete t[r][n],t[r]._visualValues!==void 0&&t[r]._visualValues[n]!==void 0&&delete t[r]._visualValues[n]}}}let Wr=e=>e===`reset`||e===`none`,Gr=(e,t)=>t?e:Object.assign({},e);class Kr{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(e,t){this.chart=e,this._ctx=e.ctx,this.index=t,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Rr(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled(`filler`)&&console.warn(`Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options`)}updateIndex(e){this.index!==e&&Ur(this._cachedMeta),this.index=e}linkScales(){let e=this.chart,t=this._cachedMeta,n=this.getDataset(),r=(e,t,n,r)=>e===`x`?t:e===`r`?r:n,i=t.xAxisID=c(n.xAxisID,Hr(e,`x`)),a=t.yAxisID=c(n.yAxisID,Hr(e,`y`)),o=t.rAxisID=c(n.rAxisID,Hr(e,`r`)),s=t.indexAxis,l=t.iAxisID=r(s,i,a,o),u=t.vAxisID=r(s,a,i,o);t.xScale=this.getScaleForId(i),t.yScale=this.getScaleForId(a),t.rScale=this.getScaleForId(o),t.iScale=this.getScaleForId(l),t.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){let t=this._cachedMeta;return e===t.iScale?t.vScale:t.iScale}reset(){this._update(`reset`)}_destroy(){let e=this._cachedMeta;this._data&&W(this._data,this),e._stacked&&Ur(e)}_dataCheck(){let e=this.getDataset(),t=e.data||=[],n=this._data;if(a(t))this._data=(function(e,t){let{iScale:n,vScale:r}=t,i=n.axis===`x`?`x`:`y`,a=r.axis===`x`?`x`:`y`,o=Object.keys(e),s=Array(o.length),c,l,u;for(c=0,l=o.length;c<l;++c)u=o[c],s[c]={[i]:u,[a]:e[u]};return s})(t,this._cachedMeta);else if(n!==t){if(n){W(n,this);let e=this._cachedMeta;Ur(e),e._parsed=[]}t&&Object.isExtensible(t)&&ge(t,this),this._syncList=[],this._data=t}}addElements(){let e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){let t=this._cachedMeta,n=this.getDataset(),r=!1;this._dataCheck();let i=t._stacked;t._stacked=Rr(t.vScale,t),t.stack!==n.stack&&(r=!0,Ur(t),t.stack=n.stack),this._resyncElements(e),(r||i!==t._stacked)&&(Vr(this,t._parsed),t._stacked=Rr(t.vScale,t))}configure(){let e=this.chart.config,t=e.datasetScopeKeys(this._type),n=e.getOptionScopes(this.getDataset(),t,!0);this.options=e.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,t){let{_cachedMeta:n,_data:r}=this,{iScale:o,_stacked:s}=n,c=o.axis,l,u,d,f=e===0&&t===r.length||n._sorted,p=e>0&&n._parsed[e-1];if(!1===this._parsing)n._parsed=r,n._sorted=!0,d=r;else{d=i(r[e])?this.parseArrayData(n,r,e,t):a(r[e])?this.parseObjectData(n,r,e,t):this.parsePrimitiveData(n,r,e,t);let o=()=>u[c]===null||p&&u[c]<p[c];for(l=0;l<t;++l)n._parsed[l+e]=u=d[l],f&&(o()&&(f=!1),p=u);n._sorted=f}s&&Vr(this,d)}parsePrimitiveData(e,t,n,r){let{iScale:i,vScale:a}=e,o=i.axis,s=a.axis,c=i.getLabels(),l=i===a,u=Array(r),d,f,p;for(d=0,f=r;d<f;++d)p=d+n,u[d]={[o]:l||i.parse(c[p],p),[s]:a.parse(t[p],p)};return u}parseArrayData(e,t,n,r){let{xScale:i,yScale:a}=e,o=Array(r),s,c,l,u;for(s=0,c=r;s<c;++s)l=s+n,u=t[l],o[s]={x:i.parse(u[0],l),y:a.parse(u[1],l)};return o}parseObjectData(e,t,n,r){let{xScale:i,yScale:a}=e,{xAxisKey:o=`x`,yAxisKey:s=`y`}=this._parsing,c=Array(r),l,u,d,f;for(l=0,u=r;l<u;++l)d=l+n,f=t[d],c[l]={x:i.parse(S(f,o),d),y:a.parse(S(f,s),d)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,t,n){let r=this.chart,i=this._cachedMeta,a=t[e.axis];return Lr({keys:Ir(r,!0),values:t._stacks[e.axis]._visualValues},a,i.index,{mode:n})}updateRangeFromParsed(e,t,n,r){let i=n[t.axis],a=i===null?NaN:i,o=r&&n._stacks[t.axis];r&&o&&(r.values=o,a=Lr(r,i,this._cachedMeta.index)),e.min=Math.min(e.min,a),e.max=Math.max(e.max,a)}getMinMax(e,t){let n=this._cachedMeta,r=n._parsed,i=n._sorted&&e===n.iScale,a=r.length,s=this._getOtherScale(e),c=((e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:Ir(n,!0),values:null})(t,n,this.chart),l={min:1/0,max:-1/0},{min:u,max:d}=(function(e){let{min:t,max:n,minDefined:r,maxDefined:i}=e.getUserBounds();return{min:r?t:-1/0,max:i?n:1/0}})(s),f,p;function m(){p=r[f];let t=p[s.axis];return!o(p[e.axis])||u>t||d<t}for(f=0;f<a&&(m()||(this.updateRangeFromParsed(l,e,p,c),!i));++f);if(i){for(f=a-1;f>=0;--f)if(!m()){this.updateRangeFromParsed(l,e,p,c);break}}return l}getAllParsedValues(e){let t=this._cachedMeta._parsed,n=[],r,i,a;for(r=0,i=t.length;r<i;++r)a=t[r][e.axis],o(a)&&n.push(a);return n}getMaxOverflow(){return!1}getLabelAndValue(e){let t=this._cachedMeta,n=t.iScale,r=t.vScale,i=this.getParsed(e);return{label:n?``+n.getLabelForValue(i[n.axis]):``,value:r?``+r.getLabelForValue(i[r.axis]):``}}_update(e){let t=this._cachedMeta;this.update(e||`default`),t._clip=(function(e){let t,n,r,i;return a(e)?(t=e.top,n=e.right,r=e.bottom,i=e.left):t=n=r=i=e,{top:t,right:n,bottom:r,left:i,disabled:!1===e}})(c(this.options.clip,(function(e,t,n){if(!1===n)return!1;let r=Fr(e,n),i=Fr(t,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}})(t.xScale,t.yScale,this.getMaxOverflow())))}update(e){}draw(){let e=this._ctx,t=this.chart,n=this._cachedMeta,r=n.data||[],i=t.chartArea,a=[],o=this._drawStart||0,s=this._drawCount||r.length-o,c=this.options.drawActiveElementsOnTop,l;for(n.dataset&&n.dataset.draw(e,i,o,s),l=o;l<o+s;++l){let t=r[l];t.hidden||(t.active&&c?a.push(t):t.draw(e,i))}for(l=0;l<a.length;++l)a[l].draw(e,i)}getStyle(e,t){let n=t?`active`:`default`;return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(e||0,n)}getContext(e,t,n){let r=this.getDataset(),i;if(e>=0&&e<this._cachedMeta.data.length){let t=this._cachedMeta.data[e];i=t.$context||=(function(e,t,n){return Pn(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:`default`,type:`data`})})(this.getContext(),e,t),i.parsed=this.getParsed(e),i.raw=r.data[e],i.index=i.dataIndex=e}else i=this.$context||=(function(e,t){return Pn(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:`default`,type:`dataset`})})(this.chart.getContext(),this.index),i.dataset=r,i.index=i.datasetIndex=this.index;return i.active=!!t,i.mode=n,i}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,t){return this._resolveElementOptions(this.dataElementType.id,t,e)}_resolveElementOptions(e,t=`default`,n){let r=t===`active`,i=this._cachedDataOpts,a=e+`-`+t,o=i[a],s=this.enableOptionSharing&&w(n);if(o)return Gr(o,s);let c=this.chart.config,l=c.datasetElementScopeKeys(this._type,e),u=r?[`${e}Hover`,`hover`,e,``]:[e,``],d=c.getOptionScopes(this.getDataset(),l),f=Object.keys(bt.elements[e]),p=c.resolveNamedOptions(d,f,()=>this.getContext(n,r,t),u);return p.$shared&&(p.$shared=s,i[a]=Object.freeze(Gr(p,s))),p}_resolveAnimations(e,t,n){let r=this.chart,i=this._cachedDataOpts,a=`animation-${t}`,o=i[a];if(o)return o;let s;if(!1!==r.options.animation){let r=this.chart.config,i=r.datasetAnimationScopeKeys(this._type,t),a=r.getOptionScopes(this.getDataset(),i);s=r.createResolver(a,this.getContext(e,n,t))}let c=new Pr(r,s&&s.animations);return s&&s._cacheable&&(i[a]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||=Object.assign({},e)}includeOptions(e,t){return!t||Wr(e)||this.chart._animationsDisabled}_getSharedOptions(e,t){let n=this.resolveDataElementOptions(e,t),r=this._sharedOptions,i=this.getSharedOptions(n),a=this.includeOptions(t,i)||i!==r;return this.updateSharedOptions(i,t,n),{sharedOptions:i,includeOptions:a}}updateElement(e,t,n,r){Wr(r)?Object.assign(e,n):this._resolveAnimations(t,r).update(e,n)}updateSharedOptions(e,t,n){e&&!Wr(t)&&this._resolveAnimations(void 0,t).update(e,n)}_setStyle(e,t,n,r){e.active=r;let i=this.getStyle(t,r);this._resolveAnimations(t,n,r).update(e,{options:!r&&this.getSharedOptions(i)||i})}removeHoverStyle(e,t,n){this._setStyle(e,n,`active`,!1)}setHoverStyle(e,t,n){this._setStyle(e,n,`active`,!0)}_removeDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,`active`,!1)}_setDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,`active`,!0)}_resyncElements(e){let t=this._data,n=this._cachedMeta.data;for(let[e,t,n]of this._syncList)this[e](t,n);this._syncList=[];let r=n.length,i=t.length,a=Math.min(i,r);a&&this.parse(0,a),i>r?this._insertElements(r,i-r,e):i<r&&this._removeElements(i,r-i)}_insertElements(e,t,n=!0){let r=this._cachedMeta,i=r.data,a=e+t,o,s=e=>{for(e.length+=t,o=e.length-1;o>=a;o--)e[o]=e[o-t]};for(s(i),o=e;o<a;++o)i[o]=new this.dataElementType;this._parsing&&s(r._parsed),this.parse(e,t),n&&this.updateElements(i,e,t,`reset`)}updateElements(e,t,n,r){}_removeElements(e,t){let n=this._cachedMeta;if(this._parsing){let r=n._parsed.splice(e,t);n._stacked&&Ur(n,r)}n.data.splice(e,t)}_sync(e){if(this._parsing)this._syncList.push(e);else{let[t,n,r]=e;this[t](n,r)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){let e=arguments.length;this._sync([`_insertElements`,this.getDataset().data.length-e,e])}_onDataPop(){this._sync([`_removeElements`,this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync([`_removeElements`,0,1])}_onDataSplice(e,t){t&&this._sync([`_removeElements`,e,t]);let n=arguments.length-2;n&&this._sync([`_insertElements`,e,n])}_onDataUnshift(){this._sync([`_insertElements`,0,arguments.length])}}class qr{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(e){let{x:t,y:n}=this.getProps([`x`,`y`],e);return{x:t,y:n}}hasValue(){return ne(this.x)&&ne(this.y)}getProps(e,t){let n=this.$animations;if(!t||!n)return this;let r={};return e.forEach(e=>{r[e]=n[e]&&n[e].active()?n[e]._to:this[e]}),r}}function Jr(e,t){let n=e.options.ticks,i=(function(e){let t=e.options.offset,n=e._tickSize(),r=e._length/n+ +!t,i=e._maxLength/n;return Math.floor(Math.min(r,i))})(e),a=Math.min(n.maxTicksLimit||i,i),o=n.major.enabled?(function(e){let t=[],n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t})(t):[],s=o.length,c=o[0],l=o[s-1],u=[];if(s>a)return(function(e,t,n,r){let i,a=0,o=n[0];for(r=Math.ceil(r),i=0;i<e.length;i++)i===o&&(t.push(e[i]),a++,o=n[a*r])})(t,u,o,s/a),u;let d=(function(e,t,n){let r=(function(e){let t=e.length,n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r})(e),i=t.length/n;if(!r)return Math.max(i,1);let a=R(r);for(let e=0,t=a.length-1;e<t;e++){let t=a[e];if(t>i)return t}return Math.max(i,1)})(o,t,a);if(s>0){let e,n,i=s>1?Math.round((l-c)/(s-1)):null;for(Yr(t,u,d,r(i)?0:c-i,c),e=0,n=s-1;e<n;e++)Yr(t,u,d,o[e],o[e+1]);return Yr(t,u,d,l,r(i)?t.length:l+i),u}return Yr(t,u,d),u}function Yr(e,t,n,r,i){let a=c(r,0),o=Math.min(c(i,e.length),e.length),s,l,u,d=0;for(n=Math.ceil(n),i&&(s=i-r,n=s/Math.floor(s/n)),u=a;u<0;)d++,u=Math.round(a+d*n);for(l=Math.max(a,0);l<o;l++)l===u&&(t.push(e[l]),d++,u=Math.round(a+d*n))}let Xr=(e,t,n)=>t===`top`||t===`left`?e[t]+n:e[t]-n,Zr=(e,t)=>Math.min(t||e,e);function Qr(e,t){let n=[],r=e.length/t,i=e.length,a=0;for(;a<i;a+=r)n.push(e[Math.floor(a)]);return n}function $r(e,t,n){let r=e.ticks.length,i=Math.min(t,r-1),a=e._startPixel,o=e._endPixel,s=1e-6,c,l=e.getPixelForTick(i);if(!(n&&(c=r===1?Math.max(l-a,o-l):t===0?(e.getPixelForTick(1)-l)/2:(l-e.getPixelForTick(i-1))/2,l+=i<t?c:-c,l<a-s||l>o+s)))return l}function ei(e){return e.drawTicks?e.tickLength:0}function ti(e,t){if(!e.display)return 0;let n=jn(e.font,t),r=An(e.padding);return(i(e.text)?e.text.length:1)*n.lineHeight+r.height}function ni(e,t,n){let r=be(e);return(n&&t!==`right`||!n&&t===`right`)&&(r=(e=>e===`left`?`right`:e===`right`?`left`:e)(r)),r}class ri extends qr{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,t){return e}getUserBounds(){let{_userMin:e,_userMax:t,_suggestedMin:n,_suggestedMax:r}=this;return e=s(e,1/0),t=s(t,-1/0),n=s(n,1/0),r=s(r,-1/0),{min:s(e,n),max:s(t,r),minDefined:o(e),maxDefined:o(t)}}getMinMax(e){let t,{min:n,max:r,minDefined:i,maxDefined:a}=this.getUserBounds();if(i&&a)return{min:n,max:r};let o=this.getMatchingVisibleMetas();for(let s=0,c=o.length;s<c;++s)t=o[s].controller.getMinMax(this,e),i||(n=Math.min(n,t.min)),a||(r=Math.max(r,t.max));return n=a&&n>r?r:n,r=i&&n>r?n:r,{min:s(n,s(r,n)),max:s(r,s(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||=this._computeLabelItems(e)}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){d(this.options.beforeUpdate,[this])}update(e,t,n){let{beginAtZero:r,grace:i,ticks:a}=this.options,o=a.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=t,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||=(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Nn(this,i,r),!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let s=o<this.ticks.length;this._convertTicksToLabels(s?Qr(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source===`auto`)&&(this.ticks=Jr(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),s&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e,t,n=this.options.reverse;this.isHorizontal()?(e=this.left,t=this.right):(e=this.top,t=this.bottom,n=!n),this._startPixel=e,this._endPixel=t,this._reversePixels=n,this._length=t-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){d(this.options.afterUpdate,[this])}beforeSetDimensions(){d(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){d(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),d(this.options[e],[this])}beforeDataLimits(){this._callHooks(`beforeDataLimits`)}determineDataLimits(){}afterDataLimits(){this._callHooks(`afterDataLimits`)}beforeBuildTicks(){this._callHooks(`beforeBuildTicks`)}buildTicks(){return[]}afterBuildTicks(){this._callHooks(`afterBuildTicks`)}beforeTickToLabelConversion(){d(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){let t=this.options.ticks,n,r,i;for(n=0,r=e.length;n<r;n++)i=e[n],i.label=d(t.callback,[i.value,n,e],this)}afterTickToLabelConversion(){d(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){d(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let e=this.options,t=e.ticks,n=Zr(this.ticks.length,e.ticks.maxTicksLimit),r=t.minRotation||0,i=t.maxRotation,a,o,s,c=r;if(!this._isVisible()||!t.display||r>=i||n<=1||!this.isHorizontal())return void(this.labelRotation=r);let l=this._getLabelSizes(),u=l.widest.width,d=l.highest.height,f=V(this.chart.width-u,0,this.maxWidth);a=e.offset?this.maxWidth/n:f/(n-1),u+6>a&&(a=f/(n-(e.offset?.5:1)),o=this.maxHeight-ei(e.grid)-t.padding-ti(e.title,this.chart.options.font),s=Math.sqrt(u*u+d*d),c=ie(Math.min(Math.asin(V((l.highest.height+6)/a,-1,1)),Math.asin(V(o/s,-1,1))-Math.asin(V(d/s,-1,1)))),c=Math.max(r,Math.min(i,c))),this.labelRotation=c}afterCalculateLabelRotation(){d(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){d(this.options.beforeFit,[this])}fit(){let e={width:0,height:0},{chart:t,options:{ticks:n,title:r,grid:i}}=this,a=this._isVisible(),o=this.isHorizontal();if(a){let a=ti(r,t.options.font);if(o?(e.width=this.maxWidth,e.height=ei(i)+a):(e.height=this.maxHeight,e.width=ei(i)+a),n.display&&this.ticks.length){let{first:t,last:r,widest:i,highest:a}=this._getLabelSizes(),s=2*n.padding,c=re(this.labelRotation),l=Math.cos(c),u=Math.sin(c);if(o){let t=n.mirror?0:u*i.width+l*a.height;e.height=Math.min(this.maxHeight,e.height+t+s)}else{let t=n.mirror?0:l*i.width+u*a.height;e.width=Math.min(this.maxWidth,e.width+t+s)}this._calculatePadding(t,r,u,l)}}this._handleMargins(),o?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,t,n,r){let{ticks:{align:i,padding:a},position:o}=this.options,s=this.labelRotation!==0,c=o!==`top`&&this.axis===`x`;if(this.isHorizontal()){let o=this.getPixelForTick(0)-this.left,l=this.right-this.getPixelForTick(this.ticks.length-1),u=0,d=0;s?c?(u=r*e.width,d=n*t.height):(u=n*e.height,d=r*t.width):i===`start`?d=t.width:i===`end`?u=e.width:i!==`inner`&&(u=e.width/2,d=t.width/2),this.paddingLeft=Math.max((u-o+a)*this.width/(this.width-o),0),this.paddingRight=Math.max((d-l+a)*this.width/(this.width-l),0)}else{let n=t.height/2,r=e.height/2;i===`start`?(n=0,r=e.height):i===`end`&&(n=t.height,r=0),this.paddingTop=n+a,this.paddingBottom=r+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){d(this.options.afterFit,[this])}isHorizontal(){let{axis:e,position:t}=this.options;return t===`top`||t===`bottom`||e===`x`}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){let t,n;for(this.beforeTickToLabelConversion(),this.generateTickLabels(e),t=0,n=e.length;t<n;t++)r(e[t].label)&&(e.splice(t,1),n--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){let t=this.options.ticks.sampleSize,n=this.ticks;t<n.length&&(n=Qr(n,t)),this._labelSizes=e=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,t,n){let{ctx:a,_longestTextCache:o}=this,s=[],c=[],l=Math.floor(t/Zr(t,n)),u,d,p,m,h,g,_,v,y,b,x,S=0,C=0;for(u=0;u<t;u+=l){if(m=e[u].label,h=this._resolveTickFontOptions(u),a.font=g=h.string,_=o[g]=o[g]||{data:{},gc:[]},v=h.lineHeight,y=b=0,r(m)||i(m)){if(i(m))for(d=0,p=m.length;d<p;++d)x=m[d],r(x)||i(x)||(y=It(a,_.data,_.gc,y,x),b+=v)}else y=It(a,_.data,_.gc,y,m),b=v;s.push(y),c.push(b),S=Math.max(y,S),C=Math.max(b,C)}(function(e,t){f(e,e=>{let n=e.gc,r=n.length/2,i;if(r>t){for(i=0;i<r;++i)delete e.data[n[i]];n.splice(0,r)}})})(o,t);let w=s.indexOf(S),T=c.indexOf(C),E=e=>({width:s[e]||0,height:c[e]||0});return{first:E(0),last:E(t-1),widest:E(w),highest:E(T),widths:s,heights:c}}getLabelForValue(e){return e}getPixelForValue(e,t){return NaN}getValueForPixel(e){}getPixelForTick(e){let t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);let t=this._startPixel+e*this._length;return de(this._alignToPixels?Rt(this.chart,t,0):t)}getDecimalForPixel(e){let t=(e-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:e,max:t}=this;return e<0&&t<0?t:e>0&&t>0?e:0}getContext(e){let t=this.ticks||[];if(e>=0&&e<t.length){let n=t[e];return n.$context||=(function(e,t,n){return Pn(e,{tick:n,index:t,type:`tick`})})(this.getContext(),e,n)}return this.$context||=Pn(this.chart.getContext(),{scale:this,type:`scale`})}_tickSize(){let e=this.options.ticks,t=re(this.labelRotation),n=Math.abs(Math.cos(t)),r=Math.abs(Math.sin(t)),i=this._getLabelSizes(),a=e.autoSkipPadding||0,o=i?i.widest.width+a:0,s=i?i.highest.height+a:0;return this.isHorizontal()?s*n>o*r?o/n:s/r:s*r<o*n?s/n:o/r}_isVisible(){let e=this.options.display;return e===`auto`?this.getMatchingVisibleMetas().length>0:!!e}_computeGridLineItems(e){let t=this.axis,n=this.chart,r=this.options,{grid:i,position:o,border:s}=r,l=i.offset,u=this.isHorizontal(),d=this.ticks.length+ +!!l,f=ei(i),p=[],m=s.setContext(this.getContext()),h=m.display?m.width:0,g=h/2,_=function(e){return Rt(n,e,h)},v,y,b,x,S,C,w,T,E,D,O,k;if(o===`top`)v=_(this.bottom),C=this.bottom-f,T=v-g,D=_(e.top)+g,k=e.bottom;else if(o===`bottom`)v=_(this.top),D=e.top,k=_(e.bottom)-g,C=v+g,T=this.top+f;else if(o===`left`)v=_(this.right),S=this.right-f,w=v-g,E=_(e.left)+g,O=e.right;else if(o===`right`)v=_(this.left),E=e.left,O=_(e.right)-g,S=v+g,w=this.left+f;else if(t===`x`){if(o===`center`)v=_((e.top+e.bottom)/2+.5);else if(a(o)){let e=Object.keys(o)[0],t=o[e];v=_(this.chart.scales[e].getPixelForValue(t))}D=e.top,k=e.bottom,C=v+g,T=C+f}else if(t===`y`){if(o===`center`)v=_((e.left+e.right)/2);else if(a(o)){let e=Object.keys(o)[0],t=o[e];v=_(this.chart.scales[e].getPixelForValue(t))}S=v-g,w=S-f,E=e.left,O=e.right}let A=c(r.ticks.maxTicksLimit,d),j=Math.max(1,Math.ceil(d/A));for(y=0;y<d;y+=j){let e=this.getContext(y),t=i.setContext(e),r=s.setContext(e),a=t.lineWidth,o=t.color,c=r.dash||[],d=r.dashOffset,f=t.tickWidth,m=t.tickColor,h=t.tickBorderDash||[],g=t.tickBorderDashOffset;b=$r(this,y,l),b!==void 0&&(x=Rt(n,b,a),u?S=w=E=O=x:C=T=D=k=x,p.push({tx1:S,ty1:C,tx2:w,ty2:T,x1:E,y1:D,x2:O,y2:k,width:a,color:o,borderDash:c,borderDashOffset:d,tickWidth:f,tickColor:m,tickBorderDash:h,tickBorderDashOffset:g}))}return this._ticksLength=d,this._borderValue=v,p}_computeLabelItems(e){let t=this.axis,n=this.options,{position:r,ticks:o}=n,s=this.isHorizontal(),c=this.ticks,{align:l,crossAlign:u,padding:d,mirror:f}=o,p=ei(n.grid),m=p+d,h=f?-d:m,g=-re(this.labelRotation),_=[],v,y,b,x,S,C,w,T,E,D,O,k,A=`middle`;if(r===`top`)C=this.bottom-h,w=this._getXAxisLabelAlignment();else if(r===`bottom`)C=this.top+h,w=this._getXAxisLabelAlignment();else if(r===`left`){let e=this._getYAxisLabelAlignment(p);w=e.textAlign,S=e.x}else if(r===`right`){let e=this._getYAxisLabelAlignment(p);w=e.textAlign,S=e.x}else if(t===`x`){if(r===`center`)C=(e.top+e.bottom)/2+m;else if(a(r)){let e=Object.keys(r)[0],t=r[e];C=this.chart.scales[e].getPixelForValue(t)+m}w=this._getXAxisLabelAlignment()}else if(t===`y`){if(r===`center`)S=(e.left+e.right)/2-m;else if(a(r)){let e=Object.keys(r)[0],t=r[e];S=this.chart.scales[e].getPixelForValue(t)}w=this._getYAxisLabelAlignment(p).textAlign}t===`y`&&(l===`start`?A=`top`:l===`end`&&(A=`bottom`));let j=this._getLabelSizes();for(v=0,y=c.length;v<y;++v){b=c[v],x=b.label;let e=o.setContext(this.getContext(v));T=this.getPixelForTick(v)+o.labelOffset,E=this._resolveTickFontOptions(v),D=E.lineHeight,O=i(x)?x.length:1;let t=O/2,n=e.color,a=e.textStrokeColor,l=e.textStrokeWidth,d,p=w;if(s?(S=T,w===`inner`&&(p=v===y-1?this.options.reverse?`left`:`right`:v===0?this.options.reverse?`right`:`left`:`center`),k=r===`top`?u===`near`||g!==0?-O*D+D/2:u===`center`?-j.highest.height/2-t*D+D:-j.highest.height+D/2:u===`near`||g!==0?D/2:u===`center`?j.highest.height/2-t*D:j.highest.height-O*D,f&&(k*=-1),g===0||e.showLabelBackdrop||(S+=D/2*Math.sin(g))):(C=T,k=(1-O)*D/2),e.showLabelBackdrop){let t=An(e.backdropPadding),n=j.heights[v],r=j.widths[v],i=k-t.top,a=0-t.left;switch(A){case`middle`:i-=n/2;break;case`bottom`:i-=n}switch(w){case`center`:a-=r/2;break;case`right`:a-=r;break;case`inner`:v===y-1?a-=r:v>0&&(a-=r/2)}d={left:a,top:i,width:r+t.width,height:n+t.height,color:e.backdropColor}}_.push({label:x,font:E,textOffset:k,options:{rotation:g,color:n,strokeColor:a,strokeWidth:l,textAlign:p,textBaseline:A,translation:[S,C],backdrop:d}})}return _}_getXAxisLabelAlignment(){let{position:e,ticks:t}=this.options;if(-re(this.labelRotation))return e===`top`?`left`:`right`;let n=`center`;return t.align===`start`?n=`left`:t.align===`end`?n=`right`:t.align===`inner`&&(n=`inner`),n}_getYAxisLabelAlignment(e){let{position:t,ticks:{crossAlign:n,mirror:r,padding:i}}=this.options,a=e+i,o=this._getLabelSizes().widest.width,s,c;return t===`left`?r?(c=this.right+i,n===`near`?s=`left`:n===`center`?(s=`center`,c+=o/2):(s=`right`,c+=o)):(c=this.right-a,n===`near`?s=`right`:n===`center`?(s=`center`,c-=o/2):(s=`left`,c=this.left)):t===`right`?r?(c=this.left+i,n===`near`?s=`right`:n===`center`?(s=`center`,c-=o/2):(s=`left`,c-=o)):(c=this.left+a,n===`near`?s=`left`:n===`center`?(s=`center`,c+=o/2):(s=`right`,c=this.right)):s=`right`,{textAlign:s,x:c}}_computeLabelArea(){if(this.options.ticks.mirror)return;let e=this.chart,t=this.options.position;return t===`left`||t===`right`?{top:0,left:this.left,bottom:e.height,right:this.right}:t===`top`||t===`bottom`?{top:this.top,left:0,bottom:this.bottom,right:e.width}:void 0}drawBackground(){let{ctx:e,options:{backgroundColor:t},left:n,top:r,width:i,height:a}=this;t&&(e.save(),e.fillStyle=t,e.fillRect(n,r,i,a),e.restore())}getLineWidthForValue(e){let t=this.options.grid;if(!this._isVisible()||!t.display)return 0;let n=this.ticks.findIndex(t=>t.value===e);return n>=0?t.setContext(this.getContext(n)).lineWidth:0}drawGrid(e){let t=this.options.grid,n=this.ctx,r=this._gridLineItems||=this._computeGridLineItems(e),i,a,o=(e,t,r)=>{r.width&&r.color&&(n.save(),n.lineWidth=r.width,n.strokeStyle=r.color,n.setLineDash(r.borderDash||[]),n.lineDashOffset=r.borderDashOffset,n.beginPath(),n.moveTo(e.x,e.y),n.lineTo(t.x,t.y),n.stroke(),n.restore())};if(t.display)for(i=0,a=r.length;i<a;++i){let e=r[i];t.drawOnChartArea&&o({x:e.x1,y:e.y1},{x:e.x2,y:e.y2},e),t.drawTicks&&o({x:e.tx1,y:e.ty1},{x:e.tx2,y:e.ty2},{color:e.tickColor,width:e.tickWidth,borderDash:e.tickBorderDash,borderDashOffset:e.tickBorderDashOffset})}}drawBorder(){let{chart:e,ctx:t,options:{border:n,grid:r}}=this,i=n.setContext(this.getContext()),a=n.display?i.width:0;if(!a)return;let o=r.setContext(this.getContext(0)).lineWidth,s=this._borderValue,c,l,u,d;this.isHorizontal()?(c=Rt(e,this.left,a)-a/2,l=Rt(e,this.right,o)+o/2,u=d=s):(u=Rt(e,this.top,a)-a/2,d=Rt(e,this.bottom,o)+o/2,c=l=s),t.save(),t.lineWidth=i.width,t.strokeStyle=i.color,t.beginPath(),t.moveTo(c,u),t.lineTo(l,d),t.stroke(),t.restore()}drawLabels(e){if(!this.options.ticks.display)return;let t=this.ctx,n=this._computeLabelArea();n&&Ut(t,n);let r=this.getLabelItems(e);for(let e of r){let n=e.options,r=e.font;Yt(t,e.label,0,e.textOffset,r,n)}n&&Wt(t)}drawTitle(){let{ctx:e,options:{position:t,title:n,reverse:r}}=this;if(!n.display)return;let o=jn(n.font),s=An(n.padding),c=n.align,l=o.lineHeight/2;t===`bottom`||t===`center`||a(t)?(l+=s.bottom,i(n.text)&&(l+=o.lineHeight*(n.text.length-1))):l+=s.top;let{titleX:u,titleY:d,maxWidth:f,rotation:p}=(function(e,t,n,r){let{top:i,left:o,bottom:s,right:c,chart:l}=e,{chartArea:u,scales:d}=l,f,p,m,h=0,g=s-i,_=c-o;if(e.isHorizontal()){if(p=xe(r,o,c),a(n)){let e=Object.keys(n)[0],r=n[e];m=d[e].getPixelForValue(r)+g-t}else m=n===`center`?(u.bottom+u.top)/2+g-t:Xr(e,n,t);f=c-o}else{if(a(n)){let e=Object.keys(n)[0],r=n[e];p=d[e].getPixelForValue(r)-_+t}else p=n===`center`?(u.left+u.right)/2-_+t:Xr(e,n,t);m=xe(r,s,i),h=n===`left`?-N:N}return{titleX:p,titleY:m,maxWidth:f,rotation:h}})(this,l,t,c);Yt(e,n.text,0,0,o,{color:n.color,maxWidth:f,rotation:p,textAlign:ni(c,t,r),textBaseline:`middle`,translation:[u,d]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){let e=this.options,t=e.ticks&&e.ticks.z||0,n=c(e.grid&&e.grid.z,-1),r=c(e.border&&e.border.z,0);return this._isVisible()&&this.draw===ri.prototype.draw?[{z:n,draw:e=>{this.drawBackground(),this.drawGrid(e),this.drawTitle()}},{z:r,draw:()=>{this.drawBorder()}},{z:t,draw:e=>{this.drawLabels(e)}}]:[{z:t,draw:e=>{this.draw(e)}}]}getMatchingVisibleMetas(e){let t=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+`AxisID`,r=[],i,a;for(i=0,a=t.length;i<a;++i){let a=t[i];a[n]!==this.id||e&&a.type!==e||r.push(a)}return r}_resolveTickFontOptions(e){return jn(this.options.ticks.setContext(this.getContext(e)).font)}_maxDigits(){let e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class ii{constructor(e,t,n){this.type=e,this.scope=t,this.override=n,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){let t=Object.getPrototypeOf(e),n;(function(e){return`id`in e&&`defaults`in e})(t)&&(n=this.register(t));let r=this.items,i=e.id,a=this.scope+`.`+i;if(!i)throw Error(`class does not have id: `+e);return i in r||(r[i]=e,(function(e,t,n){let r=_(Object.create(null),[n?bt.get(n):{},bt.get(t),e.defaults]);bt.set(t,r),e.defaultRoutes&&(function(e,t){Object.keys(t).forEach(n=>{let r=n.split(`.`),i=r.pop(),a=[e].concat(r).join(`.`),o=t[n].split(`.`),s=o.pop(),c=o.join(`.`);bt.route(a,i,c,s)})})(t,e.defaultRoutes),e.descriptors&&bt.describe(t,e.descriptors)})(e,a,n),this.override&&bt.override(e.id,e.overrides)),a}get(e){return this.items[e]}unregister(e){let t=this.items,n=e.id,r=this.scope;n in t&&delete t[n],r&&n in bt[r]&&(delete bt[r][n],this.override&&delete ht[n])}}class ai{constructor(){this.controllers=new ii(Kr,`datasets`,!0),this.elements=new ii(qr,`elements`),this.plugins=new ii(Object,`plugins`),this.scales=new ii(ri,`scales`),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each(`register`,e)}remove(...e){this._each(`unregister`,e)}addControllers(...e){this._each(`register`,e,this.controllers)}addElements(...e){this._each(`register`,e,this.elements)}addPlugins(...e){this._each(`register`,e,this.plugins)}addScales(...e){this._each(`register`,e,this.scales)}getController(e){return this._get(e,this.controllers,`controller`)}getElement(e){return this._get(e,this.elements,`element`)}getPlugin(e){return this._get(e,this.plugins,`plugin`)}getScale(e){return this._get(e,this.scales,`scale`)}removeControllers(...e){this._each(`unregister`,e,this.controllers)}removeElements(...e){this._each(`unregister`,e,this.elements)}removePlugins(...e){this._each(`unregister`,e,this.plugins)}removeScales(...e){this._each(`unregister`,e,this.scales)}_each(e,t,n){[...t].forEach(t=>{let r=n||this._getRegistryForType(t);n||r.isForType(t)||r===this.plugins&&t.id?this._exec(e,r,t):f(t,t=>{let r=n||this._getRegistryForType(t);this._exec(e,r,t)})})}_exec(e,t,n){let r=C(e);d(n[`before`+r],[],n),t[e](n),d(n[`after`+r],[],n)}_getRegistryForType(e){for(let t=0;t<this._typedRegistries.length;t++){let n=this._typedRegistries[t];if(n.isForType(e))return n}return this.plugins}_get(e,t,n){let r=t.get(e);if(r===void 0)throw Error(`"`+e+`" is not a registered `+n+`.`);return r}}var oi=new ai;class si{constructor(){this._init=void 0}notify(e,t,n,r){if(t===`beforeInit`&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,`install`)),this._init===void 0)return;let i=r?this._descriptors(e).filter(r):this._descriptors(e),a=this._notify(i,e,t,n);return t===`afterDestroy`&&(this._notify(i,e,`stop`),this._notify(this._init,e,`uninstall`),this._init=void 0),a}_notify(e,t,n,r){r||={};for(let i of e){let e=i.plugin;if(!1===d(e[n],[t,r,i.options],e)&&r.cancelable)return!1}return!0}invalidate(){r(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;let t=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),t}_createDescriptors(e,t){let n=e&&e.config,r=c(n.options&&n.options.plugins,{}),i=(function(e){let t={},n=[],r=Object.keys(oi.plugins.items);for(let e=0;e<r.length;e++)n.push(oi.getPlugin(r[e]));let i=e.plugins||[];for(let e=0;e<i.length;e++){let r=i[e];n.indexOf(r)===-1&&(n.push(r),t[r.id]=!0)}return{plugins:n,localIds:t}})(n);return!1!==r||t?(function(e,{plugins:t,localIds:n},r,i){let a=[],o=e.getContext();for(let s of t){let t=s.id,c=ci(r[t],i);c!==null&&a.push({plugin:s,options:li(e.config,{plugin:s,local:n[t]},c,o)})}return a})(e,i,r,t):[]}_notifyStateChanges(e){let t=this._oldCache||[],n=this._cache,r=(e,t)=>e.filter(e=>!t.some(t=>e.plugin.id===t.plugin.id));this._notify(r(t,n),e,`stop`),this._notify(r(n,t),e,`start`)}}function ci(e,t){return t||!1!==e?!0===e?{}:e:null}function li(e,{plugin:t,local:n},r,i){let a=e.pluginScopeKeys(t),o=e.getOptionScopes(r,a);return n&&t.defaults&&o.push(t.defaults),e.createResolver(o,i,[``],{scriptable:!1,indexable:!1,allKeys:!0})}function ui(e,t){let n=bt.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||`x`}function di(e){if(e===`x`||e===`y`||e===`r`)return e}function fi(e,...t){if(di(e))return e;for(let r of t){let t=r.axis||((n=r.position)===`top`||n===`bottom`?`x`:n===`left`||n===`right`?`y`:void 0)||e.length>1&&di(e[0].toLowerCase());if(t)return t}var n;throw Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function pi(e,t,n){if(n[t+`AxisID`]===e)return{axis:t}}function mi(e,t){let n=ht[e.type]||{scales:{}},r=t.scales||{},i=ui(e.type,t),o=Object.create(null);return Object.keys(r).forEach(t=>{let s=r[t];if(!a(s))return console.error(`Invalid scale configuration for scale: ${t}`);if(s._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${t}`);let c=fi(t,s,(function(e,t){if(t.data&&t.data.datasets){let n=t.data.datasets.filter(t=>t.xAxisID===e||t.yAxisID===e);if(n.length)return pi(e,`x`,n[0])||pi(e,`y`,n[0])}return{}})(t,e),bt.scales[s.type]),l=(function(e,t){return e===t?`_index_`:`_value_`})(c,i),u=n.scales||{};o[t]=v(Object.create(null),[{axis:c},s,u[c],u[l]])}),e.data.datasets.forEach(n=>{let i=n.type||e.type,a=n.indexAxis||ui(i,t),s=(ht[i]||{}).scales||{};Object.keys(s).forEach(e=>{let t=(function(e,t){let n=e;return e===`_index_`?n=t:e===`_value_`&&(n=t===`x`?`y`:`x`),n})(e,a),i=n[t+`AxisID`]||t;o[i]=o[i]||Object.create(null),v(o[i],[{axis:t},r[i],s[e]])})}),Object.keys(o).forEach(e=>{let t=o[e];v(t,[bt.scales[t.type],bt.scale])}),o}function hi(e){let t=e.options||={};t.plugins=c(t.plugins,{}),t.scales=mi(e,t)}function gi(e){return(e||={}).datasets=e.datasets||[],e.labels=e.labels||[],e}let _i=new Map,vi=new Set;function yi(e,t){let n=_i.get(e);return n||(n=t(),_i.set(e,n),vi.add(n)),n}let bi=(e,t,n)=>{let r=S(t,n);r!==void 0&&e.add(r)};class xi{constructor(e){this._config=(function(e){return(e||={}).data=gi(e.data),hi(e),e})(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=gi(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){let e=this._config;this.clearCache(),hi(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return yi(e,()=>[[`datasets.${e}`,``]])}datasetAnimationScopeKeys(e,t){return yi(`${e}.transition.${t}`,()=>[[`datasets.${e}.transitions.${t}`,`transitions.${t}`],[`datasets.${e}`,``]])}datasetElementScopeKeys(e,t){return yi(`${e}-${t}`,()=>[[`datasets.${e}.elements.${t}`,`datasets.${e}`,`elements.${t}`,``]])}pluginScopeKeys(e){let t=e.id;return yi(`${this.type}-plugin-${t}`,()=>[[`plugins.${t}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,t){let n=this._scopeCache,r=n.get(e);return r&&!t||(r=new Map,n.set(e,r)),r}getOptionScopes(e,t,n){let{options:r,type:i}=this,a=this._cachedScopes(e,n),o=a.get(t);if(o)return o;let s=new Set;t.forEach(t=>{e&&(s.add(e),t.forEach(t=>bi(s,e,t))),t.forEach(e=>bi(s,r,e)),t.forEach(e=>bi(s,ht[i]||{},e)),t.forEach(e=>bi(s,bt,e)),t.forEach(e=>bi(s,gt,e))});let c=Array.from(s);return c.length===0&&c.push(Object.create(null)),vi.has(t)&&a.set(t,c),c}chartOptionScopes(){let{options:e,type:t}=this;return[e,ht[t]||{},bt.datasets[t]||{},{type:t},bt,gt]}resolveNamedOptions(e,t,n,r=[``]){let a={$shared:!0},{resolver:o,subPrefixes:s}=Si(this._resolverCache,e,r),c=o;(function(e,t){let{isScriptable:n,isIndexable:r}=$t(e);for(let a of t){let t=n(a),o=r(a),s=(o||t)&&e[a];if(t&&(T(s)||Ci(s))||o&&i(s))return!0}return!1})(o,t)&&(a.$shared=!1,c=Qt(o,n=T(n)?n():n,this.createResolver(e,n,s)));for(let e of t)a[e]=c[e];return a}createResolver(e,t,n=[``],r){let{resolver:i}=Si(this._resolverCache,e,n);return a(t)?Qt(i,t,void 0,r):i}}function Si(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));let i=n.join(),a=r.get(i);return a||(a={resolver:Zt(t,n),subPrefixes:n.filter(e=>!e.toLowerCase().includes(`hover`))},r.set(i,a)),a}let Ci=e=>a(e)&&Object.getOwnPropertyNames(e).some(t=>T(e[t])),wi=[`top`,`bottom`,`left`,`right`,`chartArea`];function Ti(e,t){return e===`top`||e===`bottom`||wi.indexOf(e)===-1&&t===`x`}function Ei(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function Di(e){let t=e.chart,n=t.options.animation;t.notifyPlugins(`afterRender`),d(n&&n.onComplete,[e],t)}function Oi(e){let t=e.chart,n=t.options.animation;d(n&&n.onProgress,[e],t)}function ki(e){return xt()&&typeof e==`string`?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}let Ai={},ji=e=>{let t=ki(e);return Object.values(Ai).filter(e=>e.canvas===t).pop()};function Mi(e,t,n){let r=Object.keys(e);for(let i of r){let r=+i;if(r>=t){let a=e[i];delete e[i],(n>0||r>t)&&(e[r+n]=a)}}}class Ni{static defaults=bt;static instances=Ai;static overrides=ht;static registry=oi;static version=`4.5.1`;static getChart=ji;static register(...e){oi.add(...e),Pi()}static unregister(...e){oi.remove(...e),Pi()}constructor(e,t){let r=this.config=new xi(t),i=ki(e),a=ji(i);if(a)throw Error(`Canvas is already in use. Chart with ID '`+a.id+`' must be destroyed before the canvas with ID '`+a.canvas.id+`' can be reused.`);let o=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||(kr(i))),this.platform.updateConfig(r);let s=this.platform.acquireContext(i,o.aspectRatio),c=s&&s.canvas,l=c&&c.height,u=c&&c.width;this.id=n(),this.ctx=s,this.canvas=c,this.width=u,this.height=l,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new si,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=ye(e=>this.update(e),o.resizeDelay||0),this._dataChanges=[],Ai[this.id]=this,s&&c?(Ee.listen(this,`complete`,Di),Ee.listen(this,`progress`,Oi),this._initialize(),this.attached&&this.update()):console.error(`Failed to create chart: can't acquire context from the given item`)}get aspectRatio(){let{options:{aspectRatio:e,maintainAspectRatio:t},width:n,height:i,_aspectRatio:a}=this;return r(e)?t&&a?a:i?n/i:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return oi}_initialize(){return this.notifyPlugins(`beforeInit`),this.options.responsive?this.resize():Mt(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins(`afterInit`),this}clear(){return zt(this.canvas,this.ctx),this}stop(){return Ee.stop(this),this}resize(e,t){Ee.running(this)?this._resizeBeforeDraw={width:e,height:t}:this._resize(e,t)}_resize(e,t){let n=this.options,r=this.canvas,i=n.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(r,e,t,i),o=n.devicePixelRatio||this.platform.getDevicePixelRatio(),s=this.width?`resize`:`attach`;this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,Mt(this,o,!0)&&(this.notifyPlugins(`resize`,{size:a}),d(n.onResize,[this,a],this),this.attached&&this._doResize(s)&&this.render())}ensureScalesHaveIDs(){f(this.options.scales||{},(e,t)=>{e.id=t})}buildOrUpdateScales(){let e=this.options,t=e.scales,n=this.scales,r=Object.keys(n).reduce((e,t)=>(e[t]=!1,e),{}),i=[];t&&(i=i.concat(Object.keys(t).map(e=>{let n=t[e],r=fi(e,n),i=r===`r`,a=r===`x`;return{options:n,dposition:i?`chartArea`:a?`bottom`:`left`,dtype:i?`radialLinear`:a?`category`:`linear`}}))),f(i,t=>{let i=t.options,a=i.id,o=fi(a,i),s=c(i.type,t.dtype);i.position!==void 0&&Ti(i.position,o)===Ti(t.dposition)||(i.position=t.dposition),r[a]=!0;let l=null;a in n&&n[a].type===s?l=n[a]:(l=new(oi.getScale(s))({id:a,type:s,ctx:this.ctx,chart:this}),n[l.id]=l),l.init(i,e)}),f(r,(e,t)=>{e||delete n[t]}),f(n,e=>{dr.configure(this,e,e.options),dr.addBox(this,e)})}_updateMetasets(){let e=this._metasets,t=this.data.datasets.length,n=e.length;if(e.sort((e,t)=>e.index-t.index),n>t){for(let e=t;e<n;++e)this._destroyDatasetMeta(e);e.splice(t,n-t)}this._sortedMetasets=e.slice(0).sort(Ei(`order`,`index`))}_removeUnreferencedMetasets(){let{_metasets:e,data:{datasets:t}}=this;e.length>t.length&&delete this._stacks,e.forEach((e,n)=>{t.filter(t=>t===e._dataset).length===0&&this._destroyDatasetMeta(n)})}buildOrUpdateControllers(){let e=[],t=this.data.datasets,n,r;for(this._removeUnreferencedMetasets(),n=0,r=t.length;n<r;n++){let r=t[n],i=this.getDatasetMeta(n),a=r.type||this.config.type;if(i.type&&i.type!==a&&(this._destroyDatasetMeta(n),i=this.getDatasetMeta(n)),i.type=a,i.indexAxis=r.indexAxis||ui(a,this.options),i.order=r.order||0,i.index=n,i.label=``+r.label,i.visible=this.isDatasetVisible(n),i.controller)i.controller.updateIndex(n),i.controller.linkScales();else{let t=oi.getController(a),{datasetElementType:r,dataElementType:o}=bt.datasets[a];Object.assign(t,{dataElementType:oi.getElement(o),datasetElementType:r&&oi.getElement(r)}),i.controller=new t(this,n),e.push(i.controller)}}return this._updateMetasets(),e}_resetElements(){f(this.data.datasets,(e,t)=>{this.getDatasetMeta(t).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins(`reset`)}update(e){let t=this.config;t.update();let n=this._options=t.createResolver(t.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),!1===this.notifyPlugins(`beforeUpdate`,{mode:e,cancelable:!0}))return;let i=this.buildOrUpdateControllers();this.notifyPlugins(`beforeElementsUpdate`);let a=0;for(let e=0,t=this.data.datasets.length;e<t;e++){let{controller:t}=this.getDatasetMeta(e),n=!r&&i.indexOf(t)===-1;t.buildOrUpdateElements(n),a=Math.max(+t.getMaxOverflow(),a)}a=this._minPadding=n.layout.autoPadding?a:0,this._updateLayout(a),r||f(i,e=>{e.reset()}),this._updateDatasets(e),this.notifyPlugins(`afterUpdate`,{mode:e}),this._layers.sort(Ei(`z`,`_idx`));let{_active:o,_lastEvent:s}=this;s?this._eventHandler(s,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){f(this.scales,e=>{dr.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let e=this.options;E(new Set(Object.keys(this._listeners)),new Set(e.events))&&!!this._responsiveListeners===e.responsive||(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:e}=this,t=this._getUniformDataChanges()||[];for(let{method:n,start:r,count:i}of t)Mi(e,r,n===`_removeElements`?-i:i)}_getUniformDataChanges(){let e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];let t=this.data.datasets.length,n=t=>new Set(e.filter(e=>e[0]===t).map((e,t)=>t+`,`+e.splice(1).join(`,`))),r=n(0);for(let e=1;e<t;e++)if(!E(r,n(e)))return;return Array.from(r).map(e=>e.split(`,`)).map(e=>({method:e[1],start:+e[2],count:+e[3]}))}_updateLayout(e){if(!1===this.notifyPlugins(`beforeLayout`,{cancelable:!0}))return;dr.update(this,this.width,this.height,e);let t=this.chartArea,n=t.width<=0||t.height<=0;this._layers=[],f(this.boxes,e=>{n&&e.position===`chartArea`||(e.configure&&e.configure(),this._layers.push(...e._layers()))},this),this._layers.forEach((e,t)=>{e._idx=t}),this.notifyPlugins(`afterLayout`)}_updateDatasets(e){if(!1!==this.notifyPlugins(`beforeDatasetsUpdate`,{mode:e,cancelable:!0})){for(let e=0,t=this.data.datasets.length;e<t;++e)this.getDatasetMeta(e).controller.configure();for(let t=0,n=this.data.datasets.length;t<n;++t)this._updateDataset(t,T(e)?e({datasetIndex:t}):e);this.notifyPlugins(`afterDatasetsUpdate`,{mode:e})}}_updateDataset(e,t){let n=this.getDatasetMeta(e),r={meta:n,index:e,mode:t,cancelable:!0};!1!==this.notifyPlugins(`beforeDatasetUpdate`,r)&&(n.controller._update(t),r.cancelable=!1,this.notifyPlugins(`afterDatasetUpdate`,r))}render(){!1!==this.notifyPlugins(`beforeRender`,{cancelable:!0})&&(Ee.has(this)?this.attached&&!Ee.running(this)&&Ee.start(this):(this.draw(),Di({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){let{width:e,height:t}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(e,t)}if(this.clear(),this.width<=0||this.height<=0||!1===this.notifyPlugins(`beforeDraw`,{cancelable:!0}))return;let t=this._layers;for(e=0;e<t.length&&t[e].z<=0;++e)t[e].draw(this.chartArea);for(this._drawDatasets();e<t.length;++e)t[e].draw(this.chartArea);this.notifyPlugins(`afterDraw`)}_getSortedDatasetMetas(e){let t=this._sortedMetasets,n=[],r,i;for(r=0,i=t.length;r<i;++r){let i=t[r];e&&!i.visible||n.push(i)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(!1===this.notifyPlugins(`beforeDatasetsDraw`,{cancelable:!0}))return;let e=this.getSortedVisibleDatasetMetas();for(let t=e.length-1;t>=0;--t)this._drawDataset(e[t]);this.notifyPlugins(`afterDatasetsDraw`)}_drawDataset(e){let t=this.ctx,n={meta:e,index:e.index,cancelable:!0},r=Wn(this,e);!1!==this.notifyPlugins(`beforeDatasetDraw`,n)&&(r&&Ut(t,r),e.controller.draw(),r&&Wt(t),n.cancelable=!1,this.notifyPlugins(`afterDatasetDraw`,n))}isPointInArea(e){return Ht(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,t,n,r){let i=Qn.modes[t];return typeof i==`function`?i(this,e,n,r):[]}getDatasetMeta(e){let t=this.data.datasets[e],n=this._metasets,r=n.filter(e=>e&&e._dataset===t).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:t&&t.order||0,index:e,_dataset:t,_parsed:[],_sorted:!1},n.push(r)),r}getContext(){return this.$context||=Pn(null,{chart:this,type:`chart`})}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){let t=this.data.datasets[e];if(!t)return!1;let n=this.getDatasetMeta(e);return typeof n.hidden==`boolean`?!n.hidden:!t.hidden}setDatasetVisibility(e,t){this.getDatasetMeta(e).hidden=!t}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,t,n){let r=n?`show`:`hide`,i=this.getDatasetMeta(e),a=i.controller._resolveAnimations(void 0,r);w(t)?(i.data[t].hidden=!n,this.update()):(this.setDatasetVisibility(e,n),a.update(i,{visible:n}),this.update(t=>t.datasetIndex===e?r:void 0))}hide(e,t){this._updateVisibility(e,t,!1)}show(e,t){this._updateVisibility(e,t,!0)}_destroyDatasetMeta(e){let t=this._metasets[e];t&&t.controller&&t.controller._destroy(),delete this._metasets[e]}_stop(){let e,t;for(this.stop(),Ee.remove(this),e=0,t=this.data.datasets.length;e<t;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins(`beforeDestroy`);let{canvas:e,ctx:t}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),zt(e,t),this.platform.releaseContext(t),this.canvas=null,this.ctx=null),delete Ai[this.id],this.notifyPlugins(`afterDestroy`)}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let e=this._listeners,t=this.platform,n=(n,r)=>{t.addEventListener(this,n,r),e[n]=r},r=(e,t,n)=>{e.offsetX=t,e.offsetY=n,this._eventHandler(e)};f(this.options.events,e=>n(e,r))}bindResponsiveEvents(){this._responsiveListeners||={};let e=this._responsiveListeners,t=this.platform,n=(n,r)=>{t.addEventListener(this,n,r),e[n]=r},r=(n,r)=>{e[n]&&(t.removeEventListener(this,n,r),delete e[n])},i=(e,t)=>{this.canvas&&this.resize(e,t)},a,o=()=>{r(`attach`,o),this.attached=!0,this.resize(),n(`resize`,i),n(`detach`,a)};a=()=>{this.attached=!1,r(`resize`,i),this._stop(),this._resize(0,0),n(`attach`,o)},t.isAttached(this.canvas)?o():a()}unbindEvents(){f(this._listeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._listeners={},f(this._responsiveListeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,t,n){let r=n?`set`:`remove`,i,a,o,s;for(t===`dataset`&&(i=this.getDatasetMeta(e[0].datasetIndex),i.controller[`_`+r+`DatasetHoverStyle`]()),o=0,s=e.length;o<s;++o){a=e[o];let t=a&&this.getDatasetMeta(a.datasetIndex).controller;t&&t[r+`HoverStyle`](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){let t=this._active||[],n=e.map(({datasetIndex:e,index:t})=>{let n=this.getDatasetMeta(e);if(!n)throw Error(`No dataset found at index `+e);return{datasetIndex:e,element:n.data[t],index:t}});!p(n,t)&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,t))}notifyPlugins(e,t,n){return this._plugins.notify(this,e,t,n)}isPluginEnabled(e){return this._plugins._cache.filter(t=>t.plugin.id===e).length===1}_updateHoverStyles(e,t,n){let r=this.options.hover,i=(e,t)=>e.filter(e=>!t.some(t=>e.datasetIndex===t.datasetIndex&&e.index===t.index)),a=i(t,e),o=n?e:i(e,t);a.length&&this.updateHoverStyle(a,r.mode,!1),o.length&&r.mode&&this.updateHoverStyle(o,r.mode,!0)}_eventHandler(e,t){let n={event:e,replay:t,cancelable:!0,inChartArea:this.isPointInArea(e)},r=t=>(t.options.events||this.options.events).includes(e.native.type);if(!1===this.notifyPlugins(`beforeEvent`,n,r))return;let i=this._handleEvent(e,t,n.inChartArea);return n.cancelable=!1,this.notifyPlugins(`afterEvent`,n,r),(i||n.changed)&&this.render(),this}_handleEvent(e,t,n){let{_active:r=[],options:i}=this,a=t,o=this._getActiveElements(e,r,n,a),s=D(e),c=(function(e,t,n,r){return n&&e.type!==`mouseout`?r?t:e:null})(e,this._lastEvent,n,s);n&&(this._lastEvent=null,d(i.onHover,[e,o,this],this),s&&d(i.onClick,[e,o,this],this));let l=!p(o,r);return(l||t)&&(this._active=o,this._updateHoverStyles(o,r,t)),this._lastEvent=c,l}_getActiveElements(e,t,n,r){if(e.type===`mouseout`)return[];if(!n)return t;let i=this.options.hover;return this.getElementsAtEventForMode(e,i.mode,i,r)}}function Pi(){return f(Ni.instances,e=>e._plugins.invalidate())}function Fi(){throw Error(`This method is not implemented: Check that a complete date adapter is provided.`)}class Ii{static override(e){Object.assign(Ii.prototype,e)}options;constructor(e){this.options=e||{}}init(){}formats(){return Fi()}parse(){return Fi()}format(){return Fi()}add(){return Fi()}diff(){return Fi()}startOf(){return Fi()}endOf(){return Fi()}}var Li={_date:Ii};function Ri(e){let t=e.iScale,n=(function(e,t){if(!e._cache.$bar){let n=e.getMatchingVisibleMetas(t),r=[];for(let t=0,i=n.length;t<i;t++)r=r.concat(n[t].controller.getAllParsedValues(e));e._cache.$bar=G(r.sort((e,t)=>e-t))}return e._cache.$bar})(t,e.type),r,i,a,o,s=t._length,c=()=>{a!==32767&&a!==-32768&&(w(o)&&(s=Math.min(s,Math.abs(a-o)||s)),o=a)};for(r=0,i=n.length;r<i;++r)a=t.getPixelForValue(n[r]),c();for(o=void 0,r=0,i=t.ticks.length;r<i;++r)a=t.getPixelForTick(r),c();return s}function zi(e,t,n,r){return i(e)?(function(e,t,n,r){let i=n.parse(e[0],r),a=n.parse(e[1],r),o=Math.min(i,a),s=Math.max(i,a),c=o,l=s;Math.abs(o)>Math.abs(s)&&(c=s,l=o),t[n.axis]=l,t._custom={barStart:c,barEnd:l,start:i,end:a,min:o,max:s}})(e,t,n,r):t[n.axis]=n.parse(e,r),t}function Bi(e,t,n,r){let i=e.iScale,a=e.vScale,o=i.getLabels(),s=i===a,c=[],l,u,d,f;for(l=n,u=n+r;l<u;++l)f=t[l],d={},d[i.axis]=s||i.parse(o[l],l),c.push(zi(f,d,a,l));return c}function Vi(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function Hi(e,t,n,r){let i=t.borderSkipped,a={};if(!i)return void(e.borderSkipped=a);if(!0===i)return void(e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0});let{start:o,end:s,reverse:c,top:l,bottom:u}=(function(e){let t,n,r,i,a;return e.horizontal?(t=e.base>e.x,n=`left`,r=`right`):(t=e.base<e.y,n=`bottom`,r=`top`),t?(i=`end`,a=`start`):(i=`start`,a=`end`),{start:n,end:r,reverse:t,top:i,bottom:a}})(e);i===`middle`&&n&&(e.enableBorderRadius=!0,(n._top||0)===r?i=l:(n._bottom||0)===r?i=u:(a[Ui(u,o,s,c)]=!0,i=l)),a[Ui(i,o,s,c)]=!0,e.borderSkipped=a}function Ui(e,t,n,r){var i,a,o;return r?(o=n,e=Wi(e=(i=e)===(a=t)?o:i===o?a:i,n,t)):e=Wi(e,t,n),e}function Wi(e,t,n){return e===`start`?t:e===`end`?n:e}function Gi(e,{inflateAmount:t},n){e.inflateAmount=t===`auto`?n===1?.33:0:t}class Ki extends Kr{static id=`doughnut`;static defaults={datasetElementType:!1,dataElementType:`arc`,animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:`number`,properties:[`circumference`,`endAngle`,`innerRadius`,`outerRadius`,`startAngle`,`x`,`y`,`offset`,`borderWidth`,`spacing`]}},cutout:`50%`,rotation:0,circumference:360,radius:`100%`,spacing:0,indexAxis:`r`};static descriptors={_scriptable:e=>e!==`spacing`,_indexable:e=>e!==`spacing`&&!e.startsWith(`borderDash`)&&!e.startsWith(`hoverBorderDash`)};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){let t=e.data,{labels:{pointStyle:n,textAlign:r,color:i,useBorderRadius:a,borderRadius:o}}=e.legend.options;return t.labels.length&&t.datasets.length?t.labels.map((t,s)=>{let c=e.getDatasetMeta(0).controller.getStyle(s);return{text:t,fillStyle:c.backgroundColor,fontColor:i,hidden:!e.getDataVisibility(s),lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:c.borderWidth,strokeStyle:c.borderColor,textAlign:r,pointStyle:n,borderRadius:a&&(o||c.borderRadius),index:s}}):[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}}}};constructor(e,t){super(e,t),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,t){let n=this.getDataset().data,r=this._cachedMeta;if(!1===this._parsing)r._parsed=n;else{let i,o,s=e=>+n[e];if(a(n[e])){let{key:e=`value`}=this._parsing;s=t=>+S(n[t],e)}for(i=e,o=e+t;i<o;++i)r._parsed[i]=s(i)}}_getRotation(){return re(this.options.rotation-90)}_getCircumference(){return re(this.options.circumference)}_getRotationExtents(){let e=k,t=-k;for(let n=0;n<this.chart.data.datasets.length;++n)if(this.chart.isDatasetVisible(n)&&this.chart.getDatasetMeta(n).type===this._type){let r=this.chart.getDatasetMeta(n).controller,i=r._getRotation(),a=r._getCircumference();e=Math.min(e,i),t=Math.max(t,i+a)}return{rotation:e,circumference:t-e}}update(e){let{chartArea:t}=this.chart,n=this._cachedMeta,r=n.data,i=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(t.width,t.height)-i)/2,0),o=Math.min(l(this.options.cutout,a),1),s=this._getRingWeight(this.index),{circumference:c,rotation:d}=this._getRotationExtents(),{ratioX:f,ratioY:p,offsetX:m,offsetY:h}=(function(e,t,n){let r=1,i=1,a=0,o=0;if(t<k){let s=e,c=s+t,l=Math.cos(s),u=Math.sin(s),d=Math.cos(c),f=Math.sin(c),p=(e,t,r)=>ue(e,s,c,!0)?1:Math.max(t,t*n,r,r*n),m=(e,t,r)=>ue(e,s,c,!0)?-1:Math.min(t,t*n,r,r*n),h=p(0,l,d),g=p(N,u,f),_=m(O,l,d),v=m(O+N,u,f);r=(h-_)/2,i=(g-v)/2,a=-(h+_)/2,o=-(g+v)/2}return{ratioX:r,ratioY:i,offsetX:a,offsetY:o}})(d,c,o),g=(t.width-i)/f,_=(t.height-i)/p,v=Math.max(Math.min(g,_)/2,0),y=u(this.options.radius,v),b=(y-Math.max(y*o,0))/this._getVisibleDatasetWeightTotal();this.offsetX=m*y,this.offsetY=h*y,n.total=this.calculateTotal(),this.outerRadius=y-b*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-b*s,0),this.updateElements(r,0,r.length,e)}_circumference(e,t){let n=this.options,r=this._cachedMeta,i=this._getCircumference();return t&&n.animation.animateRotate||!this.chart.getDataVisibility(e)||r._parsed[e]===null||r.data[e].hidden?0:this.calculateCircumference(r._parsed[e]*i/k)}updateElements(e,t,n,r){let i=r===`reset`,a=this.chart,o=a.chartArea,s=a.options.animation,c=(o.left+o.right)/2,l=(o.top+o.bottom)/2,u=i&&s.animateScale,d=u?0:this.innerRadius,f=u?0:this.outerRadius,{sharedOptions:p,includeOptions:m}=this._getSharedOptions(t,r),h,g=this._getRotation();for(h=0;h<t;++h)g+=this._circumference(h,i);for(h=t;h<t+n;++h){let t=this._circumference(h,i),n=e[h],a={x:c+this.offsetX,y:l+this.offsetY,startAngle:g,endAngle:g+t,circumference:t,outerRadius:f,innerRadius:d};m&&(a.options=p||this.resolveDataElementOptions(h,n.active?`active`:r)),g+=t,this.updateElement(n,h,a,r)}}calculateTotal(){let e=this._cachedMeta,t=e.data,n,r=0;for(n=0;n<t.length;n++){let i=e._parsed[n];i===null||isNaN(i)||!this.chart.getDataVisibility(n)||t[n].hidden||(r+=Math.abs(i))}return r}calculateCircumference(e){let t=this._cachedMeta.total;return t>0&&!isNaN(e)?Math.abs(e)/t*k:0}getLabelAndValue(e){let t=this._cachedMeta,n=this.chart,r=n.data.labels||[],i=ft(t._parsed[e],n.options.locale);return{label:r[e]||``,value:i}}getMaxBorderWidth(e){let t=0,n=this.chart,r,i,a,o,s;if(!e){for(r=0,i=n.data.datasets.length;r<i;++r)if(n.isDatasetVisible(r)){a=n.getDatasetMeta(r),e=a.data,o=a.controller;break}}if(!e)return 0;for(r=0,i=e.length;r<i;++r)s=o.resolveDataElementOptions(r),s.borderAlign!==`inner`&&(t=Math.max(t,s.borderWidth||0,s.hoverBorderWidth||0));return t}getMaxOffset(e){let t=0;for(let n=0,r=e.length;n<r;++n){let e=this.resolveDataElementOptions(n);t=Math.max(t,e.offset||0,e.hoverOffset||0)}return t}_getRingWeightOffset(e){let t=0;for(let n=0;n<e;++n)this.chart.isDatasetVisible(n)&&(t+=this._getRingWeight(n));return t}_getRingWeight(e){return Math.max(c(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}class qi extends Kr{static id=`polarArea`;static defaults={dataElementType:`arc`,animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:`number`,properties:[`x`,`y`,`startAngle`,`endAngle`,`innerRadius`,`outerRadius`]}},indexAxis:`r`,startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){let t=e.data;if(t.labels.length&&t.datasets.length){let{labels:{pointStyle:n,color:r}}=e.legend.options;return t.labels.map((t,i)=>{let a=e.getDatasetMeta(0).controller.getStyle(i);return{text:t,fillStyle:a.backgroundColor,strokeStyle:a.borderColor,fontColor:r,lineWidth:a.borderWidth,pointStyle:n,hidden:!e.getDataVisibility(i),index:i}})}return[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}}},scales:{r:{type:`radialLinear`,angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(e,t){super(e,t),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(e){let t=this._cachedMeta,n=this.chart,r=n.data.labels||[],i=ft(t._parsed[e].r,n.options.locale);return{label:r[e]||``,value:i}}parseObjectData(e,t,n,r){return ln.bind(this)(e,t,n,r)}update(e){let t=this._cachedMeta.data;this._updateRadius(),this.updateElements(t,0,t.length,e)}getMinMax(){let e=this._cachedMeta,t={min:1/0,max:-1/0};return e.data.forEach((e,n)=>{let r=this.getParsed(n).r;!isNaN(r)&&this.chart.getDataVisibility(n)&&(r<t.min&&(t.min=r),r>t.max&&(t.max=r))}),t}_updateRadius(){let e=this.chart,t=e.chartArea,n=e.options,r=Math.min(t.right-t.left,t.bottom-t.top),i=Math.max(r/2,0),a=(i-Math.max(n.cutoutPercentage?i/100*n.cutoutPercentage:1,0))/e.getVisibleDatasetCount();this.outerRadius=i-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(e,t,n,r){let i=r===`reset`,a=this.chart,o=a.options.animation,s=this._cachedMeta.rScale,c=s.xCenter,l=s.yCenter,u=s.getIndexAngle(0)-.5*O,d,f=u,p=360/this.countVisibleElements();for(d=0;d<t;++d)f+=this._computeAngle(d,r,p);for(d=t;d<t+n;d++){let t=e[d],n=f,m=f+this._computeAngle(d,r,p),h=a.getDataVisibility(d)?s.getDistanceFromCenterForValue(this.getParsed(d).r):0;f=m,i&&(o.animateScale&&(h=0),o.animateRotate&&(n=m=u));let g={x:c,y:l,innerRadius:0,outerRadius:h,startAngle:n,endAngle:m,options:this.resolveDataElementOptions(d,t.active?`active`:r)};this.updateElement(t,d,g,r)}}countVisibleElements(){let e=this._cachedMeta,t=0;return e.data.forEach((e,n)=>{!isNaN(this.getParsed(n).r)&&this.chart.getDataVisibility(n)&&t++}),t}_computeAngle(e,t,n){return this.chart.getDataVisibility(e)?re(this.resolveDataElementOptions(e,t).angle||n):0}}var Ji=Object.freeze({__proto__:null,BarController:class extends Kr{static id=`bar`;static defaults={datasetElementType:!1,dataElementType:`bar`,categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:`number`,properties:[`x`,`y`,`base`,`width`,`height`]}}};static overrides={scales:{_index_:{type:`category`,offset:!0,grid:{offset:!0}},_value_:{type:`linear`,beginAtZero:!0}}};parsePrimitiveData(e,t,n,r){return Bi(e,t,n,r)}parseArrayData(e,t,n,r){return Bi(e,t,n,r)}parseObjectData(e,t,n,r){let{iScale:i,vScale:a}=e,{xAxisKey:o=`x`,yAxisKey:s=`y`}=this._parsing,c=i.axis===`x`?o:s,l=a.axis===`x`?o:s,u=[],d,f,p,m;for(d=n,f=n+r;d<f;++d)m=t[d],p={},p[i.axis]=i.parse(S(m,c),d),u.push(zi(S(m,l),p,a,d));return u}updateRangeFromParsed(e,t,n,r){super.updateRangeFromParsed(e,t,n,r);let i=n._custom;i&&t===this._cachedMeta.vScale&&(e.min=Math.min(e.min,i.min),e.max=Math.max(e.max,i.max))}getMaxOverflow(){return 0}getLabelAndValue(e){let{iScale:t,vScale:n}=this._cachedMeta,r=this.getParsed(e),i=r._custom,a=Vi(i)?`[`+i.start+`, `+i.end+`]`:``+n.getLabelForValue(r[n.axis]);return{label:``+t.getLabelForValue(r[t.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize(),this._cachedMeta.stack=this.getDataset().stack}update(e){let t=this._cachedMeta;this.updateElements(t.data,0,t.data.length,e)}updateElements(e,t,n,i){let a=i===`reset`,{index:o,_cachedMeta:{vScale:s}}=this,c=s.getBasePixel(),l=s.isHorizontal(),u=this._getRuler(),{sharedOptions:d,includeOptions:f}=this._getSharedOptions(t,i);for(let p=t;p<t+n;p++){let t=this.getParsed(p),n=a||r(t[s.axis])?{base:c,head:c}:this._calculateBarValuePixels(p),m=this._calculateBarIndexPixels(p,u),h=(t._stacks||{})[s.axis],g={horizontal:l,base:n.base,enableBorderRadius:!h||Vi(t._custom)||o===h._top||o===h._bottom,x:l?n.head:m.center,y:l?m.center:n.head,height:l?m.size:Math.abs(n.size),width:l?Math.abs(n.size):m.size};f&&(g.options=d||this.resolveDataElementOptions(p,e[p].active?`active`:i));let _=g.options||e[p].options;Hi(g,_,h,o),Gi(g,_,u.ratio),this.updateElement(e[p],p,g,i)}}_getStacks(e,t){let{iScale:n}=this._cachedMeta,i=n.getMatchingVisibleMetas(this._type).filter(e=>e.controller.options.grouped),a=n.options.stacked,o=[],s=this._cachedMeta.controller.getParsed(t),c=s&&s[n.axis],l=e=>{let t=e._parsed.find(e=>e[n.axis]===c),i=t&&t[e.vScale.axis];if(r(i)||isNaN(i))return!0};for(let n of i)if((t===void 0||!l(n))&&((!1===a||o.indexOf(n.stack)===-1||a===void 0&&n.stack===void 0)&&o.push(n.stack),n.index===e))break;return o.length||o.push(void 0),o}_getStackCount(e){return this._getStacks(void 0,e).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){let e=this.chart.scales,t=this.chart.options.indexAxis;return Object.keys(e).filter(n=>e[n].axis===t).shift()}_getAxis(){let e={},t=this.getFirstScaleIdForIndexAxis();for(let n of this.chart.data.datasets)e[c(this.chart.options.indexAxis===`x`?n.xAxisID:n.yAxisID,t)]=!0;return Object.keys(e)}_getStackIndex(e,t,n){let r=this._getStacks(e,n),i=t===void 0?-1:r.indexOf(t);return i===-1?r.length-1:i}_getRuler(){let e=this.options,t=this._cachedMeta,n=t.iScale,r=[],i,a;for(i=0,a=t.data.length;i<a;++i)r.push(n.getPixelForValue(this.getParsed(i)[n.axis],i));let o=e.barThickness;return{min:o||Ri(t),pixels:r,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n,grouped:e.grouped,ratio:o?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){let{_cachedMeta:{vScale:t,_stacked:n,index:i},options:{base:a,minBarLength:o}}=this,s=a||0,c=this.getParsed(e),l=c._custom,u=Vi(l),d,f,p=c[t.axis],m=0,h=n?this.applyStack(t,c,n):p;h!==p&&(m=h-p,h=p),u&&(p=l.barStart,h=l.barEnd-l.barStart,p!==0&&ee(p)!==ee(l.barEnd)&&(m=0),m+=p);let g=r(a)||u?m:a,_=t.getPixelForValue(g);if(d=this.chart.getDataVisibility(e)?t.getPixelForValue(m+h):_,f=d-_,Math.abs(f)<o){f=(function(e,t,n){return e===0?(t.isHorizontal()?1:-1)*(t.min>=n?1:-1):ee(e)})(f,t,s)*o,p===s&&(_-=f/2);let e=t.getPixelForDecimal(0),r=t.getPixelForDecimal(1);_=Math.max(Math.min(_,Math.max(e,r)),Math.min(e,r)),d=_+f,n&&!u&&(c._stacks[t.axis]._visualValues[i]=t.getValueForPixel(d)-t.getValueForPixel(_))}if(_===t.getPixelForValue(s)){let e=ee(f)*t.getLineWidthForValue(s)/2;_+=e,f-=e}return{size:f,base:_,head:d,center:d+f/2}}_calculateBarIndexPixels(e,t){let n=t.scale,i=this.options,a=i.skipNull,o=c(i.maxBarThickness,1/0),s,l,u=this._getAxisCount();if(t.grouped){let n=a?this._getStackCount(e):t.stackCount,d=i.barThickness===`flex`?(function(e,t,n,r){let i=t.pixels,a=i[e],o=e>0?i[e-1]:null,s=e<i.length-1?i[e+1]:null,c=n.categoryPercentage;o===null&&(o=a-(s===null?t.end-t.start:s-a)),s===null&&(s=a+a-o);let l=a-(a-Math.min(o,s))/2*c;return{chunk:Math.abs(s-o)/2*c/r,ratio:n.barPercentage,start:l}})(e,t,i,n*u):(function(e,t,n,i){let a=n.barThickness,o,s;return r(a)?(o=t.min*n.categoryPercentage,s=n.barPercentage):(o=a*i,s=1),{chunk:o/i,ratio:s,start:t.pixels[e]-o/2}})(e,t,i,n*u),f=this.chart.options.indexAxis===`x`?this.getDataset().xAxisID:this.getDataset().yAxisID,p=this._getAxis().indexOf(c(f,this.getFirstScaleIdForIndexAxis())),m=this._getStackIndex(this.index,this._cachedMeta.stack,a?e:void 0)+p;s=d.start+d.chunk*m+d.chunk/2,l=Math.min(o,d.chunk*d.ratio)}else s=n.getPixelForValue(this.getParsed(e)[n.axis],e),l=Math.min(o,t.min*t.ratio);return{base:s-l/2,head:s+l/2,center:s,size:l}}draw(){let e=this._cachedMeta,t=e.vScale,n=e.data,r=n.length,i=0;for(;i<r;++i)this.getParsed(i)[t.axis]===null||n[i].hidden||n[i].draw(this._ctx)}},BubbleController:class extends Kr{static id=`bubble`;static defaults={datasetElementType:!1,dataElementType:`point`,animations:{numbers:{type:`number`,properties:[`x`,`y`,`borderWidth`,`radius`]}}};static overrides={scales:{x:{type:`linear`},y:{type:`linear`}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(e,t,n,r){let i=super.parsePrimitiveData(e,t,n,r);for(let e=0;e<i.length;e++)i[e]._custom=this.resolveDataElementOptions(e+n).radius;return i}parseArrayData(e,t,n,r){let i=super.parseArrayData(e,t,n,r);for(let e=0;e<i.length;e++){let r=t[n+e];i[e]._custom=c(r[2],this.resolveDataElementOptions(e+n).radius)}return i}parseObjectData(e,t,n,r){let i=super.parseObjectData(e,t,n,r);for(let e=0;e<i.length;e++){let r=t[n+e];i[e]._custom=c(r&&r.r&&+r.r,this.resolveDataElementOptions(e+n).radius)}return i}getMaxOverflow(){let e=this._cachedMeta.data,t=0;for(let n=e.length-1;n>=0;--n)t=Math.max(t,e[n].size(this.resolveDataElementOptions(n))/2);return t>0&&t}getLabelAndValue(e){let t=this._cachedMeta,n=this.chart.data.labels||[],{xScale:r,yScale:i}=t,a=this.getParsed(e),o=r.getLabelForValue(a.x),s=i.getLabelForValue(a.y),c=a._custom;return{label:n[e]||``,value:`(`+o+`, `+s+(c?`, `+c:``)+`)`}}update(e){let t=this._cachedMeta.data;this.updateElements(t,0,t.length,e)}updateElements(e,t,n,r){let i=r===`reset`,{iScale:a,vScale:o}=this._cachedMeta,{sharedOptions:s,includeOptions:c}=this._getSharedOptions(t,r),l=a.axis,u=o.axis;for(let d=t;d<t+n;d++){let t=e[d],n=!i&&this.getParsed(d),f={},p=f[l]=i?a.getPixelForDecimal(.5):a.getPixelForValue(n[l]),m=f[u]=i?o.getBasePixel():o.getPixelForValue(n[u]);f.skip=isNaN(p)||isNaN(m),c&&(f.options=s||this.resolveDataElementOptions(d,t.active?`active`:r),i&&(f.options.radius=0)),this.updateElement(t,d,f,r)}}resolveDataElementOptions(e,t){let n=this.getParsed(e),r=super.resolveDataElementOptions(e,t);r.$shared&&(r=Object.assign({},r,{$shared:!1}));let i=r.radius;return t!==`active`&&(r.radius=0),r.radius+=c(n&&n._custom,i),r}},DoughnutController:Ki,LineController:class extends Kr{static id=`line`;static defaults={datasetElementType:`line`,dataElementType:`point`,showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:`category`},_value_:{type:`linear`}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){let t=this._cachedMeta,{dataset:n,data:r=[],_dataset:i}=t,a=this.chart._animationsDisabled,{start:o,count:s}=Ce(t,r,a);this._drawStart=o,this._drawCount=s,we(t)&&(o=0,s=r.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!i._decimated,n.points=r;let c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!a,options:c},e),this.updateElements(r,o,s,e)}updateElements(e,t,n,i){let a=i===`reset`,{iScale:o,vScale:s,_stacked:c,_dataset:l}=this._cachedMeta,{sharedOptions:u,includeOptions:d}=this._getSharedOptions(t,i),f=o.axis,p=s.axis,{spanGaps:m,segment:h}=this.options,g=ne(m)?m:1/0,_=this.chart._animationsDisabled||a||i===`none`,v=t+n,y=e.length,b=t>0&&this.getParsed(t-1);for(let n=0;n<y;++n){let m=e[n],y=_?m:{};if(n<t||n>=v){y.skip=!0;continue}let x=this.getParsed(n),S=r(x[p]),C=y[f]=o.getPixelForValue(x[f],n),w=y[p]=a||S?s.getBasePixel():s.getPixelForValue(c?this.applyStack(s,x,c):x[p],n);y.skip=isNaN(C)||isNaN(w)||S,y.stop=n>0&&Math.abs(x[f]-b[f])>g,h&&(y.parsed=x,y.raw=l.data[n]),d&&(y.options=u||this.resolveDataElementOptions(n,m.active?`active`:i)),_||this.updateElement(m,n,y,i),b=x}}getMaxOverflow(){let e=this._cachedMeta,t=e.dataset,n=t.options&&t.options.borderWidth||0,r=e.data||[];if(!r.length)return n;let i=r[0].size(this.resolveDataElementOptions(0)),a=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(n,i,a)/2}draw(){let e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}},PieController:class extends Ki{static id=`pie`;static defaults={cutout:0,rotation:0,circumference:360,radius:`100%`}},PolarAreaController:qi,RadarController:class extends Kr{static id=`radar`;static defaults={datasetElementType:`line`,dataElementType:`point`,indexAxis:`r`,showLine:!0,elements:{line:{fill:`start`}}};static overrides={aspectRatio:1,scales:{r:{type:`radialLinear`}}};getLabelAndValue(e){let t=this._cachedMeta.vScale,n=this.getParsed(e);return{label:t.getLabels()[e],value:``+t.getLabelForValue(n[t.axis])}}parseObjectData(e,t,n,r){return ln.bind(this)(e,t,n,r)}update(e){let t=this._cachedMeta,n=t.dataset,r=t.data||[],i=t.iScale.getLabels();if(n.points=r,e!==`resize`){let t=this.resolveDatasetElementOptions(e);this.options.showLine||(t.borderWidth=0);let a={_loop:!0,_fullLoop:i.length===r.length,options:t};this.updateElement(n,void 0,a,e)}this.updateElements(r,0,r.length,e)}updateElements(e,t,n,r){let i=this._cachedMeta.rScale,a=r===`reset`;for(let o=t;o<t+n;o++){let t=e[o],n=this.resolveDataElementOptions(o,t.active?`active`:r),s=i.getPointPositionForValue(o,this.getParsed(o).r),c=a?i.xCenter:s.x,l=a?i.yCenter:s.y,u={x:c,y:l,angle:s.angle,skip:isNaN(c)||isNaN(l),options:n};this.updateElement(t,o,u,r)}}},ScatterController:class extends Kr{static id=`scatter`;static defaults={datasetElementType:!1,dataElementType:`point`,showLine:!1,fill:!1};static overrides={interaction:{mode:`point`},scales:{x:{type:`linear`},y:{type:`linear`}}};getLabelAndValue(e){let t=this._cachedMeta,n=this.chart.data.labels||[],{xScale:r,yScale:i}=t,a=this.getParsed(e),o=r.getLabelForValue(a.x),s=i.getLabelForValue(a.y);return{label:n[e]||``,value:`(`+o+`, `+s+`)`}}update(e){let t=this._cachedMeta,{data:n=[]}=t,r=this.chart._animationsDisabled,{start:i,count:a}=Ce(t,n,r);if(this._drawStart=i,this._drawCount=a,we(t)&&(i=0,a=n.length),this.options.showLine){this.datasetElementType||this.addElements();let{dataset:i,_dataset:a}=t;i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!a._decimated,i.points=n;let o=this.resolveDatasetElementOptions(e);o.segment=this.options.segment,this.updateElement(i,void 0,{animated:!r,options:o},e)}else this.datasetElementType&&=(delete t.dataset,!1);this.updateElements(n,i,a,e)}addElements(){let{showLine:e}=this.options;!this.datasetElementType&&e&&(this.datasetElementType=this.chart.registry.getElement(`line`)),super.addElements()}updateElements(e,t,n,i){let a=i===`reset`,{iScale:o,vScale:s,_stacked:c,_dataset:l}=this._cachedMeta,u=this.resolveDataElementOptions(t,i),d=this.getSharedOptions(u),f=this.includeOptions(i,d),p=o.axis,m=s.axis,{spanGaps:h,segment:g}=this.options,_=ne(h)?h:1/0,v=this.chart._animationsDisabled||a||i===`none`,y=t>0&&this.getParsed(t-1);for(let u=t;u<t+n;++u){let t=e[u],n=this.getParsed(u),h=v?t:{},b=r(n[m]),x=h[p]=o.getPixelForValue(n[p],u),S=h[m]=a||b?s.getBasePixel():s.getPixelForValue(c?this.applyStack(s,n,c):n[m],u);h.skip=isNaN(x)||isNaN(S)||b,h.stop=u>0&&Math.abs(n[p]-y[p])>_,g&&(h.parsed=n,h.raw=l.data[u]),f&&(h.options=d||this.resolveDataElementOptions(u,t.active?`active`:i)),v||this.updateElement(t,u,h,i),y=n}this.updateSharedOptions(d,i,u)}getMaxOverflow(){let e=this._cachedMeta,t=e.data||[];if(!this.options.showLine){let e=0;for(let n=t.length-1;n>=0;--n)e=Math.max(e,t[n].size(this.resolveDataElementOptions(n))/2);return e>0&&e}let n=e.dataset,r=n.options&&n.options.borderWidth||0;if(!t.length)return r;let i=t[0].size(this.resolveDataElementOptions(0)),a=t[t.length-1].size(this.resolveDataElementOptions(t.length-1));return Math.max(r,i,a)/2}}});function Yi(e,t,n,r){let i=Dn(e.options.borderRadius,[`outerStart`,`outerEnd`,`innerStart`,`innerEnd`]),a=(n-t)/2,o=Math.min(a,r*t/2),s=e=>{let t=(n-Math.min(a,e))*r/2;return V(e,0,Math.min(a,t))};return{outerStart:s(i.outerStart),outerEnd:s(i.outerEnd),innerStart:V(i.innerStart,0,o),innerEnd:V(i.innerEnd,0,o)}}function Xi(e,t,n,r){return{x:n+e*Math.cos(t),y:r+e*Math.sin(t)}}function Zi(e,t,n,r,i,a){let{x:o,y:s,startAngle:c,pixelMargin:l,innerRadius:u}=t,d=Math.max(t.outerRadius+r+n-l,0),f=u>0?u+r+n+l:0,p=0,m=i-c;if(r){let e=((u>0?u-r:0)+(d>0?d-r:0))/2;p=(m-(e===0?m:m*e/(e+r)))/2}let h=(m-Math.max(.001,m*d-n/O)/d)/2,g=c+h+p,_=i-h-p,{outerStart:v,outerEnd:y,innerStart:b,innerEnd:x}=Yi(t,f,d,_-g),S=d-v,C=d-y,w=g+v/S,T=_-y/C,E=f+b,D=f+x,k=g+b/E,A=_-x/D;if(e.beginPath(),a){let t=(w+T)/2;if(e.arc(o,s,d,w,t),e.arc(o,s,d,t,T),y>0){let t=Xi(C,T,o,s);e.arc(t.x,t.y,y,T,_+N)}let n=Xi(D,_,o,s);if(e.lineTo(n.x,n.y),x>0){let t=Xi(D,A,o,s);e.arc(t.x,t.y,x,_+N,A+Math.PI)}let r=(_-x/f+(g+b/f))/2;if(e.arc(o,s,f,_-x/f,r,!0),e.arc(o,s,f,r,g+b/f,!0),b>0){let t=Xi(E,k,o,s);e.arc(t.x,t.y,b,k+Math.PI,g-N)}let i=Xi(S,g,o,s);if(e.lineTo(i.x,i.y),v>0){let t=Xi(S,w,o,s);e.arc(t.x,t.y,v,g-N,w)}}else{e.moveTo(o,s);let t=Math.cos(w)*d+o,n=Math.sin(w)*d+s;e.lineTo(t,n);let r=Math.cos(T)*d+o,i=Math.sin(T)*d+s;e.lineTo(r,i)}e.closePath()}function Qi(e,t,n,r,i){let{fullCircles:a,startAngle:o,circumference:s,options:c}=t,{borderWidth:l,borderJoinStyle:u,borderDash:d,borderDashOffset:f,borderRadius:p}=c,m=c.borderAlign===`inner`;if(!l)return;e.setLineDash(d||[]),e.lineDashOffset=f,m?(e.lineWidth=2*l,e.lineJoin=u||`round`):(e.lineWidth=l,e.lineJoin=u||`bevel`);let h=t.endAngle;if(a){Zi(e,t,n,r,h,i);for(let t=0;t<a;++t)e.stroke();isNaN(s)||(h=o+(s%k||k))}m&&(function(e,t,n){let{startAngle:r,pixelMargin:i,x:a,y:o,outerRadius:s,innerRadius:c}=t,l=i/s;e.beginPath(),e.arc(a,o,s,r-l,n+l),c>i?(l=i/c,e.arc(a,o,c,n+l,r-l,!0)):e.arc(a,o,i,n+N,r-N),e.closePath(),e.clip()})(e,t,h),c.selfJoin&&h-o>=O&&p===0&&u!==`miter`&&(function(e,t,n){let{startAngle:r,x:i,y:a,outerRadius:o,innerRadius:s,options:c}=t,{borderWidth:l,borderJoinStyle:u}=c,d=Math.min(l/o,le(r-n));if(e.beginPath(),e.arc(i,a,o-l/2,r+d/2,n-d/2),s>0){let t=Math.min(l/s,le(r-n));e.arc(i,a,s+l/2,n-t/2,r+t/2,!0)}else{let t=Math.min(l/2,o*le(r-n));if(u===`round`)e.arc(i,a,t,n-O/2,r+O/2,!0);else if(u===`bevel`){let o=2*t*t,s=-o*Math.cos(n+O/2)+i,c=-o*Math.sin(n+O/2)+a,l=o*Math.cos(r+O/2)+i,u=o*Math.sin(r+O/2)+a;e.lineTo(s,c),e.lineTo(l,u)}}e.closePath(),e.moveTo(0,0),e.rect(0,0,e.canvas.width,e.canvas.height),e.clip(`evenodd`)})(e,t,h),a||(Zi(e,t,n,r,h,i),e.stroke())}function $i(e,t,n=t){e.lineCap=c(n.borderCapStyle,t.borderCapStyle),e.setLineDash(c(n.borderDash,t.borderDash)),e.lineDashOffset=c(n.borderDashOffset,t.borderDashOffset),e.lineJoin=c(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=c(n.borderWidth,t.borderWidth),e.strokeStyle=c(n.borderColor,t.borderColor)}function ea(e,t,n){e.lineTo(n.x,n.y)}function ta(e,t,n={}){let r=e.length,{start:i=0,end:a=r-1}=n,{start:o,end:s}=t,c=Math.max(i,o),l=Math.min(a,s),u=i<o&&a<o||i>s&&a>s;return{count:r,start:c,loop:t.loop,ilen:l<c&&!u?r+l-c:l-c}}function na(e,t,n,r){let{points:i,options:a}=t,{count:o,start:s,loop:c,ilen:l}=ta(i,n,r),u=(function(e){return e.stepped?Gt:e.tension||e.cubicInterpolationMode===`monotone`?Kt:ea})(a),d,f,p,{move:m=!0,reverse:h}=r||{};for(d=0;d<=l;++d)f=i[(s+(h?l-d:d))%o],f.skip||(m?(e.moveTo(f.x,f.y),m=!1):u(e,p,f,h,a.stepped),p=f);return c&&(f=i[(s+(h?l:0))%o],u(e,p,f,h,a.stepped)),!!c}function ra(e,t,n,r){let i=t.points,{count:a,start:o,ilen:s}=ta(i,n,r),{move:c=!0,reverse:l}=r||{},u,d,f,p,m,h,g=0,_=0,v=e=>(o+(l?s-e:e))%a,y=()=>{p!==m&&(e.lineTo(g,m),e.lineTo(g,p),e.lineTo(g,h))};for(c&&(d=i[v(0)],e.moveTo(d.x,d.y)),u=0;u<=s;++u){if(d=i[v(u)],d.skip)continue;let t=d.x,n=d.y,r=0|t;r===f?(n<p?p=n:n>m&&(m=n),g=(_*g+t)/++_):(y(),e.lineTo(t,n),f=r,_=0,p=m=n),h=n}y()}function ia(e){let t=e.options,n=t.borderDash&&t.borderDash.length;return e._decimated||e._loop||t.tension||t.cubicInterpolationMode===`monotone`||t.stepped||n?na:ra}let aa=typeof Path2D==`function`;function oa(e,t,n,r){aa&&!t.options.segment?(function(e,t,n,r){let i=t._path;i||(i=t._path=new Path2D,t.path(i,n,r)&&i.closePath()),$i(e,t.options),e.stroke(i)})(e,t,n,r):(function(e,t,n,r){let{segments:i,options:a}=t,o=ia(t);for(let s of i)$i(e,a,s.style),e.beginPath(),o(e,t,s,{start:n,end:n+r-1})&&e.closePath(),e.stroke()})(e,t,n,r)}class sa extends qr{static id=`line`;static defaults={borderCapStyle:`butt`,borderDash:[],borderDashOffset:0,borderJoinStyle:`miter`,borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:`default`,fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};static descriptors={_scriptable:!0,_indexable:e=>e!==`borderDash`&&e!==`fill`};constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,t){let n=this.options;if((n.tension||n.cubicInterpolationMode===`monotone`)&&!n.stepped&&!this._pointsUpdated){let r=n.spanGaps?this._loop:this._fullLoop;gn(this._points,n,e,r,t),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||=Bn(this,this.options.segment)}first(){let e=this.segments,t=this.points;return e.length&&t[e[0].start]}last(){let e=this.segments,t=this.points,n=e.length;return n&&t[e[n-1].end]}interpolate(e,t){let n=this.options,r=e[t],i=this.points,a=zn(this,{property:t,start:r,end:r});if(!a.length)return;let o=[],s=(function(e){return e.stepped?xn:e.tension||e.cubicInterpolationMode===`monotone`?Sn:bn})(n),c,l;for(c=0,l=a.length;c<l;++c){let{start:l,end:u}=a[c],d=i[l],f=i[u];if(d===f){o.push(d);continue}let p=s(d,f,Math.abs((r-d[t])/(f[t]-d[t])),n.stepped);p[t]=e[t],o.push(p)}return o.length===1?o[0]:o}pathSegment(e,t,n){return ia(this)(e,this,t,n)}path(e,t,n){let r=this.segments,i=ia(this),a=this._loop;t||=0,n||=this.points.length-t;for(let o of r)a&=i(e,this,o,{start:t,end:t+n-1});return!!a}draw(e,t,n,r){let i=this.options||{};(this.points||[]).length&&i.borderWidth&&(e.save(),oa(e,this,n,r),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function ca(e,t,n,r){let i=e.options,{[n]:a}=e.getProps([n],r);return Math.abs(t-a)<i.radius+i.hitRadius}function la(e,t){let{x:n,y:r,base:i,width:a,height:o}=e.getProps([`x`,`y`,`base`,`width`,`height`],t),s,c,l,u,d;return e.horizontal?(d=o/2,s=Math.min(n,i),c=Math.max(n,i),l=r-d,u=r+d):(d=a/2,s=n-d,c=n+d,l=Math.min(r,i),u=Math.max(r,i)),{left:s,top:l,right:c,bottom:u}}function ua(e,t,n,r){return e?0:V(t,n,r)}function da(e){let t=la(e),n=t.right-t.left,r=t.bottom-t.top,i=(function(e,t,n){let r=e.options.borderWidth,i=e.borderSkipped,a=On(r);return{t:ua(i.top,a.top,0,n),r:ua(i.right,a.right,0,t),b:ua(i.bottom,a.bottom,0,n),l:ua(i.left,a.left,0,t)}})(e,n/2,r/2),o=(function(e,t,n){let{enableBorderRadius:r}=e.getProps([`enableBorderRadius`]),i=e.options.borderRadius,o=kn(i),s=Math.min(t,n),c=e.borderSkipped,l=r||a(i);return{topLeft:ua(!l||c.top||c.left,o.topLeft,0,s),topRight:ua(!l||c.top||c.right,o.topRight,0,s),bottomLeft:ua(!l||c.bottom||c.left,o.bottomLeft,0,s),bottomRight:ua(!l||c.bottom||c.right,o.bottomRight,0,s)}})(e,n/2,r/2);return{outer:{x:t.left,y:t.top,w:n,h:r,radius:o},inner:{x:t.left+i.l,y:t.top+i.t,w:n-i.l-i.r,h:r-i.t-i.b,radius:{topLeft:Math.max(0,o.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,o.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,o.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,o.bottomRight-Math.max(i.b,i.r))}}}}function fa(e,t,n,r){let i=t===null,a=n===null,o=e&&!(i&&a)&&la(e,r);return o&&(i||fe(t,o.left,o.right))&&(a||fe(n,o.top,o.bottom))}function pa(e,t){e.rect(t.x,t.y,t.w,t.h)}function ma(e,t,n={}){let r=e.x===n.x?0:-t,i=e.y===n.y?0:-t,a=(e.x+e.w===n.x+n.w?0:t)-r,o=(e.y+e.h===n.y+n.h?0:t)-i;return{x:e.x+r,y:e.y+i,w:e.w+a,h:e.h+o,radius:e.radius}}var ha=Object.freeze({__proto__:null,ArcElement:class extends qr{static id=`arc`;static defaults={borderAlign:`center`,borderColor:`#fff`,borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1};static defaultRoutes={backgroundColor:`backgroundColor`};static descriptors={_scriptable:!0,_indexable:e=>e!==`borderDash`};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(e){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,t,n){let{angle:r,distance:i}=oe(this.getProps([`x`,`y`],n),{x:e,y:t}),{startAngle:a,endAngle:o,innerRadius:s,outerRadius:l,circumference:u}=this.getProps([`startAngle`,`endAngle`,`innerRadius`,`outerRadius`,`circumference`],n),d=(this.options.spacing+this.options.borderWidth)/2,f=c(u,o-a),p=ue(r,a,o)&&a!==o,m=f>=k||p,h=fe(i,s+d,l+d);return m&&h}getCenterPoint(e){let{x:t,y:n,startAngle:r,endAngle:i,innerRadius:a,outerRadius:o}=this.getProps([`x`,`y`,`startAngle`,`endAngle`,`innerRadius`,`outerRadius`],e),{offset:s,spacing:c}=this.options,l=(r+i)/2,u=(a+o+c+s)/2;return{x:t+Math.cos(l)*u,y:n+Math.sin(l)*u}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){let{options:t,circumference:n}=this,r=(t.offset||0)/4,i=(t.spacing||0)/2,a=t.circular;if(this.pixelMargin=t.borderAlign===`inner`?.33:0,this.fullCircles=n>k?Math.floor(n/k):0,n===0||this.innerRadius<0||this.outerRadius<0)return;e.save();let o=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(o)*r,Math.sin(o)*r);let s=r*(1-Math.sin(Math.min(O,n||0)));e.fillStyle=t.backgroundColor,e.strokeStyle=t.borderColor,(function(e,t,n,r,i){let{fullCircles:a,startAngle:o,circumference:s}=t,c=t.endAngle;if(a){Zi(e,t,n,r,c,i);for(let t=0;t<a;++t)e.fill();isNaN(s)||(c=o+(s%k||k))}Zi(e,t,n,r,c,i),e.fill()})(e,this,s,i,a),Qi(e,this,s,i,a),e.restore()}},BarElement:class extends qr{static id=`bar`;static defaults={borderSkipped:`start`,borderWidth:0,borderRadius:0,inflateAmount:`auto`,pointStyle:void 0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){let{inflateAmount:t,options:{borderColor:n,backgroundColor:r}}=this,{inner:i,outer:a}=da(this),o=(s=a.radius).topLeft||s.topRight||s.bottomLeft||s.bottomRight?Xt:pa;var s;e.save(),a.w===i.w&&a.h===i.h||(e.beginPath(),o(e,ma(a,t,i)),e.clip(),o(e,ma(i,-t,a)),e.fillStyle=n,e.fill(`evenodd`)),e.beginPath(),o(e,ma(i,t)),e.fillStyle=r,e.fill(),e.restore()}inRange(e,t,n){return fa(this,e,t,n)}inXRange(e,t){return fa(this,e,null,t)}inYRange(e,t){return fa(this,null,e,t)}getCenterPoint(e){let{x:t,y:n,base:r,horizontal:i}=this.getProps([`x`,`y`,`base`,`horizontal`],e);return{x:i?(t+r)/2:t,y:i?n:(n+r)/2}}getRange(e){return e===`x`?this.width/2:this.height/2}},LineElement:sa,PointElement:class extends qr{static id=`point`;parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:`circle`,radius:3,rotation:0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};constructor(e){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,t,n){let r=this.options,{x:i,y:a}=this.getProps([`x`,`y`],n);return(e-i)**2+(t-a)**2<(r.hitRadius+r.radius)**2}inXRange(e,t){return ca(this,e,`x`,t)}inYRange(e,t){return ca(this,e,`y`,t)}getCenterPoint(e){let{x:t,y:n}=this.getProps([`x`,`y`],e);return{x:t,y:n}}size(e){let t=(e=e||this.options||{}).radius||0;return t=Math.max(t,t&&e.hoverRadius||0),2*(t+(t&&e.borderWidth||0))}draw(e,t){let n=this.options;this.skip||n.radius<.1||!Ht(this,t,this.size(n)/2)||(e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.fillStyle=n.backgroundColor,Bt(e,n,this.x,this.y))}getRange(){let e=this.options||{};return e.radius+e.hitRadius}}});function ga(e,t,n,r){let i=e.indexOf(t);return i===-1?((e,t,n,r)=>(typeof t==`string`?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n))(e,t,n,r):i===e.lastIndexOf(t)?i:n}function _a(e){let t=this.getLabels();return e>=0&&e<t.length?t[e]:e}function va(e,t,{horizontal:n,minRotation:r}){let i=re(r),a=(n?Math.sin(i):Math.cos(i))||.001,o=.75*t*(``+e).length;return Math.min(t/a,o)}class ya extends ri{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,t){return r(e)||(typeof e==`number`||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){let{beginAtZero:e}=this.options,{minDefined:t,maxDefined:n}=this.getUserBounds(),{min:r,max:i}=this,a=e=>r=t?r:e,o=e=>i=n?i:e;if(e){let e=ee(r),t=ee(i);e<0&&t<0?o(0):e>0&&t>0&&a(0)}if(r===i){let t=i===0?1:Math.abs(.05*i);o(i+t),e||a(r-t)}this.min=r,this.max=i}getTickLimit(){let e=this.options.ticks,t,{maxTicksLimit:n,stepSize:r}=e;return r?(t=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,t>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${t} ticks. Limiting to 1000.`),t=1e3)):(t=this.computeTickLimit(),n||=11),n&&(t=Math.min(n,t)),t}computeTickLimit(){return 1/0}buildTicks(){let e=this.options,t=e.ticks,n=this.getTickLimit();n=Math.max(2,n);let i=(function(e,t){let n=[],{bounds:i,step:a,min:o,max:s,precision:c,count:l,maxTicks:u,maxDigits:d,includeBounds:f}=e,p=a||1,m=u-1,{min:h,max:g}=t,_=!r(o),v=!r(s),y=!r(l),b=(g-h)/(d+1),x,S,C,w,T=te((g-h)/m/p)*p;if(T<1e-14&&!_&&!v)return[{value:h},{value:g}];w=Math.ceil(g/T)-Math.floor(h/T),w>m&&(T=te(w*T/m/p)*p),r(c)||(x=10**c,T=Math.ceil(T*x)/x),i===`ticks`?(S=Math.floor(h/T)*T,C=Math.ceil(g/T)*T):(S=h,C=g),_&&v&&a&&z((s-o)/a,T/1e3)?(w=Math.round(Math.min((s-o)/T,u)),T=(s-o)/w,S=o,C=s):y?(S=_?o:S,C=v?s:C,w=l-1,T=(C-S)/w):(w=(C-S)/T,w=L(w,Math.round(w),T/1e3)?Math.round(w):Math.ceil(w));let E=Math.max(ae(T),ae(S));x=10**(r(c)?E:c),S=Math.round(S*x)/x,C=Math.round(C*x)/x;let D=0;for(_&&(f&&S!==o?(n.push({value:o}),S<o&&D++,L(Math.round((S+D*T)*x)/x,o,va(o,b,e))&&D++):S<o&&D++);D<w;++D){let e=Math.round((S+D*T)*x)/x;if(v&&e>s)break;n.push({value:e})}return v&&f&&C!==s?n.length&&L(n[n.length-1].value,s,va(s,b,e))?n[n.length-1].value=s:n.push({value:s}):v&&C!==s||n.push({value:C}),n})({maxTicks:n,bounds:e.bounds,min:e.min,max:e.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:!1!==t.includeBounds},this._range||this);return e.bounds===`ticks`&&B(i,this,`value`),e.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}configure(){let e=this.ticks,t=this.min,n=this.max;if(super.configure(),this.options.offset&&e.length){let r=(n-t)/Math.max(e.length-1,1)/2;t-=r,n+=r}this._startValue=t,this._endValue=n,this._valueRange=n-t}getLabelForValue(e){return ft(e,this.chart.options.locale,this.options.ticks.format)}}class ba extends ya{static id=`linear`;static defaults={ticks:{callback:mt.formatters.numeric}};determineDataLimits(){let{min:e,max:t}=this.getMinMax(!0);this.min=o(e)?e:0,this.max=o(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){let e=this.isHorizontal(),t=e?this.width:this.height,n=re(this.options.ticks.minRotation),r=(e?Math.sin(n):Math.cos(n))||.001,i=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,i.lineHeight/r))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}let xa=e=>Math.floor(I(e)),Sa=(e,t)=>10**(xa(e)+t);function Ca(e){return e/10**xa(e)==1}function wa(e,t,n){let r=10**n,i=Math.floor(e/r);return Math.ceil(t/r)-i}function Ta(e,{min:t,max:n}){t=s(e.min,t);let r=[],i=xa(t),a=(function(e,t){let n=xa(t-e);for(;wa(e,t,n)>10;)n++;for(;wa(e,t,n)<10;)n--;return Math.min(n,xa(e))})(t,n),o=a<0?10**Math.abs(a):1,c=10**a,l=i>a?10**i:0,u=Math.round((t-l)*o)/o,d=Math.floor((t-l)/c/10)*c*10,f=Math.floor((u-d)/10**a),p=s(e.min,Math.round((l+d+f*10**a)*o)/o);for(;p<n;)r.push({value:p,major:Ca(p),significand:f}),f>=10?f=f<15?15:20:f++,f>=20&&(a++,f=2,o=a>=0?1:o),p=Math.round((l+d+f*10**a)*o)/o;let m=s(e.max,p);return r.push({value:m,major:Ca(m),significand:f}),r}class Ea extends ri{static id=`logarithmic`;static defaults={ticks:{callback:mt.formatters.logarithmic,major:{enabled:!0}}};constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,t){let n=ya.prototype.parse.apply(this,[e,t]);if(n!==0)return o(n)&&n>0?n:null;this._zero=!0}determineDataLimits(){let{min:e,max:t}=this.getMinMax(!0);this.min=o(e)?Math.max(0,e):null,this.max=o(t)?Math.max(0,t):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!o(this._userMin)&&(this.min=e===Sa(this.min,0)?Sa(this.min,-1):Sa(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:e,maxDefined:t}=this.getUserBounds(),n=this.min,r=this.max,i=t=>n=e?n:t,a=e=>r=t?r:e;n===r&&(n<=0?(i(1),a(10)):(i(Sa(n,-1)),a(Sa(r,1)))),n<=0&&i(Sa(r,-1)),r<=0&&a(Sa(n,1)),this.min=n,this.max=r}buildTicks(){let e=this.options,t=Ta({min:this._userMin,max:this._userMax},this);return e.bounds===`ticks`&&B(t,this,`value`),e.reverse?(t.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),t}getLabelForValue(e){return e===void 0?`0`:ft(e,this.chart.options.locale,this.options.ticks.format)}configure(){let e=this.min;super.configure(),this._startValue=I(e),this._valueRange=I(this.max)-I(e)}getPixelForValue(e){return e!==void 0&&e!==0||(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(I(e)-this._startValue)/this._valueRange)}getValueForPixel(e){let t=this.getDecimalForPixel(e);return 10**(this._startValue+t*this._valueRange)}}function Da(e){let t=e.ticks;if(t.display&&e.display){let e=An(t.backdropPadding);return c(t.font&&t.font.size,bt.font.size)+e.height}return 0}function Oa(e,t,n,r,i){return e===r||e===i?{start:t-n/2,end:t+n/2}:e<r||e>i?{start:t-n,end:t}:{start:t,end:t+n}}function ka(e){let t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),r=[],a=[],o=e._pointLabels.length,s=e.options.pointLabels,c=s.centerPointLabels?O/o:0;for(let f=0;f<o;f++){let o=s.setContext(e.getPointLabelContext(f));a[f]=o.padding;let p=e.getPointPosition(f,e.drawingArea+a[f],c),m=jn(o.font),h=(l=e.ctx,u=m,d=i(d=e._pointLabels[f])?d:[d],{w:Lt(l,u.string,d),h:d.length*u.lineHeight});r[f]=h;let g=le(e.getIndexAngle(f)+c),_=Math.round(ie(g));Aa(n,t,g,Oa(_,p.x,h.w,0,180),Oa(_,p.y,h.h,90,270))}var l,u,d;e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=(function(e,t,n){let r=[],i=e._pointLabels.length,a=e.options,{centerPointLabels:o,display:s}=a.pointLabels,c={extra:Da(a)/2,additionalAngle:o?O/i:0},l;for(let a=0;a<i;a++){c.padding=n[a],c.size=t[a];let i=ja(e,a,c);r.push(i),s===`auto`&&(i.visible=Ma(i,l),i.visible&&(l=i))}return r})(e,r,a)}function Aa(e,t,n,r,i){let a=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n)),s=0,c=0;r.start<t.l?(s=(t.l-r.start)/a,e.l=Math.min(e.l,t.l-s)):r.end>t.r&&(s=(r.end-t.r)/a,e.r=Math.max(e.r,t.r+s)),i.start<t.t?(c=(t.t-i.start)/o,e.t=Math.min(e.t,t.t-c)):i.end>t.b&&(c=(i.end-t.b)/o,e.b=Math.max(e.b,t.b+c))}function ja(e,t,n){let r=e.drawingArea,{extra:i,additionalAngle:a,padding:o,size:s}=n,c=e.getPointPosition(t,r+i+o,a),l=Math.round(ie(le(c.angle+N))),u=(function(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e})(c.y,s.h,l),d=(function(e){return e===0||e===180?`center`:e<180?`left`:`right`})(l),f=(function(e,t,n){return n===`right`?e-=t:n===`center`&&(e-=t/2),e})(c.x,s.w,d);return{visible:!0,x:c.x,y:u,textAlign:d,left:f,top:u,right:f+s.w,bottom:u+s.h}}function Ma(e,t){if(!t)return!0;let{left:n,top:r,right:i,bottom:a}=e;return!(Ht({x:n,y:r},t)||Ht({x:n,y:a},t)||Ht({x:i,y:r},t)||Ht({x:i,y:a},t))}function Na(e,t,n){let{left:i,top:a,right:o,bottom:s}=n,{backdropColor:c}=t;if(!r(c)){let n=kn(t.borderRadius),r=An(t.backdropPadding);e.fillStyle=c;let l=i-r.left,u=a-r.top,d=o-i+r.width,f=s-a+r.height;Object.values(n).some(e=>e!==0)?(e.beginPath(),Xt(e,{x:l,y:u,w:d,h:f,radius:n}),e.fill()):e.fillRect(l,u,d,f)}}function Pa(e,t,n,r){let{ctx:i}=e;if(n)i.arc(e.xCenter,e.yCenter,t,0,k);else{let n=e.getPointPosition(0,t);i.moveTo(n.x,n.y);for(let a=1;a<r;a++)n=e.getPointPosition(a,t),i.lineTo(n.x,n.y)}}class Fa extends ya{static id=`radialLinear`;static defaults={display:!0,animate:!0,position:`chartArea`,angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:mt.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback:e=>e,padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":`borderColor`,"pointLabels.color":`color`,"ticks.color":`color`};static descriptors={angleLines:{_fallback:`grid`}};constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let e=this._padding=An(Da(this.options)/2),t=this.width=this.maxWidth-e.width,n=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+t/2+e.left),this.yCenter=Math.floor(this.top+n/2+e.top),this.drawingArea=Math.floor(Math.min(t,n)/2)}determineDataLimits(){let{min:e,max:t}=this.getMinMax(!1);this.min=o(e)&&!isNaN(e)?e:0,this.max=o(t)&&!isNaN(t)?t:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Da(this.options))}generateTickLabels(e){ya.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((e,t)=>{let n=d(this.options.pointLabels.callback,[e,t],this);return n||n===0?n:``}).filter((e,t)=>this.chart.getDataVisibility(t))}fit(){let e=this.options;e.display&&e.pointLabels.display?ka(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,t,n,r){this.xCenter+=Math.floor((e-t)/2),this.yCenter+=Math.floor((n-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,t,n,r))}getIndexAngle(e){return le(e*(k/(this._pointLabels.length||1))+re(this.options.startAngle||0))}getDistanceFromCenterForValue(e){if(r(e))return NaN;let t=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*t:(e-this.min)*t}getValueForDistanceFromCenter(e){if(r(e))return NaN;let t=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-t:this.min+t}getPointLabelContext(e){let t=this._pointLabels||[];if(e>=0&&e<t.length){let n=t[e];return(function(e,t,n){return Pn(e,{label:n,index:t,type:`pointLabel`})})(this.getContext(),e,n)}}getPointPosition(e,t,n=0){let r=this.getIndexAngle(e)-N+n;return{x:Math.cos(r)*t+this.xCenter,y:Math.sin(r)*t+this.yCenter,angle:r}}getPointPositionForValue(e,t){return this.getPointPosition(e,this.getDistanceFromCenterForValue(t))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){let{left:t,top:n,right:r,bottom:i}=this._pointLabelItems[e];return{left:t,top:n,right:r,bottom:i}}drawBackground(){let{backgroundColor:e,grid:{circular:t}}=this.options;if(e){let n=this.ctx;n.save(),n.beginPath(),Pa(this,this.getDistanceFromCenterForValue(this._endValue),t,this._pointLabels.length),n.closePath(),n.fillStyle=e,n.fill(),n.restore()}}drawGrid(){let e=this.ctx,t=this.options,{angleLines:n,grid:r,border:i}=t,a=this._pointLabels.length,o,s,c;if(t.pointLabels.display&&(function(e,t){let{ctx:n,options:{pointLabels:r}}=e;for(let i=t-1;i>=0;i--){let t=e._pointLabelItems[i];if(!t.visible)continue;let a=r.setContext(e.getPointLabelContext(i));Na(n,a,t);let o=jn(a.font),{x:s,y:c,textAlign:l}=t;Yt(n,e._pointLabels[i],s,c+o.lineHeight/2,o,{color:a.color,textAlign:l,textBaseline:`middle`})}})(this,a),r.display&&this.ticks.forEach((e,t)=>{if(t!==0||t===0&&this.min<0){s=this.getDistanceFromCenterForValue(e.value);let n=this.getContext(t),o=r.setContext(n),c=i.setContext(n);(function(e,t,n,r,i){let a=e.ctx,o=t.circular,{color:s,lineWidth:c}=t;!o&&!r||!s||!c||n<0||(a.save(),a.strokeStyle=s,a.lineWidth=c,a.setLineDash(i.dash||[]),a.lineDashOffset=i.dashOffset,a.beginPath(),Pa(e,n,o,r),a.closePath(),a.stroke(),a.restore())})(this,o,s,a,c)}}),n.display){for(e.save(),o=a-1;o>=0;o--){let r=n.setContext(this.getPointLabelContext(o)),{color:i,lineWidth:a}=r;a&&i&&(e.lineWidth=a,e.strokeStyle=i,e.setLineDash(r.borderDash),e.lineDashOffset=r.borderDashOffset,s=this.getDistanceFromCenterForValue(t.reverse?this.min:this.max),c=this.getPointPosition(o,s),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(c.x,c.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){let e=this.ctx,t=this.options,n=t.ticks;if(!n.display)return;let r=this.getIndexAngle(0),i,a;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(r),e.textAlign=`center`,e.textBaseline=`middle`,this.ticks.forEach((r,o)=>{if(o===0&&this.min>=0&&!t.reverse)return;let s=n.setContext(this.getContext(o)),c=jn(s.font);if(i=this.getDistanceFromCenterForValue(this.ticks[o].value),s.showLabelBackdrop){e.font=c.string,a=e.measureText(r.label).width,e.fillStyle=s.backdropColor;let t=An(s.backdropPadding);e.fillRect(-a/2-t.left,-i-c.size/2-t.top,a+t.width,c.size+t.height)}Yt(e,r.label,0,-i,c,{color:s.color,strokeColor:s.textStrokeColor,strokeWidth:s.textStrokeWidth})}),e.restore()}drawTitle(){}}let Ia={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},La=Object.keys(Ia);function Ra(e,t){return e-t}function za(e,t){if(r(t))return null;let n=e._adapter,{parser:i,round:a,isoWeekday:s}=e._parseOpts,c=t;return typeof i==`function`&&(c=i(c)),o(c)||(c=typeof i==`string`?n.parse(c,i):n.parse(c)),c===null?null:(a&&(c=a!==`week`||!ne(s)&&!0!==s?n.startOf(c,a):n.startOf(c,`isoWeek`,s)),+c)}function Ba(e,t,n,r){let i=La.length;for(let a=La.indexOf(e);a<i-1;++a){let e=Ia[La[a]],i=e.steps?e.steps:2**53-1;if(e.common&&Math.ceil((n-t)/(i*e.size))<=r)return La[a]}return La[i-1]}function Va(e,t,n){if(n){if(n.length){let{lo:r,hi:i}=H(n,t);e[n[r]>=t?n[r]:n[i]]=!0}}else e[t]=!0}function Ha(e,t,n){let r=[],i={},a=t.length,o,s;for(o=0;o<a;++o)s=t[o],i[s]=o,r.push({value:s,major:!1});return a!==0&&n?(function(e,t,n,r){let i=e._adapter,a=+i.startOf(t[0].value,r),o=t[t.length-1].value,s,c;for(s=a;s<=o;s=+i.add(s,1,r))c=n[s],c>=0&&(t[c].major=!0);return t})(e,r,i,n):r}class Ua extends ri{static id=`time`;static defaults={bounds:`data`,adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:`millisecond`,displayFormats:{}},ticks:{source:`auto`,callback:!1,major:{enabled:!1}}};constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit=`day`,this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,t={}){let n=e.time||={},r=this._adapter=new Li._date(e.adapters.date);r.init(t),v(n.displayFormats,r.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(e),this._normalized=t.normalized}parse(e,t){return e===void 0?null:za(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let e=this.options,t=this._adapter,n=e.time.unit||`day`,{min:r,max:i,minDefined:a,maxDefined:s}=this.getUserBounds();function c(e){a||isNaN(e.min)||(r=Math.min(r,e.min)),s||isNaN(e.max)||(i=Math.max(i,e.max))}a&&s||(c(this._getLabelBounds()),e.bounds===`ticks`&&e.ticks.source===`labels`||c(this.getMinMax(!1))),r=o(r)&&!isNaN(r)?r:+t.startOf(Date.now(),n),i=o(i)&&!isNaN(i)?i:+t.endOf(Date.now(),n)+1,this.min=Math.min(r,i-1),this.max=Math.max(r+1,i)}_getLabelBounds(){let e=this.getLabelTimestamps(),t=1/0,n=-1/0;return e.length&&(t=e[0],n=e[e.length-1]),{min:t,max:n}}buildTicks(){let e=this.options,t=e.time,n=e.ticks,r=n.source===`labels`?this.getLabelTimestamps():this._generate();e.bounds===`ticks`&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);let i=this.min,a=he(r,i,this.max);return this._unit=t.unit||(n.autoSkip?Ba(t.minUnit,this.min,this.max,this._getLabelCapacity(i)):(function(e,t,n,r,i){for(let a=La.length-1;a>=La.indexOf(n);a--){let n=La[a];if(Ia[n].common&&e._adapter.diff(i,r,n)>=t-1)return n}return La[n?La.indexOf(n):0]})(this,a.length,t.minUnit,this.min,this.max)),this._majorUnit=n.major.enabled&&this._unit!==`year`?(function(e){for(let t=La.indexOf(e)+1,n=La.length;t<n;++t)if(Ia[La[t]].common)return La[t]})(this._unit):void 0,this.initOffsets(r),e.reverse&&a.reverse(),Ha(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let t,n,r=0,i=0;this.options.offset&&e.length&&(t=this.getDecimalForValue(e[0]),r=e.length===1?1-t:(this.getDecimalForValue(e[1])-t)/2,n=this.getDecimalForValue(e[e.length-1]),i=e.length===1?n:(n-this.getDecimalForValue(e[e.length-2]))/2);let a=e.length<3?.5:.25;r=V(r,0,a),i=V(i,0,a),this._offsets={start:r,end:i,factor:1/(r+1+i)}}_generate(){let e=this._adapter,t=this.min,n=this.max,r=this.options,i=r.time,a=i.unit||Ba(i.minUnit,t,n,this._getLabelCapacity(t)),o=c(r.ticks.stepSize,1),s=a===`week`&&i.isoWeekday,l=ne(s)||!0===s,u={},d,f,p=t;if(l&&(p=+e.startOf(p,`isoWeek`,s)),p=+e.startOf(p,l?`day`:a),e.diff(n,t,a)>1e5*o)throw Error(t+` and `+n+` are too far apart with stepSize of `+o+` `+a);let m=r.ticks.source===`data`&&this.getDataTimestamps();for(d=p,f=0;d<n;d=+e.add(d,o,a),f++)Va(u,d,m);return d!==n&&r.bounds!==`ticks`&&f!==1||Va(u,d,m),Object.keys(u).sort(Ra).map(e=>+e)}getLabelForValue(e){let t=this._adapter,n=this.options.time;return n.tooltipFormat?t.format(e,n.tooltipFormat):t.format(e,n.displayFormats.datetime)}format(e,t){let n=this.options.time.displayFormats,r=this._unit,i=t||n[r];return this._adapter.format(e,i)}_tickFormatFunction(e,t,n,r){let i=this.options,a=i.ticks.callback;if(a)return d(a,[e,t,n],this);let o=i.time.displayFormats,s=this._unit,c=this._majorUnit,l=s&&o[s],u=c&&o[c],f=n[t],p=c&&u&&f&&f.major;return this._adapter.format(e,r||(p?u:l))}generateTickLabels(e){let t,n,r;for(t=0,n=e.length;t<n;++t)r=e[t],r.label=this._tickFormatFunction(r.value,t,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){let t=this._offsets,n=this.getDecimalForValue(e);return this.getPixelForDecimal((t.start+n)*t.factor)}getValueForPixel(e){let t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return this.min+n*(this.max-this.min)}_getLabelSize(e){let t=this.options.ticks,n=this.ctx.measureText(e).width,r=re(this.isHorizontal()?t.maxRotation:t.minRotation),i=Math.cos(r),a=Math.sin(r),o=this._resolveTickFontOptions(0).size;return{w:n*i+o*a,h:n*a+o*i}}_getLabelCapacity(e){let t=this.options.time,n=t.displayFormats,r=n[t.unit]||n.millisecond,i=this._tickFormatFunction(e,0,Ha(this,[e],this._majorUnit),r),a=this._getLabelSize(i),o=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return o>0?o:1}getDataTimestamps(){let e,t,n=this._cache.data||[];if(n.length)return n;let r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(e=0,t=r.length;e<t;++e)n=n.concat(r[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(n)}getLabelTimestamps(){let e=this._cache.labels||[],t,n;if(e.length)return e;let r=this.getLabels();for(t=0,n=r.length;t<n;++t)e.push(za(this,r[t]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return G(e.sort(Ra))}}function Wa(e,t,n){let r,i,a,o,s=0,c=e.length-1;n?(t>=e[s].pos&&t<=e[c].pos&&({lo:s,hi:c}=pe(e,`pos`,t)),{pos:r,time:a}=e[s],{pos:i,time:o}=e[c]):(t>=e[s].time&&t<=e[c].time&&({lo:s,hi:c}=pe(e,`time`,t)),{time:r,pos:a}=e[s],{time:i,pos:o}=e[c]);let l=i-r;return l?a+(o-a)*(t-r)/l:a}var Ga=Object.freeze({__proto__:null,CategoryScale:class extends ri{static id=`category`;static defaults={ticks:{callback:_a}};constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){let t=this._addedLabels;if(t.length){let e=this.getLabels();for(let{index:n,label:r}of t)e[n]===r&&e.splice(n,1);this._addedLabels=[]}super.init(e)}parse(e,t){if(r(e))return null;let n=this.getLabels();return((e,t)=>e===null?null:V(Math.round(e),0,t))(t=isFinite(t)&&n[t]===e?t:ga(n,e,c(t,e),this._addedLabels),n.length-1)}determineDataLimits(){let{minDefined:e,maxDefined:t}=this.getUserBounds(),{min:n,max:r}=this.getMinMax(!0);this.options.bounds===`ticks`&&(e||(n=0),t||(r=this.getLabels().length-1)),this.min=n,this.max=r}buildTicks(){let e=this.min,t=this.max,n=this.options.offset,r=[],i=this.getLabels();i=e===0&&t===i.length-1?i:i.slice(e,t+1),this._valueRange=Math.max(i.length-+!n,1),this._startValue=this.min-(n?.5:0);for(let n=e;n<=t;n++)r.push({value:n});return r}getLabelForValue(e){return _a.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!=`number`&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){let t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}},LinearScale:ba,LogarithmicScale:Ea,RadialLinearScale:Fa,TimeScale:Ua,TimeSeriesScale:class extends Ua{static id=`timeseries`;static defaults=Ua.defaults;constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let e=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(e);this._minPos=Wa(t,this.min),this._tableRange=Wa(t,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){let{min:t,max:n}=this,r=[],i=[],a,o,s,c,l;for(a=0,o=e.length;a<o;++a)c=e[a],c>=t&&c<=n&&r.push(c);if(r.length<2)return[{time:t,pos:0},{time:n,pos:1}];for(a=0,o=r.length;a<o;++a)l=r[a+1],s=r[a-1],c=r[a],Math.round((l+s)/2)!==c&&i.push({time:c,pos:a/(o-1)});return i}_generate(){let e=this.min,t=this.max,n=super.getDataTimestamps();return n.includes(e)&&n.length||n.splice(0,0,e),n.includes(t)&&n.length!==1||n.push(t),n.sort((e,t)=>e-t)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;let t=this.getDataTimestamps(),n=this.getLabelTimestamps();return e=t.length&&n.length?this.normalize(t.concat(n)):t.length?t:n,e=this._cache.all=e,e}getDecimalForValue(e){return(Wa(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){let t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return Wa(this._table,n*this._tableRange+this._minPos,!0)}}});let Ka=[`rgb(54, 162, 235)`,`rgb(255, 99, 132)`,`rgb(255, 159, 64)`,`rgb(255, 205, 86)`,`rgb(75, 192, 192)`,`rgb(153, 102, 255)`,`rgb(201, 203, 207)`],qa=Ka.map(e=>e.replace(`rgb(`,`rgba(`).replace(`)`,`, 0.5)`));function Ja(e){return Ka[e%Ka.length]}function Ya(e){return qa[e%qa.length]}function Xa(e){let t=0;return(n,r)=>{let i=e.getDatasetMeta(r).controller;i instanceof Ki?t=(function(e,t){return e.backgroundColor=e.data.map(()=>Ja(t++)),t})(n,t):i instanceof qi?t=(function(e,t){return e.backgroundColor=e.data.map(()=>Ya(t++)),t})(n,t):i&&(t=(function(e,t){return e.borderColor=Ja(t),e.backgroundColor=Ya(t),++t})(n,t))}}function Za(e){let t;for(t in e)if(e[t].borderColor||e[t].backgroundColor)return!0;return!1}var Qa={id:`colors`,defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,t,n){if(!n.enabled)return;let{data:{datasets:r},options:i}=e.config,{elements:a}=i,o=Za(r)||(s=i)&&(s.borderColor||s.backgroundColor)||a&&Za(a)||bt.borderColor!==`rgba(0,0,0,0.1)`||bt.backgroundColor!==`rgba(0,0,0,0.1)`;var s;if(!n.forceOverride&&o)return;let c=Xa(e);r.forEach(c)}};function $a(e){if(e._decimated){let t=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,`data`,{configurable:!0,enumerable:!0,writable:!0,value:t})}}function eo(e){e.data.datasets.forEach(e=>{$a(e)})}var to={id:`decimation`,defaults:{algorithm:`min-max`,enabled:!1},beforeElementsUpdate:(e,t,n)=>{if(!n.enabled)return void eo(e);let i=e.width;e.data.datasets.forEach((t,a)=>{let{_data:o,indexAxis:s}=t,c=e.getDatasetMeta(a),l=o||t.data;if(Mn([s,e.options.indexAxis])===`y`||!c.controller.supportsDecimation)return;let u=e.scales[c.xAxisID];if(u.type!==`linear`&&u.type!==`time`||e.options.parsing)return;let{start:d,count:f}=(function(e,t){let n=t.length,r,i=0,{iScale:a}=e,{min:o,max:s,minDefined:c,maxDefined:l}=a.getUserBounds();return c&&(i=V(pe(t,a.axis,o).lo,0,n-1)),r=l?V(pe(t,a.axis,s).hi+1,i,n)-i:n-i,{start:i,count:r}})(c,l);if(f<=(n.threshold||4*i))return void $a(t);let p;switch(r(o)&&(t._data=l,delete t.data,Object.defineProperty(t,`data`,{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(e){this._data=e}})),n.algorithm){case`lttb`:p=(function(e,t,n,r,i){let a=i.samples||r;if(a>=n)return e.slice(t,t+n);let o=[],s=(n-2)/(a-2),c=0,l=t+n-1,u,d,f,p,m,h=t;for(o[c++]=e[h],u=0;u<a-2;u++){let r,i=0,a=0,l=Math.floor((u+1)*s)+1+t,g=Math.min(Math.floor((u+2)*s)+1,n)+t,_=g-l;for(r=l;r<g;r++)i+=e[r].x,a+=e[r].y;i/=_,a/=_;let v=Math.floor(u*s)+1+t,y=Math.min(Math.floor((u+1)*s)+1,n)+t,{x:b,y:x}=e[h];for(f=p=-1,r=v;r<y;r++)p=.5*Math.abs((b-i)*(e[r].y-x)-(b-e[r].x)*(a-x)),p>f&&(f=p,d=e[r],m=r);o[c++]=d,h=m}return o[c++]=e[l],o})(l,d,f,i,n);break;case`min-max`:p=(function(e,t,n,i){let a,o,s,c,l,u,d,f,p,m,h=0,g=0,_=[],v=t+n-1,y=e[t].x,b=e[v].x-y;for(a=t;a<t+n;++a){o=e[a],s=(o.x-y)/b*i,c=o.y;let t=0|s;if(t===l)c<p?(p=c,u=a):c>m&&(m=c,d=a),h=(g*h+o.x)/++g;else{let n=a-1;if(!r(u)&&!r(d)){let t=Math.min(u,d),r=Math.max(u,d);t!==f&&t!==n&&_.push({...e[t],x:h}),r!==f&&r!==n&&_.push({...e[r],x:h})}a>0&&n!==f&&_.push(e[n]),_.push(o),l=t,g=0,p=m=c,u=d=f=a}}return _})(l,d,f,i);break;default:throw Error(`Unsupported decimation algorithm '${n.algorithm}'`)}t._decimated=p})},destroy(e){eo(e)}};function no(e,t,n,r){if(r)return;let i=t[e],a=n[e];return e===`angle`&&(i=le(i),a=le(a)),{property:e,start:i,end:a}}function ro(e,t,n){for(;t>e;t--){let e=n[t];if(!isNaN(e.x)&&!isNaN(e.y))break}return t}function io(e,t,n,r){return e&&t?r(e[n],t[n]):e?e[n]:t?t[n]:0}function ao(e,t){let n=[],r=!1;return i(e)?(r=!0,n=e):n=(function(e,t){let{x:n=null,y:r=null}=e||{},i=t.points,a=[];return t.segments.forEach(({start:e,end:t})=>{t=ro(e,t,i);let o=i[e],s=i[t];r===null?n!==null&&(a.push({x:n,y:o.y}),a.push({x:n,y:s.y})):(a.push({x:o.x,y:r}),a.push({x:s.x,y:r}))}),a})(e,t),n.length?new sa({points:n,options:{tension:0},_loop:r,_fullLoop:r}):null}function oo(e){return e&&!1!==e.fill}function so(e,t,n){let r=e[t].fill,i=[t],a;if(!n)return r;for(;!1!==r&&i.indexOf(r)===-1;){if(!o(r))return r;if(a=e[r],!a)return!1;if(a.visible)return r;i.push(r),r=a.fill}return!1}function co(e,t,n){let r=(function(e){let t=e.options,n=t.fill,r=c(n&&n.target,n);return r===void 0&&(r=!!t.backgroundColor),!1===r||r===null?!1:!0===r?`origin`:r})(e);if(a(r))return!isNaN(r.value)&&r;let i=parseFloat(r);return o(i)&&Math.floor(i)===i?(function(e,t,n,r){return e!==`-`&&e!==`+`||(n=t+n),n===t||n<0||n>=r?!1:n})(r[0],t,i,n):[`origin`,`start`,`end`,`stack`,`shape`].indexOf(r)>=0&&r}function lo(e,t,n){let r=[];for(let i=0;i<n.length;i++){let a=n[i],{first:o,last:s,point:c}=uo(a,t,`x`);if(!(!c||o&&s)){if(o)r.unshift(c);else if(e.push(c),!s)break}}e.push(...r)}function uo(e,t,n){let r=e.interpolate(t,n);if(!r)return{};let i=r[n],a=e.segments,o=e.points,s=!1,c=!1;for(let e=0;e<a.length;e++){let t=a[e],r=o[t.start][n],l=o[t.end][n];if(fe(i,r,l)){s=i===r,c=i===l;break}}return{first:s,last:c,point:r}}class fo{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,t,n){let{x:r,y:i,radius:a}=this;return t||={start:0,end:k},e.arc(r,i,a,t.end,t.start,!0),!n.bounds}interpolate(e){let{x:t,y:n,radius:r}=this,i=e.angle;return{x:t+Math.cos(i)*r,y:n+Math.sin(i)*r,angle:i}}}function po(e){let{chart:t,fill:n,line:r}=e;if(o(n))return(function(e,t){let n=e.getDatasetMeta(t);return n&&e.isDatasetVisible(t)?n.dataset:null})(t,n);if(n===`stack`)return(function(e){let{scale:t,index:n,line:r}=e,i=[],a=r.segments,o=r.points,s=(function(e,t){let n=[],r=e.getMatchingVisibleMetas(`line`);for(let e=0;e<r.length;e++){let i=r[e];if(i.index===t)break;i.hidden||n.unshift(i.dataset)}return n})(t,n);s.push(ao({x:null,y:t.bottom},r));for(let e=0;e<a.length;e++){let t=a[e];for(let e=t.start;e<=t.end;e++)lo(i,o[e],s)}return new sa({points:i,options:{}})})(e);if(n===`shape`)return!0;let i=(function(e){return(e.scale||{}).getPointPositionForValue?(function(e){let{scale:t,fill:n}=e,r=t.options,i=t.getLabels().length,o=r.reverse?t.max:t.min,s=(function(e,t,n){let r;return r=e===`start`?n:e===`end`?t.options.reverse?t.min:t.max:a(e)?e.value:t.getBaseValue(),r})(n,t,o),c=[];if(r.grid.circular){let e=t.getPointPositionForValue(0,o);return new fo({x:e.x,y:e.y,radius:t.getDistanceFromCenterForValue(s)})}for(let e=0;e<i;++e)c.push(t.getPointPositionForValue(e,s));return c})(e):(function(e){let{scale:t={},fill:n}=e,r=(function(e,t){let n=null;return e===`start`?n=t.bottom:e===`end`?n=t.top:a(e)?n=t.getPixelForValue(e.value):t.getBasePixel&&(n=t.getBasePixel()),n})(n,t);if(o(r)){let e=t.isHorizontal();return{x:e?r:null,y:e?null:r}}return null})(e)})(e);return i instanceof fo?i:ao(i,r)}function mo(e,t,n){let r=po(t),{chart:i,index:a,line:o,scale:s,axis:c}=t,l=o.options,u=l.fill,d=l.backgroundColor,{above:f=d,below:p=d}=u||{},m=Wn(i,i.getDatasetMeta(a));r&&o.points.length&&(Ut(e,n),(function(e,t){let{line:n,target:r,above:i,below:a,area:o,scale:s,clip:c}=t,l=n._loop?`angle`:t.axis;e.save();let u=a;a!==i&&(l===`x`?(ho(e,r,o.top),_o(e,{line:n,target:r,color:i,scale:s,property:l,clip:c}),e.restore(),e.save(),ho(e,r,o.bottom)):l===`y`&&(go(e,r,o.left),_o(e,{line:n,target:r,color:a,scale:s,property:l,clip:c}),e.restore(),e.save(),go(e,r,o.right),u=i)),_o(e,{line:n,target:r,color:u,scale:s,property:l,clip:c}),e.restore()})(e,{line:o,target:r,above:f,below:p,area:n,scale:s,axis:c,clip:m}),Wt(e))}function ho(e,t,n){let{segments:r,points:i}=t,a=!0,o=!1;e.beginPath();for(let s of r){let{start:r,end:c}=s,l=i[r],u=i[ro(r,c,i)];a?(e.moveTo(l.x,l.y),a=!1):(e.lineTo(l.x,n),e.lineTo(l.x,l.y)),o=!!t.pathSegment(e,s,{move:o}),o?e.closePath():e.lineTo(u.x,n)}e.lineTo(t.first().x,n),e.closePath(),e.clip()}function go(e,t,n){let{segments:r,points:i}=t,a=!0,o=!1;e.beginPath();for(let s of r){let{start:r,end:c}=s,l=i[r],u=i[ro(r,c,i)];a?(e.moveTo(l.x,l.y),a=!1):(e.lineTo(n,l.y),e.lineTo(l.x,l.y)),o=!!t.pathSegment(e,s,{move:o}),o?e.closePath():e.lineTo(n,u.y)}e.lineTo(n,t.first().y),e.closePath(),e.clip()}function _o(e,t){let{line:n,target:r,property:i,color:a,scale:o,clip:s}=t,c=(function(e,t,n){let r=e.segments,i=e.points,a=t.points,o=[];for(let e of r){let{start:r,end:s}=e;s=ro(r,s,i);let c=no(n,i[r],i[s],e.loop);if(!t.segments){o.push({source:e,target:c,start:i[r],end:i[s]});continue}let l=zn(t,c);for(let t of l){let r=no(n,a[t.start],a[t.end],t.loop),s=X(e,i,r);for(let e of s)o.push({source:e,target:t,start:{[n]:io(c,r,`start`,Math.max)},end:{[n]:io(c,r,`end`,Math.min)}})}}return o})(n,r,i);for(let{source:t,target:l,start:u,end:d}of c){let{style:{backgroundColor:c=a}={}}=t,f=!0!==r;e.save(),e.fillStyle=c,vo(e,o,s,f&&no(i,u,d)),e.beginPath();let p=!!n.pathSegment(e,t),m;if(f){p?e.closePath():yo(e,r,d,i);let t=!!r.pathSegment(e,l,{move:p,reverse:!0});m=p&&t,m||yo(e,r,u,i)}e.closePath(),e.fill(m?`evenodd`:`nonzero`),e.restore()}}function vo(e,t,n,r){let i=t.chart.chartArea,{property:a,start:o,end:s}=r||{};if(a===`x`||a===`y`){let t,r,c,l;a===`x`?(t=o,r=i.top,c=s,l=i.bottom):(t=i.left,r=o,c=i.right,l=s),e.beginPath(),n&&(t=Math.max(t,n.left),c=Math.min(c,n.right),r=Math.max(r,n.top),l=Math.min(l,n.bottom)),e.rect(t,r,c-t,l-r),e.clip()}}function yo(e,t,n,r){let i=t.interpolate(n,r);i&&e.lineTo(i.x,i.y)}var bo={id:`filler`,afterDatasetsUpdate(e,t,n){let r=(e.data.datasets||[]).length,i=[],a,o,s,c;for(o=0;o<r;++o)a=e.getDatasetMeta(o),s=a.dataset,c=null,s&&s.options&&s instanceof sa&&(c={visible:e.isDatasetVisible(o),index:o,fill:co(s,o,r),chart:e,axis:a.controller.options.indexAxis,scale:a.vScale,line:s}),a.$filler=c,i.push(c);for(o=0;o<r;++o)c=i[o],c&&!1!==c.fill&&(c.fill=so(i,o,n.propagate))},beforeDraw(e,t,n){let r=n.drawTime===`beforeDraw`,i=e.getSortedVisibleDatasetMetas(),a=e.chartArea;for(let t=i.length-1;t>=0;--t){let n=i[t].$filler;n&&(n.line.updateControlPoints(a,n.axis),r&&n.fill&&mo(e.ctx,n,a))}},beforeDatasetsDraw(e,t,n){if(n.drawTime!==`beforeDatasetsDraw`)return;let r=e.getSortedVisibleDatasetMetas();for(let t=r.length-1;t>=0;--t){let n=r[t].$filler;oo(n)&&mo(e.ctx,n,e.chartArea)}},beforeDatasetDraw(e,t,n){let r=t.meta.$filler;oo(r)&&n.drawTime===`beforeDatasetDraw`&&mo(e.ctx,r,e.chartArea)},defaults:{propagate:!0,drawTime:`beforeDatasetDraw`}};let xo=(e,t)=>{let{boxHeight:n=t,boxWidth:r=t}=e;return e.usePointStyle&&(n=Math.min(n,t),r=e.pointStyleWidth||Math.min(r,t)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(t,n)}};class So extends qr{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t,n){this.maxWidth=e,this.maxHeight=t,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){let e=this.options.labels||{},t=d(e.generateLabels,[this.chart],this)||[];e.filter&&(t=t.filter(t=>e.filter(t,this.chart.data))),e.sort&&(t=t.sort((t,n)=>e.sort(t,n,this.chart.data))),this.options.reverse&&t.reverse(),this.legendItems=t}fit(){let{options:e,ctx:t}=this;if(!e.display)return void(this.width=this.height=0);let n=e.labels,r=jn(n.font),i=r.size,a=this._computeTitleHeight(),{boxWidth:o,itemHeight:s}=xo(n,i),c,l;t.font=r.string,this.isHorizontal()?(c=this.maxWidth,l=this._fitRows(a,i,o,s)+10):(l=this.maxHeight,c=this._fitCols(a,r,o,s)+10),this.width=Math.min(c,e.maxWidth||this.maxWidth),this.height=Math.min(l,e.maxHeight||this.maxHeight)}_fitRows(e,t,n,r){let{ctx:i,maxWidth:a,options:{labels:{padding:o}}}=this,s=this.legendHitBoxes=[],c=this.lineWidths=[0],l=r+o,u=e;i.textAlign=`left`,i.textBaseline=`middle`;let d=-1,f=-l;return this.legendItems.forEach((e,p)=>{let m=n+t/2+i.measureText(e.text).width;(p===0||c[c.length-1]+m+2*o>a)&&(u+=l,c[c.length-(p>0?0:1)]=0,f+=l,d++),s[p]={left:0,top:f,row:d,width:m,height:r},c[c.length-1]+=m+o}),u}_fitCols(e,t,n,r){let{ctx:i,maxHeight:a,options:{labels:{padding:o}}}=this,s=this.legendHitBoxes=[],c=this.columnSizes=[],l=a-e,u=o,d=0,f=0,p=0,m=0;return this.legendItems.forEach((e,a)=>{let{itemWidth:h,itemHeight:g}=(function(e,t,n,r,i){return{itemWidth:(function(e,t,n,r){let i=e.text;return i&&typeof i!=`string`&&(i=i.reduce((e,t)=>e.length>t.length?e:t)),t+n.size/2+r.measureText(i).width})(r,e,t,n),itemHeight:(function(e,t,n){let r=e;return typeof t.text!=`string`&&(r=Co(t,n)),r})(i,r,t.lineHeight)}})(n,t,i,e,r);a>0&&f+g+2*o>l&&(u+=d+o,c.push({width:d,height:f}),p+=d+o,m++,d=f=0),s[a]={left:p,top:f,col:m,width:h,height:g},d=Math.max(d,h),f+=g+o}),u+=d,c.push({width:d,height:f}),u}adjustHitBoxes(){if(!this.options.display)return;let e=this._computeTitleHeight(),{legendHitBoxes:t,options:{align:n,labels:{padding:r},rtl:i}}=this,a=Fn(i,this.left,this.width);if(this.isHorizontal()){let i=0,o=xe(n,this.left+r,this.right-this.lineWidths[i]);for(let s of t)i!==s.row&&(i=s.row,o=xe(n,this.left+r,this.right-this.lineWidths[i])),s.top+=this.top+e+r,s.left=a.leftForLtr(a.x(o),s.width),o+=s.width+r}else{let i=0,o=xe(n,this.top+e+r,this.bottom-this.columnSizes[i].height);for(let s of t)s.col!==i&&(i=s.col,o=xe(n,this.top+e+r,this.bottom-this.columnSizes[i].height)),s.top=o,s.left+=this.left+r,s.left=a.leftForLtr(a.x(s.left),s.width),o+=s.height+r}}isHorizontal(){return this.options.position===`top`||this.options.position===`bottom`}draw(){if(this.options.display){let e=this.ctx;Ut(e,this),this._draw(),Wt(e)}}_draw(){let{options:e,columnSizes:t,lineWidths:n,ctx:r}=this,{align:i,labels:a}=e,o=bt.color,s=Fn(e.rtl,this.left,this.width),l=jn(a.font),{padding:u}=a,d=l.size,f=d/2,p;this.drawTitle(),r.textAlign=s.textAlign(`left`),r.textBaseline=`middle`,r.lineWidth=.5,r.font=l.string;let{boxWidth:m,boxHeight:h,itemHeight:g}=xo(a,d),_=this.isHorizontal(),v=this._computeTitleHeight();p=_?{x:xe(i,this.left+u,this.right-n[0]),y:this.top+u+v,line:0}:{x:this.left+u,y:xe(i,this.top+v+u,this.bottom-t[0].height),line:0},In(this.ctx,e.textDirection);let y=g+u;this.legendItems.forEach((b,x)=>{r.strokeStyle=b.fontColor,r.fillStyle=b.fontColor;let S=r.measureText(b.text).width,C=s.textAlign(b.textAlign||=a.textAlign),w=m+f+S,T=p.x,E=p.y;if(s.setWidth(this.width),_?x>0&&T+w+u>this.right&&(E=p.y+=y,p.line++,T=p.x=xe(i,this.left+u,this.right-n[p.line])):x>0&&E+y>this.bottom&&(T=p.x=T+t[p.line].width+u,p.line++,E=p.y=xe(i,this.top+v+u,this.bottom-t[p.line].height)),(function(e,t,n){if(isNaN(m)||m<=0||isNaN(h)||h<0)return;r.save();let i=c(n.lineWidth,1);if(r.fillStyle=c(n.fillStyle,o),r.lineCap=c(n.lineCap,`butt`),r.lineDashOffset=c(n.lineDashOffset,0),r.lineJoin=c(n.lineJoin,`miter`),r.lineWidth=i,r.strokeStyle=c(n.strokeStyle,o),r.setLineDash(c(n.lineDash,[])),a.usePointStyle)Vt(r,{radius:h*Math.SQRT2/2,pointStyle:n.pointStyle,rotation:n.rotation,borderWidth:i},s.xPlus(e,m/2),t+f,a.pointStyleWidth&&m);else{let a=t+Math.max((d-h)/2,0),o=s.leftForLtr(e,m),c=kn(n.borderRadius);r.beginPath(),Object.values(c).some(e=>e!==0)?Xt(r,{x:o,y:a,w:m,h,radius:c}):r.rect(o,a,m,h),r.fill(),i!==0&&r.stroke()}r.restore()})(s.x(T),E,b),T=Se(C,T+m+f,_?T+w:this.right,e.rtl),(function(e,t,n){Yt(r,n.text,e,t+g/2,l,{strikethrough:n.hidden,textAlign:s.textAlign(n.textAlign)})})(s.x(T),E,b),_)p.x+=w+u;else if(typeof b.text!=`string`){let e=l.lineHeight;p.y+=Co(b,e)+u}else p.y+=y}),Ln(this.ctx,e.textDirection)}drawTitle(){let e=this.options,t=e.title,n=jn(t.font),r=An(t.padding);if(!t.display)return;let i=Fn(e.rtl,this.left,this.width),a=this.ctx,o=t.position,s=n.size/2,c=r.top+s,l,u=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),l=this.top+c,u=xe(e.align,u,this.right-d);else{let t=this.columnSizes.reduce((e,t)=>Math.max(e,t.height),0);l=c+xe(e.align,this.top,this.bottom-t-e.labels.padding-this._computeTitleHeight())}let f=xe(o,u,u+d);a.textAlign=i.textAlign(be(o)),a.textBaseline=`middle`,a.strokeStyle=t.color,a.fillStyle=t.color,a.font=n.string,Yt(a,t.text,f,l,n)}_computeTitleHeight(){let e=this.options.title,t=jn(e.font),n=An(e.padding);return e.display?t.lineHeight+n.height:0}_getLegendItemAt(e,t){let n,r,i;if(fe(e,this.left,this.right)&&fe(t,this.top,this.bottom)){for(i=this.legendHitBoxes,n=0;n<i.length;++n)if(r=i[n],fe(e,r.left,r.left+r.width)&&fe(t,r.top,r.top+r.height))return this.legendItems[n]}return null}handleEvent(e){let t=this.options;if(!(function(e,t){return!!((e===`mousemove`||e===`mouseout`)&&(t.onHover||t.onLeave)||t.onClick&&(e===`click`||e===`mouseup`))})(e.type,t))return;let n=this._getLegendItemAt(e.x,e.y);if(e.type===`mousemove`||e.type===`mouseout`){let a=this._hoveredItem,o=(i=n,(r=a)!==null&&i!==null&&r.datasetIndex===i.datasetIndex&&r.index===i.index);a&&!o&&d(t.onLeave,[e,a,this],this),this._hoveredItem=n,n&&!o&&d(t.onHover,[e,n,this],this)}else n&&d(t.onClick,[e,n,this],this);var r,i}}function Co(e,t){return t*(e.text?e.text.length:0)}var wo={id:`legend`,_element:So,start(e,t,n){let r=e.legend=new So({ctx:e.ctx,options:n,chart:e});dr.configure(e,r,n),dr.addBox(e,r)},stop(e){dr.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){let r=e.legend;dr.configure(e,r,n),r.options=n},afterUpdate(e){let t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:`top`,align:`center`,fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){let r=t.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),t.hidden=!0):(i.show(r),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){let t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:a,useBorderRadius:o,borderRadius:s}}=e.legend.options;return e._getSortedDatasetMetas().map(e=>{let c=e.controller.getStyle(n?0:void 0),l=An(c.borderWidth);return{text:t[e.index].label,fillStyle:c.backgroundColor,fontColor:a,hidden:!e.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(l.width+l.height)/4,strokeStyle:c.borderColor,pointStyle:r||c.pointStyle,rotation:c.rotation,textAlign:i||c.textAlign,borderRadius:o&&(s||c.borderRadius),datasetIndex:e.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:`center`,text:``}},descriptors:{_scriptable:e=>!e.startsWith(`on`),labels:{_scriptable:e=>![`generateLabels`,`filter`,`sort`].includes(e)}}};class To extends qr{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t){let n=this.options;if(this.left=0,this.top=0,!n.display)return void(this.width=this.height=this.right=this.bottom=0);this.width=this.right=e,this.height=this.bottom=t;let r=i(n.text)?n.text.length:1;this._padding=An(n.padding);let a=r*jn(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=a:this.width=a}isHorizontal(){let e=this.options.position;return e===`top`||e===`bottom`}_drawArgs(e){let{top:t,left:n,bottom:r,right:i,options:a}=this,o=a.align,s,c,l,u=0;return this.isHorizontal()?(c=xe(o,n,i),l=t+e,s=i-n):(a.position===`left`?(c=n+e,l=xe(o,r,t),u=-.5*O):(c=i-e,l=xe(o,t,r),u=.5*O),s=r-t),{titleX:c,titleY:l,maxWidth:s,rotation:u}}draw(){let e=this.ctx,t=this.options;if(!t.display)return;let n=jn(t.font),r=n.lineHeight/2+this._padding.top,{titleX:i,titleY:a,maxWidth:o,rotation:s}=this._drawArgs(r);Yt(e,t.text,0,0,n,{color:t.color,maxWidth:o,rotation:s,textAlign:be(t.align),textBaseline:`middle`,translation:[i,a]})}}var Eo={id:`title`,_element:To,start(e,t,n){(function(e,t){let n=new To({ctx:e.ctx,options:t,chart:e});dr.configure(e,n,t),dr.addBox(e,n),e.titleBlock=n})(e,n)},stop(e){let t=e.titleBlock;dr.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,n){let r=e.titleBlock;dr.configure(e,r,n),r.options=n},defaults:{align:`center`,display:!1,font:{weight:`bold`},fullSize:!0,padding:10,position:`top`,text:``,weight:2e3},defaultRoutes:{color:`color`},descriptors:{_scriptable:!0,_indexable:!1}};let Do=new WeakMap;var Oo={id:`subtitle`,start(e,t,n){let r=new To({ctx:e.ctx,options:n,chart:e});dr.configure(e,r,n),dr.addBox(e,r),Do.set(e,r)},stop(e){dr.removeBox(e,Do.get(e)),Do.delete(e)},beforeUpdate(e,t,n){let r=Do.get(e);dr.configure(e,r,n),r.options=n},defaults:{align:`center`,display:!1,font:{weight:`normal`},fullSize:!0,padding:0,position:`top`,text:``,weight:1500},defaultRoutes:{color:`color`},descriptors:{_scriptable:!0,_indexable:!1}};let ko={average(e){if(!e.length)return!1;let t,n,r=new Set,i=0,a=0;for(t=0,n=e.length;t<n;++t){let n=e[t].element;if(n&&n.hasValue()){let e=n.tooltipPosition();r.add(e.x),i+=e.y,++a}}return a===0||r.size===0?!1:{x:[...r].reduce((e,t)=>e+t)/r.size,y:i/a}},nearest(e,t){if(!e.length)return!1;let n,r,i,a=t.x,o=t.y,s=1/0;for(n=0,r=e.length;n<r;++n){let r=e[n].element;if(r&&r.hasValue()){let e=se(t,r.getCenterPoint());e<s&&(s=e,i=r)}}if(i){let e=i.tooltipPosition();a=e.x,o=e.y}return{x:a,y:o}}};function Ao(e,t){return t&&(i(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function jo(e){return(typeof e==`string`||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function Mo(e,t){let{element:n,datasetIndex:r,index:i}=t,a=e.getDatasetMeta(r).controller,{label:o,value:s}=a.getLabelAndValue(i);return{chart:e,label:o,parsed:a.getParsed(i),raw:e.data.datasets[r].data[i],formattedValue:s,dataset:a.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function No(e,t){let n=e.chart.ctx,{body:r,footer:i,title:a}=e,{boxWidth:o,boxHeight:s}=t,c=jn(t.bodyFont),l=jn(t.titleFont),u=jn(t.footerFont),d=a.length,p=i.length,m=r.length,h=An(t.padding),g=h.height,_=0,v=r.reduce((e,t)=>e+t.before.length+t.lines.length+t.after.length,0);v+=e.beforeBody.length+e.afterBody.length,d&&(g+=d*l.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),v&&(g+=m*(t.displayColors?Math.max(s,c.lineHeight):c.lineHeight)+(v-m)*c.lineHeight+(v-1)*t.bodySpacing),p&&(g+=t.footerMarginTop+p*u.lineHeight+(p-1)*t.footerSpacing);let y=0,b=function(e){_=Math.max(_,n.measureText(e).width+y)};return n.save(),n.font=l.string,f(e.title,b),n.font=c.string,f(e.beforeBody.concat(e.afterBody),b),y=t.displayColors?o+2+t.boxPadding:0,f(r,e=>{f(e.before,b),f(e.lines,b),f(e.after,b)}),y=0,n.font=u.string,f(e.footer,b),n.restore(),_+=h.width,{width:_,height:g}}function Po(e,t,n,r){let{x:i,width:a}=n,{width:o,chartArea:{left:s,right:c}}=e,l=`center`;return r===`center`?l=i<=(s+c)/2?`left`:`right`:i<=a/2?l=`left`:i>=o-a/2&&(l=`right`),(function(e,t,n,r){let{x:i,width:a}=r,o=n.caretSize+n.caretPadding;return e===`left`&&i+a+o>t.width||e===`right`&&i-a-o<0||void 0})(l,e,t,n)&&(l=`center`),l}function Fo(e,t,n){let r=n.yAlign||t.yAlign||(function(e,t){let{y:n,height:r}=t;return n<r/2?`top`:n>e.height-r/2?`bottom`:`center`})(e,n);return{xAlign:n.xAlign||t.xAlign||Po(e,t,n,r),yAlign:r}}function Io(e,t,n,r){let{caretSize:i,caretPadding:a,cornerRadius:o}=e,{xAlign:s,yAlign:c}=n,l=i+a,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:p}=kn(o),m=(function(e,t){let{x:n,width:r}=e;return t===`right`?n-=r:t===`center`&&(n-=r/2),n})(t,s),h=(function(e,t,n){let{y:r,height:i}=e;return t===`top`?r+=n:r-=t===`bottom`?i+n:i/2,r})(t,c,l);return c===`center`?s===`left`?m+=l:s===`right`&&(m-=l):s===`left`?m-=Math.max(u,f)+i:s===`right`&&(m+=Math.max(d,p)+i),{x:V(m,0,r.width-t.width),y:V(h,0,r.height-t.height)}}function Lo(e,t,n){let r=An(n.padding);return t===`center`?e.x+e.width/2:t===`right`?e.x+e.width-r.right:e.x+r.left}function Ro(e){return Ao([],jo(e))}function zo(e,t){let n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}let Q={beforeTitle:t,title(e){if(e.length>0){let t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode===`dataset`)return t.dataset.label||``;if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return``},afterTitle:t,beforeBody:t,beforeLabel:t,label(e){if(this&&this.options&&this.options.mode===`dataset`)return e.label+`: `+e.formattedValue||e.formattedValue;let t=e.dataset.label||``;t&&(t+=`: `);let n=e.formattedValue;return r(n)||(t+=n),t},labelColor(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:t,afterBody:t,beforeFooter:t,footer:t,afterFooter:t};function $(e,t,n,r){let i=e[t].call(n,r);return i===void 0?Q[t].call(n,r):i}class Bo extends qr{static positioners=ko;constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let e=this._cachedAnimations;if(e)return e;let t=this.chart,n=this.options.setContext(this.getContext()),r=n.enabled&&t.options.animation&&n.animations,i=new Pr(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(i)),i}getContext(){return this.$context||=(e=this.chart.getContext(),t=this,n=this._tooltipItems,Pn(e,{tooltip:t,tooltipItems:n,type:`tooltip`}));var e,t,n}getTitle(e,t){let{callbacks:n}=t,r=$(n,`beforeTitle`,this,e),i=$(n,`title`,this,e),a=$(n,`afterTitle`,this,e),o=[];return o=Ao(o,jo(r)),o=Ao(o,jo(i)),o=Ao(o,jo(a)),o}getBeforeBody(e,t){return Ro($(t.callbacks,`beforeBody`,this,e))}getBody(e,t){let{callbacks:n}=t,r=[];return f(e,e=>{let t={before:[],lines:[],after:[]},i=zo(n,e);Ao(t.before,jo($(i,`beforeLabel`,this,e))),Ao(t.lines,$(i,`label`,this,e)),Ao(t.after,jo($(i,`afterLabel`,this,e))),r.push(t)}),r}getAfterBody(e,t){return Ro($(t.callbacks,`afterBody`,this,e))}getFooter(e,t){let{callbacks:n}=t,r=$(n,`beforeFooter`,this,e),i=$(n,`footer`,this,e),a=$(n,`afterFooter`,this,e),o=[];return o=Ao(o,jo(r)),o=Ao(o,jo(i)),o=Ao(o,jo(a)),o}_createItems(e){let t=this._active,n=this.chart.data,r=[],i=[],a=[],o,s,c=[];for(o=0,s=t.length;o<s;++o)c.push(Mo(this.chart,t[o]));return e.filter&&(c=c.filter((t,r,i)=>e.filter(t,r,i,n))),e.itemSort&&(c=c.sort((t,r)=>e.itemSort(t,r,n))),f(c,t=>{let n=zo(e.callbacks,t);r.push($(n,`labelColor`,this,t)),i.push($(n,`labelPointStyle`,this,t)),a.push($(n,`labelTextColor`,this,t))}),this.labelColors=r,this.labelPointStyles=i,this.labelTextColors=a,this.dataPoints=c,c}update(e,t){let n=this.options.setContext(this.getContext()),r=this._active,i,a=[];if(r.length){let e=ko[n.position].call(this,r,this._eventPosition);a=this._createItems(n),this.title=this.getTitle(a,n),this.beforeBody=this.getBeforeBody(a,n),this.body=this.getBody(a,n),this.afterBody=this.getAfterBody(a,n),this.footer=this.getFooter(a,n);let t=this._size=No(this,n),o=Object.assign({},e,t),s=Fo(this.chart,n,o),c=Io(n,o,s,this.chart);this.xAlign=s.xAlign,this.yAlign=s.yAlign,i={opacity:1,x:c.x,y:c.y,width:t.width,height:t.height,caretX:e.x,caretY:e.y}}else this.opacity!==0&&(i={opacity:0});this._tooltipItems=a,this.$context=void 0,i&&this._resolveAnimations().update(this,i),e&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:t})}drawCaret(e,t,n,r){let i=this.getCaretPosition(e,n,r);t.lineTo(i.x1,i.y1),t.lineTo(i.x2,i.y2),t.lineTo(i.x3,i.y3)}getCaretPosition(e,t,n){let{xAlign:r,yAlign:i}=this,{caretSize:a,cornerRadius:o}=n,{topLeft:s,topRight:c,bottomLeft:l,bottomRight:u}=kn(o),{x:d,y:f}=e,{width:p,height:m}=t,h,g,_,v,y,b;return i===`center`?(y=f+m/2,r===`left`?(h=d,g=h-a,v=y+a,b=y-a):(h=d+p,g=h+a,v=y-a,b=y+a),_=h):(g=r===`left`?d+Math.max(s,l)+a:r===`right`?d+p-Math.max(c,u)-a:this.caretX,i===`top`?(v=f,y=v-a,h=g-a,_=g+a):(v=f+m,y=v+a,h=g+a,_=g-a),b=v),{x1:h,x2:g,x3:_,y1:v,y2:y,y3:b}}drawTitle(e,t,n){let r=this.title,i=r.length,a,o,s;if(i){let c=Fn(n.rtl,this.x,this.width);for(e.x=Lo(this,n.titleAlign,n),t.textAlign=c.textAlign(n.titleAlign),t.textBaseline=`middle`,a=jn(n.titleFont),o=n.titleSpacing,t.fillStyle=n.titleColor,t.font=a.string,s=0;s<i;++s)t.fillText(r[s],c.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+o,s+1===i&&(e.y+=n.titleMarginBottom-o)}}_drawColorBox(e,t,n,r,i){let o=this.labelColors[n],s=this.labelPointStyles[n],{boxHeight:c,boxWidth:l}=i,u=jn(i.bodyFont),d=Lo(this,`left`,i),f=r.x(d),p=c<u.lineHeight?(u.lineHeight-c)/2:0,m=t.y+p;if(i.usePointStyle){let t={radius:Math.min(l,c)/2,pointStyle:s.pointStyle,rotation:s.rotation,borderWidth:1},n=r.leftForLtr(f,l)+l/2,a=m+c/2;e.strokeStyle=i.multiKeyBackground,e.fillStyle=i.multiKeyBackground,Bt(e,t,n,a),e.strokeStyle=o.borderColor,e.fillStyle=o.backgroundColor,Bt(e,t,n,a)}else{e.lineWidth=a(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,e.strokeStyle=o.borderColor,e.setLineDash(o.borderDash||[]),e.lineDashOffset=o.borderDashOffset||0;let t=r.leftForLtr(f,l),n=r.leftForLtr(r.xPlus(f,1),l-2),s=kn(o.borderRadius);Object.values(s).some(e=>e!==0)?(e.beginPath(),e.fillStyle=i.multiKeyBackground,Xt(e,{x:t,y:m,w:l,h:c,radius:s}),e.fill(),e.stroke(),e.fillStyle=o.backgroundColor,e.beginPath(),Xt(e,{x:n,y:m+1,w:l-2,h:c-2,radius:s}),e.fill()):(e.fillStyle=i.multiKeyBackground,e.fillRect(t,m,l,c),e.strokeRect(t,m,l,c),e.fillStyle=o.backgroundColor,e.fillRect(n,m+1,l-2,c-2))}e.fillStyle=this.labelTextColors[n]}drawBody(e,t,n){let{body:r}=this,{bodySpacing:i,bodyAlign:a,displayColors:o,boxHeight:s,boxWidth:c,boxPadding:l}=n,u=jn(n.bodyFont),d=u.lineHeight,p=0,m=Fn(n.rtl,this.x,this.width),h=function(n){t.fillText(n,m.x(e.x+p),e.y+d/2),e.y+=d+i},g=m.textAlign(a),_,v,y,b,x,S,C;for(t.textAlign=a,t.textBaseline=`middle`,t.font=u.string,e.x=Lo(this,g,n),t.fillStyle=n.bodyColor,f(this.beforeBody,h),p=o&&g!==`right`?a===`center`?c/2+l:c+2+l:0,b=0,S=r.length;b<S;++b){for(_=r[b],v=this.labelTextColors[b],t.fillStyle=v,f(_.before,h),y=_.lines,o&&y.length&&(this._drawColorBox(t,e,b,m,n),d=Math.max(u.lineHeight,s)),x=0,C=y.length;x<C;++x)h(y[x]),d=u.lineHeight;f(_.after,h)}p=0,d=u.lineHeight,f(this.afterBody,h),e.y-=i}drawFooter(e,t,n){let r=this.footer,i=r.length,a,o;if(i){let s=Fn(n.rtl,this.x,this.width);for(e.x=Lo(this,n.footerAlign,n),e.y+=n.footerMarginTop,t.textAlign=s.textAlign(n.footerAlign),t.textBaseline=`middle`,a=jn(n.footerFont),t.fillStyle=n.footerColor,t.font=a.string,o=0;o<i;++o)t.fillText(r[o],s.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+n.footerSpacing}}drawBackground(e,t,n,r){let{xAlign:i,yAlign:a}=this,{x:o,y:s}=e,{width:c,height:l}=n,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:p}=kn(r.cornerRadius);t.fillStyle=r.backgroundColor,t.strokeStyle=r.borderColor,t.lineWidth=r.borderWidth,t.beginPath(),t.moveTo(o+u,s),a===`top`&&this.drawCaret(e,t,n,r),t.lineTo(o+c-d,s),t.quadraticCurveTo(o+c,s,o+c,s+d),a===`center`&&i===`right`&&this.drawCaret(e,t,n,r),t.lineTo(o+c,s+l-p),t.quadraticCurveTo(o+c,s+l,o+c-p,s+l),a===`bottom`&&this.drawCaret(e,t,n,r),t.lineTo(o+f,s+l),t.quadraticCurveTo(o,s+l,o,s+l-f),a===`center`&&i===`left`&&this.drawCaret(e,t,n,r),t.lineTo(o,s+u),t.quadraticCurveTo(o,s,o+u,s),t.closePath(),t.fill(),r.borderWidth>0&&t.stroke()}_updateAnimationTarget(e){let t=this.chart,n=this.$animations,r=n&&n.x,i=n&&n.y;if(r||i){let n=ko[e.position].call(this,this._active,this._eventPosition);if(!n)return;let a=this._size=No(this,e),o=Object.assign({},n,this._size),s=Fo(t,e,o),c=Io(e,o,s,t);r._to===c.x&&i._to===c.y||(this.xAlign=s.xAlign,this.yAlign=s.yAlign,this.width=a.width,this.height=a.height,this.caretX=n.x,this.caretY=n.y,this._resolveAnimations().update(this,c))}}_willRender(){return!!this.opacity}draw(e){let t=this.options.setContext(this.getContext()),n=this.opacity;if(!n)return;this._updateAnimationTarget(t);let r={width:this.width,height:this.height},i={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;let a=An(t.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;t.enabled&&o&&(e.save(),e.globalAlpha=n,this.drawBackground(i,e,r,t),In(e,t.textDirection),i.y+=a.top,this.drawTitle(i,e,t),this.drawBody(i,e,t),this.drawFooter(i,e,t),Ln(e,t.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,t){let n=this._active,r=e.map(({datasetIndex:e,index:t})=>{let n=this.chart.getDatasetMeta(e);if(!n)throw Error(`Cannot find a dataset at index `+e);return{datasetIndex:e,element:n.data[t],index:t}}),i=!p(n,r),a=this._positionChanged(r,t);(i||a)&&(this._active=r,this._eventPosition=t,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,t,n=!0){if(t&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let r=this.options,i=this._active||[],a=this._getActiveElements(e,i,t,n),o=this._positionChanged(a,e),s=t||!p(a,i)||o;return s&&(this._active=a,(r.enabled||r.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,t))),s}_getActiveElements(e,t,n,r){let i=this.options;if(e.type===`mouseout`)return[];if(!r)return t.filter(e=>this.chart.data.datasets[e.datasetIndex]&&this.chart.getDatasetMeta(e.datasetIndex).controller.getParsed(e.index)!==void 0);let a=this.chart.getElementsAtEventForMode(e,i.mode,i,n);return i.reverse&&a.reverse(),a}_positionChanged(e,t){let{caretX:n,caretY:r,options:i}=this,a=ko[i.position].call(this,e,t);return!1!==a&&(n!==a.x||r!==a.y)}}var Vo={id:`tooltip`,_element:Bo,positioners:ko,afterInit(e,t,n){n&&(e.tooltip=new Bo({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){let t=e.tooltip;if(t&&t._willRender()){let n={tooltip:t};if(!1===e.notifyPlugins(`beforeTooltipDraw`,{...n,cancelable:!0}))return;t.draw(e.ctx),e.notifyPlugins(`afterTooltipDraw`,n)}},afterEvent(e,t){if(e.tooltip){let n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:`average`,backgroundColor:`rgba(0,0,0,0.8)`,titleColor:`#fff`,titleFont:{weight:`bold`},titleSpacing:2,titleMarginBottom:6,titleAlign:`left`,bodyColor:`#fff`,bodySpacing:2,bodyFont:{},bodyAlign:`left`,footerColor:`#fff`,footerSpacing:2,footerMarginTop:6,footerFont:{weight:`bold`},footerAlign:`left`,padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:`#fff`,displayColors:!0,boxPadding:0,borderColor:`rgba(0,0,0,0)`,borderWidth:0,animation:{duration:400,easing:`easeOutQuart`},animations:{numbers:{type:`number`,properties:[`x`,`y`,`width`,`height`,`caretX`,`caretY`]},opacity:{easing:`linear`,duration:200}},callbacks:Q},defaultRoutes:{bodyFont:`font`,footerFont:`font`,titleFont:`font`},descriptors:{_scriptable:e=>e!==`filter`&&e!==`itemSort`&&e!==`external`,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:`animation`}},additionalOptionScopes:[`interaction`]};return Ni.register(Ji,Ga,ha,e),Ni.helpers={...Gn},Ni._adapters=Li,Ni.Animation=Nr,Ni.Animations=Pr,Ni.animator=Ee,Ni.controllers=oi.controllers.items,Ni.DatasetController=Kr,Ni.Element=qr,Ni.elements=ha,Ni.Interaction=Qn,Ni.layouts=dr,Ni.platforms=Ar,Ni.Scale=ri,Ni.Ticks=mt,Object.assign(Ni,Ji,Ga,ha,e,Ar),Ni.Chart=Ni,typeof window<`u`&&(window.Chart=Ni),Ni})}))();var Ih=`<header class="head load">\r
    <svg\r
        xmlns="http://www.w3.org/2000/svg"\r
        width="24"\r
        height="24"\r
        viewBox="0 0 24 24"\r
        fill="none"\r
        stroke="white"\r
        stroke-width="2"\r
        stroke-linecap="round"\r
        stroke-linejoin="round"\r
        class="menu-btn open"\r
    >\r
        <line x1="3" y1="12" x2="21" y2="12"></line>\r
        <line x1="3" y1="6" x2="21" y2="6"></line>\r
        <line x1="3" y1="18" x2="21" y2="18"></line>\r
    </svg>\r
    <svg\r
        xmlns="http://www.w3.org/2000/svg"\r
        width="24"\r
        height="24"\r
        viewBox="0 0 24 24"\r
        fill="none"\r
        stroke="white"\r
        stroke-width="2"\r
        stroke-linecap="round"\r
        stroke-linejoin="round"\r
        class="chevron left"\r
    >\r
        <polyline points="15 18 9 12 15 6"></polyline>\r
    </svg>\r
    <div class="display-notation"></div>\r
    <svg\r
        xmlns="http://www.w3.org/2000/svg"\r
        width="24"\r
        height="24"\r
        viewBox="0 0 24 24"\r
        fill="none"\r
        stroke="white"\r
        stroke-width="2"\r
        stroke-linecap="round"\r
        stroke-linejoin="round"\r
        class="chevron right"\r
    >\r
        <polyline points="9 18 15 12 9 6"></polyline>\r
    </svg>\r
</header>\r
<div class="download-link">\r
    <span>Downoad CubeX to track, improve, and master your solves</span>\r
</div>\r
<div class="download-container" tabindex="-1">\r
    <svg\r
        xmlns="http://www.w3.org/2000/svg"\r
        width="24"\r
        height="24"\r
        viewBox="0 0 24 24"\r
        fill="none"\r
        stroke="white"\r
        stroke-width="2"\r
        stroke-linecap="round"\r
        stroke-linejoin="round"\r
        class="download-cont-x"\r
    >\r
        <line x1="18" y1="6" x2="6" y2="18"></line>\r
        <line x1="6" y1="6" x2="18" y2="18"></line>\r
    </svg>\r
    <h2>Download CubeX</h2>\r
    <div class="android">\r
        <span>CubeX_1.0.apk</span>\r
        <span>123mb</span>\r
        <span class="btn">Download</span>\r
    </div>\r
    <div class="windows">\r
        <!-- <h4>Choose architecture or download Universal if unsure</h4> -->\r
        <div class="table-wrapper">\r
            <table class="list-arch">\r
                <!-- <tr class="universal">\r
                                <td>CubeX_Setup_1.0.1_universal.exe</td>\r
                                <td>123mb</td>\r
                                <td class="btn">Download</td>\r
                            </tr> -->\r
                <tr class="x64">\r
                    <td>Cubex_Setup_1.0.1_x64.exe</td>\r
                    <td>123mb</td>\r
                    <td class="btn">Download</td>\r
                </tr>\r
                <tr class="ia32">\r
                    <td>Cubex_Setup_1.0.1_ia32.exe</td>\r
                    <td>123mb</td>\r
                    <td class="btn">Download</td>\r
                </tr>\r
                <tr class="arm64">\r
                    <td>Cubex_Setup_1.0.1_arm64.exe</td>\r
                    <td>123mb</td>\r
                    <td class="btn">Download</td>\r
                </tr>\r
            </table>\r
        </div>\r
    </div>\r
</div>\r
<div class="container load">\r
    <div class="timer" data-phase="0" data-time="0.0">0.0</div>\r
    <div class="timer-cover">\r
        <video src="./vid.mp4" hidden width="0" height="0" loop="true"></video>\r
    </div>\r
    <div class="cube-wrapper">\r
        <div class="cube-2d-wrapper">\r
            <canvas class="cube-2d"></canvas>\r
        </div>\r
        <div class="cube-3d-wrapper">\r
            <canvas class="cube-3d"></canvas>\r
        </div>\r
    </div>\r
</div>\r
<footer class="load">\r
    <div class="average-container">\r
        <table tabindex="-1" class="stats">\r
            <tr>\r
                <th>\r
                    <svg\r
                        xmlns="http://www.w3.org/2000/svg"\r
                        viewBox="0 0 16 16"\r
                        fill="none"\r
                        id="Open--Streamline-Majesticons"\r
                        height="16"\r
                        width="16"\r
                    >\r
                        <desc>\r
                            Open Streamline Icon: https://streamlinehq.com\r
                        </desc>\r
                        <path\r
                            stroke="#ffffff"\r
                            stroke-linecap="round"\r
                            stroke-linejoin="round"\r
                            stroke-width="1.3333"\r
                            d="M6.666666666666666 2.6666666666666665H4a1.3333333333333333 1.3333333333333333 0 0 0 -1.3333333333333333 1.3333333333333333v8a1.3333333333333333 1.3333333333333333 0 0 0 1.3333333333333333 1.3333333333333333h8a1.3333333333333333 1.3333333333333333 0 0 0 1.3333333333333333 -1.3333333333333333v-2.6666666666666665m-5.333333333333333 -1.3333333333333333 5.333333333333333 -5.333333333333333m0 0v3.333333333333333m0 -3.333333333333333h-3.333333333333333"\r
                        ></path>\r
                    </svg>\r
                </th>\r
                <th>Current</th>\r
                <th>Best</th>\r
            </tr>\r
            <tr class="time">\r
                <th>Time</th>\r
                <td>n/a</td>\r
                <td>n/a</td>\r
            </tr>\r
            <tr class="mo3">\r
                <th>mo3</th>\r
                <td>n/a</td>\r
                <td>n/a</td>\r
            </tr>\r
            <tr class="ao5">\r
                <th>ao5</th>\r
                <td>n/a</td>\r
                <td>n/a</td>\r
            </tr>\r
            <tr class="ao12">\r
                <th>ao12</th>\r
                <td>n/a</td>\r
                <td>n/a</td>\r
            </tr>\r
            <tr class="ao100">\r
                <th>ao100</th>\r
                <td>n/a</td>\r
                <td>n/a</td>\r
            </tr>\r
        </table>\r
        <div class="chart-container chart-load" tabindex="-1">\r
            <canvas class="chart"></canvas>\r
        </div>\r
    </div>\r
</footer>\r
<div class="see-time-container" tabindex="-1">\r
    <svg\r
        xmlns="http://www.w3.org/2000/svg"\r
        width="24"\r
        height="24"\r
        viewBox="0 0 24 24"\r
        fill="none"\r
        stroke="white"\r
        stroke-width="2"\r
        stroke-linecap="round"\r
        stroke-linejoin="round"\r
        class="see-time-x"\r
    >\r
        <line x1="18" y1="6" x2="6" y2="18"></line>\r
        <line x1="6" y1="6" x2="18" y2="18"></line>\r
    </svg>\r
    <h3>Solve #1</h3>\r
    <table>\r
        <tr>\r
            <th>Date</th>\r
            <td>n/a</td>\r
        </tr>\r
        <tr>\r
            <th>Scramble</th>\r
            <td>n/a</td>\r
        </tr>\r
        <tr>\r
            <th>Time</th>\r
            <td>n/a</td>\r
        </tr>\r
    </table>\r
</div>\r
<div class="session" style="display: none" tabindex="-1">\r
    <div class="msg" tabindex="-1">\r
        <span>Download Session?</span>\r
        <div class="btn-wrapper">\r
            <div class="yes-btn">Yes</div>\r
            <div class="no-btn">No</div>\r
        </div>\r
    </div>\r
    <div class="session-group" tabindex="-1" style="display: none">\r
        <h3>Sessions</h3>\r
        <svg\r
            xmlns="http://www.w3.org/2000/svg"\r
            width="24"\r
            height="24"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="white"\r
            stroke-width="2"\r
            stroke-linecap="round"\r
            stroke-linejoin="round"\r
            class="session-group-x"\r
        >\r
            <line x1="18" y1="6" x2="6" y2="18"></line>\r
            <line x1="6" y1="6" x2="18" y2="18"></line>\r
        </svg>\r
        <div class="wrapper">\r
            <div class="session-itm" data-id="1">Session 1</div>\r
            <div class="session-itm" data-id="2">Session 2</div>\r
            <div class="session-itm" data-id="3">Session 3</div>\r
            <div class="session-itm" data-id="4">Session 4</div>\r
        </div>\r
        <div class="add-session-btn">Add Session</div>\r
    </div>\r
    <div class="rename-msg" tabindex="-1">\r
        <h3>Rename session?</h3>\r
        <input tabindex="-1" type="text" maxlength="15" />\r
        <div class="rename-btn">Rename</div>\r
    </div>\r
    <div class="delete-msg" tabindex="-1">\r
        <h3>Delete solve?</h3>\r
        <div class="btns">\r
            <div class="yes-btn">Yes</div>\r
            <div class="no-btn">No</div>\r
        </div>\r
    </div>\r
    <svg\r
        xmlns="http://www.w3.org/2000/svg"\r
        width="24"\r
        height="24"\r
        viewBox="0 0 24 24"\r
        fill="none"\r
        stroke="white"\r
        stroke-width="2"\r
        stroke-linecap="round"\r
        stroke-linejoin="round"\r
        class="session-x"\r
    >\r
        <line x1="18" y1="6" x2="6" y2="18"></line>\r
        <line x1="6" y1="6" x2="18" y2="18"></line>\r
    </svg>\r
    <div class="top">\r
        <svg\r
            xmlns="http://www.w3.org/2000/svg"\r
            width="24"\r
            height="24"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="white"\r
            stroke-width="2"\r
            stroke-linecap="round"\r
            stroke-linejoin="round"\r
            class="import"\r
        >\r
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>\r
            <polyline points="7 10 12 15 17 10"></polyline>\r
            <line x1="12" y1="15" x2="12" y2="3"></line>\r
        </svg>\r
        <svg\r
            xmlns="http://www.w3.org/2000/svg"\r
            width="24"\r
            height="24"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="white"\r
            stroke-width="2"\r
            stroke-linecap="round"\r
            stroke-linejoin="round"\r
            class="feather feather-edit"\r
        >\r
            <path\r
                d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"\r
            ></path>\r
        </svg>\r
        <div class="session-name">Session 1</div>\r
        <svg\r
            xmlns="http://www.w3.org/2000/svg"\r
            width="24"\r
            height="24"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="white"\r
            stroke-width="2"\r
            stroke-linecap="round"\r
            stroke-linejoin="round"\r
            class="delete-all-btn"\r
        >\r
            <polyline points="3 6 5 6 21 6"></polyline>\r
            <path\r
                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"\r
            ></path>\r
            <line x1="10" y1="11" x2="10" y2="17"></line>\r
            <line x1="14" y1="11" x2="14" y2="17"></line>\r
        </svg>\r
        <svg\r
            xmlns="http://www.w3.org/2000/svg"\r
            width="24"\r
            height="24"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
            stroke-linecap="round"\r
            stroke-linejoin="round"\r
            class="export"\r
        >\r
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>\r
            <polyline points="17 8 12 3 7 8"></polyline>\r
            <line x1="12" y1="3" x2="12" y2="15"></line>\r
        </svg>\r
    </div>\r
    <div class="table-wrapper" tabindex="-1">\r
        <table class="main">\r
            <tr>\r
                <td>#</td>\r
                <td>Time</td>\r
                <td>OK</td>\r
                <td>+2</td>\r
                <td>DNF</td>\r
                <td>\r
                    <svg\r
                        xmlns="http://www.w3.org/2000/svg"\r
                        width="24"\r
                        height="24"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="white"\r
                        stroke-width="2"\r
                        stroke-linecap="round"\r
                        stroke-linejoin="round"\r
                        class="see-time"\r
                    >\r
                        <circle cx="12" cy="12" r="10"></circle>\r
                        <line x1="12" y1="16" x2="12" y2="12"></line>\r
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>\r
                    </svg>\r
                </td>\r
                <td>\r
                    <svg\r
                        class="solve-x"\r
                        xmlns="http://www.w3.org/2000/svg"\r
                        width="24"\r
                        height="24"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="white"\r
                        stroke-width="2"\r
                        stroke-linecap="round"\r
                        stroke-linejoin="round"\r
                    >\r
                        <line x1="18" y1="6" x2="6" y2="18"></line>\r
                        <line x1="6" y1="6" x2="18" y2="18"></line>\r
                    </svg>\r
                </td>\r
            </tr>\r
        </table>\r
    </div>\r
</div>\r
`,Lh=document.querySelector(`.main-container`),Rh=new AbortController,zh;async function Bh(){Lh.innerHTML=Ih,Rh.signal.aborted&&(Rh=new AbortController);let t=Rh.signal,n=document.querySelector(`.display-notation`),i=document.querySelector(`.timer`),a=document.querySelector(`.timer-cover video`),o=document.querySelector(`.stats`),s=document.querySelector(`.session`),c=document.querySelector(`.global-cover`),l=s.querySelector(`.delete-msg`),u=s.querySelector(`.rename-msg`),d=s.querySelector(`.msg`),f=s.querySelector(`.feather-edit`),p=s.querySelector(`.session-group`),m=s.querySelector(`.session-name`),h=s.querySelector(`.export`),g=s.querySelector(`.import`),_=p.querySelector(`.add-session-btn`),v=o.parentNode.querySelector(`.chart`),y=v.getContext(`2d`),b=document.querySelector(`.cube-wrapper`),x=document.querySelector(`.cube-2d`),S=x.getContext(`2d`),C=document.querySelector(`.cube-3d`),w=document.querySelector(`.see-time-container`),T=document.querySelector(`.settings`).querySelectorAll(`.toggle-btn`),E=document.querySelector(`.download-link`),D=document.querySelector(`.download-container`),O=document.querySelectorAll(`header .chevron`),k=document.querySelector(`.menu-btn.open`),A=document.querySelector(`nav`),j=A.querySelector(`.solver-btn`),M=Capacitor.isNativePlatform()||window.env?.isElectron||!1,N=Number(localStorage.getItem(`Session`))||1,P=[],F=[],I,ee=!1,L,te=!0,R=null,ne=null,z=JSON.parse(localStorage.getItem(`settings`)),B=!1,re=null,ie=null,ae=!1,oe=0,se=!1,ce=null,le=0,ue=!0,V=`ok`,de=[],fe=0;zh=new Fh(C);let H=new xe.default;z||(z={cubeMap:!0,cube:!0,inspection:!0},localStorage.setItem(`settings`,JSON.stringify(z))),j.addEventListener(`click`,()=>{let e=location.pathname.replace(/\/$/,``)||`/`,t=e===`/`?`/#solver`:`${e}/#solver`;window.history.pushState({},``,t),window.dispatchEvent(new CustomEvent(`navigate`)),A.blur()},{signal:t});let ge=await me(N);L=ge?ge.solves:[],ke(),Fe(),await zh.init(),await lt(),await Ze(),Pe(),await ve(),document.body.classList.remove(`disabled`),document.fonts.ready.then(()=>{v.parentNode.classList.remove(`chart-load`),je()}),setTimeout(()=>{te=!1},1e3),window.addEventListener(`resize`,()=>{je(),ae&&Ce(),W()},{signal:t});function W(){let e=document.querySelector(`footer`),t=x.parentNode,n=C.parentNode,r=e.clientWidth;r>=500?(e.style.cssText=`
        padding-inline: 10px;
        padding-bottom: 10px;
        `,o.parentNode.style.borderRadius=`1rem`,o.parentNode.style.width=``,e.appendChild(t),t.style.margin=`auto`):(e.style.cssText=``,o.parentNode.style.borderRadius=``,o.parentNode.style.width=`100%`,t.style.margin=``,b.contains(n)?b.insertBefore(t,n):b.appendChild(t)),r>=800?(e.insertBefore(n,t),n.style.margin=`auto`):(n.style.margin=``,b.appendChild(n))}if(W(),M||fetch(`https://api.github.com/repos/Basalio-art/cubex/releases/latest`).then(e=>e.json()).then(e=>{let n=D.querySelector(`.windows`),r=D.querySelector(`.android`);e.assets.forEach(e=>{if(n&&e.name.includes(`.exe`)){if(e.name.includes(`x64`)){let r=n.querySelector(`.x64`);r.children[0].innerText=e.name,r.children[1].innerText=Math.floor(e.size/(1024*1024)*10)/10+`mb`,r.children[2].addEventListener(`click`,()=>{window.location.href=e.browser_download_url},{signal:t})}else if(e.name.includes(`arm64`)){let r=n.querySelector(`.arm64`);r.children[0].innerText=e.name,r.children[1].innerText=Math.floor(e.size/(1024*1024)*10)/10+`mb`,r.children[2].addEventListener(`click`,()=>{window.location.href=e.browser_download_url},{signal:t})}else if(e.name.includes(`ia32`)){let r=n.querySelector(`.ia32`);r.children[0].innerText=e.name,r.children[1].innerText=Math.floor(e.size/(1024*1024)*10)/10+`mb`,r.children[2].addEventListener(`click`,()=>{window.location.href=e.browser_download_url},{signal:t})}}r&&e.name.includes(`.apk`)&&(r.children[0].innerText=e.name,r.children[1].innerText=Math.floor(e.size/(1024*1024)*10)/10+`mb`,r.children[2].addEventListener(`click`,()=>{window.location.href=e.browser_download_url},{signal:t}))})}),window.env?.isElectron)E.remove();else if(Capacitor.isNativePlatform())E.remove();else{let e=/Android|Windows/.test(navigator.userAgent),t=/Android/.test(navigator.userAgent);e?t?D.querySelector(`.windows`).remove():D.querySelector(`.android`).remove():E.remove()}E&&(document.querySelector(`header`).addEventListener(`transitionend`,e=>{e.target.classList.contains(`head`)&&E.classList.add(`show`)},{signal:t}),E.children[0].addEventListener(`click`,e=>{e.stopPropagation(),c.classList.add(`show`),D.classList.add(`show`),E.classList.add(`active`)},{signal:t}),D.querySelector(`.download-cont-x`).addEventListener(`click`,()=>{D.blur()},{signal:t}),D.addEventListener(`keyup`,e=>{e.key===`Escape`&&D.blur()},{signal:t}),D.addEventListener(`transitionend`,e=>{e.target.classList.contains(`download-container`)&&(e.target.classList.contains(`show`)?D.focus():E.classList.remove(`active`))},{signal:t}),D.addEventListener(`blur`,e=>{D.contains(e.relatedTarget)||(c.classList.remove(`show`),D.classList.remove(`show`))},{signal:t})),k.addEventListener(`click`,e=>{e.stopPropagation(),G()});function G(){A.classList.add(`show`),c.classList.add(`show`)}async function ve(e=[]){e.length===0?(P=(0,be.cube)().split(` `),de.push([...P]),fe=de.length-1):P=[...e],n.innerHTML=``,P.forEach(e=>{let t=document.createElement(`p`);t.innerText=e.includes(`'`)?e.replace(`'`,` '`):e,n.appendChild(t)}),ye(),zh.reset(),zh.moves(P.join(` `))}function ye(){H.identity();let e=0;clearInterval(ne),ne=setInterval(()=>{Se(H.move(P[e]).asString()),e++,e===P.length&&clearInterval(ne)},75)}function Se(e=`UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB`){let t=x;if(!t)return;let n=S,r=Math.min(window.devicePixelRatio,2),i=t.getBoundingClientRect(),a=i.width,o=i.height;t.width=a*r,t.height=o*r,n.clearRect(0,0,t.width,t.width),n.setTransform(r,0,0,r,0,0);let s=7.5,c=a,l=o,u=(c-10-s*3)/4,d=(l-10-s*2)/3,f=2.5,p={U:`white`,D:`yellow`,F:`green`,R:`#ff002bff`,B:`#0066ffff`,L:`orange`},m={U:e.slice(0,9),R:e.slice(9,18),F:e.slice(18,27),D:e.slice(27,36),L:e.slice(36,45),B:e.slice(45,54)};h(m.U,1,0),h(m.L,0,1),h(m.F,1,1),h(m.R,2,1),h(m.B,3,1),h(m.D,1,2);function h(e,t,n){g(e,5+t*(u+s),5+n*(d+s),u,d)}function g(e,t,r,i,a){let o=(i-f*2)/3,s=(a-f*2)/3;for(let i=0;i<3;i++)for(let a=0;a<3;a++){let c=i*3+a,l=t+a*(o+f),u=r+i*(s+f);n.beginPath(),n.roundRect(l,u,o,s,1),n.fillStyle=p[e[c]],n.fill(),n.strokeStyle=`black`,n.lineWidth=.5,n.stroke(),n.closePath()}}}O.forEach(e=>{e.addEventListener(`click`,async()=>{if(e.classList.contains(`left`))if(fe===0){await ve();let e=de.pop();de.unshift(e),fe=0}else fe--,await ve(de[fe]);else fe===de.length-1?(await ve(),fe=de.length-1):(fe++,await ve(de[fe]))},{signal:t})});function Ce(e=!0){let t=i.parentNode.getBoundingClientRect(),n=(window.innerHeight-i.offsetHeight)/2-t.top;e?i.style.transform=`translateY(${n}px)`:i.style.transform&&(i.style.transform=``)}function we(){i.dataset.phase=`1`,Ce(),re=setTimeout(()=>{i.dataset.phase=`2`,B=!0},500)}function Te(){Ce(!1),clearInterval(ie),ae=!1,B=!1,i.dataset.phase=`0`,i.removeAttribute(`data-penalty`),i.innerHTML=Ne(oe,!0),i.dataset.time=i.textContent,ue=!1,a.pause(),Oe().then(()=>{ve()})}function Ee(){a.play(),z.inspection&&(clearInterval(ce),se=!1),B=!0,i.dataset.phase=2;let e=performance.now();ie&&clearInterval(ie),ie=setInterval(()=>{let t=performance.now();ae=!0;let n=t-e;i.innerHTML=Ne(n),i.dataset.time=i.textContent,oe=Math.floor(n)},10)}function De(){a.play(),Ce(),i.dataset.phase=1,se=!0;let e=performance.now();ce&&clearInterval(ce),ce=setInterval(()=>{let t=performance.now()-e,n=Math.floor(Math.max(15-Ne(t),-2)*10)/10,r=n.toString().split(`.`).length===2?n:`${n}.0`;i.innerText=r,i.dataset.time=r,n<=0&&n>-2?(i.innerText=`+2`,i.dataset.time=`+2`,V=`+2`):n===-2?(i.innerText=`DNF`,i.dataset.time=`DNF`,V=`dnf`,clearInterval(ce)):V=`ok`})}i.addEventListener(`transitionend`,e=>{e.target.dataset.phase===`0`&&(ue=!0)},{signal:t}),document.addEventListener(`keydown`,e=>{te||(e.key===` `&&!e.repeat&&!B&&!z.inspection&&we(),B&&!e.repeat&&ae&&Te(),!e.repeat&&e.key===` `&&!se&&ue&&!ae&&z.inspection&&De())},{signal:t}),document.addEventListener(`keyup`,e=>{e.key===` `&&!B&&!z.inspection&&(clearTimeout(re),Ce(!1),i.dataset.phase=`0`),se&&le++,e.key===` `&&B&&!ae&&Ee(),e.key===` `&&se&&le>1&&z.inspection&&(Ee(),le=0)},{signal:t}),i.addEventListener(`touchstart`,e=>{e.preventDefault(),e.touches.length===1&&(!B&&!z.inspection&&we(),!se&&ue&&!ae&&z.inspection&&De())},{passive:!1,signal:t}),document.addEventListener(`touchstart`,()=>{B&&ae&&Te()},{passive:!0,signal:t}),document.addEventListener(`touchend`,e=>{e.touches.length===0&&(!B&&!z.inspection&&(Ce(!1),i.dataset.phase=`0`,clearTimeout(re)),se&&le++,B&&!ae&&(Ee(),ae=!0),le>1&&z.inspection&&(Ee(),le=0))},{signal:t}),i.addEventListener(`contextmenu`,e=>e.preventDefault(),{signal:t});async function Oe(e=!1){let t=await me(N);V===`+2`?(i.innerHTML=`${Ne(oe+2e3,!0)}+`,oe=`${oe}+`):V===`dnf`&&(i.innerHTML=`DNF`,oe=`${oe}dnf`),e||L.push({time:oe,scramble:P.join(` `),date:new Date,dnf:V===`dnf`,plus2:V===`+2`});let n=L.map(e=>{let t=e.time;return typeof t==`string`&&(t=Number(t.match(/[0-9]+/)[0]),e.time.includes(`+`)?t+=2e3:e.time.includes(`dnf`)&&(t=0)),t}),r=[];L.length>=3&&(r=Me(n,3,!0));let a=[];L.length>=5&&(a=Me(n,5));let o=[];L.length>=12&&(o=Me(n,12));let s=[];L.length>=100&&(s=Me(n,100)),pe({SessionName:t?t.SessionName:`Session ${N}`,solves:L,SessionID:N,mo3:r,ao5:a,ao12:o,ao100:s}),ke(),Fe()}async function ke(){let e=await me(N),t=L.map(e=>{let t=e.time;return typeof t==`string`&&(t=Number(t.match(/[0-9]+/)[0]),e.time.includes(`+`)?t+=2e3:e.time.includes(`dnf`)&&(t=0)),t}).filter(e=>e!==0),n=o.querySelector(`.time`),r=o.querySelector(`.mo3`),i=o.querySelector(`.ao5`),a=o.querySelector(`.ao12`),s=o.querySelector(`.ao100`);if(!e){n.children[1].textContent=`n/a`,n.children[2].textContent=`n/a`,n.children[1].classList.remove(`new`),n.children[2].classList.remove(`new`);return}n.children[1].textContent=Ne(t.at(-1),!0)||`n/a`,e.solves.length!==0&&typeof e.solves.at(-1).time==`string`&&(e.solves.at(-1).plus2?n.children[1].textContent+=`+`:e.solves.at(-1).dnf&&(n.children[1].textContent=`DNF`)),n.children[2].textContent=Ne(Math.min(...t),!0)||`n/a`,t.at(-1)===Math.min(...t)&&n.children[1].textContent!=`n/a`&&n.children[1].textContent!==`DNF`?(n.children[1].classList.add(`new`),n.children[2].classList.add(`new`)):(n.children[1].classList.remove(`new`),n.children[2].classList.remove(`new`)),r.children[1].innerHTML=Ne(e.mo3.at(-1),!0)||`n/a`,r.children[2].innerHTML=Ne(Math.min(...e.mo3.filter(e=>e!==0)),!0)||`n/a`,r.children[1].textContent===`0.00`&&(r.children[1].textContent=`DNF`),r.children[1].textContent===r.children[2].textContent&&r.children[1].textContent!==`n/a`&&r.children[1].textContent!==`DNF`?(r.children[1].classList.add(`new`),r.children[2].classList.add(`new`)):(r.children[1].classList.remove(`new`),r.children[2].classList.remove(`new`)),i.children[1].innerHTML=Ne(e.ao5.at(-1),!0)||`n/a`,i.children[2].innerHTML=Ne(Math.min(...e.ao5.filter(e=>e!==0)),!0)||`n/a`,i.children[1].textContent===`0.00`&&(i.children[1].textContent=`DNF`),i.children[1].textContent===i.children[2].textContent&&i.children[1].textContent!==`n/a`&&i.children[1].textContent!==`DNF`?(i.children[1].classList.add(`new`),i.children[2].classList.add(`new`)):(i.children[1].classList.remove(`new`),i.children[2].classList.remove(`new`)),a.children[1].innerHTML=Ne(e.ao12.at(-1),!0)||`n/a`,a.children[2].innerHTML=Ne(Math.min(...e.ao12.filter(e=>e!==0)),!0)||`n/a`,a.children[1].textContent===`0.00`&&(a.children[1].textContent=`DNF`),a.children[1].textContent===a.children[2].textContent&&a.children[1].textContent!==`n/a`&&a.children[1].textContent!==`DNF`?(a.children[1].classList.add(`new`),a.children[2].classList.add(`new`)):(a.children[1].classList.remove(`new`),a.children[2].classList.remove(`new`)),s.children[1].innerHTML=Ne(e.ao100.at(-1),!0)||`n/a`,s.children[2].innerHTML=Ne(Math.min(...e.ao100.filter(e=>e!==0)),!0)||`n/a`,s.children[1].textContent===`0.00`&&(s.children[1].textContent=`DNF`),s.children[1].textContent===s.children[2].textContent&&s.children[1].textContent!==`n/a`&&s.children[1].textContent!==`DNF`?(s.children[1].classList.add(`new`),s.children[2].classList.add(`new`)):(s.children[1].classList.remove(`new`),s.children[2].classList.remove(`new`)),je()}function Ae(e,t,n){let r=window.innerWidth;return Math.min(Math.max(t*r,e),n)}function je(){let e=L,t=e.map(e=>{let t=e.time;return typeof t==`string`&&(t=Number(t.match(/[0-9]+/)[0]),e.time.includes(`+`)?t+=2e3:e.time.includes(`dnf`)&&(t=0)),Math.floor(t/1e3*100)/100}).filter(e=>e!==0),n=[],r=`n/a`,i=[],a=!1;t.length!==0&&(n=Array(t.length).fill(Math.floor(t.reduce((e,t)=>e+t)/t.length*100)/100),r=Math.floor(t.reduce((e,t)=>e+t)/t.length*100)/100,i=t.map((e,t)=>t+1),a=!0);let o=Math.min(...t),s=Math.max(...t),c=(s-o)*.15,l=y.createLinearGradient(0,0,0,y.canvas.height);if(l.addColorStop(0,`#0080ff`),l.addColorStop(1,`#0080ff00`),Chart.defaults.font.family=`Roboto`,Chart.defaults.font.size=Ae(12,.02,14),R){R.data.datasets[0].data=n,R.data.datasets[1].data=t,R.data.labels=i,R.options.scales.x.ticks.display=a,R.options.scales.y.ticks.display=a,R.options.scales.x.max=t.length,R.options.scales.x.min=t.length-9,R.options.scales.y.suggestedMin=Math.max(o-c,0),R.options.scales.y.suggestedMax=s+c,R.options.plugins.title.text=`Solves: ${t.length}/${e.length}   Mean: ${r}`,R.update();return}R=new Chart(v,{type:`line`,data:{labels:i,datasets:[{pointHitRadius:20,label:`Mean`,data:n,borderColor:`limegreen`,pointRadius:0,borderWidth:2,borderDash:[5,5],width:2},{label:`Time`,borderWidth:3,data:t,tension:.4,borderColor:`#0080ff`,backgroundColor:l,fill:!0,pointRadius:0,pointHitRadius:20}]},options:{maintainAspectRatio:!1,scales:{x:{max:t.length,min:t.length-9,ticks:{display:a,color:`#ffffff80`},border:{color:`#ffffff80`,width:2},grid:{display:!1}},y:{grid:{display:!1},border:{color:`#ffffff80`,width:2},ticks:{display:a,color:`#ffffff80`,callback:function(e){let t=Math.floor(e*10)/10,n=Math.floor(t/60*10)/10,r=Math.floor(n/60*10)/10;return e=e<60?t+`s`:e<120?n+`m`:r+`h`,e}},suggestedMin:Math.max(o-c,0),suggestedMax:s+c}},plugins:{tooltip:{callbacks:{title:function(e){let t=``;return e[0].dataset.label===`Time`&&(t=`Solve: ${e[0].label}`),t},label:function(e){let t=`Time`,n=e.raw,r=Math.floor(n*10)/10,i=Math.floor(r/60*100)/100,a=Math.floor(i/60*100)/100;return e.dataset.label===`Mean`&&(t=`Mean`),n=n<60?r+`s`:n<120?i+`m`:a+`h`,`${t}: ${n}`}}},legend:{display:!1},title:{display:!0,color:`white`,text:`Solves: ${t.length}/${e.length}   Mean: ${r}`}}}})}function Me(e,t,n=!1){if(n){let t=[];for(let n=0;n<e.length-2;n++)t.push(Math.floor(e.slice(n,n+3).reduce((e,t)=>e+t)/3));return t}let r=[];for(let n=0;n<e.length-(t-1);n++)r.push(Math.floor(e.slice(n,n+t).sort((e,t)=>e-t).slice(1,-1).reduce((e,t)=>e+t)/t));return r}function Ne(e,t=!1){if(isNaN(e)||e===null||e===1/0)return null;let n=Math.floor(e/1e3),r=n%60,i=Math.floor(n/60)%60,a=Math.floor(n/3600),o=t?Math.floor(e%1e3/10).toString().padStart(2,`0`):Math.floor(e%1e3/100);return a>0?`${a}:${i.toString().padStart(2,`0`)}:${r.toString().padStart(2,`0`)}.${o}`:i>0?`${i}:${r.toString().padStart(2,`0`)}.${o}`:`${r}.${o}`}function Pe(){let e=document.querySelectorAll(`.load`);e.forEach(e=>{F.push(e.classList[0])}),e.forEach(e=>{e.classList.remove(`load`)})}async function Fe(){let e=await me(N);if(!e)return;s.querySelector(`.session-name`).textContent=e.SessionName;let n=L.length,r=s.querySelector(`tbody`),i=r.children[0];r.innerHTML=``,r.appendChild(i.cloneNode(!0));let a=document.createDocumentFragment(),o=L,c=o.map(e=>{let t=e.time;return typeof t==`string`&&(t=Number(t.match(/[0-9]+/)[0]),e.time.includes(`+`)?t+=2e3:e.time.includes(`dnf`)&&(t=0)),t});for(let r=n;r>0;r--){let n=i.cloneNode(!0);n.className=`data`,n.children[0].textContent=r,n.children[1].textContent=Ne(c[r-1],!0),e.solves[r-1].plus2?n.children[1].textContent+=`+`:e.solves[r-1].dnf&&(n.children[1].textContent=`DNF`),n.children[2].className=`ok`,n.children[2].innerHTML=`<input type='radio' name='${r}' id='ok-${r}'><label for='ok-${r}'></label>`,n.children[3].className=`plus2`,n.children[3].innerHTML=`<input type='radio' name='${r}' id='plus2-${r}'><label for='plus2-${r}'></label>`,n.children[4].className=`dnf`,n.children[4].innerHTML=`<input type='radio' name='${r}' id='dnf-${r}'><label for='dnf-${r}'></label>`,n.children[6].className=`x`,a.appendChild(n),o[r-1].dnf?n.children[4].querySelector(`input`).checked=!0:o[r-1].plus2?n.children[3].querySelector(`input`).checked=!0:n.children[2].querySelector(`input`).checked=!0,n.children[5].children[0].addEventListener(`click`,t=>{t.stopPropagation();let n=w.querySelector(`tbody`),i=n.children[2].children[1],a=n.children[1].children[1],o=n.children[0].children[1],s=e.solves[r-1],c=new Date(s.date),l=s.scramble,u=s.time;o.innerText=`${c.toLocaleDateString(`en-US`,{month:`long`,day:`numeric`,year:`numeric`})} • ${c.toLocaleTimeString(`en-US`,{hour:`numeric`,minute:`2-digit`,hour12:!0})}`,a.innerText=l,i.innerHTML=(()=>{let e=u;if(typeof e==`string`)return e.includes(`+`)?t(Number(e.match(/[0-9]+/)[0])+2e3):`DNF`;return t(e);function t(e){let t=[],n=e/1e3,r=(Math.floor(n%60*100)/100).toFixed(2),i=Math.floor(n/60)%60,a=Math.floor(n/3600);return a!==0&&t.push(a+`h`),i!==0&&t.push(i+`m`),Number(r)!==0&&t.push(r+`s`),t.join(` `)}})(),Ie()},{signal:t}),n.children[6].children[0].addEventListener(`click`,e=>{e.stopPropagation(),s.classList.add(`cover`),l.classList.add(`show`),l.querySelector(`h3`).textContent=`Delete Solve?`,ee=!1,I=r-1},{signal:t})}r.appendChild(a)}w.querySelector(`.see-time-x`).addEventListener(`click`,()=>{w.blur()},{signal:t});function Ie(){w.classList.add(`show`),s.classList.add(`cover`)}function Le(){w.classList.remove(`show`),s.classList.remove(`cover`)}w.addEventListener(`transitionend`,e=>{e.target.classList.contains(`see-time-container`)&&e.target.classList.contains(`show`)&&setTimeout(()=>{e.target.focus(),ze()})},{signal:t}),w.addEventListener(`keyup`,e=>{e.key===`Escape`&&w.blur()},{signal:t}),w.addEventListener(`blur`,()=>{s.focus(),Le()},{signal:t}),s.querySelector(`.session-x`).addEventListener(`click`,()=>{s.blur()},{signal:t}),o.addEventListener(`click`,e=>{e.stopPropagation(),ze()},{signal:t});function Re(){s.classList.remove(`show`),c.classList.remove(`show`),te=!1}function ze(){s.classList.contains(`show`)||(s.style.display=``),requestAnimationFrame(()=>{s.classList.add(`show`)}),c.classList.add(`show`),te=!0}s.addEventListener(`transitionend`,e=>{e.target.classList.contains(`session`)&&(e.target.classList.contains(`show`)?s.focus():s.style.display=`none`)},{signal:t}),s.addEventListener(`blur`,e=>{Re()},{signal:t}),s.addEventListener(`keyup`,e=>{let t=e.key;e.target.classList.contains(`session`)&&t===`Escape`&&s.blur()},{signal:t}),l.querySelector(`.no-btn`).addEventListener(`click`,()=>{l.blur()},{signal:t}),l.querySelector(`.yes-btn`).addEventListener(`click`,async()=>{let e=await he();if(Ve(),V=`ok`,!ee)L.splice(I,1),Oe(!0);else if(N>4){U(N);let t=e.findIndex(e=>e.SessionID===N)-1;p.querySelector(`[data-id="${N}"]`).remove(),N=e[t].SessionID,localStorage.setItem(`Session`,N),L=e[t].solves,Oe(!0)}else L.length=0,Oe(!0)},{signal:t}),s.querySelector(`.delete-all-btn`).addEventListener(`click`,e=>{if(e.stopPropagation(),ee=!0,N>4)l.querySelector(`h3`).textContent=`Delete session?`;else if(l.querySelector(`h3`).textContent=`Clear session?`,L.length===0){st(`No active session to clear.`);return}Be()},{signal:t});function Be(){s.classList.add(`cover`),l.classList.add(`show`)}function Ve(){s.classList.remove(`cover`),l.classList.remove(`show`)}l.addEventListener(`transitionend`,e=>{e.target.classList.contains(`delete-msg`)&&e.target.classList.contains(`show`)&&(ze(),e.target.focus())},{signal:t}),l.addEventListener(`keyup`,e=>{switch(e.key){case`Enter`:l.querySelector(`.yes-btn`).click();break;case`Escape`:l.blur();break}},{signal:t}),l.addEventListener(`blur`,()=>{s.focus(),Ve()},{signal:t}),f.addEventListener(`click`,e=>{e.stopPropagation(),Ue(),u.querySelector(`input`).placeholder=s.querySelector(`.session-name`).textContent},{signal:t}),u.addEventListener(`transitionend`,e=>{e.target.classList.contains(`rename-msg`)&&e.target.classList.contains(`show`)&&(ze(),u.querySelector(`input`).focus())},{signal:t});let He=!1;u.querySelector(`input`).addEventListener(`blur`,e=>{if(He){u.querySelector(`input`).focus();return}e.relatedTarget&&e.relatedTarget.classList.contains(`rename-msg`)||(s.focus(),We())},{signal:t}),u.addEventListener(`blur`,e=>{e.relatedTarget?e.relatedTarget.tagName!==`INPUT`&&(s.focus(),We()):(s.focus(),We())},{signal:t});function Ue(){s.classList.add(`cover`),u.classList.add(`show`),u.querySelector(`input`).value=``}function We(){s.classList.remove(`cover`),u.classList.remove(`show`)}async function Ge(){let e=await me(N),t=await he(),n=u.querySelector(`input`),r=s.querySelector(`.session-name`),i=n.value.trim()?n.value.trim():r.textContent;if(e.SessionName!==i&&t.some(e=>e.SessionName.toLowerCase()===i.toLowerCase())){st(`Name already exists. Enter new name`),n.focus(),He=!0;return}else He=!1;n.value=``,n.placeholder=i,r.textContent=i,pe(e?{SessionName:i,totalSolve:e.totalSolve,solves:e.solves,SessionID:e.SessionID,current:e.current,totalSolved:e.totalSolved,best:e.best}:{SessionID:N,SessionName:i}),await Ze(!1),We(),n.blur()}u.querySelector(`.rename-btn`).addEventListener(`click`,Ge,{signal:t}),u.addEventListener(`keydown`,e=>{switch(e.key){case`Enter`:Ge();break;case`Escape`:We();break}},{signal:t}),s.querySelector(`table`).addEventListener(`change`,e=>{let t=e.target.parentNode.parentNode,n=t.querySelector(`.plus2 input`),r=t.querySelector(`.dnf input`),i=Number(e.target.name)-1,a=typeof L[i].time==`string`?Number(L[i].time.match(/[0-9]+/)[0]):L[i].time;n.checked?(L[i].plus2=!0,L[i].time=a+`+`):L[i].plus2=!1,r.checked?(L[i].dnf=!0,L[i].time=a+`dnf`):L[i].dnf=!1,!n.checked&&!r.checked&&(L[i].time=a),Oe(!0)},{signal:t}),v.parentNode.addEventListener(`keydown`,e=>{let t=e.key,n=R.options.scales.x;t===`ArrowLeft`&&(n.min=Math.max(n.min-10,1),n.max=Math.max(n.max-10,10)),t===`ArrowRight`&&(n.min=Math.min(n.min+10,L.length-9),n.max=Math.min(n.max+10,L.length)),R.update()},{signal:t});let Ke=!1,qe=null;function Je(){Ke=!1}function Ye(e){e.type.includes(`touch`)&&(e=e.touches[0]),Ke=!0,qe=e.pageX}function Xe(e){if(!R)return;e.type.includes(`touch`)&&(e=e.touches[0]);let t=R.options.scales.x;if(Ke){let n=R.chartArea.width/2,r=e.pageX-qe;r>=n?(qe=e.pageX,t.min=Math.max(t.min-10,1),t.max=Math.max(t.max-10,10),R.update()):r<=n*-1&&(qe=e.pageX,t.min=Math.min(t.min+10,L.length-9),t.max=Math.min(t.max+10,L.length),R.update())}}v.addEventListener(`mousedown`,Ye,{signal:t}),document.addEventListener(`mouseup`,Je,{signal:t}),document.addEventListener(`mousemove`,Xe,{signal:t}),v.addEventListener(`touchstart`,Ye,{signal:t}),document.addEventListener(`touchend`,Je,{signal:t}),document.addEventListener(`touchmove`,Xe,{signal:t});async function Ze(e=!0){return new Promise(async t=>{let n=await he(),r=p.querySelectorAll(`.session-itm`);r.forEach(t=>{e?n[t.dataset.id-1]?t.innerText=n[t.dataset.id-1].SessionName:pe({SessionName:`Session ${t.dataset.id}`,SessionID:Number(t.dataset.id)}):Number(t.dataset.id)===N&&(t.innerText=n[N-1].SessionName)}),n.forEach(e=>{if(!r[e.SessionID-1]){let t=document.createElement(`div`);t.className=`session-itm`,t.dataset.id=e.SessionID,t.innerText=e.SessionName,r[0].parentNode.appendChild(t),tt(t)}}),setTimeout(t,50)})}function Qe(){let e=Number(Array.from(p.querySelectorAll(`.session-itm`)).at(-1).dataset.id),t=document.createElement(`div`);t.className=`session-itm`,t.dataset.id=e+1,t.innerText=`Session ${e+1}`,p.querySelector(`.wrapper`).appendChild(t),N=e+1,localStorage.setItem(`Session`,N),L.length=0,Oe(!0),tt(t),et()}_.addEventListener(`click`,Qe,{signal:t}),p.querySelector(`.session-group-x`).addEventListener(`click`,()=>{p.blur()},{signal:t}),m.addEventListener(`click`,e=>{e.stopPropagation(),$e()},{signal:t});function $e(){p.style.display=``,s.classList.add(`cover`),requestAnimationFrame(()=>{p.classList.add(`show`)})}function et(){p.classList.remove(`show`),s.classList.remove(`cover`)}p.addEventListener(`transitionend`,e=>{e.target.classList.contains(`session-group`)&&e.target.classList.contains(`show`)&&(ze(),e.target.focus())},{signal:t}),p.addEventListener(`transitionend`,e=>{e.target.classList.contains(`session-group`)&&(e.target.classList.contains(`show`)||(p.style.display=`none`))},{signal:t}),p.addEventListener(`blur`,()=>{s.focus(),et()},{signal:t}),p.addEventListener(`keyup`,e=>{e.key===`Ecape`&&p.blur()},{signal:t}),p.querySelectorAll(`.session-itm`).forEach(tt);function tt(e){e.addEventListener(`click`,async()=>{let t=await he();N=Number(e.dataset.id);let n=t.findIndex(e=>e.SessionID===N);localStorage.setItem(`Session`,N),L=t[n].solves,Oe(!0),et()},{signal:t})}let nt=!0;h.addEventListener(`click`,e=>{e.stopPropagation(),d.querySelector(`span`).innerText=`Export Session?`,rt(),nt=!0},{signal:t}),d.querySelector(`.no-btn`).addEventListener(`click`,()=>{d.blur()},{signal:t}),d.querySelector(`.yes-btn`).addEventListener(`click`,()=>{if(nt)at();else{let e=document.createElement(`input`);e.type=`file`,e.accept=`.cubex`,e.click(),e.addEventListener(`input`,e=>{let t=e.target.files[0],n=new FileReader;if(t.name.split(`.`).at(-1)!==`cubex`){st(`Invalid file. 
Please select a valid session file.`);return}n.onload=e=>{let t=e.target.result;ot(t),o.click()},n.readAsText(t)},{signal:t})}d.blur()},{signal:t});function rt(){d.classList.add(`show`),s.classList.add(`cover`)}function it(){d.classList.remove(`show`),s.classList.remove(`cover`)}d.addEventListener(`transitionend`,e=>{e.target.classList.contains(`msg`)&&e.target.classList.contains(`show`)&&(ze(),e.target.focus())},{signal:t}),d.addEventListener(`keyup`,e=>{switch(e.key){case`Enter`:d.querySelector(`.yes-btn`).click();break;case`Escape`:d.blur();break}},{signal:t}),d.addEventListener(`blur`,()=>{s.focus(),it()},{signal:t}),g.addEventListener(`click`,()=>{d.querySelector(`span`).innerText=`Import session?`,rt(),nt=!1},{signal:t});async function at(){if(L.length===0){st(`No session data found. 
Please start a session before exporting`);return}let t={v:`CUBEX`,data:await me(N)};t=btoa(JSON.stringify(t));let n=new Date,i=n.getFullYear(),a=String(n.getMonth()+1).padStart(2,`0`),o=String(n.getDate()).padStart(2,`0`),s=String(n.getHours()).padStart(2,`0`),c=String(n.getMinutes()).padStart(2,`0`),l=String(n.getSeconds()).padStart(2,`0`);if(Capacitor.isNativePlatform()){let n=`Cubex/session/cubex_${i}${a}${o}_${s}${c}${l}.cubex`;await _e.writeFile({path:n,data:t,directory:r.Documents,encoding:e.UTF8,recursive:!0}),ct(`Session exported succesfully.\nSaved at: ${(await _e.getUri({path:n,directory:r.Documents})).uri}`)}else if(window.env?.isElectron){let e=await window.electron.invoke(`export-session`,t);e?ct(`Session exported succesfully. Saved at ${e}`):st(`User abort the request`)}else{let e=new Blob([t],{type:`application/octet-stream`}),n=document.createElement(`a`);n.href=URL.createObjectURL(e),n.download=`cubex_${i}${a}${o}_${s}${c}${l}.cubex`,n.click(),ct(`Session exported succesfully`)}}async function ot(e){let t=await he();try{let n=JSON.parse(atob(e));if(n.v!==`CUBEX`)throw Error();let r=n.data,i=t.at(-1).SessionID+1;t[N-1].solves.length<=0&&(i=N);let a=`Session ${i}`;t.some(e=>e.SessionName===r.SessionName)||(a=r.SessionName),pe({SessionName:a,SessionID:i,mo3:r.mo3,ao5:r.ao5,ao12:r.ao12,ao100:r.ao100,solves:r.solves}),N=i,localStorage.setItem(`Session`,N),L=r.solves,Oe(!0),await Ze(),t.some(e=>e.SessionName===r.SessionName)?(Ue(),u.querySelector(`input`).placeholder=a,ct(`Name '${r.SessionName}' is already in use. Rename it or saved as ${a}`)):ct(`Session imported succesfully`)}catch{st(`Invalid file. 
Please select a valid session file.`)}}function st(e){dispatchEvent(new CustomEvent(`MSG`,{detail:{target:`error`,message:e}}))}async function ct(e,t=!1){dispatchEvent(new CustomEvent(`MSG`,{detail:{target:`noerror`,message:e,ASYNC:t}}))}T.forEach(e=>{z[e.dataset.type]?e.dataset.state=!0:e.dataset.state=!1,e.addEventListener(`click`,async()=>{e.dataset.state===`false`?(e.dataset.state=!0,z[e.dataset.type]=!0):(e.dataset.state=!1,z[e.dataset.type]=!1),await lt()},{signal:t})});async function lt(){let e=z;e.cubeMap?x.parentNode.style.display===`none`&&(x.parentNode.style.display=``,ye()):x.parentNode.style.display=`none`,e.cube?C.parentNode.style.display===`none`?(C.parentNode.style.display=``,zh.reset(),zh.moves(P.join(` `))):C.parentNode.style.display=``:C.parentNode.style.display=`none`,localStorage.setItem(`settings`,JSON.stringify(z))}}function Vh(){Rh.abort(),zh&&zh.destroy()}var Hh=`<header class="head load">\r
    <svg\r
        xmlns="http://www.w3.org/2000/svg"\r
        width="24"\r
        height="24"\r
        viewBox="0 0 24 24"\r
        fill="none"\r
        stroke="white"\r
        stroke-width="2"\r
        stroke-linecap="round"\r
        stroke-linejoin="round"\r
        class="menu-btn open"\r
    >\r
        <line x1="3" y1="12" x2="21" y2="12"></line>\r
        <line x1="3" y1="6" x2="21" y2="6"></line>\r
        <line x1="3" y1="18" x2="21" y2="18"></line>\r
    </svg>\r
    <div class="color-pallete">\r
        <input type="radio" name="color" id="orange" />\r
        <label\r
            class="color"\r
            for="orange"\r
            data-color="orange"\r
            style="--color: orange"\r
        ></label>\r
        <input type="radio" name="color" id="green" />\r
        <label\r
            class="color"\r
            for="green"\r
            data-color="green"\r
            style="--color: green"\r
        ></label>\r
        <input type="radio" name="color" id="red" />\r
        <label\r
            class="color"\r
            for="red"\r
            data-color="#ff002bff"\r
            style="--color: #ff002bff"\r
        ></label>\r
        <input type="radio" name="color" id="blue" />\r
        <label\r
            class="color"\r
            for="blue"\r
            data-color="#0066ffff"\r
            style="--color: #0066ffff"\r
        ></label>\r
        <input type="radio" name="color" id="white" />\r
        <label\r
            class="color"\r
            for="white"\r
            data-color="white"\r
            style="--color: white"\r
        ></label>\r
        <input type="radio" name="color" id="yellow" />\r
        <label\r
            class="color"\r
            for="yellow"\r
            data-color="yellow"\r
            style="--color: yellow"\r
        ></label>\r
    </div>\r
</header>\r
<div class="container solver load">\r
    <div class="blank-faces">\r
        <svg\r
            xmlns="http://www.w3.org/2000/svg"\r
            width="24"\r
            height="24"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="white"\r
            stroke-width="2"\r
            stroke-linecap="round"\r
            stroke-linejoin="round"\r
            class="chevron left"\r
        >\r
            <polyline points="15 18 9 12 15 6"></polyline>\r
        </svg>\r
        <div class="wrapper">\r
            <div class="face L">\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div\r
                    class="sticker middle"\r
                    data-color="orange"\r
                    style="--color: orange"\r
                ></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
            </div>\r
            <div class="face F">\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div\r
                    class="sticker middle"\r
                    data-color="green"\r
                    style="--color: green"\r
                ></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
            </div>\r
            <div class="face R">\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div\r
                    class="sticker middle"\r
                    data-color="#ff002bff"\r
                    style="--color: #ff002bff"\r
                ></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
            </div>\r
            <div class="face B">\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div\r
                    class="sticker middle"\r
                    data-color="#0066ffff"\r
                    style="--color: #0066ffff"\r
                ></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
            </div>\r
            <div class="face U">\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div\r
                    class="sticker middle"\r
                    data-color="white"\r
                    style="--color: white"\r
                ></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
            </div>\r
            <div class="face D">\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div\r
                    class="sticker middle"\r
                    data-color="yellow"\r
                    style="--color: yellow"\r
                ></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
            </div>\r
            <div class="face L fake">\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div\r
                    class="sticker middle"\r
                    data-color="orange"\r
                    style="--color: orange"\r
                ></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
                <div class="sticker"></div>\r
            </div>\r
        </div>\r
        <svg\r
            xmlns="http://www.w3.org/2000/svg"\r
            width="24"\r
            height="24"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="white"\r
            stroke-width="2"\r
            stroke-linecap="round"\r
            stroke-linejoin="round"\r
            class="chevron right"\r
        >\r
            <polyline points="9 18 15 12 9 6"></polyline>\r
        </svg>\r
    </div>\r
\r
    <div class="solve-btn">SOLVE</div>\r
</div>\r
<div class="solutions" tabindex="-1">\r
    <svg\r
        xmlns="http://www.w3.org/2000/svg"\r
        width="24"\r
        height="24"\r
        viewBox="0 0 24 24"\r
        fill="none"\r
        stroke="white"\r
        stroke-width="2"\r
        stroke-linecap="round"\r
        stroke-linejoin="round"\r
        class="x"\r
    >\r
        <line x1="18" y1="6" x2="6" y2="18"></line>\r
        <line x1="6" y1="6" x2="18" y2="18"></line>\r
    </svg>\r
    <h2>Solutions</h2>\r
    <div class="wrapper"></div>\r
    <div class="loading" data-type="searching">\r
        <img src="./cube.gif" alt="Loading" />\r
        <span>Searching . . . </span>\r
    </div>\r
</div>\r
<div class="solution-player" tabindex="-1">\r
    <svg\r
        xmlns="http://www.w3.org/2000/svg"\r
        width="24"\r
        height="24"\r
        viewBox="0 0 24 24"\r
        fill="none"\r
        stroke="white"\r
        stroke-width="2"\r
        stroke-linecap="round"\r
        stroke-linejoin="round"\r
        class="x"\r
    >\r
        <line x1="18" y1="6" x2="6" y2="18"></line>\r
        <line x1="6" y1="6" x2="18" y2="18"></line>\r
    </svg>\r
    <span class="solved-moves"></span>\r
</div>`;function Uh(e){return new Worker(`/assets/solver.worker-CUYhT9_y.js`,{name:e?.name})}var Wh=k(class extends N{traverseAlg(e){let t=0;for(let n of e.childAlgNodes())t+=this.traverseAlgNode(n);return t}traverseGrouping(e){return this.traverseAlg(e.alg)*Math.abs(e.amount)}traverseMove(e){return 1}traverseCommutator(e){return 2*(this.traverseAlg(e.A)+this.traverseAlg(e.B))}traverseConjugate(e){return 2*this.traverseAlg(e.A)+this.traverseAlg(e.B)}traversePause(e){return 1}traverseNewline(e){return 0}traverseLineComment(e){return 0}});function Gh(e){return e.endsWith(`v`)||[`x`,`y`,`z`].includes(e)?`Rotation`:e.startsWith(`2`)||[`M`,`E`,`S`].includes(e)?`Inner`:`Outer`}var Kh;function qh(){if(Kh)return Kh;Kh={};let e=[...Object.keys(i.moves),...Object.keys(i.derivedMoves)];for(let t of e)Kh[t]=Gh(t);return Kh}var Jh={OBTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:1,amountFactor:0,zeroAmount:0},Inner:{constantFactor:2,amountFactor:0,zeroAmount:0}},RBTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:1,amountFactor:0,zeroAmount:0},Inner:{constantFactor:1,amountFactor:0,zeroAmount:0}},OBQTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:0,amountFactor:1,zeroAmount:0},Inner:{constantFactor:0,amountFactor:2,zeroAmount:0}},RBQTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:0,amountFactor:1,zeroAmount:0},Inner:{constantFactor:0,amountFactor:1,zeroAmount:0}},ETM:{Rotation:{constantFactor:1,amountFactor:0,zeroAmount:1},Outer:{constantFactor:1,amountFactor:0,zeroAmount:1},Inner:{constantFactor:1,amountFactor:0,zeroAmount:1}}};function Yh(e,t){let n=Jh[e];if(!n)throw Error(`Invalid metric for 3x3x3: ${e}`);let r=qh(),i=t.quantum.toString();if(!(i in r))throw Error(`Invalid move for 3x3x3 ${e}: ${i}`);let{constantFactor:a,amountFactor:o,zeroAmount:s}=n[r[i]];return t.amount===0?s:a+o*Math.abs(t.amount)}var Xh=class extends N{constructor(e){super(),this.metric=e}traverseAlg(e){let t=0;for(let n of e.childAlgNodes())t+=this.traverseAlgNode(n);return t}traverseGrouping(e){let t=e.alg;return this.traverseAlg(t)*Math.abs(e.amount)}traverseMove(e){return this.metric(e)}traverseCommutator(e){return 2*(this.traverseAlg(e.A)+this.traverseAlg(e.B))}traverseConjugate(e){return 2*this.traverseAlg(e.A)+this.traverseAlg(e.B)}traversePause(e){return 0}traverseNewline(e){return 0}traverseLineComment(e){return 0}},Zh=class extends N{traverseAlg(e){let t=0;for(let n of e.childAlgNodes())t+=this.traverseAlgNode(n);return t}traverseGrouping(e){let t=e.alg;return this.traverseAlg(t)*Math.abs(e.amount)}traverseMove(e){return 1}traverseCommutator(e){return 2*(this.traverseAlg(e.A)+this.traverseAlg(e.B))}traverseConjugate(e){return 2*this.traverseAlg(e.A)+this.traverseAlg(e.B)}traversePause(e){return 1}traverseNewline(e){return 1}traverseLineComment(e){return 1}};function Qh(e){return`A`<=e&&e<=`Z`}function $h(e){let t=e.family;return Qh(t[0])&&t[t.length-1]===`v`||t===`x`||t===`y`||t===`z`||t===`T`?0:1}function eg(e){return 1}function tg(e){let t=e.family;return Qh(t[0])&&t[t.length-1]===`v`||t===`x`||t===`y`||t===`z`||t===`T`?0:1}function ng(e){return Math.abs(e.amount)*tg(e)}k(Xh,[$h]);var rg=k(Xh,[eg]),ig=k(Xh,[ng]),ag=k(Xh,[tg]),og=k(Zh,[]);function sg(e,t,n){if(e.id===`3x3x3`){if(t in Jh)return k(Xh,[e=>Yh(t,e)])(n)}else switch(t){case`ETM`:return rg(n);case`RBTM`:if(e.pg)return ag(n);break;case`RBQTM`:if(e.pg)return ig(n);break}throw Error(`Unsupported puzzle or metric.`)}function cg(e){switch(Math.abs(e)){case 0:return 0;case 1:return 1e3;case 2:return 1500;default:return 2e3}}var lg=class extends N{constructor(e=cg){super(),this.durationForAmount=e}traverseAlg(e){let t=0;for(let n of e.childAlgNodes())t+=this.traverseAlgNode(n);return t}traverseGrouping(e){return e.amount*this.traverseAlg(e.alg)}traverseMove(e){return this.durationForAmount(e.amount)}traverseCommutator(e){return 2*(this.traverseAlg(e.A)+this.traverseAlg(e.B))}traverseConjugate(e){return 2*this.traverseAlg(e.A)+this.traverseAlg(e.B)}traversePause(e){return this.durationForAmount(1)}traverseNewline(e){return this.durationForAmount(1)}traverseLineComment(e){return this.durationForAmount(0)}},ug=class{constructor(e,t){this.kpuzzle=e,this.moves=new B(t.experimentalExpand())}moves;durationFn=new lg(cg);getAnimLeaf(e){return Array.from(this.moves.childAlgNodes())[e]}indexToMoveStartTimestamp(e){let t=new B(Array.from(this.moves.childAlgNodes()).slice(0,e));return this.durationFn.traverseAlg(t)}timestampToIndex(e){let t=0,n;for(n=0;n<this.numAnimatedLeaves();n++)if(t+=this.durationFn.traverseMove(this.getAnimLeaf(n)),t>=e)return n;return n}patternAtIndex(e){return this.kpuzzle.defaultPattern().applyTransformation(this.transformationAtIndex(e))}transformationAtIndex(e){let t=this.kpuzzle.identityTransformation();for(let n of Array.from(this.moves.childAlgNodes()).slice(0,e))t=t.applyMove(n);return t}algDuration(){return this.durationFn.traverseAlg(this.moves)}numAnimatedLeaves(){return Wh(this.moves)}moveDuration(e){return this.durationFn.traverseMove(this.getAnimLeaf(e))}},dg=class{constructor(e,t,n,r,i=[]){this.moveCount=e,this.duration=t,this.forward=n,this.backward=r,this.children=i}},fg=class extends N{constructor(e){super(),this.kpuzzle=e,this.identity=e.identityTransformation(),this.dummyLeaf=new dg(0,0,this.identity,this.identity,[])}identity;dummyLeaf;durationFn=new lg(cg);cache={};traverseAlg(e){let t=0,n=0,r=this.identity,i=[];for(let a of e.childAlgNodes()){let e=this.traverseAlgNode(a);t+=e.moveCount,n+=e.duration,r=r===this.identity?e.forward:r.applyTransformation(e.forward),i.push(e)}return new dg(t,n,r,r.invert(),i)}traverseGrouping(e){let t=this.traverseAlg(e.alg);return this.mult(t,e.amount,[t])}traverseMove(e){let t=e.toString(),n=this.cache[t];if(n)return n;let r=this.kpuzzle.moveToTransformation(e);return n=new dg(1,this.durationFn.traverseAlgNode(e),r,r.invert()),this.cache[t]=n,n}traverseCommutator(e){let t=this.traverseAlg(e.A),n=this.traverseAlg(e.B),r=t.forward.applyTransformation(n.forward),i=t.backward.applyTransformation(n.backward),a=r.applyTransformation(i),o=new dg(2*(t.moveCount+n.moveCount),2*(t.duration+n.duration),a,a.invert(),[t,n]);return this.mult(o,1,[o,t,n])}traverseConjugate(e){let t=this.traverseAlg(e.A),n=this.traverseAlg(e.B),r=t.forward.applyTransformation(n.forward).applyTransformation(t.backward),i=new dg(2*t.moveCount+n.moveCount,2*t.duration+n.duration,r,r.invert(),[t,n]);return this.mult(i,1,[i,t,n])}traversePause(e){return e.experimentalNISSGrouping?this.dummyLeaf:new dg(1,this.durationFn.traverseAlgNode(e),this.identity,this.identity)}traverseNewline(e){return this.dummyLeaf}traverseLineComment(e){return this.dummyLeaf}mult(e,t,n){let r=Math.abs(t),i=e.forward.selfMultiply(t);return new dg(e.moveCount*r,e.duration*r,i,i.invert(),n)}},pg=class{constructor(e,t){this.apd=e,this.back=t}},mg=class extends M{constructor(e,t,n){super(),this.kpuzzle=e,this.algOrAlgNode=t,this.apd=n,this.i=-1,this.dur=-1,this.goalIndex=-1,this.goalDuration=-1,this.move=void 0,this.back=!1,this.moveDuration=0,this.st=this.kpuzzle.identityTransformation(),this.root=new pg(this.apd,!1)}move;moveDuration;back;st;root;i;dur;goalIndex;goalDuration;moveByIndex(e){return this.i>=0&&this.i===e?this.move!==void 0:this.dosearch(e,1/0)}moveByDuration(e){return this.dur>=0&&this.dur<e&&this.dur+this.moveDuration>=e?this.move!==void 0:this.dosearch(1/0,e)}dosearch(e,t){return this.goalIndex=e,this.goalDuration=t,this.i=0,this.dur=0,this.move=void 0,this.moveDuration=0,this.back=!1,this.st=this.kpuzzle.identityTransformation(),this.algOrAlgNode.is(B)?this.traverseAlg(this.algOrAlgNode,this.root):this.traverseAlgNode(this.algOrAlgNode,this.root)}traverseAlg(e,t){if(!this.firstcheck(t))return!1;let n=t.back?e.experimentalNumChildAlgNodes()-1:0;for(let r of L(e.childAlgNodes(),t.back?-1:1)){if(this.traverseAlgNode(r,new pg(t.apd.children[n],t.back)))return!0;n+=t.back?-1:1}return!1}traverseGrouping(e,t){if(!this.firstcheck(t))return!1;let n=this.domult(t,e.amount);return this.traverseAlg(e.alg,new pg(t.apd.children[0],n))}traverseMove(e,t){return this.firstcheck(t)?(this.move=e,this.moveDuration=t.apd.duration,this.back=t.back,!0):!1}traverseCommutator(e,t){if(!this.firstcheck(t))return!1;let n=this.domult(t,1);return n?this.traverseAlg(e.B,new pg(t.apd.children[2],!n))||this.traverseAlg(e.A,new pg(t.apd.children[1],!n))||this.traverseAlg(e.B,new pg(t.apd.children[2],n))||this.traverseAlg(e.A,new pg(t.apd.children[1],n)):this.traverseAlg(e.A,new pg(t.apd.children[1],n))||this.traverseAlg(e.B,new pg(t.apd.children[2],n))||this.traverseAlg(e.A,new pg(t.apd.children[1],!n))||this.traverseAlg(e.B,new pg(t.apd.children[2],!n))}traverseConjugate(e,t){if(!this.firstcheck(t))return!1;let n=this.domult(t,1);return n?this.traverseAlg(e.A,new pg(t.apd.children[1],!n))||this.traverseAlg(e.B,new pg(t.apd.children[2],n))||this.traverseAlg(e.A,new pg(t.apd.children[1],n)):this.traverseAlg(e.A,new pg(t.apd.children[1],n))||this.traverseAlg(e.B,new pg(t.apd.children[2],n))||this.traverseAlg(e.A,new pg(t.apd.children[1],!n))}traversePause(e,t){return this.firstcheck(t)?(this.move=e,this.moveDuration=t.apd.duration,this.back=t.back,!0):!1}traverseNewline(e,t){return!1}traverseLineComment(e,t){return!1}firstcheck(e){return e.apd.moveCount+this.i<=this.goalIndex&&e.apd.duration+this.dur<this.goalDuration?this.keepgoing(e):!0}domult(e,t){let n=e.back;if(t===0)return n;t<0&&(n=!n,t=-t);let r=e.apd.children[0],i=Math.min(Math.floor((this.goalIndex-this.i)/r.moveCount),Math.ceil((this.goalDuration-this.dur)/r.duration-1));return i>0&&this.keepgoing(new pg(r,n),i),n}keepgoing(e,t=1){return this.i+=t*e.apd.moveCount,this.dur+=t*e.apd.duration,t===1?e.back?this.st=this.st.applyTransformation(e.apd.backward):this.st=this.st.applyTransformation(e.apd.forward):e.back?this.st=this.st.applyTransformation(e.apd.backward.selfMultiply(t)):this.st=this.st.applyTransformation(e.apd.forward.selfMultiply(t)),!1}},hg=16;function gg(e,t){let n=new te,r=new te;for(let i of e.childAlgNodes())r.push(i),r.experimentalNumAlgNodes()>=t&&(n.push(new A(r.toAlg())),r.reset());return n.push(new A(r.toAlg())),n.toAlg()}var _g=k(class extends N{traverseAlg(e){let t=e.experimentalNumChildAlgNodes();return t<hg?e:gg(e,Math.ceil(Math.sqrt(t)))}traverseGrouping(e){return new A(this.traverseAlg(e.alg),e.amount)}traverseMove(e){return e}traverseCommutator(e){return new I(this.traverseAlg(e.A),this.traverseAlg(e.B))}traverseConjugate(e){return new I(this.traverseAlg(e.A),this.traverseAlg(e.B))}traversePause(e){return e}traverseNewline(e){return e}traverseLineComment(e){return e}}),vg=class{constructor(e,t){this.kpuzzle=e;let n=new fg(this.kpuzzle),r=_g(t);this.decoration=n.traverseAlg(r),this.walker=new mg(this.kpuzzle,r,this.decoration)}decoration;walker;getAnimLeaf(e){if(this.walker.moveByIndex(e)){if(!this.walker.move)throw Error("`this.walker.mv` missing");let e=this.walker.move;return this.walker.back?e.invert():e}return null}indexToMoveStartTimestamp(e){if(this.walker.moveByIndex(e)||this.walker.i===e)return this.walker.dur;throw Error(`Out of algorithm: index ${e}`)}indexToMovesInProgress(e){if(this.walker.moveByIndex(e)||this.walker.i===e)return this.walker.dur;throw Error(`Out of algorithm: index ${e}`)}patternAtIndex(e,t){return this.walker.moveByIndex(e),(t??this.kpuzzle.defaultPattern()).applyTransformation(this.walker.st)}transformationAtIndex(e){return this.walker.moveByIndex(e),this.walker.st}numAnimatedLeaves(){return this.decoration.moveCount}timestampToIndex(e){return this.walker.moveByDuration(e),this.walker.i}algDuration(){return this.decoration.duration}moveDuration(e){return this.walker.moveByIndex(e),this.walker.moveDuration}},yg=class extends _{getDefaultValue(){return`auto`}},bg=`http://www.w3.org/2000/svg`,xg=`data-copy-id`,Sg=0;function Cg(){return Sg+=1,`svg${Sg.toString()}`}var wg={dim:{white:`#dddddd`,orange:`#884400`,limegreen:`#008800`,red:`#660000`,"rgb(34, 102, 255)":`#000088`,yellow:`#888800`,"rgb(102, 0, 153)":`rgb(50, 0, 76)`,purple:`#3f003f`},oriented:`#44ddcc`,ignored:`#555555`,invisible:`#00000000`},Tg=class{constructor(e,t,n,r=!1){if(this.kpuzzle=e,this.showUnknownOrientations=r,!t)throw Error(`No SVG definition for puzzle type: ${e.name()}`);this.svgID=Cg(),this.wrapperElement=document.createElement(`div`),this.wrapperElement.classList.add(`svg-wrapper`),this.wrapperElement.innerHTML=t;let i=this.wrapperElement.querySelector(`svg`);if(!i)throw Error(`Could not get SVG element`);if(this.svgElement=i,bg!==i.namespaceURI)throw Error(`Unexpected XML namespace`);i.style.maxWidth=`100%`,i.style.maxHeight=`100%`,this.gradientDefs=document.createElementNS(bg,`defs`),i.insertBefore(this.gradientDefs,i.firstChild);for(let t of e.definition.orbits)for(let e=0;e<t.numPieces;e++)for(let r=0;r<t.numOrientations;r++){let i=this.elementID(t.orbitName,e,r),a=this.elementByID(i),o=a?.style.fill;n?(()=>{let i=n.orbits;if(!i)return;let a=i[t.orbitName];if(!a)return;let s=a.pieces[e];if(!s)return;let c=s.facelets[r];if(!c)return;let l=wg[typeof c==`string`?c:c?.mask];typeof l==`string`?o=l:l&&(o=l[o])})():o=a?.style.fill,this.originalColors[i]=o,this.gradients[i]=this.newGradient(i,o),this.gradientDefs.appendChild(this.gradients[i]),a?.setAttribute(`style`,`fill: url(#grad-${this.svgID}-${i})`)}for(let e of Array.from(i.querySelectorAll(`[${xg}]`))){let t=e.getAttribute(xg);e.setAttribute(`style`,`fill: url(#grad-${this.svgID}-${t})`)}this.showUnknownOrientations&&this.drawPattern(this.kpuzzle.defaultPattern())}wrapperElement;svgElement;gradientDefs;originalColors={};gradients={};svgID;drawPattern(e,t,n){this.draw(e,t,n)}draw(e,t,n){let r=t?.experimentalToTransformation();if(!e)throw Error(`Distinguishable pieces are not handled for SVG yet!`);for(let t of e.kpuzzle.definition.orbits){let i=e.patternData[t.orbitName],a=r?r.transformationData[t.orbitName]:null;for(let e=0;e<t.numPieces;e++)for(let r=0;r<t.numOrientations;r++){let o=this.elementID(t.orbitName,e,r),s=this.elementID(t.orbitName,i.pieces[e],(t.numOrientations-i.orientation[e]+r)%t.numOrientations),c=!1;if(a){let i=this.elementID(t.orbitName,a.permutation[e],(t.numOrientations-a.orientationDelta[e]+r)%t.numOrientations);s===i&&(c=!0),n||=0;let l=100*(1-n*n*(2-n*n));this.gradients[o].children[0].setAttribute(`stop-color`,this.originalColors[s]),this.gradients[o].children[0].setAttribute(`offset`,`${Math.max(l-5,0)}%`),this.gradients[o].children[1].setAttribute(`offset`,`${Math.max(l-5,0)}%`),this.gradients[o].children[2].setAttribute(`offset`,`${l}%`),this.gradients[o].children[3].setAttribute(`offset`,`${l}%`),this.gradients[o].children[3].setAttribute(`stop-color`,this.originalColors[i])}else c=!0;c&&(this.showUnknownOrientations&&i.orientationMod?.[e]===1?(this.gradients[o].children[0].setAttribute(`stop-color`,`#000`),this.gradients[o].children[0].setAttribute(`offset`,`5%`),this.gradients[o].children[1].setAttribute(`offset`,`5%`),this.gradients[o].children[2].setAttribute(`offset`,`20%`),this.gradients[o].children[3].setAttribute(`offset`,`20%`),this.gradients[o].children[3].setAttribute(`stop-color`,this.originalColors[s])):(this.gradients[o].children[0].setAttribute(`stop-color`,this.originalColors[s]),this.gradients[o].children[0].setAttribute(`offset`,`100%`),this.gradients[o].children[1].setAttribute(`offset`,`100%`),this.gradients[o].children[2].setAttribute(`offset`,`100%`),this.gradients[o].children[3].setAttribute(`offset`,`100%`)))}}}newGradient(e,t){let n=document.createElementNS(bg,`radialGradient`);n.setAttribute(`id`,`grad-${this.svgID}-${e}`),n.setAttribute(`r`,`70.7107%`);let r=[{offset:0,color:t},{offset:0,color:`black`},{offset:0,color:`black`},{offset:0,color:t}];for(let e of r){let t=document.createElementNS(bg,`stop`);t.setAttribute(`offset`,`${e.offset}%`),t.setAttribute(`stop-color`,e.color),t.setAttribute(`stop-opacity`,`1`),n.appendChild(t)}return n}elementID(e,t,n){return`${e}-l${t}-o${n}`}elementByID(e){return this.wrapperElement.querySelector(`#${e}`)}},Eg=class{constructor(e,t,n){this.elem=e,this.prefix=t,this.validSuffixes=n}#e=null;clearValue(){this.#e&&this.elem.contentWrapper.classList.remove(this.#e),this.#e=null}setValue(e){if(!this.validSuffixes.includes(e))throw Error(`Invalid suffix: ${e}`);let t=`${this.prefix}${e}`,n=this.#e!==t;return n&&(this.clearValue(),this.elem.contentWrapper.classList.add(t),this.#e=t),n}};function Dg(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Og(e,t,n){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function kg(e,t,n){return re(e,n-t,t)}function Ag(e){return e}var jg=class{constructor(e){this.model=e,e.tempoScale.addFreshListener(e=>{this.tempoScale=e})}catchingUp=!1;pendingFrame=!1;tempoScale=1;scheduler=new f(this.animFrame.bind(this));start(){this.catchingUp||(this.lastTimestamp=performance.now()),this.catchingUp=!0,this.pendingFrame=!0,this.scheduler.requestAnimFrame()}stop(){this.catchingUp=!1,this.scheduler.cancelAnimFrame()}catchUpMs=500;lastTimestamp=0;animFrame(e){this.scheduler.requestAnimFrame();let t=this.tempoScale*(e-this.lastTimestamp)/this.catchUpMs;this.lastTimestamp=e,this.model.catchUpMove.set((async()=>{let e=await this.model.catchUpMove.get();if(e.move===null)return e;let n=e.amount+t;return n>=1?(this.pendingFrame=!0,this.stop(),this.model.timestampRequest.set(`end`),{move:null,amount:0}):(this.pendingFrame=!1,{move:e.move,amount:n})})())}},Mg=class{constructor(e,t){this.delegate=t,this.model=e,this.lastTimestampPromise=this.#e(),this.model.playingInfo.addFreshListener(this.onPlayingProp.bind(this)),this.catchUpHelper=new jg(this.model),this.model.catchUpMove.addFreshListener(this.onCatchUpMoveProp.bind(this))}playing=!1;direction=1;catchUpHelper;model;lastDatestamp=0;lastTimestampPromise;scheduler=new f(this.animFrame.bind(this));async onPlayingProp(e){e.playing!==this.playing&&(e.playing?this.play(e):this.pause())}async onCatchUpMoveProp(e){let t=e.move!==null;t!==this.catchUpHelper.catchingUp&&(t?this.catchUpHelper.start():this.catchUpHelper.stop()),this.scheduler.requestAnimFrame()}async#e(){return(await this.model.detailedTimelineInfo.get()).timestamp}jumpToStart(e){this.model.timestampRequest.set(`start`),this.pause(),e?.flash&&this.delegate.flash()}jumpToEnd(e){this.model.timestampRequest.set(`end`),this.pause(),e?.flash&&this.delegate.flash()}playPause(){this.playing?this.pause():this.play()}play(e){(async()=>{let t=e?.direction??1,n=await this.model.coarseTimelineInfo.get();(e?.autoSkipToOtherEndIfStartingAtBoundary??!0)&&(t===1&&n.atEnd&&(this.model.timestampRequest.set(`start`),this.delegate.flash()),t===-1&&n.atStart&&(this.model.timestampRequest.set(`end`),this.delegate.flash())),this.model.playingInfo.set({playing:!0,direction:t,untilBoundary:e?.untilBoundary??`entire-timeline`,loop:e?.loop??!1}),this.playing=!0,this.lastDatestamp=performance.now(),this.lastTimestampPromise=this.#e(),this.scheduler.requestAnimFrame()})()}pause(){this.playing=!1,this.scheduler.cancelAnimFrame(),this.model.playingInfo.set({playing:!1,untilBoundary:`entire-timeline`})}#t=new T;async animFrame(e){this.playing&&this.scheduler.requestAnimFrame();let t=this.lastDatestamp,[n,r,i,a,o]=await this.#t.queue(Promise.all([this.model.playingInfo.get(),this.lastTimestampPromise,this.model.timeRange.get(),this.model.tempoScale.get(),this.model.currentMoveInfo.get()]));if(!n.playing){this.playing=!1;return}let s=o.earliestEnd;(o.currentMoves.length===0||n.untilBoundary===`entire-timeline`)&&(s=i.end);let c=o.latestStart;(o.currentMoves.length===0||n.untilBoundary===`entire-timeline`)&&(c=i.start);let l=(e-t)*Ag(this.direction)*a;l=Math.max(l,1),l*=n.direction;let u=r+l,d=null;u>=s?n.loop?u=kg(u,i.start,i.end):(u===i.end?d=`end`:u=s,this.playing=!1,this.model.playingInfo.set({playing:!1})):u<=c&&(n.loop?u=kg(u,i.start,i.end):(u===i.start?d=`start`:u=c,this.playing=!1,this.model.playingInfo.set({playing:!1}))),this.lastDatestamp=e,this.lastTimestampPromise=Promise.resolve(u),this.model.timestampRequest.set(d??u)}},Ng=class{constructor(e,t){this.model=e,this.animationController=new Mg(e,t)}animationController;jumpToStart(e){this.animationController.jumpToStart(e)}jumpToEnd(e){this.animationController.jumpToEnd(e)}togglePlay(e){e===void 0&&this.animationController.playPause(),e?this.animationController.play():this.animationController.pause()}async visitTwizzleLink(){let e=document.createElement(`a`);e.href=await this.model.twizzleLink(),e.target=`_blank`,e.click()}},Pg={"bottom-row":!0,none:!0},Fg=class extends _{getDefaultValue(){return`auto`}},Ig=new m;Ig.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
}

.wrapper > * {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.wrapper.back-view-side-by-side {
  grid-template-columns: 1fr 1fr;
}

.wrapper.back-view-top-right {
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 3fr;
}

.wrapper.back-view-top-right > :nth-child(1) {
  grid-row: 1 / 3;
  grid-column: 1 / 3;
}

.wrapper.back-view-top-right > :nth-child(2) {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
}
`);var Lg=new m;Lg.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
}

.svg-wrapper,
twisty-2d-svg,
svg {
  width: 100%;
  height: 100%;
  display: grid;
  min-height: 0;
}

svg {
  animation: fade-in 0.25s ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.hint-facelets-none .hint-facelet {
  display: none;
}
`);var Rg=class extends b{constructor(e,t,n,r,i){super(),this.model=e,this.kpuzzle=t,this.svgSource=n,this.options=r,this.puzzleLoader=i,this.addCSS(Lg),this.resetSVG(),this.#t.addListener(this.model.puzzleID,e=>{i?.id!==e&&this.disconnect()}),this.#t.addListener(this.model.twistySceneModel.hintFacelet,e=>{this.setHintFacelet(e)}),this.#t.addListener(this.model.legacyPosition,this.onPositionChange.bind(this)),this.options?.experimentalStickeringMask&&this.experimentalSetStickeringMask(this.options.experimentalStickeringMask)}svgWrapper;scheduler=new f(this.render.bind(this));#e=null;#t=new S;disconnect(){this.#t.disconnect()}onPositionChange(e){try{if(e.movesInProgress.length>0){let t=e.movesInProgress[0].move,n=t;e.movesInProgress[0].direction===-1&&(n=t.invert());let r=e.pattern.applyMove(n);this.svgWrapper?.draw(e.pattern,r,e.movesInProgress[0].fraction)}else this.svgWrapper?.draw(e.pattern),this.#e=e}catch(e){console.warn(`Bad position (this doesn't necessarily mean something is wrong). Pre-emptively disconnecting:`,this.puzzleLoader?.id,e),this.disconnect()}}scheduleRender(){this.scheduler.requestAnimFrame()}experimentalSetStickeringMask(e){this.resetSVG(e)}resetSVG(e){this.svgWrapper&&this.removeElement(this.svgWrapper.wrapperElement),this.kpuzzle&&(this.svgWrapper=new Tg(this.kpuzzle,this.svgSource,e),this.addElement(this.svgWrapper.wrapperElement),this.#e&&this.onPositionChange(this.#e))}hintFaceletsClassListManager=new Eg(this,`hint-facelets-`,Object.keys(O));setHintFacelet(e){this.hintFaceletsClassListManager.setValue(e===`auto`?`floating`:e)}render(){}};l.define(`twisty-2d-puzzle`,Rg);var zg=class{constructor(e,t,n,r){this.model=e,this.schedulable=t,this.puzzleLoader=n,this.effectiveVisualization=r,this.twisty2DPuzzle(),this.#e.addListener(this.model.twistySceneModel.stickeringMask,async e=>{(await this.twisty2DPuzzle()).experimentalSetStickeringMask(e)})}#e=new S;disconnect(){this.#e.disconnect()}scheduleRender(){}#t=null;async twisty2DPuzzle(){return this.#t??=(async()=>{let e=this.effectiveVisualization===`experimental-2D-LL-face`?this.puzzleLoader.llFaceSVG():this.effectiveVisualization===`experimental-2D-LL`?this.puzzleLoader.llSVG():this.puzzleLoader.svg();return new Rg(this.model,await this.puzzleLoader.kpuzzle(),await e,{},this.puzzleLoader)})()}},Bg=class extends b{constructor(e,t){super(),this.model=e,this.effectiveVisualization=t}#e=new S;disconnect(){this.#e.disconnect()}async connectedCallback(){this.addCSS(Ig),this.model&&this.#e.addListener(this.model.twistyPlayerModel.puzzleLoader,this.onPuzzleLoader.bind(this))}#t;async scene(){return this.#t??=(async()=>new(await(h())).ThreeScene)()}scheduleRender(){this.#n?.scheduleRender()}#n;currentTwisty2DPuzzleWrapper(){return this.#n}async setCurrentTwisty2DPuzzleWrapper(e){let t=this.#n;this.#n=e,t?.disconnect();let n=e.twisty2DPuzzle();this.contentWrapper.textContent=``,this.addElement(await n)}async onPuzzleLoader(e){this.#n?.disconnect();let t=new zg(this.model.twistyPlayerModel,this,e,this.effectiveVisualization);this.setCurrentTwisty2DPuzzleWrapper(t)}};l.define(`twisty-2d-scene-wrapper`,Bg);var Vg=class{#e;reject;promise;constructor(){this.promise=new Promise((e,t)=>{this.#e=e,this.reject=t})}handleNewValue(e){this.#e(e)}},Hg=class extends EventTarget{constructor(e,t,n,r){super(),this.model=e,this.schedulable=t,this.puzzleLoader=n,this.visualizationStrategy=r,this.twisty3DPuzzle(),this.#e.addListener(this.model.puzzleLoader,e=>{this.puzzleLoader.id!==e.id&&this.disconnect()}),this.#e.addListener(this.model.legacyPosition,async e=>{try{(await this.twisty3DPuzzle()).onPositionChange(e),this.scheduleRender()}catch{this.disconnect()}}),this.#e.addListener(this.model.twistySceneModel.hintFacelet,async e=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({hintFacelets:e===`auto`?`floating`:e}),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.foundationDisplay,async e=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({showFoundation:e!==`none`}),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.stickeringMask,async e=>{(await this.twisty3DPuzzle()).setStickeringMask(e),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.faceletScale,async e=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({faceletScale:e}),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.hintFaceletsElevation,async e=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({hintFaceletsElevation:e}),this.scheduleRender()}),this.#e.addMultiListener3([this.model.twistySceneModel.stickeringMask,this.model.twistySceneModel.foundationStickerSprite,this.model.twistySceneModel.hintStickerSprite],async e=>{`experimentalUpdateTexture`in await this.twisty3DPuzzle()&&((await this.twisty3DPuzzle()).experimentalUpdateTexture(e[0].specialBehaviour===`picture`,e[1],e[2]),this.scheduleRender())})}#e=new S;disconnect(){this.#e.disconnect()}scheduleRender(){this.schedulable.scheduleRender(),this.dispatchEvent(new CustomEvent(`render-scheduled`))}#t=null;async twisty3DPuzzle(){return this.#t??=(async()=>{let e=h();if(this.puzzleLoader.id===`3x3x3`&&this.visualizationStrategy===`Cube3D`){let[t,n,r,i,a,o]=await Promise.all([this.model.twistySceneModel.foundationStickerSprite.get(),this.model.twistySceneModel.hintStickerSprite.get(),this.model.twistySceneModel.stickeringMask.get(),this.model.twistySceneModel.initialHintFaceletsAnimation.get(),this.model.twistySceneModel.faceletScale.get(),this.model.twistySceneModel.hintFaceletsElevation.get()]);return(await e).cube3DShim(()=>this.schedulable.scheduleRender(),{foundationSprite:t,hintSprite:n,experimentalStickeringMask:r,initialHintFaceletsAnimation:i,faceletScale:a,hintFaceletsElevation:o})}else{let[t,n,r,i]=await Promise.all([this.model.twistySceneModel.hintFacelet.get(),this.model.twistySceneModel.foundationStickerSprite.get(),this.model.twistySceneModel.hintStickerSprite.get(),this.model.twistySceneModel.faceletScale.get()]),a=(await e).pg3dShim(()=>this.schedulable.scheduleRender(),this.puzzleLoader,t===`auto`?`floating`:t,i,this.puzzleLoader.id===`kilominx`);return a.then(e=>e.experimentalUpdateTexture(!0,n??void 0,r??void 0)),a}})()}async raycastMove(e,t){let n=await this.twisty3DPuzzle();if(!(`experimentalGetControlTargets`in n)){console.info(`not PG3D! skipping raycast`);return}let r=n.experimentalGetControlTargets(),[i,a]=await Promise.all([e,this.model.twistySceneModel.movePressCancelOptions.get()]),o=i.intersectObjects(r);if(o.length>0){let e=n.getClosestMoveToAxis(o[0].point,t);e?this.model.experimentalAddMove(e.move,{cancel:a}):console.info(`Skipping move!`)}}},Ug=class extends b{constructor(e){super(),this.model=e}#e=new Eg(this,`back-view-`,[`auto`,`none`,`side-by-side`,`top-right`]);#t=new S;disconnect(){this.#t.disconnect()}async connectedCallback(){this.addCSS(Ig);let e=new p(this.model,this);this.addVantage(e),this.model&&(this.#t.addMultiListener([this.model.puzzleLoader,this.model.visualizationStrategy],this.onPuzzle.bind(this)),this.#t.addListener(this.model.backView,this.setBackView.bind(this))),this.scheduleRender()}#n=null;setBackView(e){let t=[`side-by-side`,`top-right`].includes(e),n=this.#n!==null;this.#e.setValue(e),t?n||(this.#n=new p(this.model,this,{backView:!0}),this.addVantage(this.#n),this.scheduleRender()):this.#n&&=(this.removeVantage(this.#n),null)}async onPress(e){let t=this.#a;if(!t){console.info(`no wrapper; skipping scene wrapper press!`);return}let n=(async()=>{let[t,{ThreeRaycaster:n,ThreeVector2:r}]=await Promise.all([e.detail.cameraPromise,(async()=>{let{ThreeRaycaster:e,ThreeVector2:t}=await h();return{ThreeRaycaster:e,ThreeVector2:t}})()]),i=new n,a=new r(e.detail.pressInfo.normalizedX,e.detail.pressInfo.normalizedY);return i.setFromCamera(a,t),i})();t.raycastMove(n,{invert:!e.detail.pressInfo.rightClick,depth:e.detail.pressInfo.keys.ctrlOrMetaKey?`rotation`:e.detail.pressInfo.keys.shiftKey?`secondSlice`:`none`})}#r;async scene(){return this.#r??=(async()=>new(await(h())).ThreeScene)()}#i=new Set;addVantage(e){e.addEventListener(`press`,this.onPress.bind(this)),this.#i.add(e),this.contentWrapper.appendChild(e)}removeVantage(e){this.#i.delete(e),e.remove(),e.disconnect(),this.#a?.disconnect()}experimentalVantages(){return this.#i.values()}scheduleRender(){for(let e of this.#i)e.scheduleRender()}#a=null;async setCurrentTwisty3DPuzzleWrapper(e,t){let n=this.#a;try{this.#a=t,n?.disconnect(),e.add(await t.twisty3DPuzzle())}finally{n&&e.remove(await n.twisty3DPuzzle())}this.#o.handleNewValue(t)}#o=new Vg;async experimentalTwisty3DPuzzleWrapper(){return this.#a||this.#o.promise}#s=new T;async onPuzzle(e){if(e[1]===`2D`)return;this.#a?.disconnect();let[t,n]=await this.#s.queue(Promise.all([this.scene(),new Hg(this.model,this,e[0],e[1])]));this.setCurrentTwisty3DPuzzleWrapper(t,n)}};l.define(`twisty-3d-scene-wrapper`,Ug);var Wg=typeof document>`u`?null:document,Gg=Wg?.fullscreenEnabled||!!Wg?.webkitFullscreenEnabled;function Kg(){return document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen()}function qg(){return document.fullscreenElement?document.fullscreenElement:document.webkitFullscreenElement??null}function Jg(e){return e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen()}var Yg=[`skip-to-start`,`skip-to-end`,`step-forward`,`step-backward`,`pause`,`play`,`enter-fullscreen`,`exit-fullscreen`,`twizzle-tw`],Xg=class extends x{derive(e){return{fullscreen:{enabled:Gg,icon:document.fullscreenElement===null?`enter-fullscreen`:`exit-fullscreen`,title:`Enter fullscreen`},"jump-to-start":{enabled:!e.coarseTimelineInfo.atStart,icon:`skip-to-start`,title:`Restart`},"play-step-backwards":{enabled:!e.coarseTimelineInfo.atStart,icon:`step-backward`,title:`Step backward`},"play-pause":{enabled:!(e.coarseTimelineInfo.atStart&&e.coarseTimelineInfo.atEnd),icon:e.coarseTimelineInfo.playing?`pause`:`play`,title:e.coarseTimelineInfo.playing?`Pause`:`Play`},"play-step":{enabled:!e.coarseTimelineInfo.atEnd,icon:`step-forward`,title:`Step forward`},"jump-to-end":{enabled:!e.coarseTimelineInfo.atEnd,icon:`skip-to-end`,title:`Skip to End`},"twizzle-link":{enabled:!0,icon:`twizzle-tw`,title:`View at Twizzle`,hidden:e.viewerLink===`none`}}}},Zg=new m;Zg.replaceSync(`
:host {
  width: 384px;
  height: 24px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.wrapper {
  grid-auto-flow: column;
}

.viewer-link-none .twizzle-link-button {
  display: none;
}

.wrapper twisty-button,
.wrapper twisty-control-button {
  width: inherit;
  height: inherit;
}
`);var Qg=new m;Qg.replaceSync(`
:host:not([hidden]) {
  display: grid;
}

:host {
  width: 48px;
  height: 24px;
}

.wrapper {
  width: 100%;
  height: 100%;
}

button {
  width: 100%;
  height: 100%;
  border: none;
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  background-color: rgba(196, 196, 196, 0.75);
}

button:enabled {
  background-color: rgba(196, 196, 196, 0.75)
}

.dark-mode button:enabled {
  background-color: #88888888;
}

button:disabled {
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0.25;
  pointer-events: none;
}

.dark-mode button:disabled {
  background-color: #ffffff44;
}

button:enabled:hover {
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

/* TODO: fullscreen icons have too much padding?? */
.svg-skip-to-start button,
button.svg-skip-to-start {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjQzIDEwMzdxMTktMTkgMzItMTN0MTMgMzJ2MTQ3MnEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djcxMHEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djY3OHEwIDI2LTE5IDQ1dC00NSAxOUg5NjBxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWgxMjhxMjYgMCA0NSAxOXQxOSA0NXY2NzhxNC0xMSAxMy0xOWw3MTAtNzEwcTE5LTE5IDMyLTEzdDEzIDMydjcxMHE0LTExIDEzLTE5eiIvPjwvc3ZnPg==");
}

.svg-skip-to-end button,
button.svg-skip-to-end {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik05NDEgMjU0N3EtMTkgMTktMzIgMTN0LTEzLTMyVjEwNTZxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTggOCAxMyAxOXYtNzEwcTAtMjYgMTMtMzJ0MzIgMTNsNzEwIDcxMHE4IDggMTMgMTl2LTY3OHEwLTI2IDE5LTQ1dDQ1LTE5aDEyOHEyNiAwIDQ1IDE5dDE5IDQ1djE0MDhxMCAyNi0xOSA0NXQtNDUgMTloLTEyOHEtMjYgMC00NS0xOXQtMTktNDV2LTY3OHEtNSAxMC0xMyAxOWwtNzEwIDcxMHEtMTkgMTktMzIgMTN0LTEzLTMydi03MTBxLTUgMTAtMTMgMTl6Ii8+PC9zdmc+");
}

.svg-step-forward button,
button.svg-step-forward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDE1NjhxMCAyNi0xOSA0NWwtNTEyIDUxMnEtMTkgMTktNDUgMTl0LTQ1LTE5cS0xOS0xOS0xOS00NXYtMjU2aC0yMjRxLTk4IDAtMTc1LjUgNnQtMTU0IDIxLjVxLTc2LjUgMTUuNS0xMzMgNDIuNXQtMTA1LjUgNjkuNXEtNDkgNDIuNS04MCAxMDF0LTQ4LjUgMTM4LjVxLTE3LjUgODAtMTcuNSAxODEgMCA1NSA1IDEyMyAwIDYgMi41IDIzLjV0Mi41IDI2LjVxMCAxNS04LjUgMjV0LTIzLjUgMTBxLTE2IDAtMjgtMTctNy05LTEzLTIydC0xMy41LTMwcS03LjUtMTctMTAuNS0yNC0xMjctMjg1LTEyNy00NTEgMC0xOTkgNTMtMzMzIDE2Mi00MDMgODc1LTQwM2gyMjR2LTI1NnEwLTI2IDE5LTQ1dDQ1LTE5cTI2IDAgNDUgMTlsNTEyIDUxMnExOSAxOSAxOSA0NXoiLz48L3N2Zz4=");
}

.svg-step-backward button,
button.svg-step-backward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDIwNDhxMCAxNjYtMTI3IDQ1MS0zIDctMTAuNSAyNHQtMTMuNSAzMHEtNiAxMy0xMyAyMi0xMiAxNy0yOCAxNy0xNSAwLTIzLjUtMTB0LTguNS0yNXEwLTkgMi41LTI2LjV0Mi41LTIzLjVxNS02OCA1LTEyMyAwLTEwMS0xNy41LTE4MXQtNDguNS0xMzguNXEtMzEtNTguNS04MC0xMDF0LTEwNS41LTY5LjVxLTU2LjUtMjctMTMzLTQyLjV0LTE1NC0yMS41cS03Ny41LTYtMTc1LjUtNmgtMjI0djI1NnEwIDI2LTE5IDQ1dC00NSAxOXEtMjYgMC00NS0xOWwtNTEyLTUxMnEtMTktMTktMTktNDV0MTktNDVsNTEyLTUxMnExOS0xOSA0NS0xOXQ0NSAxOXExOSAxOSAxOSA0NXYyNTZoMjI0cTcxMyAwIDg3NSA0MDMgNTMgMTM0IDUzIDMzM3oiLz48L3N2Zz4=");
}

.svg-pause button,
button.svg-pause {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNTYwIDEwODh2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NVYxMDg4cTAtMjYgMTktNDV0NDUtMTloNTEycTI2IDAgNDUgMTl0MTkgNDV6bS04OTYgMHYxNDA4cTAgMjYtMTkgNDV0LTQ1IDE5aC01MTJxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXoiLz48L3N2Zz4=");
}

.svg-play button,
button.svg-play {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNDcyLjUgMTgyM2wtMTMyOCA3MzhxLTIzIDEzLTM5LjUgM3QtMTYuNS0zNlYxMDU2cTAtMjYgMTYuNS0zNnQzOS41IDNsMTMyOCA3MzhxMjMgMTMgMjMgMzF0LTIzIDMxeiIvPjwvc3ZnPg==");
}

.svg-enter-fullscreen button,
button.svg-enter-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkgMTZIN3Y1aDV2LTJIOXYtM3ptLTItNGgyVjloM1Y3SDd2NXptMTIgN2gtM3YyaDV2LTVoLTJ2M3pNMTYgN3YyaDN2M2gyVjdoLTV6Ii8+PC9zdmc+");
}

.svg-exit-fullscreen button,
button.svg-exit-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTcgMThoM3YzaDJ2LTVIN3Yyem0zLThIN3YyaDVWN2gtMnYzem02IDExaDJ2LTNoM3YtMmgtNXY1em0yLTExVjdoLTJ2NWg1di0yaC0zeiIvPjwvc3ZnPg==");
}

.svg-twizzle-tw button,
button.svg-twizzle-tw {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODY0IiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzk3LjU4MSAxNTEuMTh2NTcuMDg0aC04OS43MDN2MjQwLjM1MmgtNjYuOTU1VjIwOC4yNjRIMTUxLjIydi01Ny4wODNoMjQ2LjM2MXptNTQuMzEgNzEuNjc3bDcuNTEyIDMzLjY5MmMyLjcxOCAxMi4xNiA1LjU4IDI0LjY4IDguNTg0IDM3LjU1NWEyMTgwLjc3NSAyMTgwLjc3NSAwIDAwOS40NDIgMzguODQzIDEyNjYuMyAxMjY2LjMgMCAwMDEwLjA4NiAzNy41NTVjMy43Mi0xMi41OSA3LjM2OC0yNS40NjYgMTAuOTQ1LTM4LjYyOCAzLjU3Ni0xMy4xNjIgNy4wMS0yNi4xMSAxMC4zLTM4Ljg0M2w1Ljc2OS0yMi40NTZjMS4yNDgtNC44ODcgMi40NzItOS43MDUgMy42NzQtMTQuNDU1IDMuMDA0LTExLjg3NSA1LjY1MS0yMi45NjIgNy45NC0zMy4yNjNoNDYuMzU0bDIuMzg0IDEwLjU2M2EyMDAwLjc3IDIwMDAuNzcgMCAwMDMuOTM1IDE2LjgyOGw2LjcxMSAyNy43MWMxLjIxMyA0Ljk1NiAyLjQ1IDkuOTggMy43MDkgMTUuMDczYTMxMTkuNzc3IDMxMTkuNzc3IDAgMDA5Ljg3MSAzOC44NDMgMTI0OS4yMjcgMTI0OS4yMjcgMCAwMDEwLjczIDM4LjYyOCAxOTA3LjYwNSAxOTA3LjYwNSAwIDAwMTAuMzAxLTM3LjU1NSAxMzk3Ljk0IDEzOTcuOTQgMCAwMDkuNjU3LTM4Ljg0M2w0LjQtMTkuMDQ2Yy43MTUtMy4xMyAxLjQyMS02LjIzNiAyLjExOC05LjMyMWw5LjU3Ny00Mi44OGg2Ni41MjZhMjk4OC43MTggMjk4OC43MTggMCAwMS0xOS41MjkgNjYuMzExbC01LjcyOCAxOC40ODJhMzIzNy40NiAzMjM3LjQ2IDAgMDEtMTQuMDE1IDQzLjc1MmMtNi40MzggMTkuNi0xMi43MzMgMzcuNjk4LTE4Ljg4NSA1NC4yOTRsLTMuMzA2IDguODI1Yy00Ljg4NCAxMi44OTgtOS40MzMgMjQuMjYzLTEzLjY0NyAzNC4wOTVoLTQ5Ljc4N2E4NDE3LjI4OSA4NDE3LjI4OSAwIDAxLTIxLjAzMS02NC44MDkgMTI4OC42ODYgMTI4OC42ODYgMCAwMS0xOC44ODUtNjQuODEgMTk3Mi40NDQgMTk3Mi40NDQgMCAwMS0xOC4yNCA2NC44MSAyNTc5LjQxMiAyNTc5LjQxMiAwIDAxLTIwLjM4OCA2NC44MWgtNDkuNzg3Yy00LjY4Mi0xMC45MjYtOS43Mi0yMy43NDMtMTUuMTEtMzguNDUxbC0xLjYyOS00LjQ3Yy01LjI1OC0xNC41MjEtMTAuNjgtMzAuMTkyLTE2LjI2Ni00Ny4wMTRsLTIuNDA0LTcuMjhjLTYuNDM4LTE5LjYtMTMuMDItNDAuMzQ0LTE5Ljc0My02Mi4yMzRhMjk4OC43MDcgMjk4OC43MDcgMCAwMS0xOS41MjktNjYuMzExaDY3LjM4NXoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==");
}
`);var $g={fullscreen:!0,"jump-to-start":!0,"play-step-backwards":!0,"play-pause":!0,"play-step":!0,"jump-to-end":!0,"twizzle-link":!0},e_=class extends b{constructor(e,t,n){super(),this.model=e,this.controller=t,this.defaultFullscreenElement=n}buttons=null;connectedCallback(){this.addCSS(Zg);let e={};for(let t in $g){let n=new t_;e[t]=n,n.htmlButton.addEventListener(`click`,()=>this.#e(t)),this.addElement(n)}this.buttons=e,this.model?.buttonAppearance.addFreshListener(this.update.bind(this)),this.model?.twistySceneModel.colorScheme.addFreshListener(this.updateColorScheme.bind(this))}#e(e){switch(e){case`fullscreen`:this.onFullscreenButton();break;case`jump-to-start`:this.controller?.jumpToStart({flash:!0});break;case`play-step-backwards`:this.controller?.animationController.play({direction:-1,untilBoundary:`move`});break;case`play-pause`:this.controller?.togglePlay();break;case`play-step`:this.controller?.animationController.play({direction:1,untilBoundary:`move`});break;case`jump-to-end`:this.controller?.jumpToEnd({flash:!0});break;case`twizzle-link`:this.controller?.visitTwizzleLink();break;default:throw Error(`Missing command`)}}async onFullscreenButton(){if(!this.defaultFullscreenElement)throw Error(`Attempted to go fullscreen without an element.`);if(qg()===this.defaultFullscreenElement)Kg();else{this.buttons?.fullscreen.setIcon(`exit-fullscreen`),Jg(await this.model?.twistySceneModel.fullscreenElement.get()??this.defaultFullscreenElement);let e=()=>{qg()!==this.defaultFullscreenElement&&(this.buttons?.fullscreen.setIcon(`enter-fullscreen`),globalThis.removeEventListener(`fullscreenchange`,e))};globalThis.addEventListener(`fullscreenchange`,e)}}async update(e){for(let t in $g){let n=this.buttons[t],r=e[t];n.htmlButton.disabled=!r.enabled,n.htmlButton.title=r.title,n.setIcon(r.icon),n.hidden=!!r.hidden}}updateColorScheme(e){for(let t of Object.values(this.buttons??{}))t.updateColorScheme(e)}};l.define(`twisty-buttons`,e_);var t_=class extends b{htmlButton=document.createElement(`button`);updateColorScheme(e){this.contentWrapper.classList.toggle(`dark-mode`,e===`dark`)}connectedCallback(){this.addCSS(Qg),this.addElement(this.htmlButton)}#e=new Eg(this,`svg-`,Yg);setIcon(e){this.#e.setValue(e)}};l.define(`twisty-button`,t_);var n_=new m;n_.replaceSync(`
:host {
  width: 384px;
  height: 16px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background: rgba(196, 196, 196, 0.75);
}

input:not(:disabled) {
  cursor: ew-resize;
}

.wrapper.dark-mode {
  background: #666666;
}
`);var r_=!1,i_=!1;Wg?.addEventListener(`mousedown`,e=>{e.which&&(i_=!0)},!0),Wg?.addEventListener(`mouseup`,e=>{e.which&&(i_=!1)},!0);var a_=0,o_=0;Wg?.addEventListener(`mousedown`,()=>{o_++},!1),Wg?.addEventListener(`mousemove`,s_,!1),Wg?.addEventListener(`mouseenter`,s_,!1);function s_(e){a_=e.pageY}var c_=0,l_=0,u_=!1,d_=0,f_=class extends b{constructor(e,t){super(),this.model=e,this.controller=t}async onDetailedTimelineInfo(e){let t=await this.inputElem();t.min=e.timeRange.start.toString(),t.max=e.timeRange.end.toString(),t.disabled=t.min===t.max,t.value=e.timestamp.toString()}async connectedCallback(){this.addCSS(n_),this.addElement(await this.inputElem()),this.model?.twistySceneModel.colorScheme.addFreshListener(this.updateColorScheme.bind(this))}updateColorScheme(e){this.contentWrapper.classList.toggle(`dark-mode`,e===`dark`)}#e=null;async inputElem(){return this.#e??=(async()=>{let e=document.createElement(`input`);return e.type=`range`,e.disabled=!0,this.model?.detailedTimelineInfo.addFreshListener(this.onDetailedTimelineInfo.bind(this)),e.addEventListener(`input`,this.onInput.bind(this)),e.addEventListener(`keydown`,this.onKeypress.bind(this)),e})()}async onInput(e){if(u_)return;let t=await this.inputElem();await this.slowDown(e,t);let n=parseInt(t.value,10);this.model?.playingInfo.set({playing:!1}),this.model?.timestampRequest.set(n)}onKeypress(e){switch(e.key){case`ArrowLeft`:case`ArrowRight`:this.controller?.animationController.play({direction:e.key===`ArrowLeft`?-1:1,untilBoundary:`move`}),e.preventDefault();break;case` `:this.controller?.togglePlay(),e.preventDefault();break}}async slowDown(e,t){if(r_&&i_){let n=t.getBoundingClientRect(),r=n.top+n.height/2;console.log(r,e,a_,i_);let i=Math.abs(r-a_),a=1;i>64&&(a=Math.max(2**(-(i-64)/64),1/32));let o=parseInt(t.value,10);if(console.log(`cl`,d_,o_,o),d_===o_){let e=(o-l_)*a;console.log(`delta`,e,i),u_=!0;let n=o;n=c_+e*a+(o-c_)*Math.min(1,(1/2)**(i*i/64)),t.value=n.toString(),console.log(a),u_=!1,this.contentWrapper.style.opacity=a.toString()}else d_=o_;l_=o}}};l.define(`twisty-scrubber`,f_);var p_=null;async function m_(e,t){let[{ThreePerspectiveCamera:n,ThreeScene:r},i,a,o,s,c,l]=await Promise.all([(async()=>{let{ThreePerspectiveCamera:e,ThreeScene:t}=await h();return{ThreePerspectiveCamera:e,ThreeScene:t}})(),await e.puzzleLoader.get(),await e.visualizationStrategy.get(),await e.twistySceneModel.stickeringRequest.get(),await e.twistySceneModel.stickeringMaskRequest.get(),await e.legacyPosition.get(),await e.twistySceneModel.orbitCoordinates.get()]),u=t?.width??2048,f=t?.height??2048,p=u/f,m=p_??=await(async()=>new n(20,p,.1,20))(),g=new r,_=new Hg(e,{scheduleRender:()=>{}},i,a);g.add(await _.twisty3DPuzzle()),await D(m,l);let v=(await d(u,f,g,m)).toDataURL(),y=await h_(e);return{dataURL:v,download:async e=>{g_(v,e??y)}}}async function h_(e){let[t,n]=await Promise.all([e.puzzleID.get(),e.alg.get()]);return`[${t}]${n.alg.experimentalNumChildAlgNodes()===0?``:` ${n.alg.toString()}`}`}function g_(e,t,n=`png`){let r=document.createElement(`a`);r.href=e,r.download=`${t}.${n}`,r.click()}var __=new m;__.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;

  -webkit-user-select: none;
  user-select: none;
}

.wrapper {
  display: grid;
  overflow: hidden;
  contain: size;
  grid-template-rows: 7fr minmax(1.5em, 0.5fr) minmax(2em, 1fr);
}

.wrapper > * {
  width: inherit;
  height: inherit;
  overflow: hidden;
}

.wrapper.controls-none {
  grid-template-rows: 7fr;
}

.wrapper.controls-none twisty-scrubber,
.wrapper.controls-none twisty-control-button-panel ,
.wrapper.controls-none twisty-scrubber,
.wrapper.controls-none twisty-buttons {
  display: none;
}

twisty-scrubber {
  background: rgba(196, 196, 196, 0.5);
}

.wrapper.checkered,
.wrapper.checkered-transparent {
  background-color: #EAEAEA;
  background-image: linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD),
    linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD);
  background-size: 32px 32px;
  background-position: 0 0, 16px 16px;
}

.wrapper.checkered-transparent {
  background-color: #F4F4F4;
  background-image: linear-gradient(45deg, #DDDDDD88 25%, transparent 25%, transparent 75%, #DDDDDD88 75%, #DDDDDD88),
    linear-gradient(45deg, #DDDDDD88 25%, transparent 25%, transparent 75%, #DDDDDD88 75%, #DDDDDD88);
}

.wrapper.dark-mode {
  background-color: #444;
  background-image: linear-gradient(45deg, #DDDDDD0b 25%, transparent 25%, transparent 75%, #DDDDDD0b 75%, #DDDDDD0b),
    linear-gradient(45deg, #DDDDDD0b 25%, transparent 25%, transparent 75%, #DDDDDD0b 75%, #DDDDDD0b);
}

.visualization-wrapper > * {
  width: 100%;
  height: 100%;
}

.error-elem {
  width: 100%;
  height: 100%;
  display: none;
  place-content: center;
  font-family: sans-serif;
  box-shadow: inset 0 0 2em rgb(255, 0, 0);
  color: red;
  text-shadow: 0 0 0.2em white;
  background: rgba(255, 255, 255, 0.25);
}

.wrapper.error .visualization-wrapper {
  display: none;
}

.wrapper.error .error-elem {
  display: grid;
}
`);var v_=class extends _{getDefaultValue(){return null}},y_=class extends v{getDefaultValue(){return null}derive(e){return typeof e==`string`?new URL(e,location.href):e}},b_=class e{warnings;errors;constructor(e){this.warnings=Object.freeze(e?.warnings??[]),this.errors=Object.freeze(e?.errors??[]),Object.freeze(this)}add(t){return new e({warnings:this.warnings.concat(t?.warnings??[]),errors:this.errors.concat(t?.errors??[])})}log(){this.errors.length>0?console.error(`\u{1F6A8} ${this.errors[0]}`):this.warnings.length>0?console.warn(`\u26A0\uFE0F ${this.warnings[0]}`):console.info(`😎 No issues!`)}};function x_(e){try{let t=B.fromString(e),n=[];return t.toString()!==e&&n.push(`Alg is non-canonical!`),{alg:t,issues:new b_({warnings:n})}}catch(e){return{alg:new B,issues:new b_({errors:[`Malformed alg: ${e.toString()}`]})}}}function S_(e,t){return e.alg.isIdentical(t.alg)&&Dg(e.issues.warnings,t.issues.warnings)&&Dg(e.issues.errors,t.issues.errors)}var C_=class extends v{getDefaultValue(){return{alg:new B,issues:new b_}}canReuseValue(e,t){return S_(e,t)}async derive(e){return typeof e==`string`?x_(e):{alg:e,issues:new b_}}},w_=class extends x{derive(e){return e.kpuzzle.algToTransformation(e.setupAlg.alg)}},T_=class extends x{derive(e){if(e.setupTransformation)return e.setupTransformation;switch(e.setupAnchor){case`start`:return e.setupAlgTransformation;case`end`:{let t=e.indexer.transformationAtIndex(e.indexer.numAnimatedLeaves()).invert();return e.setupAlgTransformation.applyTransformation(t)}default:throw Error(`Unimplemented!`)}}},E_=class extends _{getDefaultValue(){return null}},D_=class extends _{getDefaultValue(){return{move:null,amount:0}}canReuseValue(e,t){return e.move===t.move&&e.amount===t.amount}},O_=class extends x{derive(e){return{patternIndex:e.currentMoveInfo.patternIndex,movesFinishing:e.currentMoveInfo.movesFinishing.map(e=>e.move),movesFinished:e.currentMoveInfo.movesFinished.map(e=>e.move)}}canReuseValue(e,t){return e.patternIndex===t.patternIndex&&Og(e.movesFinishing,t.movesFinishing,(e,t)=>e.isIdentical(t))&&Og(e.movesFinished,t.movesFinished,(e,t)=>e.isIdentical(t))}},k_=class extends x{derive(e){function t(t){return e.detailedTimelineInfo.atEnd&&e.catchUpMove.move!==null&&t.currentMoves.push({move:e.catchUpMove.move,direction:-1,fraction:1-e.catchUpMove.amount,startTimestamp:-1,endTimestamp:-1}),t}if(e.indexer.currentMoveInfo)return t(e.indexer.currentMoveInfo(e.detailedTimelineInfo.timestamp));{let n=e.indexer.timestampToIndex(e.detailedTimelineInfo.timestamp),r={patternIndex:n,currentMoves:[],movesFinishing:[],movesFinished:[],movesStarting:[],latestStart:-1/0,earliestEnd:1/0};if(e.indexer.numAnimatedLeaves()>0){let i=e.indexer.getAnimLeaf(n)?.as(z);if(!i)return t(r);let a=e.indexer.indexToMoveStartTimestamp(n),o=e.indexer.moveDuration(n),s=o?(e.detailedTimelineInfo.timestamp-a)/o:0,c=a+o,l={move:i,direction:1,fraction:s,startTimestamp:a,endTimestamp:c};s===0?r.movesStarting.push(l):s===1?r.movesFinishing.push(l):(r.currentMoves.push(l),r.latestStart=Math.max(r.latestStart,a),r.earliestEnd=Math.min(r.earliestEnd,c))}return t(r)}}},A_=class extends x{derive(e){let t=e.indexer.transformationAtIndex(e.currentLeavesSimplified.patternIndex);t=e.anchoredStart.applyTransformation(t);for(let n of e.currentLeavesSimplified.movesFinishing)t=t.applyMove(n);for(let n of e.currentLeavesSimplified.movesFinished)t=t.applyMove(n);return t.toKPattern()}},j_={u:`y`,l:`x`,f:`z`,r:`x`,b:`z`,d:`y`,m:`x`,e:`y`,s:`z`,x:`x`,y:`y`,z:`z`};function M_(e,t){return j_[e.family[0].toLowerCase()]===j_[t.family[0].toLowerCase()]}var N_=k(class extends N{traverseAlg(e){let t=[];for(let n of e.childAlgNodes())t.push(this.traverseAlgNode(n));return Array.prototype.concat(...t)}traverseGroupingOnce(e){if(e.experimentalIsEmpty())return[];let t=[];for(let n of e.childAlgNodes()){if(!(n.is(z)||n.is(R)||n.is(j)))return this.traverseAlg(e);let r=n.as(z);r&&t.push(r)}let n=cg(t[0].amount);for(let r=0;r<t.length-1;r++){for(let n=1;n<t.length;n++)if(!M_(t[r],t[n]))return this.traverseAlg(e);n=Math.max(n,cg(t[r].amount))}let r=t.map(e=>({animLeafAlgNode:e,msUntilNext:0,duration:n}));return r[r.length-1].msUntilNext=n,r}traverseGrouping(e){let t=[],n=e.amount>0?e.alg:e.alg.invert();for(let r=0;r<Math.abs(e.amount);r++)t.push(this.traverseGroupingOnce(n));return Array.prototype.concat(...t)}traverseMove(e){let t=cg(e.amount);return[{animLeafAlgNode:e,msUntilNext:t,duration:t}]}traverseCommutator(e){let t=[],n=[e.A,e.B,e.A.invert(),e.B.invert()];for(let e of n)t.push(this.traverseGroupingOnce(e));return Array.prototype.concat(...t)}traverseConjugate(e){let t=[],n=[e.A,e.B,e.A.invert()];for(let e of n)t.push(this.traverseGroupingOnce(e));return Array.prototype.concat(...t)}traversePause(e){if(e.experimentalNISSGrouping)return[];let t=cg(1);return[{animLeafAlgNode:e,msUntilNext:t,duration:t}]}traverseNewline(e){return[]}traverseLineComment(e){return[]}});function P_(e){let t=0;return N_(e).map(e=>{let n={animLeaf:e.animLeafAlgNode,start:t,end:t+e.duration};return t+=e.msUntilNext,n})}var F_=class{constructor(e,t,n){this.kpuzzle=e,this.animLeaves=n?.animationTimelineLeaves??P_(t)}animLeaves;getAnimLeaf(e){return this.animLeaves[Math.min(e,this.animLeaves.length-1)]?.animLeaf??null}getAnimationTimelineLeaf(e){return this.animLeaves[Math.min(e,this.animLeaves.length-1)]}indexToMoveStartTimestamp(e){let t=0;return this.animLeaves.length>0&&(t=this.animLeaves[Math.min(e,this.animLeaves.length-1)].start),t}timestampToIndex(e){let t=0;for(t=0;t<this.animLeaves.length;t++)if(this.animLeaves[t].start>=e)return Math.max(0,t-1);return Math.max(0,t-1)}timestampToPosition(e,t){let n=this.currentMoveInfo(e),r=t??this.kpuzzle.identityTransformation().toKPattern();for(let e of this.animLeaves.slice(0,n.patternIndex)){let t=e.animLeaf.as(z);t!==null&&(r=r.applyMove(t))}return{pattern:r,movesInProgress:n.currentMoves}}currentMoveInfo(e){let t=1/0;for(let n of this.animLeaves)if(n.start<=e&&n.end>=e)t=Math.min(t,n.start);else if(n.start>e)break;let n=[],r=[],i=[],a=[],o=-1/0,s=1/0,c=0;for(let l of this.animLeaves)if(l.end<=t){if(!isFinite(t)&&l.start>e)break;c++}else if(l.start>e)break;else{let t=l.animLeaf.as(z);if(t!==null){let c=(e-l.start)/(l.end-l.start),u=!1;c>1&&(c=1,u=!0);let d={move:t,direction:1,fraction:c,startTimestamp:l.start,endTimestamp:l.end};switch(c){case 0:r.push(d);break;case 1:u?a.push(d):i.push(d);break;default:n.push(d),o=Math.max(o,l.start),s=Math.min(s,l.end)}}}return{patternIndex:c,currentMoves:n,latestStart:o,earliestEnd:s,movesStarting:r,movesFinishing:i,movesFinished:a}}patternAtIndex(e,t){let n=t??this.kpuzzle.defaultPattern();for(let t=0;t<this.animLeaves.length&&t<e;t++){let e=this.animLeaves[t].animLeaf.as(z);e!==null&&(n=n.applyMove(e))}return n}transformationAtIndex(e){let t=this.kpuzzle.identityTransformation();for(let n of this.animLeaves.slice(0,e)){let e=n.animLeaf.as(z);e!==null&&(t=t.applyMove(e))}return t}algDuration(){let e=0;for(let t of this.animLeaves)e=Math.max(e,t.end);return e}numAnimatedLeaves(){return this.animLeaves.length}moveDuration(e){let t=this.getAnimationTimelineLeaf(e);return t.end-t.start}},I_=1024,L_=class extends x{derive(e){switch(e.indexerConstructorRequest){case`auto`:return e.animationTimelineLeaves!==null||og(e.alg.alg)<=I_&&e.puzzle===`3x3x3`&&e.visualizationStrategy===`Cube3D`?F_:vg;case`tree`:return vg;case`simple`:return ug;case`simultaneous`:return F_;default:throw Error(`Invalid indexer request!`)}}},R_=class extends _{getDefaultValue(){return`auto`}},z_=class extends x{derive(e){return new e.indexerConstructor(e.kpuzzle,e.algWithIssues.alg,{animationTimelineLeaves:e.animationTimelineLeaves})}},B_=class extends x{derive(e){return{pattern:e.currentPattern,movesInProgress:e.currentMoveInfo.currentMoves}}},V_=!0,H_=class extends x{async derive(e){try{return V_&&e.kpuzzle.algToTransformation(e.algWithIssues.alg),e.algWithIssues}catch(e){return{alg:new B,issues:new b_({errors:[`Invalid alg for puzzle: ${e.toString()}`]})}}}},U_=class extends _{getDefaultValue(){return`start`}},W_=class extends _{getDefaultValue(){return null}},G_=class extends x{async derive(e){return e.puzzleLoader.kpuzzle()}},K_=class extends _{getDefaultValue(){return C}},q_=class extends x{async derive(e){return e.puzzleLoader.id}},J_=class extends _{getDefaultValue(){return C}},Y_=class extends x{derive(e){if(e.puzzleIDRequest&&e.puzzleIDRequest!==C){let t=w[e.puzzleIDRequest];return t||this.userVisibleErrorTracker.set({errors:[`Invalid puzzle ID: ${e.puzzleIDRequest}`]}),t}return e.puzzleDescriptionRequest&&e.puzzleDescriptionRequest!==C?E(e.puzzleDescriptionRequest):c}},X_=class extends x{derive(e){return{playing:e.playingInfo.playing,atStart:e.detailedTimelineInfo.atStart,atEnd:e.detailedTimelineInfo.atEnd}}canReuseValue(e,t){return e.playing===t.playing&&e.atStart===t.atStart&&e.atEnd===t.atEnd}},Z_=class extends x{derive(e){let t=this.#e(e),n=!1,r=!1;return t>=e.timeRange.end&&(r=!0,t=Math.min(e.timeRange.end,t)),t<=e.timeRange.start&&(n=!0,t=Math.max(e.timeRange.start,t)),{timestamp:t,timeRange:e.timeRange,atStart:n,atEnd:r}}#e(e){switch(e.timestampRequest){case`auto`:return e.setupAnchor===`start`&&e.setupAlg.alg.experimentalIsEmpty()?e.timeRange.end:e.timeRange.start;case`start`:return e.timeRange.start;case`end`:return e.timeRange.end;case`anchor`:return e.setupAnchor===`start`?e.timeRange.start:e.timeRange.end;case`opposite-anchor`:return e.setupAnchor===`start`?e.timeRange.end:e.timeRange.start;default:return e.timestampRequest}}canReuseValue(e,t){return e.timestamp===t.timestamp&&e.timeRange.start===t.timeRange.start&&e.timeRange.end===t.timeRange.end&&e.atStart===t.atStart&&e.atEnd===t.atEnd}},Q_=class extends v{async getDefaultValue(){return{direction:1,playing:!1,untilBoundary:`entire-timeline`,loop:!1}}async derive(e,t){let n=await t,r=Object.assign({},n);return Object.assign(r,e),r}canReuseValue(e,t){return e.direction===t.direction&&e.playing===t.playing&&e.untilBoundary===t.untilBoundary&&e.loop===t.loop}},$_=class extends v{getDefaultValue(){return 1}derive(e){return e<0?1:e}},ev={auto:!0,start:!0,end:!0,anchor:!0,"opposite-anchor":!0},tv=class extends _{getDefaultValue(){return`auto`}set(e){let t=this.get();super.set((async()=>this.validInput(await e)?e:t)())}validInput(e){return!!(typeof e==`number`||ev[e])}},nv=class extends x{derive(e){return{start:0,end:e.indexer.algDuration()}}},rv=class extends _{getDefaultValue(){return`auto`}},iv=class extends _{getDefaultValue(){return`auto`}},av=class extends x{derive(e){switch(e.puzzleID){case`clock`:case`square1`:case`redi_cube`:case`melindas2x2x2x2`:case`tri_quad`:case`loopover`:return`2D`;case`3x3x3`:switch(e.visualizationRequest){case`auto`:case`3D`:return`Cube3D`;default:return e.visualizationRequest}default:switch(e.visualizationRequest){case`auto`:case`3D`:return`PG3D`;case`experimental-2D-LL`:case`experimental-2D-LL-face`:return[`2x2x2`,`4x4x4`,`megaminx`].includes(e.puzzleID)?`experimental-2D-LL`:`2D`;default:return e.visualizationRequest}}}},ov=class extends _{getDefaultValue(){return`auto`}},sv=class extends _{getDefaultValue(){return`auto`}},cv=class extends _{getDefaultValue(){return`auto`}},lv=class extends _{getDefaultValue(){return`auto`}},uv=null;async function dv(){return uv??=new(await(h())).ThreeTextureLoader}var fv=class extends x{async derive(e){let{spriteURL:t}=e;return t===null?null:new Promise(async(e,n)=>{let r=()=>{console.warn(`Could not load sprite:`,t.toString()),e(null)};try{(await dv()).load(t.toString(),e,r,r)}catch{r()}})}},pv={facelets:[`regular`,`regular`,`regular`,`regular`,`regular`]};async function mv(e){let{definition:t}=await e.kpuzzle(),n={orbits:{}};for(let e of t.orbits)n.orbits[e.orbitName]={pieces:Array(e.numPieces).fill(pv)};return n}var hv=class extends x{getDefaultValue(){return{orbits:{}}}async derive(e){return e.stickeringMaskRequest?e.stickeringMaskRequest:e.stickeringRequest===`picture`?{specialBehaviour:`picture`,orbits:{}}:e.puzzleLoader.stickeringMask?.(e.stickeringRequest??`full`)??mv(e.puzzleLoader)}},gv={"-":`Regular`,D:`Dim`,I:`Ignored`,X:`Invisible`,O:`IgnoreNonPrimary`,P:`PermuteNonPrimary`,o:`Ignoriented`,"?":`OrientationWithoutPermutation`,M:`Mystery`,"@":`Regular`};function _v(e){let t={orbits:{}},n=e.split(`,`);for(let e of n){let[n,r,...i]=e.split(`:`);if(i.length>0)throw Error(`Invalid serialized orbit stickering mask (too many colons): \`${e}\``);let o=[];t.orbits[n]={pieces:o};for(let e of r){let t=gv[e];o.push(a(t))}}return t}var vv=class extends v{getDefaultValue(){return null}derive(e){return e===null?null:typeof e==`string`?_v(e):e}},yv=class extends _{getDefaultValue(){return null}},bv=class extends _{getDefaultValue(){return`auto`}},xv=class extends _{getDefaultValue(){return{}}},Sv=class extends _{getDefaultValue(){return`auto`}},Cv=class extends _{getDefaultValue(){return`auto`}},wv=class extends x{derive(e){return e.colorSchemeRequest===`dark`?`dark`:`light`}},Tv=class extends _{getDefaultValue(){return`auto`}},Ev=class extends _{getDefaultValue(){return null}},Dv=35,Ov=class extends _{getDefaultValue(){return Dv}};function kv(e,t){return e.latitude===t.latitude&&e.longitude===t.longitude&&e.distance===t.distance}var Av=class extends v{getDefaultValue(){return`auto`}canReuseValue(e,t){return e===t||kv(e,t)}async derive(e,t){if(e===`auto`)return`auto`;let n=await t;n===`auto`&&(n={});let r=Object.assign({},n);return Object.assign(r,e),r.latitude!==void 0&&(r.latitude=Math.min(Math.max(r.latitude,-90),90)),r.longitude!==void 0&&(r.longitude=kg(r.longitude,180,-180)),r}},jv=class extends x{canReuseValue(e,t){return kv(e,t)}async derive(e){if(e.orbitCoordinatesRequest===`auto`)return Lv(e.puzzleID,e.strategy);let t=Object.assign(Object.assign({},Lv(e.puzzleID,e.strategy),e.orbitCoordinatesRequest));if(Math.abs(t.latitude)<=e.latitudeLimit)return t;{let{latitude:n,longitude:r,distance:i}=t;return{latitude:e.latitudeLimit*Math.sign(n),longitude:r,distance:i}}}},Mv={latitude:31.717474411461005,longitude:0,distance:5.877852522924731},Nv={latitude:35,longitude:30,distance:6},Pv={latitude:35,longitude:30,distance:6.25},Fv={latitude:Math.atan(1/2)*y,longitude:0,distance:6.7},Iv={latitude:26.56505117707799,longitude:0,distance:6};function Lv(e,t){if(e[1]===`x`)return t===`Cube3D`?Nv:Pv;switch(e){case`megaminx`:case`gigaminx`:return Fv;case`pyraminx`:case`master_tetraminx`:return Iv;case`skewb`:return Pv;default:return Mv}}var Rv=class{constructor(e){this.twistyPlayerModel=e,this.orbitCoordinates=new jv({orbitCoordinatesRequest:this.orbitCoordinatesRequest,latitudeLimit:this.latitudeLimit,puzzleID:e.puzzleID,strategy:e.visualizationStrategy}),this.stickeringMask=new hv({stickeringMaskRequest:this.stickeringMaskRequest,stickeringRequest:this.stickeringRequest,puzzleLoader:e.puzzleLoader})}background=new Cv;colorSchemeRequest=new Tv;dragInput=new bv;foundationDisplay=new sv;foundationStickerSpriteURL=new y_;fullscreenElement=new Ev;hintFacelet=new u;hintStickerSpriteURL=new y_;initialHintFaceletsAnimation=new lv;hintFaceletsElevation=new cv;latitudeLimit=new Ov;movePressInput=new Sv;movePressCancelOptions=new xv;orbitCoordinatesRequest=new Av;stickeringMaskRequest=new vv;stickeringRequest=new yv;faceletScale=new ov;colorScheme=new wv({colorSchemeRequest:this.colorSchemeRequest});foundationStickerSprite=new fv({spriteURL:this.foundationStickerSpriteURL});hintStickerSprite=new fv({spriteURL:this.hintStickerSpriteURL});orbitCoordinates;stickeringMask},zv={errors:[]},Bv=class extends _{getDefaultValue(){return zv}reset(){this.set(this.getDefaultValue())}canReuseValue(e,t){return Dg(e.errors,t.errors)}},Vv=class{userVisibleErrorTracker=new Bv;alg=new C_;backView=new yg;controlPanel=new Fg;catchUpMove=new D_;indexerConstructorRequest=new R_;playingInfo=new Q_;puzzleDescriptionRequest=new K_;puzzleIDRequest=new J_;setupAnchor=new U_;setupAlg=new C_;setupTransformation=new W_;tempoScale=new $_;timestampRequest=new tv;viewerLink=new rv;visualizationFormat=new iv;title=new v_;videoURL=new y_;competitionID=new v_;animationTimelineLeavesRequest=new E_;puzzleLoader=new Y_({puzzleIDRequest:this.puzzleIDRequest,puzzleDescriptionRequest:this.puzzleDescriptionRequest},this.userVisibleErrorTracker);kpuzzle=new G_({puzzleLoader:this.puzzleLoader});puzzleID=new q_({puzzleLoader:this.puzzleLoader});puzzleAlg=new H_({algWithIssues:this.alg,kpuzzle:this.kpuzzle});puzzleSetupAlg=new H_({algWithIssues:this.setupAlg,kpuzzle:this.kpuzzle});visualizationStrategy=new av({visualizationRequest:this.visualizationFormat,puzzleID:this.puzzleID});indexerConstructor=new L_({alg:this.alg,puzzle:this.puzzleID,visualizationStrategy:this.visualizationStrategy,indexerConstructorRequest:this.indexerConstructorRequest,animationTimelineLeaves:this.animationTimelineLeavesRequest});setupAlgTransformation=new w_({setupAlg:this.puzzleSetupAlg,kpuzzle:this.kpuzzle});indexer=new z_({indexerConstructor:this.indexerConstructor,algWithIssues:this.puzzleAlg,kpuzzle:this.kpuzzle,animationTimelineLeaves:this.animationTimelineLeavesRequest});anchorTransformation=new T_({setupTransformation:this.setupTransformation,setupAnchor:this.setupAnchor,setupAlgTransformation:this.setupAlgTransformation,indexer:this.indexer});timeRange=new nv({indexer:this.indexer});detailedTimelineInfo=new Z_({timestampRequest:this.timestampRequest,timeRange:this.timeRange,setupAnchor:this.setupAnchor,setupAlg:this.setupAlg});coarseTimelineInfo=new X_({detailedTimelineInfo:this.detailedTimelineInfo,playingInfo:this.playingInfo});currentMoveInfo=new k_({indexer:this.indexer,detailedTimelineInfo:this.detailedTimelineInfo,catchUpMove:this.catchUpMove});buttonAppearance=new Xg({coarseTimelineInfo:this.coarseTimelineInfo,viewerLink:this.viewerLink});currentLeavesSimplified=new O_({currentMoveInfo:this.currentMoveInfo});currentPattern=new A_({anchoredStart:this.anchorTransformation,currentLeavesSimplified:this.currentLeavesSimplified,indexer:this.indexer});legacyPosition=new B_({currentMoveInfo:this.currentMoveInfo,currentPattern:this.currentPattern});twistySceneModel=new Rv(this);async twizzleLink(){let[e,t,n,r,i,a,o,s]=await Promise.all([this.viewerLink.get(),this.puzzleID.get(),this.puzzleDescriptionRequest.get(),this.alg.get(),this.setupAlg.get(),this.setupAnchor.get(),this.twistySceneModel.stickeringRequest.get(),this.twistySceneModel.twistyPlayerModel.title.get()]),c=e===`experimental-twizzle-explorer`,l=new URL(`https://alpha.twizzle.net/${c?`explore`:`edit`}/`);return r.alg.experimentalIsEmpty()||l.searchParams.set(`alg`,r.alg.toString()),i.alg.experimentalIsEmpty()||l.searchParams.set(`setup-alg`,i.alg.toString()),a!==`start`&&l.searchParams.set(`setup-anchor`,a),o!==`full`&&o!==null&&l.searchParams.set(`experimental-stickering`,o),c&&n!==C?l.searchParams.set(`puzzle-description`,n):t!==`3x3x3`&&l.searchParams.set(`puzzle`,t),s&&l.searchParams.set(`title`,s),l.toString()}experimentalAddAlgLeaf(e,t){let n=e.as(z);n?this.experimentalAddMove(n,t):this.alg.set((async()=>{let t=(await this.alg.get()).alg.concat(new B([e]));return this.timestampRequest.set(`end`),t})())}experimentalAddMove(e,t){let n=typeof e==`string`?new z(e):e;this.alg.set((async()=>{let[{alg:e},r]=await Promise.all([this.alg.get(),this.puzzleLoader.get()]),i=P(e,n,{...t,...await o(r)});return this.timestampRequest.set(`end`),this.catchUpMove.set({move:n,amount:0}),i})())}experimentalRemoveFinalChild(){this.alg.set((async()=>{let e=(await this.alg.get()).alg,t=Array.from(e.childAlgNodes()),[n]=t.splice(-1);if(!n)return e;this.timestampRequest.set(`end`);let r=n.as(z);return r&&this.catchUpMove.set({move:r.invert(),amount:0}),new B(t)})())}};function Hv(e){return Error(`Cannot get \`.${e}\` directly from a \`TwistyPlayer\`.`)}var Uv=class extends b{experimentalModel=new Vv;set alg(e){this.experimentalModel.alg.set(e)}get alg(){throw Hv(`alg`)}set experimentalSetupAlg(e){this.experimentalModel.setupAlg.set(e)}get experimentalSetupAlg(){throw Hv(`setup`)}set experimentalSetupAnchor(e){this.experimentalModel.setupAnchor.set(e)}get experimentalSetupAnchor(){throw Hv(`anchor`)}set puzzle(e){this.experimentalModel.puzzleIDRequest.set(e)}get puzzle(){throw Hv(`puzzle`)}set experimentalPuzzleDescription(e){this.experimentalModel.puzzleDescriptionRequest.set(e)}get experimentalPuzzleDescription(){throw Hv(`experimentalPuzzleDescription`)}set timestamp(e){this.experimentalModel.timestampRequest.set(e)}get timestamp(){throw Hv(`timestamp`)}set hintFacelets(e){this.experimentalModel.twistySceneModel.hintFacelet.set(e)}get hintFacelets(){throw Hv(`hintFacelets`)}set experimentalStickering(e){this.experimentalModel.twistySceneModel.stickeringRequest.set(e)}get experimentalStickering(){throw Hv(`experimentalStickering`)}set experimentalStickeringMaskOrbits(e){this.experimentalModel.twistySceneModel.stickeringMaskRequest.set(e)}get experimentalStickeringMaskOrbits(){throw Hv(`experimentalStickeringMaskOrbits`)}set experimentalFaceletScale(e){this.experimentalModel.twistySceneModel.faceletScale.set(e)}get experimentalFaceletScale(){throw Hv(`experimentalFaceletScale`)}set backView(e){this.experimentalModel.backView.set(e)}get backView(){throw Hv(`backView`)}set background(e){this.experimentalModel.twistySceneModel.background.set(e)}get background(){throw Hv(`background`)}set colorScheme(e){this.experimentalModel.twistySceneModel.colorSchemeRequest.set(e)}get colorScheme(){throw Hv(`colorScheme`)}set controlPanel(e){this.experimentalModel.controlPanel.set(e)}get controlPanel(){throw Hv(`controlPanel`)}set visualization(e){this.experimentalModel.visualizationFormat.set(e)}get visualization(){throw Hv(`visualization`)}set experimentalTitle(e){this.experimentalModel.title.set(e)}get experimentalTitle(){throw Hv(`experimentalTitle`)}set experimentalVideoURL(e){this.experimentalModel.videoURL.set(e)}get experimentalVideoURL(){throw Hv(`experimentalVideoURL`)}set experimentalCompetitionID(e){this.experimentalModel.competitionID.set(e)}get experimentalCompetitionID(){throw Hv(`experimentalCompetitionID`)}set viewerLink(e){this.experimentalModel.viewerLink.set(e)}get viewerLink(){throw Hv(`viewerLink`)}set experimentalMovePressInput(e){this.experimentalModel.twistySceneModel.movePressInput.set(e)}get experimentalMovePressInput(){throw Hv(`experimentalMovePressInput`)}set experimentalMovePressCancelOptions(e){this.experimentalModel.twistySceneModel.movePressCancelOptions.set(e)}get experimentalMovePressCancelOptions(){throw Hv(`experimentalMovePressCancelOptions`)}set cameraLatitude(e){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({latitude:e})}get cameraLatitude(){throw Hv(`cameraLatitude`)}set cameraLongitude(e){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({longitude:e})}get cameraLongitude(){throw Hv(`cameraLongitude`)}set cameraDistance(e){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({distance:e})}get cameraDistance(){throw Hv(`cameraDistance`)}set cameraLatitudeLimit(e){this.experimentalModel.twistySceneModel.latitudeLimit.set(e)}get cameraLatitudeLimit(){throw Hv(`cameraLatitudeLimit`)}set indexer(e){this.experimentalModel.indexerConstructorRequest.set(e)}get indexer(){throw Hv(`indexer`)}set tempoScale(e){this.experimentalModel.tempoScale.set(e)}get tempoScale(){throw Hv(`tempoScale`)}set experimentalSprite(e){this.experimentalModel.twistySceneModel.foundationStickerSpriteURL.set(e)}get experimentalSprite(){throw Hv(`experimentalSprite`)}set experimentalHintSprite(e){this.experimentalModel.twistySceneModel.hintStickerSpriteURL.set(e)}get experimentalHintSprite(){throw Hv(`experimentalHintSprite`)}set fullscreenElement(e){this.experimentalModel.twistySceneModel.fullscreenElement.set(e)}get fullscreenElement(){throw Hv(`fullscreenElement`)}set experimentalInitialHintFaceletsAnimation(e){this.experimentalModel.twistySceneModel.initialHintFaceletsAnimation.set(e)}get experimentalInitialHintFaceletsAnimation(){throw Hv(`experimentalInitialHintFaceletsAnimation`)}set experimentalHintFaceletsElevation(e){this.experimentalModel.twistySceneModel.hintFaceletsElevation.set(e)}get experimentalHintFaceletsElevation(){throw Hv(`experimentalHintFaceletsElevation`)}set experimentalDragInput(e){this.experimentalModel.twistySceneModel.dragInput.set(e)}get experimentalDragInput(){throw Hv(`experimentalDragInput`)}experimentalGet=new Wv(this.experimentalModel)},Wv=class{constructor(e){this.model=e}async alg(){return(await this.model.alg.get()).alg}async setupAlg(){return(await this.model.setupAlg.get()).alg}puzzleID(){return this.model.puzzleID.get()}async timestamp(){return(await this.model.detailedTimelineInfo.get()).timestamp}},Gv=`data-`,Kv={alg:`alg`,"experimental-setup-alg":`experimentalSetupAlg`,"experimental-setup-anchor":`experimentalSetupAnchor`,puzzle:`puzzle`,"experimental-puzzle-description":`experimentalPuzzleDescription`,visualization:`visualization`,"hint-facelets":`hintFacelets`,"experimental-stickering":`experimentalStickering`,"experimental-stickering-mask-orbits":`experimentalStickeringMaskOrbits`,background:`background`,"color-scheme":`colorScheme`,"control-panel":`controlPanel`,"back-view":`backView`,"experimental-facelet-scale":`experimentalFaceletScale`,"experimental-initial-hint-facelets-animation":`experimentalInitialHintFaceletsAnimation`,"experimental-hint-facelets-elevation":`experimentalHintFaceletsElevation`,"viewer-link":`viewerLink`,"experimental-move-press-input":`experimentalMovePressInput`,"experimental-drag-input":`experimentalDragInput`,"experimental-title":`experimentalTitle`,"experimental-video-url":`experimentalVideoURL`,"experimental-competition-id":`experimentalCompetitionID`,"camera-latitude":`cameraLatitude`,"camera-longitude":`cameraLongitude`,"camera-distance":`cameraDistance`,"camera-latitude-limit":`cameraLatitudeLimit`,"tempo-scale":`tempoScale`,"experimental-sprite":`experimentalSprite`,"experimental-hint-sprite":`experimentalHintSprite`},qv=Object.fromEntries(Object.values(Kv).map(e=>[e,!0])),Jv={experimentalMovePressCancelOptions:!0},Yv,Xv=Symbol(`intersectedCallback`);function Zv(e){Yv??=new IntersectionObserver((e,t)=>{for(let n of e)n.isIntersecting&&n.intersectionRect.height>0&&(n.target[Xv](),t.unobserve(n.target))}),Yv.observe(e)}var Qv=class extends Uv{controller=new Ng(this.experimentalModel,this);buttons;experimentalCanvasClickCallback=()=>{};constructor(e={}){super();for(let[t,n]of Object.entries(e)){if(!(qv[t]||Jv[t])){console.warn(`Invalid config passed to TwistyPlayer: ${t}`);break}this[t]=n}}#e=new Eg(this,`controls-`,[`auto`].concat(Object.keys(Pg)));#t=document.createElement(`div`);#n=document.createElement(`div`);#r=!1;connectedCallback(){this.addCSS(__),Zv(this)}async[Xv](){if(this.#r)return;this.#r=!0,this.addElement(this.#t).classList.add(`visualization-wrapper`),this.addElement(this.#n).classList.add(`error-elem`),this.#n.textContent=`Error`,this.experimentalModel.userVisibleErrorTracker.addFreshListener(e=>{let t=e.errors[0]??null;this.contentWrapper.classList.toggle(`error`,!!t),t&&(this.#n.textContent=t)});let e=new f_(this.experimentalModel,this.controller);this.contentWrapper.appendChild(e),this.buttons=new e_(this.experimentalModel,this.controller,this),this.contentWrapper.appendChild(this.buttons),this.experimentalModel.twistySceneModel.background.addFreshListener(e=>{this.contentWrapper.classList.toggle(`checkered`,[`auto`,`checkered`].includes(e)),this.contentWrapper.classList.toggle(`checkered-transparent`,e===`checkered-transparent`)}),this.experimentalModel.twistySceneModel.colorScheme.addFreshListener(e=>{this.contentWrapper.classList.toggle(`dark-mode`,[`dark`].includes(e))}),this.experimentalModel.controlPanel.addFreshListener(e=>{this.#e.setValue(e)}),this.experimentalModel.visualizationStrategy.addFreshListener(this.#c.bind(this)),this.experimentalModel.puzzleID.addFreshListener(this.flash.bind(this))}#i=`auto`;experimentalSetFlashLevel(e){this.#i=e}flash(){this.#i===`auto`&&this.#a?.animate([{opacity:.25},{opacity:1}],{duration:250,easing:`ease-out`})}#a=null;#o=new Vg;#s=null;#c(e){if(e!==this.#s){this.#a?.remove(),this.#a?.disconnect();let t;switch(e){case`2D`:case`experimental-2D-LL`:case`experimental-2D-LL-face`:t=new Bg(this.experimentalModel.twistySceneModel,e);break;case`Cube3D`:case`PG3D`:t=new Ug(this.experimentalModel),this.#o.handleNewValue(t);break;default:throw Error(`Invalid visualization`)}this.#t.appendChild(t),this.#a=t,this.#s=e}}async experimentalCurrentVantages(){this.connectedCallback();let e=this.#a;return e instanceof Ug?e.experimentalVantages():[]}async experimentalCurrentCanvases(){let e=await this.experimentalCurrentVantages(),t=[];for(let n of e)t.push((await n.canvasInfo()).canvas);return t}async experimentalCurrentThreeJSPuzzleObject(e){this.connectedCallback();let t=await(await this.#o.promise).experimentalTwisty3DPuzzleWrapper(),n=t.twisty3DPuzzle(),r=(async()=>{await n,await new Promise(e=>setTimeout(e,0))})();if(e){let n=new f(async()=>{});t.addEventListener(`render-scheduled`,async()=>{n.requestIsPending()||(n.requestAnimFrame(),await r,e())})}return n}jumpToStart(e){this.controller.jumpToStart(e)}jumpToEnd(e){this.controller.jumpToEnd(e)}play(){this.controller.togglePlay(!0)}pause(){this.controller.togglePlay(!1)}togglePlay(e){this.controller.togglePlay(e)}experimentalAddMove(e,t){this.experimentalModel.experimentalAddMove(e,t)}experimentalAddAlgLeaf(e,t){this.experimentalModel.experimentalAddAlgLeaf(e,t)}static get observedAttributes(){let e=[];for(let t of Object.keys(Kv))e.push(t,Gv+t);return e}experimentalRemoveFinalChild(){this.experimentalModel.experimentalRemoveFinalChild()}attributeChangedCallback(e,t,n){e.startsWith(Gv)&&(e=e.slice(Gv.length));let r=Kv[e];r&&(this[r]=n)}async experimentalScreenshot(e){return(await m_(this.experimentalModel,e)).dataURL}async experimentalDownloadScreenshot(e){if([`2D`,`experimental-2D-LL`,`experimental-2D-LL-face`].includes(await this.experimentalModel.visualizationStrategy.get())){let t=await this.#a.currentTwisty2DPuzzleWrapper().twisty2DPuzzle(),n=new XMLSerializer().serializeToString(t.svgWrapper.svgElement);g_(URL.createObjectURL(new Blob([n])),e??await h_(this.experimentalModel),`svg`)}else await(await m_(this.experimentalModel)).download(e)}};l.define(`twisty-player`,Qv);var $v=k(class extends M{traverseAlg(e,t){let n=[],r=0;for(let i of e.childAlgNodes()){let e=this.traverseAlgNode(i,{numMovesSoFar:t.numMovesSoFar+r});n.push(e.tokens),r+=e.numLeavesInside}return{tokens:Array.prototype.concat(...n),numLeavesInside:r}}traverseGrouping(e,t){let n=this.traverseAlg(e.alg,t);return{tokens:n.tokens,numLeavesInside:n.numLeavesInside*e.amount}}traverseMove(e,t){return{tokens:[{leaf:e,idx:t.numMovesSoFar}],numLeavesInside:1}}traverseCommutator(e,t){let n=this.traverseAlg(e.A,t),r=this.traverseAlg(e.B,{numMovesSoFar:t.numMovesSoFar+n.numLeavesInside});return{tokens:n.tokens.concat(r.tokens),numLeavesInside:n.numLeavesInside*2+r.numLeavesInside}}traverseConjugate(e,t){let n=this.traverseAlg(e.A,t),r=this.traverseAlg(e.B,{numMovesSoFar:t.numMovesSoFar+n.numLeavesInside});return{tokens:n.tokens.concat(r.tokens),numLeavesInside:n.numLeavesInside*2+r.numLeavesInside*2}}traversePause(e,t){return{tokens:[{leaf:e,idx:t.numMovesSoFar}],numLeavesInside:1}}traverseNewline(e,t){return{tokens:[],numLeavesInside:0}}traverseLineComment(e,t){return{tokens:[],numLeavesInside:0}}}),ey=class extends _{getDefaultValue(){return``}},ty=class extends x{derive(e){return x_(e.value)}},ny=class extends v{getDefaultValue(){return{selectionStart:0,selectionEnd:0,endChangedMostRecently:!1}}async derive(e,t){let{selectionStart:n,selectionEnd:r}=e,i=await t;return{selectionStart:n,selectionEnd:r,endChangedMostRecently:e.selectionStart===i.selectionStart&&e.selectionEnd!==(await t).selectionEnd}}},ry=class extends x{derive(e){return e.selectionInfo.endChangedMostRecently?e.selectionInfo.selectionEnd:e.selectionInfo.selectionStart}},iy=class extends x{derive(e){return $v(e.algWithIssues.alg,{numMovesSoFar:0}).tokens}},ay=class extends x{derive(e){function t(t){if(t===null)return null;let n;return n=e.targetChar<t.leaf[ie]?`before`:e.targetChar===t.leaf[ie]?`start`:e.targetChar<t.leaf[F]?`inside`:e.targetChar===t.leaf[F]?`end`:`after`,{leafInfo:t,where:n}}let n=null;for(let r of e.leafTokens){if(e.targetChar<r.leaf[ie]&&n!==null)return t(n);if(e.targetChar<=r.leaf[F])return t(r);n=r}return t(n)}},oy=class{valueProp=new ey;selectionProp=new ny;targetCharProp=new ry({selectionInfo:this.selectionProp});algEditorAlgWithIssues=new ty({value:this.valueProp});leafTokensProp=new iy({algWithIssues:this.algEditorAlgWithIssues});leafToHighlight=new ay({leafTokens:this.leafTokensProp,targetChar:this.targetCharProp})},sy=`//`;function cy(e){try{return B.fromString(e)}catch{return null}}function ly(e,t){let n=e.indexOf(t);return n===-1?[e,``]:[e.slice(0,n),e.slice(n)]}function uy(e){let t=[];for(let n of e.split(`
`)){let[e,r]=ly(n,sy);e=e.replaceAll(`’`,`'`),t.push(e+r)}return t.join(`
`)}function dy(e,t){let{value:n}=e,{selectionStart:r,selectionEnd:i}=e,a=n.slice(0,r),o=n.slice(i);t=t.replaceAll(`\r
`,`
`);let s=a.match(/\/\/[^\n]*$/),c=n[r-1]===`/`&&t[0]===`/`,l=s||c,u=t.match(/\/\/[^\n]*$/),d=t;if(l){let[e,n]=ly(t,`
`);d=e+uy(n)}else d=uy(t);let f=!l&&r!==0&&![`
`,` `].includes(d[0])&&![`
`,` `].includes(n[r-1]),p=!u&&i!==n.length&&![`
`,` `].includes(d.at(-1))&&![`
`,` `].includes(n[i]);function m(e,t){let n=e+d+t,r=!!cy(a+n+o);return r&&(d=n),r}f&&p&&m(` `,` `)||f&&m(` `,``)||p&&m(``,` `),Wg?.execCommand(`insertText`,!1,d)||e.setRangeText(d,r,i,`end`)}var fy=new m;fy.replaceSync(`
:host {
  width: 384px;
  display: grid;
}

.wrapper {
  /*overflow: hidden;
  resize: horizontal;*/

  background: var(--background, none);
  display: grid;
}

textarea, .carbon-copy {
  grid-area: 1 / 1 / 2 / 2;

  width: 100%;
  font-family: sans-serif;
  line-height: 1.2em;

  font-size: var(--font-size, inherit);
  font-family: var(--font-family, sans-serif);

  box-sizing: border-box;

  padding: var(--padding, 0.5em);
  /* Prevent horizontal growth. */
  overflow-x: hidden;
}

textarea {
  resize: none;
  background: none;
  z-index: 2;
  border: 1px solid var(--border-color, rgba(0, 0, 0, 0.25));
  overflow: hidden;
}

.carbon-copy {
  white-space: pre-wrap;
  word-wrap: break-word;
  color: transparent;
  user-select: none;
  pointer-events: none;

  z-index: 1;
}

.carbon-copy .highlight {
  background: var(--highlight-color, rgba(255, 128, 0, 0.5));
  padding: 0.1em 0.2em;
  margin: -0.1em -0.2em;
  border-radius: 0.2em;
}

.wrapper.issue-warning textarea,
.wrapper.valid-for-puzzle-warning textarea {
  outline: none;
  border: 1px solid rgba(200, 200, 0, 0.5);
  background: rgba(255, 255, 0, 0.1);
}

.wrapper.issue-error textarea,
.wrapper.valid-for-puzzle-error textarea {
  outline: none;
  border: 1px solid red;
  background: rgba(255, 0, 0, 0.1);
}
`);var py=`for-twisty-player`,my=`placeholder`,hy=`twisty-player-prop`,gy=class extends b{model=new oy;#e=document.createElement(`textarea`);#t=document.createElement(`div`);#n=document.createElement(`span`);#r=document.createElement(`span`);#i=document.createElement(`span`);#a=new Eg(this,`valid-for-puzzle-`,[`none`,`warning`,`error`]);#o=null;#s;get#c(){return this.#o===null?null:this.#o.experimentalModel[this.#s]}debugNeverRequestTimestamp=!1;constructor(e){super(),this.#t.classList.add(`carbon-copy`),this.addElement(this.#t),this.#e.rows=1,this.addElement(this.#e),this.#n.classList.add(`prefix`),this.#t.appendChild(this.#n),this.#r.classList.add(`highlight`),this.#t.appendChild(this.#r),this.#i.classList.add(`suffix`),this.#t.appendChild(this.#i),this.#e.placeholder=`Alg`,this.#e.setAttribute(`spellcheck`,`false`),this.addCSS(fy),this.#e.addEventListener(`input`,()=>{this.#l=!0,this.onInput()}),this.#e.addEventListener(`blur`,()=>this.onBlur()),document.addEventListener(`selectionchange`,()=>this.onSelectionChange()),e?.twistyPlayer&&(this.twistyPlayer=e.twistyPlayer),this.#s=e?.twistyPlayerProp??`alg`,e?.twistyPlayerProp===`alg`&&this.model.leafToHighlight.addFreshListener(e=>{e&&this.highlightLeaf(e.leafInfo.leaf)})}connectedCallback(){this.#e.addEventListener(`paste`,e=>{let t=e.clipboardData?.getData(`text`);t&&(dy(this.#e,t),e.preventDefault(),this.onInput())})}set algString(e){this.#e.value=e,this.onInput()}get algString(){return this.#e.value}set placeholder(e){this.#e.placeholder=e}#l=!1;onInput(){this.#r.hidden=!0,this.highlightLeaf(null);let e=this.#e.value.trimEnd();this.model.valueProp.set(e),this.#c?.set(e)}async onSelectionChange(){if(document.activeElement!==this||this.shadow.activeElement!==this.#e||this.#s!==`alg`)return;let{selectionStart:e,selectionEnd:t}=this.#e;this.model.selectionProp.set({selectionStart:e,selectionEnd:t})}async onBlur(){}setAlgIssueClassForPuzzle(e){this.#a.setValue(e)}#u(e){return e.endsWith(`
`)?`${e} `:e}#d=null;highlightLeaf(e){if(e===null){this.#n.textContent=``,this.#r.textContent=``,this.#i.textContent=this.#u(this.#e.value);return}e!==this.#d&&(this.#d=e,this.#n.textContent=this.#e.value.slice(0,e[ie]),this.#r.textContent=this.#e.value.slice(e[ie],e[F]),this.#i.textContent=this.#u(this.#e.value.slice(e[F])),this.#r.hidden=!1)}get twistyPlayer(){return this.#o}set twistyPlayer(e){if(this.#o){console.warn(`twisty-player reassignment/clearing is not supported`);return}this.#o=e,e&&((async()=>{this.algString=this.#c?(await this.#c.get()).alg.toString():``})(),this.#s===`alg`&&(this.#o?.experimentalModel.puzzleAlg.addFreshListener(e=>{if(e.issues.errors.length===0){this.setAlgIssueClassForPuzzle(e.issues.warnings.length===0?`none`:`warning`);let t=e.alg,n=B.fromString(this.algString);t.isIdentical(n)||(this.algString=t.toString(),this.onInput())}else this.setAlgIssueClassForPuzzle(`error`)}),this.model.leafToHighlight.addFreshListener(async t=>{if(t===null)return;let[n,r]=await Promise.all([await e.experimentalModel.indexer.get(),await e.experimentalModel.timestampRequest.get()]);if(r===`auto`&&!this.#l)return;let i=n.indexToMoveStartTimestamp(t.leafInfo.idx),a=n.moveDuration(t.leafInfo.idx),o;switch(t.where){case`before`:o=i;break;case`start`:case`inside`:o=i+a/4;break;case`end`:case`after`:o=i+a;break;default:throw console.log(`invalid where`),Error(`Invalid where!`)}this.debugNeverRequestTimestamp||e.experimentalModel.timestampRequest.set(o)}),e.experimentalModel.currentLeavesSimplified.addFreshListener(async t=>{let n=(await e.experimentalModel.indexer.get()).getAnimLeaf(t.patternIndex);this.highlightLeaf(n)})))}attributeChangedCallback(e,t,n){switch(e){case py:{let e=document.getElementById(n);if(!e){console.warn(`${py}= elem does not exist`);return}if(!(e instanceof Qv)){console.warn(`${py}=is not a twisty-player`);return}this.twistyPlayer=e;return}case my:this.placeholder=n;return;case hy:if(this.#o)throw console.log(`cannot set prop`),Error(`cannot set prop after twisty player`);this.#s=n;return}}static get observedAttributes(){return[py,my,hy]}};l.define(`twisty-alg-editor`,gy);async function _y(e){return new Promise((t,n)=>{try{let n=document.getElementById(e);n&&t(n);let r=new MutationObserver(n=>{for(let i of n)i.attributeName===`id`&&i.target instanceof Element&&i.target.getAttribute(`id`)===e&&(t(i.target),r.disconnect())});r.observe(document.body,{attributeFilter:[`id`],subtree:!0})}catch(e){n(e)}})}var vy=new m;vy.replaceSync(`
:host {
  display: inline;
}

.wrapper {
  display: inline;
}

a:not(:hover) {
  color: inherit;
  text-decoration: none;
}

twisty-alg-leaf-elem.twisty-alg-comment {
  color: rgba(0, 0, 0, 0.4);
}

.wrapper.current-move {
  background: rgba(66, 133, 244, 0.3);
  margin-left: -0.1em;
  margin-right: -0.1em;
  padding-left: 0.1em;
  padding-right: 0.1em;
  border-radius: 0.1em;
}
`);var yy=.25,by=class extends b{constructor(e,t,n,r,i,a){if(super({mode:`open`}),this.algOrAlgNode=r,this.classList.add(e),this.addCSS(vy),a){let e=this.contentWrapper.appendChild(document.createElement(`a`));e.href=`#`,e.textContent=t,e.addEventListener(`click`,e=>{e.preventDefault(),n.twistyAlgViewer.jumpToIndex(n.earliestMoveIndex,i)})}else this.contentWrapper.appendChild(document.createElement(`span`)).textContent=t}pathToIndex(e){return[]}setCurrentMove(e){this.contentWrapper.classList.toggle(`current-move`,e)}};l.define(`twisty-alg-leaf-elem`,by);var xy=class extends g{constructor(e,t){super(),this.algOrAlgNode=t,this.classList.add(e)}queue=[];addString(e){this.queue.push(document.createTextNode(e))}addElem(e){return this.queue.push(e.element),e.moveCount}flushQueue(e=1){for(let t of wy(this.queue,e))this.append(t);this.queue=[]}pathToIndex(e){return[]}};l.define(`twisty-alg-wrapper-elem`,xy);function Sy(e){return e===1?-1:1}function Cy(e,t){return t<0?Sy(e):e}function wy(e,t){if(t===1)return e;let n=Array.from(e);return n.reverse(),n}var Ty=k(class extends M{traverseAlg(e,t){let n=0,r=new xy(`twisty-alg-alg`,e),i=!0;for(let a of ne(e.childAlgNodes(),t.direction))i||r.addString(` `),i=!1,a.as(ee)?.experimentalNISSGrouping&&r.addString(`^(`),a.as(A)?.experimentalNISSPlaceholder||(n+=r.addElem(this.traverseAlgNode(a,{earliestMoveIndex:t.earliestMoveIndex+n,twistyAlgViewer:t.twistyAlgViewer,direction:t.direction}))),a.as(ee)?.experimentalNISSGrouping&&r.addString(`)`);return r.flushQueue(t.direction),{moveCount:n,element:r}}traverseGrouping(e,t){let n=e.experimentalAsSquare1Tuple(),r=Cy(t.direction,e.amount),i=0,a=new xy(`twisty-alg-grouping`,e);return a.addString(`(`),n?(i+=a.addElem({moveCount:1,element:new by(`twisty-alg-move`,n[0].amount.toString(),t,n[0],!0,!0)}),a.addString(`, `),i+=a.addElem({moveCount:1,element:new by(`twisty-alg-move`,n[1].amount.toString(),t,n[1],!0,!0)})):i+=a.addElem(this.traverseAlg(e.alg,{earliestMoveIndex:t.earliestMoveIndex+i,twistyAlgViewer:t.twistyAlgViewer,direction:r})),a.addString(`)${e.experimentalRepetitionSuffix}`),a.flushQueue(),{moveCount:i*Math.abs(e.amount),element:a}}traverseMove(e,t){let n=new by(`twisty-alg-move`,e.toString(),t,e,!0,!0);return t.twistyAlgViewer.highlighter.addMove(e[ie],n),{moveCount:1,element:n}}traverseCommutator(e,t){let n=0,r=new xy(`twisty-alg-commutator`,e);r.addString(`[`),r.flushQueue();let[i,a]=wy([e.A,e.B],t.direction);return n+=r.addElem(this.traverseAlg(i,{earliestMoveIndex:t.earliestMoveIndex+n,twistyAlgViewer:t.twistyAlgViewer,direction:t.direction})),r.addString(`, `),n+=r.addElem(this.traverseAlg(a,{earliestMoveIndex:t.earliestMoveIndex+n,twistyAlgViewer:t.twistyAlgViewer,direction:t.direction})),r.flushQueue(t.direction),r.addString(`]`),r.flushQueue(),{moveCount:n*2,element:r}}traverseConjugate(e,t){let n=0,r=new xy(`twisty-alg-conjugate`,e);r.addString(`[`);let i=r.addElem(this.traverseAlg(e.A,{earliestMoveIndex:t.earliestMoveIndex+n,twistyAlgViewer:t.twistyAlgViewer,direction:t.direction}));return n+=i,r.addString(`: `),n+=r.addElem(this.traverseAlg(e.B,{earliestMoveIndex:t.earliestMoveIndex+n,twistyAlgViewer:t.twistyAlgViewer,direction:t.direction})),r.addString(`]`),r.flushQueue(),{moveCount:n+i,element:r}}traversePause(e,t){return e.experimentalNISSGrouping?this.traverseAlg(e.experimentalNISSGrouping.alg,t):{moveCount:1,element:new by(`twisty-alg-pause`,`.`,t,e,!0,!0)}}traverseNewline(e,t){let n=new xy(`twisty-alg-newline`,e);return n.append(document.createElement(`br`)),{moveCount:0,element:n}}traverseLineComment(e,t){return{moveCount:0,element:new by(`twisty-alg-line-comment`,`//${e.text}`,t,e,!1,!1)}}}),Ey=class{moveCharIndexMap=new Map;currentElem=null;addMove(e,t){this.moveCharIndexMap.set(e,t)}set(e){let t=e?this.moveCharIndexMap.get(e[ie])??null:null;this.currentElem!==t&&(this.currentElem?.classList.remove(`twisty-alg-current-move`),this.currentElem?.setCurrentMove(!1),t?.classList.add(`twisty-alg-current-move`),t?.setCurrentMove(!0),this.currentElem=t)}},Dy=class extends g{highlighter=new Ey;#e;#t=null;lastClickTimestamp=null;constructor(e){super(),e?.twistyPlayer&&(this.twistyPlayer=e?.twistyPlayer)}connectedCallback(){}setAlg(e){this.#e=Ty(e,{earliestMoveIndex:0,twistyAlgViewer:this,direction:1}).element,this.textContent=``,this.appendChild(this.#e)}get twistyPlayer(){return this.#t}set twistyPlayer(e){this.#n(e)}async#n(e){if(this.#t){console.warn(`twisty-player reassignment is not supported`);return}if(e===null)throw Error(`clearing twistyPlayer is not supported`);this.#t=e,this.#t.experimentalModel.alg.addFreshListener(e=>{this.setAlg(e.alg)});let t=(await this.#t.experimentalModel.alg.get()).alg,n=ie in t?t:B.fromString(t.toString());this.setAlg(n),e.experimentalModel.currentMoveInfo.addFreshListener(e=>{let t=e.currentMoves[0];if(t??=e.movesStarting[0],t??=e.movesFinishing[0],!t)this.highlighter.set(null);else{let e=t.move;this.highlighter.set(e)}}),e.experimentalModel.detailedTimelineInfo.addFreshListener(e=>{e.timestamp!==this.lastClickTimestamp&&(this.lastClickTimestamp=null)})}async jumpToIndex(e,t){let n=this.#t;if(n){n.pause();let r=(async()=>{let r=await n.experimentalModel.indexer.get(),i=t?r.moveDuration(e)*yy:0;return r.indexToMoveStartTimestamp(e)+r.moveDuration(e)-i})();n.experimentalModel.timestampRequest.set(await r),this.lastClickTimestamp===await r?(n.play(),this.lastClickTimestamp=null):this.lastClickTimestamp=await r}}async attributeChangedCallback(e,t,n){if(e===`for`){let e=document.getElementById(n);if(e||console.info(`for= elem does not exist, waiting for one`),await customElements.whenDefined(`twisty-player`),e=await _y(n),!(e instanceof Qv)){console.warn(`for= elem is not a twisty-player`);return}this.twistyPlayer=e}}static get observedAttributes(){return[`for`]}};l.define(`twisty-alg-viewer`,Dy);var Oy=new m;Oy.replaceSync(`
.wrapper {
  background: rgb(255, 245, 235);
  border: 1px solid rgba(0, 0, 0, 0.25);

  /* Workaround from https://stackoverflow.com/questions/40010597/how-do-i-apply-opacity-to-a-css-color-variable */
  --text-color: 0, 0, 0;
  --heading-background: 255, 230, 210;

  color: rgb(var(--text-color));
}

.setup-alg, twisty-alg-viewer {
  padding: 0.5em 1em;
}

.heading {
  background: rgba(var(--heading-background), 1);
  color: rgba(var(--text-color), 1);
  font-weight: bold;
  padding: 0.25em 0.5em;
  display: grid;
  grid-template-columns: auto 1fr;

  /* For the move count hover elems. */
  position: sticky;
}

.heading.title {
  background: rgb(255, 245, 235);
  font-size: 150%;
  white-space: pre-wrap;
}

.heading .move-count {
  font-weight: initial;
  text-align: right;
  color: rgba(var(--text-color), 0.4);
}

.wrapper.dark-mode .heading .move-count {
  color: rgba(var(--text-color), 0.7);
}

.heading a {
  text-decoration: none;
  color: inherit;
}

twisty-player {
  width: 100%;
  min-height: 128px;
  height: 288px;
  resize: vertical;
  overflow-y: hidden;
}

twisty-player + .heading {
  padding-top: 0.5em;
}

twisty-alg-viewer {
  display: inline-block;
}

.wrapper {
  container-type: inline-size;
}

.scrollable-region {
  border-top: 1px solid rgba(0, 0, 0, 0.25);
}

.scrollable-region {
  max-height: 18em;
  overflow-y: auto;
}

@container (min-width: 512px) {
  .responsive-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  twisty-player {
    height: 320px
  }
  .scrollable-region {
    border-top: none;
    border-left: 1px solid rgba(0, 0, 0, 0.25);
    contain: strict;
    max-height: 100cqh;
  }
}

.wrapper:fullscreen,
.wrapper:fullscreen .responsive-wrapper {
  width: 100%;
  height: 100%;
}

.wrapper:fullscreen twisty-player,
.wrapper:fullscreen .scrollable-region {
  height: 50%;
}

@container (min-width: 512px) {
  .wrapper:fullscreen twisty-player,
  .wrapper:fullscreen .scrollable-region {
    height: 100%;
  }
}

/* TODO: dedup with Twizzle Editor */
.move-count > span:hover:before {
  background-color: rgba(var(--heading-background), 1);
  color: rgba(var(--text-color), 1);
  backdrop-filter: blur(4px);
  z-index: 100;
  position: absolute;
  padding: 0.5em;
  top: 1.5em;
  right: 0;
  content: attr(data-before);
  white-space: pre-wrap;
  text-align: left;
}

.move-count > span:hover {
  color: rgba(var(--text-color), 1);
  cursor: help;
}
`);var ky=new m;ky.replaceSync(`
.wrapper {
  background: white;
  --heading-background: 232, 239, 253
}

.wrapper.dark-mode {
  --text-color: 236, 236, 236;
  --heading-background: 29, 29, 29;
}

.scrollable-region {
  overflow-y: auto;
}

.wrapper.dark-mode {
  background: #262626;
  --text-color: 142, 142, 142;
  border-color: #FFFFFF44;
  color-scheme: dark;
}

.wrapper.dark-mode .heading:not(.title) {
  background: #1d1d1d;
}

.heading.title {
  background: none;
}
`);function Ay(e=``,t=location.href){let n={alg:`alg`,"setup-alg":`experimental-setup-alg`,"setup-anchor":`experimental-setup-anchor`,puzzle:`puzzle`,stickering:`experimental-stickering`,"puzzle-description":`experimental-puzzle-description`,title:`experimental-title`,"video-url":`experimental-video-url`,competition:`experimental-competition-id`},r=new URL(t).searchParams,i={};for(let[t,a]of Object.entries(n)){let n=r.get(e+t);if(n!==null){let e=Kv[a];i[e]=n}}return i}var jy=`outer block moves (e.g. R, Rw, or 4r)`,My=`inner block moves (e.g. M or 2-5r)`,Ny={OBTM:`HTM = OBTM ("Outer Block Turn Metric"):
\u2022 ${My} count as 2 turns
\u2022 ${jy} count as 1 turn
\u2022 rotations (e.g. x) count as 0 turns`,OBQTM:`QTM = OBQTM ("Outer Block Quantum Turn Metric"):
\u2022 ${My} count as 2 turns per quantum (e.g. M2 counts as 4)
\u2022 ${jy} count as 1 turn per quantum (e.g. R2 counts as 2)
\u2022 rotations (e.g. x) count as 0 turns`,RBTM:`STM = RBTM ("Range Block Turn Metric"):
\u2022 ${My} count as 1 turn
\u2022 ${jy} count as 1 turn
\u2022 rotations (e.g. x) count as 0 turns`,RBQTM:`SQTM = RBQTM ("Range Block Quantum Turn Metric"):
\u2022 ${My} count as 1 turn per quantum (e.g. M2 counts as 2)
\u2022 ${jy} count as 1 turn per quantum (e.g. R2 counts as 2)
\u2022 rotations (e.g. x) count as 0 turns`,ETM:`ETM ("Execution Turn Metric"):
• all moves (including rotations) count as 1 turn`},Py={OBTM:`OB`,OBQTM:`OBQ`,RBTM:`RB`,RBQTM:`RBQ`,ETM:`E`},Fy=class extends b{constructor(e){super({mode:`open`}),this.options=e}twistyPlayer=null;a=null;#e(){if(this.contentWrapper.textContent=``,this.a){let e=this.contentWrapper.appendChild(document.createElement(`span`));e.textContent=`❗️`,e.title=`Could not show a player for link`,this.addElement(this.a)}this.removeCSS(Oy);let e=this.shadow.adoptedStyleSheets.indexOf(Oy);e!==void 0&&this.shadow.adoptedStyleSheets.splice(e,e+1),this.#t?.remove()}#t;#n;#r;#i;async connectedCallback(){if(this.#r=this.addElement(document.createElement(`div`)),this.#r.classList.add(`responsive-wrapper`),this.options?.colorScheme===`dark`&&this.contentWrapper.classList.add(`dark-mode`),this.addCSS(Oy),this.options?.cdnForumTweaks&&this.addCSS(ky),this.a=this.querySelector(`a`),!this.a)return;let e=Ay(``,this.a.href),t=this.a?.href,{hostname:n,pathname:r}=new URL(t);if(n!==`alpha.twizzle.net`){this.#e();return}if([`/edit/`,`/explore/`].includes(r)){let t=r===`/explore/`;if(e.puzzle&&!(e.puzzle in w)){let t=(await s(async()=>{let{getPuzzleDescriptionString:e}=await import(`./puzzle-geometry-86qNLuhG.js`);return{getPuzzleDescriptionString:e}},__vite__mapDeps([2,3]))).getPuzzleDescriptionString(e.puzzle);delete e.puzzle,e.experimentalPuzzleDescription=t}if(this.twistyPlayer=this.#r.appendChild(new Qv({background:this.options?.cdnForumTweaks?`checkered-transparent`:`checkered`,colorScheme:this.options?.colorScheme===`dark`?`dark`:`light`,...e,viewerLink:t?`experimental-twizzle-explorer`:`auto`})),this.twistyPlayer.fullscreenElement=this.contentWrapper,e.experimentalTitle&&(this.twistyPlayer.experimentalTitle=e.experimentalTitle),this.#n=this.#r.appendChild(document.createElement(`div`)),this.#n.classList.add(`scrollable-region`),e.experimentalTitle&&this.#a(e.experimentalTitle).classList.add(`title`),e.experimentalSetupAlg){this.#a(`Setup`,async()=>(await this.twistyPlayer?.experimentalModel.setupAlg.get())?.alg.toString()??null);let t=this.#n.appendChild(document.createElement(`div`));t.classList.add(`setup-alg`),t.textContent=new B(e.experimentalSetupAlg).toString()}this.#i=this.#a(`Moves`,async()=>(await this.twistyPlayer?.experimentalModel.alg.get())?.alg.toString()??null).appendChild(Iy(this.twistyPlayer.experimentalModel)),this.#i.classList.add(`move-count`),this.#n.appendChild(new Dy({twistyPlayer:this.twistyPlayer})).part.add(`twisty-alg-viewer`)}else this.#e()}#a(e,t){let n=this.#n.appendChild(document.createElement(`div`));n.classList.add(`heading`);let r=n.appendChild(document.createElement(`span`));if(r.textContent=e,t){r.textContent+=` `;let e=r.appendChild(document.createElement(`a`));e.textContent=`📋`,e.href=`#`,e.title=`Copy to clipboard`;async function n(t){e.textContent=t,await new Promise(e=>setTimeout(e,2e3)),e.textContent===t&&(e.textContent=`📋`)}e.addEventListener(`click`,async r=>{r.preventDefault(),e.textContent=`📋…`;let i=await t();if(i)try{await navigator.clipboard.writeText(i),n(`📋✅`)}catch(e){throw n(`📋❌`),e}else n(`📋❌`)})}return n}};l.define(`twizzle-link`,Fy);function Iy(e,t=document.createElement(`span`)){async function n(){let[n,r]=await Promise.all([e.puzzleAlg.get(),e.puzzleLoader.get()]);if(n.issues.errors.length!==0){t.textContent=``;return}let i=!0;function a(e){i?i=!1:t.append(`)(`);let a=t.appendChild(document.createElement(`span`)),o=sg(r,e,n.alg);a.append(`${Py[e]}: `);let s=a.appendChild(document.createElement(`span`));s.textContent=o.toString(),s.classList.add(`move-number`),a.setAttribute(`data-before`,Ny[e]??``),a.setAttribute(`title`,Ny[e]??``)}t.textContent=`(`,r.id===`3x3x3`?(a(`OBTM`),a(`OBQTM`),a(`RBTM`)):r.pg&&(a(`RBTM`),a(`RBQTM`)),a(`ETM`),t.append(`)`)}return e.puzzleAlg.addFreshListener(n),e.puzzleID.addFreshListener(n),t}var Ly=document.querySelector(`.main-container`),Ry=document.querySelector(`nav`),zy=document.querySelector(`.global-cover`),By=document.querySelector(`.settings`).querySelectorAll(`.toggle-btn`),Vy=new AbortController,Hy=null;function Uy(e){e.stopPropagation(),Ry.classList.add(`show`),zy.classList.add(`show`)}async function Wy(){Vy.signal.aborted&&(Vy=new AbortController);let e=Vy.signal;Ly.innerHTML=Hh;let t=Ry.querySelector(`.timer-btn`),n=Ly.querySelector(`.menu-btn.open`),r=Ly.querySelectorAll(`.color-pallete label`),i=Ly.querySelectorAll(`.blank-faces .face`),a=Ly.querySelectorAll(`.blank-faces .chevron`),o=Ly.querySelector(`.solve-btn`),s=Ly.querySelector(`.solutions`),c=Ly.querySelector(`.solution-player`),l=JSON.parse(localStorage.getItem(`settings`)),u=null,d;document.body.classList.add(`disabled`),l||(l={cubeMap:!0,cube:!0,inspection:!0},localStorage.setItem(`settings`,JSON.stringify(l))),setTimeout(()=>{f()},10),By.forEach(t=>{l[t.dataset.type]?t.dataset.state=!0:t.dataset.state=!1,t.addEventListener(`click`,()=>{t.dataset.state===`false`?(t.dataset.state=!0,l[t.dataset.type]=!0):(t.dataset.state=!1,l[t.dataset.type]=!1),localStorage.setItem(`settings`,JSON.stringify(l))},{signal:e})}),t.addEventListener(`click`,e=>{e.stopPropagation();let t=location.pathname.replace(/\/$/,``)||`/`;window.history.pushState({},``,t),window.dispatchEvent(new CustomEvent(`navigate`)),Ry.blur()},{signal:e}),n.addEventListener(`click`,Uy,{signal:e});function f(){document.querySelectorAll(`.load`).forEach(e=>{e.classList.remove(`load`)})}document.querySelector(`header`).addEventListener(`transitionend`,e=>{e.target.nodeName===`HEADER`&&document.body.classList.remove(`disabled`)});function p(e,t,n=!1){dispatchEvent(new CustomEvent(`MSG`,{detail:{target:e,message:t,ASYNC:n}}))}r.forEach(t=>{t.addEventListener(`click`,e=>{e.stopPropagation(),u=t.dataset.color},{signal:e})}),i.forEach(t=>{Array.from(t.children).forEach(n=>{n.classList.contains(`middle`)||n.addEventListener(`click`,e=>{if(e.stopPropagation(),!u){p(`error`,`No selected color`);return}if(n.parentNode.classList.contains(`L`)&&!n.parentNode.classList.contains(`fake`)){let e=Array.from(t.children).indexOf(n);Array.from(i[0].parentNode.children).at(-1).children[e].style.setProperty(`--color`,u)}else if(n.parentNode.classList.contains(`L`)&&n.parentNode.classList.contains(`fake`)){let e=Array.from(t.children).indexOf(n),r=Array.from(i[0].parentNode.children).at(0);r.children[e].style.setProperty(`--color`,u),r.dataset.color=u}n.classList.remove(`change`),n.dataset.color=u,setTimeout(()=>{n.classList.add(`change`),n.style.setProperty(`--color`,u)},10)},{signal:e})})});let m=!1;a.forEach(t=>{t.addEventListener(`click`,()=>{t.classList.contains(`left`)?g(`left`):g(`right`)},{signal:e})});let h=0;document.addEventListener(`keyup`,e=>{if(!s.classList.contains(`show`))switch(e.key){case`ArrowLeft`:g(`left`),Ph.to(a[0],{duration:.15,scale:1,ease:`power1.inOut`});break;case`ArrowRight`:Ph.to(a[1],{duration:.15,scale:1,ease:`power1.inOut`}),g(`right`);break;case`1`:r[0].click();break;case`2`:r[1].click();break;case`3`:r[2].click();break;case`4`:r[3].click();break;case`5`:r[4].click();break;case`6`:r[5].click();break;case`Q`:case`q`:i[h].children[0].click(),Ph.to(i[h].children[0],{duration:.15,ease:`power1.inOut`,scale:1});break;case`W`:case`w`:i[h].children[1].click(),Ph.to(i[h].children[1],{duration:.15,ease:`power1.inOut`,scale:1});break;case`E`:case`e`:i[h].children[2].click(),Ph.to(i[h].children[2],{duration:.15,ease:`power1.inOut`,scale:1});break;case`A`:case`a`:i[h].children[3].click(),Ph.to(i[h].children[3],{duration:.15,ease:`power1.inOut`,scale:1});break;case`D`:case`d`:i[h].children[5].click(),Ph.to(i[h].children[5],{duration:.15,ease:`power1.inOut`,scale:1});break;case`Z`:case`z`:i[h].children[6].click(),Ph.to(i[h].children[6],{duration:.15,ease:`power1.inOut`,scale:1});break;case`X`:case`x`:i[h].children[7].click(),Ph.to(i[h].children[7],{duration:.15,ease:`power1.inOut`,scale:1});break;case`C`:case`c`:i[h].children[8].click(),Ph.to(i[h].children[8],{duration:.15,ease:`power1.inOut`,scale:1});break;case`Enter`:o.click(),Ph.to(o,{duration:.15,ease:`power1.inOut`,translateY:0,boxShadow:`2px 2px 1px 2px #00000040`});break}},{signal:e}),document.addEventListener(`keydown`,e=>{if(!s.classList.contains(`show`))switch(e.key){case`ArrowLeft`:Ph.to(a[0],{duration:.15,scale:1.2,ease:`power1.inOut`});break;case`ArrowRight`:Ph.to(a[1],{duration:.15,scale:1.2,ease:`power1.inOut`});break;case`Q`:case`q`:Ph.to(i[h].children[0],{duration:.15,ease:`power1.inOut`,scale:.95});break;case`W`:case`w`:Ph.to(i[h].children[1],{duration:.15,ease:`power1.inOut`,scale:.95});break;case`E`:case`e`:Ph.to(i[h].children[2],{duration:.15,ease:`power1.inOut`,scale:.95});break;case`A`:case`a`:Ph.to(i[h].children[3],{duration:.15,ease:`power1.inOut`,scale:.95});break;case`D`:case`d`:Ph.to(i[h].children[5],{duration:.15,ease:`power1.inOut`,scale:.95});break;case`Z`:case`z`:Ph.to(i[h].children[6],{duration:.15,ease:`power1.inOut`,scale:.95});break;case`X`:case`x`:Ph.to(i[h].children[7],{duration:.15,ease:`power1.inOut`,scale:.95});break;case`C`:case`c`:Ph.to(i[h].children[8],{duration:.15,ease:`power1.inOut`,scale:.95});break;case`Enter`:Ph.to(o,{duration:.15,ease:`power1.inOut`,translateY:2,boxShadow:`2px 2px #00000040`});break}},{signal:e});function g(e){if(m)return;m=!0;let t=i[0].parentNode,n=i[0].clientWidth;e===`left`?t.scrollLeft===0?(t.scrollTo({left:n*6}),t.scrollTo({left:t.scrollLeft-n,behavior:`smooth`})):t.scrollTo({left:Math.max(0,t.scrollLeft-n),behavior:`smooth`}):t.scrollLeft>=n*6?(t.scrollTo({left:0}),t.scrollTo({left:t.scrollLeft+n,behavior:`smooth`})):t.scrollTo({left:Math.min(n*6,t.scrollLeft+n),behavior:`smooth`}),setTimeout(()=>{m=!1},250)}i[0].parentNode.addEventListener(`scroll`,e=>{let t=e.target,n=Math.round(e.target.scrollLeft),r=Math.round(i[0].getBoundingClientRect().width);t.classList.remove(`change`);let a=Math.round(n/r);h=a,a===0||a>=6?t.style.cssText=`
                --top: #ffffff80;
                --bottom: #ffff0080;
                --left: #0066ff80;
                --right: #00800080;
                `:a===1?t.style.cssText=`
                --top: #ffffff80;
                --bottom: #ffff0080;
                --left: #ffa50080;
                --right: #ff002b80;
                `:a===2?t.style.cssText=`
                --top: #ffffff80;
                --bottom: #ffff0080;
                --left: #00800080;
                --right: #0066ff80;
                `:a===3?t.style.cssText=`
                --top: #ffffff80;
                --bottom: #ffff0080;
                --left: #ff002b80;
                --right: #ffa50080;
                `:a===4?t.style.cssText=`
                --top: #0066ff80;
                --bottom: #00800080;
                --left: #ffa50080;
                --right: #ff002b80;
                `:a===5&&(t.style.cssText=`
                --top: #00800080;
                --bottom: #0066ff80;
                --left: #ffa50080;
                --right: #ff002b80;
                `),setTimeout(()=>{t.classList.add(`change`)},5)},{signal:e});function _(){zy.classList.add(`show`),s.classList.add(`show`)}function v(){c.classList.contains(`show`)||(s.classList.remove(`show`),zy.classList.remove(`show`))}s.addEventListener(`transitionend`,e=>{e.target.classList.contains(`show`)&&s.focus()},{signal:e}),s.addEventListener(`blur`,e=>{s.contains(e.relatedTarget)||e.target.classList.contains(`show`)&&v()},{signal:e}),s.addEventListener(`keyup`,e=>{e.key===`Escape`&&s.blur()},{signal:e}),s.querySelector(`.x`).addEventListener(`click`,()=>{s.blur()},{signal:e});let y,b=!1,x,S;o.addEventListener(`click`,e=>{e.stopPropagation();let t=s.querySelector(`.wrapper`),n=s.querySelector(`.loading`),r=n.querySelector(`span`);_();let a=[`U`,`R`,`F`,`D`,`L`,`B`],o=0,c=!1;if(i.forEach(e=>{if(e.classList.contains(`fake`))return;let t=[];Array.from(e.children).forEach(e=>{let n=e.dataset.color;if(!n){o++,c=!0;return}let r={yellow:`D`,white:`U`,orange:`L`,green:`F`,"#ff002bff":`R`,"#0066ffff":`B`};r[n]===`U`&&t.push(r[n]),r[n]===`D`&&t.push(r[n]),r[n]===`L`&&t.push(r[n]),r[n]===`R`&&t.push(r[n]),r[n]===`F`&&t.push(r[n]),r[n]===`B`&&t.push(r[n])}),a[a.indexOf(e.classList[1])]=t.join(``)}),c){p(`error`,`Incomplete State: ${o} stickers are currently unassigned`),v();return}Hy&&C();let l=a.join(``);if(y===l){b&&(p(x,S),v());return}y=l,r.innerText=`Searching . . . `,n.dataset.type=`searching`,t.innerHTML=``,Hy=new Uh,Hy.postMessage(y),Hy.onmessage=e=>{let{type:i,moves:a,length:o}=e.data;if(o===0){b=!0,S=`Already solved`,x=`noerror`,p(`noerror`,S),C(),v();return}if(i===`error`)if(t.children.length!==0){n.dataset.type=`finished`,r.innerText=`Shortest possible moves reached`,C();return}else{b=!0,S=`Invalid State: Please check the stickers`,x=`error`,p(`error`,S),C(),v();return}if(i===`finished`){n.dataset.type=`finished`,r.innerText=`Shortest possible moves reached`,C();return}w(a,o)}},{signal:e});function C(){Hy&&=(Hy.terminate(),null)}function w(t,n){let r=s.querySelector(`.wrapper`),i=document.createElement(`div`);i.innerHTML=`${n} moves`,i.addEventListener(`click`,async e=>{e.stopPropagation(),T(),c.querySelector(`.solved-moves`).innerText=t,d=new Qv({puzzle:`3x3x3`,alg:t,experimentalSetupAnchor:`end`,background:`none`,backView:`top-right`,viewerLink:`none`}),d.tabIndex=-1,setTimeout(()=>{c.appendChild(d)},250)},{signal:e}),r.appendChild(i)}c.addEventListener(`transitionend`,e=>{e.target.classList.contains(`solution-player`)&&e.target.classList.contains(`show`)&&c.focus()},{signal:e}),c.addEventListener(`keyup`,e=>{e.key===`Escape`&&E()},{signal:e}),c.querySelector(`.x`).addEventListener(`click`,()=>{E()});function T(){c.classList.add(`show`)}function E(){s.focus(),c.classList.remove(`show`),d&&=(c.removeChild(d),null)}document.addEventListener(`click`,e=>{!c.contains(e.target)&&c.classList.contains(`show`)&&E()})}function Gy(){Vy.abort(),Hy&&Hy.terminate()}var Ky=document.querySelector(`nav`),qy=document.querySelector(`.settings`),Jy=document.querySelector(`.global-cover`),Yy=document.querySelector(`.settings-btn`),Xy=Ky.querySelector(`.solver-btn`),Zy=Ky.querySelector(`.timer-btn`),Qy=document.querySelector(`.CubeX`),$y=document.querySelector(`.loader .info`),eb=Ky.querySelector(`.menu-btn`);n.isNativePlatform()||window.env?.isElectron,JSON.parse(localStorage.getItem(`settings`)),window.visualViewport.addEventListener(`resize`,e=>{document.body.style.height=e.target.height+`px`}),window.env?.isElectron?document.querySelector(`.titlebar`).style.display=`flex`:document.querySelector(`.titlebar`).remove();function tb(){Ky.classList.remove(`show`),Jy.classList.remove(`show`)}Ky.addEventListener(`blur`,e=>{e.target.classList.contains(`show`)&&(e.relatedTarget===null?tb():e.relatedTarget.classList.contains(`settings`)&&Ky.classList.remove(`show`))}),Ky.addEventListener(`transitionend`,e=>{e.target.tagName===`NAV`&&e.target.classList.contains(`show`)&&Ky.focus()}),eb.addEventListener(`click`,()=>{Ky.blur()}),Ky.addEventListener(`keyup`,e=>{e.key===`Escape`&&tb()}),qy.addEventListener(`blur`,rb),qy.addEventListener(`keyup`,e=>{e.key===`Escape`&&rb()});function nb(){qy.classList.add(`show`)}Yy.addEventListener(`click`,nb),qy.querySelector(`.settings-x`).addEventListener(`click`,()=>{qy.blur()}),qy.addEventListener(`transitionend`,e=>{e.target.classList.contains(`settings`)&&e.target.classList.contains(`show`)&&qy.focus()});function rb(){qy.classList.remove(`show`),Jy.classList.remove(`show`)}window.addEventListener(`MSG`,e=>{e=e.detail,e.target===`error`?ab(e.message):cb(e.message,e?.ASYNC)});var ib=null;function ab(e){let t=document.querySelector(`.err-msg`);t?(t.innerHTML=e,t.classList.add(`show`)):(t=document.createElement(`div`),t.classList.add(`err-msg`),t.innerHTML=e,document.body.appendChild(t),setTimeout(()=>{t.classList.add(`show`)},50)),t.classList.contains(`show`)&&(t.classList.remove(`shake`),setTimeout(()=>{t.classList.add(`shake`)},50)),ib&&clearTimeout(ib),ib=setTimeout(()=>{t.classList.remove(`show`),t.addEventListener(`transitionend`,e=>{e.target.classList.contains(`show`)||document.body.removeChild(t)})},5e3)}var ob=null,sb=null;async function cb(e,t=!1){return new Promise(n=>{let r=document.querySelector(`.message`);r?(r.innerText=e,r.classList.add(`show`)):(r=document.createElement(`div`),r.className=`message`,r.innerText=e,document.body.appendChild(r),setTimeout(()=>{r.classList.add(`show`)},50)),ob&&clearTimeout(ob),ob=setTimeout(()=>{r.classList.remove(`show`),r.addEventListener(`transitionend`,e=>{e.target.classList.contains(`show`)||r.remove()})},5e3),t&&(clearTimeout(sb),sb=setTimeout(n,2500))})}window.addEventListener(`DOMContentLoaded`,async()=>{Qy.parentNode.classList.remove(`done`);let e=Qy.animate([{strokeDashoffset:35},{strokeDashoffset:0}],{duration:6e4,fill:`forwards`,easing:`linear`}),t=location.pathname,n=location.hash;await lb(t+n),e.playbackRate=50,$y.innerHTML=`Ready to solve`,await e.finished,Qy.parentNode.classList.add(`done`)});async function lb(e){e===`${location.pathname.replace(/\/$/,``)}/#solver`?(Vh(),Zy.classList.remove(`active`),Xy.classList.add(`active`),await Wy()):(Gy(),Xy.classList.remove(`active`),Zy.classList.add(`active`),await Bh())}window.addEventListener(`popstate`,()=>{let e=location.pathname,t=location.hash;lb(e+t)}),window.addEventListener(`navigate`,()=>{let e=location.pathname,t=location.hash;lb(e+t)});