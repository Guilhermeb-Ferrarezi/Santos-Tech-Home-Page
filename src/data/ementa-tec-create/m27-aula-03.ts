import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Entendendo Materiais 3D",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Conhecer o sistema de materiais do Maya — cor base, brilho, metálico e rugosidade — e aplicar os primeiros materiais nos novos itens combinando com o estilo visual do jogo.`,
  descricao: `Até agora o aluno modelou as formas dos novos itens, mas eles ainda estão cinzentos, sem vida, como peças de plástico cru. Nesta aula entra a etapa que transforma um modelo numa coisa que parece de verdade: o material. Material, no Maya, é a "receita" que diz como a superfície reage à luz. A mesma esfera pode virar uma laranja fosca, uma bola de aço polido ou uma gema brilhante só mudando o material — a forma continua igual, o que muda é a aparência da casca.

O Maya usa um material moderno chamado aiStandardSurface (do motor Arnold), que funciona por propriedades simples e independentes. As quatro que importam nesta aula são: a cor base (Base Color), que é a cor "de fundo" do objeto; o brilho ou reflexo (Specular), que controla o quanto a superfície reflete a luz como um espelho; o metálico (Metalness), que decide se o material é um metal ou não; e a rugosidade (Roughness), que diz se a superfície é lisa e espelhada ou áspera e fosca. Mexer nesses quatro controles, e ver o resultado mudar na hora, é o coração da aula.

O segredo que o aluno precisa entender é que rugosidade e metálico trabalham juntos. Rugosidade baixa deixa a superfície lisa, e os reflexos ficam nítidos como num espelho ou numa maçã encerada; rugosidade alta espalha a luz e deixa tudo fosco, como uma parede de tijolo ou um pano. O metálico decide a "família" do material: em zero, temos plásticos, madeiras, pedras e borrachas; em um, temos ouro, ferro, cobre e prata, que refletem o ambiente com a própria cor. São poucos botões, mas a combinação deles cria praticamente qualquer aparência.

Por fim, o aluno conecta isso ao jogo. Cada item dos novos assets tem um papel visual: uma espada precisa parecer metal afiado, um baú de madeira precisa parecer madeira gasta, uma poção precisa parecer vidro brilhante. Escolher os valores de material certos para cada item é uma decisão de arte, não só técnica — e é isso que faz o conjunto de assets parecer que pertence ao mesmo mundo. No fim da aula, os primeiros itens deixam de ser cinza e ganham a cara do jogo.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e já aberto, um por aluno, com os novos itens modelados das aulas anteriores`,
    `Projetor ou tela grande para o professor demonstrar o Hypershade e o Attribute Editor ao vivo`,
    `Mouse com três botões em cada estação, indispensável para navegar a câmera enquanto se observa o material`,
    `Arquivo de exemplo "materiais_demo.mb" com três esferas iguais (uma fosca, uma metálica e uma de vidro) para comparar lado a lado`,
    `Folha impressa com uma "tabela de receitas de material" (plástico, metal, madeira, vidro) trazendo valores sugeridos de metálico e rugosidade`,
    `Quadro branco para desenhar a diferença entre reflexo nítido (rugosidade baixa) e reflexo espalhado (rugosidade alta)`,
  ],
  conceitosChave: [
    `Material — a "receita" que define como a superfície de um objeto reage à luz; muda a aparência sem mudar a forma.`,
    `aiStandardSurface — o material padrão e moderno do Maya (do motor Arnold), usado para criar quase qualquer aparência.`,
    `Cor base (Base Color) — a cor principal e "de fundo" da superfície, antes dos reflexos.`,
    `Brilho ou reflexo (Specular) — o quanto a superfície devolve a luz como um espelho; é o ponto de luz que aparece no objeto.`,
    `Metálico (Metalness) — controle que escolhe a família do material: zero para não metais (plástico, madeira) e um para metais (ouro, ferro).`,
    `Rugosidade (Roughness) — o quanto a superfície é lisa ou áspera; baixa deixa reflexo nítido e espelhado, alta deixa reflexo fosco e espalhado.`,
    `Hypershade — a janela do Maya onde se criam, organizam e aplicam os materiais aos objetos.`,
  ],
  treinamento: `## O que o professor precisa saber

Material é só a aparência da superfície; ele não muda a forma do objeto. No Maya, o jeito recomendado é criar um material aiStandardSurface, ajustar quatro coisas e aplicar no objeto. Você não precisa decorar tudo — guarde estes quatro nomes: Base Color (cor base), Specular (brilho), Metalness (metálico) e Specular Roughness (rugosidade). Para criar e ver os materiais, use duas janelas. O Hypershade (menu Windows, depois Rendering Editors, depois Hypershade) é onde os materiais nascem. O Attribute Editor (atalho Ctrl + A com o objeto selecionado) é onde você desliza os valores. Para enxergar o material já com reflexos, ligue o modo de visualização com qualidade: na viewport, no menu Renderer, escolha Viewport 2.0, e aperte a tecla 6 para ver as texturas e o sombreamento. Teste tudo isso uma vez antes da aula no arquivo "materiais_demo.mb". A regra mental que resolve quase tudo: rugosidade baixa é igual a liso e espelhado; rugosidade alta é igual a fosco; metálico em um vira metal.

## Passo a passo da aula

Aquecimento (10 min): abra o "materiais_demo.mb" no projetor com as três esferas (fosca, metálica e vidro). Pergunte: "Por que essas três bolas, com a mesma forma, parecem tão diferentes?" Conduza até a resposta: o material. Aperte 6 na viewport para mostrar os reflexos.

Conteúdo novo guiado (15 min): selecione uma esfera. Clique com o botão direito sobre ela, segure e escolha Assign New Material, depois aiStandardSurface. Abra o Attribute Editor (Ctrl + A). Mostre o campo Base Color e escolha um vermelho. Aponte o controle Specular Roughness: arraste para 0 e mostre o reflexo virar um pontinho nítido; arraste para 1 e mostre virar fosco. Por fim, suba o Metalness para 1 e mostre a esfera virar metal vermelho, tipo cobre pintado. Resuma no quadro: cor base, brilho, metálico, rugosidade.

Mão na massa (25 min): cada aluno escolhe dois dos seus novos itens. Para cada um, cria um aiStandardSurface (botão direito, Assign New Material), define a Base Color, ajusta Metalness e Specular Roughness conforme a "receita" do item e renomeia o material no topo do Attribute Editor para algo claro, como mat_espada ou mat_bau. Use a tabela impressa: metal pede Metalness 1 e Roughness baixa; madeira pede Metalness 0 e Roughness alta; vidro ou poção pede Roughness bem baixa. Peça que orbitem a câmera para ver o reflexo de vários ângulos.

Desafio e compartilhar (10 min): cada aluno cria uma terceira "receita nova" do zero, sem a tabela, inventando um material que combine com o estilo do jogo. Depois mostram os itens a um colega e explicam quais valores usaram e por quê.

## Como explicar de forma clara

Compare material com pintar e dar acabamento num objeto de madeira cru: a forma é a mesma, mas você decide se ele vai ser fosco, brilhante, de metal ou de vidro. Use frutas: a maçã encerada tem rugosidade baixa (brilha), a laranja tem rugosidade alta (fosca). Para metálico, diga: "Liga o metálico quando o objeto for feito de metal de verdade — espada, moeda, armadura; deixa desligado para plástico, madeira e pedra." Para rugosidade, faça o gesto de espelho com a mão: liso reflete nítido, áspero embaça. Lembre que material não muda a forma, só a casca.

## Erros comuns e como ajudar

O erro mais comum é não ver mudança nenhuma: quase sempre a viewport está no modo simples — mande apertar a tecla 6 e checar se o Renderer está em Viewport 2.0. Outro tropeço é aplicar o material no objeto errado; reforce selecionar primeiro e conferir o nome no Attribute Editor. Muitos deixam tudo metálico achando que fica "mais legal", e o objeto vira um espelho estranho; explique que metal só para coisas de metal. Alguns confundem cor base com cor final e estranham o objeto escuro quando metálico está ligado, pois metais pegam a cor do ambiente; mostre que isso é normal. Por fim, há quem esqueça de renomear o material e depois se perca; crie desde já o hábito de nomear como mat_nomedoitem.`,
  exercicios: [
    {
      titulo: `Caça aos Três Materiais`,
      tipo: `Observação guiada`,
      tempo: `5 minutos`,
      guiaProfessor: `Use o arquivo "materiais_demo.mb" no projetor. Garanta que todos apertaram a tecla 6 para ver os reflexos. Conduza com perguntas, sem dar a resposta de imediato.`,
      atividade: `Olhe as três esferas de mesma forma na cena de exemplo e descreva, com suas palavras, por que cada uma parece diferente. Aponte qual é fosca, qual é metálica e qual parece de vidro, e diga em qual delas o reflexo é mais nítido.`,
      gabarito: `O aluno reconhece que a forma é igual e que o material é o que muda a aparência. Identifica a esfera fosca (rugosidade alta), a metálica (metálico ligado, reflexo forte) e a de vidro (rugosidade muito baixa, reflexo nítido). Conclui que o reflexo mais nítido aparece nas superfícies de rugosidade baixa.`,
    },
    {
      titulo: `Meu Primeiro Material`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Circule conferindo se cada um usou botão direito, depois Assign New Material, depois aiStandardSurface. Lembre de abrir o Attribute Editor com Ctrl + A e de apertar 6 para ver o resultado.`,
      atividade: `Em um dos seus novos itens, crie um material aiStandardSurface novo, escolha uma Base Color que combine com o item e renomeie o material no topo do Attribute Editor para algo claro, como mat_meuitem. Confira o resultado na viewport.`,
      gabarito: `O aluno seleciona o objeto, usa botão direito e Assign New Material, depois aiStandardSurface; abre o Attribute Editor com Ctrl + A, define a Base Color e renomeia o material para um nome claro como mat_meuitem. A cor aparece no objeto com a tecla 6 ligada.`,
    },
    {
      titulo: `Liso ou Áspero?`,
      tipo: `Experimento comparativo`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre que o controle é o Specular Roughness. Peça que arrastem devagar de 0 a 1 observando o ponto de luz mudar. Estimule orbitar a câmera para ver o reflexo se mover.`,
      atividade: `No material que você criou, mexa apenas no Specular Roughness. Coloque em 0 e observe o reflexo; depois suba para perto de 1 e observe de novo. Anote em qual valor o item parece mais liso e espelhado e em qual parece mais fosco, e escolha o valor que combina com o item.`,
      gabarito: `O aluno percebe que Specular Roughness próximo de 0 deixa a superfície lisa, com reflexo nítido e espelhado, e que próximo de 1 deixa fosca, com reflexo espalhado. Escolhe um valor coerente com o item (baixo para superfícies polidas, alto para fosco) e justifica a escolha.`,
    },
    {
      titulo: `Receita de Metal e de Madeira`,
      tipo: `Aplicação em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue a tabela de receitas. Oriente que metal pede Metalness 1 e Roughness baixa, e madeira pede Metalness 0 e Roughness alta. Em dupla, um confere a receita do outro pelo nome do material.`,
      atividade: `Escolha dois itens diferentes: um que deva parecer metal e um que deva parecer madeira. Aplique em cada um a receita certa usando Metalness e Specular Roughness, defina a Base Color adequada e renomeie os materiais (por exemplo, mat_espada e mat_bau). Em dupla, confiram se cada material está coerente com o item.`,
      gabarito: `O item de metal recebe Metalness em 1 e Specular Roughness baixa, com Base Color de metal; o item de madeira recebe Metalness em 0 e Specular Roughness alta, com Base Color amadeirada. Ambos os materiais ficam renomeados de forma clara, e a dupla confirma que cada aparência combina com o item.`,
    },
    {
      titulo: `Material que Combina com o Jogo`,
      tipo: `Projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Agora sem a tabela. Incentive escolhas de arte coerentes com o estilo visual do jogo. Peça que cada aluno explique, ao compartilhar, quais valores escolheu e por quê.`,
      atividade: `Crie do zero uma terceira receita de material para um item, sem usar a tabela, combinando Base Color, Metalness e Specular Roughness para que ele pareça pertencer ao mundo do seu jogo. Renomeie o material, aplique no item e prepare-se para explicar suas escolhas a um colega.`,
      gabarito: `O aluno cria um material aiStandardSurface novo e ajusta os três controles de forma coerente com o estilo do jogo: por exemplo, Metalness 1 e Roughness baixa para algo metálico, ou Metalness 0 e Roughness média para algo fosco. Renomeia e aplica o material no item certo e justifica cada valor escolhido (cor, metálico e rugosidade) ligando-o ao visual do jogo.`,
    },
  ],
};
