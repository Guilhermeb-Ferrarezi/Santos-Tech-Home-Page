import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Moedas, Itens e Obstáculos",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Distribuir moedas para coletar, itens especiais e obstáculos para desviar pelo mapa, criando caminhos e desafios divertidos para o jogador percorrer.`,
  descricao: `Nas aulas anteriores deste mês, as crianças trouxeram seus modelos para o Roblox Studio, montaram o cenário e definiram onde o jogador nasce. Agora o mapa está pronto, mas ainda está vazio de coisas para fazer. Um cenário bonito sem nada para coletar ou desviar fica parado, como um parquinho sem brinquedos. Nesta aula damos vida ao caminho: espalhamos moedas brilhantes, colocamos itens especiais que chamam a atenção e plantamos obstáculos que o jogador precisa desviar com cuidado.

A ideia central é que um bom jogo não é só andar de um ponto ao outro. O jogo fica divertido quando o caminho tem escolhas e pequenos desafios. Uma moeda no alto de uma plataforma faz a criança pensar antes de pular. Um obstáculo no meio da ponte faz o jogador desacelerar e prestar atenção. Cada item que colocamos é como uma promessa de aventura. O professor vai mostrar como copiar e colar partes, mudar a cor delas e organizar tudo em pastas para não virar bagunça.

Nesta aula trabalhamos só a parte visual e de posicionamento. Ainda não vamos programar o que acontece quando o jogador toca em uma moeda ou bate em um obstáculo, isso fica para a Aula 5, quando criamos as regras. Por enquanto, o foco é treinar o olhar de quem cria mapas: onde colocar, quantos colocar, como espalhar para o caminho ficar gostoso de percorrer. As crianças vão aprender a duplicar peças rapidamente, dar nomes e cores diferentes para cada tipo e usar a ferramenta de mover para encaixar tudo no lugar certo.

Ao final, cada aluno terá um mapa com pelo menos um punhado de moedas, alguns itens especiais e três ou mais obstáculos formando um percurso. O entregável do mês é um jogo jogável e divertido, e esta aula é o momento em que o mapa deixa de ser só um cenário e vira um verdadeiro desafio para o jogador.`,
  materiais: [
    `Computadores com o Roblox Studio aberto, um por aluno, com o projeto do mês já salvo`,
    `Projetor ou TV ligada no computador do professor para demonstrar cada passo`,
    `Um mapa de exemplo pronto com moedas, itens e obstáculos já distribuídos, para mostrar o resultado final`,
    `Folha impressa ou cartaz com três símbolos: moeda (amarelo), item especial (azul) e obstáculo (vermelho)`,
    `Peças modelo prontas no projeto: uma moeda, um item e um obstáculo, para as crianças copiarem`,
    `Lista de nomes sugeridos escritos no quadro: Moeda, ItemEspecial, Obstaculo`,
  ],
  conceitosChave: [
    `Moeda — uma pecinha brilhante que o jogador quer pegar pelo caminho, como um tesouro pequeno.`,
    `Item especial — um objeto raro e diferente das moedas, que dá uma surpresa boa para quem encontra.`,
    `Obstáculo — uma coisa no caminho que o jogador precisa desviar ou pular para não se atrapalhar.`,
    `Duplicar — fazer uma cópia igualzinha de uma peça, para não precisar criar tudo de novo do zero.`,
    `Percurso — o caminho que o jogador faz do começo ao fim, cheio de coisas para pegar e desviar.`,
    `Explorer — o painel lateral do Roblox Studio onde ficam listadas todas as peças do nosso jogo, como um índice.`,
    `Pasta (Folder) — uma caixinha no Explorer onde guardamos peças parecidas juntas para não virar bagunça.`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula você só vai posicionar peças, nada de código ainda. As três ações que você mais vai usar são: selecionar uma peça, duplicar (atalho Ctrl mais D) e mover com a ferramenta Move. No topo da tela, na aba Home, ficam as ferramentas Select, Move, Scale e Rotate. A ferramenta Move mostra setas coloridas (vermelha, verde e azul) que arrastam a peça em cada direção. O painel Explorer fica à direita; se não aparecer, abra pela aba View e clique em Explorer. Antes da aula, deixe no projeto três peças modelo já prontas: uma esfera amarela chamada Moeda, um cubo azul chamado ItemEspecial e um bloco vermelho chamado Obstaculo. Assim as crianças só copiam e espalham.

## Passo a passo da aula (ritmo 10 / 15 / 25 / 10)

Aquecimento (10 min): Abra o mapa de exemplo no projetor. Mostre o jogador andando e pegando moedas, encontrando um item especial e desviando de um obstáculo. Pergunte: o que torna esse caminho divertido? Aponte para o cartaz com os três símbolos coloridos e relembre os nomes. Peça para cada criança abrir o próprio projeto do mês.

Conteúdo novo guiado (15 min): No seu computador, clique na peça Moeda dentro do mapa, no Viewport ou no Explorer. Aperte Ctrl mais D para duplicar. A cópia nasce no mesmo lugar, então pegue a ferramenta Move (aba Home, botão Move) e arraste pela seta para colocá-la em outro ponto do caminho. Repita mostrando o ItemEspecial e o Obstaculo. Em seguida, mostre como organizar: no Explorer, clique com o botão direito em Workspace, escolha Insert Object e depois Folder. Renomeie a pasta para Coletaveis (clique duas vezes no nome). Arraste as moedas para dentro dela. Explique que isso evita bagunça.

Mão na massa (25 min): Cada criança espalha pelo menos seis moedas, dois itens especiais e três obstáculos pelo seu mapa. Circule pela sala. Lembre de duplicar com Ctrl mais D em vez de criar do zero. Incentive a pensar no percurso: moedas em fileira convidam o jogador a correr, uma moeda no alto pede um pulo, um obstáculo na ponte pede cuidado. Quem terminar cria uma pasta Obstaculos no Explorer e organiza.

Desafio e compartilhar (10 min): Proponha o desafio: monte um trechinho com três moedas seguidas terminando num item especial, e um obstáculo logo antes dele. Depois, dois ou três alunos mostram o mapa no projetor e contam onde colocaram o item mais difícil de pegar.

## Como explicar para crianças

Use a ideia de tesouro e armadilha. Diga: as moedas são tesouros que o jogador quer juntar, o item especial é o tesouro mais raro de todos, e os obstáculos são as pedras no caminho que ele precisa desviar. Compare com brincar de pega-pega num parquinho cheio de obstáculos. Para duplicar, use a frase mágica: aperta Ctrl e D que nasce uma cópia. Para mover, fale das setas coloridas: a seta puxa a peça para onde você quiser, como segurar um balão pelo barbante. Reforce cores: moeda amarela, item azul, obstáculo vermelho, assim a criança reconhece o que é cada coisa de longe.

## Erros comuns e como ajudar

O erro mais comum é a criança duplicar e deixar a cópia em cima da original, achando que sumiu. Mostre que ela está ali, basta usar a seta da ferramenta Move para puxar para o lado. Outro erro é empurrar a peça para baixo do chão ou para muito longe; ensine a usar a seta azul (cima e baixo) com calma e a dar zoom out com o scroll do mouse para se localizar. Algumas crianças espalham moedas demais e o mapa vira uma chuva de peças; oriente a contar e a deixar espaço entre elas. Por fim, muitos esquecem de renomear ou organizar; passe nas mesas reforçando a pasta no Explorer para o projeto não virar bagunça.`,
  exercicios: [
    {
      titulo: `Achando os três tipos`,
      tipo: `Observação guiada`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre o mapa de exemplo no projetor e aponte cada elemento. Pergunte a cor e o nome de cada um. É uma checagem rápida de reconhecimento antes de pôr a mão na massa.`,
      atividade: `Olhe o mapa de exemplo na tela e diga em voz alta: qual peça é a moeda, qual é o item especial e qual é o obstáculo. Fale a cor de cada uma.`,
      gabarito: `A moeda é a peça amarela e brilhante que o jogador quer pegar. O item especial é a peça azul, mais rara. O obstáculo é a peça vermelha que o jogador precisa desviar. Moeda igual a amarelo, item igual a azul, obstáculo igual a vermelho.`,
    },
    {
      titulo: `Minha primeira cópia`,
      tipo: `Prática individual`,
      tempo: `6 minutos`,
      guiaProfessor: `Garanta que cada criança selecione a peça Moeda antes de duplicar. Acompanhe o uso do Ctrl mais D e da ferramenta Move. O objetivo é dominar o gesto de copiar e afastar.`,
      atividade: `Clique na peça Moeda do seu mapa. Aperte Ctrl mais D para fazer uma cópia. Pegue a ferramenta Move e arraste a cópia, pela seta, para um novo lugar no caminho.`,
      gabarito: `O aluno seleciona a Moeda, aperta Ctrl mais D e uma cópia idêntica aparece no mesmo lugar. Com a ferramenta Move e a seta colorida, ele arrasta a cópia para outro ponto. Resultado esperado: duas moedas no mapa, em lugares diferentes.`,
    },
    {
      titulo: `Uma fileira de três moedas`,
      tipo: `Construção de percurso`,
      tempo: `7 minutos`,
      guiaProfessor: `Incentive o espaçamento parecido entre as moedas para formar uma trilha. Mostre que duplicar e mover repetidamente cria a fileira rápido. Reforce o conceito de percurso que convida o jogador a correr.`,
      atividade: `Crie uma fileira reta com três moedas, uma depois da outra, com um espacinho igual entre elas. Use Ctrl mais D para copiar e a ferramenta Move para alinhar.`,
      gabarito: `Três moedas em linha, separadas por uma distância parecida, formando uma trilha. O aluno duplicou duas vezes a partir da primeira moeda e usou a seta da ferramenta Move para alinhar. Essa fileira convida o jogador a correr pegando uma atrás da outra.`,
    },
    {
      titulo: `Obstáculo no caminho certo`,
      tipo: `Desafio de posicionamento`,
      tempo: `7 minutos`,
      guiaProfessor: `Peça para a criança pensar onde o obstáculo deixa o jogo mais interessante, sem travar de vez a passagem. Ajude quem afundar a peça no chão a usar a seta azul para subir. Ligue ao tema de desviar com cuidado.`,
      atividade: `Coloque um obstáculo no meio de uma parte estreita do seu mapa, como uma ponte ou um corredor, de um jeito que o jogador precise desviar, mas ainda consiga passar.`,
      gabarito: `O obstáculo vermelho fica num ponto estreito do percurso, deixando espaço ao lado para o jogador passar desviando. Não bloqueia totalmente o caminho. O aluno usou a ferramenta Move e ajustou a altura com a seta azul para a peça ficar no chão.`,
    },
    {
      titulo: `Organizando em pastas`,
      tipo: `Organização e desafio final`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre passo a passo a criação da pasta pelo botão direito em Workspace, Insert Object, Folder, e o renomear com dois cliques. Acompanhe o arrastar das peças para dentro. É o exercício mais difícil porque envolve o Explorer.`,
      atividade: `No painel Explorer, crie uma pasta chamada Coletaveis e arraste todas as suas moedas e itens especiais para dentro dela. Depois crie outra pasta chamada Obstaculos e guarde os obstáculos nela.`,
      gabarito: `O aluno clica com o botão direito em Workspace, escolhe Insert Object e depois Folder, e renomeia a pasta com dois cliques. Arrasta as moedas e itens para a pasta Coletaveis e os obstáculos para a pasta Obstaculos. Resultado: o Explorer fica organizado, com cada tipo de peça dentro da sua caixinha, sem bagunça.`,
    },
  ],
};
