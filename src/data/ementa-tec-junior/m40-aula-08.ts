import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Item Pronto e na Vitrine",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança finaliza o item 3D feito no Blender pronto para a loja, tira uma imagem de apresentação e mostra sua criação para a turma, comparando-a com o item que fez no MagicaVoxel.`,
  descricao: `Esta é a última aula do mês e o grande dia do entregável: cada aluno vai dar os últimos retoques no item 3D que construiu no Blender durante as quatro semanas, tirar uma bela foto dele e apresentar a criação para os colegas numa pequena vitrine da turma. É um dia de orgulho e celebração, não de aprender muita coisa nova. O foco é deixar o item caprichado, confirmar que ele segue as regras da loja e mostrar para todo mundo.

Ao longo do mês, os alunos modelaram uma forma no Blender, aprenderam o que são materiais, pintaram com cores e acabamento, descobriram as regras da loja do Roblox, ajustaram o tamanho certo e exportaram o arquivo. Agora todo esse trabalho vira um item de verdade, pronto para uma vitrine. Finalizar é tão importante quanto criar: um item só fica completo quando alguém olha para ele e entende na hora o que é, com a cor certa e no tamanho certo.

Nesta aula o professor conduz uma rodada final de capricho (uma cor que faltou, uma luz para a foto, o item bem no centro da tela) e depois usa o recurso de imagem do Blender para tirar uma foto de apresentação do item. Em seguida, organiza uma Vitrine da Turma, em que cada criança mostra a foto do seu item, conta em poucas palavras o que é, e compara com o item que fez no MagicaVoxel lá no começo da trilha: o do MagicaVoxel é feito de cubinhos (voxels), o do Blender é liso e arredondado. Essa comparação ajuda a criança a perceber o quanto evoluiu.

Por ser uma aula de fechamento, o ritmo é leve e acolhedor. Erros viram oportunidades de conserto rápido, e cada apresentação termina com palmas. O professor deve garantir que ninguém fique de fora e que todos os itens estejam com uma foto pronta antes da vitrine, para que nenhuma criança passe pela frustração de apresentar algo incompleto.`,
  materiais: [
    `Computadores com o Blender já aberto e o arquivo de cada aluno carregado (o item 3D que a criança fez no mês).`,
    `Projetor ou TV grande conectada ao computador do professor, para a Vitrine da Turma.`,
    `Um arquivo de exemplo de item já finalizado e com a foto pronta, para o professor mostrar como fica um item completo.`,
    `Um item de exemplo feito no MagicaVoxel (de cubinhos) e um item feito no Blender (liso), lado a lado, para a comparação final.`,
    `Lista de checagem impressa e ilustrada (item tem cor, está no centro, tem nome, foto tirada) para cada aluno marcar.`,
    `Adesivos ou carimbos de "Item Pronto" e crachás de "Criador 3D" para premiar cada criança.`,
    `Folhas e lápis de cor para a atividade de cartaz da vitrine.`,
  ],
  conceitosChave: [
    `Finalizar — dar os últimos ajustes para o item ficar pronto, igual a passar a cobertura no bolo no fim.`,
    `Imagem de apresentação — a foto bonita do item, tirada pelo próprio Blender, que mostra a criação para os outros.`,
    `Renderizar — quando o computador "tira a foto" do item 3D, juntando a forma, a cor e a luz numa imagem só.`,
    `Vitrine — o lugar onde a gente expõe a criação para todo mundo ver, igual à vitrine de uma loja de verdade.`,
    `Voxel — o cubinho do MagicaVoxel; quando a gente junta muitos voxels, forma o desenho, parecido com peças de montar.`,
    `Malha lisa — a superfície arredondada e sem cubinhos que o Blender consegue fazer, diferente dos voxels.`,
    `Criador 3D — quem inventa e monta um objeto em três dimensões; hoje cada aluno é um criador 3D de verdade.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula encerra um projeto de quatro semanas. Tecnicamente, ela é uma das mais simples do mês: quase nada novo é modelado. O trabalho é caprichar, tirar uma foto bonita do item e apresentar. No Blender, "tirar a foto" do objeto 3D se chama renderizar: o computador junta a forma, a cor (o material) e a luz numa única imagem. O botão para isso fica no menu Render, no topo da tela, na opção Render Image (atalho F12). A imagem aparece numa janela separada; para salvar, use o menu Image dessa janela e a opção Save As.

Antes de renderizar, o item precisa estar bem na frente da câmera. No Blender, o que aparece na foto é o que a câmera enxerga, não o que você vê na tela. Por isso, ensine o atalho da câmera: aperte 0 no teclado numérico (Numpad 0) para olhar pelos olhos da câmera. Se o item ficar fora do quadro, selecione a câmera no painel da direita (o Outliner, a lista de objetos) e mova-a, ou simplesmente mova o item para o centro com a tecla G. Mantenha tudo simples: o objetivo é que o item apareça inteiro e centralizado.

Você precisa saber abrir o arquivo de cada aluno (menu File, opção Open ou Open Recent). Antes da aula, abra e confira cada item você mesmo: veja se tem cor, se está no centro e se aparece na câmera. Lembre que o objetivo central hoje é emocional: cada criança precisa terminar a aula sentindo orgulho do que criou.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): reúna a turma perto do projetor. Mostre o item de exemplo já finalizado com a foto pronta. Diga: "Hoje é o dia de deixar o item de vocês prontinho, tirar uma foto bonita e mostrar para os amigos!" Relembre rapidinho o caminho do mês (modelar, material, cor, regras, tamanho, exportar).

Conteúdo novo guiado (15 min): no seu computador projetado, ensine a fotografar o item. Aperte Numpad 0 para olhar pela câmera e mostre o item dentro do quadro. Vá no menu Render, no topo, e clique em Render Image (ou aperte F12). Narre: "Olha o computador tirando a foto do nosso item!" Quando a imagem aparecer, mostre como salvar no menu Image, opção Save As. Mostre a lista de checagem.

Mão na massa (25 min): cada aluno vai ao seu computador com o arquivo aberto. Eles apertam Numpad 0, conferem se o item está no quadro, renderizam com F12 e salvam a foto. Circule pela sala. Se o item estiver fora do quadro, ajude com a tecla G para centralizar e renderize de novo. Termine garantindo que cada criança tenha uma foto salva do item.

Desafio + compartilhar (10 min): comece a Vitrine da Turma. Um por vez, projete a foto do item da criança. O criador diz uma frase sobre o item e compara com o do MagicaVoxel: "O meu do MagicaVoxel era de cubinhos; este do Blender é lisinho." Todos batem palmas e o criador ganha o crachá de "Criador 3D".

## Como explicar para crianças

Use a analogia do bolo: "A gente fez a massa, o recheio e a cobertura nas outras aulas. Hoje a gente só enfeita por cima e tira uma foto para mostrar!" Renderizar é "o computador tirando a foto do nosso item". A câmera é "os olhos que vão fotografar"; por isso a gente espia pelos olhos dela com o Numpad 0. Comparar o Blender com o MagicaVoxel é fácil: o do MagicaVoxel é feito de cubinhos, igual a peças de montar; o do Blender é lisinho e arredondado, igual a um sabonete.

## Erros comuns e como ajudar

As crianças costumam querer modelar coisas novas no último dia ("quero outra peça!"). Acolha, mas redirecione: "Hoje a gente deixa pronto; ideias novas a gente guarda para o próximo item." Outro erro muito comum é renderizar e o item não aparecer na foto, porque está fora do quadro da câmera; ensine sempre o Numpad 0 antes de apertar F12 e, se preciso, centralize o item com a tecla G. Algumas crianças esquecem de salvar a foto e fecham a janela do render; oriente a salvar logo pelo menu Image, opção Save As. Outras ficam tímidas para apresentar; ofereça apresentar junto, segurando a fala por elas. E sempre termine cada apresentação com palmas, sem comparar os itens das crianças entre si.`,
  exercicios: [
    {
      titulo: `Espiando pelos Olhos da Câmera`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre no projetor que o Blender tem uma câmera e que a foto sai do ponto de vista dela. Ensine o atalho Numpad 0 (o número zero do teclado numérico) para olhar pelos olhos da câmera. Peça que cada criança aperte e veja se o item aparece no quadro.`,
      atividade: `Cada aluno aperta o Numpad 0 no seu computador, olha pela câmera e diz se o item dele aparece inteiro dentro do quadro ou se está cortado para fora.`,
      gabarito: `A tela muda para a visão da câmera (aparece um retângulo, o quadro da foto) e a criança consegue dizer se o item está dentro ou fora dele. Conseguir entrar na visão da câmera e localizar o item conta como acerto.`,
    },
    {
      titulo: `Centralizando o Item no Quadro`,
      tipo: `desafio na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Explique que o item precisa ficar bem no meio do quadro para a foto ficar bonita. Mostre a tecla G (de "agarrar"): aperta G, move o mouse e clica para soltar. Faça no seu exemplo, deixando o item bem no centro da visão da câmera.`,
      atividade: `Com a visão da câmera aberta (Numpad 0), o aluno seleciona o item, aperta G, move até o item ficar no centro do quadro e clica para soltar no lugar.`,
      gabarito: `O item fica posicionado no meio do quadro da câmera, sem ficar cortado nas bordas. Se o item está inteiro e centralizado na visão da câmera, o ajuste deu certo.`,
    },
    {
      titulo: `Tirando a Foto do Meu Item`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre o menu Render, no topo da tela, e a opção Render Image (atalho F12). Explique que é o computador tirando a foto do item, juntando forma, cor e luz. Depois, mostre como salvar pelo menu Image, opção Save As, da janela que abre.`,
      atividade: `Cada aluno aperta F12 (ou usa Render, Render Image), espera a imagem aparecer e salva a foto pelo menu Image, opção Save As, com a ajuda do professor para escolher o nome.`,
      gabarito: `Uma imagem do item, com cor e forma, aparece na janela de render e fica salva como arquivo. Se a criança consegue gerar e salvar a foto do seu item, acertou.`,
    },
    {
      titulo: `Cubinhos ou Lisinho? Comparando as Ferramentas`,
      tipo: `roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Coloque lado a lado, no projetor, um item feito no MagicaVoxel (de cubinhos) e um feito no Blender (liso). Pergunte à turma qual é de qual e por quê. Conduza para a ideia: MagicaVoxel é feito de voxels (cubinhos), Blender faz malha lisa e arredondada.`,
      atividade: `A turma olha os dois itens e cada criança diz qual foi feito no MagicaVoxel e qual no Blender, explicando numa frase a diferença (cubinhos contra lisinho).`,
      gabarito: `As crianças identificam que o item de cubinhos é do MagicaVoxel e o item lisinho é do Blender, e citam essa diferença. Reconhecer "cubinhos versus lisinho" como a marca de cada ferramenta é a resposta certa.`,
    },
    {
      titulo: `Vitrine da Turma: Eu Sou Criador 3D!`,
      tipo: `apresentação`,
      tempo: `12 min`,
      guiaProfessor: `Organize a turma em roda perto do projetor. Um por vez, projete a foto do item da criança. Ajude-a a dizer uma frase ("Meu item é um... e serve para...") e a comparar com o do MagicaVoxel. Todos batem palmas e o criador recebe o crachá de "Criador 3D".`,
      atividade: `Cada aluno mostra a foto do seu item na vitrine, diz o nome e para que serve numa frase, e conta a diferença para o item que fez no MagicaVoxel, enquanto a turma assiste e torce.`,
      gabarito: `O aluno consegue dizer ao menos o nome do item e uma frase comparando Blender e MagicaVoxel, com a foto na tela. Toda criança apresentar e receber o crachá de "Criador 3D" significa que a vitrine deu certo.`,
    },
  ],
};
