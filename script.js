// Exercício 1
let num1 = parseInt(prompt(`Insira um numero:`));
let num2 = parseInt(prompt(`Insira outro numero:`));

if (num1 > num2){

    let diferenca = num1 - num2;
    alert(`O maior número é ${num1} e a diferença é de ${diferenca}`);

} else if (num2 > num1){

    let diferenca = num2 - num1;
    alert(`O maior número é ${num2} e a diferença é de ${diferenca}`);

} else{

    alert("Os valores são iguais")
}

// Exercício 2
let num3 = parseInt(prompt("Fale um número:"));
let num4 = parseInt(prompt("Fale um número:"));

if (num3 == num4){

    alert('Os números são iguais');

} else if(num3 > num4){

    alert(`O número ${num3} é maior que o numero ${num4}`);

} else{

    alert(`O numero ${num4} é maior que o numero ${num3}`);
}

// Exercício 3
let salario = prompt("Insira o seu salário:");
let prestacao = prompt("Qual o valor da prestação?");
let calculoSal = (salario * 30)/100;  

if (prestacao > calculoSal){
    
    alert(`Empréstimo não concedido`);

} else{

    alert("Empreéstimo concedido");
}

// Exercício 4
let num5 = prompt("Escreva um numero:");

if ((num5%3) == 0 && (num5%5) == 0){

    alert("Numero Invalido");

} else if((num5%3) == 0 || (num5%5) == 0){

    if ((num5%3) == 0){
        alert("O valor é divisível por 3");
    } else{
        alert("O número é divisível por 5");
    }

} else{

    let resto = num5%2
    if (resto == 0){
        alert("O número é par");
    }else {
        alert("O número é ímpar");
    }
}

// Exercício 5
let diaDaSemana = parseInt(prompt("Informe um número de 1 a 7"));

if ( diaDaSemana > 0 && diaDaSemana < 8){

    if (diaDaSemana == 1){

        alert("Domingo");

    }else if(diaDaSemana == 2 ){

        alert("Segunda-feira");

    }else if (diaDaSemana == 3 ){

        alert("Terça-feira");

    }
    else if(diaDaSemana == 4 ){

        alert("Quarta-feira");

    }else if(diaDaSemana == 5 ){

        alert("Quinta-feira");

    }else if(diaDaSemana == 6 ){

        alert("Sexta-feira");

    }else {
        alert("Sábado");
    }

} else{

    alert("Erro");
}

// Exercício 6
let salario1 = parseFloat(prompt("Insira seu salário:"));
let reajuste = parseFloat(prompt("Insira seu reajuste de salário:"));

if(reajuste <= 5 && reajuste >= 1){

    let novosalario = salario1 +(salario1 * reajuste/100);
    alert(`Com o reajuste o salário ficará: ${novosalario}`);
    
} else{

    alert("Erro, o reajuste não esta dentro do limite");
}

// Exercício 7

let dolar = parseFloat(prompt("Converta um valor de dolar($) pra real(R$):"));
let cotacao = parseFloat(prompt("Fale a cotacao do real atual:"));
let valorconvertido = parseFloat(dolar * cotacao);

alert(`O valor de $${dolar} em real ficará R$${valorconvertido}, tendo ${cotacao} como cotação`);

// Exercício 8

let tipo = parseInt(prompt("Escolha o tipo de pulverização de 1 a 4"));
let area = parseInt(prompt("Informe sua área em Acre(s):"));
let custo1 = 50 * area;
let custo2 = 100 * area;
let custo3 = 150 * area;
let custo4 = 250 * area;

if (tipo <= 4 && tipo >= 1){

    if(tipo == 1){

        if(area > 1000 || custo1 > 750){

            if(area > 1000 && custo1 > 750){

                custo1 = (custo1 - (custo1*5/100)) - (custo1*10/100)
                alert(`O valor a ser pago é de R$${custo1}`)

            } else{

                custo1 = custo1 - ((custo1-750)*10/100)
                alert(`O valor a ser pago é de R$${custo1}`)

            }

        }else {

            alert(`Você pagará R$${custo1}`)
        }

    }else if(tipo == 2){

        if(area > 1000 || custo2 > 750){

            if(area > 1000 && custo2 > 750){

                custo2 = (custo2 - (custo2*5/100)) - (custo2*10/100)
                alert(`O valor a ser pago é de R$${custo2}`)

            } else{

                custo2 = custo2 - ((custo2-750)*10/100)
                alert(`O valor a ser pago é de R$${custo2}`)
            }

        }else {

            alert(`Você pagará R$${custo2}`)
        }

    }else if(tipo == 3){

        if(area > 1000 || custo3 > 750){

            if(area > 1000 && custo3 > 750){

                custo3 = (custo3 - (custo3*5/100)) - (custo3*10/100)
                alert(`O valor a ser pago é de R$${custo3}`)

            } else{

                custo3 = custo3 - ((custo3-750)*10/100)
                alert(`O valor a ser pago é de R$${custo3}`)
            }

        }else {

            alert(`Você pagará R$${custo3}`)
        }

    }else{

        if(area > 1000 || custo4 > 750){

            if(area > 1000 && custo4 > 750){

                custo4 = (custo4 - (custo4*5/100)) - (custo4*10/100)
                alert(`O valor a ser pago é de R$${custo4}`)

            } else{

                custo4 = custo4 - ((custo4-750)*10/100)
                alert(`O valor a ser pago é de R$${custo4}`)
            }

        }else {

            alert(`Você pagará R$${custo4}`)
        }

    }

}else{
    
    alert("Erro, por favor insira um numero entre 1 e 4")
}

// Exercício 9
let tempo = prompt("Quanto tempo durou a viagem?");
let velocidade = prompt("Qual foi a velocidade durante a viagem?");
let distancia = tempo *velocidade;
let litro = distancia /12;

litro = litro.toFixed(2)

alert(`O seu veículo percorreu ${distancia} a ${velocidade} em ${tempo} e consumiu ${litro}l de gasolina`)

// Exercício 10
let valor = parseInt(prompt("Valor da prestação:"));
let taxa = parseInt(prompt("Qual a taxa da prestação"));
let tempo1 = parseInt(prompt("Tempo de atraso:"));
let prestacao2 = valor + (valor* (taxa/100) *tempo1)

if(tempo1 != 0 || tempo1 != parseInt(tempo1)){

    alert(`O valor é de R$${prestacao2}`)
    
}else{
    
    alert("Valor inválido o tempo de atraso deve ser em dias.")
}
