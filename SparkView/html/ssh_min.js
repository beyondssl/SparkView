var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.checkStringArgs=function(h,p,m){if(null==h)throw new TypeError("The 'this' value for String.prototype."+m+" must not be null or undefined");if(p instanceof RegExp)throw new TypeError("First argument to String.prototype."+m+" must not be a regular expression");return h+""};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;
$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(h,p,m){if(h==Array.prototype||h==Object.prototype)return h;h[p]=m.value;return h};
$jscomp.getGlobal=function(h){h=["object"==typeof globalThis&&globalThis,h,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var p=0;p<h.length;++p){var m=h[p];if(m&&m.Math==Math)return m}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};
$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(h,p){var m=$jscomp.propertyToPolyfillSymbol[p];if(null==m)return h[p];m=h[m];return void 0!==m?m:h[p]};$jscomp.polyfill=function(h,p,m,u){p&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(h,p,m,u):$jscomp.polyfillUnisolated(h,p,m,u))};
$jscomp.polyfillUnisolated=function(h,p,m,u){m=$jscomp.global;h=h.split(".");for(u=0;u<h.length-1;u++){var v=h[u];if(!(v in m))return;m=m[v]}h=h[h.length-1];u=m[h];p=p(u);p!=u&&null!=p&&$jscomp.defineProperty(m,h,{configurable:!0,writable:!0,value:p})};
$jscomp.polyfillIsolated=function(h,p,m,u){var v=h.split(".");h=1===v.length;u=v[0];u=!h&&u in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var aa=0;aa<v.length-1;aa++){var W=v[aa];if(!(W in u))return;u=u[W]}v=v[v.length-1];m=$jscomp.IS_SYMBOL_NATIVE&&"es6"===m?u[v]:null;p=p(m);null!=p&&(h?$jscomp.defineProperty($jscomp.polyfills,v,{configurable:!0,writable:!0,value:p}):p!==m&&($jscomp.propertyToPolyfillSymbol[v]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(v):$jscomp.POLYFILL_PREFIX+
v,v=$jscomp.propertyToPolyfillSymbol[v],$jscomp.defineProperty(u,v,{configurable:!0,writable:!0,value:p})))};$jscomp.polyfill("String.prototype.startsWith",function(h){return h?h:function(p,m){var u=$jscomp.checkStringArgs(this,p,"startsWith");p+="";var v=u.length,aa=p.length;m=Math.max(0,Math.min(m|0,u.length));for(var W=0;W<aa&&m<v;)if(u[m++]!=p[W++])return!1;return W>=aa}},"es6","es3");
$jscomp.polyfill("String.fromCodePoint",function(h){return h?h:function(p){for(var m="",u=0;u<arguments.length;u++){var v=Number(arguments[u]);if(0>v||1114111<v||v!==Math.floor(v))throw new RangeError("invalid_code_point "+v);65535>=v?m+=String.fromCharCode(v):(v-=65536,m+=String.fromCharCode(v>>>10&1023|55296),m+=String.fromCharCode(v&1023|56320))}return m}},"es6","es3");
$jscomp.polyfill("Array.prototype.fill",function(h){return h?h:function(p,m,u){var v=this.length||0;0>m&&(m=Math.max(0,v+m));if(null==u||u>v)u=v;u=Number(u);0>u&&(u=Math.max(0,v+u));for(m=Number(m||0);m<u;m++)this[m]=p;return this}},"es6","es3");$jscomp.typedArrayFill=function(h){return h?h:Array.prototype.fill};$jscomp.polyfill("Int8Array.prototype.fill",$jscomp.typedArrayFill,"es6","es5");$jscomp.polyfill("Uint8Array.prototype.fill",$jscomp.typedArrayFill,"es6","es5");
$jscomp.polyfill("Uint8ClampedArray.prototype.fill",$jscomp.typedArrayFill,"es6","es5");$jscomp.polyfill("Int16Array.prototype.fill",$jscomp.typedArrayFill,"es6","es5");$jscomp.polyfill("Uint16Array.prototype.fill",$jscomp.typedArrayFill,"es6","es5");$jscomp.polyfill("Int32Array.prototype.fill",$jscomp.typedArrayFill,"es6","es5");$jscomp.polyfill("Uint32Array.prototype.fill",$jscomp.typedArrayFill,"es6","es5");$jscomp.polyfill("Float32Array.prototype.fill",$jscomp.typedArrayFill,"es6","es5");
$jscomp.polyfill("Float64Array.prototype.fill",$jscomp.typedArrayFill,"es6","es5");$jscomp.polyfill("String.prototype.trimRight",function(h){function p(){return this.replace(/[\s\xa0]+$/,"")}return h||p},"es_2019","es3");var svManager={getInstance:function(){var h=window.$ssh;return h&&h.running&&h.running()?h:null}};
function connvertServer(h){var p={};p.id=h.id;p.server=h.id;p.displayName=h.displayName||h.id;if(h=h.ssh){for(var m in h)p[m]=h[m];p.user=h.username||"";p.pwd=h.password||""}return p}
svGlobal.SSH=function(h,p,m,u){function v(a){return"on"==a||"true"==a||1==a}function aa(a){k.loadbalanceToken||(B.randomAppId&&(a=hi5.tool.uuid()),k.loadbalanceToken=B.loadbalanceTokenName?B.loadbalanceTokenName+"="+a:"")}function W(){var a=h.indexOf("://"),b=h.substring(a+3);a=b.indexOf("/");0<a&&(b=b.substring(0,a));return location.protocol+"//"+b}function pb(a){if(!za)return"";var b=W(),e=Aa.clipboard,d=e.indexOf("://");b=(0<d&&11>d?e:b+e)+"s="+za+"&t="+Date.now()+"&type="+a;return hi5.browser.httpGet(k.modifyURL(b),
!1)}function Ka(a,b){b&&(ba=b);a&&(T=a,Ba=(T-1)*n);Ra=1==ba&&T==Math.floor(m/n)}function Ca(a,b,e,d){var c=a,t=b;d=d||Math.floor(t/n);b=e||Math.floor(c/A);a=null;e&&(c=M*A,t=P*n);F&&(a=q.getImageData(0,0,Math.min(b*A,L),Math.min(d*n,P*n)));p=c;m=t;e=p;c=m;C.setSize(e,c);X.width=e;X.height=c;q.textBaseline="top";e=r.fontFamily||r.fontName||"Courier New";0<e.indexOf(" ")&&(e="'"+e+"'");q.font=r.fontSize+"px "+e;Da();a&&(q.putImageData(a,0,0),ca());P=d;M=b;L=M*A;Ka(Math.floor(m/n));D?D.resize(M,P):D=
new Sa(M,P);if(k.onresolutionchange)k.onresolutionchange(p,m)}function La(a){y.send(a)}function Ea(){return r.displayName||r.server||r.symlink||r.id||"undefined"}function Ta(a){k.setTitle&&(document.title=a)}function Ua(a,b,e){this.need=a;this.handler=b;this.repeat=e||1}function qb(a){Y=new RecordingManager;Y.setHeader({name:"rec",width:a.width,height:a.height,color:a.fontSize,namesuffix:".sshv",filetag:"SSHV",duration:0})}function rb(a,b){var e=0,d=!1;this.width=a;this.interval=b;var c=0;this.start=
function(){d||(d=!0,e=setInterval(function(){if(C&&F){var t=C.getThumbnail(a);t&&t.length!=c&&(y.send("8E7"+t),c=t.length)}},b))};this.stop=function(){clearInterval(e)}}function sb(a,b){!V||V.width==a&&V.interval==b||(V.stop(),V=null);V||(V=new rb(a,b));V.start()}function tb(a){F&&y.send("5D"+a.join("\t"));G=null}function Va(){if(G){var a=G.answer.length;a<G.prompt.length?(da(G.prompt[a]),ca(),oa()):(y.send("5D"+G.answer.join("\t")),G=null)}}function ub(a){F&&y.send("5B"+a)}function vb(a){var b=parseInt(a.substring(0,
1),16),e=a.substring(1);a=!1;var d=k.sessionInfo.appInfo;switch(b){case 1:var c=JSON.parse(e);k.onsessionjoin&&(a=k.onsessionjoin(c));if(a)break;k.showMessage(__svi18n.info.joinsession.applyArgs([c.numericId,c.__ip,c.name]));break;case 2:c=JSON.parse(e);k.onsessionexit&&(a=k.onsessionexit(c));if(a)break;k.showMessage(__svi18n.info.exitsession.applyArgs([c.numericId,c.__ip,c.name]));break;case 3:c=JSON.parse(e);d.joinMode!=c.mode&&(d.joinMode=c.mode,b=hi5.$("joinSelect"))&&(b.value=c.mode);if(d.hasControl)break;
C.setReadOnly(!1);if(b=hi5.$("requestControl"))b.disabled=!0;k.ongivecontrol&&(a=k.ongivecontrol());if(a)break;k.showMessage(__svi18n.info.givecontrol);break;case 4:C.setReadOnly(!0);d.hasControl=!1;if(b=hi5.$("requestControl"))b.disabled=!1;k.ontakebackcontrol&&(a=k.ontakebackcontrol());if(a)break;k.showMessage(__svi18n.info.nocontrol);break;case 5:c=JSON.parse(e);k.onrequirecontrol&&(a=k.onrequirecontrol(c));if(a)break;a=__svi18n.info.title.applyArgs([c.name,c.numericId,c.__ip]);k.showMessage({title:a,
msg:__svi18n.info.recontrol,cbYes:function(){k.giveControl(c.numericId);this.destroy()},cbNo:function(){k.refuseControl(c.numericId);this.destroy()}});break;case 6:C.setTouchRemoting(!0);break;case 7:c=JSON.parse(e);c.width&&c.height&&Ca(0,0,c.cols,c.rows);break;case 8:c=JSON.parse(e);if(k.onrequestcredential&&k.onrequestcredential(c))break;C.requestCredential(c);break;case 9:c=JSON.parse(e);0<c.interval&&0<c.width?sb(c.width,c.interval):V&&(V.stop(),V=null);break;case 11:c=JSON.parse(e);k.onrequirejoin&&
(a=k.onrequirejoin(c));if(a)break;a=__svi18n.info.title.applyArgs([c.name,c.numericId,c.__ip]);k.showMessage({title:a,msg:__svi18n.info.reqjoin,cbYes:function(){k.allowJoin(c.numericId,!0);this.destroy()},cbNo:function(){k.allowJoin(c.numericId,!1);this.destroy()}});break;case 12:Wa=!0}}function wb(a){var b=B.page&&B.page.join||"";if(b.startsWith("http://")||b.startsWith("https://"))return b;if(b.startsWith("/"))return location.origin+b;var e=location.href,d=e.lastIndexOf("/");if(b)return e.substring(0,
d+1)+b;b=W();e.toLowerCase().startsWith(b.toLowerCase())&&(b=e.substring(0,d));return b+"/"+a}function pa(a){ta.style.display=a?"none":"block"}function xb(a){svGlobal.logger.info("opened...");F=!0;y.send("87"+navigator.userAgent);if(k.onopen)k.onopen()}function yb(a){svGlobal.logger.warn(a)}function Fa(a){svGlobal.logger.warn("closed ...");pa(!0);if(!F&&((a=__svi18n.errorCode.connection)||(a="error connection"),k)){if(k.onerror)k.onerror({name:"connection",message:a});k.showMessage(a);0<svGlobal.log&&
console.error(a)}ua=F=!1;if(k&&k.onclose)k.onclose(Wa);try{null!=Y&&(Y.exit(),Y=null),C&&C.close()}catch(b){}na&&(na.release(),na=null);X=q=null;y&&(y.onopen=null,y.onmessage=null,y.onclose=null,y=y.onerror=null);C=Q=null;k&&(k=null);window&&window.$ssh&&(window.$ssh=null);null!=Y&&(Y.exit(),Y=null)}function Xa(){10>r.fontSize&&(r.fontSize=10);13>r.fontSize?n=r.fontSize+6:12<r.fontSize&&19>r.fontSize?n=r.fontSize+8:18<r.fontSize&&25>r.fontSize?n=r.fontSize+12:24<r.fontSize&&(n=r.fontSize+16);r.lineHeight&&
(n=parseInt(r.lineHeight));Ya=(n-r.fontSize)/2|0;q.textBaseline="top";var a=r.fontFamily||"Courier New";0<a.indexOf(" ")&&(a="'"+a+"'");q.font=r.fontSize+"px "+a;A=q.measureText("X").width;P=parseInt(m/n);M=parseInt(p/A);L=M*A;Ka(parseInt(m/n));D?D.resize(M,P):D=new Sa(M,P)}function Ma(){Da();z=w=0;Xa();ta.style.width=A+"px";ta.style.height=n+"px";ua=!0}function ca(){Za||$a.drawImage(X,0,0)}function ab(a){switch(a){case 0:break;case 5:break;case 7:break;case 8:Na();break;case 9:a=w/A/8;a=parseInt(a)+
1;w=8*a*A;qa();break;case 10:z+=n;qa(!0);break;case 11:z+=n;qa(void 0);break;case 12:break;case 13:bb();break;case 14:break;case 15:break;default:console.log("Unknown C0 control:"+a)}}function zb(a){var b=a.getPosition();if(!N.parse(a))return a.setPosition(b-2),!1;a=N.count;b=N.parameters;switch(N.command){case 64:0==a&&(b[0]=1);a=b[0];b="";for(var e=a*A,d=q.getImageData(w,z,L-w-e,n),c=0;c<a;c++)b+=" ";da(b);w-=e;q.putImageData(d,w+e,z);D.insertSpace(a,R(),O());break;case 65:0==a&&(b[0]=1);z-=(b[0]||
1)*n;break;case 66:0==a&&(b[0]=1);z+=(b[0]||1)*n;break;case 67:0==a&&(b[0]=1);w+=(b[0]||1)*A;break;case 68:0==a&&(b[0]=1);w-=(b[0]||1)*A;break;case 69:0==a&&(b[0]=1);z+=b[0]*n;w=0;break;case 70:0==a&&(b[0]=1);z-=b[0]*n;w=0;break;case 71:0==a&&(b[0]=1);Ga(0,b[0]);break;case 72:case 102:0==a&&(b[0]=b[1]=1);Ga(b[0]||1,b[1]||1);break;case 74:a||(b[0]=0);switch(b[0]){case 0:q.fillStyle=K;q.fillRect(w,z,L-w,P*n-z);q.fillStyle=I;D.clearEOS(R(),O());break;case 1:q.fillStyle=K;q.fillRect(0,0,w,z);q.fillStyle=
I;D.clearBOS(R(),O());break;case 2:Da();z=w=0;D.cleanScreen();break;case 3:Da();z=w=0;D.cleanScreen();break;default:console.log("invalid CSI J:"+b[0])}break;case 75:a||(b[0]=0);switch(b[0]){case 0:cb();break;case 1:q.fillStyle=K;q.fillRect(0,z,w,n);q.fillStyle=I;D.clearBOL(R(),O());break;case 2:q.fillStyle=K;q.fillRect(0,z,L,n);q.fillStyle=I;D.clearLine(O());break;default:console.log("invalid CSI K:"+b[0])}break;case 76:case 84:a||(b[0]=1);db(b[0],76==N.command);break;case 77:case 83:a||(b[0]=1);
eb(b[0],77==N.command);break;case 80:a||(b[0]=1);a=b[0];b=w+a*A;b=q.getImageData(b,z,L-b,n);cb();q.putImageData(b,w,z);D.deleteChars(R(),O(),a);break;case 88:a||(b[0]=1);a=b[0];q.fillStyle=K;q.fillRect(w,z,a*A,n);q.fillStyle=I;D.eraseChars(R(),O(),a);break;case 90:a||(b[0]=1);w=8*((w/A/8|0)-b[0]+1)*A;qa();break;case 100:a||(b[0]=1);Ga(b[0]);break;case 101:a||(b[0]=1);Ga(O()+b[0]);break;case 104:if(63==N.mode)switch(b[0]){case 1:ea.setEscMode(1);break;case 5:console.log("Reversal screen mode");break;
case 6:console.log("Relative origion mode");break;case 7:console.log("wraparound mode on");va=!0;break;case 25:pa(!1);break;case 45:console.log("reverse-wraparound mode on");break;case 1E3:case 1001:case 1002:case 1003:case 1005:case 1006:U=b[0];console.log("mouse tracking on:"+U);break;default:console.log("TODO: CSI ? Pm h, Ps:"+b[0])}break;case 108:if(63==N.mode)switch(b[0]){case 1:ea.setEscMode(0);break;case 2:ea.setEscMode(2);case 5:console.log("screen mode: "+N.toString());break;case 6:console.log("Absolute origion mode: "+
N.toString());break;case 7:va=!1;break;case 12:break;case 25:pa(!0);break;case 45:console.log("reverse-wraparound mode off");break;case 1E3:case 1001:case 1002:case 1003:case 1005:case 1006:U=0;break;default:console.log("TODO: CSI ? Pm l, Ps:"+b[0])}break;case 109:0==a&&(a=1,b[0]=0);for(e=0;e<a;e++)switch(b[e]){case 0:wa(7);xa(0);Oa(!1);break;case 1:Oa(!0);break;case 2:break;case 4:break;case 5:case 8:break;case 7:wa(0);xa(7);break;case 27:wa(7);xa(0);break;case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:wa(b[e]-
30);break;case 38:return 2==b[e+1]&&(I="rgb("+b[e+2]+","+b[e+3]+","+b[e+4]+")",q.fillStyle=I),!0;case 39:wa(7);break;case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:xa(b[e]-40);break;case 48:return 2==b[e+1]&&(K="rgb("+b[e+2]+","+b[e+3]+","+b[e+4]+")"),!0;case 49:xa(0);1==e&&39==b[0]&&Oa(!1);break;default:return console.log("TODO: SGR="+N.toString()),!0}break;case 110:6==b[0]?63==N.mode?J("\u001b[?"+O()+";"+R()+"R"):J("\u001b["+O()+";"+R()+"R"):5==b[0]&&J("\u001b[0n");break;case 114:N.mode||
Ka(b[1],b[0]);break;default:console.log("TODO: CSI="+N.toString())}return!0}function db(a,b){a||(a=1);b=b?z/n+1:ba;var e=(b-1)*n;if(T!=b){var d=q.getImageData(0,e,L,(T-b-a+1)*n);q.fillStyle=K;q.fillRect(0,e,L,n*a);q.putImageData(d,0,(b+a-1)*n);q.fillStyle=I;D.scrollUp(a,b,T)}}function eb(a,b){a||(a=1);b=b?z/n+1:ba;var e=(b-1)*n,d=T*n,c=a*n,t=e+c;d!=t&&(t=q.getImageData(0,t,L,d-t),q.fillStyle=K,q.fillRect(0,d-c,L,c),q.fillStyle=I,q.putImageData(t,0,e),D.scrollDown(a,b,T))}function qa(a){va&&w>=L&&
(w=0,z+=n);if((va||a)&&z>Ba){for(;z>Ba;)z-=n;Ra?(q.drawImage(X,0,-n),q.fillStyle=K,q.fillRect(0,Ba,p,n),D.appendLines(1)):(a=q.getImageData(0,(ba-0)*n,L,(T-ba)*n),q.fillStyle=K,q.fillRect(0,(ba-1)*n,L,(T-ba+1)*n),q.putImageData(a,0,(ba-1)*n));q.fillStyle=I}}function Na(){w-=A;0>w&&(w=0)}function O(){return parseInt(z/n)+1}function R(){return parseInt(w/A)+1}function Ga(a,b){b&&(w=(b-1)*A,0>w&&(w=0));a&&(z=(a-1)*n)}function xa(a){K=Ha[a];K||(K=r.bgColor||"black",console.log("xx colorIndex:"+a))}function wa(a){fb=
a;I=ya[a];I||(I=r.fgColor||"white",console.log("xx colorIndex:"+a));q.fillStyle=I}function Oa(a){ya=a?gb:Ha;I=ya[fb]}function cb(){q.fillStyle=K;q.fillRect(w,z,L-w,n);q.fillStyle=I;D.clearEOL(R(),O())}function Da(){q.fillStyle=K;q.fillRect(0,0,X.width,X.height);q.fillStyle=I}function oa(){ta.style.top=z+"px";ta.style.left=w+"px"}function da(a){S.on&&(a.startsWith(S.prompt)?(S.on=!1,setTimeout(S.process,30)):S.text+=a);var b=a.length,e=(w/A|0)+b-M;0<e?(b-=e,hb(a.substring(0,b),b),qa(),da(a.substring(b))):
hb(a,b)}function hb(a,b){a&&(D.writeText(R(),O(),a),b*=A,q.fillStyle=K,q.fillRect(Math.floor(w),z,Math.ceil(b),n),q.fillStyle=I,q.fillText(a,w,z+Ya),w+=b)}function ib(a){fa+=a;ka?(da(a),ca(),oa()):G&&G.echo[G.answer.length]&&(da(a),ca(),oa())}function bb(){w=0;z>(T-1)*n&&(z=(T-1)*n)}function Ab(a){if(F)return(a=a.getData("text/plain"))?(a=a.replace(/\r\n/g,"\n"),ka||G?ib(a):J(a),!0):!1}function jb(){if(Z){var a=!!Z.value;Z.value=D.toString();a||(a=new hi5.ui.Lightbox(document.getElementById("copydialog")),
a.show(),C&&C.setIgnorePaste(!1),a.onclose=function(){Z.value=""});setTimeout(function(){Z.scrollTop=Z.scrollHeight},10)}}function kb(a){v(r.mapDisk)&&(H||(H=new hi5.file.UploadManager(new hi5.file.WsFileService(La),!1),H.enabled=!0,H.canCopyFile=!1,H.addEvent("beforeupload",function(b,e,d){k.beforeupload&&k.beforeupload(b,e,d)}),H.addEvent("fileuploaded",function(b,e,d){if(k.onfileuploaded)k.onfileuploaded(b,e,d)}),H.addEvent("uploaded",function(b,e){if(k.onuploaded)k.onuploaded(b,e)}),H.addEvent("uploadingCancelled",
function(){if(k.onuploadingCancelled)k.onuploadingCancelled()})),a.setFileHandler(H))}function J(a){if(a){a=unescape(encodeURIComponent(a));var b=a.length+1,e=new Uint8Array(b);e[0]=147;for(var d=1;d<b;d++)e[d]=a.charCodeAt(d-1);y.send(e.buffer)}}function Sa(a,b){function e(){var f=Array(a);hi5.Arrays.fill(f,0,a," ");return f}var d=0,c=[],t=10*b;this.resize=function(f,g,l){l=0;for(var x=c.length;l<x;l++)if(c[l]&&(c[l].length=f,f>a))for(var E=a;E<f;E++)c[l][E]=" ";a=f;b=g;t=10*b};this.writeText=function(f,
g,l){g--;f--;var x=c[d+g];x||(x=e(),c[d+g]=x);g=0;for(var E=l.length;g<E;g++)x[g+f]=l[g]};this.appendLines=function(f){d+=f};this.scrollDown=function(f,g,l){l=d+l-1-f;for(g=d+g-1;g<=l;g++)c[g]=c[g+f];l++;for(g=0;g<f;g++)c[l+g]=e()};this.scrollUp=function(f,g,l){g=d+g-1+f;for(l=d+l-1;l>=g;l--)c[l]=c[l-f];g--;for(l=0;l<f;l++)c[g-l]=e()};this.cleanScreen=function(){d=c.length;if(d>=t){var f=2*b;c.splice(0,f);d-=f}};this.clearEOS=function(f,g){g--;f--;for(var l=d+g,x,E=0,ha=b-g;E<ha;E++)if(x=c[l+E])for(g=
f;g<a;g++)x[g]=" "};this.clearBOS=function(f,g){g--;f--;for(var l=d,x,E,ha=0;ha<g;ha++)if(E=c[l+ha])for(x=0;x<f;x++)E[x]=" "};this.clearLine=function(f){f--;(f=c[d+f])&&hi5.Arrays.fill(f,0,a," ")};this.clearBOL=function(f,g){g--;f--;if(g=c[d+g])for(var l=0;l<f;l++)g[l]=" "};this.clearEOL=function(f,g){g--;f--;if(g=c[d+g])for(;f<a;f++)g[f]=" "};this.eraseChars=function(f,g,l){g--;f--;if(g=c[d+g]){var x=f;for(f+=l;x<f;x++)g[x]=" "}};this.deleteChars=function(f,g,l){g--;f--;(g=c[d+g])&&g.splice(f,l)};
this.insertSpace=function(f,g,l){l--;g--;if(l=c[d+l]){for(var x=l.length-1;x>=g;x--)l[x+f]=l[x];for(x=0;x<f;x++)l[g+x]=" "}};this.getSingleLine=function(f,g,l){f--;g--;l--;var x="";if(f=c[d+f])for(;g<l;g++)x+=f[g];return x.trimRight()};this.getMultiLines=function(f,g,l,x){if(x<g)return this.getMultiLines(l,x,f,g);var E=x-g+1;if(1>E)return null;if(1==E)return this.getSingleLine(g,f,l);f=this.getSingleLine(g,f,a);l=this.getSingleLine(x,1,l);E-=2;g+=d;for(var ha=0;ha<E;ha++)f=(x=c[ha+g])?f+("\r\n"+x.join("").trimRight()):
f+"\r\n\r\n";return f+"\r\n"+l};this.toString=function(){for(var f="",g=0,l=c.length;g<l;g++)c[g]&&(f+=c[g].join("").trimRight()),f+="\r\n";return f}}var ia=0,ja=null,Wa=!1;this.displayMsg=!0;this.reconnectTimes=0;this.setTitle=this.openLink=!0;this.mode=0;this.reconnectOnResize=!0;var k=this;this.getHistory=function(){return D.toString()};hi5.appcfg||(hi5.appcfg={img:{},toolbar:{fadable:!0},displayMsg:!0});var B=hi5.appcfg,S={on:!1,text:"",prompt:"",cmd:"",process:function(){var a=S.cmd.indexOf(" "),
b=S.cmd.substring(a+1);a=b.lastIndexOf(".");var e="";if(-1!=a)switch(b.substring(a+1).toLowerCase()){case "jpe":case "jpg":case "jpeg":e="image/jpeg";break;case "gif":e="image/gif";break;case "bmp":e="image/bmp";break;case "svg":e="image/svg+xml";break;case "png":e="image/png";break;case "webp":e="image/webp";break;case "ico":e="image/x-icon"}a="data:"+(e||"application/octet-stream")+";base64,"+S.text;S.text="";k.showMessage(e?{msg:'<img src="'+a+'" style="max-width:100%"/>'}:{msg:'<a download="'+
b+'" href="'+a+'" target="_blank">'+b+"</a>"})}};void 0!=B.reconnectOnResize&&(this.reconnectOnResize=B.reconnectOnResize);var Pa="object"==typeof h?h:null,lb="object"==typeof h||0<h.indexOf("/PLAY?");lb?(this.mode=1,Pa&&(h=""),h+="&touchpad=on"):0<h.indexOf("/JOIN?")&&(this.mode=2,this.reconnectOnResize=!1);var r=hi5.tool.queryToObj(h.substring(h.indexOf("?")+1));r.keyfile&&r.keyfile.startsWith("-----BEGIN")&&(B.wsPost=!0);r.color||(r.color=32);var Z=v(r.mapClipboard)?document.getElementById("copytextarea"):
null,D=null;Z&&(Z.value="");var Aa={download:"/DOWNLOAD?",clipboard:"/CLIP?"};this.setLinks=function(a){a.download&&(Aa.download=a.download);a.clipboard&&(Aa.clipboard=a.clipboard)};this.server=r.server;this.port=parseInt(r.port,10);this.sessionInfo={major:0,minor:0,width:0,height:0,bpp:0,bigEndian:!0,trueColor:!0};var C=null,F=!1,ua=!1,Qa=0,za="",U=0,H=null;B.copyDialog=!0;var w=0,z=0,A=0,n=18,Ya=0,Ha="#000 #cd0000 #00cd00 #cdcd00 #0000ee #cd00cd #00cdcd #e5e5e5".split(" "),gb="#7f7f7f #ff0000 #00ff00 #ffff00 #5c5cff #ff00ff #00ffff #ffffff".split(" "),
ya=Ha,I=r.fgColor||ya[7],K=r.bgColor||ya[0],fb=0,va=!0;r.wraparoundMode&&(va=v(r.wraparoundMode));var ba=1,T=24,Ba=0,Ra=!0,ta=document.getElementById("cursorID"),P=0,M=0,L=0,Y=null;window.$ssh=this;var na=new function(a){var b=0,e=0,d=new Uint8Array(a),c=this,t=new Ua(0,null,0);this.needMore=!1;this.release=function(){c=d=t=null};this.getHandler=function(){return t};this.getData=function(){return d};this.getPosition=function(){return b};this.setPosition=function(f){b=f};this.getEnd=function(){return e};
this.has=function(f){return e-b>=f};this.set=function(f){var g=f.length,l=e-b;if(1>l)e=g,d=f;else{var x=d.subarray(b,e);e=l+g;g=new Uint8Array(e);g.set(x);g.set(f,l);d=g}b=0};this.handle=function(){t.handler(c,t)};this.setHandler=function(f){f&&1>f.need&&svGlobal.logger.warn("need < 1");(t=f)&&e-b>=f.need&&f.handler(c,f)};this.getByte=function(){return d[b++]};this.peekByte=function(){return d[b]};this.getBE32=function(){return d[b++]<<24|d[b++]<<16|d[b++]<<8|d[b++]};this.getBE16=function(){return d[b++]<<
8|d[b++]};this.skip=function(f){b+=f};this.skipBack=function(f){b-=f};this.getBytes=function(f,g){if(g)for(var l=0;l<f;l++)g[l]=d[b++];else return g=b,b+=f,d.subarray(g,b)};this.copyToByteArray=function(f,g,l,x){hi5.Arrays.arraycopy(d,l,f,g,x)}}(4194304);this.__que=na;this.running=function(){return F};this.setColorTable=function(a){Ha=a};this.setColorTableBright=function(a){gb=a};this.loadbalanceToken="";B.loadbalanceTokenName&&r[B.loadbalanceTokenName]&&aa(r[B.loadbalanceTokenName]);this.mapCmdToCtrl=
!0;var y=null;p||(p=window.innerWidth);r.width=p;h+="&width="+p;m||(m=window.innerHeight);r.height=m;h+="&height="+m;u=(u=u||r.fontSize)?parseInt(u):13;r.fontSize?(u=parseInt(r.fontSize,10),r.fontSize=u):(r.fontSize=u,h+="&fontSize="+u);var $a,X=window.OffscreenCanvas?new OffscreenCanvas(p,m):document.createElement("canvas"),q;this.modifyURL=function(a){k.loadbalanceToken&&(a+="&"+k.loadbalanceToken);return a};this.__write=La;this.getFileUrl=function(a){var b=W(),e=Aa.download,d=e.indexOf("://");
b=(0<d&&11>d?e:b+e)+"s="+za+"&f="+a;return k.modifyURL(b)};this.listFiles=function(a,b){H&&H.list(a,b)};this.reconnect=function(a,b){Ca(a,b);y.send("ED"+M+"\t"+P+"\t"+p+"\t"+m)};var Q=new function(a){this.setJoinMode=a.setJoinMode;this.requestControl=a.requestControl;this.writeKeyComb=a.writeKeyComb;this.localLockFlags=0;this.checkLockFlags=!0;this.getAppMode=function(){return a.mode};this.send=function(e){"891"!=e&&F&&a.__write(e)};this.sendInput=function(e){a.writeRawInput(e);if(a.onactivity)a.onactivity(e)};
var b=null;this.getAppInfo=function(){return a.sessionInfo.appInfo};this.onresize=function(e){if(e=e.target.svSurface){e=e.getFreeSpace();var d=e.width,c=e.height;hi5.browser.isTouch||Math.abs(p-d)<A&&Math.abs(m-c)<n||!a.reconnectOnResize||!F||(b&&(clearTimeout(b),b=null),b=setTimeout(function(){Ca(d,c);y.send("ED"+M+"\t"+P+"\t"+p+"\t"+m)},333))}};this.onorientationchange=function(e){};this.getClipData=pb;this.onfocus=function(e){ea.setAltDown(!1);ea.setCtrlDown(!1)};this.getShareFiles=a.listFiles;
this.getFile=function(e){var d=a.getFileUrl(e);a.ondownload&&a.ondownload({fileName:e,url:d})||window.open(d)};this.getFileLink=a.getFileUrl;this.getGateway=function(){return h};this.reconnect=function(e,d,c){};this.sendKeyboardSyncFlags=function(e){return F?(this.remoteLockFlags=this.localLockFlags=e,!0):!1};this.setWorkDir=function(e,d){d&&a.writeText("cd "+d+"\n")}}(this);void 0!=B.displayMsg?this.displayMsg=B.displayMsg:B.displayMsg=this.displayMsg;void 0!=B.reconnectTimes&&(this.reconnectTimes=
B.reconnectTimes);void 0!=B.openLink&&(this.openLink=B.openLink);void 0!=B.setTitle&&(this.setTitle=B.setTitle);"boolean"==typeof B.useWSS&&(h=(B.useWSS?"wss":"ws")+h.substring(h.indexOf("://")));this.getURL=function(){return h};var Bb=parseInt(r.server_bpp||r.color||24);this.getColor=function(){return Bb};this.getDisplayName=Ea;this.run=function(){if(!F){if(Pa)y=Pa,Ma();else{Xa();var a=h+="&cols="+M+"&rows="+P;hi5.browser.binaryWS()&&(a+="&binary=on");var b=window.opener;if(b){var e=null;try{e=b.__sparkUser}catch(d){}e&&
(b=e.account,e=e.session,b&&(a+="&account="+b),e&&(a+="&session="+e))}h=a+("&pasteCap="+(hi5.browser.isChrome&&hi5.browser.isDesktop?3:0));a=0==k.mode&&B.wsPost?h.substring(0,h.indexOf("?"))+"?_METHOD=post":h;a=k.modifyURL(a);(e=hi5.browser.cookie.get("__SV_TOKEN_A"))&&(a+="&__SV_TOKEN_A="+encodeURIComponent(e));y=new WebSocket(a,"ssh");y.binaryType="arraybuffer"}y.onopen=xb;void 0!=r.recording&&"on"==r.recording&&qb(r);y.onmessage=function(d){d=d.data;if("string"!=typeof d){var c=new Uint8Array(d);
null!=Y&&Y.add(new RecordingObj(c,0,d.byteLength));na.set(c);na.handle()}else{var t=parseInt(d.substring(0,2),16);c=d.substring(2);switch(t){case 0:d=h.substring(h.indexOf("?")+1);y.send("00"+d);y.send("87"+navigator.userAgent);break;case 15:d=JSON.parse(c);y.send("8D");if(k){k.sessionInfo.protocolVersion=d.protocolVersion;if(k.onready)k.onready();if(k.onloggedin)k.onloggedin();B.pingInterval&&k.startPing(B.pingInterval);H&&(H.enabled=!0)}pa(!1);break;case 26:d=JSON.parse(c);if(d.name){svGlobal.logger.info("msg="+
c);if(k.onerror)k.onerror(d);c=__svi18n.errorCode["S"+d.name]||"";c+=d.message||d.msg;k.showMessage(c)}else 0<svGlobal.log&&console.erro("No error code for message:"+c);break;case 27:0!=B.drawLicense&&C.drawLicense(c);break;case 56:d=JSON.parse(c);za=d.session;aa(d.appId);d.server||(d.server=Ea());if(c=hi5.$("joinSelect"))c.value=d.joinMode;if(c=hi5.$("requestControl"))c.disabled=d.hasControl;c=wb("joinssh.html")+"?id="+d.numericId;c=k.modifyURL(c);var f=d.webAddress;f&&0<f.length&&(t=f.indexOf("://"),
f=f.substring(t+3),t=f.indexOf("/"),0<t&&(f=f.substring(0,t)),f.toLowerCase()!=location.host.toLowerCase()&&(c+="&gateway="+f));d.joinLink=c;k.sessionInfo.appInfo=d;d.ver&&d.ver!=svGlobal.version&&svGlobal.logger.warn("Client:"+svGlobal.version+" server:"+d.ver);Ma();if(k&&k.onsessionstart)k.onsessionstart(k.sessionInfo);break;case 58:if(H)if(d=parseInt(c.charAt(0),10),c=c.substring(1),5==d)H.notifyFiles(JSON.parse(c));else switch(c=c.split("\t"),d){case 1:H.confirmId(c[0],c[1],c[2]);break;case 2:H.read(c[0],
parseInt(c[1],10),parseInt(c[2],10));break;case 4:H.close(c[0]);break;case 9:d='<a href="'+c[0]+'" download="'+c[1]+'" target="_blank">'+__svi18n.info.fileReady+"</a>",surfaces.getFocused().showMessage({msg:d,title:__svi18n.info.download})}break;case 59:d=hi5.Base64.dec(c,0);Qa=d[3]<<24|d[2]<<16|d[1]<<8|d[0];Qa&64&&k.showMessage(__svi18n.info.recording);C.setFeature(Qa);break;case 61:d=JSON.parse(c);switch(d.type){case 0:r.fontSize=parseInt(d.fontSize);p=d.width;m=d.height;Ma();C.setAutoScale(!0);
Ca(0,0,M,P);if(c=d.server)k.server=d.server,Ta(Ea());(c=d.mapDisk)&&kb(C);pa(!1);mb=d.length;if(k.onopened)k.onopened(d);break;case 1:d=d.duration;if(k.onprogress)k.onprogress(d,mb);break;case 2:2==d.status?F=!0:((Za=c=0==d.status)||ca(),d.warn&&k.showMessage(c?__svi18n.info.sessionPaused:__svi18n.info.sessionResumed))}break;case 62:vb(c);break;case 91:ua=!0;if(k.onusername)k.onusername(ub);else da(__svi18n.info.user||c),ka=!0,ca(),oa();break;case 93:G=JSON.parse(c);if(k.onauthprompt)k.onauthprompt(G,
tb);else d=G.name||"",G.instruction&&(d+=G.instruction),d&&(z+=n,w=0,da(d),oa()),G.answer=[],Va();break;default:svGlobal.logger.warn("@TODO:"+d+"\n")}}};y.onclose=Fa;y.onerror=yb;Ta(Ea())}};this.setJoinMode=function(a){F&&y.send("8E1"+a)};this.refuseControl=function(a){F&&y.send("8E3"+a)};this.giveControl=function(a){F&&y.send("8E4"+a)};this.requestControl=function(){F&&y.send("8E2")};this.play=function(){y.send("F3")};this.pause=function(){y.send("F2")};this.scan=function(a){y.send("F4"+(a?"1":"0"))};
this.seek=function(a){C&&F&&y.send("F4"+(a?"1":"0")+"\t"+(a/C.getScale().x|0))};this.allowJoin=function(a,b){y.send("8EA"+a+"\t"+(b?1:0))};var V=null,ka=!1,G=null,fa="",mb=0;this.hide=function(){C&&(pa(!0),C.hide())};this.showMessage=function(a,b){k.displayMsg&&a&&(C?C.showMessage(a,b):("string"==typeof a&&(a={msg:a,timeout:b||0}),hi5.notifications.notify(a)))};this.close=function(){if(y&&F)try{y.send("85"),y.close()}catch(a){}else Fa()};hi5.browser.isChromeApp?chrome.runtime.onSuspend.addListener(Fa):
window.addEventListener("unload",Fa,!1);var Cb=new Ua(1024,function(a){var b=w,e=z;for(a.needMore=!1;a.has(1);){var d=a.getByte();if(31>=d)if(27==d){a:{var c=a;if(c.has(1)){d=c.getByte();switch(d){case 40:c.getByte();break;case 41:c.getByte();break;case 55:break;case 61:break;case 62:break;case 68:eb();break;case 69:bb();z+=n;qa(!0);break;case 77:db();break;case 92:console.log("ST");break;case 93:d=console;for(var t=d.log,f=c,g=f.getPosition(),l="",x=f.getEnd(),E=f.getData();g<x;)if(c=E[g++],7!=c)switch(c>>
4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:l+=String.fromCodePoint(c);break;case 12:case 13:l+=String.fromCodePoint((c&31)<<6|E[g++]&63);break;case 14:l+=String.fromCodePoint((c&15)<<12|(E[g++]&63)<<6|(E[g++]&63)<<0)}else break;f.setPosition(g);t.call(d,"OSC:"+l);break;case 91:d=zb(c);break a;default:console.log("unkown cmd for ESC:"+d)}d=!0}else c.skipBack(1),d=!1}if(!d)return}else ab(d);else if(128<=d&&159>=d)switch(d){case 146:a.skip(2);break;default:console.log("C1:"+d)}else{a.skipBack(1);
a:{d=a;t=d.getPosition();f="";g=d.getEnd();for(l=d.getData();t<g;)if(c=l[t++],31<c&&(128>c||159<c)){if(177!=c)switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:f+=String.fromCodePoint(c);break;case 12:case 13:if(t<g)f+=String.fromCodePoint((c&31)<<6|l[t++]&63);else{d.needMore=!0;d=f;break a}break;case 14:if(1<g-t)f+=String.fromCodePoint((c&15)<<12|(l[t++]&63)<<6|(l[t++]&63)<<0);else{d.needMore=!0;d=f;break a}}}else{t--;break}d.setPosition(t);d=f}da(d);if(a.needMore)return}}b==w&&
e==z||oa();ca();ja&&ja.check()});na.setHandler(Cb);var Za=!1;this.refreshOutput=ca;var N={mode:0,parameters:[0],count:0,trailing:0,command:0,toString:function(){var a="CSI, ";this.mode&&(a+="mode:"+String.fromCharCode(this.mode));0<this.count&&(a+=" parameters:"+this.parameters.slice(0,this.count).join(";"));this.trailing&&(a+=" trailing:"+String.fromCharCode(this.trailing));return a+=" cmd:"+String.fromCharCode(this.command)},parse:function(a){var b=0,e=!1,d=a.getByte();if(!d)return!1;if(60<=d&&
63>=d)this.mode=d,d=a.getByte();else if(this.mode=0,31>=d||128<=d&&159>=d)ab(d),d=a.getByte();if(!d)return!1;for(this.count=0;48<=d&&57>=d||59==d;)if(59==d?(this.parameters[this.count]=e?b:null,this.count++,b=0,e=!1):(b=10*b+(d-48),e=!0),d=a.getByte(),!d)return!1;e?(this.parameters[this.count]=b,this.count++):0<this.count&&(this.parameters[this.count]=1,this.count++);if(32<=d&&47>=d){if(this.trailing=d,d=a.getByte(),!d)return!1}else this.trailing=0;64<=d&&127>=d?this.command=d:(this.command="",console.log("Invalid CSI final char:"+
String.fromCharCode(d)));return!0}};this.showHistory=jb;this.getUploadManager=function(){return H};this.addSurface=function(a){C=a;lb&&a.setPlayerMode();$a=C.context;X.width=p;X.height=m;q=X.getContext("2d",{alpha:!1});a.alwaysPaste=!0;a.setAutoScale(0<k.mode);a.setSize(p,m);a.setController(Q);a.setTouchpad(v(r.touchpad));a.setClipboard(v(r.mapClipboard));kb(C);var b=void 0!=r.cmdToCtrl?v(r.cmdToCtrl):void 0!=B.cmdToCtrl?B.cmdToCtrl:k.mapCmdToCtrl;a.run(99997,!1,!0,b);a.onclipdata=Ab};this.sendPing=
function(a){a=new Uint8Array(2);a[0]=146;La(a.buffer)};this.startPing=function(a){ja||(ja=new hi5.tool.ResponseMonitor(function(){ua&&k.sendPing()},function(){ua&&ja.check(1)}));ja.setInterval(a,a);setTimeout(function(){ja.check()},1E3*a)};this.stopPing=function(){ja&&ja.stop()};this.writeText=J;this.writeScancode=function(a,b){J(ea.process(a,b,0))};var Db={" ":57,space:57,pageup:201,pagedown:209,end:207,home:199,left:203,up:200,right:205,down:208,printscreen:183,insert:210,del:211,"delete":211,altgr:184,
windows:219,windowsright:220,context:221,esc:1,backspace:14,tab:15,enter:28,meta:29,command:29,ctrl:29,shift:42,alt:56,capslock:58,f1:59,f2:60,f3:61,f4:62,f5:63,f6:64,f7:65,f8:66,f9:67,f10:68,f11:87,f12:88,numlock:69,scrolllock:70,add:78};this.writeKeyComb=function(a){a=a.split("+");var b=a.length;if(0!=b)for(var e=null,d=0;d<b;d++){var c=a[d];""==c&&""==e&&(c="Add");if(""!=c){e=c;var t=Db[e.toLowerCase()];t?k.writeScancode(!0,t):console.log("Invalid key:"+e)}e=c}};var Ia=!1,la=0,ma=0,Ja=0,ra=!1,
nb=0,ob=0,sa=null;this.writeRawInput=function(a){if(F){var b=parseInt(a.substring(0,2),16);a=a.substring(2).split("\t");switch(b){case 128:la=parseInt(a[0]);ma=parseInt(a[1]);Ja=parseInt(a[2]);ra=!1;Ia=!0;nb=Math.floor(la/A)*A;ob=Math.floor(ma/n)*n;1015==U?J("\u001b["+(parseInt(a[2])+32)+";"+(Math.floor(la/A)+1)+";"+(Math.floor(ma/n)+1)+"M"):1006==U?J("\u001b[<"+a[2]+";"+(Math.floor(la/A)+1)+";"+(Math.floor(ma/n)+1)+"M"):U&&J("\u001b[M"+a[2]+String.fromCharCode(Math.floor(la/A)+33)+String.fromCharCode(Math.floor(ma/
n)+33));return;case 129:U&&(1015==U?J("\u001b["+(parseInt(a[2])+32)+";"+(Math.floor(la/A)+1)+";"+(Math.floor(ma/n)+1)+"M"):1006==U?J("\u001b[<"+a[2]+";"+(Math.floor(parseInt(a[0])/A)+1)+";"+(Math.floor(parseInt(a[1])/n)+1)+"m"):U&&J("\u001b[M3"+String.fromCharCode(Math.floor(parseInt(a[0])/A)+33)+String.fromCharCode(Math.floor(parseInt(a[1])/n)+33)));Ja=parseInt(a[2]);2==Ja&&Ia&&!ra?(Z&&(Z.value=""),setTimeout(jb,50)):ra&&(a=D.getMultiLines(Math.floor(la/A)+1,Math.floor(ma/n+.1)+1,Math.floor(parseInt(a[0])/
A+.4)+1,Math.floor(parseInt(a[1])/n-.4)+1))&&C&&C.copyToClip("text/plain;"+a);sa&&(setTimeout(C.removeWhiteboard,333),sa=null);ra=Ia=!1;return;case 130:if(Ia){b=parseInt(a[0]);a=parseInt(a[1]);if(!ra){if(3>Math.abs(b-la)&&3>Math.abs(a-ma))return;ra=!0}if(0==Ja){if(!sa){var e=C.initWhiteboard();e.style.opacity=.6;e=e.getContext("2d");sa=new hi5.canvas.TextSelect(e,n,B.selectionColor,"1px",p)}sa.clear();sa.draw(nb,ob,b,a)}}return;case 131:1006==U?J("\u001b[<"+("1"==a[2]?65:64)+";"+(Math.floor(parseInt(a[0])/
A)+1)+";"+(Math.floor(parseInt(a[1])/n)+1)+"M"):U&&J("\u001b[M"+("1"==a[2]?5:4)+String.fromCharCode(Math.floor(parseInt(a[0])/A)+64)+String.fromCharCode(Math.floor(parseInt(a[1])/n)+64));return;case 132:e=0==a[0];b=parseInt(a[1]);if(ka||G)e&&(a=b,28==a?(z+=n,w=0,ka?(ka=!1,y.send("5B"+fa),fa=""):G&&(G.answer.push(fa),fa="",Va())):14==a&&0<fa.length&&(fa=fa.substring(0,fa.length-1),ka&&(Na(),da(" "),ca(),Na())));else if(J(ea.process(e,b,0)),28!=b)ia||(ia=R());else if(ia){if(ia&&(a=D.getSingleLine(O(),
ia,R()))){b=D.getSingleLine(O(),1,ia);if(k.oncommand)k.oncommand(a,b);a.startsWith("cd /")?C.setDirectory(a.substring(3)):a.startsWith("base64 ")&&(S.on=!0,S.cmd=a,S.prompt=b)}ia=0}return;case 139:b=parseInt(a[1]);e=0==a[0];J(ea.process(e,b,1));return;case 134:ka||G?ib(a[0]):(ia||(ia=R()),J(ea.process(!0,a[0],3)));return}svGlobal.logger.warn("Unknowncode: "+a[1]+" type:"+b)}};var ea=new function(){var a=!1,b=!1,e=!1,d=0;this.setAltDown=function(c){b=c};this.setCtrlDown=function(c){a=c};this.setEscMode=
function(c){d=c;console.log("Esc mode:"+c)};this.process=function(c,t,f){if(3==f)return t;if(0==f){switch(t){case 29:case 157:return a=c,"";case 56:case 184:return b=c,"";case 42:case 54:return e=c,""}if(c){switch(t){case 28:c="\r";break;case 200:c=0==d?"\u001b[A":"\u001bOA";break;case 208:c=0==d?"\u001b[B":"\u001bOB";break;case 205:c=0==d?"\u001b[C":"\u001bOC";break;case 203:c=0==d?"\u001b[D":"\u001bOD";break;case 59:c="\u001bOP";break;case 60:c="\u001bOQ";break;case 61:c="\u001bOR";break;case 62:c=
"\u001bOS";break;case 63:c="\u001b[15~";break;case 64:c="\u001b[17~";break;case 65:c="\u001b[18~";break;case 66:c="\u001b[19~";break;case 67:c="\u001b[20~";break;case 68:c="\u001b[21~";break;case 87:c="\u001b[23~";break;case 88:c="\u001b[24~";break;case 15:c="\t";break;case 209:c="\u001b[6~";break;case 201:c="\u001b[5~";break;case 199:c=0==d?"\u001b[H":"\u001bOH";break;case 207:c=0==d?"\u001b[F":"\u001bOF";break;case 14:c=e?"\b":"\u007f";break;case 211:c="\u001b[3~";break;case 197:c="\u00ff\u00f3";
break;case 210:c="\u001b[2~";break;case 1:c="\u001b";break;case 55:c="*";break;case 71:c=Q.localLockFlags&2?"7":0==d?"\u001b[H":"\u001bOH";break;case 72:c=Q.localLockFlags&2?"8":0==d?"\u001b[A":"\u001bOA";break;case 73:c=Q.localLockFlags&2?"9":"\u001b[5~";break;case 74:c="-";break;case 75:c=Q.localLockFlags&2?"4":0==d?"\u001b[D":"\u001bOD";break;case 76:c=Q.localLockFlags&2?"5":"\u001bOu";break;case 77:c=Q.localLockFlags&2?"6":0==d?"\u001b[C":"\u001bOC";break;case 78:c="+";break;case 79:c=Q.localLockFlags&
2?"1":0==d?"\u001b[F":"\u001bOF";break;case 80:c=Q.localLockFlags&2?"2":0==d?"\u001b[B":"\u001bOB";break;case 81:c=Q.localLockFlags&2?"3":"\u001b[6~";break;case 82:c=Q.localLockFlags&2?"0":"\u001b[2~";break;case 83:c=Q.localLockFlags&2?".":"\u001b[3~";break;case 156:c="\r";break;case 181:c="/";break;default:return console.log("Invalid code:"+t),""}b&&(c="\u001b"+c);return c}return""}if(1==f&&c&&a){if(64<t&&91>t)return String.fromCharCode(t-64);switch(t){case 54:return"\u001e";case 219:return"\u001b";
case 220:return"\u001c";case 221:return"\u001d";case 32:return"\x00";case 192:return"\u001e";case 191:return"\u001f";default:return console.log("Invalid key code:"+t),""}}if(b)return"\u001b"+String.fromCharCode(t).toLowerCase()}}};
