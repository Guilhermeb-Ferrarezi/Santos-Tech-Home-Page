import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Pacote de Assets Finalizado",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Consolidar o entregável do mês — organizar, nomear e exportar todos os assets do Blender prontos para o Unity, conferindo escala, materiais e geometria limpa, e registrar esta etapa 1/4 do projeto no portfólio de games.`,
  descricao: `Esta é a aula que fecha o mês inteiro de Blender voltado para o Unity. Ao longo das sete aulas anteriores, cada aluno reencontrou o programa, estudou a geometria que o Unity entende, partiu da ideia para o bloco 3D, modelou com baixa poligonagem, mergulhou no mundo dos materiais, criou texturas que ganham vida e aprendeu o caminho de exportação para o motor de jogo. Agora chega o momento de empacotar tudo: revisar cada peça, padronizar os nomes, conferir escala e materiais, exportar no formato certo e montar o pacote final de assets. É a ponte entre a oficina de modelagem e o projeto de jogo que virá nos próximos meses.

O foco técnico desta aula é a consolidação. O aluno abre cada arquivo .blend, faz uma checagem de qualidade — geometria limpa, sem faces duplicadas nem n-gons soltos, escala aplicada e materiais nomeados —, exporta no formato FBX com as opções corretas para o Unity e organiza tudo numa pasta de pacote com subpastas claras (Models, Textures, Materials). O FBX é o formato que o Unity importa com malha, UVs e hierarquia preservadas; quando ele sai bem nomeado e na escala certa, o asset entra no jogo sem retrabalho. Esta aula não introduz técnica nova de modelagem: ela cobra capricho, padronização e organização, que são exatamente o que separa um asset de hobby de um asset de portfólio.

A aula também marca um momento especial da trilha: é a etapa 1/4 do projeto de games do ano final. Ao registrar este pacote no portfólio, o aluno deixa documentado que domina a produção de assets — a base sobre a qual ele construirá o jogo no Unity com Blender, depois o jogo na Unreal com Maya, e a experiência em Realidade Virtual. Por isso a parte de compartilhar ganha peso: cada aluno apresenta o pacote no projetor e a turma confere, em conjunto, que ele está pronto para entrar em qualquer projeto Unity.

Como esta é a última aula do mês, o professor deve garantir que NENHUM aluno termine sem o pacote montado: arquivos FBX exportados na escala certa, texturas e materiais organizados em subpastas, nomes padronizados e uma ficha curta de portfólio escrita. Esse é o critério de sucesso do mês e a primeira peça oficial do portfólio de jogos que fecha a trilha. O aluno usa o Claude como assistente para revisar a convenção de nomes e descrever o pacote na ficha, sempre conferindo cada sugestão dentro do Blender.`,
  materiais: [
    `Computadores com o Blender e o Unity instalados, cada um com os arquivos .blend dos assets que o aluno modelou ao longo do mês, salvos e carregados`,
    `Projetor ou TV para o professor demonstrar a checagem de qualidade, a exportação em FBX e a organização da pasta, e para a apresentação coletiva no fim`,
    `Arquivo de exemplo "pacote-assets-exemplo" já montado pelo professor (FBX exportado, subpastas Models, Textures e Materials e ficha preenchida) como referência de qualidade`,
    `Uma pasta-modelo combinada em cada computador (por exemplo "Pacote-Assets-Unity") com as subpastas vazias prontas para receber os arquivos`,
    `Lista de checagem impressa por bancada (escala aplicada, geometria limpa, materiais nomeados, FBX exportado, subpastas organizadas, ficha escrita) para o aluno marcar item por item`,
    `Modelo de ficha de portfólio (documento com os campos a preencher) impresso ou em arquivo, um por aluno, para registrar a etapa 1/4`,
    `Acesso ao Claude como assistente para revisar a convenção de nomes e ajudar a redigir a descrição do pacote na ficha`,
  ],
  conceitosChave: [
    `Asset — qualquer recurso pronto para o jogo (modelo 3D, textura, material); aqui, cada peça que o aluno exporta do Blender para o Unity.`,
    `FBX — formato de exportação que leva malha, UVs e hierarquia do Blender para o Unity preservando tudo o que o motor precisa.`,
    `Pacote de assets — conjunto organizado de modelos, texturas e materiais reunidos em pastas claras, pronto para entrar num projeto.`,
    `Convenção de nomes — padrão combinado para nomear arquivos (por exemplo "SM_Barril_01") que mantém o projeto limpo e fácil de achar.`,
    `Escala aplicada (Apply Scale) — "congelar" o tamanho do objeto com Ctrl A para o FBX sair na medida certa dentro do Unity.`,
    `Geometria limpa — malha sem faces duplicadas, sem n-gons soltos e sem vértices perdidos, que importa sem erro no motor.`,
    `Portfólio de games — vitrine pessoal do aluno; este pacote é a etapa 1/4, a primeira peça oficial do projeto do ano final.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Blender para conduzir esta aula. Nada de modelagem nova entra hoje: o trabalho é revisar, padronizar e exportar o que os alunos já fizeram. Antes da aula, percorra você mesmo o caminho uma vez com o arquivo de exemplo: abra o .blend, confira a escala, exporte em FBX e monte a pasta. Guarde três ideias na cabeça: o FBX é o formato que o Unity entende; a escala precisa estar aplicada antes de exportar (Ctrl A); e nome bom e pasta organizada valem tanto quanto o modelo bonito, porque é isso que faz o asset entrar no jogo sem retrabalho. Tenha a lista de checagem e a ficha de portfólio em mãos e combine a estrutura de pastas com a turma logo no começo.

## Passo a passo da aula

Aquecimento e revisão (10 min): peça que cada aluno abra os próprios arquivos .blend e liste em voz alta quantos assets fez no mês. Pergunte: "O que falta para esses modelos entrarem num jogo de verdade?". Mostre no projetor o pacote de exemplo para a turma ver onde quer chegar — pasta arrumada, nomes claros, FBX pronto.

Conteúdo novo guiado (15 min): demonstre a consolidação no projetor, passo a passo.
1. Selecionar o objeto: clique com o botão esquerdo no modelo até a borda ficar laranja.
2. Aplicar a escala: pressione Ctrl A e escolha Scale (Escala). Isso garante que o asset entre no Unity no tamanho certo.
3. Conferir a geometria: entre em Edit Mode (tecla Tab), selecione tudo (tecla A) e use o menu Mesh, Clean Up, Merge by Distance para remover vértices duplicados; volte com Tab.
4. Nomear materiais e objeto: no painel direito (Outliner), dê dois cliques no nome e use a convenção combinada, por exemplo SM_Barril_01 para o modelo e M_Barril para o material.
5. Exportar em FBX: vá em File (Arquivo), Export (Exportar), FBX (.fbx). Marque Selected Objects (Apenas Selecionados), em Transform deixe Apply Scale como FBX All, salve na subpasta Models com o nome padronizado e clique em Export FBX.
6. Organizar a pasta: mova as imagens de textura para a subpasta Textures e confira que tudo ficou no lugar.

Mão na massa (25 min): cada aluno repete a sequência em todos os seus assets, marcando a lista de checagem item por item. Circule confirmando que cada um aplicou a escala, limpou a malha e salvou o FBX na subpasta certa. Quem terminar pode arrastar o FBX para dentro de um projeto Unity aberto e ver o asset aparecer na janela Project, provando que a importação deu certo.

Desafio e compartilhar (10 min): cada aluno mostra o pacote no projetor e a turma confere os itens da lista. Em seguida, o aluno preenche a ficha de portfólio (nome do pacote, quantos assets, para que servem) registrando a etapa 1/4. Celebre cada pacote aprovado — é o entregável do mês cumprido.

## Como explicar de forma clara

Use comparações concretas. O pacote de assets é "a mochila do jogo: cada coisa no seu bolso, fácil de achar na hora". O FBX é "a mala de viagem que leva o modelo inteirinho de uma cidade (Blender) para outra (Unity) sem perder nada". Aplicar a escala é "tirar a foto do tamanho: depois de bater, o modelo não muda mais de medida". A convenção de nomes é "o sobrenome dos arquivos: assim ninguém se confunde quando houver cem peças". E diga o que mais importa: "esse pacote é a primeira página do seu portfólio de jogos — é o que você vai mostrar para provar que sabe criar assets de verdade".

## Erros comuns e como ajudar

O aluno exporta sem aplicar a escala e o asset entra gigante ou minúsculo no Unity: volte, pressione Ctrl A, Scale e exporte de novo. Esqueceu de marcar Selected Objects e o FBX sai com a câmera e a luz junto: reforce essa opção na janela de exportação. A malha importa com erro porque tem vértices duplicados: mostre o Merge by Distance em Edit Mode. Os nomes saíram bagunçados (Cube.001, Material.002): peça que renomeie no Outliner seguindo a convenção combinada, e sugira usar o Claude para revisar a lista de nomes. O aluno salva o FBX e não acha depois: combine as subpastas antes e confira o caminho na hora de exportar. Por fim, garanta que cada pacote tenha a ficha de portfólio escrita, senão a etapa 1/4 fica sem registro.`,
  exercicios: [
    {
      titulo: `Inventário dos assets do mês`,
      tipo: `Prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Oriente cada aluno a abrir os próprios arquivos .blend e listar quantos assets produziu no mês. Reforce que esta conferência é como esvaziar a mochila antes de arrumar: primeiro a gente vê tudo o que tem. Circule ajudando quem perdeu algum arquivo e estimule que cada um diga em voz alta o que cada peça representa no futuro jogo.`,
      atividade: `Abra os seus arquivos do mês no Blender e faça uma lista escrita de todos os assets que você modelou. Para cada um, anote o nome atual do arquivo e uma frase do que ele é (por exemplo "barril de madeira para o cenário"). Conte quantos assets você tem no total.`,
      gabarito: `O aluno acertou quando apresenta uma lista com todos os seus assets, cada um com nome de arquivo e uma frase de descrição, e diz o total correto. Uma lista honesta com poucos assets também é correta, desde que represente de fato o que o aluno produziu no mês.`,
    },
    {
      titulo: `Aplicar a escala e limpar a malha`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Demonstre de novo no projetor: selecionar o objeto (borda laranja), pressionar Ctrl A e escolher Scale; depois entrar em Edit Mode com Tab, selecionar tudo com A e usar Mesh, Clean Up, Merge by Distance. Explique que aplicar a escala "congela" o tamanho e que limpar a malha evita erro de importação. Acompanhe de perto, pois pular a escala é o erro que mais estraga o asset no Unity.`,
      atividade: `Escolha um dos seus assets. Selecione-o (borda laranja) e pressione Ctrl A, escolhendo Scale para congelar o tamanho. Depois entre em Edit Mode com a tecla Tab, selecione tudo com a tecla A, abra Mesh, Clean Up, Merge by Distance para remover vértices duplicados e volte com Tab.`,
      gabarito: `Está correto quando o aluno aplicou a escala com Ctrl A, Scale (a escala fica em 1.0 no painel N) e rodou o Merge by Distance, vendo a mensagem do Blender informando quantos vértices foram removidos (ou nenhum, se a malha já estava limpa). O aluno consegue explicar por que esses dois passos são necessários antes de exportar.`,
    },
    {
      titulo: `Exportar o asset em FBX`,
      tipo: `Desafio`,
      tempo: `12 min`,
      guiaProfessor: `Guie o caminho File, Export, FBX no projetor e destaque três opções: Selected Objects, em Transform o Apply Scale como FBX All, e o nome padronizado salvo na subpasta Models. Quem terminar pode arrastar o FBX para um projeto Unity aberto e ver o asset surgir na janela Project, provando que a exportação deu certo. Reforce a convenção de nomes combinada com a turma.`,
      atividade: `Com o seu asset selecionado, vá em File, Export, FBX. Marque Selected Objects, em Transform deixe Apply Scale como FBX All, dê ao arquivo um nome seguindo a convenção (por exemplo "SM_Barril_01.fbx") e salve na subpasta Models. Depois, arraste o arquivo para a janela Project de um projeto Unity aberto e confira que o asset aparece.`,
      gabarito: `Sucesso quando existe um arquivo .fbx na subpasta Models, com nome padronizado, exportado só com o objeto selecionado (sem câmera nem luz) e com a escala aplicada. Ao arrastar para o Unity, o asset aparece na janela Project com a malha e o tamanho corretos, provando que a exportação funcionou.`,
    },
    {
      titulo: `Montar o pacote e revisar em dupla`,
      tipo: `Em dupla`,
      tempo: `13 min`,
      guiaProfessor: `Forme duplas e entregue a lista de checagem (escala aplicada, geometria limpa, materiais nomeados, FBX exportado, subpastas organizadas, ficha escrita). Cada aluno termina de organizar a pasta com as subpastas Models, Textures e Materials e depois confere o pacote do colega. Reforce que apontar um problema é ajudar a deixar o portfólio melhor, não criticar. Circule para que as observações sejam concretas.`,
      atividade: `Termine de montar a sua pasta de pacote com as subpastas Models (os FBX), Textures (as imagens de textura) e Materials. Depois, em dupla, troquem de lugar: cada um abre o pacote do colega e confere a lista de checagem item por item — escala aplicada? geometria limpa? nomes padronizados? subpastas certas? Marquem juntos e anotem o que precisa de ajuste.`,
      gabarito: `Concluído quando o pacote tem as três subpastas organizadas com os arquivos no lugar certo e a dupla preenche a lista de checagem um do outro, apontando com clareza pelo menos um item aprovado e, se houver, um item a ajustar (por exemplo "o material está com nome Material.001" ou "falta o FBX na subpasta Models"). Observações vagas como "está ok" devem ser refeitas com detalhe.`,
    },
    {
      titulo: `Ficha de portfólio: etapa 1/4`,
      tipo: `Roda de conversa e projeto curto`,
      tempo: `18 min`,
      guiaProfessor: `Esta é a entrega final do mês e o registro da primeira peça do portfólio do ano. Organize a turma em roda diante do projetor. Cada aluno apresenta o pacote, a turma confirma os itens da lista e o aluno preenche a ficha de portfólio. Incentive o uso do Claude como assistente para melhorar a descrição do pacote na ficha, sempre conferindo o que foi sugerido. Celebre cada pacote aprovado como a etapa 1/4 cumprida.`,
      atividade: `Mostre o seu pacote de assets no projetor para a turma. Conte: quantos assets você fez, para que tipo de jogo eles servem e o que foi mais difícil de modelar no Blender. Junto com a turma, confirme os itens da lista de checagem. Depois, preencha a ficha de portfólio (nome do pacote, número de assets, descrição, tecnologias usadas) registrando esta etapa 1/4. Se quiser, use o Claude para deixar a descrição mais clara e confira a sugestão antes de salvar.`,
      gabarito: `Concluído quando o aluno apresenta o pacote, responde às três perguntas (quantos assets, para que servem, o que foi mais difícil), a turma confirma a lista de checagem e a ficha de portfólio está preenchida com nome do pacote, número de assets, descrição e tecnologias (Blender e FBX para Unity). O entregável do mês está cumprido: os assets prontos pro Unity, empacotados e registrados como etapa 1/4 do portfólio de games.`,
    },
  ],
};
