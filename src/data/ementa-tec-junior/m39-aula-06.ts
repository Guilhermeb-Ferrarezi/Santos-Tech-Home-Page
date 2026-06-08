import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Detalhes que Fazem a Diferença",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Adicionar pequenos detalhes de luz, sombra e cor ao item voxel para deixá-lo mais profissional e atraente para a loja, finalizando toda a pintura.`,
  descricao: `Hoje a turma descobre o segredo dos criadores profissionais: os pequenos detalhes. Até agora os alunos construíram o item cubo a cubo e o pintaram com cores que brilham. O item já está bonito, mas ainda parece "chapado", ou seja, todo na mesma cor sem profundidade. Nesta aula eles aprendem que algumas sombrinhas escuras nas partes de baixo e alguns brilhinhos claros nas partes de cima fazem o item ganhar vida e parecer de verdade.

A ideia central é simples e poderosa: a luz vem de cima. Onde a luz bate, o item fica mais claro; onde a luz não chega, o item fica mais escuro. Quando a criança pinta um voxel do topo com um tom mais claro e um voxel de baixo com um tom mais escuro, o cérebro de quem olha entende que existe volume, que o objeto é redondo ou tem cantos. É a mesma mágica que um desenhista usa com lápis de cor.

Os alunos também vão aprender sobre os "pontinhos de vida": pequenos detalhes de cor que contam uma história. Um brilho branco no canto de uma gema, três pontinhos numa fruta, uma listra clara numa espada. São poucos voxels, mas mudam tudo. O professor vai mostrar lado a lado um item sem detalhes e o mesmo item com detalhes, para a turma sentir a diferença com os próprios olhos.

No fim da aula, cada criança termina toda a pintura do seu item, deixando-o pronto para a revisão da próxima semana. O objetivo não é encher o item de cores, e sim usar poucos toques certeiros nos lugares certos. Menos é mais: o profissional sabe a hora de parar.`,
  materiais: [
    `Computadores com o MagicaVoxel já aberto e o item de cada aluno carregado`,
    `Projetor ligado para o professor demonstrar onde clicar na tela`,
    `Dois exemplos prontos do mesmo item: um sem detalhes (chapado) e um com sombras e brilhos`,
    `Paleta de cores já montada das aulas anteriores, com tons claros e escuros de cada cor`,
    `Folha simples de "luz vem de cima" desenhada (uma setinha apontando para baixo) para colar na mesa`,
    `Cronômetro ou timer visível para marcar os tempos de cada parte da aula`,
  ],
  conceitosChave: [
    `Sombra — a parte mais escura do item, embaixo, onde a luz não chega direito.`,
    `Brilho — o pontinho ou cantinho bem claro, em cima, onde a luz bate mais forte.`,
    `Volume — quando o item parece cheio e redondo de verdade, e não plano feito um adesivo.`,
    `Tom mais claro e tom mais escuro — a mesma cor em duas versões: uma com mais luz e outra com menos.`,
    `Pontinho de vida — pequeno detalhe de cor que conta uma história e chama atenção.`,
    `Luz vem de cima — a regra mágica: o topo fica claro e a base fica escura.`,
    `Menos é mais — usar poucos detalhes nos lugares certos deixa o item mais bonito que muitos detalhes espalhados.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista. Só precisa entender uma regrinha: a luz vem de cima. No mundo real, o sol e as lâmpadas ficam lá em cima, então o topo das coisas fica mais claro e a parte de baixo fica mais escura. No MagicaVoxel a gente imita isso pintando alguns voxels do topo com um tom mais claro e alguns voxels da base com um tom mais escuro. Isso chama-se dar volume, e é o que separa um item amador de um item profissional.

Antes da aula, abra o seu exemplo pronto e pinte uma cópia com sombras e brilhos. Deixe as duas versões salvas (a chapada e a detalhada) para mostrar lado a lado. Confira também que cada paleta tem tons claros e escuros de cada cor; se faltar, crie agora clicando numa casinha vazia da paleta (lado direito), escolhendo a cor na roda de cores embaixo e arrastando o seletor para mais claro ou mais escuro.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Receba a turma e relembre as aulas passadas: "Vocês construíram e pintaram. Hoje vamos fazer a mágica final." Mostre no projetor os dois exemplos lado a lado e pergunte: "Qual parece mais de verdade?" Deixe as crianças apontarem. Explique que a diferença são sombras e brilhos.

15 min — Conteúdo novo guiado. No MagicaVoxel, mostre a regra "luz vem de cima". Selecione a ferramenta de pintura clicando em "Paint" (painel de cima, à esquerda). Escolha na paleta um tom mais escuro da cor do item. Use o modo de pintar um voxel por vez (modo "Voxel", o cubinho único, no painel "Brush" à esquerda). Pinte alguns voxels da parte de baixo do item com o tom escuro: essa é a sombra. Depois pegue um tom mais claro e pinte alguns voxels do topo: esse é o brilho. Gire o item segurando o botão esquerdo do mouse e arrastando, para ver o volume aparecer. Por fim, mostre um "pontinho de vida": pinte um único voxel branco no canto mais alto, como se a luz batesse ali.

25 min — Mão na massa. Cada criança aplica no próprio item: primeiro as sombras embaixo, depois os brilhos em cima, por último um ou dois pontinhos de vida. Circule pela sala. Lembre sempre: "Pouquinho. A luz vem de cima." Ajude quem não acha o tom claro ou escuro na paleta. O objetivo é terminar toda a pintura nesta etapa.

10 min — Desafio e compartilhar. Lance o desafio: "Adicione UM detalhe secreto que conta uma história sobre o seu item." Depois, cada aluno gira o item na tela e mostra para a turma o antes e o depois.

## Como explicar para crianças

Use a analogia do sorvete no sol: "Em cima do sorvete a luz bate e fica clarinho; embaixo, na sombra, fica mais escuro." Diga que pintar tudo da mesma cor é como um desenho sem graça, e que as sombrinhas e os brilhinhos são como maquiagem que deixa o item "posando para foto". Repita o lema: "Luz vem de cima" e "Menos é mais".

## Erros comuns e como ajudar

O erro mais comum é exagerar: a criança pinta sombra e brilho em todo voxel e o item fica sujo. Ajude pedindo para apagar e usar só nas bordas. Outro erro é trocar a cor toda em vez de usar um tom da mesma família; mostre de novo a roda de cores e os tons claro/escuro. Alguns trocam claro por escuro e fazem o brilho embaixo: aponte a setinha "luz vem de cima" na mesa. Se alguém pintar por engano com o modo errado e apagar partes, lembre do atalho de desfazer (Ctrl + Z). Por fim, há quem queira começar do zero: tranquilize dizendo que detalhe é só um retoque, e o item já está ótimo.`,
  exercicios: [
    {
      titulo: `Onde a luz bate?`,
      tipo: `Pergunta e resposta em roda`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre o item no projetor e faça perguntas rápidas. Aceite respostas com a mão apontando. O objetivo é fixar a regra antes de pintar.`,
      atividade: `O professor mostra o item e pergunta: "Se a luz vem de cima, qual parte fica mais clara? E qual parte fica mais escura?" Cada criança aponta na tela uma parte que deveria ter brilho e uma que deveria ter sombra.`,
      gabarito: `A parte de cima (o topo) fica mais clara, ali vai o brilho. A parte de baixo (a base) fica mais escura, ali vai a sombra. A luz sempre vem de cima.`,
    },
    {
      titulo: `Caça aos tons da paleta`,
      tipo: `Atividade prática no MagicaVoxel`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada paleta tenha tons claros e escuros. Quem não tiver, ajude a criar arrastando o seletor da roda de cores. Verifique pelo projetor.`,
      atividade: `Cada aluno encontra na sua paleta (lado direito da tela) o tom mais escuro e o tom mais claro da cor principal do seu item. Se não existir, cria clicando numa casinha vazia, escolhendo a cor e arrastando o seletor para mais claro ou mais escuro.`,
      gabarito: `Cada aluno deve terminar com duas casinhas na paleta: um tom escuro (para sombra) e um tom claro (para brilho) da mesma cor do item. Por exemplo: um verde-escuro e um verde-claro ao lado do verde normal.`,
    },
    {
      titulo: `Sombras embaixo`,
      tipo: `Mão na massa guiada`,
      tempo: `10 minutos`,
      guiaProfessor: `Selecione "Paint" e o modo "Voxel" (cubo único). Peça calma: poucos voxels. Circule e elogie quem usa pouco. Lembre do Ctrl + Z se errar.`,
      atividade: `Com o tom escuro selecionado, cada criança pinta alguns voxels da parte de baixo do seu item, fazendo a sombra. Depois gira o item com o mouse para ver se ficou com cara de volume.`,
      gabarito: `O item deve ter a base com voxels num tom mais escuro, criando a sensação de sombra. Não é para pintar tudo: só as partes de baixo e os cantos onde a luz não chega. Ao girar, o item parece mais "cheio" e menos plano.`,
    },
    {
      titulo: `Brilhos em cima e pontinho de vida`,
      tipo: `Mão na massa com desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Troque para o tom claro. Mostre que o brilho vai no topo, ao contrário da sombra. Por fim, peça um único voxel bem claro ou branco no canto mais alto.`,
      atividade: `Cada aluno pinta alguns voxels do topo do item com o tom claro (o brilho) e adiciona um pontinho de vida: um único voxel bem claro ou branco no cantinho mais alto, como se a luz batesse forte ali.`,
      gabarito: `O topo do item fica com voxels num tom claro, e existe pelo menos um pontinho bem claro ou branco no canto mais alto. O item agora tem sombra embaixo e brilho em cima, parecendo profissional. O pontinho de vida chama o olhar.`,
    },
    {
      titulo: `Antes e depois do mestre`,
      tipo: `Apresentação e comparação`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça a cada aluno que gire o item na tela. Estimule a turma a comentar o que melhorou. Reforce o lema "menos é mais" e confirme que a pintura está finalizada.`,
      atividade: `Cada criança gira seu item no MagicaVoxel e conta para a turma quais detalhes adicionou (sombra, brilho, pontinho de vida) e que história o detalhe secreto conta. A turma diz o que ficou mais bonito.`,
      gabarito: `Cada aluno deve apontar pelo menos uma sombra, um brilho e um pontinho de vida no seu item, e explicar a história do detalhe. A pintura do item deve estar totalmente finalizada e pronta para a revisão da próxima semana. Resposta correta é qualquer explicação coerente que mostre o uso de luz vinda de cima e poucos detalhes bem colocados.`,
    },
  ],
};
