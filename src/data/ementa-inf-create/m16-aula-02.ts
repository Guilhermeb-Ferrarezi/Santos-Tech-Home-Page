import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Camadas e Movimento",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Aprender a sobrepor camadas (overlay) e a usar animações e keyframes no CapCut para criar zoom e movimento equilibrados em uma mesma cena.`,
  descricao: `Nesta aula o aluno descobre que um vídeo profissional quase nunca tem só uma imagem por vez na tela. Os criadores empilham camadas: o vídeo principal embaixo e, por cima, fotos, figurinhas, recortes ou um segundo vídeo. No CapCut isso se chama overlay (sobreposição), e é o que permite colocar um print do celular "flutuando" em cima da gravação ou mostrar duas cenas ao mesmo tempo. Aprender a empilhar camadas é o primeiro grande passo para sair do vídeo "amador" e chegar no "editado de verdade".

A segunda ideia da aula é o movimento. Um vídeo que fica totalmente parado cansa os olhos. Por isso usamos dois recursos. As animações de entrada e saída fazem uma camada aparecer deslizando, ampliando ou desaparecendo com suavidade, em vez de surgir do nada. Já os keyframes (quadros-chave) são pontinhos que marcam "aqui a imagem está pequena" e "aqui ela está grande", e o CapCut preenche tudo entre os dois pontos sozinho, criando um zoom ou um deslocamento contínuo. É a mesma técnica que faz a câmera parecer que se aproxima lentamente de um rosto.

O foco do mês é deixar os vídeos mais profissionais, e o entregável final é um vídeo profissional. Esta aula entrega duas ferramentas poderosas para isso. Mas há um cuidado importante que o professor deve repetir o tempo todo: equilíbrio. Movimento demais, animação demais e camadas demais cansam quem assiste. O segredo é usar pouco e no momento certo, sempre com um objetivo claro.

Ao final, cada aluno vai montar uma cena curta combinando uma camada de overlay, uma animação de entrada e um keyframe de zoom, percebendo na prática como esses três recursos trabalham juntos sem brigar entre si.`,
  materiais: [
    `Computadores com o CapCut (versão para computador) instalado e aberto, um por aluno`,
    `Projetor ou tela grande para o professor demonstrar cada passo no CapCut`,
    `Arquivo de vídeo de exemplo (um clipe curto de 10 a 20 segundos) já salvo na pasta de cada computador`,
    `Duas imagens de exemplo para servir de overlay (um print/figurinha e uma foto)`,
    `Conta do CapCut (login com Google ou e-mail) já feita por cada aluno`,
    `Fones de ouvido (opcional, caso o vídeo de exemplo tenha som)`,
    `Folha impressa ou slide com o "passo do keyframe" para os alunos consultarem`,
  ],
  conceitosChave: [
    `Camada (overlay) — vídeo ou imagem colocado por cima do clipe principal, aparecendo ao mesmo tempo na tela.`,
    `Linha do tempo — a faixa de baixo onde os clipes ficam em ordem; cada camada nova vira uma trilha acima da principal.`,
    `Animação de entrada — efeito que faz uma camada surgir com suavidade, deslizando ou ampliando, em vez de aparecer de repente.`,
    `Animação de saída — efeito que faz a camada desaparecer com suavidade no fim do tempo dela.`,
    `Keyframe (quadro-chave) — ponto que guarda um valor (tamanho, posição) em um momento; com dois keyframes diferentes o CapCut cria o movimento entre eles.`,
    `Zoom — aproximação ou afastamento da imagem, feito mudando a escala entre dois keyframes.`,
    `Equilíbrio — usar movimento e camadas com moderação, só quando ajudam a contar a história.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em CapCut. Precisa apenas dominar três gestos: adicionar uma camada por cima (overlay), aplicar uma animação e criar dois keyframes. Faça o exercício inteiro sozinho uma vez antes da aula, com o vídeo de exemplo. Assim você saberá exatamente onde cada botão fica.

Três palavras guiam a aula: camada, animação e keyframe. Camada é colocar uma imagem em cima do vídeo. Animação é o jeito suave de a camada entrar e sair. Keyframe é o pontinho que marca início e fim de um movimento, como um zoom. Repita que mais não é melhor: o objetivo é equilíbrio.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min). Abra o CapCut no projetor. Pergunte: "alguém já viu um vídeo com uma foto flutuando em cima da cena?". Mostre o vídeo de exemplo e explique que hoje vamos empilhar imagens e criar movimento. Relembre a Aula 1 (efeitos) e diga que agora vamos além.

Conteúdo novo guiado (15 min). No CapCut, clique em Importar e traga o vídeo de exemplo para a linha do tempo (arraste para a faixa de baixo). Para criar a camada, clique em Sobreposição (Overlay) e depois em Adicionar sobreposição, escolhendo uma imagem. Ela aparece numa trilha acima do vídeo. Mostre como arrastá-la na tela de prévia e mudar o tamanho pelos cantos. Em seguida, com a camada selecionada, abra o painel Animação à direita, aba Entrada, e escolha "Deslizar" ou "Ampliar"; mostre a aba Saída também. Por fim, ensine o keyframe: selecione o clipe, posicione o cursor no começo, clique no ícone de losango (Adicionar quadro-chave) no painel; ajuste a Escala para 100 por cento. Mova o cursor para o fim, mude a Escala para 120 por cento: o CapCut cria o zoom automático e marca um segundo losango sozinho.

Mão na massa (25 min). Cada aluno importa o vídeo de exemplo, adiciona uma imagem como overlay, aplica uma animação de entrada e cria dois keyframes para um zoom suave. Circule pela sala. Verifique se a camada está na trilha de cima e se há mesmo dois losangos na linha do tempo. Reforce o equilíbrio: zoom de 100 para no máximo 130 por cento, animação curta.

Desafio e compartilhar (10 min). Peça para combinarem os três recursos numa cena só, com capricho. Convide dois ou três alunos a mostrar a tela e explicar o que fizeram. Elogie escolhas com equilíbrio.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Camada é como colar um adesivo por cima de uma foto: os dois ficam visíveis. Animação de entrada é a imagem "chegando devagar", como alguém entrando de mansinho na sala em vez de bater a porta. Keyframe é como tirar duas fotos: "antes" pequeno e "depois" grande; o CapCut desenha tudo no meio. Diga que o losango é o "marcador de momento". Reforce sempre: "menos é mais; movimento demais embaralha o vídeo".

## Erros comuns e como ajudar

O erro mais comum é a camada não aparecer: o aluno arrastou a imagem para a mesma faixa do vídeo, e não para cima. Mostre que overlay fica numa trilha acima. Outro erro: o aluno cria só um keyframe e nada se move; lembre que são necessários dois losangos com valores diferentes. Há também quem exagere no zoom (de 100 para 300 por cento): peça para reduzir, mostrando que fica tonto. Por fim, se a animação ficar longa demais e cobrir a cena, ensine a encurtar o tempo dela na barrinha da animação. Salve o projeto ao final.`,
  exercicios: [
    {
      titulo: `Minha primeira camada`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Garanta que cada aluno importe o vídeo de exemplo para a faixa de baixo antes de começar. Circule conferindo se a imagem foi para a trilha de cima.`,
      atividade: `Importe o vídeo de exemplo, clique em Sobreposição, depois em Adicionar sobreposição e escolha uma imagem. Posicione a imagem num canto da tela de prévia e reduza o tamanho pelos cantos.`,
      gabarito: `O aluno deve ter duas trilhas na linha do tempo: o vídeo embaixo e a imagem (overlay) acima. Na prévia, a imagem aparece sobre o vídeo, menor e num canto. Conferir que ela está na trilha superior, não na mesma faixa do vídeo.`,
    },
    {
      titulo: `Entrada com estilo`,
      tipo: `desafio`,
      tempo: `5 min`,
      guiaProfessor: `Mostre o painel Animação à direita e as abas Entrada e Saída. Reforce que a animação deve ser curta para não atrapalhar a cena.`,
      atividade: `Selecione a sua camada de imagem, abra o painel Animação, escolha uma animação de Entrada (como Deslizar ou Ampliar) e, se quiser, uma de Saída. Encurte a barrinha da animação para cerca de meio segundo.`,
      gabarito: `A imagem deve surgir com suavidade (deslizando ou ampliando) e, se houver saída, desaparecer suave no fim. A barrinha da animação aparece nas bordas do clipe da camada e está curta. Sem animação a imagem apareceria de repente; com ela, entra de mansinho.`,
    },
    {
      titulo: `Zoom com keyframes`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Acompanhe a criação dos dois losangos. O erro clássico é criar só um keyframe. Confirme que a Escala muda entre o primeiro e o segundo ponto.`,
      atividade: `Selecione o vídeo principal. Coloque o cursor no início, clique no ícone de losango e ajuste a Escala para 100 por cento. Mova o cursor para o fim e mude a Escala para 120 por cento. Reproduza para ver o zoom.`,
      gabarito: `Devem existir dois losangos (quadros-chave) na linha do tempo, um no início com escala 100 por cento e outro no fim com escala 120 por cento. Ao reproduzir, a imagem se aproxima lentamente. Com apenas um keyframe nada se moveria.`,
    },
    {
      titulo: `Revisão em dupla`,
      tipo: `em dupla`,
      tempo: `7 min`,
      guiaProfessor: `Forme duplas. Oriente que cada aluno troque de lugar e analise o projeto do colega com olhar gentil. Dê uma pergunta-guia: "o movimento está equilibrado?".`,
      atividade: `Troque de computador com o colega. Veja a cena dele e responda em voz alta: a camada está na trilha de cima? A animação é suave? O zoom está exagerado ou equilibrado? Sugira uma melhoria.`,
      gabarito: `Cada dupla aponta corretamente se a camada está na trilha superior, se a animação é suave e se o zoom está entre 100 e cerca de 130 por cento. Uma boa sugestão seria reduzir um zoom muito grande ou encurtar uma animação longa. O objetivo é o aluno reconhecer equilíbrio.`,
    },
    {
      titulo: `Cena profissional completa`,
      tipo: `projeto curto`,
      tempo: `8 min`,
      guiaProfessor: `Este é o fechamento prático. Verifique se o aluno combinou os três recursos numa cena só com equilíbrio. Convide alguns a compartilhar a tela e explicar suas escolhas.`,
      atividade: `Monte uma cena única que use os três recursos juntos: uma camada de overlay com animação de entrada e um zoom feito com dois keyframes no vídeo de fundo. Capriche no equilíbrio e salve o projeto.`,
      gabarito: `A cena final deve conter, ao mesmo tempo: uma imagem em overlay na trilha de cima, uma animação de entrada suave nessa imagem e dois keyframes de zoom (por exemplo, 100 para 115 ou 120 por cento) no vídeo de fundo. O conjunto fica suave e agradável, sem exageros, mostrando equilíbrio entre camadas e movimento.`,
    },
  ],
};
