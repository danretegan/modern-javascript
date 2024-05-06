var getTodos=function(o){var e=new XMLHttpRequest;e.addEventListener("readystatechange",(function(){4===e.readyState&&200===e.status?o(void 0,e.responseText):4===e.readyState&&o("Could not fetch data!",void 0)})),e.open("GET","https://jsonplaceholder.typicode.com/todos/"),e.send()};
//! Exemplificare cod asincron:
console.warn("Exemplificare cod asincron:"),console.log(1),console.log(2),getTodos((function(o,e){console.warn("callback fired!"),o?console.log("error:",o):console.log("data:",e)})),console.log(3),console.log(4);
//# sourceMappingURL=index.619e95ee.js.map
