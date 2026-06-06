import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Olá, Maya! O Programa dos Profissionais",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança abre o Maya pela primeira vez, reconhece a janela onde o mundo 3D aparece e entende que esse é o mesmo programa usado para fazer filmes e jogos de verdade.`,
  descricao: `Nesta aula damos o primeiro passo de uma jornada nova: conhecer o Maya, um programa de computador de gente grande, daqueles que os profissionais usam de verdade para criar personagens de filmes, desenhos animados e jogos. É a primeira vez que as crianças vão ver, com os próprios olhos, a tela onde nascem os bonecos e cenários em três dimensões.

O assunto central é simples e cheio de encantamento: abrir o programa e olhar para ele sem medo. Como o Maya tem muitos botões e isso pode assustar, o professor vai usar um "kit travado", ou seja, uma área de trabalho preparada com antecedência que mostra apenas os pouquíssimos botões que vamos usar este ano. Assim a criança não se perde no mar de menus e foca no que importa: a grande janela escura do meio, chamada viewport, onde o mundo 3D acontece.

Por que isso importa? Porque criar em 3D é diferente de desenhar no papel. No papel temos só largura e altura. No 3D existe também a profundidade, então dá para girar em volta de um objeto e ver a frente, o lado e as costas. Entender que o Maya é uma "janela mágica" para esse mundo é a base de tudo que vem nas próximas sete aulas, até o projeto do mês: um brinquedo 3D que vai virar parte de um jogo no Roblox.

Nesta primeira hora ninguém precisa construir nada complicado. As crianças vão abrir o programa, apontar para onde fica a viewport, descobrir que ali dá para mexer a câmera e olhar em volta, e sair da aula sabendo o nome do programa, animadas para a próxima. O foco é o encantamento e a familiaridade, não a técnica.`,
  materiais: [
    `Computadores ligados, um por criança (ou em duplas), com o Maya já aberto e o projeto/kit travado carregado antes da aula começar`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar cada passo na tela cheia`,
    `O kit travado do curso: um arquivo de cena do Maya salvo com a área de trabalho simplificada e a viewport bem visível`,
    `Crachás ou etiquetas com os nomes das crianças, e adesivos/estrelinhas para premiar quem participa`,
    `Cartões ilustrados impressos mostrando o ícone do Maya e exemplos de filmes e jogos feitos em 3D`,
    `Folhas de papel em branco e lápis de cor para o exercício de desenho`,
    `Um mouse extra de reserva e fones desligados (volume baixo) para evitar distração com sons do sistema`,
  ],
  conceitosChave: [
    `Maya — o programa de computador que a gente usa para criar bonecos e mundos em 3D, igual aos profissionais de filmes e jogos.`,
    `3D — quando uma coisa tem frente, lado e costas, e dá para girar em volta dela, diferente de um desenho no papel que é só chapado.`,
    `Viewport — a janela grande e escura no meio da tela, o "aquário mágico" onde o mundo 3D aparece e a gente vê tudo.`,
    `Câmera — os nossos olhos dentro do computador; quando ela mexe, parece que estamos andando em volta do objeto.`,
    `Ícone — o desenhinho colorido que a gente clica para abrir o programa, como um botão de ligar.`,
    `Kit travado — a tela arrumada pelo professor que mostra só os botões certos, para ninguém se perder no meio de tantos.`,
    `Profissional — a pessoa adulta que trabalha de verdade fazendo filmes e jogos usando esse mesmo programa.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base tecnica)

O Maya, da Autodesk, é um software profissional de modelagem, animação e renderização em 3D. Ele é robusto e cheio de painéis, o que intimida iniciantes, então a nossa estratégia o ano todo é o "kit travado": uma cena pré-configurada que você abre antes da aula, deixando à mostra apenas a viewport e dois ou três controles. Você não precisa dominar o Maya para dar esta aula; precisa apenas saber abrir o arquivo e mexer a câmera.

A peça central é a viewport: a grande área escura central onde a cena 3D é exibida. Nela você navega com a tecla Alt do teclado combinada com o mouse. Alt + botão esquerdo do mouse gira a câmera em volta (orbitar). Alt + botão do meio arrasta a câmera de lado (panorâmica). O scroll (rodinha) dá zoom de aproxima e afasta. Decore só isto: Alt + esquerdo gira. É o gesto-estrela da aula. O resto é demonstração e encantamento.

No topo do Maya há a barra de menus; à esquerda, a Toolbox; à direita, o Channel Box e o Outliner. Nesta aula, ignore tudo isso. Aponte para a viewport e diga que ali mora o mundo 3D. Tenha o arquivo do kit aberto em todas as máquinas antes de as crianças sentarem.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Maya)

Aquecimento (10 min): receba a turma sentada longe dos computadores. Mostre os cartões com cenas de filmes e jogos 3D e pergunte: "vocês sabem como isso é feito?". Conte o segredo: existe um programa chamado Maya, e hoje vamos abri-lo. Mostre o ícone do Maya no projetor.

Conteúdo novo guiado (15 min): no seu computador, com o projetor ligado, mostre a tela do Maya já aberta. Aponte devagar para a viewport: "esta janela escura é o aquário mágico". Faça Alt + botão esquerdo e gire a câmera bem devagar, dizendo "olha, estou andando em volta!". Repita duas ou três vezes. Mostre o zoom com a rodinha. Não abra menus nem crie objetos.

Mão na massa (25 min): leve as crianças aos computadores, onde o Maya já está aberto no kit travado. Peça que coloquem a mão na viewport (apontem com o dedo na tela). Depois ensine o gesto: segurar Alt e arrastar com o botão esquerdo para girar. Passe de mesa em mesa. A meta é simples: cada criança consegue mexer a câmera e olhar em volta. Comemore cada giro.

Desafio + compartilhar (10 min): proponha "encontre o melhor anglo do objeto e congele aí". Cada criança gira e para onde achar mais legal. Faça uma rodinha rápida: cada um diz uma palavra sobre o que sentiu. Reforce o nome "Maya" antes de encerrar.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Chame a viewport de "aquário mágico" ou "janela mágica": a gente espia lá dentro um mundo que não é de papel. Explique o 3D com um brinquedo real na mão: "no papel o desenho é chapado; este ursinho tem frente, lado e costas, dá para virar". Diga que a câmera são "os nossos olhos dentro do computador" e girar é "andar em volta sem sair da cadeira". Apresente o Maya como "o programa dos profissionais", o mesmo dos filmes que elas amam, para gerar orgulho e empolgação.

## Erros comuns e como ajudar

O erro mais comum é apertar muitos botões e bagunçar a tela; por isso usamos o kit travado, mas se acontecer, tenha o arquivo salvo para reabrir em segundos. Outro erro: esquecer de segurar o Alt e clicar direto, selecionando coisas sem querer; pause, mostre a tecla Alt com o dedo e faça junto. Crianças menores podem ter dificuldade de coordenar tecla mais mouse; deixe-as em dupla, uma segura o Alt, a outra arrasta. Se alguém ficar frustrado, gire você a câmera e deixe a criança só observar primeiro. Evite explicar palavras técnicas demais; uma criança que sai sabendo o nome "Maya" e que girou a câmera já teve uma aula de sucesso.`,
  exercicios: [
    {
      titulo: `Cadê o aquário mágico?`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Com o Maya aberto no kit travado em cada máquina, peça que as crianças apontem na tela onde fica a janela grande e escura do meio. Passe de mesa em mesa confirmando. Não deixe ninguém clicar em botões ainda.`,
      atividade: `Coloque o dedinho na tela em cima da janela escura grande do meio, o nosso aquário mágico, e diga em voz alta: "achei!".`,
      gabarito: `A criança aponta para a viewport, a área escura central do Maya (não para os menus de cima nem para os painéis das laterais). Acertou quando aponta para o meio da tela.`,
    },
    {
      titulo: `Jogo do girador de câmera`,
      tipo: `jogo`,
      tempo: `8 min`,
      guiaProfessor: `Ensine o gesto Alt + botão esquerdo do mouse para girar a câmera. Transforme em jogo: você fala "gira!" e todos giram; fala "para!" e todos congelam. Repita variando a velocidade. Premie com adesivo quem segura o Alt corretamente.`,
      atividade: `Quando o professor falar "gira!", segure a tecla Alt e arraste o mouse para girar a câmera. Quando falar "para!", solte e fique parado. Vamos lá: gira, para, gira, para!`,
      gabarito: `A câmera gira em volta do objeto na viewport quando a criança segura Alt e arrasta. Acertou quando a imagem na tela muda de ângulo (frente, lado, costas) e para quando o professor manda.`,
    },
    {
      titulo: `Roda do "para que serve o Maya?"`,
      tipo: `roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Reúna a turma em roda longe dos computadores. Mostre os cartões de filmes e jogos 3D. Pergunte o que o Maya faz e quem usa. Conduza com calma, valorize cada resposta, e feche reforçando que é o "programa dos profissionais".`,
      atividade: `Olhe os cartões e responda em voz alta: o Maya serve para fazer o quê? Quem usa esse programa no trabalho de verdade?`,
      gabarito: `Respostas certas dizem que o Maya serve para criar bonecos, personagens e mundos em 3D para filmes e jogos, e que profissionais (adultos que trabalham com isso) usam o programa. Vale qualquer resposta que ligue Maya a fazer filmes/jogos em 3D.`,
    },
    {
      titulo: `Desenhe a janela mágica`,
      tipo: `desenho/papel`,
      tempo: `12 min`,
      guiaProfessor: `Distribua papel e lápis de cor. Peça que desenhem a tela do Maya destacando a viewport. Não cobre precisão técnica; o objetivo é fixar que existe uma janela central onde o mundo 3D aparece. Circule ajudando quem trava.`,
      atividade: `Desenhe a tela do computador com o Maya. No meio, desenhe bem grande o aquário mágico (a janela escura) e, dentro dela, um objeto 3D que você imagina. Pinte do seu jeito.`,
      gabarito: `O desenho mostra uma tela com uma janela central em destaque (a viewport) contendo algum objeto. Acertou quando a criança coloca a "janela mágica" no meio do desenho, mesmo que de forma simples.`,
    },
    {
      titulo: `Desafio do melhor ângulo`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `Proponha que cada criança gire a câmera com Alt + botão esquerdo e pare no ângulo que achar mais bonito do objeto. Depois faça uma volta rápida: cada um mostra a tela e diz por que escolheu aquele ângulo. Aplauda todos.`,
      atividade: `Gire a câmera com o Alt e o mouse e ache o ângulo mais legal do objeto. Quando achar, congele aí e mostre para a turma: por que você gostou desse jeito de ver?`,
      gabarito: `A criança consegue girar a câmera sozinha, para num ângulo escolhido e explica a escolha com uma palavra ou frase curta. Acertou quando navega a viewport de forma intencional e justifica o ângulo, mostrando frente, lado ou costas diferentes do início.`,
    },
  ],
};
