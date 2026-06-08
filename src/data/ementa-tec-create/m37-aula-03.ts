import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "A arte do prompt: falar bem com a IA",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprender os quatro elementos de um bom prompt (contexto, objetivo claro, formato desejado e papel da IA) e reescrever pedidos vagos em pedidos precisos que geram respostas muito melhores do Claude.`,
  descricao: `Nas duas primeiras aulas o aluno conheceu o Claude e fez seus primeiros pedidos de verdade. Agora ele descobre o segredo que separa uma resposta morna de uma resposta excelente: a qualidade da pergunta. Um prompt é o texto que você escreve para a IA, e a forma como você o escreve muda completamente o que recebe de volta. Pedir mal é como entrar numa loja e dizer apenas "quero uma coisa"; pedir bem é descrever exatamente o que precisa, para quê e em que formato.

Esta aula apresenta os quatro elementos de um bom prompt. O contexto explica a situação: em que projeto o aluno está, qual engine usa, o que já tentou. O objetivo claro diz o que ele quer de fato, sem rodeios. O formato desejado avisa como a resposta deve vir: uma lista, um passo a passo, um trecho de código comentado, uma explicação curta. E o papel da IA pede ao Claude que aja como alguém específico, por exemplo "aja como um professor de C# paciente". Juntos, esses quatro pedaços transformam um pedido vago num pedido cirúrgico.

O exercício central da aula é a reescrita. O aluno parte de pedidos preguiçosos como "me ajuda com o jogo" e os reconstrói até ficarem precisos, do tipo "estou fazendo um jogo no Unity em C#; meu personagem não pula; aja como um tutor e me dê um passo a passo numerado para encontrar o erro". Ao rodar os dois prompts e comparar lado a lado, ele vê com os próprios olhos como a resposta melhora. Essa percepção é o coração do mês: a IA é uma parceira poderosa, mas só entrega o seu melhor quando recebe um bom briefing.

Como este é o Ano 4 e o aluno trabalha com Unity, Unreal e modelagem em Blender e Maya, os prompts da aula usam o vocabulário real desses projetos. Assim, a habilidade não fica abstrata: ele já sai escrevendo prompts que servirão para depurar código, planejar mecânicas e organizar tarefas nas próximas aulas.`,
  materiais: [
    `Computadores com acesso ao Claude (site claude.ai) já abertos e com login feito, um por aluno`,
    `Projetor ou tela grande para o professor demonstrar prompts ao vivo e comparar respostas`,
    `Arquivo de exemplo "prompts_vagos.txt" com cinco pedidos mal escritos para os alunos reescreverem`,
    `Folha impressa do "mapa do bom prompt" com os quatro elementos (contexto, objetivo, formato, papel) para colar ao lado de cada monitor`,
    `Quadro branco ou flip chart para montar o esqueleto de um prompt em frente da turma`,
    `Caderno ou documento de texto para cada aluno guardar seus melhores prompts da aula`,
  ],
  conceitosChave: [
    `Prompt — o texto que você escreve para a IA; é o pedido que define a qualidade da resposta.`,
    `Contexto — a parte do prompt que explica a situação (qual projeto, qual engine, o que já foi tentado).`,
    `Objetivo claro — dizer de forma direta o que você quer, sem rodeios nem pedidos genéricos.`,
    `Formato desejado — avisar como a resposta deve vir: lista, passo a passo numerado, código comentado ou explicação curta.`,
    `Papel da IA — pedir que o Claude aja como alguém específico, por exemplo um professor paciente de C#.`,
    `Pedido vago — um prompt curto e genérico ("me ajuda com o jogo") que costuma gerar respostas fracas.`,
    `Refinar o prompt — melhorar o pedido acrescentando os elementos que faltam para deixá-lo preciso.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Claude para dar esta aula, mas precisa entender uma ideia simples: a resposta da IA é tão boa quanto o pedido. O prompt é o texto que digitamos na caixa de mensagem do Claude. Quando o pedido é vago, a IA chuta; quando é detalhado, ela acerta. Os quatro elementos a memorizar são contexto (a situação), objetivo claro (o que você quer), formato desejado (como a resposta deve vir) e papel da IA (quem o Claude deve fingir ser). Antes da aula, abra o claude.ai, faça login e teste você mesmo um pedido vago e um detalhado, lado a lado, para sentir a diferença. Guarde os dois para mostrar no projetor. Lembre que o Claude conversa em português normalmente, então não há barreira de idioma.

## Passo a passo da aula

Aquecimento (10 min): retome a aula anterior perguntando que tipos de pedido a turma já fez ao Claude. No projetor, digite o pedido vago "me ajuda com o jogo" e mostre a resposta genérica que aparece. Pergunte: por que o Claude não soube ajudar direito? Conduza até a conclusão de que faltou informação.

Conteúdo novo guiado (15 min): apresente os quatro elementos no quadro, um por um. Depois construa, na frente da turma, um prompt completo na caixa do Claude, juntando os quatro pedaços. Digite exatamente assim: Aja como um professor paciente de C# para Unity. Contexto: estou fazendo um jogo de plataforma e meu personagem não esta pulando quando aperto a barra de espaco. Objetivo: descobrir por que o pulo não funciona. Formato: me de um passo a passo numerado, do mais simples ao mais avancado, do que devo verificar no código. Rode e mostre como a resposta agora vem organizada e útil. Compare lado a lado com o pedido vago do aquecimento.

Mão na massa (25 min): cada aluno abre o arquivo "prompts_vagos.txt" e reescreve os cinco pedidos vagos usando os quatro elementos. Eles devem rodar a versão vaga e a versão reescrita no Claude e comparar. Circule pela sala lembrando: cadê o contexto? Qual o formato que você quer? Quem o Claude deve fingir ser? Peça que salvem os dois melhores prompts no caderno ou documento de texto.

Desafio e compartilhar (10 min): cada aluno escolhe seu melhor prompt reescrito e mostra a um colega a diferença entre a resposta vaga e a refinada. Faça uma rodada rápida em que dois ou três alunos leem o prompt em voz alta e a turma aponta quais dos quatro elementos foram usados.

## Como explicar de forma clara

Use a comparação do pedido na lanchonete. Se você diz só "quero um lanche", o atendente fica perdido; se diz "quero um hamburguer sem cebola, com batata pequena, para viagem", ele acerta de primeira. O Claude é igual: quanto mais você descreve, melhor ele entrega. Apresente os quatro elementos como quatro perguntas fáceis que o aluno faz a si mesmo: Onde estou? (contexto) O que quero? (objetivo) Como quero receber? (formato) Quem o Claude deve ser? (papel). Repita o mantra "quem pede bem, recebe bem" sempre que alguém reclamar de uma resposta ruim.

## Erros comuns e como ajudar

O erro mais comum é o aluno achar que detalhar é perder tempo e continuar mandando pedidos curtos. Mostre na prática a diferença de qualidade e o convença pelo resultado. Outro tropeço é escrever um parágrafo gigante e confuso: ensine a separar os quatro elementos em frases curtas, uma para cada. Alguns esquecem o formato e recebem textos enormes; lembre de pedir lista ou passo a passo numerado. Há quem confunda objetivo com contexto: explique que contexto é a situação e objetivo é o que ele quer que aconteça. Por fim, alguns copiam o exemplo do professor sem adaptar; incentive usar o vocabulário do próprio projeto, como Unity, C++, Blender ou Maya.`,
  exercicios: [
    {
      titulo: `Cace os Quatro Elementos`,
      tipo: `Análise guiada`,
      tempo: `4 minutos`,
      guiaProfessor: `Projete o prompt completo construído na explicação e peça que os alunos apontem cada elemento. Confirme em voz alta a resposta de cada um antes de seguir.`,
      atividade: `Leia este prompt e identifique onde está cada um dos quatro elementos: "Aja como um professor paciente de C# para Unity. Estou fazendo um jogo de plataforma e meu personagem não pula quando aperto a barra de espaco. Quero descobrir o motivo. Me de um passo a passo numerado do que verificar." Diga qual trecho é o contexto, qual é o objetivo, qual é o formato e qual é o papel da IA.`,
      gabarito: `Papel da IA: "Aja como um professor paciente de C# para Unity". Contexto: "Estou fazendo um jogo de plataforma e meu personagem não pula quando aperto a barra de espaco". Objetivo: "Quero descobrir o motivo". Formato: "Me de um passo a passo numerado do que verificar". Os quatro elementos aparecem, cada um em uma frase curta.`,
    },
    {
      titulo: `De Vago para Preciso`,
      tipo: `Prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Acompanhe a reescrita garantindo que o aluno acrescente pelo menos contexto, objetivo e formato. Peça que rode as duas versões e compare as respostas lado a lado.`,
      atividade: `Pegue o pedido vago "me ajuda com o jogo" e reescreva-o como um prompt preciso usando os quatro elementos, com base no seu projeto de Unity. Rode no Claude tanto a versão vaga quanto a sua versão reescrita e observe qual resposta é mais útil.`,
      gabarito: `Uma reescrita correta inclui os quatro elementos, por exemplo: "Aja como um tutor de C# para Unity. Contexto: estou criando um jogo de plataforma e a pontuacao não aparece na tela. Objetivo: fazer a pontuacao atualizar quando o jogador pega uma moeda. Formato: me de um passo a passo numerado." A resposta da versão reescrita vem organizada e específica, enquanto a vaga vem genérica. O aluno percebe a diferença na prática.`,
    },
    {
      titulo: `Troca de Papéis da IA`,
      tipo: `Experimento`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre que mudar só o papel já altera o tom da resposta. Oriente o aluno a manter contexto, objetivo e formato iguais e trocar apenas a frase do papel.`,
      atividade: `Escreva um prompt sobre uma dúvida de modelagem no Blender e rode-o três vezes, mudando apenas o papel da IA: primeiro "Aja como um professor iniciante e explique com palavras simples", depois "Aja como um artista 3D profissional", depois "Aja como um colega de turma que esta aprendendo junto". Compare como o tom e o nível de detalhe mudam em cada resposta.`,
      gabarito: `As três respostas tratam do mesmo assunto, mas o papel muda o tom: o professor iniciante usa linguagem simples e explica termos básicos; o artista profissional usa termos técnicos e detalhes avançados; o colega de turma responde de forma mais informal e parceira. O aluno conclui que o papel da IA controla o estilo e a profundidade da resposta, mesmo mantendo contexto, objetivo e formato iguais.`,
    },
    {
      titulo: `O Mesmo Pedido, Três Formatos`,
      tipo: `Desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Reforce que o formato muda a apresentação, não o conteúdo. Peça que o aluno mantenha o mesmo contexto e objetivo e troque só o formato pedido.`,
      atividade: `Escolha uma dúvida do seu projeto na Unreal Engine. Escreva o mesmo pedido três vezes, mudando apenas o formato desejado: na primeira peça "responda em uma lista de topicos", na segunda peça "responda em um passo a passo numerado", na terceira peça "responda em um paragrafo curto e direto". Compare como o Claude organiza a mesma informação de jeitos diferentes.`,
      gabarito: `As três respostas trazem a mesma informação, mas apresentada conforme o formato pedido: a primeira vem em tópicos com marcadores, a segunda em etapas numeradas em ordem, a terceira em um parágrafo enxuto. O aluno percebe que o formato desejado controla a organização da resposta e escolhe o mais adequado para cada situação, como passo a passo para corrigir um erro e lista para reunir ideias.`,
    },
    {
      titulo: `Meu Catálogo de Prompts`,
      tipo: `Projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe a criação dos prompts garantindo que cada um tenha os quatro elementos e use o vocabulário real do projeto do aluno. Incentive salvar tudo no caderno ou documento de texto para reusar nas próximas aulas.`,
      atividade: `Monte um pequeno catálogo com três prompts precisos e diferentes, cada um para uma tarefa real dos seus projetos: um para depurar código em C# no Unity, um para planejar uma mecânica de jogo e um para tirar uma dúvida de modelagem no Maya. Cada prompt deve conter os quatro elementos (contexto, objetivo, formato e papel da IA). Rode pelo menos um deles no Claude e salve todos no seu caderno.`,
      gabarito: `O catálogo final tem três prompts distintos, cada um com os quatro elementos completos. Exemplo de prompt de depuração: "Aja como um tutor de C# para Unity. Contexto: meu inimigo atravessa a parede em vez de colidir. Objetivo: fazer a colisao funcionar. Formato: passo a passo numerado do que verificar." Exemplo de planejamento de mecânica: "Aja como um designer de jogos. Contexto: meu jogo de plataforma precisa de um power-up. Objetivo: listar três ideias de power-up simples. Formato: lista de topicos com uma frase cada." Exemplo de modelagem: "Aja como um artista 3D paciente. Contexto: estou modelando uma espada no Maya e as bordas ficam estranhas. Objetivo: deixar as bordas mais limpas. Formato: explicacao curta e direta." Os prompts usam o vocabulário real dos projetos e ficam salvos para reuso.`,
    },
  ],
};
