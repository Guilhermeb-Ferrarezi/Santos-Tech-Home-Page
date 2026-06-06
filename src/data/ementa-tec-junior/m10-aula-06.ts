import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Bandeiras de Checkpoint",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança aprende a colocar várias bandeiras de checkpoint espalhadas pelo mundo no Roblox, para que o jogador salve seu caminho e não volte sempre para o início quando cair.`,
  descricao: `Nesta aula, as crianças vão dar um superpoder ao seu mundo do Roblox: a memória do caminho! Um checkpoint é como uma bandeira mágica que o jogador toca enquanto anda. Quando ele toca a bandeira, o jogo guarda aquele lugar. Se o jogador cair ou errar depois, ele volta para a última bandeira que tocou, e não lá do começo de tudo. Isso deixa qualquer aventura muito mais justa e divertida.

No mês de "Meu mundo no Roblox", as crianças já montaram o terreno, colocaram peças mágicas, decoraram o cenário e marcaram onde a aventura começa. Agora elas vão espalhar pontos de salvamento ao longo do trajeto, do início até o final. Cada bandeira é uma parada segura. Quanto mais perto uma da outra, mais carinhoso o jogo fica com quem está jogando.

A ferramenta do mês é o Roblox Studio (Criador Iniciante). O Studio já oferece um modelo prontinho de checkpoint dentro de um pacote chamado "SpawnLocation" (o ponto de nascimento). A graça da aula é entender que podemos colocar MAIS DE UM ponto desses, em cores diferentes, formando uma trilha de bandeiras. As crianças vão arrastar, posicionar e testar andando pelo mundo, passando por cada bandeira em ordem.

Ao final, cada aluno terá um caminho com pelo menos três checkpoints e vai testar de verdade, jogando o próprio mundo e vendo o personagem renascer na última bandeira tocada. É a primeira vez que elas sentem o jogo "lembrando" delas, e isso costuma arrancar muitos sorrisos.`,
  materiais: [
    `Computadores (um por aluno) com o Roblox Studio (Criador Iniciante) já aberto no projeto "Mundo no Roblox" de cada criança`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar passo a passo`,
    `Um mundo de exemplo já pronto pelo professor, com três bandeiras coloridas espalhadas, para mostrar o resultado final`,
    `Bandeirinhas de papel ou adesivos coloridos (verde, azul, amarelo) para a atividade de desenho/papel`,
    `Folha de desenho com o desenho de um caminho simples impresso, uma por aluno`,
    `Crachás ou fita colorida para a brincadeira de "trilha de bandeiras" no chão da sala`,
    `Lista de presença e uma estrela ou carimbo para premiar quem terminar o desafio`,
  ],
  conceitosChave: [
    `Checkpoint — uma bandeira mágica que o jogador toca para o jogo guardar aquele lugar.`,
    `SpawnLocation — o nome do bloco do Roblox que serve de ponto onde o personagem nasce ou renasce.`,
    `Renascer (respawn) — quando o personagem cai ou some e volta a aparecer na última bandeira que tocou.`,
    `Trajeto — o caminho do início até o final do mundo, por onde o jogador anda.`,
    `Cor do time (TeamColor) — a cor da bandeira; cada cor pode marcar um ponto diferente do caminho.`,
    `Testar (Play) — apertar o botão de brincar para entrar no mundo e experimentar as bandeiras de verdade.`,
    `Espalhar — colocar várias bandeiras separadas, uma depois da outra, ao longo do trajeto.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

No Roblox, o bloco que faz um personagem nascer chama-se SpawnLocation. Ele já vem com um superpoder embutido: além de ser o ponto inicial, ele também funciona como checkpoint. Quando o jogador encosta em um SpawnLocation, o jogo passa a usar aquele ponto como o novo lugar de renascimento. Ou seja, basta colocar VÁRIOS SpawnLocations ao longo do caminho para ter uma trilha de checkpoints, sem escrever nenhum código.

Para inserir um, vá no menu de cima, aba "Modelo" (ou "Home" em inglês), clique em "Spawn" (ícone de uma plataforma com seta para cima). Para encontrar outros, use a aba "Ver" e abra a "Caixa de ferramentas" (Toolbox); ou simplesmente copie (Ctrl+C) e cole (Ctrl+V) o primeiro spawn já colocado, que é o jeito mais fácil para esta idade. Cada cópia pode ganhar uma cor diferente na janela "Propriedades", no campo "TeamColor" ou "BrickColor", o que ajuda a criança a diferenciar as bandeiras.

Um detalhe importante: deixe a propriedade "Neutral" marcada (ativada) em cada spawn. Assim eles funcionam como checkpoint para todos, sem precisar configurar times. Posicione cada um colado ao chão para o jogador conseguir pisar nele.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): Abra o mundo de exemplo no projetor. Jogue (botão "Play", o triângulo verde no topo) e mostre o personagem caindo de propósito. Pergunte: "De onde ele voltou?". Reveje rapidinho a Aula 5 (onde a aventura começa) e diga que hoje vamos colocar MAIS pontos desses.

CONTEÚDO NOVO GUIADO (15 min): Com a turma olhando o projetor, mostre o spawn inicial. Clique nele uma vez (fica com contorno). Aperte Ctrl+C e depois Ctrl+V para duplicar. Arraste a cópia para frente no caminho usando as setas coloridas (as alças de movimento). Abra "Propriedades" (menu "Ver" > "Propriedades") e troque a cor em "BrickColor" para o spawn ficar verde, o próximo azul, o próximo amarelo. Repita até ter três bandeiras espalhadas. Aperte "Play" e ande tocando cada uma; depois pule no vazio para mostrar que o personagem volta na última bandeira tocada.

MÃO NA MASSA (25 min): Cada criança faz o mesmo no próprio mundo. Peça para começarem pelo spawn que já existe, copiar e colar, e arrastar a cópia para um pouco mais à frente no caminho. Meta mínima: três bandeiras, em cores diferentes, do início até perto do final. Circule pela sala ajudando a clicar, copiar e arrastar. Lembre de manter cada bandeira colada no chão.

DESAFIO + COMPARTILHAR (10 min): Desafio: colocar uma quarta bandeira bem pertinho do final, como uma "quase chegada". Depois, cada aluno aperta "Play", anda tocando todas as bandeiras em ordem e cai de propósito para ver o renascimento. Faça uma rodada rápida de "mostra para o amigo do lado".

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a ideia de bandeiras de pique-bandeira ou de pegadinha no chão: "Cada bandeira é um lugar seguro. Quando você toca, o jogo tira uma fotinho e guarda. Se cair, você volta para a fotinho mais nova!". Outra analogia ótima é a trilha de migalhas de pão: as bandeiras são as migalhas que mostram o caminho e salvam você. Fale "tocar a bandeira" em vez de "ativar o checkpoint". Use cores como nomes: "a bandeira verde", "a bandeira azul". Evite a palavra "código", pois aqui não usamos nenhum.

## Erros comuns e como ajudar

As crianças costumam (1) colocar todas as bandeiras no mesmo lugar, empilhadas, sem arrastar para frente, ajude a espalhar; (2) deixar a bandeira flutuando no ar, então o jogador não pisa, baixe até colar no chão; (3) esquecer de testar com "Play" e dar Play no mundo, sempre lembre de jogar; (4) deletar o spawn inicial sem querer, oriente a usar Ctrl+Z para desfazer; (5) achar que precisa de muitas bandeiras, três já é ótimo para começar.`,
  exercicios: [
    {
      titulo: `Copiar e colar a primeira bandeira`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor como clicar uma vez no spawn que já existe no mundo da criança (ele ganha um contorno). Diga em voz alta a "mágica das duas teclas": segurar Ctrl e apertar C para copiar, depois Ctrl e V para colar. Caminhe pela sala confirmando que cada criança conseguiu fazer aparecer uma segunda bandeira.`,
      atividade: `No seu mundo, clique na bandeira de nascimento que já existe. Faça a mágica: Ctrl+C e depois Ctrl+V. Apareceu uma bandeira novinha em cima da outra? Então deu certo!`,
      gabarito: `O aluno acertou quando há DUAS bandeiras (SpawnLocations) no mundo, mesmo que ainda estejam uma em cima da outra. Conta-se como certo se uma cópia foi criada com sucesso usando copiar e colar.`,
    },
    {
      titulo: `Espalhar três bandeiras coloridas`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Demonstre arrastar a cópia para frente usando as setas coloridas que aparecem ao redor da peça (as alças de mover). Em seguida, abra "Propriedades" e troque a cor em "BrickColor". Combine as cores com a turma: a primeira verde, a do meio azul, a última amarela. Ajude quem deixar a bandeira flutuando a baixá-la até o chão.`,
      atividade: `Arraste suas bandeiras para lugares diferentes do caminho: uma no começo, uma no meio e uma perto do final. Pinte cada uma de uma cor: verde, azul e amarela. Deixe todas coladinhas no chão.`,
      gabarito: `O aluno acertou quando existem três bandeiras separadas (não empilhadas), em três cores diferentes, posicionadas do início ao final do trajeto e encostadas no chão para o jogador poder pisar.`,
    },
    {
      titulo: `Brincadeira: a trilha de bandeiras na sala`,
      tipo: `jogo`,
      tempo: `8 minutos`,
      guiaProfessor: `Espalhe três bandeirinhas de papel ou fitas coloridas pelo chão da sala, formando um caminho. Explique que o chão é "o mundo do Roblox" e cada aluno será um personagem. As crianças andam tocando cada bandeira em ordem. Combine: se alguém "cair" (você grita "caiu!"), a criança volta correndo para a última bandeira que tocou, não para o início.`,
      atividade: `Ande pela trilha tocando a bandeira verde, depois a azul, depois a amarela. Quando o professor gritar "caiu!", volte só até a última bandeira que você já tocou. Continue dali!`,
      gabarito: `O aluno acertou quando, ao ouvir "caiu", retorna para a última bandeira tocada (e não para o início), mostrando que entendeu que o checkpoint guarda o último ponto. Acertar é demonstrar a regra com o corpo.`,
    },
    {
      titulo: `Desenhe o caminho e suas bandeiras`,
      tipo: `desenho/papel`,
      tempo: `7 minutos`,
      guiaProfessor: `Entregue a folha com um caminho simples impresso e os adesivos ou bandeirinhas de papel. Peça que cada criança cole ou desenhe três bandeiras ao longo do caminho e desenhe uma carinha de jogador no início. Pergunte para cada um: "Se o jogador cair aqui (aponte um ponto), para qual bandeira ele volta?".`,
      atividade: `Na folha do caminho, cole ou desenhe três bandeiras separadas: uma no começo, uma no meio e uma quase no final. Desenhe o jogador no início. Faça uma seta mostrando para onde ele volta se cair no meio.`,
      gabarito: `O aluno acertou quando há três bandeiras espalhadas ao longo do caminho e a seta aponta da queda para a bandeira anterior mais próxima (por exemplo, caiu depois do meio, a seta volta para a bandeira do meio).`,
    },
    {
      titulo: `Desafio: a bandeira da quase chegada e o teste final`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Proponha adicionar uma QUARTA bandeira bem pertinho do final, de uma quarta cor, como uma "quase chegada". Depois, peça que cada aluno aperte "Play" (o triângulo verde no topo), ande tocando todas as bandeiras em ordem e pule no vazio de propósito para ver o renascimento. Circule confirmando que o personagem volta na bandeira certa. Premie com estrela ou carimbo.`,
      atividade: `Adicione uma quarta bandeira pertinho da chegada. Aperte "Play". Ande tocando todas as bandeiras na ordem. Depois pule num buraco de propósito: onde você renasceu? Conte para o professor!`,
      gabarito: `O aluno acertou quando há quatro bandeiras espalhadas até perto do final e, ao testar com "Play", o personagem renasce na última bandeira tocada antes da queda. Saber dizer corretamente onde renasceu confirma o entendimento.`,
    },
  ],
};
