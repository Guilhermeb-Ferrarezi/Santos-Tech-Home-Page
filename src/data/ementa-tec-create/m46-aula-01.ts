import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Bem-vindo à Unreal Engine",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Apresentar a Unreal Engine como motor profissional de jogos, instalá-la pelo Epic Games Launcher e criar o primeiro projeto em branco, comparando-a com o Unity que o aluno já domina.`,
  descricao: `Este é o último mês de uma trilha de quatro anos, e ele começa com uma virada de chave importante: o aluno, que já criou games no Unity e até uma experiência de Realidade Virtual, agora vai conhecer a Unreal Engine, o motor por trás de muitos dos jogos mais bonitos do mundo. A ideia desta primeira aula não é programar nada ainda, e sim abrir a porta: instalar a ferramenta, entender por que ela existe e criar o primeiro projeto vazio, sentindo na pele que é um software profissional de verdade.

A Unreal Engine é desenvolvida pela Epic Games, a mesma empresa do Fortnite, e é usada em estúdios do mundo inteiro para criar jogos, filmes, simulações e até cenários virtuais de televisão. Ela é gratuita para aprender e brinca na mesma liga do Unity, mas com uma fama particular: gráficos de altíssima qualidade prontos para usar. Como o aluno já conhece o Unity, esta aula apoia tudo em comparações: onde o Unity usa C#, a Unreal usa C++ e Blueprints; onde um chama de "Scene", o outro chama de "Level"; onde um tem o "Inspector", o outro tem o "Details".

O caminho para ter a Unreal no computador passa por um programa intermediário chamado Epic Games Launcher. É por ele que se baixa, instala e abre o motor, parecido com a forma como o Unity Hub gerencia as versões do Unity. Por isso, parte da aula é cuidar dessa instalação com calma e garantir que cada máquina abra um projeto em branco até o fim da hora.

Dois nomes vão aparecer e provavelmente assustar um pouco: Nanite e Lumen. São as tecnologias que dão à Unreal aquele visual impressionante, lidando com modelos cheios de detalhes e com iluminação que parece de verdade. Nesta aula o aluno só precisa saber o que cada um faz em uma frase, e vai usar o Claude como assistente para esclarecer esses termos novos sempre que surgir uma dúvida, treinando a fazer boas perguntas a uma IA.`,
  materiais: [
    `Computadores (1 por aluno) com Windows, boa placa de vídeo e espaço livre em disco para a Unreal Engine + C++`,
    `Conexão de internet estável para baixar o Epic Games Launcher e o motor (download grande, vários GB)`,
    `Projetor ou TV para o professor mostrar a própria tela passo a passo`,
    `Conta da Epic Games já criada para cada aluno (ou um e-mail disponível para criar na hora)`,
    `Acesso ao Claude aberto em uma aba do navegador, para tirar dúvidas sobre termos novos`,
    `Visual Studio (Community) instalado, pois a Unreal precisa dele para projetos em C++`,
    `Uma folha impressa com a tabela de comparação Unity x Unreal para consulta rápida dos alunos`,
  ],
  conceitosChave: [
    `Motor de jogo (game engine) — programa que junta gráficos, física, som e código para criar jogos; Unity e Unreal são dois exemplos.`,
    `Unreal Engine — motor profissional da Epic Games, famoso pelos gráficos de alta qualidade e usado em grandes jogos e filmes.`,
    `Epic Games Launcher — programa que baixa, instala e abre a Unreal Engine, parecido com o que o Unity Hub faz para o Unity.`,
    `Projeto em branco (Blank) — modelo de projeto vazio, sem conteúdo extra, usado como ponto de partida limpo para construir a própria cena.`,
    `Nanite — tecnologia da Unreal que mostra modelos com muitíssimos detalhes sem travar o jogo, cuidando sozinha do nível de detalhe.`,
    `Lumen — sistema de iluminação da Unreal que calcula luz e reflexos em tempo real, deixando a cena com aparência realista.`,
    `Level — o nome que a Unreal dá para a cena onde o mundo do jogo é montado, equivalente à Scene do Unity.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar a Unreal para dar esta aula; precisa conhecer o caminho de instalação e saber explicar quatro ideias: o que é um motor, o que é o Epic Games Launcher, o que difere a Unreal do Unity, e o que são Nanite e Lumen em uma frase cada. Antes da turma chegar, faça o caminho inteiro uma vez na sua máquina: instale o Epic Games Launcher, faça login, abra a aba Unreal Engine, instale uma versão recente do motor e crie um projeto em branco. Isso costuma demorar (download de vários GB), então deixe os downloads das máquinas iniciados com antecedência, se possível.

Tenha em mente a tradução de termos: no Unity o aluno usa C#, na Unreal usa C++ e Blueprints; a Scene vira Level; o Inspector vira painel Details; a Hierarchy vira World Outliner; o Project window vira Content Browser. Use essas pontes o tempo todo, porque o aluno já tem a base do Unity.

## Passo a passo da aula

Aquecimento (10 min). Pergunte: "Em que motor vocês fizeram os jogos até agora?" Eles dirão Unity. Mostre no projetor uma imagem ou vídeo de um jogo feito na Unreal e diga que hoje vão conhecer a outra grande ferramenta da indústria. Abra o Claude e mostre uma pergunta de exemplo: "Explique em uma frase, para um adolescente, o que é a Unreal Engine."

Conteúdo novo guiado (15 min). Na sua tela, mostre o Epic Games Launcher já instalado. Clique na aba lateral Unreal Engine, depois na sub-aba Library. Clique no botão de adicionar versão (o sinal de mais ao lado de ENGINE VERSIONS), escolha uma versão recente e clique em Install. Enquanto baixa, explique a tabela de comparação Unity x Unreal no projetor. Quando o motor estiver instalado, clique em Launch. Abre o Unreal Project Browser: escolha a categoria Games, depois o modelo Blank, marque a linguagem como C++ (em vez de Blueprint), defina um nome sem espaços como MinhaPrimeiraCena, escolha a pasta e clique em Create. O editor abre com um Level vazio.

Mão na massa (25 min). Cada aluno repete o caminho na própria máquina: abrir o Epic Games Launcher, fazer login, instalar (ou aguardar a instalação já iniciada) e criar um projeto em branco em C++ chamado, por exemplo, MinhaPrimeiraCena. Circule pelas máquinas ajudando com login, espaço em disco e seleção da versão. Quem terminar antes deve abrir o Claude e pedir explicações curtas sobre Nanite e Lumen, anotando uma frase para cada termo no caderno.

Desafio e compartilhar (10 min). Lance o desafio: "Pergunte ao Claude qual a maior diferença entre Unity e Unreal e me traga a resposta em uma frase sua." Faça uma roda rápida: cada aluno mostra o projeto em branco aberto e diz, em uma frase, o que descobriu sobre a Unreal.

## Como explicar de forma clara

Use a comparação como muleta principal: "É como o Unity, mas de outra marca." O Epic Games Launcher é a "loja e gerenciador", igual ao Unity Hub. Para Nanite, diga: "É o que deixa colocar montanhas de detalhes sem o jogo travar." Para Lumen: "É a luz que se comporta como luz de verdade, com sombra e reflexo automáticos." Lembre que a faixa é de 10 a 15 anos: os mais novos gostam de ver o resultado visual (mostre imagens), os mais velhos gostam de entender por que estúdios grandes escolhem cada motor. Reforce que aprender uma segunda ferramenta deixa o portfólio deles mais forte.

## Erros comuns e como ajudar

O problema mais comum é o download demorado ou que falha por internet instável; por isso comece os downloads cedo e tenha paciência com a fila. Outro erro é o aluno esquecer a senha da conta Epic: tenha um plano para recuperar ou criar conta na hora. Muitos vão escolher Blueprint por engano quando o pedido é C++; circule conferindo essa escolha, lembrando que C++ exige o Visual Studio instalado. Nomes de projeto com espaços ou acentos costumam dar erro: peça nomes simples como MinhaPrimeiraCena. Se uma máquina não tiver espaço em disco, libere espaço antes ou faça o aluno acompanhar em dupla. Por fim, se o editor abrir lento na primeira vez, explique que é normal e que ele está montando os arquivos iniciais.`,
  exercicios: [
    {
      titulo: `Unity ou Unreal? Caça às diferenças`,
      tipo: `Discussão guiada`,
      tempo: `8 min`,
      guiaProfessor: `Use a tabela de comparação no projetor. Faça perguntas rápidas e deixe os alunos responderem em voz alta. O objetivo é ativar o que eles já sabem do Unity e ancorar os termos novos da Unreal.`,
      atividade: `Em dupla, listem três diferenças entre o Unity (que vocês já usam) e a Unreal Engine. Pensem na linguagem de programação, no nome da cena e em quem fez cada motor. Compartilhem com a turma.`,
      gabarito: `Respostas esperadas: (1) o Unity usa C# e a Unreal usa C++ e Blueprints; (2) o Unity chama de Scene e a Unreal chama de Level; (3) o Unity é da Unity Technologies e a Unreal é da Epic Games. Outras diferenças válidas: a Unreal é conhecida por gráficos de alta qualidade prontos e traz Nanite e Lumen.`,
    },
    {
      titulo: `Instalando pelo Epic Games Launcher`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Demonstre o caminho no projetor antes de soltar a turma. Circule ajudando com login na conta Epic e com a escolha da versão. Aceite que alguns downloads ainda estejam em andamento; o importante é o aluno saber o caminho.`,
      atividade: `Abra o Epic Games Launcher e faça login na sua conta da Epic Games. Clique na aba Unreal Engine, depois em Library. No campo ENGINE VERSIONS, clique no sinal de mais, escolha uma versão recente e clique em Install.`,
      gabarito: `O aluno acertou se chegou na aba Unreal Engine > Library, abriu a opção de adicionar versão pelo sinal de mais, selecionou uma versão recente e iniciou (ou completou) a instalação. Sucesso pleno é a versão aparecer instalada com o botão Launch disponível.`,
    },
    {
      titulo: `Meu primeiro projeto em branco`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Mostre o Unreal Project Browser na sua tela. Reforce a escolha de C++ (e não Blueprint) e o nome sem espaços nem acentos. Confira nas máquinas se cada aluno marcou C++ e se o editor abriu um Level vazio.`,
      atividade: `Com o motor instalado, clique em Launch. No Project Browser, escolha a categoria Games e o modelo Blank. Marque a linguagem C++, dê o nome MinhaPrimeiraCena (sem espaços), escolha a pasta e clique em Create. Espere o editor abrir.`,
      gabarito: `O aluno acertou se criou um projeto pelo modelo Blank, com linguagem C++ e nome sem espaços (ex.: MinhaPrimeiraCena), e o editor da Unreal abriu mostrando um Level vazio. Se o editor abriu devagar na primeira vez, é normal e conta como sucesso.`,
    },
    {
      titulo: `Perguntando ao Claude sobre Nanite e Lumen`,
      tipo: `Pesquisa com IA`,
      tempo: `7 min`,
      guiaProfessor: `Mostre como escrever uma boa pergunta ao Claude: pedir explicação curta e para a idade. Estimule o aluno a reescrever a resposta com as próprias palavras, em vez de copiar. Valorize boas perguntas tanto quanto boas respostas.`,
      atividade: `Abra o Claude e faça duas perguntas, uma de cada vez: "Explique em uma frase, para um adolescente, o que é o Nanite na Unreal Engine." e "Explique em uma frase o que é o Lumen na Unreal Engine." Anote cada resposta com suas próprias palavras.`,
      gabarito: `Respostas aceitáveis: Nanite é a tecnologia que mostra modelos com muitos detalhes sem travar o jogo, controlando sozinha o nível de detalhe; Lumen é o sistema de iluminação que calcula luz, sombra e reflexos em tempo real para deixar a cena realista. O aluno acertou se trouxe a ideia central de cada um, mesmo com palavras diferentes.`,
    },
    {
      titulo: `Cartão de boas-vindas à Unreal`,
      tipo: `Projeto curto`,
      tempo: `10 min`,
      guiaProfessor: `Esta tarefa fecha a aula e consolida o vocabulário. Peça que cada aluno escreva um pequeno texto ou cartão explicando a Unreal para um colega do Ano 1. Faça a roda final de compartilhamento, cada um lendo uma frase. Confira se o projeto em branco continua aberto.`,
      atividade: `Com seu projeto em branco aberto, escreva um cartão de boas-vindas de quatro frases explicando, para um colega que só conhece o Unity: (1) o que é a Unreal Engine; (2) qual linguagem ela usa; (3) o que é Nanite ou Lumen; (4) por que vale a pena aprendê-la.`,
      gabarito: `O aluno acertou se entregou as quatro frases corretas: a Unreal é um motor de jogo profissional da Epic Games; usa C++ e Blueprints; Nanite mostra muitos detalhes sem travar e/ou Lumen cuida da iluminação realista; aprender uma segunda ferramenta deixa o portfólio mais forte e abre portas no mercado. O projeto em branco deve continuar aberto no editor.`,
    },
  ],
};
