import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Acabamento e personagem na mão",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Dar o acabamento final no personagem impresso — lixando, ajustando e limpando a peça — até segurar na mão o próprio protagonista do jogo, comparável à versão digital.`,
  descricao: `Nesta aula o personagem sai do estado "recém-impresso" e vira um objeto apresentável. Nas aulas anteriores o aluno tirou a peça da mesa de impressão e removeu os suportes; agora sobram marcas: pequenas rebarbas, pontinhos ásperos onde o suporte estava grudado, linhas de camada visíveis e, às vezes, um fiapo de plástico aqui e ali. O acabamento é o momento de cuidar desses detalhes com calma, lixando e ajustando a peça com as próprias mãos até ela ficar lisa e bonita.

O acabamento é uma etapa manual e artesanal, não acontece dentro do Bambu Studio. Mesmo assim, o software continua sendo a referência: o aluno abre o projeto fatiado na tela, gira o modelo na janela de pré-visualização e usa a versão digital como "gabarito" para comparar com a peça física. Onde está áspero? Onde sobrou suporte? A peça real ficou parecida com o que estava na tela? Essa comparação entre o digital e o físico é o coração da aula e fecha o ciclo que começou lá atrás, quando o personagem nasceu como modelo 3D do próprio jogo.

Para adolescentes de 10 a 15 anos, este é um momento de orgulho e de paciência. Lixar exige capricho e movimentos suaves: pressão demais arredonda os detalhes que o aluno levou meses para criar. O professor mostra a técnica correta (lixa de grão grosso primeiro, depois grão fino, sempre acompanhando a forma da peça) e reforça a segurança: óculos de proteção, evitar respirar o pó do plástico e nunca usar estiletes apontados para a própria mão.

Ao final, espera-se que cada aluno tenha um personagem liso ao toque, sem rebarbas grandes nem pontas de suporte, e que consiga colocá-lo lado a lado com a imagem digital para mostrar à turma que foi ele quem criou, modelou e imprimiu aquele protagonista. É a primeira vez que o personagem do jogo existe de verdade, na palma da mão — uma virada importante antes de preparar a Demo do Ano 1 na próxima semana.`,
  materiais: [
    `Computadores (até 10) com o Bambu Studio instalado e o projeto fatiado de cada aluno já aberto na tela`,
    `Projetor ou TV ligado no computador do professor para mostrar a janela de pré-visualização e a comparação digital versus físico`,
    `Os personagens impressos de cada aluno, já com os suportes removidos na aula anterior`,
    `Kit de lixas com grãos variados (grão grosso por volta de 220, grão médio 400 e grão fino 600 ou mais) e limas pequenas tipo agulha`,
    `Óculos de proteção, panos de microfibra e uma bacia com água para lixamento úmido (reduz o pó)`,
    `Alicate de corte pequeno e estilete de ponta retrátil para aparar rebarbas e fiapos, usados com supervisão`,
    `Arquivos de exemplo: um personagem impresso já finalizado pelo professor (referência de "como deve ficar") e a imagem do mesmo personagem no jogo`,
  ],
  conceitosChave: [
    `Acabamento — etapa final e manual que deixa a peça impressa lisa e apresentável, depois que os suportes já foram removidos.`,
    `Rebarba — pedacinho de plástico que sobra na peça, geralmente onde havia suporte ou na linha onde as metades do bico passaram.`,
    `Linhas de camada — as listras finas que ficam na superfície porque a impressora monta a peça camada por camada, de baixo para cima.`,
    `Grão da lixa — número que indica quão áspera é a lixa: número baixo (220) lixa rápido e risca mais; número alto (600) é fino e dá o polimento.`,
    `Lixamento úmido — lixar com a lixa molhada ou a peça na água, técnica que diminui o pó e deixa a superfície mais lisa.`,
    `Pré-visualização — a aba do Bambu Studio que mostra a peça já fatiada em 3D, usada aqui como gabarito para comparar com a peça física.`,
    `Comparar digital e físico — colocar o modelo da tela ao lado da peça impressa para conferir se ficou parecido e onde ainda falta acabamento.`,
  ],
  treinamento: `## O que o professor precisa saber

O acabamento é uma etapa de mão, não de software, mas o Bambu Studio continua aberto como referência. Você precisa dominar só uma navegação simples: com o projeto do aluno aberto, clique na aba "Preview" (Pré-visualização), no topo da tela, ao lado de "Prepare" (Preparar). Ali aparece a peça já fatiada. Para girar o modelo e olhar de todos os ângulos, segure o botão direito do mouse e arraste; para dar zoom, use a rodinha do mouse; para mover a câmera, segure a rodinha e arraste. É só isso que precisa saber na ferramenta hoje. O resto é técnica de lixa.

Sobre o lixamento, decore a regra do grão: sempre comece pelo grão mais grosso (número menor, como 220) para tirar rebarbas e pontas, e termine pelo mais fino (400, depois 600) para alisar. Movimentos suaves, acompanhando a curva da peça. Sempre que possível, molhe a lixa (lixamento úmido) para reduzir o pó. Antes da aula, lixe um personagem seu por completo, para ter o exemplo de "como deve ficar" e medir o tempo.

Segurança vem primeiro: óculos de proteção em todos, nada de assoprar o pó (ele voa para os olhos), estilete sempre cortando para longe da mão e alicate de corte usado por você ou sob supervisão direta.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar no Bambu Studio)

1. Aquecimento e revisão (10 min): Receba a turma e relembre: "na aula passada vocês tiraram os suportes; o que sobrou na peça?". Passe os personagens de mão em mão e peça que cada um aponte uma parte áspera. No projetor, abra um projeto no Bambu Studio e clique na aba "Preview" para mostrar a peça fatiada girando na tela.

2. Conteúdo novo guiado (15 min): Faça você uma demonstração de lixamento. Mostre a regra do grão: comece com a lixa 220 num pontinho de suporte, depois passe a 400 e a 600 no mesmo lugar e deixe os alunos tocarem a diferença. Mostre o lixamento úmido molhando a lixa. No projetor, gire o modelo no "Preview" e diga: "esta é a forma certa; vamos deixar a peça igual a ela".

3. Mão na massa (25 min): Cada aluno lixa o próprio personagem na bancada, com óculos de proteção. Eles começam pelo grão grosso nas rebarbas, depois passam para o fino. A cada poucos minutos, peça que voltem ao computador, girem o modelo no "Preview" e comparem aquele ângulo com a peça na mão. Circule ajudando a controlar a pressão e a não arredondar detalhes finos.

4. Desafio e compartilhar (10 min): Cada aluno coloca o personagem ao lado da imagem do jogo na tela e mostra à turma "o que ficou igual" e "o que foi mais difícil de lixar". Combine o cuidado para a próxima aula, quando começa a preparação da Demo do Ano 1.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de "tirar a casca": "a peça nasceu meio bruta, e a lixa é como dar o último acabamento numa escultura". Para o grão, faça a analogia com cabelo: "a lixa grossa é o pente que desembaraça, a fina é a escova que dá brilho". Reforce o capricho: "vocês passaram meses criando esse personagem no jogo; lixar com calma é respeitar o próprio trabalho". E valorize a comparação: "olha na tela e olha na mão — você fez os dois". Para adolescentes funciona tratar a peça como item de coleção: ninguém quer um action figure cheio de rebarba.

## Erros comuns e como ajudar

O erro mais comum é lixar com força demais e arredondar detalhes (nariz, dedos, pontas da arma do personagem). Mostre a pressão leve, "como acariciar", e diga para lixar mais vezes em vez de mais forte. Outro erro é pular o grão grosso e tentar alisar tudo com a lixa fina, que não tira rebarba; reforce a ordem 220 depois 400 depois 600. Há quem assopre o pó: corrija na hora, pois vai para os olhos, e mostre o pano úmido. Alguns acham que terminaram rápido demais; mande passar o dedo de olhos fechados, porque o toque acha aspereza que o olho não vê. Por fim, tem quem esqueça de comparar com a tela: lembre de abrir o "Preview" e girar o modelo, porque o gabarito digital mostra a forma certa.`,
  exercicios: [
    {
      titulo: `Caça às Rebarbas`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Com o projeto aberto, ajude cada aluno a clicar na aba "Preview" do Bambu Studio e a girar o modelo segurando o botão direito do mouse. Em seguida, peça que comparem cada ângulo da tela com a peça na mão e marquem com o dedo onde há rebarba ou ponta de suporte.`,
      atividade: `Abra o seu projeto, clique na aba "Preview" e gire o modelo com o botão direito do mouse. Olhando a peça na mão, aponte pelo menos três lugares ásperos: rebarbas, pontas de suporte ou linhas de camada mais fortes.`,
      gabarito: `O aluno conseguiu abrir o "Preview", girar o modelo na tela e indicou pelo menos três pontos ásperos reais na peça (rebarbas, restos de suporte ou linhas de camada). Achar e apontar os defeitos já é o acerto.`,
    },
    {
      titulo: `A Regra do Grão`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Distribua as lixas 220, 400 e 600. Demonstre num pontinho e deixe o aluno repetir na própria peça: começa pela 220 numa rebarba, depois 400, depois 600 no mesmo lugar. Lembre da pressão leve e do lixamento úmido. Peça que toquem a diferença entre o antes e o depois.`,
      atividade: `Escolha uma rebarba do seu personagem e lixe-a na ordem certa: primeiro com a lixa 220, depois a 400 e por último a 600. Toque o local antes e depois e descreva como ficou.`,
      gabarito: `O aluno usou os três grãos na ordem (grosso para fino), com pressão leve, e a rebarba escolhida ficou lisa ao toque. Saber dizer que o grão baixo tira material e o alto alisa confirma que entendeu a regra.`,
    },
    {
      titulo: `Digital x Físico`,
      tipo: `Em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas. Um aluno gira o próprio modelo no "Preview" enquanto o colega segura a peça impressa e confere ângulo por ângulo. Depois trocam. O objetivo é cada um receber do colega uma lista de partes que ainda precisam de lixa, comparando a tela com a mão.`,
      atividade: `Em dupla, um abre o "Preview" e gira o modelo; o outro segura a peça e compara. Anotem juntos: o que já ficou igual à tela e quais duas partes da peça ainda precisam de mais acabamento. Depois troquem os papéis.`,
      gabarito: `A dupla comparou o modelo digital com a peça física girando o "Preview" e listou ao menos duas partes que ainda precisam de acabamento em cada personagem. Vale o acerto se conseguiram ligar um ponto da tela a um ponto da peça.`,
    },
    {
      titulo: `Toque de Olhos Fechados`,
      tipo: `Desafio`,
      tempo: `9 min`,
      guiaProfessor: `Desafie cada aluno a fechar os olhos e passar o dedo pelo personagem inteiro para encontrar, só pelo tato, qualquer ponto ainda áspero. Ao achar, ele abre os olhos, confirma e lixa aquele ponto com a lixa fina. O tato pega aspereza que o olho não vê.`,
      atividade: `Feche os olhos e passe o dedo devagar por todo o personagem. Quando sentir um ponto áspero, pare, abra os olhos e lixe ali com a lixa 600 até ficar liso. Repita até não achar mais nenhuma aspereza.`,
      gabarito: `O aluno encontrou pelo tato pelo menos um ponto áspero que tinha passado despercebido e o alisou com a lixa fina. A peça terminar lisa em toda a superfície ao toque é o objetivo cumprido.`,
    },
    {
      titulo: `Meu Protagonista na Mão`,
      tipo: `Projeto curto`,
      tempo: `11 min`,
      guiaProfessor: `Peça que cada aluno finalize o acabamento, limpe a peça com o pano úmido e a coloque ao lado da imagem do personagem no jogo, na tela. Cada um apresenta o próprio protagonista à turma em poucas frases: o que criou, o que mais gostou de lixar e o que ficou parecido com o jogo. Reforce o orgulho do ciclo completo.`,
      atividade: `Termine o acabamento do seu personagem, limpe-o com o pano e coloque-o ao lado da imagem dele no jogo, na tela. Mostre à turma: este é o meu protagonista, eu criei, modelei e imprimi. Diga uma parte que ficou igual ao jogo e uma que foi difícil de lixar.`,
      gabarito: `O personagem está liso, limpo, sem rebarbas grandes nem pontas de suporte, e o aluno o apresentou ao lado da versão digital citando uma semelhança e uma dificuldade. Segurar o próprio personagem finalizado na mão e reconhecer o ciclo (criar, modelar, imprimir, acabar) é o sucesso da aula.`,
    },
  ],
};
