var timerId,refs={body:document.querySelector("body"),start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")};function onStartClick(t){refs.stop.disabled=!1,refs.start.disabled=!0,timerId=setInterval(changeBodyBgc,1e3)}function onStopClick(t){refs.stop.disabled=!0,refs.start.disabled=!1,clearInterval(timerId)}function getRandomHexColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}function changeBodyBgc(){refs.body.style.backgroundColor=getRandomHexColor()}refs.stop.disabled=!0,refs.start.addEventListener("click",onStartClick),refs.stop.addEventListener("click",onStopClick);
//# sourceMappingURL=01-color-switcher.18efa0df.js.map