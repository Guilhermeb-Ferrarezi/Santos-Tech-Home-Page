import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Prompts campeões: escrever e resumir",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Praticar a anatomia de um bom prompt — contexto, tarefa, formato e exemplo — usando o Claude para escrever um texto curto, resumir um conteúdo longo e gerar ideias, comparando versões do mesmo pedido para ver qual funciona melhor.`,
  descricao: `Na aula passada os alunos tiveram a primeira conversa com o Claude e descobriram como mandar uma mensagem e ler a resposta. Agora chega a parte que muda tudo: aprender a pedir bem. A diferença entre uma resposta mais ou menos e uma resposta excelente quase nunca está na inteligência da ferramenta — está na qualidade do pedido. Um bom pedido, que chamamos de prompt, é como uma receita: quanto mais clara e completa, melhor o prato.

Nesta aula o aluno aprende uma estrutura simples e poderosa para montar qualquer prompt, com quatro ingredientes: contexto (quem você é e para quem é o texto), tarefa (o que você quer exatamente), formato (como a resposta deve aparecer: lista, tabela, parágrafo, número de palavras) e exemplo (uma amostra do estilo desejado, quando ajuda). Eles vão treinar isso em três situações reais da vida escolar: escrever um texto curto (como o convite de um evento), resumir um conteúdo longo (um texto que o professor entrega) e gerar ideias para um trabalho.

O coração da aula é a comparação. Em vez de aceitar a primeira resposta, o aluno vai escrever uma versão fraca do prompt, ver o resultado, e depois reescrever o mesmo pedido de forma campeã, com os quatro ingredientes. Ao colocar as duas respostas lado a lado, ele enxerga com os próprios olhos o quanto o jeito de pedir muda o resultado. Essa percepção é o objetivo central: o aluno sai entendendo que ele dirige a conversa, e não o contrário.

Importante para o ritmo do mês: aqui trabalhamos apenas texto — escrever, resumir e gerar ideias por prompt. Ainda não vamos enviar arquivos nem PDFs (isso é a Aula 3) nem usar Artifacts (Aula 5). Se um aluno perguntar sobre anexar um documento, anote o interesse e diga que veremos em breve. Mantenha o foco na arte de pedir bem.`,
  materiais: [
    `Computadores com navegador e o Claude aberto em claude.ai, um por aluno, todos já logados na conta da escola antes do início`,
    `Conta do Claude da escola configurada em cada computador (confira o login antes da aula para não perder tempo)`,
    `Projetor ou TV ligada ao computador do professor para demonstrar os prompts ao vivo`,
    `Um texto longo de exemplo (cerca de uma página, tema de interesse dos adolescentes: games, esportes, ciência curiosa) impresso ou em arquivo de texto, para o exercício de resumo`,
    `Cartaz ou slide com os quatro ingredientes do prompt — Contexto, Tarefa, Formato e Exemplo — para consulta rápida na parede`,
    `Folha de planejamento impressa com duas colunas ("prompt fraco" e "prompt campeão") para o aluno escrever antes de digitar`,
    `Prompt campeão de exemplo já pronto pelo professor, para mostrar o resultado esperado quando alguém travar`,
  ],
  conceitosChave: [
    `Prompt — a mensagem que você escreve para o Claude; é o pedido que dá início e direção à resposta.`,
    `Contexto — a parte do prompt que explica a situação: quem você é, para quem é o texto e por que você precisa dele.`,
    `Tarefa — o que você quer exatamente que o Claude faça (escrever, resumir, listar, comparar, dar ideias).`,
    `Formato — como a resposta deve aparecer: em lista, tabela, parágrafo, com certo número de palavras ou tom de voz.`,
    `Exemplo — uma pequena amostra do estilo ou modelo que você quer, para o Claude imitar o jeito desejado.`,
    `Resumo — versão curta de um texto longo que guarda só as ideias principais, deixando de fora os detalhes menos importantes.`,
    `Iterar — melhorar o prompt aos poucos: pedir, olhar a resposta e reescrever o pedido para chegar a um resultado melhor.`,
  ],
  treinamento: `## O que o professor precisa saber

O Claude responde ao texto que você digita na caixa de mensagem, na parte de baixo da tela em claude.ai. Para enviar, basta apertar Enter ou clicar na setinha à direita da caixa. Para começar uma conversa nova e limpa, clique em "Nova conversa" (ou no ícone de lápis/folha no canto superior esquerdo) — isso é útil quando você quer comparar prompts sem que a conversa anterior atrapalhe. Tudo o que o Claude responde aparece em forma de balões, de cima para baixo; role a tela para reler.

A ideia central da aula são os quatro ingredientes do prompt. Contexto situa o Claude ("Sou um aluno do 7º ano e preciso de..."). Tarefa diz a ação ("escreva", "resuma", "liste 10 ideias"). Formato define a forma ("em 3 frases", "em uma tabela", "tom animado"). Exemplo mostra o estilo desejado, quando ajuda. Nem todo prompt precisa dos quatro, mas Contexto, Tarefa e Formato quase sempre melhoram a resposta. Para resumir, dica de ouro: cole o texto longo e termine com "Resuma em 5 tópicos curtos".

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça que cada aluno abra o claude.ai e clique em "Nova conversa". Faça uma roda rápida: "Quem lembra como mandar uma mensagem para o Claude?" Projete a sua tela. Mostre o cartaz dos quatro ingredientes e leia cada um com um exemplo do dia a dia.

Conteúdo novo guiado (15 min): no projetor, digite um prompt fraco de propósito: "escreva um convite". Mostre a resposta genérica. Depois reescreva o mesmo pedido como campeão, na caixa de baixo, em uma nova mensagem: "Sou aluno do 8º ano. Escreva um convite para a feira de ciências da escola, no sábado às 9h, em tom animado, em 4 frases, terminando com um chamado para participar." Compare as duas respostas em voz alta. Em seguida demonstre um resumo: cole o texto de exemplo e peça "Resuma em 5 tópicos". Por fim, mostre gerar ideias: "Liste 8 ideias de tema para um trabalho de história sobre a sua cidade".

Mão na massa (25 min): cada aluno faz os três pedidos no seu computador, sempre começando pelo prompt fraco e depois pelo campeão, usando a folha de planejamento. Circule pela sala lendo as respostas com eles e perguntando "o que faltou no prompt fraco?". Garanta que todos completem ao menos a parte de escrever e a de resumir.

Desafio e compartilhar (10 min): proponha que cada um escolha o seu melhor prompt campeão e o leia em voz alta, mostrando as duas respostas na projeção. Convide dois ou três alunos para explicar qual ingrediente fez a maior diferença.

## Como explicar de forma clara

Use a comparação da receita ou do pedido em uma lanchonete: "Se você só diz 'quero um lanche', vem qualquer coisa. Se você diz 'quero um X-burguer, sem cebola, com batata pequena e refrigerante de limão', vem exatamente o que você queria." O prompt é o seu pedido bem feito. Para o resumo, diga: "É como contar um filme de duas horas para um amigo em um minuto: você guarda só o que importa." Reforce que está tudo bem errar o primeiro prompt — a graça é melhorar e tentar de novo, igual a passar de fase em um jogo.

## Erros comuns e como ajudar

O erro mais comum é o prompt curto demais e sem contexto ("faça um texto"); peça que adicionem quem é e para quem é. Outro é esquecer o formato e reclamar que "ficou grande demais": mostre que basta pedir "em 3 frases" ou "em uma lista". Alguns alunos aceitam a primeira resposta sem comparar; lembre que o coração da aula é colocar as duas versões lado a lado. Vários esquecem de abrir uma conversa nova e o Claude mistura assuntos; mostre o botão "Nova conversa". Por fim, alguns querem copiar a resposta do colega; incentive que cada um teste o próprio pedido, pois o aprendizado está em pedir, não em ter a resposta pronta.`,
  exercicios: [
    {
      titulo: `Fraco contra campeão`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Aquecimento individual guiado. Projete os dois prompts antes de soltar a turma. Conte o tempo em voz alta. Verifique se todos abriram uma conversa nova e enviaram as duas mensagens.`,
      atividade: `No Claude, em uma conversa nova, escreva primeiro o prompt fraco: "escreva um convite". Veja a resposta. Depois, na mesma conversa, escreva o prompt campeão com contexto, tarefa e formato, por exemplo: "Sou aluno do 7º ano. Escreva um convite para o campeonato de futebol da escola, no domingo às 10h, em tom animado, em 4 frases." Compare as duas respostas.`,
      gabarito: `O aluno deve ter na tela duas respostas: uma genérica (do prompt fraco) e uma específica e completa (do prompt campeão), com data, horário, tom animado e cerca de 4 frases. Sucesso é o aluno apontar em voz alta pelo menos uma diferença concreta entre as duas, como "a segunda já tem o dia e a hora" ou "a segunda está mais animada".`,
    },
    {
      titulo: `O grande resumo`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Foco na tarefa de resumir. Entregue ou projete o texto longo de exemplo. Mostre como colar o texto na caixa de mensagem e terminar pedindo o formato do resumo. Oriente a definir o número de tópicos.`,
      atividade: `Cole o texto longo que o professor entregou na caixa de mensagem do Claude. No final do mesmo prompt, escreva: "Resuma este texto em 5 tópicos curtos, com no máximo uma linha cada." Leia o resumo e confira se ele guardou as ideias principais.`,
      gabarito: `A resposta deve trazer exatamente 5 tópicos curtos que capturam as ideias centrais do texto, sem inventar informações que não estavam lá. Sucesso é o aluno conferir, comparando com o texto original, que nada importante ficou de fora e que o resumo está bem mais curto. Se faltou uma ideia principal, oriente a pedir "inclua também o ponto sobre..." e refazer.`,
    },
    {
      titulo: `Fábrica de ideias`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Treina gerar ideias com formato definido. Demonstre um pedido de lista no projetor. Desafie os alunos a refinar: depois da primeira lista, pedir para o Claude escolher e detalhar a melhor ideia. Atenção aos que pedem sem contexto.`,
      atividade: `Peça ao Claude 10 ideias para um trabalho escolar à sua escolha, dando contexto e formato, por exemplo: "Sou aluno do 8º ano e preciso de um tema para um trabalho de ciências sobre o meio ambiente. Liste 10 ideias em formato de lista numerada." Depois, escreva uma segunda mensagem: "Escolha a melhor da lista e explique por quê em 3 frases."`,
      gabarito: `O aluno deve obter uma lista numerada com 10 ideias ligadas ao tema pedido e, na segunda resposta, uma única ideia escolhida com uma justificativa de cerca de 3 frases. Sucesso é a lista respeitar o formato (numerada, 10 itens) e a segunda resposta de fato escolher e justificar. Mostra domínio da iteração: pedir, olhar e refinar.`,
    },
    {
      titulo: `Detetives do prompt`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. A ideia é caçar o ingrediente que falta. Dê às duplas o cartaz dos quatro ingredientes como apoio. Circule ouvindo as conversas e incentivando que apliquem a melhoria no Claude, não só no papel.`,
      atividade: `Em dupla, um colega escreve de propósito um prompt ruim no Claude (curto, sem contexto ou sem formato) e mostra a resposta ao outro. O outro precisa descobrir qual dos quatro ingredientes está faltando — contexto, tarefa, formato ou exemplo — e reescrever o prompt corrigido. Enviem o prompt corrigido e comparem as respostas. Depois, troquem os papéis.`,
      gabarito: `Cada dupla deve terminar com pelo menos dois prompts corrigidos e suas respostas claramente melhores que as originais. Sucesso é a dupla nomear corretamente o ingrediente que faltava em cada caso (por exemplo "faltava o formato, não dizia quantas frases") e mostrar a resposta melhorada na tela. Verifique que a correção foi de fato digitada no Claude.`,
    },
    {
      titulo: `Roda dos campeões`,
      tipo: `roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Fechamento coletivo. Organize a turma em roda ou de frente para o projetor. Cada aluno mostra o seu melhor prompt campeão e a resposta. Conduza a conversa com perguntas e ajude a turma a tirar uma "regra de ouro" comum ao final.`,
      atividade: `Cada aluno escolhe o seu melhor prompt campeão da aula, projeta ou lê em voz alta e mostra as duas respostas (fraca e campeã). Explique para a turma qual dos quatro ingredientes fez a maior diferença no seu caso. Ao final, juntos, escrevam no quadro uma "regra de ouro" para escrever bons prompts.`,
      gabarito: `Cada aluno deve apresentar um prompt campeão completo e identificar o ingrediente decisivo (ex.: "o contexto, porque sem dizer que era para a escola vinha qualquer coisa"). Sucesso é a turma chegar a uma regra de ouro coerente, como "sempre diga quem você é, o que quer e em que formato". Considere bem-sucedido quando todos participam e a regra final reúne pelo menos três dos quatro ingredientes.`,
    },
  ],
};
