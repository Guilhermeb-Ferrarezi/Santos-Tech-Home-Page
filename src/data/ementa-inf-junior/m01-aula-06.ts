import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Trocar entre programas e fechar com segurança",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança aprende a ter vários programas abertos ao mesmo tempo, trocar de um para o outro usando a barra de tarefas e fechar cada programa com segurança pelo botão X, respondendo certo à pergunta de salvar.`,
  descricao: `Nesta aula as crianças descobrem que o computador consegue segurar vários programas abertos ao mesmo tempo, e que elas podem pular de um para o outro sem fechar nada. É como ter vários brinquedos espalhados na mesa: todos estão ali, e a gente pega um, depois o outro, sempre que quiser. Até agora elas abriram e fecharam um programa de cada vez. Agora chegou a hora de juntar tudo: abrir três programas e aprender a circular entre eles.

A ferramenta principal da aula é a barra de tarefas, aquela faixa que fica na parte de baixo da tela. Cada programa aberto vira um quadradinho (um botão) nessa faixa. Tocando no quadradinho, o programa pula para frente. Essa é a forma mais fácil e visual de trocar de programa, perfeita para a idade. Também mostramos, de leve e só como curiosidade, o atalho Alt mais Tab para quem quiser arriscar.

A segunda metade do assunto é fechar com segurança. A criança já conhece o X vermelho do canto, mas aqui ela aprende algo novo e importante: às vezes, ao clicar no X, o computador pergunta 'Deseja salvar as alterações?'. Essa caixinha assusta muita gente. A aula ensina, com calma, o que ela significa (o computador está perguntando se a gente quer guardar o desenho ou o texto que fez) e que existem três caminhos: Salvar, Não salvar e Cancelar. Saber ler essa pergunta é um marco: é o primeiro momento em que a criança toma uma decisão consciente sobre o próprio trabalho.

Por fim, fica clara a diferença entre fechar e minimizar, uma confusão super comum. Fechar é desligar o programa de verdade (o quadradinho some da barra). Minimizar é só esconder o programa por um instante (o quadradinho continua lá embaixo, esperando). Essa distinção evita o medo clássico de 'sumiu tudo!' quando, na verdade, o programa só foi minimizado.`,
  materiais: [
    `Um computador ligado por aluno, com o Windows na área de trabalho e a barra de tarefas visível na parte de baixo.`,
    `Três programas fáceis de abrir já com ícone pronto na área de trabalho ou fixados na barra de tarefas: o Paint, a Calculadora e o Bloco de Notas.`,
    `Um mouse por aluno (alunos canhotos com o mouse do lado esquerdo, se possível).`,
    `Cartazes ou folhas grandes impressas mostrando: o botão X (fechar), o botão de minimizar (o tracinho) e a caixa 'Deseja salvar as alterações?' com os três botões destacados.`,
    `Folhas de desenho e lápis de cor para o exercício de desenho.`,
    `Três bichinhos de pelúcia ou três potes coloridos para a demonstração com objetos (representam os três programas abertos).`,
    `Adesivos ou carimbos de recompensa para quem completar o desafio final.`,
  ],
  conceitosChave: [
    `Barra de tarefas — a faixa lá embaixo da tela onde cada programa aberto vira um quadradinho que a gente pode tocar.`,
    `Trocar de programa — pular de um programa para o outro tocando no quadradinho dele, sem fechar nada.`,
    `Fechar — desligar o programa de verdade, clicando no X vermelho do canto de cima; o quadradinho some da barra.`,
    `Minimizar — esconder o programa por um pouquinho clicando no tracinho; ele continua aberto e esperando lá embaixo.`,
    `Salvar — guardar o desenho ou o texto que a gente fez para não perder.`,
    `Deseja salvar as alterações? — a pergunta que o computador faz ao fechar; ele quer saber se guarda ou não o seu trabalho.`,
    `Alt mais Tab — um atalho de teclado, só de curiosidade, que também troca de programa segurando o Alt e tocando no Tab.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria simples + a base técnica do assunto)

No Windows, vários programas podem ficar abertos ao mesmo tempo. Cada programa aberto aparece como um botão na barra de tarefas, a faixa na parte de baixo da tela. Só um programa fica 'na frente' (em foco) de cada vez; os outros esperam atrás. Clicar no botão da barra traz aquele programa para frente. O atalho Alt mais Tab faz a mesma troca pelo teclado: segura o Alt e toca no Tab.

No canto superior direito de quase toda janela há três botões. O tracinho minimiza (esconde, mas não fecha). O quadrado maximiza. O X fecha. Quando um programa tem trabalho não salvo (um desenho no Paint, um texto no Bloco de Notas), o X dispara a caixa 'Deseja salvar as alterações?'. Ela tem três respostas: Salvar (guarda e fecha), Não salvar (fecha jogando fora o trabalho) e Cancelar (volta atrás, não fecha nada). Para esta aula, ensine a criança a parar e pensar antes de clicar.

Diferença-chave a fixar: fechar tira o programa da barra (o quadradinho some); minimizar deixa o quadradinho lá, só esconde a janela.

## Passo a passo da aula (o que fazer e dizer, seguindo o ritmo 10/15/25/10)

1. Aquecimento (10 min). Pegue três bichinhos de pelúcia e diga: 'Cada bichinho é um programa aberto. Olha, tenho três ao mesmo tempo!'. Relembre o X da aula passada: 'Quem lembra qual botão fecha?'. Aponte o cartaz do X.

2. Conteúdo novo guiado (15 min). No seu computador projetado, abra Paint, Calculadora e Bloco de Notas. Mostre a barra de tarefas: 'Olha os três quadradinhos aqui embaixo!'. Toque em cada um e diga 'pulei pro Paint... pulei pra Calculadora'. Depois minimize um com o tracinho: 'Sumiu? Não! Olha, o quadradinho continua aqui'. Por fim feche um com o X e mostre que agora o quadradinho some de verdade. Se houver trabalho no Paint, mostre a caixa 'Deseja salvar?' e leia os três botões devagar.

3. Mão na massa (25 min). Cada criança abre os três programas (ajude quem travar). Peça: 'Agora vá pro Paint... agora pra Calculadora... agora pro Bloco'. Circule. Depois: 'Minimize um. Ele sumiu? Achem ele embaixo!'. Por fim: 'Vamos fechar um pelo X. Se aparecer a pergunta, me chamem'.

4. Desafio extra e compartilhar (10 min). Desafio: abrir os três, trocar entre eles três vezes e fechar todos com segurança, sem ajuda. Quem conseguir mostra para a turma e ganha um adesivo.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a analogia dos brinquedos na mesa: 'Os programas abertos são como brinquedos espalhados. Estão todos ali; você pega um, depois o outro'. A barra de tarefas é 'a prateleira embaixo da tela'.

Para minimizar versus fechar: 'Minimizar é brincar de esconde-esconde, o programa volta. Fechar é guardar o brinquedo na caixa, ele sai da prateleira'.

Para a pergunta de salvar: 'O computador está perguntando: quer guardar seu desenho? Se sim, toca em Salvar. Se foi só rabisco, Não salvar. Se mudou de ideia, Cancelar'.

## Erros comuns e como ajudar

- Acham que minimizar fechou e entram em pânico. Aponte calmamente o quadradinho na barra e diga 'está aqui, toca nele'.

- Clicam Não salvar sem querer e perdem o desenho. Antes do mão na massa, treine: 'Quando aparecer a caixa, pare e me chame'. Elogie quem pedir ajuda.

- Confundem o tracinho (minimizar) com o X (fechar). Mostre os cartazes lado a lado várias vezes; o tracinho deita, o X faz xis.

- Fecham o programa errado. Lembre: 'Olhe primeiro qual quadradinho está na frente'.

- Clicam muito rápido na caixa de salvar. Peça para ler em voz alta os três botões antes de escolher.`,
  exercicios: [
    {
      titulo: `Os três bichinhos na prateleira`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Sente a turma em roda. Coloque três bichinhos (ou três potes coloridos) no chão e diga que cada um é um programa aberto. Pergunte, apontando: 'Se eu quero brincar com este, eu jogo os outros fora?'. Conduza até a ideia de que dá pra ter vários ao mesmo tempo e só escolher qual pegar agora. Mostre o cartaz da barra de tarefas e diga que lá embaixo na tela aparece um quadradinho para cada programa.`,
      atividade: `Olhe os três bichinhos. Cada um é um programa aberto. Quando a professora apontar um bichinho, diga em voz alta o nome dele e finja que está brincando com ele. Depois a professora aponta outro e você 'pula' para o novo. Responda: dá pra ter os três ao mesmo tempo?`,
      gabarito: `A criança entende e diz que sim, dá pra ter os três ao mesmo tempo, e que para trocar a gente só escolhe outro sem precisar jogar nenhum fora. Acerta quem aponta ou nomeia o bichinho certo quando o professor pede e responde 'sim' para a pergunta de ter vários juntos.`,
    },
    {
      titulo: `Pula-pula entre os programas`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Garanta que cada computador está com Paint, Calculadora e Bloco de Notas já abertos (abra para os menores). Demonstre no seu: aponte os três quadradinhos na barra de baixo e toque em cada um, narrando 'pulei pro Paint, pulei pra Calculadora'. Depois de demonstrar, comande a turma devagar, um destino por vez. Circule e ponha o dedo na barra de quem não achar o quadradinho.`,
      atividade: `Olhe lá embaixo da tela: tem três quadradinhos, um para cada programa. Agora siga a professora: 1. Toque no quadradinho do Paint. 2. Toque no quadradinho da Calculadora. 3. Toque no quadradinho do Bloco de Notas. Cada vez que você toca, um programa diferente pula para a frente.`,
      gabarito: `A criança clica no botão certo da barra de tarefas e o programa correspondente aparece na frente a cada comando. Acerta quem consegue trazer pelo menos os três programas para frente, um de cada vez, tocando no quadradinho certo (mesmo que precise de uma ajudinha no começo).`,
    },
    {
      titulo: `Esconde-esconde: minimizar ou fechar?`,
      tipo: `Jogo`,
      tempo: `12 min`,
      guiaProfessor: `Mostre os cartazes do tracinho (minimizar) e do X (fechar) lado a lado. Explique com gesto: o tracinho deita e o programa se esconde mas volta; o X faz xis e guarda o programa de verdade. No jogo, você diz uma palavra e a turma faz no computador. Comece com 'esconder' (minimizar) e depois confira juntos que o quadradinho continua na barra. Termine com 'fechar' e mostre que o quadradinho some.`,
      atividade: `Vamos brincar de comando. Quando a professora disser ESCONDER, clique no tracinho (minimizar) e veja: o quadradinho continua lá embaixo! Quando a professora disser FECHAR, clique no X vermelho e veja: o quadradinho some. Faça devagar e olhe sempre a barra de baixo.`,
      gabarito: `No comando ESCONDER a criança clica no tracinho e o quadradinho permanece na barra; no comando FECHAR ela clica no X e o quadradinho desaparece. Acerta quem usa o botão certo para cada palavra e percebe a diferença: minimizar mantém o quadradinho, fechar tira o quadradinho.`,
    },
    {
      titulo: `A caixa que pergunta`,
      tipo: `Desenho`,
      tempo: `14 min`,
      guiaProfessor: `Explique que, ao fechar um programa onde a gente desenhou ou escreveu, o computador pode perguntar 'Deseja salvar as alterações?'. Mostre o cartaz da caixa com os três botões. Leia em voz alta: Salvar guarda, Não salvar joga fora, Cancelar volta atrás. Para fixar sem exigir leitura, peça um desenho da caixinha. Ande pela sala apontando, no cartaz, qual botão guarda o trabalho.`,
      atividade: `Desenhe numa folha a caixinha que o computador mostra quando a gente fecha. Desenhe os três botões dentro dela e pinte de verde o botão que GUARDA o seu desenho (Salvar). Se quiser, desenhe uma carinha feliz perto do botão certo.`,
      gabarito: `O desenho mostra uma caixa com três botões, e a criança pinta de verde (ou marca com a carinha feliz) o botão Salvar, que é o que guarda o trabalho. Acerta quem identifica Salvar como o botão que guarda; aceitam-se desenhos simples desde que o botão de guardar esteja destacado corretamente.`,
    },
    {
      titulo: `O grande desafio: abrir, trocar e fechar com segurança`,
      tipo: `Desafio`,
      tempo: `14 min`,
      guiaProfessor: `Este é o fechamento. Peça silêncio e atenção. Explique a missão inteira antes: abrir os três programas, trocar entre eles três vezes e fechar os três com segurança. Reforce: 'Se aparecer a pergunta de salvar, pare e leia comigo'. Deixe a criança tentar sozinha e só ajude se ela pedir ou travar. Quem terminar mostra para a turma e ganha adesivo. Comemore cada conquista.`,
      atividade: `Sua missão: 1. Abra o Paint, a Calculadora e o Bloco de Notas. 2. Pule entre eles três vezes tocando nos quadradinhos da barra. 3. Feche os três pelo X. Se aparecer a pergunta 'Deseja salvar?', leia com a professora e escolha o botão certo. Quando terminar, levante a mão!`,
      gabarito: `A criança abre os três programas, troca entre eles pela barra de tarefas e fecha todos pelo X; ao surgir a caixa de salvar, ela para e escolhe um botão com intenção (chamando o professor se preciso). Acerta quem completa a sequência com no máximo uma ajuda e lida com a pergunta de salvar sem clicar no susto.`,
    },
  ],
};
