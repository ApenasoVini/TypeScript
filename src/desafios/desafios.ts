/*
    Desafio 1: Criar um objeto funcionário com:
        - Array de strings com os nomes dos supervisores
        - Função de bater ponto que recebe a hora (number) e retorna uma string
            -> Ponto normal ( <= 8)
            -> Fora do horário ( > 8)
*/

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