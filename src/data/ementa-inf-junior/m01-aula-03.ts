import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Conhecendo o teclado",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança reconhece as principais teclas do teclado (letras, números, barra de espaço, Enter, Backspace, Shift e setas), sabe para que cada uma serve e consegue digitar o próprio nome na tela.`,
  descricao: `O teclado é a ferramenta que a criança usa para conversar com o computador escrevendo. Nesta aula ela vai conhecer o teclado de perto: vai descobrir que as letras não estão em ordem de A a Z (estão espalhadas), que existem números em cima e também do lado, e que algumas teclas grandes e especiais fazem coisas importantes. O objetivo não é digitar rápido (isso só chega nas aulas 7 e 8), e sim entender o que cada tecla faz e perder o medo de apertar.

Nessa idade, de 5 a 9 anos, muitas crianças ainda estão aprendendo as letras ou lendo pouco. Por isso o teclado pode parecer um monte de quadradinhos confusos. A aula trata o teclado como um mapa: a gente vai mostrando onde fica cada parte, dando nomes fáceis e brincando de achar as teclas. Encontrar uma letra vira uma caçada ao tesouro, e isso deixa a atividade leve e divertida.

Vamos trabalhar a localização das letras e dos números, a barra de espaço (que separa as palavras), o Enter (que pula linha ou confirma), o Backspace (que apaga o último caractere, andando para trás), o Shift (que faz a letra maiúscula e aparecer aquele símbolo de cima da tecla) e as setas (que movem o cursor sem apagar nada). No final, cada criança vai escrever o próprio nome, que é a palavra mais especial e motivadora para ela.

Esta aula constrói a base das próximas: saber onde ficam as teclas e o que cada uma faz prepara o terreno para falar de postura das mãos (aula 7) e dos jogos de digitação (aula 8). Aqui a meta é familiaridade e confiança, com muita demonstração e mão na massa.`,
  materiais: [
    `Um computador ligado por aluno (até 10), com o Windows na área de trabalho e o teclado limpo e funcionando.`,
    `O programa Bloco de Notas aberto em tela cheia em cada computador (caminho: menu Iniciar, digitar Bloco de Notas, clicar para abrir). Aumente a fonte em Formatar, Fonte, tamanho 36 ou maior, para a criança enxergar bem.`,
    `Um teclado de verdade (pode ser um avulso, desligado) ou um teclado grande impresso em papel para o professor mostrar para a turma toda.`,
    `Cartões ou etiquetas coloridas para marcar as teclas especiais: uma cor para Enter, outra para a barra de espaço, outra para Backspace e outra para Shift.`,
    `Folhas impressas com o desenho de um teclado em branco (sem letras) para a atividade de desenho, e lápis de cor.`,
    `Crachás ou etiquetas com o nome de cada criança, em letra grande, para servirem de modelo na hora de digitar o próprio nome.`,
    `Uma estrela, carimbo ou adesivo para premiar quem completar o desafio do nome.`,
  ],
  conceitosChave: [
    `Teclado — a pecinha cheia de botõezinhos que a gente aperta para escrever letras e números na tela.`,
    `Barra de espaço — a tecla mais comprida, lá embaixo; ela dá um espaço e separa uma palavra da outra.`,
    `Enter — a tecla grande do lado direito; ela pula para a linha de baixo ou confirma o que você fez, como dizer 'pronto'.`,
    `Backspace — a tecla que apaga a última letrinha digitada, andando para trás como uma borracha.`,
    `Shift — a tecla que você segura junto com a letra para ela ficar GRANDE (maiúscula).`,
    `Setas — as quatro setinhas que movem o cursor para cima, baixo, esquerda e direita sem apagar nada.`,
    `Cursor — o risquinho que pisca na tela mostrando onde a próxima letra vai aparecer.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria simples + a base técnica do assunto)

O teclado é um dispositivo de entrada: serve para a pessoa mandar informação para dentro do computador. Cada tecla envia um sinal, e o que aparece na tela é o resultado desse sinal. As letras seguem o padrão QWERTY (esse é o nome das primeiras seis letras da linha de cima), e não a ordem do alfabeto, porque esse arranjo foi herdado das máquinas de escrever. Para a criança, basta saber que as letras estão espalhadas e que a gente procura cada uma.

As teclas se dividem em grupos: as letras no centro; os números na linha de cima e também no teclado numérico à direita (em alguns teclados pequenos ele não existe); a barra de espaço bem comprida embaixo; e as teclas especiais. As principais especiais são: Enter (pula linha ou confirma), Backspace (apaga para trás, fica acima do Enter, costuma ter uma seta apontando para a esquerda), Shift (deixa a letra maiúscula enquanto segurada; tem uma de cada lado, com uma seta para cima) e as quatro setas (movem o cursor). O cursor é o tracinho que pisca indicando onde a próxima letra vai cair.

## Passo a passo da aula (o que fazer e dizer, seguindo o ritmo 10/15/25/10)

1. Aquecimento (10 min): receba a turma e relembre o mouse da aula passada. Pergunte: 'Quem lembra o que o mouse faz?'. Depois levante o teclado e diga: 'Hoje vamos conhecer o amigo do mouse, o teclado, que serve para escrever na tela'. Deixe cada um passar a mão no teclado e apertar uma tecla qualquer.

2. Conteúdo novo guiado (15 min): com o teclado grande (de verdade ou impresso) na frente da turma, mostre os grupos um por um. Aponte as letras: 'Olha, elas estão bagunçadas, não em ordem de A a Z'. Mostre os números em cima e do lado. Aperte a barra de espaço e diga 'isso dá um espaço entre as palavras'. Mostre o Enter ('pula para a linha de baixo'), o Backspace ('apaga para trás, como borracha'), o Shift ('seguro junto com a letra e ela fica GRANDE') e as setas ('andam sem apagar'). Cole as etiquetas coloridas nessas teclas especiais.

3. Mão na massa (25 min): cada criança vai ao seu computador com o Bloco de Notas aberto em fonte grande. Peça para apertarem qualquer letra e verem ela aparecer. Depois conduza: 'Aperte a barra de espaço e veja o buraquinho'; 'Aperte Enter e olha, pulou linha'; 'Aperte Backspace e a letra some'. Por fim, mostre o crachá com o nome e ajude cada um a digitar o próprio nome, letra por letra, usando o Shift na primeira.

4. Desafio e compartilhar (10 min): quem terminou o nome tenta digitar também o nome de um colega ou da família. No final, cada um mostra a tela e lê em voz alta o que escreveu. Dê a estrelinha de prêmio.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Chame o teclado de 'piano de letras': cada tecla toca uma letra na tela. Diga que a barra de espaço é o 'pula-pula entre as palavras'. O Enter é o botão 'pronto' ou 'desce a escada'. O Backspace é a 'borracha mágica que anda para trás'. O Shift é o 'botão gigante': segura ele e a letra cresce. As setas são os 'pezinhos do cursor', que andam sem bagunçar nada. Use sempre o gesto: aponte, aperte e mostre o que aconteceu na tela.

## Erros comuns e como ajudar

Procurar a letra na ordem do alfabeto: lembre que estão espalhadas e brinque de caçar. Soltar o Shift cedo demais e a letra sair pequena: peça para segurar até a letra aparecer. Confundir Enter com Backspace: marque com cores diferentes e repita o nome de cada uma. Segurar a tecla e encher a tela de letras repetidas: ensine 'aperta e solta rapidinho'. Apertar Caps Lock sem querer e tudo ficar maiúsculo: mostre a luzinha acesa e aperte de novo para apagar. Frustração por não achar a letra do nome: fique do lado e aponte com o dedo, deixando a criança apertar.`,
  exercicios: [
    {
      titulo: `Caçada às teclas`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Reúna a turma em frente ao teclado grande (de verdade ou impresso). Explique que vamos brincar de caçar teclas. Fale o nome de uma tecla e quem achar primeiro levanta a mão e aponta. Comece pelas fáceis (a barra de espaço, que é a maior) e depois vá para letras. Elogie todo mundo que tentar, mesmo se errar.`,
      atividade: `O professor diz: 'Cadê a barra de espaço?'. Você procura no teclado e aponta. Depois ele pede: 'Cadê o Enter?', 'Cadê a letra A?', 'Cadê o número 5?'. Aponte cada uma com o dedo.`,
      gabarito: `A criança aponta corretamente: a barra de espaço é a tecla mais comprida embaixo; o Enter fica à direita das letras; o A fica na fileira do meio, perto da esquerda; o 5 fica na linha de números em cima (ou no teclado numérico). Acertou se localizou a tecla certa, mesmo que demore um pouco.`,
    },
    {
      titulo: `Letra na tela`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Leve cada criança ao seu computador com o Bloco de Notas aberto em fonte grande. Mostre primeiro você: aperte uma letra e diga 'olha, apareceu na tela'. Peça para elas apertarem letras à vontade e observarem. Passe nas mesas ajudando quem não vê o cursor piscando.`,
      atividade: `Aperte qualquer letra no teclado e veja ela aparecer na tela. Aperte mais letras, uma de cada vez, devagar. Depois aperte a barra de espaço e veja o espaço que ela faz entre as letras.`,
      gabarito: `As letras apertadas aparecem na tela na mesma ordem em que foram digitadas, e a barra de espaço cria um espaço em branco entre elas. Acertou quem percebeu a relação entre apertar a tecla e a letra surgir na tela.`,
    },
    {
      titulo: `Apaga e pula linha`,
      tipo: `Jogo`,
      tempo: `10 min`,
      guiaProfessor: `Transforme o uso do Backspace e do Enter em um joguinho de comandos, estilo 'mestre mandou'. Demonstre cada um antes: aperte Backspace e mostre a letra sumindo; aperte Enter e mostre o cursor pulando para a linha de baixo. Depois vá dando os comandos para a turma toda fazer junto. Marque essas teclas com etiquetas coloridas para facilitar.`,
      atividade: `Escreva três letras na tela. Agora siga o professor: 'Aperta Backspace' (uma letra some), 'Aperta Backspace de novo' (some outra). Depois escreva uma letra e 'Aperta Enter' (o risquinho pula para a linha de baixo). Repita o que o professor mandar.`,
      gabarito: `Cada toque no Backspace apaga a última letra (andando para trás), e cada toque no Enter move o cursor para uma nova linha abaixo. Acertou quem apagou as letras na ordem certa e fez o cursor pular de linha quando pediram o Enter.`,
    },
    {
      titulo: `Meu teclado colorido`,
      tipo: `Desenho`,
      tempo: `12 min`,
      guiaProfessor: `Entregue a folha com o desenho do teclado em branco e os lápis de cor. Combine as cores na lousa: Enter de vermelho, barra de espaço de azul, Backspace de verde, Shift de amarelo. Mostre no teclado grande onde fica cada uma antes de eles pintarem. Ajude quem ainda não localiza, apontando na folha.`,
      atividade: `Na sua folha de teclado, pinte: o Enter de vermelho, a barra de espaço de azul, o Backspace de verde e o Shift de amarelo. Capriche e não deixe nenhuma faltar.`,
      gabarito: `As quatro teclas especiais estão pintadas nas posições certas e nas cores combinadas: Enter (vermelho) à direita das letras, barra de espaço (azul) comprida embaixo, Backspace (verde) acima do Enter, Shift (amarelo) nas pontas da fileira de baixo das letras. Acertou quem pintou cada tecla no lugar correto, mesmo sem perfeição no traço.`,
    },
    {
      titulo: `Eu escrevo meu nome`,
      tipo: `Desafio`,
      tempo: `12 min`,
      guiaProfessor: `Este é o ponto alto da aula. Entregue o crachá com o nome da criança como modelo. Mostre como usar o Shift na primeira letra para ela ficar maiúscula: 'Segura o Shift e aperta a letra ao mesmo tempo'. Acompanhe letra por letra, apontando no crachá e no teclado. Para quem terminar rápido, proponha digitar o nome de um colega. Comemore cada nome pronto com a estrelinha.`,
      atividade: `Olhe o seu crachá. Digite o seu nome no Bloco de Notas, uma letra de cada vez. Na primeira letra, segure o Shift para ela ficar GRANDE. Use a barra de espaço se o seu nome tiver duas partes. Quando terminar, levante a mão e leia para o professor.`,
      gabarito: `O nome aparece na tela igual ao do crachá, com a primeira letra maiúscula (feita com o Shift) e as demais minúsculas. Exemplos de acerto: 'Ana', 'Lucas', 'Maria Clara' (com espaço entre os nomes). Acertou quem digitou o nome corretamente, mesmo que tenha precisado de ajuda para achar alguma letra.`,
    },
  ],
};
