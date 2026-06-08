import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "O Personagem Fala com a Gente",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança aprende a fazer o personagem falar e pensar na tela usando os blocos de balão de fala e de pensamento do Scratch.`,
  descricao: `Nesta aula as crianças descobrem que o personagem do Scratch pode conversar com a gente. Até agora, nas aulas anteriores, o personagem se movia, reagia ao clique e fazia sons. Agora ele ganha voz na tela: aparece um balãozinho branco com as palavras que ele quer dizer, igual aos balões dos desenhos animados e das histórias em quadrinhos. Essa é a primeira vez que a criança escreve um texto que o computador mostra de verdade, e isso costuma ser um momento mágico para a turma.

O assunto central são os blocos "diga" e "pense", que ficam na categoria roxa chamada Aparência. Com o bloco "diga", o personagem mostra um balão de fala com pontinha apontando para a boca, como quando alguém está falando. Com o bloco "pense", aparece um balão com bolinhas, como quando alguém está imaginando algo na cabeça. Existem duas versões de cada bloco: uma que mostra a mensagem por um tempo certo (por exemplo, dois segundos) e outra que deixa a mensagem na tela até o personagem receber uma nova ordem.

Isso importa porque falar na tela é a base de qualquer historinha ou jogo. É assim que um jogo dá boas-vindas, ensina o que fazer, comemora uma vitória ou conta uma piada. A criança percebe que ela é a dona das palavras: o personagem diz exatamente o que ela escreveu. Esse poder de mandar o personagem falar deixa as crianças muito animadas e dá muito orgulho quando os colegas veem o balão aparecer.

Durante a aula, cada criança vai fazer o personagem dar um "oi", contar uma coisinha curta sobre si mesmo e mostrar mensagens enquanto uma pequena cena acontece. No fim, todos compartilham o que o personagem deles disse. A escrita ainda é mínima nessa idade, então o professor digita junto, oferece palavras prontas e celebra cada tentativa, sem cobrar ortografia perfeita.`,
  materiais: [
    `Computadores (um por criança ou em dupla) com o Scratch já aberto em um projeto novo`,
    `Projetor ou TV conectada ao computador do professor para demonstrar cada passo`,
    `Um projeto de exemplo salvo com um personagem que diz "Oi! Eu sou o gato!" para mostrar no início`,
    `Cartões grandes com palavras prontas e fáceis: OI, EU, GATO, AMO, BRINCAR, OBRIGADO (para crianças que ainda não escrevem)`,
    `Folhas de papel com balões de fala e de pensamento desenhados em branco, mais lápis de cor`,
    `Fones de ouvido (opcional, caso algum exercício use som das aulas anteriores)`,
    `Fita crepe ou ímãs para fixar os cartões e desenhos no quadro durante o compartilhar`,
  ],
  conceitosChave: [
    `Balão de fala — a nuvenzinha com pontinha que aparece quando o personagem está falando, como nos gibis.`,
    `Balão de pensamento — a nuvenzinha com bolinhas que aparece quando o personagem está imaginando ou pensando.`,
    `Bloco "diga" — a pecinha roxa que manda o personagem mostrar palavras num balão de fala.`,
    `Bloco "pense" — a pecinha roxa que manda o personagem mostrar palavras num balão de pensamento.`,
    `Mensagem — as palavras que a gente escreve dentro do bloco para o personagem dizer.`,
    `Categoria Aparência — a caixinha roxa de blocos onde moram o "diga" e o "pense".`,
    `Segundos — o tempinho que o balão fica na tela antes de sumir (por exemplo, 2 segundos é um piscar de olhos um pouco demorado).`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Os blocos de fala e pensamento ficam na categoria roxa Aparência, na coluna de categorias à esquerda da tela do Scratch. São quatro blocos importantes para esta aula: "diga [Olá!] por [2] segundos", "diga [Olá!]", "pense [Hmm...] por [2] segundos" e "pense [Hmm...]". O retângulo branco dentro do bloco é onde você clica para apagar o texto de exemplo e digitar a sua mensagem. O número dentro do campo de segundos também é editável: clique nele e troque por outro número.

A diferença entre as duas versões é simples. A versão "por 2 segundos" mostra a mensagem, espera o tempo e o balão some sozinho, e só então o próximo bloco roda. A versão sem segundos mostra a mensagem e segue na hora para o próximo bloco, deixando o balão na tela até alguém mandar dizer outra coisa. Para apagar um balão que ficou parado, use o bloco "diga []" com o campo vazio. Tudo isso roda quando o roteiro começa, e nesta idade a gente sempre puxa o roteiro com o bloco "quando a bandeira verde for clicada", que fica na categoria Eventos (amarela). Os balões aparecem em volta do personagem no Palco, que é a área branca grande no canto superior direito.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Scratch)

Aquecimento (10 min): Receba a turma e abra o projeto de exemplo no projetor. Clique na bandeira verde (acima do Palco, à direita) e mostre o gato dizendo "Oi! Eu sou o gato!". Pergunte: "De onde saiu essa fala?". Faça as crianças imitarem com a mão um balão saindo da boca. Relembre rápido a aula passada (som ao apertar tecla).

Conteúdo novo guiado (15 min): No seu Scratch, clique na categoria roxa Aparência. Mostre o bloco "diga [Olá!] por [2] segundos" e arraste-o para a área de roteiros (a parte do meio). Encaixe-o embaixo de "quando a bandeira verde for clicada". Clique no texto "Olá!" e digite "Oi, tudo bem?". Clique na bandeira verde e mostre o balão. Agora arraste o bloco "pense [Hmm...] por [2] segundos" logo abaixo e digite "Que dia bonito!". Rode de novo e mostre a diferença entre o balão de fala e o de pensamento. Diga em voz alta o que cada um faz.

Mão na massa (25 min): Cada criança (ou dupla) abre um projeto novo. Passo a passo, na lousa e de mesa em mesa: 1) arrastar "quando a bandeira verde for clicada" (Eventos, amarelo); 2) encaixar "diga [] por [2] segundos" e escrever um "oi"; 3) encaixar outro "diga" contando algo curto (nome, idade ou comida favorita); 4) terminar com um "pense". Digite junto com quem ainda não escreve, ou ofereça os cartões de palavras prontas. Cada vez que a criança clica na bandeira e o balão aparece, comemore.

Desafio e compartilhar (10 min): Lance o desafio: "Faça o personagem dizer três coisas, uma depois da outra". Quem encaixar três blocos "diga" em sequência ganha um joinha. Depois, sente todos juntos e peça que cada um clique na bandeira verde e leia (ou você lê) o que o personagem dele disse. Aplauda cada um.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a linguagem dos desenhos e gibis: "Sabe quando o personagem do desenho fala e aparece aquela nuvenzinha com as letras? A gente vai fazer igualzinho!". Para diferenciar fala de pensamento, diga: "Quando a gente fala alto, sai um balão com pontinha; quando a gente pensa baixinho, na cabeça, sai um balão com bolinhas". Chame o campo branco de "a boquinha onde a gente escreve o que ele vai falar". Para os segundos, diga: "É o tempinho que o balão fica antes de ir embora; dois segundos é só um cochilo bem rapidinho". Trate o personagem como um bichinho de estimação que obedece: "Ele só fala o que VOCÊ mandar".

## Erros comuns e como ajudar

O erro mais comum é a criança digitar a mensagem mas não clicar na bandeira verde, achando que não funcionou; lembre sempre de clicar para rodar. Outro é arrastar o bloco solto, sem encaixar embaixo do "quando a bandeira verde for clicada"; mostre o encaixe fazendo "clec" como peça de Lego. Algumas pegam o bloco "pense" achando que é "diga"; aponte a pontinha contra as bolinhas. Tem quem apague o número de segundos e deixe vazio, e o bloco trava; coloque um número de volta. E há quem escreva textos enormes; combine que cada balão diz pouquinho, só uma frase curta.`,
  exercicios: [
    {
      titulo: `O Primeiro Oi`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor como arrastar o bloco "diga" da categoria roxa Aparência e encaixá-lo embaixo do bloco amarelo "quando a bandeira verde for clicada". Faça um exemplo, depois deixe cada criança fazer o seu. Passe de mesa em mesa garantindo que o bloco está encaixado e ajude a digitar para quem precisar.`,
      atividade: `Arraste o bloco "quando a bandeira verde for clicada". Embaixo dele, encaixe o bloco "diga [] por [2] segundos" e escreva OI dentro dele. Clique na bandeira verde e veja seu personagem dar um oi.`,
      gabarito: `A criança acertou quando, ao clicar na bandeira verde, aparece um balão de fala em volta do personagem mostrando a palavra OI por dois segundos. O roteiro tem o bloco amarelo no topo e o bloco roxo "diga" encaixado logo abaixo.`,
    },
    {
      titulo: `Fala ou Pensa? Jogo dos Balões`,
      tipo: `Jogo`,
      tempo: `8 minutos`,
      guiaProfessor: `Em pé, longe dos computadores. Explique que você vai dizer uma situação e a turma decide se o personagem FALA (balão com pontinha) ou PENSA (balão com bolinhas). Para FALAR, todos abrem a boca e apontam para fora; para PENSAR, todos colocam o dedo na testa. Faça rápido e divertido, repetindo com situações novas.`,
      atividade: `Quando a professora disser a frase, mostre com o corpo: boca aberta e mão apontando para fora se for FALAR, dedo na testa se for PENSAR. Situações: "O personagem grita OI para o amigo" (falar). "O personagem imagina um sorvete" (pensar). "O personagem diz obrigado" (falar). "O personagem fica imaginando o céu" (pensar).`,
      gabarito: `Respostas esperadas: gritar OI = FALAR; imaginar sorvete = PENSAR; dizer obrigado = FALAR; imaginar o céu = PENSAR. A turma acertou quando associa "dizer/gritar/falar em voz alta" ao balão de fala e "imaginar/pensar baixinho" ao balão de pensamento.`,
    },
    {
      titulo: `Meu Personagem se Apresenta`,
      tipo: `Prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Agora a criança encadeia mais de um balão. Mostre no projetor como encaixar um segundo bloco "diga" embaixo do primeiro, fazendo o "clec" de Lego. Ofereça os cartões de palavras prontas (OI, EU, nome da criança, comida favorita) para quem ainda não escreve e digite junto quando preciso.`,
      atividade: `Faça seu personagem se apresentar em três falas, uma embaixo da outra: 1) "diga" OI; 2) "diga" seu nome; 3) "pense" sua comida favorita. Encaixe os três blocos abaixo da bandeira verde e clique para ver a apresentação acontecer.`,
      gabarito: `A criança acertou quando, ao clicar na bandeira verde, o personagem mostra em sequência: um balão de fala com OI, depois um balão de fala com o nome, e por fim um balão de pensamento com a comida favorita. Os três blocos estão encaixados em ordem.`,
    },
    {
      titulo: `Desenhando os Balões`,
      tipo: `Desenho / papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Distribua as folhas com um balão de fala e um balão de pensamento desenhados em branco. Peça que cada criança desenhe seu personagem favorito e escreva (ou copie dos cartões, ou desenhe um símbolo) o que ele fala e o que ele pensa. Reforce a diferença: pontinha é fala, bolinhas é pensamento.`,
      atividade: `Na folha, desenhe seu personagem. No balão com pontinha, escreva ou desenhe o que ele FALA em voz alta. No balão com bolinhas, escreva ou desenhe o que ele PENSA escondido na cabeça.`,
      gabarito: `O desenho está certo quando há conteúdo nos dois balões e a criança usa o balão de pontinha para algo dito em voz alta e o balão de bolinhas para algo pensado/imaginado. Não se cobra ortografia; vale palavra, letra ou desenho que represente a ideia.`,
    },
    {
      titulo: `A Mini Conversa`,
      tipo: `Desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Desafio final, para quem terminou os anteriores. Mostre que dá para usar o bloco "diga [] por [2] segundos" várias vezes seguidas para criar uma pequena conversa do personagem com a gente. Quem conseguir três ou mais falas em sequência ganha destaque no compartilhar. Ajude a ajustar os segundos para a fala não passar rápido demais.`,
      atividade: `Crie uma mini conversa com pelo menos três balões em sequência, por exemplo: "diga" OI POR 2 SEGUNDOS, depois "diga" VAMOS BRINCAR? POR 2 SEGUNDOS, depois "pense" QUE LEGAL! POR 2 SEGUNDOS. Clique na bandeira verde e assista à conversa do começo ao fim.`,
      gabarito: `O desafio foi cumprido quando, ao clicar na bandeira verde, o personagem mostra ao menos três mensagens uma após a outra, na ordem certa, cada balão aparecendo e sumindo no tempo combinado, terminando com um balão de pensamento. Os blocos estão todos encaixados embaixo da bandeira verde.`,
    },
  ],
};
