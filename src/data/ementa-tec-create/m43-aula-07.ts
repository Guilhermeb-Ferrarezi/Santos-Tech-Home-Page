import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Produzindo a Coleção de Assets",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Organizar uma coleção coesa de novos assets 3D, padronizando nomes, escala e materiais, e usar o Claude para checar uma lista de qualidade antes da exportação em lote.`,
  descricao: `Nesta aula o aluno deixa de pensar em um modelo isolado e passa a pensar como um produtor: o objetivo é reunir todos os assets 3D criados no mês em uma coleção organizada, pronta para virar entregável de portfólio. Até aqui cada peça foi modelada, texturizada e otimizada por conta própria; agora elas precisam conversar entre si. Uma cadeira, uma mesa e uma luminária só formam um conjunto quando compartilham a mesma escala, o mesmo padrão de nomes e a mesma lógica de materiais. É esse cuidado de organização que separa um amontoado de arquivos de uma coleção profissional.

O coração da aula é a padronização. O aluno aprende que, em estúdios de games de verdade, ninguém exporta um asset chamado "objeto1.fbx" com escala aleatória e material sem nome. Existem regras: nomes claros e sem espaços, escala aplicada e coerente entre as peças, e materiais nomeados de forma que qualquer pessoa entenda o que é. No Blender, isso acontece no Outliner (a lista de objetos no canto superior direito), no painel de transformação e no editor de materiais. O aluno vai renomear, aplicar a escala com Ctrl A e arrumar os nomes dos materiais um por um, criando uma identidade visual e técnica para a coleção.

A grande novidade pedagógica é usar o Claude como revisor de qualidade. Antes de exportar, o aluno descreve sua coleção para o Claude e pede uma checklist de revisão: nomes padronizados, escala aplicada, origem dos objetos no lugar certo, materiais nomeados, contagem de polígonos razoável. O Claude devolve uma lista clara de itens para conferir, e o aluno percorre cada ponto dentro do Blender, corrigindo o que faltou. É um treino real de processo de produção, em que a inteligência artificial funciona como um colega de equipe que ajuda a não esquecer nada.

Ao final, cada aluno terá uma coleção limpa, conferida e quase pronta para a entrega da próxima aula. Vale reforçar que essa organização é exatamente o que um recrutador ou um time de games espera ver: capricho técnico, consistência e profissionalismo. O entregável do mês começa a ganhar forma de portfólio.`,
  materiais: [
    `Computadores com o Blender instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar cada passo ao vivo`,
    `Acesso ao Claude (claude.ai) em uma aba do navegador, um por aluno`,
    `Arquivo de exemplo (.blend) com três ou quatro assets desorganizados (nomes ruins, escalas diferentes) para servir de antes e depois`,
    `Folha impressa com o padrao de nomes da turma (prefixo, separador, exemplos)`,
    `Os arquivos de assets que cada aluno produziu nas aulas anteriores deste mes`,
  ],
  conceitosChave: [
    `Coleção de assets — conjunto de modelos 3D que compartilham padrão de nomes, escala e materiais, formando um pacote coeso.`,
    `Padronização de nomes — regra combinada para nomear objetos e materiais sem espaços e com prefixos claros, como SM_Cadeira ou M_Madeira.`,
    `Aplicar escala (Apply Scale) — operação que zera a escala do objeto deixando-a em 1.0 sem mudar o tamanho visível, evitando problemas na exportação.`,
    `Origem do objeto (Origin) — ponto de referência do objeto; em assets de jogo costuma ficar na base, para encaixar bem no chão da cena.`,
    `Outliner — painel do Blender que lista todos os objetos, coleções e materiais da cena, usado para organizar e renomear.`,
    `Checklist de qualidade — lista de verificação feita antes de exportar, garantindo que nada importante foi esquecido.`,
    `Exportação em lote — processo de exportar vários objetos de uma vez, mantendo o mesmo padrão para todos.`,
  ],
  treinamento: `## O que o professor precisa saber

Você vai guiar a turma a transformar arquivos soltos em uma coleção organizada. Não precisa ser especialista em Blender: precisa entender que produção é processo, e processo tem ordem. A ordem desta aula é: primeiro padronizar nomes, depois padronizar escala e origem, depois nomear materiais e, por último, conferir tudo com uma checklist antes de exportar. Antes da aula, abra o arquivo de exemplo e localize o Outliner (lista de objetos no canto superior direito). Saiba que renomear um objeto se faz com um clique duplo no nome dentro do Outliner, e que aplicar escala se faz com o objeto selecionado, menu Object maior que Apply maior que Scale, ou o atalho Ctrl A e depois Scale. Tenha o Claude aberto numa aba para a parte da checklist.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça que cada aluno abra os próprios assets do mês na mesma cena (File maior que Append para trazer objetos de outros arquivos .blend). No projetor, mostre o arquivo de exemplo bagunçado e pergunte: o que está errado aqui? Recolha respostas (nomes ruins, tamanhos diferentes). Apresente o padrão de nomes da turma, por exemplo SM para Static Mesh e M para Material.

Conteúdo novo guiado (15 min): no Outliner, dê um clique duplo em cada nome de objeto e renomeie seguindo o padrão, como SM_Cadeira, SM_Mesa, SM_Luminaria. Depois selecione um objeto, abra o menu Object maior que Apply maior que Scale (ou Ctrl A, opção Scale) e mostre que a escala no painel lateral (tecla N) voltou para 1.0. Em seguida, com o objeto selecionado, vá em Object maior que Set Origin maior que Origin to Geometry para centralizar a origem. Por fim, abra a aba de materiais (ícone de esfera no painel de Propriedades) e renomeie o material para algo como M_Madeira.

Mão na massa (25 min): cada aluno aplica os quatro passos a todos os seus assets: renomear objetos, aplicar escala (Ctrl A maior que Scale), ajustar a origem e nomear os materiais. Circule pela sala e confira o painel N de cada um para ver se a escala está em 1.0. Quem terminar, abre o Claude e cola o seguinte pedido para gerar a checklist: Sou aluno de modelagem 3D e tenho uma colecao de assets para um jogo. Liste uma checklist de qualidade para eu conferir no Blender antes de exportar em FBX, incluindo nomes, escala, origem, materiais e polígonos. O aluno então percorre a lista item por item dentro do Blender.

Desafio e compartilhar (10 min): peça que cada aluno marque, na checklist do Claude, quais itens já estão verdes e quais ainda faltam. Projete uma ou duas coleções organizadas e celebre o capricho. Salve o arquivo com Ctrl S.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de organizar o quarto antes de receber visita: os brinquedos (assets) já existem, mas precisam ter nome na caixa, estar do mesmo tamanho de prateleira e nada largado fora do lugar. Para padronização de nomes, diga que é como o sobrenome da família: todo objeto da coleção carrega o mesmo prefixo para a gente saber que são parentes. Para aplicar escala, explique que é como ajustar o zoom de uma foto e depois salvar: por fora nada muda, mas por dentro o número volta a 1, e isso evita bagunça lá na frente. Para a checklist do Claude, fale que é como um colega que pergunta você já conferiu isto? antes de entregar a prova.

## Erros comuns e como ajudar

O erro mais comum é renomear o material no slot errado e acabar trocando o nome de outro objeto; mostre que cada objeto tem seus próprios slots de material no painel de Propriedades. O segundo erro é esquecer de aplicar a escala: peça para abrir o painel N e olhar o campo Scale, que precisa estar em 1.0 nos três eixos. O terceiro é usar espaço ou acento nos nomes, o que quebra a exportação; reforce a regra de só letras, números e o caractere de sublinhado. Outro tropeço é a origem do objeto ficar longe da peça depois de mover; lembre do menu Object maior que Set Origin. Por fim, alguns alunos copiam a resposta do Claude e param ali; insista que a checklist só vale se cada item for realmente conferido dentro do Blender, um por um.`,
  exercicios: [
    {
      titulo: `Renomeando pelo padrão da turma`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que todos saibam dar clique duplo no nome dentro do Outliner. Reforce a regra de nada de espaços ou acentos. Passe conferindo se o prefixo combinado (por exemplo SM_) foi aplicado em todos os objetos.`,
      atividade: `No Outliner, renomeie todos os seus objetos da coleção seguindo o padrão da turma, como SM_Cadeira, SM_Mesa, SM_Luminaria. Use apenas letras, números e o caractere de sublinhado, sem espaços e sem acentos.`,
      gabarito: `Todos os objetos devem aparecer no Outliner com o prefixo combinado (por exemplo SM_), nomes descritivos e sem espaços nem acentos. Exemplos válidos: SM_Cadeira, SM_Mesa, SM_Luminaria. Nenhum objeto deve permanecer com nome genérico do tipo Cube ou Object.`,
    },
    {
      titulo: `Aplicando a escala em todos os assets`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre o atalho Ctrl A seguido da opção Scale e o caminho pelo menu Object maior que Apply maior que Scale. Peça que cada aluno abra o painel lateral com a tecla N para conferir o resultado. O foco é a escala voltar a 1.0.`,
      atividade: `Selecione cada objeto da sua coleção e aplique a escala usando Ctrl A e a opção Scale. Depois abra o painel lateral com a tecla N e confira se o campo Scale ficou em 1.0 nos três eixos X, Y e Z.`,
      gabarito: `Para cada objeto, o campo Scale no painel N deve mostrar 1.0 em X, 1.0 em Y e 1.0 em Z, sem que o tamanho visível do objeto tenha mudado. Se algum eixo ainda mostrar valor diferente de 1.0, a escala não foi aplicada e precisa ser refeita.`,
    },
    {
      titulo: `Origem no lugar certo`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Explique a diferença entre Origin to Geometry (centro da peça) e mover a origem para a base. Para assets que ficam no chão, a base costuma ser melhor. Ajude quem confundir mover o objeto com mover a origem.`,
      atividade: `Para cada asset, ajuste a origem usando o menu Object maior que Set Origin. Escolha Origin to Geometry para centralizar, ou posicione a origem na base do objeto se ele for ficar apoiado no chão da cena. Confira clicando no objeto e olhando onde aparece o ponto laranja da origem.`,
      gabarito: `Cada objeto deve ter a origem (ponto laranja) coerente: no centro da geometria ou na base, conforme o uso do asset. Nenhum objeto deve ter a origem solta no espaço, longe da peça. Para assets de chão, espera-se a origem na base, encostando no plano zero.`,
    },
    {
      titulo: `Gerando a checklist com o Claude`,
      tipo: `uso do Claude`,
      tempo: `12 minutos`,
      guiaProfessor: `Oriente um prompt claro, em que o aluno diz o contexto (coleção de assets para um jogo) e pede uma checklist antes de exportar FBX. Reforce que o aluno deve conferir cada item dentro do Blender, e não apenas ler. Circule lendo as listas geradas.`,
      atividade: `Abra o Claude e escreva um pedido como: Sou aluno de modelagem 3D e tenho uma colecao de assets para um jogo. Liste uma checklist de qualidade para eu conferir no Blender antes de exportar em FBX, incluindo nomes, escala, origem, materiais e polígonos. Depois, percorra cada item da lista dentro do Blender e marque quais já estão prontos.`,
      gabarito: `O aluno deve obter do Claude uma checklist com pelo menos cinco itens cobrindo nomes padronizados, escala aplicada, origem correta, materiais nomeados e contagem de polígonos. Em seguida, deve registrar quais itens estão prontos e quais ainda faltam, mostrando que conferiu cada ponto no Blender e não apenas copiou a resposta.`,
    },
    {
      titulo: `Coleção pronta para entrega`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Este exercício fecha a coleção como base do entregável do mês. Incentive nomear materiais com o prefixo M_ e salvar o arquivo com nome claro. Faça uma roda rápida ao final para cada aluno mostrar a coleção organizada no Outliner.`,
      atividade: `Finalize sua coleção: nomeie todos os materiais com o padrão M_ (como M_Madeira, M_Metal), confira novamente a checklist do Claude e salve o arquivo como colecao-assets.blend com Ctrl S. Apresente em uma frase quantos assets a sua coleção tem e qual o tema dela.`,
      gabarito: `O arquivo salvo deve conter uma coleção com objetos renomeados pelo padrão (SM_), escala aplicada em 1.0, origens coerentes e materiais nomeados com o prefixo M_. A checklist do Claude deve estar majoritariamente atendida. O aluno deve dizer o número de assets e o tema da coleção em uma frase curta.`,
    },
  ],
};
