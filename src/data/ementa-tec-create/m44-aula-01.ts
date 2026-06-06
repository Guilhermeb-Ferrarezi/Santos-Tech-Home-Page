import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Scripts de Movimento em C#",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Programar, em C#, um script que faz o jogador se mover no Unity usando Input e Transform, entendendo a estrutura básica de um script (Start e Update).`,
  descricao: `Nesta primeira aula do mês de montagem do jogo, os alunos colocam a mão na massa de verdade: eles transformam um objeto parado em um personagem que responde ao teclado. O coração de qualquer jogo é o controle, e tudo começa com um script de movimento. Por isso esta aula abre o caminho para todas as outras: sem um jogador que se mexe, não há mecânica, não há desafio e não há diversão.

O aluno já conhece o ambiente do Unity dos anos anteriores, mas aqui o foco passa a ser a programação em C#. Eles vão aprender que um script é um componente, igual ao Transform ou ao Rigidbody, que se anexa a um objeto da cena. Vão descobrir as duas funções mais importantes do ciclo de vida de um objeto: a função Start, que roda uma única vez quando o jogo começa, e a função Update, que roda em todos os quadros (frames) da tela, várias vezes por segundo.

Com isso, o aluno escreve linhas que leem o teclado (Input) e movem o objeto no espaço (Transform). É uma aula de descoberta: pequenas mudanças no código geram efeitos imediatos na tela, o que prende muito a atenção da idade. O professor deve celebrar cada movimento que aparece, por menor que seja.

Um diferencial da Santos Tech é o uso do Claude como assistente de programação. O aluno não copia respostas prontas: ele escreve o código, e quando aparece um erro de sintaxe ou o objeto não se move, pede ao Claude para revisar e explicar o que está errado. Assim o aluno aprende a ler mensagens de erro e a entender o porquê, em vez de apenas consertar no escuro.`,
  materiais: [
    `Computadores com Unity instalado e um editor de código (Visual Studio ou VS Code) para C#`,
    `Projeto Unity de exemplo com uma cena pronta: um chão (Plane) e um cubo chamado Player`,
    `Projetor ou tela grande para o professor demonstrar onde clicar no Unity`,
    `Acesso ao Claude (navegador ou app) para revisar código e explicar erros`,
    `Arquivo de exemplo MovimentoJogador.cs com o código final, para o professor consultar`,
    `Folha impressa com a estrutura básica de um script (Start, Update) e os comandos principais`,
  ],
  conceitosChave: [
    `Script — arquivo de código C# que vira um componente e dá comportamento a um objeto da cena.`,
    `Start — função que roda uma única vez, no momento em que o objeto aparece no jogo; serve para preparar valores iniciais.`,
    `Update — função que roda uma vez a cada quadro (frame); é onde colocamos o que precisa acontecer o tempo todo, como ler o teclado.`,
    `Input — sistema do Unity que lê o teclado, o mouse e o controle; usamos Input.GetAxis para saber para onde o jogador quer ir.`,
    `Transform — componente que guarda posição, rotação e escala de um objeto; usamos transform.Translate para mover.`,
    `Time.deltaTime — número pequeno que representa o tempo entre dois quadros; multiplicar por ele deixa o movimento igual em qualquer computador.`,
    `Variável pública — valor declarado como public que aparece no Inspector e pode ser ajustado sem mexer no código, como a velocidade.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser um programador experiente. Um script no Unity é só um arquivo de texto com instruções que o computador executa em ordem. Em C#, todo script de jogador costuma ter duas partes principais: a função Start (roda uma vez no começo) e a função Update (roda em todos os quadros da tela, dezenas de vezes por segundo). Para mover um objeto, lemos o teclado com Input e mudamos a posição com transform.Translate. Só isso já faz um cubo andar. Teste o código desta aula no seu computador antes da turma, para conhecer cada passo.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Abra o projeto de exemplo no projetor. Pergunte: o que faz um personagem se mover em um jogo que vocês gostam? Mostre o cubo Player parado na cena e diga que hoje ele vai ganhar vida. Relembre que componentes (como Transform) aparecem no Inspector, do lado direito.

15 min — Conteúdo novo guiado. Selecione o objeto Player. No Inspector, clique em Add Component, digite o nome MovimentoJogador e escolha New Script, depois Create and Add. Clique duas vezes no script para abrir o editor. Apague o conteúdo de dentro da classe e digite junto com a turma o código abaixo, explicando linha a linha. (Use o sinal de + para juntar textos; nunca strings com cifrão.)

using UnityEngine;

public class MovimentoJogador : MonoBehaviour
{
    public float velocidade = 5f;

    void Start()
    {
        Debug.Log("Jogador pronto para se mover.");
    }

    void Update()
    {
        float horizontal = Input.GetAxis("Horizontal");
        float vertical = Input.GetAxis("Vertical");

        Vector3 movimento = new Vector3(horizontal, 0f, vertical);
        transform.Translate(movimento * velocidade * Time.deltaTime);
    }
}

Explique: public float velocidade vira um campo no Inspector; Start escreve uma mensagem no Console; Update lê as setas ou as teclas W, A, S, D pelo Input.GetAxis; o Vector3 junta as direções; transform.Translate move o objeto; Time.deltaTime deixa o movimento suave e igual em qualquer máquina. Salve (Ctrl + S), volte ao Unity e clique em Play. Mova o cubo com o teclado.

25 min — Mão na massa. Cada aluno repete o processo no próprio computador: cria o script, digita o código e testa. Quando der erro, oriente a copiar a mensagem do Console e perguntar ao Claude algo como: explique este erro de C# no Unity e diga como corrigir, sem dar o código pronto. Depois peça para mudarem a velocidade no Inspector e observarem a diferença.

10 min — Desafio e compartilhar. Lance o desafio: faça o cubo se mover mais rápido ao segurar Shift, ou pule o eixo Y para mover só para frente e para trás. Peça para dois ou três alunos mostrarem a tela e contarem um erro que tiveram e como o Claude ajudou a entender.

## Como explicar de forma clara (linguagem para a idade)

Compare Update a um coração que bate muitas vezes por segundo: a cada batida, o Unity pergunta para onde o jogador quer ir. Diga que Start é como acordar e se preparar antes de começar o dia, acontece uma vez só. Chame velocidade de acelerador do carro. Mostre que mexer no código é seguro: se quebrar, é só consertar. Erros não são fracasso, são pistas.

## Erros comuns e como ajudar

O mais comum é esquecer o ponto e vírgula no fim da linha; mostre que o Console aponta a linha. Outro é errar maiúsculas: Update é diferente de update, e o C# diferencia. Se o cubo não anda, verifique se o script está anexado ao Player e se o jogo está em Play. Se ele atravessa o chão, lembre que física e colisão vêm nas próximas aulas; por enquanto basta deslizar. Incentive sempre o uso do Claude para ler o erro junto com o aluno.`,
  exercicios: [
    {
      titulo: `Anexar o script ao jogador`,
      tipo: `Prática guiada no Unity`,
      tempo: `8 minutos`,
      guiaProfessor: `Confirme que cada aluno selecionou o objeto Player antes de adicionar o componente. O erro mais comum é criar o script solto na pasta sem anexá-lo ao objeto. Caminhe pela sala verificando o Inspector de cada um.`,
      atividade: `Selecione o objeto Player na cena. No Inspector, use Add Component para criar um novo script chamado MovimentoJogador e anexe-o ao objeto. Abra o script no editor de código.`,
      gabarito: `O aluno seleciona Player, clica em Add Component, digita MovimentoJogador, escolhe New Script e clica em Create and Add. No Inspector aparece o componente Movimento Jogador (Script) anexado ao Player. Ao clicar duas vezes, o editor abre o arquivo MovimentoJogador.cs com a estrutura padrão da classe.`,
    },
    {
      titulo: `Escrever a mensagem do Start`,
      tipo: `Programação em C#`,
      tempo: `8 minutos`,
      guiaProfessor: `Use este exercício para apresentar o Console (janela Console, menu Window > General > Console). Mostre que a mensagem aparece uma vez só ao clicar em Play, provando que Start roda apenas no começo.`,
      atividade: `Dentro da função Start, escreva uma linha que mostre no Console a mensagem indicando que o jogador está pronto. Clique em Play e confirme que a mensagem aparece uma única vez.`,
      gabarito: `void Start()
{
    Debug.Log("Jogador pronto para se mover.");
}

Ao clicar em Play, a frase Jogador pronto para se mover. aparece uma vez na janela Console. Se aparecer repetida, o aluno colocou o Debug.Log dentro do Update por engano.`,
    },
    {
      titulo: `Mover o cubo com o teclado`,
      tipo: `Programação em C#`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o núcleo da aula. Reforce a leitura de Input.GetAxis com Horizontal e Vertical e o uso de Time.deltaTime. Se o cubo voar rápido demais, provavelmente faltou multiplicar por Time.deltaTime.`,
      atividade: `Na função Update, leia as direções horizontal e vertical com Input.GetAxis, monte um Vector3 e use transform.Translate para mover o objeto. Multiplique pela velocidade e por Time.deltaTime. Teste com as setas ou com W, A, S, D.`,
      gabarito: `void Update()
{
    float horizontal = Input.GetAxis("Horizontal");
    float vertical = Input.GetAxis("Vertical");

    Vector3 movimento = new Vector3(horizontal, 0f, vertical);
    transform.Translate(movimento * velocidade * Time.deltaTime);
}

O cubo desliza pelo chão conforme o aluno aperta as teclas. O movimento é suave porque foi multiplicado por Time.deltaTime.`,
    },
    {
      titulo: `Ajustar a velocidade no Inspector`,
      tipo: `Experimentação e ajuste`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre o poder das variáveis públicas: mudar o valor no Inspector não exige reescrever código. Peça para testarem valores diferentes e observarem o efeito. Lembre que mudanças feitas durante o Play voltam ao normal quando o jogo para.`,
      atividade: `Garanta que a variável velocidade esteja declarada como public. No Inspector, troque o valor da velocidade para 3, depois para 10, e teste cada um. Anote qual valor deixou o jogo mais divertido.`,
      gabarito: `A linha public float velocidade = 5f; faz o campo Velocidade aparecer no Inspector do componente. Com valor 3 o cubo anda devagar; com valor 10 anda rápido. O aluno conclui que variáveis públicas permitem ajustar o jogo sem alterar o código.`,
    },
    {
      titulo: `Desafio: correr ao segurar Shift`,
      tipo: `Desafio com apoio do Claude`,
      tempo: `10 minutos`,
      guiaProfessor: `Desafio de dificuldade maior. Incentive o aluno a tentar sozinho e, ao travar, pedir ao Claude para explicar como detectar uma tecla segurada e como criar uma velocidade extra, sem entregar o código pronto. Aceite soluções diferentes que funcionem.`,
      atividade: `Crie uma segunda velocidade para correr. Quando o jogador segurar a tecla Shift esquerda, o cubo deve se mover mais rápido; ao soltar, volta à velocidade normal. Use o Claude para entender como detectar a tecla, mas escreva o código você mesmo.`,
      gabarito: `void Update()
{
    float horizontal = Input.GetAxis("Horizontal");
    float vertical = Input.GetAxis("Vertical");

    float velocidadeAtual = velocidade;
    if (Input.GetKey(KeyCode.LeftShift))
    {
        velocidadeAtual = velocidade * 2f;
    }

    Vector3 movimento = new Vector3(horizontal, 0f, vertical);
    transform.Translate(movimento * velocidadeAtual * Time.deltaTime);
}

Enquanto a tecla Shift esquerda está pressionada, Input.GetKey(KeyCode.LeftShift) retorna verdadeiro e a velocidade dobra. Ao soltar, o cubo volta à velocidade normal. Outras soluções que dobrem a velocidade de forma válida também são aceitas.`,
    },
  ],
};
