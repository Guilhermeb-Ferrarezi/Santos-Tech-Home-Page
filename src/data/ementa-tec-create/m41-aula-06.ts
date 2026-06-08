import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Texturas que Ganham Vida",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aplicar materiais e texturas no asset, ajustando cores e acabamentos para que o visual combine com o estilo do jogo e fique convincente sob iluminação.`,
  descricao: `Na aula anterior os alunos conheceram o mundo dos materiais e aprenderam a criar um material básico no Blender. Agora damos o passo que realmente faz o modelo ganhar vida: as texturas. Uma textura é uma imagem que envolve a superfície do objeto, dando a ela cor, sujeira, riscos, manchas e variação. É a diferença entre um cubo cinza plano e uma caixa de madeira com nós, marcas e bordas gastas. Para um jogo, é a textura que transmite a história do objeto sem precisar de uma única palavra.

O foco desta aula é prático e visual. Cada aluno vai finalizar o material do seu asset combinando cor base, acabamento (mais brilhante ou mais fosco) e, quando fizer sentido, uma textura de imagem aplicada por meio do nó Image Texture. Vamos trabalhar dentro do Shader Editor, a janela onde conectamos pequenas caixas chamadas nós (nodes) que descrevem como a luz se comporta na superfície. O aluno aprende que materiais não são apenas uma cor, mas uma receita de como a superfície reage à luz.

Também reforçamos um conceito central deste mês: tudo precisa funcionar no Unity. Por isso vamos privilegiar texturas que viajam bem para o motor de jogo, conversar sobre o que é uma textura de cor base (albedo) e ver como o acabamento metálico ou áspero muda completamente a leitura do objeto. O aluno confere o resultado em tempo real ligando o modo de visualização Material Preview e o Rendered, observando como o acabamento responde quando movemos a luz da cena.

Por fim, o Claude entra como parceiro criativo. O aluno pede ao assistente ideias de paleta de cores e de acabamento coerentes com o estilo do seu jogo, recebe sugestões, escolhe o que faz sentido e justifica a decisão. A meta não é aceitar tudo que o Claude diz, mas usar a conversa para pensar melhor sobre a direção de arte do próprio projeto.`,
  materiais: [
    `Computadores com Blender instalado (versão 4.x), um por aluno`,
    `Projetor ou TV para o professor demonstrar o Shader Editor passo a passo`,
    `Arquivos de exemplo: um asset simples já modelado (.blend) com UV pronta, para quem ainda não tem o próprio`,
    `Pasta com 4 a 6 texturas livres em formato PNG (madeira, metal, pedra, tecido) para os alunos testarem`,
    `Acesso ao Claude para pedir ideias de paleta de cores e acabamento`,
    `Cartão de paleta impresso ou digital com exemplos de cores para inspiração`,
  ],
  conceitosChave: [
    `Textura — imagem aplicada sobre a superfície do modelo para dar cor e detalhe, como um adesivo que envolve o objeto.`,
    `Material — receita que descreve como a superfície reage à luz: cor, brilho e acabamento juntos.`,
    `Albedo (cor base) — a cor pura do objeto, sem sombra nem reflexo, que o Unity usa como ponto de partida.`,
    `Shader Editor — janela do Blender onde ligamos nós (caixinhas) para montar o material.`,
    `Nó Image Texture — caixa que carrega uma imagem e a usa como textura dentro do material.`,
    `Acabamento (Roughness) — controla se a superfície é fosca (áspera) ou brilhante (lisa); número de 0 a 1.`,
    `Material Preview — modo de visualização que mostra o material com iluminação aproximada, sem render completo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista. Precisa entender três ideias. Primeira: um material é uma receita de como a luz se comporta na superfície. Segunda: uma textura é uma imagem que entra nessa receita para dar cor e detalhe. Terceira: o aluno monta tudo no Shader Editor, ligando nós (caixinhas) com fios. O nó principal chama Principled BSDF e já vem pronto quando criamos um material. Nele, dois campos importam hoje: Base Color (a cor) e Roughness (o acabamento: 0 é espelho liso, 1 é totalmente fosco). Para usar uma imagem como cor, conectamos um nó Image Texture na entrada Base Color. Antes de qualquer textura de imagem, o modelo precisa de UV (o desembrulho feito antes); se não tiver, use os arquivos de exemplo prontos.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Pergunte: o que é um material e o que vimos na aula passada? Mostre no projetor um cubo cinza ao lado de um cubo com textura de madeira e pergunte qual conta uma história. Garanta que cada aluno abriu seu asset e está no modo de visualização Material Preview (as bolinhas no canto superior direito da janela 3D, escolha a terceira).

15 min — Conteúdo novo guiado. No projetor, com o objeto selecionado, abra a aba Material Properties (a esfera xadrez no painel direito) e clique em New. Divida a tela e troque um dos editores para Shader Editor. Mostre o nó Principled BSDF. Clique no campo Base Color e mude a cor; veja o objeto mudar na hora. Mexa em Roughness de 0,1 para 0,9 e mostre a diferença entre brilhante e fosco. Agora adicione textura: Add, depois Texture, depois Image Texture. Clique em Open e escolha um PNG da pasta. Arraste o ponto amarelo Color do Image Texture até o ponto Base Color do Principled BSDF. A imagem aparece no modelo.

25 min — Mão na massa. Cada aluno finaliza o material do próprio asset: escolhe cor base, ajusta Roughness para combinar com o material real (metal mais liso, madeira mais fosca) e, quando tiver UV, aplica uma textura de imagem. Em paralelo, peça que conversem com o Claude. Sugira este pedido exato para colar no chat: Sou aluno e estou texturizando um [diga o objeto] para um jogo estilo [diga o estilo]. Me sugira uma paleta de 4 cores em código hexadecimal e um acabamento (fosco ou brilhante) que combinem, e explique o porque. O aluno aplica uma sugestão, ligando a luz no modo Rendered para conferir.

10 min — Desafio e compartilhar. Desafio: criar uma segunda variação do mesmo material (por exemplo, uma versão gasta e suja) e decidir qual fica melhor. Cada aluno mostra o asset girando na tela e diz em uma frase qual decisão de cor ou acabamento tomou e por quê.

## Como explicar de forma clara (linguagem para a idade)

Compare o material com roupa: o modelo é o corpo, a textura é a roupa que veste. Diga que o Roughness é como a diferença entre um espelho (liso, brilhante) e uma parede de giz (áspera, fosca). Para os nós, use a imagem de uma fábrica: cada caixinha faz uma coisa e os fios levam o resultado de uma para a outra; o fio do Image Texture leva a imagem até a entrada de cor. Lembre que a cor base também é chamada de albedo e é exatamente o que o Unity vai ler. Reforce que arte é decisão: o Claude dá ideias, mas quem decide é o aluno, que precisa saber dizer o porquê da escolha.

## Erros comuns e como ajudar

O modelo fica todo preto ou rosa: a imagem não carregou ou o caminho quebrou; mande clicar em Open de novo e reapontar o PNG. A textura aparece esticada ou repetida errado: falta UV ou a UV está ruim; use o arquivo de exemplo com UV pronta. O aluno mexe na cor e nada muda na janela 3D: provavelmente está no modo Solid; troque para Material Preview. O fio não conecta: precisa arrastar do ponto colorido de saída até o ponto de entrada, sempre da direita do Image Texture para a esquerda do Principled. Tudo brilha como plástico: o Roughness está baixo demais; suba o valor.`,
  exercicios: [
    {
      titulo: `Caça às palavras dos materiais`,
      tipo: `Revisão guiada (oral e escrita)`,
      tempo: `8 min`,
      guiaProfessor: `Use no aquecimento. Faça as perguntas em voz alta e deixe os alunos responderem; corrija reforçando a definição simples. Pode anotar no quadro.`,
      atividade: `Responda com suas palavras: (1) Qual a diferença entre material e textura? (2) O que faz o Roughness? (3) Onde fica a cor base no Unity e como ela também é chamada?`,
      gabarito: `(1) O material é a receita de como a luz se comporta na superfície (cor, brilho, acabamento juntos); a textura é uma imagem que entra nessa receita para dar cor e detalhe. (2) O Roughness controla o acabamento: perto de 0 a superfície fica lisa e brilhante, perto de 1 fica áspera e fosca. (3) A cor base fica na entrada Base Color do Principled BSDF e é chamada de albedo; é o que o Unity lê como cor do objeto.`,
    },
    {
      titulo: `Mudando cor e acabamento`,
      tipo: `Prática guiada no Blender`,
      tempo: `10 min`,
      guiaProfessor: `Acompanhe a tela de cada aluno. Confirme que estão no modo Material Preview antes de começar, senão não verão a mudança. Peça que comparem dois valores de Roughness.`,
      atividade: `No seu asset, crie um material novo, mude a Base Color para uma cor à sua escolha e ajuste o Roughness primeiro para 0,1 e depois para 0,9. Observe a diferença e descreva o que mudou.`,
      gabarito: `Passos: selecionar o objeto, abrir Material Properties, clicar em New, mudar Base Color no Principled BSDF e alterar Roughness. Resultado esperado descrito pelo aluno: com Roughness 0,1 a superfície fica lisa e brilhante (reflete a luz como plástico ou metal polido); com Roughness 0,9 fica fosca e áspera (espalha a luz, parece giz ou madeira sem verniz). A cor permanece a mesma; só muda o acabamento.`,
    },
    {
      titulo: `Aplicando uma textura de imagem`,
      tipo: `Prática no Shader Editor`,
      tempo: `12 min`,
      guiaProfessor: `Quem não tiver UV usa o arquivo de exemplo pronto. Verifique a conexão do fio: saída Color do Image Texture até a entrada Base Color. Se ficar rosa, o PNG não carregou.`,
      atividade: `Abra o Shader Editor, adicione um nó Image Texture (Add, depois Texture, depois Image Texture), carregue um PNG da pasta e conecte a saída Color dele na entrada Base Color do Principled BSDF. Confira o modelo no Material Preview.`,
      gabarito: `Sequência correta: Add > Texture > Image Texture cria o nó; Open carrega o PNG; arrastar o ponto amarelo Color (saída, à direita do Image Texture) até o ponto Base Color (entrada, à esquerda do Principled BSDF) cria o fio. Com a UV correta, a imagem envolve o modelo. Se aparecer rosa, a imagem não foi carregada (reabrir com Open); se aparecer esticada, a UV está faltando ou incorreta.`,
    },
    {
      titulo: `Paleta com o Claude`,
      tipo: `Pesquisa criativa com IA + aplicação`,
      tempo: `12 min`,
      guiaProfessor: `Oriente o aluno a descrever o objeto e o estilo do jogo no pedido. Reforce que ele deve escolher e justificar, não copiar tudo. Peça que aplique pelo menos uma cor sugerida e confira sob iluminação no modo Rendered.`,
      atividade: `Peça ao Claude uma paleta de 4 cores em hexadecimal e um acabamento que combinem com o estilo do seu jogo. Escolha uma das cores, aplique na Base Color, ajuste o Roughness conforme o acabamento sugerido e escreva uma frase justificando sua escolha.`,
      gabarito: `Não há resposta única. Esperado: o aluno apresenta a paleta recebida (quatro códigos hexadecimais, por exemplo 8B5A2B, D9A066, 3E2C1C, F2E8D5 para uma madeira), aplica uma cor na Base Color, define um Roughness coerente (madeira fosca perto de 0,8; metal liso perto de 0,2) e justifica, por exemplo: escolhi o tom mais escuro porque o jogo tem clima sombrio e o acabamento fosco evita brilho de plástico. A justificativa precisa ligar a escolha ao estilo do jogo.`,
    },
    {
      titulo: `Duas variações, uma decisão`,
      tipo: `Desafio aberto + apresentação`,
      tempo: `12 min`,
      guiaProfessor: `É o desafio final, mais difícil. Estimule duplicar o material e variar (versão limpa e versão gasta). Na hora de compartilhar, cobre uma justificativa clara da decisão; valorize o raciocínio, não só o visual.`,
      atividade: `Crie duas variações do material do seu asset (por exemplo, uma versão nova e uma versão gasta/suja, mudando cor e Roughness). Decida qual combina melhor com o seu jogo e apresente girando o modelo na tela, explicando o porquê em uma frase.`,
      gabarito: `Não há resposta única; avalia-se o processo. Esperado: o aluno duplica o material (botão de cópia ao lado do nome do material) ou cria um segundo material, altera Base Color e Roughness para diferenciar as versões (a versão gasta costuma ter cor mais escura/dessaturada e Roughness mais alto), compara as duas sob iluminação e escolhe uma com justificativa coerente ligada ao estilo do jogo, por exemplo: a versão gasta combina porque o cenário é abandonado e passa a ideia de objeto usado.`,
    },
  ],
};
