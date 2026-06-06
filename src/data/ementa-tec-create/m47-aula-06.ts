import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Reduzindo Polígonos e Exportando FBX",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Otimizar de verdade um asset 3D no Maya, reduzindo a malha, conferindo escala e pivot, exportando em FBX e confirmando na Unreal Engine que a escala e o material aparecem corretos.`,
  descricao: `Nesta aula o aluno fecha o ciclo de produção de um asset: pega o modelo detalhado das aulas anteriores e o deixa leve, organizado e pronto para entrar no jogo. Até aqui, nas Aulas de 1 a 5, o aluno planejou, modelou, detalhou, fez o acabamento com UVs e entendeu por que a otimização importa. Agora é a hora da prática real: reduzir o número de polígonos sem perder a forma, garantir que o objeto tem o tamanho certo e o ponto de rotação no lugar, e exportar o arquivo no formato que a Unreal entende, o FBX.

O número de polígonos (também chamado de contagem de triângulos) é o que pesa na hora de o jogo rodar. Um modelo com milhões de polígonos pode ficar lindo numa imagem parada, mas trava o jogo. Reduzir polígonos é como apagar linhas de rascunho que não fazem falta: a silhueta continua reconhecível, mas o computador trabalha menos. No Maya, fazemos isso com a ferramenta Reduce e, quando preciso, apagando arestas extras na mão.

Antes de exportar, dois ajustes invisíveis fazem toda a diferença. A escala diz qual é o tamanho do objeto no mundo; se estiver errada, uma cadeira pode chegar do tamanho de um prédio na Unreal. O pivot é o ponto em torno do qual o objeto gira e se posiciona; se ele estiver flutuando longe do modelo, o asset gira de forma estranha no jogo. Por isso, antes do FBX, o aluno congela as transformações (Freeze Transformations), centraliza o pivot e confere as unidades da cena.

O foco do mês é Mais assets 3D, e o entregável são Novos assets prontos para o portfólio. Tudo o que for feito hoje precisa terminar dentro da Unreal Engine: o aluno exporta o FBX do Maya, importa no projeto da Unreal e confirma, com os próprios olhos, que o objeto chegou no tamanho certo e que o material aparece. Esse vai e volta entre Maya e Unreal é exatamente o que um artista de games profissional faz todos os dias.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e funcionando (um por aluno)`,
    `Unreal Engine instalada e um projeto de jogo já criado por aluno, com uma pasta Content para receber os assets`,
    `Projetor ou TV para o professor demonstrar os passos no Maya e na Unreal em tela grande`,
    `Arquivo de exemplo .mb ou .ma com o asset detalhado da Aula 3 ou 4, com UVs e material simples já aplicados`,
    `Pasta com a textura do asset (imagem .png ou .jpg) para reaplicar o material dentro da Unreal`,
    `Folha impressa ou slide com o checklist de exportação: reduzir, conferir escala, congelar, centralizar pivot, exportar FBX`,
  ],
  conceitosChave: [
    `Polígono (e triângulo) — a menor face que forma a malha 3D; quanto mais polígonos, mais pesado o modelo fica para o jogo.`,
    `Reduce — ferramenta do Maya que diminui automaticamente a quantidade de polígonos tentando manter a forma do objeto.`,
    `Escala (Scale) — o tamanho do objeto no mundo; precisa estar coerente com as unidades da cena para o asset chegar certo na Unreal.`,
    `Pivot — o ponto de origem do objeto, em torno do qual ele gira e se posiciona; o ideal é ficar centralizado ou na base do modelo.`,
    `Freeze Transformations — comando que zera os valores de posição, rotação e escala, deixando o objeto "limpo" antes de exportar.`,
    `FBX — formato de arquivo que carrega a malha, as UVs e os materiais, servindo de ponte entre o Maya e a Unreal Engine.`,
    `Import — processo de trazer o FBX para dentro da Unreal, criando um asset utilizável no jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Maya nem a Unreal para dar esta aula. Precisa entender quatro ideias e decorar os caminhos de clique. Primeira: reduzir polígonos deixa o jogo mais leve, e fazemos isso no menu Mesh, opção Reduce. Segunda: antes de exportar, o objeto precisa estar com a escala correta e as transformações congeladas, pelo menu Modify, opção Freeze Transformations. Terceira: o pivot deve estar no centro ou na base, e ajustamos pelo menu Modify, Center Pivot. Quarta: a exportação é feita em File, Export Selection, escolhendo o tipo FBX. Antes da aula, faça o caminho completo uma vez: abra o asset de exemplo, reduza, congele, exporte um FBX e importe na Unreal. Assim você ganha confiança e já descobre onde estão os botões na sua versão.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

10 min, aquecimento e revisão. Na tela grande, mostre o asset detalhado das aulas anteriores e o contador de polígonos. Para ligar o contador, ative no menu Display, Heads Up Display, Poly Count. Pergunte: "Por que um modelo pesado atrapalha o jogo?" Conduza até a ideia de que o computador precisa desenhar cada polígono muitas vezes por segundo.

15 min, conteúdo novo guiado. Selecione o objeto. Vá em Mesh, Reduce, abra a caixa de opções e ajuste o Reduce by percent para algo entre 40 e 60. Aplique e mostre o contador caindo, com a forma preservada. Depois confira as unidades em Windows, Settings/Preferences, Preferences, Settings, garantindo que esteja em centímetros. Use a ferramenta Scale (tecla R) para deixar o tamanho coerente. Agora vá em Modify, Freeze Transformations, para zerar os valores. Em seguida, Modify, Center Pivot, para centralizar o ponto de origem. Por fim, exporte: File, Export Selection, em File of type escolha FBX export, dê um nome sem espaços e acentos como cadeira_v1 e confirme. Na Unreal, arraste o FBX para a pasta Content ou use o botão Import; na janela de importação, confira a opção de escala e clique em Import All.

25 min, mão na massa. Cada aluno repete o ciclo completo com o próprio asset: liga o Poly Count, aplica o Reduce, confere a escala, congela transformações, centraliza o pivot, exporta o FBX com nome limpo e importa na Unreal. Dentro da Unreal, arrastam o asset para a cena (viewport) e conferem dois pontos: o tamanho está parecido com o esperado e o material aparece. Se o material vier cinza, reaplicam a textura criando um Material e ligando a imagem ao campo Base Color. Circule pela sala conferindo o contador de polígonos de cada um.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga: "Reduzir polígonos é como mandar uma foto pelo celular: você diminui o tamanho do arquivo, mas a imagem continua reconhecível." Para a escala: "É como uma escala de maquete; se você esquecer o tamanho certo, o carrinho vira do tamanho de um caminhão de verdade." Para o pivot: "É o prego onde você prende o objeto na parede; se o prego estiver longe, o quadro gira torto." Para o FBX: "É uma mochila que leva o modelo, as cores e os mapas do Maya até a Unreal." Sempre mostre o número do contador antes e depois para o aluno sentir o resultado.

## Erros comuns e como ajudar

O erro mais comum é reduzir demais e o objeto perder a forma; volte com Ctrl+Z e use uma porcentagem menor. Muitos esquecem de congelar as transformações, e o asset chega na Unreal com escala estranha; reforce o Freeze Transformations antes de exportar. Outro problema é o pivot longe do modelo, que faz o objeto pular ao posicionar; resolva com Center Pivot. Nomes com espaços ou acentos quebram o FBX; ensine a usar nomes como mesa_final. Se o material sumir na Unreal, lembre que muitas vezes só a malha vem; oriente a criar um Material e ligar a textura no Base Color. Por fim, se nada aparecer na importação, geralmente o aluno exportou sem selecionar o objeto: peça para selecionar e usar Export Selection.`,
  exercicios: [
    {
      titulo: `Ligando o contador de polígonos`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Garanta que cada aluno abra o próprio asset antes de começar. Mostre o caminho do menu Display até o Poly Count e onde o número aparece no canto da tela.`,
      atividade: `Abra o seu asset no Maya. Ligue o contador de polígonos pelo menu Display, Heads Up Display, Poly Count. Anote em um papel quantos polígonos (ou triângulos) o seu modelo tem agora, antes de qualquer redução.`,
      gabarito: `O contador deve aparecer no canto da tela mostrando Verts, Edges, Faces e Tris. Caminho correto: Display, Heads Up Display, Poly Count. O aluno deve registrar o número inicial de triângulos (Tris) do modelo selecionado; esse número será comparado depois da redução. Se nada aparecer, o objeto não estava selecionado.`,
    },
    {
      titulo: `Primeira redução com o Reduce`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre a caixa de opções do Reduce e o campo Reduce by percent. Reforce que reduzir demais estraga a forma e que dá para desfazer com Ctrl+Z.`,
      atividade: `Selecione o seu modelo e aplique o Reduce pelo menu Mesh, Reduce, com a porcentagem em 50. Compare o número de polígonos antes e depois e confira se a forma do objeto continua reconhecível.`,
      gabarito: `Após o Reduce a 50 por cento, o contador de triângulos deve cair cerca da metade, mantendo a silhueta do objeto. Caminho: Mesh, Reduce, caixa de opções, campo Reduce by percent igual a 50, aplicar. Se a forma quebrar (buracos ou pontas estranhas), o aluno deve desfazer com Ctrl+Z e usar uma porcentagem menor, como 30.`,
    },
    {
      titulo: `Escala e pivot no lugar certo`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Confira as unidades da cena em centímetros. Reforce a ordem: primeiro ajustar a escala, depois Freeze Transformations, por último Center Pivot.`,
      atividade: `Ajuste o tamanho do seu objeto com a ferramenta Scale (tecla R) para um tamanho coerente. Em seguida, congele as transformações pelo menu Modify, Freeze Transformations, e centralize o ponto de origem com Modify, Center Pivot. Verifique no Channel Box se os valores de escala voltaram para 1.`,
      gabarito: `Depois do processo, o Channel Box deve mostrar Translate em 0, Rotate em 0 e Scale em 1, e o pivot deve ficar no centro do objeto. Ordem correta: ajustar a escala com a tecla R, depois Modify, Freeze Transformations, depois Modify, Center Pivot. Se a escala não voltar para 1, o aluno esqueceu de congelar as transformações.`,
    },
    {
      titulo: `Exportando o FBX em dupla`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas: um exporta, o outro confere o nome do arquivo e a pasta. Insista em nomes sem espaços e sem acentos para o FBX não dar erro.`,
      atividade: `Em dupla, selecionem o objeto e exportem pelo menu File, Export Selection, escolhendo o tipo FBX export. Salvem com um nome limpo, como asset_final_v1, em uma pasta combinada. Confiram juntos se o arquivo .fbx apareceu na pasta certa.`,
      gabarito: `O arquivo deve ser salvo com extensão .fbx, com nome sem espaços e sem acentos, na pasta combinada. Caminho: File, Export Selection, em File of type escolher FBX export, digitar o nome e confirmar. Se aparecer um arquivo vazio ou erro, em geral o objeto não estava selecionado antes do Export Selection, ou o nome tinha espaços e acentos.`,
    },
    {
      titulo: `Mini projeto: do Maya até a Unreal`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Acompanhe a importação na Unreal e a checagem de escala. Se o material vier cinza, mostre como criar um Material e ligar a textura no campo Base Color. Lembre de arrastar o asset para a viewport.`,
      atividade: `Importe o seu FBX na Unreal arrastando o arquivo para a pasta Content e clicando em Import All. Arraste o asset para a cena e confira dois pontos: o tamanho está coerente com o esperado e o material aparece. Se o objeto estiver cinza, crie um Material, ligue a sua textura ao Base Color e aplique no asset.`,
      gabarito: `O asset deve aparecer na cena da Unreal com tamanho coerente (nem gigante nem minúsculo) e com a textura visível. Caminho: arrastar o .fbx para a pasta Content, clicar em Import All, depois arrastar o asset para a viewport. Se o objeto vier cinza, criar um Material (botão direito na pasta Content, Material), abrir o editor, arrastar a imagem da textura para o campo Base Color, salvar e aplicar no asset. Escala errada quase sempre indica que faltou o Freeze Transformations no Maya.`,
    },
  ],
};
