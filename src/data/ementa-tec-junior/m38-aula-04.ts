import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Montando a ponte com blocos",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Conectar de verdade o resultado da IA a uma reação do personagem ou do cenário, fazendo o primeiro "liga e funciona" e salvando essa versão como base do protótipo.`,
  descricao: `Hoje é o dia em que tudo se junta! Nas aulas anteriores as crianças descobriram onde a IA mora no jogo, treinaram a primeira inteligência no ML for Kids e trouxeram esse cérebro treinado para perto do projeto. Agora chegou o momento mais esperado: montar a ponte. A ponte é a conexão que liga o que a IA decide a algo que acontece na tela. Quando a IA reconhece uma coisa, o personagem reage; quando reconhece outra, o cenário muda. É o famoso "liga e funciona".

No ML for Kids essa ponte é montada com blocos, parecidos com peças que se encaixam (como no Scratch). Cada bloco é uma frase do tipo "se a IA disser tal coisa, então faça tal reação". As crianças vão arrastar os blocos para a área de montagem, encaixá-los na ordem certa e apertar o botão verde para ver a mágica acontecer. Pela primeira vez a IA vai comandar algo de verdade: um som, uma fala, um movimento ou uma troca de cor.

O foco da aula é o "mão na massa": demonstrar primeiro no projetor, devagar, e depois deixar cada criança montar a própria ponte ao lado do professor. Não estamos treinando a IA de novo (isso já foi feito) nem deixando ela mais esperta ainda (isso vem nas próximas semanas). Estamos só ligando os fios pela primeira vez e comemorando quando funciona.

Como a turma tem no máximo dez alunos, dá tempo de acompanhar a montagem de cada um com calma. Ao final, cada criança salva essa primeira versão conectada. Essa versão é a base do protótipo do mês: a partir daqui só vamos testar, ajustar e melhorar. É um momento de orgulho: a IA que eles treinaram agora obedece a um comando que eles mesmos montaram.`,
  materiais: [
    `Computadores com o ML for Kids aberto, cada um já com o projeto e o modelo treinado da criança carregado`,
    `Projetor ou TV ligado ao computador do professor para demonstrar a montagem dos blocos passo a passo`,
    `Um projeto de exemplo pronto, com a ponte de blocos já montada, para o professor mostrar funcionando`,
    `Logins do ML for Kids de cada criança testados antes da aula (verificar que o modelo aparece como "treinado")`,
    `Microfone ou webcam funcionando, caso o modelo da turma use som ou imagem para reconhecer`,
    `Conexão de internet estável e testada antes do início da aula`,
    `Folha de "minha ponte" impressa (um se... então... em branco) para a criança planejar antes de montar (opcional)`,
  ],
  conceitosChave: [
    `Ponte — a ligação que conecta o que a IA decide a uma reação que acontece na tela do jogo.`,
    `Bloco — uma pecinha que se encaixa em outra, como peça de montar, e que carrega um comando do jogo.`,
    `Encaixar — juntar um bloco no outro, na ordem certa, para que o comando funcione de cima para baixo.`,
    `Se... então... — a regra mágica da ponte: "se a IA disser tal coisa, então faça tal reação".`,
    `Reconhecer — quando a IA olha algo novo e diz a qual grupo ele se parece mais.`,
    `Reação — o que acontece na tela quando a IA reconhece: um som, uma fala, um movimento ou uma cor.`,
    `Salvar — guardar o projeto para que a ponte montada não se perca e vire a base do protótipo.`,
  ],
  treinamento: `## O que o professor precisa saber

Montar a ponte no ML for Kids é mais fácil do que parece, e você não precisa entender de programação avançada. Depois de treinar um modelo, o ML for Kids oferece o botão "Make" (Fazer) e, dentro dele, a opção "Scratch". Ao abrir, você entra no editor de blocos: à esquerda fica a lista de blocos (as peças coloridas) e à direita a área de montagem, onde as peças se encaixam. O modelo treinado pela criança aparece como um bloco especial roxo chamado "recognise" (reconhecer). A ponte é simplesmente um bloco "se... então..." que, quando o "recognise" devolve um rótulo, dispara uma reação. Antes da aula, abra o projeto de exemplo e monte a ponte você mesmo uma vez, para conhecer onde cada bloco mora. Confirme que cada modelo da turma aparece como "treinado" e que microfone ou webcam funcionam, caso o modelo use som ou imagem.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Reúna a turma de frente para o projetor. Relembre: "Vocês treinaram um cérebro de IA e trouxeram ele para perto do jogo. O que falta?". Conduza até a resposta: falta ligar! Mostre dois blocos de montar de verdade na mão e encaixe um no outro: "Hoje a gente vai encaixar peças assim, mas na tela, para a IA comandar o jogo."

15 min — Conteúdo novo guiado (demonstração). No seu computador, com o projeto de exemplo aberto, clique no botão "Make" (Fazer) e depois em "Scratch". No editor, mostre à esquerda o bloco roxo do modelo, o "recognise" (reconhecer). Arraste para a área de montagem um bloco de controle "if... then" (se... então). Encaixe dentro do "se" o bloco "recognise" e escolha um rótulo (por exemplo, o nome de um dos grupos que a IA aprendeu). Dentro do "então", encaixe uma reação simples: um bloco "say" (dizer) ou "play sound" (tocar som). Aperte a bandeira verde no topo e mostre a IA reconhecendo e reagindo. Narre cada passo em voz alta e devagar.

25 min — Mão na massa. Chame uma criança de cada vez (ou vá de mesa em mesa). Conduza-a pelos mesmos passos: "Make", depois "Scratch", arrastar o "se... então...", encaixar o "recognise" no "se" e uma reação no "então". Deixe a própria criança arrastar e encaixar os blocos; só guie com o dedo onde soltar. Quando ela apertar a bandeira verde e a IA reagir, comemore com a turma. Enquanto uma criança monta, peça às outras que planejem na folha qual "se... então..." vão fazer. No fim, cada criança clica em "File" (Arquivo) e "Save" (Salvar) para guardar a primeira versão conectada.

10 min — Desafio e compartilhar. Cada criança mostra a própria ponte funcionando no projetor e diz a frase dela: "Se a IA disser ___, então o jogo faz ___". O desafio é trocar a reação por outra (de "dizer" para "tocar som", por exemplo) e ver mudar. Encerre dizendo que essa versão salva é a base do protótipo do mês.

## Como explicar para crianças

Use a analogia da ponte de verdade: "De um lado da ponte está a IA pensando; do outro lado está o jogo esperando. Os blocos são as tábuas da ponte que ligam os dois." Use também o controle de TV: "Quando você aperta um botão, a TV obedece. Aqui, quando a IA reconhece, o jogo obedece." Mostre os blocos encaixando e diga: "A peça de cima manda na de baixo, igualzinho às peças de montar." Repita a frase mágica em voz alta com a turma: "Se... então...". Quando a bandeira verde fizer a IA reagir, diga: "Olha! Vocês acabaram de construir uma ponte que funciona!".

## Erros comuns e como ajudar

O erro mais comum é a criança soltar o bloco "recognise" fora do encaixe do "se"; ele fica solto e nada acontece. Ajude mostrando o contorno amarelo que aparece quando a peça vai encaixar certo. Outro erro é esquecer de apertar a bandeira verde: sem ela, a ponte não roda. Algumas crianças escolhem um rótulo que não existe no modelo; confira se o nome do grupo bate com o que a IA aprendeu. Se nada reagir, verifique se o microfone ou a webcam estão ligados, caso o modelo use som ou imagem. E lembre todo mundo de salvar no fim: peça que cliquem em "File" (Arquivo) e "Save" (Salvar) antes de levantar da cadeira, para a ponte não se perder.`,
  exercicios: [
    {
      titulo: `O que é uma ponte?`,
      tipo: `Pergunta oral em roda`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça no aquecimento, antes da demonstração. Segure dois blocos de montar de verdade e encaixe um no outro enquanto pergunta. Aceite respostas parecidas e elogie cada tentativa; o objetivo é a turma entender que ponte é ligação.`,
      atividade: `Pergunte para a turma: "A IA já está treinada e o jogo está pronto. O que a 'ponte' faz entre os dois?". Deixe as crianças responderem em voz alta.`,
      gabarito: `A ponte é a ligação que conecta o que a IA decide a uma reação na tela do jogo. Sem a ponte, a IA pensa mas o jogo não obedece. Resposta certa: a ponte liga a IA ao jogo.`,
    },
    {
      titulo: `Planeje o seu "se... então..."`,
      tipo: `Atividade individual de planejamento`,
      tempo: `6 minutos`,
      guiaProfessor: `Enquanto as crianças esperam a vez de montar no computador, peça que cada uma preencha a folha "minha ponte". Incentive escolhas simples: um rótulo que a IA já aprendeu e uma reação fácil (dizer algo ou tocar um som). Anote para não esquecerem na hora.`,
      atividade: `Complete a frase no papel: "Se a IA disser ______, então o jogo vai ______". Escolha um grupo que a sua IA já aprendeu e uma reação que você gostaria de ver.`,
      gabarito: `Qualquer frase válida em que o "se" use um rótulo que o modelo aprendeu e o "então" descreva uma reação simples (por exemplo: "Se a IA disser feliz, então o jogo vai tocar uma música alegre"). O importante é o par estar completo: uma condição e uma reação.`,
    },
    {
      titulo: `A ordem certa dos blocos`,
      tipo: `Jogo de ordenar (sequência)`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre os passos embaralhados no quadro ou no projetor. Peça que a turma os coloque na ordem certa, apontando. Faça junto, reforçando o caminho. Serve como revisão antes de cada criança montar a própria ponte.`,
      atividade: `Coloque estes passos na ordem certa de montar a ponte: (A) apertar a bandeira verde para rodar; (B) clicar em "Make" e depois em "Scratch"; (C) encaixar uma reação no "então"; (D) arrastar o bloco "se... então..." para a área; (E) encaixar o "recognise" no "se".`,
      gabarito: `A ordem correta é: B (abrir o "Make" e o "Scratch"), depois D (arrastar o "se... então..."), depois E (encaixar o "recognise" no "se"), depois C (encaixar a reação no "então") e por fim A (apertar a bandeira verde). Assim a ponte fica montada e funciona.`,
    },
    {
      titulo: `Monte a sua ponte de verdade`,
      tipo: `Mão na massa guiada (prática real)`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o coração da aula. Sente-se ao lado de cada criança e conduza o caminho completo: "Make", "Scratch", arrastar o "se... então...", encaixar o "recognise" no "se" e uma reação no "então". Deixe a própria criança arrastar e encaixar; só guie com o dedo onde soltar. Confirme o encaixe pelo contorno amarelo antes de apertar a bandeira verde.`,
      atividade: `Com o professor do seu lado, monte a sua ponte: clique em "Make" e "Scratch", arraste o bloco "se... então...", encaixe o bloco "recognise" no "se", encaixe uma reação no "então" e aperte a bandeira verde. Veja a IA comandar o jogo!`,
      gabarito: `O exercício está correto quando, ao apertar a bandeira verde e a IA reconhecer um grupo, a reação acontece na tela (um som toca, o personagem fala ou se move). Sinal de êxito: a ponte "liga e funciona" pela primeira vez.`,
    },
    {
      titulo: `Troque a reação e salve`,
      tipo: `Desafio de alteração e salvamento`,
      tempo: `6 minutos`,
      guiaProfessor: `Depois que a ponte funcionou, proponha o desafio de trocar a reação para mostrar que dá para mudar o resultado sem refazer tudo. Em seguida, garanta que cada criança salve. Acompanhe o clique em "File" (Arquivo) e "Save" (Salvar) de cada um; é a base do protótipo do mês e não pode se perder.`,
      atividade: `Troque a reação do seu "então" por outra (por exemplo, de "dizer" para "tocar som"), aperte a bandeira verde para ver a mudança e depois salve o projeto em "File" e "Save". Mostre a sua ponte nova para a turma.`,
      gabarito: `O desafio é cumprido quando a criança troca a reação, roda de novo com a bandeira verde e a IA dispara o novo resultado, e por fim salva o projeto. Sinal de êxito: a versão conectada fica guardada e vira a base do protótipo, pronta para testar e melhorar nas próximas aulas.`,
    },
  ],
};
