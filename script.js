// O array JOGOS (seus colaboradores) é carregado do data.js

// --- Lógica de Seleção Sequencial Diária (CORRIGIDO) ---

const DATA_INICIO = new Date('2025-11-01');

// Funções seedRNG e calcularSementeDoDia foram removidas.

function getJogoDoDiaIndex() {
    const hoje = new Date();
    // Limpa o tempo para garantir que a contagem seja apenas por dia
    const hojeLimpo = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
    
    // Limpa o tempo da data de início também
    const inicioLimpo = new Date(DATA_INICIO.getFullYear(), DATA_INICIO.getMonth(), DATA_INICIO.getDate());

    const diferencaEmMilissegundos = hojeLimpo - inicioLimpo;
    // Divide por 1000ms * 60s * 60m * 24h para obter a diferença em dias
    const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    
    // O operador % garante que o índice volte ao início da lista de pessoas
    return diferencaEmDias % JOGOS.length; 
}

const JOGO_DO_DIA = JOGOS[getJogoDoDiaIndex()]; 

let jogoAcertado = false;
let tentativas = 0;

const inputElement = document.getElementById('palpite-input');
const sugestoesContainer = document.getElementById('sugestoes-container');


// --- FUNÇÕES DE LÓGICA DE COMPARAÇÃO ---

// Lógica de Ano de Admissão (Numérica)
function verificarAno(anoPalpite, anoCorreto) {
    if (anoPalpite === anoCorreto) {
        return { cor: 'verde', dica: anoPalpite };
    }
    const diferenca = Math.abs(anoPalpite - anoCorreto);
    if (diferenca <= 2) { 
        return { cor: 'amarelo', dica: anoPalpite }; 
    } else {
        let seta = anoPalpite < anoCorreto ? '↑' : '↓'; 
        return { cor: 'cinza', dica: `${anoPalpite} ${seta}` };
    }
}

// Lógica de Texto Exato (Cargo, Área, Local)
function verificarTextoExato(palpite, correto) {
    if (palpite.toLowerCase() === correto.toLowerCase()) {
        return { cor: 'verde', dica: palpite };
    }
    return { cor: 'cinza', dica: palpite };
}


// --- FUNÇÕES DE AUTOCOMPLETAR ---

function atualizarSugestoes() {
    const termo = inputElement.value.trim().toLowerCase();
    sugestoesContainer.innerHTML = ''; 
    if (termo.length < 2) return; 

    const sugestoes = JOGOS.filter(jogo => 
        jogo.nome.toLowerCase().includes(termo)
    ).slice(0, 5); 

    sugestoes.forEach(jogo => {
        const itemSugestao = document.createElement('div');
        itemSugestao.classList.add('sugestao-item');
        itemSugestao.textContent = jogo.nome;
        itemSugestao.addEventListener('click', () => {
            inputElement.value = jogo.nome;
            sugestoesContainer.innerHTML = ''; 
            inputElement.focus(); 
        });
        sugestoesContainer.appendChild(itemSugestao);
    });
}
inputElement.addEventListener('input', atualizarSugestoes);


// --- FUNÇÃO PRINCIPAL DE PALPITE E RENDERIZAÇÃO ---

function fazerPalpite() {
    if (jogoAcertado) return;
    const palpiteNome = inputElement.value.trim();
    if (!palpiteNome) return;
    
    const jogoPalpite = JOGOS.find(j => j.nome.toLowerCase() === palpiteNome.toLowerCase());

    if (!jogoPalpite) {
        alert('Por favor, selecione um nome da lista de sugestões ou digite o nome completo de um colaborador válido.');
        sugestoesContainer.innerHTML = ''; 
        return;
    }

    tentativas++;
    sugestoesContainer.innerHTML = ''; 
    
    // --- LÓGICA DE VITÓRIA ATUALIZADA: MENSAGEM ACIMA E MARCAÇÃO EM VERDE NA LISTA ---
    if (jogoPalpite.nome === JOGO_DO_DIA.nome) {
        
        // 1. Prepara o objeto de resultado com todas as cores VERDE
        const resultadoFinal = {
            cargo: { cor: 'verde', dica: JOGO_DO_DIA.cargo },
            area: { cor: 'verde', dica: JOGO_DO_DIA.area },
            local_escritorio: { cor: 'verde', dica: JOGO_DO_DIA.local_escritorio },
            tempo_empresa: { cor: 'verde', dica: JOGO_DO_DIA.tempo_empresa }
        };

        // 2. Renderiza a linha final na lista de dicas com todas as caixas verdes
        renderizarDicas(jogoPalpite, resultadoFinal); 

        // 3. Exibe a mensagem de parabéns na div #resultado-final
        const resultadoElement = document.getElementById('resultado-final');
        resultadoElement.innerHTML = `🏆 **Parabéns!** Você acertou o colaborador do dia: **${JOGO_DO_DIA.nome}** em ${tentativas} tentativas!`;
        resultadoElement.classList.add('verde');
        
        // 4. Finaliza o jogo
        jogoAcertado = true;
        inputElement.disabled = true;
        document.querySelector('button').disabled = true;
        inputElement.value = '';
        
        return;
    }
    // --- FIM LÓGICA DE VITÓRIA ATUALIZADA ---

    // Lógica para palpite incorreto (mantida)
    const resultado = {
        cargo: verificarTextoExato(jogoPalpite.cargo, JOGO_DO_DIA.cargo),
        area: verificarTextoExato(jogoPalpite.area, JOGO_DO_DIA.area),
        local_escritorio: verificarTextoExato(jogoPalpite.local_escritorio, JOGO_DO_DIA.local_escritorio),
        tempo_empresa: verificarAno(jogoPalpite.tempo_empresa, JOGO_DO_DIA.tempo_empresa)
    };

    renderizarDicas(jogoPalpite, resultado);
    inputElement.value = ''; 
}

function renderizarDicas(palpite, resultado) {
    const dicasContainer = document.getElementById('dicas-container');
    
    const novaLinha = document.createElement('div');
    novaLinha.classList.add('palpite-linha');
    
    let htmlContent = `<span class="nome-palpite">${palpite.nome}</span>`;
    
    // As 5 colunas renderizadas (Nome + 4 Dicas) na ordem do cabeçalho
    htmlContent += `<span class="dica ${resultado.cargo.cor}">${resultado.cargo.dica}</span>`;
    htmlContent += `<span class="dica ${resultado.area.cor}">${resultado.area.dica}</span>`;
    htmlContent += `<span class="dica ${resultado.local_escritorio.cor}">${resultado.local_escritorio.dica}</span>`;
    htmlContent += `<span class="dica ${resultado.tempo_empresa.cor}">${resultado.tempo_empresa.dica}</span>`; 
    
    novaLinha.innerHTML = htmlContent;
    
    dicasContainer.prepend(novaLinha);
}
