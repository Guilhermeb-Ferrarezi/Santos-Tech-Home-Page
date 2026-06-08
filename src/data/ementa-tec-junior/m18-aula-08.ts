import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Meu Jogo no Mundo!",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança exporta e publica o seu jogo 2D completo no Construct 3, gera um link ou versão que pode ser jogada por todos e apresenta a criação finalizada para a turma, comemorando o entregável do mês.`,
  descricao: `Esta é a última aula do mês e o grande dia da festa! Durante quatro semanas a turma construiu um jogo 2D inteiro no Construct 3: colocou o herói para se mexer, fez a animação reagir, trouxe os inimigos, programou as colisões, criou a tela de início, montou o placar de recorde e a tela de vitória e deu a reta final nos ajustes. Agora chegou o momento mais esperado: tirar o jogo de dentro do programa e colocar ele no mundo, para que qualquer pessoa possa jogar de verdade.

Publicar é o que transforma um projeto em um jogo de gente grande. Até hoje o jogo só rodava na janela de teste do Construct 3; nesta aula a criança aprende que existe um botão mágico que empacota tudo (cenários, sons, personagens e regras) num pacote pronto para o mundo. É como assar um bolo: a massa estava na tigela e agora vai pro forno e sai um bolo inteiro, que dá para servir para a família. O professor mostra que os profissionais fazem exatamente isso quando colocam um jogo na internet.

O coração da aula é o momento de exportar com a ajuda do professor e ver o jogo ganhar vida fora do programa. Cada criança, sentada ao lado do professor, clica no caminho de exportar, espera o pacote ficar pronto e abre o jogo já publicado para jogar um pouquinho. Esse instante (ver o próprio jogo abrir como um jogo de verdade) é mágico e enche as crianças de orgulho.

A aula termina com o Grande Lançamento: cada aluno apresenta o seu jogo finalizado e publicado para a turma, conta como ele se chama e do que ele gosta no jogo, todo mundo joga um pouquinho e bate muita palma. Assim a turma comemora o entregável do mês (um jogo 2D completo publicado de verdade) e fecha o mês do Construct 3 com a sensação gostosa de dever cumprido.`,
  materiais: [
    `Computadores ligados, um por criança, com o Construct 3 aberto no navegador e o projeto do jogo 2D de cada aluno (montado nas aulas anteriores) já carregado na tela.`,
    `Projetor ou TV grande conectada ao computador do professor, para demonstrar o passo a passo de exportar e para projetar cada jogo no momento da apresentação.`,
    `Conexão com a internet funcionando, já que o Construct 3 roda no navegador e a publicação depende dela.`,
    `Um jogo de exemplo já exportado e publicado pelo professor antes da aula (um link pronto ou um arquivo aberto), para mostrar como fica o jogo no mundo.`,
    `Uma pasta combinada no computador (por exemplo, uma pasta com o nome da turma na Área de Trabalho) para guardar os arquivos exportados.`,
    `Adesivos, estrelinhas ou um "diploma de criador de jogos" de papel para premiar cada apresentação e celebrar a conquista.`,
    `Música alegre e curta para tocar no momento das palmas e deixar o clima de lançamento de festa.`,
  ],
  conceitosChave: [
    `Exportar — tirar o jogo de dentro do programa e transformar ele num pacote pronto, como tirar o bolo do forno.`,
    `Publicar — colocar o jogo no mundo para que outras pessoas possam jogar, igual a abrir a porta da sua casa para os amigos entrarem.`,
    `Link — um endereço mágico que leva direto para o seu jogo, como o endereço da sua casa.`,
    `Projeto — o nosso jogo ainda dentro do Construct 3, com todas as peças que a gente montou.`,
    `Jogo publicado — o jogo já pronto e fora do programa, que qualquer um pode abrir e jogar.`,
    `Apresentar — mostrar a sua criação para os amigos e contar como você fez, igual a um show de talentos.`,
    `Lançamento — a festa de colocar o jogo no mundo pela primeira vez, com palmas e comemoração.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula não cria nada novo dentro do jogo: ela fecha e publica o que já existe. Você precisa saber dois caminhos no Construct 3, que roda no navegador. Primeiro, salvar o projeto: clique no ícone de menu no canto superior esquerdo (as três linhas, chamado "Menu"), vá em "Project" e depois em "Save" (ou "Save as", escolhendo a pasta da turma). Segundo e mais importante, exportar: no mesmo "Menu", clique em "Project" e depois em "Export project". Vai abrir uma janelinha pedindo a plataforma; para crianças, escolha "Web (HTML5)", clique em "Next", deixe as opções padrão, clique em "Next" de novo e em "Export". O Construct 3 prepara o pacote e baixa um arquivo ".zip" com o jogo dentro. Para jogar, descompacte e abra o arquivo "index.html", ou use a opção de pré-visualização publicada que o próprio Construct oferece. Faça você mesmo esse teste em casa, com o jogo de exemplo, antes da aula, para não travar na frente da turma. Lembre-se: nesta idade o professor é quem clica nos botões da exportação; a criança aponta, escolhe e comemora.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar em Construct 3)

Aquecimento (10 min): receba a turma com clima de festa. No projetor, abra o jogo de exemplo já publicado e jogue um pouquinho com a turma. Pergunte: "O que a gente construiu esse mês?". Relembre rapidinho o herói, os inimigos, o placar e a tela de vitória. Diga que hoje é o dia de colocar o jogo no mundo.

Conteúdo novo guiado (15 min): no projetor, mostre primeiro o salvar (ícone de "Menu", "Project", "Save"). Depois mostre o exportar com calma: "Menu", "Project", "Export project", escolha "Web (HTML5)", "Next", "Next" e "Export". Mostre o arquivo ".zip" baixando e abra o jogo já publicado para a turma ver que funciona fora do programa. Repita o caminho do "Export project" duas vezes para grudar na cabeça.

Mão na massa (25 min): cada criança abre o seu projeto e dá uma última conferida (joga uma vez na janela de teste). Passe de mesa em mesa. Quando o aluno disser que está pronto, sente ao lado e exportem juntos: a criança aponta o "Menu", você clica, ela escolhe "Web (HTML5)" e vocês esperam o pacote ficar pronto. Abram o jogo publicado e deixe a criança jogar um pouquinho. Comemore cada exportação com um joinha.

Desafio e compartilhar (10 min): o Grande Lançamento. Cada criança vai à frente, o jogo publicado é projetado, ela diz o nome do jogo e uma coisa que gostou, e a turma joga um pouquinho e bate palma. Entregue o diploma de criador de jogos. Feche dizendo que agora todo mundo tem um jogo de verdade no mundo.

## Como explicar para crianças

Use a ideia de "colocar no mundo" o tempo todo. Exportar é "tirar o bolo do forno": a massa estava na tigela (dentro do programa) e agora sai um bolo inteiro pronto para servir. Publicar é "abrir a porta da casa para os amigos entrarem e jogarem". O link é "o endereço da casa do seu jogo". Evite palavras difíceis como "compilar", "HTML5" ou "build"; fale "empacotar", "deixar pronto" e "colocar no mundo". Na hora de apresentar, diga que é um "lançamento", igual quando um jogo novo chega na loja, e que todos são criadores de jogos de verdade.

## Erros comuns e como ajudar

O erro mais comum é a criança querer mexer no jogo de novo e nunca terminar; combine "só uma última conferida" e parta para o exportar. Outro erro é fechar a janela de exportação no meio; por isso a exportação é feita junto com você, clicando devagar. Às vezes o ".zip" baixa mas a criança não sabe onde foi parar; combine antes a pasta da turma e mostre que ele aparece nos "Downloads". Se o jogo não abrir ao clicar no "index.html", lembre que é preciso descompactar o ".zip" primeiro (tirar tudo de dentro da caixa) antes de abrir. Se a criança ficar tímida no lançamento, apresente junto com ela, segurando a mão e falando a primeira frase.`,
  exercicios: [
    {
      titulo: `A Última Conferida`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Introduza dizendo que todo criador joga o próprio jogo uma última vez antes de lançar, para ver se está tudo certo. Mostre no projetor onde fica o botão de teste do Construct 3 (o ícone de "play" no topo, "Preview"). Peça que cada criança jogue o seu jogo uma vez do início ao fim e confira três coisas: se o herói se mexe, se o inimigo aparece e se a tela de vitória chega.`,
      atividade: `Aperte o botão de jogar (o triângulo de "play" lá em cima) e jogue o seu jogo uma vez inteira. Confira: o seu herói se mexe? O inimigo aparece? Você consegue chegar na tela de vitória? Se algo estiver estranho, chame o professor.`,
      gabarito: `A criança acerta se conseguir abrir a janela de teste com o "Preview" e jogar do começo ao fim, conferindo as três coisas (herói se mexe, inimigo aparece, tela de vitória chega). O professor confirma na tela que o jogo roda sem travar. Se algo falhar, o sucesso é a criança perceber e pedir ajuda.`,
    },
    {
      titulo: `Verdadeiro ou Falso do Lançamento`,
      tipo: `Jogo`,
      tempo: `7 minutos`,
      guiaProfessor: `Conduza como um joguinho de corpo: as crianças levantam os dois braços para "verdadeiro" e cruzam os braços para "falso". Leia frases curtas sobre exportar e publicar. Faça com energia e comemore os acertos, usando cada frase para reforçar os conceitos do dia.`,
      atividade: `Levante os braços se for VERDADE e cruze os braços se for MENTIRA: 1) Exportar é tirar o jogo de dentro do programa, como tirar o bolo do forno. 2) Para publicar o jogo a gente precisa apagar ele. 3) Um jogo publicado pode ser jogado por outras pessoas. 4) O link é o endereço que leva até o seu jogo.`,
      gabarito: `Respostas certas: 1) Verdade. 2) Mentira (a gente publica, nunca apaga). 3) Verdade. 4) Verdade. A turma acerta quando faz os gestos certos e consegue explicar com palavras simples o que é publicar um jogo.`,
    },
    {
      titulo: `Exportando com o Professor`,
      tipo: `Prática guiada na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o exercício principal. Sente ao lado de cada criança (ou faça em duplas, se a turma for maior). Conduza o caminho de exportar passo a passo: a criança aponta o ícone de "Menu", você clica em "Project" e "Export project", ela escolhe "Web (HTML5)", e vocês seguem "Next", "Next" e "Export". Esperem o pacote ".zip" baixar juntos. Abra o jogo publicado e deixe a criança jogar um pouquinho. Celebre cada exportação concluída.`,
      atividade: `Junto com o professor, vamos colocar o seu jogo no mundo! Aponte o menu (as três linhas no canto), escolha "Project" e "Export project", e depois "Web". Espere o pacote ficar pronto. Quando o jogo abrir publicado, jogue um pouquinho e veja a sua criação fora do programa!`,
      gabarito: `A criança acerta quando, com a ajuda do professor, percorre o caminho "Menu" depois "Project" depois "Export project", escolhe "Web (HTML5)" e o arquivo ".zip" é gerado e baixado. A prova final é o jogo abrir publicado (fora da janela de teste) e a criança conseguir jogar nele. Todo aluno deve sair da aula com um jogo exportado.`,
    },
    {
      titulo: `O Cartaz de Lançamento`,
      tipo: `Desenho no papel`,
      tempo: `9 minutos`,
      guiaProfessor: `Entregue uma folha e lápis de cor. Peça que cada criança desenhe o cartaz de lançamento do seu jogo, ou seja, um pôster anunciando o jogo novo, como os que aparecem na loja. Use o desenho para conversar sobre a ideia de publicar e mostrar o jogo para o mundo. Escreva o nome da criança no canto da folha.`,
      atividade: `Faça o cartaz do seu jogo, como um pôster de lançamento! Desenhe o seu herói e o inimigo, escreva (ou peça ajuda para escrever) o nome do jogo bem grande e coloque a frase "JÁ ESTÁ NO MUNDO!" para todo mundo saber que o seu jogo foi publicado.`,
      gabarito: `O desenho acerta quando mostra elementos do jogo (o herói, o inimigo ou o cenário), traz o nome do jogo e a ideia de lançamento (a frase, uma estrela ou um "novo!"). O professor confere se a criança entendeu que publicar é anunciar e mostrar o jogo para o mundo.`,
    },
    {
      titulo: `O Grande Show de Lançamento`,
      tipo: `Desafio e apresentação`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o ponto alto da aula e a comemoração do entregável do mês. Monte um "palco": projete a tela e chame uma criança por vez. Ajude a abrir o jogo publicado dela na tela grande. Ela apresenta, a turma joga um pouquinho e todos batem palma. Para as mais tímidas, apresente junto. Ao final, entregue o diploma de criador de jogos e faça uma salva de palmas geral, anunciando que todos os jogos da turma agora estão no mundo.`,
      atividade: `Suba no palco do lançamento! O professor vai abrir o seu jogo publicado na tela grande. Mostre para a turma, diga o nome do jogo e fale uma coisa que você mais gostou de fazer. Deixe os amigos jogarem um pouquinho e, no final, todo mundo bate palma para você, o criador de jogos!`,
      gabarito: `A criança acerta o desafio quando o professor consegue abrir o jogo publicado dela (prova de que foi exportado direito), ela apresenta dizendo o nome do jogo e uma coisa que gostou, e a turma consegue jogar um pouco. O sucesso da turma é todo mundo ter um jogo 2D completo publicado e ter apresentado o seu lançamento.`,
    },
  ],
};
