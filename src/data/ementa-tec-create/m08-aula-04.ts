import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Montando o cenário completo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Montar o cenário completo do próprio jogo 2D adicionando plataformas, itens colecionáveis e inimigos como Sprites, usando camadas (Layers) e nomes organizados para deixar a cena pronta para receber as regras.`,
  descricao: `Nesta aula o aluno sai de poucos objetos soltos na tela e constrói um cenário de verdade. Ele aprende que um jogo bonito e fácil de mexer nasce de uma cena bem organizada: cada peça com seu nome certo, cada tipo de objeto na sua camada e o cenário montado da esquerda para a direita, como uma fase de plataforma clássica. É o momento em que o projeto começa a "parecer um jogo".

O foco prático são três famílias de objetos. As plataformas, onde o personagem vai pisar e andar. Os itens colecionáveis, como moedas ou estrelas, que dão a sensação de recompensa. E os inimigos, que criam o desafio. Todos entram como Sprites no Construct 3, e o aluno descobre que dá para reaproveitar o mesmo objeto várias vezes na tela com cópia e colagem, em vez de desenhar tudo de novo.

A grande ideia técnica da aula são as camadas, os Layers. O aluno organiza a cena em três camadas: Fundo (Background), Jogo (onde ficam plataformas, itens e inimigos) e Interface. Assim ele consegue travar o fundo para não mover sem querer, manter o personagem sempre visível na frente e trabalhar sem bagunçar o resto. Junto com isso, ele renomeia cada objeto com nomes claros como Plataforma, Moeda e Inimigo, porque na próxima aula esses nomes serão usados nos Eventos, as regras do jogo.

Ao final, cada aluno terá uma fase montada e organizada, ainda sem movimento ou regras, mas visualmente completa e pronta para ganhar vida. A aula reforça uma postura profissional: organizar antes de programar economiza muito tempo depois.`,
  materiais: [
    `Computadores com Construct 3 aberto e o projeto pessoal de cada aluno salvo da Semana 1`,
    `Projetor ou TV para o professor mostrar os passos na tela grande`,
    `Arquivo de exemplo "cenario-modelo.c3p" com plataformas, moedas e inimigos já montados em camadas`,
    `Pasta com Sprites prontos (plataforma, moeda, inimigo) em formato PNG para quem ainda não desenhou os seus`,
    `Folha impressa de apoio com o passo a passo de Layers e renomear objetos`,
    `Fones de ouvido (opcional) para quem quiser testar com som de exemplo`,
  ],
  conceitosChave: [
    `Sprite — objeto de imagem que representa cada peça do jogo, como plataforma, moeda ou inimigo.`,
    `Layer (camada) — andar da cena que organiza os objetos em níveis, definindo o que aparece na frente e o que fica atrás.`,
    `Layout — a tela do jogo onde montamos a fase, ou seja, o cenário visível.`,
    `Layers Bar — painel à direita do Construct 3 onde criamos, renomeamos e travamos as camadas.`,
    `Renomear objeto — dar um nome claro a cada Sprite (Plataforma, Moeda, Inimigo) para encontrá-lo e usá-lo nos Eventos depois.`,
    `Lock (travar camada) — recurso do cadeado que impede mover ou apagar objetos de uma camada sem querer.`,
    `Instância — cada cópia de um mesmo objeto na tela; várias plataformas podem ser instâncias do mesmo Sprite.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Construct 3. Esta aula é montagem de cenário, não programação. O programa abre no navegador (Chrome de preferência) em editor.construct.net. No centro fica o Layout, que é a tela do jogo. À esquerda fica o Project Bar com a lista de objetos. À direita ficam duas abas importantes: Properties (propriedades) e Layers. A aba Layers é a estrela da aula. Antes da turma chegar, abra o arquivo "cenario-modelo.c3p" e confira as três camadas: Background, Game e Interface. Treine uma vez arrastar um Sprite, copiar com Ctrl+C e colar com Ctrl+V, e renomear um objeto com clique duplo no Project Bar.

## Passo a passo da aula

Aquecimento (10 min): peça que cada aluno abra o próprio projeto da Semana 1 e mostre o personagem na tela. Pergunte: "O que falta para virar uma fase de verdade?" Anote as respostas (chão, moedas, inimigos). Mostre o arquivo de exemplo no projetor por 1 minuto para criar o desejo: "Hoje a sua tela vai ficar assim."

Conteúdo novo guiado (15 min): no projetor, abra a aba Layers à direita. Clique no botão de mais (+) para criar camadas e renomeie cada uma com clique duplo: Background, Game e Interface, de baixo para cima. Explique que a de cima aparece na frente. Mostre o ícone de cadeado para travar a camada Background. Agora selecione a camada Game, vá ao Project Bar, dê duplo clique para inserir um novo Sprite chamado Plataforma, desenhe um retângulo simples e clique em fechar (X) no editor de animação. De volta ao Layout, copie a plataforma com Ctrl+C e cole com Ctrl+V várias vezes, arrastando para formar o chão. Repita a ideia criando Moeda e Inimigo.

Mão na massa (25 min): cada aluno monta a própria fase. Roteiro na lousa: 1) criar as três camadas e travar o Background; 2) selecionar a camada Game; 3) inserir e renomear Plataforma, Moeda e Inimigo; 4) copiar e colar para preencher o cenário da esquerda para a direita; 5) salvar com Ctrl+S. Circule pela sala conferindo os nomes e a camada selecionada de cada um.

Desafio e compartilhar (10 min): proponha esconder uma moeda "secreta" em um canto difícil e adicionar um segundo inimigo. Depois, dois ou três alunos mostram a fase no projetor e contam onde escolheram pôr o desafio.

## Como explicar de forma clara

Use a imagem de um bolo de camadas ou de folhas de papel transparente empilhadas: o fundo é a folha de baixo, o personagem fica na folha de cima e por isso aparece na frente. Diga que renomear é como escrever o nome na mochila: "se a moeda se chama 'Sprite2', amanhã ninguém acha; se chama 'Moeda', é só pegar". Compare travar a camada com prender o cartaz na parede para não cair. Fale "instância" como "cópia gêmea": muitas plataformas iguais são cópias do mesmo objeto.

## Erros comuns e como ajudar

O erro mais frequente é inserir o objeto na camada errada (geralmente no Background travado, e aí "não deixa mover"). Peça para olhar qual camada está destacada na Layers Bar antes de inserir. Outro erro é criar um Sprite novo a cada plataforma, em vez de copiar e colar; mostre de novo o Ctrl+C e Ctrl+V e explique que copiar gera instâncias do mesmo objeto. Muitos esquecem de renomear e ficam com nomes como Sprite3 e Sprite4; pare a turma no minuto 15 da mão na massa e peça que todos confiram os nomes. Há quem empilhe tudo num canto: incentive espalhar da esquerda para a direita. Por fim, lembre o Ctrl+S no final; quem não salva perde o trabalho.`,
  exercicios: [
    {
      titulo: `Criando as três camadas`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Confirme que cada aluno está com a aba Layers aberta à direita e que criou as camadas de baixo para cima. Verifique se o cadeado do Background está fechado.`,
      atividade: `No seu projeto, abra a aba Layers e crie três camadas com o botão de mais. Renomeie-as, de baixo para cima, como Background, Game e Interface. Trave a camada Background clicando no cadeado.`,
      gabarito: `O aluno deve ter exatamente três camadas na ordem Background (embaixo), Game (meio) e Interface (topo). O Background aparece com o cadeado fechado, indicando que está travado. Os nomes estão escritos corretamente, sem "Layer 0" ou "Layer 1".`,
    },
    {
      titulo: `Plataformas em série`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que a camada Game está selecionada antes de inserir. Reforce o uso de Ctrl+C e Ctrl+V em vez de criar Sprites novos.`,
      atividade: `Com a camada Game selecionada, insira um Sprite e renomeie-o como Plataforma. Copie com Ctrl+C e cole com Ctrl+V pelo menos cinco vezes, montando um chão da esquerda para a direita.`,
      gabarito: `Existe um único objeto chamado Plataforma, com cinco ou mais instâncias (cópias) na camada Game formando o chão. O aluno usou copiar e colar, e não criou vários objetos diferentes. As plataformas estão alinhadas formando uma base, não amontoadas.`,
    },
    {
      titulo: `Itens e inimigos com nomes certos`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Cheque os nomes no Project Bar. Ajude quem ficou com nomes automáticos como Sprite2. Incentive ao menos três moedas e dois inimigos espalhados.`,
      atividade: `Na camada Game, crie dois novos Sprites e renomeie-os como Moeda e Inimigo. Espalhe pelo menos três moedas e dois inimigos pelo cenário, em lugares que façam sentido para o desafio.`,
      gabarito: `O projeto tem objetos chamados Moeda e Inimigo, sem nomes automáticos. Há três ou mais moedas e dois ou mais inimigos posicionados na camada Game. As moedas ficam em pontos alcançáveis e os inimigos em pontos de risco, mostrando intenção de desafio.`,
    },
    {
      titulo: `Revisão em dupla da organização`,
      tipo: `em dupla`,
      tempo: `7 minutos`,
      guiaProfessor: `Forme duplas e dê o roteiro de conferência. Cada aluno revisa a cena do colega usando a aba Layers e o Project Bar. Peça que anotem um elogio e uma sugestão.`,
      atividade: `Troque de lugar com um colega. Confira na cena dele: as três camadas existem e estão na ordem certa? O Background está travado? Os objetos têm nomes claros? Plataformas, moedas e inimigos estão na camada Game? Diga ao colega um ponto bom e uma melhoria.`,
      gabarito: `A dupla identifica corretamente se as camadas estão na ordem Background, Game e Interface, se o Background está travado e se os nomes são claros (Plataforma, Moeda, Inimigo). Cada aluno entrega ao colega um elogio específico e uma sugestão concreta, por exemplo "renomear o Sprite4 para Inimigo" ou "espalhar as moedas".`,
    },
    {
      titulo: `Minha fase apresentada`,
      tipo: `projeto curto e roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Reserve os últimos minutos. Peça que cada aluno salve com Ctrl+S e apresente a fase no projetor em até um minuto, explicando as escolhas de cenário. Conduza a roda valorizando a organização, não só a beleza.`,
      atividade: `Salve seu projeto com Ctrl+S. Em até um minuto, apresente sua fase para a turma: mostre as camadas, diga onde colocou as plataformas, as moedas e os inimigos, e explique por que escolheu esses lugares.`,
      gabarito: `O aluno apresenta uma fase salva e organizada, com as três camadas, o Background travado e objetos renomeados. Ele explica ao menos uma escolha de design, como "pus o inimigo perto da moeda secreta para dificultar". A fase está visualmente completa, mesmo sem movimento ou regras, pronta para a Aula 5 de Eventos.`,
    },
  ],
};
