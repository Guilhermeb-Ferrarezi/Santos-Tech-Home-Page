import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Cada Peça no Lugar Certo",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ensinar as crianças a deixar o arquivo prontinho para imprimir no Bambu Studio, apoiando bem a peça na base, escolhendo o melhor lado para imprimir e ajustando o tamanho para caber na impressora.`,
  descricao: `Na aula passada a turma conheceu o ateliê de impressão e abriu o Bambu Studio pela primeira vez. Agora chega a hora de organizar a bagunça: deixar cada peça no lugar certo dentro da bandeja antes de mandar para a impressora Bambu Lab. Pensa assim: antes de colocar um bolo no forno, a gente precisa apoiar a forma direitinho, escolher de que lado ela vai ficar e ver se ela cabe no forno. Com a peça 3D é a mesma coisa, só que na tela do computador.

Hoje as crianças vão aprender três coisas que deixam a impressão muito mais fácil. A primeira é apoiar a peça na base: o modelo precisa estar grudado no chão da bandeja (aquele quadradão cinza chamado placa de construção), sem flutuar no ar e sem ficar afundado. A segunda é escolher o melhor lado para imprimir, girando a peça para que a parte mais larga e mais firme fique encostada na base, deixando ela bem segura enquanto a impressora trabalha. A terceira é ajustar o tamanho, deixando a peça grande o bastante para ficar bonita, mas pequena o bastante para caber dentro da impressora.

Tudo isso acontece com poucos botões do lado esquerdo da tela do Bambu Studio: a ferramenta Mover (Move), a ferramenta Girar (Rotate), a ferramenta Escala (Scale) e o botão mágico Colocar na placa (Place on Face), que assenta o lado escolhido perfeitamente no chão. O professor vai demonstrar no projetor, devagar, clicando junto com a turma, e depois cada criança organiza a própria peça na bandeja.

O clima da aula é de arrumação caprichada, como quem organiza os brinquedos na caixa para nenhum cair. No final, cada bandeja deve ter a peça centralizada, bem apoiada, virada do melhor jeito e no tamanho certinho. Assim, na semana que vem, quando a turma aprender a fatiar, tudo já estará no lugar e a impressão vai sair linda.`,
  materiais: [
    `Computadores com o Bambu Studio já aberto e a peça da criança (ou um modelo de exemplo) carregado na bandeja, um por aluno ou em dupla`,
    `Projetor ou TV ligada ao computador do professor para demonstrar os cliques`,
    `Arquivos de modelos 3D simples já prontos como reserva (um bichinho, um chaveiro, uma plaquinha) para quem ainda não tem peça`,
    `Exemplos de peças já impressas na Bambu Lab para mostrar o lado largo apoiado na base`,
    `Uma caixinha ou pote pequeno por mesa para a analogia de caber dentro da impressora`,
    `Cartões impressos com os ícones dos botões Mover, Girar e Escala, para a turma reconhecer`,
    `Mouse com botão de rolar funcionando em cada máquina, para girar a câmera ao redor da peça`,
  ],
  conceitosChave: [
    `Placa de construção — o quadradão cinza no chão da tela; é a mesa onde a impressora vai montar a sua peça, e tudo precisa ficar apoiado nela.`,
    `Apoiar na base — deixar a peça grudada no chão da bandeja, sem flutuar no ar e sem afundar, igual a um bloco bem assentado na mesa.`,
    `Mover (Move) — a ferramenta que arrasta a peça para os lados, para você deixar ela bem no meio da bandeja.`,
    `Girar (Rotate) — a ferramenta que vira a peça, como rodar um brinquedo na mão para escolher qual lado fica para baixo.`,
    `Escala (Scale) — a ferramenta que deixa a peça maior ou menor, como dar zoom de verdade no tamanho dela.`,
    `Colocar na placa (Place on Face) — o botão mágico que assenta o lado escolhido perfeitamente no chão, sem a peça ficar torta.`,
    `Melhor lado para imprimir — o lado mais largo e firme da peça, que deve ficar encostado na base para a peça não cair durante a impressão.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista, basta conhecer quatro botões do Bambu Studio, todos na barra de ferramentas vertical do lado esquerdo da tela. De cima para baixo eles costumam aparecer assim: Mover (ícone de setas cruzadas), Girar (ícone de seta circular), Escala (ícone de quadrado com cantos) e, mais abaixo, a ferramenta com a opção Colocar na placa, também chamada Place on Face. Antes da aula, abra o programa, carregue um modelo qualquer (menu Arquivo, depois Importar, ou arraste um arquivo .stl para a tela) e treine cada botão uma vez. Quando você clica num botão, aparecem setas e alças coloridas em volta da peça: arraste essas alças com o mouse para mover, girar ou redimensionar. Gire a câmera ao redor da peça segurando o botão do meio do mouse (a rodinha) e arrastando, e dê zoom rolando a rodinha. Repare numa coisa importante: se a peça aparece com um sombreado vermelho ou amarelo embaixo, é o aviso de que ela está flutuando ou mal apoiada. O botão Colocar na placa resolve quase tudo isso de uma vez.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Relembre a aula anterior. Pergunte: "Onde a impressora monta a nossa peça?" Mostre no projetor a placa de construção (o quadradão cinza) e diga que hoje vamos arrumar a peça em cima dela, como quem organiza brinquedos na caixa. Passe uma peça impressa de mão em mão mostrando o lado largo que ficou apoiado.

Conteúdo novo guiado (15 min): No projetor, com um modelo carregado, clique em Mover na barra da esquerda e arraste a peça para o centro da bandeja. Depois clique em Girar e vire a peça para escolher o melhor lado. Mostre o sombreado vermelho quando ela fica flutuando e clique em Colocar na placa, depois num lado largo da peça, para ela assentar no chão. Por fim, clique em Escala e mostre como a peça fica maior ou menor, lembrando que ela precisa caber dentro da bandeja.

Mão na massa (25 min): Cada criança organiza a própria peça. Oriente nesta ordem: primeiro Girar para escolher o lado largo para baixo, depois Colocar na placa para assentar, depois Mover para centralizar e por último Escala para ajustar o tamanho. Circule perguntando: "Tem sombra vermelha embaixo? Então ela está flutuando, vamos assentar." Ajude quem exagerou no tamanho a deixar a peça dentro do quadrado.

Desafio e compartilhar (10 min): Cada criança gira a câmera e mostra a peça apoiada, centralizada e no tamanho certo. Lance o desafio: "Aponte o lado mais largo da sua peça e diga por que ele é o melhor para ficar embaixo."

## Como explicar para crianças

Use a analogia da caixa de brinquedos: a gente sempre apoia o brinquedo pelo lado mais largo para ele não cair, nunca em pé num pezinho fino. A placa de construção é a mesa, e nada pode ficar voando no ar. Diga que Girar é como rodar o brinquedo na mão para escolher qual parte encosta na mesa, e que o botão Colocar na placa é mágico: você toca num lado e a peça senta sozinha, certinha. Para a escala, mostre o potinho da mesa: a peça precisa caber ali dentro, nem gigante nem minúscula. Repita a frase de ouro: "Lado largo embaixo, peça no meio, tamanho certo."

## Erros comuns e como ajudar

O erro mais comum é a peça ficar flutuando com sombra vermelha embaixo; ensine a clicar em Colocar na placa e tocar num lado largo. Outro erro é apoiar a peça num lado fino ou pontudo, deixando ela bamba: gire junto com a criança para achar o lado mais largo. Muitas crianças aumentam demais a peça e ela sai da bandeja (fica fora do quadrado); peça para diminuir com a ferramenta Escala até caber. Há quem arraste a peça para o cantinho ou para fora da placa: lembre que ela mora no meio do quadrado. E tem quem clique sem parar e perca a peça de vista: ensine o atalho de girar a câmera com o botão do meio do mouse para reencontrar a peça.`,
  exercicios: [
    {
      titulo: `Achando os botões na barra`,
      tipo: `Reconhecimento guiado`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre no projetor a barra de ferramentas da esquerda. Aponte cada ícone e diga o nome. Peça que cada criança encontre os mesmos botões na sua tela e passe o mouse em cima sem clicar ainda.`,
      atividade: `Na barra do lado esquerdo da tela, ache os botões Mover, Girar e Escala. Passe o mouse em cima de cada um e diga em voz alta o nome do botão que você achou.`,
      gabarito: `Mover é o ícone de setas cruzadas (arrasta a peça), Girar é o ícone de seta em círculo (vira a peça) e Escala é o ícone de quadrado com alças (muda o tamanho). Os três ficam na barra vertical do lado esquerdo.`,
    },
    {
      titulo: `Peça bem no meio`,
      tipo: `Prática individual`,
      tempo: `7 minutos`,
      guiaProfessor: `Peça que cada criança clique no botão Mover e arraste a peça para o centro do quadradão cinza. Circule garantindo que ninguém deixou a peça no canto ou para fora da placa.`,
      atividade: `Clique no botão Mover e arraste a sua peça até ela ficar bem no meio da placa de construção, aquele quadradão cinza. Deixe ela centralizada, sem encostar nas bordas.`,
      gabarito: `A peça correta fica parada no centro da placa de construção, longe das bordas e dentro do quadrado. Se ela estava num canto ou para fora, foi arrastada de volta para o meio com a ferramenta Mover.`,
    },
    {
      titulo: `Qual é o melhor lado?`,
      tipo: `Decisão com a ferramenta Girar`,
      tempo: `9 minutos`,
      guiaProfessor: `Mostre uma peça apoiada num lado fino e outra apoiada no lado largo. Peça que cada criança gire a própria peça com o botão Girar até o lado mais largo ficar virado para baixo, encostado na base.`,
      atividade: `Olhe a sua peça e descubra qual é o lado mais largo dela. Use o botão Girar para virar a peça e deixar esse lado largo para baixo, encostado na placa. Diga por que esse lado é o melhor.`,
      gabarito: `O melhor lado é o mais largo e firme, e ele deve ficar para baixo, encostado na base. É o melhor porque uma base larga deixa a peça bem apoiada e segura, sem cair durante a impressão. Apoiar num lado fino ou pontudo deixaria a peça bamba.`,
    },
    {
      titulo: `Assentando com o botão mágico`,
      tipo: `Correção de apoio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre a sombra vermelha que aparece quando a peça flutua. Ensine a sequência: clicar em Colocar na placa (Place on Face) e depois tocar num lado largo da peça para ela assentar. Verifique se sumiu a sombra de aviso.`,
      atividade: `Veja se tem uma sombra vermelha ou amarela embaixo da sua peça, sinal de que ela está flutuando. Clique no botão Colocar na placa e depois toque num lado largo da peça para ela sentar direitinho no chão.`,
      gabarito: `Depois de usar Colocar na placa e tocar num lado largo, a peça assenta grudada na base e o sombreado vermelho de aviso desaparece. A peça fica apoiada no lado escolhido, sem flutuar e sem afundar.`,
    },
    {
      titulo: `Cabendo na impressora`,
      tipo: `Desafio de ajuste de tamanho`,
      tempo: `10 minutos`,
      guiaProfessor: `Use o potinho da mesa como analogia de caber. Peça que cada criança use a ferramenta Escala para ajustar a peça: grande o bastante para ficar bonita, mas dentro do quadrado da bandeja. Ajude quem exagerou e a peça saiu da placa.`,
      atividade: `Clique no botão Escala e ajuste o tamanho da sua peça. Ela precisa ficar grande para ficar bonita, mas tem que caber inteira dentro do quadrado da bandeja, sem passar das bordas. No final, deixe a peça apoiada, centralizada e no tamanho certo.`,
      gabarito: `A peça certa fica inteira dentro do quadrado da placa, sem ultrapassar as bordas, num tamanho que dá para ver bem mas que cabe na impressora. Se ela estava gigante e saindo da bandeja, foi diminuída com a Escala; se estava minúscula, foi aumentada até ficar visível, sempre apoiada e centralizada.`,
    },
  ],
};
