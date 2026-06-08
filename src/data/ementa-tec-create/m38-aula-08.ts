import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Movimento em VR: Entrega do Mês",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `O aluno programa a locomoção em C# (teleporte e movimento contínuo) usando os controles, finaliza o entregável de olhar e se mover em VR e apresenta a etapa 1 de 3 do projeto.`,
  descricao: `Esta é a última aula do mês e o fechamento do primeiro entregável da experiência em Realidade Virtual: olhar e se mover em VR. Nas aulas anteriores os alunos prepararam o Unity para VR, montaram o XR Rig, construíram a primeira cena, cuidaram da luz e do conforto e aprenderam a olhar ao redor. Hoje eles fecham o ciclo programando a forma como a pessoa se desloca dentro do mundo virtual, juntando tudo em uma cena que pode ser experimentada do começo ao fim com o óculos.

Existem duas formas principais de se mover em VR, e a aula apresenta as duas. A primeira é o teleporte: o jogador aponta o controle para um ponto do chão e é levado até lá num piscar de olhos. Essa forma é muito confortável, pois o cérebro não sente o enjoo do movimento. A segunda é o movimento contínuo, em que o jogador empurra o analógico do controle e desliza pelo cenário, como em um jogo comum. O movimento contínuo é mais imersivo, mas pode causar desconforto em algumas pessoas. O aluno vai programar as duas e entender quando usar cada uma.

A parte de programação usa C# e os componentes de locomoção do XR Interaction Toolkit, o pacote oficial de VR do Unity. Em vez de escrever tudo do zero, o aluno conecta componentes prontos (Locomotion System, Teleportation Provider, Continuous Move Provider) e escreve um pequeno script em C# para deixar o teleporte ligado e desligado conforme o jogador segura o controle. O Claude entra como assistente: o aluno pede ajuda para entender uma linha de código, refinar um trecho ou descobrir por que algo não funcionou, sempre testando depois no óculos.

O fechamento da aula é a apresentação da etapa 1 de 3 do projeto VR. Cada aluno coloca o óculos, mostra para a turma que consegue olhar ao redor e se mover pela cena, e explica em poucas palavras qual das formas de locomoção escolheu e por quê. Não se avalia a complexidade do código, e sim o entregável funcionando: uma cena de VR onde a pessoa olha e se move com conforto. É uma celebração do primeiro grande marco do ano final da trilha.`,
  materiais: [
    `Computadores com Realidade Virtual (Unity + C#) instalados, com o XR Interaction Toolkit já importado e o projeto de cada aluno salvo desde as aulas anteriores.`,
    `Óculos VR por aluno ou por dupla, carregados, com os cabos e sensores testados antes da aula.`,
    `Projetor ou TV grande, ligado ao Unity de um computador, para mostrar o código e as janelas (Hierarchy, Inspector) com nitidez.`,
    `Arquivo de exemplo: uma cena VR pronta com o XR Rig e um chão grande marcado como área de teleporte, para servir de referência e plano B.`,
    `Script de exemplo TeleporteSimples.cs salvo em uma pasta de apoio, caso algum aluno precise comparar com o próprio código.`,
    `Lista com a ordem de apresentação dos alunos e um espaço livre e seguro na sala para usar o óculos sem esbarrar em móveis.`,
    `Computador com o Claude aberto, para os alunos pedirem ajuda a refinar trechos de código durante a mão na massa.`,
  ],
  conceitosChave: [
    `Locomoção — o nome do conjunto de técnicas que permitem o jogador se deslocar dentro do mundo virtual.`,
    `Teleporte — forma de locomoção em que o jogador aponta para um ponto do chão e é levado até lá instantaneamente, com pouco enjoo.`,
    `Movimento contínuo — forma de locomoção em que o jogador empurra o analógico do controle e desliza pelo cenário, mais imersiva e com mais risco de desconforto.`,
    `XR Interaction Toolkit — o pacote oficial do Unity com componentes prontos de VR, como os de interação e locomoção.`,
    `Locomotion System — o componente central que organiza e controla as formas de locomoção do XR Rig.`,
    `Teleportation Area — a área do cenário marcada como destino válido para o teleporte, normalmente o chão.`,
    `Entregável — o resultado concreto do mês que será apresentado e guardado; aqui, a cena de VR onde a pessoa olha e se move.`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula o aluno programa a locomoção em VR no Unity e fecha o primeiro entregável: olhar e se mover. Você não precisa ser especialista; basta seguir os passos. A lógica é simples: o XR Rig (o conjunto câmera + mãos que representa o jogador) já existe desde as aulas anteriores. Hoje adicionamos componentes prontos que dão movimento a ele e um pequeno script em C# para ligar e desligar o teleporte.

Conceitos para você dominar antes: o XR Interaction Toolkit traz três peças que vamos usar. O Locomotion System é o organizador; o Teleportation Provider executa o teleporte; o Continuous Move Provider faz o jogador deslizar com o analógico. Marcamos o chão com o componente Teleportation Area para dizer onde o jogador pode aparecer. Saiba entrar no modo de jogo: clique no botão Play (o triângulo no topo do Unity) para testar; clique de novo para parar. A janela Hierarchy lista os objetos da cena; a Inspector mostra os componentes do objeto selecionado.

Importante sobre o código: em C# evite strings com cifrão (interpolação). Para juntar texto, use o sinal de mais, assim: Debug.Log("Teleporte: " + ativo). Isso aparece na janela Console, embaixo, e ajuda a depurar.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

10 min - Aquecimento e revisão: Reúna a turma e pergunte: "Como você se move no mundo real e como podemos imitar isso em VR sem enjoar?". Abra o projeto de um aluno no projetor, entre no Play e mostre o olhar ao redor funcionando (entregável da Aula 7). Relembre onde ficam a Hierarchy e a Inspector. Diga que hoje damos pernas ao jogador.

15 min - Conteúdo novo guiado: No XR Rig, adicione (Add Component) o Locomotion System. Em seguida adicione o Teleportation Provider e o Continuous Move Provider; arraste o XR Rig para o campo System de cada um. No chão, selecione o objeto do piso e adicione o componente Teleportation Area. Agora mostre o script em C# que liga o teleporte enquanto o jogador segura o controle. Crie um script chamado TeleporteSimples e cole o código:

using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;

public class TeleporteSimples : MonoBehaviour
{
    public XRRayInteractor raio;
    private bool ativo = false;

    void Update()
    {
        bool segurando = Input.GetButton("Fire1");
        if (segurando != ativo)
        {
            ativo = segurando;
            raio.enabled = ativo;
            Debug.Log("Teleporte: " + ativo);
        }
    }
}

Explique: o Update roda a cada quadro; quando o jogador segura o botão, ligamos o raio que aponta para o chão; ao soltar, desligamos. O Debug.Log usa o sinal de mais para mostrar o estado no Console.

25 min - Mão na massa: Cada aluno aplica os componentes no próprio XR Rig, anexa o script e arrasta o XR Ray Interactor para o campo raio na Inspector. Pede ajuda ao Claude para entender ou refinar uma linha. Coloca o óculos e testa as duas formas: teleporte (apontar e mirar o chão) e movimento contínuo (empurrar o analógico). Ajuste a velocidade do Continuous Move Provider no campo Move Speed. Circule ajudando e lendo o Console.

10 min - Desafio e compartilhar: Cada aluno coloca o óculos e apresenta a etapa 1 de 3: olha ao redor, se move pela cena e diz qual locomoção escolheu e por quê. Puxe os aplausos a cada apresentação.

## Como explicar de forma clara (linguagem para a idade)

Para adolescentes, compare o teleporte a um "piscar": "Você aponta, pisca e já está lá, sem enjoo." Compare o movimento contínuo a um carrinho de controle: "Você empurra o analógico e desliza, mas alguns estômagos reclamam." Diga que o Update é como o coração do jogo, batendo muitas vezes por segundo para checar o que o jogador faz. Mostre você primeiro no projetor, fale frases curtas e celebre quando a cena funciona no óculos, mesmo que simples.

## Erros comuns e como ajudar

- Esquecer de arrastar o XR Rig para o campo System dos providers: sem isso a locomoção não funciona; confira na Inspector.
- Campo raio vazio no script: arraste o XR Ray Interactor para o campo na Inspector, senão dá erro de referência nula (NullReferenceException) no Console.
- Chão sem Teleportation Area: o teleporte não acha onde aparecer; selecione o piso e adicione o componente.
- Enjoo durante o teste: reduza o Move Speed, prefira o teleporte e lembre o aluno de fazer pausas com o óculos.
- Confundir Play com salvar: oriente salvar a cena com Ctrl+S antes de entrar no Play, pois mudanças feitas durante o Play se perdem ao parar.`,
  exercicios: [
    {
      titulo: `Ligar a locomoção no XR Rig`,
      tipo: `Prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Garanta que cada aluno adicione os componentes de locomoção no próprio XR Rig e ligue o System. Circule conferindo na Inspector se o Locomotion System, o Teleportation Provider e o Continuous Move Provider estão presentes e com o XR Rig arrastado para o campo System. O objetivo é ter a base de movimento pronta antes de testar.`,
      atividade: `1. Na Hierarchy, selecione o XR Rig.
2. Clique em Add Component e adicione o Locomotion System.
3. Adicione também o Teleportation Provider e o Continuous Move Provider.
4. Arraste o XR Rig para o campo System de cada um desses dois componentes na Inspector.`,
      gabarito: `Acertou quem deixa o XR Rig com os três componentes na Inspector: Locomotion System, Teleportation Provider e Continuous Move Provider, os dois últimos com o XR Rig no campo System. Exemplo de sucesso: ao clicar no XR Rig, a Inspector mostra os três componentes listados e nenhum campo System vazio. O objetivo é montar a base da locomoção antes de programar e testar.`,
    },
    {
      titulo: `Marcar o chão como área de teleporte`,
      tipo: `Prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Mostre que o teleporte só funciona onde existe uma Teleportation Area. Peça que selecionem o objeto do piso na Hierarchy e adicionem o componente. Confira que é o chão certo, e não uma parede. Depois deixe o aluno entrar no Play e apontar o raio para o chão para ver o marcador aparecer.`,
      atividade: `1. Na Hierarchy, selecione o objeto do chão (o piso da cena).
2. Clique em Add Component e adicione o componente Teleportation Area.
3. Entre no Play apertando o botão do triângulo no topo.
4. Aponte o controle para o chão e confira se aparece o marcador de destino do teleporte.`,
      gabarito: `Acertou quem deixa o chão com o componente Teleportation Area e vê o marcador de destino aparecer ao apontar o raio para o piso no Play. Exemplo de sucesso: a Inspector do piso mostra Teleportation Area e, no Play, surge um círculo ou seta indicando onde o jogador vai aparecer. O objetivo é definir uma área válida para o teleporte funcionar.`,
    },
    {
      titulo: `Mostrar o estado do teleporte no Console`,
      tipo: `Projeto curto`,
      tempo: `8 min`,
      guiaProfessor: `Peça que cada aluno crie o script TeleporteSimples, cole o código guiado e arraste o XR Ray Interactor para o campo raio na Inspector. Reforce o uso do sinal de mais no Debug.Log (sem cifrão). Deixe o aluno entrar no Play, segurar e soltar o botão e ver a mensagem mudar no Console. Ajude quem ver erro de referência nula a preencher o campo raio.`,
      atividade: `1. Crie um script chamado TeleporteSimples e cole o código da aula.
2. Anexe o script ao XR Rig e arraste o XR Ray Interactor para o campo raio na Inspector.
3. Entre no Play, segure o botão do controle e depois solte.
4. Abra a janela Console embaixo e veja a mensagem Teleporte: True quando segura e Teleporte: False quando solta.`,
      gabarito: `Acertou quem vê no Console a mensagem alternando entre Teleporte: True e Teleporte: False conforme segura e solta o botão. Solução de exemplo (linha central do script):

raio.enabled = ativo;
Debug.Log("Teleporte: " + ativo);

A saída esperada no Console é Teleporte: True ao segurar e Teleporte: False ao soltar. O objetivo é ligar o raio do teleporte pelo controle e usar o Debug.Log com sinal de mais para acompanhar o estado.`,
    },
    {
      titulo: `Ajustar o movimento contínuo com o Claude`,
      tipo: `Desafio`,
      tempo: `13 min`,
      guiaProfessor: `Deixe o aluno escolher uma forma de locomoção para refinar e pedir ajuda ao Claude. Um caminho simples: ajustar o Move Speed do Continuous Move Provider para um valor confortável. Outro: pedir ao Claude que explique uma linha do script ou sugira como soltar o raio ao apontar para fora do chão. Reforce que o aluno deve testar no óculos depois de cada mudança e nunca colar código sem entender.`,
      atividade: `1. Selecione o XR Rig e localize o Continuous Move Provider na Inspector.
2. Mude o campo Move Speed para um valor entre 1 e 3 e teste no óculos.
3. Peça ao Claude uma explicação curta de uma linha do seu script ou uma ideia de melhoria.
4. Aplique uma mudança, teste de novo no óculos e veja se ficou mais confortável.`,
      gabarito: `Acertou quem ajusta o movimento, pede ajuda ao Claude com uma pergunta clara e testa o resultado no óculos. Exemplo de sucesso: o aluno troca o Move Speed de 5 para 2 e diz que ficou mais confortável, ou cola a explicação do Claude e sabe dizer o que aquela linha faz. Exemplo de pergunta boa ao Claude: "O que faz a linha raio.enabled = ativo no meu script de teleporte?". O objetivo é refinar a locomoção com apoio do Claude, sempre testando e entendendo o código.`,
    },
    {
      titulo: `Apresentar a etapa 1 de 3 do projeto VR`,
      tipo: `Desafio`,
      tempo: `15 min`,
      guiaProfessor: `Este é o ponto alto do mês. Chame os alunos um a um pela lista. Ajude cada um a colocar o óculos com segurança e a entrar no Play. Peça que mostrem que conseguem olhar ao redor e se mover, e que digam em poucas frases qual locomoção escolheram e por quê. Quem estiver tímido pode narrar enquanto outra pessoa veste o óculos. Puxe os aplausos a cada apresentação e nunca aponte erros diante da turma.`,
      atividade: `1. Espere o professor chamar o seu nome e coloque o óculos com cuidado.
2. Mostre que você consegue olhar ao redor da cena em VR.
3. Mostre que você consegue se mover, usando teleporte ou movimento contínuo.
4. Diga em poucas frases qual forma de locomoção escolheu e por quê.`,
      gabarito: `Acertou todo aluno que apresenta o entregável funcionando: olha ao redor e se move na cena em VR, em qualquer nível. Exemplo de sucesso: o aluno coloca o óculos, vira a cabeça para ver o cenário, se teleporta até uma parede e diz "escolhi o teleporte porque não dá enjoo". Não há nota nem resposta errada; o objetivo é a etapa 1 de 3 do projeto VR entregue e a coragem de apresentar. Cada participação merece a mesma celebração.`,
    },
  ],
};
