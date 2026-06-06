import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Variáveis e lógica em ação",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprofundar o uso de variáveis e seus tipos em C#, expondo-as no Inspector com campos públicos para girar e mover objetos pelo tempo, testando valores em tempo real e depurando erros do Console com a ajuda do Claude.`,
  descricao: `Na aula passada os alunos escreveram o primeiro script e entenderam os métodos Start e Update. Agora eles vão mais fundo no coração da programação: as variáveis. Uma variável é como uma caixinha com nome que guarda um valor (um número, um texto, um sim ou não). Nesta aula o aluno aprende os tipos mais usados no Unity (float, int, bool e Vector3) e descobre algo muito poderoso: quando uma variável é pública, ela aparece no Inspector e pode ser ajustada com o mouse, sem mexer no código.

O grande momento da aula é ver o objeto reagir ao tempo. Usando o método Update, que roda a cada quadro (frame), e a variável Time.deltaTime, o aluno faz um cubo girar sozinho e depois mover continuamente. A velocidade vira uma variável pública: o aluno troca o número no Inspector enquanto o jogo está rodando e vê o efeito na hora. Essa experiência de mexer e ver acontecer na mesma hora é o que torna a programação de games tão envolvente para a idade.

A lógica entra quando o aluno combina uma variável bool (verdadeiro ou falso) com uma condição if para ligar e desligar a rotação. Aqui ele percebe que o código não é só uma lista de ordens: ele toma decisões. Pequenas escolhas com if abrem a porta para tudo que um jogo faz depois (pular, atirar, ganhar pontos).

Por fim, errar faz parte. O aluno vai ler mensagens vermelhas no Console, entender que cada erro aponta um arquivo e uma linha, e praticar como copiar essa mensagem e pedir ajuda ao Claude de forma clara. Depurar com calma, lendo o que a máquina diz, é uma habilidade tão importante quanto escrever o código certo.`,
  materiais: [
    `Computadores com Unity (versão LTS) e Visual Studio (ou VS Code) instalados, com C# funcionando, um por aluno`,
    `Projeto do mês já aberto, com uma cena contendo o chão e o personagem ou um cubo de teste`,
    `Projetor ou TV para o professor demonstrar cada passo no Editor e no Inspector`,
    `Arquivo de exemplo Girador.cs pronto, para comparar ao final e ajudar quem travar`,
    `Acesso ao Claude (no navegador) para praticar a leitura de erros e pedir explicações`,
    `Folha impressa com a tabela de tipos (float, int, bool, Vector3) e a estrutura do if`,
  ],
  conceitosChave: [
    `Variável — uma caixinha com nome que guarda um valor para usarmos depois no código.`,
    `Tipo — o que cabe na caixinha: int (número inteiro), float (número com vírgula), bool (verdadeiro ou falso), string (texto).`,
    `Vector3 — um valor com três números (x, y, z) usado para posição, rotação e direção no espaço 3D.`,
    `Campo público — variável marcada com public que aparece no Inspector para ser ajustada com o mouse.`,
    `Time.deltaTime — o tempo, em segundos, que passou desde o quadro anterior; usamos para o movimento ficar suave em qualquer computador.`,
    `Condição if — um teste que decide se um bloco de código roda ou não, conforme algo ser verdadeiro ou falso.`,
    `Console — a janela do Unity que mostra mensagens, avisos e erros do nosso código.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar C#. Esta aula gira em torno de uma ideia simples: guardar valores em variáveis e usá-los para mover ou girar um objeto. No Unity, todo script é uma classe que herda de MonoBehaviour. As variáveis declaradas no topo, antes dos métodos, são os campos. Se você escrever public na frente, o campo aparece no Inspector quando o objeto estiver selecionado. O método Update roda uma vez por quadro; por isso multiplicamos qualquer movimento por Time.deltaTime, para que fique igual em máquinas rápidas e lentas. Para girar usamos transform.Rotate; para mover usamos transform.Translate. Importante: em C# nesta aula NÃO usaremos strings interpoladas; quando precisar montar um texto, use concatenação com o sinal de mais. No Console (menu Window, depois General, depois Console), erros aparecem em vermelho e sempre indicam o arquivo e a linha.

## Passo a passo da aula

Aquecimento (10 min): Retome a aula passada com uma pergunta: o que era Start e o que era Update? Mostre uma caixa de sapato e diga que é uma variável: tem um nome (escrito de fora) e guarda algo dentro. Pergunte que tipos de coisa um jogo precisa guardar (vida, pontos, velocidade). Anote no quadro: int, float, bool.

Conteúdo novo guiado (15 min): No projetor, crie um script chamado Girador no personagem ou num cubo. Abra no editor e digite, explicando cada linha:

using UnityEngine;

public class Girador : MonoBehaviour
{
    public float velocidade = 90f;
    public bool girando = true;

    void Update()
    {
        if (girando)
        {
            transform.Rotate(0f, velocidade * Time.deltaTime, 0f);
        }
    }
}

Explique: velocidade e girando são públicas, então aparecem no Inspector. O if testa girando; se for verdadeiro, o objeto gira no eixo Y. Salve, volte ao Unity, aperte Play e mude velocidade no Inspector enquanto roda. Desmarque girando e mostre que o cubo para.

Mão na massa (25 min): Cada aluno cria o Girador, faz o objeto girar e ajusta a velocidade no Inspector. Depois troca a rotação por movimento, usando transform.Translate(0f, 0f, velocidade * Time.deltaTime), e testa de novo. Quem terminar liga e desliga com o campo girando. Circule pela sala e peça que cada um diga, em voz alta, o que cada variável guarda.

Desafio + compartilhar (10 min): Desafio: criar uma segunda variável pública (por exemplo, velocidadeSubida) e fazer o objeto subir devagar enquanto gira. Dois ou três alunos mostram no projetor e explicam quais valores usaram.

## Como explicar de forma clara

Use a imagem da caixinha: o tipo é o tamanho da caixa (número inteiro, número com vírgula, sim/não). Diga que public é como colocar a caixinha na vitrine, para qualquer um ajustar de fora (no Inspector), e private é guardar no estoque. Para Time.deltaTime, conte que computadores correm em velocidades diferentes, e esse numerinho faz o jogo andar igual em todos. O if é uma porta: só passa quem responde verdadeiro. Sempre mostre na tela antes de mandar fazer, e fale o nome de cada parte enquanto aponta.

## Erros comuns e como ajudar

O erro mais comum é esquecer o ponto e vírgula no fim da linha; o Console aponta a linha e o aluno corrige. Outro é trocar letras maiúsculas e minúsculas: velocidade é diferente de Velocidade, e o C# diferencia. Muitos esquecem o f depois do número com vírgula (90f) e veem um aviso de conversão. Alguns colocam a rotação em Start e estranham que só gira uma vez; lembre que movimento contínuo vai em Update. Se o campo não aparecer no Inspector, quase sempre falta o public ou o script tem erro e não compilou. Ensine o ritual: leia a mensagem vermelha, veja o arquivo e a linha, e, se não entender, copie o texto do erro e cole no Claude pedindo uma explicação simples e a possível correção.`,
  exercicios: [
    {
      titulo: `Caixa de variáveis`,
      tipo: `exercício escrito`,
      tempo: `5 minutos`,
      guiaProfessor: `Entregue a folha com os tipos. Confira se cada aluno escolhe o tipo coerente com o que o valor representa.`,
      atividade: `Para cada coisa do jogo, escreva o tipo certo (int, float, bool ou string): pontos do jogador, velocidade do carro, se o portão está aberto, nome do personagem.`,
      gabarito: `pontos do jogador = int; velocidade do carro = float; se o portão está aberto = bool; nome do personagem = string.`,
    },
    {
      titulo: `O cubo que gira`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Verifique se o script está anexado ao objeto e se o aluno apertou Play. Lembre do f em 90f e do ponto e vírgula.`,
      atividade: `Crie o script Girador, anexe ao cubo e faça ele girar sozinho no eixo Y ao apertar Play, usando uma variável pública de velocidade.`,
      gabarito: `using UnityEngine;

public class Girador : MonoBehaviour
{
    public float velocidade = 90f;

    void Update()
    {
        transform.Rotate(0f, velocidade * Time.deltaTime, 0f);
    }
}`,
    },
    {
      titulo: `Ajuste no Inspector`,
      tipo: `prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre que dá para mudar o valor com o Play rodando. Garanta que o campo velocidade está visível no Inspector.`,
      atividade: `Com o jogo rodando, mude o valor de velocidade no Inspector para 30, depois para 200, e observe a diferença na rotação. Anote o que aconteceu.`,
      gabarito: `Com velocidade 30 o cubo gira devagar; com 200 gira muito rápido. O aluno percebe que o campo público controla a rotação em tempo real, sem mexer no código. (Lembrar: ao parar o Play, o valor volta ao que estava salvo.)`,
    },
    {
      titulo: `Ligar e desligar com if`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Reforce a ideia do if como porta. Confira se o aluno marca e desmarca o campo girando no Inspector e vê o efeito.`,
      atividade: `Adicione uma variável bool pública chamada girando e use um if para que o cubo só gire quando girando estiver marcado.`,
      gabarito: `using UnityEngine;

public class Girador : MonoBehaviour
{
    public float velocidade = 90f;
    public bool girando = true;

    void Update()
    {
        if (girando)
        {
            transform.Rotate(0f, velocidade * Time.deltaTime, 0f);
        }
    }
}`,
    },
    {
      titulo: `Lendo o erro com o Claude`,
      tipo: `depuração`,
      tempo: `7 minutos`,
      guiaProfessor: `Peça que removam de propósito um ponto e vírgula para gerar o erro. Ensine o ritual: ler a mensagem, achar o arquivo e a linha, e pedir ajuda ao Claude com um prompt claro.`,
      atividade: `Apague um ponto e vírgula do script para gerar um erro no Console. Leia a mensagem vermelha, identifique o arquivo e a linha e escreva um pedido de ajuda ao Claude. Depois corrija.`,
      gabarito: `O aluno mostra que o Console aponta o arquivo Girador.cs e o número da linha do erro (por exemplo, "; expected"). Um bom pedido ao Claude seria algo como: "Estou no Unity com C# e apareceu este erro no Console: [colar a mensagem]. O que significa e como corrijo?". A correção é recolocar o ponto e vírgula no fim da linha; ao salvar, o erro some do Console.`,
    },
  ],
};
