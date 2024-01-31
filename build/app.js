"use strict";
// let canal: string = 'ViniTV'
// let inscritos: number = 1000
// console.log(canal)
// function soma(a: any, b: any) {
//     return a + b
// }
// let x
// x = 12
// x = 'abc'
// function cumprimentar(manha: boolean): string {
//     let msg: string
//     if(manha){
//         msg = 'Bom dia!'
//     } else {
//         msg = 'Olá'
//     }
//     return msg
// }
//     Desafio 1: Criar um objeto funcionário com:
//         - Array de strings com os nomes dos supervisores
//         - Função de bater ponto que recebe a hora (number) e retorna uma string
//             -> Ponto normal ( <= 8)
//             -> Fora do horário ( > 8)
// let funcionario: { supervisores: string[], baterPonto: (hora: number) => string } = {
//     supervisores: ['Cléber', 'Ademar', 'Rúbio'],
//     baterPonto(hora: number): string {
//         if (hora <= 8) {
//             return "Ponto batido!";
//         }
//         else {
//             return "Você está atrasado!";
//         }
//     }
// };
// console.log(funcionario.baterPonto(10));
// console.log(funcionario.baterPonto(7));
// console.log(funcionario.supervisores);
//     Desafio 2: Converter código Javascript em Typescript
// type ContaBancaria = {
//     saldo: number,
//     depositar: (valor: number) => void 
// }
// let contaBancaria: ContaBancaria = {
//     saldo: 3456,
//     depositar(valor: number): void {
//         this.saldo += valor
//     }
// }
// type Correntista = {
//     nome: string, 
//     contaBancaria: ContaBancaria,
//     contatos: string[] 
// }
// let correntista: Correntista = {
//     nome: 'Ana Silva',
//     contaBancaria: contaBancaria,
//     contatos: ['34567890', '98765432']
// }
// correntista.contaBancaria.depositar(3000)
// console.log(correntista)
// String
// let nome: string = 'Vini'
// console.log(nome)
// Number
// let idade: number = 16
// console.log(idade)
// Boolean
// let menor: boolean = true
// console.log(menor)
// Array
// let lista: any[] = ["Maçã", "Banana"]
// lista = [100, 400]
// console.log(lista)
// Tuplas
// let endereco: [string, number] = ["Av Principal", 99]
// endereco = ["Rua Secundária", 123]
// console.log(endereco)
// Enums
// enum Etnia {
//     Preto = 5,
//     Branco,
//     Amarelo,
//     Pardo,
//     Indigena
// }
// let minhaEtnia: Etnia = Etnia.Preto
// console.log(minhaEtnia)
// Any
// let carro: any = 'BMW'
// carro = { marca: 'BMW', ano: 2019 }
// console.log(carro)
// Funções
// function multiplicar(n1: number, n2: number): number {
//     return n1 * n2
// }
// let calculo: (x: number, y: number) => number
// calculo = multiplicar
// console.log(calculo(2, 5))
// Objetos
// let usuario: { nome: string, idade: number } = {
//     nome: 'xxx',
//     idade: 0
// }
// console.log(usuario)
// Never 
// function falha(msg: string): never {
//     throw new Error(msg)
// }
// const produto = {
//     nome: 'Maçã',
//     preco: 10,
//     validacao() {
//         if (this.nome.trim().length == 0 || !this.nome) {
//             falha('Precisa ter um nome!')
//         }
//         if (this.preco <= 0) {
//             falha('Preço inválido!')
//         }
//     }
// }
// produto.validacao()
//# sourceMappingURL=app.js.map