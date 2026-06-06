import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Pintando com Paletas",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Apresentar o sistema de cores do MagicaVoxel para que cada aluno escolha uma paleta e pinte as grandes áreas de cor base do seu personagem ou objeto.`,
  descricao: `Até agora o aluno construiu, apagou e deu forma ao seu modelo usando voxels, mas tudo ainda está de uma cor só. Nesta aula a turma descobre que cada cubinho pode ter a sua própria cor, e que escolher bem as cores é o que transforma um bloco cinza em um personagem reconhecível. O coração da aula é a paleta de cores do MagicaVoxel: aquela faixa colorida na lateral da tela onde ficam guardadas todas as cores disponíveis para pintar.

O aluno vai aprender três coisas que andam juntas: como olhar a paleta e escolher uma cor, como usar a ferramenta de pintura para trocar a cor de voxels que já existem, e como pensar em "áreas de cor base" antes de sair pintando. Áreas de cor base são as grandes regiões do modelo: a pele, a roupa, o cabelo, o tronco de uma árvore, a casca de uma fruta. Nesta aula o foco é pintar essas grandes regiões; os pequenos detalhes ficam para a próxima aula.

A ideia central é que cor conta história. Um mesmo personagem fica completamente diferente se for verde, azul ou laranja. Por isso o aluno escolhe uma paleta, ou seja, um conjunto pequeno de cores que combinam entre si, em vez de usar todas as cores ao mesmo tempo. Trabalhar com poucas cores deixa o modelo mais bonito, mais organizado e mais fácil de imprimir depois.

Ao final da aula, cada aluno terá o seu modelo com as cores base pintadas: nada de cubo cinza, mas também nada de bagunça colorida. O modelo fica pronto para receber os detalhes finos na aula seguinte. É uma aula muito visual e muito gostosa, porque o resultado aparece na tela na hora em que o aluno clica.`,
  materiais: [
    `Computadores com o MagicaVoxel instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor mostrar a tela do MagicaVoxel passo a passo`,
    `Arquivo de exemplo .vox com um personagem simples já modelado, mas ainda sem cores (cinza)`,
    `Folha impressa com 3 ou 4 paletas de cores prontas para os alunos que travarem na escolha`,
    `O próprio modelo de cada aluno, salvo das aulas anteriores (já com a forma pronta)`,
    `Quadro branco ou flip chart para anotar os nomes das ferramentas e atalhos`,
  ],
  conceitosChave: [
    `Paleta — faixa de cores na lateral direita do MagicaVoxel onde ficam guardadas todas as cores que você pode usar para pintar.`,
    `Cor base — a cor principal de uma grande região do modelo, como a pele, a roupa ou o cabelo do personagem.`,
    `Ferramenta de pintura (Paint) — modo que troca a cor de um voxel que já existe sem criar nem apagar cubinhos.`,
    `Índice de cor — o número da posição da cor dentro da paleta; cada quadradinho da paleta tem o seu lugar fixo.`,
    `Conta-gotas (Pick) — recurso que copia a cor de um voxel já pintado para você reutilizar a mesma cor exata.`,
    `Esquema de cores — conjunto pequeno de cores escolhidas para combinarem entre si e deixarem o modelo harmônico.`,
    `Modo de pintura por face, voxel ou objeto — opções que decidem se você pinta um cubinho, uma camada ou o modelo inteiro de uma vez.`,
  ],
  treinamento: `## O que o professor precisa saber

No MagicaVoxel, pintar é diferente de construir. Na barra de ferramentas do topo existem três modos principais: Attach (anexar, adiciona voxels), Erase (apagar, remove voxels) e Paint (pintar, troca a cor sem mexer na forma). Nesta aula o aluno passa quase todo o tempo no modo Paint. A paleta fica na lateral direita da tela: é aquela grade de quadradinhos coloridos. A cor que está selecionada na paleta é a cor que o pincel vai aplicar. Logo abaixo da paleta há um seletor de cor maior (com matiz, saturação e brilho) para criar cores novas. Atalhos úteis: a tecla "B" costuma ativar o pincel, e segurar "Alt" e clicar funciona como conta-gotas (Pick), copiando a cor de um voxel. Salve com Ctrl+S sempre.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra o modelo cinza de exemplo no projetor. Pergunte: "que cores esse personagem deveria ter?". Liste as respostas no quadro. Peça que cada aluno abra o seu próprio modelo das aulas anteriores. Garanta que todos veem a paleta na lateral direita.

Conteúdo novo guiado (15 min): no projetor, clique no modo Paint na barra de topo. Clique em um quadradinho colorido da paleta para escolher uma cor. Passe o mouse sobre o modelo e clique em um voxel: mostre que a cor troca na hora. Mostre o seletor de cor grande para criar uma cor nova arrastando o ponto. Ensine o Pick: segure Alt e clique em um voxel já pintado para "pegar" aquela cor. Mostre os modos de pincel (voxel, face, box) na barra lateral esquerda e explique que "voxel" pinta um cubinho e "box" pinta uma área arrastando.

Mão na massa (25 min): cada aluno escolhe uma paleta de 3 a 5 cores e pinta APENAS as áreas de cor base do seu modelo (pele, roupa, cabelo). Circule pela sala. Incentive o uso do modo box para pintar grandes regiões rápido. Lembre de salvar com Ctrl+S a cada poucos minutos. Não deixe ninguém entrar em detalhes ainda.

Desafio e compartilhar (10 min): proponha o desafio de trocar uma única cor base e ver como o personagem muda de "clima". Faça uma rodada rápida onde cada aluno mostra a tela e diz qual paleta escolheu e por quê.

## Como explicar de forma clara

Use a comparação com um estojo de canetinhas: a paleta é o estojo, cada cor é uma canetinha, e o pincel é a sua mão escolhendo qual usar. Diga que "cor base é a cor da camiseta inteira, não os botões". Reforce a regra das poucas cores: "menos cores, mais bonito". Quando explicar o conta-gotas, fale "é como tirar uma foto da cor para usar igualzinha de novo". Evite termos técnicos como matiz no começo; fale "cor mais clara" ou "cor mais escura". Mostre sempre antes de pedir, porque a turma de 10 a 15 anos aprende muito mais vendo do que ouvindo.

## Erros comuns e como ajudar

O erro mais comum é o aluno continuar no modo Attach e criar voxels novos sem querer ao tentar pintar; ajude conferindo se o modo Paint está ativo no topo. Outro erro é pintar voxel por voxel uma região gigante: mostre o modo box para arrastar e pintar áreas grandes. Muitos escolhem cores demais e o modelo vira uma bagunça; peça que voltem para 3 a 5 cores. Alguns esquecem de salvar e perdem o trabalho; crie o hábito do Ctrl+S. Há também quem queira já fazer olhos e detalhes; lembre que hoje é só cor base. Por fim, se alguém apagar um voxel sem querer, mostre o Ctrl+Z para desfazer.`,
  exercicios: [
    {
      titulo: `Trocando a primeira cor`,
      tipo: `Prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Garanta que todos estão no modo Paint antes de começar. Caminhe pela sala confirmando que ninguém está criando voxels novos por engano.`,
      atividade: `Ative o modo Paint, escolha uma cor na paleta e pinte um voxel qualquer do seu modelo. Depois escolha outra cor e pinte o mesmo voxel de novo para ver a troca.`,
      gabarito: `O aluno demonstra que clicou no modo Paint, selecionou uma cor na paleta lateral e clicou em um voxel, observando a cor mudar sem adicionar nem remover cubinhos. Trocar a cor uma segunda vez confirma que ele entendeu o modo de pintura.`,
    },
    {
      titulo: `Escolhendo a minha paleta`,
      tipo: `Projeto curto`,
      tempo: `7 minutos`,
      guiaProfessor: `Ofereça a folha impressa com paletas prontas para quem travar. Reforce o limite de 3 a 5 cores e ajude a justificar a escolha.`,
      atividade: `Escolha de 3 a 5 cores que combinem entre si para o seu personagem ou objeto. Anote no caderno quais cores você escolheu e para qual parte do modelo cada uma vai servir.`,
      gabarito: `O aluno apresenta uma lista de 3 a 5 cores e associa cada cor a uma área base, por exemplo: marrom para o cabelo, bege para a pele, azul para a roupa. A escolha mostra que ele pensou em combinação e não pegou cores aleatórias.`,
    },
    {
      titulo: `Pintando as áreas base`,
      tipo: `Prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Incentive o modo box para regiões grandes. Lembre o Ctrl+S a cada poucos minutos. Não deixe ninguém entrar em detalhes finos ainda.`,
      atividade: `Use a sua paleta para pintar todas as grandes áreas de cor base do modelo: pele, roupa, cabelo ou as partes principais do seu objeto. Salve com Ctrl+S ao terminar.`,
      gabarito: `O modelo fica com todas as grandes regiões cobertas pelas cores escolhidas, sem áreas cinzas sobrando e sem detalhes pequenos ainda. O arquivo foi salvo. O resultado deve permitir reconhecer o personagem só pelas cores base.`,
    },
    {
      titulo: `Conta-gotas em dupla`,
      tipo: `Em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas. Mostre de novo que segurar Alt e clicar copia a cor. Circule para garantir que ambos pratiquem o conta-gotas.`,
      atividade: `Em dupla, um aluno mostra o seu modelo e o colega usa o conta-gotas (segurar Alt e clicar em um voxel pintado) para copiar uma cor já usada e pintar outra parte com a mesma cor exata. Depois troquem de papel.`,
      gabarito: `Cada aluno consegue usar o conta-gotas para capturar uma cor existente e reaplicá-la em outro voxel, mantendo a cor idêntica. A dupla explica em voz alta para que serve o recurso: reutilizar a mesma cor sem precisar procurar de novo na paleta.`,
    },
    {
      titulo: `Mudando o clima do personagem`,
      tipo: `Desafio e roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Conduza primeiro o desafio individual e depois a roda. Faça perguntas abertas sobre como a cor muda a sensação do personagem. Valorize todas as respostas.`,
      atividade: `Desafio: troque apenas a cor base da roupa do seu personagem por uma cor bem diferente e observe como o "clima" dele muda. Depois, na roda, mostre a tela e conte qual paleta você escolheu e por quê.`,
      gabarito: `O aluno troca uma cor base e percebe que o personagem passa uma sensação diferente, por exemplo de alegre para sombrio ou de calmo para vibrante. Na roda, ele explica a sua paleta com pelo menos um motivo, mostrando que entendeu que as cores contam uma história.`,
    },
  ],
};
