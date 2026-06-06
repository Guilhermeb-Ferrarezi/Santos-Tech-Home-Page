import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Explorando o mundo com o Earth",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Explorar pontos famosos do planeta no Google Earth usando o Street View e a ferramenta de régua, montando um roteiro pessoal de três lugares incríveis com o que cada aluno descobriu.`,
  descricao: `Na aula passada o aluno deu o primeiro giro pelo planeta em 3D e aprendeu a girar, aproximar e afastar o globo. Agora ele vai mais fundo: em vez de só olhar de cima, vai descer até o chão com o Street View, andar virtualmente por uma rua de Paris ou pela beira do Grand Canyon, e medir distâncias reais com a ferramenta de régua. O Google Earth deixa de ser um mapa bonito e vira uma máquina de viagens.

A ideia central é que o aluno perceba que dá para visitar o mundo sem sair da cadeira. Ele vai pesquisar lugares pelo nome na barra de busca (a famosa "lupa"), pousar sobre montanhas como o Everest, monumentos como a Torre Eiffel e a Estátua da Liberdade, e até planar sobre oceanos. Em cada parada, o objetivo é observar, comparar tamanhos e anotar uma curiosidade. A exploração vira investigação: o que é maior, o que fica mais perto, o que mais impressiona.

Duas ferramentas novas aparecem nesta aula. O Street View, representado pelo boneco amarelo (o "Pegman"), permite olhar a 360 graus a partir do nível da rua, como se o aluno estivesse parado ali. E a régua (ícone de régua na barra lateral) mede a distância em linha reta entre dois pontos, em metros ou quilômetros. Juntas, elas transformam números abstratos de geografia em algo que o adolescente sente: "uau, daqui até lá são 8 mil quilômetros".

No fim, cada aluno monta um pequeno roteiro de três lugares incríveis, registrando o nome de cada um, uma curiosidade e uma medida feita com a régua. Esse roteiro é a entrega da aula e prepara o terreno para a próxima semana, quando a turma passa do Earth para o Google Maps, trocando a viagem de descoberta pelo guia prático do dia a dia.`,
  materiais: [
    `Computadores com o Google Earth aberto no navegador (versão web, em earth.google.com), um por aluno`,
    `Contas Google ativas e login feito antes da aula começar`,
    `Projetor ou tela grande para o professor demonstrar cada passo do Earth`,
    `Conexão de internet estável e rápida (o Street View e o globo 3D exigem boa banda)`,
    `Lista impressa ou no quadro com 8 a 10 lugares famosos sugeridos (Torre Eiffel, Everest, Cristo Redentor, Coliseu, Estátua da Liberdade, Grand Canyon, Cataratas do Niágara, Pirâmides do Egito)`,
    `Folha ou documento simples "Meu roteiro de 3 lugares" para o aluno anotar nome, curiosidade e medida`,
    `Fones de ouvido opcionais, caso a turma queira ouvir narrações de pontos turísticos`,
  ],
  conceitosChave: [
    `Barra de busca — campo da lupa onde se digita o nome de um lugar para o Earth voar até ele automaticamente.`,
    `Street View — modo de visão a 360 graus no nível da rua, ativado ao arrastar o boneco amarelo (Pegman) sobre o mapa.`,
    `Pegman — o bonequinho amarelo que representa o Street View; arrastá-lo até uma rua abre a vista do chão.`,
    `Ferramenta de régua — ícone de régua que mede a distância em linha reta entre dois pontos, em metros ou quilômetros.`,
    `Ponto de referência — lugar marcado ou pesquisado que serve de parada no roteiro de exploração.`,
    `Roteiro — lista organizada de lugares que se pretende visitar, aqui com nome, curiosidade e uma distância medida.`,
    `Inclinar a visão — girar a câmera para ver o relevo de lado, percebendo montanhas e prédios em 3D em vez de só de cima.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser geógrafo nem ter viajado o mundo. O Google Earth roda no navegador, em earth.google.com, e salva o trabalho na conta Google. Três recursos resolvem a aula inteira. Primeiro, a barra de busca (a lupa, no canto superior esquerdo): digite o nome de um lugar e aperte Enter para o globo voar até ele. Segundo, o Street View: na coluna de ícones à esquerda existe um boneco amarelo, o Pegman; ao clicá-lo ou arrastá-lo, as ruas com vista de chão ficam destacadas em azul, e soltar o boneco numa rua azul abre a visão 360 graus. Terceiro, a régua: outro ícone na mesma coluna lateral (formato de régua); ao clicá-lo, você dá um clique no ponto de partida e outro no ponto de chegada, e o Earth mostra a distância. Antes da aula, teste você mesmo: busque "Torre Eiffel", entre no Street View na frente dela e meça a distância dela até o rio Sena. Em cinco minutos você domina o necessário.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): no projetor, abra o Earth e busque um lugar marcante, como o Cristo Redentor. Pergunte à turma quem já viajou para longe e o que viu. Conte que hoje todos vão "viajar" pela tela, descendo até o chão das ruas e medindo distâncias reais. Relembre o giro do globo da aula anterior, com clique e arrasto.

Conteúdo guiado (15 min): demonstre devagar, com todos olhando. Mostre a barra de busca (lupa), digite "Torre Eiffel" e aperte Enter; o globo voa até lá. Use a roda do mouse para aproximar e segure a tecla Ctrl arrastando para inclinar a visão e ver a torre de lado, em 3D. Em seguida, apresente o Pegman: clique no boneco amarelo, mostre as ruas que ficam azuis e solte-o numa delas para abrir o Street View; arraste com o mouse para olhar em volta e clique nas setas do chão para "andar". Para sair, use o botão de voltar ou a tecla Esc. Por fim, clique no ícone de régua, dê um clique na base da torre e outro num ponto distante: o Earth mostra a distância. Faça tudo bem devagar, repetindo cada caminho.

Mão na massa (25 min): cada aluno escolhe três lugares da lista (ou outros que queira). Em cada um deve: buscar pelo nome, entrar no Street View pelo menos uma vez, medir uma distância com a régua e anotar na folha "Meu roteiro de 3 lugares" o nome, uma curiosidade e a medida encontrada. Circule pela sala, ajude quem não acha a rua azul do Street View e incentive comparações ("qual dos seus lugares fica mais longe daqui?").

Desafio e compartilhar (10 min): peça que dois ou três alunos mostrem no projetor o lugar favorito do roteiro, abram o Street View ali e digam a distância que mediram. Reforce em voz alta as descobertas mais legais.

## Como explicar de forma clara

Use a linguagem deles. Diga que o Pegman é como entrar dentro do Google Maps e "andar de verdade" pela rua, igual a um jogo em primeira pessoa. Compare a régua a uma fita métrica gigante esticada por cima do planeta. Para inclinar a visão, fale em "olhar de lado, como quando você abaixa a cabeça para ver um prédio inteiro". Repita a missão do dia numa frase: "buscar, descer até a rua, medir e anotar". Transforme cada distância num espanto: "isso é como ir e voltar até outro país".

## Erros comuns e como ajudar

O erro mais comum é não achar onde soltar o Pegman: lembre que só dá para entrar no Street View nas ruas que ficam azuis ao segurar o boneco. Muitos esquecem de dar o segundo clique na régua e acham que ela não funciona; mostre que são dois cliques, um em cada ponto. Alguns ficam "presos" no Street View sem saber sair; ensine a tecla Esc ou o botão de voltar. Há quem digite o lugar errado na busca e ache que o Earth travou; peça para conferir a escrita. Outros aproximam demais e perdem a referência; ensine a afastar com a roda do mouse. E reforce que tudo salva na conta, então ninguém precisa procurar botão de salvar.`,
  exercicios: [
    {
      titulo: `Voar até um ponto famoso`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Conduza a turma toda junta no projetor. Espere todos digitarem e o globo voar antes de seguir. Confira se cada aluno usou a barra de busca (lupa) e não ficou girando o globo à mão.`,
      atividade: `Na barra de busca (lupa), digite "Torre Eiffel" e aperte Enter. Quando o globo voar até lá, aproxime com a roda do mouse e segure Ctrl arrastando para inclinar e ver a torre de lado, em 3D.`,
      gabarito: `O Earth voa até a Torre Eiffel em Paris e o aluno consegue inclinar a visão para ver a torre em 3D, de lado. O caminho correto é digitar o nome na barra de busca e apertar Enter; a inclinação se faz segurando Ctrl e arrastando o mouse.`,
    },
    {
      titulo: `Descer até a rua com o Street View`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Mostre de novo onde fica o Pegman (boneco amarelo) e que as ruas ficam azuis ao arrastá-lo. Ajude quem não acha a rua azul. Ensine a sair com a tecla Esc.`,
      atividade: `Ainda na Torre Eiffel, arraste o boneco amarelo (Pegman) até uma rua que fique azul para abrir o Street View. Olhe em volta arrastando o mouse e use as setas do chão para "andar" alguns passos. Depois saia com a tecla Esc.`,
      gabarito: `O aluno entra no Street View no nível da rua, em frente à torre, consegue girar a visão 360 graus e dar alguns passos pelas setas, e sai com Esc. O Street View só abre quando o Pegman é solto numa rua destacada em azul.`,
    },
    {
      titulo: `Medir uma distância com a régua`,
      tipo: `desafio`,
      tempo: `6 min`,
      guiaProfessor: `Reforce que a régua precisa de dois cliques: um no ponto de partida e outro no de chegada. Mostre onde o Earth exibe o resultado (em metros ou quilômetros). Desafie a comparar com algo conhecido.`,
      atividade: `Clique no ícone de régua na barra lateral. Dê um clique na base da Torre Eiffel e outro no rio Sena, ali perto. Leia a distância que o Earth mostrar e anote o número.`,
      gabarito: `A régua mostra a distância em linha reta entre a torre e o rio (algo em torno de algumas centenas de metros). Considera-se correto quando o aluno deu os dois cliques (partida e chegada) e leu o valor exibido pelo Earth, qualquer que seja o número, desde que coerente com a curta distância.`,
    },
    {
      titulo: `Caça aos lugares em dupla`,
      tipo: `em dupla`,
      tempo: `9 min`,
      guiaProfessor: `Forme duplas. Um aluno escolhe um lugar da lista e mede uma distância; o outro entra no Street View e descreve o que vê. Depois trocam de papel. Circule para garantir o rodízio e comparações.`,
      atividade: `Em dupla, escolham dois lugares diferentes da lista (por exemplo, Coliseu e Estátua da Liberdade). Para cada um, um colega mede uma distância com a régua e o outro abre o Street View e descreve em voz alta uma coisa que vê. Depois troquem de função.`,
      gabarito: `A dupla visita dois lugares, faz pelo menos uma medição com a régua em cada um e abre o Street View descrevendo um detalhe real do ambiente (uma estátua, um prédio, o mar). Espera-se que os dois alunos tenham revezado entre medir e explorar.`,
    },
    {
      titulo: `Meu roteiro de 3 lugares incríveis`,
      tipo: `projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Este é o fechamento e a entrega da aula. Cada aluno monta sozinho seu roteiro de três lugares, registrando nome, curiosidade e medida. No fim, abra uma roda de conversa para 2 ou 3 mostrarem o favorito no projetor e contarem a distância medida.`,
      atividade: `Monte seu roteiro de 3 lugares incríveis. Para cada lugar: busque pelo nome, entre no Street View pelo menos uma vez, meça uma distância com a régua e anote na folha "Meu roteiro de 3 lugares" o nome do lugar, uma curiosidade que descobriu e a distância medida. Escolha o favorito e prepare-se para mostrar à turma.`,
      gabarito: `O roteiro tem exatamente 3 lugares, cada um com nome, uma curiosidade e uma distância medida pela régua. Exemplo: "Everest — é a montanha mais alta do mundo — medi 4 km da base até um vilarejo"; "Coliseu — cabiam 50 mil pessoas — medi 300 m até uma praça"; "Estátua da Liberdade — fica numa ilha — medi 2 km até Manhattan". Na roda de conversa, o aluno apresenta o favorito, abre o Street View nele e diz a distância que mediu.`,
    },
  ],
};
