import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Publicação e Entrega no Portfólio",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Publicar o jogo Unity feito no mês, escrever a ficha técnica do projeto e adicioná-lo ao portfólio da trilha, fechando a etapa final com a apresentação da criação para a turma.`,
  descricao: `Esta é a última aula do mês e também o fechamento de uma jornada de quatro semanas: o aluno escreveu scripts de movimento em C#, criou mecânicas e regras, ajustou física e colisões, montou a interface e os efeitos sonoros, caçou bugs, balanceou e poliu o jogo. Na aula passada ele gerou a build, ou seja, a versão executável do jogo. Agora chega o momento mais importante para quem cria games de verdade: publicar essa criação em um lugar público e registrá-la no portfólio, transformando o trabalho em uma peça que pode ser mostrada para o mundo.

O foco desta aula é a publicação e a documentação. Publicar significa colocar a build em uma plataforma onde outras pessoas conseguem acessar e jogar; para um jogo Unity feito por adolescentes, a itch.io é a escolha mais simples e segura, pois aceita uploads de jogos para Windows e também builds WebGL que rodam direto no navegador. Documentar significa escrever a ficha técnica: um texto curto e profissional que explica o que é o jogo, como se joga, quais tecnologias foram usadas e o que o aluno aprendeu. Sem ficha técnica, um jogo no portfólio fica mudo; com ela, conta uma história.

O aluno aprende que o portfólio é o cartão de visitas de quem trabalha com tecnologia. Cada projeto entra com título, descrição, capa (uma imagem ou screenshot do jogo), link jogável e a ficha técnica. A organização é tratada como parte do ofício: nada de link quebrado, descrição vazia ou print escuro e ilegível. O Claude entra como assistente de escrita, ajudando o aluno a revisar e melhorar o texto da ficha técnica, sem escrever por ele.

O fechamento é uma apresentação em roda. Cada aluno abre seu portfólio no projetor, mostra o jogo publicado rodando, lê um trecho da ficha técnica e conta a maior dificuldade que superou no mês. Assim o entregável oficial do mês, um jogo no Unity publicado e documentado no portfólio, é consolidado e celebrado diante da turma, encerrando a etapa 4 de 4.`,
  materiais: [
    `Computadores com Unity + C# instalados e a build do jogo gerada na aula anterior (pasta com o executável Windows ou a pasta WebGL pronta)`,
    `Conexão com a internet e o navegador aberto, para acessar a plataforma de publicação itch.io e o portfólio da trilha`,
    `Projetor para a demonstração da publicação e para a roda de apresentações dos alunos`,
    `Acesso ao Claude como assistente de escrita, para revisar e melhorar o texto da ficha técnica`,
    `Arquivo de exemplo: um modelo de ficha técnica preenchido (título, gêneros, controles, tecnologias, aprendizados) para os alunos copiarem a estrutura`,
    `Folha impressa de checklist de publicação (link jogável, capa, descrição, ficha técnica, créditos) para cada aluno conferir antes de entregar`,
    `Pasta de rede compartilhada ou conta da escola na plataforma, definida antes da aula, para padronizar onde cada jogo será hospedado`,
  ],
  conceitosChave: [
    `Build — a versão executável do jogo, já compilada pelo Unity, que roda fora do editor (em Windows ou no navegador) e pode ser distribuída.`,
    `Publicar — colocar a build em uma plataforma pública, como a itch.io, para que outras pessoas consigam acessar e jogar.`,
    `WebGL — formato de build do Unity que roda direto no navegador, sem instalar nada, ideal para mostrar o jogo por um link.`,
    `Portfólio — a coleção organizada dos projetos do aluno, que funciona como cartão de visitas de quem trabalha com tecnologia.`,
    `Ficha técnica — texto curto e profissional que descreve o jogo: título, gênero, controles, tecnologias usadas e o que foi aprendido.`,
    `Capa (thumbnail) — imagem ou screenshot que representa o jogo na listagem do portfólio e atrai quem vai jogar.`,
    `Créditos — lista de quem fez o que (programação, arte, som) e das ferramentas utilizadas, dando o devido reconhecimento.`,
  ],
  treinamento: `## O que o professor precisa saber

Mesmo sem dominar Unity, você conduz esta aula porque o jogo já está pronto: a build foi gerada na aula 7. O seu papel aqui é guiar a publicação e a escrita. A plataforma recomendada é a itch.io, gratuita e amiga de iniciantes. O caminho é: criar (ou usar a conta da escola) em itch.io, clicar em "Upload new project", preencher título e descrição, enviar o arquivo da build e definir o tipo. Se a build for WebGL, marque a opção "This file will be played in the browser" para o jogo rodar no próprio site; se for Windows, deixe como download e marque a plataforma Windows. Antes da aula, faça o teste completo você mesmo: publique a build de exemplo, confirme que o link abre e que o jogo roda. Tenha em mãos o modelo de ficha técnica preenchido. Lembre que o Claude é assistente de escrita: o aluno escreve a primeira versão e pede ao Claude para revisar clareza e ortografia, nunca para inventar o texto inteiro.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): retome o mês inteiro. Pergunte: "O que nosso jogo já tem?" Conduza a resposta passando por movimento, regras, física, HUD, som, playtest, balanceamento e build. No projetor, abra a pasta da build de exemplo e mostre o jogo rodando. Diga que hoje vamos "colocar o jogo no ar" e registrá-lo no portfólio.

Conteúdo novo guiado (15 min): demonstre a publicação na itch.io. Clique em "Upload new project". Preencha o campo "Title" com o nome do jogo. No campo "Kind of project", escolha "HTML" para WebGL ou "Downloadable" para Windows. Em "Uploads", clique em "Upload files" e envie a build; para WebGL, marque "This file will be played in the browser". Adicione a capa em "Cover image" e escreva a descrição. Clique em "Save & view page" e abra o link público. Em seguida, mostre o modelo de ficha técnica e explique cada campo.

Mão na massa (25 min): cada aluno publica o próprio jogo seguindo os mesmos passos e cola o link gerado no portfólio da trilha. Depois escreve a ficha técnica usando o modelo. Quem terminar pede ao Claude para revisar o texto, com um pedido claro como: revise a clareza e a ortografia desta ficha técnica, sem mudar o sentido. Circule conferindo link, capa e descrição.

Desafio e compartilhar (10 min): roda de apresentações no projetor. Cada aluno abre o portfólio, joga 30 segundos do próprio jogo publicado, lê um trecho da ficha técnica e conta a maior dificuldade que superou. Celebre o fechamento da trilha.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do "lançamento": "até agora o jogo morava só no seu computador; publicar é abrir a porta para o mundo inteiro poder jogar pelo link". Para a ficha técnica, diga: "é a etiqueta do produto; quem chega no seu portfólio precisa entender em 20 segundos o que é o jogo e como se joga". Compare o portfólio com uma galeria: "cada jogo é um quadro na parede, com nome, foto e uma plaquinha explicando". Reforce o uso do Claude como revisor, não como autor: "você é o criador; o Claude é o seu editor, que ajuda a deixar o texto mais claro depois que você escreveu".

## Erros comuns e como ajudar

O erro mais comum é enviar a build incompleta: no WebGL, a pasta toda precisa ir zipada com o index.html na raiz; oriente compactar a pasta inteira e enviar o zip. Outro clássico é esquecer de marcar "play in the browser", o que faz o jogo virar download em vez de rodar na página; confira esse botão com cada aluno. Muitos deixam a descrição vazia ou colam só o título; exija ao menos duas frases e os controles. Capas escuras ou ilegíveis são comuns; peça um screenshot claro do jogo em ação. Por fim, há quem cole um link privado ou em rascunho; lembre de mudar a visibilidade para "Public" ou "Restricted" e testar o link em uma aba anônima antes de entregar.`,
  exercicios: [
    {
      titulo: `Publicando a build na plataforma`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe na tela de cada aluno o caminho na itch.io: "Upload new project", preencher o título, escolher o tipo de projeto e enviar o arquivo da build. Para WebGL, confira que a pasta foi enviada zipada com o index.html na raiz e que a opção de rodar no navegador está marcada.`,
      atividade: `Acesse a itch.io, clique em "Upload new project" e crie a página do seu jogo. Escreva o título, envie a build gerada na aula passada e, se for WebGL, marque a opção para rodar no navegador. Clique em "Save & view page" e abra o link público.`,
      gabarito: `O aluno gera uma página pública do jogo com a build enviada corretamente. No caso WebGL, o jogo abre e roda dentro da página; no caso Windows, o arquivo fica disponível para download e marcado para a plataforma Windows. Sinal de acerto: o link público abre e o jogo carrega sem erro.`,
    },
    {
      titulo: `Escrevendo a ficha técnica`,
      tipo: `produção de texto`,
      tempo: `10 minutos`,
      guiaProfessor: `Distribua o modelo de ficha técnica e mostre cada campo. Oriente o aluno a ser objetivo: título, gênero, controles, tecnologias e aprendizado. Reforce que controles devem dizer exatamente quais teclas fazem o que, para que qualquer pessoa consiga jogar.`,
      atividade: `Escreva a ficha técnica do seu jogo seguindo o modelo, com estes campos: Título, Gênero, Como jogar (controles), Tecnologias usadas (Unity, C# e o que mais usou) e O que aprendi. Use frases curtas e claras.`,
      gabarito: `Exemplo de ficha completa: "Título: Fuga do Labirinto. Gênero: aventura e plataforma 2D. Como jogar: setas para mover, barra de espaço para pular, colete todas as chaves e chegue à porta. Tecnologias: Unity, C#, assets próprios. O que aprendi: escrever scripts de movimento, configurar Rigidbody e balancear a dificuldade." A ficha tem os cinco campos preenchidos, controles específicos e ao menos um aprendizado real.`,
    },
    {
      titulo: `Capa e descrição da página`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre como tirar um screenshot do jogo em ação (tecla Print Screen ou a ferramenta de captura) e usá-lo como capa em "Cover image". Confira que a descrição tem ao menos duas frases e inclui os controles. Verifique a visibilidade da página antes de seguir.`,
      atividade: `Volte à página do seu jogo na itch.io. Adicione uma capa usando um screenshot claro do jogo em ação no campo "Cover image". Escreva a descrição com ao menos duas frases explicando o objetivo do jogo e os controles. Salve e confira como ficou.`,
      gabarito: `A página exibe uma capa nítida que mostra o jogo de verdade (não a tela do editor nem uma imagem escura) e uma descrição com pelo menos duas frases que explicam objetivo e controles. Sinal de acerto: alguém que nunca viu o jogo entende, só pela página, o que fazer.`,
    },
    {
      titulo: `Revisando a ficha técnica com o Claude`,
      tipo: `uso de assistente de IA`,
      tempo: `12 minutos`,
      guiaProfessor: `Reforce que o aluno já escreveu a ficha e agora usa o Claude apenas como revisor. Ensine a fazer um pedido claro e a comparar antes e depois, aceitando só as mudanças que melhoram de fato. O aluno deve manter a autoria do texto.`,
      atividade: `Cole sua ficha técnica no Claude com este pedido: "Revise a clareza e a ortografia desta ficha técnica do meu jogo, sem mudar o sentido nem inventar informações." Compare a versão revisada com a sua, escolha as melhorias que fazem sentido e atualize a ficha no portfólio.`,
      gabarito: `O aluno apresenta a ficha antes e depois e explica ao menos duas mudanças aceitas (por exemplo "corrigi um erro de acento" ou "deixei a frase dos controles mais curta") e, se for o caso, uma sugestão recusada por mudar o sentido. Bom resultado: o texto fica mais claro, mas continua sendo do aluno, sem informações inventadas.`,
    },
    {
      titulo: `Entrega no portfólio e apresentação`,
      tipo: `projeto curto`,
      tempo: `13 minutos`,
      guiaProfessor: `Esta atividade consolida o entregável do mês. Confira no portfólio de cada aluno: título, link jogável funcionando, capa, descrição, ficha técnica e créditos. Teste o link em uma aba anônima. Conduza a roda no projetor e marque a entrega de cada aluno.`,
      atividade: `Finalize a entrada do seu jogo no portfólio da trilha: título, link jogável, capa, descrição, ficha técnica revisada e créditos (programação, arte, som e ferramentas). Confira o checklist completo e teste o link. Depois apresente para a turma: jogue 30 segundos, leia um trecho da ficha e conte a maior dificuldade que superou no mês.`,
      gabarito: `A entrada do portfólio contém título, link jogável que abre em aba anônima, capa nítida, descrição com controles, ficha técnica revisada e créditos completos, com o checklist todo marcado. Na apresentação o aluno mostra o jogo rodando, lê um trecho da ficha e cita uma dificuldade superada (por exemplo um bug de colisão resolvido). Essa entrada é o entregável oficial do mês, fechando a etapa 4 de 4 da trilha.`,
    },
  ],
};
