import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Eu Crio Minha Imagem!",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Cada criança cria as suas próprias figuras ditando descrições com cores, animais e cenários, aprende a melhorar o pedido acrescentando detalhes e salva as suas favoritas para a galeria do mês.`,
  descricao: `Esta é a aula em que cada criança vira a verdadeira artista da turma. Na aula passada elas descobriram que palavras viram figuras; agora elas mesmas vão dar as ordens. Cada aluno escolhe um animal, uma cor e um lugar e dita esse pedido para a inteligência artificial de imagem desenhar. O encanto está em ver a própria ideia ganhar vida na tela em poucos segundos, com a criança no comando do começo ao fim.

O coração da aula é a ideia de detalhe. Um pedido curto, como "um gato", traz uma figura qualquer. Mas quando a criança acrescenta cor, lugar e clima, o pedido vira "um gato laranja dormindo num jardim cheio de flores", e a figura fica muito mais bonita e parecida com o que ela imaginou. As crianças aprendem, na prática, que quanto mais a gente conta para a IA, melhor ela desenha. É a primeira noção de capricho no pedido, sem nenhuma palavra técnica difícil.

Como muitas crianças de 5 a 9 anos ainda estão aprendendo a ler e escrever, o professor é o digitador. A criança fala o pedido em voz alta, com a sua receita de animal, cor e cenário, e o professor escreve exatamente o que ela disse na caixa de texto da ferramenta. Assim a criança sente que a imagem é dela de verdade, porque a ideia partiu dela. O professor entra só como a mão que escreve e o guia que ajuda a lembrar dos detalhes.

No fim, cada aluno escolhe a figura de que mais gostou e o professor a salva numa pasta com o nome da criança. Essas figuras favoritas começam a formar o acervo que vai virar a galeria de IA do mês, o entregável das próximas semanas. A aula é pura mão na massa, alegre e cheia de descobertas, e termina com todos orgulhosos de terem criado arte com a ajuda da inteligência artificial.`,
  materiais: [
    `Computadores ligados, um por criança, com a IA de imagem do Gemini já aberta e com o login do professor feito antes da aula`,
    `Projetor ou TV ligado no computador do professor para demonstrar cada passo na tela grande e mostrar exemplos`,
    `Duas ou três imagens prontas pelo professor mostrando o "antes e depois": a mesma figura pedida de forma simples e depois com muitos detalhes`,
    `Uma pasta criada antes da aula no computador, com uma subpasta para cada criança, para salvar as figuras favoritas da galeria`,
    `Cartões de receita impressos com três espaços em branco: ANIMAL, COR e LUGAR, para a criança montar o pedido antes de falar`,
    `Folhas em branco e lápis de cor para a atividade de desenho do pedido`,
    `Adesivos ou carimbos de "Artista de IA" para premiar quem criar e salvar a sua figura favorita`,
  ],
  conceitosChave: [
    `Pedido — é a frase que a gente fala para a IA dizendo o que quer que ela desenhe.`,
    `Detalhe — é cada pedacinho que a gente acrescenta ao pedido, como a cor, o lugar ou o que o bichinho está fazendo.`,
    `Cenário — é o lugar onde a figura acontece, como um jardim, uma praia, uma floresta ou o espaço.`,
    `Gerar — é o momento em que a IA pensa e desenha a figura depois do nosso pedido.`,
    `Salvar — é guardar a figura no computador para não perder, igual a guardar um desenho na pasta.`,
    `Favorita — é a figura de que a criança mais gostou, escolhida para entrar na galeria do mês.`,
    `Capricho no pedido — é contar bem direitinho o que a gente quer, com vários detalhes, para a figura ficar mais bonita.`,
  ],
  treinamento: `## O que o professor precisa saber

A IA de imagem do Gemini transforma uma frase escrita numa figura. O professor escreve o pedido da criança na caixa de texto, manda gerar e em poucos segundos aparece a imagem. Você não precisa saber desenhar nem dominar tecnologia: precisa apenas escrever com clareza o que a criança ditar e ajudar a lembrar dos detalhes. Antes da aula, faça o login na sua conta Google, abra o Gemini no navegador e teste dois ou três pedidos para sentir o tempo de resposta e já ter exemplos prontos.

A regra de ouro desta aula é: mais detalhe, melhor figura. Um pedido como "um cachorro" gera algo genérico. Já "um cachorro marrom pulando numa praia ensolarada" gera uma figura rica e parecida com a imaginação da criança. Por isso, todo pedido segue uma receita simples de três partes: animal, cor e lugar. Se sobrar tempo, acrescente um quarto detalhe, como o que o bichinho está fazendo (dormindo, correndo, voando).

Guarde também duas dicas de segurança e calma. Primeira: gere uma imagem de cada vez, sem clicar em "gerar" várias vezes seguidas, senão a tela enche e confunde a criança. Segunda: salve a favorita assim que a criança escolher, clicando com o botão direito na imagem e em "Salvar imagem como", guardando na subpasta com o nome dela. Não deixe para salvar tudo no fim, ou alguma figura pode se perder.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar no Gemini e na IA de imagem)

1. Aquecimento (10 min): no projetor, mostre as suas imagens de "antes e depois". Pergunte: "Qual ficou mais bonita, a do pedido curtinho ou a do pedido cheio de detalhes?". Deixe as crianças apontarem e conte que hoje cada uma vai criar a própria figura, bem caprichada.

2. Conteúdo novo guiado (15 min): no seu computador, abra o Gemini. Clique na caixa de texto de baixo, onde fica escrito "Pergunte ao Gemini". Escreva ao vivo um pedido simples, como "um gato", e clique na setinha de enviar para gerar. Depois apague e escreva o mesmo com detalhes: "um gato laranja dormindo num jardim cheio de flores coloridas". Gere de novo e compare as duas figuras na tela grande, mostrando como o detalhe deixou tudo melhor.

3. Mão na massa (25 min): vá de criança em criança. Cada uma fala o seu pedido usando a receita animal, cor e lugar. Você escreve exatamente o que ela disser na caixa de texto e clica na setinha de enviar. Quando a figura aparecer, comemore junto. Incentive cada aluno a pedir de novo acrescentando um detalhe e a comparar. No fim, peça que escolha a favorita; clique com o botão direito na imagem, depois em "Salvar imagem como" e guarde na subpasta com o nome dela.

4. Desafio e compartilhar (10 min): proponha o desafio de criar uma figura com QUATRO detalhes (animal, cor, lugar e uma ação). Quem conseguir mostra a tela para a turma e conta qual foi o seu pedido. Feche com uma volta rápida pelas figuras salvas e entregue o adesivo de "Artista de IA".

## Como explicar para crianças de 5 a 9 anos

Use a ideia de receita de bolo. Diga que, para a IA cozinhar uma figura gostosa, a gente precisa colocar os ingredientes: um animal, uma cor e um lugar. Quanto mais ingredientes a gente põe, mais saboroso o bolo fica. Faça a brincadeira em voz alta: "Que animal? Que cor? Onde ele está?", e vá montando a frase junto com a criança.

Compare também com pedir ajuda a um amigo desenhista que mora longe e só te ouve. Se você disser só "desenha um peixe", ele desenha qualquer peixe. Se você disser "um peixe azul nadando no fundo do mar com bolhinhas", ele desenha bem certinho. A IA é esse amigo desenhista. Sempre mostre primeiro na sua tela e celebre cada figura que aparecer, porque nessa idade o encanto pelo resultado é o que mantém a turma engajada.

## Erros comuns e como ajudar

O erro mais comum é o pedido curto demais. A criança fala só "um cavalo" e fica frustrada com a figura genérica. Volte à receita e pergunte a cor e o lugar para enriquecer. Outro erro é querer clicar em gerar muitas vezes seguidas; explique que a IA precisa de um tempinho para pensar e que esperamos a figura aparecer antes de pedir outra. Algumas crianças acham que a primeira figura está errada; lembre que não existe certo ou errado, e que dá para pedir de novo quantas vezes quiser. Por fim, há quem esqueça de salvar a favorita; tenha o hábito de salvar na hora em que a criança escolher, na subpasta com o nome dela, para nenhuma figura se perder antes da galeria.`,
  exercicios: [
    {
      titulo: `Minha receita de figura`,
      tipo: `Prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Entregue à criança o cartão de receita com os espaços ANIMAL, COR e LUGAR. Ajude-a a escolher os três e a falar a frase completa. Escreva exatamente o que ela disser na caixa de texto do Gemini e clique na setinha de enviar para gerar.`,
      atividade: `Escolha um animal, uma cor e um lugar. Fale o pedido inteiro em voz alta, como "um coelho branco pulando na grama verde", e o professor escreve para a IA desenhar.`,
      gabarito: `A figura gerada mostra o animal, a cor e o lugar que a criança pediu. Acerto é a criança ter falado os três ingredientes da receita e visto a sua figura aparecer na tela.`,
    },
    {
      titulo: `Caça aos detalhes`,
      tipo: `Jogo`,
      tempo: `10 min`,
      guiaProfessor: `Mostre na tela uma figura simples gerada por você, como "um pássaro". Faça perguntas rápidas à turma para descobrir os detalhes que faltam: que cor? onde está? o que ele faz? Cada resposta certa é um ponto. Depois gere o pedido completo com os detalhes que eles deram.`,
      atividade: `Olhe a figura simples na tela e responda rápido: que cor podemos dar a ela? Em que lugar ela pode estar? O que ela pode estar fazendo? Cada detalhe que você inventar vale um ponto.`,
      gabarito: `As crianças apontam pelo menos uma cor, um lugar e uma ação para acrescentar à figura. Acerto é a turma juntar três ou mais detalhes novos, mostrando que entendeu que detalhe melhora o pedido.`,
    },
    {
      titulo: `Antes e depois do meu pedido`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Peça que a criança faça primeiro um pedido bem curto, só com o animal. Gere e mostre. Depois peça que ela acrescente a cor e o lugar à mesma ideia. Gere de novo e coloque as duas figuras lado a lado para ela comparar e dizer qual ficou mais bonita.`,
      atividade: `Peça primeiro só o animal, como "um peixe". Depois peça o mesmo com detalhes, como "um peixe dourado nadando no fundo do mar com bolhinhas". Compare as duas figuras e diga qual ficou melhor.`,
      gabarito: `A criança compara as duas figuras e percebe que a versão com detalhes ficou mais bonita e completa. Acerto é ela escolher a figura detalhada e explicar, do seu jeito, que foi porque tinha mais detalhes.`,
    },
    {
      titulo: `Desenhando o meu pedido`,
      tipo: `Desenho no papel`,
      tempo: `10 min`,
      guiaProfessor: `Entregue uma folha em branco e lápis de cor. Antes de usar a IA, peça que a criança desenhe no papel a figura que ela quer pedir, com o animal, a cor e o lugar. Depois compare o desenho dela com a figura que a IA gerou e converse sobre as semelhanças.`,
      atividade: `Desenhe na folha a figura que você vai pedir para a IA: o seu animal, com a cor que você escolheu, no lugar que você imaginou. Depois veja se a figura da IA ficou parecida com o seu desenho.`,
      gabarito: `O desenho mostra o animal, a cor e o cenário planejados pela criança. Acerto é o desenho ter os três ingredientes da receita e a criança conseguir comparar o seu papel com a figura gerada pela IA.`,
    },
    {
      titulo: `O desafio dos quatro detalhes`,
      tipo: `Desafio`,
      tempo: `10 min`,
      guiaProfessor: `Proponha o desafio final: criar uma figura com QUATRO detalhes, somando à receita uma ação do bichinho (dormindo, voando, correndo). Ajude a criança a montar a frase completa, gere a figura, salve a favorita na subpasta com o nome dela e peça que mostre a tela para a turma.`,
      atividade: `Crie uma figura caprichada com quatro detalhes: o animal, a cor, o lugar e o que ele está fazendo. Por exemplo: "um elefante azul tomando banho num rio embaixo de uma cachoeira". Escolha a sua favorita para salvar na galeria.`,
      gabarito: `A figura final junta os quatro detalhes pedidos pela criança e é salva como favorita na pasta dela. Acerto é o pedido ter animal, cor, lugar e ação, e a criança ter escolhido e salvado a sua figura para a galeria do mês.`,
    },
  ],
};
