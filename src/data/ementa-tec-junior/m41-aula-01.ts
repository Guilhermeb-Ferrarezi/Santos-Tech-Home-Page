import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Bem-vindo ao Maya: o estúdio dos profissionais",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Conhecer a tela do Maya, aprender a girar, dar zoom e mover a câmera na cena e criar a primeira forma 3D simples.`,
  descricao: `Nesta aula a turma abre pela primeira vez o Maya, o programa que estúdios de cinema e de games de verdade usam para criar personagens e cenários. Depois de já terem brincado com o MagicaVoxel (que monta tudo com cubinhos, como Lego) e com o Blender (mais completo e gratuito), as crianças chegam à ferramenta mais poderosa da trilha. A ideia não é assustar: é mostrar que, por dentro, todos esses programas fazem a mesma mágica de construir formas no espaço, só que o Maya tem mais botões e é o preferido de quem trabalha com isso.

O coração desta aula é a navegação na cena 3D. Antes de modelar qualquer coisa, a criança precisa aprender a "voar" em volta do objeto: girar para ver de todos os lados, aproximar para ver os detalhes e deslizar a câmera para os lados. No Maya isso se faz com a tecla Alt junto com os três botões do mouse. Quando esse movimento entra no automático, o resto do mês fica muito mais fácil.

Para terminar com gosto de vitória, cada aluno cria a sua primeira forma: um cubo ou uma esfera. Só de ver uma forma 3D aparecer na tela e poder girar em volta dela, a criança já se sente "dentro do estúdio". Esta primeira forma não precisa virar nada ainda; ela serve para o aluno se sentir em casa e perder o medo da tela cheia de botões.

Lembre que o entregável do mês é um item pronto para a loja do Roblox. Esta aula é o primeiro degrau: sem saber navegar e criar uma forma, não dá para modelar o item nas próximas semanas. Conduza com calma, projete a sua tela e deixe a turma copiar cada movimento junto com você.`,
  materiais: [
    `Computadores com o Maya já aberto e um projeto novo criado (um por aluno)`,
    `Mouse de três botões em cada máquina (o Maya quase não funciona sem a rodinha do meio)`,
    `Projetor ou TV grande espelhando a tela do professor`,
    `Três exemplos prontos lado a lado: o mesmo objeto feito no MagicaVoxel, no Blender e no Maya`,
    `Cartaz impresso "Alt + botões do mouse" (girar, zoom, mover) colado na parede`,
    `Um objeto real simples (cubo de madeira ou bolinha) para a criança girar na mão`,
  ],
  conceitosChave: [
    `Maya — o programa 3D que os profissionais de cinema e games usam para criar personagens e cenários.`,
    `Cena 3D — o espaço vazio dentro do programa onde a gente constrói as formas, como uma sala invisível.`,
    `Viewport — a janela grande no meio da tela onde você vê o seu objeto em 3D.`,
    `Orbitar (girar a câmera) — voar em volta do objeto para vê-lo de todos os lados, sem mover o objeto.`,
    `Zoom — aproximar ou afastar a câmera para ver os detalhes ou ver tudo de longe.`,
    `Primitiva — uma forma básica pronta que o Maya já sabe fazer, como o cubo e a esfera.`,
    `Outliner — a lista de tudo que existe na cena, como o índice de um caderno.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser um artista de Maya para dar esta aula. Precisa de três coisas: saber abrir o programa, saber navegar na cena e saber criar um cubo. Só isso. O Maya abre com uma viewport grande no centro (a janela onde se vê o 3D), uma barra de menus no topo, uma fileira de ícones (a Shelf) logo abaixo e, à direita, o Outliner e o Channel Box. Não decore tudo: hoje a gente usa pouca coisa.

A navegação do Maya gira em torno da tecla Alt mais os botões do mouse. Alt + botão esquerdo gira a câmera (orbitar). Alt + botão do meio (a rodinha apertada) arrasta a câmera para os lados (pan). Alt + botão direito dá zoom (ou use só a rodinha rolando). Teste isso na sua máquina antes da aula até sair sem pensar, porque as crianças vão perguntar muito.

## Passo a passo da aula

1. Aquecimento (10 min): segure o cubo de madeira na mão e gire na frente da turma. Pergunte: "quantos lados tem? Como vejo o de trás?". Mostre os três exemplos prontos (MagicaVoxel, Blender, Maya) no projetor e explique que o Maya é o "estúdio dos profissionais".

2. Conteúdo novo guiado (15 min): com o seu Maya no projetor, mostre a viewport. Ensine a navegação devagar, um movimento de cada vez: primeiro Alt + esquerdo para girar; depois rolar a rodinha para o zoom; por fim Alt + meio para mover de lado. Repita cada um três vezes e peça para a turma imitar só depois.

3. Mão na massa (25 min): cada aluno cria a primeira forma. No menu do topo, clique em Create, depois Polygon Primitives, depois Cube (ou Sphere). A forma aparece no centro. Agora cada criança treina girar, dar zoom e mover em volta dela. Mostre o Outliner à direita e como o cubo aparece listado lá.

4. Desafio e compartilhar (10 min): peça para cada um achar uma posição de câmera bem de cima do cubo, depois bem de baixo. Faça uma volta na sala vendo as telas e deixe dois ou três mostrarem para a turma.

## Como explicar para crianças

Use a analogia da câmera de filme: "você é o cinegrafista voando em volta do ator; o ator (o cubo) fica parado, quem anda é você". Para a tecla Alt, diga que ela é a "tecla mágica de voar": sozinha não faz nada, mas com o mouse ela liga o modo câmera. Compare com o MagicaVoxel ("ali tudo era cubinho de Lego") e com o Blender ("parecido, mas o Maya é o que os profissionais usam no trabalho"). Repita que errar girando a câmera não quebra nada: a forma continua inteira.

## Erros comuns e como ajudar

O erro número um é mexer no objeto achando que está mexendo na câmera. Se a criança move o cubo sem querer, ensine a desfazer com Ctrl + Z e lembre: para girar a câmera, a tecla Alt PRECISA estar apertada. O segundo erro é usar um mouse sem rodinha do meio, ou um touchpad; confira antes da aula que toda máquina tem mouse de três botões. O terceiro erro é dar zoom demais e "se perder" dentro do cubo ou ficar com a tela toda vazia; ensine a tecla de atalho para enquadrar tudo de novo (aperte a tecla A com nada selecionado, ou F com o objeto selecionado). Por fim, alguns criam dez cubos sem querer clicando várias vezes em Cube; abra o Outliner e mostre como apagar os extras selecionando e apertando Delete.`,
  exercicios: [
    {
      titulo: `Caça aos botões da tela`,
      tipo: `Observação guiada`,
      tempo: `8 min`,
      guiaProfessor: `Projete o Maya e vá apontando cada área enquanto as crianças apontam na própria tela. Não deixe ninguém clicar ainda; o objetivo é só reconhecer as partes e perder o medo da tela cheia de botões.`,
      atividade: `Encontre na sua tela e aponte com o dedo: a viewport (a janela grande do meio), a barra de menus (no topo) e o Outliner (a lista do lado direito). Diga em voz alta o nome de cada uma.`,
      gabarito: `A criança aponta corretamente as três áreas: viewport no centro, menus no topo, Outliner à direita. Acertou quando nomeia as três sem ajuda.`,
    },
    {
      titulo: `Voando em volta do cubo`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Crie um cubo na tela de cada aluno antes (ou faça junto). Ensine um movimento por vez e só passe para o próximo quando a maioria conseguir. Circule pela sala conferindo se estão com a tecla Alt apertada.`,
      atividade: `Com o cubo na cena, treine os três movimentos de câmera: 1) Alt + botão esquerdo para girar em volta; 2) rodinha do mouse para dar zoom; 3) Alt + botão do meio para mover de lado. Mostre o cubo visto de cima e visto de baixo.`,
      gabarito: `A criança consegue girar, dar zoom e mover a câmera, e mostra o cubo por cima e por baixo sem mover o objeto. O cubo continua inteiro e no lugar.`,
    },
    {
      titulo: `Minha primeira forma`,
      tipo: `Prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Mostre o caminho do menu no projetor passo a passo. Avise que basta UM clique em Cube; se aparecerem vários, use o Outliner para apagar. Deixe cada um escolher cubo ou esfera.`,
      atividade: `No menu do topo, clique em Create, depois Polygon Primitives, depois Cube (ou Sphere). Veja a forma aparecer no meio da cena e gire em volta dela para olhar de todos os lados.`,
      gabarito: `Existe exatamente uma forma (cubo ou esfera) na viewport, e ela aparece listada no Outliner com um nome (por exemplo pCube1 ou pSphere1). A criança consegue girá-la com a câmera.`,
    },
    {
      titulo: `Três irmãos: MagicaVoxel, Blender e Maya`,
      tipo: `Roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Use os três exemplos prontos lado a lado. Conduza a comparação com perguntas simples; valorize qualquer resposta. O foco é a ideia de que todos constroem formas em 3D, mudando o nível de detalhe e quem usa cada um.`,
      atividade: `Olhando os três programas no projetor, responda em voz alta: qual deles parece feito de cubinhos? Qual é o que os profissionais usam no trabalho? O que os três têm em comum?`,
      gabarito: `Feito de cubinhos: MagicaVoxel. Usado por profissionais: Maya. Em comum: os três criam formas em 3D que dão para girar e ver de todos os lados. Aceite respostas com essas ideias, mesmo com outras palavras.`,
    },
    {
      titulo: `Desafio do cinegrafista`,
      tipo: `Desafio`,
      tempo: `7 min`,
      guiaProfessor: `Este é o exercício mais difícil: junta navegar, enquadrar e se recuperar de erros. Ensine antes o atalho de enquadrar (tecla F com o objeto selecionado, ou A para ver tudo). Deixe dois ou três mostrarem o resultado para a turma no fim.`,
      atividade: `Missão de cinegrafista: 1) dê muito zoom até quase entrar no cubo; 2) use o atalho de enquadrar (tecla F ou A) para voltar a ver a forma inteira; 3) pare a câmera numa posição em que dá para ver três lados do cubo ao mesmo tempo, como uma foto bonita.`,
      gabarito: `A criança consegue se perder no zoom e voltar usando o atalho de enquadrar, e termina com a câmera numa posição que mostra três faces do cubo de uma vez. Sucesso quando ela recupera a forma sozinha e congela um bom enquadramento.`,
    },
  ],
};
