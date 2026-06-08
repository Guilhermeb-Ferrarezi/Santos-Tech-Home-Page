import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Modelos no lugar certo: tamanho e posição",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Importar vários modelos do Maya para o Roblox Studio e usar as ferramentas Mover, Girar e Escalar para deixar cada peça no tamanho e na posição certos.`,
  descricao: `Na aula passada cada criança trouxe um modelo do Maya para dentro do Roblox Studio. Hoje a turma vai dar o próximo passo: importar mais peças e colocar cada uma no lugar e no tamanho corretos. É como abrir uma caixa de brinquedos novos e arrumar todos eles em cima da mesa antes de começar a brincadeira. Sem essa arrumação, o mapa fica uma bagunça e ninguém consegue montar o mundo.

O coração da aula são três ferramentas mágicas do Roblox Studio: Mover (a setinha que empurra a peça para os lados, para frente e para cima), Girar (o anel que vira a peça como se fosse um volante) e Escalar (as bolinhas que esticam e encolhem a peça como uma massinha). Com elas, a criança transforma um modelo torto e do tamanho errado em uma peça caprichada, pronta para virar parte do cenário.

O professor não precisa ser especialista em Roblox para dar esta aula. Tudo é feito por cliques simples nos botões da barra de cima (a Toolbar) e na janela Explorer, do lado direito. A ideia é demonstrar no projetor, passo a passo, e deixar as crianças repetirem em seus computadores. O segredo é ir devagar e mostrar com as próprias mãos cada movimento.

Ao final, cada aluno terá seus modelos importados, no tamanho parecido com a vida real e organizados lado a lado, prontos para a próxima aula, quando o mapa começa a ganhar chão e itens espalhados. A meta de hoje não é montar o mundo inteiro, e sim deixar as peças arrumadas e prontas para usar.`,
  materiais: [
    `Computadores com o Roblox Studio aberto, um para cada criança, já com o projeto da turma carregado`,
    `Projetor ou TV grande ligado ao computador do professor para demonstrar cada passo`,
    `Arquivos de modelos do Maya já exportados (formato .obj ou .fbx) salvos numa pasta fácil de achar`,
    `Um projeto de exemplo pronto, com dois ou três modelos já posicionados, para mostrar o resultado final`,
    `Cartões ou cartolina com os três ícones grandes: Mover (setas), Girar (anel) e Escalar (bolinhas)`,
    `Fones de ouvido ou ambiente silencioso para a turma se concentrar`,
    `Folha de checagem simples para o aluno marcar quais modelos já arrumou`,
  ],
  conceitosChave: [
    `Importar — trazer um modelo que está guardado no computador para dentro do jogo no Roblox Studio.`,
    `Mover — empurrar a peça para os lados, para frente, para trás ou para cima usando as setinhas coloridas.`,
    `Girar — virar a peça de um lado para o outro, como rodar um volante, usando os anéis coloridos.`,
    `Escalar — esticar ou encolher a peça para deixá-la maior ou menor, puxando as bolinhas.`,
    `Eixo — os três caminhos por onde a peça anda: vermelho (X), verde (Y, para cima) e azul (Z).`,
    `Explorer — a janela do lado direito que mostra a lista de tudo que existe no jogo, como um índice.`,
    `Posição — o lugar exato onde a peça fica parada dentro do mundo do jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você vai usar três ferramentas que ficam na barra de cima do Roblox Studio, na aba "Home" (ou na aba "Model"): Move (Mover), Rotate (Girar) e Scale (Escalar). Elas aparecem como botões com desenhos de setas. Quando você clica numa peça e depois numa dessas ferramentas, aparecem alças coloridas sobre a peça. Vermelho é o eixo X (esquerda e direita), verde é o eixo Y (cima e baixo) e azul é o eixo Z (frente e trás). Para importar um modelo, use o botão "Import 3D" (ou clique com o botão direito no Workspace, dentro do Explorer, e procure por inserir objeto). Antes da aula, abra o projeto, teste importar um modelo e mexa nas três ferramentas para se sentir seguro. Tenha um exemplo pronto para mostrar o "antes e depois".

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Reúna a turma perto do projetor. Mostre o projeto de exemplo com modelos bem arrumados e pergunte: "O que aconteceria se as peças estivessem tortas e gigantes?" Relembre a aula 1, em que importaram o primeiro modelo. Mostre os cartões com os três ícones e diga o nome de cada um em voz alta.

Conteúdo novo guiado (15 min): No seu computador, no projetor, clique no botão "Import 3D" na aba Home. Escolha um arquivo do Maya na pasta e confirme. O modelo aparece no Explorer (janela da direita) e no meio da tela. Clique nele uma vez para selecioná-lo (fica com um contorno). Agora clique em "Move": surgem as setas coloridas. Arraste a seta verde para subir a peça e a vermelha para o lado. Clique em "Scale": aparecem bolinhas; puxe uma para crescer e empurre para encolher. Clique em "Rotate": aparecem anéis; gire o anel verde para virar a peça de pé. Fale cada cor e cada movimento devagar.

Mão na massa (25 min): Cada criança vai ao seu computador. Peça que importem dois ou três modelos do Maya, um de cada vez. Para cada peça: primeiro Escalar até ficar do tamanho de um móvel de verdade, depois Girar para deixar de pé e na direção certa, e por fim Mover para colocar lado a lado num cantinho organizado. Circule pela sala, ajude quem travou e elogie quem caprichou. Lembre-os de clicar na peça antes de escolher a ferramenta.

Desafio e compartilhar (10 min): Lance o desafio: "Coloque seus três modelos enfileirados, todos do mesmo tamanho, como soldados de brinquedo." Depois, dois ou três alunos giram a tela para a turma e contam qual peça foi mais difícil de arrumar. Termine pedindo que salvem com Ctrl+S.

## Como explicar para crianças

Use comparações do dia a dia. Mover é "empurrar o brinquedo na mesa". Girar é "virar o carrinho para ele apontar para a porta". Escalar é "esticar a massinha para crescer ou apertar para encolher". As setas coloridas são "trilhos": a peça só anda pelo trilho da cor que você puxar. Diga sempre: "Primeiro clica na peça, depois escolhe a ferramenta." Faça junto com eles os primeiros movimentos, contando "um, dois, três" enquanto arrasta.

## Erros comuns e como ajudar

A criança puxa a peça e ela some da tela: ela arrastou longe demais; mostre o atalho de enquadrar (selecionar a peça e usar a tecla que centraliza a câmera) ou desfazer com Ctrl+Z. A peça vira do avesso ao escalar: ela puxou a bolinha do canto; oriente puxar uma bolinha de face para crescer parelho. O modelo fica gigante ou minúsculo: ative o Scale e ajuste aos poucos, comparando com uma peça de referência. A criança clica na ferramenta sem selecionar a peça e nada acontece: reforce a ordem "peça primeiro, ferramenta depois". Alguém apaga sem querer: use Ctrl+Z para voltar e lembre de salvar com Ctrl+S no fim.`,
  exercicios: [
    {
      titulo: `Caça às três ferramentas`,
      tipo: `Reconhecimento guiado`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre os botões Move, Rotate e Scale na barra de cima, no projetor. Peça que cada criança aponte para eles na própria tela.`,
      atividade: `Encontre na sua tela os três botões: Mover, Girar e Escalar. Aponte para cada um e diga o nome em voz alta.`,
      gabarito: `Os três botões ficam na aba Home (ou Model), na barra de cima. Move tem setas, Rotate tem um anel curvo e Scale tem cantos com bolinhas. A criança acerta ao apontar os três.`,
    },
    {
      titulo: `Importando meu modelo`,
      tipo: `Prática passo a passo`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre primeiro no projetor. Acompanhe cada aluno clicando em Import 3D e escolhendo o arquivo certo na pasta.`,
      atividade: `Clique em "Import 3D", escolha um modelo do Maya na pasta e confirme. Veja a peça aparecer na tela e na lista do Explorer.`,
      gabarito: `O modelo aparece no centro da cena e o nome dele surge dentro do Workspace, na janela Explorer (lado direito). Importação correta se a peça está visível e listada.`,
    },
    {
      titulo: `Do tamanho certo`,
      tipo: `Ajuste com escala`,
      tempo: `8 minutos`,
      guiaProfessor: `Tenha uma peça de referência (ex.: um cubo do tamanho de uma mesa). Peça que comparem e ajustem aos poucos com o Scale.`,
      atividade: `Selecione seu modelo, clique em "Escalar" e deixe-o do tamanho de um móvel de verdade, nem gigante nem minúsculo.`,
      gabarito: `A peça fica parecida com o tamanho da referência. Acerto quando o modelo não está nem maior que a sala nem pequeno demais para enxergar.`,
    },
    {
      titulo: `De pé e na direção certa`,
      tipo: `Rotação`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre que o anel verde vira a peça de pé. Ajude quem girar pelo eixo errado a desfazer com Ctrl+Z.`,
      atividade: `Selecione o modelo, clique em "Girar" e use os anéis para deixar a peça de pé e apontando para frente.`,
      gabarito: `A peça fica em pé e virada para a frente, sem estar deitada ou de cabeça para baixo. Usar o anel verde costuma deixá-la de pé.`,
    },
    {
      titulo: `Soldados de brinquedo enfileirados`,
      tipo: `Desafio de organização`,
      tempo: `7 minutos`,
      guiaProfessor: `Este é o desafio final. Reúna escala, rotação e movimento. Circule e incentive o capricho; peça para salvarem com Ctrl+S.`,
      atividade: `Coloque seus três modelos enfileirados, todos do mesmo tamanho, de pé e lado a lado, como soldados de brinquedo. Depois salve.`,
      gabarito: `Os três modelos ficam em fila, com tamanhos parecidos, em pé e organizados num cantinho. O projeto é salvo com Ctrl+S. Pronto para a próxima aula.`,
    },
  ],
};
