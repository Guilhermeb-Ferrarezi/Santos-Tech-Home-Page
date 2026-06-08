import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Balanceamento e Polimento",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Ajustar o equilíbrio do jogo (dificuldade, velocidade e pontuação) e adicionar polimento visual para deixar a experiência mais justa e agradável.`,
  descricao: `Nesta aula o jogo já funciona: ele tem movimento, regras, física, interface e som, e a turma já caçou os bugs na aula anterior. Agora o trabalho muda de natureza. Não se trata mais de fazer o jogo funcionar, e sim de fazer o jogo ficar bom de jogar. Esse ajuste fino tem dois lados que andam juntos: o balanceamento, que é deixar a dificuldade justa, e o polimento, que é deixar a experiência mais bonita e gostosa de sentir.

Balancear é mexer nos números do jogo. Quase tudo que parece difícil ou fácil demais é, no fundo, um número que pode ser ajustado: a velocidade do jogador, quanto tempo o inimigo demora para reagir, quantos pontos cada item vale, quanta vida o personagem tem. O segredo é que esses números não devem ficar escondidos dentro do código. Eles devem aparecer no Inspector da Unity, para que o aluno teste vários valores rapidamente sem reescrever o script. Essa ideia, que profissionais chamam de expor parâmetros, é o coração da aula.

Polir é cuidar do feedback que o jogo dá ao jogador. Quando o personagem pega uma moeda, algo precisa acontecer na tela: a moeda some com um efeito, a pontuação pisca, talvez a câmera dê uma leve sacudida. Esse retorno imediato faz o jogador sentir que suas ações têm peso. Polimento não muda as regras, mas muda completamente a sensação de jogar, e é o que separa um protótipo de um jogo de verdade.

O aluno entra nesta aula com as correções da aula 5 já aplicadas e o feedback dos colegas anotado. A missão é transformar esse feedback em mudanças concretas: se acharam o jogo rápido demais, baixar a velocidade; se a pontuação parecia injusta, reajustar os valores; se faltava emoção ao marcar ponto, adicionar um efeito visual. Ao final, a turma compara o jogo de antes e depois e percebe, na prática, o poder do balanceamento e do polimento.`,
  materiais: [
    `Computadores com Unity instalado e o projeto do jogo de cada aluno (com as correções da aula 5 aplicadas)`,
    `Editor de código (Visual Studio ou VS Code) configurado com o projeto`,
    `Projetor para o professor demonstrar como expor parâmetros no Inspector`,
    `Arquivo de exemplo: script Balanceamento.cs pronto, para consulta e comparação`,
    `Folha de feedback dos colegas, preenchida na aula 5, em mãos de cada aluno`,
    `Cronômetro ou timer na tela para controlar o ritmo da aula`,
  ],
  conceitosChave: [
    `Balanceamento — ajustar os números do jogo (velocidade, vida, pontos) para a dificuldade ficar justa e divertida.`,
    `Polimento — pequenos detalhes de som, imagem e movimento que deixam o jogo mais agradável, sem mudar as regras.`,
    `Parâmetro exposto — um valor do script marcado como public ou com SerializeField, que aparece no Inspector e pode ser mudado sem editar o código.`,
    `Game feel — a sensação física de jogar; o quanto os controles e as reações parecem gostosos e responsivos.`,
    `Iteração — repetir o ciclo testar, ajustar e testar de novo até o jogo ficar do jeito certo.`,
    `Feedback visual — resposta na tela (efeito, brilho, partícula) que avisa ao jogador que uma ação deu certo.`,
    `Curva de dificuldade — como o desafio do jogo cresce com o tempo, idealmente de forma suave e crescente.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Unity. Esta aula tem uma ideia central simples: os números que controlam o jogo devem ficar visíveis e fáceis de mudar. Quando um valor de um script aparece no Inspector (o painel à direita na Unity), o aluno arrasta ou digita um novo valor e testa na hora, sem mexer no código. É isso que permite balancear rápido.

Dois conceitos de código bastam. Quando uma variável é declarada como public, ela aparece no Inspector. Quando você quer que ela apareça mas continue protegida, usa o atributo SerializeField antes de uma variável private. Os dois funcionam; nesta aula usaremos SerializeField por ser a boa prática. Reforce sempre: mudar o número no Inspector NÃO altera o código, e o número volta ao do script quando você para de jogar. Por isso, o valor bom encontrado deve ser anotado e depois copiado para o script.

## Passo a passo da aula (10 / 15 / 25 / 10)

Aquecimento (10 min). Peça que cada aluno abra a folha de feedback da aula 5 e leia em voz alta uma frase do colega sobre o jogo. Anote no quadro três queixas comuns, por exemplo: rápido demais, pontuação confusa, sem emoção ao marcar ponto. Diga: hoje vamos transformar reclamação em número.

Conteúdo novo guiado (15 min). No projetor, abra um script de movimento e mostre como transformar um número fixo em parâmetro exposto. Em vez de um valor escondido, escreva:

using UnityEngine;

public class Balanceamento : MonoBehaviour
{
    [SerializeField] private float velocidade = 5f;
    [SerializeField] private int pontosPorItem = 10;
    [SerializeField] private int vidaInicial = 3;

    void Start()
    {
        Debug.Log("Velocidade atual: " + velocidade);
    }
}

Explique linha por linha: SerializeField faz a variável aparecer no Inspector; float guarda número com vírgula (velocidade); int guarda número inteiro (pontos, vida). No Debug.Log usamos o sinal de mais para juntar o texto com o número; evite strings interpoladas. Salve, volte à Unity, clique no objeto e mostre os três campos no Inspector. Mude a velocidade de 5 para 3 com o jogo rodando e todos veem o efeito.

Mão na massa (25 min). Cada aluno aplica o feedback no próprio jogo. Roteiro no quadro: 1) escolha um problema do feedback; 2) ache o número responsável no script e exponha com SerializeField; 3) teste três valores diferentes e anote qual ficou melhor; 4) repita com um segundo problema. Circule pela sala. Para polimento, mostre como tornar uma ação mais visível, por exemplo destruir o item coletado e logar o ganho:

void OnTriggerEnter(Collider outro)
{
    if (outro.CompareTag("Item"))
    {
        Debug.Log("Ganhou " + pontosPorItem + " pontos");
        Destroy(outro.gameObject);
    }
}

Desafio e compartilhar (10 min). Desafio: ajustar a curva de dificuldade fazendo a velocidade aumentar com o tempo. Depois, cada aluno mostra ao colega do lado o antes e o depois de um ajuste e explica por que ficou melhor.

## Como explicar de forma clara (linguagem para a idade)

Use a comparação do tempero: o jogo é a comida, e os números são o sal e o açúcar. A receita não muda, mas a quantidade certa faz toda a diferença. Balancear é provar e ajustar até ficar gostoso. Diga que ninguém acerta o número de primeira, nem os profissionais; eles testam dezenas de vezes. Para polimento, use a ideia do suco de fruta: o efeito visual é o respingo que faz a ação parecer suculenta e satisfatória.

## Erros comuns e como ajudar

O aluno muda o número no Inspector, gosta, fecha o jogo e o valor some: explique que o Inspector é um teste temporário e o valor bom precisa ser copiado para o script. Outro erro é a variável não aparecer no Inspector: quase sempre faltou salvar o script ou escrever SerializeField corretamente, com colchetes. Há quem queira mudar tudo de uma vez; oriente a mudar um número, testar, e só então o próximo, para saber o que causou cada efeito. Por fim, alguns confundem float e int: lembre que velocidade pede float (aceita vírgula) e pontos e vida pedem int (números inteiros).`,
  exercicios: [
    {
      titulo: `Caça aos números do jogo`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Aqueça o pensamento de balanceamento antes de tocar no código. Conduza como uma conversa rápida, anotando as respostas no quadro em duas colunas: o que o jogador sente e qual número causa isso.`,
      atividade: `Olhe seu jogo e a folha de feedback dos colegas. Liste pelo menos três coisas que poderiam ser controladas por um número (por exemplo: velocidade do jogador, pontos por item, vida inicial). Para cada uma, escreva se hoje ela parece alta, baixa ou certa.`,
      gabarito: `Resposta esperada: o aluno identifica ao menos três valores ajustáveis e os associa a uma sensação. Exemplos válidos: velocidade (alta, jogo corrido demais); pontosPorItem (baixa, demora a pontuar); vidaInicial (baixa, morre rápido); tempo de reação do inimigo; quantidade de itens na fase. Acerta quem liga cada número a um efeito percebido no jogo.`,
    },
    {
      titulo: `Expondo a velocidade no Inspector`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Garanta que cada aluno transforme um número fixo em parâmetro exposto e o veja no Inspector. Passe nas máquinas conferindo se o script foi salvo e se o campo apareceu. Esta é a habilidade base do mês.`,
      atividade: `No script de movimento, transforme a velocidade em um parâmetro exposto usando SerializeField. Salve, volte à Unity, selecione o personagem e confirme que o campo Velocidade aparece no Inspector. Com o jogo rodando, teste três valores e anote qual ficou melhor.`,
      gabarito: `Solução em C#:

using UnityEngine;

public class Movimento : MonoBehaviour
{
    [SerializeField] private float velocidade = 5f;

    void Update()
    {
        float horizontal = Input.GetAxis("Horizontal");
        transform.Translate(Vector3.right * horizontal * velocidade * Time.deltaTime);
    }
}

Acerta quem vê o campo Velocidade no Inspector e consegue mudar o valor com o jogo rodando.`,
    },
    {
      titulo: `Pontuação justa`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Agora o aluno expõe um valor inteiro (pontos) e usa concatenação com o sinal de mais no Debug.Log. Reforce a diferença entre float e int. Verifique se ninguém usou string interpolada.`,
      atividade: `Crie um parâmetro exposto pontosPorItem do tipo int. Ao coletar um item, mostre no Console quantos pontos foram ganhos, juntando texto e número com o sinal de mais. Teste valores 5, 10 e 20 e escolha o mais justo para o seu jogo.`,
      gabarito: `Solução em C#:

using UnityEngine;

public class Coletor : MonoBehaviour
{
    [SerializeField] private int pontosPorItem = 10;
    private int pontuacao = 0;

    void OnTriggerEnter(Collider outro)
    {
        if (outro.CompareTag("Item"))
        {
            pontuacao = pontuacao + pontosPorItem;
            Debug.Log("Pontos ganhos: " + pontosPorItem + " | Total: " + pontuacao);
            Destroy(outro.gameObject);
        }
    }
}

Acerta quem expõe pontosPorItem como int, soma corretamente e usa concatenação com mais, sem interpolação.`,
    },
    {
      titulo: `Polimento com feedback visual`,
      tipo: `Prática no computador`,
      tempo: `14 min`,
      guiaProfessor: `Aqui o foco passa do número para a sensação. O aluno adiciona um retorno visível ao coletar o item. Se houver sistema de partículas no projeto, mostre como instanciá-lo; se não, basta esconder o item e dar um retorno claro. Aceite soluções simples.`,
      atividade: `Adicione polimento à coleta de itens: ao pegar um item, ele deve sumir imediatamente e o jogo deve dar um retorno claro de que algo aconteceu. Se o projeto tiver um efeito de partícula, faça-o aparecer na posição do item coletado.`,
      gabarito: `Solução em C# (com efeito opcional exposto):

using UnityEngine;

public class ColetorPolido : MonoBehaviour
{
    [SerializeField] private int pontosPorItem = 10;
    [SerializeField] private GameObject efeitoColeta;

    void OnTriggerEnter(Collider outro)
    {
        if (outro.CompareTag("Item"))
        {
            if (efeitoColeta != null)
            {
                Instantiate(efeitoColeta, outro.transform.position, Quaternion.identity);
            }
            Debug.Log("Coletou! +" + pontosPorItem);
            Destroy(outro.gameObject);
        }
    }
}

Acerta quem faz o item sumir na hora e gera um retorno visível. A checagem efeitoColeta diferente de null evita erro quando o campo está vazio.`,
    },
    {
      titulo: `Curva de dificuldade crescente`,
      tipo: `Desafio de programação`,
      tempo: `14 min`,
      guiaProfessor: `Desafio final, mais avançado: o jogo deve ficar gradualmente mais difícil. Oriente o aluno a aumentar a velocidade aos poucos a cada segundo, expondo o ritmo de aumento. Ajude quem travar mostrando o uso de Time.deltaTime para crescer suave.`,
      atividade: `Faça a velocidade do jogador (ou do inimigo) aumentar lentamente com o tempo, criando uma curva de dificuldade. Exponha no Inspector tanto a velocidade inicial quanto o ritmo de aumento, para poder balancear sem mexer no código.`,
      gabarito: `Solução em C#:

using UnityEngine;

public class DificuldadeCrescente : MonoBehaviour
{
    [SerializeField] private float velocidadeInicial = 5f;
    [SerializeField] private float aumentoPorSegundo = 0.2f;
    [SerializeField] private float velocidadeMaxima = 15f;

    private float velocidadeAtual;

    void Start()
    {
        velocidadeAtual = velocidadeInicial;
    }

    void Update()
    {
        if (velocidadeAtual < velocidadeMaxima)
        {
            velocidadeAtual = velocidadeAtual + aumentoPorSegundo * Time.deltaTime;
        }

        float horizontal = Input.GetAxis("Horizontal");
        transform.Translate(Vector3.right * horizontal * velocidadeAtual * Time.deltaTime);
    }
}

Acerta quem expõe os três parâmetros, faz a velocidade crescer com Time.deltaTime e usa velocidadeMaxima como teto para a curva não disparar.`,
    },
  ],
};
