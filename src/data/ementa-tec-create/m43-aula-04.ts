import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Render Final e Detalhes",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Produzir o render final do cenário no Blender ajustando qualidade, sombras e pós-processamento, adicionando detalhes finos aos modelos e exportando imagens de apresentação revisadas com o Claude.`,
  descricao: `Nesta aula o aluno fecha o ciclo de criação visual do cenário: ele já modelou, aplicou materiais e iluminação nas aulas anteriores, e agora vai gerar a imagem final de apresentação, aquela que vai para o portfólio. O render final é o momento em que todo o trabalho aparece com qualidade alta: sombras suaves, reflexos corretos e cores equilibradas. É aqui que o cenário deixa de ser um arquivo de trabalho e vira uma imagem bonita de mostrar.

Trabalhamos três frentes ao mesmo tempo. Primeiro, a qualidade do render: número de amostras (samples), tipo de motor (Cycles ou Eevee) e o tamanho da imagem. Segundo, os detalhes finos: pequenos objetos, bordas chanfradas (bevel), marcas de uso e variações que tornam o modelo mais crível e menos artificial. Terceiro, o pós-processamento dentro do próprio Blender, usando o Compositor para ajustar brilho, contraste e cor sem precisar de outro programa.

O aluno também aprende a exportar a imagem final em formato PNG, com resolução adequada para apresentação, e a salvar variações de câmera para mostrar o cenário de ângulos diferentes. A ideia é que cada aluno saia da aula com pelo menos uma imagem pronta para o portfólio.

Por fim, o Claude entra como revisor de composição: o aluno descreve a imagem ou cola a lista de ajustes que fez, e pede uma análise sobre enquadramento, equilíbrio de luz e foco visual. O objetivo não é o Claude fazer o trabalho, e sim dar ao aluno um segundo olhar crítico para melhorar a apresentação.`,
  materiais: [
    `Computadores com Blender 4.x instalado (um por aluno)`,
    `Projetor para o professor demonstrar os painéis de Render e Compositor`,
    `Arquivo de exemplo cenario-base.blend já modelado e iluminado (backup pronto)`,
    `Pasta compartilhada para os alunos salvarem os PNGs finais (renders-portfolio)`,
    `Acesso ao Claude (navegador) para revisão da composição visual`,
    `Imagens de referência de boa composição (regra dos terços) projetadas no início`,
  ],
  conceitosChave: [
    `Render final — imagem de alta qualidade gerada a partir da cena 3D, pronta para apresentação.`,
    `Samples (amostras) — número de cálculos de luz por pixel; quanto maior, menos ruído e mais nítido, porém mais lento.`,
    `Cycles e Eevee — os dois motores de render do Blender; Cycles é mais realista e lento, Eevee é mais rápido e leve.`,
    `Compositor — área do Blender onde se faz pós-processamento da imagem (brilho, contraste, cor) com nós ligados.`,
    `Bevel — chanfro nas bordas que tira o canto perfeito e deixa o modelo mais realista ao captar a luz.`,
    `Denoise — recurso que limpa o ruído do render, deixando a imagem suave sem precisar de muitas samples.`,
    `Regra dos terços — guia de composição que divide a imagem em três partes para posicionar o ponto de interesse.`,
  ],
  treinamento: `## O que o professor precisa saber

O render final é a foto oficial do cenário. Você não precisa dominar o Blender: basta seguir os painéis na ordem. Os três locais importantes ficam no canto direito da tela (a coluna chamada Properties) e nas abas no topo (Layout e Compositing). A regra de ouro: mais samples deixa a imagem melhor, porém mais lenta. Em sala, com 25 minutos de prática, use o motor Eevee ou ative o Denoise no Cycles para os renders ficarem rápidos. Faça um render de teste antes da aula para conferir o tempo no computador da escola.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra o arquivo cenario-base.blend no projetor. Pergunte: o que falta para esta imagem ficar pronta de mostrar? Mostre uma referência com a regra dos terços e explique que hoje o objetivo é a imagem final.

Conteúdo novo guiado (15 min): demonstre os três ajustes principais.
1) Motor e qualidade. Na coluna direita (Properties), clique no ícone de uma câmera traseira chamado Render Properties. Em Render Engine escolha Cycles. Marque a caixa Denoise dentro de Sampling. Em Max Samples coloque 128.
2) Tamanho. Clique no ícone ao lado, Output Properties. Em Resolution X coloque 1920 e em Resolution Y coloque 1080.
3) Pós-processamento. No topo da tela clique na aba Compositing e marque Use Nodes. Adicione um nó de ajuste pelo menu Add, depois Color, depois Bright/Contrast, e ligue-o entre Render Layers e Composite. Suba um pouco o contraste.

Mostre como gerar a imagem: menu Render no topo, depois Render Image (ou tecla F12). Para salvar: na janela da imagem, menu Image, depois Save As, formato PNG.

Mão na massa (25 min): cada aluno faz o próprio render final. Roteiro na lousa: ajustar câmera, ativar Denoise, definir 128 samples e 1920x1080, adicionar Bright/Contrast no Compositor, apertar F12 e salvar o PNG na pasta renders-portfolio. Quem terminar adiciona um detalhe fino: selecione um objeto, vá em Modifier Properties (ícone de chave inglesa), Add Modifier, Generate, Bevel, e deixe Amount em 0.02 para suavizar as bordas.

Desafio e compartilhar (10 min): cada aluno abre o Claude e escreve um pedido como: Analise a composição desta imagem de cenário 3D. Descrevo assim: a casa está à esquerda, a luz vem da direita, o chão ocupa metade de baixo. O foco está bem posicionado pela regra dos terços? O que melhoraria no enquadramento e na luz? O aluno aplica uma sugestão e mostra o resultado para a turma.

## Como explicar de forma clara (linguagem para a idade)

Compare o render final com tirar a foto oficial depois de arrumar o quarto. As samples são como tirar várias fotos e juntar: poucas fotos saem com chuviscos (ruído), muitas fotos saem limpas. O Denoise é o filtro que tira esses chuviscos de uma vez. O bevel é o segredo dos modelos bonitos: na vida real nenhum canto é perfeito, sempre tem uma leve curva que pega a luz. Diga: ninguém percebe o bevel, mas todo mundo sente que ficou mais real.

## Erros comuns e como ajudar

Render muito lento: baixe Max Samples para 64 ou troque para Eevee. Imagem escura: confira se a luz da cena está ligada e suba o brilho no nó Bright/Contrast. Aluno salvou e não acha o arquivo: lembre que Save As pede a pasta; oriente sempre salvar em renders-portfolio. Compositor sem efeito: cheque se Use Nodes está marcado e se o nó está ligado entre Render Layers e Composite. Bevel deformou tudo: o Amount estava alto demais, volte para 0.02.`,
  exercicios: [
    {
      titulo: `Configurar a qualidade do render`,
      tipo: `Prática guiada`,
      tempo: `5 min`,
      guiaProfessor: `Acompanhe pelo projetor enquanto cada aluno mexe na coluna Properties. O objetivo é só localizar os painéis e mudar os valores, sem renderizar ainda.`,
      atividade: `No arquivo cenario-base.blend, abra Render Properties, escolha o motor Cycles, marque Denoise e defina Max Samples em 128. Depois abra Output Properties e defina a resolução em 1920 por 1080.`,
      gabarito: `Render Properties: Render Engine = Cycles; em Sampling marcar Denoise; Max Samples = 128. Output Properties: Resolution X = 1920, Resolution Y = 1080. Estes são os valores corretos para um render final de apresentação em sala.`,
    },
    {
      titulo: `Adicionar pós-processamento no Compositor`,
      tipo: `Prática`,
      tempo: `7 min`,
      guiaProfessor: `Muitos alunos esquecem de marcar Use Nodes. Passe nas mesas conferindo se o nó foi ligado entre Render Layers e Composite, senão o efeito não aparece.`,
      atividade: `Vá na aba Compositing, marque Use Nodes e adicione um nó Bright/Contrast pelo caminho Add, Color, Bright/Contrast. Ligue o nó entre Render Layers e Composite e aumente um pouco o contraste.`,
      gabarito: `Sequência correta: aba Compositing, marcar Use Nodes, Add, Color, Bright/Contrast. O nó fica no meio: a saída Image de Render Layers entra no Bright/Contrast, e a saída deste vai para a entrada Image do nó Composite. Subir Contrast em torno de 10 a 20 já deixa a imagem mais viva.`,
    },
    {
      titulo: `Detalhe fino com Bevel`,
      tipo: `Prática`,
      tempo: `6 min`,
      guiaProfessor: `Reforce que o Amount deve ser pequeno. Se o modelo deformar, o valor está alto. Mostre como o canto suavizado captura a luz no render.`,
      atividade: `Selecione um objeto do cenário, abra Modifier Properties (ícone de chave inglesa), use Add Modifier, Generate, Bevel e ajuste o Amount para 0.02. Compare a borda antes e depois.`,
      gabarito: `Caminho: selecionar o objeto, Modifier Properties, Add Modifier, Generate, Bevel, Amount = 0.02. O resultado esperado é uma borda levemente arredondada que reflete a luz numa fina linha, dando aparência mais realista sem mudar a forma geral.`,
    },
    {
      titulo: `Render e exportação do PNG`,
      tipo: `Prática`,
      tempo: `5 min`,
      guiaProfessor: `Esta é a entrega principal. Confira que cada aluno salvou o arquivo na pasta renders-portfolio com um nome claro. Ajude quem não encontrar a janela de salvar.`,
      atividade: `Gere o render final com Render, Render Image (ou F12). Na janela da imagem, use Image, Save As, escolha o formato PNG e salve na pasta renders-portfolio com o nome cenario-final.png.`,
      gabarito: `Passos: menu Render, Render Image (ou tecla F12) para gerar; na janela da imagem, Image, Save As, File Format = PNG, destino renders-portfolio, nome cenario-final.png, botão Save As Image. O arquivo PNG final deve aparecer na pasta compartilhada.`,
    },
    {
      titulo: `Revisão da composição com o Claude`,
      tipo: `Desafio com IA`,
      tempo: `7 min`,
      guiaProfessor: `Oriente o aluno a descrever a imagem com detalhes (posição dos objetos, direção da luz) para o Claude dar uma análise útil. Peça que ele aplique pelo menos uma sugestão e compare.`,
      atividade: `Descreva sua imagem final para o Claude e peça uma análise de composição: enquadramento, regra dos terços, equilíbrio de luz e foco visual. Aplique uma sugestão e gere um novo render para comparar.`,
      gabarito: `Exemplo de prompt esperado: Analise a composição desta imagem de cenário 3D. Descrição: o objeto principal está no terço esquerdo, a luz principal vem da direita criando sombra para a esquerda, o céu ocupa o terço superior. Avalie enquadramento, regra dos terços, equilíbrio de luz e foco visual, e sugira uma melhoria objetiva. Resposta esperada do aluno: identificar uma sugestão concreta (por exemplo, mover a câmera para deixar o objeto fora do centro, ou suavizar uma sombra forte), aplicar no Blender e mostrar o render antes e depois comprovando a melhoria.`,
    },
  ],
};
