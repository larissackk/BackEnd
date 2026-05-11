const fs = require("fs");
const produtos = [
 {
   nome: "Arroz",
   preco:  10.00,
   quantidade: 100,
   peso: 10,
   marca: "AAAAA",
   codigo: 1234
 },
 {
   nome: "Feijão",
   preco:  20.00,
   quantidade: 370,
   peso:15,
   marca: "BBBB",
   codigo: 5678
 },
 {
   nome: "Açucar",
   preco: 18.05,
   quantidade: 90,
   peso: 25,
   marca: "CCCC",
   codigo: 8910
 },
 {
   nome: "Café",
   preco: 39.00,
   quantidade: 540,
   peso: 12,
   marca: "DDDD",
   codigo: 1112
 },
 {
   nome: "Oléo",
   preco: 10.00,
   quantidade: 120,
   peso: 30,
   marca: "EEEE",
   codigo: 1314
 },
 {
   nome: "Farinha",
   preco: 17.00,
   quantidade: 222,
   peso: 50,
   marca: "FFFF",
   codigo: 1516
 },
 {
   nome: "Chá ",
   preco: 7.00,
   quantidade: 125,
   peso: 18,
   marca: "GGGG",
   codigo: 1718
 },
 {
   nome: "Aveia",
   preco: 21.00,
   quantidade: 800,
   peso: 40,
   marca: "HHHH",
   codigo: 1920
 },
 {
   nome: "Pão",
   preco: 12.00,
   quantidade: 600,
   peso: 27,
   marca: "IIII",
   codigo: 2122
 },
 {
   nome: "Bifé",
   preco: 30.00,
   quantidade: 66,
   peso: 14,
   marca: "JJJJ",
   codigo: 2324
 }
]


fs.writeFileSync("produtos.json", JSON.stringify(produtos));




console.log("JSON de mercado criado!");
