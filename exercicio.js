// ==========================================
// ETAPA 1 - ARRAY DE LIVROS
// ==========================================

const livros = [
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


// ==========================================
// ETAPA 1 - MOSTRAR OS TÍTULOS
// ==========================================

livros.forEach(livro => {
    console.log(livro.titulo);
});


// ==========================================
// ETAPA 2 - MOSTRAR INFORMAÇÕES
// ==========================================

livros.forEach(livro => {
    console.log(`${livro.titulo} - ${livro.autor} - ${livro.categoria}`);
});


// ==========================================
// ETAPA 3 - CRIAR LISTA DE TÍTULOS
// ==========================================

const titulos = livros.map(livro => livro.titulo);

console.log(titulos);


// ==========================================
// ETAPA 4 - CRIAR LISTA DE INFORMAÇÕES
// ==========================================

const informacoes = livros.map(livro => {
    return `${livro.titulo} - ${livro.autor}`;
});

console.log(informacoes);


// ==========================================
// ETAPA 5 - ENCONTRAR LIVROS DISPONÍVEIS
// ==========================================

const livrosDisponiveis = livros.filter(
    livro => livro.disponivel === true
);

console.log("Livros disponíveis:");

livrosDisponiveis.forEach(livro => {
    console.log(livro.titulo);
});


// ==========================================
// ETAPA 6 - FILTRAR POR CATEGORIA
// ==========================================

const categoriaSelecionada = "Fantasia";

const livrosFantasia = livros.filter(
    livro => livro.categoria === categoriaSelecionada
);

console.log("Livros de Fantasia:");

livrosFantasia.forEach(livro => {
    console.log(livro.titulo);
});


// ==========================================
// ETAPA 7 - LIVROS A PARTIR DO ANO 2000
// ==========================================

const livrosRecentes = livros.filter(
    livro => livro.ano >= 2000
);

console.log("Livros publicados a partir de 2000:");

livrosRecentes.forEach(livro => {
    console.log(livro.titulo);
});


// ==========================================
// ETAPA 8 - VALOR TOTAL DOS LIVROS
// ==========================================

const valorTotal = livros.reduce(
    (total, livro) => total + livro.preco,
    0
);

console.log(`Valor total dos livros: R$ ${valorTotal.toFixed(2)}`);


// ==========================================
// ETAPA 9 - PREÇO MÉDIO
// ==========================================

const somaPrecos = livros.reduce(
    (total, livro) => total + livro.preco,
    0
);

const precoMedio = somaPrecos / livros.length;

console.log(`Preço médio dos livros: R$ ${precoMedio.toFixed(2)}`);


// ==========================================
// ETAPA 10 - FILTER + MAP
// ==========================================

const titulosDisponiveis = livros
    .filter(livro => livro.disponivel === true)
    .map(livro => livro.titulo);

console.log("Títulos dos livros disponíveis:");

console.log(titulosDisponiveis);


// ==========================================
// ETAPA 11 - FILTER + REDUCE
// ==========================================

const valorDisponiveis = livros
    .filter(livro => livro.disponivel === true)
    .reduce((total, livro) => total + livro.preco, 0);

console.log(
    `Valor dos livros disponíveis: R$ ${valorDisponiveis.toFixed(2)}`
);


// ==========================================
// ETAPA 12 - RELATÓRIO
// ==========================================

function gerarRelatorio(livros) {

    // Quantidade total de livros
    const totalLivros = livros.length;

    // Filtrar livros disponíveis
    const disponiveis = livros.filter(
        livro => livro.disponivel === true
    );

    // Calcular valor total
    const valorAcervo = livros.reduce(
        (total, livro) => total + livro.preco,
        0
    );

    // Calcular preço médio
    const precoMedioAcervo = valorAcervo / livros.length;

    console.log("===== RELATÓRIO DA BIBLIOTECA =====");

    console.log(`Total de livros: ${totalLivros}`);

    console.log(`Livros disponíveis: ${disponiveis.length}`);

    console.log(
        `Preço médio: R$ ${precoMedioAcervo.toFixed(2)}`
    );

    console.log(
        `Valor total do acervo: R$ ${valorAcervo.toFixed(2)}`
    );

    console.log("--- LIVROS ---");

    livros.forEach(livro => {
        console.log(`${livro.titulo} - ${livro.autor}`);
    });
}

gerarRelatorio(livros);


// ==========================================
// DESAFIO FINAL
// ==========================================

function contarPorCategoria(livros, categoria) {

    const livrosDaCategoria = livros.filter(
        livro => livro.categoria === categoria
    );

    return livrosDaCategoria.length;
}

const totalFantasia = contarPorCategoria(
    livros,
    "Fantasia"
);

console.log(`Livros de fantasia: ${totalFantasia}`);


// ==========================================
// DESAFIO EXTRA
// ==========================================

function obterLivrosCaros(livros, valor) {

    return livros.filter(
        livro => livro.preco > valor
    );
}

const livrosCaros = obterLivrosCaros(livros, 50);

console.log("Livros acima de R$ 50:");

livrosCaros.forEach(livro => {
    console.log(`${livro.titulo} - R$ ${livro.preco.toFixed(2)}`);
});