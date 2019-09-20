//1. Escreva a expressão em que atribui o
// valor `1` a `x` se `x` maior do que `y`.

function atribuiValor(a, b){
    if (a > b){
       return x = 1
    }
}

// ou

let x = 3
let y = 2

console.log("Valor de x antes do if",x)
if (x > y){
    x = 1
    console.log("Valor de x depois do if",x)
}

console.log("Valor de x após sair do if",x)

//2. Agora reescreva a expressão anterior
//atribuindo 0 a `x` caso ele seja menor ou igual a y

x > y ? x = 1 : x = 0

function atribuiValor(a, b){
    if (a > b){
        return x = 1
    } else {
        return x = 0
    }
}

// ou

let x = 3
let y = 2

if (x > y) {
    x = 1
} else {
    x = 0
}

//3. Você foi contratada para desenvolver um jogo,
// a cada vez que o usuário acerta, ele ganha 5 pontos.
// Quando se atinge a pontuação 100 ele entra na faixa
// bônus e sua pontuação é duplicada até ele atingir 
// 250 pontos,quando retorna a pontuação normal. Crie
// o código para implementar a lógica que calcula esse 
// score

let pontuacaoUsuario = 0
let pontuacaoAdicional = 5

function jogar(resultado){
    resultado = Boolean(Math.floor(Math.random()*2))
    resultado?console.log("Você acertou!"):console.log("Você errou!")
    if (resultado) {
        if (pontuacaoUsuario < 100 || pontuacaoUsuario > 250){
            pontuacaoUsuario += pontuacaoAdicional
            console.log("Você ganhou " + pontuacaoAdicional + " pontos e atingiu um total de " + pontuacaoUsuario)
        } else if (pontuacaoUsuario >= 100 && pontuacaoUsuario <= 250){
            pontuacaoUsuario += pontuacaoAdicional*2
            console.log("Você ganhou " + pontuacaoAdicional*2 + " pontos e atingiu um total de " + pontuacaoUsuario)
        }
    }
}


//4. Reescreva a seguinte condicional
// sem usar o operador `!`:
// item = ! ( i < 10 || v >= 50 )

item = i >= 10 && v < 50

// refs: 
// - http://www.math.toronto.edu/preparing-for-calculus/3_logic/we_3_negation.html
// - https://centraldefavoritos.com.br/2017/01/02/negacao-de-proposicoes/ (ver: "Negação de uma Proposição Disjuntiva")


//5. Escreva um código que receba um valor 
// digitado pelo usuário e mostre `par`
// se o número for par e `impar`
// se for impar.

function parOuImpar(){
    if (prompt("Digite um número!")%2 == 0){
        return "Esse número é par!"
    } else {
        return "Esse número é ímpar!"
    }
}

//6. Escreva a expressão que retorna `positivo` 
// se dois números forem positivos
// e `negativo` se dois números 
// forem negativos.

function positivoOuNegativo(num1, num2){
    if (num1 >= 0 && num2 >= 0){
        return "Positivo"
    } else if (num1 < 0 && num2 < 0 ) {
        return "Negativo"
    } else {
        return "Os sinais são diferentes!"
    }
}

//7. Escreva a expressão em que retorna `true` se
// dois números tiverem os mesmos
// sinais (+ / -) e `false` 
// se tiverem sinais
// diferentes.

if (num1 >=0 && num2 >= 00 || num1 < 0 && num2 < 0); return true

function comparaSinais(num1, num2){
    if (num1 >=0 && num2 >= 0 || num1 < 0 && num2 < 0) {
        return true
    } else {
        return false
    }
}

// ou

let x = 1, y = -2
let sinalx = Math.sign(x)
let sinaly = Math.sign(y)

if (sinalx > 0 && sinaly > 0 || sinalx < 0 && sinaly < 0){
    return true
} else {
    return false
}

// ou

Math.sign(sinalx*sinaly)>0?true:false

//8. Duas condicionais são equivalentes
// quando, dado um mesmo input, devolvem
// o mesmo output. Qual das próximas
// condicionais são equivalentes? Porque?

// Gera um numero randomico entre -10 e 10.
const rand = Math.floor(Math.random() * 21) - 10

// A
if (rand > 0) {
	console.log(`O valor é positivo: ${rand}!`)
} else {
	if (rand < 0) {
		console.log(`O valor é negativo: ${rand}!`)
	} else {
		console.log(`O valor é zero!`)
	}
}

// B
if (rand > 0) {
	console.log(`O valor é positivo: ${rand}!`)
}
if (rand < 0) {
	console.log(`O valor é negativo: ${rand}!`)
} else {
	console.log(`O valor é zero!`)
}

// C
if (rand > 0) {
	console.log(`O valor é positivo: ${rand}!`)
}
if (rand < 0) {
	console.log(`O valor é negativo: ${rand}!`)
}
if (rand === 0) {
	console.log(`O valor é zero!`)
}

// Resposta: A e C!

//9. Reescreva a próxima expressão usando
// um if / else.
// switch (day) {
// 	case 0: 
// 		console.log("Segunda")
// 		break
// 	case 1:
// 		console.log("Terça")
// 		break
// 	case 2:
// 		console.log("Quarta")
// 		break
// 	case 3:
// 		console.log("Quinta")
// 		break
// 	case 4:
// 		console.log("Sexta")
// 		break
// 	case 5:
// 		console.log("Sábado")
// 		break
// 	case 6:
// 		console.log("Domingo")
// 		break
// 	default:
// 		throw "Dia inválido!"
// }

function diaDaSemana(day){
    if (day == 0){
        console.log("Segunda")
    } else if (day == 1) {
        console.log("Terça")
    } else if (day == 2){
        console.log("Quarta")
    } else if (day == 3) {
        console.log("Quinta")
    } else if (day == 4){
        console.log("Sexta")
    } else if (day == 5){
        console.log("Sábado")
    } else if (day == 6){
        console.log("Domingo")
    } else {
        throw "Dia inválido!"
    }
}

//10. Reescreva a próxima expressão usando
// o operador ternário
// let rand
// if (Math.random() > 0.5) {
// 	rand = true
// } else {
// 	rand = false
// }

let rand = (Math.random() > 0.5)?true:false

//11. Reescreva a próxima expressão usando
// o operador ternário
// let color
// if (r > g && r > b) {
// 	color = "Vermelho"
// } else if (g > b && g > r) {
// 	color = "Verde"
// } else if (b > r && b > g) {
// 	color = "Azul"
// }

let color = (r > g && r > b)?"Vermelho":(g > b && g > r)?"Verde":(b > r && b > g)?"Azul":"Cinza"

// ou

let color = (r > g && r > b)?"Vermelho":(g > b && g > r)?"Verde":"Azul"


//12. Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpar contra o compudador. 
// A ideia é você gerar um número aleatório para o 
// computador e comparar com o número informado pelo usuário e 
// mostrar quem venceu a partida. Divirta-se
// Dicas: 
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para coletar o número informado pelo usuário


let opcaoUsuario = "par"
let numUsuario = 1
let numComputador = Math.floor(Math.random()*2)
console.log(numComputador)
let resultadoPar = (numUsuario + numComputador)%2 == 0

if (opcaoUsuario == "par" && resultadoPar == true){
    console.log("Você ganhou!")
} else if (opcaoUsuario == "ímpar" && resultadoPar == false) {
    console.log("Você ganhou!")
} else {
    console.log("Você perdeu!")
}

// ou (a terminar ainda)

function jogoParOuImpar(){
    let apostaUsuario = prompt("Digite um número de 0 a 9")
    let apostaComputador = console.log(Math.floor(Math.random()*10))
    if ((apostaUsuario + apostaComputador)%2 == 0 && apostaUsuario%2 == 0 || (apostaUsuario + apostaComputador)%2 != 0 && apostaUsuario%2 != 0){
        return "Você ganhou!"
    } else {
        return "Você perdeu!"
    }
}

function jogoParOuImpar(){
    let apostaUsuario = prompt("Escolha par (0) ou ímpar (1)")
    let apostaComputador = console.log(Math.floor(Math.random()*10))
    if (apostaUsuario == "par" || apostaUsuario == "Par" || apostaUsuario == "PAR"){
        if (apostaComputador == 0){
            return "x"
        } else {
            return "y"
        }
}

//13. Construa a logica do menu de clientes de um site
// caso o cliente seja perfil clássico, apresente uma ul
// contendo nos li os itens terno, blazer, camisa,calça. Caso
// o cliente seja do perfil esportivo mostre os itens: camisetas,
// short, bermudas, moleton. Caso o cliente não informe o perfil, 
// mostre todas as opções

