import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Importando a Interface no Roblox",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Importar as imagens da interface feita no Canva para dentro do Roblox Studio e montar visualmente o menu inicial do jogo, ajustando tamanho e posição para ficar bonito em qualquer tela.`,
  descricao: `Na aula passada o aluno aprendeu a exportar a interface do Canva no formato certo, com fundo transparente quando preciso. Agora chegou o momento mais esperado: ver aquela arte aparecer dentro do próprio jogo. Esta aula é totalmente prática. O aluno faz o upload das imagens no Roblox, cria a estrutura que segura a interface na tela e posiciona cada peça do menu inicial no lugar certo.

No Roblox, toda interface que aparece na frente do jogador fica guardada dentro de um objeto chamado ScreenGui. É como uma folha transparente colada na frente da tela, onde colamos botões, textos e imagens. Cada imagem do Canva vira um ImageLabel, um quadradinho que mostra a figura. O aluno vai aprender a colocar o ScreenGui no lugar correto (a pasta StarterGui) e a arrastar os ImageLabels para dentro dele.

O grande aprendizado técnico do dia é a diferença entre medir as coisas em pixels fixos e medir em escala (Scale). Telas têm tamanhos diferentes: o notebook da escola, o tablet de casa, o celular de um amigo. Se posicionarmos tudo em pixels, a interface quebra em telas diferentes. Usando Scale e o AnchorPoint, o menu se ajusta sozinho e continua centralizado e bonito em qualquer tela. É a mesma ideia de um pôster que se estica proporcionalmente, em vez de ficar preso a um tamanho único.

Ao final, cada aluno terá o menu inicial do jogo montado visualmente, com o fundo, o título e os espaços dos botões posicionados. Ainda não vão funcionar (isso é a próxima aula), mas já vão estar no lugar e bonitos. É uma vitória visual enorme e costuma deixar a turma muito animada.`,
  materiais: [
    `Computadores com Roblox Studio instalado e logado em uma conta Roblox (cada aluno na sua conta ou em contas da escola)`,
    `Conexão com a internet (o upload de imagens passa pelos servidores do Roblox)`,
    `As imagens da interface exportadas no Canva na aula anterior (fundo, título e botões em PNG), salvas em uma pasta de fácil acesso`,
    `Projetor ou TV para o professor mostrar a tela passo a passo`,
    `Arquivo de exemplo do professor: um conjunto de imagens de menu já prontas, para quem esquecer as suas`,
    `Um lugar a vista (quadro ou slide) com a frase-chave do dia: "Use Scale, não Offset"`,
  ],
  conceitosChave: [
    `ScreenGui — objeto que funciona como uma folha transparente na frente da tela do jogador, onde colamos toda a interface.`,
    `StarterGui — a pasta do Roblox de onde a interface é copiada para cada jogador quando o jogo começa; é ali que o ScreenGui deve ficar.`,
    `ImageLabel — elemento que mostra uma imagem na tela; cada figura exportada do Canva vira um ImageLabel.`,
    `Upload de imagem (Asset) — quando enviamos uma imagem para o Roblox, ela vira um item da conta com um número de ID que usamos para mostrá-la.`,
    `Scale — forma de medir tamanho e posição em proporção da tela (de 0 a 1), fazendo a interface se ajustar em qualquer tela.`,
    `Offset — forma de medir em pixels fixos; útil para detalhes pequenos, mas perigoso para o layout principal porque não se adapta.`,
    `AnchorPoint — o ponto de "alfinete" do elemento; colocar em 0.5, 0.5 prende a imagem pelo centro e facilita centralizar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista. O segredo desta aula é entender três caixinhas do Roblox Studio: a janela Explorer (a lista de objetos do jogo, à direita), a janela Properties (as propriedades do objeto selecionado, abaixo do Explorer) e a aba View, no menu de cima, que liga e desliga essas janelas caso elas sumam. Se alguma janela não aparecer, vá em View e clique no nome dela.

A interface vive dentro de StarterGui. Dentro dela criamos um ScreenGui e, dentro do ScreenGui, os ImageLabels. A propriedade mais importante de hoje chama-se Size e Position, e cada uma tem quatro números: {ScaleX, OffsetX}, {ScaleY, OffsetY}. A regra de ouro do dia: use os campos de Scale (proporção) e deixe os de Offset (pixels) em zero no layout principal.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Abra o Roblox Studio e o projeto da turma. Pergunte: "Onde mora a interface no Roblox?" Relembre que ela aparece na frente do jogo. Mostre rapidamente a interface feita no Canva e diga que hoje ela entra no jogo de verdade.

Conteúdo novo guiado (15 min): No Explorer, encontre StarterGui. Passe o mouse, clique no sinal de mais (+) ao lado e adicione um ScreenGui (digite "ScreenGui" na busca que aparece). Agora, com o ScreenGui selecionado, clique no + de novo e adicione um ImageLabel. Para colocar a imagem: selecione o ImageLabel, vá em Properties, encontre a propriedade Image e clique nela. Surge a opção de fazer upload; escolha o arquivo PNG do Canva. O Roblox envia para os servidores e, em segundos, a figura aparece na tela. Mostre as propriedades Size e Position: digite, por exemplo, Size {1, 0}, {1, 0} para o fundo ocupar a tela toda. Explique no projetor a diferença entre Scale e Offset com um exemplo ao vivo: mude o Offset e mostre como quebra; volte para Scale.

Mão na massa (25 min): Cada aluno cria o seu ScreenGui na StarterGui, faz upload do fundo, do título e dos botões do menu. Oriente: o fundo primeiro (Size em Scale 1,1), depois o título no topo (Position Scale Y por volta de 0.15), depois os botões empilhados no centro. Peça que ativem AnchorPoint 0.5, 0.5 nos elementos centralizados e usem Position Scale 0.5 no X para centralizar de verdade. Circule pela sala ajudando um por um.

Desafio e compartilhar (10 min): Lance o desafio "tela elástica": peça que cliquem no botão de testar (Play, atalho F5) e depois redimensionem a janela do Studio para ver se o menu se ajusta. Quem usou Scale vê o menu acompanhar; quem usou Offset vê quebrar. Dois ou três alunos mostram a tela para a turma.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do "alfinete e do pôster". O AnchorPoint é o alfinete: onde você crava o alfinete, é por ali que a imagem fica presa. O Scale é como esticar um pôster proporcionalmente, e o Offset é como usar uma régua de pixels que não estica. Diga a frase do dia várias vezes: "Use Scale, não Offset". Para o ScreenGui, fale que é a "folha de vidro" na frente do jogo onde a gente cola as figuras. Evite termos difíceis de uma vez; mostre clicando e deixe o aluno repetir na própria tela logo em seguida.

## Erros comuns e como ajudar

O erro mais comum é criar o ScreenGui dentro do lugar errado (ex.: dentro do Workspace). Ajude conferindo no Explorer se ele está dentro de StarterGui. Outro erro: a imagem some porque o aluno usou Offset e a posição saiu da tela; peça para zerar os Offsets. Imagens com fundo branco quadrado vêm de PNG sem transparência; mande exportar de novo no Canva ou usar o arquivo de exemplo. Por fim, se a figura não aparece, normalmente é porque o upload ainda está em moderação do Roblox; oriente a aguardar alguns instantes ou usar outra imagem já aprovada.`,
  exercicios: [
    {
      titulo: `Crie a folha de vidro: o ScreenGui`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno selecione StarterGui antes de adicionar. Confira no Explorer se o ScreenGui ficou dentro de StarterGui, e não solto no Workspace.`,
      atividade: `No Explorer, selecione StarterGui, clique no sinal de mais e adicione um ScreenGui. Em seguida, adicione um ImageLabel dentro desse ScreenGui. Renomeie o ScreenGui para "MenuInicial".`,
      gabarito: `No Explorer deve aparecer: StarterGui > MenuInicial (ScreenGui) > ImageLabel. O ScreenGui está dentro de StarterGui, e o ImageLabel está dentro do ScreenGui. Conferido o aninhamento, o exercício está correto.`,
    },
    {
      titulo: `Subindo o fundo do menu`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre onde fica a propriedade Image em Properties. Lembre que o upload passa por moderação e pode demorar alguns segundos. Tenha o arquivo de exemplo pronto para quem precisar.`,
      atividade: `Selecione o ImageLabel, vá em Properties, clique na propriedade Image e faça o upload da imagem de fundo do Canva. Depois, ajuste o Size para {1, 0}, {1, 0} para o fundo ocupar a tela inteira.`,
      gabarito: `A imagem de fundo aparece preenchendo toda a tela do jogo. O Size está com Scale X igual a 1 e Scale Y igual a 1, e os dois Offsets em zero. Se o fundo cobre a tela toda sem bordas estranhas, está correto.`,
    },
    {
      titulo: `Centralizando o título com AnchorPoint`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o conceito-chave do dia. Use o projetor para mostrar o alfinete no centro. Verifique se o aluno mudou o AnchorPoint antes de mexer na Position, senão a centralização não fica perfeita.`,
      atividade: `Adicione um novo ImageLabel para o título do jogo, faça o upload da imagem e ajuste: AnchorPoint para 0.5, 0.5; Position para {0.5, 0}, {0.15, 0}. O título deve ficar centralizado no topo.`,
      gabarito: `O título aparece centralizado na horizontal e próximo ao topo. AnchorPoint está em 0.5, 0.5; Position tem Scale X 0.5 e Scale Y 0.15, com Offsets em zero. Ao redimensionar a janela, o título continua centralizado. Está correto.`,
    },
    {
      titulo: `Layout em dupla: os botões do menu`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas e peça que um confira o trabalho do outro. O revisor checa se os botões usam Scale (e não Offset) e se estão alinhados. Incentive que conversem sobre o espaçamento entre os botões.`,
      atividade: `Em dupla, cada aluno monta três ImageLabels para os botões "Jogar", "Opções" e "Sair", empilhados no centro da tela usando Position em Scale (por exemplo, Y em 0.45, 0.6 e 0.75). Depois, troquem de cadeira e revisem o menu do colega.`,
      gabarito: `Os três botões aparecem empilhados e centralizados, cada um com AnchorPoint 0.5, 0.5 e Position com Scale X 0.5 e valores de Scale Y crescentes. A revisão confirma que nenhum botão usou Offset no layout. Botões alinhados e espaçados de forma regular indicam acerto.`,
    },
    {
      titulo: `Roda de conversa: por que Scale é melhor que Offset?`,
      tipo: `roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Conduza a conversa após o teste da "tela elástica". Peça que cada aluno conte o que aconteceu ao redimensionar a janela. Anote no quadro as palavras Scale, Offset e AnchorPoint à medida que surgem.`,
      atividade: `Cada aluno aperta Play (F5), redimensiona a janela do Studio e observa o próprio menu. Depois, em roda, responde: "O que aconteceu com a minha interface quando a tela mudou de tamanho? Por que usar Scale ajuda?"`,
      gabarito: `Respostas esperadas: com Scale, a interface se ajusta proporcionalmente e continua centralizada em qualquer tela; com Offset, ela fica presa a pixels fixos e quebra em telas diferentes. O AnchorPoint ajuda a prender o elemento pelo centro, mantendo a centralização. Qualquer explicação que ligue Scale à adaptação da tela está correta.`,
    },
  ],
};
