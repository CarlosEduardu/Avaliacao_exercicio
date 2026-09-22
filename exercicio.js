// 1. Criar um array de nomes

// Crie um array com 5 nomes.
// Exiba todos os nomes no console usando um for.

let nomes = ["Carlos", "Rafael", "Marcos", "Beatriz", "Larissa"];

for (let i = 0; i < nomes.length; i++) {
    console.log(`Nome ${i + 1}: ${nomes[i]}`);
}

// 2. Criar um objeto aluno

// O objeto deve ter nome, idade e curso.
// Exiba uma frase com essas informações.

let aluno = {
    nome: "Carlos",
    idade: 23,
    curso: "ADS"
};

console.log(`${aluno.nome} tem ${aluno.idade} anos e faz ${aluno.curso}.`);

// 3. Trabalhando com um array de alunos

// Crie um array com 3 objetos de alunos.
// Mostre no console apenas os nomes.
// Mostre apenas os alunos de um curso específico.
// Desafio extra para calcular a média das idades.

let listaAlunos = [
    {
        nome: "Carlos",
        idade: 23,
        curso: "ADS"
    },

    {
        nome: "Amanda",
        idade: 21,
        curso: "Administração"
    },

    {
        nome: "Lucas",
        idade: 20,
        curso: "ADS"
    }
];


for (let i = 0; i < listaAlunos.length; i++) {
    console.log(listaAlunos[i].nome);
}


for (let i = 0; i < listaAlunos.length; i++) {
    if (listaAlunos[i].curso === "ADS") {
        console.log(listaAlunos[i]);
    }
}


function calcularMediaIdades(alunos) {
    let soma = 0;

    for (let aluno of alunos) {
        soma += aluno.idade;
    }

    return soma / alunos.length;
}

let media = calcularMediaIdades(listaAlunos);

console.log(`A média das idades é ${media.toFixed(1)} anos.`);
