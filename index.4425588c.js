var paras=document.querySelectorAll("p");paras.forEach((function(t){console.log(t.textContent),t.textContent.includes("error")&&t.classList.add("error"),t.textContent.includes("success")&&t.classList.add("success")})),console.log("==================="),Array.from(paras).forEach((function(t){console.log("clasa adaugata:",t.classList.toString())}));var title=document.querySelector(".title");title.classList.toggle("test"),title.classList.toggle("test");
//# sourceMappingURL=index.4425588c.js.map
