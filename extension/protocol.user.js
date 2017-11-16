// ==UserScript==
// @name         !! Diep.io WebSocket Protocol
// @description  Diep.io WS Protocol
// @version      0.8
// @author       Faber, Gexi
// @match        http://diep.io/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// ==/UserScript==

var Protocol = "http://cdn.rawgit.com/xF4b3r/Diep.io-Protocol/master/extension/protocol.js";

var localProtocol = "http://localhost/!diep.io/protocol.js";
var localDebug = true;

window.stop();
document.documentElement.innerHTML = "";
GM_xmlhttpRequest({
    method : "GET",
    url : "http://diep.io/",
    onload : function(e) {
        e.responseText = e.responseText.replace("</body>", "<script src='" + localDebug ? localProtocol : Protocol + "'></script></body>");
        document.open();
        document.write(e.responseText);
        document.close();
    }
});
