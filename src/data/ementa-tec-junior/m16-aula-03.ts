import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Caixinhas mágicas: as variáveis",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Criar uma variável de pontos no Construct 3 para que o placar suba quando o herói pega uma moeda e mostrar esse número na tela.`,
  descricao: `Nesta aula a criança descobre uma das ideias mais poderosas da programação: a variável. Em vez de explicar com palavras difíceis, usamos uma imagem que toda criança entende — uma caixinha mágica que guarda um número dentro dela. A caixinha tem um nome (por exemplo, "Pontos") e dentro dela mora um valor que pode mudar a qualquer momento. Quando o herói pega uma moeda, a gente abre a caixinha, vê o número que estava lá e troca por um número maior. Essa é a essência de somar pontos em qualquer jogo do mundo.

No Construct 3, esse tipo de caixinha se chama "Instance variable" (variável de instância) ou "Global variable" (variável global). Para o placar do jogo, vamos criar uma variável global chamada Pontos, porque ela precisa ser lembrada por todo o jogo inteiro, mesmo quando o herói anda de um lado para o outro. A criação acontece dentro da "Event Sheet" (folha de eventos), que é o mesmo caderninho de regras que a turma já conhece das aulas anteriores, onde escrevemos "Quando isso acontecer, faça aquilo".

O coração da aula é a regra que faz o placar subir. Na folha de eventos, montamos um evento que diz mais ou menos assim: "Quando o Herói tocar na Moeda, some 1 na caixinha Pontos e destrua a moeda". O Construct 3 chama esse "somar 1" de ação "Add to" (adicionar a). É o momento mágico em que a criança aperta "Play", encosta na moeda e vê o número crescer. Esse retorno imediato e visual prende a atenção e dá orgulho.

Por fim, um número guardado numa caixinha invisível não serve para nada se o jogador não consegue vê-lo. Por isso, adicionamos um objeto "Text" (texto) na tela e mandamos ele mostrar, o tempo todo, o valor da caixinha Pontos. Assim, ao terminar a aula, cada criança tem um pedacinho de jogo de verdade: pega a moeda, o placar sobe e aparece bem grande no canto da tela. É a base de todo sistema de pontuação que ela vai usar pelo resto da trilha de games.`,
  materiais: [
    `Computadores com o Construct 3 já aberto e logado, um por criança`,
    `Projeto-base salvo da aula passada, com o herói que já se mexe e pelo menos uma moeda na tela (sprite de moeda)`,
    `Projetor ligado para o professor demonstrar cada passo na tela grande`,
    `Projeto-exemplo pronto (versão final do dia) com a variável Pontos funcionando, para mostrar o objetivo logo no começo`,
    `Uma caixa de papelão de verdade com cartões de números (0, 1, 2, 3...) para a brincadeira da caixinha mágica`,
    `Folha impressa de "ajuda rápida" com os nomes dos botões em inglês e a tradução (Add to, Global variable, Text, On collision)`,
    `Adesivos ou carimbos para premiar quem fizer o placar subir sozinho`,
  ],
  conceitosChave: [
    `Variável — uma caixinha mágica que guarda um número e pode trocar esse número quando a gente quiser.`,
    `Variável global — a caixinha grande que o jogo inteiro consegue ver e lembrar do começo ao fim.`,
    `Valor — o número que está morando dentro da caixinha agora, tipo o placar de pontos.`,
    `Pontos — a nossa caixinha especial que conta quantas moedas o herói já pegou.`,
    `Add to (adicionar a) — a ordem que diz "some mais um pedacinho dentro da caixinha".`,
    `Objeto Text — a plaquinha que mostra na tela o número que está dentro da caixinha.`,
    `Folha de eventos — o caderninho de regras onde escrevemos "quando isso acontecer, faça aquilo".`,
  ],
  treinamento: `## O que o professor precisa saber

Variável é só um nome técnico para "lugar que guarda um valor que muda". No Construct 3 existem dois tipos que importam hoje: a "Instance variable" (presa a um objeto) e a "Global variable" (vale para o jogo todo). Para um placar de pontos usamos sempre a global, porque ela é lembrada mesmo trocando de layout. Você vai criar essa variável dentro da "Event Sheet" (folha de eventos) e vai mexer nela com a ação "Add to". Para mostrar o número, usa o objeto "Text". Se você nunca fez isso, faça o passo a passo abaixo uma vez sozinho antes da aula — leva uns 8 minutos e tira todo o medo.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): Mostre no projetor o projeto-exemplo pronto: pegue a moeda e deixe o placar subir 1, 2, 3. Pergunte: "Como será que o jogo lembra quantas moedas eu peguei?". Tire a caixa de papelão, ponha o cartão "0" dentro e diga que essa é a caixinha mágica "Pontos". A cada moeda imaginária, troque o cartão por um número maior. Essa brincadeira física é a âncora do dia.

CONTEÚDO NOVO GUIADO (15 min): No projetor, abra a folha de eventos (aba "Event sheet 1", no alto). Clique com o botão direito numa área vazia da folha e escolha "Add global variable". Na janela, em "Name" digite Pontos, em "Type" deixe "Number" e em "Initial value" deixe 0. Clique em OK. Mostre que apareceu uma linha "Pontos = 0" no topo da folha — diga que essa é a caixinha recém-criada com zero dentro. Agora crie a regra: clique em "Add event", escolha o objeto Herói, condição "On collision with another object" e selecione a Moeda. Depois clique em "Add action", escolha "System", ação "Add to", selecione a variável Pontos e digite 1. Adicione uma segunda ação no mesmo evento: objeto Moeda, ação "Destroy". Aperte "Play": ao encostar na moeda, ela some e Pontos vira 1.

MÃO NA MASSA (25 min): As crianças repetem tudo no próprio projeto. Circule pela sala. Cada uma deve: criar a global "Pontos", montar o evento de colisão Herói/Moeda, colocar "Add to Pontos: 1" e "Destroy" na moeda. Quem terminar, parte para o texto na tela: no editor de layout, clique duas vezes numa área vazia, escolha o objeto "Text", posicione no canto de cima. Volte à folha de eventos, adicione um evento "System > Every tick" e a ação "Texto > Set text" com o valor Pontos (clique na variável Pontos para preencher). Ao dar Play, o número aparece e muda sozinho.

DESAFIO + COMPARTILHAR (10 min): Desafio — "Faça a moeda valer 5 pontos em vez de 1" (basta trocar o 1 por 5 na ação Add to). Depois cada criança mostra o placar subindo no projetor para os colegas.

## Como explicar para crianças

Use sempre a palavra "caixinha", nunca "variável" sozinha. Diga: "A caixinha tem um nome, Pontos, e dentro dela mora um número". "Add to" vira "jogar mais um pedacinho dentro da caixinha". O objeto Text é "a plaquinha que conta para todo mundo o que tem dentro da caixinha". Sempre que o número não aparecer na tela, lembre: "A caixinha guarda escondido; a plaquinha é quem mostra".

## Erros comuns e como ajudar

O erro número um é criar "Instance variable" em vez de "Global variable" — o placar zera ou não soma; mostre como apagar e criar a global certa. O segundo erro é esquecer o "Set text", então a caixinha soma mas a tela fica parada no zero; confira se existe o evento "Every tick > Set text". Outro clássico é o herói atravessar a moeda sem somar: quase sempre a condição escolhida foi no objeto errado, então verifique se é "Herói: On collision with Moeda". Também aparece o "Destroy" faltando, e aí a mesma moeda soma vários pontos de uma vez — mostre que precisa destruir a moeda. Por fim, alguns digitam "um" por extenso no Add to; lembre que ali entra o número 1.`,
  exercicios: [
    {
      titulo: `O que mora na caixinha?`,
      tipo: `Pergunta oral e brincadeira com a caixa`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça no aquecimento, com a caixa de papelão e os cartões de número. Mostre a caixinha vazia com o cartão 0 e vá trocando os cartões conforme "pega" moedas imaginárias.`,
      atividade: `Pergunte para a turma: o que é uma variável? Cada criança responde com as próprias palavras enquanto você troca os cartões de número dentro da caixa.`,
      gabarito: `Uma variável é uma caixinha mágica que guarda um número e pode trocar esse número a qualquer momento. No jogo, a caixinha "Pontos" começa com 0 e vai aumentando cada vez que o herói pega uma moeda. Resposta certa é qualquer explicação que cite "guardar um número que muda".`,
    },
    {
      titulo: `Criando a caixinha Pontos`,
      tipo: `Prática guiada no Construct 3`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe pelo projetor. Garanta que todos abriram a aba "Event sheet 1" antes de começar. Confira nome, tipo e valor inicial na janela.`,
      atividade: `Na folha de eventos, crie uma variável global chamada Pontos, do tipo Number, com valor inicial 0.`,
      gabarito: `Clicar com o botão direito na folha de eventos, escolher "Add global variable", em Name digitar Pontos, em Type deixar "Number", em Initial value deixar 0 e clicar OK. No topo da folha aparece a linha "Pontos = 0". É essa linha que confirma que deu certo.`,
    },
    {
      titulo: `Quando pegar a moeda, some um!`,
      tipo: `Montagem de evento na folha de eventos`,
      tempo: `10 minutos`,
      guiaProfessor: `Ajude a escolher o objeto certo na condição (Herói) e a ação certa (Add to). Lembre a turma de adicionar também o "Destroy" na moeda.`,
      atividade: `Monte um evento que faça o placar subir: quando o Herói colidir com a Moeda, adicione 1 à variável Pontos e destrua a Moeda.`,
      gabarito: `Add event > Herói > "On collision with another object" > Moeda. Depois Add action > System > "Add to" > variável Pontos > valor 1. Segunda ação: Moeda > "Destroy". Ao dar Play e encostar na moeda, ela some e Pontos vira 1.`,
    },
    {
      titulo: `Mostrando o número na tela`,
      tipo: `Prática com objeto Text`,
      tempo: `10 minutos`,
      guiaProfessor: `Primeiro o objeto Text é colocado no layout; depois liga-se o "Set text" na folha de eventos. Verifique se o texto realmente muda ao pegar moedas.`,
      atividade: `Coloque um objeto Text no canto da tela e faça ele mostrar o tempo todo o valor da caixinha Pontos.`,
      gabarito: `No layout, clicar duas vezes numa área vazia, escolher "Text" e posicionar no canto. Na folha de eventos: Add event > System > "Every tick"; Add action > Text > "Set text" > valor Pontos. Ao dar Play, a plaquinha mostra o número e ele aumenta junto com o placar.`,
    },
    {
      titulo: `Moeda que vale 5 pontos`,
      tipo: `Desafio de modificação`,
      tempo: `7 minutos`,
      guiaProfessor: `Use como desafio final. Quem terminar rápido pode criar uma segunda moeda valendo outro número, mas o essencial é mudar o valor do Add to.`,
      atividade: `Mude o jogo para que cada moeda valha 5 pontos em vez de 1. Depois confira no Play se o placar pula de 5 em 5.`,
      gabarito: `Abrir o evento da colisão, clicar na ação "Add to" da variável Pontos e trocar o número 1 pelo número 5. Ao dar Play e pegar uma moeda, o placar vai de 0 para 5, depois 10, depois 15. Só o número do Add to muda; o resto continua igual.`,
    },
  ],
};
