//String
let nome: string = 'Vini'
console.log(nome)

//Number
let idade: number = 16
console.log(idade)

//Boolean
let menor: boolean = true
console.log(menor)

//Array
let lista: any[] = ["Maçã", "Banana"]
lista = [100, 400]
console.log(lista)

//Tuplas
let endereco: [string, number] = ["Av Principal", 99]
endereco = ["Rua Secundária", 123]
console.log(endereco)

//Enums
enum Etnia {
    Preto = 5,
    Branco,
    Amarelo,
    Pardo,
    Indigena
}

let minhaEtnia: Etnia = Etnia.Preto
console.log(minhaEtnia)

//Any
let carro: any = 'BMW'
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

function retornarNome(): string {
    return nome
}
console.log(retornarNome())

function multiplicar(num1: number, num2: number): number {
    return num1 * num2
}
console.log(multiplicar(4, 5))