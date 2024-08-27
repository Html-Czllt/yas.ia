document.addEventListener('DOMContentLoaded', () => {
    const home = document.getElementById('home');
    const narrative = document.getElementById('narrative');
    const endScreen = document.getElementById('end-screen');
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const narrativeText = document.getElementById('narrative-text');
    const choicesContainer = document.getElementById('choices-container');

    const story = [
        {
            "text": "Você está no início do século XXI e a inteligência artificial está se desenvolvendo rapidamente. Você é um pesquisador de IA com a chance de definir uma nova diretriz para a pesquisa. Qual abordagem você escolheria?",
            "choices": [
                { "text": "Focar em IA para resolver grandes problemas globais, como mudanças climáticas e doenças.", "nextStep": 1 }, // A favor
                { "text": "Focar em IA para melhorar a eficiência e a automação de tarefas diárias.", "nextStep": 2 }, // Neutra
                { "text": "Desenvolver IA com um forte foco em ética e regulamentação para garantir a segurança.", "nextStep": 3 } // Conservadora
            ]
        },
        {
            "text": "Você escolheu investir em IA para resolver grandes problemas globais. Seu projeto visa criar uma IA que possa prever e mitigar desastres naturais. O que você faz a seguir?",
            "choices": [
                { "text": "Desenvolver um protótipo e testá-lo em pequenas escalas antes de uma implementação global.", "nextStep": 4 }, // Neutra
                { "text": "Colaborar com governos e ONGs para integrar a IA em políticas de prevenção de desastres.", "nextStep": 5 }, // A favor
                { "text": "Investir em pesquisa para melhorar a precisão das previsões da IA antes de qualquer implementação.", "nextStep": 6 } // Conservadora
            ]
        },
        {
            "text": "Você escolheu focar em IA para melhorar a eficiência e a automação. Sua equipe desenvolve um sistema de IA que automatiza várias tarefas no trabalho. Quais são os desafios que você enfrenta?",
            "choices": [
                { "text": "A resistência dos trabalhadores que temem perder seus empregos.", "nextStep": 7 }, // Conservadora
                { "text": "Problemas técnicos na integração do sistema de IA com os processos existentes.", "nextStep": 8 }, // Neutra
                { "text": "A necessidade de garantir que a automação não reduza a qualidade do trabalho.", "nextStep": 9 } // A favor
            ]
        },
        {
            "text": "Você optou por desenvolver IA com foco em ética e regulamentação. Como você aborda a questão de garantir que a IA seja usada de maneira responsável?",
            "choices": [
                { "text": "Criar diretrizes éticas rigorosas e garantir que todas as empresas sigam essas diretrizes.", "nextStep": 10 }, // Conservadora
                { "text": "Estabelecer uma comissão independente para revisar e monitorar o uso da IA.", "nextStep": 11 }, // Neutra
                { "text": "Promover a educação sobre ética em IA para pesquisadores e desenvolvedores.", "nextStep": 12 } // A favor
            ]
        },
        {
            "text": "Você enfrenta resistência dos trabalhadores devido ao medo de perda de emprego. Como você lida com essa situação?",
            "choices": [
                { "text": "Implementar programas de requalificação para ajudar os trabalhadores a se adaptarem às novas funções.", "nextStep": 13 }, // A favor
                { "text": "Trabalhar para criar uma IA que aumente a produtividade sem substituir empregos.", "nextStep": 14 }, // Neutra
                { "text": "Comunicar-se abertamente com os trabalhadores sobre os benefícios da automação e os planos de transição.", "nextStep": 15 } // Conservadora
            ]
        },
        {
            "text": "Você precisa garantir que a automação não reduza a qualidade do trabalho. Quais medidas você toma?",
            "choices": [
                { "text": "Realizar testes rigorosos e obter feedback contínuo dos usuários para aprimorar a IA.", "nextStep": 16 }, // A favor
                { "text": "Estabelecer padrões de qualidade que a IA deve cumprir antes da implementação final.", "nextStep": 17 }, // Neutra
                { "text": "Monitorar o impacto da automação e ajustar as configurações da IA conforme necessário.", "nextStep": 18 } // Conservadora
            ]
        },
        {
            "text": "Você enfrenta problemas técnicos na integração do sistema de IA. Qual é o próximo passo?",
            "choices": [
                { "text": "Reunir uma equipe de especialistas para resolver os problemas técnicos e melhorar a integração.", "nextStep": 19 }, // Neutra
                { "text": "Investir em mais pesquisa e desenvolvimento para criar uma solução técnica mais robusta.", "nextStep": 20 }, // A favor
                { "text": "Reavaliar o projeto e ajustar os objetivos para melhor alinhamento com a tecnologia disponível.", "nextStep": 21 } // Conservadora
            ]
        },
        {
            "text": "Você decide desenvolver um protótipo e testá-lo em pequenas escalas. O que você aprende com os testes?",
            "choices": [
                { "text": "O protótipo é eficaz, mas precisa de ajustes antes de uma implementação global.", "nextStep": 22 }, // Neutra
                { "text": "O protótipo falha em algumas previsões, indicando que a IA precisa de mais treinamento e ajustes.", "nextStep": 23 }, // Conservadora
                { "text": "Os testes mostram que a IA pode ser integrada com sucesso, mas precisa de mais recursos para escalar.", "nextStep": 24 } // A favor
            ]
        },
        {
            "text": "Você decide colaborar com governos e ONGs. Qual é o próximo passo?",
            "choices": [
                { "text": "Integrar a IA em políticas de prevenção de desastres em colaboração com outras entidades.", "nextStep": 25 }, // A favor
                { "text": "Desenvolver a IA em paralelo com outras soluções tecnológicas.", "nextStep": 26 }, // Neutra
                { "text": "Focar em melhorar a tecnologia da IA antes de buscar colaboração externa.", "nextStep": 27 } // Conservadora
            ]
        }
        // Adicione mais cenários conforme necessário.
    ];
    

    let currentStep = 0;

    function showStep(step) {
        const storyStep = story[step];
        narrativeText.textContent = storyStep.text;

        choicesContainer.innerHTML = '';
        storyStep.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.addEventListener('click', () => {
                if (choice.nextStep < story.length) {
                    showStep(choice.nextStep);
                } else {
                    endGame();
                }
            });
            choicesContainer.appendChild(button);
        });
    }

    function startGame() {
        home.style.display = 'none';
        narrative.style.display = 'block';
        showStep(currentStep);
    }

    function endGame() {
        narrative.style.display = 'none';
        endScreen.style.display = 'block';
    }

    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', () => {
        endScreen.style.display = 'none';
        home.style.display = 'block';
        currentStep = 0;
    });
});
