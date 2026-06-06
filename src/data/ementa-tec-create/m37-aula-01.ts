import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Conheça o Claude: seu copiloto de projetos",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Apresentar o Claude como assistente de inteligência artificial, mostrar onde ele ajuda nos projetos do ano final e fazer a primeira conversa guiada para entender o que a IA consegue e o que não consegue fazer.`,
  descricao: `Esta é a primeira aula do ano mais avançado da trilha. Os alunos já passaram pelos Anos 1, 2 e 3 e agora vão fechar o percurso com um portfólio de jogos: uma experiência em Realidade Virtual no Unity (C#), um jogo no Unity (C#) com assets do Blender e um jogo na Unreal Engine (C++) com assets do Maya. Para dar conta de projetos tão grandes, eles ganham um aliado novo: o Claude, um assistente de inteligência artificial que conversa por texto e ajuda a pensar, escrever código, explicar erros e organizar ideias.

O Claude é uma IA generativa: ele recebe o que você escreve (a pergunta ou pedido, chamado de prompt) e responde em linguagem natural, como se fosse uma conversa de mensagens. Diferente de um buscador, ele não devolve uma lista de links; ele monta uma resposta na hora. Por isso é tão útil para programação e games: o aluno pode pedir para o Claude explicar um trecho de C#, sugerir como estruturar um script ou descrever um passo a passo no Unity. Nesta aula o foco não é resolver um projeto inteiro, e sim conhecer a ferramenta, abrir a interface e fazer a primeira conversa.

É igualmente importante entender os limites. O Claude pode errar, pode inventar informações que parecem verdadeiras (isso se chama alucinação) e não tem acesso ao computador do aluno nem aos arquivos do projeto, a menos que o aluno cole ou envie o conteúdo. Ele também não substitui o pensamento do aluno: quem decide, testa e aprende é a pessoa. O Claude é um copiloto, não o piloto. Essa ideia precisa ficar clara desde o primeiro dia para que os alunos usem a IA com responsabilidade e senso crítico.

Ao longo do mês a turma vai aprofundar o uso do Claude: pedir ajuda de verdade, escrever bons prompts, refinar conversas, enviar arquivos e organizar projetos. Hoje plantamos a base. Ao final desta aula, cada aluno terá aberto o Claude, explorado as principais áreas da tela e conversado pelo menos uma vez, percebendo com clareza onde a IA ajuda nos jogos em Unity e Unreal e onde ela precisa ser conferida pelo próprio aluno.`,
  materiais: [
    `Computadores com acesso ao Claude pelo navegador (site do Claude) ou pelo aplicativo, um por aluno, com login já preparado pela escola`,
    `Conexão estável com a internet, pois o Claude funciona online`,
    `Projetor ou TV para o professor demonstrar a interface do Claude em tela grande`,
    `Folha impressa ou slide com a regra de ouro da turma: a IA é copiloto, o aluno é o piloto`,
    `Lista de exemplos de prompts ligados aos projetos do ano (VR no Unity, jogo em C#, jogo em C++ na Unreal)`,
    `Caderno ou documento de texto para cada aluno anotar descobertas e dúvidas`,
    `Óculos de Realidade Virtual disponíveis na sala apenas para mostrar o destino do ano, sem uso técnico nesta aula`,
  ],
  conceitosChave: [
    `Inteligência artificial (IA) — programa de computador que aprende padrões a partir de muitos exemplos e consegue responder, escrever e ajudar em tarefas.`,
    `Claude — o assistente de IA por conversa que a turma vai usar este mês para apoiar os projetos de games e tecnologia.`,
    `Prompt — a mensagem que você escreve para a IA; quanto mais clara e específica, melhor a resposta.`,
    `Conversa (chat) — a sequência de mensagens entre você e o Claude; ele lembra do que foi dito dentro da mesma conversa.`,
    `Alucinação — quando a IA responde algo errado com cara de certo; por isso tudo precisa ser conferido.`,
    `Copiloto — papel do Claude: ele ajuda e sugere, mas quem decide, testa e aprende é o aluno.`,
    `Linguagem natural — a forma de falar do dia a dia, em português comum, que você usa para conversar com o Claude.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em IA para conduzir esta aula. Precisa entender quatro ideias. Primeira: o Claude é um assistente que conversa por texto; você escreve uma mensagem (o prompt) e ele responde em português. Segunda: ele funciona online, pelo navegador ou aplicativo, e a escola já deixa o login pronto. Terceira: a tela tem poucas áreas que importam hoje: o campo de digitar embaixo, a resposta no centro e a lista de conversas anteriores na lateral. Quarta: o Claude pode errar e inventar (alucinação) e não enxerga o computador do aluno; por isso a regra da turma é: a IA é copiloto, o aluno é o piloto. Antes da aula, abra o Claude, digite uma pergunta simples e leia a resposta para ganhar confiança. Tenha em mãos os exemplos de prompts ligados aos projetos do ano.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão. Lembre a turma do que vem pela frente no ano: VR no Unity, um jogo em C# e um jogo em C++ na Unreal. Pergunte: quando voce travou em um projeto, com quem voce pediu ajuda? Conduza até a ideia de um assistente que está sempre disponível. Mostre os óculos de VR só como motivação do destino do ano.

15 min, conteúdo novo guiado. No projetor, abra o Claude. Mostre as três áreas: o campo de mensagem embaixo, a área da resposta no centro e a lista de conversas na lateral. Faça a primeira conversa ao vivo. Digite no campo de mensagem o prompt exato abaixo e envie:

Voce e um assistente que ajuda alunos de games. Explique em 3 frases curtas o que e o motor de jogo Unity, para um adolescente iniciante.

Leia a resposta em voz alta. Em seguida, mostre um limite: digite outro prompt e mostre que a IA pode errar.

Liste 3 atalhos de teclado do Unity. Eu vou conferir cada um, entao seja honesto se nao tiver certeza.

Explique que vamos sempre testar o que a IA disser. Mostre como começar uma conversa nova (botão de nova conversa) e como voltar a uma conversa antiga pela lateral.

25 min, mão na massa. Cada aluno abre o Claude no próprio computador. Tarefa 1: digitar uma saudação e uma pergunta simples sobre o curso, por exemplo: Em uma frase, o que e a Unreal Engine? Tarefa 2: pedir uma explicação ligada ao projeto, por exemplo: Explique para um iniciante o que e um script em C# no Unity, em 3 frases. Tarefa 3: anotar no caderno uma resposta que pareceu útil e uma dúvida que ficou. Circule pela sala conferindo se todos conseguiram enviar e ler ao menos duas respostas.

10 min, desafio e compartilhar. Desafio: cada aluno tenta encontrar um limite do Claude, fazendo uma pergunta que a IA não tem como saber, como qual e o nome do meu professor? ou que horas sao agora no meu computador? Em roda rápida, cada um conta uma coisa que o Claude fez bem e uma que ele não conseguiu ou errou.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga: o Claude é como um colega muito lido que está sempre disponível para conversar, mas que às vezes chuta a resposta com confiança, então a gente confere. Para prompt, diga: é o jeito que voce pede; pedir mal traz resposta ruim, pedir com detalhe traz resposta boa, igual a um pedido de lanche. Para copiloto, use a imagem do avião ou do kart: o copiloto ajuda e avisa, mas quem está no volante é voce. Evite termos difíceis sem traduzir; fale alucinação e logo explique como inventar uma resposta errada com cara de certa. Conecte sempre com os jogos do aluno: o Claude vai ajudar a entender erros de C#, a planejar a cena de VR e a organizar ideias.

## Erros comuns e como ajudar

O erro mais comum é o aluno achar que tudo o que a IA diz é verdade; reforce a checagem desde o primeiro dia. Outro é escrever prompts vagos como me ajuda; ensine a dar contexto e o que quer de saída. Alguns esperam que o Claude veja a tela do Unity ou o arquivo do projeto; explique que ele só sabe o que foi escrito na conversa. Há quem fique preso em uma conversa antiga sem perceber; mostre o botão de nova conversa. Se a internet cair, o Claude para de responder; tenha um plano B com prints ou exemplos prontos. Por fim, lembre que não se deve colar dados pessoais ou senhas na conversa.`,
  exercicios: [
    {
      titulo: `Primeira conversa: oi, Claude`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno esteja logado e veja o campo de mensagem embaixo. Reforce onde clicar para enviar (botão de enviar ou tecla Enter).`,
      atividade: `Abra o Claude no seu computador. No campo de mensagem, escreva uma saudação e faça esta pergunta: Em uma frase, o que e a Unreal Engine? Leia a resposta e mostre ao professor.`,
      gabarito: `O aluno deve enviar a mensagem e receber uma resposta em texto. Resposta esperada do Claude, em uma frase, algo como: a Unreal Engine e um motor de jogos usado para criar games em 3D com gráficos avançados, programando em C++ ou com Blueprints. O ponto avaliado é o aluno conseguir digitar, enviar e ler a resposta, não a frase exata.`,
    },
    {
      titulo: `Caça aos cantos da tela`,
      tipo: `exploração guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que apontem cada área na própria tela. Confira se todos acham o botão de nova conversa e a lista de conversas na lateral.`,
      atividade: `Sem digitar nada novo, encontre e anote no caderno três áreas da tela do Claude: 1) onde voce escreve a mensagem; 2) onde aparece a resposta; 3) onde fica a lista de conversas anteriores. Depois, clique no botão de nova conversa e diga o que mudou na tela.`,
      gabarito: `As três áreas corretas são: o campo de mensagem na parte de baixo, a área de resposta no centro e a lista de conversas na lateral. Ao clicar em nova conversa, a área central fica vazia e começa um chat novo, sem o histórico da conversa anterior. O aluno acerta se identificar as três áreas e perceber que a nova conversa começa em branco.`,
    },
    {
      titulo: `Prompt fraco contra prompt forte`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre os dois prompts lado a lado no projetor. Conduza a turma a perceber por que o segundo gera resposta melhor: ele tem contexto e diz o formato desejado.`,
      atividade: `Envie primeiro o prompt fraco: me ajuda com C#. Leia a resposta. Depois envie o prompt forte: Explique para um iniciante o que e um script em C# no Unity, em 3 frases curtas, com um exemplo simples. Compare as duas respostas e escreva uma frase dizendo qual foi mais útil e por quê.`,
      gabarito: `O prompt forte gera resposta melhor porque tem contexto (iniciante, Unity), tema claro (script em C#) e formato pedido (3 frases curtas com exemplo). O prompt fraco é vago e leva a IA a perguntar de volta ou a dar algo genérico. Frase esperada do aluno: o segundo foi melhor porque eu dei detalhes e disse o formato, então a resposta ficou mais clara e direta.`,
    },
    {
      titulo: `Caçando um limite da IA`,
      tipo: `investigação`,
      tempo: `10 minutos`,
      guiaProfessor: `Explique que o objetivo é descobrir o que o Claude não sabe. Aproveite para apresentar a palavra alucinação quando aparecer uma resposta inventada.`,
      atividade: `Faça ao Claude uma pergunta que ele não tem como saber sobre o seu computador ou a sua sala, por exemplo: qual e o nome do meu professor? ou quais arquivos estao abertos no meu Unity agora? Leia a resposta e escreva no caderno se o Claude admitiu que não sabe ou se tentou inventar.`,
      gabarito: `O Claude não tem acesso ao computador, à sala nem aos arquivos do aluno, então a resposta correta dele é dizer que não tem essa informação e pedir que o aluno forneça. Se ele inventar um nome ou uma lista de arquivos, isso é uma alucinação, e o aluno deve identificar exatamente esse comportamento. O exercício é cumprido quando o aluno registra se houve admissão de limite ou invenção.`,
    },
    {
      titulo: `Meu mapa do copiloto`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza a reflexão ligando cada item aos projetos do ano: VR no Unity, jogo em C#, jogo em C++ na Unreal. Reforce a regra a IA é copiloto, o aluno é o piloto.`,
      atividade: `No seu caderno ou documento, crie duas listas com pelo menos três itens cada. Lista A: três coisas em que o Claude pode me ajudar nos meus projetos deste ano. Lista B: três coisas que eu, e não a IA, preciso fazer ou conferir. Compartilhe um item de cada lista na roda final.`,
      gabarito: `Não há resposta única, mas as listas devem mostrar entendimento dos papéis. Exemplos válidos para a Lista A: explicar um erro de C# no Unity, sugerir como estruturar um script, descrever passos para montar uma cena de VR. Exemplos válidos para a Lista B: testar o jogo no computador, decidir o design, conferir se o código da IA realmente funciona, não colar senhas. Respostas fracas a melhorar: deixar a IA fazer o jogo inteiro por mim, pois isso ignora que o aluno é o piloto e a IA é o copiloto.`,
    },
  ],
};
