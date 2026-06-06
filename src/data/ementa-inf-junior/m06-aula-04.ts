import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Acertou ou Errou? Caminhos do Jogo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ligar cada resposta do quiz a um slide de "Parabéns!" ou "Tente de novo!" com hyperlinks, criando dois caminhos diferentes e testando a aventura no modo apresentação.`,
  descricao: `Na aula passada as crianças aprenderam a fazer a primeira pergunta do quiz. Agora damos o passo mais emocionante: o jogo passa a reagir ao jogador. Quando alguém clica na resposta certa, o jogo pula para um slide feliz que diz "Parabéns!"; quando clica na errada, o jogo vai para um slide que diz "Tente de novo!". Esses dois destinos são os dois caminhos do jogo, e quem decide para onde cada botão leva é a criança que está criando.

A ferramenta mágica por trás disso é o hyperlink (link). Um link é uma ordem secreta colada num botão: "quando me clicarem, leve o jogador para o slide tal". No PowerPoint isso fica no menu Inserir, botão Link (ou clicando com o botão direito sobre o botão e escolhendo Link); no Google Apresentações é o mesmo menu Inserir, opção Link. A diferença para os links da internet é que aqui o destino não é um site, e sim "Colocar neste documento" (PowerPoint) ou "Slides nesta apresentação" (Google), ou seja, outro slide do próprio jogo.

O grande conceito desta aula é o de caminhos que se separam: a mesma pergunta pode terminar em dois lugares diferentes dependendo de qual botão o jogador aperta. A criança deixa de ser só quem responde e vira quem constrói as regras. É o primeiro momento em que ela sente que o jogo "pensa" e responde de verdade.

Por fim, nada disso vale se não for testado. O modo apresentação (tecla F5, ou o ícone de "play"/"Apresentar" no canto da tela) é onde os botões realmente funcionam e os links levam para os slides certos. Testar, descobrir um botão que leva para o lugar errado e consertar faz parte da diversão e ensina, sem dor, o que é depurar um jogo.`,
  materiais: [
    `Um computador por criança (ou em duplas) com PowerPoint ou Google Apresentações já aberto no arquivo do quiz iniciado na aula anterior.`,
    `Projetor ou TV ligada ao computador do professor para demonstrar cada passo na tela grande.`,
    `Um jogo-exemplo PRONTO do professor: uma pergunta com dois botões, um levando ao slide "Parabéns!" e outro ao "Tente de novo!", já com os links funcionando.`,
    `Dois slides modelo já formatados e coloridos: um verde com "Parabéns!" e uma carinha feliz, outro vermelho/laranja com "Tente de novo!" e uma seta de voltar.`,
    `Cartões impressos grandes com os ícones e nomes dos menus: "Inserir", "Link", "Colocar neste documento" / "Slides nesta apresentação".`,
    `Adesivos ou carimbos para premiar quem fizer os dois caminhos funcionarem no modo apresentação.`,
    `Lista de presença e a pasta/arquivo de cada aluno localizada antes da aula começar.`,
  ],
  conceitosChave: [
    `Caminho — o jogo pode ir por dois lugares diferentes; cada botão escolhe um caminho.`,
    `Link (hyperlink) — uma ordem secreta colada no botão que diz para qual slide o jogo deve pular.`,
    `Slide "Parabéns!" — a tela feliz que aparece quando o jogador clica na resposta certa.`,
    `Slide "Tente de novo!" — a tela que aparece quando o jogador erra e pode voltar para tentar outra vez.`,
    `Resposta certa — o botão que leva para o caminho do "Parabéns!".`,
    `Modo apresentação — quando a gente aperta o "play" (F5) e os botões funcionam de verdade.`,
    `Testar — clicar no próprio jogo para ver se cada botão leva para o slide certo e consertar se não levar.`,
  ],
  treinamento: `## O que o professor precisa saber

Um hyperlink, nesta aula, não vai para a internet: vai para outro slide do mesmo arquivo. No PowerPoint o caminho é selecionar o botão, ir em Inserir > Link (ou botão direito > Link), escolher à esquerda "Colocar neste documento" e clicar no slide de destino na lista. No Google Apresentações é Inserir > Link, depois clicar em "Slides nesta apresentação" e escolher o slide. Você vai repetir esse gesto duas vezes por pergunta: o botão da resposta certa aponta para o slide "Parabéns!"; o botão da resposta errada aponta para o slide "Tente de novo!". Tenha os dois slides de destino criados ANTES de colocar os links, senão eles não aparecem na lista. Os links só "funcionam" no modo apresentação (F5 ou o ícone Apresentar), nunca no modo de edição: avise isso, porque é a confusão número um.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min): abra seu jogo-exemplo no modo apresentação (aperte F5) e jogue na tela grande. Erre de propósito e mostre a turma indo para o "Tente de novo!"; depois acerte e vá para o "Parabéns!". Pergunte: "Como o jogo sabe para onde ir?". Reaproveite a palavra botão da Aula 1 e ligações de slides da Aula 2.

2. Conteúdo novo guiado (15 min): saia do modo apresentação (tecla Esc). Mostre na tela que já existem dois slides prontos: "Parabéns!" e "Tente de novo!". Clique uma vez no botão da resposta certa para selecioná-lo. Vá em Inserir > Link. No PowerPoint, clique em "Colocar neste documento" e escolha o slide "Parabéns!"; no Google, clique em "Slides nesta apresentação" e escolha o mesmo. Repita com o botão errado apontando para "Tente de novo!". Aperte F5 e teste na frente deles.

3. Mão na massa (25 min): cada criança abre o próprio quiz. Tarefa: garantir que existam os dois slides de destino (você os deixa prontos como modelo para copiar) e colocar os dois links na pergunta. Circule pela sala. Faça com elas o gesto "seleciona o botão, Inserir, Link, escolhe o slide". Quem terminar cria uma segunda pergunta com os mesmos dois caminhos. Peça que apertem F5 e testem cada botão.

4. Desafio + compartilhar (10 min): cada criança apresenta o jogo para um colega, que joga uma vez acertando e uma vez errando. Premie quem fez os dois caminhos levarem para os slides certos. Feche relembrando: "O botão certo leva ao Parabéns; o errado leva ao Tente de novo".

## Como explicar para crianças de 5 a 9 anos

Use a história do labirinto: "Seu jogo é um caminho com uma porta que se divide em duas. A porta verde leva à festa do Parabéns; a porta vermelha leva ao lugar de tentar de novo." O link é "um bilhetinho mágico que a gente cola atrás do botão dizendo para onde ele tem que pular". Demonstre primeiro, devagar, nomeando cada clique em voz alta: "Inserir... Link... esse slide aqui". Deixe a criança fazer com a sua mão guiando a dela. Sempre que possível, mostre o resultado no modo apresentação na hora, porque ver o botão funcionando é o que fixa o aprendizado.

## Erros comuns e como ajudar

O erro mais comum é clicar no botão no modo edição e achar que está quebrado: lembre que só funciona no F5. Outro é colocar o link antes de o slide de destino existir, então ele não aparece na lista; crie o slide primeiro. Crianças costumam selecionar o texto dentro do botão, e não o botão inteiro: peça para clicar na bordinha do botão até aparecer a moldura. Há quem ligue os dois botões ao mesmo slide sem perceber; teste junto apertando os dois. Por fim, alguém vai apagar um slide de destino e os links "somem": tenha cópias dos slides modelo para repor rápido.`,
  exercicios: [
    {
      titulo: `Caça aos dois caminhos`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Com o jogo-exemplo no modo apresentação, jogue na tela e deixe as crianças apontarem o que acontece. O objetivo é que percebam, antes de mexer, que existem dois destinos.`,
      atividade: `O professor joga o quiz na frente da turma. Em uma rodada clica na resposta certa, em outra na errada. Cada criança levanta a mão e diz para qual tela o jogo foi: "Parabéns!" ou "Tente de novo!".`,
      gabarito: `Resposta certa leva ao slide "Parabéns!"; resposta errada leva ao slide "Tente de novo!". A criança acerta quando associa cada botão ao seu destino e entende que são dois caminhos diferentes.`,
    },
    {
      titulo: `Desenhando o mapa do jogo`,
      tipo: `Desenho / papel`,
      tempo: `10 min`,
      guiaProfessor: `Antes do computador, peça que desenhem o caminho. Isso organiza a lógica na cabeça e facilita na hora de colocar os links. Entregue folha com a pergunta no topo.`,
      atividade: `Numa folha, a criança desenha um quadrado escrito "Pergunta" no alto, puxa duas setas para baixo: uma vai para um quadrado verde "Parabéns!" e outra para um quadrado laranja "Tente de novo!". Pode colorir e desenhar uma carinha em cada destino.`,
      gabarito: `O mapa deve ter uma pergunta no topo e DUAS setas saindo dela, cada uma terminando em um destino diferente ("Parabéns!" e "Tente de novo!"). Está correto quando os dois caminhos aparecem separados, sem se cruzar no mesmo quadrado.`,
    },
    {
      titulo: `Colando o bilhete mágico`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Guie passo a passo no projetor e circule ajudando o gesto "selecionar o botão, Inserir, Link, escolher o slide". Garanta que os slides de destino já existam antes.`,
      atividade: `No próprio quiz, a criança clica na borda do botão da resposta CERTA, vai em Inserir > Link, escolhe "Colocar neste documento" (PowerPoint) ou "Slides nesta apresentação" (Google) e seleciona o slide "Parabéns!". Depois faz o mesmo no botão errado, ligando ao slide "Tente de novo!".`,
      gabarito: `Os dois botões devem ter link: o certo apontando para "Parabéns!" e o errado para "Tente de novo!". Confere-se entrando no modo apresentação (F5) e clicando cada botão; cada um leva ao slide correto.`,
    },
    {
      titulo: `Detetive do botão trocado`,
      tipo: `Jogo`,
      tempo: `10 min`,
      guiaProfessor: `Prepare um jogo-exemplo COM ERRO: os dois botões levam ao mesmo slide, ou o certo leva ao "Tente de novo!". As crianças viram detetives que descobrem e consertam o engano.`,
      atividade: `Em duplas, no jogo-exemplo com defeito, as crianças apertam F5 e testam. Descobrem qual botão está levando para o lugar errado, saem do modo apresentação (Esc), selecionam o botão e refazem o Link para o slide certo. Depois testam de novo.`,
      gabarito: `Está resolvido quando, no modo apresentação, a resposta certa leva ao "Parabéns!" e a errada ao "Tente de novo!". A dupla acerta ao identificar o link trocado e corrigi-lo pelo menu Inserir > Link.`,
    },
    {
      titulo: `Construtor de duas perguntas`,
      tipo: `Desafio`,
      tempo: `15 min`,
      guiaProfessor: `Desafio para quem dominou o passo. Pedir uma segunda pergunta com os mesmos dois caminhos exige repetir o gesto sozinho e organizar mais slides. Ofereça os slides modelo para copiar.`,
      atividade: `A criança cria uma SEGUNDA pergunta no jogo, com dois botões. Liga o botão certo a um novo (ou ao mesmo) slide "Parabéns!" e o errado a um "Tente de novo!". Testa no modo apresentação as duas perguntas seguidas, acertando e errando cada uma.`,
      gabarito: `O jogo passa a ter DUAS perguntas, e em ambas a resposta certa leva ao "Parabéns!" e a errada ao "Tente de novo!", tudo verificado no F5. Completo quando os quatro botões (dois por pergunta) levam aos destinos corretos.`,
    },
  ],
};
