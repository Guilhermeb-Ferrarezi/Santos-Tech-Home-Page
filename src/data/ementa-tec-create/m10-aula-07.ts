import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Montando o jogo completo: tudo junto",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Reunir animações, pontos, vidas, telas, inimigos e sons em uma única experiência jogável do início ao fim, testando o fluxo completo e corrigindo os bugs encontrados no playtest com os colegas.`,
  descricao: `Durante o mês inteiro, cada aula adicionou uma peça ao jogo: o personagem ganhou animações, depois aprendeu a trocar de animação na hora certa, veio o sistema de pontos, as vidas com game over e as telas, os inimigos e, na última aula, os sons. Cada parte foi testada sozinha. Hoje é o grande encontro: a aula em que todas essas peças se juntam para virar um jogo de verdade, daqueles que começam numa tela inicial, têm desafio no meio e terminam numa tela de vitória ou de game over.

Montar o jogo completo é diferente de criar uma peça nova. Aqui o trabalho é de integração e de teste: o aluno joga do começo ao fim, repara onde o fluxo trava ou fica estranho e arruma. Será que ao morrer o jogo realmente vai para a tela de game over? O placar zera quando uma nova partida começa? O som do inimigo toca na hora certa? São perguntas que só aparecem quando a pessoa joga o jogo inteiro, sem pular etapas. Por isso, o coração da aula é o playtest, o teste de jogabilidade.

No playtest, os alunos trocam de computador e jogam o jogo do colega. Quem fez o jogo observa em silêncio e anota tudo o que o outro estranha, erra ou nem percebe. Esse olhar de fora é valiosíssimo: o criador já decorou onde clicar e como vencer, então não enxerga mais os problemas que um jogador novo encontra de cara. É assim que estúdios profissionais descobrem bugs e ajustam a dificuldade antes de lançar.

Por fim, com a lista de problemas em mãos, vem o ajuste de dificuldade e a correção de bugs. Talvez os inimigos estejam rápidos demais, o pulo curto demais ou falte um aviso na tela. O aluno aprende que um jogo bom não nasce pronto: ele é lapidado teste após teste. Ao fim desta aula o jogo já deve rodar inteiro, ficando para a Aula 8 apenas o acabamento e a entrega final.`,
  materiais: [
    `Computadores com o Construct 3 aberto no projeto do jogo de cada aluno, um por aluno`,
    `Projetor ou TV para o professor demonstrar o teste do fluxo completo na tela grande`,
    `Arquivo de exemplo .c3p com um jogo simples já montado do início ao fim (tela inicial, jogo, game over)`,
    `Fones de ouvido para os alunos testarem os sons sem atrapalhar os colegas`,
    `Folha impressa de checklist de playtest (telas, pontos, vidas, inimigos, som) para anotar os problemas`,
    `Quadro branco ou bloco de notas digital para listar os bugs encontrados pela turma`,
  ],
  conceitosChave: [
    `Integração — momento em que todas as partes feitas separadamente (animações, pontos, vidas, telas, inimigos, som) passam a funcionar juntas no mesmo jogo.`,
    `Fluxo do jogo — caminho que o jogador percorre do início ao fim: tela inicial, partida, e tela de vitória ou game over.`,
    `Playtest (teste de jogabilidade) — quando alguém joga o jogo para descobrir problemas, bugs e partes confusas antes de considerá-lo pronto.`,
    `Bug — erro no jogo que faz algo acontecer de forma errada, como o placar não zerar ou o personagem atravessar uma parede.`,
    `Balanceamento (ajuste de dificuldade) — afinar valores como velocidade dos inimigos e força do pulo para o jogo não ficar fácil nem difícil demais.`,
    `Layout — em Construct 3, cada tela ou fase do jogo é um Layout; a tela inicial, a fase e o game over costumam ser Layouts diferentes.`,
    `Evento de transição — bloco na Event Sheet que leva o jogador de um Layout para outro, por exemplo de "Go to layout" ao perder todas as vidas.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta é uma aula de juntar e testar, não de criar recurso novo. O jogo do aluno já tem todas as peças; o trabalho é garantir que elas conversem. Em Construct 3, isso aparece principalmente na navegação entre Layouts (as telas) e nos eventos que ligam uma à outra. Antes da aula, abra o arquivo de exemplo e jogue do início ao fim: clique em iniciar, jogue, perca de propósito e veja se cai no game over, depois recomece e confira se pontos e vidas voltam ao valor inicial. Anote onde trava. Você não precisa dominar o Construct 3: basta saber onde ficam o botão Preview (o ícone de play no canto superior, atalho F5), a lista de Layouts (painel Project à direita) e as Event Sheets. O foco é orientar o teste e a correção.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça que todos abram o próprio projeto e apertem F5 para rodar o Preview. Cada um joga 1 minuto e responde no papel: "Meu jogo tem início, meio e fim?". No painel Project, à direita, mostre a pasta Layouts e confirme que existem pelo menos a tela inicial, a fase e o game over.

Conteúdo novo guiado (15 min): no projetor, abra o exemplo e mostre o fluxo completo. Vá em cada Layout pela lista do painel Project. Abra a Event Sheet da fase e localize o evento que detecta "vidas = 0"; ao lado, a ação System > Go to layout levando ao game over. Mostre também onde o placar é zerado ao iniciar nova partida (ação Set value da variável de pontos para 0 no evento "On start of layout"). Rode o Preview (F5), perca de propósito e prove que o jogo vai mesmo para o game over.

Mão na massa (25 min): cada aluno testa o próprio jogo do início ao fim com F5. Em seguida, formam duplas e trocam de computador para o playtest: quem joga apenas joga; o dono observa e anota no checklist tudo o que estranhou. Depois voltam aos seus lugares e corrigem pelo menos um problema da lista. Circule pela sala ajudando a achar o evento certo na Event Sheet. Lembre-os de salvar com Ctrl+S a cada correção.

Desafio e compartilhar (10 min): proponha o ajuste de dificuldade (veja exercícios). Para encerrar, dois ou três alunos rodam o jogo no projetor e contam um bug que encontraram e como resolveram.

## Como explicar de forma clara (linguagem para a idade)

Compare o jogo com um filme: tem começo (tela inicial), meio (a ação) e fim (vitória ou game over); hoje a gente confere se o filme roda inteiro sem cortar. Diga que cada tela é um Layout, como se fossem páginas diferentes de um caderno, e que os eventos são as setas que viram a página. Sobre o playtest, use a frase: "Quem fez o jogo já sabe demais; por isso a gente pede para o colega jogar e descobrir o que a gente não vê mais." Trate bug como "soluço do jogo": não é fracasso, é parte normal de criar, e todo estúdio grande passa por isso.

## Erros comuns e como ajudar

O erro mais comum é o placar ou as vidas não voltarem ao valor inicial numa nova partida; mostre o evento "On start of layout" e a ação de Set value zerando a variável. Outro é o evento de game over apontar para o Layout errado ou nenhum; confira o nome no campo do "Go to layout". Muitos esquecem de salvar e perdem a correção; ensine o reflexo do Ctrl+S. Há quem teste só o trecho que gosta e não o jogo inteiro; insista no fluxo do início ao fim. No playtest, é comum o dono querer ensinar o colega a jogar; explique que ficar quieto e anotar é o que revela os problemas de verdade. Por fim, alguns querem reescrever tudo ao ver um bug; oriente a corrigir um problema de cada vez e testar logo depois.`,
  exercicios: [
    {
      titulo: `Jogue do início ao fim`,
      tipo: `Prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Garanta que cada aluno saiba rodar o Preview com F5. Reforce que devem jogar até o fim de verdade, inclusive perdendo de propósito para chegar ao game over.`,
      atividade: `Aperte F5 e jogue o seu jogo do começo ao fim: passe pela tela inicial, jogue a fase, perca de propósito para ver o game over e depois recomece. Marque no checklist o que funcionou e o que falhou.`,
      gabarito: `O aluno consegue percorrer todo o fluxo: tela inicial, fase e game over. O checklist está preenchido apontando ao menos um item que funciona e, se houver, um que falha, como o placar não zerar ou o jogo não ir para o game over.`,
    },
    {
      titulo: `Conserta um bug`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Ajude o aluno a localizar o evento certo na Event Sheet. Lembre-os de testar de novo com F5 logo após a correção e de salvar com Ctrl+S.`,
      atividade: `Escolha um problema do seu checklist e corrija-o no Construct 3. Pode ser zerar os pontos no "On start of layout", apontar o "Go to layout" para a tela certa ou ajustar uma vida. Rode o Preview e confirme que sumiu.`,
      gabarito: `O aluno alterou o evento correto na Event Sheet e o bug não acontece mais ao rodar o Preview. O projeto foi salvo com Ctrl+S. O problema escolhido está marcado como resolvido no checklist.`,
    },
    {
      titulo: `Playtest com o colega`,
      tipo: `Em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas e mande trocar de computador. Reforce a regra: quem é dono do jogo observa em silêncio e só anota; nada de ensinar a jogar. O retorno deve ser específico e gentil.`,
      atividade: `Troque de lugar com o colega e jogue o jogo dele do início ao fim. O dono observa calado e anota tudo o que você estranhar, errar ou não entender. Depois, devolva a lista de observações e troquem os papéis.`,
      gabarito: `Cada dupla produz uma lista com pelo menos dois pontos observados no jogo do colega (por exemplo, "não entendi onde começar" ou "o inimigo é rápido demais"). O dono respeitou o silêncio durante o teste e usou as anotações para entender problemas que sozinho não tinha percebido.`,
    },
    {
      titulo: `Afinando a dificuldade`,
      tipo: `Desafio`,
      tempo: `8 min`,
      guiaProfessor: `Mostre onde ficam os valores ajustáveis: velocidade do inimigo no comportamento dele, força do pulo no comportamento Platform ou quantidade de vidas. Oriente a mudar um valor por vez e testar.`,
      atividade: `Com base no playtest, ajuste a dificuldade do seu jogo: mude um valor, como a velocidade do inimigo, a força do pulo ou o número de vidas. Rode o Preview e veja se ficou mais justo, nem fácil nem difícil demais.`,
      gabarito: `O aluno alterou ao menos um valor de balanceamento e justifica a escolha com base no playtest (por exemplo, "diminuí a velocidade do inimigo porque ninguém passava da primeira parte"). Ao testar, o jogo fica perceptivelmente mais equilibrado do que antes.`,
    },
    {
      titulo: `Roda de bugs e soluções`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Conduza a roda de forma acolhedora, deixando claro que bug faz parte de criar jogos. Anote no quadro os tipos de problema que mais apareceram na turma para fechar a aula com um panorama.`,
      atividade: `Em roda, cada aluno conta um bug que encontrou no próprio jogo e como resolveu (ou pretende resolver). Compare com os colegas: vocês tiveram problemas parecidos? Que solução funcionou melhor?`,
      gabarito: `Cada aluno descreve com clareza ao menos um bug e a solução aplicada, usando termos como Layout, evento, playtest e balanceamento. A turma percebe que vários problemas se repetem entre os jogos e que testar e corrigir é parte normal de fazer um jogo.`,
    },
  ],
};
