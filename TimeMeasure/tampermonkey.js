// ==UserScript==
// @name        daiict
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.daiict.ac.in/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ac.in
// @grant        GM_setClipboard
// ==/UserScript==

(function() {
    'use strict';
    var start = Date.now();
    window.document.body.addEventListener('click', function(e) {
        var end = Date.now();
        var x = e.pageX - e.currentTarget.offsetLeft;
        var y = e.pageY - e.currentTarget.offsetTop;
        console.log(end-start, x, y, e.currentTarget);

        var hiddenElement = document.createElement('a');
        var str = (end-start).toString()+' '+x.toString()+' '+y.toString()+' '+e.target.outerHTML;
        hiddenElement.href = 'data:attachment/text,' + encodeURI(str);
        hiddenElement.download = 'daiict.txt';
        hiddenElement.click();

        start = end;
    }, false);
})();