// ==UserScript==
// @name         ipfs link redirctor
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Replaces ipfs links with user configured host
// @author       TheDailySpank
// @match        *://*/ipfs/*
// @match        *://*/ipns/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    var ipfsHost = "http://127.0.0.1:8080"   // default settings if running ipfs daemon on local machine

    // ipfs.io gateway
    // var ipfsHost = "https://ipfs.io"

    // Cloudflare gateway
    // var ipfsHost = "https://cloudflare-ipfs.com"

    var anchors = document.querySelectorAll('a');

    for (var i = 0; i < anchors.length; i++) {
        var regex = /.*(\/ipfs\/Qm\w{44}.*)/g;
        anchors[i].href = anchors[i].href.replace(regex, ipfsHost + '$1');
    }

})();
