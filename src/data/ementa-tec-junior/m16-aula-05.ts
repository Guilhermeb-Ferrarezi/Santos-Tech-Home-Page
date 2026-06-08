import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Super poderes no jogo",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Criar um item de power-up que, ao ser coletado pelo herói, dá um super poder (pular mais alto ou correr mais rápido) e some da tela depois de pego.`,
  descricao: `Nesta aula o jogo das crianças ganha o seu primeiro super poder! Até agora o herói só sabia andar e pular, mas hoje vamos colocar um item especial na fase, como uma estrela brilhante ou um cogumelo mágico. Quando o herói encostar nesse item, ele recebe um poder novo, e o item desaparece, exatamente como acontece nos jogos famosos que as crianças adoram. Esse é um momento muito empolgante, porque o jogo deixa de ser apenas "andar e pular" e passa a ter uma surpresa que muda o personagem.

Por dentro, o segredo do power-up é um evento de colisão. No Construct 3, usamos a condição "On collision with another object" para detectar o instante em que o herói toca a estrela. A partir desse toque, mandamos o jogo fazer duas coisas ao mesmo tempo: dar o poder (por exemplo, aumentar a força do pulo do herói usando o comportamento Platform) e destruir o item, com a ação "Destroy". Assim o aluno entende que um único toque pode disparar várias ações de uma vez.

Esta aula conecta tudo o que a turma já viu no mês. Os alunos já sabem colocar sprites em cena (Aula 1), já fizeram o herói se mexer com o comportamento Platform (Aula 2), já criaram caixinhas mágicas, que são as variáveis (Aula 3), e já aprenderam a passar de fase (Aula 4). Agora juntamos colisão mais ação para criar uma reação no jogo. É um passo importante na construção do esqueleto do jogo do mês.

O professor não precisa ser um especialista em Construct 3. Esta aula traz o passo a passo com os nomes exatos dos botões, painéis e menus, além de avisos sobre os erros que as crianças mais cometem. O segredo é demonstrar primeiro no projetor, devagar, e só depois deixar a turma colocar a mão na massa. Lembre sempre: poucos passos, muito visual e muita comemoração a cada poder que funciona.`,
  materiais: [
    `Computadores com o Construct 3 aberto no projeto do jogo de cada aluno (um por criança)`,
    `Projetor ou TV grande conectado ao computador do professor para demonstrar`,
    `Sprite pronto de power-up: uma estrela e um cogumelo (imagens PNG na pasta da turma)`,
    `Projeto-exemplo do professor com o power-up já funcionando, para mostrar o resultado final`,
    `Cartões impressos com os desenhos: "tocar = pegar" e "pegar = poder + sumir"`,
    `Quadro branco e canetas para desenhar o fluxo do evento de colisão`,
    `Cronômetro ou timer na tela para marcar os blocos de tempo da aula`,
  ],
  conceitosChave: [
    `Power-up — um item especial que dá um super poder para o herói quando ele encosta nele.`,
    `Colisão — o momento em que dois objetos se tocam dentro do jogo, como o herói batendo na estrela.`,
    `Evento — a regrinha "quando isso acontecer, faça aquilo" que o jogo segue, com uma condição e uma ação.`,
    `Ação Destroy — o comando que faz um objeto desaparecer da tela para sempre.`,
    `Comportamento Platform — o conjunto de regras prontas que faz o herói andar e pular; podemos mudar a força do pulo dele.`,
    `Propriedade — um número que guarda uma característica do objeto, como a altura do pulo ou a velocidade.`,
    `Coletar — encostar em um item para pegá-lo e ganhar alguma vantagem no jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

O power-up é uma das ideias mais mágicas para as crianças, porque transforma o jogo. Por dentro, ele é simples: um evento que diz "quando o herói tocar na estrela, dê um poder e destrua a estrela". No Construct 3, o coração disso é a condição "On collision with another object" (colisão entre dois objetos). Para o poder de pular mais alto, vamos mexer na propriedade "Jump strength" (força do pulo) do comportamento Platform do herói. Antes da aula, abra o projeto-exemplo e teste você mesmo o power-up funcionando uma vez. Tenha os sprites da estrela e do cogumelo já prontos na pasta. Reserve dois minutos para conferir que cada computador abre o projeto do aluno sem erro.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão: Pergunte "quem aqui já pegou um cogumelo num jogo e ficou maior?". Relembre que na aula passada eles aprenderam a passar de fase. Mostre no projetor o jogo deles e diga: "hoje vamos dar um super poder!". Faça uma demonstração rápida do exemplo pronto, pegando a estrela e pulando bem alto. As crianças vão querer fazer igual.

15 min, conteúdo novo guiado: No projetor, abra o projeto. Arraste o sprite da estrela para o Layout (a área do jogo). Clique nele uma vez e renomeie no painel "Properties", no campo "Name", para "Estrela". Agora vá à aba "Event Sheet" (folha de eventos) e clique em "Add event" (adicionar evento). Escolha o objeto "Player" (o herói) e a condição "On collision with another object"; selecione "Estrela". Depois clique em "Add action" (adicionar ação) na mesma linha. Primeiro, selecione o "Player", escolha "Platform" e a ação "Set jump strength" (definir força do pulo); coloque um número maior, por exemplo 900. Em seguida, adicione outra ação: selecione "Estrela" e escolha "Destroy" (destruir). Pronto, o evento está montado. Aperte "Preview" (o botão de play) e mostre o herói pegando a estrela e pulando mais alto.

25 min, mão na massa: Cada criança repete os passos no próprio projeto. Circule pela sala. Ajude a arrastar a estrela, renomear e montar o evento. Quem terminar pode trocar a estrela pelo cogumelo e, em vez de pular mais alto, deixar o herói mais rápido usando a ação "Set max speed" (definir velocidade máxima) do comportamento Platform com um número maior, como 300. Comemore cada power-up que funcionar.

10 min, desafio e compartilhar: Lance o desafio: "coloque dois power-ups na fase, um de pulo e um de velocidade". Depois, peça para dois ou três alunos mostrarem no projetor. Todos batem palma para cada super poder.

## Como explicar para crianças

Use a analogia do botão mágico: "imagine que a estrela é um botão escondido; quando o herói pisa nele, acontece a mágica". Explique a colisão como um abraço: "quando o herói abraça a estrela, o jogo percebe". E o Destroy como um truque de mágica: "a estrela some, puf!". Desenhe no quadro: HERÓI toca ESTRELA, seta para PODER, seta para SUMIR. Repita várias vezes em voz alta a regrinha "quando tocar, dá poder e some".

## Erros comuns e como ajudar

O erro mais comum é a criança escolher a colisão na ordem errada, clicando primeiro na estrela em vez do herói; mostre que começamos sempre pelo "Player". Outro erro: esquecer de adicionar a ação "Destroy", então a estrela fica para sempre e dá poder infinito; lembre que são duas ações na mesma linha. Alguns colocam a estrela fora da área visível do Layout; peça para arrastá-la para perto do herói. Se o pulo não mudar, confira se o número em "Set jump strength" ficou maior que o valor original. Se nada acontecer, verifique se os dois objetos têm o comportamento certo e se o evento está na "Event Sheet" daquele Layout.`,
  exercicios: [
    {
      titulo: `Caça ao botão da colisão`,
      tipo: `Reconhecimento guiado`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça com a turma no projetor. Mostre a "Event Sheet" e peça que apontem onde fica o "Add event" e o "Add action". É um aquecimento para todos localizarem os botões.`,
      atividade: `Na tela, encontre e diga em voz alta o nome do botão que usamos para começar uma regra nova no jogo e o botão que usamos para mandar o jogo fazer algo.`,
      gabarito: `O botão para começar uma regra é "Add event" (adicionar evento). O botão para mandar fazer algo é "Add action" (adicionar ação). A condição da colisão chama-se "On collision with another object".`,
    },
    {
      titulo: `Minha primeira estrela mágica`,
      tipo: `Prática individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Cada aluno arrasta o sprite da estrela para o Layout e o renomeia. Verifique o campo "Name" no painel "Properties". Circule e ajude quem não achar o painel.`,
      atividade: `Arraste a estrela para a área do jogo, perto do herói. Clique nela e troque o nome para "Estrela" no painel da direita.`,
      gabarito: `A estrela aparece no Layout, perto do herói, e no painel "Properties" o campo "Name" mostra "Estrela". Pronta para receber o evento de colisão.`,
    },
    {
      titulo: `Tocar, ganhar poder e sumir`,
      tipo: `Construção de evento`,
      tempo: `12 minutos`,
      guiaProfessor: `Acompanhe a montagem do evento completo. A condição começa no "Player". A primeira ação é "Set jump strength" no Platform com número maior; a segunda é "Destroy" na estrela. Teste com "Preview".`,
      atividade: `Monte o evento: quando o "Player" colidir com a "Estrela", faça o herói pular mais alto e a estrela sumir. Depois aperte o play e teste.`,
      gabarito: `Evento correto: condição "Player > On collision with another object > Estrela"; ação 1 "Player > Platform > Set jump strength" com valor maior (ex.: 900); ação 2 "Estrela > Destroy". No teste, o herói pega a estrela, pula mais alto e a estrela desaparece.`,
    },
    {
      titulo: `Cogumelo da velocidade`,
      tipo: `Variação criativa`,
      tempo: `10 minutos`,
      guiaProfessor: `Agora o aluno cria um segundo power-up com efeito diferente: velocidade. Use o sprite do cogumelo e a ação "Set max speed" do Platform. Reforce que a estrutura do evento é a mesma, só muda a ação do poder.`,
      atividade: `Coloque um cogumelo na fase. Faça um evento para que, ao tocar nele, o herói corra mais rápido e o cogumelo suma.`,
      gabarito: `Evento: condição "Player > On collision with another object > Cogumelo"; ação 1 "Player > Platform > Set max speed" com valor maior (ex.: 300); ação 2 "Cogumelo > Destroy". No teste, o herói fica mais rápido e o cogumelo some.`,
    },
    {
      titulo: `Fase cheia de super poderes`,
      tipo: `Desafio de aplicação`,
      tempo: `10 minutos`,
      guiaProfessor: `Desafio final. O aluno coloca os dois power-ups na fase e garante que cada um funcione e suma. Peça para explicarem, com as próprias palavras, por que precisamos da ação Destroy. Selecione dois ou três para apresentar.`,
      atividade: `Monte uma fase com uma estrela e um cogumelo. Teste pegar os dois e explique para a turma por que cada item precisa sumir depois de pego.`,
      gabarito: `A fase tem os dois power-ups, cada um com seu evento de colisão e sua ação "Destroy". Explicação esperada: o item precisa sumir com o "Destroy" para não dar o poder de novo sem parar e para mostrar que já foi coletado, igual aos jogos de verdade.`,
    },
  ],
};
