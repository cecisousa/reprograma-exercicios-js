/* Você foi contratada para criar a lógica de um aplicativo que controla pedidos em um bar. Para funcionar sua aplicação precisa ter uma lógica capaz de executar as seguintes operações: 
1) Guardar o nome e o número da mesa do cliente
2) Ter uma função para somar os valores do pedido ao total
3) Ter uma função que permita subtrair do total um valor pago (aquela miga que sempre vai embora antes e deixa uma parte paga)
4) Ter uma função para dividir o valor da conta entre as pessoas da mesa
5) Mostrar na tela o nome, número da mesa, total de pessoas, total da conta e valor que cada um deve pagar
*/

let nomeCliente = prompt("Qual o seu nome?")

let mesaDoCliente = prompt("Qual o número da sua mesa?")

let contaFinal = 0

function somarPedidoAoTotal (valorPedido){
    return contaFinal += valorPedido
}

function subtrairDoTotal(valorPago){
    return contaFinal -= valorPago
}

let pessoasNaMesa = 4

function dividirContaFinal (){
    return contaFinal/pessoasNaMesa
}

function mostrarInfos(){
    return console.log("Seu nome é", nomeCliente + ", sua mesa é", mesaDoCliente + ", há", pessoasNaMesa, "pessoas na mesa" + ", a conta final deu R$", contaFinal + " e ficou R$", divideContaFinal(), "para cada um.")
}

//Escreva a função que retorne o resultado apresentado
// ola() -> "Hello, world!"
// ola(0) -> "Hello, world!"
// ola('Javascript") -> "Hello, world!"

function ola(){
    return "Hello, world!"
    }

// calcule(5) -> 25
// calcule(2) -> 4

function quadrado(x){
    return x*x
    }

//Calcule o resultado da função a seguir: 
function confusion(a, b) {
	a = 2 * a + b
	return a
}
let x = 2
let y = 5

y = confusion(y, x) 

x = confusion(y, x) 

// OBS.: Resultado parcial = 12; resultado final = 26

// Escreva uma função
// em Javascript que recebe
// um número devolve se ele é maior que um número gerado aleatoriamente

function numeroEhMaior(x){
    let randomico = Math.floor((Math.random())*100)
    console.log(x + " é maior que " + randomico)
    return x > (randomico)
}

// Escreva uma função em
// Javascript que recebe um
// número qualquer e retorna
// a representação binaria dele.

function representacaoBinaria(x){
    return x.toString(2)
}

// Escreva uma função em Javascript
// que recebe dois números e retorna o resto da divisão entre eles

function restoDaDivisao(x,y){
    return x%y
}

// Escreva uma função em Javascript
// que vai checar se duas ou mais strings
// possuem a mesma quantidade de letras

function mesmaQuantLetras(textoX,textoY){
    return textoX.length > textoY.length
}

// Escreva uma função que recebe um número e retorna true se o número é par e false se for ímpar

function numeroEhPar(x){
    return x%2 == 0
}

// Escreva uma função que receba uma string e retorne o número correspondente à primeira letra considerando a tabela ascii

function mostraASCII(texto){
    return texto.charCodeAt(0)
}
