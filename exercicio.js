// ARRAY COM OS LIVROS
// const = cria uma variável que não será reatribuída
// livros = nome da nossa variável
// [] = array, onde vamos guardar vários livros

const livros = [

    // Cada {} representa um livro
    // Cada livro possui várias informações

    {
        titulo: "O Hobbit",
        autor: "J. R. R. Tolkien",
        categoria: "Fantasia",
        ano: 1937,
        preco: 45.90,
        disponivel: true
    },

    {
        titulo: "1984",
        autor: "George Orwell",
        categoria: "Ficção",
        ano: 1949,
        preco: 39.90,
        disponivel: false
    },

    {
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        categoria: "Romance",
        ano: 1899,
        preco: 35.90,
        disponivel: true
    },

    {
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J. K. Rowling",
        categoria: "Fantasia",
        ano: 1997,
        preco: 54.90,
        disponivel: false
    },

    {
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        categoria: "Ficção",
        ano: 1943,
        preco: 29.90,
        disponivel: false
    },

    {
        titulo: "Duna",
        autor: "Frank Herbert",
        categoria: "Fantasia",
        ano: 1965,
        preco: 59.90,
        disponivel: true
    }
];

// ETAPA 1 - FOREACH

// forEach = percorre todos os itens do array
// Aqui ele vai passar por cada livro
// livro = representa o livro atual
// .titulo = pega somente o título do livro
// console.log = mostra o resultado no console

livros.forEach(function(livro) {

    console.log(livro.titulo);

});

// ETAPA 2 - FOREACH + TEMPLATE STRING

// forEach = percorre todos os livros
// ${} = coloca uma informação dentro de um texto
// `` = permite usar template strings

livros.forEach(function(livro) {

    console.log(
        `${livro.titulo} - ${livro.autor} - ${livro.categoria}`
    );

});

// ETAPA 3 - MAP

// map = cria um NOVO array transformando os itens
// Aqui vamos transformar cada objeto em apenas seu título

const titulos = livros.map(function(livro) {

    // return = devolve o resultado
    // livro.titulo = pega o título do livro

    return livro.titulo;

});

console.log(titulos);

// ETAPA 4 - MAP

// map = cria um novo array
// Aqui vamos transformar cada livro em uma frase

const informacoes = livros.map(function(livro) {

    return `${livro.titulo} - ${livro.autor}`;

});

console.log(informacoes);

// ETAPA 5 - FILTER

// filter = filtra os itens do array
// Ele mantém somente os itens que atendem à condição
//
// === = compara se os valores são exatamente iguais
// true = verdadeiro
//
// Aqui estamos pegando somente os livros disponíveis

const livrosDisponiveis = livros.filter(function(livro) {

    return livro.disponivel === true;

});


// Agora usamos forEach para percorrer
// somente os livros que passaram pelo filtro

console.log("Livros disponíveis:");

livrosDisponiveis.forEach(function(livro) {

    console.log(livro.titulo);

});

// ETAPA 6 - FILTER POR CATEGORIA

// Criamos uma variável para guardar
// a categoria que queremos procurar

const categoriaSelecionada = "Fantasia";


// filter = pega somente os livros
// que possuem a categoria escolhida

const livrosFantasia = livros.filter(function(livro) {

    return livro.categoria === categoriaSelecionada;

});


// Mostra os títulos encontrados

console.log("Livros de Fantasia:");

livrosFantasia.forEach(function(livro) {

    console.log(livro.titulo);

});

// ETAPA 7 - FILTER POR ANO

// Queremos livros publicados a partir do ano 2000
//
// >= significa "maior ou igual"

const livrosRecentes = livros.filter(function(livro) {

    return livro.ano >= 2000;

});


// Mostra os livros encontrados

console.log("Livros publicados a partir de 2000:");

livrosRecentes.forEach(function(livro) {

    console.log(livro.titulo);

});

// ETAPA 8 - REDUCE

// reduce = acumula vários valores em um único resultado
// Aqui vamos somar todos os preços
//
// total = valor acumulado
// livro.preco = preço do livro
// 0 = começamos a soma em zero

const valorTotal = livros.reduce(function(total, livro) {

    return total + livro.preco;

}, 0);


// toFixed(2) = deixa o número com 2 casas decimais

console.log(
    `Valor total dos livros: R$ ${valorTotal.toFixed(2)}`
);


// ETAPA 9 - PREÇO MÉDIO

// Primeiro usamos o valor total que já calculamos
// Depois dividimos pela quantidade de livros
//
// .length = quantidade de itens do array

const precoMedio = valorTotal / livros.length;


// toFixed(2) = mostra somente 2 casas decimais

console.log(
    `Preço médio dos livros: R$ ${precoMedio.toFixed(2)}`
);

// ETAPA 10 - FILTER + MAP

// Primeiro usamos FILTER
// para pegar somente os livros disponíveis

const livrosDisponiveis2 = livros.filter(function(livro) {

    return livro.disponivel === true;

});


// Depois usamos MAP
// para pegar somente os títulos desses livros

const titulosDisponiveis = livrosDisponiveis2.map(function(livro) {

    return livro.titulo;

});


// Mostra o novo array de títulos

console.log(titulosDisponiveis);

// ETAPA 11 - FILTER + REDUCE

// Primeiro filtramos somente os livros disponíveis

const livrosDisponiveis3 = livros.filter(function(livro) {

    return livro.disponivel === true;

});


// Depois usamos reduce para somar
// somente os preços desses livros

const valorDisponiveis = livrosDisponiveis3.reduce(function(total, livro) {

    return total + livro.preco;

}, 0);


// Mostra o resultado

console.log(
    `Valor dos livros disponíveis: R$ ${valorDisponiveis.toFixed(2)}`
);

// ETAPA 12 - FUNÇÃO DO RELATÓRIO

// function = cria uma função
// gerarRelatorio = nome da função
// (livros) = recebe o array de livros como parâmetro

function gerarRelatorio(livros) {

    console.log("===== RELATÓRIO DA BIBLIOTECA =====");


    // .length = quantidade total de livros

    console.log(`Total de livros: ${livros.length}`);


    // FILTER = pega somente os livros disponíveis

    const disponiveis = livros.filter(function(livro) {

        return livro.disponivel === true;

    });


    // .length = conta quantos livros passaram pelo filtro

    console.log(`Livros disponíveis: ${disponiveis.length}`);


    // REDUCE = soma todos os preços

    const total = livros.reduce(function(total, livro) {

        return total + livro.preco;

    }, 0);


    // Calculamos a média dividindo o total
    // pela quantidade de livros

    const media = total / livros.length;


    // Mostra a média com 2 casas decimais

    console.log(`Preço médio: R$ ${media.toFixed(2)}`);


    // Mostra o valor total

    console.log(`Valor total do acervo: R$ ${total.toFixed(2)}`);


    console.log("--- LIVROS ---");


    // FOREACH = percorre todos os livros
    // e mostra título + autor

    livros.forEach(function(livro) {

        console.log(`${livro.titulo} - ${livro.autor}`);

    });
}


// Aqui estamos chamando/executando a função

gerarRelatorio(livros);

// DESAFIO FINAL - CONTAR POR CATEGORIA

// Criamos uma função chamada contarPorCategoria
// Ela recebe:
// 1. o array de livros
// 2. a categoria que queremos procurar

function contarPorCategoria(livros, categoria) {


    // FILTER = pega somente os livros
    // que possuem a categoria informada

    const livrosDaCategoria = livros.filter(function(livro) {

        return livro.categoria === categoria;

    });


    // .length = conta quantos livros foram encontrados

    return livrosDaCategoria.length;
}


// Chamamos a função
// Procuramos pela categoria "Fantasia"

const totalFantasia = contarPorCategoria(livros, "Fantasia");


// Mostra a quantidade encontrada

console.log(`Livros de fantasia: ${totalFantasia}`);


// DESAFIO EXTRA - LIVROS CAROS

// Criamos uma função chamada obterLivrosCaros
// Ela recebe:
// 1. o array de livros
// 2. um valor para comparação

function obterLivrosCaros(livros, valor) {


    // FILTER = pega somente os livros
    // cujo preço seja maior que o valor informado
    //
    // > significa "maior que"

    const livrosCaros = livros.filter(function(livro) {

        return livro.preco > valor;

    });


    // return = devolve os livros encontrados

    return livrosCaros;
}


// Procuramos livros com preço maior que R$ 50

const livrosCaros = obterLivrosCaros(livros, 50);


// Mostra um título antes dos resultados

console.log("Livros acima de R$ 50:");


// FOREACH = percorre os livros encontrados

livrosCaros.forEach(function(livro) {

    console.log(
        `${livro.titulo} - R$ ${livro.preco.toFixed(2)}`
    );

});
