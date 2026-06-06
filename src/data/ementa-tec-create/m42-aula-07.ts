import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Capturando o teclado: Input",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Ler os comandos do teclado com o sistema de Input do Unity e usar esses comandos para mover o personagem na cena de forma suave.`,
  descricao: `Nesta aula, o jogo deixa de ser apenas uma cena bonita e passa a responder ao jogador. Até agora o personagem ficava parado, mas hoje ele vai obedecer ao teclado. O segredo está no sistema de Input do Unity, que é a ponte entre o que o aluno aperta no teclado e o que acontece dentro do jogo. O aluno vai aprender que existem duas formas clássicas de perguntar ao Unity o que o jogador está fazendo: ler teclas individuais (como a seta para cima) e ler eixos (como o eixo horizontal, que junta as setas esquerda e direita em um único número).

O conceito central da aula é o eixo. Em vez de tratar cada tecla separadamente, o Unity oferece os eixos Horizontal e Vertical, que devolvem um número entre -1 e 1. Apertar a seta direita devolve 1, a seta esquerda devolve -1, e nada apertado devolve 0. Isso é elegante porque o aluno consegue mover o personagem nas quatro direções com apenas duas linhas de leitura. Esse número entra direto na conta que desloca o objeto.

Para deslocar o personagem, o aluno volta a usar o Transform, já conhecido das aulas anteriores. A função Translate empurra o objeto na direção desejada. Porém, surge um problema importante: se a conta usar só a velocidade, o personagem anda mais rápido em um computador potente e mais devagar em um computador fraco. A solução é o delta time, que mede quanto tempo passou desde o último quadro de imagem.

Multiplicar o movimento por Time.deltaTime garante que o personagem ande na mesma velocidade em qualquer máquina. Esse é um conceito profissional que aparece em praticamente todo jogo. Ao final, o aluno terá um personagem que anda em todas as direções com movimento suave e justo, preparando o terreno para a entrega do mês na próxima aula.`,
  materiais: [
    `Computadores com Unity instalado e o editor de código (Visual Studio ou VS Code) configurado para C#`,
    `Projeto do mês já aberto, com a cena montada e o personagem (prefab) das aulas anteriores presente`,
    `Projetor ou TV para o professor mostrar o Inspector, o painel Project e o código passo a passo`,
    `Arquivo de exemplo MovimentoJogador.cs pronto, para conferência caso algum aluno trave`,
    `Folha impressa com a tabela de valores dos eixos (seta direita igual 1, seta esquerda igual -1, nada igual 0)`,
    `Teclado funcionando em cada estação (testar antes da aula as setas e as teclas W, A, S, D)`,
  ],
  conceitosChave: [
    `Input — sistema do Unity que lê o que o jogador faz no teclado, no mouse ou no controle.`,
    `Eixo (Axis) — valor numérico entre -1 e 1 que resume um par de teclas opostas, como Horizontal e Vertical.`,
    `Input.GetAxis — função que devolve o valor de um eixo de forma suave, indo de 0 até 1 aos poucos.`,
    `Transform.Translate — comando que empurra o objeto em uma direção, deslocando sua posição na cena.`,
    `Delta time — tempo, em segundos, que passou desde o último quadro de imagem; medido por Time.deltaTime.`,
    `Vector3 — trio de números (x, y, z) que representa uma direção ou posição no espaço tridimensional.`,
    `Velocidade (speed) — variável que define o quão rápido o personagem se desloca pela cena.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador para dar esta aula. Basta entender três ideias. Primeira: o Unity tem um sistema chamado Input que responde perguntas sobre o teclado. Segunda: a forma mais fácil de mover algo é perguntar pelos eixos Horizontal e Vertical, que já juntam as setas em um número entre -1 e 1. Terceira: para o movimento ser justo em qualquer computador, multiplicamos tudo por Time.deltaTime. Se você decorar essas três frases, conduz a aula com segurança.

A função Input.GetAxis recebe um nome em texto, como Horizontal, e devolve um número. O Unity já vem com esses eixos configurados de fábrica, então não é preciso configurar nada antes. As setas e as teclas W, A, S, D já funcionam sozinhas. O movimento acontece dentro de Update, que é o método que o Unity executa uma vez a cada quadro de imagem.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

Aquecimento (10 min): Abra o projeto e mostre o personagem parado na cena. Pergunte: como fazer ele andar quando apertamos uma tecla? Relembre o script da Aula 5 e a variável da Aula 6. Aperte Play e mostre que, sem código de Input, nada acontece ao apertar as setas.

Conteúdo novo guiado (15 min): Selecione o personagem no Hierarchy. No Inspector, clique em Add Component e crie um novo script chamado MovimentoJogador. Abra o script no editor. Apague o método Start e escreva o código abaixo, explicando cada linha enquanto digita:

using UnityEngine;

public class MovimentoJogador : MonoBehaviour
{
    public float velocidade = 5f;

    void Update()
    {
        float horizontal = Input.GetAxis("Horizontal");
        float vertical = Input.GetAxis("Vertical");

        Vector3 direcao = new Vector3(horizontal, 0f, vertical);

        transform.Translate(direcao * velocidade * Time.deltaTime);
    }
}

Explique: a variável velocidade aparece no Inspector porque é public. As duas linhas com GetAxis perguntam pelas setas e guardam números entre -1 e 1. O Vector3 monta a direção usando x e z (o chão do jogo). A última linha empurra o personagem, e o Time.deltaTime deixa o movimento suave e igual em qualquer máquina.

Mão na massa (25 min): Cada aluno digita o script no próprio personagem (digitar, não copiar e colar, ajuda a aprender). Eles salvam, voltam ao Unity, apertam Play e testam as setas. Depois, com o jogo parado, mudam o valor de velocidade no Inspector para 3 e para 10, comparando a diferença. Circule pela sala conferindo se o script está anexado ao objeto certo e se foi salvo.

Desafio e compartilhar (10 min): Proponha que troquem 5f por outro valor e descubram qual velocidade torna o personagem mais divertido de controlar. Cada dupla mostra o resultado para a turma e diz qual velocidade escolheu e por quê.

## Como explicar de forma clara (linguagem para a idade)

Compare o eixo Horizontal a um joystick: empurrar para a direita dá 1, para a esquerda dá -1 e soltar volta para 0. Diga que o Unity faz a pergunta para o teclado 60 vezes por segundo, e o nosso código só precisa reagir à resposta. Para o delta time, use a imagem de uma corrida: sem ele, quem tem computador rápido correria mais que quem tem computador lento, o que seria injusto; o Time.deltaTime nivela a corrida para todos.

## Erros comuns e como ajudar

O personagem não se mexe: confira se o script está anexado ao personagem (e não a outro objeto) e se o arquivo foi salvo antes de voltar ao Unity. Erro vermelho no Console: quase sempre é uma letra trocada; lembre que o C# diferencia maiúsculas de minúsculas, então Update é diferente de update. O personagem sobe ou afunda no chão: é sinal de que alguém colocou o vertical no y em vez do z; confira a ordem dentro do Vector3. O personagem voa pela tela: provavelmente esqueceram o Time.deltaTime na conta.`,
  exercicios: [
    {
      titulo: `Caça aos eixos`,
      tipo: `Quiz oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça as perguntas em ritmo rápido para revisar os valores dos eixos antes de programar. Aceite respostas em coro.`,
      atividade: `Responda: 1) Que número o eixo Horizontal devolve quando apertamos a seta direita? 2) E quando apertamos a seta esquerda? 3) E quando não apertamos nada? 4) Qual eixo cuida das setas para cima e para baixo?`,
      gabarito: `1) Devolve 1. 2) Devolve -1. 3) Devolve 0. 4) O eixo Vertical cuida das setas para cima e para baixo.`,
    },
    {
      titulo: `Ligando o teclado ao personagem`,
      tipo: `Prática guiada de código`,
      tempo: `12 minutos`,
      guiaProfessor: `Acompanhe a digitação linha a linha. Confira que o script foi anexado ao personagem e salvo antes do Play. Lembre que C# diferencia maiúsculas de minúsculas.`,
      atividade: `Crie um script chamado MovimentoJogador no personagem, leia os eixos Horizontal e Vertical e use o Transform para mover o objeto. Aperte Play e teste as setas do teclado.`,
      gabarito: `using UnityEngine;

public class MovimentoJogador : MonoBehaviour
{
    public float velocidade = 5f;

    void Update()
    {
        float horizontal = Input.GetAxis("Horizontal");
        float vertical = Input.GetAxis("Vertical");

        Vector3 direcao = new Vector3(horizontal, 0f, vertical);

        transform.Translate(direcao * velocidade * Time.deltaTime);
    }
}`,
    },
    {
      titulo: `O segredo do delta time`,
      tipo: `Experimento e reflexão`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça para o aluno remover o Time.deltaTime, testar, e depois colocar de volta. O objetivo é sentir a diferença, não quebrar o jogo de vez. Ajude a reverter.`,
      atividade: `Apague apenas a parte Time.deltaTime da última linha, salve e aperte Play. Observe o que acontece com a velocidade. Depois coloque o Time.deltaTime de volta e compare. Escreva uma frase explicando para que ele serve.`,
      gabarito: `Sem Time.deltaTime o personagem fica rápido demais, porque a conta soma a velocidade em todos os quadros sem medir o tempo. A linha correta é: transform.Translate(direcao * velocidade * Time.deltaTime); O Time.deltaTime deixa o movimento suave e igual em qualquer computador.`,
    },
    {
      titulo: `Tecla de turbo`,
      tipo: `Desafio de lógica`,
      tempo: `10 minutos`,
      guiaProfessor: `Introduza Input.GetKey, que devolve verdadeiro enquanto a tecla está apertada. Apresente a estrutura if. Deixe o aluno tentar antes de mostrar a solução.`,
      atividade: `Faça o personagem andar mais rápido enquanto a tecla LeftShift estiver pressionada. Use uma segunda variável para a velocidade do turbo e o comando Input.GetKey(KeyCode.LeftShift).`,
      gabarito: `using UnityEngine;

public class MovimentoJogador : MonoBehaviour
{
    public float velocidade = 5f;
    public float velocidadeTurbo = 10f;

    void Update()
    {
        float horizontal = Input.GetAxis("Horizontal");
        float vertical = Input.GetAxis("Vertical");

        float velocidadeAtual = velocidade;
        if (Input.GetKey(KeyCode.LeftShift))
        {
            velocidadeAtual = velocidadeTurbo;
        }

        Vector3 direcao = new Vector3(horizontal, 0f, vertical);

        transform.Translate(direcao * velocidadeAtual * Time.deltaTime);
    }
}`,
    },
    {
      titulo: `Pulo com a barra de espaço`,
      tipo: `Projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o exercício mais avançado. Explique a diferença entre GetKey (segura) e GetKeyDown (só no instante do aperto). Um pulo simples soma altura ao eixo y apenas quando a barra de espaço é pressionada.`,
      atividade: `Além do movimento normal, faça o personagem dar um pequeno salto quando o jogador apertar a barra de espaço uma vez. Use Input.GetKeyDown(KeyCode.Space) e mova o personagem um pouco no eixo y.`,
      gabarito: `using UnityEngine;

public class MovimentoJogador : MonoBehaviour
{
    public float velocidade = 5f;
    public float forcaPulo = 3f;

    void Update()
    {
        float horizontal = Input.GetAxis("Horizontal");
        float vertical = Input.GetAxis("Vertical");

        Vector3 direcao = new Vector3(horizontal, 0f, vertical);
        transform.Translate(direcao * velocidade * Time.deltaTime);

        if (Input.GetKeyDown(KeyCode.Space))
        {
            transform.Translate(new Vector3(0f, forcaPulo, 0f));
        }
    }
}`,
    },
  ],
};
