import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Claude na prática: pedindo ajuda de verdade",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Usar o Claude para resolver três tarefas reais de game dev — explicar um conceito de Unity, sugerir ideias de mecânica e resumir um problema de código — comparando respostas boas e ruins para saber quando confiar na IA e quando usar o próprio julgamento.`,
  descricao: `Na aula passada os alunos conheceram o Claude como copiloto. Agora eles vão colocar a mão na massa de verdade: em vez de só conversar, vão pedir ajuda para tarefas que aparecem todo dia em quem faz jogos. São três pedidos concretos — entender um conceito do Unity, inventar ideias de mecânica para um jogo e resumir o que está errado num trecho de código. O objetivo é que o aluno saia da aula sabendo pedir ajuda de um jeito que gera respostas úteis.

O coração da aula é a comparação. Os alunos vão ver, lado a lado, uma resposta boa e uma resposta fraca para o mesmo pedido. Uma resposta boa é específica, dá exemplos e explica o porquê. Uma resposta fraca é vaga, genérica ou foge do que foi perguntado. Ao comparar, o aluno aprende a reconhecer quando a IA realmente entregou algo de valor e quando apenas encheu linguiça. Esse olhar crítico é uma habilidade tão importante quanto saber programar.

O segundo ponto é o julgamento próprio. O Claude é rápido e sabe muito, mas pode errar, inventar um nome de função que não existe ou sugerir algo que não combina com o projeto do aluno. Por isso, a regra de ouro da aula é simples: a IA sugere, o aluno decide. O aluno testa no Unity, confere a documentação e só aceita o que faz sentido. A IA é uma assistente experiente, não a dona do projeto.

Ao final, cada aluno terá um pequeno registro com os três pedidos que fez, as respostas que recebeu e uma nota dizendo se confiaria ou não em cada resposta. Esse registro vira a base do entregável do mês: saber usar o Claude nos projetos de forma esperta e segura.`,
  materiais: [
    `Computadores com acesso ao Claude (site claude.ai) pelo navegador, um por aluno, com login feito antes da aula`,
    `Unity instalado e um projeto de exemplo aberto, para o aluno testar o que a IA explicar`,
    `Projetor ou TV para o professor mostrar a tela e demonstrar cada pedido ao Claude`,
    `Arquivo de exemplo com um trecho de código C# que contém um erro proposital (entregue ao aluno em texto ou em um script)`,
    `Folha impressa ou slide com a tabela de registro: pedido, resposta, eu confiaria? (sim/não) e por que`,
    `Slide com dois exemplos prontos: uma resposta boa e uma resposta fraca para o mesmo pedido, para a comparação inicial`,
  ],
  conceitosChave: [
    `Pedido (prompt) — a mensagem que escrevemos para a IA dizendo exatamente o que queremos que ela faça.`,
    `Resposta boa — uma resposta específica, com exemplo e explicação do porquê, que realmente ajuda na tarefa.`,
    `Resposta fraca — uma resposta vaga, genérica ou que foge do que foi perguntado e não ajuda de verdade.`,
    `Alucinação — quando a IA inventa algo que parece certo mas é falso, como o nome de uma função que não existe.`,
    `Julgamento próprio — a decisão do aluno de aceitar, ajustar ou recusar o que a IA sugeriu, testando antes de confiar.`,
    `Contexto — as informações que damos à IA (qual jogo, qual motor, o que já existe) para a resposta encaixar no projeto.`,
    `Verificar — conferir se o que a IA disse funciona mesmo, testando no Unity ou olhando a documentação oficial.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Claude nem o Unity para dar esta aula. O foco é o método de pedir ajuda, não a programação em si. O Claude funciona pelo navegador, no site claude.ai: o aluno digita o pedido na caixa de texto embaixo, aperta Enter e a resposta aparece acima. Cada conversa fica salva na lista da esquerda. Os três tipos de pedido desta aula são: pedir uma explicação (entender um conceito), pedir ideias (criar mecânicas) e pedir um resumo (entender um problema de código). A grande lição é que a IA sugere e o aluno decide. Deixe sempre o Unity aberto ao lado para o aluno testar o que receber.

## Passo a passo da aula

Aquecimento (10 min): Retome a aula anterior. Pergunte: o que o Claude fez de útil para vocês? Mostre no projetor o slide com duas respostas para o mesmo pedido, uma boa e uma fraca. Pergunte qual é melhor e por que. Conduza a turma a notar que a boa tem exemplo e explica o porquê.

Conteúdo novo guiado (15 min): Faça os três pedidos ao vivo no projetor. Primeiro, uma explicação de conceito. Digite na caixa do Claude: Explique de forma simples, para um adolescente, o que e o método Update() em um script do Unity em C#, e quando ele e chamado. De um exemplo curto. Mostre a resposta e o exemplo que ela traz, parecido com isto:

void Update()
{
    transform.Translate(Vector3.forward * Time.deltaTime);
}

Explique que esse código roda a cada quadro e move o objeto para a frente. Segundo, peca ideias: Sugira 3 ideias de mecanica para um jogo de plataforma 2D feito por iniciantes no Unity. Para cada ideia, diga em uma frase como ela funciona. Terceiro, resuma um problema: cole o trecho de código de exemplo (com erro) e peca: Resuma em poucas linhas qual e o provavel problema deste código e o que verificar. Depois de cada resposta, faca a pergunta-chave: eu confiaria nisso? Mostre como verificar no Unity.

Mão na massa (25 min): Cada aluno faz os três pedidos no seu computador e preenche a tabela de registro: o pedido, um resumo da resposta e uma nota dizendo se confiaria (sim ou não) e por que. Oriente que, no pedido do código, eles testem no Unity para ver se a sugestão da IA bate com a realidade. Circule pela sala ajudando a melhorar pedidos vagos.

Desafio + compartilhar (10 min): Cada aluno apresenta ao colega do lado o pedido que rendeu a melhor resposta e um pedido que rendeu uma resposta fraca, explicando a diferença. Dois ou três voluntários mostram no projetor.

## Como explicar de forma clara

Use a comparação do colega experiente. Diga que o Claude é como um amigo mais velho que já fez muitos jogos: ele dá dicas ótimas, mas às vezes erra ou chuta, então você sempre confere antes de seguir. Para resposta boa e fraca, use a ideia da receita de bolo: uma receita boa diz a quantidade de cada coisa e a ordem; uma fraca só diz misture tudo. Repita a frase a IA sugere, você decide até virar bordão da turma. Sempre mostre na tela antes de pedir que façam.

## Erros comuns e como ajudar

O erro mais comum é o pedido vago, do tipo me ajuda com Unity; ensine a dizer exatamente o que quer e sobre qual jogo. Outro erro é aceitar tudo sem testar; reforce que toda sugestão de código vai para o Unity antes de virar verdade. Alguns vão confundir uma resposta longa com uma resposta boa; mostre que tamanho não é qualidade, o que vale é ser específica e correta. Há quem se frustre quando a IA inventa uma função que não existe (alucinação); use isso a favor, como prova viva de por que precisamos verificar. Por fim, alguns esquecem de dar contexto; lembre-os de dizer qual motor, qual linguagem e o que o jogo já tem.`,
  exercicios: [
    {
      titulo: `Boa ou fraca?`,
      tipo: `roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor duas respostas para o mesmo pedido. Conduza a turma a apontar o que torna uma melhor: exemplo, clareza e o porquê. Anote os critérios no quadro.`,
      atividade: `Olhe as duas respostas do slide para o mesmo pedido e diga qual é a melhor e três motivos que justificam a sua escolha.`,
      gabarito: `A resposta boa é a que traz um exemplo concreto, explica o porquê e responde exatamente ao que foi pedido. Motivos válidos: tem exemplo, é específica, explica a razão, não foge do tema e é fácil de seguir.`,
    },
    {
      titulo: `Peça uma explicação de Unity`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Garanta que cada aluno escreva um pedido específico, dizendo motor (Unity), linguagem (C#) e idade do público. Confira se a resposta veio com exemplo.`,
      atividade: `Peça ao Claude para explicar, de forma simples, o que é o método Start() em um script do Unity em C# e quando ele é chamado, pedindo um exemplo curto.`,
      gabarito: `O pedido foi específico e a resposta explica que o Start() roda uma única vez, logo antes do primeiro quadro, sendo usado para preparar o objeto. Um exemplo correto:

void Start()
{
    Debug.Log("O jogo comecou");
}

Esse código mostra uma mensagem no console assim que o objeto entra em cena.`,
    },
    {
      titulo: `Três ideias de mecânica`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Peça que o aluno dê contexto do jogo (tipo, público, nível de dificuldade). Reforce que ele deve escolher só as ideias que combinam com o próprio projeto.`,
      atividade: `Peça ao Claude três ideias de mecânica para um jogo de plataforma 2D de iniciante no Unity. Depois, escolha uma ideia e escreva por que ela combina com o seu projeto.`,
      gabarito: `O aluno obtém três ideias claras, cada uma com uma frase de explicação (por exemplo: pulo duplo, plataformas que somem depois de pisar, moeda que dá impulso). Em seguida, ele escolhe uma e justifica com um motivo ligado ao próprio jogo, mostrando julgamento próprio em vez de aceitar tudo.`,
    },
    {
      titulo: `Resuma o problema do código`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Entregue o trecho com erro proposital. Oriente o aluno a colar o código e pedir um resumo do provável problema. Peça que ele teste no Unity antes de confiar.`,
      atividade: `Cole no Claude o código de exemplo abaixo e peça um resumo do provável problema e do que verificar. Depois confira no Unity.

public class Jogador : MonoBehaviour
{
    public float velocidade;

    void Update()
    {
        transform.Translate(Vector3.right * velocidade * Time.deltaTime);
    }
}`,
      gabarito: `O Claude deve apontar que a variável velocidade não recebeu um valor inicial: como começa em 0, o objeto não se move. O que verificar: definir velocidade no Inspector do Unity ou no código, por exemplo public float velocidade = 5f;. Ao testar no Unity com um valor maior que zero, o objeto passa a se mover para a direita.`,
    },
    {
      titulo: `Eu confiaria nisso?`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Recolha as tabelas de registro. Conduza a turma a justificar cada nota de confiança com base em verificação, não em achismo. Destaque um caso em que a IA errou.`,
      atividade: `Na sua tabela, dê uma nota de confiança (sim ou não) para as três respostas que você recebeu e escreva, em uma frase, por que confiaria ou não em cada uma.`,
      gabarito: `A tabela tem as três respostas com uma nota cada e uma justificativa baseada em evidência. Exemplo de boa justificativa: confio na explicação do Start() porque testei no Unity e funcionou; não confio totalmente na ideia de mecânica porque ela não cabe no meu jogo; só confio no resumo do código depois de conferir no Unity que a correção resolveu. O ponto-chave é que o aluno verificou antes de confiar.`,
    },
  ],
};
