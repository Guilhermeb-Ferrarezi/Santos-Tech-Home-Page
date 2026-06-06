import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Interações com as Mãos em C#",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Programar em C# as interações principais da experiência VR (agarrar, soltar e acionar) conectando os controles de mão do XR Toolkit aos objetos da cena por meio de scripts e eventos.`,
  descricao: `Nesta aula, o ambiente imersivo que os alunos montaram na semana passada finalmente ganha vida. Até agora o mundo VR era bonito, mas parado: dava para olhar em volta, mas não para tocar em nada. Hoje os alunos vão escrever código C# que conecta os controles de mão do óculos aos objetos da cena, fazendo com que seja possível agarrar, segurar, soltar e acionar coisas dentro da realidade virtual.

A base de tudo é o XR Interaction Toolkit, o conjunto de ferramentas oficial da Unity para realidade virtual. Ele já traz dois tipos de peça que conversam entre si: os interactors (as mãos ou os controles, que pegam) e os interactables (os objetos do mundo, que podem ser pegos). Quando uma mão encosta num objeto interagível e o aluno aperta o gatilho, o Toolkit dispara eventos, que são avisos do tipo "alguém me agarrou agora" ou "alguém me soltou agora". O trabalho do aluno é escrever scripts em C# que escutam esses eventos e respondem a eles, por exemplo acendendo uma luz, tocando um som ou somando pontos.

O conceito central da aula é justamente o de evento. Um evento é como uma campainha: o objeto não fica perguntando o tempo todo "já me pegaram? já me pegaram?". Em vez disso, ele espera quietinho até que a campainha toque, e só então roda a função que o aluno conectou. Isso deixa o código organizado e rápido. Os alunos vão aprender a inscrever uma função em um evento (chamado de listener, ou ouvinte) usando o componente XR Grab Interactable e seus eventos Select Entered e Select Exited.

Ao longo da aula, cada aluno escreve pelo menos um script de interação completo e o testa na cena. O Claude entra como assistente de programação: os alunos pedem a ele para explicar o que faz uma função do XR Toolkit, para traduzir mensagens de erro do console e para sugerir correções quando o código não compila. Ao final, a experiência deixa de ser um cenário para virar algo que responde às mãos do jogador, que é a essência da realidade virtual.`,
  materiais: [
    `Computadores com a Realidade Virtual (Unity + C#) instalada e o projeto VR da turma já aberto, um por aluno`,
    `Óculos VR por aluno (ou compartilhado em rodízio) com o cabo de conexão e o XR Interaction Toolkit já importado no projeto`,
    `Editor de código (Visual Studio ou Rider) configurado e ligado à Unity para escrever os scripts em C#`,
    `Projetor ou TV para o professor demonstrar cada painel, janela e linha de código na própria tela`,
    `Arquivo de exemplo: uma cena com a mesa, um cubo agarrável (com XR Grab Interactable) e um botão de exemplo, pronta para os alunos abrirem`,
    `Acesso ao Claude como assistente para depurar erros e explicar as funções do XR Toolkit`,
    `Folha impressa com a estrutura de um script C# de interação para consulta rápida durante a prática`,
  ],
  conceitosChave: [
    `XR Interaction Toolkit — o conjunto oficial de ferramentas da Unity que cuida das interações em realidade virtual, como agarrar e tocar objetos.`,
    `Interactor — a parte que age, normalmente a mão ou o controle do óculos, que alcança e pega os objetos do mundo.`,
    `Interactable — o objeto do mundo que pode ser pego ou acionado; recebe o componente XR Grab Interactable para virar agarrável.`,
    `Evento — um aviso disparado quando algo acontece (por exemplo, ao agarrar); funções conectadas a ele rodam automaticamente naquele instante.`,
    `Select Entered e Select Exited — os dois eventos do XR Grab Interactable que avisam o momento exato em que o objeto foi agarrado e o momento em que foi solto.`,
    `Listener (ouvinte) — a função em C# que fica conectada a um evento e roda sozinha quando o evento dispara.`,
    `Console — a janela da Unity onde aparecem as mensagens, os avisos e os erros do código; é o primeiro lugar para olhar quando algo dá errado.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar realidade virtual para conduzir esta aula. Tudo gira em torno de uma ideia simples: o objeto avisa quando foi agarrado, e o nosso script responde. A Unity já faz a parte difícil de detectar a mão. Os painéis que você vai usar são: a janela Hierarchy (a lista de objetos da cena, à esquerda), a janela Inspector (os detalhes do objeto selecionado, à direita) e a janela Console (as mensagens do código, embaixo). O componente que torna um objeto agarrável chama-se XR Grab Interactable. Dentro dele há uma seção chamada Interactable Events, com dois eventos importantes: Select Entered (disparado ao agarrar) e Select Exited (disparado ao soltar). O nosso script vai ter funções públicas que conectamos a esses eventos arrastando o objeto para o campo do evento, no Inspector.

## Passo a passo da aula

Aquecimento e revisão (10 min): Retome o ambiente da aula passada. Pergunte: o que falta para tocar nas coisas? Conduza até a palavra interação. Explique a metáfora da campainha: o objeto não fica perguntando o tempo todo se foi pego; ele espera o evento tocar. Mostre no projetor a mão virtual encostando no cubo da cena de exemplo.

Conteúdo novo guiado (15 min): No projetor, selecione o cubo na Hierarchy e mostre, no Inspector, o componente XR Grab Interactable e a seção Interactable Events. Em seguida crie o script. Clique com o botão direito na pasta Scripts, escolha Create e depois C# Script, e nomeie InteracaoObjeto. Abra no editor e digite o código exato, explicando cada parte:

using UnityEngine;

public class InteracaoObjeto : MonoBehaviour
{
    public void AoAgarrar()
    {
        Debug.Log("Objeto agarrado pela mao");
    }

    public void AoSoltar()
    {
        Debug.Log("Objeto solto pela mao");
    }
}

Explique: a linha using UnityEngine traz as ferramentas da Unity. A classe InteracaoObjeto herda de MonoBehaviour para virar um componente. AoAgarrar e AoSoltar são funções públicas (public) para que o evento consiga enxergá-las. Debug.Log escreve uma mensagem no Console. Salve, volte à Unity e arraste o script para o cubo. No Inspector, no evento Select Entered, clique no mais, arraste o cubo para o campo do objeto e escolha InteracaoObjeto e depois AoAgarrar. Repita no Select Exited escolhendo AoSoltar. Aperte Play e mostre as mensagens surgindo no Console ao agarrar e soltar.

Mão na massa (25 min): Cada aluno abre a cena de exemplo, cria o script InteracaoObjeto, escreve as duas funções e conecta cada uma ao seu evento no Inspector. Depois testa no Play e confere o Console. Quem terminar adiciona uma ação de verdade dentro da função, como trocar a cor do objeto com GetComponent depois MeshRenderer e material.color igual a Color.green. Circule pela sala ajudando individualmente e incentive o uso do Claude para traduzir erros.

Desafio e compartilhar (10 min): Cada aluno mostra ao colega do lado seu objeto reagindo. Dois ou três voluntários demonstram no projetor e explicam qual evento dispara cada ação.

## Como explicar de forma clara

Use comparações do dia a dia. Diga que o interactor é a mão e o interactable é o brinquedo: a mão pega, o brinquedo é pego. O evento é a campainha da casa, e o listener é a pessoa que corre atender quando ela toca. Função pública é como uma porta aberta: só o que está public o evento consegue enxergar. Mostre sempre antes de mandar fazer, e fale o nome dos botões em voz alta enquanto aponta na tela. Para a idade de 10 a 15 anos, evite jargão demais e prefira frases curtas: agarrar dispara o Select Entered, soltar dispara o Select Exited.

## Erros comuns e como ajudar

O erro mais comum é esquecer o public na função: sem ele, a função não aparece na lista do evento. Outro é não conectar o evento no Inspector, então o aluno aperta o gatilho e nada acontece; peça que confiram o campo Select Entered. Muitos esquecem de salvar o script antes de voltar à Unity; lembre que a Unity recompila ao salvar. Erros de digitação geram linhas vermelhas no Console; ensine a ler a primeira linha do erro e a colar no Claude pedindo explicação. Por fim, alguns esquecem o ponto e vírgula no fim da linha; mostre que quase toda linha de C# termina com ponto e vírgula.`,
  exercicios: [
    {
      titulo: `Ler o objeto agarrável`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Garanta que cada aluno abra a cena de exemplo e selecione o cubo na Hierarchy. Mostre onde fica o componente XR Grab Interactable no Inspector e a seção Interactable Events.`,
      atividade: `Abra a cena de exemplo, clique no cubo e, no Inspector, encontre o componente XR Grab Interactable. Localize os eventos Select Entered e Select Exited e diga o que cada um significa.`,
      gabarito: `O aluno tem o cubo selecionado e mostra no Inspector o componente XR Grab Interactable com a seção Interactable Events. Explica que o Select Entered dispara no momento em que a mão agarra o objeto e o Select Exited no momento em que a mão solta.`,
    },
    {
      titulo: `Criar o script de interação`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre o caminho: botão direito na pasta Scripts, Create, C# Script. Reforce o nome exato InteracaoObjeto e lembre de salvar antes de voltar à Unity.`,
      atividade: `Crie um script C# chamado InteracaoObjeto com duas funções públicas, AoAgarrar e AoSoltar, que escrevem uma mensagem no Console.`,
      gabarito: `O código correto é:

using UnityEngine;

public class InteracaoObjeto : MonoBehaviour
{
    public void AoAgarrar()
    {
        Debug.Log("Objeto agarrado pela mao");
    }

    public void AoSoltar()
    {
        Debug.Log("Objeto solto pela mao");
    }
}

As duas funções estão com a palavra public e o arquivo está salvo, sem linhas vermelhas no Console.`,
    },
    {
      titulo: `Conectar o evento e testar`,
      tipo: `prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Acompanhe a ligação no Inspector: clicar no mais do Select Entered, arrastar o cubo para o campo e escolher a função certa. Confira no Play se as mensagens aparecem no Console.`,
      atividade: `Arraste o script para o cubo, conecte AoAgarrar ao evento Select Entered e AoSoltar ao Select Exited. Aperte Play e confira as mensagens no Console ao agarrar e soltar.`,
      gabarito: `Ao agarrar o objeto, surge no Console a mensagem "Objeto agarrado pela mao"; ao soltar, surge "Objeto solto pela mao". As duas funções estão corretamente ligadas aos eventos no Inspector.`,
    },
    {
      titulo: `Fazer o objeto reagir de verdade`,
      tipo: `desafio`,
      tempo: `5 minutos`,
      guiaProfessor: `Incentive a substituir a mensagem por uma ação visível. Mostre como pegar o MeshRenderer do próprio objeto e trocar a cor do material. Sugira pedir ao Claude para explicar o GetComponent.`,
      atividade: `Mude a função AoAgarrar para deixar o objeto verde ao ser pego e a função AoSoltar para voltar ao branco ao ser solto, usando o componente de renderização do objeto.`,
      gabarito: `Uma solução correta é:

using UnityEngine;

public class InteracaoObjeto : MonoBehaviour
{
    public void AoAgarrar()
    {
        GetComponent<MeshRenderer>().material.color = Color.green;
    }

    public void AoSoltar()
    {
        GetComponent<MeshRenderer>().material.color = Color.white;
    }
}

Ao agarrar, o objeto fica verde; ao soltar, volta ao branco.`,
    },
    {
      titulo: `Depurar um erro com o Claude`,
      tipo: `investigação com IA`,
      tempo: `5 minutos`,
      guiaProfessor: `Entregue de propósito um trecho com erro (função sem public e sem ponto e vírgula). Oriente os alunos a ler a primeira linha do Console e a colar a mensagem no Claude pedindo a correção, antes de arrumar o código.`,
      atividade: `Receba este código com erro, descubra o que está errado lendo o Console, peça ajuda ao Claude e corrija para que a função apareça na lista do evento:

void AoAgarrar()
{
    Debug.Log("Peguei o objeto")
}`,
      gabarito: `Havia dois erros: faltava a palavra public na função e faltava o ponto e vírgula no fim da linha do Debug.Log. O código corrigido é:

public void AoAgarrar()
{
    Debug.Log("Peguei o objeto");
}

Com public, a função passa a aparecer na lista do evento no Inspector; com o ponto e vírgula, o erro vermelho some do Console.`,
    },
  ],
};
