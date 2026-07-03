//1 - Faça um programa que peça um número inicial, uma razão, e um limite, o algoritmo irá realize uma PA Com os valores inseridos, valide para o limite ser superior ao início.
let inicio = Number(prompt("Digite o número inicial:"));
let razao = Number(prompt("Digite a razão:"));
let limite = Number(prompt("Digite o limite:"));

if (limite <= inicio) {
    console.log("Erro! O limite deve ser maior que o número inicial.");
} else {
    let termo = inicio;

    while (termo <= limite) {
        console.log(termo);
        termo += razao;
    }
}


//2 - Um usuário precisar saber o maior entre dois números digitados. Desenvolva o algoritmo que resolva isso.
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

if (num1 > num2) {
    console.log("O maior número é: " + num1);
} else if (num2 > num1) {
    console.log("O maior número é: " + num2);
} else {
    console.log("Os dois números são iguais.");
}


//3 - Em um jogo de futebol quantas decidas são necessárias para um time fazer um touchdown, sendo que o time precisa de pelo menos 3 descidas para concluir 12 jardas, saindo da última jarda do seu campo de defesa.
//Considerando que são necessárias 12 jardas e cada descida avança 4 jardas.

let jardas = 12;
let descidas = 0;

while (jardas > 0) {
    jardas -= 4;
    descidas++;
}

console.log("São necessárias " + descidas + " descidas.");

//Saída:
São necessárias 3 descidas.

  
//4 - Normalmente um jogo da NBA tem em média um total de 200 pontos por jogo, sabe-se que o jogo tem 4 quartos de 12 minutos.
//Enquanto um jogo de futebol do campeonato brasileiro tem em média 2,53 gols por jogo. Um jogo de futebol se considerarmos 3 minutos de acréscimos em cada um dos tempos, teremos 96 minutos de jogo no total.
//Quantos pontos a mais são marcados proporcionalmente ao tempo em um jogo da nba comparado a gols marcados no campeonato brasileiro?
  
let pontosNBA = 200;
let tempoNBA = 48;

let golsBrasileirao = 2.53;
let tempoBrasileirao = 96;

let mediaNBA = pontosNBA / tempoNBA;
let mediaBrasileirao = golsBrasileirao / tempoBrasileirao;

let diferenca = mediaNBA / mediaBrasileirao;

console.log("NBA: " + mediaNBA.toFixed(2) + " pontos/min");
console.log("Brasileirão: " + mediaBrasileirao.toFixed(4) + " gols/min");
console.log("A NBA marca aproximadamente " + diferenca.toFixed(2) + " vezes mais pontos por minuto.");


//5 - Ashley precisa saber a tabuada de um número desejado. Ela também deseja informar até que número ela quer ver a tabuada. Desenvolva o algoritmo que resolva isso.

let numero = Number(prompt("Digite o número da tabuada:"));
let limite = Number(prompt("Mostrar até qual multiplicador?"));

for (let i = 1; i <= limite; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}


//6 - Kimberly Deseja saber o fatorial de um número. Desenvolva um algoritmo que solucione isso.
let numero = Number(prompt("Digite um número:"));

let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log("Fatorial = " + fatorial);


//7 - Baltazar precisa saber se um número é positivo ou negativo, desenvolva o algoritmo que resolva isso.
let numero = Number(prompt("Digite um número:"));

if (numero > 0) {
    console.log("Número positivo.");
} else if (numero < 0) {
    console.log("Número negativo.");
} else {
    console.log("O número é zero.");
}


//8 - Uma escola precisa de um programa que ao lançar 4 notas de um aluno deverão calcular sua média e imprimir os seguintes status: Aprovado se média 70 ou superior, Recuperação se média entre 50 e 69 e Reprovado se inferior a 50.
let nota1 = Number(prompt("Nota 1:"));
let nota2 = Number(prompt("Nota 2:"));
let nota3 = Number(prompt("Nota 3:"));
let nota4 = Number(prompt("Nota 4:"));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("Média: " + media);

if (media >= 70) {
    console.log("Aprovado");
} else if (media >= 50) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}


//9 - A empresa que você trabalha resolveu dar um aumento de salário aos seus colaboradores, você deve programar uma aplicação que receba o salário atual de um colaborador e o reajuste cumprindo as seguintes regras: Os salários até R$ 280,00 aumento de 20% Os salários entre R$ 281,00 e R$ 700,00: aumento de 15% Ossalários entre R$ 701,00 e R$ 1500,00: aumento de 10% Os salários superiores a R$ 1501,00 aumento de 5%.
//Após o aumento ser realizado, informe na tela:  O salário antes do reajuste;
//O percentual de aumento aplicado; O valor do aumento; O novo salário, após o aumento;
let salario = Number(prompt("Digite o salário:"));

let percentual;

if (salario <= 280) {
    percentual = 20;
} else if (salario <= 700) {
    percentual = 15;
} else if (salario <= 1500) {
    percentual = 10;
} else {
    percentual = 5;
}

let aumento = salario * percentual / 100;
let novoSalario = salario + aumento;

console.log("Salário antes do reajuste: R$ " + salario.toFixed(2));
console.log("Percentual aplicado: " + percentual + "%");
console.log("Valor do aumento: R$ " + aumento.toFixed(2));
console.log("Novo salário: R$ " + novoSalario.toFixed(2));


//10 - A idade média de Mariana e Beatriz é 85, se a média entre Beatriz, Mariana e Fabio é 90, qual a idade de Fabio?
let mediaMB = 85;
let mediaMBF = 90;

let somaMB = mediaMB * 2;
let somaMBF = mediaMBF * 3;

let idadeFabio = somaMBF - somaMB;

console.log("A idade de Fábio é " + idadeFabio + " anos.");

//Saída:
A idade de Fábio é 100 anos.
