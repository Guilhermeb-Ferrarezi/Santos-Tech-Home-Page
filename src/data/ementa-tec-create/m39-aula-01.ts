import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Bem-vindos às Mãos em VR",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Configurar o XR Interaction Toolkit no projeto Unity e adicionar o rig de VR com os controles, para que o aluno veja as próprias mãos virtuais se mexerem dentro da cena.`,
  descricao: `Nesta aula o aluno dá o primeiro passo da Realidade Virtual de verdade: fazer as próprias mãos aparecerem dentro do mundo do jogo. Até aqui, nos anos anteriores da trilha, ele criou jogos vistos na tela do computador. Agora a câmera deixa de ser uma janela e passa a ser os olhos dele; e os controles do óculos viram as mãos dele dentro da cena. Esse momento costuma ser mágico, porque a pessoa olha para baixo e vê as mãos virtuais acompanhando o movimento real.

Para isso o Unity usa um pacote oficial chamado XR Interaction Toolkit. Pense nele como uma caixa de peças pronta para VR: ele já sabe conversar com o óculos, já sabe onde estão a cabeça e as mãos do jogador e já desenha os controles na cena. Sem esse pacote, o Unity não entende o óculos. Por isso a aula começa instalando e ligando esse toolkit, e só depois adiciona o rig de VR, que é o conjunto de objetos que representa o jogador (a cabeça e as duas mãos).

O conceito central de hoje é o rastreamento (tracking). O óculos tem sensores que medem, várias vezes por segundo, onde está a cabeça e onde estão os controles. O Unity recebe esses números de posição e rotação e move os objetos virtuais para o mesmo lugar. Quando o aluno mexe a mão real, a mão virtual mexe junto. Entender que isso é só posição e rotação chegando em tempo real ajuda a desmistificar a VR: não é mágica, é dado de sensor virando movimento na cena.

O entregável do mês é interagir com o mundo VR, e esta primeira aula prepara o terreno: nada de pegar objetos ainda (isso vem nas próximas aulas), só deixar o jogador entrar na cena e ver as mãos funcionando. O Claude entra como assistente para explicar cada componente que aparece no Inspector e para ajudar a turma a entender, com palavras simples, o que cada pedaço do rig faz. No fim da aula, cada aluno coloca o óculos, olha as próprias mãos virtuais e confirma que elas seguem o movimento real.`,
  materiais: [
    `Computadores com Realidade Virtual (Unity + C#) instalados e funcionando, um por aluno, com o Unity Hub e uma versão LTS do Unity`,
    `Óculos VR por aluno ou em rodízio (Meta Quest via Link, ou outro headset compatível), com cabo ou conexão sem fio testada antes da aula`,
    `Projetor ou TV para o professor mostrar os passos no Unity em tela grande`,
    `Projeto Unity de exemplo já criado com uma cena simples (chão, algumas caixas e luz) para não gastar tempo montando o cenário`,
    `Pacote XR Interaction Toolkit baixado ou internet liberada no Package Manager para instalar na hora`,
    `Espaço livre e seguro ao redor de cada aluno (sem cadeiras ou colegas no raio de braço) para mexer os controles com segurança`,
    `Lenços de limpeza para as lentes do óculos e ficha rápida com o nome dos componentes do rig`,
  ],
  conceitosChave: [
    `Realidade Virtual (VR) — tecnologia em que o jogador usa um óculos e entra dentro do mundo do jogo, olhando em volta como se estivesse lá.`,
    `XR Interaction Toolkit — pacote oficial do Unity com peças prontas para VR; ele conversa com o óculos e desenha as mãos e a cabeça do jogador.`,
    `Rig de VR — conjunto de objetos que representa o jogador na cena: a cabeça (câmera) e as duas mãos (controles).`,
    `XR Origin — o objeto principal do rig; é o ponto de referência que diz onde o jogador está dentro do mundo virtual.`,
    `Rastreamento (tracking) — quando o óculos mede onde estão a cabeça e as mãos de verdade e o Unity copia isso para os objetos virtuais.`,
    `Controller (controle) — o controle que você segura na mão; no jogo ele vira a mão virtual que se move junto com a sua.`,
    `Package Manager — a janela do Unity onde a gente instala, vê e atualiza pacotes extras, como o XR Interaction Toolkit.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Realidade Virtual para dar esta aula. Precisa entender três ideias. Primeira: o Unity só fala com o óculos depois que instalamos o XR Interaction Toolkit pelo Package Manager. Segunda: o rig de VR é só um conjunto de objetos (um XR Origin com a câmera, que é a cabeça, e dois controles, que são as mãos). Terceira: o óculos manda posição e rotação em tempo real, e o Unity copia isso para esses objetos; a isso chamamos rastreamento. Antes da aula, faça o caminho uma vez sozinho: instale o pacote, adicione o XR Origin pelo menu e entre no Play com o óculos para ver as mãos. Assim você ganha confiança e já conhece os botões.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão. No projetor, lembre a turma do que é câmera no Unity. Pergunte: como seria se a câmera fosse os seus olhos e os controles fossem as suas mãos? Mostre um vídeo curto de gameplay em VR. Combine as regras de segurança: braços longe dos colegas, ninguém corre.

15 min, conteúdo novo guiado. Abra o projeto de exemplo. Vá no menu Window e clique em Package Manager. No topo, troque o filtro para Unity Registry, busque por XR Interaction Toolkit e clique em Install. Se aparecer um aviso pedindo para reiniciar, aceite. Depois vá em Edit, Project Settings, seção XR Plug-in Management, e marque o provedor do seu óculos (por exemplo OpenXR). Agora adicione o rig: no menu superior clique em GameObject, depois XR e depois XR Origin (VR). Veja que surgiram na Hierarchy o XR Origin, uma Camera (a cabeça), e dois controles (LeftHand e RightHand). Clique em cada um e mostre no Inspector os componentes; explique que o Tracked Pose Driver é o componente que copia a posição real para o objeto virtual.

25 min, mão na massa. Cada aluno repete o caminho no próprio computador: instala o XR Interaction Toolkit, liga o XR Plug-in Management e adiciona o XR Origin (VR). Em seguida, coloca o óculos, aperta Play e confere se as mãos virtuais seguem as mãos reais. Circule pela sala. Para deixar visível sem óculos, peça que adicionem um cubo simples como mão: arraste um Cube para dentro do objeto da mão na Hierarchy. Quem quiser pode ajustar o tamanho do cubo no Inspector, em Scale, para algo como 0.1 em X, Y e Z.

10 min, desafio e compartilhar. Desafio: peça que cada aluno levante a mão virtual até a altura dos olhos e descreva o que acontece quando vira o controle (a mão gira junto). Compartilhar: em roda rápida, cada aluno diz uma palavra para descrever a sensação de ver as próprias mãos em VR.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga: o XR Interaction Toolkit é uma caixa de Lego pronta para VR; sem ela o Unity não sabe o que é um óculos. O rig de VR é o seu corpo no jogo: a câmera é a sua cabeça e os controles são as suas mãos. O rastreamento é como o óculos tirar mil fotos por segundo das suas mãos e o Unity desenhar as mãos virtuais no mesmo lugar. Evite termos soltos: fale mão virtual antes de dizer controller, e cabeça antes de dizer câmera. Peça ajuda ao Claude na tela: digite o nome de um componente e peça uma explicação em uma frase para a turma ler junto.

## Erros comuns e como ajudar

O erro mais comum é apertar Play e não ver nada: quase sempre o XR Plug-in Management está sem o provedor marcado. Abra Project Settings e marque o OpenXR (ou o do óculos). Outro erro é adicionar duas câmeras: se a tela ficar estranha, apague a Main Camera antiga, pois o XR Origin já traz a sua. Tem aluno que arrasta o cubo da mão para o lugar errado na Hierarchy; confira se o cubo ficou dentro do objeto da mão (filho dele). Se as mãos não se mexem, verifique o cabo do óculos e se o headset está ligado e detectado. Por fim, lembre a regra de segurança sempre que alguém se empolgar e esticar muito os braços.`,
  exercicios: [
    {
      titulo: `Instalando a caixa de peças da VR`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que todos abram o projeto de exemplo antes de começar. Mostre no projetor onde fica o Package Manager e o filtro Unity Registry. Acompanhe quem tem internet lenta.`,
      atividade: `No seu Unity, abra o menu Window e vá em Package Manager. Troque o filtro para Unity Registry, procure por XR Interaction Toolkit e clique em Install. Espere terminar e, se pedir, reinicie o Unity.`,
      gabarito: `Caminho correto: Window, Package Manager, filtro Unity Registry, buscar XR Interaction Toolkit, botão Install. Ao final o pacote aparece marcado como instalado na lista da esquerda. Se não aparecer, o aluno provavelmente esqueceu de trocar o filtro para Unity Registry ou a internet caiu durante o download.`,
    },
    {
      titulo: `Ligando o óculos no projeto`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre o caminho Edit, Project Settings. Aponte a seção XR Plug-in Management e explique que o provedor (OpenXR) é o que faz o Unity reconhecer o óculos.`,
      atividade: `Vá em Edit, Project Settings e clique em XR Plug-in Management. Marque o provedor do seu óculos (por exemplo OpenXR). Feche a janela e confira se não apareceu nenhuma mensagem de erro vermelha.`,
      gabarito: `Caminho correto: Edit, Project Settings, XR Plug-in Management, marcar a caixa do provedor (OpenXR ou o do headset). O provedor deve ficar com o sinal de marcado. Se aparecer um erro, geralmente falta instalar o pacote do provedor; basta clicar para instalar quando o Unity oferecer.`,
    },
    {
      titulo: `Trazendo o corpo do jogador para a cena`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Um aluno adiciona o rig e o outro confere na Hierarchy se a câmera e as duas mãos apareceram. Lembre de apagar a Main Camera antiga se houver duas.`,
      atividade: `Em dupla, adicionem o rig de VR: menu GameObject, XR, XR Origin (VR). Na Hierarchy, achem o XR Origin, a Camera (cabeça) e os dois controles (LeftHand e RightHand). Expliquem um ao outro qual objeto é a cabeça e qual é cada mão.`,
      gabarito: `Caminho correto: GameObject, XR, XR Origin (VR). Na Hierarchy devem aparecer o XR Origin com uma Camera dentro (a cabeça) e dois objetos de mão, LeftHand e RightHand. Se existirem duas câmeras na cena, a Main Camera antiga deve ser apagada, deixando só a do XR Origin. A dupla deve identificar corretamente cabeça e mãos.`,
    },
    {
      titulo: `Mãos que aparecem na cena`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre como arrastar um Cube para dentro do objeto da mão na Hierarchy, deixando o cubo como filho. Ensine a ajustar o Scale no Inspector para o cubo ficar pequeno.`,
      atividade: `Crie um Cube pelo menu GameObject, 3D Object, Cube. Arraste esse cubo para dentro do objeto da mão direita (RightHand) na Hierarchy, para ele virar filho. No Inspector, mude o Scale para 0.1 em X, Y e Z. Aperte Play com o óculos e veja se o cubo segue a sua mão.`,
      gabarito: `O cubo deve ficar como filho do objeto RightHand na Hierarchy (aparece indentado abaixo dele) e, no Play com o óculos, deve acompanhar o movimento da mão real. Caminho do cubo: GameObject, 3D Object, Cube; ajustar Scale para 0.1, 0.1, 0.1 no Inspector. Se o cubo não se mexer, ele não ficou dentro do objeto da mão; basta arrastá-lo para dentro do RightHand na Hierarchy.`,
    },
    {
      titulo: `Explicando o rastreamento com o Claude`,
      tipo: `pesquisa e explicação`,
      tempo: `13 minutos`,
      guiaProfessor: `Conduza o uso do Claude como assistente: o aluno pergunta o que faz um componente e reescreve a resposta com as próprias palavras. Valorize explicações simples e corretas, não decoreba.`,
      atividade: `Clique no objeto da mão na Hierarchy e veja no Inspector o componente Tracked Pose Driver. Pergunte ao Claude o que esse componente faz e por que a mão virtual se mexe junto com a real. Depois, escreva em duas ou três frases, com as suas palavras, como o rastreamento funciona.`,
      gabarito: `Resposta esperada, com as palavras do aluno: o componente Tracked Pose Driver pega a posição e a rotação que o óculos mede da mão real e copia para o objeto virtual; por isso a mão virtual se move junto. Rastreamento é o óculos medir várias vezes por segundo onde estão a cabeça e as mãos e o Unity colocar os objetos no mesmo lugar. Respostas que só dizem é mágica ou não sei devem ser melhoradas com ajuda do professor e do Claude, até citarem posição, rotação e tempo real.`,
    },
  ],
};
