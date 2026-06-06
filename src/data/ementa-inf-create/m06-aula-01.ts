import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Seu primeiro formulário",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `O aluno entende para que serve o Google Forms, encontra a ferramenta no Drive e cria seu primeiro formulário em branco com título, descrição e uma pergunta inicial.`,
  descricao: `Esta é a primeira aula do mês dedicado ao Google Forms. Até aqui o aluno já conhece o computador, já conversou com várias IAs e já mexeu em planilhas e documentos. Agora começa um eixo novo e muito prático: aprender a criar formulários, ou seja, aquelas telas de perguntas que a gente preenche pela internet. O entregável do mês é um formulário de verdade, com as respostas caindo automaticamente numa planilha, e hoje a turma dá o primeiro passo dessa construção.

Um formulário é, na essência, um conjunto de perguntas organizadas numa página que você envia para outras pessoas responderem. O Google Forms é a ferramenta gratuita do Google para montar esses formulários direto no navegador, sem instalar nada. Ele serve para muita coisa que os adolescentes já viram pela frente: inscrições em campeonatos e eventos, pesquisas de opinião ("qual lanche a turma prefere?"), quizzes e provinhas, listas de presença e formulários de cadastro. Quando alguém responde, o Forms guarda tudo sozinho e ainda gera gráficos automáticos com os resultados.

Nesta primeira aula o foco é se familiarizar com a ferramenta e perder o medo dela. O aluno vai descobrir onde o Google Forms mora dentro do Google Drive, vai criar um formulário em branco, vai dar um título e uma descrição para ele e vai adicionar a primeira pergunta. No caminho, conhece a tela de edição: o cabeçalho onde fica o título, a área das perguntas e a barra de ferramentas lateral. Nada é decorado de cor; o importante é o aluno entender o que cada parte faz.

É importante manter o escopo de hoje. Não vamos explorar todos os tipos de pergunta, nem mexer em validação, compartilhamento ou planilhas, pois isso vem nas próximas aulas. Hoje plantamos a base: criar, nomear e começar a preencher um formulário. Ao final da aula cada aluno deve ter na tela um formulário com nome próprio, uma descrição curta e uma pergunta criada por ele mesmo. Quando o adolescente percebe que acabou de montar a mesma coisa que recebe por link no celular, a ferramenta deixa de ser misteriosa e vira algo que ele controla.`,
  materiais: [
    `Um computador por aluno, com navegador (Chrome de preferência) e conexão com a internet, para acessar o Google Forms direto no site.`,
    `Conta Google ativa para cada aluno (a conta da escola ou uma conta pessoal já logada), pois o Forms só funciona com login.`,
    `Computador do professor ligado a um projetor ou televisão grande, para demonstrar cada clique na tela do Google Forms.`,
    `Um formulário de exemplo já pronto e aberto pelo professor (por exemplo, uma inscrição de campeonato de games ou uma pesquisa de lanche da turma), para mostrar o resultado final logo no começo.`,
    `O endereço forms.google.com anotado no quadro, além do caminho pelo Google Drive, para os alunos encontrarem a ferramenta de duas maneiras.`,
    `Uma lista de ideias de tema no quadro (festa da turma, gincana, pesquisa de filme favorito, cadastro de clube de leitura), para quem travar na hora de escolher o assunto do formulário.`,
    `Cronômetro ou relógio visível para controlar as quatro etapas da aula (10/15/25/10).`,
  ],
  conceitosChave: [
    `Formulário — uma página com perguntas que você envia para outras pessoas responderem pela internet.`,
    `Google Forms — a ferramenta gratuita do Google, usada no navegador, para criar e enviar formulários.`,
    `Google Drive — o espaço na nuvem onde seus arquivos do Google ficam guardados, inclusive os formulários criados.`,
    `Título do formulário — o nome principal que aparece bem no topo, dizendo do que o formulário se trata.`,
    `Descrição — um texto curto, abaixo do título, que explica para o respondente o objetivo do formulário.`,
    `Pergunta — cada item que o respondente vai preencher; é a peça básica de qualquer formulário.`,
    `Tela de edição — a área onde você monta o formulário, com o cabeçalho, as perguntas e a barra de ferramentas lateral.`,
  ],
  treinamento: `## O que o professor precisa saber

O Google Forms é uma ferramenta totalmente online, que roda no navegador e não precisa de instalação. Para usá-la basta estar logado numa conta Google. Tudo o que o aluno cria fica salvo automaticamente no Google Drive, então não existe botão "salvar": o Forms grava sozinho a cada alteração. Isso tranquiliza muito a turma, que não corre o risco de perder o trabalho.

Existem duas maneiras fáceis de chegar ao Forms. A primeira é digitar forms.google.com na barra de endereço do navegador e apertar Enter. A segunda é pelo Drive: abrir drive.google.com, clicar no botão Novo (canto superior esquerdo, com um sinal de mais), passar o mouse sobre Google Formulários e escolher Formulário em branco. Vale você testar as duas antes da aula para saber qual flui melhor com a conta da escola.

A tela de edição tem três regiões que o professor deve saber nomear. No topo fica o cabeçalho, com dois campos: o campo grande "Formulário sem título" (o título) e, logo abaixo, "Descrição do formulário". Mais abaixo vem o bloco da primeira pergunta, já com o texto "Pergunta sem título" e um menu à direita para escolher o tipo (por padrão vem "Múltipla escolha"). À direita do bloco da pergunta há uma barra de ferramentas flutuante, em forma de coluna; o botão de cima, um círculo com o sinal de mais, é o "Adicionar pergunta". No topo da página, à direita, ficam o botão Enviar (roxo) e um ícone de olho, que é a Visualização. Saber apontar cada uma dessas partes no projetor é metade da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento e revisão (10 min). Comece mostrando, no projetor, um formulário de exemplo já pronto, como uma inscrição de campeonato de games. Pergunte à turma: "Onde vocês já viram uma tela de perguntas assim?" Deixe falarem de inscrições, pesquisas e quizzes. Diga que hoje todos vão criar uma tela dessas, do zero. Não mostre ainda como; só desperte a vontade.

2. Conteúdo novo guiado (15 min). No seu computador, mostre o caminho devagar. Abra forms.google.com e clique no modelo "Em branco" (o cartão com o sinal de mais). Quando a tela de edição abrir, clique no campo "Formulário sem título" e digite um nome. Clique em "Descrição do formulário" e escreva uma frase. Depois clique no bloco "Pergunta sem título" e digite uma pergunta. Mostre a barra lateral e o botão Adicionar pergunta (o círculo com o mais). Narre cada passo: "Cliquei aqui, digitei o título; cliquei aqui, escrevi a descrição."

3. Mão na massa (25 min). Leve a turma aos computadores. Guie todos juntos até abrir um formulário em branco. A partir daí, cada aluno escolhe um tema da lista do quadro (festa da turma, pesquisa de filme, gincana) e: dá um título, escreve uma descrição de uma frase e cria a primeira pergunta. Passe de mesa em mesa conferindo se o título realmente combina com o tema e se a descrição faz sentido. Lembre que tudo salva sozinho.

4. Desafio e compartilhar (10 min). Proponha o desafio: clicar no ícone de olho (Visualização) para ver o formulário como um respondente veria. Depois reúna a turma e peça que dois ou três alunos mostrem no projetor o título, a descrição e a pergunta que criaram, explicando do que trata o formulário deles.

## Como explicar de forma clara (linguagem para a idade)

Para adolescentes de 10 a 15 anos, a melhor porta de entrada é o celular deles. Diga: "Sabe aquele link de inscrição que cai no grupo da turma, com várias perguntas para preencher? Hoje vocês vão construir um desses." Compare o formulário a uma ficha de cadastro digital. Explique que o título é como o nome de um trabalho na capa, e a descrição é o recadinho que avisa para que serve. Reforce que não existe botão salvar porque o Google guarda tudo na hora, então ninguém perde nada. Use frases curtas, mostre na tela antes de pedir e deixe cada um digitar sozinho o próprio título.

## Erros comuns e como ajudar

- Esquecer de fazer login na conta Google e o Forms não abrir. Confira no canto superior direito se aparece a foto ou inicial da conta; se não, ajude o aluno a entrar antes de continuar.

- Confundir o campo do título com o da pergunta e digitar o nome do formulário dentro da pergunta. Aponte no projetor: o título fica no retângulo grande do topo; a pergunta fica no bloco de baixo.

- Procurar um botão de salvar e travar. Tranquilize: o Forms salva sozinho a cada letra; basta olhar que o texto fica gravado.

- Querer já adicionar muitas perguntas e se perder. Lembre que hoje a meta é só uma pergunta bem feita; o resto vem nas próximas aulas.

- Clicar em Enviar achando que é para guardar. Explique que o botão roxo Enviar serve para mandar o formulário a outras pessoas, e isso será visto mais adiante; por enquanto, usamos só o ícone de olho para visualizar.`,
  exercicios: [
    {
      titulo: `Onde já vi um formulário?`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Comece sem computador, com a turma voltada para o projetor mostrando um formulário de exemplo pronto. Conduza uma conversa rápida sobre onde os adolescentes já encontraram formulários no dia a dia: inscrições, pesquisas, quizzes, listas de presença. Vá anotando no quadro os exemplos que surgirem. O objetivo é mostrar que formulário é algo comum, que eles já preencheram várias vezes, e despertar a vontade de criar um.`,
      atividade: `Olhem esta tela de perguntas no projetor. Onde vocês já viram algo parecido? Pensem em inscrições de campeonato, pesquisas que caem no grupo da turma, quizzes da internet ou listas de presença. Diga pelo menos um lugar onde você já preencheu um formulário e o que ele perguntava.`,
      gabarito: `O aluno acerta se citar pelo menos um exemplo real de formulário que já viu ou preencheu (inscrição, pesquisa, quiz, cadastro, lista de presença) e entender que é uma tela de perguntas enviada para outras pessoas responderem. Não é preciso usar o termo Google Forms ainda; reconhecer a ideia já conta como acerto.`,
    },
    {
      titulo: `Achando o Google Forms`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Agora a turma vai só localizar e abrir a ferramenta, sem criar nada ainda. Demonstre no projetor as duas formas: digitar forms.google.com e apertar Enter, e o caminho pelo Drive (botão Novo, depois Google Formulários, depois Formulário em branco). Guie a turma a abrir um formulário em branco, esperando todos chegarem. Confira se cada aluno está logado na conta Google, olhando o canto superior direito. Reforce que a tela de edição abriu, mas ainda está vazia.`,
      atividade: `Vamos abrir a ferramenta. 1. Na barra de endereço do navegador, digite forms.google.com e aperte Enter. 2. Clique no cartão "Em branco", o que tem o sinal de mais. 3. Esperou a tela de edição abrir? Confira no canto de cima, à direita, se aparece a foto ou a inicial da sua conta Google. Levante a mão quando o formulário em branco estiver na sua tela.`,
      gabarito: `O aluno acerta se conseguir abrir um formulário em branco no Google Forms, por qualquer um dos dois caminhos (endereço direto ou pelo Drive), com a conta Google logada. Sinal de sucesso: a tela de edição aparece com os campos "Formulário sem título" e "Pergunta sem título" visíveis. Pequena ajuda do professor no login é aceitável.`,
    },
    {
      titulo: `Título e descrição do meu formulário`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Este é o coração da aula. Peça que cada aluno escolha um tema da lista do quadro (festa da turma, pesquisa de filme, gincana, clube de leitura). No projetor, mostre devagar: clicar no campo "Formulário sem título" e digitar um nome, depois clicar em "Descrição do formulário" e escrever uma frase explicando o objetivo. Guie a turma a fazer o mesmo no próprio formulário. Passe de mesa em mesa conferindo se o título combina com o tema e se a descrição faz sentido. Lembre que tudo salva sozinho.`,
      atividade: `Hora de dar identidade ao seu formulário. 1. Escolha um tema da lista do quadro. 2. Clique no campo grande "Formulário sem título" lá em cima e digite um título que combine com o tema (por exemplo, "Inscrição para a Festa da Turma"). 3. Clique em "Descrição do formulário" logo abaixo e escreva uma frase explicando para que serve (por exemplo, "Preencha para confirmar sua presença na festa"). Não precisa salvar: o Google guarda sozinho.`,
      gabarito: `O aluno acerta se o formulário tiver um título próprio (diferente de "Formulário sem título") que combine com o tema escolhido, e uma descrição de pelo menos uma frase que explique o objetivo. Sinal de sucesso: ao olhar o topo da tela, dá para entender do que o formulário trata só pelo título e pela descrição.`,
    },
    {
      titulo: `Minha primeira pergunta`,
      tipo: `Prática em dupla`,
      tempo: `14 min`,
      guiaProfessor: `Organize a turma em duplas para que um ajude o outro. Demonstre no projetor: clicar no bloco "Pergunta sem título" e digitar uma pergunta que faça sentido para o tema. Mostre também o botão Adicionar pergunta (o círculo com sinal de mais na barra lateral à direita), mas oriente que hoje cada um cria apenas uma pergunta bem feita. Passe nas duplas conferindo se a pergunta tem relação com o título do formulário. Quem terminar pode conferir a pergunta do colega.`,
      atividade: `Em dupla, criem a primeira pergunta de cada formulário. 1. Clique no bloco que diz "Pergunta sem título". 2. Digite uma pergunta que combine com o tema do seu formulário (por exemplo, num formulário de festa: "Qual o seu nome completo?"). 3. Leia a pergunta para o seu colega de dupla e pergunte se ela faz sentido com o título. Ajustem juntos se precisar. Façam apenas uma pergunta caprichada por formulário.`,
      gabarito: `O aluno acerta se criar uma pergunta escrita, com sentido claro, dentro do bloco de pergunta, e que tenha relação com o título e o tema do formulário. Sinal de sucesso: a pergunta deixou de ser "Pergunta sem título" e o colega de dupla consegue entender o que ela está perguntando. Não importa o tipo de resposta escolhido nesta aula.`,
    },
    {
      titulo: `Desafio: ver como o respondente vê`,
      tipo: `Desafio`,
      tempo: `8 min`,
      guiaProfessor: `Proponha o desafio depois que cada aluno já tiver título, descrição e uma pergunta. No projetor, mostre o ícone de olho (Visualização), no topo à direita, e clique nele para abrir o formulário como um respondente o veria, numa nova aba. Explique a diferença entre a tela de edição (onde a gente monta) e a tela de visualização (como fica para quem responde). Peça que cada um abra a própria visualização e, depois, conduza a roda para dois ou três mostrarem no projetor.`,
      atividade: `Desafio final! 1. No topo da tela, à direita, ache o ícone de olho, que se chama Visualização. 2. Clique nele: uma nova aba vai abrir mostrando o seu formulário do jeitinho que as pessoas vão ver. 3. Olhe se o título, a descrição e a pergunta aparecem certinhos. 4. Volte e, se quiser, mostre para a turma o seu formulário do ponto de vista de quem responde.`,
      gabarito: `O aluno acerta se conseguir abrir a Visualização pelo ícone de olho e reconhecer que aquela é a tela que o respondente verá, diferente da tela de edição. Sinal de sucesso: na visualização aparecem o título, a descrição e a pergunta que ele criou. Saber explicar, com as próprias palavras, que ali está "como a pessoa vai ver" reforça o acerto.`,
    },
  ],
};
