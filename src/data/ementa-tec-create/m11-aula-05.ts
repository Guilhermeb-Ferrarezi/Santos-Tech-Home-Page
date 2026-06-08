import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Pintando com a Paleta de Cores",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Apresentar o sistema de cores e a paleta do MagicaVoxel para o aluno montar uma paleta fiel ao personagem do próprio jogo e aplicar cores voxel a voxel, por regiões e com o balde de preenchimento.`,
  descricao: `Nas aulas anteriores o aluno construiu o corpo do personagem em voxel, adicionou itens e acessórios e até montou um pequeno cenário em blocos. Agora chega o momento que transforma um boneco cinza em um personagem de verdade: a hora de pintar. Esta aula é dedicada inteira às cores, porque é a cor que faz a pele, a roupa, o cabelo e os detalhes ganharem identidade e ficarem parecidos com o personagem que cada aluno desenhou no próprio jogo 2D.

O coração da aula é a paleta de cores do MagicaVoxel, aquela grade de quadradinhos coloridos que fica do lado direito da tela. No MagicaVoxel, cada cor da paleta ocupa um índice, ou seja, uma posição numerada. Quando o aluno pinta um voxel, ele não está só escolhendo uma cor bonita: ele está ligando aquele bloco a uma posição da paleta. Entender isso é importante porque, se a cor de um índice mudar depois, todos os voxels ligados a ele mudam juntos. Esse pequeno detalhe assusta no começo, mas vira uma ferramenta poderosa para ajustar o personagem inteiro de uma vez.

O aluno aprende três formas de aplicar cor, da mais cuidadosa à mais rápida. Primeiro, pintar voxel a voxel com a ferramenta de atacar e o pincel, ideal para os olhos, a boca e os detalhes finos. Depois, pintar por regiões, selecionando um grupo de blocos para colorir de uma vez, ótimo para a roupa ou o cabelo. Por fim, o balde de preenchimento (Fill / Bucket), que troca a cor de uma área inteira da mesma cor com um único clique, perfeito para grandes superfícies como o corpo ou o fundo de uma camiseta. Saber escolher a forma certa para cada parte economiza muito tempo.

Ao final, cada aluno terá montado uma paleta enxuta e organizada, fiel às cores do seu personagem do jogo, e terá pintado pelo menos o corpo, a roupa e um detalhe do rosto. Essa pintura será a base das próximas aulas, em que entram texturas, materiais e o acabamento final antes da impressão 3D.`,
  materiais: [
    `Computadores com o MagicaVoxel já instalado e aberto, um por aluno, com o modelo do personagem do mês carregado`,
    `Projetor ou TV ligado à máquina do professor para mostrar a paleta e cada clique ao vivo`,
    `Arquivo de exemplo (.vox) do professor com um personagem já pintado, para mostrar o resultado pronto`,
    `Imagem de referência do personagem 2D de cada aluno (print do jogo no Construct 3 ou da pixel art do Aseprite), impressa ou aberta na tela`,
    `Folha impressa de "atalhos do dia" com as ferramentas Attach (pintar), Paint (modo cor), Bucket (balde) e Picker (conta-gotas)`,
    `Mouse externo, que facilita muito a pintura fina voxel a voxel`,
    `Impressora 3D disponível na sala apenas como referência visual do objetivo final (a impressão acontece nas próximas semanas)`,
  ],
  conceitosChave: [
    `Paleta — a grade de cores no lado direito da tela do MagicaVoxel, de onde o aluno escolhe a cor antes de pintar.`,
    `Índice de cor — a posição numerada de cada cor na paleta; todo voxel fica ligado a um índice, não a uma cor "solta".`,
    `Cor ativa — a cor selecionada no momento na paleta, que será aplicada no próximo clique de pintura.`,
    `Modo Paint (pintar) — o modo em que o clique troca a cor de um voxel já existente, sem adicionar nem apagar blocos.`,
    `Balde / Bucket (preenchimento) — ferramenta que troca a cor de toda uma área conectada da mesma cor com um único clique.`,
    `Picker (conta-gotas) — ferramenta que copia a cor de um voxel já pintado e a deixa como cor ativa, para reaproveitar tons.`,
    `Fidelidade — quando as cores do modelo em voxel batem com as cores do personagem do jogo, deixando os dois reconhecíveis como o mesmo.`,
  ],
  treinamento: `## O que o professor precisa saber

No MagicaVoxel a tela tem três áreas principais: à esquerda a barra de ferramentas (Attach, Erase, Paint, Move, etc.), no centro o modelo em 3D e à direita a paleta de cores com a janela de ajuste de cor (RGB / HSL). A paleta é um conjunto de 256 posições numeradas, os índices. Cada voxel guarda o número do índice, e não a cor em si. Por isso, se você mudar a cor de um índice na janela de ajuste, todos os voxels daquele índice mudam juntos. Para pintar sem adicionar blocos, use o modo Paint (atalho geralmente a tecla do modo cor) com a ferramenta de toque (Attach/Voxel). Antes da aula, abra o seu arquivo de exemplo, teste pintar um voxel, usar o balde (Bucket) e o conta-gotas (Picker), e confirme onde cada botão fica na sua versão.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento: no projetor, mostre o personagem cinza ao lado do desenho 2D do jogo. Pergunte: "O que falta para eles parecerem o mesmo personagem?" Conduza até a resposta "cor". Relembre que eles já escolheram cores na pixel art do Aseprite e que hoje as mesmas cores entram no 3D.

15 min — Conteúdo novo guiado: com todos olhando o projetor, clique numa cor da paleta à direita para defini-la como cor ativa. Mostre a janela de ajuste RGB/HSL e altere o tom, para que vejam o índice mudar. Selecione a ferramenta de pintura no modo Paint (cor) e clique num voxel do modelo: ele troca de cor sem virar bloco novo. Em seguida, demonstre o balde: escolha a ferramenta Bucket, selecione uma cor e clique numa superfície grande da mesma cor; tudo muda de uma vez. Por fim, use o conta-gotas (Picker) para capturar uma cor já aplicada e repintar outra parte com o mesmo tom.

25 min — Mão na massa: cada aluno abre o seu personagem e a imagem de referência. Primeiro monta uma paleta enxuta, escolhendo de 5 a 8 cores do personagem e ajustando-as na janela RGB/HSL. Depois pinta o corpo com o balde, a roupa por regiões e os detalhes do rosto voxel a voxel. Circule pela sala ajudando quem confunde adicionar bloco com pintar.

10 min — Desafio e compartilhar: desafie cada aluno a usar o conta-gotas pelo menos uma vez para reaproveitar um tom em vez de procurar a cor de novo. Dois ou três alunos mostram no projetor o personagem pintado ao lado do desenho do jogo e contam qual cor foi mais difícil de acertar.

## Como explicar de forma clara (linguagem para a idade)

Compare a paleta com uma caixa de lápis de cor numerada: cada lápis tem um número (o índice), e o desenho anota "aqui usei o lápis 5", não a cor em si. Se você trocar o lápis 5 por outro tom, tudo que foi pintado com ele muda junto, como num passe de mágica. Diga que o balde é como derramar tinta numa parede lisa: espalha de uma vez só na superfície inteira da mesma cor. O conta-gotas é "roubar" a cor de um pedaço já pintado para usar igualzinha em outro lugar. Reforce que pintar não cria blocos novos: é só dar cor ao que já existe.

## Erros comuns e como ajudar

O erro mais comum é estar na ferramenta de adicionar (Attach) em vez de Paint, criando blocos novos ao tentar pintar; mostre como alternar para o modo cor. Outro é usar o balde achando que ele pinta tudo, quando ele só preenche a área conectada da mesma cor; explique o limite. Muitos criam dezenas de cores quase iguais na paleta, deixando tudo bagunçado; oriente a montar uma paleta enxuta e usar o conta-gotas. Há quem mude a cor de um índice e se assuste ao ver outras partes mudarem; explique que é o índice compartilhado funcionando. Por fim, alunos esquecem de salvar com nome próprio (Export / Save) e perdem a pintura; padronize salvar ao final.`,
  exercicios: [
    {
      titulo: `Montando a paleta do meu personagem`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Acompanhe pelo projetor enquanto cada aluno escolhe as cores. Garanta que todos abram a imagem de referência do próprio personagem antes de começar. Limite a quantidade de cores para evitar paletas bagunçadas.`,
      atividade: `Com a imagem de referência do seu personagem do jogo aberta, clique numa cor da paleta à direita e ajuste-a na janela RGB/HSL até bater com a cor da pele do personagem. Repita até montar uma paleta enxuta de 5 a 8 cores (pele, roupa, cabelo e detalhes).`,
      gabarito: `O aluno tem uma paleta organizada com 5 a 8 cores claramente ligadas ao personagem (pele, roupa, cabelo, detalhes), ajustadas na janela RGB/HSL para baterem com a referência. Não há dezenas de cores quase iguais. Forma correta: clicar na cor da paleta e ajustar o tom no painel de cor antes de pintar.`,
    },
    {
      titulo: `Pintando o corpo com o balde`,
      tipo: `prática na ferramenta`,
      tempo: `9 min`,
      guiaProfessor: `Verifique se cada aluno está na ferramenta Bucket e no modo de pintar, e não na de adicionar blocos. O erro comum é o balde não preencher tudo porque a área não é toda da mesma cor; explique que o balde só espalha pela área conectada de cor igual.`,
      atividade: `Selecione a cor da pele como cor ativa, escolha a ferramenta Bucket (balde) e clique numa superfície grande do corpo do personagem. Observe a área inteira da mesma cor mudar de uma vez. Repita para preencher o restante do corpo.`,
      gabarito: `O corpo do personagem fica preenchido com a cor da pele usando o balde, sem que novos blocos tenham sido criados. O aluno entende que o Bucket trocou a cor apenas da área conectada da mesma cor e sabe clicar de novo nas partes que ficaram de fora. Estar no modo Paint (e não Attach) é o ponto-chave.`,
    },
    {
      titulo: `Detalhes finos do rosto voxel a voxel`,
      tipo: `desafio`,
      tempo: `12 min`,
      guiaProfessor: `Aqui entra a pintura precisa. Sugira aumentar o zoom e usar o mouse externo. Reforce o modo Paint para não criar blocos. Estimule comparar o rosto pintado com a referência o tempo todo.`,
      atividade: `Aproxime o zoom no rosto do personagem. No modo Paint, com o pincel, pinte voxel a voxel os olhos, a boca e qualquer detalhe pequeno do rosto, escolhendo a cor certa na paleta para cada parte. Use o conta-gotas (Picker) para reaproveitar uma cor já aplicada quando precisar.`,
      gabarito: `O rosto tem olhos, boca e detalhes pintados voxel a voxel com as cores corretas, fiéis à referência, sem blocos extras criados por engano. O aluno usou o modo Paint para colorir e o conta-gotas ao menos uma vez para repetir um tom. O zoom aproximado foi usado para a precisão.`,
    },
    {
      titulo: `Conferência de cores em dupla`,
      tipo: `em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas para que um confira o personagem do outro comparando com a referência. O foco é a fidelidade das cores e o uso do conta-gotas para padronizar tons repetidos. Circule mediando a conversa e anotando bons exemplos.`,
      atividade: `Em dupla, troquem de máquina. Olhando a referência do colega, apontem ao menos duas cores que poderiam ficar mais fiéis ao personagem do jogo. Ajudem a corrigir usando o conta-gotas para capturar tons já bons e o ajuste RGB/HSL para acertar os que estão diferentes. Expliquem um ao outro o que mudaram.`,
      gabarito: `Cada dupla identificou ao menos duas cores que destoavam da referência e as corrigiu, usando o conta-gotas para reaproveitar tons e o painel RGB/HSL para ajustar. Os dois personagens ficam mais fiéis aos desenhos do jogo, e a dupla consegue explicar quais cores mudaram e por quê.`,
    },
    {
      titulo: `Meu personagem totalmente pintado`,
      tipo: `projeto curto`,
      tempo: `14 min`,
      guiaProfessor: `Este exercício junta tudo: paleta, balde, regiões e detalhe fino. Apoie quem ainda não terminou a roupa ou o cabelo. Ao final, abra uma roda rápida para cada aluno mostrar o personagem pintado ao lado do desenho do jogo e dizer qual cor foi mais difícil de acertar.`,
      atividade: `Finalize a pintura do seu personagem: corpo e grandes áreas com o balde, roupa e cabelo por regiões, e os detalhes do rosto voxel a voxel, tudo usando apenas as cores da sua paleta. Compare lado a lado com a referência do jogo, ajuste o que estiver fora e salve o arquivo (Export / Save) com o seu nome. Mostre o resultado para a turma.`,
      gabarito: `O personagem está totalmente pintado e fiel à referência do jogo: corpo e áreas grandes feitos com balde, roupa e cabelo por regiões, e rosto detalhado voxel a voxel, tudo dentro de uma paleta enxuta. O arquivo foi salvo com nome próprio. Na roda, o aluno aponta a cor mais difícil e como a resolveu (ajuste RGB/HSL ou conta-gotas). Esse é o personagem pronto para receber texturas e materiais nas próximas aulas.`,
    },
  ],
};
