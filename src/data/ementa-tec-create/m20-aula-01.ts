import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "O que é a UI de um jogo",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Compreender o que é a interface (UI) de um jogo, reconhecendo na tela botões, menus e informações que ajudam o jogador, e diferenciar UI da arte do cenário.`,
  descricao: `A UI (interface do usuário) de um jogo é tudo aquilo que o jogador vê e toca na tela para conseguir jogar, além do cenário e dos personagens. São os botões de "Jogar" e "Sair", o menu inicial, a barra de vida, a contagem de moedas, o mapa, os ícones e as mensagens. A UI funciona como a "ponte" entre a pessoa e o jogo: é por ela que o jogador entende o que está acontecendo e decide o que fazer. Nesta primeira aula do mês, os alunos descobrem esse conceito olhando jogos que já conhecem muito bem.

Nesta aula não vamos ainda desenhar nada no Canva. O foco é o olhar: aprender a enxergar a UI que sempre esteve ali, mas que o jogador costuma nem perceber porque uma boa interface é "invisível" de tão natural. Vamos analisar exemplos famosos como Roblox, Minecraft e Among Us, apontando juntos cada tela, cada botão e cada informação. Quando o aluno aprende a reparar nessas peças, ele começa a pensar como um designer de jogos, e não apenas como jogador.

Um ponto importante é a diferença entre UI e arte do jogo. A arte é o mundo: a floresta, o castelo, o personagem, as nuvens. A UI são os elementos que ficam "por cima" desse mundo para informar e comandar: a barra de vida no canto, o botão de pular, o relógio. Os dois trabalham juntos, mas têm funções diferentes. Entender isso agora prepara o terreno para as próximas aulas, em que o aluno vai mapear as telas do próprio jogo e, mais para frente, montá-las no Canva.

Por fim, a aula mostra por que a UI importa tanto: uma boa interface deixa o jogo fácil e gostoso de jogar, enquanto uma UI confusa faz a pessoa se perder, errar e desistir. O objetivo do mês inteiro é que cada aluno entregue a UI do seu jogo pronta. Hoje plantamos a semente: ensinar o olho a perceber, descrever e valorizar a interface antes de criá-la.`,
  materiais: [
    `Computadores (1 por aluno) com acesso à internet e conta Canva já criada (será usado a partir da Aula 2; hoje basta navegador)`,
    `Projetor ou TV conectada ao computador do professor para mostrar os exemplos à turma`,
    `Acesso ao Roblox (um jogo simples aberto), Minecraft e Among Us para observação em tela`,
    `Arquivo de exemplo com capturas de tela (prints) dos três jogos, caso a internet falhe (pasta "Exemplos-UI" no computador do professor)`,
    `Folhas de papel e canetas, ou um documento simples no Canva/bloco de notas, para a turma anotar as peças de UI encontradas`,
    `Quadro branco ou slide com duas colunas escritas: "UI" e "Arte do jogo"`,
    `Cronômetro ou timer (pode ser o do celular) para controlar o ritmo de cada etapa`,
  ],
  conceitosChave: [
    `UI (interface do usuário) — tudo que o jogador vê e toca na tela para jogar, além do cenário: botões, menus, barras e ícones.`,
    `Menu — tela com opções onde o jogador escolhe o que fazer, como "Jogar", "Opções" e "Sair".`,
    `Botão — área clicável que executa uma ação, como começar a partida ou pular.`,
    `HUD — as informações que aparecem durante o jogo, como vida, moedas e tempo, sem atrapalhar a ação.`,
    `Ícone — pequena imagem que representa algo de forma rápida, como um coração para vida ou uma engrenagem para configurações.`,
    `Arte do jogo — o mundo visual: cenário, personagens e objetos; é diferente da UI, que fica por cima para informar e comandar.`,
    `Usabilidade — o quanto o jogo é fácil de entender e usar; uma boa UI melhora a usabilidade.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Canva nesta aula, porque hoje o trabalho é de observação, e não de criação. O conceito central é simples: UI é tudo que o jogador vê e toca na tela além do cenário. Guarde três exemplos na ponta da língua. No menu do Roblox: o botão verde de "Play", a lista de jogos e o ícone de pesquisa. No Minecraft: a barra de vida (corações), a barra de fome e a hotbar com os itens embaixo. No Among Us: os botões de tarefa, o mapa e o botão vermelho de emergência. A diferença entre UI e arte é o ponto que mais gera confusão: a arte é o mundo (a floresta, o personagem); a UI são os elementos que ficam por cima para informar (a barra de vida) ou comandar (o botão de pular). Tenha os três jogos abertos antes da aula começar e teste o projetor.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): pergunte "qual foi o último jogo que vocês jogaram?" e peça para descreverem o que aparecia na tela. Anote no quadro tudo que citarem (vida, moedas, botão). Diga que hoje vão aprender o nome disso: UI.

Conteúdo novo guiado (15 min): no projetor, abra o Roblox e mostre o menu inicial. Aponte com o cursor cada peça e nomeie: "isto é um botão", "isto é um menu". Depois entre em um jogo e mostre a HUD. Repita rápido com Minecraft e Among Us. No quadro, faça duas colunas: "UI" e "Arte do jogo". Vá perguntando "o coração é UI ou arte?" e classificando junto com a turma. (Como hoje o Canva ainda não será usado, deixe os computadores dos alunos em uma página em branco; o login no Canva será o foco da Aula 2 — para abrir, vá em canva.com, botão "Entrar" no canto superior direito.)

Mão na massa (25 min): cada aluno escolhe um dos três jogos, observa a tela (no próprio computador ou na captura de tela do arquivo de exemplo) e faz uma lista de pelo menos seis peças de UI, escrevendo se cada uma é botão, menu ou informação (HUD). Circule pela sala ajudando quem travar com perguntas: "o que esse desenho te diz?", "o que acontece se clicar aqui?".

Desafio e compartilhar (10 min): cada aluno mostra uma peça de UI que achou e explica para que ela serve. Feche com a pergunta-chave: "por que uma boa UI deixa o jogo mais fácil?".

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do controle remoto da TV: a novela é a "arte" (a história na tela) e os botões do controle são a "UI" (o que você usa para comandar). Outra comparação boa é a do painel do carro: a estrada é o mundo, e a velocidade e o nível de gasolina são as informações na tela. Evite termos técnicos secos; sempre ligue a palavra a um exemplo que o aluno já viu. Repita a frase-chave várias vezes: "UI é o que você vê e toca na tela para jogar". Quando alguém acertar, valide na hora e use a resposta para explicar ao resto da turma.

## Erros comuns e como ajudar

O erro mais comum é confundir UI com arte: o aluno aponta o personagem e diz que é UI. Ajude perguntando "isso serve para te dar uma informação ou para você clicar e comandar?". Se a resposta for "nenhum dos dois, é só o mundo", então é arte. Outro erro é listar peças demais de um tipo só (só botões); incentive a buscar os três tipos: botão, menu e informação. Alguns alunos acham que UI é só o menu inicial e esquecem a HUD que aparece durante o jogo; mostre de novo a barra de vida em movimento. Por fim, há quem se prenda a "qual é mais bonita"; lembre que o que importa hoje é a função, ou seja, para que serve, e não a beleza.`,
  exercicios: [
    {
      titulo: `Caçada de peças na tela`,
      tipo: `Prática na ferramenta (observação guiada)`,
      tempo: `8 minutos`,
      guiaProfessor: `Coloque uma captura de tela do menu do Roblox no projetor. Peça para a turma apontar e nomear as peças de UI que enxergam. Vá circulando o cursor sobre cada item conforme citarem. Aceite respostas em voz alta; o objetivo é ativar o olhar.`,
      atividade: `Olhando a tela do menu do Roblox, encontre e diga em voz alta pelo menos quatro peças de UI. Para cada uma, diga se é um botão, um menu ou uma informação.`,
      gabarito: `Exemplos esperados: botão "Play"/"Jogar" (botão); barra ou ícone de pesquisa (botão/menu); lista de jogos ou abas no topo (menu); ícone de configurações/engrenagem (botão); contador de Robux (informação). Qualquer quatro itens válidos dentre esses, classificados corretamente, valem.`,
    },
    {
      titulo: `UI ou arte do jogo?`,
      tipo: `Desafio de classificação`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre, um por vez, oito elementos de jogos (misturando UI e arte) em slides ou prints. A cada elemento, conte até três e a turma responde "UI" ou "arte" levantando a mão ou em coro. Confirme a resposta certa explicando o porquê.`,
      atividade: `Para cada imagem que o professor mostrar, decida: é UI (informa ou comanda) ou é arte do jogo (o mundo, o cenário, o personagem)? Itens: 1) barra de vida; 2) árvore do cenário; 3) botão de pular; 4) nuvem no céu; 5) contador de moedas; 6) personagem principal; 7) menu de pausa; 8) montanha ao fundo.`,
      gabarito: `1) UI; 2) arte; 3) UI; 4) arte; 5) UI; 6) arte; 7) UI; 8) arte. Critério: se serve para informar ou para clicar/comandar, é UI; se é apenas o mundo visual, é arte.`,
    },
    {
      titulo: `Lista de UI do meu jogo favorito`,
      tipo: `Projeto curto individual`,
      tempo: `15 minutos`,
      guiaProfessor: `Cada aluno escolhe Roblox, Minecraft ou Among Us. Observa a tela (no computador ou na captura de tela do arquivo de exemplo) e monta uma lista escrita de pelo menos seis peças de UI, marcando o tipo de cada uma. Circule ajudando com perguntas, sem dar a resposta pronta.`,
      atividade: `Escolha um jogo. Escreva uma lista com pelo menos seis peças de UI que você enxerga na tela. Ao lado de cada peça, escreva o tipo: botão, menu ou informação (HUD).`,
      gabarito: `Lista válida tem seis ou mais itens reais do jogo escolhido, com tipos corretos. Ex. (Minecraft): corações = informação; barra de fome = informação; hotbar de itens = informação/menu; barra de experiência = informação; botão de menu/pausa = botão; inventário = menu. Aceite variações coerentes do jogo escolhido.`,
    },
    {
      titulo: `O detetive da boa interface`,
      tipo: `Em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Cada dupla compara a UI de dois jogos diferentes e responde qual deles é mais fácil de entender e por quê, citando peças concretas. Reforce que a resposta deve falar de função e clareza, não de "qual é mais bonito". Peça para anotarem as conclusões.`,
      atividade: `Em dupla, comparem a UI de dois jogos (por exemplo Among Us e Minecraft). Respondam por escrito: Qual jogo deixa mais fácil entender o que fazer? Cite duas peças de UI que ajudam o jogador e explique como elas ajudam.`,
      gabarito: `Resposta completa indica um dos jogos e justifica com clareza e função (não com beleza). Ex.: "Among Us é fácil porque o botão vermelho de emergência é grande e chama atenção, e o mapa mostra onde estão as tarefas". Vale qualquer escolha bem justificada com duas peças de UI e suas funções.`,
    },
    {
      titulo: `Por que a UI importa?`,
      tipo: `Roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Conduza uma roda de conversa final. Faça as perguntas e deixe vários alunos falarem. Anote no quadro as ideias-chave. Feche conectando ao mês: nas próximas aulas eles vão criar a UI do próprio jogo no Canva, e ela precisa ser clara para o jogador.`,
      atividade: `Em roda, discutam: O que aconteceria com um jogo se a barra de vida sumisse? E se o botão de "Jogar" fosse escondido ou minúsculo? Por que uma UI clara deixa o jogo melhor? Cada um dá pelo menos uma ideia.`,
      gabarito: `Ideias esperadas: sem a barra de vida o jogador não sabe quando vai perder e se sente perdido; com o botão escondido a pessoa não consegue nem começar e pode desistir; uma UI clara deixa o jogo fácil, rápido e gostoso de jogar, evitando confusão e erros. Qualquer resposta que ligue UI clara à facilidade de jogar é válida.`,
    },
  ],
};
