const t=document.querySelector("[data-start"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){r=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.setAttribute("disabled","")})),e.addEventListener("click",(function(){clearInterval(r),t.removeAttribute("disabled")}));let r=null;
//# sourceMappingURL=01-color-switcher.eb904ae6.js.map