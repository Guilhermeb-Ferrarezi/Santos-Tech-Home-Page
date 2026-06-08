import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Blueprints na prática e a ponte para o C++",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Criar uma interação funcional na cena usando Blueprints com gatilho e colisão, e entender como aquela mesma lógica seria escrita em código C++.`,
  descricao: `Nesta aula o aluno deixa de apenas montar a cena e começa a fazê-la reagir ao jogador. Até agora ele importou modelos do Maya, posicionou objetos e conheceu o que são Blueprints. Agora vamos colocar os Blueprints para trabalhar de verdade: criar uma porta que abre quando o personagem chega perto, uma luz que acende ao apertar uma tecla, ou um objeto que aparece quando o jogador entra em uma área. Isso se chama interação, e é o coração de qualquer jogo.

Para isso o aluno vai conhecer três ideias centrais. A primeira é o gatilho (trigger), uma área invisível que percebe quando algo entra ou sai dela. A segunda é a colisão, que é como a Unreal sabe que dois objetos se tocaram. A terceira é o input do jogador, que é a forma de capturar teclas e cliques. Com esses três elementos juntos, o aluno consegue montar quase qualquer interação básica de um jogo.

A grande novidade desta aula é a ponte para o C++. Cada nó que o aluno arrasta no Blueprint existe, por baixo, como uma linha de código em C++. O Blueprint é uma forma visual de programar a mesma coisa. Vamos mostrar lado a lado: o nó visual e o trecho de C++ equivalente. O aluno não precisa escrever C++ ainda, mas precisa ler e entender que as duas coisas dizem o mesmo. Aqui o Claude entra como assistente: o aluno cola um trecho simples de C++ e pede para o Claude explicar, em português, o que cada parte faz.

O resultado da aula é uma interação funcional dentro da cena do aluno, somada a uma compreensão nova: programar visualmente e programar com texto são dois caminhos para o mesmo destino. Essa ponte prepara o terreno para as próximas aulas e para a vida do aluno como criador de jogos.`,
  materiais: [
    `Computadores com Unreal Engine 5 instalado e configurado com suporte a C++ (Visual Studio ou equivalente)`,
    `Projetor ou TV para o professor mostrar os passos na tela grande`,
    `A cena que cada aluno vem montando desde a Aula 4 (com modelos importados do Maya)`,
    `Arquivo de exemplo: uma cena pronta com uma porta e um gatilho já configurados, para consulta`,
    `Trecho de exemplo de C++ (arquivo de texto) com a lógica equivalente ao Blueprint da aula`,
    `Claude aberto no navegador, para o aluno pedir explicações do código`,
    `Fones de ouvido (opcional), caso a cena tenha som ao abrir a porta`,
  ],
  conceitosChave: [
    `Gatilho (Trigger) — uma área invisível na cena que dispara uma ação quando algo entra ou sai dela.`,
    `Colisão — a forma como a Unreal percebe que dois objetos se tocaram ou se sobrepuseram.`,
    `Overlap — o tipo de colisão em que um objeto atravessa o outro sem empurrar, usado para detectar presença.`,
    `Evento (Event) — o ponto de partida de um Blueprint; é o que acontece (por exemplo, alguém entrou no gatilho) que faz a lógica começar.`,
    `Input do jogador — a captura de teclas, botões e cliques do jogador para transformar em ações no jogo.`,
    `Nó (Node) — cada bloco visual do Blueprint; cada nó equivale a um pedaço de código C++.`,
    `Função — um bloco de código com um nome que executa uma tarefa; no Blueprint aparece como um nó, no C++ aparece como texto.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar C++ para dar esta aula. Precisa entender uma ideia: tudo que o aluno monta no Blueprint poderia ser escrito como texto em C++, e é a mesma coisa por dentro. O Blueprint é visual e amigável; o C++ é texto e poderoso. Nesta aula o aluno PROGRAMA em Blueprint e apenas LÊ um pouco de C++ para enxergar a equivalência.

Três conceitos sustentam a aula. Gatilho: uma caixa invisível que avisa quando algo entra. Colisão do tipo Overlap: o objeto atravessa sem empurrar, e a Unreal dispara um evento. Input: capturar uma tecla do teclado. Se você entender esses três, conduz a aula com tranquilidade. Teste tudo uma vez antes da aula, seguindo os passos abaixo.

## Passo a passo da aula (10 / 15 / 25 / 10)

Aquecimento (10 min). Abra a cena de exemplo no projetor. Pergunte: o que faz um jogo parecer vivo? Conduza para a resposta: ele reage a você. Mostre a porta de exemplo abrindo quando o personagem chega perto. Diga que hoje cada um vai criar uma reação assim na própria cena.

Conteúdo novo guiado (15 min). Mostre como adicionar um gatilho: no painel superior, clique em Quickly add to the project, vá em Shapes e arraste um Box Trigger para a cena. Posicione na frente de uma porta ou objeto. Selecione o objeto que vai reagir, vá em Blueprints, clique em Open Blueprint Editor. Na aba Event Graph, clique com o botão direito e procure por On Actor Begin Overlap. Esse é o EVENTO: ele dispara quando algo entra no gatilho. Ligue o pino de saída do evento a um nó de ação. Para abrir a porta, use Set Actor Rotation. Conecte os fios arrastando de um pino branco a outro. Compile (botão Compile no topo) e clique em Play para testar.

Agora mostre a ponte. Diga: esse nó On Actor Begin Overlap, em C++, é uma função. Mostre no projetor o trecho equivalente, exatamente assim:

void AMinhaPorta::NotifyActorBeginOverlap(AActor* OutroAtor)
{
    FRotator NovaRotacao = FRotator(0.0f, 90.0f, 0.0f);
    SetActorRotation(NovaRotacao);
}

Explique linha a linha: a primeira linha é o nome da função que roda quando algo encosta (igual ao evento do Blueprint). FRotator guarda uma rotação com três números. SetActorRotation gira o objeto. Os dois fazem o mesmo que os nós.

Mão na massa (25 min). Cada aluno cria a própria interação na sua cena. Opção A: porta que gira com gatilho (como o exemplo). Opção B: luz que acende com tecla. Para a tecla, no Event Graph clique direito, procure a tecla (ex.: F Key Event), e ligue ao nó Set Visibility ou Toggle Visibility do componente de luz. Circule pela sala, ajudando a conectar os fios e a compilar. Cada aluno deve conseguir clicar em Play e ver a reação funcionar.

Desafio e compartilhar (10 min). Peça que cada aluno copie um trecho simples de C++ do arquivo de exemplo, cole no Claude e pergunte: o que este código faz, em português simples? O aluno lê a resposta do Claude e explica para a turma, com as próprias palavras, como aquele código se parece com o Blueprint que ele acabou de montar.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. O gatilho é como o sensor de uma porta automática de mercado: você chega perto, ela abre sozinha. O Overlap é atravessar uma cortina de miçangas: você passa, mas não empurra a parede. O evento é o sino da escola: quando toca, todo mundo sabe que é hora de agir.

Para a ponte com C++, diga: Blueprint é como montar com peças de Lego coloridas; C++ é escrever a mesma construção em uma lista de instruções. As duas chegam no mesmo brinquedo. Ninguém está errado por preferir os blocos visuais; profissionais usam os dois.

## Erros comuns e como ajudar

O aluno conecta o fio no pino errado: mostre que pinos brancos (execução) se ligam entre si, e pinos coloridos (dados) com a mesma cor. Esqueceu de compilar: lembre que toda mudança só vale depois do botão Compile. O gatilho não dispara: verifique se a colisão do Box está como Overlap All e se o personagem realmente entra na caixa. A porta gira para o lado errado: ajude a trocar o número do ângulo (90 por 90 negativo). Se o aluno colar código enorme no Claude, oriente a colar só o trecho pequeno indicado, para a explicação ficar clara.`,
  exercicios: [
    {
      titulo: `Cace os três conceitos`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Comece pelo vocabulário antes do computador. Escreva no quadro três palavras: gatilho, colisão, input. Conduza a turma a definir cada uma com exemplos do dia a dia. O objetivo é que os termos fiquem familiares antes da prática.`,
      atividade: `Em dupla, deem um exemplo do mundo real para cada termo: um gatilho, uma colisão e um input. Depois, digam onde cada um apareceria em um jogo.`,
      gabarito: `Respostas válidas, por exemplo: Gatilho = sensor da porta do mercado; no jogo, área que abre uma porta. Colisão = duas pessoas esbarrando; no jogo, o personagem batendo na parede. Input = apertar o botão do elevador; no jogo, apertar uma tecla para pular. Aceite qualquer exemplo coerente com a definição.`,
    },
    {
      titulo: `Coloque o gatilho na cena`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Acompanhe passo a passo no projetor. O foco é só adicionar e posicionar o gatilho, sem lógica ainda. Confira que todos veem o Box Trigger destacado na cena.`,
      atividade: `Na sua cena, adicione um Box Trigger em frente a um objeto: clique em Quickly add to the project, vá em Shapes e arraste o Box Trigger. Posicione bem em frente ao objeto e ajuste o tamanho para caber um personagem.`,
      gabarito: `Sucesso quando há um Box Trigger visível no World Outliner e posicionado à frente do objeto escolhido. Verificação: ao clicar nele, aparece a caixa de colisão destacada em torno da região certa.`,
    },
    {
      titulo: `O evento que dispara`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Agora entra a lógica. Mostre como abrir o Blueprint Editor e adicionar o evento de overlap. Reforce: pinos brancos ligam execução. Lembre de compilar antes de testar.`,
      atividade: `Abra o Blueprint do objeto. No Event Graph, adicione o evento On Actor Begin Overlap e ligue-o a um nó Set Actor Rotation com ângulo 90 no eixo Z. Compile e clique em Play para ver o objeto girar quando o personagem entra no gatilho.`,
      gabarito: `Solução: o Event Graph deve conter On Actor Begin Overlap com o pino de execução ligado a Set Actor Rotation, com New Rotation Z igual a 90 (Roll 0, Pitch 0, Yaw 90). Ao dar Play e entrar no gatilho, o objeto gira. Em C++ a lógica equivalente é: void AMinhaPorta::NotifyActorBeginOverlap(AActor* OutroAtor) { FRotator NovaRotacao = FRotator(0.0f, 90.0f, 0.0f); SetActorRotation(NovaRotacao); }`,
    },
    {
      titulo: `Acenda a luz com uma tecla`,
      tipo: `Prática no computador`,
      tempo: `15 min`,
      guiaProfessor: `Este exercício troca o gatilho por input do jogador. Ajude a localizar o evento da tecla e o nó de visibilidade. Quem terminar cedo pode combinar tecla e gatilho.`,
      atividade: `Adicione uma luz na cena. No Event Graph, crie o evento F Key Event e ligue ao nó Toggle Visibility da luz. Compile e teste: ao apertar F durante o Play, a luz deve acender e apagar.`,
      gabarito: `Solução: Event Graph com F Key Event (pino Pressed) ligado a Toggle Visibility do componente de luz. Ao apertar F, a luz alterna entre acesa e apagada. Em C++ a equivalência seria, dentro do SetupPlayerInputComponent: PlayerInputComponent->BindAction("Acender", IE_Pressed, this, &AMeuAtor::AlternarLuz); e a função AlternarLuz chamando MinhaLuz->ToggleVisibility();`,
    },
    {
      titulo: `Traduza o código com o Claude`,
      tipo: `Prática com IA e apresentação`,
      tempo: `15 min`,
      guiaProfessor: `Feche a aula com a ponte para o C++. Oriente o aluno a colar SÓ o trecho pequeno indicado. Peça que ele compare a explicação do Claude com o Blueprint que montou. Cada aluno apresenta em uma frase.`,
      atividade: `Copie este trecho de C++ e cole no Claude, pedindo: explique em português simples o que este código faz. Trecho: void AMinhaPorta::NotifyActorBeginOverlap(AActor* OutroAtor) { FRotator NovaRotacao = FRotator(0.0f, 90.0f, 0.0f); SetActorRotation(NovaRotacao); } Depois, diga à turma qual nó do seu Blueprint corresponde a este código.`,
      gabarito: `Resposta esperada do aluno: este código é uma função que roda quando outro objeto encosta no ator; ela cria uma rotação de 90 graus no eixo Yaw e gira o objeto. Corresponde ao evento On Actor Begin Overlap ligado ao nó Set Actor Rotation no Blueprint. O aluno acerta se reconhecer que NotifyActorBeginOverlap = o evento de overlap, e SetActorRotation = o nó que gira o objeto.`,
    },
  ],
};
