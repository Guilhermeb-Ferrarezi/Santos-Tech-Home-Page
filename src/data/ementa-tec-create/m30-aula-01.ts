import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Como a web realmente funciona",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Entender o que é a internet e o que é a web e explicar, com uma analogia simples, a viagem de uma página do navegador ao servidor e de volta, identificando IP, navegador e servidor em sites reais.`,
  descricao: `Esta é a primeira aula do mês em que o aluno começa a construir o seu próprio site. Antes de escrever a primeira linha de HTML, vale entender o terreno onde esse site vai viver: a internet. Muita gente acha que internet e web são a mesma coisa, mas não são. A internet é a grande rede de cabos, antenas e computadores que liga o mundo inteiro; a web é uma das coisas que viajam por essa rede, formada pelas páginas que abrimos no navegador. Pense na internet como as estradas e a web como os carros que andam nelas.

Nesta aula o foco é mostrar a viagem de uma página. Quando você digita um endereço no navegador e aperta Enter, o navegador faz um pedido, chamado de requisição, que viaja pela internet até um computador especial chamado servidor. O servidor recebe o pedido, separa os arquivos da página e devolve tudo numa resposta. Essa resposta volta pela rede até o seu navegador, que monta a página na tela. Tudo isso acontece em frações de segundo, muitas vezes sem percebermos.

Para que esse pedido chegue ao lugar certo, cada computador na rede tem um endereço numérico chamado IP. É como o endereço da casa de cada pessoa: sem ele, a carta não sabe para onde ir. O navegador é o programa que faz o pedido e desenha a página (Chrome, Edge, Firefox), e o servidor é o computador que guarda os arquivos do site e responde aos pedidos. Esses três personagens, navegador, IP e servidor, são o coração da aula.

Ao final, o aluno deve conseguir explicar com as próprias palavras a diferença entre internet e web, descrever a viagem requisição e resposta usando uma analogia, e reconhecer essas peças em sites que ele já usa no dia a dia. É uma aula de conceito, sem digitar código ainda, que prepara a base para todas as próximas aulas em que ele vai criar e publicar a sua primeira página.`,
  materiais: [
    `Computadores com um navegador moderno instalado (Chrome, Edge ou Firefox), um por aluno`,
    `Editor de código instalado e pronto para os próximos encontros (VS Code), só para mostrar onde vamos trabalhar`,
    `Projetor ou TV para o professor mostrar a tela e abrir sites ao vivo`,
    `Acesso à internet funcionando na sala`,
    `Arquivo de exemplo: um cartão impresso ou slide com o desenho da viagem (Navegador, pedido, Internet, Servidor, resposta)`,
    `Uma folha simples de papel por aluno para desenhar a própria analogia`,
    `Lista de sites conhecidos para inspecionar juntos (um portal de notícias, um site de jogos, a página da escola)`,
  ],
  conceitosChave: [
    `Internet — a grande rede mundial de computadores ligados por cabos, antenas e satélites; é a estrada por onde tudo viaja.`,
    `Web — o conjunto de páginas e sites que abrimos no navegador; é uma das coisas que andam pela internet, não a internet inteira.`,
    `Navegador — o programa que pede as páginas e as desenha na tela, como Chrome, Edge ou Firefox.`,
    `Servidor — o computador, sempre ligado, que guarda os arquivos de um site e responde quando alguém pede a página.`,
    `IP — o endereço numérico de cada computador na rede; é como o endereço da casa, para que o pedido chegue ao lugar certo.`,
    `Requisição — o pedido que o navegador envia ao servidor quando você abre um site.`,
    `Resposta — o que o servidor devolve ao navegador, contendo os arquivos da página para serem montados na tela.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em redes para dar esta aula. O essencial é dominar uma ideia central: internet e web não são a mesma coisa. A internet é a infraestrutura, a rede física que liga os computadores do mundo. A web é o conteúdo que viaja por ela, ou seja, as páginas e sites. Uma boa frase de bolso: a internet é a estrada, a web é o carro.

A segunda ideia é a viagem da página, que tem só quatro personagens. O navegador (o programa no computador do aluno) envia uma requisição (um pedido). Essa requisição usa o IP (o endereço numérico) para achar o servidor (o computador que guarda o site). O servidor devolve uma resposta com os arquivos, e o navegador monta a página. Se você souber contar essa história de ponta a ponta, a aula está garantida. Nesta aula não escrevemos código; o objetivo é conceito e reconhecimento.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): pergunte à turma o que é a internet. Anote as respostas no quadro sem corrigir. Depois faça a pergunta provocadora: quando você abre um site, de onde vem essa página? Apresente que hoje vamos descobrir a viagem secreta de toda página.

Conteúdo novo guiado (15 min): explique a diferença entre internet e web com a analogia da estrada e do carro. Em seguida, desenhe no quadro (ou mostre o cartão de exemplo) a viagem com setas: Navegador, seta com a palavra pedido (requisição), Internet, Servidor, seta de volta com a palavra resposta, Navegador mostra a página. Apresente o IP como o endereço da casa. Para fechar, abra no projetor um site real, mostre a barra de endereço e diga: ao apertar Enter, o navegador acabou de fazer uma requisição a um servidor lá longe, e a resposta voltou para montar esta tela.

Mão na massa (25 min): cada aluno abre o navegador e escolhe um site que já usa. Peça que descubram o IP de um site usando o prompt de comando: abra o terminal e digite o comando ping seguido de um espaço e o nome do site, por exemplo: ping www.google.com. Mostre que aparece um número parecido com 142.250.0.0, que é o IP. Em seguida, cada aluno desenha na folha a própria versão da viagem da página, com os quatro personagens e as duas setas (requisição e resposta), usando um site da escolha dele. Circule ajudando a nomear cada peça.

Desafio e compartilhar (10 min): peça que três ou quatro alunos contem a viagem da página em voz alta, como uma história, usando as palavras requisição, resposta, servidor e IP. Reforce no fim: a web vive em cima da internet, e toda página que vemos foi pedida e respondida.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do cotidiano deles. A requisição e a resposta são como pedir um lanche no balcão: você faz o pedido (requisição), a cozinha prepara e entrega (resposta). O servidor é como um restaurante que está sempre aberto esperando pedidos. O IP é como o endereço da casa de cada um: sem endereço, o entregador não acha o lugar. O navegador é o entregador esperto que vai, busca e traz a página pronta. Repita as palavras-chave várias vezes e peça que os alunos as usem nas próprias frases; isso fixa muito mais que decorar definições.

## Erros comuns e como ajudar

O erro mais comum é achar que internet e web são sinônimos; volte sempre à frase da estrada e do carro. Outro engano frequente é pensar que o site mora dentro do próprio computador; explique que ele mora no servidor e que o navegador só busca uma cópia. Alguns confundem IP com o nome do site; mostre que o nome é fácil para humanos e o IP é o número que a máquina usa. No comando ping, há quem digite o endereço com erro ou inclua https; oriente a digitar só o nome do site, sem barras. Por fim, se algum aluno trocar a ordem das setas, peça que recomece pela pergunta: quem faz o pedido primeiro? Sempre é o navegador.`,
  exercicios: [
    {
      titulo: `Internet ou web?`,
      tipo: `quiz rápido`,
      tempo: `7 minutos`,
      guiaProfessor: `Leia cada frase em voz alta e dê alguns segundos. Os alunos respondem se a frase fala da internet (a rede, a estrada) ou da web (as páginas, os carros). Corrija na hora reforçando a analogia.`,
      atividade: `Classifique cada frase como INTERNET ou WEB: 1) os cabos e antenas que ligam os computadores do mundo; 2) a página de notícias que você abre no navegador; 3) a rede física por onde os dados viajam; 4) o site de jogos que você acessa todo dia.`,
      gabarito: `1) INTERNET (a rede física que liga tudo); 2) WEB (é uma página/site); 3) INTERNET (a rede por onde os dados viajam); 4) WEB (é um site que abrimos no navegador).`,
    },
    {
      titulo: `Os quatro personagens da viagem`,
      tipo: `associação`,
      tempo: `8 minutos`,
      guiaProfessor: `Escreva no quadro os termos e as definições embaralhados. Peça que cada aluno ligue cada termo à sua definição. Confira em conjunto, pedindo que justifiquem com a analogia do lanche ou do endereço.`,
      atividade: `Ligue cada termo à definição certa: NAVEGADOR, SERVIDOR, IP, REQUISIÇÃO. Definições: (a) o pedido que o navegador envia; (b) o programa que pede e desenha a página; (c) o endereço numérico de cada computador; (d) o computador que guarda o site e responde.`,
      gabarito: `NAVEGADOR = (b) o programa que pede e desenha a página; SERVIDOR = (d) o computador que guarda o site e responde; IP = (c) o endereço numérico de cada computador; REQUISIÇÃO = (a) o pedido que o navegador envia.`,
    },
    {
      titulo: `Descobrindo o IP de um site`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre primeiro no projetor como abrir o terminal e rodar o comando. Acompanhe os alunos para que digitem só o nome do site, sem https nem barras. Garanta que cada um veja o número do IP aparecer na tela.`,
      atividade: `Abra o terminal (prompt de comando). Digite o comando ping seguido de um espaço e o nome de um site, por exemplo: ping www.google.com. Aperte Enter e encontre na resposta o número do IP. Anote o IP que apareceu.`,
      gabarito: `O comando correto é: ping www.google.com (ou o nome de outro site, sem https e sem barras). Na resposta aparece um endereço numérico parecido com 142.250.0.0, que é o IP do servidor daquele site. Sucesso é ver e anotar esse número.`,
    },
    {
      titulo: `Desenhe a viagem da página`,
      tipo: `desafio criativo`,
      tempo: `12 minutos`,
      guiaProfessor: `Entregue uma folha por aluno. Peça um desenho com os quatro personagens e as duas setas nomeadas (requisição e resposta), escolhendo um site real. Circule conferindo a ordem: o navegador pede primeiro, o servidor responde depois.`,
      atividade: `Numa folha, desenhe a viagem completa de uma página de um site que você usa. Mostre o NAVEGADOR, a INTERNET, o SERVIDOR e duas setas: uma de ida escrita REQUISIÇÃO e uma de volta escrita RESPOSTA. No fim, a página aparece na tela.`,
      gabarito: `O desenho correto mostra: NAVEGADOR enviando uma seta de REQUISIÇÃO que atravessa a INTERNET até o SERVIDOR; o SERVIDOR enviando uma seta de RESPOSTA de volta pela INTERNET até o NAVEGADOR; e o NAVEGADOR mostrando a página na tela. A ordem certa é sempre pedido primeiro, resposta depois.`,
    },
    {
      titulo: `Conte a história sem decorar`,
      tipo: `apresentação oral`,
      tempo: `8 minutos`,
      guiaProfessor: `Convide alguns alunos a contar a viagem da página como uma história, com as próprias palavras. Exija que usem as quatro palavras-chave. Feche reforçando que a web vive em cima da internet e que toda página foi pedida e respondida.`,
      atividade: `Explique para a turma, como se contasse uma história, o que acontece desde o momento em que você digita um endereço e aperta Enter até a página aparecer. Use obrigatoriamente as palavras: requisição, resposta, servidor e IP.`,
      gabarito: `Uma resposta completa diz: digito o endereço e o navegador envia uma requisição; essa requisição usa o IP para achar o servidor certo; o servidor recebe o pedido e envia uma resposta com os arquivos do site; a resposta volta pela internet e o navegador monta a página na tela. Tudo isso em frações de segundo.`,
    },
  ],
};
