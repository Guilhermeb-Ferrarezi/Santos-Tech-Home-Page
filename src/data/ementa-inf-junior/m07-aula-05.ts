import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Pintando as Células",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender a formatar células com cores, pintando o fundo e mudando a cor das letras, para deixar o título da tabela diferente do resto e usar a cor para separar e enfeitar a informação.`,
  descricao: `Nas aulas anteriores as crianças aprenderam o mapa da planilha, acharam células pelo endereço, escreveram suas primeiras palavras e montaram uma tabelinha com linhas e colunas. Agora chega a parte mais divertida e colorida: pintar as células. Esta aula apresenta a formatação com cores, que é o jeito de deixar a planilha bonita e organizada sem mudar nenhuma palavra que já está escrita. É só vestir as células com cores novas.

Há duas coisas diferentes que a criança vai descobrir, e é importante não misturar. A primeira é a cor de preenchimento, que é a cor do fundo da célula, como pintar a parede de um quadradinho. A segunda é a cor da fonte, que é a cor da letra, como trocar a tinta do lápis com que escrevemos. Uma célula pode ter fundo azul e letra branca ao mesmo tempo, e é essa combinação que faz o título saltar aos olhos. Quando a turma entende que fundo e letra são dois botões separados, tudo fica fácil.

O grande motivo de usar cor não é só enfeitar, é ajudar a ler. Quando pintamos a linha do título de uma cor forte e deixamos o resto da tabela mais clarinho, qualquer pessoa bate o olho e entende na hora qual é o cabeçalho e qual é o conteúdo. A cor separa a informação: ela diz "isto aqui é importante, comece a ler por aqui". A criança percebe que o computador deixa a gente decorar a tabela do nosso jeito, como quem escolhe a cor da capa do caderno.

No Excel, os dois botões ficam na aba Página Inicial, no grupo Fonte: um baldinho de tinta inclinado (Cor de Preenchimento) pinta o fundo, e uma letra "A" com um traço colorido embaixo (Cor da Fonte) pinta as letras. No Google Planilhas é igualzinho, na barra de cima: o baldinho pinta o fundo e o "A" com a barra colorida pinta a letra. Cada botão tem uma setinha do lado que abre uma paleta cheia de cores para escolher. A aula toda gira em torno de selecionar a célula certa primeiro e só depois escolher a cor.`,
  materiais: [
    `Um computador por criança (ou em duplas) com o Excel ou o Google Planilhas já aberto no arquivo da tabelinha que a turma montou na Aula 4.`,
    `Projetor ou TV ligada ao computador do professor para mostrar cada clique na tela grande.`,
    `Uma tabela-exemplo PRONTA do professor: a mesma tabelinha sem cor de um lado e, do outro, com o título pintado de fundo forte e letra clara, para comparar o "antes" e o "depois".`,
    `Cartões impressos grandes com os ícones dos dois botões: o baldinho de tinta (Cor de Preenchimento / fundo) e o "A" colorido (Cor da Fonte / letra).`,
    `Uma cartela de papel com quadradinhos em branco e giz de cera ou lápis de cor, para as crianças "pintarem a planilha no papel" antes do computador.`,
    `Adesivos ou carimbos coloridos para premiar quem deixar o título diferente do resto da tabela.`,
    `Lista de presença e a pasta/arquivo de cada aluno já localizados antes de a aula começar.`,
  ],
  conceitosChave: [
    `Cor de preenchimento — a cor do fundo da célula, como pintar a parede do quadradinho.`,
    `Cor da fonte — a cor da letra, como trocar a tinta do lápis com que a gente escreve.`,
    `Baldinho de tinta — o botão com um balde inclinado que pinta o fundo da célula.`,
    `Botão "A" colorido — o botão com a letra A e um traço embaixo que pinta as letras.`,
    `Paleta — a janelinha cheia de cores que abre quando a gente clica na setinha do botão.`,
    `Selecionar — clicar na célula para escolhê-la antes de pintar; sem selecionar, a cor não vai para o lugar certo.`,
    `Cabeçalho — a primeira linha da tabela, com os títulos, que a gente pinta diferente para destacar.`,
  ],
  treinamento: `## O que o professor precisa saber

Pintar uma célula tem sempre dois passos na ordem certa: primeiro selecionar a célula (ou várias), depois escolher a cor. Se a criança escolher a cor sem ter clicado na célula, ela pinta o lugar errado. Existem dois botões diferentes e eles não são a mesma coisa. No Excel, ambos ficam na aba Página Inicial, no grupo Fonte: o baldinho de tinta inclinado é a Cor de Preenchimento (pinta o fundo) e o "A" com um traço colorido embaixo é a Cor da Fonte (pinta a letra). No Google Planilhas, na barra de ferramentas de cima, é igual: o baldinho pinta o fundo e o "A" com a barrinha pinta a letra. Cada botão tem uma setinha ao lado que abre a paleta de cores. Clicar direto no botão repete a última cor usada; clicar na setinha abre a paleta para escolher uma nova. Guarde uma combinação segura para o título: fundo escuro com letra branca, ou fundo claro com letra preta, sempre garantindo que dê para ler.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar)

1. Aquecimento e revisão (10 min): abra a tabela-exemplo na tela grande mostrando os dois lados, sem cor e com cor. Pergunte "qual é mais fácil de ler?". Relembre a Aula 4 pedindo que apontem a linha do cabeçalho. Mostre, ao vivo, como a planilha continua com as mesmas palavras, só que mais bonita.

2. Conteúdo novo guiado (15 min): clique uma vez na célula do título para selecioná-la (a borda fica grossinha). No Excel, vá em Página Inicial e clique na setinha ao lado do baldinho (Cor de Preenchimento); escolha uma cor forte. Depois clique na setinha do "A" (Cor da Fonte) e escolha branco. No Google Planilhas, faça o mesmo pela barra de cima. Diga em voz alta cada clique: "seleciono, baldinho, cor; depois A, branco".

3. Mão na massa (25 min): cada criança abre a própria tabela. Tarefa: selecionar a linha do cabeçalho, pintar o fundo de uma cor forte e mudar a letra para uma cor que dê para ler. Circule pela sala fazendo o gesto junto com a mão delas. Quem terminar pinta as outras linhas com uma cor mais clarinha, sempre testando se ainda dá para ler.

4. Desafio e compartilhar (10 min): cada criança mostra a tabela para um colega, que precisa apontar de longe qual é o título. Premie quem deixou o cabeçalho bem diferente do resto. Feche relembrando: "a cor não muda as palavras, ela ajuda a achar o que é importante".

## Como explicar para crianças de 5 a 9 anos

Use a ideia de pintar a parede e trocar a tinta do lápis. "O baldinho pinta a parede do quadradinho; o A pinta a letra." Mostre que dá para ter parede azul e letra branca ao mesmo tempo, como uma camiseta de uma cor com escrita de outra. Para o título, conte a história do crachá: "o chefe da tabela usa um crachá colorido para todo mundo saber que ele manda; por isso a gente pinta a primeira linha diferente". Demonstre devagar, nomeando cada clique, e deixe a criança fazer com a sua mão guiando a dela. Lembre sempre da regra de ouro: a letra precisa aparecer; se a letra sumiu, é porque a cor dela ficou igual à do fundo.

## Erros comuns e como ajudar

O erro número um é escolher a cor sem ter selecionado a célula; peça sempre "clica no quadradinho primeiro". Outro muito comum é deixar letra da mesma cor do fundo, e o texto some: ensine a trocar a Cor da Fonte para uma cor que apareça (letra branca em fundo escuro, letra escura em fundo claro). Algumas crianças confundem o baldinho com o "A" e pintam o fundo quando queriam a letra; mostre os dois cartões lado a lado e nomeie cada um. Há quem pinte a tabela inteira de uma cor só e perca o destaque do título; explique que o cabeçalho precisa de uma cor e o resto de outra. Por fim, alguém vai clicar no botão e repetir a cor errada sem querer; mostre que a setinha do lado abre a paleta para escolher de novo.`,
  exercicios: [
    {
      titulo: `Antes e depois: qual é mais fácil de ler?`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Com a tabela-exemplo na tela grande, mostre os dois lados (sem cor e com cor) e conduza a turma a perceber, antes de mexer no computador, que a cor ajuda a separar o título do resto.`,
      atividade: `O professor mostra na tela a mesma tabela duas vezes: uma toda branca e outra com o título pintado. Cada criança levanta a mão e diz qual das duas deixa mais fácil achar o título e por quê.`,
      gabarito: `A resposta esperada é a tabela COM cor, porque o título pintado se destaca e a gente acha o cabeçalho de longe. A criança acerta quando percebe que a cor separa e enfeita a informação, sem mudar as palavras escritas.`,
    },
    {
      titulo: `Pintando a planilha no papel`,
      tipo: `Desenho / papel`,
      tempo: `10 min`,
      guiaProfessor: `Antes do computador, entregue a cartela de quadradinhos em branco e giz de cera. Isso treina a ideia de "fundo de uma cor, letra de outra" com a mão, facilitando depois na tela.`,
      atividade: `Numa cartela de papel com quadradinhos, a criança pinta a primeira linha (o cabeçalho) de uma cor forte e escreve por cima com uma cor que dê para ler. As outras linhas ela pinta de uma cor bem clarinha.`,
      gabarito: `A primeira linha deve ter fundo de uma cor e letra de outra que apareça por cima; as demais linhas ficam de cor mais clara. Está correto quando o título fica visivelmente diferente do resto e ainda dá para ler o que está escrito.`,
    },
    {
      titulo: `Crachá do título: pintando o cabeçalho`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Guie passo a passo no projetor e circule fazendo o gesto "seleciona, baldinho, cor; depois A, cor da letra". Garanta que cada criança clique na célula ANTES de escolher a cor.`,
      atividade: `Na própria tabela, a criança clica na célula do título para selecioná-la, abre a Cor de Preenchimento (baldinho) e escolhe uma cor forte para o fundo. Depois abre a Cor da Fonte (o "A") e escolhe branco ou outra cor que apareça por cima.`,
      gabarito: `A célula do título deve ficar com fundo colorido e letra de uma cor diferente que se leia bem. Confere-se olhando a tela: o título está pintado, diferente das outras células, e o texto continua visível.`,
    },
    {
      titulo: `Detetive da letra que sumiu`,
      tipo: `Jogo`,
      tempo: `10 min`,
      guiaProfessor: `Prepare uma tabela-exemplo COM erro: uma célula com fundo azul e letra azul (texto invisível) e outra com fundo amarelo e letra branca (quase invisível). As crianças viram detetives e consertam.`,
      atividade: `Em duplas, na tabela com defeito, as crianças encontram a célula onde o texto sumiu ou quase não aparece. Selecionam essa célula e trocam a Cor da Fonte (ou a Cor de Preenchimento) para uma combinação em que a letra apareça bem.`,
      gabarito: `Está resolvido quando, em cada célula consertada, dá para ler o texto com clareza porque o fundo e a letra têm cores bem diferentes. A dupla acerta ao identificar a letra escondida e trocar uma das cores para fazê-la reaparecer.`,
    },
    {
      titulo: `Tabela do meu jeito`,
      tipo: `Desafio`,
      tempo: `15 min`,
      guiaProfessor: `Desafio para quem já dominou os dois botões. Pedir um esquema de cores na tabela inteira exige planejar e repetir o gesto sozinho, mantendo o título destacado e tudo legível.`,
      atividade: `A criança escolhe um tema de cores e pinta a tabela toda do seu jeito: o cabeçalho com fundo forte e letra clara, e as linhas de conteúdo com uma ou duas cores mais suaves. No fim, mostra para um colega, que precisa apontar de longe qual é o título.`,
      gabarito: `A tabela deve ter o cabeçalho claramente destacado do resto e todas as células legíveis (letra sempre aparecendo sobre o fundo). Completo quando o colega consegue apontar o título de longe e consegue ler todo o conteúdo sem dificuldade.`,
    },
  ],
};
