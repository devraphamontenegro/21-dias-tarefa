let nomeDoUsuario = prompt('Insira seu nome')
console.log(nomeDoUsuario)

let idadeDoUsuario = parseInt(prompt('Insira sua idade'))
console.log(idadeDoUsuario)

let alturaDoUsuario = prompt('Insira sua altura')
console.log(alturaDoUsuario)
let alturaDoUsuarioNumber = Number(alturaDoUsuario)
console.log(alturaDoUsuarioNumber)

let pesoDoUsuario = prompt('Insira seu peso')
console.log(pesoDoUsuario)
let pesoDoUsuarioNumber = Number(pesoDoUsuario)
console.log(pesoDoUsuarioNumber)

let idadeDoUsuario2 = parseInt(prompt('insira sua idade'))
console.log(idadeDoUsuario2 - 2023)

let anoNascimento = 0
anoNascimento = 2023 - idadeDoUsuario

IMC = pesoDoUsuario / (alturaDoUsuario * alturaDoUsuario)
console.log(IMC)

console.log(" Olá " + nomeDoUsuario + ", Você tem " + idadeDoUsuario + " anos de idade " + ", Nascem em " + anoNascimento + " , " + alturaDoUsuario  +  "de altura, " + pesoDoUsuario + " , de peso " + " , seu IMC é " + IMC)






