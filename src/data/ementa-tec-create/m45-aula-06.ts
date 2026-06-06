import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Texturas PBR para Games",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aplicar e ajustar texturas PBR (base color, metallic, roughness e normal) nos modelos do Maya, validando o resultado sobre os UVs e preparando os mapas para serem reconhecidos corretamente pela Unreal Engine.`,
  descricao: `Nesta aula o aluno descobre o que torna um modelo 3D parecido com algo real dentro de um game: a textura. Mas não é uma textura qualquer. Os games modernos usam um sistema chamado PBR, que significa Physically Based Rendering, ou renderização baseada na física. A ideia é simples e poderosa: em vez de o artista pintar a iluminação na mão, ele descreve as propriedades físicas do material (a cor, se é metálico, se é áspero ou liso) e o motor de jogo calcula a luz sozinho. Assim o mesmo modelo fica convincente de dia, de noite, dentro de uma caverna ou sob o sol.

O fluxo PBR se apoia em alguns mapas de textura principais. O base color define a cor pura do material, sem sombra nem brilho. O metallic diz quais partes são metal e quais não são. O roughness controla se a superfície é espelhada e lisa ou fosca e áspera. E o normal map cria a ilusão de relevo e detalhe (parafusos, ranhuras, costuras) sem adicionar polígonos de verdade. Juntos, esses mapas transformam uma malha simples num objeto rico e crível.

Os alunos já vêm de aulas em que aprenderam UVs (a aula anterior tratou de materiais e UVs). Agora eles vão usar aquele desdobramento de UV como um molde para encaixar as texturas no lugar certo. Eles vão conectar os mapas dentro do material no Maya, observar como cada canal muda a aparência do modelo e fazer ajustes finos. O foco é prático: ver, comparar e corrigir.

Por fim, a aula prepara o terreno para a próxima etapa do mês, a exportação para a Unreal. Cada tipo de mapa tem regras de cor e de espaço de cor (sRGB para base color, Linear para os dados de metallic, roughness e normal). Entender e respeitar essas regras agora evita que as texturas cheguem erradas ou desbotadas na Unreal mais tarde.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado (um por aluno) e o renderizador Arnold ativado`,
    `Projetor ou tela grande para o professor demonstrar passo a passo`,
    `Modelos prontos das aulas anteriores (personagem ou prop) com UVs já desdobradas`,
    `Pasta de exemplo com um conjunto de mapas PBR de teste: baseColor, metallic, roughness e normal`,
    `Imagem de referência de um material real (uma caixa de metal pintado ou madeira gasta) para comparar`,
    `Bloco de notas digital ou folha impressa com a tabela de espaco de cor (sRGB x Linear) por tipo de mapa`,
  ],
  conceitosChave: [
    `PBR — Physically Based Rendering; sistema em que o artista descreve as propriedades físicas do material e o motor calcula a luz.`,
    `Base Color — mapa que guarda só a cor pura da superfície, sem sombra nem brilho embutidos.`,
    `Metallic — mapa que define o que é metal (branco) e o que não é metal (preto) na superfície.`,
    `Roughness — mapa que controla a aspereza; preto deixa liso e espelhado, branco deixa fosco e áspero.`,
    `Normal Map — textura que finge relevo e detalhe na superfície sem aumentar o número de polígonos.`,
    `Espaço de cor — regra que diz como o programa interpreta uma imagem; base color usa sRGB e os mapas de dados usam Linear (Raw).`,
    `Canal de textura — entrada específica do material (cor, metallic, roughness, normal) onde cada mapa é conectado.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista 3D para conduzir esta aula. Basta entender uma ideia central: no PBR, cada textura não é uma figura bonita qualquer, ela é uma instrução para o motor. Existem quatro mapas principais. O base color é a cor crua. O metallic é uma imagem em preto e branco que separa metal de não metal. O roughness é outra imagem em preto e branco que diz se a superfície é lisa ou áspera. O normal map é aquela textura roxa e azulada que cria falsos detalhes de relevo.

A parte mais técnica, e a que mais causa erro, é o espaço de cor. O base color deve ser lido como sRGB, porque é cor que o olho humano enxerga. Os outros três (metallic, roughness e normal) são dados, não cor, então devem ser lidos como Raw (Linear). Se trocar isso, a textura chega clara demais ou escura demais na Unreal. Decore esta frase: cor é sRGB, dado é Linear.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento e revisão (10 min). Abra o modelo de um aluno com as UVs prontas. Pergunte à turma: o que é uma UV? Conduza até a resposta de que UV é o molde plano do modelo, onde a textura encaixa. Mostre rapidamente o UV Editor em UV, UV Editor para reativar a memória.

2. Conteúdo novo guiado (15 min). No projetor, explique os quatro mapas usando a referência real (a caixa de metal). Aponte: aqui a cor, aqui o que é metal, aqui o que é gasto e áspero. Em seguida crie o material. Selecione o modelo, clique com o botão direito e escolha Assign New Material, depois aiStandardSurface (o material PBR do Arnold). No Attribute Editor, clique no ícone quadriculado ao lado de Base Color e escolha File. No campo Image Name, carregue o arquivo baseColor da pasta de exemplo. Em Color Space, confirme sRGB. Repita para Metalness (carregue o mapa metallic, Color Space Raw) e para Specular Roughness (carregue o roughness, Color Space Raw).

3. Mão na massa (25 min). Os alunos refazem esses passos no próprio modelo. Para o normal map, o caminho é diferente: no nó File do normal, conecte a saída a um nó aiNormalMap e ligue esse nó ao campo Normal Camera do aiStandardSurface; defina o Color Space do arquivo como Raw. Peça que girem a câmera e observem como a luz reage a cada canal. Circule pela sala ajudando individualmente.

4. Desafio e compartilhar (10 min). Cada aluno aplica um ajuste fino e mostra à turma o antes e o depois.

Sobre código nesta aula: o trabalho é visual, feito por nós e painéis, então não há linguagem de programação aqui. Mas o Maya aceita comandos no Script Editor (linguagem MEL) que ajudam a inspecionar o material. Para listar o espaço de cor de um arquivo de textura selecionado, mostre este comando no Script Editor (aba MEL):

string sel[] = ls(-sl, -typ, "file");
print(getAttr(sel[0] + ".colorSpace"));

A primeira linha guarda na variável sel os nós do tipo file que estão selecionados. A segunda linha lê e imprime o atributo colorSpace daquele nó. Use isso para confirmar, sem clicar em menus, se um mapa está como sRGB ou Raw.

## Como explicar de forma clara (linguagem para a idade)

Compare com pintar uma miniatura. O base color é a tinta base, a cor chapada. O metallic é decidir o que recebe tinta metálica e o que não recebe. O roughness é decidir o que fica brilhante de verniz e o que fica fosco. E o normal map é como colar adesivos de relevo que parecem reais de longe, mas não pesam nada. Repita a regra de ouro: cor é sRGB, dado é Linear. Use a analogia de receita: trocar o espaço de cor é como trocar sal por açúcar, parece igual no pote, mas estraga o prato.

## Erros comuns e como ajudar

O erro mais comum é deixar todos os mapas em sRGB. Resultado: o modelo fica plástico e desbotado. Peça ao aluno que abra cada nó file e ajuste metallic, roughness e normal para Raw. Outro erro é ligar o normal direto em Base Color, deixando o modelo roxo; mostre que normal passa pelo nó aiNormalMap até Normal Camera. Se a textura não aparecer, quase sempre o caminho do arquivo está errado ou faltou ativar a visualização de textura com a tecla 6 na viewport. Por fim, se o relevo parecer invertido, basta marcar a opção Invert Y no nó aiNormalMap.`,
  exercicios: [
    {
      titulo: `Caça aos mapas: quem é quem?`,
      tipo: `Roda de conversa com identificação visual`,
      tempo: `8 min`,
      guiaProfessor: `Projete as quatro imagens dos mapas PBR (base color, metallic, roughness e normal) lado a lado, sem rótulos. Conduza a turma a nomear cada uma observando a aparência. Reforce que metallic e roughness são preto e branco e que normal é roxo e azulado.`,
      atividade: `Olhe as quatro texturas no projetor e diga, para cada uma, qual mapa PBR ela é e o que ela controla no material.`,
      gabarito: `A imagem colorida natural é o base color (define a cor pura). A imagem em preto e branco que separa metal de não metal é o metallic. A imagem em preto e branco que mostra liso x áspero é o roughness. A imagem predominantemente roxa e azulada é o normal map (cria falso relevo).`,
    },
    {
      titulo: `Montando o material PBR`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Acompanhe os alunos criando o material aiStandardSurface e conectando base color, metalness e specular roughness. Verifique de perto se cada um pressionou a tecla 6 para ver a textura na viewport. Não trate o normal ainda; ele vem no próximo exercício.`,
      atividade: `No seu modelo, crie um material aiStandardSurface e conecte os mapas de base color, metallic e roughness pelos nós File. Pressione 6 na viewport para visualizar a textura.`,
      gabarito: `O modelo deve aparecer texturizado na viewport. Caminho correto: botão direito no modelo, Assign New Material, aiStandardSurface. Ícone quadriculado ao lado de Base Color, File, carregar baseColor. Repetir em Metalness com o mapa metallic e em Specular Roughness com o mapa roughness. A tecla 6 ativa a visualização texturizada.`,
    },
    {
      titulo: `Ligando o normal map do jeito certo`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Este é o passo que mais confunde. Mostre que o normal não vai direto no material; ele passa por um nó aiNormalMap antes de chegar em Normal Camera. Verifique se o Color Space do arquivo de normal está como Raw.`,
      atividade: `Conecte o mapa de normal ao seu material usando o nó aiNormalMap ligado ao campo Normal Camera. Gire a câmera e observe o relevo surgindo conforme a luz se move.`,
      gabarito: `Fluxo correto: nó File do normal com Color Space Raw, sua saída Out Color conectada à entrada Input do nó aiNormalMap, e a saída do aiNormalMap conectada ao Normal Camera do aiStandardSurface. Ao girar a câmera, sombras e brilhos acompanham o relevo falso, confirmando que funcionou.`,
    },
    {
      titulo: `Corrigindo o espaço de cor`,
      tipo: `Diagnóstico e correção`,
      tempo: `14 min`,
      guiaProfessor: `Entregue (ou abra) uma cena propositalmente errada, com todos os mapas em sRGB. Peça que os alunos identifiquem o problema e corrijam. Incentive o uso do comando MEL para conferir o espaço de cor antes e depois da correção.`,
      atividade: `Abra a cena com erro. Descubra quais mapas estão no espaço de cor errado e corrija. Confirme cada nó file com o comando MEL no Script Editor.`,
      gabarito: `Apenas o base color deve ficar em sRGB; metallic, roughness e normal devem ir para Raw (Linear). Comando de verificação no Script Editor, aba MEL: string sel[] = ls(-sl, -typ, "file"); print(getAttr(sel[0] + ".colorSpace")); Selecionar cada nó file e ler a saída confirma a correção (cor sRGB, dado Raw).`,
    },
    {
      titulo: `Material crível em 3 ajustes`,
      tipo: `Desafio criativo e compartilhar`,
      tempo: `14 min`,
      guiaProfessor: `Proponha que cada aluno aplique três ajustes finos para deixar o material mais convincente, escolhendo entre roughness, intensidade do normal e cor base. Ao final, abra uma rodada rápida de antes e depois no projetor. Foque o elogio nas decisões físicas, não só na beleza.`,
      atividade: `Faça três ajustes para tornar seu material mais realista: por exemplo, aumente o roughness em áreas gastas, ajuste a força do normal e refine o base color. Apresente o antes e o depois para a turma em uma frase explicando cada escolha.`,
      gabarito: `Não há resposta única, mas os três ajustes devem ser coerentes com a física. Exemplos válidos: clarear o roughness onde a superfície é fosca ou gasta; ajustar o campo Strength do nó aiNormalMap para suavizar ou intensificar o relevo; corrigir o base color para uma cor mais natural. O aluno acerta quando justifica cada ajuste pela aparência física esperada (mais áspero, mais relevo, cor mais real), e não apenas por gosto.`,
    },
  ],
};
