const t={body:document.querySelector("body"),start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")};let e;function o(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.stop.disabled=!0,t.start.addEventListener("click",(function(d){t.stop.disabled=!1,t.start.disabled=!0,e=setInterval(o,1e3)})),t.stop.addEventListener("click",(function(o){t.stop.disabled=!0,t.start.disabled=!1,clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.988b4782.js.map
