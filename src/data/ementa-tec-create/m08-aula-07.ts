import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Polindo o jogo",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Adicionar os toques finais ao joguinho — tela de vitória ou derrota, contador de pontos na tela e efeitos sonoros simples — e ajustar a dificuldade testando e corrigindo bugs.`,
  descricao: `Nesta aula o jogo deixa de ser um protótipo e vira uma experiência de verdade. Até agora o aluno já tem sprites na tela, um cenário montado, eventos com regras e personagens que se movem com comportamentos. O que falta é o "polimento": aquilo que faz o jogador sentir que terminou alguma coisa, que está ganhando pontos e que o jogo responde aos toques. São três ingredientes simples e poderosos — tela de fim de jogo, placar e som.

A tela de vitória ou derrota é o que dá um final ao jogo. Sem ela, o joguinho simplesmente continua para sempre, e o jogador nunca sabe se venceu. No Construct 3, a forma mais fácil de criar esse final é com um objeto de Texto que aparece ("Você venceu!" ou "Game Over") quando uma condição acontece, ou então mudando para outro layout que funciona como tela de fim. O contador de pontos usa uma variável global (um número que o jogo guarda) que sobe a cada acerto e é mostrado na tela por um objeto de Texto que é atualizado a cada instante.

Os efeitos sonoros usam o plugin de áudio do Construct 3. Um "blip" quando o jogador pega um item, um som grave quando perde uma vida — pequenos detalhes que deixam o jogo muito mais vivo. O segredo é simples: importar o arquivo de som para a pasta Sounds e mandar tocar dentro de um evento que já existe.

A segunda metade da aula é dedicada a testar, caçar bugs e ajustar a dificuldade. Esta é a hora de o aluno virar jogador do próprio jogo: o que está fácil demais? O que está impossível? O personagem trava em algum lugar? Ajustar a velocidade, a quantidade de inimigos ou o número de pontos para vencer é parte essencial do trabalho de quem cria games — e é onde o aluno aprende que um bom jogo é um jogo equilibrado.`,
  materiais: [
    `Computadores com o Construct 3 aberto e o projeto do aluno (o jogo das aulas anteriores) carregado`,
    `Projetor para o professor demonstrar cada passo na tela grande`,
    `Arquivo de exemplo "jogo-polido.c3p" com tela de vitória, placar e sons já prontos, para consulta`,
    `Pasta com 3 ou 4 efeitos sonoros curtos em formato .wav (acerto, erro, vitória) para os alunos importarem`,
    `Fones de ouvido (um por aluno) para testar os sons sem bagunça na sala`,
    `Folha impressa com a "Lista de bugs" — uma tabela simples para o aluno anotar o que encontrar e corrigir`,
  ],
  conceitosChave: [
    `Polimento — etapa final em que se adicionam detalhes (som, placar, telas) que deixam o jogo agradável e completo.`,
    `Variável global — um número que o jogo guarda e lembra durante toda a partida, como a pontuação; vale para o jogo inteiro, não só para um objeto.`,
    `Contador de pontos (placar) — número na tela que sobe quando o jogador acerta, mostrado por um objeto de Texto atualizado a cada instante.`,
    `Tela de vitória ou derrota — momento que mostra "Você venceu!" ou "Game Over" e dá um final ao jogo, em vez de ele continuar para sempre.`,
    `Efeito sonoro — som curto que toca dentro de um evento (pegar item, perder vida) usando o plugin de Áudio do Construct 3.`,
    `Bug — erro no jogo que faz algo inesperado acontecer; testar é a forma de encontrar e corrigir bugs.`,
    `Dificuldade — o quão fácil ou difícil é o jogo; ajusta-se mudando velocidade, número de inimigos ou pontos para vencer.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Construct 3. Esta aula adiciona três coisas a um jogo que já existe: um placar, uma tela de fim e sons. Tudo é feito na aba Event Sheet (a folha de eventos) e na aba Layout. Antes da aula, abra o projeto de exemplo e localize três painéis: o Project Bar à direita (lista de objetos e a pasta Sounds), o painel de objetos e a barra de eventos. Saiba também que "variável global" é só um número que o jogo guarda — vamos chamá-lo de Pontos.

## Passo a passo da aula

Aquecimento (10 min): peça que cada aluno abra o próprio jogo e jogue por um minuto. Pergunte em voz alta: "O que falta para parecer um jogo de verdade?". Anote as respostas no quadro — quase sempre alguém diz "som" ou "uma tela de fim".

Conteúdo novo guiado (15 min): no projetor, mostre os três acréscimos.
1. Placar: na Event Sheet, clique com o botão direito na área de eventos e escolha Add global variable. Dê o nome Pontos e valor inicial 0. Em seguida, no evento em que o jogador acerta algo (por exemplo, colidir com a moeda), adicione a ação System > Add to Pontos, valor 1.
2. Mostrar na tela: no Layout, dê um duplo clique numa área vazia, escolha Text, posicione no canto de cima e renomeie para txtPontos. Na Event Sheet, crie um evento System > Every tick com a ação txtPontos > Set text para a expressão "Pontos: " & Pontos.
3. Som: arraste um arquivo .wav para a pasta Sounds no Project Bar. No evento do acerto, adicione a ação Audio > Play e escolha o som. Se não houver o objeto Audio, dê duplo clique no Layout, adicione Audio uma vez.

Mão na massa (25 min): cada aluno faz os três passos no próprio jogo. Circule pela sala. Depois, peça que criem a tela de fim: um evento "If Pontos = 10" com a ação txtPontos > Set text para "Você venceu!" e System > Set time scale para 0 (congela o jogo). Quem terminar testa e começa a ajustar a dificuldade.

Desafio e compartilhar (10 min): cada aluno troca de lugar e joga o jogo do colega por dois minutos, anotando um bug e uma sugestão na folha. No fim, dois ou três voluntários mostram o jogo no projetor com o som ligado.

## Como explicar de forma clara

Use comparações do dia a dia. A variável global é "a caixinha onde o jogo guarda quantos pontos você fez — ele nunca esquece". O Every tick é "o jogo conferindo o placar muitas vezes por segundo, mais rápido do que a gente pisca". O símbolo & junta pedaços de texto: "a palavra Pontos, dois pontos e o número, tudo numa frase só". A tela de fim é "o apito final do jogo": sem ela, o jogo joga para sempre. Para som, lembre que o evento já existe — só estamos pedindo "e toca esse barulho também".

## Erros comuns e como ajudar

O placar não aparece: quase sempre o aluno esqueceu o objeto Text no Layout ou digitou o nome errado na expressão. Confira se é txtPontos exatamente. O número não sobe: o Add to Pontos foi colocado no evento errado ou faltou a colisão; peça para testar o evento de acerto sozinho. As aspas: a expressão "Pontos: " & Pontos precisa das aspas só na parte de texto; sem aspas no & dá erro vermelho. O som não toca: o arquivo precisa estar na pasta Sounds (não Music) e o objeto Audio precisa existir no Layout. A tela de fim dispara o tempo todo: troque = por uma condição que ocorra uma vez, ou use Trigger once while true logo abaixo da condição. Lembre os alunos de salvar com Ctrl + S a cada conquista.`,
  exercicios: [
    {
      titulo: `Colocando o placar na tela`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Conduza passo a passo no projetor enquanto cada aluno repete. O objetivo é só fazer aparecer e funcionar — não precisa estar bonito ainda. Pare em cada etapa e confira se todos acompanharam antes de seguir.`,
      atividade: `No seu jogo, crie a variável global Pontos começando em 0. Adicione um objeto de Texto no canto de cima da tela e chame-o de txtPontos. Faça o número subir 1 sempre que o jogador acertar algo e mostre "Pontos: " junto do número na tela.`,
      gabarito: `O aluno acertou se, ao jogar, o número no canto da tela começa em 0 e aumenta de 1 em 1 a cada acerto, sempre mostrando o texto "Pontos:" antes do número. A variável Pontos aparece na lista de variáveis globais e o objeto txtPontos existe no Layout.`,
    },
    {
      titulo: `Dando som ao jogo`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Distribua os fones de ouvido antes de começar, senão a sala vira uma bagunça de barulhos. Mostre como arrastar o .wav para a pasta Sounds e onde fica a ação Audio > Play. Cuide para que ninguém ponha o som no evento Every tick (tocaria sem parar).`,
      atividade: `Importe pelo menos dois efeitos sonoros: um para quando o jogador acerta e outro para quando erra ou perde. Faça cada som tocar dentro do evento certo. Teste com o fone de ouvido.`,
      gabarito: `Está correto quando, ao jogar, toca um som no momento do acerto e um som diferente no momento do erro/perda, sem ficar repetindo sozinho. Os dois arquivos aparecem na pasta Sounds e o objeto Audio existe no Layout.`,
    },
    {
      titulo: `A tela de fim de jogo`,
      tipo: `Desafio`,
      tempo: `10 min`,
      guiaProfessor: `Este é o passo que mais gera dúvida com a condição que dispara sem parar. Mostre o Trigger once while true e explique que ele faz a ação acontecer uma vez só. Deixe o aluno escolher se quer vitória, derrota ou as duas.`,
      atividade: `Crie uma tela de fim: quando o jogador chegar a um número de pontos (por exemplo, 10), mostre a mensagem "Você venceu!" e congele o jogo. Se o seu jogo tiver vidas, crie também um "Game Over" quando as vidas chegarem a 0.`,
      gabarito: `Correto quando, ao atingir a pontuação definida, a tela mostra "Você venceu!" e o jogo para (time scale 0 ou troca de layout), aparecendo uma vez só e não piscando. Se houver derrota, "Game Over" surge quando as vidas chegam a 0.`,
    },
    {
      titulo: `Caçada aos bugs em dupla`,
      tipo: `Em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas e peça que troquem de computador. Entregue a folha "Lista de bugs". Reforce que apontar um problema no jogo do colega é ajudar, não criticar — todo jogo de verdade passa por testadores. Circule garantindo que as anotações sejam específicas.`,
      atividade: `Jogue o jogo do seu colega por alguns minutos. Na folha, anote pelo menos dois bugs ou problemas (o personagem trava, o som não toca, o placar não sobe, está fácil ou difícil demais) e uma sugestão de melhoria. Depois, cada um volta ao próprio jogo e corrige pelo menos um bug encontrado.`,
      gabarito: `Sucesso quando cada dupla preencheu a folha com pelo menos dois problemas concretos e uma sugestão, e cada aluno corrigiu ao menos um bug no próprio jogo — testando depois para confirmar que o problema sumiu. Anotações vagas como "está ruim" devem ser refeitas com detalhe.`,
    },
    {
      titulo: `Ajustando a dificuldade do meu jogo`,
      tipo: `Projeto curto`,
      tempo: `18 min`,
      guiaProfessor: `Esta é a entrega final do polimento e une tudo. Explique que equilibrar é tarefa de quem cria games: nem fácil demais (chato), nem impossível (frustrante). Mostre onde mudar números: velocidade nos comportamentos, quantidade de inimigos, pontos para vencer. Incentive testar, mudar um número, testar de novo.`,
      atividade: `Deixe o seu jogo equilibrado: jogue, sinta se está fácil ou difícil demais e ajuste pelo menos dois números (velocidade, quantidade de inimigos ou pontos para vencer). O jogo final precisa ter placar funcionando, pelo menos um som e uma tela de fim. Salve com Ctrl + S e jogue do começo ao fim uma vez.`,
      gabarito: `Concluído quando o aluno entrega um jogo que abre, mostra o placar subindo, toca pelo menos um som, tem tela de vitória ou derrota e foi ajustado em pelo menos dois valores de dificuldade — comprovado por uma partida do início ao fim sem travar. O projeto está salvo.`,
    },
  ],
};
