import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Materiais: brilho, cor e personalidade",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aplicar materiais ao item no Maya para escolher cor, brilho e acabamento (fosco ou brilhante) e combinar tudo com a vertex color para dar a cara que a criança imaginou.`,
  descricao: `Na aula passada as crianças pintaram direto no modelo usando vertex color. Hoje elas dão o próximo passo: aplicam um material ao item. Pense no material como a "roupa" do objeto. A vertex color já deu cor às partes, mas é o material que decide se a superfície é fosca como papelão, brilhante como plástico molhado ou metálica como uma moeda. É o material que dá personalidade de verdade ao item da loja.

No Maya, o aluno vai conhecer o material padrão chamado Lambert (que é sempre fosco) e o material Blinn (que pode brilhar). Ele aprende a abrir o Hypershade ou a usar o clique direito para atribuir um novo material, escolher a cor base e mexer em dois controles simples: o brilho (Specular) e o quanto esse brilho é forte. Com isso a criança percebe, na hora, a diferença entre um item de pedra e um item de cristal.

O segredo da aula é a comparação. O aluno vai colocar lado a lado a versão só com vertex color e a versão com material, e decidir qual combina mais com a ideia que ele teve. Não existe resposta errada: existe a personalidade que a criança quer dar ao objeto. O professor deve celebrar as escolhas e fazer perguntas do tipo "o seu item é mais de pedra ou mais de gelo?".

Ao final, cada criança terá o item do mês com material aplicado, brilho ajustado e a combinação de cor que ela escolheu. Esse é o item que, nas próximas aulas, será arrumado e exportado para a loja do Roblox.`,
  materiais: [
    `Computadores com o Maya aberto, um por criança, com o item do mês já salvo`,
    `Projetor ligado na máquina do professor para demonstrar cada passo`,
    `Dois itens de exemplo prontos: um fosco (tipo pedra) e um brilhante (tipo cristal)`,
    `Uma folha impressa com a "régua do brilho" (de fosco a muito brilhante) para colorir`,
    `Objetos reais para passar de mão em mão: uma pedrinha, uma colher de metal e um plástico brilhante`,
    `Quadro branco e canetas para anotar os nomes Lambert e Blinn`,
  ],
  conceitosChave: [
    `Material — é a "roupa" do objeto; decide se a superfície é fosca, brilhante ou metálica.`,
    `Lambert — o material que vem de fábrica no Maya; ele é sempre fosco, sem brilho, como papelão.`,
    `Blinn — um material que pode brilhar; é o que você usa quando quer plástico, gelo ou metal.`,
    `Cor base (Color) — a cor principal do material, como a tinta de fundo do objeto.`,
    `Brilho (Specular) — a luzinha que aparece no objeto quando a luz bate; pouco brilho é fosco, muito brilho é molhado.`,
    `Acabamento — o jeitão final da superfície: fosco parece seco, brilhante parece liso e escorregadio.`,
    `Hypershade — a janela do Maya onde moram e se organizam todos os materiais.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista 3D para dar esta aula. Precisa entender uma ideia simples: o material muda a aparência da superfície, mas não muda o formato. Dois materiais bastam hoje. O Lambert é fosco, parece pedra ou papelão. O Blinn pode brilhar, parece plástico, gelo ou metal. No Maya, o item já vem com um Lambert cinza de fábrica (chamado lambert1). Nesta aula a criança cria um material novo, escolhe a cor e mexe no brilho. O brilho tem nome técnico Specular: quanto mais forte, mais o objeto parece molhado. Combinado com a vertex color da aula passada, o material dá a personalidade final. Faça você mesmo o caminho uma vez antes da aula, com calma, para não travar na frente da turma.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): passe os objetos reais de mão em mão. Pergunte: "esta pedra brilha? E esta colher? E este plástico?". Escreva no quadro fosco e brilhante. Abra o item de exemplo no projetor e mostre o mesmo objeto com dois materiais diferentes.

Conteúdo novo guiado (15 min): no Maya, selecione o item clicando nele. Clique com o botão direito do mouse e segure: aparece um menu em roda. Vá até Assign New Material (Atribuir Novo Material). Na janelinha, escolha Blinn. Pronto, o item ganhou um material novo. Agora abra o Attribute Editor (o painel da direita; se não estiver aberto, aperte Ctrl+A). Procure a barra Color e clique nela para escolher a cor base. Depois procure a parte Specular Shading e mexa no controle Eccentricity e em Specular Color: arraste para clarear e veja a luzinha aparecer no objeto. Mostre devagar, repetindo onde clicou.

Mão na massa (25 min): cada criança faz no próprio item. Roteiro na lousa: 1) clicar no item; 2) botão direito segurado e ir em Assign New Material; 3) escolher Blinn; 4) clicar em Color e pintar; 5) mexer no Specular para dar brilho. Circule pela sala. Quem terminar rápido cria um segundo material só num pedaço do objeto (selecionando faces antes de atribuir) para ter duas personalidades no mesmo item.

Desafio e compartilhar (10 min): peça que cada um deixe o item do jeito que imaginou e gire a câmera (segurando Alt e arrastando) para ver o brilho de vários ângulos. Cada criança mostra à turma e responde: "o seu item é mais de pedra ou mais de gelo?".

## Como explicar para crianças

Use a frase: "o material é a roupa do seu objeto". A vertex color foi a cor da pele, e o material é a roupa que decide se ela é seca (fosca) ou molhada (brilhante). Compare com coisas do dia a dia: um tênis de couro fosco e um sapato de verniz brilhante. Mostre que o Specular é uma "lanterninha" que a luz acende no objeto: pouca lanterninha, item fosco; muita lanterninha, item escorregadio e molhado. Deixe a criança escolher; lembre que não há resposta certa, só a personalidade que ela quer.

## Erros comuns e como ajudar

O erro mais comum é a criança não selecionar o item antes de atribuir o material, e o material não aparece em nada. Peça para clicar no objeto primeiro, conferindo se ele fica com o contorno destacado. Outro erro: mexer demais no brilho e deixar tudo branco e estourado; mande puxar o Specular de volta até a luzinha ficar pequena. Alguns confundem Color com Specular Color e pintam o brilho em vez da cor base; mostre que Color é a cor grande e Specular Color é só a luzinha. Se a criança apagar sem querer a vertex color, lembre que dá para desfazer com Ctrl+Z. E se alguém escolher Lambert achando que vai brilhar, explique que Lambert é sempre fosco e que para brilho precisa do Blinn.`,
  exercicios: [
    {
      titulo: `Fosco ou brilhante?`,
      tipo: `Aquecimento em grupo`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça no começo da aula com os objetos reais na mão. Aceite respostas faladas em voz alta; o objetivo é separar superfícies foscas de brilhantes antes de tocar no Maya.`,
      atividade: `O professor mostra três objetos reais (uma pedrinha, uma colher de metal e um plástico brilhante). Para cada um, as crianças dizem se a superfície é fosca ou brilhante e por quê.`,
      gabarito: `A pedrinha é fosca (não brilha, parece seca). A colher de metal é brilhante (reflete a luz). O plástico é brilhante (tem luzinha quando a luz bate). Aceite explicações simples como "porque a luz aparece nele".`,
    },
    {
      titulo: `Atribuindo meu primeiro material`,
      tipo: `Prática guiada no Maya`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça junto, passo a passo, no projetor. Garanta que cada criança selecionou o item antes de atribuir. Se o material não aparecer, quase sempre é porque o item não estava selecionado.`,
      atividade: `Cada aluno seleciona o item, clica com o botão direito segurado, vai em Assign New Material, escolhe Blinn e depois clica em Color para escolher uma cor base à sua escolha.`,
      gabarito: `O item fica com um material Blinn novo e com a cor que a criança escolheu. Sucesso é o objeto mudar de cor na tela. Confira no Attribute Editor se o material atribuído é mesmo Blinn e não lambert1.`,
    },
    {
      titulo: `A régua do brilho`,
      tipo: `Atividade prática com folha`,
      tempo: `7 minutos`,
      guiaProfessor: `Use a folha "régua do brilho". A criança mexe no Specular no Maya e marca na folha onde o item dela ficou. Ajude a achar Specular Shading no Attribute Editor.`,
      atividade: `O aluno arrasta o controle de brilho (Specular) do mais fraco ao mais forte, observa a luzinha no item e marca na régua impressa (de fosco a muito brilhante) onde deixou o objeto.`,
      gabarito: `Não há valor único certo. O correto é a criança conseguir aumentar e diminuir o brilho e perceber a diferença na tela, marcando coerentemente na régua. Brilho fraco = perto de fosco; brilho forte = perto de muito brilhante.`,
    },
    {
      titulo: `Pedra ou gelo? Combinando com a vertex color`,
      tipo: `Decisão criativa`,
      tempo: `8 minutos`,
      guiaProfessor: `Aqui a criança decide a personalidade. Faça a pergunta-chave: "o seu item é mais de pedra ou mais de gelo?". Ajude a ajustar o brilho conforme a escolha, sem dar resposta pronta.`,
      atividade: `Cada aluno decide se o item dele será fosco (estilo pedra) ou brilhante (estilo gelo/cristal) e ajusta o Specular para combinar com a vertex color que pintou na aula passada.`,
      gabarito: `Resposta livre. O item está correto se a escolha de brilho combinar com a intenção declarada: quem escolheu pedra deixa o brilho baixo; quem escolheu gelo deixa o brilho alto. A criança deve saber explicar por que escolheu.`,
    },
    {
      titulo: `Dois materiais no mesmo item`,
      tipo: `Desafio avançado`,
      tempo: `7 minutos`,
      guiaProfessor: `Para quem terminou primeiro. Mostre que dá para selecionar só algumas faces (clicando com botão direito e indo em Face) antes de atribuir um segundo material. Acompanhe de perto, é o passo mais difícil.`,
      atividade: `O aluno seleciona apenas uma parte do item (algumas faces), atribui um segundo material com cor e brilho diferentes, e cria um objeto com duas personalidades (por exemplo, um corpo fosco e um detalhe brilhante).`,
      gabarito: `O item correto mostra duas regiões com materiais diferentes: uma parte fosca e outra brilhante, ou duas cores distintas com brilhos distintos. Sucesso é a criança aplicar o segundo material só nas faces escolhidas, sem trocar o material do item inteiro.`,
    },
  ],
};
