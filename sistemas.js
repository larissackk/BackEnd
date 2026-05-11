const fs = require("fs");
let produtos = require("./produtos.json");





function mostrar() {
 console.log(produtos);
}






function adicionar() {
 let novo = {
   nome: "Chocolate",
   preco: 15.00,
   marca: "KKKK",
   estoque: 20,
   codigo: "2526"
 };


 produtos.push(novo);
 fs.writeFileSync("produtos.json", JSON.stringify(produtos));
}






function filtrar() {
 let baratos = produtos.filter(p => p.preco > 10);
 console.log(baratos);
}

function desconto() {
    produtos.forEach(p => {
        
        if (p.preco) {
            let valorNumerico = Number(p.preco); 
            p.preco = (valorNumerico * 0.90).toFixed(2);
        }
    });

    fs.writeFileSync("produtos.json", JSON.stringify(produtos, null, 2));
    console.log("Descontos aplicados com sucesso!");
}
function buscar() {
 let achado = produtos.find(p => p.nome === produtos.json  );
 console.log(achado);
}




mostrar();
adicionar();
filtrar();
desconto();
buscar();
