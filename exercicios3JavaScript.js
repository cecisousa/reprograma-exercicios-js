// Crie um programa que conte de 1 até 10 de 1 em 1 usando a estrutura de for:

for (let i = 1; i <= 10; i++){
    console.log(i)
}

// Agora faça o programa que contar de 10 até 0, mas de 2 em dois

for (let i = 10; i >= 0; i -= 2){
    console.log(i)
    }

// Crie um  algoritmo contador de passos que acumule os valores de passos informados pelo usuário até que a meta seja atingida ( a meta é 1000 passos)

let meta = 0

while(meta <= 1000){
    let passos = parseInt(prompt("Informe quantos passos você deu"))
    meta += passos
    console.log("Você já andou",meta,"passos")
    // console.log("Parabéns, meta atingida!")
}

// Escreva uma estrutura de repetição que vai 
// calcular a soma de todos
// os números entre 0 e 100.

let soma = 0

for (let i = 0; i <=100; i++){
    soma = soma + i
}

// ou

for (let i = 0; i <=100; i++){
    soma += i
    }

// Escreva um loop para calcular a seguinte soma:
// 1 * 1 + 2 * 2 + 3 * 3 + ... + 50 * 50

let total = 0

for (let i = 1; i <= 50; i++){
    total += (i * i)
}

// ou

let total = 0

for (let i = 1; i <= 50; i++){
    total += (i ** 2)
}

// Escreva um loop para
// calcular a seguinte soma:
// 1 * 2 + 2 * 3 + 3 * 4 + ... + 249 * 250

let somaTotal = 0

for (let i = 1; i <= 249; i++){
    somaTotal += (i * (i + 1))
}

// ou

let totalDaSoma = 0

for (let x = 1, y = 2; x <= 249 && y <= 250; x++, y++){
    totalDaSoma += x*y
}

// Escreva um loop que
// vai calcular 10! (10 fatorial), o
// que significa 10 * 9 * 8 * 7 ... * 1

let fatorial = 10

for (let i = fatorial; i > 1; i--){
    fatorial *= (i - 1)
}

// ou

let fat = 10

for (let i = 9; i >= 1; i--){
    fat *= i
}

// Escreva um loop que "lance uma moeda" a cada 
// nova iteração. Considere 1 = cara,
// 0 = coroa. Rode esse loop 1000 vezes e
// mostre o numero de vezes caras e o numero
// de coroas no console.

function caraOuCoroa(){
    let cara = 0
    let coroa = 0
    for (let i = 1; i <= 1000; i++){
        let moeda = Math.floor(Math.random()*2)
        // console.log(moeda)
        if (moeda == 1) {
            cara += 1
        } else {
            coroa += 1
        }
    }
console.log("Cara:", cara, "Coroa:", coroa)
}

//Dada a lista de convidados abaixo escreva um
//loop que percorra a lista e mostre se o nome da
//pessoa convidada foi encontrado. Caso tenha sido encontrado,
// mostre a mensagem 'Seja bemvindo, <convidado>!'
//listaConvidados = ['Alice','João','Maria Rita', 'Sueli','Carlos'] 

// versão com números:

let listaNumeros = [1, 2, 3, 4, 5]

for (let i = 0; i < listaNumeros.length; i++){
    console.log("Índice:", i, "Valor", listaNumeros[i])
    listaNumeros[i]==3?console.log("Uhul!"):console.log("Deu ruim!")
}

// versão convidados:

let listaConvidados = ["Alice","João","Maria Rita","Sueli","Carlos"] 
let nomeUsuario = prompt("Informe seu nome")
let encontrado = false

for (let i = 0; i < listaConvidados.length; i++){
    if (nomeUsuario == listaConvidados[i]){
        encontrado = true
        break
    }
}
encontrado?console.log("Seja bem-vindo(a),",nomeUsuario):console.log("Você não está na lista!")