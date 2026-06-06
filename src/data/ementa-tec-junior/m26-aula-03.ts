import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Abrindo o modelo no Bambu Studio",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Abrir no Bambu Studio o modelo 3D feito pela própria criança e aprender a girar, mover e posicionar a peça na mesa virtual da impressora, descobrindo por que o computador precisa fatiar o modelo em camadas.`,
  descricao: `Hoje a turma conhece o programa que conversa com a impressora 3D: o Bambu Studio. Nas duas primeiras aulas do mês, as crianças entenderam como a impressora ganha vida e descobriram o segredo da magia, a impressão camada sobre camada. Agora chegou a hora de abrir o computador e ver o próprio modelo, aquele que cada criança modelou no MagicaVoxel ou no Blender, aparecer dentro do Bambu Studio, em cima de uma mesa virtual que é a cópia exata da bandeja da impressora de verdade.

O Bambu Studio é como uma sala de preparação antes da impressão. É nele que a criança coloca a peça na posição certa, olha por todos os lados, gira para deixar a parte mais bonita virada para cima e arrasta o modelo até o centro da mesa. Tudo isso acontece com o mouse: clicar e arrastar para mover, usar os botões coloridos das setas para girar. É muito visual e muito divertido, parecido com arrumar um brinquedo dentro de uma caixa antes de fechar.

Nesta aula também surge uma palavra nova e importante: fatiar, que em inglês se chama slice. A impressora não entende o modelo do jeito que a criança vê na tela, todo inteirinho. Ela precisa que o computador corte o modelo em centenas de camadas bem fininhas, uma em cima da outra, como as fatias de um pão. Hoje as crianças só descobrem o que é fatiar e por que isso é preciso; o fatiamento de verdade, com todos os ajustes, fica para a próxima aula. O objetivo de hoje é abrir, olhar, girar, mover e posicionar com confiança.

Como a turma tem no máximo dez alunos, dá para o professor demonstrar primeiro no projetor e depois acompanhar cada criança no computador dela. Ninguém fica perdido: todos terminam a aula com o próprio modelo aberto, bem posicionado no centro da mesa virtual, prontinho para a etapa de fatiar da semana seguinte.`,
  materiais: [
    `Computadores com o Bambu Studio já instalado e aberto, um para cada criança`,
    `Arquivo do modelo 3D de cada criança (formato .stl ou .3mf) salvo numa pasta fácil de achar, como a Área de Trabalho`,
    `Projetor ou TV conectado ao computador do professor para demonstrar o passo a passo`,
    `Um modelo de exemplo simples e já pronto (por exemplo, um cubo ou um boneco voxel) para o professor abrir ao vivo`,
    `Uma peça 3D já impressa de verdade, para mostrar de onde tudo começa`,
    `Um pão de forma fatiado (ou foto de um) para a analogia das camadas`,
    `Mouse com botão de rolagem em cada computador, para facilitar mover e girar`,
  ],
  conceitosChave: [
    `Bambu Studio — o programa do computador que prepara o seu modelo 3D antes de mandar para a impressora.`,
    `Modelo 3D — o desenho em três dimensões que você criou, que tem altura, largura e profundidade, como um brinquedo de verdade.`,
    `Mesa virtual (Plate) — o quadradinho que aparece na tela e que é a cópia da bandeja onde a impressora vai construir a sua peça.`,
    `Mover (arrastar) — clicar na peça e puxar com o mouse para colocá-la no lugar certo da mesa virtual.`,
    `Girar (Rotacionar) — virar o modelo para os lados usando as setas coloridas, para deixar a melhor parte para cima.`,
    `Fatiar (Slice) — o computador cortar o modelo em muitas camadas bem fininhas, como fatias de pão, para a impressora conseguir imprimir.`,
    `Camada — cada fatia bem fina que a impressora coloca, uma em cima da outra, até formar a peça inteira.`,
  ],
  treinamento: `## O que o professor precisa saber

O Bambu Studio é o programa gratuito da Bambu Lab que prepara os modelos para impressão. Você não precisa ser especialista: vamos usar só o básico de hoje. Quando você abre o programa, vê no centro da tela um quadrado claro com linhas, a mesa virtual (chamada Plate), que representa a bandeja da impressora. Em cima ficam botões; à esquerda há uma barra vertical com as ferramentas principais. As que vamos usar hoje são Move (Mover) e Rotate (Rotacionar), que aparecem como ícones de seta. Para abrir um modelo, clique em File (Arquivo), no canto superior esquerdo, e depois em Import (Importar), ou simplesmente arraste o arquivo para dentro da janela. O modelo da criança estará em .stl ou .3mf. Antes da aula, abra você mesmo o modelo de exemplo, gire e mova, para conhecer o caminho. Confirme que os arquivos das crianças estão salvos numa pasta fácil. Hoje não vamos fatiar de verdade nem imprimir: só abrir, posicionar e entender o que é fatiar.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Reúna a turma de frente para o projetor. Mostre a peça 3D já impressa e pergunte: "Lembram que a impressora faz camada sobre camada?". Mostre o pão de forma fatiado e diga que o computador precisa cortar o modelo em fatias assim. Conte que hoje vamos abrir o programa que faz isso, o Bambu Studio, e ver o modelo de cada um aparecer na tela.

15 min — Conteúdo novo guiado (demonstração). No seu computador, com o Bambu Studio aberto no projetor, faça devagar e narrando. Clique em File (Arquivo), depois em Import (Importar), encontre o modelo de exemplo e clique em Open (Abrir). Mostre o modelo surgindo na mesa virtual. Clique na ferramenta Move (Mover), na barra da esquerda, e arraste a peça para o centro. Clique em Rotate (Rotacionar) e mostre as setas coloridas (vermelha, verde e azul); gire um pouco para os lados. Use a rolagem do mouse para dar zoom e segure o botão direito para girar a câmera ao redor da peça. Por fim, aponte o botão Slice plate (Fatiar) no canto e explique: é ele que corta em fatias, mas só vamos apertar na próxima aula.

25 min — Mão na massa. Vá de mesa em mesa, ou chame uma criança de cada vez. Ajude cada uma a abrir o próprio modelo (File, Import, escolher o arquivo, Open) ou arrastar o arquivo para a janela. Depois, deixe a criança usar Move para centralizar e Rotate para girar a peça e deixar a parte mais bonita para cima. Enquanto uma trabalha, peça às outras que pensem em qual lado do modelo deve ficar virado para cima.

10 min — Desafio e compartilhar. Cada criança mostra o modelo dela bem posicionado no centro da mesa virtual e diz qual lado escolheu deixar para cima. O desafio é girar o modelo até ele ficar firme e centralizado. Encerre lembrando que, na próxima aula, vamos apertar o botão de fatiar e deixar tudo pronto para imprimir.

## Como explicar para crianças

Use a analogia da caixa de brinquedo: "O Bambu Studio é como uma caixa onde a gente arruma o brinquedo antes de fechar. A gente vira e coloca no lugar certinho." Para o girar, diga: "As setas coloridas são como um carrossel: a peça roda para você escolher o lado mais bonito para cima." Para fatiar, mostre o pão de forma: "A impressora não sabe ler o desenho inteiro de uma vez. O computador corta ele em fatias bem finas, como este pão, e a impressora vai empilhando fatia por fatia até virar a sua peça." Fale sempre apontando na tela.

## Erros comuns e como ajudar

O erro mais comum é a criança arrastar o modelo para fora da mesa virtual, e ele fica vermelho ou cinza; explique que precisa ficar dentro do quadrado e ajude a trazer de volta com Move. Outro erro é clicar e girar sem querer a câmera (botão direito) achando que está girando a peça; mostre a diferença: a peça gira com Rotate e as setas, a câmera gira com o botão direito. Algumas crianças clicam muitas vezes e abrem o modelo repetido; se aparecerem cópias, ajude a apagar selecionando e apertando Delete. Se o modelo abrir pequenininho ou enorme, não se preocupe agora, é só de visualização: use a rolagem do mouse para dar zoom. E se alguém quiser apertar o botão de fatiar antes da hora, diga com leveza que essa é a surpresa da próxima aula.`,
  exercicios: [
    {
      titulo: `Para que serve o Bambu Studio?`,
      tipo: `Pergunta oral em roda`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça no aquecimento, antes da demonstração. Mostre a tela do Bambu Studio no projetor e a peça já impressa. Deixe as crianças responderem em voz alta; aceite respostas parecidas e elogie cada tentativa, ligando a ideia de "programa que prepara o modelo".`,
      atividade: `Pergunte para a turma: "Para que será que serve este programa, o Bambu Studio, que apareceu na tela?". Deixe cada criança dar um palpite olhando para o projetor.`,
      gabarito: `O Bambu Studio é o programa que prepara o modelo 3D antes de imprimir. É nele que a gente abre o modelo, coloca na posição certa na mesa virtual e, mais tarde, manda fatiar para a impressora. Qualquer resposta nessa direção ("é onde a gente arruma a peça", "é o programa da impressora") está certa.`,
    },
    {
      titulo: `Encontrando a mesa virtual`,
      tipo: `Atividade de observação na tela`,
      tempo: `5 minutos`,
      guiaProfessor: `Logo após abrir o exemplo no projetor, peça que as crianças apontem na própria tela onde fica a mesa virtual (Plate). Passe pelos computadores confirmando. Reforce que a mesa virtual é a cópia da bandeja onde a peça vai ser construída.`,
      atividade: `No seu computador, encontre e aponte com o dedo na tela o quadradinho com linhas onde o modelo vai ficar. Esse quadrado é a mesa virtual da impressora.`,
      gabarito: `A mesa virtual (Plate) é o quadrado claro com linhas no centro da tela do Bambu Studio. Ela representa a bandeja real onde a impressora constrói a peça. A criança acerta quando aponta esse quadrado central.`,
    },
    {
      titulo: `Abrindo o meu modelo`,
      tipo: `Mão na massa guiada (prática real)`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o coração da aula. Sente-se ao lado de cada criança e conduza o caminho: clicar em File (Arquivo), depois Import (Importar), encontrar o arquivo dela na pasta, selecionar e clicar em Open (Abrir). Como alternativa, mostre que dá para arrastar o arquivo para dentro da janela. Confirme que o modelo apareceu na mesa antes de passar para a próxima criança.`,
      atividade: `Com o professor do seu lado, abra o seu próprio modelo: clique em File, depois em Import, ache o seu arquivo e clique em Open. Veja a sua criação aparecer na mesa virtual!`,
      gabarito: `O exercício está correto quando o modelo da criança aparece em cima da mesa virtual do Bambu Studio. Sinal de êxito: a peça que a criança modelou nas aulas anteriores está visível na tela, pronta para ser movida e girada.`,
    },
    {
      titulo: `Mover e centralizar a peça`,
      tipo: `Mão na massa de posicionamento`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre a ferramenta Move (Mover) na barra da esquerda. Ajude cada criança a clicar nela e arrastar o modelo para o centro da mesa. Se a peça sair do quadrado e ficar avermelhada ou acinzentada, explique que precisa voltar para dentro e ajude. Reforce que centralizar deixa a impressão mais segura.`,
      atividade: `Clique na ferramenta Move (Mover) e arraste o seu modelo até o meio da mesa virtual. Deixe a peça bem no centro, dentro do quadrado, sem encostar nas bordas.`,
      gabarito: `O exercício está correto quando o modelo fica posicionado no centro da mesa virtual, totalmente dentro do quadrado e sem ficar avermelhado ou acinzentado. A cor normal da peça mostra que ela está num lugar válido para imprimir.`,
    },
    {
      titulo: `Girar para o melhor lado e descobrir o fatiar`,
      tipo: `Desafio de posicionamento e reflexão`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre a ferramenta Rotate (Rotacionar) e as setas coloridas. Deixe cada criança girar o modelo escolhendo o lado mais bonito ou mais firme para ficar para cima. Depois, aponte o botão Slice plate (Fatiar) e pergunte o que será que ele faz, ligando ao pão fatiado. NÃO aperte o botão hoje; isso é tema da próxima aula. Use a pergunta para fixar o conceito de camadas.`,
      atividade: `Use a ferramenta Rotate (Rotacionar) e as setas coloridas para girar o seu modelo e deixar o lado mais bonito para cima. Depois, ache o botão Slice (Fatiar) na tela e diga para a turma o que você acha que ele faz com o seu modelo.`,
      gabarito: `O desafio é cumprido quando a criança gira o modelo deixando um lado escolhido para cima, com a peça ainda centralizada na mesa. Sobre o botão Slice (Fatiar): ele serve para o computador cortar o modelo em muitas camadas bem fininhas, como fatias de pão, para a impressora conseguir imprimir uma fatia em cima da outra. Aceite qualquer resposta que fale em cortar em camadas ou fatias. Importante: hoje só descobrimos o que ele faz; vamos apertar de verdade na próxima aula.`,
    },
  ],
};
