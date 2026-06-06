import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Personagem com vida: trazendo as animações",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Importar para o Construct 3 as animações em pixel art feitas no Aseprite e organizá-las em estados nomeados dentro de um objeto Sprite, ajustando velocidade e loop de cada animação.`,
  descricao: `Nesta aula o aluno dá o primeiro passo para "dar vida" ao personagem do próprio jogo 2D. Até agora ele desenhou e animou em pixel art no Aseprite; agora vai trazer esses quadros (frames) para dentro do Construct 3 e transformá-los em um objeto do tipo Sprite que se move e respira na tela. É o momento em que o desenho parado vira um personagem animado de verdade, pronto para reagir ao jogador.

O coração da aula é entender que um Sprite no Construct 3 pode guardar várias animações ao mesmo tempo. Cada animação é um estado do personagem: "Parado" (Idle), "Andando" (Walk) e, mais para frente, "Pulando" ou "Atacando". Cada estado é uma lista de frames que tocam em sequência, formando o movimento. Organizar e nomear bem esses estados agora evita uma enorme confusão nas próximas aulas, quando o aluno vai trocar de animação no momento certo.

O professor também apresenta dois ajustes essenciais de cada animação: a velocidade (Speed), que define quantos frames tocam por segundo, e o loop (Looping), que faz a animação repetir em ciclo. Uma caminhada precisa de loop ligado para repetir sem parar; uma animação de ataque normalmente toca uma vez só. Aprender a regular esses valores é o que diferencia um boneco "tremido" de um personagem com movimento fluido e agradável.

Ao final, cada aluno terá um Sprite chamado "Personagem" com pelo menos duas animações nomeadas, ajustadas e testadas no preview. Essa base será reaproveitada em todas as aulas do mês, até o jogo 2D completo ficar pronto.`,
  materiais: [
    `Computadores com o Construct 3 aberto (versão web, no navegador Chrome ou Edge), um por aluno`,
    `Projetor ou TV ligado à máquina do professor para demonstração ao vivo`,
    `Arquivos de exemplo: sprites em pixel art do Aseprite exportados como PNG (um arquivo por frame ou uma folha de sprites), nas animações "Parado" e "Andando"`,
    `Projeto base do Construct 3 em branco (arquivo .c3p) salvo na nuvem ou pen drive, para quem não tiver os próprios desenhos prontos`,
    `Fones de ouvido (opcional) e mouse externo, que facilita o trabalho fino no editor de imagem`,
    `Folha impressa de "atalhos do dia" com os passos principais (criar Sprite, abrir Animations, ajustar Speed e Looping)`,
  ],
  conceitosChave: [
    `Sprite — objeto do Construct 3 que mostra uma imagem na tela e guarda as animações do personagem.`,
    `Frame — cada quadro (imagem) de uma animação; vários frames em sequência criam o movimento.`,
    `Animação — lista de frames com um nome, representando um estado do personagem, como "Parado" ou "Andando".`,
    `Estado — situação atual do personagem (parado, andando, pulando); no Construct 3 cada estado é uma animação nomeada.`,
    `Speed (velocidade) — número de frames por segundo de uma animação; quanto maior, mais rápido o movimento.`,
    `Looping (loop) — quando ligado, a animação repete em ciclo sem parar, ideal para caminhada.`,
    `Image Editor — janela do Construct 3 onde se veem, importam e organizam os frames de cada animação.`,
  ],
  treinamento: `## O que o professor precisa saber

O Construct 3 roda no navegador (editor.construct.net), sem instalação. Tudo gira em torno de objetos: o personagem do jogo será um objeto do tipo Sprite. Um único Sprite guarda várias animações, e cada animação é uma lista de frames. Você não precisa programar nada hoje; é só importar imagens e organizar. Antes da aula, abra um projeto, crie um Sprite de teste e confira o painel Animations à esquerda do Image Editor e a janela Properties à direita, onde ficam Speed e Looping. Tenha os PNGs de exemplo prontos numa pasta fácil de achar.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento: pergunte "o que faz um personagem parecer vivo?" e mostre no projetor um GIF do personagem parado respirando e andando. Relembre que eles já animaram no Aseprite e que hoje isso entra no jogo.

15 min — Conteúdo novo guiado: no projetor, dê duplo clique numa área vazia do Layout, escolha "Sprite" na lista de objetos e clique uma vez no Layout para posicioná-lo. O Image Editor abre. No canto inferior esquerdo, no painel Animations, você vê uma animação chamada "Default". Renomeie com duplo clique para "Parado". Clique no ícone "Import frames" (pasta) ou arraste os PNGs para importar os frames. Crie outra animação com o botão "+" no painel Animations e chame de "Andando", importando os frames da caminhada. Feche o editor. No painel de objetos, renomeie o Sprite para "Personagem".

25 min — Mão na massa: cada aluno cria o próprio Sprite "Personagem", importa as animações "Parado" e "Andando" e nomeia cada uma. Em seguida, seleciona a animação no painel Animations e ajusta, na janela Properties, o campo Speed (sugira começar com 8 a 12) e marca/desmarca Looping (ligado nas duas hoje). Circule pela sala ajudando na importação e na nomeação.

10 min — Desafio e compartilhar: peça que cada um clique em "Preview" (botão play, atalho F5) e observe a animação na velocidade atual. Desafio: achar a Speed que deixa a caminhada mais natural. Dois ou três alunos mostram o resultado no projetor e explicam o número que escolheram.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de "caderno de figurinhas": o Sprite é o caderno; cada animação é uma página com um nome ("Parado", "Andando"); os frames são as figurinhas coladas em ordem. Quando você "folheia" rápido, parece que mexe. Speed é a velocidade com que você folheia; Looping é voltar ao começo do caderno sem parar. Diga que dar nomes claros agora é como organizar a mochila: facilita achar tudo nas próximas aulas. Reforce que não tem código hoje, só organização e ajuste fino.

## Erros comuns e como ajudar

O erro mais comum é jogar todos os frames numa só animação misturando parado e andando; mostre que cada estado precisa da sua própria animação. Outro é deixar nomes como "Default" e "Animation 2", o que confunde depois; insista em nomes em português claros e sem espaços estranhos. Frames importados fora de ordem deixam o movimento errado; ensine a arrastar os frames no painel para reordenar. Speed em 0 trava a animação parecendo um bug; mostre que 0 significa "não toca sozinha". Por fim, alunos esquecem de renomear o objeto para "Personagem" e depois não o encontram; padronize o nome com toda a turma.`,
  exercicios: [
    {
      titulo: `Criando o Sprite Personagem`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Acompanhe a turma passo a passo no projetor enquanto cada aluno repete na própria máquina. Garanta que todos cheguem ao Image Editor antes de avançar.`,
      atividade: `Dê duplo clique numa área vazia do Layout, escolha o objeto Sprite, posicione-o no Layout e, ao abrir o Image Editor, importe os frames da animação parada. Depois feche o editor e renomeie o objeto para "Personagem".`,
      gabarito: `Existe um objeto chamado "Personagem" do tipo Sprite no Layout, com pelo menos um frame importado na animação "Default". O aluno conseguiu abrir e fechar o Image Editor sem perder a imagem.`,
    },
    {
      titulo: `Nomeando os estados do personagem`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre o painel Animations no canto inferior esquerdo do Image Editor. Reforce nomes claros em português e sem espaços confusos. Verifique a ortografia na tela de cada aluno.`,
      atividade: `No painel Animations, renomeie a animação "Default" para "Parado". Crie uma nova animação com o botão "+" e chame de "Andando", importando nela os frames da caminhada.`,
      gabarito: `O Sprite "Personagem" tem exatamente duas animações nomeadas: "Parado" (com os frames do personagem parado) e "Andando" (com os frames da caminhada). Não restam nomes genéricos como "Default" ou "Animation 2".`,
    },
    {
      titulo: `Ajustando velocidade e loop`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `Explique os campos Speed e Looping na janela Properties. Sugira testar valores e observar no Preview (F5). Estimule a comparar antes e depois.`,
      atividade: `Selecione a animação "Andando", ajuste o Speed para um valor entre 6 e 14 e mantenha o Looping ligado. Rode o Preview e ache a velocidade que deixa a caminhada mais natural, sem parecer tremida nem lenta demais.`,
      gabarito: `A animação "Andando" está com Looping ligado e um Speed coerente (tipicamente entre 8 e 12). No Preview, a caminhada repete em ciclo de forma fluida. O aluno sabe dizer qual número escolheu e por quê.`,
    },
    {
      titulo: `Conserto em dupla: a animação quebrada`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Prepare ou peça que cada dupla crie um Sprite com problemas (frames fora de ordem, Speed em 0 ou frames de andar misturados no "Parado"). As duplas trocam de máquina e consertam. Circule mediando a conversa.`,
      atividade: `Na máquina do colega, encontre e corrija os problemas da animação: reordene os frames arrastando-os no painel, ajuste o Speed para um valor maior que 0 e separe os frames que estão na animação errada. Expliquem um ao outro o que acharam.`,
      gabarito: `As animações voltam a tocar corretamente: frames em ordem, Speed maior que 0 e cada estado com seus próprios frames. A dupla consegue nomear pelo menos dois erros encontrados e como os corrigiu.`,
    },
    {
      titulo: `Roda de conversa: por que organizar importa`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Reúna a turma em roda. Conduza com perguntas abertas e registre as ideias no quadro. Conecte as respostas com as próximas aulas, em que será preciso trocar de animação na hora certa.`,
      atividade: `Discutam: por que dar nomes claros às animações ajuda quem vai programar o jogo depois? O que aconteceria se todas as animações se chamassem "Default"? Quando faz sentido desligar o Looping?`,
      gabarito: `Nomes claros permitem chamar a animação certa pelo nome no código das próximas aulas; nomes repetidos geram confusão e erros. O Looping deve ficar desligado em animações que tocam uma vez só, como ataque ou game over. Espera-se que a turma cite ao menos esses três pontos.`,
    },
  ],
};
