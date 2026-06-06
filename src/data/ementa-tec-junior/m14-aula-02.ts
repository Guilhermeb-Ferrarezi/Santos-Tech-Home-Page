import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Quando a IA vê, o gato reage",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Cada criança vai montar seu primeiro bloco "quando a IA reconhecer..." para que o personagem do Scratch fale ou troque de fantasia ao ver uma classe pela câmera.`,
  descricao: `Na aula passada as crianças descobriram que a IA da Teachable Machine consegue "conversar" com o Scratch: a câmera vê algo e o programa responde. Hoje damos o passo mais empolgante até agora. Em vez de só observar a IA mostrar uma porcentagem na tela, a criança vai conectar essa visão a uma ação de verdade. Quando ela mostrar o objeto certo para a câmera, o gato do Scratch vai falar ou trocar de roupa na hora. É a primeira vez que o aluno sente que está mesmo no comando da inteligência artificial.

O coração desta aula é o bloco de decisão "se... então". A criança vai aprender que o computador fica olhando o tempo todo e, quando reconhece a classe treinada, dispara a reação que ela mesma escolheu. Nós já temos um modelo simples pronto do mês (ou treinado na Aula 1), com duas ou três classes bem diferentes, como "mão aberta", "mão fechada" e "nada". A novidade não é treinar de novo, e sim ligar cada classe a uma resposta diferente do personagem.

A turma trabalha em ritmo de tentativa e erro carinhoso. A IA nem sempre acerta de primeira: a iluminação muda, a criança mostra o objeto torto, ou o fundo confunde a câmera. Isso é ótimo para a aula. Testar várias vezes, ajustar a posição e ver a reação acontecer ensina paciência e mostra, de forma concreta, que a IA "aprende com exemplos" e responde ao que enxerga.

Ao final, cada aluno terá um pequeno projeto vivo: mostro a classe 1 e o gato diz "Olá!"; mostro a classe 2 e o gato vira um cachorro (troca de fantasia). Esse é o tijolo básico que vamos repetir e aumentar nas próximas aulas, até chegar no mini-projeto e no showcase do mês.`,
  materiais: [
    `Computadores (1 por criança ou em dupla) com a Teachable Machine aberta no navegador e o Scratch (extensão da Teachable Machine já carregada) na outra aba`,
    `Modelo de imagem já treinado com 2 ou 3 classes bem distintas (ex.: "mão aberta", "mão fechada", "nada"), salvo e com link do modelo copiado`,
    `Webcam funcionando em cada computador (a embutida do notebook serve)`,
    `Projetor para o professor demonstrar passo a passo na tela grande`,
    `Projeto Scratch de exemplo pronto, já com um bloco "quando reconhecer" funcionando, para mostrar o objetivo logo no começo`,
    `Cartões impressos com os nomes das classes e a reação combinada (apoio visual para crianças que ainda leem pouco)`,
    `Fantasias extras no palco do Scratch (gato, cachorro, dinossauro) para a troca de fantasia ficar divertida`,
  ],
  conceitosChave: [
    `Classe — cada "gavetinha" que ensinamos para a IA. Por exemplo, "mão aberta" é uma classe e "mão fechada" é outra.`,
    `Reconhecer — quando a IA olha pela câmera e diz "ah, isso é a mão aberta!". É a IA descobrindo qual classe ela está vendo.`,
    `Bloco "se... então" — um comando do Scratch que diz: SE a IA reconhecer tal coisa, ENTÃO o gato faz isso.`,
    `Reação — a resposta que o personagem dá. Pode ser falar, mudar de cor ou trocar de fantasia.`,
    `Fantasia — a "roupa" do personagem no Scratch. Trocar de fantasia faz o gato virar outra coisa.`,
    `Repetir para sempre — um bloco que faz o computador ficar olhando a câmera sem parar, igual a um vigia que nunca pisca.`,
    `Testar — mostrar o objeto para a câmera de novo e de novo até a IA responder certinho. Errar faz parte!`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista. A mágica de hoje mora em um único bloco do Scratch: "se ... então". A ideia é simples: o computador fica olhando a câmera o tempo todo e, quando a IA reconhece uma classe, o gato reage. Antes da aula, abra o navegador, carregue o modelo já treinado na Teachable Machine e teste você mesmo uma vez. No Scratch, confirme que a extensão da Teachable Machine aparece na lista de blocos (ícone de quebra-cabeça no canto inferior esquerdo, opção "Teachable Machine"). Cole o link do seu modelo no bloco roxo "use o modelo [link]". Se o gato reagir quando você mostra a mão, está pronto. Tenha o projeto de exemplo aberto para mostrar o objetivo logo no início.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento e revisão. Reúna a turma diante do projetor. Pergunte: "O que a IA aprendeu na aula passada?". Mostre rapidamente as classes do modelo na Teachable Machine, levantando a mão aberta e fechada para a câmera e apontando a barra que sobe. Diga a frase do dia: "Hoje, quando a IA vê, o gato reage!". Mostre o projeto de exemplo pronto: mostre uma classe e o gato fala; mostre outra e ele troca de fantasia. Os olhos brilham.

15 min - Conteúdo novo guiado. No projetor, abra o Scratch limpo. Clique no ícone de quebra-cabeça (Adicionar extensão) e escolha "Teachable Machine". Arraste para a tela o bloco roxo "use o modelo de classe [link]" e cole o link do modelo. Agora pegue o bloco amarelo "quando bandeira verde clicada" e, embaixo, o bloco "sempre". Dentro do "sempre", encaixe um bloco "se ... então". No espacinho do "se", arraste o bloco "o resultado da classe é [ ]" e escolha a primeira classe pelo menu. Dentro do "então", coloque "diga [Olá!] por 2 segundos". Pronto: esse é o primeiro bloco "quando a IA reconhecer". Clique na bandeira verde e demonstre.

25 min - Mão na massa. Cada criança (ou dupla) repete no seu computador. Circule sem pressa. Primeiro façam juntos a classe 1 reagir com "diga". Depois adicione um segundo bloco "se ... então" para a classe 2, mas com reação diferente: "mude para a fantasia [cachorro]". Quem terminar tenta a classe 3. Incentive testar muitas vezes: mostrar o objeto, ver se reage, ajustar a posição. Lembre que errar é o jogo: "A IA está aprendendo a te ver melhor".

10 min - Desafio e compartilhar. Desafio: "Faça o gato reagir de um jeito que ninguém pensou!" (mudar de cor, crescer, fazer um som). Depois, em roda, dois ou três alunos mostram no projetor: eles mostram a classe e a turma vê o gato reagir. Aplauda cada um.

## Como explicar para crianças

Use analogias concretas. "O 'sempre' é um vigia que nunca pisca: ele fica olhando a câmera o tempinho todo." "O 'se ... então' é como uma regra de casa: SE tocar a campainha, ENTÃO abrimos a porta. Aqui é: SE a IA vê a mão aberta, ENTÃO o gato diz oi." Para a troca de fantasia, diga que o gato "veste outra roupa e vira outro bicho". Mostre sempre antes de pedir para fazerem, e deixe a criança apertar a bandeira verde com a própria mão.

## Erros comuns e como ajudar

O erro mais comum é esquecer o bloco "sempre": sem ele a IA olha uma só vez e nada acontece. Verifique se o "se ... então" está dentro do "sempre". Outro erro é não colar o link do modelo, ou colar errado: o menu de classes fica vazio. Cole de novo e clique fora. Se a IA não reage, geralmente é luz fraca ou objeto torto: peça para a criança chegar perto da janela e mostrar a mão bem na frente da câmera. Se o gato reage do jeito errado, confira se cada "se" aponta para a classe certa no menu. E lembre: o navegador pede permissão para a câmera. Clique em "Permitir".`,
  exercicios: [
    {
      titulo: `Caça à classe certa`,
      tipo: `Aquecimento oral em grupo`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça no projetor com a Teachable Machine aberta. Mostre objetos para a câmera e deixe a turma "ler" qual classe acende. É só observação, sem mexer no Scratch ainda. Sirve para revisar o conceito de classe da Aula 1.`,
      atividade: `Olhem a tela! Vou mostrar a mão para a câmera. Gritem o nome da classe que está ganhando (a barrinha mais cheia). Agora vou mostrar a mão fechada... e qual classe acende?`,
      gabarito: `Mão aberta para a câmera acende a classe "mão aberta"; mão fechada acende a classe "mão fechada"; sem nada na frente acende a classe "nada". O esperado é a turma nomear corretamente a classe cuja barra fica mais cheia.`,
    },
    {
      titulo: `Meu primeiro "quando a IA reconhecer"`,
      tipo: `Construção guiada no Scratch`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza passo a passo, junto com a turma, projetando cada clique. Garanta que todos tenham a extensão "Teachable Machine" adicionada e o link do modelo colado no bloco roxo antes de começar a montar.`,
      atividade: `Monte estes blocos: "quando bandeira verde clicada" + "sempre" + dentro dele "se o resultado da classe é [mão aberta] então" + "diga [Olá!] por 2 segundos". Clique na bandeira verde e mostre a mão aberta para a câmera.`,
      gabarito: `Ao mostrar a mão aberta, o gato deve dizer "Olá!" por 2 segundos. A ordem correta é: bloco "sempre" envolvendo o "se ... então", e o bloco "diga" dentro do "então". Se nada acontecer, o erro quase sempre é o "se" estar fora do "sempre" ou o link do modelo não estar colado.`,
    },
    {
      titulo: `Duas classes, duas reações`,
      tipo: `Prática individual ou em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Agora cada criança adiciona um segundo bloco "se ... então", também dentro do "sempre", mas para outra classe e com reação diferente. Circule e confira se cada "se" aponta para a classe certa no menu.`,
      atividade: `Acrescente um segundo "se o resultado da classe é [mão fechada] então" e, dentro dele, "mude para a fantasia [cachorro]". Teste: mostre a mão aberta (o gato fala) e depois a mão fechada (o gato vira cachorro).`,
      gabarito: `Mão aberta faz o gato dizer "Olá!"; mão fechada faz o personagem trocar para a fantasia do cachorro. Os dois blocos "se ... então" devem estar empilhados dentro do mesmo "sempre". Erro comum: apontar os dois "se" para a mesma classe, fazendo só uma reação funcionar.`,
    },
    {
      titulo: `Detetive do bug`,
      tipo: `Resolução de problema (depuração)`,
      tempo: `8 minutos`,
      guiaProfessor: `Prepare antes, no seu projeto de demonstração, um código quebrado de propósito: o bloco "se ... então" colocado FORA do "sempre". Projete e desafie a turma a descobrir por que o gato não reage. Deixe-os pensar antes de revelar.`,
      atividade: `Olhem este código: tem "quando bandeira verde clicada", tem "sempre" vazio e, separado, um "se o resultado da classe é [mão aberta] então diga [Oi]". Eu mostro a mão e o gato não fala. O que está errado? Como consertamos?`,
      gabarito: `O bloco "se ... então" está fora do "sempre", então a IA não fica olhando a câmera continuamente. A correção é arrastar o "se ... então" para DENTRO do bloco "sempre". Depois disso, ao mostrar a mão aberta, o gato volta a dizer "Oi".`,
    },
    {
      titulo: `Inventor de reações`,
      tipo: `Desafio criativo e compartilhamento`,
      tempo: `8 minutos`,
      guiaProfessor: `Etapa aberta para a criança criar uma reação que ainda não usamos. Aceite qualquer bloco de reação válido (som, cor, tamanho, terceira classe). Reserve o final para dois ou três alunos mostrarem no projetor.`,
      atividade: `Crie uma reação nova para uma classe: pode usar "toque o som [miau]", "mude o efeito cor", "adicione [10] ao tamanho" ou ligar a terceira classe ("nada") a algo divertido. Teste até funcionar e prepare-se para mostrar para a turma.`,
      gabarito: `Resposta aberta, mas precisa funcionar: o bloco de reação escolhido (som, efeito de cor, mudança de tamanho ou reação da terceira classe) deve estar dentro de um "se ... então" correto, dentro do "sempre". Exemplo válido: classe "nada" então "mude o efeito cor por 25" deixa o gato colorido quando ninguém aparece na câmera. Considere correto qualquer reação que dispare ao mostrar a classe certa.`,
    },
  ],
};
