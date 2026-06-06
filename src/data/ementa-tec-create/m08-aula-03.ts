import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Trazendo os sprites para a tela",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Criar o personagem principal como objeto Sprite no Construct 3, importando a arte em pixel art feita no Aseprite e posicionando os primeiros objetos no Layout.`,
  descricao: `Nesta aula o aluno descobre o objeto mais importante de qualquer jogo 2D no Construct 3: o Sprite. Um Sprite é a "moldura" que segura uma imagem dentro do jogo. É nele que entram os desenhos em pixel art que a turma criou no Aseprite nas aulas anteriores. Sem Sprite, o personagem é só um arquivo PNG parado na pasta; com Sprite, ele vira um objeto vivo que mais tarde vai andar, pular e reagir às regras do jogo.

O foco é prático e visual. O aluno vai inserir um novo objeto Sprite, abrir o editor de imagem interno do Construct 3, importar (ou colar) o desenho do personagem e ver essa arte aparecer no Layout, que é a tela onde o jogo é montado. Em seguida, ele dá um nome claro ao objeto (por exemplo, "Jogador") e arrasta o personagem para o lugar certo do cenário. É a primeira vez que a arte de cada um ganha presença real dentro do próprio jogo, e isso costuma gerar bastante entusiasmo.

A aula também planta a diferença entre dois conceitos que confundem iniciantes: o objeto (o tipo, criado uma vez) e a instância (cada cópia que aparece no Layout). O professor não precisa aprofundar agora, mas deve nomear essa ideia, porque ela volta nas próximas aulas. Ao final, cada aluno terá o personagem principal na tela e mais um ou dois objetos de apoio posicionados, deixando o projeto pronto para receber o cenário completo na Aula 4.`,
  materiais: [
    `Computadores com Construct 3 aberto (versão de navegador, em construct.net), um por aluno`,
    `Projetor ou TV para o professor demonstrar cada passo na tela grande`,
    `Arquivos de exemplo em PNG com fundo transparente: um personagem e dois objetos simples (moeda, plataforma), na pasta da turma`,
    `Os desenhos de personagem que os alunos exportaram do Aseprite (PNG com transparência), como reserva caso algum aluno não tenha o seu`,
    `Projeto do Construct 3 iniciado nas aulas anteriores, salvo na conta ou na nuvem`,
    `Folha rápida com o passo a passo "Inserir Sprite" impressa para cada dupla`,
  ],
  conceitosChave: [
    `Sprite — objeto do Construct 3 que guarda uma imagem (o desenho do personagem) e a mostra dentro do jogo.`,
    `Layout — a tela onde você monta o jogo, arrastando e posicionando os objetos; é o "cenário" visual.`,
    `Importar — trazer um arquivo de imagem de fora (o PNG do Aseprite) para dentro do Construct 3.`,
    `Transparência — o fundo "vazio" do PNG (em xadrez no editor) que faz o personagem não aparecer dentro de um quadrado branco.`,
    `Objeto e instância — o objeto é o tipo criado uma vez; a instância é cada cópia dele colocada no Layout.`,
    `Editor de imagem — a janela interna do Construct 3 onde você importa, cola ou ajusta o desenho do Sprite.`,
    `Origem (origin) — o ponto de referência do Sprite que define onde ele "segura" a imagem na hora de posicionar.`,
  ],
  treinamento: `## O que o professor precisa saber

O Sprite é o coração de um jogo 2D. Tudo que aparece e se mexe na tela costuma ser um Sprite: personagem, inimigo, moeda, plataforma. Nesta aula você não programa nada ainda; apenas insere objetos Sprite e coloca neles as imagens em pixel art. Abra o Construct 3 antes da aula em construct.net e deixe o projeto da turma carregado. Confira que você sabe identificar três áreas da tela: o Layout no centro (a área quadriculada), a barra de Projeto à direita (Project Bar, lista de objetos e camadas) e a barra de Propriedades à esquerda (Properties Bar). Tenha em mãos um PNG de personagem com fundo transparente para demonstrar.

## Passo a passo da aula

Aquecimento (10 min). Pergunte à turma: "Cadê o desenho que você fez no Aseprite? Hoje ele entra no jogo." Mostre no projetor o personagem como PNG parado na pasta e diga que vamos transformá-lo em algo vivo. Reveja rapidamente o que é o Layout, apontando a área quadriculada na tela.

Conteúdo novo guiado (15 min). Demonstre no projetor. 1. No Layout, dê um clique duplo em qualquer área vazia (ou clique com o botão direito e escolha "Insert new object"). 2. Na janela que abre, encontre e clique em "Sprite". Clique em "Insert". 3. O cursor vira uma cruz: clique uma vez no Layout para posicionar o objeto. 4. Abre o editor de imagem (Image editor). Aqui você traz a arte: clique no ícone de pasta "Load image from file" e escolha o PNG do Aseprite, ou cole com Ctrl+V se copiou o desenho. 5. Mostre o fundo xadrez: isso é a transparência, e é por isso que o personagem não fica num quadrado branco. 6. Feche o editor no X. O personagem aparece no Layout. 7. Na barra de Propriedades à esquerda, no campo "Name", troque o nome para "Jogador". Reforce: criamos um objeto; cada cópia na tela é uma instância.

Mão na massa (25 min). Cada aluno repete os passos com o próprio desenho: inserir Sprite, importar a arte, renomear para "Jogador", arrastar para uma boa posição no Layout. Quem terminar insere mais um Sprite de apoio (moeda ou plataforma) usando os arquivos de exemplo. Circule pela sala conferindo nome e transparência de cada um.

Desafio e compartilhar (10 min). Desafio: posicionar três cópias da mesma moeda no Layout (Ctrl+C, Ctrl+V) e perceber que são instâncias do mesmo objeto. Cada aluno mostra a tela e diz o nome que deu ao personagem.

## Como explicar de forma clara

Use a imagem do porta-retratos: "O Sprite é a moldura; o desenho é a foto que você coloca dentro." Para objeto e instância, compare com carimbo: "O objeto é o carimbo; cada marca que ele deixa no papel é uma instância." Para transparência, diga: "O fundo xadrez é invisível no jogo, como um vidro." Evite termos em inglês soltos; sempre traduza ("Layout é o palco", "Properties é o painel de ajustes"). Fale devagar e espere a turma executar cada clique antes de seguir.

## Erros comuns e como ajudar

O erro mais frequente é importar um PNG com fundo branco em vez de transparente; o personagem fica dentro de um quadrado. Confira se a arte saiu do Aseprite como PNG com transparência; se não, use a borracha do editor de imagem para limpar o fundo. Outro erro é esquecer de renomear o objeto, que fica como "Sprite", "Sprite2"; pare a turma e renomeiem juntos. Alguns alunos inserem o objeto e perdem o editor de imagem; basta dar duplo clique no Sprite no Layout para reabri-lo. Há quem clique fora do Layout e crie o objeto em local errado; mostre como arrastar de volta. Por fim, ao colar várias cópias, alguns acham que criaram objetos diferentes: aproveite para reforçar que todas são instâncias do mesmo objeto.`,
  exercicios: [
    {
      titulo: `Meu primeiro Sprite`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Conduza passo a passo no projetor enquanto a turma acompanha. O objetivo é só inserir um Sprite e colocar uma imagem dentro; ainda não precisa ser o desenho final. Pause após cada clique para todos acompanharem.`,
      atividade: `Insira um novo objeto Sprite no Layout, abra o editor de imagem e importe o PNG de exemplo do personagem. Feche o editor e confira que o personagem aparece na tela sem um quadrado branco em volta.`,
      gabarito: `O aluno tem um objeto Sprite visível no Layout com a arte importada e fundo transparente (sem quadrado branco). O editor de imagem mostrou o fundo xadrez ao importar.`,
    },
    {
      titulo: `Batizando o herói`,
      tipo: `Desafio individual`,
      tempo: `6 min`,
      guiaProfessor: `Mostre onde fica o campo "Name" na barra de Propriedades à esquerda. Reforce que um nome claro evita confusão nas próximas aulas, quando houver muitos objetos.`,
      atividade: `Renomeie o seu Sprite para "Jogador" usando o campo Name na barra de Propriedades. Depois insira um segundo Sprite com uma moeda de exemplo e nomeie-o como "Moeda".`,
      gabarito: `Existem dois objetos nomeados corretamente: "Jogador" e "Moeda". Nenhum objeto permaneceu com nome genérico como "Sprite" ou "Sprite2".`,
    },
    {
      titulo: `Caça ao fundo transparente`,
      tipo: `Atividade em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Entregue às duplas um PNG com fundo branco propositalmente. Deixe que descubram o problema e usem a borracha do editor de imagem ou troquem por um PNG transparente. Circule ajudando quem travar.`,
      atividade: `Em dupla, importem a imagem com fundo branco que o professor enviou. Identifiquem o problema do quadrado em volta do personagem e corrijam, deixando o fundo transparente (em xadrez no editor).`,
      gabarito: `A dupla percebeu que o fundo branco aparece como quadrado no jogo e corrigiu, deixando o personagem com fundo transparente. Sabem explicar que o xadrez no editor significa transparência.`,
    },
    {
      titulo: `Roda das instâncias`,
      tipo: `Roda de conversa`,
      tempo: `6 min`,
      guiaProfessor: `Sente a turma em círculo. Use a comparação do carimbo. Faça perguntas e deixe os alunos explicarem com as próprias palavras; corrija com gentileza. Não aprofunde em programação ainda.`,
      atividade: `Conversem: qual a diferença entre o objeto "Moeda" e as três moedas que aparecem na tela? Cada aluno dá um exemplo da vida real de "um molde e várias cópias".`,
      gabarito: `Os alunos explicam que o objeto é o tipo (o molde, criado uma vez) e cada moeda na tela é uma instância (uma cópia). Exemplos válidos: carimbo e marcas, forma e biscoitos, molde e peças.`,
    },
    {
      titulo: `Montando a cena inicial`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Este é o exercício mais completo e fecha a aula. Cada aluno deve usar o próprio personagem do Aseprite, se tiver. Verifique nome, transparência e posição de cada projeto antes de salvar.`,
      atividade: `Monte a cena inicial do seu jogo: importe o seu personagem (do Aseprite) como Sprite "Jogador", posicione-o no Layout e adicione pelo menos dois objetos de apoio (moeda e plataforma) já nomeados. Salve o projeto.`,
      gabarito: `O projeto tem o "Jogador" com a arte própria do aluno, mais dois objetos de apoio nomeados ("Moeda", "Plataforma"), todos com fundo transparente e posicionados no Layout. O projeto foi salvo com sucesso.`,
    },
  ],
};
