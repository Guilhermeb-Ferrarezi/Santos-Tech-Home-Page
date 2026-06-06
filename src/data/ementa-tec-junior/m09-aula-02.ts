import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Construindo com Cubinhos",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança aprende a colocar e apagar cubinhos na grade do MagicaVoxel, empilhando para cima e para o lado, e monta sua primeira torre ou caixinha própria conferindo o resultado de todos os ângulos.`,
  descricao: `Nesta aula a turma dá o primeiro passo de verdade na criação 3D: cada criança começa a colocar seus próprios cubinhos, que no MagicaVoxel chamamos de voxels. Na aula passada elas aprenderam a girar e espiar o mundo 3D; agora elas deixam de só olhar e passam a construir, como quem brinca de LEGO dentro do computador.

A ideia central é simples e poderosa: tudo no MagicaVoxel é feito de pequenos quadradinhos mágicos. Quando a criança clica, nasce um cubinho; quando ela apaga, o cubinho some. Empilhando esses cubinhos para cima a torre cresce, e colocando um do lado do outro a construção fica mais larga. É exatamente assim, juntando peça por peça, que mais para frente vamos construir o corpo, a cabeça e a carinha do personagem do mês.

Por que isso importa? Porque colocar e apagar com firmeza é a habilidade base de tudo o que vem depois. A criança que domina o clique de criar, o clique de apagar e o hábito de girar para conferir vai construir o personagem com muito mais confiança e menos frustração. É a alfabetização da ferramenta.

Ao longo da hora cada aluno vai praticar bastante, errar sem medo, apagar, refazer e, no final, montar uma primeira criação própria: uma torre alta ou uma caixinha. O objetivo não é ficar bonito ou perfeito, e sim sentir o prazer de construir e perceber que dá para arrumar qualquer coisa apagando e colocando de novo.`,
  materiais: [
    `Um computador por criança com o MagicaVoxel já aberto em um arquivo novo e vazio (cena limpa).`,
    `Projetor ou TV grande espelhando a tela do professor, para todos verem onde clicar.`,
    `Um modelo de exemplo pronto pelo professor: uma torrezinha simples e uma caixinha simples, salvos para mostrar.`,
    `Mouse para cada computador (a criança constrói muito melhor com mouse do que com touchpad).`,
    `Cubos de montar de verdade (LEGO ou blocos de madeira) na mesa, para a analogia inicial.`,
    `Folhas de papel quadriculado grande e lápis de cor para o exercício de desenho.`,
    `Adesivos ou carimbos para comemorar a primeira criação de cada aluno.`,
  ],
  conceitosChave: [
    `Cubinho (voxel) — é o quadradinho mágico, a peça com que a gente constrói tudo no MagicaVoxel.`,
    `Grade — é o tabuleiro invisível onde os cubinhos se encaixam, sempre certinhos, sem ficar tortos.`,
    `Colocar — clicar com o pincel para fazer nascer um cubinho novo.`,
    `Apagar — usar a borracha para fazer um cubinho sumir quando a gente não quer mais ele.`,
    `Empilhar — colocar um cubinho em cima do outro para a construção crescer para o céu.`,
    `Lado a lado — colocar cubinhos um do lado do outro para a construção ficar mais larga.`,
    `Girar para conferir — rodar a cena para olhar a construção por trás, por cima e dos lados.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base tecnica)

No MagicaVoxel tudo é feito de voxels, que são cubinhos 3D. Pense neles como pixels com volume, ou como peças de LEGO que se encaixam sempre certinho numa grade invisível. A criança nunca coloca um cubinho torto: a grade segura tudo no lugar. Isso é ótimo para a idade, porque tira a frustração de "ficou desalinhado".

A tela tem três partes que você precisa conhecer. No centro fica a cena com a grade (o tabuleiro). À esquerda fica a paleta de cores. No topo, perto do centro, ficam as ferramentas de edição. As duas que importam hoje são o pincel "Attach" (Adicionar), que coloca cubinhos, e o "Erase" (Apagar), que tira. Em muitas versões "Attach" já vem selecionado ao abrir. Você troca entre elas clicando no nome no painel de ferramentas, ou pela tecla de atalho: tecla B coloca, tecla E apaga.

Para colocar um cubinho a criança clica na face de um cubinho que já existe e o novo nasce encostado ali. Por isso a cena nova já costuma vir com um bloco base: ele serve de chão para os primeiros cliques. Empilhar é clicar na face de cima; lado a lado é clicar na face lateral. Para girar a cena, segura o botão direito do mouse e arrasta (revisão da Aula 1). Para desfazer um erro, Ctrl+Z.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em MagicaVoxel)

Aquecimento (10 min): Mostre os cubos de LEGO de verdade na mesa. Construa uma torrezinha empilhando e diga "hoje vamos fazer isso, mas dentro do computador". Relembre a Aula 1: peça que todos girem a cena com o botão direito arrastando.

Conteudo novo guiado (15 min): No projetor, com sua tela espelhada, mostre o painel de ferramentas e aponte "Attach" (Adicionar). Clique na face de cima do bloco base e diga "olha, nasceu um cubinho!". Clique de novo em cima do que acabou de nascer: a torre cresce. Depois clique na lateral: aparece um do lado. Agora selecione "Erase" (Apagar) e clique num cubinho para ele sumir. Mostre o Ctrl+Z para desfazer. Gire a cena com o botão direito para ver por trás.

Mao na massa (25 min): Cada criança no seu computador. Primeiro só colocar cinco cubinhos e apagar todos. Depois empilhar uma torre de cinco a oito andares. Em seguida fazer uma fileira lado a lado. Por fim, escolha livre: torre alta ou caixinha (quadrado oco). Circule pela sala, elogie e lembre sempre: "gire para conferir".

Desafio e compartilhar (10 min): Desafio: cada um faz a construção mais alta que conseguir sem cair (a grade não deixa cair, então a meta é só altura). Depois, roda rápida: cada criança gira a própria cena e mostra a torre para os colegas. Cole um adesivo de "primeira criação".

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use sempre a palavra "cubinho", não "voxel". Diga que o computador tem uma "caixa de cubinhos mágicos que nunca acabam". Colocar é "fazer nascer um cubinho"; apagar é "soprar e ele some". A grade é o "tabuleiro mágico que deixa tudo certinho". Empilhar é "fazer a torre subir até o céu"; lado a lado é "fazer a fila de cubinhos". Girar para conferir é "espiar por trás para ver se não esqueceu nada". Comemore cada clique certo com entusiasmo de verdade.

## Erros comuns e como ajudar

Clicar no vazio e nada acontecer: a criança precisa clicar na face de um cubinho que já existe, não no ar. Aponte o bloco base. Apagar sem querer porque ficou no "Erase": mostre qual ferramenta está acesa e troque para "Attach". Construir tudo escondido atrás e achar que sumiu: peça para girar a cena, o cubinho está lá. Frustração ao errar: mostre o Ctrl+Z e repita que apagar e refazer faz parte. Mão pesada clicando muito rápido: peça cliques calmos, um de cada vez.`,
  exercicios: [
    {
      titulo: `Nasce e some`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Faça junto no projetor, bem devagar. O objetivo é só a criança sentir o clique de colocar e o clique de apagar, sem pressa de fazer nada bonito. Conte em voz alta cada cubinho.`,
      atividade: `No seu computador, com a ferramenta "Attach" (Adicionar) ligada, clique e faça nascer cinco cubinhos, um de cada vez, contando alto. Depois troque para "Erase" (Apagar) e apague todos os cinco, contando ao contrário.`,
      gabarito: `A criança acertou se conseguiu fazer cinco cubinhos aparecerem e depois sumirem todos, sobrando só o bloco base. Sabe que terminou quando a grade está limpa de novo.`,
    },
    {
      titulo: `A torre que sobe`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Mostre que para empilhar é preciso clicar na face de cima do último cubinho. Incentive a contar os andares. Lembre de girar para conferir se a torre está reta.`,
      atividade: `Empilhe uma torre clicando sempre em cima do último cubinho, até ela ter pelo menos seis andares. Depois gire a cena com o botão direito do mouse e olhe a torre por trás e dos lados.`,
      gabarito: `Acertou quem montou uma torre vertical com seis ou mais cubinhos empilhados e conseguiu girar para vê-la de outro ângulo. A torre deve estar em coluna, não espalhada.`,
    },
    {
      titulo: `Caça ao cubinho perdido`,
      tipo: `jogo`,
      tempo: `8 min`,
      guiaProfessor: `Antes da aula, esconda na sua cena de exemplo um cubinho de cor diferente atrás da construção. Projete e desafie a turma a achar. Eles só conseguem mandando você girar a cena. Reforça o hábito de conferir por todos os ângulos.`,
      atividade: `Olhem a construção do professor no projetor. Existe um cubinho colorido escondido! Gritem "gira!" e digam para que lado, até encontrarem o cubinho diferente que está escondido atrás.`,
      gabarito: `A turma vence quando aponta o cubinho de cor diferente escondido atrás. O acerto mostra que entenderam que girar revela o que está escondido.`,
    },
    {
      titulo: `Torre ou caixinha: o que vou criar?`,
      tipo: `roda de conversa`,
      tempo: `6 min`,
      guiaProfessor: `Sente a turma em roda. Faça cada criança dizer o que vai construir e como: empilhando para cima ou colocando lado a lado. Anote no quadro com desenhos simples. Ajuda a planejar antes de fazer.`,
      atividade: `Na roda, cada um responde em voz alta: "Eu vou construir uma torre ou uma caixinha? Vou empilhar para cima ou colocar cubinhos lado a lado?". Mostre com as mãos como vai ficar.`,
      gabarito: `Cada criança acertou se escolheu uma das duas (torre ou caixinha) e explicou que torre é empilhar para cima e caixinha é colocar cubinhos lado a lado formando as paredes.`,
    },
    {
      titulo: `Plano no papel quadriculado`,
      tipo: `desenho / papel + desafio`,
      tempo: `5 min`,
      guiaProfessor: `Entregue o papel quadriculado. Cada quadrado é um cubinho. Peça que pintem os quadradinhos da construção que querem fazer e depois tentem reproduzir no computador. É o desafio final que junta papel e tela.`,
      atividade: `No papel quadriculado, pinte os quadradinhos para desenhar a sua torre ou caixinha, como se cada quadrado fosse um cubinho. Depois, no computador, tente construir igualzinho ao seu desenho.`,
      gabarito: `Acertou quem pintou um desenho com quadrados alinhados (formando torre ou caixinha) e conseguiu reproduzir a mesma forma básica na grade do MagicaVoxel. O número de cubinhos não precisa bater exatamente, só a forma geral.`,
    },
  ],
};
