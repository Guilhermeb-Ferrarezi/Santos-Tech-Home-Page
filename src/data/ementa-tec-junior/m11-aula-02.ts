import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Espiando o Mundo 3D",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ao final da aula, cada criança consegue girar, aproximar e afastar a câmera no Maya para olhar uma cena 3D por todos os lados sozinha.`,
  descricao: `Nesta aula as crianças aprendem a passear com os olhos dentro do Maya. Na aula passada elas conheceram o programa por fora; agora elas vão treinar a parte mais mágica e divertida do 3D: poder olhar um objeto por cima, por baixo, por trás e de pertinho, como se estivessem segurando um brinquedo na mão e virando ele para ver tudo.

No mundo 3D, diferente de um desenho no papel, as coisas têm frente, costas e lados. Para ver tudo isso a gente não anda com os pés, a gente move a câmera. A câmera é o nosso olho dentro do computador. Aprender a controlar essa câmera é a primeira habilidade de verdade de quem faz games e modelos 3D, e é por isso que treinamos isso com calma antes de criar qualquer coisa.

Durante a aula o professor mostra os três movimentos no projetor e depois cada criança repete no seu computador: girar em volta (orbitar), aproximar e afastar (zoom) e arrastar a vista para o lado (deslocar). Tudo é feito com o mouse e uma tecla chamada Alt. Não precisa ler nem digitar nada — é só mão na massa, olhando e imitando.

O objetivo não é decorar nomes difíceis, e sim que a criança termine a aula se sentindo à vontade para se mexer dentro do espaço 3D, sem medo de "se perder". Esse conforto é a base para todas as próximas aulas, quando elas vão criar e pintar seus próprios objetos.`,
  materiais: [
    `Um computador por criança com o Maya já aberto e uma cena de exemplo carregada (um boneco simples, um carrinho ou alguns cubos coloridos espalhados).`,
    `Projetor ou TV grande ligado no computador do professor para demonstrar os movimentos da câmera.`,
    `Mouse com três botões (botão esquerdo, direito e a rodinha do meio) em cada estação — essencial para girar e aproximar.`,
    `Arquivo de cena pronto salvo na área de trabalho de cada máquina, igual em todas, para a turma acompanhar junta.`,
    `Adesivos ou carimbos para premiar quem completar o desafio final.`,
    `Folhas de papel e lápis de cor para o exercício de desenho dos lados do objeto.`,
    `Um brinquedo de verdade (um carrinho ou bonequinho) para usar como exemplo na roda de conversa.`,
  ],
  conceitosChave: [
    `Câmera — é o nosso olho dentro do computador; ela mostra a cena e a gente pode mexer nela.`,
    `Girar em volta (orbitar) — rodar a câmera ao redor do objeto para ver a frente, as costas e os lados.`,
    `Aproximar e afastar (zoom) — chegar pertinho para ver os detalhes ou ir longe para ver tudo de uma vez.`,
    `Deslocar (mover a vista) — empurrar a imagem para o lado, para cima ou para baixo, sem girar.`,
    `Tecla Alt — a tecla mágica que a gente segura junto com o mouse para mexer a câmera.`,
    `Viewport — a janelona do meio do Maya onde a cena 3D aparece; é o nosso "aquário" para olhar.`,
    `Enquadrar (focar) — apertar uma tecla para a câmera voltar a olhar bem para o objeto quando a gente se perde.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base tecnica)

No Maya, a área grande do meio onde a cena aparece chama-se viewport. Tudo que a criança vê ali é mostrado por uma câmera virtual. A criança nunca anda dentro da cena; ela move essa câmera. Existem três movimentos básicos, todos feitos segurando a tecla Alt mais um botão do mouse:

- Orbitar (girar em volta): segure Alt e arraste com o botão ESQUERDO do mouse. A câmera roda ao redor da cena.
- Zoom (aproximar/afastar): segure Alt e arraste com o botão DIREITO, ou role a rodinha do meio. Para frente aproxima, para trás afasta.
- Deslocar (mover a vista de lado): segure Alt e arraste com o botão do MEIO (a rodinha apertada).

Há ainda um socorro importante: a tecla F (de "focus"/enquadrar). Se a câmera se perder ou o objeto sumir, clique uma vez no objeto e aperte F: a câmera volta a olhar bem para ele. Sem objeto selecionado, aperte A para enquadrar a cena toda. Decore esses dois atalhos — você vai usá-los o tempo todo para resgatar crianças perdidas.

Importante: no Maya é preciso segurar o Alt ANTES de clicar e arrastar. Se soltar o Alt no meio, o movimento para. Tenha o mouse de três botões em cada estação; touchpad e mouse de dois botões dificultam muito.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Maya)

10 min — Aquecimento/revisão: Reúna a turma e pergunte o que lembram da aula passada (o programa Maya, a janelona do meio). Mostre a cena de exemplo no projetor e pergunte: "Será que dá pra ver as costas desse bonequinho?". Gere curiosidade.

15 min — Conteúdo novo guiado: No projetor, mostre os três movimentos, um de cada vez, bem devagar. Primeiro orbitar: segure Alt, botão esquerdo, arraste — a câmera gira. Repita umas cinco vezes falando "gira, gira". Depois zoom: Alt, botão direito, arraste (ou rodinha) — "chega perto, vai longe". Por fim deslocar: Alt, botão do meio — "empurra pro lado". Termine mostrando o resgate: clique no objeto e aperte F.

25 min — Mão na massa: Cada criança na sua máquina com a cena já aberta. Conduza um movimento de cada vez e só passe para o próximo quando todos conseguirem. Comece com orbitar (deixe girar à vontade), depois zoom, depois deslocar. Circule pela sala colocando os dedinhos certos no mouse. Quando alguém "se perder", ensine o F como mágica de voltar.

10 min — Desafio + compartilhar: Proponha a "caça ao detalhe": esconda visualmente um detalhe no objeto (por baixo, atrás) e peça para acharem girando a câmera. Quem achar mostra para a turma no telão. Encerre com adesivo para todos.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use a analogia do brinquedo na mão: "Quando você pega um carrinho, você vira ele pra ver a roda, o motor, embaixo. No Maya a gente faz igual, só que com o mouse." Chame a tecla Alt de "tecla mágica" e diga que ela liga o poder de voar em volta. Para o zoom, fale "lupa": aproximar é como chegar a lupa pertinho. Para deslocar, diga "empurrar a janela". E o F é a "mágica de voltar pra casa" quando a câmera some.

Fale pouco e mostre muito. Faça o movimento no seu computador, deixe a turma ver no telão, e só depois eles repetem. Comemore cada acerto com entusiasmo: "Olha, você viu as costas dele!".

## Erros comuns e como ajudar

O erro número um é soltar o Alt no meio do movimento — o mouse para de funcionar. Lembre sempre: "segura a tecla mágica até terminar". O segundo é girar demais e perder o objeto de vista; ensine o F como solução imediata e tranquilize: "ninguém quebrou nada, é só apertar F". O terceiro é confundir os botões: cole um adesivo colorido no botão esquerdo para lembrar que é o de girar. O quarto é apertar com muita força e mexer brusco; peça movimentos pequenos e lentos. Por fim, alguns vão querer correr para criar objetos — segure o ritmo, esta aula é só de olhar, e isso é a base de tudo.`,
  exercicios: [
    {
      titulo: `Gira, Gira o Bonequinho`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Apresente o primeiro movimento, orbitar. Mostre no projetor segurando Alt e o botão esquerdo do mouse, arrastando devagar. Diga que essa é a "tecla mágica de voar em volta". Conduza a turma junto e circule colocando os dedinhos certos.`,
      atividade: `Cada criança segura a tecla Alt e o botão esquerdo do mouse e arrasta para girar a câmera em volta do bonequinho da cena. A missão é ver a FRENTE, depois as COSTAS e os dois LADOS do objeto.`,
      gabarito: `A criança acertou se conseguiu mostrar as costas do objeto na tela, comprovando que girou a câmera de um lado ao outro. O professor confirma pedindo "me mostra a parte de trás dele".`,
    },
    {
      titulo: `Lupa Mágica: Perto e Longe`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Introduza o zoom como uma lupa. Mostre Alt mais botão direito (ou a rodinha do meio) para aproximar e afastar. Reforce: "perto pra ver os detalhes, longe pra ver tudo". Conduza um movimento de cada vez.`,
      atividade: `Cada criança aproxima a câmera até ver bem de pertinho um detalhe do objeto (um olho, uma roda) e depois afasta até enxergar o objeto inteiro de longe na cena.`,
      gabarito: `Acertou quem conseguiu chegar tão perto que o detalhe ficou grande na tela e depois voltou a ver o objeto inteiro. O professor verifica olhando a tela em dois momentos: bem perto e bem longe.`,
    },
    {
      titulo: `Roda de Conversa: O Brinquedo na Mão`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda com um brinquedo de verdade na mão (um carrinho ou bonequinho). Vire o brinquedo mostrando frente, costas e fundo. Pergunte como fazemos isso dentro do computador. Conecte a fala dos alunos aos movimentos que treinaram.`,
      atividade: `Passe o brinquedo de mão em mão. Cada criança mostra um lado diferente dele (frente, costas, embaixo) e diz qual movimento do Maya usaria para ver aquele lado na tela: girar, aproximar ou empurrar a vista.`,
      gabarito: `A criança acertou se ligou a ação no brinquedo ao movimento certo: virar para ver as costas é girar (orbitar); chegar o brinquedo perto do olho é aproximar (zoom). Respostas com essa ideia, mesmo com palavras simples, valem.`,
    },
    {
      titulo: `Desenhando os Três Lados`,
      tipo: `desenho / papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue papel e lápis de cor. Escolha um objeto simples da cena (por exemplo um carrinho) e oriente as crianças a girarem a câmera no Maya para olhar cada lado antes de desenhar. Incentive a observar de verdade na tela.`,
      atividade: `Em uma folha dividida em três quadradinhos, a criança desenha o mesmo objeto visto de três jeitos: de FRENTE, de LADO e de TRÁS, girando a câmera no Maya para olhar cada vista antes de desenhar.`,
      gabarito: `Acertou quem fez três desenhos diferentes do mesmo objeto, mostrando que percebeu que cada lado é diferente. Não importa a beleza do traço; importa que os três quadradinhos não sejam iguais.`,
    },
    {
      titulo: `Caça ao Detalhe Escondido`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Antes da aula, garanta que o objeto tem um detalhe escondido (uma marquinha embaixo, um botão atrás). Explique que é uma caçada: só dá pra achar mexendo a câmera por todos os lados. Lembre que, se a câmera sumir, é só clicar no objeto e apertar F para voltar.`,
      atividade: `O professor diz: "tem um detalhe secreto escondido no objeto". Cada criança usa girar, aproximar e deslocar para vasculhar o objeto por todos os ângulos até encontrar o detalhe escondido e mostrar para a turma no telão.`,
      gabarito: `A criança acertou se encontrou e apontou na tela o detalhe escondido (por baixo ou por trás), provando que combinou os três movimentos da câmera. O professor confirma vendo o detalhe enquadrado na viewport do aluno.`,
    },
  ],
};
