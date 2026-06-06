import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Obstáculos que Desafiam",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Criar três obstáculos com volume 3D no MagicaVoxel — espinhos, caixas e pedras — usando as ferramentas de extrudar e apagar, e salvar cada modelo na pasta do projeto.`,
  descricao: `Todo bom jogo precisa de obstáculos: aquelas coisas que o jogador precisa desviar, pular ou contornar para vencer. Nesta aula as crianças saem dos itens mágicos da Aula 1 e passam para os vilões do cenário: espinhos pontudos, caixas pesadas e pedras duras. A grande diferença é que agora o foco é o VOLUME — fazer formas que parecem ter peso de verdade, ocupando espaço no mundo do jogo, e não apenas blocos chapados.

Para isso, vamos aprofundar duas ferramentas poderosas do MagicaVoxel. A primeira é a de extrudar (puxar), que estica uma face do modelo para fora, como puxar massinha de modelar para criar uma ponta ou alongar um bloco. A segunda é a de apagar (Erase), que tira voxels para esculpir cantos, criar buracos e dar formato. Com essas duas técnicas, um cubo simples vira uma pedra cheia de cantos ou um espinho afiado.

O professor vai conduzir a turma construindo um exemplo na frente de todos no projetor, passo a passo, e depois cada criança recria e inventa o seu próprio obstáculo. No fim, cada aluno terá pelo menos um modelo novo salvo na pasta do projeto, pronto para entrar no jogo nas próximas semanas. O capricho está em fazer formas reconhecíveis: o espinho precisa parecer perigoso, a caixa precisa parecer sólida e a pedra precisa parecer dura.

Esta é a segunda aula do mês, dentro da missão de montar um pacote completo de assets voxel para o jogo. Quanto mais variados forem os obstáculos, mais divertido e desafiador o jogo final vai ficar.`,
  materiais: [
    `Computadores com o MagicaVoxel já aberto, um por criança`,
    `Projetor ou TV conectada ao computador do professor para a demonstração`,
    `Exemplos prontos na tela: um espinho, uma caixa e uma pedra já modelados`,
    `Pasta do projeto do jogo criada e visível na área de trabalho de cada máquina`,
    `Folha de rascunho e lápis para a criança desenhar o obstáculo antes de modelar`,
    `Imagens de referência impressas: espinhos, caixotes de madeira e pedras de jogos`,
  ],
  conceitosChave: [
    `Obstáculo — qualquer coisa no jogo que atrapalha o jogador e precisa ser desviada, como um espinho ou uma pedra.`,
    `Volume — quando uma forma parece ter peso e ocupa espaço de verdade, em vez de ser plana e fininha.`,
    `Extrudar (puxar) — esticar uma parte do modelo para fora, como puxar massinha para criar uma ponta.`,
    `Apagar (Erase) — tirar voxels do modelo para esculpir cantos, fazer buracos e dar formato.`,
    `Voxel — o cubinho mágico, o tijolinho 3D que junta com outros para formar tudo no MagicaVoxel.`,
    `Face — cada um dos lados planos do modelo; é dela que a gente puxa quando vai extrudar.`,
    `Salvar na pasta — guardar o modelo no lugar certo do projeto para não perder e poder usar depois.`,
  ],
  treinamento: `## O que o professor precisa saber

O MagicaVoxel é um programa de modelagem 3D feito de cubinhos chamados voxels. Você não precisa ser especialista: basta dominar três ações desta aula. A primeira é adicionar voxels com a ferramenta "Attach" (o ícone de lápis ou cubo no painel de ferramentas à esquerda). A segunda é apagar com a ferramenta "Erase" (ícone de borracha, atalho tecla 3). A terceira é extrudar, que no MagicaVoxel se faz no modo "Face": selecione a ferramenta de mover/puxar e arraste uma face do modelo para fora. A cena de trabalho fica no centro da tela; a paleta de cores fica à direita; as ferramentas ficam à esquerda. Para girar a câmera, segure o botão direito do mouse e arraste. Para salvar, vá em "File" no topo e escolha "Save As", apontando para a pasta do projeto. Teste tudo uma vez antes da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a Aula 1 perguntando que itens mágicos cada um fez. Mostre no projetor os três exemplos prontos — espinho, caixa, pedra — e pergunte: "O que esses três têm em comum?" Conduza até a palavra OBSTÁCULO. Gire cada modelo com o botão direito para mostrar que têm volume por todos os lados.

Conteúdo novo guiado (15 min): no seu computador, comece um modelo novo (File, New). Primeiro a CAIXA: com a ferramenta "Attach" e o modo "Box" ativado, arraste para criar um cubo cheio. Depois o ESPINHO: crie um quadrado baixo na base, selecione a ferramenta de extrudar no modo "Face", clique no topo e PUXE para cima esticando até virar uma ponta; use "Erase" (tecla 3) para afinar as laterais e deixar pontudo. Por fim a PEDRA: faça um bloco e use "Erase" para tirar cantos aqui e ali, deixando irregular. Narre cada clique em voz alta.

Mão na massa (25 min): cada criança escolhe um obstáculo para começar (sugira a caixa, que é a mais fácil). Circule pela sala. Quem terminar rápido parte para o espinho e depois para a pedra. O objetivo mínimo é UM modelo bem-feito e salvo; o ideal são os três. Lembre todos de pintar com a paleta à direita: marrom para a caixa, cinza para a pedra, prata ou vermelho para o espinho. Ao terminar cada modelo, oriente a salvar: "File", "Save As", escolher a pasta do projeto e dar um nome claro como "espinho" ou "caixa".

Desafio e compartilhar (10 min): proponha o desafio "deixe seu obstáculo mais perigoso" — mais pontas no espinho, mais cantos quebrados na pedra. Depois cada criança gira o próprio modelo no projetor ou na própria tela e conta qual obstáculo fez e por que ele desafia o jogador.

## Como explicar para crianças

Use a analogia da massinha de modelar: "Extrudar é puxar a massinha para fora para criar uma ponta." Para apagar, diga: "A borracha vai esculpir, igual quando você tira pedacinhos para deixar a pedra cheia de cantos." Reforce a ideia de volume com gestos: peça que apertem as duas mãos como se segurassem uma pedra pesada. Lembre sempre: "Gira o modelo com o botão direito para ver se ele parece legal por todos os lados, não só de frente."

## Erros comuns e como ajudar

O erro mais comum é a criança fazer um obstáculo plano, fininho, sem volume — ajude pedindo para girar a câmera e perceber que está chapado. Outro erro é extrudar para o lado errado ou puxar demais: ensine a desfazer com Ctrl+Z. Muitos esquecem de mudar de ferramenta e tentam apagar com a de adicionar ligada; aponte o ícone correto à esquerda. Há quem esqueça de salvar ou salve fora da pasta do projeto — confira com cada um o caminho ("Save As" na pasta certa) e o nome do arquivo. Por fim, alguns querem detalhar demais e travam; incentive a terminar a forma básica primeiro e detalhar depois.`,
  exercicios: [
    {
      titulo: `Caça aos obstáculos`,
      tipo: `Aquecimento oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre os três exemplos prontos no projetor e conduza a conversa sem dar a resposta de imediato; deixe as crianças observarem e girarem os modelos com o botão direito.`,
      atividade: `Olhe os três modelos na tela — o espinho, a caixa e a pedra. O que eles têm em comum? Para que servem dentro de um jogo?`,
      gabarito: `Os três são obstáculos: coisas que atrapalham o jogador e que ele precisa desviar, pular ou contornar. Todos têm volume, ou seja, parecem ter peso e ocupam espaço por todos os lados.`,
    },
    {
      titulo: `Construindo a caixa sólida`,
      tipo: `Mão na massa guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza em conjunto. Garanta que a ferramenta "Attach" e o modo "Box" estejam ativos no painel à esquerda. Mostre como arrastar para formar o cubo cheio e como pintar de marrom pela paleta à direita.`,
      atividade: `Crie uma caixa de madeira: faça um cubo cheio com a ferramenta de adicionar no modo "Box" e pinte de marrom. Gire com o botão direito para conferir se ela parece sólida por todos os lados.`,
      gabarito: `A criança consegue uma caixa em formato de cubo, cheia (sem buracos), pintada de marrom e com volume visível ao girar a câmera. Espera-se um modelo simples, mas reconhecível como um caixote.`,
    },
    {
      titulo: `Puxando o espinho`,
      tipo: `Prática de extrudar`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre primeiro no projetor. Faça uma base quadrada baixa, ative a ferramenta de extrudar no modo "Face", clique no topo e puxe para cima. Mostre a tecla 3 ("Erase") para afinar as laterais e deixar pontudo. Lembre do Ctrl+Z se puxarem demais.`,
      atividade: `Crie um espinho perigoso: comece com uma base quadrada, use a ferramenta de extrudar (puxar) para esticar o topo para cima e depois apague as laterais para terminar em ponta.`,
      gabarito: `O espinho tem uma base mais larga embaixo e afina até uma ponta no topo, mostrando que a criança usou o extrudar para puxar e o apagar para afinar. O modelo parece afiado e perigoso ao ser girado.`,
    },
    {
      titulo: `Esculpindo a pedra irregular`,
      tipo: `Prática de apagar`,
      tempo: `8 minutos`,
      guiaProfessor: `Reforce que pedra de verdade não é um cubo perfeito. Mostre a ferramenta "Erase" (tecla 3) tirando voxels de cantos diferentes para deixar a forma irregular. Sugira pintar de cinza. Incentive girar a câmera para checar todos os lados.`,
      atividade: `Crie uma pedra dura: faça um bloco cinza e use a ferramenta de apagar para tirar cantos em lugares diferentes, deixando a forma irregular e cheia de quinas, como uma rocha de verdade.`,
      gabarito: `A pedra não é um cubo perfeito: tem cantos removidos em pontos variados, formato irregular e cor cinza. Ao girar, percebe-se volume e aparência de rocha, provando o uso correto da ferramenta de apagar.`,
    },
    {
      titulo: `Obstáculo desafiador e galeria`,
      tipo: `Desafio criativo e compartilhar`,
      tempo: `6 minutos`,
      guiaProfessor: `Proponha deixar um dos obstáculos ainda mais perigoso (mais pontas ou mais cantos quebrados). Garanta que cada criança salve com "File" e "Save As" na pasta do projeto, com nome claro. Depois conduza a roda de apresentação.`,
      atividade: `Escolha o seu melhor obstáculo e deixe-o mais perigoso, adicionando pontas ou cantos. Salve o modelo na pasta do projeto com um nome claro e mostre para a turma, contando por que ele desafia o jogador.`,
      gabarito: `A criança aprimora um obstáculo deixando-o mais ameaçador, salva o arquivo corretamente na pasta do projeto com nome reconhecível (como "espinho" ou "pedra") e explica em uma frase por que o obstáculo desafia o jogador — por exemplo, "o espinho machuca se o jogador encostar".`,
    },
  ],
};
