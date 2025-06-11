// Objeto que define os nós da história do quiz, incluindo perguntas e resultados.
const storyNodes = {
    // Primeira pergunta
    "q1": {
        "text": "Como o responsável pela tecnologia de uma empresa que está crescendo, sua equipe reclama que a internet está lenta e caindo. Qual sua primeira atitude?",
        "image": "https://placehold.co/600x400/0A2342/C1C3C6?text=Internet+Lenta", // Imagem representativa da lentidão na rede
        "options": [
            { "text": "Ignorar e torcer para resolver sozinho.", "next": "q1_bad1" },
            { "text": "Fazer um raio-x completo de todos os equipamentos e sistemas de internet.", "next": "q2" }, // Leva para a próxima pergunta (caminho "bom")
            { "text": "Contratar uma internet mais rápida, achando que isso vai resolver.", "next": "q1_bad2" }
        ]
    },
    // Final ruim da q1: Ignorar o problema
    "q1_bad1": {
        "text": "Ao ignorar, a internet piora, a equipe trabalha menos e a empresa perde dinheiro. Em uma apresentação importante para um cliente, a internet cai, resultando na perda de um grande negócio e na má fama da empresa.",
        "image": "https://placehold.co/600x400/FF0000/FFFFFF?text=Negocio+Perdido", // Imagem de um contrato perdido
        "resultClass": "negative", // Classe CSS para estilo de resultado negativo
        "companyMessage": "Esperar o problema acontecer custa caro. A B&G Nexus Solutions faz a **manutenção e o monitoramento** antes que algo dê errado, garantindo que seu negócio não pare."
    },
    // Final ruim da q1: Comprar mais largura de banda
    "q1_bad2": {
        "text": "Comprar internet mais rápida não resolveu os problemas internos. A empresa gastou dinheiro à toa, a lentidão continua e a equipe está frustrada.",
        "image": "https://placehold.co/600x400/FFA500/FFFFFF?text=Dinheiro+Desperdicado", // Imagem de dinheiro sendo desperdiçado
        "resultClass": "negative",
        "companyMessage": "Soluções feitas de qualquer jeito criam riscos e não resolvem de verdade. A B&G Nexus Solutions garante uma **instalação e configuração profissionais**, com segurança forte e melhor desempenho."
    },
    // Segunda pergunta
    "q2": {
        "text": "Depois de analisar, você vê que os equipamentos e sistemas estão antigos e com falhas de segurança. Como você protege as informações da empresa?",
        "image": "https://placehold.co/600x400/0A2342/C1C3C6?text=Falhas+Seguranca", // Imagem de vulnerabilidades
        "options": [
            { "text": "Instalar um sistema de segurança (firewall) e ensinar a equipe sobre como se proteger.", "next": "q3" }, // Leva para a próxima pergunta (caminho "bom")
            { "text": "Só colocar um antivírus grátis em cada computador e cruzar os dedos.", "next": "q2_bad1" },
            { "text": "Compartilhar todas as senhas com a equipe para facilitar o acesso.", "next": "q2_bad2" }
        ]
    },
    // Final ruim da q2: Antivírus gratuito
    "q2_bad1": {
        "text": "Antivírus grátis protege pouco. A empresa sofre um ataque de vírus que 'sequestra' os dados (ransomware), tudo fica bloqueado e o trabalho para, causando um grande prejuízo e perda de confiança.",
        "image": "https://placehold.co/600x400/FF0000/FFFFFF?text=Virus+Sequestra", // Imagem de um ataque de ransomware
        "resultClass": "negative",
        "companyMessage": "Segurança não é um luxo, é essencial. A B&G Nexus Solutions oferece **soluções completas de segurança digital**, protegendo seus dados e garantindo que seu negócio continue funcionando."
    },
    // Final ruim da q2: Compartilhar senhas
    "q2_bad2": {
        "text": "Compartilhar senhas é um grande perigo. Um ex-funcionário mal-intencionado consegue pegar informações importantes, causando vazamento de dados e processos judiciais contra a empresa.",
        "image": "https://placehold.co/600x400/FF0000/FFFFFF?text=Dados+Vazados", // Imagem de vazamento de dados
        "resultClass": "negative",
        "companyMessage": "Cuidar do acesso e das senhas é fundamental. A B&G Nexus Solutions cria **regras de segurança e controle de acesso** rigorosas para proteger suas informações mais valiosas."
    },
    // Terceira pergunta
    "q3": {
        "text": "A empresa está crescendo e contratando muita gente nova. Você percebe que a internet e os computadores atuais não vão aguentar tantos usuários e aparelhos. Qual sua estratégia?",
        "image": "https://placehold.co/600x400/0A2342/C1C3C6?text=Empresa+Crescendo", // Imagem de crescimento da empresa
        "options": [
            { "text": "Ignorar o problema e esperar a internet parar de vez.", "next": "q3_bad1" },
            { "text": "Planejar como aumentar os equipamentos e sistemas de internet com base no crescimento da empresa.", "next": "q4" }, // Leva para a próxima pergunta (caminho "bom")
            { "text": "Falar para os funcionários novos usarem a internet 4G do celular.", "next": "q3_bad2" }
        ]
    },
    // Final ruim da q3: Colapso da rede
    "q3_bad1": {
        "text": "A internet 'trava' com o aumento de usuários, causando paradas constantes, lentidão extrema e impacto na produtividade. A empresa não consegue crescer e perde oportunidades.",
        "image": "https://placehold.co/600x400/FF0000/FFFFFF?text=Internet+Travada", // Imagem de colapso da rede
        "resultClass": "negative",
        "companyMessage": "Estar pronto para crescer é essencial. A B&G Nexus Solutions projeta e instala **sistemas de internet que crescem com sua empresa**, sem interrupções."
    },
    // Final ruim da q3: Solução insustentável
    "q3_bad2": {
        "text": "A solução de usar dados móveis não funciona e não é profissional. A equipe tem dificuldades para trabalhar junto e acessar coisas da empresa, e a imagem da empresa fica ruim, com funcionários insatisfeitos.",
        "image": "https://placehold.co/600x400/FFA500/FFFFFF?text=Solucao+Amadora", // Imagem de solução insustentável
        "resultClass": "negative",
        "companyMessage": "Soluções feitas de improviso não são a resposta. A B&G Nexus Solutions oferece **aconselhamento e instalação de internet forte e de alta performance**, garantindo que sua equipe tenha as ferramentas certas para o sucesso."
    },
    // Quarta pergunta
    "q4": {
        "text": "Um funcionário, sem querer, apaga uma pasta super importante com dados de projetos. Você tem um plano de segurança para imprevistos (backup) pronto?",
        "image": "https://placehold.co/600x400/0A2342/C1C3C6?text=Dados+Apagados", // Imagem de dados perdidos
        "options": [
            { "text": "Entrar em pânico e tentar recuperar os arquivos na mão, sem um plano.", "next": "q4_bad1" },
            { "text": "Usar o plano de backup e recuperação de dados para restaurar os arquivos rapidinho.", "next": "q5" }, // Leva para a próxima pergunta (caminho "bom")
            { "text": "Dizer para o funcionário que ele vai ter que fazer tudo de novo.", "next": "q4_bad2" }
        ]
    },
    // Final ruim da q4: Perda permanente de dados
    "q4_bad1": {
        "text": "A tentativa manual de recuperar falha, perdendo os dados para sempre. A empresa perde meses de trabalho, atrasa projetos e sofre um grande impacto financeiro e na confiança da equipe.",
        "image": "https://placehold.co/600x400/FF0000/FFFFFF?text=Perda+Permanente", // Imagem de perda permanente
        "resultClass": "negative",
        "companyMessage": "Perder dados é um perigo real. A B&G Nexus Solutions instala **soluções de cópia de segurança (backup) e recuperação de desastres**, garantindo que seus dados mais importantes estejam seguros e sempre disponíveis."
    },
    // Final ruim da q4: Retrabalho
    "q4_bad2": {
        "text": "Forçar a refazer o trabalho não funciona. Isso desmotiva, gera mais trabalho e não resolve por que os dados estavam vulneráveis. A empresa perde tempo e eficiência.",
        "image": "https://placehold.co/600x400/FFA500/FFFFFF?text=Refazer+Trabalho", // Imagem de retrabalho
        "resultClass": "negative",
        "companyMessage": "A produtividade da sua equipe é fundamental. A B&G Nexus Solutions oferece **gerenciamento de dados e sistemas de proteção** que evitam perdas e otimizam o fluxo de trabalho."
    },
    // Quinta pergunta
    "q5": {
        "text": "Um problema sério com a internet ou os computadores surge, e sua equipe não tem o conhecimento para resolver. O que você faz?",
        "image": "https://placehold.co/600x400/0A2342/C1C3C6?text=Problema+Complexo", // Imagem de um problema complexo
        "options": [
            { "text": "Tentar resolver sozinho por dias, pesquisando na internet e perdendo tempo valioso.", "next": "q5_bad1" },
            { "text": "Chamar uma empresa de tecnologia especializada para um suporte rápido e eficiente.", "next": "good_ending" }, // Leva para o final "bom"
            { "text": "Desistir do problema e buscar uma solução alternativa que não envolva tecnologia.", "next": "q5_bad2" }
        ]
    },
    // Final ruim da q5: Mais problemas
    "q5_bad1": {
        "text": "Tentar resolver sem conhecimento causa mais tempo com o sistema parado e piora a situação. A empresa perde dinheiro e a equipe fica frustrada por não ter solução.",
        "image": "https://placehold.co/600x400/FF0000/FFFFFF?text=Mais+Problemas", // Imagem de mais problemas
        "resultClass": "negative",
        "companyMessage": "Não deixe problemas complicados pararem seu trabalho. A B&G Nexus Solutions oferece **suporte técnico especializado e consultoria**, com profissionais que resolvem desafios de tecnologia de forma rápida e eficaz."
    },
    // Final ruim da q5: Retrocesso
    "q5_bad2": {
        "text": "Desistir de um problema de tecnologia significa deixar a tecnologia de lado, levando a processos demorados, perda de competitividade e um atraso na modernização da empresa.",
        "image": "https://placehold.co/600x400/FFA500/FFFFFF?text=Atraso+Tecnologico", // Imagem de retrocesso
        "resultClass": "negative",
        "companyMessage": "A tecnologia é um pilar para o sucesso. A B&G Nexus Solutions é seu parceiro estratégico, oferecendo **soluções de tecnologia completas e inovadoras** para impulsionar o crescimento e a eficiência da sua empresa."
    },
    // Final bom
    "good_ending": {
        "text": "Com a ajuda de um parceiro de tecnologia, problemas sérios são resolvidos rapidamente. Sua infraestrutura de TI se torna forte, segura e pronta para crescer, aumentando a produtividade e o sucesso da empresa. Você se torna um gestor de TI exemplar!",
        "image": "https://placehold.co/600x400/008000/FFFFFF?text=Sucesso+Empresa", // Imagem de sucesso em TI
        "resultClass": "positive",
        "companyMessage": "Parabéns! Sua visão proativa garante o sucesso. A B&G Nexus Solutions se orgulha de ser o **parceiro estratégico** que impulsiona a **eficiência, segurança e flexibilidade** da sua tecnologia, garantindo seu futuro conectado."
    }
};

let currentStoryNodeKey = "q1"; // Inicia com a primeira pergunta

// Seleciona os elementos do DOM
const questionImage = document.getElementById("question-image");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const resultMessageDiv = document.getElementById("result-message");
const consequenceText = document.getElementById("consequence-text");
const companyMessage = document.getElementById("company-message");
const restartButton = document.getElementById("restart-btn");
const backHomeButton = document.getElementById("back-home-btn");

// Adiciona um event listener para o botão de reiniciar
restartButton.addEventListener('click', () => {
    currentStoryNodeKey = "q1"; // Volta para a primeira pergunta
    loadStoryNode();
});

// Adiciona um event listener para o botão de voltar para o início (se for diferente de reiniciar)
backHomeButton.addEventListener('click', () => {
    // Para este exemplo, "voltar para o início" é o mesmo que reiniciar.
    // Se você tiver uma tela inicial diferente, ajuste aqui.
    currentStoryNodeKey = "q1";
    loadStoryNode();
});

/**
 * Função para embaralhar um array (algoritmo Fisher-Yates).
 * @param {Array} array O array a ser embaralhado.
 * @returns {Array} O array embaralhado.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
    return array;
}

/**
 * Carrega e exibe o nó da história atual (pergunta ou resultado).
 */
function loadStoryNode() {
    const node = storyNodes[currentStoryNodeKey];

    // Limpa o conteúdo anterior
    optionsContainer.innerHTML = '';
    resultMessageDiv.style.display = 'none'; // Esconde a mensagem de resultado por padrão
    restartButton.style.display = 'none';
    backHomeButton.style.display = 'none';
    questionImage.style.display = 'none'; // Esconde a imagem por padrão

    // Exibe a imagem se ela existir no nó
    if (node.image) {
        questionImage.src = node.image;
        questionImage.style.display = 'block';
    }

    questionText.innerText = node.text; // Define o texto do nó

    // Se houver opções, cria os botões de opção
    if (node.options) {
        optionsContainer.style.display = 'flex'; // Garante que o container de opções esteja visível
        // Embaralha as opções antes de exibi-las
        const shuffledOptions = shuffleArray([...node.options]); // Cria uma cópia para não modificar o objeto original
        shuffledOptions.forEach(option => {
            const button = document.createElement("button");
            button.classList.add("option-btn");
            button.innerText = option.text;
            button.onclick = () => selectOption(option.next); // Define a ação do botão
            optionsContainer.appendChild(button);
        });
    } else {
        // Se não houver opções, é um final da história, mostra a mensagem de resultado
        optionsContainer.style.display = 'none'; // Esconde os botões de opção
        showResult(node);
    }
}

/**
 * Lida com a seleção de uma opção, avançando para o próximo nó da história.
 * @param {string} nextNodeKey A chave do próximo nó na história.
 */
function selectOption(nextNodeKey) {
    currentStoryNodeKey = nextNodeKey;
    loadStoryNode(); // Carrega o próximo nó da história
}

/**
 * Exibe a tela de resultado final.
 * @param {object} finalNode O nó final da história com a mensagem de resultado.
 */
function showResult(finalNode) {
    resultMessageDiv.style.display = 'block';
    resultMessageDiv.classList.remove('positive', 'negative'); // Remove classes anteriores
    resultMessageDiv.classList.add(finalNode.resultClass); // Adiciona a classe de estilo do resultado

    consequenceText.innerText = finalNode.text; // Mensagem da consequência
    companyMessage.innerHTML = `<span class="company-message">B&G Nexus Solutions: ${finalNode.companyMessage}</span>`; // Mensagem da empresa

    restartButton.style.display = 'inline-block'; // Exibe o botão de reiniciar
    backHomeButton.style.display = 'inline-block'; // Exibe o botão de voltar para o início
}

// Carrega o primeiro nó da história quando a página é carregada
window.onload = loadStoryNode;