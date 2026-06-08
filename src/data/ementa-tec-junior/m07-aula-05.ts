import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "A moeda que gira: animação de 4 frames",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança cria a animação de uma moeda dourada girando com 4 frames (frente, perfil fino, costas e perfil fino do outro lado), entendendo que é um ciclo que se repete para sempre.`,
  descricao: `Nesta aula a turma sai do boneco que respira parado e descobre algo novo e brilhante: um objeto que gira sozinho. Vamos animar uma moeda dourada rodando, daquelas que aparecem nos jogos quando o herói pega um tesouro. Para a moeda girar de verdade, ela precisa de 4 frames diferentes: a moeda de frente (redonda e cheia), a moeda virando de lado (bem fininha, quase uma listrinha), a moeda de costas (redonda de novo) e a moeda virando de lado do outro jeito (fininha de novo). Quando esses 4 quadrinhos trocam rápido, o olho enxerga a moeda dando uma volta completa.

A grande ideia da aula é o ciclo. Diferente do idle, que só sobe e desce a barriguinha, a moeda gira e volta para o começo sem ninguém perceber a emenda: o frame 4 liga de novo no frame 1, e roda, roda, roda para sempre. É como um carrossel ou uma roda-gigante que dá voltas sem fim. Mostrar isso desperta um "uau" gostoso na turma, porque a moeda parece viva e mágica.

Para chegar lá, a criança vai usar tudo o que já aprendeu. O timing das aulas 1 e 2 (trocar os frames na velocidade certa) ajuda a moeda a girar nem rápido demais nem devagar demais. O onion skin das aulas 3 e 4 (a folha mágica) ajuda a deixar a moeda no mesmo lugarzinho em todos os frames, para ela girar parada e não pular pela tela. Assim a animação fica redondinha e suave.

Esta moeda girando é um tesouro que vamos guardar com carinho, porque ela volta nas próximas aulas: na aula 6 a turma faz a moeda flutuar e brilhar, na aula 7 a gente exporta ela como GIF e sprite sheet, e na aula 8 ela entra no sprite sheet final pronto para o jogo. Por isso, no fim da aula, cada criança salva o arquivo com capricho.`,
  materiais: [
    `Computadores (um por criança) com o Aseprite aberto e um arquivo novo de moeda já criado pelo professor (tamanho pequeno, por exemplo 32 por 32 pixels), pronto para a turma desenhar.`,
    `Projetor ou TV grande ligado no computador do professor para demonstrar cada clique no Aseprite.`,
    `Arquivo de exemplo pronto: uma moeda girando com os 4 frames bem feitos, rodando em ciclo, para a turma ver o resultado final logo no começo.`,
    `Uma moeda de verdade grande (ou um disco/CD) para o professor girar na mão no aquecimento e mostrar a forma fininha de lado.`,
    `Paleta de cores douradas/amarelas já preparada no Aseprite (amarelo claro para o brilho, amarelo médio e marrom para a sombra).`,
    `Cópias de segurança dos arquivos das crianças, caso alguém apague um frame sem querer.`,
    `Adesivos ou carimbos de "Girou!" para premiar quem fizer a moeda dar a volta completa.`,
  ],
  conceitosChave: [
    `Ciclo de animação — uma sequência de frames que termina e volta para o começo sozinha, girando para sempre sem fim.`,
    `Frame — cada quadrinho do desenho; aqui são 4 quadrinhos que mostram a moeda em posições diferentes da volta.`,
    `Perfil fino — a moeda vista de lado, que fica bem estreitinha, quase uma listra em pé, no meio do giro.`,
    `Timing — a velocidade em que os 4 frames trocam; rápido o bastante para a moeda girar bonito.`,
    `Onion skin — a folha mágica que mostra o frame anterior por baixo, ajudando a deixar a moeda centrada em todos os frames.`,
    `Loop — palavra que quer dizer "repetir sem parar"; a moeda roda em loop, igual a um carrossel.`,
    `Sprite — o desenho do objeto do jogo (aqui, a moeda) que vai ganhar vida com a animação.`,
  ],
  treinamento: `## O que o professor precisa saber

A moeda girando é o exemplo clássico para ensinar um ciclo de animação completo. A volta da moeda tem 4 posições-chave: de frente (círculo cheio), de lado (uma faixa vertical bem fina, com 1 a 3 pixels de largura), de costas (círculo cheio de novo, pode ter um brilho diferente) e de lado outra vez (faixa fina do outro lado). Esses 4 frames, repetidos em loop, dão a ilusão de giro contínuo. O segredo visual é a moeda "encolher" na horizontal até virar um traço e depois "abrir" de novo.

No Aseprite, os frames ficam na Timeline (linha do tempo), na parte de baixo da tela. Se ela não aparecer, ligue em "View > Timeline" ou aperte Tab. Para criar um frame novo, clique no botão de "+" da Timeline ou aperte a tecla N (atalho de novo frame). Para ver a animação rodando, aperte Enter; aperte Enter de novo para parar. A velocidade de cada frame se ajusta clicando duas vezes no frame na Timeline e mudando o tempo em milissegundos (por volta de 100 ms por frame deixa a moeda girando num ritmo gostoso). Mantenha o onion skin (ícone de duas folhas acima da Timeline) ligado para centralizar a moeda em todos os frames.

Importante: a animação já é um loop natural no Aseprite ao apertar Enter, então o frame 4 emenda no frame 1 automaticamente. O cuidado principal é desenhar a moeda sempre no centro do quadro, senão ela "pula" ao girar.

## Passo a passo da aula

10 min - Aquecimento: gire uma moeda de verdade (ou um CD) na mão e peça que a turma observe. Pergunte: "Quando ela vira de lado, ela fica gorda ou fininha?". Mostre no projetor o exemplo pronto da moeda girando e aperte Enter para rodar. Diga que hoje todos vão fazer uma moeda mágica que gira sem parar.

15 min - Conteúdo guiado: no seu Aseprite, mostre o frame 1 já com a moeda redonda de frente. Aperte N para criar o frame 2 e desenhe a moeda fininha de lado (uma listrinha amarela no meio). Aperte N de novo para o frame 3 e desenhe a moeda redonda de costas. Aperte N para o frame 4 e desenhe a listrinha fina do outro lado. Aperte Enter: a moeda gira! Mostre que ligar o onion skin (ícone de duas folhas) ajuda a manter tudo no centro.

25 min - Mão na massa: cada criança parte do arquivo de moeda de frente. Cria os frames 2, 3 e 4 com a tecla N, desenhando perfil fino, costas e perfil fino do outro lado. Liga o onion skin para centralizar. Aperta Enter para ver girar, ajusta e tenta de novo. Circule pela sala lembrando: "frame de lado é bem fininho!". Ao final, peça para salvar (Ctrl+S).

10 min - Desafio e compartilhar: cada um mostra a sua moeda girando no projetor ou na própria tela. Quem fechou a volta completa ganha o carimbo "Girou!". Pergunte: "A moeda volta para o começo sozinha? Isso é o ciclo!".

## Como explicar para crianças de 5 a 9

Use a moeda de verdade girando: "Olha, quando ela vira de lado fica fininha igual a uma fatia de papel". Chame os 4 frames de "as 4 fotos da volta da moeda". Diga que o computador troca as fotos rápido e por isso a moeda parece girar de verdade. Para o ciclo, faça um gesto de roda com a mão e diga "roda, roda e volta pro começo, sem fim, igual a uma roda-gigante". Lembre da folha mágica (onion skin) das aulas passadas como a ajudante que segura a moeda no meio.

## Erros comuns e como ajudar

O erro mais comum é desenhar a moeda de lado ainda gordinha; mostre de novo a moeda real virando e peça uma listrinha bem fina. Outro é desenhar a moeda fora do centro, então ela pula ao girar: ligue o onion skin e ajude a centralizar. Algumas crianças esquecem de criar os 4 frames (param em 2 ou 3): confira na Timeline quantos quadrinhos cada uma tem. Há quem desenhe no frame errado: confirme qual está destacado na Timeline. Se a moeda girar rápido ou devagar demais, abra o tempo do frame com clique duplo e ajuste perto de 100 ms. E sempre salve com Ctrl+S, pois esta moeda será usada nas próximas aulas.`,
  exercicios: [
    {
      titulo: `Gira a moeda na mão`,
      tipo: `observação e roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Gire uma moeda de verdade (ou CD) na mesa ou entre os dedos, várias vezes, devagar. Faça a turma observar o momento em que ela fica de lado. Pergunte em voz alta e deixe as crianças responderem com gestos das mãos (abrindo e fechando) o quanto a moeda fica fina.`,
      atividade: `Olhe o professor girar a moeda. Quando ela vira de lado, mostre com as mãos: ela fica gorda e redonda ou fininha como um papel? Diga quantas posições diferentes você consegue ver enquanto ela dá uma volta.`,
      gabarito: `A criança acerta ao perceber que de frente a moeda é redonda e de lado fica bem fininha. A resposta esperada para as posições é "4": frente, lado fino, costas e lado fino de novo. Vale aceitar respostas próximas, desde que ela note a moeda encolhendo de lado.`,
    },
    {
      titulo: `Quatro frames da moeda`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `No projetor, parta da moeda de frente já pronta no frame 1. Demonstre apertar a tecla N para criar cada novo frame e desenhe junto com a turma: frame 2 listrinha fina, frame 3 redonda de costas, frame 4 listrinha fina do outro lado. Vá devagar e espere todos acompanharem na Timeline.`,
      atividade: `No seu Aseprite, a moeda de frente já está no frame 1. Aperte N para criar o frame 2 e desenhe a moeda fininha de lado. Aperte N para o frame 3 e desenhe a moeda redonda de costas. Aperte N para o frame 4 e desenhe a listrinha fina do outro lado. Agora você tem 4 frames!`,
      gabarito: `Está certo quando a Timeline mostra exatamente 4 frames: redonda, fina, redonda, fina. O professor confere contando os quadrinhos na linha do tempo. Os dois frames de perfil devem estar bem estreitos, não redondos.`,
    },
    {
      titulo: `Roda sem pular: o onion skin`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Relembre a folha mágica das aulas 3 e 4. Mostre o ícone de duas folhas acima da Timeline e clique para ligar. Demonstre como o fantasminha do frame anterior ajuda a manter a moeda no centro do quadro em todos os frames. Aperte Enter para mostrar a diferença entre uma moeda centrada e uma que pula.`,
      atividade: `Ligue o onion skin (o botão das duas folhas) acima da linha do tempo. Olhe o fantasma do frame de trás e ajeite a sua moeda para ela ficar bem no meio do quadradinho em todos os 4 frames. Aperte Enter para ver girar. Ela gira parada no lugar ou pula pela tela?`,
      gabarito: `Acerta quem deixa a moeda centrada nos 4 frames, de modo que ao apertar Enter ela gira no mesmo lugar, sem pular para os lados. Se ainda pular, a criança deve usar o fantasma do onion skin para reencaixar a moeda no centro.`,
    },
    {
      titulo: `O ritmo certo do giro`,
      tipo: `prática na ferramenta e ajuste de timing`,
      tempo: `8 minutos`,
      guiaProfessor: `Explique que a moeda pode girar rápido ou devagar e que isso é o timing das aulas 1 e 2. Demonstre o clique duplo num frame da Timeline para abrir o tempo em milissegundos e mude para perto de 100 ms. Mostre como fica girando rápido demais (20 ms) e devagar demais (500 ms) para a turma sentir a diferença.`,
      atividade: `Aperte Enter para ver a moeda girando. Está rápida demais ou devagar demais? Dê dois cliques num frame na linha do tempo e mude o tempo dele. Tente deixar perto de 100. Aperte Enter de novo até a moeda girar num ritmo bonito, nem corrida nem dormindo.`,
      gabarito: `Está correto quando a criança consegue abrir o tempo do frame com clique duplo e ajustá-lo para a moeda girar de forma agradável, em torno de 100 ms por frame. O objetivo é ela perceber que mudar o tempo muda a velocidade do giro.`,
    },
    {
      titulo: `Salvar o tesouro para as próximas aulas`,
      tipo: `desafio e finalização`,
      tempo: `8 minutos`,
      guiaProfessor: `Reforce que esta moeda será usada nas aulas 6, 7 e 8, então salvar é essencial. Demonstre Ctrl+S e o nome do arquivo. Convide cada criança a mostrar a moeda girando no projetor ou na própria tela e explicar, com uma frase, o que é o ciclo. Entregue o carimbo "Girou!" a quem fechou a volta.`,
      atividade: `Desafio final: deixe a sua moeda girando bem redondinha e aperte Ctrl+S para salvar o tesouro. Depois mostre para a turma a moeda rodando e responda: por que a moeda nunca para de girar? O que acontece quando o último frame termina?`,
      gabarito: `A criança conclui o desafio ao salvar o arquivo (Ctrl+S) com os 4 frames girando em ciclo. A resposta esperada é que a moeda não para porque, quando o último frame (4) termina, ela volta para o primeiro (1) sozinha; isso é o ciclo, ou loop, que repete sem fim.`,
    },
  ],
};
