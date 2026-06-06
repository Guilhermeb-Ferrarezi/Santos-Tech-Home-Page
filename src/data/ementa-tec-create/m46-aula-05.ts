import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Introdução aos Blueprints",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Entender o que são Blueprints na Unreal Engine e criar um Blueprint simples que faz um objeto girar e mudar de cor, ligando nós, eventos e variáveis e testando o resultado no Play.`,
  descricao: `Nas aulas anteriores o aluno conheceu a Unreal Engine, aprendeu a navegar pelo editor e já trouxe modelos do Maya para dentro de uma cena. Tudo isso, porém, ainda é estático: os objetos estão lá, parados, esperando ganhar vida. Nesta aula entra a parte que transforma uma cena bonita em algo que se mexe e reage. Apresentamos os Blueprints, o sistema visual de programação da Unreal, a forma de dar comportamento aos objetos sem precisar escrever uma linha de código de texto.

Um Blueprint é, na prática, um programa montado com caixinhas ligadas por fios. Cada caixinha é um nó, e os fios mostram a ordem em que as coisas acontecem e quais dados passam de uma para a outra. Isso conversa diretamente com a lógica que o aluno já domina desde os anos anteriores: quando algo acontece, faça aquilo. O aluno do Ano 4 já programou em C# no Unity e já pensou em eventos, variáveis e condições. Aqui ele descobre que a Unreal oferece o mesmo poder de forma visual, o que torna o sistema de Blueprints uma ponte perfeita entre o pensamento lógico e o código C++ que virá nas próximas aulas.

A aula gira em torno de três ideias centrais. Primeiro, os eventos, que são os gatilhos: o Event BeginPlay dispara quando o jogo começa, e o Event Tick dispara a cada quadro, muitas vezes por segundo. Segundo, os nós, que são as ações e os cálculos: girar, mudar cor, somar, comparar. Terceiro, as variáveis, que são caixinhas com nome onde guardamos valores, como a velocidade de rotação ou a cor escolhida. Ligando esses três elementos, o aluno constrói um comportamento de verdade.

O projeto da aula é deliberadamente simples para caber em uma hora e gerar uma vitória rápida: um objeto que gira sozinho e troca de cor. O aluno cria um Blueprint Actor, adiciona um modelo dele, usa o Event Tick para girar a malha e o Event BeginPlay para definir uma cor inicial. No fim, ele clica em Play e vê o objeto rodando na cena que montou. Esse pequeno sucesso é o que abre a porta para os comportamentos mais ricos das próximas aulas e para a transição ao C++.`,
  materiais: [
    `Computadores com a Unreal Engine instalada e o projeto C++ do mês aberto, um por aluno`,
    `Projetor ou TV para o professor mostrar o Blueprint Editor, os painéis e as ligações de nós`,
    `Projeto de exemplo do professor com o Blueprint do objeto que gira e muda de cor já pronto e funcionando`,
    `Um modelo simples (cubo, esfera ou um asset leve vindo do Maya) para servir de corpo do Blueprint`,
    `Folha impressa com o passo a passo dos nós principais (Add Actor Local Rotation, Set Material Color, Event Tick, Event BeginPlay)`,
    `Mouse com três botões (o botão direito abre a busca de nós e o do meio movimenta o grafo)`,
  ],
  conceitosChave: [
    `Blueprint — sistema visual da Unreal para programar comportamentos arrastando e ligando caixinhas, sem escrever código de texto.`,
    `Nó (Node) — cada caixinha do Blueprint; representa uma ação, um evento ou um cálculo a ser executado.`,
    `Evento (Event) — o nó que dispara a lógica; Event BeginPlay dispara quando o jogo começa e Event Tick dispara a cada quadro.`,
    `Pino de execução (Execution pin) — a setinha branca que liga os nós e define a ordem em que as ações acontecem.`,
    `Variável (Variable) — caixinha com nome que guarda um valor, como a velocidade de giro ou a cor do objeto.`,
    `Componente (Component) — uma peça do Actor, como a malha (Static Mesh) que aparece na tela e será girada ou colorida.`,
    `Play — o botão que roda a cena no editor para o aluno ver o comportamento do Blueprint funcionando ao vivo.`,
  ],
  treinamento: `## O que o professor precisa saber

Um Blueprint é um arquivo de lógica visual da Unreal Engine. O tipo que usaremos é o Blueprint Class do tipo Actor, que é qualquer objeto que pode ficar na cena. Dentro dele há duas grandes áreas: o Viewport e o Components, onde montamos o corpo do objeto (a malha visível), e o Event Graph, onde montamos a lógica ligando nós por fios. Os fios brancos com seta são execução (a ordem das ações) e os fios coloridos são dados (números, cores, vetores). Você não precisa decorar nada: para achar um nó, basta clicar com o botão direito numa área vazia do grafo e digitar o nome. Antes da aula, abra o seu projeto de exemplo e confirme que o objeto gira e muda de cor ao clicar em Play, para mostrar o resultado pronto logo no início.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): no projetor, abra a cena que os alunos montaram nas aulas passadas, com os objetos parados. Pergunte: "O que falta para isso virar um jogo? Movimento, vida!". Lembre que no Unity eles usavam C# para isso. Anuncie que na Unreal vamos programar de outro jeito, com caixinhas e fios, e mostre por dois segundos o seu objeto de exemplo girando colorido.

Conteúdo novo guiado (15 min): crie o Blueprint na frente de todos. No painel Content Browser, clique em Add, depois Blueprint Class, e escolha Actor. Nomeie como BP_ObjetoGira. Clique duas vezes para abrir o Blueprint Editor. No painel Components (canto superior esquerdo), clique em Add e escolha Static Mesh; no painel Details à direita, no campo Static Mesh, escolha um cubo ou esfera. Agora vá para a aba Event Graph. Mostre o Event BeginPlay e o Event Tick que já vêm prontos. Clique com o botão direito no grafo, busque por Add Actor Local Rotation e arraste o pino de execução do Event Tick até ele. No campo Delta Rotation desse nó, coloque Yaw igual a 2. Pronto, isso já gira o objeto.

Mão na massa (25 min): cada aluno reproduz no próprio projeto. Primeiro cria o BP_ObjetoGira, adiciona a Static Mesh e liga o Event Tick ao Add Actor Local Rotation com Yaw 2. Depois arrasta o Blueprint do Content Browser para dentro da cena. Clica em Compile, depois em Save, e por fim em Play para ver girar. Quem terminar parte para a cor: criar uma variável de Material e, no Event BeginPlay, usar Set Material no componente de malha. Circule pela sala ajudando individualmente; o ponto mais delicado é ligar os fios no pino certo.

Desafio + compartilhar (10 min): peça que criem uma variável chamada Velocidade do tipo Float, com valor 2, e usem ela no lugar do número fixo no Yaw, arrastando a variável para o grafo. Cada aluno mostra rapidamente o objeto girando na sua cena e diz qual valor de velocidade escolheu.

## Como explicar de forma clara (linguagem para a idade)

Compare o Blueprint a montar com blocos de Lego ou a um fluxograma de receita: "primeiro isso, depois aquilo". Diga que cada caixinha é uma ordem e o fio branco é a setinha que mostra a fila de tarefas. Use a analogia que eles já conhecem do C# no Unity: "lembram do Update que rodava o tempo todo? O Event Tick é o mesmo, roda a cada quadro". Para a variável, repita a ideia de caixinha com nome: "Velocidade é uma etiqueta colada num número". Para a cor, diga que o Material é a roupa do objeto, e que estamos trocando a roupa quando o jogo começa.

## Erros comuns e como ajudar

O erro mais comum é esquecer de clicar em Compile e Save antes do Play, e então nada acontece. Crie o hábito de Compile + Save + Play. Outro erro é ligar o fio no pino errado: o pino de execução é a seta branca no topo do nó, não os pinos coloridos de dados; mostre a diferença no projetor. Muitos esquecem de arrastar o Blueprint para a cena e tentam dar Play sem o objeto estar lá. Alguns colocam o giro no Event BeginPlay, e ele gira só uma vez; lembre que giro contínuo precisa do Event Tick. Por fim, há quem coloque um Yaw gigante (tipo 100) e o objeto vira um borrão; sugira valores pequenos como 1 ou 2.`,
  exercicios: [
    {
      titulo: `Criando o primeiro Blueprint`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Acompanhe pelo projetor enquanto cada aluno cria o Blueprint. Confirme um a um que escolheram Blueprint Class do tipo Actor e que adicionaram uma Static Mesh visível no Viewport. O ponto de atenção é escolher o tipo Actor, e não outro tipo da lista.`,
      atividade: `No Content Browser, clique em Add, depois Blueprint Class, e escolha Actor. Nomeie o arquivo como BP_ObjetoGira. Abra o Blueprint com dois cliques, vá ao painel Components, clique em Add, escolha Static Mesh e, no painel Details, defina a malha como um cubo ou uma esfera.`,
      gabarito: `Existe um Blueprint chamado BP_ObjetoGira do tipo Actor no Content Browser. Ao abri-lo, o painel Components mostra um Static Mesh com um cubo ou esfera, visível no Viewport. Forma correta: Add > Blueprint Class > Actor; depois Components > Add > Static Mesh; e em Details escolher a malha.`,
    },
    {
      titulo: `Fazendo o objeto girar`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Verifique se cada aluno ligou o pino de execução (a seta branca) do Event Tick até o nó Add Actor Local Rotation. O erro comum é ligar num pino de dados colorido. Lembre o ciclo Compile, Save, Play e de arrastar o Blueprint para a cena antes de testar.`,
      atividade: `Na aba Event Graph, clique com o botão direito numa área vazia e busque por Add Actor Local Rotation. Ligue o pino de execução do Event Tick até esse nó. No campo Delta Rotation, defina Yaw igual a 2. Arraste o BP_ObjetoGira para a cena, clique em Compile, depois Save e depois Play.`,
      gabarito: `O Event Tick está ligado pelo pino de execução ao nó Add Actor Local Rotation, com Yaw igual a 2 no Delta Rotation. O Blueprint foi arrastado para a cena. Ao clicar em Play, o objeto gira continuamente. Se nada acontecer, geralmente falta Compile/Save ou o objeto não foi colocado na cena.`,
    },
    {
      titulo: `Guardando a velocidade numa variável`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Aqui o aluno troca o número fixo por uma variável. Reforce que ao criar a variável é preciso clicar em Compile para poder definir o valor padrão. Mostre como arrastar a variável para o grafo e escolher Get para usar o valor dela.`,
      atividade: `No painel My Blueprint, clique no mais ao lado de Variables e crie uma variável chamada Velocidade do tipo Float. Clique em Compile e defina o valor padrão como 2. Arraste a variável para o grafo, escolha Get, e ligue o valor dela no campo Yaw do nó Add Actor Local Rotation no lugar do número fixo. Teste no Play e depois mude o valor para 5.`,
      gabarito: `Existe uma variável Velocidade do tipo Float com valor padrão 2. No grafo, um nó Get Velocidade está ligado ao campo Yaw do Add Actor Local Rotation. Ao dar Play, o objeto gira na velocidade da variável; mudando o valor para 5 e dando Play de novo, ele gira mais rápido. Forma correta: criar a variável Float, Compile, definir o padrão e usar o Get no Yaw.`,
    },
    {
      titulo: `Trocando a cor no início do jogo`,
      tipo: `em dupla`,
      tempo: `15 minutos`,
      guiaProfessor: `Forme duplas para que um confira o trabalho do outro. O foco é usar o Event BeginPlay para definir uma cor, mostrando que esse evento roda uma só vez no começo. Tenha um Material Instance dinâmico simples preparado, ou use Set Vector Parameter Value caso o material já tenha um parâmetro de cor.`,
      atividade: `Em dupla, no Event Graph, arrastem o componente Static Mesh para o grafo. A partir dele, busquem por Create Dynamic Material Instance e liguem o Event BeginPlay a esse nó. Em seguida, do resultado, busquem Set Vector Parameter Value, escolham o parâmetro de cor do material e definam uma cor (por exemplo, vermelho). Compilem, salvem e deem Play para ver o objeto começar já colorido.`,
      gabarito: `O Event BeginPlay está ligado a um Create Dynamic Material Instance feito a partir do Static Mesh, e em seguida a um Set Vector Parameter Value que define a cor escolhida. Ao dar Play, o objeto aparece desde o início com a nova cor enquanto gira. O ponto-chave é que a cor entra no Event BeginPlay porque só precisa ser definida uma vez, ao começo do jogo.`,
    },
    {
      titulo: `Meu objeto vivo na cena`,
      tipo: `projeto curto`,
      tempo: `14 minutos`,
      guiaProfessor: `Este exercício junta tudo: giro com variável e cor no início. Apoie quem ainda não terminou a cor. Ao final, abra uma roda rápida para cada aluno mostrar o objeto vivo na cena e dizer o que mudaria para deixar mais legal. Aproveite para citar que tudo isso tem um equivalente em código C++, que virá na próxima aula.`,
      atividade: `Junte os passos anteriores num só Blueprint: o objeto deve girar usando a variável Velocidade no Event Tick e começar com uma cor definida no Event BeginPlay. Ajuste a velocidade e a cor ao seu gosto, posicione o objeto num lugar bonito da sua cena e deixe o conjunto rodando. Apresente para a turma explicando qual evento faz cada coisa.`,
      gabarito: `O Blueprint final tem o Event Tick ligado ao Add Actor Local Rotation usando a variável Velocidade no Yaw, e o Event BeginPlay ligado à lógica que define a cor inicial do material. Ao dar Play, o objeto aparece colorido e girando dentro da cena do aluno. Na explicação, o aluno deve identificar que o Event Tick cuida do giro contínuo (roda a cada quadro) e o Event BeginPlay cuida da cor (roda uma vez no início).`,
    },
  ],
};
