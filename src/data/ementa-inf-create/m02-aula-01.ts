import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "ChatGPT: seu primeiro assistente de IA",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Conhecer o ChatGPT, criar a conta, entender a tela de conversa e escrever um primeiro pedido (prompt) claro, sempre conferindo se a resposta faz sentido.`,
  descricao: `Esta é a primeira aula do mês dedicado à Inteligência Artificial, e também o primeiro contato dos alunos com uma IA de verdade no computador. A ferramenta da vez é o ChatGPT, um assistente que conversa por texto: você escreve um pedido e ele responde em segundos. A grande ideia que abre o mês é simples e poderosa — dá para conversar com um computador em português normal, sem comandos complicados, e receber ajuda para estudar, escrever, tirar dúvidas e ter ideias.

Antes de qualquer truque, o aluno precisa entender três coisas: o que é o ChatGPT, como entrar nele e como pedir bem. O ChatGPT é um programa de Inteligência Artificial que foi treinado lendo uma quantidade enorme de textos. Por isso ele consegue continuar uma conversa, explicar assuntos e escrever de muitas formas. Mas ele não "sabe" das coisas como uma pessoa: ele monta a resposta prevendo o que faz sentido vir a seguir. Isso explica por que, às vezes, ele erra com toda a confiança do mundo.

O coração da aula é o prompt, que é o nome do pedido que escrevemos para a IA. Um pedido vago gera uma resposta vaga; um pedido claro, com contexto, gera uma resposta muito melhor. Os alunos vão aprender, na prática, que dizer quem você é, o que quer e como quer muda tudo. Em vez de "fale sobre cachorros", eles vão pedir algo como "explique, para um adolescente de 12 anos, em três frases, por que os cães abanam o rabo".

Fechando a aula, entra a regra de ouro que vai acompanhar o mês inteiro: sempre conferir se a resposta faz sentido. A IA é uma ajudante, não um oráculo. Ela pode inventar fatos, datas e nomes — isso tem até um apelido, "alucinação". O papel do professor é criar um clima de curiosidade com pé no chão: testar bastante, se divertir com as respostas e, ao mesmo tempo, desconfiar com inteligência. Quem aprende a pedir bem e a conferir sai desta aula usando IA de um jeito muito mais seguro.`,
  materiais: [
    `Computadores (1 por aluno) com navegador atualizado (Chrome, Edge ou Firefox) e acesso à internet, para abrir o ChatGPT`,
    `Projetor ou TV para o professor demonstrar a tela do ChatGPT e mostrar onde clicar`,
    `Contas de e-mail dos alunos já prontas (preferencialmente as da escola) para criar ou entrar na conta do ChatGPT`,
    `Endereço do site escrito no quadro: chat.openai.com (ou chatgpt.com), para ninguém digitar errado`,
    `Folha de atividade com a estrutura de um bom prompt: "quem sou + o que quero + como quero"`,
    `Cartaz com a regra de ouro do mês: a IA ajuda, mas você confere se a resposta faz sentido`,
    `Lista de exemplos de prompts prontos (de reserva) para alunos que travarem na hora de começar`,
  ],
  conceitosChave: [
    `Inteligência Artificial (IA) — tecnologia que faz o computador realizar tarefas que pareciam exigir um humano, como conversar e escrever.`,
    `ChatGPT — assistente de IA que conversa por texto: você escreve um pedido e ele responde em linguagem natural.`,
    `Prompt — o pedido que você escreve para a IA; quanto mais claro e com contexto, melhor a resposta.`,
    `Contexto — as informações extras que você dá no pedido (quem você é, para quê, em que formato) para guiar a resposta.`,
    `Conversa (chat) — a sequência de perguntas e respostas; a IA lembra do que foi dito ali para continuar o assunto.`,
    `Alucinação — quando a IA responde algo errado ou inventado, mas com toda a confiança, como se fosse verdade.`,
    `Regra de ouro — sempre conferir se a resposta da IA faz sentido antes de confiar nela ou usá-la.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em IA para dar esta aula. Basta dominar três coisas: entrar no ChatGPT, escrever um bom pedido e conferir a resposta. O ChatGPT é um assistente que conversa por texto, acessado pelo navegador no endereço chat.openai.com (também funciona como chatgpt.com). Para usá-lo é preciso uma conta, que pode ser criada com um e-mail e senha ou entrando com uma conta Google. Há uma versão gratuita que é mais do que suficiente para esta aula. Atenção a um ponto da regra da OpenAI: o cadastro pede idade mínima (geralmente 13 anos), então, para alunos mais novos, use uma conta criada com a escola ou com autorização dos responsáveis, e mantenha o uso supervisionado. Faça você mesmo todo o caminho uma vez antes da aula, com o projetor ligado, para não descobrir um botão novo na frente da turma.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min). Pergunte: "se existisse um robô que respondesse qualquer pergunta sua por escrito, o que você perguntaria?". Anote algumas ideias no quadro. Conte que esse "robô" existe e se chama ChatGPT, e que hoje a turma vai conversar com ele de verdade.

2. Conteúdo novo guiado (15 min). No projetor, abra o navegador e digite chat.openai.com. Mostre o botão "Sign up" (Cadastrar) para criar conta e "Log in" (Entrar) para quem já tem. Demonstre criar a conta entrando com o Google: clique em "Continuar com o Google" e escolha a conta. Já dentro, aponte os elementos da tela: a caixa de digitar lá embaixo (onde se escreve o pedido), o botão de enviar (a setinha), e o botão "New chat" (Nova conversa) no canto. Escreva ao vivo um pedido fraco ("fale de cachorros") e depois um forte ("explique para um adolescente de 12 anos, em 3 frases, por que cães abanam o rabo"). Compare as duas respostas na tela.

3. Mão na massa (25 min). Cada aluno abre o ChatGPT e entra na conta. Circule garantindo que todos chegaram à tela de conversa. Peça que escrevam o primeiro pedido livre (uma curiosidade que tiverem). Depois, apresente a fórmula da folha: quem sou + o que quero + como quero. Cada aluno reescreve um pedido usando a fórmula e compara a resposta com a primeira. Por fim, peça uma pergunta cuja resposta eles já saibam (a capital do estado, por exemplo) para testar a regra de ouro.

4. Desafio e compartilhar (10 min). Em duplas, os alunos tentam "pegar" a IA: fazem uma pergunta de pegadinha ou bem específica e observam se a resposta tem algum erro. Cada dupla compartilha o melhor prompt do dia e um caso em que conferir valeu a pena. Feche com a frase no quadro: peça bem e confira sempre.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do cotidiano. Diga: "o prompt é como um pedido no balcão de uma lanchonete: se você fala só 'quero um lanche', vem qualquer coisa; se diz 'um hambúrguer sem cebola, com batata pequena', vem o que você queria". Explique a IA assim: "ela leu milhões de textos e aprendeu a continuar frases de um jeito que costuma fazer sentido; por isso parece que ela sabe tudo, mas ela está prevendo, não consultando uma verdade". Para a regra de ouro, compare com um colega muito falante: "ele responde rápido a tudo, mas às vezes chuta com confiança; por isso você confere". Evite termos difíceis; troque "modelo de linguagem" por "programa que aprendeu lendo muito texto".

## Erros comuns e como ajudar

O erro mais comum é escrever pedidos vagos e achar a IA "burra": mostre que o problema é o pedido e ajude a aplicar a fórmula quem sou + o que quero + como quero. Muitos digitam o endereço errado ou caem em sites parecidos; deixe o link no quadro e confira a barra de endereço. Outros travam no cadastro: ensine a entrar com o Google e tenha à mão as contas da escola. Há quem confunda o ChatGPT com o Google e queira "links": explique que aqui a resposta vem escrita, em conversa. Por fim, alguns vão confiar cegamente na primeira resposta; reforce a regra de ouro com um exemplo em que a IA erra de propósito (peça um dado que eles conheçam e mostre quando ela escorrega), para que aprendam a conferir sempre.`,
  exercicios: [
    {
      titulo: `Entrando na conta e reconhecendo a tela`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Demonstre o caminho no projetor antes de soltar a turma: abrir chat.openai.com, clicar em "Log in" ou "Sign up" e entrar com o Google. Circule garantindo que todos chegaram à tela de conversa. Aponte os três elementos principais na tela de cada um.`,
      atividade: `No seu computador, abra o navegador, vá até chat.openai.com e entre na sua conta. Depois, encontre e mostre para o professor: 1) a caixa onde se escreve o pedido; 2) o botão de enviar; 3) o botão "Nova conversa" (New chat).`,
      gabarito: `O aluno deve acessar o site, entrar na conta (por e-mail ou pelo Google) e chegar à tela de conversa. Deve apontar corretamente os três elementos: a caixa de texto na parte de baixo, a setinha de enviar ao lado dela e o botão "Nova conversa" no canto/lateral. Acerta quem entrar e localizar os três.`,
    },
    {
      titulo: `Meu primeiro pedido livre`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Deixe os alunos perguntarem algo do interesse deles, sem regras ainda. O objetivo é quebrar o gelo e perceber que a IA responde em segundos. Peça que leiam a resposta em voz baixa e marquem uma palavra que não conheciam.`,
      atividade: `Escreva uma pergunta sobre algo que você tem curiosidade (um jogo, um animal, um lugar) e envie. Leia a resposta com calma. Depois anote na folha: a IA respondeu o que você esperava? Apareceu alguma informação nova?`,
      gabarito: `Não há resposta certa única: o aluno acerta se conseguir enviar um pedido próprio, receber e ler a resposta, e registrar na folha uma reflexão simples (se a resposta atendeu ou não e se trouxe algo novo). O ponto é demonstrar que sabe enviar um prompt e interpretar o retorno.`,
    },
    {
      titulo: `A fórmula do bom pedido: quem sou + o que quero + como quero`,
      tipo: `Em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas. Mostre na folha a fórmula e um exemplo pronto. A ideia é comparar, lado a lado, um pedido vago e um pedido com contexto sobre o mesmo tema, percebendo a diferença na resposta. Peça que copiem trechos das duas respostas.`,
      atividade: `Em dupla, escolham um tema (ex.: vulcões). Enviem dois pedidos: 1) vago, como "fale sobre vulcões"; 2) com a fórmula, como "explique, para um aluno de 12 anos, em 3 frases, como um vulcão entra em erupção". Comparem as duas respostas e anotem qual ficou melhor e por quê.`,
      gabarito: `A dupla deve enviar os dois pedidos e perceber que o segundo, com contexto (quem é o público, o formato em 3 frases e o foco), gera uma resposta mais clara, curta e adequada à idade. Acerta quem identificar que o pedido com a fórmula produziu a melhor resposta e justificar citando o contexto dado (público, tamanho, foco).`,
    },
    {
      titulo: `Caça ao erro: testando a regra de ouro`,
      tipo: `Desafio`,
      tempo: `12 min`,
      guiaProfessor: `Aqui o aluno aplica a regra de ouro: conferir se a resposta faz sentido. Peça perguntas cuja resposta eles já saibam ou possam checar facilmente (um fato da própria cidade, uma conta simples). Valorize quem desconfiar e verificar, mesmo que a IA acerte.`,
      atividade: `Faça ao ChatGPT três perguntas cuja resposta você consiga conferir: 1) a capital do seu estado; 2) uma conta simples, como quanto é 47 + 68; 3) uma curiosidade da sua cidade. Para cada resposta, escreva na folha se está certa, errada ou duvidosa, e como você conferiu.`,
      gabarito: `O aluno deve enviar as três perguntas e avaliar cada resposta, marcando certa, errada ou duvidosa, e dizendo como conferiu (conhecimento próprio, conta na calculadora, perguntar ao professor). Acerta quem conferir as três e demonstrar a postura da regra de ouro: confiar só depois de checar. Se a IA errar em algum item, melhor ainda — o aluno deve registrar o erro.`,
    },
    {
      titulo: `Meu guia de bons pedidos`,
      tipo: `Projeto curto`,
      tempo: `15 min`,
      guiaProfessor: `Esta atividade fecha a aula e reúne tudo. Cada aluno monta um mini-guia (em papel ou em uma nova conversa) com seus melhores pedidos. Oriente a aplicar a fórmula em cada um e a incluir a regra de ouro. Ao final, alguns compartilham o melhor pedido com a turma.`,
      atividade: `Crie um pequeno guia com 3 bons pedidos que você usaria no dia a dia (ex.: estudar para a prova, ter ideias para uma redação, entender um assunto difícil). Para cada um, escreva o pedido completo usando a fórmula quem sou + o que quero + como quero. No final do guia, escreva com suas palavras a regra de ouro da IA.`,
      gabarito: `O guia deve conter 3 pedidos bem escritos, cada um com contexto claro seguindo a fórmula (quem é o aluno, o que quer e em que formato/tamanho). Deve terminar com a regra de ouro registrada com as próprias palavras (sempre conferir se a resposta faz sentido, pois a IA pode errar). Acerta quem entregar os 3 pedidos com contexto e a regra de ouro explicada corretamente.`,
    },
  ],
};
