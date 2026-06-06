import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: `A mágica do 'quando... faça...'`,
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança entende que todo jogo segue regras e cria, com cliques guiados, a primeira regrinha 'quando isto acontecer, faça aquilo' na folha de eventos do Construct 3, vendo o resultado acontecer na tela.`,
  descricao: `Nesta aula as crianças descobrem o segredo que faz qualquer jogo funcionar: as regras. Um jogo não é mágica de verdade, é uma lista de combinados do tipo 'quando isto acontecer, faça aquilo'. Quando você aperta um botão, o personagem pula. Quando a bolinha toca a estrela, a estrela some. Tudo isso são regras que alguém ensinou para o computador. Hoje as crianças vão conhecer o lugar onde essas regras moram dentro do Construct 3: a folha de eventos (Event Sheet).

O foco da aula é mostrar e fazer junto, sem digitar nada. As crianças vão abrir a folha de eventos, ver que ela é como uma lista de combinados, e montar a primeira regra inteira só com cliques: escolhem QUANDO (uma condição, por exemplo 'quando eu clicar no objeto') e escolhem FAÇA (uma ação, por exemplo 'mude a cor' ou 'gire um pouco'). Depois apertam o botão de jogar e veem a regra funcionando de verdade.

Isso importa porque é a base de tudo o que vem nas próximas semanas. Quem entende 'quando... faça...' já está pensando como quem cria jogos, e não só como quem joga. É o primeiro passo do pensamento de programação, mas vivido de um jeito concreto, visual e divertido, do tamanho da idade.

Ao longo da hora, as crianças vão revisar como colocar objetos no cenário (visto na aula passada), conhecer a folha de eventos, montar a primeira regrinha juntas, brincar de criar suas próprias regras e terminar mostrando a 'mágica' que cada uma inventou para os colegas.`,
  materiais: [
    `Um computador por criança (ou em duplas) com o Construct 3 já aberto no navegador e um projeto inicial carregado.`,
    `Projeto de exemplo pronto, com um cenário simples e pelo menos dois objetos já colocados (por exemplo, um personagem e uma estrela), para a turma não perder tempo montando do zero.`,
    `Projetor ou TV grande ligada no computador do professor, para todos verem onde clicar.`,
    `Cartões grandes de papel: alguns escritos QUANDO e outros escritos FAÇA, para a brincadeira sem computador.`,
    `Folhas de desenho e lápis de cor para a atividade de papel.`,
    `Lista de exemplos de regras simples (impressa para o professor consultar), como 'quando clicar, gire' e 'quando clicar, mude a cor'.`,
    `Som ou musiquinha curta opcional para marcar a hora de compartilhar as criações.`,
  ],
  conceitosChave: [
    `Regra — um combinado que ensina o jogo o que fazer, tipo 'quando isto acontecer, faça aquilo'.`,
    `Folha de eventos — a folha mágica dentro do Construct 3 onde a gente guarda todas as regras do jogo.`,
    `Evento (o QUANDO) — a parte que diz quando a regra acontece, por exemplo 'quando eu clicar'.`,
    `Condição — o aviso que o jogo espera acontecer para a regra começar, como tocar, clicar ou apertar.`,
    `Ação (o FAÇA) — o que o jogo faz quando a regra acontece, como pular, girar ou mudar de cor.`,
    `Objeto — uma figurinha do jogo (personagem, estrela, bola) que pode obedecer às regras.`,
    `Testar (Preview) — apertar o botão de jogar para ver se a regra que a gente criou funciona de verdade.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Todo jogo, por mais bonito que seja, funciona com regras. No Construct 3 essas regras ficam na folha de eventos (Event Sheet). Cada regra é um evento e tem duas partes: a CONDIÇÃO (o 'quando', em verde no Construct, com fundo claro à esquerda) e a AÇÃO (o 'faça', à direita). Lê-se assim: 'quando a condição acontecer, faça a ação'. Exemplo: 'quando o jogador clicar no Personagem, gire o Personagem'.

Antes da aula, abra o projeto de exemplo. No alto da tela há abas: uma é o Layout (o cenário, onde ficam os objetos) e outra é a Event Sheet (a folha de eventos). Se não houver uma folha de eventos, clique com o botão direito na pasta Event Sheets, no painel Project (à direita), e escolha Add event sheet. Pratique uma vez sozinho: clicar em 'Add event' (ou no texto 'Add event' que aparece na folha vazia), escolher um objeto, escolher a condição 'On clicked' (ou 'On tapped/clicked'), depois 'Add action', escolher o mesmo objeto e uma ação fácil como 'Set angle' ou, mais visual, 'Rotate' do comportamento, ou ainda 'Set color'. Se quiser garantir o efeito, use a ação 'Spawn'/'Destroy' apenas se já dominar; para iniciante, girar ou mudar a cor é mais seguro.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Construct 3)

10 min - Aquecimento: sente a turma em roda. Pergunte: 'O que acontece quando a gente aperta o botão no videogame?'. Conduza para a ideia de regra: 'quando aperto, ele pula'. Mostre no projetor o projeto de exemplo na aba Layout e relembre como arrastar um objeto, revisando a aula anterior.

15 min - Conteúdo novo guiado: no projetor, clique na aba Event Sheet, no topo. Diga: 'Esta é a folha das regras'. Clique em 'Add event'. Na janelinha, clique no objeto (por exemplo o Personagem), depois na condição 'On clicked' e em Done. Apareceu o QUANDO. Agora clique em 'Add action' na mesma linha, escolha o mesmo objeto e a ação 'Rotate' (ou 'Set color'), confirme. Aperte o botão Preview (o triângulo de play, no canto superior). Clique no personagem e mostre: 'Olha a mágica!'.

25 min - Mão na massa: cada criança (ou dupla) repete os mesmos passos no seu computador, com você circulando. Roteiro na lousa em desenho: 1) aba das regras; 2) Add event; 3) escolher o objeto e 'On clicked'; 4) Add action; 5) escolher o que faz; 6) play e clicar. Depois desafie: troque a ação por outra (mudar cor, girar mais).

10 min - Desafio + compartilhar: cada um mostra no projetor (ou na própria tela) a regra que criou e diz em voz alta 'quando eu clico, ele...'. Aplauda cada criação.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a ideia de combinado de casa: 'quando bate o sino do recreio, a gente sai para brincar'. Isso é uma regra! O jogo também tem combinados. Chame a folha de eventos de 'folha mágica das regras'. Fale sempre com as duas mãos: uma mão é o QUANDO, a outra é o FAÇA, e bata as mãos para mostrar que uma chama a outra. Evite palavras técnicas: diga 'quando' em vez de 'condição' e 'faça' em vez de 'ação' na maior parte do tempo, soltando os nomes certos só de leve.

## Erros comuns e como ajudar

O mais comum é a criança colocar a ação sem o evento, ou clicar em 'Add action' achando que está criando o 'quando'. Mostre que primeiro vem o verde (o QUANDO) e só depois o FAÇA. Outro erro é escolher um objeto na condição e outro diferente na ação sem querer; peça para usarem o mesmo objeto nesta primeira aula. Muitas crianças esquecem de apertar Preview e acham que não funcionou: faça do play um ritual animado. Se alguém clica fora do objeto no preview e nada acontece, lembre que a regra só funciona clicando em cima da figurinha certa. Por fim, alguns ficam ansiosos para digitar; tranquilize dizendo que hoje é tudo no clique, sem teclado.`,
  exercicios: [
    {
      titulo: `Caça às regras do dia a dia`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Comece em roda, sem computador. Explique que regras são combinados do tipo 'quando isto acontece, faça aquilo'. Dê um exemplo bem claro e peça que as crianças completem outros em voz alta. Aceite respostas engraçadas e valorize cada participação.`,
      atividade: `O professor fala o começo e as crianças completam: 'Quando toca o sinal do recreio, a gente...'; 'Quando acende a luz verde, o carro...'; 'Quando estou com sono, eu...'. Cada criança inventa pelo menos um 'quando... faça...' da própria vida.`,
      gabarito: `Acertou quem completa formando um combinado lógico, por exemplo 'quando toca o sinal, a gente sai para brincar' ou 'quando acende o verde, o carro anda'. O importante é a criança mostrar que entendeu as duas partes: o QUANDO (o que acontece) e o FAÇA (a resposta).`,
    },
    {
      titulo: `Brincando de robô: junte o QUANDO com o FAÇA`,
      tipo: `jogo`,
      tempo: `10 min`,
      guiaProfessor: `Use os cartões de papel com QUANDO e FAÇA. Espalhe no chão ou na mesa. Explique que a turma vai virar 'robôs' que só obedecem regras montadas. O professor é quem aciona o 'quando' e a criança executa o 'faça'. Faça você o primeiro para a turma copiar.`,
      atividade: `Cada criança junta um cartão QUANDO (ex: 'quando eu bater palma') com um cartão FAÇA (ex: 'pule'). O professor testa: faz o 'quando' acontecer e a criança realiza o 'faça'. Depois trocam os cartões e testam de novo.`,
      gabarito: `Acertou quem monta uma dupla QUANDO + FAÇA completa e executa corretamente: ao acontecer o gatilho (palma, pulo do professor), a criança faz a ação combinada. Errou se faz a ação antes do 'quando' acontecer ou se monta só metade da regra.`,
    },
    {
      titulo: `Minha primeira regrinha no Construct 3`,
      tipo: `prática na ferramenta`,
      tempo: `15 min`,
      guiaProfessor: `Mostre no projetor, passo a passo, e só então deixe a turma repetir. Vá devagar nos cliques: aba Event Sheet, botão 'Add event', escolher o objeto, condição 'On clicked', depois 'Add action' e uma ação visual. Circule ajudando quem se perde e lembre todos de apertar o Preview.`,
      atividade: `Cada criança, no seu computador, cria uma regra: 'quando clicar no personagem, gire o personagem'. Passos: 1) clicar na aba das regras (Event Sheet); 2) Add event; 3) escolher o personagem e 'On clicked'; 4) Add action; 5) escolher 'Rotate' (girar); 6) apertar Preview e clicar no personagem.`,
      gabarito: `Acertou quando, ao apertar Preview e clicar no personagem, ele realmente gira. A folha de eventos deve mostrar uma linha com o QUANDO (On clicked) à esquerda e o FAÇA (Rotate) à direita, ambos no mesmo objeto. Se nada acontece, verificar se faltou o evento, se a ação está em objeto diferente ou se esqueceu o Preview.`,
    },
    {
      titulo: `Desenhe a sua regra mágica`,
      tipo: `desenho / papel`,
      tempo: `12 min`,
      guiaProfessor: `Distribua folhas e lápis. Explique que cada criança vai desenhar a regra que inventou ou gostaria de inventar, dividindo a folha em dois lados: de um lado o QUANDO, do outro o FAÇA, com uma seta ligando. Mostre um exemplo simples desenhado por você na lousa.`,
      atividade: `Em uma folha dividida ao meio, a criança desenha no lado esquerdo o QUANDO (ex: um dedo clicando no personagem) e no lado direito o FAÇA (ex: o personagem girando ou colorido), com uma seta do QUANDO para o FAÇA. Quem souber escrever pode pôr as palavras 'quando' e 'faça'.`,
      gabarito: `Acertou quem mostra claramente as duas partes ligadas pela seta: um gatilho à esquerda e um resultado à direita, formando uma regra que faz sentido. Não precisa ser bonito; precisa deixar claro que uma coisa acontece QUANDO a outra acontece.`,
    },
    {
      titulo: `Desafio: invente uma regra nova e mostre a mágica`,
      tipo: `desafio`,
      tempo: `15 min`,
      guiaProfessor: `Este é o passo mais difícil e fecha a aula. Convide cada criança a trocar a ação da sua regra por outra diferente, sozinha, usando o que aprendeu. Ajude só com perguntas ('e se em vez de girar ele mudasse de cor?'), sem fazer pela criança. Termine com a roda de compartilhar no projetor.`,
      atividade: `Cada criança altera a regra que já criou: em 'Add action', troca 'Rotate' por outra ação visual, como 'Set color' (mudar a cor) ou girar mais rápido. Depois aperta Preview, testa e mostra para a turma dizendo: 'Quando eu clico, ele...'.`,
      gabarito: `Acertou quem consegue uma regra nova funcionando no Preview, diferente da primeira, e explica em voz alta o 'quando... faça...' da própria criação. Sinal de sucesso: ao clicar no objeto, acontece o novo efeito escolhido pela criança, e ela sabe dizer qual é o QUANDO e qual é o FAÇA.`,
    },
  ],
};
