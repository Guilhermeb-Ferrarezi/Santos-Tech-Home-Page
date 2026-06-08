import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Montando os itens do jogo com formas",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Modelar dois itens de verdade do jogo (como moeda, chave ou caixa de tesouro) juntando e esticando várias formas 3D no Maya.`,
  descricao: `Na aula passada, cada criança criou o seu primeiro objeto 3D no Maya e aprendeu a girar a câmera e a mexer numa forma só. Hoje damos o próximo passo: descobrir que quase tudo no mundo dos jogos é feito de formas simples grudadas e esticadas. Uma moeda é um cilindro bem fininho. Uma caixa de tesouro é um cubo achatado com uma tampa em cima. Uma chave é um cilindro comprido com um pedacinho na ponta. Quando a criança enxerga os itens como "junção de formas", ela perde o medo de modelar coisas que parecem difíceis.

O coração desta aula é o "mão na massa": cada aluno escolhe e modela 2 itens da sua coleção pessoal de tesouros do jogo. O professor demonstra primeiro, devagar, montando uma moeda e uma chave no projetor, e depois acompanha cada criança enquanto ela cria os itens dela. O objetivo não é perfeição: é a criança perceber que ela consegue "construir" um objeto do nada usando blocos de montar digitais.

As três ações principais de hoje são: criar uma forma nova (cubo, cilindro, esfera), mover a forma para o lugar certo e esticar ou achatar a forma usando a ferramenta de escala. Tudo isso acontece dentro da janela 3D do Maya, chamada de "viewport". O professor vai repetir muito as três cores das setas de movimento (vermelho, verde e azul) porque elas são a bússola das crianças no espaço 3D.

No fim, cada aluno mostra os 2 itens girando na tela para a turma e conta que tesouros eles são. Esse momento de compartilhar dá orgulho e ajuda a criança a nomear o que ela construiu, fechando o ciclo de aprendizado da aula.`,
  materiais: [
    `Computadores com o Maya já aberto e um projeto novo salvo para cada criança`,
    `Projetor ou TV grande espelhando a tela do professor`,
    `Arquivo de exemplo pronto com uma moeda e uma chave já modeladas (para mostrar o alvo)`,
    `Folha impressa "Catálogo de tesouros" com desenhos de moeda, chave, caixa, gema e poção`,
    `Cartões coloridos vermelho, verde e azul para lembrar as setas de movimento`,
    `Mouse com rodinha para cada aluno (essencial para girar a câmera com conforto)`,
    `Lista de presença e adesivos de "Construtor de Itens" para o momento de compartilhar`,
  ],
  conceitosChave: [
    `Forma primitiva — uma forma básica pronta do Maya, como cubo, cilindro ou esfera, que serve de peça de montar.`,
    `Viewport — a janela grande onde você vê o seu objeto em 3D e pode girar em volta dele.`,
    `Mover (W) — pegar a forma e levar para outro lugar usando as setinhas vermelha, verde e azul.`,
    `Escalar (R) — esticar ou achatar a forma, deixando ela mais comprida, mais fina ou mais gordinha.`,
    `Combinar formas — juntar duas ou mais formas perto uma da outra para construir um item maior.`,
    `Eixos de cor — vermelho é para os lados, verde é para cima e baixo, azul é para frente e trás.`,
    `Item do jogo — um tesouro que o personagem pode pegar, como moeda, chave ou caixa.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya. Precisa apenas dominar três ferramentas: criar formas, mover (tecla W) e escalar (tecla R). Antes da aula, abra o Maya e treine montar uma moeda e uma chave seguindo o passo a passo abaixo. Deixe o exemplo pronto salvo para mostrar o "alvo" às crianças. Lembre-se: as setas coloridas que aparecem na forma são a parte mais importante. Vermelho move para os lados, verde move para cima e para baixo, azul move para frente e para trás. As crianças vão se guiar por essas cores o tempo todo.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Pergunte: "Quem lembra como a gente gira a câmera em volta do objeto?" Mostre que é segurar a tecla Alt e arrastar com o botão esquerdo do mouse. Crie um cubo na frente deles para reaquecer: menu superior "Create", depois "Polygon Primitives", depois "Cube". Gire a câmera juntos.

15 min — Conteúdo novo guiado. No projetor, monte uma moeda. Vá em "Create", "Polygon Primitives", "Cylinder". Aperte a tecla R (escalar) e puxe a setinha verde para baixo até o cilindro virar um disco fininho: nasce a moeda. Agora a chave: crie outro "Cylinder", aperte R e puxe a seta vermelha para esticar, deixando ele comprido como um palito. Crie um cubinho pequeno, aperte W (mover) e use as setas coloridas para encostar o cubinho na ponta do palito. Pronto, virou chave. Diga em voz alta cada tecla e cada cor que você usa.

25 min — Mão na massa. Cada criança escolhe 2 itens do "Catálogo de tesouros" e modela. Circule pela sala sem pressa. Para cada item, repita o ritual: "Cria a forma, aperta W para mover, aperta R para esticar." Ajude quem ficou com a forma gigante ou minúscula a usar a escala com calma. Salve o trabalho de cada um no fim ("File", "Save Scene").

10 min — Desafio e compartilhar. Desafio: tente juntar uma terceira forminha em um dos itens (uma alça na caixa, um brilho na gema). Depois, cada aluno gira o seu item na tela e conta para a turma que tesouro fez. Entregue o adesivo de "Construtor de Itens".

## Como explicar para crianças

Use a analogia dos blocos de montar: "Tudo aqui é peça de montar, mas em 3D. A gente pega as peças prontas e estica, achata e gruda." Para a escala, diga "puxa a seta para esticar como chiclete". Para o movimento, fale "as setas coloridas são o controle remoto da forma". Sempre nomeie a cor da seta junto com a direção: "seta verde, sobe e desce". Comemore cada item que aparece na tela, mesmo torto.

## Erros comuns e como ajudar

A forma some da tela: a criança esticou demais ou afastou a câmera. Aperte a tecla F com a forma selecionada para a câmera voltar a enquadrar o objeto. A criança gira a forma sem querer: ela apertou E (rotacionar) em vez de R; mostre de novo W move, R escala. A criança clica no vazio e perde a seleção: ensine a clicar em cima da forma para selecionar de novo. As setas coloridas não aparecem: a forma não está selecionada ou a tecla certa não foi apertada; clique na forma e aperte W. A forma fica gigante e atravessa tudo: use a escala (R) puxando a seta para o centro para diminuir, com calma e devagar.`,
  exercicios: [
    {
      titulo: `Caça às formas dos tesouros`,
      tipo: `Aquecimento em grupo (oral)`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre a folha "Catálogo de tesouros" no projetor e aponte para cada desenho. Pergunte de qual forma básica cada item é feito. Aceite respostas parecidas e ajude a turma a chegar na forma certa.`,
      atividade: `Olhe os tesouros do catálogo e diga, para cada um, qual forma básica ele mais parece: cubo, cilindro ou esfera.`,
      gabarito: `Moeda parece um cilindro (bem achatado). Caixa de tesouro parece um cubo. Gema ou pérola parece uma esfera. Chave parece um cilindro comprido. Não há resposta única perfeita; o importante é a criança associar item a forma básica.`,
    },
    {
      titulo: `Minha primeira moeda dourada`,
      tipo: `Prática guiada passo a passo`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça junto com a turma, passo a passo, no projetor. Espere todos terminarem cada passo antes de seguir. Repita as teclas em voz alta: R para escalar, seta verde para achatar.`,
      atividade: `Crie um cilindro pelo menu Create, Polygon Primitives, Cylinder. Aperte R e puxe a seta verde para baixo até o cilindro virar uma moeda bem fininha.`,
      gabarito: `O resultado é um disco achatado parecido com uma moeda. Passos certos: Create, Polygon Primitives, Cylinder; depois tecla R; depois arrastar a seta verde para baixo. Se a moeda ficou grossa, é só puxar mais a seta verde.`,
    },
    {
      titulo: `A chave que abre o baú`,
      tipo: `Prática combinando duas formas`,
      tempo: `10 minutos`,
      guiaProfessor: `Demonstre primeiro e depois deixe a criança repetir. O passo difícil é encostar o cubinho na ponta do palito; ajude com as setas coloridas (tecla W). Salve no fim.`,
      atividade: `Crie um cilindro e estique ele com R e a seta vermelha até virar um palito comprido. Crie um cubo pequeno, aperte W e use as setas coloridas para encostar o cubinho na ponta do palito, formando uma chave.`,
      gabarito: `A chave fica com um corpo comprido (cilindro esticado) e uma cabeça (cubo pequeno) grudada numa das pontas. Usou-se R com a seta vermelha para esticar e W com as setas coloridas para posicionar o cubo. Encostar bem as duas formas é suficiente, não precisa ficar perfeito.`,
    },
    {
      titulo: `Minha caixa de tesouro`,
      tipo: `Desafio de proporção e montagem`,
      tempo: `12 minutos`,
      guiaProfessor: `Deixe a criança tentar sozinha antes de ajudar. Observe se ela usa a escala (R) para achatar o cubo da base e se consegue posicionar a tampa em cima com o movimento (W) e a seta verde.`,
      atividade: `Monte uma caixa de tesouro: crie um cubo e achate um pouco com R para ser a base. Crie outro cubo menor, aperte W e use a seta verde para colocar essa tampa em cima da base.`,
      gabarito: `A caixa tem uma base mais larga e achatada embaixo e uma tampa menor encaixada em cima. Ferramentas certas: R para ajustar o tamanho e achatar, W com a seta verde (cima e baixo) para empilhar a tampa. A tampa deve encostar na borda de cima da base.`,
    },
    {
      titulo: `Inventor de tesouros`,
      tipo: `Desafio criativo e compartilhar`,
      tempo: `10 minutos`,
      guiaProfessor: `Estimule a criatividade sem dar a resposta pronta. Pergunte "que forma a mais faria seu item ficar mais legal?". No fim, cada aluno gira o item na tela (Alt mais arrastar) e conta para a turma o que criou.`,
      atividade: `Escolha um dos seus itens e adicione uma terceira forma para deixá-lo mais bonito: uma alça na caixa, um brilho na gema ou um furo na chave. Depois gire seu item e mostre para a turma.`,
      gabarito: `Não há uma única resposta certa: qualquer terceira forma bem encaixada vale, desde que a criança tenha usado criar, mover (W) e escalar (R). Exemplos válidos: uma esfera pequena como joia na tampa da caixa, um cilindro fino como alça, um cubo achatado como brilho. O essencial é a criança explicar que tesouro fez.`,
    },
  ],
};
