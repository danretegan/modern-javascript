var form=document.querySelector(".signup-form"),feedback=document.querySelector(".feedback");form.addEventListener("submit",(function(e){e.preventDefault();var t=form.username.value;/^[a-zA-Z]{6,12}$/.test(t)?feedback.textContent="that username is valid!":feedback.textContent="username must contain only letters & be between 6 & 12 characters"}));
//# sourceMappingURL=index.195f49a8.js.map
