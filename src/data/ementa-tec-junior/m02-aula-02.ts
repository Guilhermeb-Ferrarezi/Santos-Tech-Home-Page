import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Trocando o Número, Muda a Construção",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança aprende que, ao trocar o número guardado dentro de uma variável, a construção no Minecraft muda de tamanho sozinha, sem precisar mexer em mais nada.`,
  descricao: `Na aula passada as crianças conheceram a "caixinha mágica" (a variável) e descobriram que ela guarda um número. Nesta aula damos o próximo passo: mostrar que esse número não fica parado. Quando trocamos o que está dentro da caixinha, a coisa que o número comanda também muda. É como um controle de volume: gira o botão para um número maior e o som aumenta; gira para um número menor e o som diminui.

O assunto central é entender que a variável é uma única caixinha que vários blocos de código olham ao mesmo tempo. Em vez de a criança dizer "construa 3 blocos" escrevendo o número 3 dentro do código, ela vai dizer "construa a quantidade que está na caixinha". Assim, quando ela troca a caixinha de 3 para 5, a torre cresce; quando troca para 2, a torre encolhe. O número virou um botão de ajuste, e a construção obedece.

Isso é importante porque é a primeira vez que a criança percebe o poder de uma variável de verdade: um lugar só para mudar muita coisa de uma vez. Esse é o alicerce de tudo o que vem depois no curso (decisões, placar, mini-jogo). Quem entende que "mudar o número muda o resultado" já está pensando como quem cria jogos.

Na prática, cada criança vai construir uma torre de blocos no Minecraft usando o MakeCode. A altura da torre vai vir de uma variável. Elas vão rodar o código, ver a torre subir, voltar ao código, trocar só o número da caixinha, rodar de novo e gritar de alegria quando a torre ficar mais alta ou mais baixa. O foco é a descoberta visual: o mesmo código, números diferentes, construções diferentes.`,
  materiais: [
    `Computadores (1 por aluno ou em dupla) com Minecraft Education ou Minecraft Bedrock e a extensão "Code Builder" (MakeCode) já aberta e testada antes da aula.`,
    `Projetor ou TV ligado no computador do professor para demonstrar cada passo na tela grande.`,
    `Um mundo plano e calmo já criado e salvo (modo Criativo, clima sempre dia, sem monstros), igual para todas as máquinas.`,
    `Um projeto MakeCode de exemplo já montado pelo professor: uma variável "altura" e um laço que constrói uma torre com essa altura.`,
    `Cartões grandes com números (1, 2, 3, 4, 5) impressos, para a roda de conversa e o desafio.`,
    `Folhas de papel quadriculado e lápis de cor para o exercício de desenho da torre.`,
    `Lista de presença e adesivos ou carimbos de "Construtor do Dia" para premiar quem compartilhar.`,
  ],
  conceitosChave: [
    `Variável — uma caixinha mágica que guarda um número e tem um nome, como "altura".`,
    `Valor — o número que está morando dentro da caixinha agora, por exemplo 3 ou 5.`,
    `Trocar o valor — abrir a caixinha e colocar um número novo no lugar do antigo.`,
    `Construir com a caixinha — o código não usa um número fixo, ele usa o número que está na caixinha.`,
    `Laço de repetição — o comando que diz "faça isto várias vezes", uma vez para cada bloco da torre.`,
    `Rodar o código — apertar o botão para o personagem do Minecraft fazer o que o código mandou.`,
    `Resultado — o que aparece no jogo (a torre alta ou baixa) depois que o código roda.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Uma variável é um espaço com nome que guarda um valor. Pense numa gaveta etiquetada "altura": dentro dela mora um número. O código pode ler essa gaveta a qualquer momento. A ideia poderosa desta aula é que, se vários comandos usam a gaveta "altura" em vez de um número escrito à mão, basta mudar a gaveta uma vez para tudo mudar junto.

No MakeCode para Minecraft, você cria variáveis na categoria "Variáveis" (Variables), com o botão "Criar uma variável" (Make a Variable). O bloco "definir altura para 0" (set altura to) coloca um valor dentro. Para construir a torre, usamos a categoria "Loops" com o bloco "repetir (X) vezes" (repeat) e, dentro dele, um bloco da categoria "Blocos" (Blocks) que coloca um bloco no mundo, como "colocar bloco" (place). No lugar do número de repetições, arrastamos o bloco redondo da variável "altura". Assim o laço repete a quantidade que estiver na caixinha. Antes da aula, monte e teste: defina altura, use "repetir altura vezes" colocando um bloco e movendo o personagem para cima a cada volta. Confirme que ao trocar altura de 3 para 5 a torre cresce.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): No projetor, mostre o cartão com o número 3 dentro de uma "caixinha" desenhada. Pergunte: "Lembram da caixinha mágica?". Abra o Minecraft com o projeto pronto, rode e mostre a torre de 3 blocos subir. Diga que hoje vamos mexer no número.

Conteúdo novo guiado (15 min): Com a turma olhando o projetor, mostre onde fica a variável "altura" na categoria "Variáveis". Mostre o bloco "definir altura para 3". Mostre o laço "repetir altura vezes" e diga, apontando: "o código não tem o número, ele pergunta para a caixinha". Troque o 3 por 5 no bloco "definir", rode no Minecraft e deixe a turma ver a torre ficar mais alta. Troque para 2 e veja encolher. Repita devagar uma vez.

Mão na massa (25 min): Cada aluno (ou dupla) abre o projeto. Peça que achem o bloco "definir altura para...". Tarefa: trocar o número, apertar o botão de rodar (o ícone do Agente ou "Run") e observar a torre. Mande experimentar 3, depois 5, depois 1. Circule, elogie cada torre, ajude quem não acha o bloco. Quem terminar, tenta um número grande, como 8.

Desafio e compartilhar (10 min): Levante um cartão com um número e diga "façam uma torre desse tamanho". Cada criança ajusta a caixinha e mostra a torre na tela. Termine com cada um dizendo o número que usou.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a analogia do controle: "A caixinha é igual ao controle da TV. Aperto um número maior, o canal muda; aqui, mudo o número e a torre muda." Outra: "É como pedir bolinhas de sorvete. Se eu peço 5, ganho 5; se peço 2, ganho 2. O código pergunta quantas você quer na caixinha." Fale sempre "trocar o número da caixinha", nunca "alterar o valor da variável". Faça gestos: empilhe as mãos para mostrar a torre crescendo.

## Erros comuns e como ajudar

As crianças costumam apagar o nome da variável ou trocar o número errado, mexendo no laço em vez do bloco "definir". Mostre que o número certo fica no bloco "definir altura para...". Outro erro: esquecer de apertar "Run", então nada acontece; ensine que sempre depois de mudar é preciso rodar. Algumas digitam letras no lugar do número; explique que a caixinha só guarda números. Se a torre nasce dentro de um buraco ou em cima do personagem, peça que o aluno ande alguns passos e rode de novo. Por fim, alguns querem números enormes (100): combine um limite, como até 10, para o jogo não travar.`,
  exercicios: [
    {
      titulo: `Gira o Botão da Caixinha`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor onde está o bloco "definir altura para...". Diga que cada um vai virar o "mestre da caixinha" e trocar só esse número, sem mexer em mais nada. Lembre que depois de trocar é preciso apertar o botão de rodar.`,
      atividade: `No seu projeto, ache o bloco "definir altura para...". Coloque o número 3 e rode: olhe a torre. Depois troque para 6 e rode de novo. Por último coloque 1 e rode. Conte em voz alta quantos blocos cada torre tem.`,
      gabarito: `O aluno acertou se, ao trocar o número da caixinha e apertar rodar, a torre aparece com a quantidade certa de blocos: 3 blocos com altura 3, 6 blocos com altura 6 e 1 bloco com altura 1. A torre deve crescer quando o número aumenta e encolher quando diminui.`,
    },
    {
      titulo: `Adivinha o Tamanho da Torre`,
      tipo: `Jogo`,
      tempo: `8 minutos`,
      guiaProfessor: `Levante um cartão com um número sem deixar o aluno mexer no código ainda. Peça que ele adivinhe o tamanho da torre antes de rodar. Depois mande trocar a caixinha para aquele número e rodar, para conferir o palpite.`,
      atividade: `O professor mostra um cartão com um número (por exemplo 4). Antes de mexer no jogo, diga quantos blocos a torre vai ter. Agora troque a caixinha "altura" para esse número e rode. A sua torre ficou do tamanho que você adivinhou?`,
      gabarito: `Acertou quem percebe que o número do cartão é o mesmo número de blocos da torre. Para altura 4, a torre tem 4 blocos. O importante é a criança ligar "número da caixinha" igual a "tamanho da torre", confirmando o palpite ao rodar.`,
    },
    {
      titulo: `Roda da Caixinha que Muda`,
      tipo: `Roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Sentados em círculo, conduza com perguntas simples, uma de cada vez, dando tempo para vários responderem. Use os cartões de número como apoio visual. Valorize cada resposta e repita a ideia central: trocar o número muda a construção.`,
      atividade: `Conversem juntos: O que acontece com a torre quando colocamos um número maior na caixinha? E quando colocamos um número menor? Se eu quiser a torre mais alta da sala, escolho um número grande ou pequeno? A caixinha guarda quantos números ao mesmo tempo?`,
      gabarito: `Respostas esperadas: número maior deixa a torre mais alta; número menor deixa a torre mais baixa; para a torre mais alta escolhemos um número grande; a caixinha guarda só um número de cada vez (o novo toma o lugar do antigo). Considere certo se a criança liga "número grande" a "torre alta" e "número pequeno" a "torre baixa".`,
    },
    {
      titulo: `Desenha a Tua Torre`,
      tipo: `Desenho e papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue o papel quadriculado. Explique que cada quadradinho pintado é um bloco da torre. Peça que escolham um número para a caixinha e pintem essa quantidade de quadradinhos, um em cima do outro, escrevendo o número escolhido ao lado.`,
      atividade: `Escolha um número de 1 a 8 para a sua caixinha "altura". Escreva esse número grande no alto da folha. Agora pinte essa mesma quantidade de quadradinhos, um em cima do outro, para virar a sua torre. Mostre o desenho para um colega e contem juntos os blocos.`,
      gabarito: `Está correto quando a quantidade de quadradinhos pintados é igual ao número escrito na folha (por exemplo, número 5 e 5 quadradinhos empilhados). O desenho mostra que a criança entendeu que o número da caixinha define quantos blocos formam a torre.`,
    },
    {
      titulo: `Desafio das Três Alturas`,
      tipo: `Desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o desafio final, mais difícil porque pede três torres seguidas e atenção à ordem. Mostre os três cartões de número antes de começar. Reforce que entre uma torre e outra é preciso trocar a caixinha e rodar de novo. Peça que ande para o lado antes de cada nova torre para não construir em cima da anterior.`,
      atividade: `Construa três torres, uma de cada vez, andando um pouco para o lado entre elas: primeiro uma torre com altura 2, depois ande e faça uma com altura 5, depois ande e faça uma com altura 8. Mostre as três torres lado a lado, da menor para a maior.`,
      gabarito: `Acertou quem produz três torres com 2, 5 e 8 blocos, nessa ordem de tamanho, trocando a caixinha "altura" e rodando o código antes de cada uma. As torres ficam em escada, da mais baixa para a mais alta, provando que só mudar o número da caixinha muda a construção.`,
    },
  ],
};
