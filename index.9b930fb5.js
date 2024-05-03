var ul=document.querySelector("ul"),button=document.querySelector("button");button.addEventListener("click",(function(){var e=document.createElement("li");e.textContent="something to do",ul.prepend(e)}));var items=document.querySelectorAll("li");items.forEach((function(e){e.addEventListener("click",(function(e){e.target.remove()}))}));
//# sourceMappingURL=index.9b930fb5.js.map
