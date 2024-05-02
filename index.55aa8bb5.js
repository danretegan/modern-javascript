var article=document.querySelector("article");
//! children:
console.log(article),console.log(article.children),console.log(Array.from(article.children)),
//! Acum putem folosi metoda forEach:
Array.from(article.children).forEach((function(e){e.classList.add("new-class"),console.log("children:",e)})),console.log("===============");
//! parentElement:
var title=document.querySelector("h2");console.log("parent Element:",title.parentElement),console.log("parent parent Element:",title.parentElement.parentElement),console.log("==============="),
//! nextElementSibling:
console.log("next Element Sibling:",title.nextElementSibling),console.log("previous Element Sibling:",title.previousElementSibling),console.log("==============="),
//! chaining:
console.log("chaining:",title.nextElementSibling.parentElement.children);
//# sourceMappingURL=index.55aa8bb5.js.map
