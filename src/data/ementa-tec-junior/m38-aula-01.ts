import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Onde a IA mora no meu jogo",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança consegue explicar com as próprias palavras o que uma inteligência artificial faz dentro de um jogo e escolher uma ideia de IA para o seu próprio projeto do mês.`,
  descricao: `Esta é a primeira aula do nosso mês de inteligência artificial dentro dos jogos. Neste ano, as crianças já viajaram por modelagem 3D, impressão de verdade e programação. Agora chegou a hora da parte mais mágica: ensinar o computador a pensar um pouquinho sozinho. Mas antes de treinar qualquer coisa na ferramenta ML for Kids, a turma precisa descobrir uma ideia simples e poderosa: muitos jogos que elas já amam jogar têm um "cérebro de IA" escondido lá dentro.

Pense no inimigo que te persegue no jogo, no bichinho que foge quando você chega perto, ou no assistente que entende quando você fala "pular". Nada disso é mágica de verdade: é uma inteligência artificial, uma parte do jogo que foi ensinada a reagir, a reconhecer e a decidir. Nesta aula ninguém ainda treina uma IA no computador; nós só abrimos os olhos das crianças para enxergar onde a IA já está nos jogos do mundo. É um passeio de detetive: procurar pistas do "cérebro" escondido.

Por que começar assim? Porque as próximas sete aulas vão ensinar a treinar, conectar e testar uma IA de verdade no projeto de cada criança. Se a criança não enxergar primeiro o que uma IA pode fazer, ela não sabe o que pedir para o seu próprio jogo. Esta aula planta a semente: cada aluno sai daqui com uma ideia escolhida (um NPC que reage, um personagem que reconhece um comando, ou um inimigo esperto) que vai virar o protótipo do mês.

Como o professor pode ser iniciante em IA, esta aula foi montada como um tutorial. Você não precisa saber treinar redes neurais; precisa apenas conduzir uma conversa guiada, mostrar exemplos prontos no projetor e abrir a ferramenta ML for Kids para a turma ver onde ela mora. A palavra de ordem é "mostrar e conversar": muitos exemplos visuais, pouca teoria, e cada criança terminando com a sua ideia no papel.`,
  materiais: [
    `Um computador por criança (ou um para cada dupla) com o navegador aberto na página inicial do ML for Kids (machinelearningforkids.co.uk), em português, pronto antes da aula.`,
    `Projetor ou TV grande ligada ao computador do professor, para mostrar os exemplos de jogos e a tela do ML for Kids ampliada.`,
    `Exemplos prontos para mostrar: dois ou três vídeos curtos (ou prints) de jogos com NPC que reage, inimigo que persegue e personagem que reconhece comando de voz.`,
    `Conexão com a internet testada, pois o ML for Kids roda no navegador (de preferência Google Chrome).`,
    `Folhas de papel e lápis de cor para cada criança desenhar e registrar a sua ideia de IA.`,
    `Cartões grandes (ou cartolina) com três figuras: um boneco conversando (NPC), um monstro correndo (inimigo esperto) e uma orelha ouvindo (reconhecer comando), para a roda de conversa.`,
    `Adesivos ou carimbos simples para premiar quem escolher e explicar a sua ideia de IA (motivação na idade).`,
  ],
  conceitosChave: [
    `Inteligência artificial (IA) — é quando o computador aprende a fazer escolhas sozinho, como se tivesse um cérebro pequenininho ensinado pela gente.`,
    `Cérebro de IA — a parte escondida do jogo que decide o que um personagem faz quando algo acontece.`,
    `NPC — um personagem do jogo que não é o jogador; é controlado pelo computador, como o lojista ou o bichinho da floresta.`,
    `Reagir — quando o personagem responde a alguma coisa, por exemplo fugir quando você chega perto ou acenar quando você fala "oi".`,
    `Reconhecer — quando a IA consegue entender uma coisa que viu ou ouviu, como saber que você falou "pular".`,
    `Inimigo esperto — um inimigo que não anda à toa; ele observa o jogador e decide perseguir, fugir ou atacar.`,
    `ML for Kids — o site que vamos usar para ensinar uma IA; é como uma escolinha onde a gente é o professor do computador.`,
  ],
  treinamento: `## O que o professor precisa saber

Inteligência artificial, dentro de um jogo, é qualquer parte que toma decisões em vez de só seguir um caminho fixo. Existem três sabores que as crianças vão reconhecer facilmente: NPCs que reagem (um personagem que responde ao que o jogador faz), personagens que reconhecem comandos (entendem uma palavra falada ou um gesto) e inimigos espertos (observam o jogador e decidem perseguir ou fugir). Você não precisa explicar redes neurais. Basta a ideia: a gente mostra exemplos para o computador, ele aprende um padrão, e depois usa esse padrão para decidir.

A ferramenta do mês é o ML for Kids, no endereço machinelearningforkids.co.uk. Nesta aula você só vai abri-la para a turma ver onde a IA mora; ninguém treina nada ainda (isso é a Aula 2). No topo da página há um botão "Get started" (ou "Começar") e, se já houver login da escola, o botão "Log In". Dentro, existe a área "Projects" (Projetos), onde futuramente cada IA vai ficar guardada. Hoje você só mostra essa tela vazia e diz: "é aqui que vamos criar o cérebro do nosso jogo nas próximas aulas". Deixe a página já aberta antes da aula para não perder tempo com login.

## Passo a passo da aula

Aquecimento e revisão (10 min): reúna a turma na roda, com os computadores ainda de lado. Mostre os três cartões (boneco conversando, monstro correndo, orelha ouvindo) e pergunte: "Quem aqui já jogou um jogo onde um inimigo te perseguia?". Deixe várias crianças responderem. Conduza a conversa até a pergunta-chave: "Quem mandava esse inimigo te perseguir, se não era nenhum amigo seu jogando?". A resposta que você quer ouvir é "o computador".

Conteúdo novo guiado (15 min): no projetor, mostre os exemplos prontos, um de cada vez. A cada vídeo ou print, pare e aponte: "Olha aqui, o monstro mudou de direção porque viu o jogador. Esse é o cérebro de IA trabalhando". Apresente as três palavras: NPC que reage, reconhecer comando, inimigo esperto. Depois, abra o ML for Kids no projetor. Mostre a página inicial e a área "Projects" (Projetos) vazia e diga: "é aqui que, na próxima aula, vamos ensinar o nosso primeiro cérebro de IA". Não clique para criar nada ainda.

Mão na massa (25 min): cada criança vai ao seu computador, já com o ML for Kids aberto por você. Faça um tour calmo: peça que encontrem o botão "Projects" (Projetos) e leiam (ou você lê) o que aparece. Deixe que passeiem pela tela com sua orientação, sem criar projeto. Em seguida, distribua as folhas: cada criança escolhe e desenha UMA ideia de IA para o seu jogo (um NPC, um comando ou um inimigo esperto) e marca onde ela ficaria. Circule, ajoelhe ao lado de cada um e ajude a escolher.

Desafio e compartilhar (10 min): cada criança mostra o desenho e completa a frase "No meu jogo, a IA vai ___". Anote a escolha de cada um (você vai precisar nas próximas aulas). Encerre com adesivo para todos.

## Como explicar para crianças

Use sempre a palavra "cérebro escondido". A IA é "um cérebro pequenininho que a gente ensina e coloca dentro do jogo". NPC é "um personagem que não é você, é do computador". Reagir é "responder, igual quando alguém te chama e você vira". Reconhecer é "entender, igual você entende quando a mamãe fala seu nome". Evite termos como algoritmo, modelo ou rede neural. Fale frases curtas, mostre o exemplo antes de perguntar e use o corpo: peça que finjam ser um inimigo esperto que vira a cabeça para "ver" o jogador.

## Erros comuns e como ajudar

A criança acha que IA é "robô de metal": mostre que a IA é invisível, mora dentro do jogo e não tem corpo. A criança quer logo treinar no computador: valide a ansiedade e prometa que na Aula 2 a gente ensina o cérebro de verdade. A criança escolhe uma ideia grande demais (uma IA que faz tudo): ajude a escolher só uma coisa simples, como "o bichinho foge quando chego perto". Confusão entre o jogador e o NPC: reforce que o NPC é controlado pelo computador, não por um amigo. A criança trava sem escolher: ofereça os três cartões e peça que aponte o que mais gostou. Quem terminar rápido pode ajudar o colega a achar onde a IA ficaria no jogo dele.`,
  exercicios: [
    {
      titulo: `Detetive de jogos`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Na roda, mostre os três cartões e os exemplos no projetor. Pergunte um de cada vez e deixe várias crianças responderem. Aceite respostas simples; o objetivo é só perceber que o computador decide.`,
      atividade: `Pense num jogo que você já jogou. Tinha algum personagem que te perseguia, fugia de você ou respondia quando você fazia algo? Conte para a turma qual era e o que ele fazia.`,
      gabarito: `A criança cita um jogo e descreve um personagem que reage, persegue ou responde. Acertou se percebe que quem mandava esse personagem agir era o computador, e não outro jogador.`,
    },
    {
      titulo: `Onde mora o cérebro?`,
      tipo: `Classificação`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre os três exemplos prontos no projetor. Para cada um, segure o cartão certo no alto e peça que a turma escolha entre NPC que reage, reconhecer comando e inimigo esperto. Faça junto na primeira vez.`,
      atividade: `Olhe cada exemplo na tela. Diga qual tipo de IA é cada um: um personagem que responde quando você chega perto (NPC que reage), um que entende quando você fala uma palavra (reconhecer comando), ou um inimigo que te persegue (inimigo esperto).`,
      gabarito: `A criança liga cada exemplo ao tipo certo: personagem que responde igual a NPC que reage; entender a palavra igual a reconhecer comando; perseguir igual a inimigo esperto. Acertou se classifica ao menos dois dos três corretamente.`,
    },
    {
      titulo: `Passeio no ML for Kids`,
      tipo: `Prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Com o ML for Kids já aberto no computador de cada criança, faça um tour guiado. Peça que encontrem o botão "Projects" (Projetos). Não deixe ninguém criar projeto hoje; é só conhecer onde a IA vai morar.`,
      atividade: `No site ML for Kids, ache com o dedo na tela o botão "Projects" (Projetos). É aqui que, na próxima aula, vamos ensinar o nosso primeiro cérebro de IA. Mostre para o professor onde ele fica.`,
      gabarito: `A criança localiza o botão "Projects" (Projetos) na tela e entende que é o lugar onde os cérebros de IA serão guardados. Acertou se aponta o botão certo e explica, com ajuda, para que ele serve.`,
    },
    {
      titulo: `A minha ideia de IA`,
      tipo: `Desenho / papel`,
      tempo: `12 minutos`,
      guiaProfessor: `Distribua a folha e os lápis. Mostre um desenho-exemplo simples no projetor. Ajude cada criança a escolher só UMA ideia. Anote a escolha de cada um para usar nas próximas aulas.`,
      atividade: `Escolha UMA ideia de IA para o seu jogo: um NPC que reage, um personagem que reconhece um comando, ou um inimigo esperto. Desenhe numa folha o seu jogo e marque com uma estrela onde a IA vai morar. Depois complete: "No meu jogo, a IA vai...".`,
      gabarito: `A criança desenha o jogo, marca um ponto onde a IA atua e diz uma frase com uma ação clara, como "o bichinho foge quando eu chego perto". Acertou se escolheu apenas uma ideia simples e soube dizer o que a IA vai fazer.`,
    },
    {
      titulo: `Eu sou a IA`,
      tipo: `Desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Brincadeira de faz de conta. Uma criança vira "a IA" e atua a sua própria ideia; as outras adivinham qual tipo é. Faça você primeiro, atuando um inimigo esperto que vira a cabeça para ver o jogador. Dê dicas, não a resposta.`,
      atividade: `Vire o cérebro de IA do seu jogo! Sem falar o nome, faça com o corpo o que a sua IA faria: persiga um colega de mentirinha (inimigo esperto), responda quando alguém te chama (NPC que reage) ou ouça e obedeça a uma palavra (reconhecer comando). A turma adivinha qual tipo de IA você é.`,
      gabarito: `A criança representa a sua ideia com o corpo e a turma identifica o tipo de IA (NPC que reage, reconhecer comando ou inimigo esperto). Acertou se a atuação combina com a ideia que ela escolheu no desenho e a turma consegue adivinhar.`,
    },
  ],
};
