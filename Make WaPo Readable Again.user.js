// ==UserScript==
// @name         Make WaPo Readable Again
// @namespace    washingtonpost.com
// @version      0.5.1
// @description  try to take over the world!
// @author       Erik Pitti
// @dowload      https://github.com/erikpt/make-wapo-readable/raw/master/Make%20WaPo%20Readable%20Again.user.js
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @match        https://www.washingtonpost.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    //document.getElementById('leaderboard-overlay').remove();
    document.getElementById('__NEXT_DATA__').remove();
    document.getElementById('comments-wrapper').remove();

    // Your code here...
    for(var iImage=0;iImage<document.images.length;iImage++){
        var imageUrl = document.images[iImage].src;

        if (imageUrl.indexOf("&w=") != -1) {
            imageUrl = imageUrl.replace(/^(https*:\/\/)(\S+\.)*(washingtonpost\.com\/\S*\/imrs\.php\?)(\S*\&)(w=\d{1,2})(.*)$/gi, "$1".toString() + "$2".replace(/\0/,"") + "$3".toString() + "$4".toString() + "w=3000" + "$6".toString())
            //^(https*:\/\/)(\S+\.)*washingtonpost\.com\/\S*\/imrs\.php\?\S*\&(w=\d+)(.*)$
            //imageUrl = imageUrl.replace("w=32","w=3300");
            document.images[iImage].src = imageUrl;
            //alert(document.images[iImage].parentElement);
            var eDiv = document.images[iImage].parentElement
            eDiv.style.filter = "";
            eDiv.style.width = "70%";
            //eDiv.attr('style','filter:blur(0px);transition:filter .5s !important;'));
        }

    }

    $('div.hide-for-print').attr("style", "display: none !important;");
    $('div.utility-bar').attr("style", "display: none !important;");
    $('div.powa-wrapper').attr("style", "display: none !important;");
    $('.right-rail').attr("style", "display: none !important;");
    $('article').attr("style", "width: 80% !important;position:relative;");
    $('aside').empty();
    $('aside').remove();
    $('wp-ad').remove();
    $('main').attr("style", "width:100%;padding-left:100px;padding-right:auto;");
    $('main').attr("class", "");

    //var badDivs = $("div div:contains('<img')");


})();