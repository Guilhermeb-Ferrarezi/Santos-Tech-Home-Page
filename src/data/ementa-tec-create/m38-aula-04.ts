import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Configurando o XR Rig",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Adicionar e configurar o XR Origin (Rig) com câmera e controles na cena do Unity, ajustar as definições de XR e validar o projeto VR funcionando em modo de teste.`,
  descricao: `Nas aulas anteriores deste mês o aluno entendeu o que é Realidade Virtual, como o headset engana o cérebro e como preparar o Unity com os pacotes certos de XR. Agora chegou o momento de colocar dentro da cena a peça mais importante de qualquer projeto VR: o XR Origin, também chamado de XR Rig. Ele é o conjunto que representa o corpo e a cabeça do jogador dentro do mundo virtual.

O XR Origin é o que conecta os movimentos reais da pessoa (mover a cabeça, virar o pescoço, segurar os controles) com a câmera e os objetos dentro do Unity. Sem ele, a cena até existe, mas ninguém consegue entrar nela com o óculos. Com ele bem configurado, a câmera passa a obedecer ao headset e os dois controles aparecem como mãos virtuais. É a diferença entre olhar uma maquete por fora e entrar de verdade dentro dela.

Nesta aula o aluno vai aprender, passo a passo, a adicionar o XR Origin pelo menu do Unity, a entender as três partes que vêm dentro dele (a câmera, o controle da esquerda e o controle da direita) e a conferir as definições de XR no projeto para que tudo funcione. Também vai aprender a testar o resultado, seja pelo botão Play com o óculos conectado, seja pelo modo de simulação que o próprio Unity oferece para quem ainda não tem o headset por perto.

O aluno usa o Claude como assistente para resolver erros de configuração que aparecem com frequência (câmera no chão, controles que não respondem, mensagens vermelhas no Console) e, ao final, confirma com o professor que o projeto VR está realmente funcionando. É uma aula técnica, de fundação, que prepara o terreno para olhar ao redor e se mover nas próximas aulas.`,
  materiais: [
    `Computadores com Realidade Virtual (Unity + C#) instalado, com o projeto VR das aulas anteriores já aberto`,
    `Óculos VR (headset) com cabo ou link sem fio, quando disponível, para teste real no botão Play`,
    `Projetor ligado para o professor mostrar os menus, painéis e janelas do Unity para a turma toda`,
    `Arquivo de exemplo de cena VR já configurada, como referência caso o XR Origin de algum aluno apresente problema`,
    `Acesso ao Claude aberto em uma aba para o aluno pedir ajuda com erros de configuração`,
    `Folha impressa com o passo a passo do XR Origin e os nomes dos painéis (Hierarchy, Inspector, Project Settings)`,
  ],
  conceitosChave: [
    `XR Origin (XR Rig) — o objeto que representa o jogador no mundo virtual, ligando a cabeça e as mãos reais à câmera e aos controles do Unity.`,
    `Main Camera — a câmera que fica dentro do XR Origin e passa a seguir os movimentos da cabeça quando o aluno usa o headset.`,
    `Controller (controle) — cada um dos dois controles de mão (esquerdo e direito) que aparecem dentro do XR Origin para representar as mãos do jogador.`,
    `Hierarchy — o painel do Unity que lista, em forma de árvore, todos os objetos que existem na cena, incluindo o XR Origin e suas partes.`,
    `Inspector — o painel à direita que mostra e permite ajustar as propriedades do objeto selecionado, como posição e componentes.`,
    `Project Settings — a janela de configurações do projeto onde ficam as definições de XR Plug-in Management que ligam o suporte a VR.`,
    `Modo de teste (Play) — o botão de triângulo no topo do Unity que roda a cena para validar se a câmera e os controles VR estão funcionando.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Realidade Virtual para dar esta aula. O segredo é entender uma ideia simples: o XR Origin é o corpo do jogador dentro da cena. Ele já vem pronto no Unity quando os pacotes de XR estão instalados (o que foi feito na Aula 3). A sua função aqui é guiar o aluno a inserir esse objeto, reconhecer as partes dele e testar. O XR Origin tem três filhos importantes: a Main Camera (a cabeça), o LeftHand Controller e o RightHand Controller (as duas mãos). Antes da aula, abra o projeto, confira no menu se a opção de adicionar o XR Origin aparece e deixe a cena de exemplo salva. Se a opção XR não aparecer no menu, é sinal de que os pacotes do XR Interaction Toolkit precisam ser reinstalados nos Project Settings.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min): retome a Aula 3. Pergunte: o que vocês instalaram para o Unity entender VR? Mostre no projetor a janela Edit, depois Project Settings, depois XR Plug-in Management, e confirme que a caixinha do provedor (OpenXR ou similar) está marcada. Isso garante que o projeto reconhece o headset.

2. Conteúdo novo guiado (15 min): com a cena aberta, mostre no projetor como adicionar o XR Origin. Clique com o botão direito dentro do painel Hierarchy, escolha XR e depois XR Origin (VR). Um objeto novo aparece na lista. Expanda a setinha ao lado dele para revelar os filhos: Camera Offset, e dentro dele a Main Camera, o LeftHand Controller e o RightHand Controller. Explique que a Main Camera é a cabeça e os dois controllers são as mãos. Apague a Main Camera antiga e solta da cena (a que não está dentro do XR Origin) para não haver duas câmeras.

3. Mão na massa (25 min): cada aluno repete os passos no próprio computador. Eles adicionam o XR Origin, expandem a hierarquia e clicam em cada filho para ver no Inspector. Em seguida, ajustam a posição do XR Origin para a altura do chão. Selecione o XR Origin, e no Inspector, no componente Transform, deixe Position com os valores X igual a 0, Y igual a 0, Z igual a 0. Para confirmar pelo código quem é a câmera, crie um script C# simples chamado ChecarRig e cole o conteúdo abaixo. Peça que arrastem o script para o XR Origin e apertem Play para ver a mensagem no Console.

using UnityEngine;

public class ChecarRig : MonoBehaviour
{
    void Start()
    {
        Camera cam = GetComponentInChildren<Camera>();
        if (cam != null)
        {
            Debug.Log("Camera do Rig encontrada: " + cam.name);
        }
        else
        {
            Debug.LogWarning("Nenhuma camera encontrada dentro do XR Origin.");
        }
    }
}

Explique cada parte: a linha using UnityEngine traz as ferramentas do Unity; a classe ChecarRig herda de MonoBehaviour para virar um componente; o método Start roda uma vez ao apertar Play; GetComponentInChildren procura uma Camera dentro do Rig; o if confere se achou e o Debug.Log escreve no Console o nome encontrado, usando o sinal de mais para juntar texto.

4. Desafio + compartilhar (10 min): cada aluno aperta Play (com o headset, se houver, ou no modo simulador) e confirma que a câmera obedece. Quem teve erro pergunta ao Claude, por exemplo: o Unity diz que falta um provedor de XR, como eu resolvo? Cada um compartilha em uma frase se o Rig funcionou.

## Como explicar de forma clara (linguagem para a idade)

Compare o XR Origin com um boneco que veste o jogador: a cabeça do boneco é a câmera e as duas mãos são os controles. Quando a pessoa mexe a cabeça de verdade, a cabeça do boneco mexe dentro do jogo. Diga que o Hierarchy é a lista de tudo que existe na cena, como uma lista de chamada da turma, e o Inspector é a ficha de cada um. Apertar Play é como ligar o videogame para testar.

## Erros comuns e como ajudar

- Duas câmeras na cena: o aluno esqueceu de apagar a Main Camera antiga. Apague a que está solta, fora do XR Origin.
- Câmera no chão ou muito alta: confira a Position do XR Origin no Inspector e o modo de Tracking Origin do componente.
- Menu XR não aparece no Hierarchy: os pacotes não foram importados; volte aos Project Settings e reinstale o XR Interaction Toolkit.
- Mensagem vermelha no Console sobre provedor de XR: marque o provedor em XR Plug-in Management. Incentive o aluno a colar o erro no Claude.
- Play não mostra nada no headset: confira se o óculos está conectado e reconhecido antes de testar; use o simulador como alternativa.`,
  exercicios: [
    {
      titulo: `Caça aos painéis do Unity`,
      tipo: `Prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Garanta que cada aluno esteja com o projeto VR aberto. Caminhe pela sala conferindo as telas. O objetivo é só localizar e reconhecer os painéis, sem ainda adicionar nada. Reforce os nomes em voz alta.`,
      atividade: `No seu Unity, encontre e aponte para o colega do lado: o painel Hierarchy (lista de objetos da cena), o painel Inspector (ficha do objeto selecionado) e o menu Edit que leva aos Project Settings. Clique em qualquer objeto e veja a ficha dele aparecer no Inspector.`,
      gabarito: `O aluno identifica corretamente os três pontos: o Hierarchy à esquerda com a lista de objetos, o Inspector à direita com as propriedades, e o caminho Edit seguido de Project Settings. Ao clicar em um objeto, confirma que a ficha aparece no Inspector.`,
    },
    {
      titulo: `Montando o XR Origin`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Acompanhe passo a passo no projetor enquanto a turma repete. Confirme que cada aluno expandiu a hierarquia do XR Origin e que apagou a Main Camera antiga e solta da cena, para evitar duas câmeras.`,
      atividade: `Clique com o botão direito no Hierarchy, escolha XR e depois XR Origin (VR). Expanda a setinha do novo objeto e encontre, dentro dele, a Main Camera, o LeftHand Controller e o RightHand Controller. Depois apague a Main Camera antiga que está solta na cena, fora do XR Origin.`,
      gabarito: `A cena passa a ter um XR Origin contendo Camera Offset, e dentro dele a Main Camera, o LeftHand Controller e o RightHand Controller. Existe apenas uma câmera na cena, que é a de dentro do XR Origin; a câmera antiga e solta foi apagada.`,
    },
    {
      titulo: `Ajustando a altura e a posição do Rig`,
      tipo: `Desafio guiado`,
      tempo: `10 min`,
      guiaProfessor: `Mostre no Inspector onde fica o componente Transform e os campos Position X, Y e Z. Explique que zerar a posição coloca o Rig na origem da cena. Circule conferindo os valores digitados por cada aluno.`,
      atividade: `Selecione o XR Origin no Hierarchy. No Inspector, encontre o componente Transform e deixe a Position com X igual a 0, Y igual a 0 e Z igual a 0. Em seguida, explique em uma frase, para o colega, o que aconteceu com a posição do jogador na cena.`,
      gabarito: `O XR Origin fica com Position X igual a 0, Y igual a 0 e Z igual a 0, ou seja, posicionado no centro (origem) da cena, no nível do chão. O aluno explica que o jogador agora começa exatamente no ponto zero do mundo virtual.`,
    },
    {
      titulo: `Script ChecarRig: confirmando a câmera`,
      tipo: `Programação em C#`,
      tempo: `15 min`,
      guiaProfessor: `Ajude a criar o script no painel Project (botão direito, Create, C# Script) com o nome exato ChecarRig. Garanta que o script seja arrastado para o XR Origin e que o aluno abra o Console (Window, depois General, depois Console) antes de apertar Play.`,
      atividade: `Crie um script C# chamado ChecarRig, escreva o código que procura a câmera dentro do XR Origin e escreve o nome dela no Console. Arraste o script para o XR Origin e aperte Play. Confira a mensagem que aparece no Console.`,
      gabarito: `O código abaixo, ao rodar, escreve no Console o nome da câmera, por exemplo "Camera do Rig encontrada: Main Camera".

using UnityEngine;

public class ChecarRig : MonoBehaviour
{
    void Start()
    {
        Camera cam = GetComponentInChildren<Camera>();
        if (cam != null)
        {
            Debug.Log("Camera do Rig encontrada: " + cam.name);
        }
        else
        {
            Debug.LogWarning("Nenhuma camera encontrada dentro do XR Origin.");
        }
    }
}`,
    },
    {
      titulo: `Testar o VR e pedir ajuda ao Claude`,
      tipo: `Projeto curto`,
      tempo: `15 min`,
      guiaProfessor: `Conduza o teste com supervisão. Se houver headset, confira a conexão antes do Play; se não houver, use o modo simulador. Quando surgir um erro, incentive o aluno a copiar a mensagem do Console e colar no Claude, em vez de só apagar tudo.`,
      atividade: `Aperte Play para testar o seu projeto VR. Se a câmera obedecer (no headset ou no simulador), o Rig está funcionando. Se aparecer um erro vermelho no Console, copie a mensagem e pergunte ao Claude como resolver, descrevendo o que você fez. Depois conte ao professor se funcionou.`,
      gabarito: `O aluno confirma o projeto VR funcionando: ao apertar Play, a câmera responde ao headset ou ao simulador e o Console não mostra erros de provedor de XR. Em caso de erro, o aluno usa o Claude com uma pergunta clara (por exemplo, sobre falta de provedor em XR Plug-in Management), aplica a correção sugerida e valida novamente com o professor.`,
    },
  ],
};
