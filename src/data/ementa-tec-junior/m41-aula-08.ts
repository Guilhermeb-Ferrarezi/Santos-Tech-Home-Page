import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Item Maya pronto pra loja!",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada criança finaliza o item 3D feito no Maya, deixa ele pronto para a loja, apresenta sua criação para a turma e conta as diferenças que sentiu entre o Maya, o Blender e o MagicaVoxel.`,
  descricao: `Esta é a última aula do mês e o grande dia do entregável: cada aluno vai dar os últimos retoques no item 3D que construiu no Maya ao longo das quatro semanas, conferir que ele está pronto, tirar uma foto bonita dele e apresentar a criação para os colegas numa pequena vitrine da turma. É um dia de orgulho e celebração, não de aprender muita coisa nova. O foco é deixar o item caprichado, confirmar que ele segue as regras da loja e mostrar para todo mundo.

Ao longo do mês, os alunos conheceram o Maya (o estúdio dos profissionais), modelaram o item passo a passo, pintaram direto no modelo com vertex color, deram brilho e personalidade com materiais, arrumaram o modelo para a loja, exportaram o arquivo e conferiram cada detalhe antes de publicar. Agora todo esse caminho vira um item de verdade, pronto para uma vitrine. Finalizar é tão importante quanto criar: um item só fica completo quando alguém olha para ele e entende na hora o que é, com a cor certa, o tamanho certo e o capricho de quem terminou o trabalho.

Nesta aula o professor conduz uma rodada final de capricho (uma cor que faltou, o item bem no centro da tela, a foto de apresentação) e depois organiza uma Vitrine da Turma. Cada criança mostra a imagem do seu item, conta em poucas palavras o que é, e compara as três ferramentas que usou na trilha: o MagicaVoxel é feito de cubinhos (voxels), igual a peças de montar; o Blender deixa o modelo lisinho e arredondado; e o Maya é o estúdio dos profissionais, mais detalhado e com controle fino. Essa comparação ajuda a criança a perceber o quanto evoluiu até aqui.

Por ser a aula de fechamento do mês, o ritmo é leve e acolhedor. Erros viram oportunidades de conserto rápido, e cada apresentação termina com palmas. O professor deve garantir que ninguém fique de fora e que todos os itens estejam com uma imagem pronta antes da vitrine, para que nenhuma criança passe pela frustração de apresentar algo incompleto. É também a ponte para o CREATE, onde, em breve, as crianças vão deixar de só clicar e arrastar para escrever código de verdade em Lua.`,
  materiais: [
    `Computadores com o Maya já aberto e o arquivo de cada aluno carregado (o item 3D que a criança fez no mês).`,
    `Projetor ou TV grande conectada ao computador do professor, para a Vitrine da Turma.`,
    `Um item de exemplo já finalizado no Maya, com a imagem de apresentação pronta, para mostrar como fica um item completo.`,
    `Três itens de exemplo lado a lado: um do MagicaVoxel (cubinhos), um do Blender (lisinho) e um do Maya (detalhado), para a comparação final.`,
    `Lista de checagem impressa e ilustrada (o item tem cor, está no centro, tem nome, a imagem foi salva) para cada aluno marcar.`,
    `Adesivos ou carimbos de "Item pronto" e crachás de "Criador 3D do Maya" para premiar cada criança.`,
    `Folhas e lápis de cor para o cartaz da vitrine.`,
  ],
  conceitosChave: [
    `Finalizar — dar os últimos ajustes para o item ficar pronto, igual a passar a cobertura no bolo bem no fim.`,
    `Imagem de apresentação — a foto bonita do item, gerada pelo próprio Maya, que mostra a criação para os outros.`,
    `Vitrine — o lugar onde a gente expõe a criação para todo mundo ver, igual à vitrine de uma loja de verdade.`,
    `Voxel — o cubinho do MagicaVoxel; quando a gente junta muitos voxels, forma o desenho, parecido com peças de montar.`,
    `Malha lisa — a superfície arredondada e sem cubinhos que o Blender consegue fazer, diferente dos voxels.`,
    `Maya — o estúdio dos profissionais; faz modelos detalhados e dá um controle fino sobre cada parte do item.`,
    `Criador 3D — quem inventa e monta um objeto em três dimensões; hoje cada aluno é um criador 3D de verdade.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula encerra um projeto de quatro semanas no Maya. Tecnicamente, ela é uma das mais simples do mês: quase nada novo é modelado. O trabalho é caprichar, gerar uma imagem bonita do item e apresentar. Você precisa saber abrir o arquivo de cada aluno: vá no menu File, no topo da tela, e use a opção Open Scene (ou Recent Files, a lista de arquivos abertos recentemente). O arquivo do Maya termina em ".ma" ou ".mb"; é só o item da criança guardado.

Para o item aparecer bonito na hora da foto, ele precisa estar bem no centro da tela e ocupando boa parte dela. No Maya, o jeito mais fácil de centralizar é selecionar o item (clique nele) e apertar a tecla F: a câmera aproxima e enquadra o objeto selecionado. Para girar a visão em volta do item, segure a tecla Alt e arraste com o botão esquerdo do mouse. Para gerar a imagem de apresentação, use o menu superior Render e a opção Render Current Frame; abre uma janela chamada Render View com a foto do item, e nela você salva pelo menu File, opção Save Image. Se a sua escola usa um Maya mais simples, basta tirar um print da tela com o item enquadrado; o importante é cada criança sair com uma imagem do seu item.

Antes da aula, abra e confira o arquivo de cada aluno você mesmo: veja se o item tem cor, se está inteiro e se aparece bem na tela. Lembre que o objetivo central de hoje é emocional: cada criança precisa terminar a aula sentindo orgulho do que criou no Maya.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): reúna a turma perto do projetor. Mostre o item de exemplo já finalizado, com a imagem pronta. Diga: "Hoje é o dia de deixar o item de vocês prontinho, tirar uma foto bonita e mostrar para os amigos!" Relembre rapidinho o caminho do mês no Maya (conhecer, modelar, pintar com vertex color, material, arrumar, exportar, conferir).

Conteúdo novo guiado (15 min): no seu computador projetado, ensine a enquadrar e fotografar o item. Clique no item para selecioná-lo e aperte F para a câmera enquadrar. Gire um pouquinho segurando Alt e arrastando. Vá no menu Render, no topo, e clique em Render Current Frame. Narre: "Olha o Maya tirando a foto do nosso item!" Quando a Render View abrir, mostre como salvar pelo menu File, opção Save Image. Apresente a lista de checagem.

Mão na massa (25 min): cada aluno vai ao seu computador com o arquivo aberto. Eles clicam no item, apertam F para enquadrar, geram a imagem com Render, Render Current Frame e salvam pela Render View. Circule pela sala. Se o item estiver torto ou pequeno na tela, ajude a selecionar e apertar F de novo. Termine garantindo que cada criança tenha uma imagem salva do seu item.

Desafio e compartilhar (10 min): comece a Vitrine da Turma. Um por vez, projete a imagem do item da criança. O criador diz uma frase sobre o item e compara as três ferramentas: "No MagicaVoxel era de cubinhos; no Blender era lisinho; no Maya ficou bem detalhado." Todos batem palmas e o criador ganha o crachá de "Criador 3D do Maya".

## Como explicar para crianças

Use a analogia do bolo: "A gente fez a massa, o recheio e a cobertura nas outras aulas. Hoje a gente só enfeita por cima e tira uma foto para mostrar!" Apertar F é "puxar o item para bem pertinho dos nossos olhos". Gerar a imagem é "o Maya tirando a foto do nosso item, juntando a forma e a cor". Para comparar as ferramentas: o MagicaVoxel é igual a montar com cubinhos de encaixe; o Blender deixa lisinho como um sabonete; e o Maya é o estúdio dos profissionais, onde a gente capricha em cada detalhe.

## Erros comuns e como ajudar

As crianças costumam querer modelar coisas novas no último dia ("quero outra peça!"). Acolha, mas redirecione: "Hoje a gente deixa pronto; ideias novas a gente guarda para o próximo item." Outro erro comum é o item ficar pequenininho ou fora da tela na hora da foto; ensine sempre a clicar nele e apertar F antes de gerar a imagem. Algumas crianças esquecem de salvar a imagem e fecham a Render View; oriente a salvar logo pelo menu File, opção Save Image. Há quem aperte teclas demais e perca a seleção do item; mostre que é só clicar no item de novo. E há os tímidos para apresentar: ofereça apresentar junto, segurando a fala por eles. Sempre termine cada apresentação com palmas, sem comparar os itens das crianças entre si.`,
  exercicios: [
    {
      titulo: `Puxando o Item para Pertinho`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Mostre no projetor que, para a foto ficar bonita, o item precisa estar grande e centralizado na tela. Ensine o atalho: clicar no item para selecioná-lo e apertar a tecla F, que faz a câmera enquadrar o objeto. Faça no seu exemplo antes e peça que cada criança repita.`,
      atividade: `No seu computador, clique no seu item para selecioná-lo e aperte a tecla F. Observe o item ficar bem no centro e maior na tela.`,
      gabarito: `Certo quando a câmera aproxima e o item aparece inteiro e centralizado na tela depois do F. Conseguir selecionar o item e enquadrá-lo já conta como acerto.`,
    },
    {
      titulo: `Girando para Ver Todos os Lados`,
      tipo: `desafio na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Explique que o item é 3D e dá para olhar de todos os lados antes de escolher o melhor ângulo para a foto. Mostre como girar a visão: segurar a tecla Alt e arrastar com o botão esquerdo do mouse. Demonstre no seu exemplo, parando num ângulo bonito.`,
      atividade: `Com o item enquadrado, segure a tecla Alt e arraste o mouse para girar a visão em volta do seu item. Pare no ângulo que você acha mais bonito para a foto.`,
      gabarito: `Certo quando a criança consegue girar a câmera ao redor do item (a visão muda de lado) e para num ângulo escolhido por ela. Reconhecer que o item pode ser visto de vários lados é o aprendizado esperado.`,
    },
    {
      titulo: `Tirando a Foto do Meu Item no Maya`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre o menu Render, no topo da tela, e a opção Render Current Frame. Explique que é o Maya tirando a foto do item, juntando forma e cor. Quando a janela Render View abrir, mostre como salvar pelo menu File, opção Save Image. Ajude quem usar um Maya mais simples a tirar um print da tela.`,
      atividade: `Com o item enquadrado, abra o menu Render e clique em Render Current Frame. Espere a imagem aparecer na Render View e salve pela opção Save Image, do menu File dessa janela.`,
      gabarito: `Certo quando uma imagem do item, com forma e cor, aparece na Render View e fica salva como arquivo (ou como print da tela). Se a criança consegue gerar e salvar a foto do seu item, acertou.`,
    },
    {
      titulo: `Cubinhos, Lisinho ou Detalhado? As Três Ferramentas`,
      tipo: `roda de conversa`,
      tempo: `12 min`,
      guiaProfessor: `Coloque lado a lado, no projetor, três itens: um do MagicaVoxel (cubinhos), um do Blender (lisinho) e um do Maya (detalhado). Pergunte à turma qual é de qual e por quê. Conduza para as ideias: MagicaVoxel é feito de voxels (cubinhos); Blender faz malha lisa e arredondada; Maya é o estúdio dos profissionais, mais detalhado.`,
      atividade: `Olhe os três itens na tela e diga qual foi feito no MagicaVoxel, qual no Blender e qual no Maya. Explique numa frase a pista que te ajudou a decidir.`,
      gabarito: `Espera-se: o item de cubinhos quadradinhos é do MagicaVoxel; o lisinho e arredondado é do Blender; o mais detalhado é do Maya. A pista correta é o formato e o nível de detalhe (cubinhos contra curvas suaves contra detalhe fino). Aceite o raciocínio mesmo com pequenos erros.`,
    },
    {
      titulo: `Vitrine da Turma: Eu Sou Criador 3D do Maya!`,
      tipo: `apresentação`,
      tempo: `13 min`,
      guiaProfessor: `Organize a turma em roda perto do projetor. Um por vez, projete a imagem do item da criança. Ajude-a a dizer uma frase ("Meu item é um... e serve para...") e a comparar as três ferramentas que usou na trilha. Todos batem palmas e o criador recebe o crachá de "Criador 3D do Maya".`,
      atividade: `Mostre a foto do seu item na vitrine, diga o nome e para que serve numa frase, e conte a diferença que você sentiu entre fazer no MagicaVoxel, no Blender e no Maya, enquanto a turma assiste e torce.`,
      gabarito: `Certo quando o aluno mostra a imagem do item, diz ao menos o nome dele e cita uma diferença entre as ferramentas (por exemplo, "no MagicaVoxel era de cubinhos e no Maya ficou bem detalhado"). Toda criança apresentar e receber o crachá de "Criador 3D do Maya" significa que a vitrine deu certo.`,
    },
  ],
};
