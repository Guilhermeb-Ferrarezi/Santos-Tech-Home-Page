import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Adicionando Detalhes ao Modelo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Adicionar detalhes geométricos e bordas de apoio no Maya para deixar o asset mais rico e crível, mantendo a malha limpa e organizada.`,
  descricao: `Nesta aula o aluno pega o modelo base que começou a construir nas aulas anteriores e o transforma em algo muito mais convincente. Até aqui o objeto tinha a forma geral certa, mas era "duro" demais: cantos perfeitamente vivos, superfícies lisas, sem nenhuma riqueza visual. O olho humano percebe um objeto como real quando ele tem pequenas imperfeições e bordas suaves, porque na vida real quase nada tem um canto perfeitamente afiado. É exatamente isso que vamos criar com detalhes geométricos.

O foco são três técnicas que andam juntas. A primeira é o bevel (chanfro), que arredonda ou corta uma aresta dura criando uma ou mais faces novas no lugar do canto. A segunda são as support edges (bordas de apoio ou support loops), que são arestas extras colocadas bem perto das bordas importantes para "segurar" a forma e impedir que o modelo derreta quando recebe suavização. A terceira é a inserção de pequenos elementos, como parafusos, frisos, ranhuras e saliências, que contam uma história sobre o objeto e fazem o jogador acreditar que ele existe de verdade.

Tudo isso precisa ser feito com disciplina. Detalhe demais ou malha bagunçada vira um problema enorme nas próximas aulas, quando vamos abrir UVs e otimizar o asset para o jogo. Por isso o aluno aprende, desde já, a trabalhar com calma, a apagar histórico, a checar a contagem de polígonos e a manter quads (faces de quatro lados) sempre que possível. Um modelo bonito e limpo agora é um modelo fácil de finalizar depois.

Como esta é a trilha avançada, o aluno também usa o Claude como assistente: pedir uma lista de detalhes plausíveis para o objeto, tirar dúvidas sobre por que uma support edge é necessária ou pedir uma checklist de revisão da malha são usos ótimos. O professor reforça que a decisão criativa e a mão na ferramenta continuam sendo do aluno; o Claude acelera o raciocínio, não substitui a prática.`,
  materiais: [
    `Computadores com Autodesk Maya instalado (um por aluno) e mouse de 3 botões`,
    `Projetor ou TV para o professor demonstrar os passos ao vivo`,
    `Arquivo de exemplo asset_base.mb com o modelo base da Aula 2 (entregar a quem precisar)`,
    `Imagens de referência do objeto real (fotos com parafusos, frisos e bordas gastas)`,
    `Acesso ao Claude como assistente de ideias e revisão de malha`,
    `Folha impressa com a checklist de malha limpa (quads, sem n-gons, histórico apagado)`,
  ],
  conceitosChave: [
    `Bevel (chanfro) — operação que substitui uma aresta ou vértice dura por uma ou mais faces, arredondando ou cortando o canto.`,
    `Support edge (borda de apoio) — aresta extra colocada perto de uma borda importante para manter a forma firme quando a malha é suavizada.`,
    `Edge loop — sequência contínua de arestas que dá a volta no modelo; usada para adicionar detalhe de forma organizada.`,
    `Quad — face de quatro lados, formato ideal da malha para jogos porque deforma e suaviza bem.`,
    `N-gon — face com mais de quatro lados; deve ser evitada porque causa erros de sombreamento e dor de cabeça na exportação.`,
    `Bevel segments — número de subdivisões do chanfro; mais segments deixam a borda mais redonda e gastam mais polígonos.`,
    `Apagar histórico — limpar o registro de operações antigas do objeto para evitar travamentos e arquivos pesados.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya. Precisa entender três ideias e saber onde clicar. Primeira ideia: um canto perfeitamente afiado parece falso; o bevel arredonda esse canto e o objeto fica crível. Segunda ideia: quando vamos suavizar a malha, ela "encolhe" em direção ao centro; as support edges são arestas extras que seguram a forma no lugar. Terceira ideia: malha limpa significa faces de quatro lados (quads) e nenhum n-gon. Antes da aula, abra o Maya, abra o arquivo asset_base.mb e teste o caminho dos menus uma vez. No topo, troque o menu set para "Modeling". As ferramentas que vamos usar ficam no menu Mesh Tools e no menu Edit Mesh. Tenha o atalho do botão direito do mouse na ponta da língua: clicar e segurar o botão direito sobre o objeto abre o menu de marcação para alternar entre Vertex, Edge e Face.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min). Abra o modelo base no projetor. Pergunte: "O que falta para este objeto parecer real?" Anote as respostas. Mostre uma foto de referência e aponte parafusos, frisos e bordas gastas. Peça que cada aluno abra seu arquivo e selecione o objeto.

Conteúdo novo guiado (15 min). Demonstre o bevel. Clique e segure o botão direito sobre o objeto e escolha Edge para entrar no modo de aresta. Selecione uma aresta de canto. Vá em Edit Mesh e clique em Bevel. No canto inferior esquerdo aparece a caixa de opções da última ferramenta; abra-a com o quadradinho. Ajuste Fraction para cerca de 0.2 e Segments para 2. Explique: Fraction é o tamanho do chanfro e Segments é quão redondo ele fica. Agora demonstre uma support edge. Vá em Mesh Tools, escolha Insert Edge Loop e clique perto de uma borda importante para criar uma aresta de apoio paralela. Repita do outro lado. Por fim, mostre a contagem de polígonos: menu Display, Heads Up Display, Poly Count.

Mão na massa (25 min). Cada aluno aplica bevel em pelo menos quatro arestas duras do seu objeto e adiciona pelo menos um par de support edges. Em seguida insere um pequeno elemento de detalhe, por exemplo um friso, usando o atalho de extrusão. Em modo Face, selecione uma face, vá em Edit Mesh e clique em Extrude; puxe a seta para dentro ou para fora para criar relevo. Circule pela sala. Lembre todos de apagar o histórico no final: menu Edit, Delete by Type, History.

Desafio e compartilhar (10 min). Desafio: adicionar UM detalhe que conte uma história sobre o objeto (uma rachadura, um logotipo em baixo-relevo, uma porca). Cada aluno mostra a tela em 30 segundos e diz qual detalhe escolheu e por quê.

## Como explicar de forma clara (linguagem para a idade)

Use comparações concretas. Diga que um canto sem bevel é como uma faca: parece perigoso e artificial; o bevel é "lixar o canto" para ele pegar a luz e ficar real. Para as support edges, use a imagem de um colchão sem armação: sem apoio ele afunda; as bordas de apoio são a armação que segura a forma. Para quads e n-gons, mostre que quatro lados é o "formato bonito" e que faces com muitos lados são "remendos" que dão problema depois. Repita o mantra: detalhe com capricho, malha limpa.

## Erros comuns e como ajudar

Erro 1: bevel com valor altíssimo que deforma tudo. Peça para desfazer com Ctrl Z e baixar o Fraction. Erro 2: malha cheia de n-gons depois de extrusões. Mostre como visualizar com Display, Polygons, e oriente a dividir a face em quads. Erro 3: arquivo travando porque o histórico não foi apagado; faça Delete by Type History virar hábito. Erro 4: exagero de detalhes que estoura a contagem de polígonos; lembre que na Aula 5 vamos otimizar e que menos costuma ser mais.`,
  exercicios: [
    {
      titulo: `Lendo o objeto real`,
      tipo: `Roda de conversa com referência`,
      tempo: `8 min`,
      guiaProfessor: `Use no aquecimento. Projete a foto de referência e conduza os alunos a observar onde estão os detalhes. O objetivo é treinar o olhar antes da mão na ferramenta. Aceite respostas variadas, mas puxe para detalhes que podem virar geometria.`,
      atividade: `Olhe a foto de referência do seu objeto e liste em voz alta três detalhes que dariam para modelar: por exemplo bordas arredondadas, parafusos ou um friso. Diga qual deles deixaria o objeto mais crível.`,
      gabarito: `Resposta aceita quando o aluno cita ao menos três detalhes plausíveis e geometricamente possíveis (ex.: cantos chanfrados, parafusos, ranhura, saliência) e justifica a escolha do mais importante pela credibilidade. Exemplo de resposta forte: "Bordas arredondadas, porque na vida real nada tem canto perfeito; depois os parafusos; depois o friso."`,
    },
    {
      titulo: `Meu primeiro bevel`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Guie no projetor passo a passo. Garanta que todos estão no menu set Modeling e em modo Edge antes de aplicar o bevel. Mostre a caixa de opções para ajustar Fraction e Segments. Circule conferindo se ninguém usou valor exagerado.`,
      atividade: `Entre em modo de aresta, selecione uma aresta de canto do seu objeto e aplique um bevel com Fraction perto de 0.2 e Segments igual a 2. Repita em mais três arestas duras.`,
      gabarito: `Caminho correto: clicar e segurar botão direito sobre o objeto, escolher Edge; selecionar a aresta; Edit Mesh, Bevel; abrir a caixa de opções e definir Fraction aproximadamente 0.2 e Segments 2. Resultado esperado: pelo menos quatro arestas chanfradas, com cantos suaves e sem deformação. Conferir que não há faces invertidas e que o bevel não atravessou o modelo.`,
    },
    {
      titulo: `Segurando a forma com support edges`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Explique primeiro POR QUE a support edge existe, mostrando o efeito de suavizar (tecla 3) sem apoio e com apoio. Depois deixe o aluno inserir os loops. O conceito é mais importante que a quantidade.`,
      atividade: `Use Insert Edge Loop (no menu Mesh Tools) para adicionar um par de bordas de apoio perto de uma borda importante do objeto. Pressione a tecla 3 para ver a suavização e observe a diferença; volte com a tecla 1.`,
      gabarito: `Caminho correto: Mesh Tools, Insert Edge Loop; clicar perto da borda importante para criar uma aresta paralela; repetir do outro lado formando o par. Ao apertar 3 (suavização de pré-visualização) a borda deve permanecer firme e definida, em vez de derreter. Aluno deve conseguir explicar que as arestas de apoio impedem a malha de encolher na suavização.`,
    },
    {
      titulo: `Detalhe que conta uma história`,
      tipo: `Desafio criativo no computador`,
      tempo: `15 min`,
      guiaProfessor: `Este é o desafio principal. Incentive escolhas que comuniquem algo sobre o objeto. Demonstre a extrusão de face uma vez. Lembre todos de manter quads e de apagar o histórico ao terminar.`,
      atividade: `Crie UM pequeno elemento que conte uma história sobre o objeto (um friso, um parafuso ou um baixo-relevo). Em modo Face, selecione uma face, use Edit Mesh, Extrude e puxe para dentro ou para fora. No fim, apague o histórico.`,
      gabarito: `Caminho correto: botão direito, Face; selecionar a face; Edit Mesh, Extrude; arrastar a seta para criar relevo; ajustar a espessura. Apagar histórico em Edit, Delete by Type, History. Resultado esperado: um detalhe legível e proposital, malha ainda em quads (sem n-gons criados pela extrusão) e justificativa clara do que o detalhe representa.`,
    },
    {
      titulo: `Revisão de malha limpa com o Claude`,
      tipo: `Uso do Claude e autoavaliação`,
      tempo: `10 min`,
      guiaProfessor: `Mostre como abrir Poly Count (Display, Heads Up Display, Poly Count) e como visualizar n-gons. Oriente um prompt claro para o Claude e reforce que a verificação final na malha é responsabilidade do aluno.`,
      atividade: `Peça ao Claude uma checklist curta para revisar uma malha de jogo. Use um prompt como: "Liste 5 itens para checar se minha malha 3D para jogo esta limpa (quads, n-gons, historico, contagem de polígonos, bordas de apoio)." Depois confira cada item no seu modelo.`,
      gabarito: `Checklist-modelo esperada: 1) Só faces de quatro lados (quads), evitando n-gons; 2) Nenhuma face com mais de quatro lados visível em Display, Polygons; 3) Histórico apagado em Delete by Type, History; 4) Contagem de polígonos sob controle no Poly Count, sem exagero de detalhes; 5) Support edges presentes nas bordas que precisam permanecer firmes na suavização. Aluno aprovado quando confere os cinco itens no próprio modelo e corrige ao menos um problema encontrado.`,
    },
  ],
};
