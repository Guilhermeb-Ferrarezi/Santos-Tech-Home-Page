import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Do Blender ao Mundo Real",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Compreender o que é um fatiador (slicer), conhecer a interface do Orca Slicer e exportar o personagem do Blender como arquivo STL ou 3MF pronto para impressão.`,
  descricao: `Esta é a aula de abertura da etapa final do mês: a hora em que o personagem que o aluno modelou no Blender começa a virar um objeto físico que ele vai poder segurar na mão. Para isso acontecer, precisamos entender uma ponte invisível entre o computador e a impressora 3D: o fatiador, também chamado de slicer. A impressora não entende o arquivo do Blender; ela só entende instruções de movimento camada por camada. O fatiador é o programa que traduz o modelo 3D nessas instruções.

Nesta aula o professor apresenta o Orca Slicer, mostra para que serve cada parte principal da tela e explica por que o modelo do Blender precisa ser exportado em um formato que a impressora e o fatiador consigam ler, como o STL ou o 3MF. O foco não é fatiar ainda (isso virá nas próximas aulas), e sim entender o caminho completo: modelo no Blender, exportação do arquivo, importação no fatiador, geração do código de impressão e, por fim, a peça real.

O grande momento prático é a exportação. Cada aluno abre seu próprio projeto do personagem no Blender e gera um arquivo STL ou 3MF limpo, com o nome certo e salvo numa pasta organizada. Esse arquivo é a matéria-prima de todas as aulas seguintes do mês, então vale a pena caprichar e conferir que ele realmente foi salvo.

Ao final, o aluno sai sabendo explicar com as próprias palavras o que é um fatiador, reconhece a interface do Orca Slicer e tem em mãos o arquivo do seu personagem pronto para ser importado na próxima aula. É uma aula de conceito e organização que prepara o terreno para a impressão de verdade.`,
  materiais: [
    `Computadores com o Orca Slicer instalado e aberto, um por aluno`,
    `Computadores com o Blender instalado e o projeto do personagem de cada aluno salvo`,
    `Projetor ou TV para o professor mostrar a tela passo a passo`,
    `Arquivo de exemplo em STL e em 3MF já prontos (um cubo simples e um personagem de demonstração)`,
    `Impressora 3D ligada na sala, apenas para mostrar de longe onde o arquivo vai parar`,
    `Uma peça já impressa de aula anterior ou de demonstração para circular entre os alunos`,
    `Pasta combinada na rede ou no desktop para todos salvarem os arquivos com o mesmo padrão de nome`,
  ],
  conceitosChave: [
    `Fatiador (slicer) — programa que transforma o modelo 3D em instruções de impressão, fatiando a peça em centenas de camadas finas.`,
    `STL — formato de arquivo que guarda só o formato externo do modelo, em triângulos; é o mais comum para impressão 3D.`,
    `3MF — formato de arquivo mais moderno que guarda o modelo e também informações extras, como cor e posição; abre muito bem no Orca Slicer.`,
    `Exportar — salvar o modelo num formato diferente do projeto original para que outro programa consiga abrir e usar.`,
    `Malha (mesh) — a casca do modelo formada por muitos triângulos; é o que o fatiador realmente lê para gerar a impressão.`,
    `G-code — a lista final de comandos que a impressora obedece; é o que o fatiador gera depois, a partir do STL ou 3MF.`,
    `Camada (layer) — cada fatia horizontal e fina em que a peça é dividida; a impressora monta a peça empilhando essas camadas.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em impressão 3D para dar esta aula. O essencial é entender a ideia da ponte: o Blender cria o modelo, mas a impressora não fala a língua do Blender. Entre os dois existe o fatiador, o Orca Slicer, que recebe um arquivo no formato STL ou 3MF e depois transforma tudo em G-code, que é a lista de comandos que a impressora obedece. Nesta aula você só precisa exportar o arquivo do Blender e abrir o Orca para mostrar a interface. Fatiar de verdade fica para as próximas aulas, então não se preocupe em acertar configurações agora.

No Orca Slicer, ao abrir, repare em três regiões: à esquerda ficam os ícones de mover, girar e escalar a peça; no centro fica a mesa de impressão (o quadrado com grade que representa a base real da impressora); à direita ficam os parâmetros de fatiamento. No topo há o botão de importar e, no canto, o botão grande de fatiar. Você só vai apontar essas áreas hoje, sem mexer a fundo.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): mostre a peça impressa de demonstração circulando entre os alunos. Pergunte: como será que esse desenho do computador virou plástico de verdade? Ouça os palpites e apresente a palavra fatiador.

Conteúdo novo guiado (15 min): no seu computador projetado, abra o Orca Slicer. Mostre a mesa de impressão no centro, os botões de mover, girar e escalar à esquerda e o painel de parâmetros à direita. Clique em Arquivo e depois Importar (ou no botão Import no topo) e abra o STL de exemplo só para mostrar o modelo aparecendo na mesa. Explique a diferença entre STL e 3MF com uma frase simples cada. Diga que na próxima aula vamos importar o personagem real de cada um.

Mão na massa (25 min): cada aluno abre o Blender com seu personagem. Peça que selecionem o personagem clicando nele. Vá em Arquivo, depois Exportar, depois escolha Stl (.stl) ou, se preferir, 3mf. Na janela de exportação, ative a opção Selection Only (Só Selecionados) para exportar apenas o personagem, escolha a pasta combinada, dê um nome claro como personagem-nome-do-aluno e clique em Export. Confira com cada aluno se o arquivo apareceu na pasta. Quem terminar antes, abre o Orca e importa o próprio arquivo para ver o personagem na mesa.

Desafio e compartilhar (10 min): peça que cada aluno explique em uma frase, com as próprias palavras, o que é um fatiador e por que precisamos exportar o arquivo. Quem quiser mostra o personagem dele já dentro do Orca no projetor.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que o fatiador é como um tradutor: o Blender fala uma língua, a impressora fala outra, e o Orca traduz. Para explicar camadas, compare com empilhar fatias de pão até montar o pão inteiro, ou com construir com peças de montar, uma fileira de cada vez. Para STL e 3MF, diga que são como tipos de embalagem: os dois guardam o personagem, mas o 3MF é uma caixa mais moderna que cabe mais informação. Evite termos técnicos demais; repita as palavras-chave várias vezes para fixar.

## Erros comuns e como ajudar

O erro mais frequente é exportar a cena inteira em vez de só o personagem; por isso insista na opção Selection Only e em selecionar o personagem antes. Outro erro é não saber onde o arquivo foi salvo: padronize a pasta e o nome para todos. Alguns alunos exportam com o objeto fora da origem ou minúsculo; tranquilize que tamanho e posição a gente acerta no Orca nas próximas aulas. Há quem clique em Export sem trocar o formato e salve em outro tipo; confira o STL ou 3MF na janela. Por fim, se o arquivo não aparece na pasta, peça para repetir o caminho Arquivo, Exportar com calma, sem pressa.`,
  exercicios: [
    {
      titulo: `Caça-botões no Orca Slicer`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Deixe o Orca aberto em cada computador. Leia o nome de cada região em voz alta e dê tempo para os alunos passarem o mouse e localizarem. Não é para clicar fundo, só identificar.`,
      atividade: `No Orca Slicer, encontre e aponte com o mouse: a mesa de impressão no centro, os botões de mover, girar e escalar à esquerda, o painel de parâmetros à direita e o botão de importar no topo.`,
      gabarito: `A mesa é o quadrado com grade no centro; mover, girar e escalar são os ícones na barra à esquerda; os parâmetros ficam no painel da direita; o botão de importar fica no topo da janela (Import ou Arquivo, Importar).`,
    },
    {
      titulo: `Exportando meu personagem`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Acompanhe aluno por aluno. Garanta que o personagem está selecionado e que a opção Selection Only está ativa antes do clique final em Export. Confira o arquivo na pasta com cada um.`,
      atividade: `No Blender, selecione seu personagem, vá em Arquivo, Exportar, Stl (.stl). Ative Selection Only, escolha a pasta combinada, dê o nome personagem-seu-nome e clique em Export. Mostre ao professor o arquivo salvo.`,
      gabarito: `O caminho correto é Arquivo, Exportar, Stl; com o personagem selecionado e Selection Only ativo, o arquivo .stl aparece na pasta combinada com o nome pedido. Sucesso é ver o arquivo na pasta.`,
    },
    {
      titulo: `STL ou 3MF, qual é qual?`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre os dois arquivos de exemplo. Deixe o aluno comparar e descrever. Aceite respostas com as próprias palavras, desde que a ideia esteja certa.`,
      atividade: `Compare o arquivo STL e o arquivo 3MF de exemplo. Escreva uma frase explicando o que os dois têm em comum e uma diferença entre eles.`,
      gabarito: `Em comum: os dois guardam o modelo 3D e podem ser abertos no Orca Slicer para impressão. Diferença: o 3MF é mais moderno e guarda informações extras, como cor e posição, enquanto o STL guarda só o formato externo em triângulos.`,
    },
    {
      titulo: `A ponte explicada em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Um aluno explica o caminho do modelo até a peça e o outro confere e completa, depois trocam. Circule ouvindo e corrigindo termos.`,
      atividade: `Em dupla, expliquem um para o outro o caminho completo: do Blender até a peça impressa. Usem as palavras fatiador, exportar, STL ou 3MF, G-code e camada.`,
      gabarito: `O caminho é: modelo feito no Blender, exportado como STL ou 3MF, importado no fatiador (Orca Slicer), que gera o G-code dividindo a peça em camadas, e a impressora imprime camada por camada até formar a peça real.`,
    },
    {
      titulo: `Por que existe o fatiador?`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Sente a turma em roda. Faça a pergunta-guia e conduza a conversa para que cada um contribua. Feche reforçando a ideia do tradutor entre o modelo e a impressora.`,
      atividade: `Em roda, respondam juntos: por que a impressora 3D não imprime direto o arquivo do Blender? O que aconteceria se o fatiador não existisse?`,
      gabarito: `A impressora só entende instruções de movimento (G-code), não o arquivo do Blender. Sem o fatiador não haveria quem traduzisse o modelo em camadas e comandos, então a impressora não saberia como montar a peça e nada seria impresso.`,
    },
  ],
};
