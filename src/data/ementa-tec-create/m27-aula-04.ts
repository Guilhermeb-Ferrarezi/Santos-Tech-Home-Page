import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Acabamento e Detalhes Finais",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Finalizar a aparência de todos os novos itens e do cenário com ajuste fino de cores, contraste entre materiais e pequenos detalhes, deixando os modelos visualmente coerentes e prontos para a etapa de otimização.`,
  descricao: `Nesta aula o aluno chega na fase mais gostosa do trabalho com o Maya: o acabamento. Os modelos já existem e já têm materiais aplicados, mas ainda parecem "crus". O nosso objetivo agora é dar vida a eles. Acabamento é a diferença entre um item que parece um rascunho e um item que parece um objeto de jogo de verdade. Tudo isso acontece ajustando cores, brilho e pequenos detalhes que o olho percebe mesmo sem saber explicar o porquê.

O conceito central da aula é o contraste. Quando todos os materiais de uma cena têm o mesmo tom, o mesmo brilho e a mesma intensidade, a cena fica "chapada" e sem profundidade. O segredo é criar diferença: uma madeira fosca ao lado de um metal brilhante, uma cor escura ao lado de uma cor clara, uma superfície lisa ao lado de uma rugosa. Esse jogo de diferenças é o que faz o cérebro entender volume e separar um objeto do outro.

O aluno vai trabalhar dentro do Hypershade e do Attribute Editor do Maya, ajustando os atributos Color e Specular Roughness dos materiais que já criou nas aulas anteriores. Vamos também conversar sobre coerência visual: todos os novos itens precisam parecer do mesmo universo, com uma paleta de cores que combina. Não adianta cada item ter uma cor escolhida ao acaso; eles formam um conjunto.

Ao fim da aula, todos os itens e o cenário estarão com a aparência finalizada. Esse é o último passo "artístico" do mês — nas próximas aulas o foco muda para otimização e exportação para o Roblox. Por isso é importante que a aula 4 deixe tudo bonito e fechado.`,
  materiais: [
    `Computadores com Autodesk Maya instalado e os arquivos dos itens das aulas anteriores`,
    `Projetor ou TV para o professor mostrar a tela do Maya passo a passo`,
    `Arquivo de exemplo "cenario-base.mb" com itens já modelados e materiais básicos aplicados`,
    `Uma paleta de cores de referência impressa ou aberta na tela (3 a 5 cores que combinam)`,
    `Imagem de referência de um objeto real para comparar contraste de materiais (ex.: foto de uma espada ou de um baú)`,
    `Mouse com scroll para cada aluno (facilita o zoom e a navegação na cena)`,
  ],
  conceitosChave: [
    `Acabamento — etapa final em que ajustamos cores, brilho e detalhes para o modelo parecer pronto e não um rascunho.`,
    `Contraste — diferença visível entre dois materiais (claro x escuro, fosco x brilhante) que cria profundidade e separa os objetos.`,
    `Specular Roughness — atributo do material que controla se a superfície é lisa e espelhada (valor baixo) ou áspera e fosca (valor alto).`,
    `Paleta de cores — conjunto pequeno de cores escolhidas para combinar entre si e dar coerência visual à cena.`,
    `Coerência visual — sensação de que todos os itens pertencem ao mesmo universo, com estilo e cores que conversam entre si.`,
    `Hypershade — janela do Maya onde criamos, vemos e editamos todos os materiais da cena em um só lugar.`,
    `Color Picker — ferramenta do Maya para escolher uma cor exata, ajustando matiz, saturação e brilho.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser um artista 3D para dar esta aula. O segredo é entender uma ideia simples: contraste é diferença. Se você colocar um objeto cinza-médio em frente a um fundo cinza-médio, ele some. Se colocar um objeto escuro em frente a um fundo claro, ele aparece. Na aula, tudo gira em torno de criar essas diferenças nos materiais.

Dois atributos resolvem 90 por cento do trabalho: o Color (a cor do material) e o Specular Roughness (o quanto a superfície é fosca ou brilhante). Um valor de Specular Roughness perto de 0 deixa a superfície lisa e espelhada (como metal polido); perto de 1 deixa áspera e fosca (como madeira ou tecido). Decore só isso e você guia a turma com tranquilidade.

Antes da aula, abra o arquivo "cenario-base.mb", abra o Hypershade (menu Windows depois Rendering Editors depois Hypershade) e clique uma vez em um material para ver o Attribute Editor aparecer à direita. Treine isso uma vez para não procurar na frente dos alunos.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: pergunte o que cada um modelou e que materiais aplicou. Mostre no projetor duas versões do mesmo item: uma "chapada" (tudo igual) e uma com contraste. Pergunte qual parece mais profissional. Eles sempre escolhem a com contraste — use isso para introduzir o tema.

15 min — Conteúdo novo guiado: abra o Hypershade e clique em um material. No Attribute Editor, mostre o campo Color: clique no retângulo colorido para abrir o Color Picker e ajuste a cor. Depois mostre o Specular Roughness: arraste o valor de 0.5 para 0.1 e diga "olha como ficou brilhante", depois para 0.8 e diga "agora ficou fosco". Faça isso devagar, narrando cada clique. Apresente a paleta de cores de referência e explique a regra: escolher cores só de dentro da paleta.

25 min — Mão na massa: cada aluno ajusta o Color e o Specular Roughness de todos os seus materiais, buscando contraste entre itens vizinhos. Eles devem usar a paleta como guia. Circule pela sala, sente ao lado de quem travar. Peça que comparem itens lado a lado na viewport para ver se há contraste de verdade.

10 min — Desafio e compartilhar: lance o desafio "ache o material que sumiu" — cada aluno procura na própria cena um item que está sem contraste com o vizinho e corrige na hora. No fim, cada um mostra a cena na TV em 30 segundos e diz qual foi o detalhe final que mais mudou a aparência.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que o material fosco é "como uma camiseta de algodão" e o brilhante é "como um celular novo na vitrine". Para contraste, peça que imaginem um personagem de roupa preta na frente de uma parede branca: ele salta aos olhos. Diga que a paleta de cores é o "uniforme" da cena: assim como um time usa as mesmas cores, os itens do jogo também usam.

Evite jargão. Em vez de "diminua o specular roughness", diga "deixa essa parte mais brilhante" e só depois aponte qual número mexer. Sempre conecte o ajuste técnico ao resultado visual que eles veem na hora.

## Erros comuns e como ajudar

O erro mais comum é exagerar no brilho: tudo vira espelho e a cena fica artificial. Ensine a usar brilho com moderação, só em metais e superfícies polidas. Outro erro é escolher cores fortes e aleatórias; lembre-os de voltar à paleta. Alguns alunos editam o material errado — mostre que o nome do material aparece no topo do Attribute Editor e que clicar no objeto na cena seleciona o material certo. Por fim, se alguém não vê o brilho mudar, confira se a viewport está em modo de visualização de materiais (tecla 6 ativa o modo texturizado).`,
  exercicios: [
    {
      titulo: `Fosco ou brilhante?`,
      tipo: `Aquecimento — observação`,
      tempo: `5 min`,
      guiaProfessor: `Mostre na TV cinco objetos (metal, madeira, plástico, tecido, vidro). Peça que a turma classifique cada um como fosco ou brilhante. Use para conectar com o atributo Specular Roughness.`,
      atividade: `Olhe os cinco objetos mostrados pelo professor e diga, para cada um, se a superfície é mais fosca ou mais brilhante. Justifique com uma palavra (ex.: "metal — brilhante porque reflete a luz").`,
      gabarito: `Respostas esperadas: metal = brilhante (Specular Roughness baixo, perto de 0.1); madeira = fosca (perto de 0.7); plástico = depende, geralmente intermediário (perto de 0.4); tecido = fosco (perto de 0.9); vidro = muito brilhante (perto de 0.05). O importante é o aluno associar brilhante a valor baixo e fosco a valor alto.`,
    },
    {
      titulo: `Ajustando a cor de um item`,
      tipo: `Prática guiada no Maya`,
      tempo: `10 min`,
      guiaProfessor: `Acompanhe a turma abrindo o Hypershade e selecionando um material. Mostre o Color Picker. Garanta que cada aluno consiga abrir e fechar a janela de cor sem se perder.`,
      atividade: `Abra o Hypershade (Windows, Rendering Editors, Hypershade). Clique em um material do seu item. No Attribute Editor, clique no retângulo do campo Color e escolha uma cor da paleta de referência. Aplique e observe a mudança na viewport.`,
      gabarito: `Passos corretos: 1) Windows > Rendering Editors > Hypershade abre a janela. 2) Um clique no material faz o Attribute Editor aparecer. 3) O clique no retângulo de Color abre o Color Picker. 4) Escolher uma cor da paleta e fechar a janela aplica a cor. Resultado: o item muda de cor na viewport. A cor deve pertencer à paleta de referência.`,
    },
    {
      titulo: `Criando contraste entre dois itens`,
      tipo: `Prática aplicada`,
      tempo: `12 min`,
      guiaProfessor: `Peça que cada aluno escolha dois itens vizinhos na cena. O objetivo é que um fique claro e o outro escuro, ou um fosco e o outro brilhante. Circule conferindo se o contraste é visível de longe.`,
      atividade: `Escolha dois itens que ficam lado a lado na sua cena. Ajuste o Color e o Specular Roughness de cada um para que fiquem claramente diferentes entre si: por exemplo, um escuro e fosco, o outro claro e brilhante. Compare na viewport olhando de longe.`,
      gabarito: `Solução esperada: o aluno define valores opostos. Exemplo válido — Item A: cor escura da paleta e Specular Roughness 0.8 (fosco); Item B: cor clara da paleta e Specular Roughness 0.15 (brilhante). Critério de aprovação: ao afastar a câmera, os dois itens se distinguem nitidamente, sem se confundirem. Se ainda parecerem iguais, aumentar a diferença de cor ou de brilho.`,
    },
    {
      titulo: `Coerência com a paleta`,
      tipo: `Análise e correção`,
      tempo: `13 min`,
      guiaProfessor: `Agora o foco é o conjunto inteiro. Peça que o aluno revise TODOS os materiais e verifique se cada cor pertence à paleta. Ajude a identificar a cor "fora do time" e a substituí-la.`,
      atividade: `Revise todos os materiais da sua cena. Encontre pelo menos um material cuja cor NÃO esteja na paleta de referência. Troque essa cor por uma cor da paleta usando o Color Picker. Anote qual item você corrigiu e por quê.`,
      gabarito: `Solução esperada: o aluno localiza um material com cor destoante (fora da paleta), abre o Color Picker e substitui por uma cor da paleta. Anotação correta deve indicar o item e a razão, por exemplo: "Corrigi a maçaneta, que estava vermelha pura, para o dourado da paleta, para combinar com os outros metais". Resultado: a cena fica com cores coerentes, sem nenhuma cor isolada destoando do conjunto.`,
    },
    {
      titulo: `O detalhe que dá vida`,
      tipo: `Desafio criativo`,
      tempo: `10 min`,
      guiaProfessor: `Desafio final mais aberto. Cada aluno adiciona UM pequeno detalhe de acabamento que melhore a aparência: uma ponta brilhante, uma sombra de cor mais escura, um realce. Incentive a explicar a escolha ao compartilhar.`,
      atividade: `Adicione um único detalhe final que faça seu item "ganhar vida": por exemplo, deixar só a lâmina de uma espada bem brilhante, ou escurecer levemente a base de um item para parecer que tem sombra. Em seguida, mostre a cena para a turma e explique em uma frase o que você mudou.`,
      gabarito: `Não há resposta única. Critérios de aprovação: 1) o aluno fez UMA mudança intencional de acabamento (cor ou Specular Roughness em uma parte específica); 2) o detalhe melhora o contraste ou a leitura do item; 3) o aluno explica a escolha. Exemplos válidos: lâmina com Specular Roughness 0.1 enquanto o cabo fica 0.8; base do item escurecida em um tom da paleta para simular sombra; ponta de metal realçada em cor clara para chamar atenção.`,
    },
  ],
};
