import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Conversas que resolvem: refinar e tirar dúvidas",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Praticar o diálogo em várias rodadas com o Claude para refinar respostas, corrigir o rumo e aprofundar uma dúvida técnica de C# ou C++, montando um mini-guia de prompts úteis para reaproveitar nos projetos da trilha.`,
  descricao: `Nas aulas anteriores o aluno já aprendeu a abrir o Claude, pedir ajuda de verdade e escrever um primeiro prompt com clareza. Agora damos o próximo passo, que é o mais parecido com o trabalho real de quem cria games: conversar. Quase nunca a primeira resposta da IA é a resposta final. O segredo está em responder de volta, dar mais contexto e pedir ajustes até a solução ficar do jeito que o projeto precisa.

Esta aula mostra que falar com o Claude é uma conversa, não uma busca de uma pergunta só. O aluno vai treinar três movimentos poderosos: pedir esclarecimento quando não entende a resposta ("explica essa parte de outro jeito"), corrigir o rumo quando a IA seguiu por um caminho errado ("não era isso, na verdade eu quero que o personagem pule só uma vez") e aprofundar uma dúvida técnica de verdade em C# (Unity) ou C++ (Unreal), pedindo o porquê de cada linha do código.

Como esta é a trilha avançada e o ano final, os exemplos saem dos próprios projetos do aluno: um script de movimento no Unity, uma função que controla a câmera, ou um trecho de C++ na Unreal. O aluno não copia código sem entender. Ele usa a conversa em rodadas para chegar a um código que funciona e que ele consegue explicar com as próprias palavras.

No fim da aula, cada aluno começa a montar seu próprio mini-guia de prompts úteis, uma espécie de caderninho de frases que funcionam bem para refinar, corrigir e aprofundar. Esse guia vira uma ferramenta pessoal que ele leva para os projetos de VR, Unity e Unreal do restante do ano.`,
  materiais: [
    `Computadores com acesso ao Claude (navegador ou aplicativo) e ao Unity ou Unreal já abertos com um projeto do aluno`,
    `Projetor ligado para o professor mostrar a janela de conversa do Claude e demonstrar as rodadas de diálogo`,
    `Arquivo de exemplo: um script C# de movimento de personagem (MovimentoJogador.cs) com um pequeno erro proposital, para treinar a correção de rumo`,
    `Arquivo de exemplo em C++ (AbrePorta.cpp) com um trecho comentado, para a prática de aprofundar uma dúvida técnica`,
    `Documento ou modelo de "Mini-guia de prompts" (pode ser um arquivo de texto simples) para cada aluno preencher e salvar`,
    `Caderno ou bloco de notas digital para anotar os prompts que funcionaram melhor`,
  ],
  conceitosChave: [
    `Conversa em rodadas — trocar várias mensagens com o Claude, uma respondendo à outra, em vez de fazer uma pergunta única e parar.`,
    `Refinar — pedir ao Claude que melhore ou ajuste a resposta anterior, deixando-a mais perto do que o projeto precisa.`,
    `Pedir esclarecimento — quando você não entende a resposta, pedir que a IA explique de outro jeito ou com um exemplo mais simples.`,
    `Corrigir o rumo — avisar o Claude que ele entendeu errado e dizer com clareza o que você realmente queria.`,
    `Aprofundar — pedir o porquê de cada parte do código, indo além do "funciona", para realmente entender o que cada linha faz.`,
    `Contexto da conversa — tudo o que já foi dito naquele bate-papo; o Claude lembra das mensagens anteriores e usa isso para responder melhor.`,
    `Mini-guia de prompts — caderninho pessoal de frases que funcionam bem, para reaproveitar em projetos futuros sem ter que inventar do zero toda vez.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser um especialista em C# ou C++ para dar esta aula. O ponto central é simples e poderoso: conversar com o Claude é melhor do que perguntar uma vez só. A primeira resposta quase nunca é a definitiva, e isso é normal. O bom usuário da IA responde de volta, dá mais contexto e pede ajustes até a solução ficar redonda.

Antes da aula, abra o Claude no seu computador e faça um teste rápido: peça um script simples e, na mensagem seguinte, peça uma mudança ("agora faça o personagem pular só uma vez"). Veja como o Claude lembra do que foi dito antes. Esse "lembrar" se chama contexto da conversa, e é o coração da aula de hoje. Deixe abertos os dois arquivos de exemplo: o MovimentoJogador.cs (com um erro proposital) e o AbrePorta.cpp.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

1. Aquecimento (10 min): retome a Aula 3. Pergunte: "O que faz um bom prompt?" Recolha respostas (ser claro, dar contexto, dizer o objetivo). Então provoque: "E se a resposta não vier perfeita de primeira? A gente desiste ou conversa?" Mostre no projetor uma conversa sua já pronta, com duas ou três rodadas, para a turma ver que a resposta vai melhorando.

2. Conteúdo novo guiado (15 min): apresente os três movimentos da conversa. (a) Pedir esclarecimento: digite no Claude algo como "Não entendi a parte do Update. Pode explicar de outro jeito, mais simples?". (b) Corrigir o rumo: mostre o script abaixo no projetor e digite "Esse código deixa o personagem voar. Eu quero que ele pule só quando estiver no chão. Corrija." O código de exemplo, em C# do Unity, sem strings interpoladas:

using UnityEngine;

public class MovimentoJogador : MonoBehaviour
{
    public float forcaPulo = 5f;
    private Rigidbody2D corpo;
    private bool noChao = true;

    void Start()
    {
        corpo = GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space) && noChao)
        {
            corpo.velocity = new Vector2(corpo.velocity.x, forcaPulo);
            noChao = false;
        }
    }

    void OnCollisionEnter2D(Collision2D colisao)
    {
        noChao = true;
    }
}

Explique cada parte: forcaPulo guarda a força do pulo; noChao diz se o personagem pode pular; o if dentro do Update checa a tecla espaço E se está no chão; o OnCollisionEnter2D devolve o valor noChao para verdadeiro quando toca o chão. (c) Aprofundar: peça ao Claude "Explique, linha por linha, por que eu preciso da variável noChao."

3. Mão na massa (25 min): cada aluno abre o Claude e o seu próprio projeto. Tarefa: escolher uma dúvida real (de C# no Unity ou C++ na Unreal) e resolver em pelo menos três rodadas de conversa, usando os três movimentos. Por exemplo, em C++ na Unreal, pedir para explicar o que cada parte de uma função faz e, em seguida, pedir uma versão comentada. Circule pela sala lembrando: "Já pediu para explicar de outro jeito? Já corrigiu o rumo?"

4. Desafio + compartilhar (10 min): cada aluno copia para o seu mini-guia de prompts os três a cinco prompts que mais funcionaram (um de esclarecer, um de corrigir, um de aprofundar). Dois ou três voluntários leem em voz alta o melhor prompt do dia.

## Como explicar de forma clara (linguagem para a idade)

Compare a conversa com a IA a um treino de jogo com um técnico: você tenta, o técnico corrige, você tenta de novo, e a cada rodada fica melhor. Diga que mandar uma pergunta e parar é como jogar uma partida só; conversar em rodadas é jogar o campeonato inteiro. Reforce que pedir "explica de outro jeito" não é vergonha, é inteligência: o aluno que entende o código vence o que só copia.

## Erros comuns e como ajudar

- Aceitar a primeira resposta sem testar: incentive a sempre rodar o código no Unity ou Unreal antes de dar por pronto.
- Copiar sem entender: peça que o aluno explique a você, em voz alta, o que uma linha faz; se não souber, mande perguntar ao Claude.
- Prompt de correção vago ("tá errado"): ensine a dizer o que esperava e o que aconteceu de fato.
- Desistir após uma rodada: lembre que duas ou três rodadas costumam ser o normal, não um sinal de fracasso.`,
  exercicios: [
    {
      titulo: `Caça ao contexto da conversa`,
      tipo: `Prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `O objetivo é o aluno perceber, na prática, que o Claude lembra do que foi dito antes. Conduza no projetor primeiro, depois deixe cada aluno repetir no seu computador. Não precisa de projeto aberto ainda.`,
      atividade: `No Claude, peça um personagem inventado com um nome. Na mensagem seguinte, escreva apenas: "Qual era o nome dele mesmo?". Veja se o Claude lembra. Depois peça: "Agora deixe esse mesmo personagem mais corajoso."`,
      gabarito: `O Claude responde lembrando o nome dado na primeira mensagem e ajusta a descrição mantendo o mesmo personagem. O aluno conclui que a IA usa o contexto da conversa, ou seja, lembra das mensagens anteriores do mesmo bate-papo.`,
    },
    {
      titulo: `Explica de outro jeito`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Treine o movimento de pedir esclarecimento. Use o script MovimentoJogador.cs no projetor. Reforce que pedir uma explicação mais simples é sinal de bom aluno, não de fraqueza.`,
      atividade: `Cole o script de movimento no Claude e peça que explique o que o método Update faz. Se a explicação ficar difícil, responda: "Não entendi. Pode explicar como se eu tivesse 10 anos, com um exemplo do dia a dia?".`,
      gabarito: `Na segunda rodada o Claude entrega uma explicação mais simples, com uma comparação do cotidiano (por exemplo: o Update é como verificar, a cada instante, se a tecla foi apertada). O aluno consegue repetir com as próprias palavras o que o Update faz.`,
    },
    {
      titulo: `Corrige o rumo: o personagem que voa`,
      tipo: `Resolução de problema`,
      tempo: `12 min`,
      guiaProfessor: `Aqui o aluno treina corrigir a IA. Entregue uma versão do script SEM a checagem do chão (o personagem pula no ar infinitamente). O aluno deve descrever o problema com clareza e pedir a correção, depois testar no Unity.`,
      atividade: `O seu personagem está pulando no ar quantas vezes quiser. Escreva ao Claude um pedido de correção bem claro: diga o que acontece hoje e o que você quer que aconteça (pular só quando estiver no chão). Aplique a resposta e teste no Unity.`,
      gabarito: `Solução em C# do Unity, com a checagem do chão funcionando:

using UnityEngine;

public class MovimentoJogador : MonoBehaviour
{
    public float forcaPulo = 5f;
    private Rigidbody2D corpo;
    private bool noChao = true;

    void Start()
    {
        corpo = GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space) && noChao)
        {
            corpo.velocity = new Vector2(corpo.velocity.x, forcaPulo);
            noChao = false;
        }
    }

    void OnCollisionEnter2D(Collision2D colisao)
    {
        noChao = true;
    }
}

O aluno acerta quando o pulo só acontece com noChao verdadeiro e o personagem volta a poder pular ao tocar o chão.`,
    },
    {
      titulo: `Aprofundar uma dúvida de C++`,
      tipo: `Atividade em dupla`,
      tempo: `13 min`,
      guiaProfessor: `Em duplas, os alunos usam o arquivo AbrePorta.cpp da Unreal. O foco é aprofundar: não basta o código funcionar, eles devem entender o porquê de cada parte. Peça que escrevam um comentário próprio em cada linha-chave.`,
      atividade: `Em dupla, cole no Claude a função abaixo (de C++ na Unreal) e peça, em rodadas: (1) o que cada linha faz; (2) por que usamos AddActorLocalRotation; (3) uma versão com comentários em português. Depois, escrevam com as próprias palavras o que a função faz.

void AAbrePorta::AbrirPorta(float DeltaTime)
{
    FRotator NovaRotacao = FRotator(0.0f, 90.0f, 0.0f);
    AddActorLocalRotation(NovaRotacao * DeltaTime);
}`,
      gabarito: `Versão comentada esperada:

void AAbrePorta::AbrirPorta(float DeltaTime)
{
    // Cria uma rotacao de 90 graus no eixo Y (giro horizontal)
    FRotator NovaRotacao = FRotator(0.0f, 90.0f, 0.0f);
    // Aplica um pouco dessa rotacao a cada quadro, usando DeltaTime para ficar suave
    AddActorLocalRotation(NovaRotacao * DeltaTime);
}

A dupla deve explicar que AddActorLocalRotation gira o objeto (a porta) em relação a ele mesmo, e que multiplicar por DeltaTime faz o giro acontecer de forma suave e igual em qualquer computador, independentemente da velocidade da máquina.`,
    },
    {
      titulo: `Meu mini-guia de prompts`,
      tipo: `Projeto curto`,
      tempo: `15 min`,
      guiaProfessor: `Este é o entregável do dia e alimenta o entregável do mês. Cada aluno cria um documento pessoal com prompts que funcionam, separados por tipo: esclarecer, corrigir e aprofundar. Oriente a salvar para reutilizar nos projetos de VR, Unity e Unreal.`,
      atividade: `Crie um documento chamado "Meu mini-guia de prompts". Anote pelo menos cinco prompts que funcionaram hoje, organizados em três grupos: ESCLARECER, CORRIGIR e APROFUNDAR. Ao lado de cada um, escreva em uma frase quando usar aquele prompt.`,
      gabarito: `O guia está completo quando tem ao menos cinco prompts divididos nos três grupos. Exemplos válidos: ESCLARECER — "Pode explicar essa parte de outro jeito, com um exemplo do dia a dia?". CORRIGIR — "Hoje acontece X, mas eu quero Y; corrija o código e diga o que mudou." APROFUNDAR — "Explique, linha por linha, por que essa variável é necessária." Cada prompt deve vir com uma frase dizendo quando usá-lo.`,
    },
  ],
};
