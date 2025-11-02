// O array JOGOS (seus colaboradores)
const JOGOS = [ 
    {
        "id": 1,
        "nome": "Eduardo Caetano Ferreira",
        "cargo": "Suporte Premium",
        "area": "Suporte Interno",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2024 
    },
    {
        "id": 2,
        "nome": "Pedro Henrique Silva Souza",
        "cargo": "Supervisor / Líder",
        "area": "Suporte Interno",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2023 
    },
    {
        "id": 3,
        "nome": "João Vitor Ferreira Ribeiro da Silva",
        "cargo": "Supervisor / Líder",
        "area": "Suporte Interno",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2020 
    },
    {
        "id": 4,
        "nome": "Matheus Arthur Alves da Silva",
        "cargo": "Supervisor / Líder",
        "area": "Suporte Interno",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2022 
    },
    {
        "id": 5,
        "nome": "Celso Peixoto Cotta",
        "cargo": "Chefão",
        "area": "Administração",
        "local_escritorio": "Todos",
        "tempo_empresa": 2011 
    },
    {
        "id": 6,
        "nome": "Luiz Fernando de Moura",
        "cargo": "Supervisor / Líder",
        "area": "P.A.P",
        "local_escritorio": "Loja - Mongaguá",
        "tempo_empresa": 2016 
    },
    {
        "id": 7,
        "nome": "Renata Dias de Oliveira",
        "cargo": "Suporte",
        "area": "Suporte Interno",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2023 
    },
    {
        "id": 8,
        "nome": "Danilo Dos Santos Amaro",
        "cargo": "Suporte",
        "area": "Suporte Interno",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2024 
    },
    {
        "id": 9,
        "nome": "Luiza Duarte Catattaneo",
        "cargo": "Suporte Premium",
        "area": "Suporte Interno",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2023 
    },
    {
        "id": 10,
        "nome": "Pedro Henrique Pinze Lourenço Seixalvo",
        "cargo": "Suporte",
        "area": "Suporte Interno",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2025 
    },
    {
        "id": 11,
        "nome": "Ana Beatriz da Silva Jesus",
        "cargo": "Suporte",
        "area": "Suporte Interno",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2025 
    },
    {
        "id": 12,
        "nome": "Pedro Mendonça de Oliveira",
        "cargo": "Suporte",
        "area": "Suporte Interno",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2025 
    },
    {
        "id": 13,
        "nome": "Luiz Guilherme Bandeira de Jesus",
        "cargo": "Suporte",
        "area": "Suporte Interno",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2025 
    },
    {
        "id": 14,
        "nome": "Sarah de Almeida",
        "cargo": "Suporte",
        "area": "Suporte Interno",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2025 
    },
    {
        "id": 15,
        "nome": "Luana Angelo de Ramos",
        "cargo": "Suporte",
        "area": "Suporte Interno",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2025 
    },
    {
        "id": 16,
        "nome": "Ana Beatriz Silva Pereira",
        "cargo": "Suporte",
        "area": "Suporte Interno",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2025 
    },
    {
        "id": 17,
        "nome": "Danielly Cristina da Costa Campos",
        "cargo": "Supervisor / Líder",
        "area": "Retenção",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2019 
    },
    {
        "id": 18,
        "nome": "Beatriz Luz da Silva Flaminio Ferreira",
        "cargo": "Retenção",
        "area": "Retenção",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2024 
    },
    {
        "id": 19,
        "nome": "Gabriel Lucchini Pupo",
        "cargo": "Auxiliar Financeiro",
        "area": "Financeiro",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2025 
    },
    {
        "id": 20,
        "nome": "Paulo Bernardinelli Durval",
        "cargo": "Operador T.I.",
        "area": "T.I.",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2021 
    },
    {
        "id": 21,
        "nome": "Felipe Garbeloto Augusto",
        "cargo": "Operador T.I.",
        "area": "T.I.",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2018 
    },
        {
        "id": 22,
        "nome": "Victor de Brito Trigo",
        "cargo": "Auxiliar Financeiro",
        "area": "Financeiro",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2024 
    },
    {
        "id": 23,
        "nome": "Gabriela Simão",
        "cargo": "Auxiliar Financeiro",
        "area": "Financeiro",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2024 
    },
    {
        "id": 24,
        "nome": "Carolini Pontes Ramiro",
        "cargo": "Suporte",
        "area": "Suporte Interno",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2025 
    },
    {
        "id": 25,
        "nome": "Fylipe Pablo de Oliveira Barros",
        "cargo": "Torre",
        "area": "Torre de Serviços",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2023 
    },
    {
        "id": 26,
        "nome": "Victor Hugo dos Santos Gonçalves",
        "cargo": "Auxiliar Financeiro",
        "area": "Financeiro",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2023 
    },
    {
        "id": 27,
        "nome": "Adriana Jacqueline de Lara",
        "cargo": "Supervisor / Líder",
        "area": "Torre de Serviços",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2022 
    },
    {
        "id": 28,
        "nome": "Jeferson Lucas Savi Baraldo",
        "cargo": "Torre",
        "area": "Torre de Serviços",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2023 
    },
    {
        "id": 29,
        "nome": "Pedro Bolota Marques",
        "cargo": "Operador T.I.",
        "area": "T.I.",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2024 
    },
    {
        "id": 30,
        "nome": "Gustavo Silva Mistro",
        "cargo": "Torre",
        "area": "Torre de Serviços",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2024 
    },
    {
        "id": 31,
        "nome": "Marcelo Gonçalvez Muniz",
        "cargo": "Torre",
        "area": "Torre de Serviços",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2023 
    },
        {
        "id": 32,
        "nome": "Pedro Augusto Scardovelli de Oliveira",
        "cargo": "Suporte Provedor",
        "area": "L.M.P",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2021 
    },
    {
        "id": 33,
        "nome": "Caio Henrique Oliveira Severo",
        "cargo": "Suporte Provedor",
        "area": "L.M.P",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2022 
    },
    {
        "id": 34,
        "nome": "Ivo Eliseu da Silva Junior",
        "cargo": "Qualidade",
        "area": "Gestão Qualidade",
        "local_escritorio": "Loja Itanhaém",
        "tempo_empresa": 2022 
    },
    {
        "id": 35,
        "nome": "Thatiane Ribeiro Moreira Santos",
        "cargo": "Qualidade",
        "area": "Gestão Qualidade",
        "local_escritorio": "Loja Itanhaém",
        "tempo_empresa": 2021 
    },
    {
        "id": 36,
        "nome": "Deise Gonçalves Bernardino",
        "cargo": "Qualidade",
        "area": "Gestão Qualidade",
        "local_escritorio": "Loja Itanhaém",
        "tempo_empresa": 2025 
    },
    {
        "id": 37,
        "nome": "Cleber da Silva Torres",
        "cargo": "Suporte Provedor",
        "area": "L.M.P",
        "local_escritorio": "Call Center",
        "tempo_empresa": 2022
    },
    {
        "id": 38,
        "nome": "Alexandre Peixoto Cotta",
        "cargo": "Chefão",
        "area": "Administração",
        "local_escritorio": "Todos",
        "tempo_empresa": 2000
    },
    {
        "id": 39,
        "nome": "Marcella Arruda Cotta",
        "cargo": "Chefão",
        "area": "Administração",
        "local_escritorio": "Todos",
        "tempo_empresa": 2021
    },
    
];
