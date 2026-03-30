const produtos = ["Arroz Integral", "Café", "Feijão Carioca", "Açúcar mascavo", "Leite", "Óleo", "Ovos", "Pão", "Manteiga", "Chocolate"]
const valores = ["R$ 28,00", "R$ 8,50", "R$ 16,00", "R$ 4,50", "R$ 6,50", "R$ 5,00", "R$ 18,00", "R$ 9,00", "R$ 12,00", "R$ 22,00"]
const estoque = ["7 unidades", "4 unidades", "10 unidade", "6 unidades", "3 unidades", "12 unidades", "24 unidades", "20 unidades", "6 unidades", "10 unidades"]


function mostrarESTOQUE() {
    let contador = 0
  while(contador <produtos.length){
      console.log(produtos[contador] + " - " + valores[contador] + " - " + estoque[contador])
contador++
  }
}

function adicionarPRODUTO() {
    produtos.push("Papel Hgienioco")
    valores.push("R$ 17,00")
    estoque.push("23 unidades")
}

function remorerPRODUTO(){
    produtos.splice(10, 1)
    valores.splice(10, 1)
    estoque.splice(10, 1)
}


mostrarESTOQUE()

adicionarPRODUTO()

console.log("-----------------------------------")

mostrarESTOQUE()

remorerPRODUTO()

console.log("-----------------------------------")

mostrarESTOQUE()