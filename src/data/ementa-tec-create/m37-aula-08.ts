import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Meu kit Claude: fechando o entregável do mês",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada aluno organiza um Project no Claude com arquivos, prompts salvos e Artifacts úteis e demonstra, do início ao fim, um fluxo real de pedir ajuda em um projeto de game da trilha avançada.`,
  descricao: `Esta é a última aula do mês e a hora de juntar tudo o que foi aprendido sobre o Claude. Durante as sete aulas anteriores, o aluno descobriu o que é o Claude, aprendeu a pedir ajuda de verdade, treinou a arte do prompt, refinou conversas, deu contexto enviando arquivos, gerou referências melhores a partir do próprio projeto e criou Artifacts dentro de Projects. Agora ele monta o seu kit pessoal: um Project bem organizado que vira a base de trabalho dele para o resto do Ano 4, quando for criar a experiência em Realidade Virtual no Unity, o jogo no Unity com assets do Blender e o jogo na Unreal Engine com assets do Maya.

A ideia central é que o Claude não é um lugar onde se pede uma coisa e some. É um espaço de trabalho que o aluno cuida e melhora. Um Project guarda o contexto (descrição do jogo, instruções de como o Claude deve responder, arquivos de referência), as conversas ficam salvas e os Artifacts (trechos de código C#, listas de tarefas, checklists) podem ser reabertos e reaproveitados. Para um adolescente da trilha avançada, ter esse kit pronto significa começar qualquer projeto de game já com um assistente que conhece o contexto e responde do jeito certo.

O entregável do mês é exatamente este: saber usar o Claude como assistente nos projetos de games. Por isso a aula é prática e demonstrativa. Cada aluno termina com um Project nomeado, com instruções escritas, pelo menos um arquivo anexado, prompts salvos que ele costuma usar e um ou mais Artifacts guardados. Em seguida, ele faz uma demonstração curta de um fluxo completo: parte de um problema real do projeto de game, escreve um bom prompt com contexto, recebe a resposta, refina e salva o resultado.

O papel do professor hoje é de organizador e mestre de cerimônias. Você não apresenta nenhuma ferramenta totalmente nova: revisa e consolida. Ajuda cada aluno a arrumar o seu Project, confere se as peças do kit estão no lugar e conduz as demonstrações finais com clima de fechamento e orgulho, lembrando que esse kit vai acompanhar o aluno nos próximos meses do ano mais avançado da trilha.`,
  materiais: [
    `Computadores ligados, com o navegador aberto na conta do Claude de cada aluno (claude.ai) já logada e testada antes da aula.`,
    `Projetor ou TV grande, conectado e testado, para o professor mostrar onde clicar e para as demonstrações finais dos alunos aparecerem para a turma.`,
    `Arquivos de exemplo prontos para anexar: um trecho de código C# de um script do Unity, um documento curto com a descrição de um jogo e uma imagem de referência (concept ou screenshot).`,
    `Um modelo de instruções de Project escrito pelo professor, para servir de exemplo na lousa ou no projetor.`,
    `Roteiro impresso do fluxo completo de demonstração (problema, prompt, resposta, refino, salvar), um por aluno.`,
    `Lista com a ordem das demonstrações finais e um espaço (mural ou pasta compartilhada) para registrar os Projects criados pela turma.`,
  ],
  conceitosChave: [
    `Project — espaço de trabalho no Claude que guarda contexto, instruções, arquivos e conversas de um mesmo assunto, em um só lugar.`,
    `Instruções do Project (custom instructions) — texto fixo onde você diz ao Claude quem você é, qual é o jogo e como ele deve responder em todas as conversas daquele Project.`,
    `Artifact — bloco de conteúdo que o Claude cria numa janela própria ao lado da conversa, como um trecho de código C# ou uma lista, que você pode reabrir e reaproveitar.`,
    `Knowledge do Project — os arquivos anexados ao Project (scripts, documentos, imagens) que o Claude usa como referência em todas as conversas dali.`,
    `Prompt salvo — um pedido bem escrito que você guarda para reusar, em vez de digitar tudo de novo a cada projeto novo.`,
    `Fluxo completo — o caminho de ponta a ponta de pedir ajuda: problema, prompt com contexto, resposta, refino e salvar o resultado.`,
    `Kit Claude — o conjunto pronto (Project organizado, instruções, arquivos, prompts e Artifacts) que vira a sua base de trabalho com a IA.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você consolida o mês inteiro, então não há ferramenta nova: tudo já apareceu nas aulas anteriores. O foco é organizar e demonstrar. Cada aluno vai sair com um Project arrumado no Claude e com a confiança de fazer um fluxo completo de pedir ajuda sozinho. Antes da aula, entre na sua conta em claude.ai, confira o menu Projects na barra lateral esquerda e crie um Project de exemplo para usar no projetor.

Relembre os passos essenciais. Para criar um Project: na barra lateral esquerda, clique em Projects e depois no botão de novo Project (sinal de mais ou "New project"), dê um nome (por exemplo, Jogo Unity Ano 4) e confirme. Dentro do Project, há dois lugares-chave: o campo de instruções (botão Instructions ou "Set instructions", onde você cola o texto fixo de contexto) e a área de arquivos (botão Add content, "Add files" ou o ícone de clipe, onde se anexa o Knowledge). Para salvar um Artifact, basta gerá-lo na conversa: o Claude abre uma janela ao lado, e como a conversa fica dentro do Project, o Artifact continua acessível ao reabrir aquela conversa. Teste anexar um arquivo e gerar um Artifact antes da aula para não travar na frente da turma.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

1. Aquecimento e revisão (10 min). Pergunte à turma o que cada aula do mês ensinou e vá listando na lousa: pedir ajuda, prompt bom, refinar, dar contexto com arquivos, gerar referências, Artifacts e Projects. Diga que hoje todas essas peças viram um kit só.

2. Conteúdo novo guiado (15 min). No projetor, monte um Project do zero. Clique em Projects, depois em New project, e nomeie como Jogo Unity Ano 4. Abra Instructions e cole um texto de contexto, por exemplo: "Você e meu assistente de programacao de games. Estou criando um jogo no Unity com C# e assets do Blender. Responda em portugues, com passos curtos e o código comentado." Em seguida, clique em Add content e anexe um arquivo de exemplo, como um script C#. Mostre que esse contexto vale para todas as conversas dali.

3. Mão na massa (25 min). Cada aluno monta o próprio kit: cria o Project, escreve as instruções, anexa pelo menos um arquivo e salva um prompt que costuma usar. Depois faz o fluxo completo a partir de um problema real. Como exemplo de pedido de código, peça ao Claude um script simples de movimento do jogador no Unity. Um resultado típico que ele pode gerar como Artifact:

using UnityEngine;

public class PlayerMover : MonoBehaviour
{
    public float velocidade = 5f;

    void Update()
    {
        float x = Input.GetAxis("Horizontal");
        float z = Input.GetAxis("Vertical");
        Vector3 movimento = new Vector3(x, 0f, z);
        transform.Translate(movimento * velocidade * Time.deltaTime);
    }
}

Explique cada parte: a variável velocidade controla a rapidez; o método Update roda todo quadro; Input.GetAxis lê as teclas de direção; o Vector3 junta as direções; e Translate move o objeto, multiplicando por Time.deltaTime para o movimento ficar igual em qualquer computador. Oriente o aluno a refinar ("deixe o pulo com a barra de espaço") e a guardar o Artifact.

4. Desafio e compartilhar (10 min). Cada aluno (ou alguns, conforme o tempo) demonstra no projetor o seu fluxo completo: mostra o problema, o prompt com contexto, a resposta, um refino e o resultado salvo. Puxe os aplausos e registre os Projects no mural da turma.

## Como explicar de forma clara (linguagem para a idade)

Para adolescentes, compare o Project a um vestiário de time: é o lugar onde você guarda o seu material e chega já pronto para jogar. As instruções são como combinar as regras antes da partida: você diz uma vez e vale para todas as conversas. O Artifact é como uma gaveta organizada: o código fica guardado e você abre de novo quando precisar, sem digitar tudo outra vez. Use a frase de ouro: "Você não pede ajuda e some; você monta um assistente que já conhece o seu jogo." Mostre sempre você primeiro, devagar, e só depois solte a turma.

## Erros comuns e como ajudar

- Confundir Project com conversa solta: reforce que o Project guarda tudo junto; mostre a conversa aparecendo dentro do Project.
- Instruções vazias ou genéricas: ajude o aluno a dizer quem ele é, qual o jogo e como quer a resposta (idioma, passos curtos, código comentado).
- Esquecer de anexar arquivo: lembre que sem o Knowledge o Claude tem menos contexto; conduza o clique em Add content.
- Aceitar o primeiro código sem testar nem refinar: incentive pelo menos um refino e a leitura do que cada parte do script faz.
- Travar na demonstração final: tenha o Project já aberto e o roteiro do fluxo em mãos; o importante é o aluno mostrar o caminho, não a perfeição.`,
  exercicios: [
    {
      titulo: `Criando o seu Project e dando um nome`,
      tipo: `Prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Conduza a turma na criação do Project, passo a passo, com você na frente no projetor. Na barra lateral esquerda do Claude, clique em Projects e depois no botão de novo Project (sinal de mais ou "New project"). Peça que cada aluno escolha um nome ligado ao seu projeto de game, por exemplo Jogo Unity Ano 4 ou Experiência VR. Circule conferindo se o Project foi criado e se aparece na lista da lateral. O objetivo é todos terem um espaço de trabalho nomeado antes de seguir.`,
      atividade: `1. Na barra lateral esquerda, clique em Projects.
2. Clique no botão de novo Project (sinal de mais ou "New project").
3. Dê um nome ligado ao seu jogo, como Jogo Unity Ano 4.
4. Confirme e veja o Project aparecer na lista da lateral.`,
      gabarito: `Acertou quem cria um Project com nome claro e o vê listado na barra lateral. Exemplo de sucesso: o aluno abre Projects, clica em New project, escreve Jogo Unity Ano 4 e o Project passa a aparecer na lista. Pequenos ajustes de nome com ajuda do professor contam como acerto. O objetivo é ter o espaço de trabalho criado e identificado.`,
    },
    {
      titulo: `Escrevendo as instruções do Project`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre como abrir as instruções: dentro do Project, clique em Instructions (ou "Set instructions"). Explique que esse texto é fixo e vale para todas as conversas daquele Project. Peça que cada aluno escreva quem é, qual jogo está criando e como quer a resposta. Ofereça um modelo na lousa, como: "Você e meu assistente de programacao de games. Estou criando um jogo no Unity com C# e assets do Blender. Responda em portugues, com passos curtos e o código comentado." Circule ajudando a deixar as instruções específicas, não genéricas.`,
      atividade: `1. Dentro do seu Project, clique em Instructions.
2. Escreva quem você é e qual jogo está criando (Unity, Unreal ou VR).
3. Diga como quer a resposta: em português, com passos curtos e código comentado.
4. Salve e confira se o texto ficou guardado nas instruções.`,
      gabarito: `Acertou quem escreve instruções específicas com os três pontos: quem é o aluno, qual o jogo e como o Claude deve responder. Exemplo de instrução correta: "Você e meu assistente de programacao de games. Estou criando um jogo no Unity com C# e assets do Blender. Responda em portugues, com passos curtos e o código comentado." Instruções genéricas como "me ajude" não contam; o objetivo é dar contexto fixo e útil ao Project.`,
    },
    {
      titulo: `Anexando um arquivo de referência ao Knowledge`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Ensine a anexar arquivos ao Project. Dentro do Project, clique em Add content (ou "Add files", ou o ícone de clipe) e selecione um arquivo de exemplo: pode ser um trecho de código C#, um documento com a descrição do jogo ou uma imagem de referência. Explique que esse material vira o Knowledge e que o Claude passa a usá-lo como base em todas as conversas dali. Distribua os arquivos de exemplo. Circule conferindo se o arquivo aparece anexado no Project de cada aluno.`,
      atividade: `1. Dentro do seu Project, clique em Add content (ou no ícone de clipe).
2. Escolha um arquivo de exemplo: um script C#, um documento ou uma imagem.
3. Anexe o arquivo e espere ele aparecer na lista do Project.
4. Faça uma pergunta curta ao Claude que use esse arquivo como contexto.`,
      gabarito: `Acertou quem anexa pelo menos um arquivo ao Project e o vê listado no Knowledge. Exemplo de sucesso: o aluno clica em Add content, escolhe um script C# e o arquivo aparece anexado; depois pergunta "o que este script faz?" e o Claude responde usando o arquivo. Anexar com ajuda do professor conta como acerto. O objetivo é o aluno entender que arquivos viram contexto fixo do Project.`,
    },
    {
      titulo: `Gerando e salvando um Artifact de código`,
      tipo: `Desafio`,
      tempo: `18 min`,
      guiaProfessor: `Peça que cada aluno faça um pedido real de código dentro do Project, para o Claude gerar um Artifact. Um bom exemplo é um script simples de movimento do jogador no Unity. Mostre que o Claude abre o código numa janela ao lado (o Artifact) e que, por estar dentro do Project, ele fica salvo na conversa. Incentive um refino: pedir um pulo, mudar a velocidade ou comentar melhor o código. Reforce que o aluno deve ler o que cada parte do código faz, não só copiar. Tenha o exemplo de solução em mãos para orientar quem travar.`,
      atividade: `1. No seu Project, peça ao Claude um script de movimento do jogador no Unity em C#.
2. Veja o código aparecer como Artifact na janela ao lado.
3. Refine: peça um ajuste, como mudar a velocidade ou adicionar um pulo.
4. Leia o que cada parte do código faz e deixe o Artifact salvo na conversa.`,
      gabarito: `Acertou quem gera um Artifact de código funcional, faz pelo menos um refino e consegue explicar o que o script faz. Exemplo de solução que o Claude pode gerar:

using UnityEngine;

public class PlayerMover : MonoBehaviour
{
    public float velocidade = 5f;

    void Update()
    {
        float x = Input.GetAxis("Horizontal");
        float z = Input.GetAxis("Vertical");
        Vector3 movimento = new Vector3(x, 0f, z);
        transform.Translate(movimento * velocidade * Time.deltaTime);
    }
}

Explicação esperada do aluno: velocidade controla a rapidez; Update roda a cada quadro; Input.GetAxis lê as teclas de direção; o Vector3 junta as direções; e Translate move o objeto, usando Time.deltaTime para o movimento ficar igual em qualquer computador. Um refino válido é adicionar o pulo com a barra de espaço ou mudar o valor de velocidade. O objetivo é ter código salvo e compreendido, não decorado.`,
    },
    {
      titulo: `Demonstração do fluxo completo e fechamento do mês`,
      tipo: `Roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Feche o mês com as demonstrações. Chame os alunos um a um (ou alguns, conforme o tempo) para mostrar no projetor o fluxo completo dentro do Project: partir de um problema real do jogo, escrever um prompt com contexto, receber a resposta, fazer um refino e mostrar o resultado salvo (Artifact ou conversa). Conduza com clima de fechamento, puxe os aplausos e registre os Projects no mural da turma. Relembre que esse kit Claude vai acompanhar o aluno nos próximos projetos de Unity, Unreal e VR do Ano 4.`,
      atividade: `1. Quando o professor chamar, mostre o seu Project no projetor.
2. Diga o problema real do jogo e escreva o prompt com contexto.
3. Mostre a resposta do Claude, faça um refino e abra o resultado salvo.
4. Conte em uma frase como esse kit vai ajudar nos seus próximos projetos.`,
      gabarito: `Acertou quem demonstra o fluxo completo de ponta a ponta: problema, prompt com contexto, resposta, refino e resultado salvo dentro do Project. Exemplo de sucesso: o aluno mostra o Project Jogo Unity Ano 4, pede ajuda para um script de movimento, recebe o Artifact, pede um pulo no refino e mostra o código salvo, dizendo que vai reusar o kit no próximo projeto. Qualquer demonstração que percorra os passos conta como acerto, mesmo com pequenas falhas. O objetivo é provar o entregável do mês: saber usar o Claude como assistente nos projetos de games.`,
    },
  ],
};
