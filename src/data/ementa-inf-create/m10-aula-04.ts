import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Movimento: transições e animações",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aplicar transições entre slides e animar títulos e imagens pelo painel de movimento, controlando ordem, gatilho e velocidade com bom gosto e sem exageros.`,
  descricao: `Nesta aula o aluno descobre que uma apresentação não precisa ser estática: os slides podem trocar com uma transição suave e os elementos (títulos, textos e imagens) podem surgir na tela com animações. No Google Apresentações tudo isso fica em um único lugar, o painel "Transições" (também chamado de painel de movimento), que abre no lado direito da tela. É lá que controlamos como um slide entra e como cada objeto aparece.

A diferença central da aula é entender que existem dois tipos de movimento. A transição acontece entre um slide e o próximo: é a "passagem" da página. A animação acontece dentro do slide, em cada elemento, e tem três controles que o aluno vai dominar: a ordem (quem aparece primeiro), o gatilho (o que dispara a animação, normalmente "Ao clicar") e a velocidade (lenta, média ou rápida). Quando o aluno separa esses dois conceitos, ele para de se perder no painel.

O grande aprendizado de comportamento é o bom gosto. Adolescentes adoram efeitos e tendem a colocar movimento em tudo, o que polui a mensagem e cansa quem assiste. A regra de ouro da aula é simples: o movimento serve para guiar o olhar, não para enfeitar. Por isso vamos combinar poucos tipos de efeito, transições rápidas e animações apenas onde elas ajudam a contar a história — por exemplo, revelar os itens de uma lista um a um enquanto se fala sobre cada um.

Ao final, cada aluno terá uma apresentação com uma transição aplicada aos slides e pelo menos um slide com elementos animados em ordem controlada. Eles também vão testar tudo no modo de apresentação, porque animação que parece boa no editor às vezes fica estranha na tela cheia — e é isso que o público realmente vê.`,
  materiais: [
    `Computadores (um por aluno) com navegador Chrome e o Google Apresentações aberto`,
    `Conta Google ativa para cada aluno (login feito antes da aula para não perder tempo)`,
    `Projetor ou tela grande para o professor demonstrar o painel de movimento`,
    `Arquivo de exemplo "Movimento-Exemplo" no Drive da turma, com um slide de título e um slide de lista de 3 itens`,
    `Conexão de internet estável (as animações são salvas na nuvem em tempo real)`,
    `Fones de ouvido opcionais, caso algum slide de exemplo tenha vídeo (não obrigatório)`,
    `Cronômetro ou relógio visível para respeitar o ritmo de 10/15/25/10 minutos`,
  ],
  conceitosChave: [
    `Transição — efeito que acontece na troca de um slide para o próximo, como "Esmaecer" ou "Deslizar".`,
    `Animação — efeito aplicado a um elemento (título, texto ou imagem) dentro do mesmo slide.`,
    `Painel de movimento — barra que abre à direita ("Transições") onde se configuram transições e animações.`,
    `Ordem da animação — a sequência em que os elementos aparecem; é a lista numerada no painel, que pode ser arrastada.`,
    `Gatilho — o que dispara a animação: "Ao clicar", "Após a anterior" ou "Com a anterior".`,
    `Velocidade — controle de quão rápido o efeito acontece (lenta, média ou rápida), ajustado por uma barra deslizante.`,
    `Modo de apresentação — tela cheia (botão "Apresentar") onde se testa se o movimento funciona de verdade.`,
  ],
  treinamento: `## O que o professor precisa saber

No Google Apresentações, transições e animações moram no mesmo painel. Para abri-lo, clique com o botão direito em um slide e escolha "Transição", ou vá no menu superior em "Inserir" e depois "Animação". O painel "Transições" abre à direita. Ele tem duas partes: em cima, a transição do slide; embaixo, a lista de animações dos objetos daquele slide. Guarde a distinção: transição é entre slides, animação é dentro do slide. Se você dominar só isso, conduz a aula tranquilo, mesmo sendo iniciante.

Para uma animação, primeiro clique no elemento (um título ou imagem), depois no painel clique em "Adicionar animação". Aparecem três menus suspensos: o tipo de efeito (ex.: "Aparecer", "Esmaecer entrada", "Voar da esquerda"), o gatilho ("Ao clicar", "Após a anterior", "Com a anterior") e a barra de velocidade. Cada animação vira uma linha numerada; arraste as linhas para mudar a ordem. Sempre use o botão "Reproduzir" (no rodapé do painel) para pré-visualizar.

## Passo a passo da aula

1. Aquecimento (10 min). Projete o arquivo "Movimento-Exemplo". Mostre duas versões do mesmo slide: uma sem nenhum movimento e outra com transição suave e a lista aparecendo item a item. Pergunte: "Qual prende mais a atenção e por quê?". Conduza para a ideia de que o movimento guia o olhar.

2. Conteúdo novo guiado (15 min). Com o projetor, abra o painel: botão direito no slide e "Transição". Aplique a transição "Esmaecer" e marque a opção "Aplicar a todos os slides". Depois clique em um título, "Adicionar animação", escolha "Esmaecer entrada", gatilho "Ao clicar", velocidade média. Clique na imagem e adicione "Aparecer", gatilho "Após a anterior". Mostre como arrastar as linhas para mudar a ordem e use "Reproduzir".

3. Mão na massa (25 min). Os alunos abrem a própria apresentação do mês. Tarefa: aplicar uma transição a todos os slides; escolher um slide com lista e animar cada item para aparecer "Ao clicar"; animar uma imagem com "Após a anterior". Circule pela sala. Lembre a regra: no máximo dois tipos de efeito por apresentação.

4. Desafio e compartilhar (10 min). Cada aluno entra em "Apresentar" (canto superior direito) e mostra um slide animado para a dupla ao lado, clicando para revelar os itens. Feche perguntando quem conseguiu deixar o movimento discreto e útil.

## Como explicar de forma clara

Use a comparação do teatro: a transição é a cortina trocando de cena; a animação é cada ator entrando no palco na hora certa. Diga que o gatilho "Ao clicar" é como o aluno ser o diretor — nada aparece até ele dar o sinal. Para a ordem, mostre a lista numerada e diga "o número 1 entra primeiro, igual fila do recreio". Para velocidade, use "rápido demais ninguém vê, lento demais todo mundo dorme". Reforce sempre a frase: "Movimento bom é o que ajuda a contar a história, não o que enfeita".

## Erros comuns e como ajudar

O erro mais comum é animar todos os elementos com efeitos diferentes, deixando o slide caótico — peça para reduzir a dois tipos. Outro é confundir transição com animação: se o aluno reclama que "o título não anima", verifique se ele mexeu na parte de cima (transição) em vez de selecionar o objeto. Muitos esquecem de clicar no elemento antes de "Adicionar animação", então o botão fica inativo; mostre que é preciso selecionar primeiro. Há quem escolha gatilho "Ao clicar" para tudo e depois reclame que precisa clicar dez vezes — sugira "Após a anterior" para o que deve seguir sozinho. Por fim, lembre que o efeito só aparece de verdade em "Apresentar": se eles ficam olhando o editor parado, pensam que não funcionou.`,
  exercicios: [
    {
      titulo: `Primeira transição em todos os slides`,
      tipo: `Prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada aluno tem a própria apresentação aberta. Demonstre uma vez no projetor antes de soltar. Reforce o botão "Aplicar a todos os slides" para não repetir slide a slide.`,
      atividade: `Abra sua apresentação. Clique com o botão direito em um slide e escolha "Transição". Em "Transição de slide", escolha "Esmaecer", deixe a velocidade no meio e clique em "Aplicar a todos os slides". Entre em "Apresentar" e passe os slides para ver o efeito.`,
      gabarito: `Todos os slides trocam com o efeito "Esmaecer". No painel, a transição aparece selecionada e, ao avançar no modo "Apresentar", a passagem é suave em vez de seca. Se só um slide tiver o efeito, o aluno esqueceu de clicar em "Aplicar a todos os slides".`,
    },
    {
      titulo: `Lista que aparece item a item`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Use um slide com lista de 3 itens. Mostre que, ao animar uma caixa com vários tópicos, há a opção "Por parágrafo", que faz os itens entrarem um por um. É o efeito mais útil da aula.`,
      atividade: `Vá a um slide com uma lista de 3 itens. Clique na caixa de texto da lista. No painel, clique em "Adicionar animação", escolha "Esmaecer entrada", gatilho "Ao clicar" e marque "Por parágrafo". Use "Reproduzir" e depois teste em "Apresentar", clicando para revelar cada item.`,
      gabarito: `No modo "Apresentar", a cada clique surge um item da lista, na ordem. O painel mostra a animação com a opção "Por parágrafo" ativa. Se todos os itens aparecem de uma vez, a opção "Por parágrafo" não foi marcada.`,
    },
    {
      titulo: `Título e imagem na ordem certa`,
      tipo: `Desafio`,
      tempo: `8 min`,
      guiaProfessor: `Aqui o aluno controla a ordem e o gatilho. Ensine a arrastar as linhas numeradas. Incentive "Após a anterior" para a imagem entrar sozinha depois do título.`,
      atividade: `Em um slide com título e imagem: anime o título com "Voar da esquerda", gatilho "Ao clicar". Anime a imagem com "Aparecer", gatilho "Após a anterior". No painel, arraste as linhas para que o título seja o número 1 e a imagem o número 2. Teste em "Apresentar".`,
      gabarito: `Ao clicar uma vez, o título voa da esquerda; logo em seguida a imagem aparece sozinha, sem novo clique. A lista do painel mostra título como 1 e imagem como 2. Se a imagem pede outro clique, o gatilho dela não está como "Após a anterior".`,
    },
    {
      titulo: `Caça ao exagero`,
      tipo: `Em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Atividade de bom gosto. Cada dupla revisa a apresentação do colega procurando excesso de movimento. Estabeleça o limite: no máximo dois tipos de efeito na apresentação inteira.`,
      atividade: `Troque de computador com a dupla. Entre em "Apresentar" e assista à apresentação do colega. Anote: quantos tipos de efeito diferentes existem? Há algum slide com movimento demais? Sugira ao colega uma mudança para deixar mais limpo e ajude a aplicar.`,
      gabarito: `A dupla identifica quando há mais de dois tipos de efeito e aponta pelo menos uma melhoria (remover uma animação desnecessária, igualar efeitos ou acelerar uma transição lenta). A apresentação revisada fica com movimento mais discreto e coerente.`,
    },
    {
      titulo: `Slide-cena com movimento que conta história`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Fechamento integrador. O aluno cria um slide novo onde o movimento tem propósito narrativo (uma pergunta, depois a resposta). Avalie ordem, gatilho, velocidade e bom gosto juntos.`,
      atividade: `Crie um slide novo com um título-pergunta (ex.: "Qual é o maior planeta?") e, abaixo, a resposta com uma imagem. Anime para que primeiro apareça só a pergunta; ao clicar, surjam a resposta e a imagem juntas ("Com a anterior"). Use uma transição suave ao entrar no slide. Apresente para a turma.`,
      gabarito: `No modo "Apresentar", o slide entra com transição suave mostrando apenas a pergunta; ao clicar, resposta e imagem surgem juntas. O movimento tem sentido (suspense e revelação), usa no máximo dois tipos de efeito e velocidade adequada — nem rápida demais, nem lenta demais.`,
    },
  ],
};
