var products=[{name:"gold star",price:30},{name:"green shell",price:10},{name:"red shell",price:40},{name:"banana skin",price:5},{name:"mushroom",price:50}],promos=products.filter((function(e){return e.price>20})).map((function(e){return"PROMO: the ".concat(e.name," is ").concat(e.price/2," $")}));console.log(promos);
//# sourceMappingURL=index.35304658.js.map
