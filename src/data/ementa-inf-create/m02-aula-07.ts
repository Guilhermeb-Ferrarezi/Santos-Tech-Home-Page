import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Perplexity: a IA que mostra as fontes",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `O aluno faz pesquisas reais no Perplexity, percebe que cada resposta vem com fontes numeradas e clica nos links para conferir de onde a informação veio antes de confiar nela.`,
  descricao: `Durante o mês a turma já conheceu três inteligências artificiais: o ChatGPT, o Gemini e o DeepSeek. Todas elas escrevem respostas muito bem, mas têm um ponto fraco que os alunos precisam entender: às vezes inventam informação com a maior cara de certeza. Essa invenção tem até nome — "alucinação" — e é justamente por isso que esta aula apresenta uma IA diferente, o Perplexity, que foi feita para pesquisar na internet e mostrar de onde tirou cada coisa que diz.

O Perplexity funciona como um misto de buscador e assistente de IA. Quando você pergunta algo, ele procura em páginas da internet na hora, lê o que encontrou e monta uma resposta em texto. A grande diferença é que, ao lado de cada trecho da resposta, aparecem pequenos números (1, 2, 3) que são links para os sites usados. Em cima ou ao lado, ele ainda lista as fontes com o nome de cada site. Clicar nesses números abre a página original, e é aí que o aluno aprende a habilidade central da aula: conferir a fonte.

Por que isso importa tanto para um adolescente? Porque eles vão usar IA para fazer trabalho de escola, pesquisar curiosidades e tomar decisões. Saber se uma informação veio de um site sério (uma enciclopédia, um jornal conhecido, um site oficial) ou de um lugar duvidoso é o que separa quem é enganado de quem pensa por conta própria. Ver a fonte é como pedir o comprovante: "Você está dizendo isso, mas quem disse antes de você?".

Esta é a quarta IA do mês e a última antes do desafio final. A aula é prática do começo ao fim: os alunos digitam perguntas reais, leem a resposta, encontram os números das fontes, clicam neles e julgam se o site que abriu é confiável. No fim, eles saem entendendo que uma resposta de IA vale mais quando dá para checar de onde ela veio — e que sempre dá para perguntar "qual é a fonte?".`,
  materiais: [
    `Um computador por aluno com navegador (Chrome, Edge ou Firefox) aberto na página perplexity.com, com a internet funcionando bem`,
    `Projetor ou TV ligada no computador do professor para demonstrar cada passo da pesquisa e mostrar onde ficam os números das fontes`,
    `Uma conta para acessar o Perplexity — dá para usar sem conta para perguntas simples, mas o ideal é cada aluno entrar com a conta Google da escola (botão "Continuar com Google")`,
    `Uma lista impressa ou projetada de perguntas de pesquisa próprias da idade (ex.: "Quem inventou o videogame?", "Quantos ossos tem o corpo humano?", "Qual é o animal terrestre mais rápido?")`,
    `Uma folha simples de "checagem de fonte" com três perguntas: Qual o nome do site? É um site sério? A resposta bate com a fonte?`,
    `Combinado de uso da internet da escola e atenção do professor para que os alunos só abram os links das fontes, sem sair navegando por outras páginas`,
  ],
  conceitosChave: [
    `Perplexity — uma inteligência artificial que pesquisa na internet na hora e mostra, em cada resposta, os sites de onde tirou a informação.`,
    `Fonte — o lugar de onde veio uma informação; no Perplexity são os sites listados e numerados ao lado da resposta.`,
    `Citação — o numerozinho (1, 2, 3) que aparece grudado num trecho da resposta e que, ao ser clicado, abre o site usado naquele ponto.`,
    `Alucinação — quando uma IA inventa uma informação que parece verdadeira mas é falsa; ver a fonte ajuda a perceber e evitar isso.`,
    `Conferir a fonte — clicar no link e olhar se o site é sério e se ele realmente diz o que a IA respondeu.`,
    `Site confiável — uma página feita por quem entende do assunto (enciclopédia, jornal conhecido, site oficial, universidade), em quem dá mais segurança acreditar.`,
    `Pergunta de pesquisa — uma pergunta clara sobre um fato, feita para descobrir uma informação verdadeira, e não para inventar uma história.`,
  ],
  treinamento: `## O que o professor precisa saber

O Perplexity é uma IA de pesquisa: a cada pergunta, ela busca em sites reais e responde citando de onde tirou cada parte. Você não precisa ser especialista; precisa apenas saber onde ficam as fontes e mostrar isso aos alunos. Antes da aula, entre em perplexity.com no seu computador e faça uma ou duas perguntas de teste (ex.: "Quantos planetas tem o Sistema Solar?"). Observe que, abaixo da caixa, aparece a resposta em texto e, espalhados por ela, pequenos números. Acima ou ao lado fica uma lista de "Fontes" com o nome dos sites. Clicar num número abre o site daquele trecho. É exatamente esse caminho que você vai demonstrar.

Há duas formas de acesso: sem entrar em conta (funciona para perguntas simples) ou clicando em "Sign in" / "Continuar com Google" para usar a conta da escola, o que dá mais perguntas e salva o histórico. Decida antes qual usar e teste o login. A caixa de digitar a pergunta fica no centro da tela, com a frase "Ask anything" ou "Pergunte qualquer coisa"; digite e tecle Enter ou clique na seta.

## Passo a passo da aula

10 min — Aquecimento e revisão. Relembre as três IAs já vistas. Pergunte: "Vocês já viram a IA responder com toda certeza algo que estava errado?" Conte que isso se chama alucinação. Apresente a ideia do dia: existe uma IA que mostra de onde tirou a resposta, e hoje a turma vai aprender a conferir a fonte.

15 min — Conteúdo novo guiado. No projetor, abra perplexity.com. Mostre a caixa central e digite uma pergunta combinada, como "Quem foi o inventor do telefone?". Tecle Enter. Quando a resposta surgir, aponte com o cursor os numerozinhos no meio do texto e a lista de "Fontes" no topo. Clique num número e mostre a página que abre. Volte e pergunte à turma: "Esse site parece sério?". Repita com mais uma pergunta para fixar o caminho: digitar, ler, achar o número, clicar, conferir.

25 min — Mão na massa. Cada aluno abre o Perplexity no seu computador e faz três perguntas da lista (ou perguntas próprias sobre algo que gosta). Para cada resposta, deve achar pelo menos uma fonte, clicar nela e anotar na folha de checagem o nome do site e se ele parece confiável. Circule de mesa em mesa garantindo que todos estão clicando nas fontes, e não só lendo a resposta.

10 min — Desafio e compartilhar. Desafio: peça uma pergunta cuja resposta possa variar (ex.: "Qual é o melhor celular?") e mostre que aí as fontes ajudam ainda mais a julgar. Dois ou três alunos compartilham uma fonte boa que encontraram e por que confiaram nela.

## Como explicar de forma clara

Use a comparação do "comprovante". Diga: "Se um amigo falar que a prova foi cancelada, você acredita na hora ou pergunta quem disse? A IA também tem que mostrar quem disse." Os numerozinhos são "as pistas" que levam ao site original, como uma legenda que aponta a origem. Explique que site confiável é parecido com escolher em quem confiar: a gente acredita mais numa enciclopédia ou num jornal conhecido do que num blog qualquer sem nome. E reforce a frase mágica do dia: "Sempre dá para perguntar: qual é a fonte?".

## Erros comuns e como ajudar

O erro mais comum é o aluno ler a resposta e ignorar os números; insista que a tarefa de hoje é justamente clicar neles. Outro erro é digitar a pergunta com pressa e escrever algo confuso; mostre que perguntas claras dão respostas com fontes melhores. Alguns abrem a fonte e saem navegando para outros sites; combine que só se abre o link da fonte e volta. Há quem ache que "todo site que aparece é verdade"; aproveite para mostrar a diferença entre um site sério e um qualquer. Por fim, se a página estiver em inglês, ajude a usar o tradutor do navegador (clicar com o botão direito > "Traduzir") para que possam ler a fonte mesmo assim.`,
  exercicios: [
    {
      titulo: `Achando os números das fontes`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Conduza a turma junta, todos no mesmo ritmo. Cada aluno abre perplexity.com e digita uma única pergunta combinada (ex.: "Quem inventou o videogame?"). Quando a resposta aparecer, peça que NÃO leiam ainda: primeiro têm que caçar os numerozinhos no meio do texto e a lista de "Fontes" no topo. Passe de mesa em mesa confirmando que cada um localizou pelo menos um número e a lista de sites antes de seguir.`,
      atividade: `Abra o Perplexity, digite a pergunta combinada com o professor e tecle Enter. Quando a resposta aparecer, não comece lendo: primeiro encontre os numerozinhos (1, 2, 3) espalhados pelo texto e a lista de "Fontes" no alto. Conte quantas fontes apareceram e diga o número em voz alta para o professor.`,
      gabarito: `O aluno fez a pergunta e conseguiu apontar na tela os numerozinhos dentro do texto e a lista de "Fontes". Ele diz quantas fontes apareceram (por exemplo, três ou quatro). Mostra que entendeu que o Perplexity não só responde, mas também mostra de onde tirou a resposta.`,
    },
    {
      titulo: `Clicando e conferindo o site`,
      tipo: `Prática na ferramenta`,
      tempo: `12 min`,
      guiaProfessor: `Agora o foco é clicar mesmo na fonte e olhar o site. Demonstre primeiro no projetor: clique num número, mostre a página que abre, leia em voz alta o nome do site e volte. Em seguida cada aluno faz três perguntas (da lista ou próprias) e, para cada uma, clica em pelo menos uma fonte e anota na folha de checagem o nome do site. Ajude quem cair numa página em inglês a usar o tradutor do navegador (botão direito > "Traduzir").`,
      atividade: `Faça três perguntas no Perplexity. Para cada resposta, clique em pelo menos um numerozinho de fonte, espere o site abrir e anote na folha de checagem o nome desse site. Se a página abrir em inglês, use o tradutor do navegador para entender. No fim, você deve ter três sites anotados.`,
      gabarito: `O aluno tem três sites anotados na folha, um para cada pergunta, e sabe dizer de qual pergunta veio cada um. Ele clicou de fato nos números (não apenas leu a resposta) e conseguiu abrir as páginas. Demonstra que aprendeu o caminho: pergunta, resposta, clicar na fonte, ver o site.`,
    },
    {
      titulo: `Este site é confiável?`,
      tipo: `Atividade em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas para que conversem sobre confiança. Explique antes, com exemplos, o que costuma ser um site sério (enciclopédia conhecida, jornal grande, site oficial do governo, universidade) e o que pede mais cuidado (blog sem nome, página cheia de propaganda). Cada dupla faz uma pergunta, abre duas fontes diferentes e decide, junta, qual das duas é mais confiável e por quê. Circule provocando: "Por que vocês confiariam mais nesse?".`,
      atividade: `Em dupla, escolham uma pergunta e façam no Perplexity. Abram duas fontes diferentes da mesma resposta. Olhem o nome de cada site e decidam juntos: qual das duas parece mais confiável? Anotem o nome do site escolhido e escrevam uma frase explicando o motivo (ex.: "é uma enciclopédia conhecida").`,
      gabarito: `A dupla abriu duas fontes, escolheu uma como mais confiável e justificou com um motivo razoável (site conhecido, oficial, especializado). Não existe uma única resposta certa, mas a escolha precisa fazer sentido: preferir uma enciclopédia ou jornal a um blog anônimo. Mostra que a dupla começou a julgar a qualidade das fontes, e não só a aceitá-las.`,
    },
    {
      titulo: `Caça à informação verdadeira`,
      tipo: `Desafio`,
      tempo: `13 min`,
      guiaProfessor: `Proponha um desafio com cara de jogo. Dê a cada aluno (ou cada um sorteia) uma curiosidade para descobrir e COMPROVAR com fonte: não basta a resposta, é preciso abrir um site que confirme. Sugestões: "Qual é o planeta mais quente do Sistema Solar?", "Quem pintou a Mona Lisa?", "Quantos corações tem um polvo?". Quem terminar pode tentar achar uma segunda fonte que confirme a mesma coisa. Confira a fonte de cada um rapidamente.`,
      atividade: `Receba (ou sorteie) uma curiosidade para descobrir. Pesquise no Perplexity, leia a resposta e, principalmente, clique numa fonte que confirme a informação. Anote a resposta e o nome do site que comprova. Desafio extra: encontre uma segunda fonte diferente que diga a mesma coisa.`,
      gabarito: `O aluno encontrou a resposta correta da curiosidade (ex.: o planeta mais quente é Vênus; a Mona Lisa foi pintada por Leonardo da Vinci; o polvo tem três corações) e apontou uma fonte que a comprova, abrindo o site. Quem fez o desafio extra trouxe uma segunda fonte que confirma o mesmo fato. Vale por mostrar que a informação foi conferida, não só copiada da resposta.`,
    },
    {
      titulo: `Minha mini-pesquisa com fontes`,
      tipo: `Projeto curto`,
      tempo: `15 min`,
      guiaProfessor: `Feche a aula com um pequeno projeto pessoal que junta tudo. Cada aluno escolhe um tema que gosta (um animal, um jogo, um esporte, um lugar) e faz uma mini-pesquisa de três perguntas sobre ele no Perplexity, registrando para cada uma a resposta e uma fonte clicada e conferida. Oriente a escrever o nome do site, não o endereço inteiro. Ao final, dois ou três alunos apresentam sua mini-pesquisa, dizendo de quais sites vieram as informações.`,
      atividade: `Escolha um tema que você curte e faça três perguntas sobre ele no Perplexity. Para cada pergunta, anote: a resposta em uma frase e o nome de uma fonte que você clicou e conferiu. Monte assim uma mini-pesquisa com três informações, todas com fonte. Se sobrar tempo, marque qual fonte você achou a mais confiável.`,
      gabarito: `O aluno entrega uma mini-pesquisa com três informações sobre o tema escolhido, cada uma com a resposta e o nome de uma fonte que ele realmente abriu e conferiu. As fontes anotadas são sites de verdade (não inventados) e ligados às perguntas. Mostra domínio do objetivo do mês com o Perplexity: pesquisar, ler, conferir a fonte e confiar na informação só depois de checar de onde ela veio.`,
    },
  ],
};
