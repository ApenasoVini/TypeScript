//     Desafio 1: Criar um objeto funcionário com:
//         - Array de strings com os nomes dos supervisores
//         - Função de bater ponto que recebe a hora (number) e retorna uma string
//             -> Ponto normal ( <= 8)
//             -> Fora do horário ( > 8)
let funcionario: { supervisores: string[], baterPonto: (hora: number) => string } = {
    supervisores: ['Cléber', 'Ademar', 'Rúbio'],
    baterPonto(hora: number): string {
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

//     Desafio 2: Criar um objeto correntista com:
//         - Conta bancária com uma função para depositar valor
//              -> A conta deve ser um objeto separado chamado no objeto do correntista

type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}
let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number): void {
        this.saldo += valor
    }
}
type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
correntista.contaBancaria.depositar(3000)
console.log(correntista)