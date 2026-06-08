import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Conhecendo os tipos de pergunta",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Explorar os principais tipos de pergunta do Google Forms e descobrir quando usar cada um, criando exemplos práticos de cada formato.`,
  descricao: `O Google Forms não tem só um jeito de perguntar. Ele oferece vários tipos de pergunta, e cada um serve para uma situação diferente. Saber escolher o tipo certo é o que separa um formulário confuso de um formulário fácil de responder e fácil de analisar depois. Nesta aula, o aluno vai conhecer seis formatos essenciais: resposta curta, parágrafo, múltipla escolha, caixas de seleção, lista suspensa e escala linear.

A ideia central é simples: o tipo de pergunta depende da resposta que você espera receber. Se você quer um nome ou um e-mail, usa resposta curta. Se quer uma opinião longa, usa parágrafo. Se quer que a pessoa escolha apenas UMA opção, usa múltipla escolha ou lista suspensa. Se quer que ela possa marcar VÁRIAS opções, usa caixas de seleção. E se quer medir uma nota ou nível de satisfação, usa escala linear.

Para adolescentes, a melhor forma de fixar isso é criando perguntas sobre temas que eles adoram: jogos, música, comida, séries e redes sociais. Ao montar um pequeno questionário de pesquisa de turma, o aluno percebe na prática a diferença entre marcar uma única bolinha e marcar vários quadradinhos, e entende por que a escala linear é perfeita para perguntar "de 1 a 5, o quanto você gosta de...".

Esta é a terceira aula do mês. Os alunos já sabem criar um formulário (Aula 1) e deixá-lo bonito com tema e imagem (Aula 2). Agora eles ganham o vocabulário completo de tipos de pergunta, que será a base para as próximas aulas sobre obrigatoriedade, validação e coleta de respostas.`,
  materiais: [
    `Computadores com acesso à internet e ao Google Forms (forms.google.com) aberto no navegador`,
    `Conta Google ativa para cada aluno (login feito antes do início da aula)`,
    `Projetor ou tela compartilhada para o professor demonstrar cada tipo de pergunta`,
    `Formulário de exemplo pronto chamado "Pesquisa da Turma" com um exemplar de cada tipo de pergunta`,
    `Lista impressa ou no projetor com os seis tipos de pergunta e quando usar cada um`,
    `Fones de ouvido opcionais, caso algum exemplo use vídeo ou áudio`,
  ],
  conceitosChave: [
    `Resposta curta — campo para textos pequenos, como nome, idade ou e-mail; a pessoa digita poucas palavras.`,
    `Parágrafo — campo para respostas longas, em que a pessoa pode escrever várias frases ou explicar uma opinião.`,
    `Múltipla escolha — lista de opções em que a pessoa marca apenas UMA bolinha (círculo).`,
    `Caixas de seleção — lista de opções em que a pessoa pode marcar VÁRIOS quadradinhos ao mesmo tempo.`,
    `Lista suspensa — menu que abre para baixo e mostra as opções; a pessoa escolhe só UMA, igual à múltipla escolha, mas ocupa menos espaço.`,
    `Escala linear — linha de números (por exemplo, de 1 a 5) para medir uma nota, satisfação ou nível de concordância.`,
    `Tipo de pergunta — formato escolhido no menu da pergunta que define como o usuário vai responder e como o dado chega organizado.`,
  ],
  treinamento: `## O que o professor precisa saber

Cada pergunta do Google Forms tem um menu suspenso que define o tipo de resposta. Esse menu fica do lado direito do campo onde você escreve o texto da pergunta. Ao clicar nele, aparecem todos os tipos: Resposta curta, Parágrafo, Múltipla escolha, Caixas de seleção, Lista suspensa, Upload de arquivos, Escala linear, Grade de múltipla escolha, Grade de caixas de seleção, Data e Horário. Nesta aula focamos em seis: os quatro mais usados (resposta curta, parágrafo, múltipla escolha, caixas de seleção) mais lista suspensa e escala linear. A regra de ouro para os alunos: a múltipla escolha usa BOLINHA e aceita só UMA resposta; as caixas de seleção usam QUADRADINHO e aceitam VÁRIAS. Essa diferença é a que mais confunde, então repita bastante.

## Passo a passo da aula

Aquecimento (10 min): Retome a Aula 2. Pergunte: "Quem lembra como deixamos o formulário bonito?". Mostre no projetor o formulário "Pesquisa da Turma" e diga que hoje vamos aprender a fazer perguntas de jeitos diferentes. Faça uma pergunta oral à turma com várias respostas possíveis (ex.: "Quais jogos vocês jogam?") e outra com resposta única (ex.: "Qual sua idade?") para eles sentirem a diferença.

Conteúdo novo guiado (15 min): No projetor, abra um formulário e adicione uma pergunta clicando no botão "+" (Adicionar pergunta) da barra lateral direita. Escreva o texto e abra o menu suspenso de tipo à direita. Demonstre, um a um: Resposta curta (digite "Qual seu nome?"), Parágrafo ("Conte sobre seu jogo favorito"), Múltipla escolha ("Qual sua rede social favorita?" com Instagram, TikTok, YouTube), Caixas de seleção ("Quais comidas você gosta?" com pizza, hambúrguer, sushi), Lista suspensa (mesma estrutura da múltipla escolha) e Escala linear ("De 1 a 5, quanto você gosta de matemática?"). Em cada uma, clique em "Adicionar opção" para criar alternativas e mostre o resultado clicando no ícone de olho (Pré-visualizar) no topo.

Mão na massa (25 min): Cada aluno cria um formulário novo chamado "Pesquisa da Turma" e monta seis perguntas, uma de cada tipo, sobre temas livres (jogos, música, comida). Circule pela sala. Lembre-os de salvar nada manualmente, pois o Forms salva sozinho.

Desafio e compartilhar (10 min): Peça que troquem de cadeira e respondam o formulário do colega na pré-visualização. Reúna a turma e pergunte qual tipo foi mais difícil de escolher.

## Como explicar de forma clara

Use comparações do dia a dia. Múltipla escolha é como escolher UM sabor de sorvete na sorveteria: só pode levar um. Caixas de seleção é como montar um lanche escolhendo VÁRIOS ingredientes. Lista suspensa é o mesmo que múltipla escolha, mas "escondida" dentro de um menu, boa quando há muitas opções (como países). Escala linear é a "nota de 1 a 5", igual a avaliar um vídeo com estrelas. Resposta curta é uma linha; parágrafo é um espaço grande para "desabafar". Mostre sempre a pré-visualização para eles verem a bolinha e o quadradinho com os próprios olhos.

## Erros comuns e como ajudar

O erro mais frequente é confundir múltipla escolha com caixas de seleção; reforce "bolinha = uma, quadradinho = várias". Alguns alunos esquecem de adicionar as opções e deixam só "Opção 1": peça que cliquem em "Adicionar opção". Outros escrevem perguntas de "sim ou não" como parágrafo, quando múltipla escolha seria melhor; pergunte "que tipo de resposta você espera?". Há quem não ache o menu de tipo: aponte que ele fica à direita do texto da pergunta. Por fim, lembre que na pré-visualização eles não devem enviar respostas de teste de verdade, só conferir o visual.`,
  exercicios: [
    {
      titulo: `Caça aos tipos`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Projete o formulário de exemplo "Pesquisa da Turma" com uma pergunta de cada tipo, mas sem dizer qual é qual. Peça que os alunos abram a pré-visualização (ícone de olho) e observem se a pergunta tem bolinha, quadradinho, linha de texto ou números.`,
      atividade: `Olhe cada pergunta do formulário de exemplo e escreva, no caderno, qual é o tipo de cada uma (resposta curta, parágrafo, múltipla escolha, caixas de seleção, lista suspensa ou escala linear).`,
      gabarito: `O aluno deve identificar pela aparência: linha pequena = resposta curta; caixa grande = parágrafo; bolinhas = múltipla escolha; quadradinhos = caixas de seleção; menu que abre = lista suspensa; números em linha = escala linear. Considere correto se acertar pelo menos 5 dos 6 tipos pela aparência descrita.`,
    },
    {
      titulo: `Bolinha ou quadradinho?`,
      tipo: `Desafio individual`,
      tempo: `7 minutos`,
      guiaProfessor: `Apresente cinco situações no projetor. Para cada uma, o aluno decide se cabe múltipla escolha (uma resposta) ou caixas de seleção (várias). Esse exercício ataca o erro mais comum da aula.`,
      atividade: `Para cada situação, escreva "múltipla escolha" ou "caixas de seleção": 1) Qual seu mês de aniversário? 2) Quais redes sociais você usa? 3) Qual é a sua cor favorita? 4) Quais matérias você gosta? 5) Qual é o seu animal de estimação preferido?`,
      gabarito: `1) Múltipla escolha (só um mês). 2) Caixas de seleção (usa várias). 3) Múltipla escolha (só uma cor favorita). 4) Caixas de seleção (gosta de várias). 5) Múltipla escolha (um preferido). Regra: se a resposta pode ser mais de uma, é caixas de seleção; se é só uma, é múltipla escolha.`,
    },
    {
      titulo: `Pesquisa relâmpago em dupla`,
      tipo: `Atividade em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Juntos, criam um formulário novo com quatro perguntas, cada uma de um tipo diferente entre os seis estudados. Oriente a usarem o botão "+" para adicionar perguntas e o menu de tipo à direita. Circule e confira se as opções foram preenchidas.`,
      atividade: `Em dupla, criem um formulário chamado "Mini Pesquisa" com quatro perguntas, cada uma de um tipo diferente: uma resposta curta, uma múltipla escolha, uma caixas de seleção e uma escala linear. Preencham as opções de verdade e testem na pré-visualização.`,
      gabarito: `O formulário deve ter exatamente quatro perguntas, uma de cada tipo pedido, com opções preenchidas (não pode ficar "Opção 1" vazio). A escala linear deve ter início e fim definidos (ex.: 1 a 5). Verifique na pré-visualização que a múltipla escolha mostra bolinhas e as caixas de seleção mostram quadradinhos.`,
    },
    {
      titulo: `Roda de conversa: qual tipo escolher?`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Reúna a turma em círculo. Conduza a conversa pedindo justificativas, não só respostas. O objetivo é que eles verbalizem o raciocínio de escolha do tipo de pergunta e percebam que lista suspensa e múltipla escolha resolvem o mesmo problema de jeitos diferentes.`,
      atividade: `Discutam em grupo: quando é melhor usar lista suspensa em vez de múltipla escolha? E por que a escala linear é boa para medir satisfação? Cada aluno dá um exemplo de pergunta real para cada um desses dois tipos.`,
      gabarito: `Espera-se que percebam: lista suspensa é melhor quando há MUITAS opções (ex.: escolher um país ou uma cidade), pois economiza espaço; múltipla escolha é melhor com poucas opções visíveis de uma vez. A escala linear serve para medir nível ou nota (ex.: "de 1 a 5, quanto você gostou da aula?"), porque dá um número fácil de comparar. Aceite qualquer exemplo coerente com essas justificativas.`,
    },
    {
      titulo: `Quiz dos seis tipos`,
      tipo: `Projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Cada aluno monta sozinho um formulário completo usando os SEIS tipos estudados, com tema livre. É a síntese da aula. Reforce que cada pergunta deve ter título claro e opções preenchidas. Ao final, peça que respondam o formulário de um colega na pré-visualização.`,
      atividade: `Crie um formulário chamado "Tudo Sobre Mim" com seis perguntas, uma de cada tipo: resposta curta, parágrafo, múltipla escolha, caixas de seleção, lista suspensa e escala linear. Depois, troque com um colega e responda o formulário dele na pré-visualização.`,
      gabarito: `O formulário deve conter as seis perguntas, cada uma de um tipo distinto e na ordem ou em qualquer ordem, todas com texto e opções válidas. Critérios: resposta curta e parágrafo sem opções (são campos de texto); múltipla escolha e lista suspensa com pelo menos duas opções e resposta única; caixas de seleção com pelo menos duas opções e resposta múltipla; escala linear com início e fim definidos. Considere completo se os seis tipos aparecerem corretamente e o colega conseguir responder na pré-visualização.`,
    },
  ],
};
