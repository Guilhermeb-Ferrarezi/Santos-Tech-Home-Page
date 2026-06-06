import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Cores e Materiais",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Conhecer o sistema de materiais do Blender para colorir as partes do modelo, criando e aplicando materiais diferentes, ajustando a cor base e o brilho e entendendo como cada material aparece na prévia da cena.`,
  descricao: `Nas aulas anteriores deste mês, os alunos aprenderam a navegar no espaço 3D, saíram do cubo inicial e modelaram o próprio objeto no Blender. Até agora, porém, tudo ficou cinza, com aquela cor neutra que o Blender usa por padrão. Nesta aula o modelo finalmente ganha vida e cor: vamos abrir o sistema de materiais e aprender a pintar cada parte do objeto.

No Blender, a cor não é pintada como num programa de desenho; ela vem de um material. Um material é como uma receita que diz ao programa como aquela superfície deve parecer: qual é a cor base, se ela é brilhante como um plástico polido ou opaca como um tijolo, se reflete luz ou não. Cada objeto pode ter um ou vários materiais, e isso permite, por exemplo, deixar o corpo de um personagem de uma cor e o chapéu de outra. Tudo isso é controlado no painel de Propriedades de Material, identificado por um ícone de esfera xadrez na lateral direita da tela.

O material mais usado chama-se Principled BSDF. Parece um nome assustador, mas é só o nome do conjunto de controles que o Blender oferece. Dentro dele, os dois ajustes que importam nesta aula são a Cor Base (Base Color), que define a cor da superfície, e a Rugosidade (Roughness), que decide se o material fica brilhante e espelhado ou fosco e opaco. Quando o aluno mexe nesses controles, precisa ver o resultado, e para isso usamos o modo de visualização Material Preview, que mostra as cores e o brilho diretamente na janela 3D.

Esta é uma aula prática e muito visual: cada aluno usa o Blender no próprio computador para criar materiais, escolher cores, regular o brilho e observar ao vivo o objeto deixando de ser cinza. É um momento de grande motivação, porque o modelo passa a se parecer de verdade com o que o aluno imaginou. Vale lembrar que o foco aqui é deixar o modelo bonito na tela; a impressão 3D virá nas próximas aulas do mês.`,
  materiais: [
    `Computadores (um por aluno) com o Blender instalado e aberto, já com o modelo 3D que cada aluno modelou nas aulas anteriores carregado no arquivo`,
    `Projetor ou TV ligada ao computador do professor para demonstrar cada clique do Blender na tela grande`,
    `Arquivo de exemplo em formato .blend com um objeto simples dividido em partes (por exemplo, um boneco com corpo e chapéu) para mostrar materiais diferentes no mesmo objeto`,
    `Quadro branco ou cartaz com as palavras-chave "Material = receita de cor" e "Rugosidade = brilho ou fosco" bem visíveis`,
    `Folha impressa de apoio com o passo a passo: onde fica o ícone de esfera xadrez, o botão "New", a "Base Color" e a "Roughness"`,
    `Cronômetro ou timer visível para controlar o ritmo de 10 / 15 / 25 / 10 minutos`,
    `Opcional: imagens de objetos reais brilhantes e foscos (uma maçã polida e um tijolo) para comparar com a rugosidade na tela`,
  ],
  conceitosChave: [
    `Material — a "receita" que diz ao Blender como uma superfície deve parecer: sua cor, seu brilho e como reflete a luz.`,
    `Painel de Material — aba de propriedades marcada pelo ícone de uma esfera xadrez, na coluna direita da tela, onde se criam e ajustam os materiais.`,
    `Principled BSDF — o material padrão e mais usado do Blender, que reúne os principais controles de aparência num só lugar.`,
    `Cor Base (Base Color) — o controle que define a cor principal da superfície do material; ao clicar nele abre-se um seletor de cores.`,
    `Rugosidade (Roughness) — o controle que decide se a superfície fica brilhante e espelhada (valor baixo) ou fosca e opaca (valor alto).`,
    `Material Preview — o modo de visualização da janela 3D que mostra as cores e o brilho dos materiais ao vivo, identificado por uma esferinha no canto superior direito.`,
    `Slot de material — cada "vaga" da lista de materiais de um objeto; usar vários slots permite cores diferentes em partes diferentes do mesmo modelo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Blender para dar esta aula; precisa entender uma ideia central: no Blender a cor vem de um material, não de uma pintura manual. O material é uma receita que guarda a cor e o brilho da superfície. Os dois controles que vamos usar são simples: a "Base Color" (cor base) e a "Roughness" (rugosidade). Cor base é a cor; rugosidade é o brilho, sendo que valor baixo deixa brilhante e valor alto deixa fosco. Tudo isso fica no painel de Material, o ícone de esfera xadrez na coluna direita de abas (chamada Properties). Para ver as cores na tela, usamos o modo "Material Preview", a segunda esferinha no grupo de quatro bolinhas no canto superior direito da janela 3D. Antes da aula, abra o Blender em casa, selecione o objeto, clique no ícone de esfera xadrez, clique em "New", troque a cor base, mexa na rugosidade e ative o Material Preview para ver o resultado. Fazer isso uma vez já deixa você seguro.

## Passo a passo da aula

Aquecimento (10 min): com o projetor ligado, mostre o modelo ainda cinza e pergunte: "Como deixamos isto colorido?". Mostre as imagens da maçã brilhante e do tijolo fosco e escreva no quadro "Material = receita de cor" e "Rugosidade = brilho ou fosco". Relembre rapidamente como selecionar um objeto com clique esquerdo.

Conteúdo novo guiado (15 min): no seu Blender, com o objeto selecionado, vá à coluna direita de abas (Properties) e clique no ícone de esfera xadrez (Material Properties). Clique no botão "New": surge um material chamado "Material". Clique na barra de cor ao lado de "Base Color" para abrir o seletor e escolha uma cor. Agora ative o modo de visualização: no canto superior direito da janela 3D, clique na segunda das quatro bolinhas ("Material Preview"); o objeto aparece colorido. Depois localize "Roughness" e arraste seu valor de 0,5 para perto de 0 (bem brilhante) e depois para perto de 1 (bem fosco), comentando a diferença na tela grande.

Mão na massa (25 min): cada aluno repete no próprio computador com o modelo que já modelou. Primeiro criam um material com "New", trocam a cor base e ativam o Material Preview. Depois testam a rugosidade brilhante e fosca. Circule pela sala. O objetivo mínimo é cada aluno ter um material colorido aparecendo na prévia e ter testado os dois extremos de brilho.

Desafio e compartilhar (10 min): proponha que quem terminou crie um segundo material e o aplique a uma parte diferente do objeto. Dois ou três alunos mostram o modelo colorido na tela grande e explicam as cores e o brilho que escolheram.

## Como explicar de forma clara

Use comparações concretas. Para material: "É uma receita de cor; em vez de pintar à mão, você escreve como a superfície deve ser." Para rugosidade: "Pense numa maçã polida, que brilha, e num tijolo, que é fosco; a rugosidade é o controle entre esses dois." Faça gestos: mão deslizando lisa (brilhante) e mão esfregando áspero (fosco). Sempre diga o nome em inglês junto da tradução ("Base Color, a cor base"). Comemore o instante em que o objeto deixa de ser cinza, pois é o momento mágico da aula e prende a atenção da turma.

## Erros comuns e como ajudar

O erro mais comum é o aluno trocar a cor e não ver nada mudar, porque está no modo de visualização errado; lembre de ativar o "Material Preview" (a segunda bolinha do canto superior direito). Outro erro é clicar em "New" sem ter o objeto selecionado, então o painel fica vazio ou cinza; oriente a selecionar o objeto com clique esquerdo primeiro. Alguns confundem cor base com brilho e mexem na rugosidade esperando mudar a cor; reforce que cor é "Base Color" e brilho é "Roughness". Há quem crie vários materiais sem querer e fique perdido; mostre que dá para apagar materiais extras na lista de slots. Por fim, muitos não acham o ícone de esfera xadrez; aponte que ele fica na pilha de ícones da coluna direita e tem o desenho de uma bolinha quadriculada.`,
  exercicios: [
    {
      titulo: `Meu primeiro material colorido`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Acompanhe cada aluno até selecionar o objeto, clicar no ícone de esfera xadrez, clicar em "New" e trocar a "Base Color". Garanta que todos ativem o "Material Preview" para enxergar a cor.`,
      atividade: `No Blender, selecione seu modelo, abra o painel de Material (ícone de esfera xadrez), clique em "New", clique na barra ao lado de "Base Color" e escolha uma cor. Depois ative o modo "Material Preview" no canto superior direito para ver o objeto colorido.`,
      gabarito: `O aluno cria um material com "New", define uma "Base Color" e, no modo "Material Preview", o objeto que antes era cinza aparece pintado com a cor escolhida na janela 3D. Se continuar cinza, é sinal de que o Material Preview não foi ativado.`,
    },
    {
      titulo: `Brilhante ou fosco?`,
      tipo: `Desafio individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que o aluno arraste a "Roughness" para perto de 0 e depois para perto de 1, observando a diferença no Material Preview. Reforce que cor não muda, só o brilho.`,
      atividade: `Com seu material já criado, ache o controle "Roughness". Coloque o valor perto de 0 e observe o brilho; depois coloque perto de 1 e observe o fosco. Anote qual valor deixou o objeto parecido com plástico polido e qual deixou parecido com pedra.`,
      gabarito: `Com a rugosidade perto de 0, a superfície fica brilhante e espelhada (parecida com plástico polido); perto de 1, fica fosca e opaca (parecida com pedra ou tijolo). O aluno percebe que a cor não muda, apenas o brilho, e identifica corretamente cada extremo.`,
    },
    {
      titulo: `Duas partes, duas cores`,
      tipo: `Atividade em dupla`,
      tempo: `7 minutos`,
      guiaProfessor: `Forme duplas e use o arquivo de exemplo com um objeto dividido em partes. Mostre como adicionar um segundo slot de material com o botão "+" e aplicá-lo a uma parte selecionada no modo de edição. Ajude quem se perder entre os slots.`,
      atividade: `Em dupla, abra o objeto de exemplo do professor. Criem um material para uma parte (por exemplo o corpo) e um segundo material de outra cor para outra parte (por exemplo o chapéu), usando a lista de slots de material. Vejam o resultado no Material Preview.`,
      gabarito: `A dupla termina com o mesmo objeto exibindo duas cores diferentes em partes diferentes: cada material foi criado num slot próprio e aplicado à parte correta. No Material Preview, corpo e chapéu (ou as partes escolhidas) aparecem com cores distintas.`,
    },
    {
      titulo: `Roda de conversa: cor é pintura?`,
      tipo: `Roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Reúna a turma em roda. Conduza para que percebam a diferença entre pintar à mão num desenho e definir um material no 3D. Reforce que o material guarda cor e brilho juntos.`,
      atividade: `Cada aluno responde: "No Blender, por que não pintamos o objeto com um pincel como num desenho? O que é um material?". Diga com suas palavras o que o material guarda além da cor.`,
      gabarito: `Resposta válida reconhece que no 3D a cor vem de um material, uma "receita" aplicada à superfície, e não de pinceladas manuais. O aluno menciona que o material guarda, além da cor base, o brilho (rugosidade) e o modo como a superfície reflete a luz.`,
    },
    {
      titulo: `O visual final do meu modelo`,
      tipo: `Projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Deixe o aluno definir as cores e o brilho finais do próprio modelo e justificar as escolhas. Ajude a aplicar mais de um material quando o objeto tiver partes distintas e a manter o Material Preview ligado.`,
      atividade: `Decida o visual final do seu modelo: escolha as cores base de cada parte e ajuste a rugosidade de cada material entre brilhante e fosco. Deixe o Material Preview ligado e escreva uma frase explicando por que escolheu essas cores e esses brilhos.`,
      gabarito: `O aluno entrega o modelo colorido e coerente: cada parte importante tem uma cor base definida e uma rugosidade escolhida de propósito (mais brilhante ou mais fosca). A frase justifica as escolhas, ligando a cor e o brilho à ideia do personagem ou objeto, e o resultado é visível no Material Preview.`,
    },
  ],
};
