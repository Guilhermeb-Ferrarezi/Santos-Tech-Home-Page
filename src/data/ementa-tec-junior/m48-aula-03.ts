import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Pronto para o mundo: ajustes finais",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança deixa o jogo apresentável escolhendo nome, ícone, descrição e miniatura, e confere um checklist final para garantir que tudo está pronto para outras pessoas jogarem.`,
  descricao: `Nesta aula a turma dá o passo que vem logo antes de publicar: deixar o jogo "pronto para o mundo". Até agora as crianças caçaram bugs e consertaram o código Lua. Agora elas vão cuidar da aparência e da apresentação do jogo, como quem arruma a vitrine de uma loja antes de abrir a porta. Um jogo bem apresentado tem um nome legal, uma imagem bonita para chamar atenção (a miniatura), um ícone redondinho e um texto curto explicando do que se trata. É isso que faz alguém querer clicar e jogar.

A grande ideia desta aula é a diferença entre "o jogo funcionar" e "o jogo estar pronto para outras pessoas". Um jogo pode rodar perfeitamente no computador da criança, mas, se não tiver nome, instruções e um ponto de spawn certo, quem chegar de fora vai ficar perdido. Por isso a criança aprende a olhar o próprio projeto com os olhos de um visitante: alguém que nunca jogou e precisa entender tudo sozinho. O professor conduz essa virada de olhar com calma, mostrando cada campo na tela do Roblox Studio.

Aqui também entra o checklist final, uma lista simples que a criança percorre item por item: o jogo abre sem travar? Não tem bug grande? O personagem nasce no lugar certo (ponto de spawn)? Tem instruções claras de como jogar? O nome, o ícone, a descrição e a miniatura estão preenchidos? Cada item marcado é uma pequena vitória e dá segurança à criança de que o jogo está mesmo pronto. O checklist transforma uma tarefa grande e meio assustadora ("publicar") em passinhos pequenos e tranquilos.

Por fim, a criança entende o que significa "publicar" de um jeito honesto e sem mistério: publicar é apertar um botão que coloca o jogo na internet do Roblox para que outras pessoas, em outros computadores, possam encontrar e jogar. Nesta aula ninguém publica ainda; a publicação de verdade acontece na próxima aula. Hoje o objetivo é deixar tudo arrumado e conferido, para que apertar o botão na semana seguinte seja só a cereja do bolo.`,
  materiais: [
    `Computadores (um por aluno, ou em duplas) com o Roblox Studio aberto no projeto final de cada criança e conectado à conta dela.`,
    `Projetor ou TV grande para o professor demonstrar onde clicar e mostrar cada campo (nome, ícone, descrição, miniatura).`,
    `Um projeto de exemplo já pronto, com nome, ícone, descrição e miniatura preenchidos, para servir de modelo do "antes e depois".`,
    `Cartões de checklist ilustrados (com figurinhas): jogo abre, sem bug grande, spawn certo, instruções claras, nome, ícone, descrição, miniatura.`,
    `Folhas de rascunho e lápis de cor para a criança planejar no papel o nome e a frase de descrição antes de digitar.`,
    `Imagens de miniatura de jogos famosos do Roblox impressas ou no projetor, como exemplos do que é uma boa miniatura.`,
    `Adesivos de "PRONTO!" para marcar cada item do checklist concluído.`,
  ],
  conceitosChave: [
    `Publicar — apertar um botão que coloca o jogo na internet do Roblox para que outras pessoas, em outros computadores, possam jogar.`,
    `Nome do jogo — o título que aparece para todo mundo; precisa ser curto, fácil de entender e combinar com o jogo.`,
    `Ícone (Icon) — a imagem pequena e quadradinha que representa o jogo, como a capa de um livro.`,
    `Miniatura (Thumbnail) — a imagem maior que mostra uma cena bonita do jogo para convencer a pessoa a clicar.`,
    `Descrição (Description) — um textinho curto que explica do que é o jogo e como jogar.`,
    `Ponto de spawn (Spawn) — o lugar onde o personagem nasce quando entra no jogo; precisa ser um lugar seguro e certo.`,
    `Checklist — uma lista de coisas para conferir uma por uma antes de dizer que o jogo está pronto.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é sobre deixar o jogo apresentável, não sobre programar. Você vai mexer em campos de texto e imagem, não em código Lua. Tudo acontece na janela de configurações do jogo, chamada "Game Settings" (Configurações do Jogo), e na tela de publicação. Para abri-la, vá na aba "Home" (Início) ou "File" (Arquivo), no topo do Roblox Studio, e procure o botão "Game Settings" (um ícone de engrenagem). Ali há uma aba "Basic Info" (Informações Básicas) com os campos Name (Nome), Description (Descrição), Icon (Ícone) e Thumbnails (Miniaturas).

Regra importante: para o jogo aparecer com nome e imagens, ele precisa já ter sido salvo na nuvem da conta da criança ao menos uma vez. Se for o primeiro salvamento, use "File" e depois "Publish to Roblox As" (Publicar no Roblox Como), dê um nome e confirme. Isso ainda NÃO deixa o jogo público para estranhos; apenas guarda o projeto na conta. Tornar público de verdade é só na próxima aula. Hoje paramos antes desse botão final.

O ponto de spawn é um bloco especial chamado "SpawnLocation" (Local de Nascimento). Se o jogo não tiver um, o personagem nasce em lugar aleatório. Você adiciona pela aba "Model" (Modelo), botão "Spawn", e posiciona num chão seguro.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento e revisão: Receba a turma e relembre que nas aulas passadas eles caçaram e consertaram bugs. Pergunte: "Se um amigo de outra escola fosse jogar o seu jogo agora, ele entenderia tudo sozinho?" Mostre no projetor o projeto de exemplo já bonito, com nome, ícone e miniatura, e diga que hoje vamos deixar o nosso assim.

15 min - Conteúdo novo guiado: No projetor, abra "Game Settings" (engrenagem) e mostre a aba "Basic Info". Digite um nome no campo "Name". Escreva uma frase no campo "Description". Clique em "Icon" e escolha uma imagem. Clique em "Thumbnails" e adicione uma miniatura. Salve com "Save" (Salvar). Depois mostre a aba "Model" e o botão "Spawn" para checar onde o personagem nasce. Nomeie cada campo devagar.

25 min - Mão na massa: Cada criança abre o "Game Settings" do seu jogo e preenche, na ordem: Name, Description, Icon, Thumbnail. Em seguida, percorre o checklist ilustrado item por item. Passe de mesa em mesa ajudando a digitar e a posicionar o spawn. Marque cada item feito com o adesivo "PRONTO!".

10 min - Desafio e compartilhar: Lance o desafio "vitrine perfeita": cada um confere se todos os itens do checklist estão marcados. Depois, cada criança mostra rapidinho seu nome e sua miniatura para a turma e explica do que é o jogo.

## Como explicar para crianças

Use a analogia da vitrine de loja: antes de abrir a porta, o lojista arruma a vitrine para as pessoas quererem entrar. O nome é a placa da loja, a miniatura é a vitrine, o ícone é o logotipo e a descrição é o cartaz que explica o que tem dentro. Outra imagem boa é a capa de um livro: o ícone e a miniatura fazem a gente querer abrir. Para o ponto de spawn, diga "é a portinha de entrada por onde o personagem chega". Para publicar, explique: "é como colocar o seu desenho no mural da escola para todo mundo ver". Repita sempre que hoje a gente só arruma; apertar o botão final é na próxima aula.

## Erros comuns e como ajudar

O erro mais comum é a criança esquecer de clicar em "Save" (Salvar) na janela de configurações e achar que perdeu tudo; lembre sempre de salvar ao terminar. Outro é escrever um nome enorme ou cheio de letras embaralhadas; ajude a deixar curto e legível, planejando antes no papel. Algumas crianças confundem ícone com miniatura: explique que ícone é o quadradinho pequeno e miniatura é a foto grande. Há quem tente publicar de verdade hoje; reforce com gentileza que o botão final é só na próxima aula. E se o personagem nascer no lugar errado, leve a criança até a aba "Model", botão "Spawn", para colocar o ponto de nascimento num chão seguro.`,
  exercicios: [
    {
      titulo: `Nome de Campeão`,
      tipo: `Planejamento no papel`,
      tempo: `7 min`,
      guiaProfessor: `Entregue a folha de rascunho. Explique que um bom nome é curto, fácil de ler e combina com o jogo. Mostre dois ou três exemplos no projetor (um nome bom e um nome confuso) e peça que a criança escolha o estilo bom. Diga que primeiro a gente planeja no papel e só depois digita no computador.`,
      atividade: `No papel, escreva três ideias de nome para o seu jogo. Leia em voz baixa cada uma e escolha a que for mais curta e fácil de entender. Circule a escolhida. Pergunte a um colega se ele entende do que é o jogo só pelo nome.`,
      gabarito: `A criança acerta quando escreve pelo menos três opções, escolhe uma curta e legível e consegue explicar por que ela combina com o jogo. O professor confirma vendo a opção circulada e ouvindo a criança justificar a escolha; qualquer nome claro e adequado é válido.`,
    },
    {
      titulo: `Preenchendo a Vitrine`,
      tipo: `Prática na ferramenta`,
      tempo: `9 min`,
      guiaProfessor: `Mostre no projetor como abrir "Game Settings" (a engrenagem) e a aba "Basic Info". Aponte os campos Name e Description. Lembre de digitar o nome que a criança planejou no exercício anterior. Reforce o clique em "Save" no fim. Passe nas mesas ajudando quem tem dificuldade de achar a janela.`,
      atividade: `Abra "Game Settings" (a engrenagem) no seu jogo e vá em "Basic Info". Digite o nome que você escolheu no campo "Name". Escreva uma frase curta no campo "Description" dizendo do que é o jogo. Clique em "Save" para salvar.`,
      gabarito: `A criança acerta quando o campo Name tem o nome escolhido, o campo Description tem uma frase clara sobre o jogo e ela clica em Save. O professor confirma vendo os dois campos preenchidos na tela e a janela salva sem erro.`,
    },
    {
      titulo: `Ícone ou Miniatura?`,
      tipo: `Jogo de classificar`,
      tempo: `8 min`,
      guiaProfessor: `Mostre no projetor imagens de jogos famosos do Roblox, separando o quadradinho pequeno (ícone) da foto grande (miniatura). Faça a turma repetir: "ícone é o pequeno, miniatura é o grande". Conduza como um joguinho rápido em que você mostra uma imagem e a turma grita qual é qual.`,
      atividade: `Olhe cada imagem que o professor mostrar e diga se é ÍCONE (o quadradinho pequeno) ou MINIATURA (a foto grande). Depois, no seu jogo, aponte na janela "Game Settings" onde fica o campo "Icon" e onde fica o campo "Thumbnails".`,
      gabarito: `A criança acerta quando classifica corretamente as imagens entre ícone (pequeno e quadrado) e miniatura (grande) e aponta os campos Icon e Thumbnails na janela. O professor confirma pela classificação certa na brincadeira e pelo dedo da criança nos campos corretos da tela.`,
    },
    {
      titulo: `A Portinha de Entrada`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Explique que o ponto de spawn é onde o personagem nasce. Mostre no projetor a aba "Model" e o botão "Spawn". Adicione um spawn num chão seguro e aperte Play para mostrar o personagem nascendo ali. Destaque que um spawn no lugar errado faz o jogador cair ou nascer preso. Ajude nas mesas a posicionar o bloco.`,
      atividade: `No seu jogo, vá na aba "Model" e clique no botão "Spawn" para colocar o ponto de nascimento num chão seguro. Aperte Play e veja se o personagem nasce no lugar certo. Se nascer errado, aperte Stop e mova o spawn para um chão melhor.`,
      gabarito: `A criança acerta quando há um SpawnLocation posicionado num chão seguro e, ao apertar Play, o personagem nasce ali sem cair nem ficar preso. O professor confirma vendo o bloco de spawn no lugar e o personagem aparecendo corretamente ao testar.`,
    },
    {
      titulo: `Desafio Vitrine Perfeita`,
      tipo: `Desafio`,
      tempo: `10 min`,
      guiaProfessor: `Apresente como o desafio final da aula. Entregue o cartão de checklist ilustrado e diga que o objetivo é marcar TODOS os itens. Circule garantindo que cada criança confira de verdade cada ponto e clique em Save no fim. Combine que ninguém aperta o botão de publicar de verdade hoje; isso é na próxima aula.`,
      atividade: `Use o checklist e confira item por item: o jogo abre sem travar? Não tem bug grande? O personagem nasce no lugar certo? Tem instruções claras? O nome, o ícone, a descrição e a miniatura estão preenchidos? Marque cada item pronto. No fim, mostre para a turma o nome e a miniatura do seu jogo e diga do que ele é.`,
      gabarito: `A criança acerta quando percorre todos os itens do checklist, marca os que estão prontos, ajusta os que faltavam (preenchendo um campo vazio ou arrumando o spawn) e apresenta nome e miniatura explicando o jogo. O professor confirma pelo checklist totalmente conferido e pela apresentação clara, lembrando que a publicação real fica para a próxima aula.`,
    },
  ],
};
