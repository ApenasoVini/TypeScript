"use strict";
/*
    Desafio 1: Criar um objeto funcionário com:
        - Array de strings com os nomes dos supervisores
        - Função de bater ponto que recebe a hora (number) e retorna uma string
            -> Ponto normal ( <= 8)
            -> Fora do horário ( > 8)
*/
let funcionario = {
    supervisores: ['Cléber', 'Ademar', 'Rúbio'],
    baterPonto(hora) {
        if (hora <= 8) {
            return "Ponto batido!";
        }
        else {
            return "Você está atrasado!";
        }
    }
};
console.log(funcionario.baterPonto(10));
console.log(funcionario.baterPonto(7));
console.log(funcionario.supervisores);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
