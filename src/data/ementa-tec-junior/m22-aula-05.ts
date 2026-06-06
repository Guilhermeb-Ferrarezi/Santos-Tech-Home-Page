import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Preparando o modelo para a impressora 3D",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Entender como uma impressora 3D funciona e verificar, junto com o professor, se o item favorito de cada criança está firme e fechadinho para poder ser impresso de verdade.`,
  descricao: `Até agora as crianças criaram modelos 3D no Maya que viviam só dentro do computador, na tela. Nesta aula a turma descobre uma novidade empolgante: alguns desses modelos podem virar um objeto de plástico de verdade, que dá para segurar na mão! Para isso existe uma máquina mágica chamada impressora 3D, que constrói o objeto camada por camada, igual a empilhar muitas panquecas bem fininhas até montar uma torre. A aula é toda sobre preparar o modelo para essa máquina entender e imprimir sem erro.

Uma impressora 3D não consegue imprimir qualquer coisa. Ela precisa de um modelo "fechadinho" e "firme". Fechadinho quer dizer que o modelo não pode ter buracos na casquinha, como um balão sem furos: se tiver um buraco, o plástico vaza e a impressão falha. Firme quer dizer que o modelo precisa de paredes com grossura, sem partes muito finas como um fio de cabelo, porque o plástico não consegue segurar peças tão fininhas e elas quebram. O professor vai ajudar cada criança a olhar o seu modelo e procurar esses probleminhas.

Esta aula é bem prática e cheia de observação. Cada criança escolhe um item favorito que já modelou nos meses anteriores (uma espada, uma moeda, um cogumelo, um capacete) e abre no Maya. Juntos, professor e aluno giram o modelo, olham por dentro e por fora, e fazem uma "lista de checagem" simples para saber se ele está pronto para a impressora. Não vamos imprimir hoje: a impressão de verdade acontece na próxima aula. Hoje é o dia de deixar tudo certinho e firme.

O grande presente desta aula é a noção de que o mundo digital pode virar mundo real. As crianças saem entendendo que um desenho 3D no computador pode se transformar em um brinquedo que elas vão levar pra casa, desde que esteja bem preparado. É a ponte entre a tela e a mão, e isso costuma deixar a turma muito animada para a aula seguinte.`,
  materiais: [
    `Computadores com o Maya aberto e os modelos 3D que cada criança já criou nos meses anteriores`,
    `Projetor ou TV grande para o professor mostrar a tela do Maya e a lista de checagem para todos`,
    `Um objeto real impresso em 3D (um chaveirinho, um bonequinho) para a turma segurar e ver de perto`,
    `Vídeo curto (1 a 2 minutos) de uma impressora 3D trabalhando, para mostrar as camadas sendo empilhadas`,
    `Exemplos prontos no Maya: um modelo "bom" (fechado e firme) e um modelo "com problema" (com buraco e parte fininha)`,
    `Cartão impresso com a lista de checagem da impressão (Está fechado? Está firme? Está em pé na mesa?)`,
    `Adesivos de "Modelo Aprovado para Imprimir" para premiar cada item que passar na checagem`,
  ],
  conceitosChave: [
    `Impressora 3D — uma máquina que constrói um objeto de plástico de verdade, camada por camada, a partir do seu desenho no computador.`,
    `Camada — uma fatia bem fininha de plástico; a impressora empilha muitas camadas, igual a empilhar panquecas, até montar o objeto.`,
    `Modelo fechado — quando a casquinha do modelo não tem nenhum buraco, igual a um balão sem furos.`,
    `Buraco (furo) — um lugar aberto na casquinha do modelo por onde o plástico vazaria; precisa ser tapado antes de imprimir.`,
    `Parede firme — quando o modelo tem grossura suficiente e não tem partes finas como fio de cabelo, que quebrariam.`,
    `Base — a parte de baixo do modelo que encosta na mesa da impressora; o modelo precisa ficar em pé sem cair.`,
    `Checagem — olhar o modelo com calma de todos os lados para descobrir se está pronto para a impressora.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa entender de engenharia para dar esta aula. O foco é a observação e a noção de que o digital vira real, não a operação técnica da impressora. Você só precisa saber três coisas que a impressora 3D exige de um modelo, e ajudar a criança a olhar por elas: o modelo precisa estar fechado (sem buracos na casquinha), firme (sem partes muito finas) e com uma base que encoste na mesa (em pé sem cair).

No Maya, deixe os modelos das crianças já abertos antes da aula. Para girar o modelo e olhar de todos os lados, segure a tecla Alt e arraste com o botão esquerdo do mouse (isso orbita a câmera). Para aproximar, use a rodinha do mouse. Para ver o modelo "de casquinha" e perceber furos, aperte a tecla 4 (modo wireframe, aramado) e a tecla 5 (modo sólido, shaded). Para procurar buracos com mais facilidade, vá no menu superior em "Display" e ative "Backface Culling" no submenu "Polygons": assim, se houver um furo, você enxerga o interior do modelo aparecendo "vazado". Não precisa consertar nada complicado hoje; só identificar e marcar na lista.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Reúna a turma e mostre o objeto real impresso em 3D para todos segurarem. Pergunte: "Como será que isso foi feito?" Passe o vídeo curto da impressora trabalhando e mostre as camadas se empilhando. Diga que hoje vamos preparar UM modelo de cada um para virar um objeto de verdade na próxima aula.

Conteúdo novo guiado (15 min): No projetor, abra no Maya o modelo de exemplo "com problema". Gire com Alt e o botão esquerdo do mouse para mostrar um buraco na casquinha e uma parte muito fininha. Explique, apontando: "Aqui tem um furo, o plástico vazaria" e "Aqui é fininho como cabelo, ia quebrar". Depois abra o exemplo "bom" e mostre que ele é fechado e firme. Apresente a lista de checagem no cartão: 1) Está fechado (sem buracos)? 2) Está firme (sem partes finas)? 3) Fica em pé na mesa?

Mão na massa (25 min): Cada criança escolhe o seu item favorito já modelado e o abre no Maya (deixe abertos antes). Passe de mesa em mesa. Com cada aluno, gire o modelo (Alt + botão esquerdo), aproxime com a rodinha e percorram juntos a lista de checagem, marcando cada item. Se houver um furo simples, ajude a tapar selecionando as bordas do buraco e usando o menu "Mesh" e a opção "Fill Hole". Quem passar na checagem ganha o adesivo "Modelo Aprovado para Imprimir".

Desafio e compartilhar (10 min): Desafie cada criança a girar o próprio modelo no projetor e dizer em voz alta uma frase: "Meu modelo está fechado e firme, pronto para imprimir!" Encerre combinando que, na próxima aula, esses modelos aprovados vão para a impressora de verdade.

## Como explicar para crianças

Use a analogia das panquecas: "A impressora monta o seu brinquedo empilhando muitas fatias finas de plástico, igual a empilhar panquecas até virar uma torre." Para o "fechado", use o balão: "Seu modelo é como um balão; se tiver um furinho, ele esvazia e estraga." Para o "firme", use o fio de cabelo: "Partes finas como um fio de cabelo quebram; a gente precisa de partes mais gordinhas." Para a base, peça que imaginem o modelo "sentado na mesa sem tombar". Lembre que hoje só preparamos e checamos; imprimir é na próxima aula.

## Erros comuns e como ajudar

A criança acha que vamos imprimir hoje e fica ansiosa: combine no começo que hoje é o dia de deixar tudo pronto, e que imprimir é a próxima aula. A criança gira o modelo sem querer para longe e se perde: ensine a apertar a tecla F (com o modelo selecionado) para enquadrar de novo na tela. A criança não vê o furo: aproxime com a rodinha e ative o "Backface Culling" para o vazado aparecer. A criança quer mudar todo o modelo de novo: lembre que hoje só consertamos probleminhas pequenos, não recriamos. A criança escolhe um item cheio de partes finas difíceis: ajude-a a escolher um item mais simples e firme, que tem mais chance de imprimir bem.`,
  exercicios: [
    {
      titulo: `Como nasce um objeto: as panquecas de plástico`,
      tipo: `Conversa e demonstração`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre o objeto real impresso e passe o vídeo curto da impressora. Use a analogia das panquecas empilhadas. Pergunte à turma como acham que o objeto foi feito antes de explicar. O objetivo é entender que a impressora monta por camadas.`,
      atividade: `Segure o objeto impresso, assista ao vídeo da impressora trabalhando e responda: como a máquina monta o objeto? De uma vez só ou por partes?`,
      gabarito: `A criança entende que a impressora 3D monta o objeto aos poucos, empilhando muitas camadas finas, uma em cima da outra (como panquecas). Acerto = dizer "por partes" ou "por camadas", não "de uma vez". Exemplo de resposta: "Ela vai colocando uma fatia de cada vez até ficar pronto".`,
    },
    {
      titulo: `Girando o meu modelo no Maya`,
      tipo: `Prática no Maya`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre como orbitar a câmera: segurar Alt e arrastar com o botão esquerdo do mouse. Ensine também a rodinha para aproximar e a tecla F para reenquadrar. Deixe o modelo da criança já aberto. Cada aluno gira o próprio item e olha por todos os lados.`,
      atividade: `No Maya, segure a tecla Alt e arraste com o botão esquerdo do mouse para girar o seu modelo. Olhe ele por cima, por baixo e por trás. Use a rodinha para chegar bem perto.`,
      gabarito: `A criança consegue girar o modelo e observá-lo de vários ângulos sozinha. Acerto = orbitar com Alt + botão esquerdo e aproximar com a rodinha. Erro comum: arrastar sem segurar o Alt, que move o objeto em vez da câmera; lembre de segurar o Alt primeiro.`,
    },
    {
      titulo: `Caça ao buraco: está fechadinho?`,
      tipo: `Observação guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `No projetor, mostre primeiro o exemplo "com problema" e ative "Backface Culling" em "Display > Polygons" para o furo ficar visível como um vazado. Depois cada criança procura buracos no próprio modelo, girando e aproximando. Ajude a tapar furo simples com "Mesh > Fill Hole".`,
      atividade: `Gire o seu modelo e procure buracos na casquinha, como furos em um balão. Achou algum lugar aberto por onde dá para ver o "vazio" por dentro? Mostre para o professor.`,
      gabarito: `A criança identifica se o modelo está fechado (sem furos) ou aponta um buraco existente. Acerto = perceber a diferença entre casquinha inteira e casquinha furada. Se houver furo, o professor ajuda a tapar com "Fill Hole". Modelo sem furos = item aprovado nesse quesito.`,
    },
    {
      titulo: `Teste do fio de cabelo: está firme?`,
      tipo: `Análise comparativa`,
      tempo: `7 minutos`,
      guiaProfessor: `Compare no projetor uma parte fininha (que quebraria) com uma parte gordinha (firme), usando o exemplo pronto. Depois cada criança procura partes finas no próprio modelo, como pontas, antenas ou fios. Explique que partes muito finas quebram na impressão.`,
      atividade: `Olhe o seu modelo e procure partes muito fininhas, finas como um fio de cabelo (pontinhas, espinhos, fios). Aponte se encontrar alguma e diga se ela parece firme ou frágil.`,
      gabarito: `A criança distingue partes finas e frágeis de partes grossas e firmes. Acerto = encontrar (ou confirmar que não há) partes finas demais e entender que elas quebrariam na impressão. Exemplo: "A ponta da espada é bem fininha, pode quebrar" ou "Meu cogumelo é todo gordinho, está firme".`,
    },
    {
      titulo: `Selo de aprovação: pronto para imprimir!`,
      tipo: `Desafio final e checagem`,
      tempo: `8 minutos`,
      guiaProfessor: `Cada criança apresenta o modelo no projetor e percorre os três itens da lista em voz alta: fechado? firme? em pé na mesa? Confirme cada resposta junto com a turma. Quem passar nos três recebe o adesivo "Modelo Aprovado para Imprimir". Valorize a checagem cuidadosa.`,
      atividade: `Mostre o seu modelo girando e responda às três perguntas da lista: 1) Está fechado, sem buracos? 2) Está firme, sem partes finas? 3) Fica em pé na mesa sem cair? Se passar nas três, ganhe o selo de aprovado!`,
      gabarito: `A criança verifica os três critérios e conclui se o modelo está pronto. Acerto = responder com segurança às três perguntas e entender que o modelo só vai para a impressora quando passar em todas. Exemplo: "Está fechado, está firme e fica em pé, então está aprovado para imprimir!". Se algum critério falhar, o item correto é apontar o que precisa ser ajustado antes da próxima aula.`,
    },
  ],
};
