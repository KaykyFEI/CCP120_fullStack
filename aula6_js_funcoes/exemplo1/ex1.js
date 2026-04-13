/* Fazer uma página que solicita o nome e a idade do usuário, assim como o ano atual assim que a página for carregada e calcula o ano de nascimento do usuário. 
A página deve exibir o nome do usuário e seu ano de nascimento como parte de seu conteúdo. */

// Declaração da função calculaIdade
function calculaIdade(idade_digitada, anoAtual){
    let resultado = anoAtual - idade_digitada
    return resultado
}

let nome = prompt("Insira seu nome: ")
let idade = parseInt(prompt("Digite a sua idade: "))
let ano = parseInt(prompt("Digite o ano atual: "))

anoNasc = calculaIdade(idade, ano)

document.getElementById("anoNascimento").innerHTML= "Seu ano de nascimento é " + anoNasc + "."