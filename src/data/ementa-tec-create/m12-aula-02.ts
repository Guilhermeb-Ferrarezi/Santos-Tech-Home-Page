import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Posicionar e orientar os modelos",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Posicionar cada personagem na placa, escolher a melhor orientação e ajustar o tamanho para que o modelo fique estável e pronto para receber suportes.`,
  descricao: `Na aula passada o aluno trouxe o personagem do próprio jogo para dentro do Bambu Studio e viu a placa de impressão pela primeira vez. Agora chega a parte que decide se a impressão vai dar certo ou não: posicionar e orientar o modelo. Posicionar é mover o personagem para um bom lugar na placa. Orientar é girar o modelo para que ele "deite" ou "fique em pé" da melhor maneira possível. A orientação é a decisão mais importante de toda a preparação, porque ela define onde vão nascer os suportes, quanto tempo a impressão vai durar e se o boneco vai ficar bonito.

Toda impressora 3D constrói o objeto camada por camada, de baixo para cima, como quem empilha panquecas. Isso quer dizer que partes muito inclinadas ou que ficam "no ar" precisam de apoio, senão o plástico cai. Por isso o aluno aprende a procurar a maior face plana do personagem e apoiá-la na placa, deixando o boneco firme e reduzindo a quantidade de suporte. Um personagem em pé pode ficar instável e cheio de marcas; o mesmo personagem deitado ou inclinado costuma imprimir melhor.

Nesta aula o aluno também ajusta a escala (o tamanho) para o personagem caber na área de impressão e ter um tamanho legal de segurar na mão, em geral algo entre 4 cm e 8 cm de altura. Ele usa as ferramentas de Mover, Girar e Escalar do Bambu Studio, observa a cor das faces (o programa pinta de laranja ou vermelho as partes que vão precisar de suporte) e deixa cada modelo "deitado de forma estável". Ao final, todos os personagens da turma estarão posicionados e orientados, prontos para a próxima aula, em que adicionamos suportes, preenchimento e fatiamento.

Importante: nesta aula ainda NÃO geramos suportes nem fatiamos para imprimir de verdade. O foco é só posicionar, orientar e escalar bem. Isso prepara o terreno para que as próximas etapas sejam fáceis.`,
  materiais: [
    `Computadores (1 por aluno) com o Bambu Studio instalado e já aberto, com o personagem da Aula 1 importado ou um arquivo .3mf salvo da aula anterior`,
    `Projetor ou TV para o professor mostrar a própria tela do Bambu Studio durante a explicação`,
    `Arquivos de exemplo em .stl ou .3mf de 2 ou 3 personagens (um em pé, um deitado, um com braços abertos) para praticar orientação`,
    `Slide ou imagem impressa mostrando uma peça com muito suporte X uma peça bem orientada com pouco suporte`,
    `Folha de "checklist de orientação" impressa (face plana na placa? cabe na área? tamanho entre 4 e 8 cm?)`,
    `Impressora 3D da sala visível (mesmo sem imprimir hoje) para o professor apontar o eixo Z e explicar as camadas`,
  ],
  conceitosChave: [
    `Orientação — é a direção em que o modelo "deita" ou "fica em pé" na placa; decide onde nascem os suportes e a qualidade da impressão.`,
    `Posição — é o lugar do modelo sobre a placa (frente, fundo, centro); o ideal é centralizar e não deixar partes para fora da área de impressão.`,
    `Escala — é o tamanho do modelo; aumentar ou diminuir em porcentagem ou em milímetros para caber na impressora e ficar legal na mão.`,
    `Face plana — é o lado mais reto e largo do personagem; apoiar essa face na placa deixa o modelo firme e gasta menos suporte.`,
    `Saliência (overhang) — é a parte inclinada ou "pendurada no ar" que o plástico não consegue sustentar sozinho; o Bambu Studio pinta essas áreas de laranja ou vermelho.`,
    `Eixo Z — é a altura, a direção em que a impressora empilha as camadas de baixo para cima; entender o Z ajuda a escolher a orientação.`,
    `Placa de impressão (plate) — é a base quadriculada onde o modelo aparece; tudo precisa estar dentro dela para a impressão acontecer.`,
  ],
  treinamento: `## O que o professor precisa saber

O Bambu Studio mostra uma placa quadriculada (o "plate"). Toda peça é construída de baixo para cima, em camadas, ao longo do eixo Z (a altura). A regra de ouro é simples: apoie a maior face plana do personagem na placa. Assim ele fica firme e precisa de menos suporte. As partes inclinadas demais ou "no ar" são as saliências; o programa as pinta de laranja ou vermelho quando você liga a visualização de suportes. Você não precisa ser especialista: basta saber Mover, Girar, Escalar e olhar as cores. Antes da aula, abra um personagem de exemplo e teste você mesmo deitar e girar uma vez, para ganhar confiança.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min). Abra o Bambu Studio no projetor. Mostre a placa e a impressora real apontando o eixo Z. Pergunte: "Se a impressora empilha camadas de baixo para cima, o que acontece com um braço esticado para o lado?" Deixe os alunos abrirem o próprio personagem (botão "Import", ou arrastar o arquivo para a placa).

2. Conteúdo novo guiado (15 min). Selecione o modelo com um clique (ele fica com a borda destacada). Apresente a barra de ferramentas à esquerda: o ícone de Mover (Move, atalho M), o de Girar (Rotate, atalho R) e o de Escalar (Scale, atalho S). Clique em Mover e arraste pelas setas coloridas para centralizar. Clique em Girar e use os anéis para deitar o personagem. Dica de ouro: clique com o botão direito no modelo e escolha "Place on face" (apoiar sobre a face) e depois clique numa face plana do boneco; o programa deita o modelo perfeitamente sobre ela. Por fim, clique em Escalar e digite a altura em milímetros, ou use a porcentagem, mantendo o cadeado de proporção fechado.

3. Mão na massa (25 min). Cada aluno orienta o próprio personagem e mais um arquivo de exemplo. Tarefa: deixar a maior face plana na placa, centralizar na placa e ajustar a altura entre 4 cm e 8 cm. Peça que liguem a visualização de suportes (no painel direito ou no menu de exibição) para ver as áreas laranja/vermelhas e tentem girar até reduzi-las. Circule pela sala conferindo o checklist com cada aluno.

4. Desafio + compartilhar (10 min). Lance o desafio "menos vermelho": quem deixar o personagem com menos áreas vermelhas, sem deitá-lo de cabeça para baixo. Cada aluno mostra a tela e diz por que escolheu aquela orientação. Peça que salvem o projeto (Ctrl+S) com o nome do personagem.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem das panquecas: "A impressora empilha camadas como panquecas, de baixo para cima. Tudo que fica muito para o lado ou no ar precisa de uma escadinha de apoio, que é o suporte." Diga que girar o boneco é como deitá-lo numa cama: deitado e firme, dorme melhor; em pé e bambo, cai. Chame a face plana de "as costas do personagem na cama". Para a escala, compare com um boneco de coleção que cabe na palma da mão. Evite termos difíceis; fale "deitar", "girar", "centralizar" e "tamanho de segurar na mão".

## Erros comuns e como ajudar

- Imprimir o personagem em pé só porque "no jogo ele fica em pé": explique que a impressora não liga para isso; o que importa é a face plana e menos suporte.
- Deixar parte do modelo para fora da placa (fica cinza ou some): peça para usar Mover e trazer tudo para dentro do quadriculado.
- Esquecer o cadeado de proporção ao escalar e o boneco "esticar": mostre o ícone de cadeado fechado ao lado dos campos de escala.
- Girar até o personagem flutuar acima da placa: ensine a usar "Place on face" ou o botão de baixar para a placa, para que ele "encoste" de novo.
- Tentar zerar todo o vermelho deitando o boneco de qualquer jeito, deixando-o feio: lembre que o rosto e detalhes importantes pedem cuidado; o objetivo é equilíbrio, não zero suporte.`,
  exercicios: [
    {
      titulo: `Deita o boneco`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada aluno tenha um personagem selecionado (borda destacada). Mostre no projetor o ícone Girar (atalho R) e os anéis coloridos. Reforce que o objetivo é apoiar a maior face plana na placa, não deixar o boneco flutuando.`,
      atividade: `Abra seu personagem, clique nele para selecionar e use a ferramenta Girar (R) para deitá-lo apoiando a maior face plana sobre a placa. Se ele flutuar, clique com o botão direito e escolha "Place on face" sobre uma face reta.`,
      gabarito: `O personagem fica encostado na placa pela sua maior face plana, sem nenhuma parte flutuando acima da grade. Ao olhar de lado, a base do modelo toca a linha da placa em toda a largura. Acerto: modelo estável, sem buraco entre ele e a base.`,
    },
    {
      titulo: `Centraliza e cabe na placa`,
      tipo: `Prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Mostre a ferramenta Mover (atalho M) e as setas coloridas dos eixos. Explique que partes para fora da placa ficam cinzas ou somem e não serão impressas. Confira aluno a aluno se nada está fora da grade.`,
      atividade: `Com a ferramenta Mover (M), arraste seu personagem pelas setas até ele ficar no centro da placa, inteiramente dentro do quadriculado. Nenhuma parte pode ficar cinza ou para fora da grade.`,
      gabarito: `O personagem aparece centralizado e 100 por cento dentro da área quadriculada, sem nenhuma parte cinza ou cortada. Acerto: o modelo está em uma cor sólida normal (não cinza) e centralizado na placa.`,
    },
    {
      titulo: `Tamanho de segurar na mão`,
      tipo: `Desafio`,
      tempo: `8 min`,
      guiaProfessor: `Apresente a ferramenta Escalar (atalho S) e os campos de tamanho. Reforce manter o cadeado de proporção FECHADO para o boneco não esticar. Combine com a turma o alvo de altura entre 40 e 80 mm (4 a 8 cm).`,
      atividade: `Use a ferramenta Escalar (S) e ajuste a altura do seu personagem para um valor entre 40 mm e 80 mm, mantendo o cadeado de proporção fechado. Anote a altura final que você escolheu.`,
      gabarito: `A altura do modelo fica entre 40 mm e 80 mm e o boneco mantém suas proporções (não está esticado nem achatado), prova de que o cadeado estava fechado. Acerto: valor de altura dentro da faixa e formato natural do personagem preservado.`,
    },
    {
      titulo: `Caça às saliências (em dupla)`,
      tipo: `Em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Mostre como ligar a visualização de suportes para pintar de laranja e vermelho as saliências. Forme duplas para que um observe a tela do outro. Incentive testar 2 ou 3 orientações antes de decidir. Não é para zerar o vermelho, e sim reduzir mantendo o boneco bonito.`,
      atividade: `Em dupla, liguem a visualização de suportes e observem as áreas laranja e vermelhas do personagem. Girem o modelo testando pelo menos três orientações diferentes e escolham juntos a que tem menos áreas vermelhas sem deixar o rosto virado para baixo.`,
      gabarito: `A dupla escolhe uma orientação com claramente menos áreas vermelhas do que a posição inicial, mantendo o rosto e os detalhes principais voltados para cima ou para o lado. Acerto: redução visível das áreas vermelhas e personagem ainda bem apoiado e reconhecível.`,
    },
    {
      titulo: `Estúdio de orientação: 3 personagens prontos`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Esta é a tarefa mais completa: junta posicionar, orientar e escalar nos três modelos de exemplo. Use o checklist impresso. Circule conferindo cada item. Ao final, peça que salvem (Ctrl+S). Sirva de fechamento da aula e prepara a Aula 3 (suportes e fatiamento).`,
      atividade: `Pegue os três personagens de exemplo (um em pé, um deitado, um de braços abertos). Para cada um: apoie a maior face plana na placa, centralize na grade e ajuste a altura entre 40 e 80 mm. Confira o checklist (face plana na placa, dentro da área, tamanho na faixa) e salve o projeto com Ctrl+S.`,
      gabarito: `Os três modelos ficam apoiados pela face plana, centralizados e dentro da placa, com altura entre 40 e 80 mm cada um, e o projeto é salvo. Acerto: o checklist tem todos os itens marcados para os três personagens e o arquivo foi salvo sem partes flutuando ou para fora da placa.`,
    },
  ],
};
