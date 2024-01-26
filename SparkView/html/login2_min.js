var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.checkStringArgs=function(g,c,f){if(null==g)throw new TypeError("The 'this' value for String.prototype."+f+" must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype."+f+" must not be a regular expression");return g+""};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;
$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(g,c,f){if(g==Array.prototype||g==Object.prototype)return g;g[c]=f.value;return g};
$jscomp.getGlobal=function(g){g=["object"==typeof globalThis&&globalThis,g,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var c=0;c<g.length;++c){var f=g[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};
$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(g,c){var f=$jscomp.propertyToPolyfillSymbol[c];if(null==f)return g[c];f=g[f];return void 0!==f?f:g[c]};$jscomp.polyfill=function(g,c,f,h){c&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(g,c,f,h):$jscomp.polyfillUnisolated(g,c,f,h))};
$jscomp.polyfillUnisolated=function(g,c,f,h){f=$jscomp.global;g=g.split(".");for(h=0;h<g.length-1;h++){var k=g[h];if(!(k in f))return;f=f[k]}g=g[g.length-1];h=f[g];c=c(h);c!=h&&null!=c&&$jscomp.defineProperty(f,g,{configurable:!0,writable:!0,value:c})};
$jscomp.polyfillIsolated=function(g,c,f,h){var k=g.split(".");g=1===k.length;h=k[0];h=!g&&h in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var q=0;q<k.length-1;q++){var b=k[q];if(!(b in h))return;h=h[b]}k=k[k.length-1];f=$jscomp.IS_SYMBOL_NATIVE&&"es6"===f?h[k]:null;c=c(f);null!=c&&(g?$jscomp.defineProperty($jscomp.polyfills,k,{configurable:!0,writable:!0,value:c}):c!==f&&($jscomp.propertyToPolyfillSymbol[k]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(k):$jscomp.POLYFILL_PREFIX+k,k=
$jscomp.propertyToPolyfillSymbol[k],$jscomp.defineProperty(h,k,{configurable:!0,writable:!0,value:c})))};$jscomp.polyfill("String.prototype.startsWith",function(g){return g?g:function(c,f){var h=$jscomp.checkStringArgs(this,c,"startsWith");c+="";var k=h.length,q=c.length;f=Math.max(0,Math.min(f|0,h.length));for(var b=0;b<q&&f<k;)if(h[f++]!=c[b++])return!1;return b>=q}},"es6","es3");
function showTwoFAQR(g,c){var f=hi5.$("twofainfo");if(f){var h=hi5.$("barcodeDiv"),k=hi5.$("enableTwoFA"),q=hi5.$("disableTwoFA");c?(hi5.$("imgBarcode").src="data:image/png;base64,"+c,h.style.display="block",q.style.display="none",k.style.display="block"):(h.style.display="none",q.style.display="block",k.style.display="none");var b=new hi5.ui.Lightbox(f);b.show();hi5.$("faCode").focus();hi5.$("faCode").value="";k.onclick=q.onclick=function(a){var e=hi5.$("faCode").value;a=a.target==k?1:0;if(6!=e.length)hi5.notifications.notify(__svi18n.info.digit6||
"It must be a 6 digit number");else{var d=f.querySelector('input[name="pwd"]');g(e,a,d?d.value:"");b.dismiss()}}}}
svGlobal.auth=new function(){var g=this;this.getLoginURL=function(){return("https:"==location.protocol?"wss://":"ws://")+hi5.$("gateway").value+"/LOGIN?"};this.closeSession=function(c,f){console.log("close session "+f+" on user "+c);window.__sparkUser&&(c||(c=window.__sparkUser.account),f||(f=window.__sparkUser.session));c&&f&&(c=svGlobal.auth.getLoginURL()+"action=close&user="+encodeURIComponent(c)+"&svSession="+f,(new WebSocket(c,"login")).onopen=function(h){console.log("Sign out");window.__sparkUser=
null})};this.showLogDlg=function(){if(hi5.appcfg&&hi5.appcfg.returnUrl)window.location.href=hi5.appcfg.returnUrl;else{var c=window.__sparkUser.account,f=window.__sparkUser.session;window.__sparkUser=null;var h=hi5.$("frmLogin");h.elements.pwd.value="";h.style.display="block";hi5.$("frmConn").style.display="none";(h=svManager.getInstance())&&h.running()&&h.close();svGlobal.auth.closeSession(c,f)}};this.getUserName=function(c){hi5.appcfg&&hi5.appcfg.domain&&(c.toLowerCase().startsWith(hi5.appcfg.domain.toLowerCase()+
"\\")||(c=hi5.appcfg.domain+"\\"+c));return c};this.login=function(c){function f(q,b){window.__sparkUser=null;if(!g.beforelogin||!g.beforelogin(q)){var a=new WebSocket(q.substring(0,q.indexOf("?"))+"?_METHOD=post","login");a.onclose=function(e){g.afterlogin&&g.afterlogin(h);h=!1};a.onopen=function(e){h=!0};a.onmessage=function(e){var d=e.data,n=d.substring(0,2);if("00"==n)a.send("00"+q.substring(q.indexOf("?")+1));else if("01"==n)switch(hi5.tool.enableInput(),d.substring(2,3)){case "0":if(e=hi5.$("twofacode")){var p=
new hi5.ui.Lightbox(e);p.show();var r=hi5.$("btnTwoFACode"),l=hi5.$("faAuthCode");l.focus();l.value="";r.onclick=function(){a.send("code:"+l.value);p.dismiss()};l.addEventListener("keyup",function(m){if(13==m.keyCode||"Enter"==m.code)m.preventDefault(),r.click()})}break;case "1":e=d.substring(4),showTwoFAQR(function(m,u){a.send("code:"+m)},e)}else e=JSON.parse(e.data),0===e.type&&(e.message||e.name)?svGlobal.gatewayError(e.name,e.message||e.msg):(e.error||a.send("A1"+navigator.userAgent),b(e))}}}
var h=!1,k=hi5.browser.cookie2Obj();k.svSession&&k.svEmail&&(c+="&svSession="+k.svSession+"&svEmail="+encodeURIComponent(k.svEmail));setTimeout(function(){f(c,svGlobal.onloggedin)},5);return!1}};
function startExitingApp(g){function c(q){f.addSurface(q);f.startExitingApp(g)}var f=svManager.getInstance();window.svOnSurfaceReady=c;window.open("rail.html").svOnSurfaceReady=c;var h=hi5.$(g),k=h.parentNode;k.removeChild(h);k=k.parentNode;0==k.getElementsByTagName("input").length&&(k.dismiss(),f.checkRemaining(2E3))}function getLoginURL(){return("https:"==location.protocol?"wss://":"ws://")+hi5.$("gateway").value+"/LOGIN?"}
window.addEventListener("load",function(g){function c(){g.preventDefault();svGlobal.auth.beforesubmit&&svGlobal.auth.beforesubmit();var b=hi5.$("frmLogin").elements,a=svGlobal.auth.getUserName(b.user.value),e=b.pwd.value;a=getLoginURL()+"user="+encodeURIComponent(a)+"&pwd="+encodeURIComponent(e);(e=b.sharedSecret)&&e.value&&(a+="&sharedSecret="+encodeURIComponent(e.value));b.pwd.value="";return svGlobal.auth.login(a)}function f(b,a,e){var d=svGlobal.auth.getLoginURL()+"action=code",n=new WebSocket(d,
"login");n.onmessage=function(p){p=JSON.parse(p.data);p.error?svGlobal.gatewayError(p.name,p.message||p.msg):hi5.notifications.notify(__svi18n.info.succeeded);n.close()};n.onopen=function(p){n.send("twof:"+b+"\t"+__sparkUser.account+"\t"+a+"\t"+__sparkUser.session+"\t"+e+"\t")}}function h(b){var a=b.target;a.onclick=null;setTimeout(function(){a.onclick=h},300);q(a.id)}function k(){function b(d){e.addSurface(d);d=a.exe||a.rdp.remoteProgram;var n=a.args||a.rdp.remoteArgs||"";console.log("remoteApp: "+
d+" arg="+n+" running="+e.running());e.running()?e.startApp(d,n,""):e.run()}var a=window.__sparkUser.server,e=svManager.getInstance();null==e&&(e=new svGlobal.Rdp2(a),e.sessionTimeout=9E5);window.svOnSurfaceReady=b;window.open("rail.html").svOnSurfaceReady=b}function q(b,a,e){var d=window.__sparkUser,n=d.servers,p=n.length;d.server=null;window.sparkGateway=d.gateway;for(var r=0;r<p;r++){var l=n[r];if(b==l.id){l.gateway=d.gateway;l.session=d.session;l.account=d.account;d.server=l;break}}if(d.server){console.log("connecting to:"+
d.server.id);(b=hi5.$("touchpad"))&&b.checked&&(d.server.touchpad=!0);if(b=hi5.$("keyboard"))b=parseInt(b.options[b.selectedIndex].value),0<b&&(d.server.keyboard=b);"undefined"==typeof a&&(a=(b=hi5.$("sameWindow"))&&b.checked);a&&!d.server.rdp&&(a=!1);d.server.rdp&&d.server.rdp.remoteProgram&&(d.server.startProgram="app");b="width="+window.outerWidth+",height="+window.outerHeight;d.server.http&&window.open("/PXY/"+d.server.id+"/","_blank",b);if("app"==d.server.startProgram&&hi5.browser.isMultitask&&
!a)k();else if(a){var m=new Rdp2(d.server);hi5.$("login").style.display="none";m.addSurface(new svGlobal.LocalInterface);m.run();m.onclose=function(){e?showLogDlg():(m.hide(),hi5.$("login").style.display="block")}}else a=document.getElementById("multiMon"),d.server.rdp?(d.server.rdp.multiMon=a&&a.checked?"on":"off",window.open("rdpdirect.html","_blank",b)):d.server.vnc?window.open("vnc.html","_blank",b):d.server.ssh?window.open("sshdirect.html","_blank",b):d.server.telnet&&window.open("telnet.html",
"_blank",b)}else hi5.notifications.notify("Not a valid server")}svGlobal.auth.beforelogin=function(){hi5.tool.disableInput()};svGlobal.auth.afterlogin=function(b){b||(hi5.notifications.notify(__svi18n.errorCode.connection),svGlobal.auth.showLogDlg());hi5.tool.enableInput()};svGlobal.onloggedin=function(b){hi5.tool.enableInput();if(b.error)svGlobal.gatewayError(b.name,b.message||b.msg);else{hi5.$("frmLogin").style.display="none";hi5.$("frmConn").style.display="block";var a=document.getElementById("pwdZone");
a&&(a.style.display=b.isDomainUser?"none":"table-row-group");b.isDomainUser&&!b.twoFAEnabled&&(a=document.getElementById("settings"))&&(a.style.display="none");for(a=hi5.$("programs");a.hasChildNodes();)a.removeChild(a.firstChild);var e=b.servers;if(!b.accessNotInList){var d=hi5.$("anyconn");d&&(d.style.display="none")}b.hash&&(document.cookie="__SV_TOKEN_S="+b.hash+"-"+encodeURIComponent(b.name));d=svGlobal.auth.getUserName(hi5.$("user").value);hi5.appcfg&&hi5.appcfg.domain&&hi5.appcfg.hiddenDomain&&
(d=hi5.appcfg.domain+"\\"+d);window.__sparkUser={session:b.session,account:d,gateway:hi5.$("gateway").value,servers:e,twoFA:b.twoFA,twoFAEnabled:b.twoFAEnabled,twoFAQR:b.twoFAQR};b=e.length;if(!(1>b)){d="";for(var n=0;n<b;n++){var p=e[n].server,r=e[n].id;p=e[n].displayName||r||p;var l=e[n].icon;l||(l="rdp32.png");var m=document.createElement("div");m.className="icon";var u=document.createElement("img");u.src=l;u.id=r;u.alt=r;u.title=p;u.style.cursor="pointer";u.onclick=h;m.appendChild(u);m.appendChild(document.createElement("br"));
m.appendChild(document.createTextNode(p));a.appendChild(m);hi5.appcfg.startup&&r===hi5.appcfg.startup.server&&(d=r)}!d&&hi5.appcfg.startup&&(console.log("start up:"+hi5.appcfg.startup.server+" not found, use the first instead"),d=e[0].id);d&&q(d,!hi5.appcfg.startup.newWindow,!0)}}};(function(){hi5.$("user").focus();hi5.$("frmLogin").onsubmit=c;var b=hi5.$("anyconn");b&&(b.onclick=function(){var l="width="+window.outerWidth+",height="+window.outerHeight;window.open("rdp.html?gateway="+hi5.$("gateway").value,
"_blank",l)});if(b=document.querySelector('input[name="showlogin"]'))b.onclick=svGlobal.auth.showLogDlg;var a=hi5.browser.cookie2Obj(),e=-1!=document.cookie.indexOf("__SV_TOKEN_A"),d=hi5.tool.queryToObj();if(a.svEmail||a.user||e||d.autoLogin||d.user&&d.pwd){var n=hi5.$("frmLogin").elements;n.user.value=a.svEmail||a.user||d.user||"";n.pwd.value=(a.svSession?"fake":a.pwd)||d.pwd||"_";a.gateway&&(n.gateway.value=a.gateway);(n.user.value&&n.pwd.value||a.autoLogin||e||d.autoLogin)&&setTimeout(c,30)}b=
hi5.$("settings");var p=hi5.$("settingsDiv");b&&(b.onclick=function(){if(p){var l=document.getElementById("2fa_code_pwd");l&&(l.style.display=__sparkUser.twoFAEnabled?"table-row":"none");(new hi5.ui.Lightbox(p)).show();hi5.$("currPwd").focus();if(l=hi5.$("btnTwoFA"))l.onclick=function(){showTwoFAQR(f,window.__sparkUser.twoFAQR)},0==__sparkUser.twoFA&&l.parentNode.removeChild(l)}});if(b=hi5.$("frmSettings"))b.onsubmit=function(l){l.preventDefault();var m=l.target.elements;if(m.newPwd1.value!=m.newPwd2.value)hi5.notifications.notify(__svi18n.errorCode.pwdmatch);
else{l=getLoginURL()+"_METHOD=post&action=put";var u=new WebSocket(l,"login");u.onmessage=function(t){if(0==t.data.indexOf("00")){t="00currPwd="+encodeURIComponent(m.currPwd.value)+"&newPwd="+encodeURIComponent(m.newPwd1.value);t+="&user="+encodeURIComponent(svGlobal.auth.getUserName(hi5.$("user").value));var v=b.elements.faCode;v&&(t+="&code="+v.value);u.send(t);hi5.$("frmSettings").reset()}else t=JSON.parse(t.data),t.error&&svGlobal.gatewayError(t.name,t.message||t.msg)};p.dismiss&&p.dismiss();
return!1}};var r=hi5.$("sameWindow");r&&(hi5.browser.isiOS||hi5.browser.isIE||hi5.browser.isChromeApp)&&(r.checked=!0);(a=hi5.$("multiMon"))&&r&&(a.onchange=function(l){l.target.checked&&(r.checked=!1)});a=hi5.$("gateway");(e=a.value)||(e=hi5.appcfg.defaultPort?window.location.hostname+":"+hi5.appcfg.defaultPort:window.location.host);0==e.length&&(e="localhost");a.value=e;a=hi5.$("touchpadmode");hi5.browser.isTouch&&(a.style.display="");(a=hi5.$("user"))&&!a.value&&hi5.appcfg&&hi5.appcfg.domain&&
(a.value=hi5.appcfg.domain+"\\");(function(){var l=!1,m="";try{document.createElement("canvas").getContext("2d"),l=!0}catch(w){m="This browser does not support Canvas.\n\n"}var u=!("WebSocket"in window)&&!("MozWebSocket"in window),t=navigator.userAgent,v=-1!=t.indexOf("Firefox");u&&(m+="This browser doesn't support WebSocket.\n\n",v?m+="Please update to Firefox 6 or later.\n\n":-1!=t.indexOf("Opera")?m+="Please open 'opera:config#Enable WebSockets' (type it in the link field) make 'Enable WebSockets' selected and restart Opera.\n\n":
-1!=t.indexOf("MSIE")&&(m+="Please install Google Chrome Frame.\n\n"));0<m.length&&hi5.notifications.notify(m);return!u&&l})();(a=hi5.$("defPort"))&&hi5.appcfg.defaultPort&&(a.innerHTML=hi5.appcfg.defaultPort);(a=document.getElementById("frmConn"))&&(a=a.querySelector('select[name="keyboard"]'));a&&(e=svGlobal.Rdp.languageToKeyboard.detect())&&(a.value=e)})()},!1);window.addEventListener("beforeunload",function(){svGlobal.auth.closeSession()},!1);
