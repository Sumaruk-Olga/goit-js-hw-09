!function(){var t,e={body:document.querySelector("body"),start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")};function o(){e.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}e.stop.disabled=!0,e.start.addEventListener("click",(function(a){e.stop.disabled=!1,e.start.disabled=!0,t=setInterval(o,1e3)})),e.stop.addEventListener("click",(function(o){e.stop.disabled=!0,e.start.disabled=!1,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.fe014be5.js.map
