import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "C# no Unity: o primeiro script",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Levar o aluno a criar, anexar e rodar seu primeiro script em C# no Unity, entendendo o ciclo de vida de um MonoBehaviour com os métodos Start e Update e imprimindo mensagens no Console.`,
  descricao: `Até agora, neste mês, o aluno conheceu a interface do Unity, montou a cena, importou modelos do Blender e cuidou de materiais e prefabs do personagem. Tudo isso foi feito com cliques e arrastar de objetos. A partir desta aula entra um novo poder: a programação. O C# (lê-se "ci charp") é a linguagem que o Unity usa para dar comportamento aos objetos. Ele é o cérebro por trás de tudo que se move, reage e decide na cena. Esta aula é a porta de entrada para esse mundo.

O conceito central de hoje é o MonoBehaviour, que é a base de todo script que vive dentro de um GameObject no Unity. Pense nele como um contrato: ao escrever um script que herda de MonoBehaviour, o Unity passa a chamar automaticamente certos métodos em momentos específicos. Os dois mais importantes para começar são o Start e o Update. O Start roda uma única vez, no instante em que o objeto entra em cena, e serve para preparar coisas. O Update roda muitas vezes por segundo, a cada quadro (frame) do jogo, e serve para tudo que precisa acontecer continuamente, como verificar o teclado ou mover o personagem.

Como esta é a Aula 5 de uma trilha que já passou pelos Anos 1, 2 e 3, o aluno não chega do zero em lógica de programação. Ele já viu sequência, variáveis, condicionais e repetição em outras ferramentas. O que muda aqui é a sintaxe do C# e o fato de o código rodar dentro de um motor de jogo profissional. Por isso, a aula relembra a lógica que ele já conhece e mostra como ela aparece nesta nova linguagem, sem ainda entrar em variáveis e movimento de verdade, que são temas das próximas aulas.

A prática de hoje é simples e poderosa ao mesmo tempo: criar um script, anexar a um GameObject e usar o Console do Unity para imprimir mensagens com Debug.Log. Imprimir no Console é a primeira forma de o aluno "conversar" com o programa e confirmar que o código realmente está rodando. No fechamento, o aluno pede ao Claude para explicar, em palavras simples, a estrutura do script que ele acabou de escrever, reforçando o hábito de usar a inteligência artificial como assistente de aprendizagem ao longo dos projetos do ano.`,
  materiais: [
    `Computadores com o Unity instalado e um editor de código configurado (Visual Studio ou VS Code), um por aluno`,
    `Projetor ou TV para o professor demonstrar a criação do script e a janela Console`,
    `Cena de exemplo do mês já aberta, com o personagem importado e um GameObject simples (um cubo) para receber o script`,
    `Arquivo de exemplo com um script pronto chamado MeuPrimeiroScript.cs, para comparar ao final`,
    `Acesso ao Claude (navegador ou app) para o aluno pedir a explicação da estrutura do código`,
    `Folha impressa com o esqueleto comentado de um MonoBehaviour (classe, Start e Update) para consulta rápida`,
  ],
  conceitosChave: [
    `C# — linguagem de programação usada pelo Unity para dar comportamento e lógica aos objetos do jogo.`,
    `Script — arquivo de código com extensão .cs que descreve o que um objeto deve fazer.`,
    `MonoBehaviour — classe base do Unity da qual todo script de comportamento herda; permite que o motor chame métodos automaticamente.`,
    `GameObject — qualquer objeto da cena (cubo, personagem, câmera) ao qual podemos anexar scripts e componentes.`,
    `Método Start — bloco de código que o Unity executa uma única vez, quando o objeto surge na cena.`,
    `Método Update — bloco de código que o Unity executa a cada quadro (frame), várias vezes por segundo, enquanto o jogo roda.`,
    `Debug.Log — comando que imprime uma mensagem na janela Console, usado para verificar se o código está funcionando.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador para conduzir esta aula. Precisa entender três ideias. Primeira: um script em C# é só um arquivo de texto com regras; no Unity ele tem a extensão .cs. Segunda: para um script "ganhar vida", ele precisa estar anexado a um GameObject da cena. Terceira: o Unity chama sozinho dois métodos especiais. O Start roda uma vez quando o jogo começa; o Update roda repetidamente, a cada quadro. Antes da aula, faça o passo a passo uma vez para se sentir seguro. Tenha a cena do mês aberta e localize a janela Console no menu Window, em Window e depois General e depois Console. É ali que as mensagens vão aparecer.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Pergunte: "Tudo que fizemos até agora foi clicando. Como a gente faz um objeto pensar e agir sozinho?" Relembre a lógica da trilha: sequência, repetição e condição. Diga que hoje essa lógica vai virar código de verdade em C#.

15 min — Conteúdo novo guiado. No projetor, com a cena aberta, selecione o cubo na Hierarchy. No Inspector, clique em Add Component, digite o nome MeuPrimeiroScript e escolha New Script, depois Create and Add. O Unity cria o arquivo na pasta Assets. Dê dois cliques nele para abrir o editor de código. Mostre o esqueleto que o Unity gerou e explique cada parte. Em seguida, escreva exatamente este código:

using UnityEngine;

public class MeuPrimeiroScript : MonoBehaviour
{
    void Start()
    {
        Debug.Log("Ola, mundo do Unity!");
    }

    void Update()
    {
        Debug.Log("Rodando a cada quadro...");
    }
}

Explique linha a linha: a primeira linha (using UnityEngine) traz as ferramentas do Unity; a linha da classe diz que MeuPrimeiroScript herda de MonoBehaviour; Start roda uma vez e Update roda sempre. Debug.Log entre parênteses e aspas imprime o texto no Console. Salve o arquivo (Ctrl mais S), volte ao Unity, abra o Console e clique no botão Play no topo. Mostre as mensagens aparecendo.

25 min — Mão na massa. Cada aluno repete o processo no próprio computador: cria o script no cubo, digita o código, salva e roda. Peça que troquem o texto do Start pelo próprio nome, por exemplo Debug.Log("Quem programou: Ana"). Circule confirmando que todos abriram o Console e viram a mensagem do Start aparecer uma vez e a do Update repetir sem parar. Reforce o hábito de salvar antes de voltar ao Unity.

10 min — Desafio e compartilhar. Desafie: faça o Update imprimir três mensagens diferentes a cada quadro. Depois, peça que cada aluno cole o próprio script no Claude e escreva: "Explique, em palavras simples, o que cada parte deste código faz." Em roda rápida, dois ou três alunos leem a explicação que o Claude deu e dizem se concordam.

## Como explicar de forma clara (linguagem para a idade)

Use a metáfora do robô. O GameObject é um robozinho; o script é o manual de instruções que você entrega a ele. O método Start é a primeira página do manual: "assim que você ligar, faça isto uma vez". O Update é a página que diz "enquanto estiver ligado, repita isto muito rápido, sem parar". O Debug.Log é o robô falando em voz alta para a gente saber o que ele está pensando. Diga que o Console é como o chat do robô com a gente. Reforce que tudo em C# precisa de ponto e vírgula no fim de cada ordem, como o ponto final de uma frase.

## Erros comuns e como ajudar

O erro mais comum é esquecer o ponto e vírgula no fim da linha; o Unity mostra um erro vermelho no Console e não deixa dar Play. Mostre como ler a mensagem: ela aponta o número da linha. Outro erro clássico é o nome do arquivo ser diferente do nome da classe; no C#, MeuPrimeiroScript.cs precisa conter public class MeuPrimeiroScript. Muitos alunos esquecem de salvar o arquivo antes de voltar ao Unity e acham que o código "não funcionou"; lembre sempre do Ctrl mais S. Tem quem não ache as mensagens porque o Console está fechado; ensine o caminho Window, General, Console. E alguns se assustam com o Update enchendo o Console de mensagens repetidas; explique que isso é esperado e mostre o botão Clear para limpar.`,
  exercicios: [
    {
      titulo: `Ola, Console!`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Confirme que cada aluno criou o script pelo Add Component, abriu o editor e encontrou a janela Console. Passe pelas telas verificando se a mensagem do Start aparece ao clicar em Play.`,
      atividade: `Crie um script chamado MeuPrimeiroScript no cubo. Dentro do método Start, escreva uma linha que imprima a mensagem Ola, Console! Salve, volte ao Unity, abra o Console e clique em Play.`,
      gabarito: `O método Start deve conter a linha: Debug.Log("Ola, Console!"); e, ao dar Play, a mensagem Ola, Console! aparece uma única vez na janela Console. O aluno precisa mostrar o Console aberto com a mensagem visível.`,
    },
    {
      titulo: `Start ou Update?`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Leia situações em voz alta e peça que os alunos respondam se o código certo seria no Start ou no Update. Anote no quadro as respostas e corrija junto, justificando cada uma.`,
      atividade: `Para cada situação, diga se o código deveria ficar no Start ou no Update: 1) avisar uma vez que o jogo começou; 2) verificar o tempo todo se uma tecla foi apertada; 3) definir a cor inicial do personagem; 4) checar a cada instante se a vida chegou a zero.`,
      gabarito: `1) Start (acontece uma única vez no início). 2) Update (precisa ser verificado continuamente). 3) Start (é uma preparação inicial). 4) Update (a checagem precisa repetir a cada quadro). O aluno deve justificar usando a ideia de uma vez contra repetir sempre.`,
    },
    {
      titulo: `Conserte o código quebrado`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue, no arquivo de exemplo, um script com três erros propositais: falta de ponto e vírgula, nome da classe diferente do arquivo e Debug escrito com letra minúscula. Deixe o aluno ler o erro no Console e corrigir.`,
      atividade: `Abra o script com defeito. Ele não roda. Leia as mensagens vermelhas no Console, encontre os três erros e conserte o código até ele rodar e imprimir a mensagem corretamente.`,
      gabarito: `O script corrigido deve ficar assim: using UnityEngine; public class ScriptQuebrado : MonoBehaviour { void Start() { Debug.Log("Consertado!"); } }. Os três ajustes são: adicionar o ponto e vírgula no fim da linha do Debug.Log; deixar o nome da classe igual ao nome do arquivo (ScriptQuebrado); e escrever Debug com D maiúsculo. Ao dar Play, a mensagem Consertado! deve aparecer no Console.`,
    },
    {
      titulo: `O contador de cumprimentos`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Aqui o aluno usa o Update de propósito para ver a repetição acontecendo. Ajude quem se assustar com o Console enchendo de mensagens e mostre o botão Clear. Não introduza variáveis ainda; o foco é perceber a diferença entre rodar uma vez e rodar sempre.`,
      atividade: `No mesmo script, deixe uma mensagem no Start avisando que o jogo começou e coloque outra mensagem no Update avisando que está rodando. Dê Play e observe: qual mensagem aparece uma só vez e qual não para de repetir? Use o botão Clear para limpar e rode de novo.`,
      gabarito: `O código deve ter Debug.Log("O jogo comecou!"); dentro de Start e Debug.Log("Ainda rodando..."); dentro de Update. No Console, a mensagem do Start aparece apenas uma vez e a do Update aparece muitas vezes seguidas. O aluno deve explicar que isso ocorre porque o Update roda a cada quadro do jogo.`,
    },
    {
      titulo: `Pergunte ao Claude`,
      tipo: `pesquisa com IA`,
      tempo: `10 minutos`,
      guiaProfessor: `Oriente o aluno a copiar o próprio script e pedir uma explicação ao Claude. Reforce que a IA é uma assistente: o aluno deve ler, conferir com o que aprendeu e questionar se algo não bater. Peça que compartilhem trechos da explicação em voz alta.`,
      atividade: `Copie o seu script e cole no Claude com a pergunta: Explique, em palavras simples, o que cada parte deste código C# do Unity faz. Leia a resposta e escreva, com suas palavras, o que faz a linha do MonoBehaviour e o que faz o método Update.`,
      gabarito: `A resposta do aluno deve mostrar entendimento de duas ideias: que MonoBehaviour é a classe base que permite ao Unity controlar o script e chamar métodos automaticamente; e que o método Update é executado a cada quadro, repetidamente, enquanto o jogo roda. Aceite explicações com as palavras do aluno, desde que essas duas ideias estejam corretas.`,
    },
  ],
};
