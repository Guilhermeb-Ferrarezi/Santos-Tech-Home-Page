import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Abrindo o Ateliê de Impressão",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Reabrir o Bambu Studio, importar os arquivos 3D favoritos do MagicaVoxel e do Blender e aprender a girar, mover e olhar a peça por todos os lados na mesa virtual.`,
  descricao: `Neste mês o nosso ateliê de impressão volta a funcionar a todo vapor. Depois de modelar tanta coisa no MagicaVoxel e no Blender, agora é hora de transformar essas criações em peças de verdade que cabem na mão. A aula de hoje é a reabertura do ateliê: vamos ligar o programa que faz a ponte entre o computador e a impressora, o Bambu Studio, e relembrar como ele entende as nossas criações.

O Bambu Studio é como uma mesa de trabalho mágica dentro do computador. Nela colocamos o nosso modelo 3D, olhamos por todos os lados, ajeitamos do jeitinho certo e, mais para frente no mês, mandamos imprimir de verdade. Hoje o objetivo é mais tranquilo e divertido: cada criança vai abrir o programa, trazer para a mesa virtual os seus arquivos favoritos e brincar de girar, mover e observar a peça como se fosse um joalheiro examinando uma joia preciosa.

A grande ideia desta aula é a familiaridade. As crianças já conhecem o Bambu Studio dos meses anteriores, então o professor não precisa ensinar tudo do zero: precisa relembrar com calma onde fica cada botão e deixar que elas explorem com as próprias mãos. Importar um arquivo, ver o modelo aparecer na mesa virtual e poder girá-lo com o mouse já é uma vitória que enche os olhos.

Ao final, cada aluno terá pelo menos uma criação sua (do MagicaVoxel ou do Blender) carregada no Bambu Studio, sabendo girar a câmera, mover a peça e olhar por cima, por baixo e dos lados. Esse domínio da mesa virtual é a base de tudo o que vem nas próximas aulas, em que vamos posicionar, fatiar e finalmente imprimir essas peças para levar para casa.`,
  materiais: [
    `Computadores com o Bambu Studio já instalado e aberto na tela inicial`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar passo a passo`,
    `Pasta organizada com os arquivos 3D de cada criança (.stl, .obj e .3mf do MagicaVoxel e do Blender)`,
    `Exemplos prontos: dois ou três modelos simples já testados pelo professor (um bichinho, um chaveiro, um cubo decorado)`,
    `Mouse de verdade para cada computador (girar a câmera com o mouse é muito mais fácil que no touchpad)`,
    `Cartão ilustrado com os três movimentos da câmera (girar, mover e aproximar) colado perto de cada tela`,
    `Adesivos de "Mestre do Ateliê" para premiar quem conseguir importar e girar a própria peça`,
  ],
  conceitosChave: [
    `Bambu Studio — o programa que é a nossa mesa de trabalho mágica, onde preparamos a peça antes de imprimir.`,
    `Importar — trazer um arquivo do computador para dentro do programa, igual a colocar um brinquedo em cima da mesa.`,
    `Arquivo 3D — o desenho do nosso modelo guardado no computador, com nome e sobrenome como peca.stl ou peca.obj.`,
    `Mesa virtual — a plataforma quadriculada na tela onde a peça aparece e onde ela vai ser impressa de verdade.`,
    `Girar a câmera — virar a vista para olhar a peça por cima, por baixo e dos lados, sem mexer no modelo.`,
    `Mover a peça — arrastar o modelo de um canto para outro da mesa virtual, como empurrar um carrinho.`,
    `Aproximar (zoom) — chegar bem perto para ver os detalhes ou afastar para ver a peça inteira.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em impressão 3D para dar esta aula. O Bambu Studio é o programa gratuito da Bambu Lab que prepara os modelos antes de imprimir. Hoje não vamos imprimir nada: só abrir, importar e olhar. Abra o programa antes da aula. Na tela inicial, o botão principal é o "+" ou "Import" (Importar), normalmente no canto superior esquerdo. No centro fica a "build plate" (a placa/mesa virtual quadriculada). Para importar, clique em "Import" e escolha o arquivo da criança (.stl, .obj ou .3mf); o modelo aparece pousado na mesa. Para girar a câmera, segure o botão DIREITO do mouse e arraste. Para mover a vista, segure o botão do meio (a rodinha) e arraste. Para aproximar ou afastar, role a rodinha. Para mover a peça em si, clique nela e use a ferramenta "Move" (Mover) na barra lateral esquerda, ou simplesmente arraste a peça com o botão esquerdo. Treine esses gestos uma vez sozinho antes da aula para se sentir seguro.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Reúna a turma em frente ao projetor. Pergunte: "Lembram do nosso ateliê de impressão? Qual programa transforma os nossos desenhos em peças de verdade?" Mostre uma peça já impressa do seu kit de exemplos e passe de mão em mão. Diga que hoje vamos reabrir a mesa de trabalho mágica e trazer as criações deles para dentro dela.

Conteúdo novo guiado (15 min): No projetor, abra o Bambu Studio. Aponte a build plate (mesa virtual) e diga que é onde a peça vai nascer. Clique em "Import" (Importar), escolha um arquivo de exemplo e mostre o modelo aparecendo. Agora demonstre os três movimentos, devagar: gire a câmera (botão direito arrastando), aproxime e afaste (rodinha) e mova a peça (arrastar com o botão esquerdo). Repita cada gesto duas vezes nomeando em voz alta: "girar", "aproximar", "mover".

Mão na massa (25 min): Cada criança vai ao seu computador. Passo 1: clicar em "Import" e escolher o próprio arquivo na pasta. Passo 2: ver o modelo aparecer na mesa. Passo 3: girar a câmera para olhar a peça por cima, por baixo e dos lados. Passo 4: mover a peça pela mesa e aproximar para ver os detalhes. Circule pela sala ajudando. Quem terminar logo pode importar um segundo arquivo favorito.

Desafio e compartilhar (10 min): Desafie cada criança a girar a peça até mostrar a parte de baixo dela (a "barriguinha" do modelo) e depois voltar a vista para a frente. Quem conseguir ganha o adesivo de "Mestre do Ateliê". Para encerrar, faça uma rodada rápida: cada um diz qual criação importou e o que mais gostou de ver girando.

## Como explicar para crianças

Use a analogia da mesa de trabalho: "O Bambu Studio é uma mesa mágica. A gente coloca o nosso brinquedo em cima dela e pode olhar por todos os lados sem encostar nele de verdade." Explique importar como "convidar o seu desenho para entrar na mesa". Compare girar a câmera com andar em volta de uma estátua no museu: a estátua fica parada, quem anda em volta é você. Chame o zoom de "lupa": aproxima para investigar os detalhes, afasta para ver tudo. Lembre que olhar por baixo é importante porque é a parte que toca a mesa quando a impressora começa.

## Erros comuns e como ajudar

A criança gira a peça em vez de girar a câmera: mostre que o botão DIREITO gira a vista (a peça fica parada) e o ESQUERDO arrastando move a peça. Diga "direito é andar em volta". A peça some da tela: aperte a tecla de centralizar a vista ou role a rodinha para afastar até o modelo reaparecer. A criança não acha o arquivo: deixe a pasta de cada um já aberta e organizada antes da aula, com os nomes claros. O modelo aparece minúsculo ou gigante: explique que vamos ajustar o tamanho na próxima aula; hoje só olhamos. A criança clica em mil botões e se perde: peça para ela tirar a mão do mouse, respirar e seguir só os quatro passos do quadro. Vá ao computador dela e faça o primeiro import junto, devagar.`,
  exercicios: [
    {
      titulo: `Caça ao botão Importar`,
      tipo: `Reconhecimento na tela`,
      tempo: `6 minutos`,
      guiaProfessor: `No projetor, mostre a tela inicial do Bambu Studio. Peça que cada criança aponte na própria tela onde fica o botão "Import" (Importar) e a mesa virtual quadriculada. Confirme um a um antes de seguir.`,
      atividade: `Olhe a tela do Bambu Studio e encontre duas coisas: o botão "Import" para trazer a sua peça e a mesa quadriculada onde ela vai aparecer. Aponte para cada uma com o dedo.`,
      gabarito: `A criança aponta corretamente o botão "Import" (canto superior esquerdo) e a build plate (mesa quadriculada no centro). Acerto = reconhecer os dois elementos sem ajuda. É normal confundir "Import" com outros ícones na primeira vez; mostre o desenho de pasta/seta.`,
    },
    {
      titulo: `Trazendo a minha criação para a mesa`,
      tipo: `Prática no Bambu Studio`,
      tempo: `7 minutos`,
      guiaProfessor: `Deixe a pasta de cada criança já aberta. Oriente a clicar em "Import", escolher o próprio arquivo (.stl, .obj ou .3mf) e confirmar. O modelo deve pousar na mesa virtual. Ajude quem não encontrar o arquivo.`,
      atividade: `Clique no botão "Import", procure o arquivo da sua criação favorita e abra. Espere o seu modelo aparecer pousado na mesa quadriculada.`,
      gabarito: `O modelo da criança aparece na build plate depois do import. Acerto = importar sozinha um arquivo seu. Exemplo: a criança escolhe "meu-bichinho.stl" e o bichinho surge na mesa. Erro comum: clicar duas vezes rápido e abrir duas cópias; basta apagar uma.`,
    },
    {
      titulo: `Andando em volta da estátua`,
      tipo: `Controle de câmera`,
      tempo: `6 minutos`,
      guiaProfessor: `Demonstre antes: botão DIREITO do mouse arrastando gira a câmera, a peça fica parada. Peça que cada criança gire a vista para ver a peça pela frente, por trás e pelos lados. Reforce "direito é andar em volta".`,
      atividade: `Segure o botão direito do mouse e arraste para girar a vista. Olhe a sua peça pela frente, depois por trás e depois de lado, como se você andasse em volta de uma estátua.`,
      gabarito: `A criança gira a câmera com o botão direito sem mover a peça, vendo três ângulos diferentes. Acerto = entender que quem se move é a vista, não o modelo. Erro comum: usar o botão esquerdo e arrastar a peça para fora da mesa; mostre a diferença entre os botões.`,
    },
    {
      titulo: `Lupa e mudança de lugar`,
      tipo: `Prática combinada`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre a rodinha do mouse para aproximar e afastar (a "lupa") e o arrastar com o botão esquerdo para mover a peça pela mesa. Peça que a criança aproxime para ver um detalhe e depois mova a peça para o centro da mesa.`,
      atividade: `Use a rodinha do mouse como uma lupa: aproxime para ver um detalhe pequeno da sua peça e depois afaste para ver ela inteira. Agora arraste a peça com o botão esquerdo até o meio da mesa.`,
      gabarito: `A criança aproxima, afasta com a rodinha e arrasta a peça para o centro da build plate. Acerto = combinar zoom e mover sem ajuda. Exemplo: aproxima na orelha do bichinho, afasta e arrasta o bichinho para o quadrado central. Erro comum: rolar a rodinha rápido demais e "perder" a peça; basta afastar até reaparecer.`,
    },
    {
      titulo: `Mestre do Ateliê: a barriguinha da peça`,
      tipo: `Desafio final`,
      tempo: `7 minutos`,
      guiaProfessor: `Desafie cada criança a girar a câmera até mostrar a parte de baixo do modelo (a base que toca a mesa) e depois voltar a vista para a frente. Explique que essa é a parte que encosta na impressora. Quem conseguir ganha o adesivo de "Mestre do Ateliê".`,
      atividade: `Vire um Mestre do Ateliê: gire a vista até conseguir ver a barriguinha da sua peça, a parte de baixo que toca a mesa. Depois gire de volta até olhar a peça pela frente de novo.`,
      gabarito: `A criança gira a câmera para ver a base inferior do modelo e retorna à vista frontal. Acerto = controlar a câmera com intenção, mostrando um lado escolhido e voltando. Tentar com capricho já vale o adesivo de "Mestre do Ateliê", mesmo que precise de uma dica para voltar à frente.`,
    },
  ],
};
