import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Mexendo nos Objetos",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Mover, girar e aumentar cubos pelos eixos vermelho, verde e azul para posicionar várias formas com confiança na cena do Blender.`,
  descricao: `Nesta aula as crianças deixam de só olhar o mundo 3D e começam a mexer de verdade nos objetos. Elas vão aprender a selecionar um cubo, arrastá-lo pelos três eixos coloridos (vermelho, verde e azul), girá-lo para mudar a direção e aumentá-lo para deixá-lo maior ou menor. É o momento em que o Blender vira um brinquedo de montar gigante, onde cada peça vai exatamente para o lugar que a criança escolher.

Até a aula passada, os alunos aprenderam a girar a câmera e a passear pelo cenário sem encostar nas peças. Agora a brincadeira muda: a câmera fica parada e quem se mexe é o objeto. Essa diferença é importante e precisa ficar bem clara, porque a confusão entre "girar o mundo" e "mover o objeto" é o erro número um nesta idade. Por isso vamos usar muito as cores: vermelho é a seta que vai para os lados, verde é a seta que vai para frente e para trás, e azul é a seta que sobe e desce.

O coração da aula são três ferramentas simples do Blender: Mover (mexer de lugar), Girar (rodar) e Escala (aumentar ou diminuir). Cada uma mostra umas setinhas ou alças coloridas em volta do cubo. A criança clica e arrasta a cor certa, e a mágica acontece. Não precisamos digitar números nem decorar atalhos difíceis; basta clicar nos botões da barrinha da esquerda e arrastar com calma.

No final, cada aluno terá uma cena com vários cubos espalhados em alturas e tamanhos diferentes, como blocos de um castelo. Esse domínio de posicionar peças é a base de tudo que virá depois: nas próximas aulas eles vão juntar formas para construir objetos de verdade, então saber mover, girar e redimensionar com firmeza é o superpoder que abre as portas da construção 3D.`,
  materiais: [
    `Computadores com o Blender já aberto e um arquivo novo (com o cubo do meio na tela)`,
    `Projetor ligado para o professor demonstrar cada passo na tela grande`,
    `Cena de exemplo pronta com vários cubos espalhados (um "antes e depois") para mostrar o objetivo`,
    `Cartões coloridos: um vermelho, um verde e um azul, para lembrar os eixos`,
    `Mouse com rodinha para cada aluno (o arraste fica muito mais fácil que no touchpad)`,
    `Folha de desafio impressa com o desenho de um "castelo de cubos" para copiar`,
    `Adesivos ou carimbos de estrela para premiar quem posicionar todos os cubos`,
  ],
  conceitosChave: [
    `Selecionar — clicar em um objeto para escolher ele; aparece um contorno laranja em volta, mostrando que agora ele obedece você.`,
    `Mover — pegar o objeto e arrastar para outro lugar, como empurrar um carrinho de brinquedo pela mesa.`,
    `Eixos coloridos — três setas: a vermelha vai para os lados, a verde vai para frente e para trás, e a azul sobe e desce.`,
    `Girar — rodar o objeto sem tirar do lugar, igual a virar um volante de carrinho.`,
    `Escala — aumentar ou diminuir o tamanho do objeto, como inflar ou murchar um balão.`,
    `Alça (manipulador) — as setinhas e bolinhas coloridas que aparecem em volta do objeto para você puxar e mexer.`,
    `Contorno laranja — a luzinha que mostra qual objeto está escolhido naquele momento.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Blender. Esta aula usa só três ferramentas, todas na barrinha de ícones do lado esquerdo da tela (chamada barra de ferramentas, ou "Toolbar"). São elas: Mover (ícone de quatro setas cruzadas), Girar (ícone de duas setas em círculo) e Escala (ícone de um quadradinho com cantos). Ao clicar em uma delas e depois clicar no cubo, aparecem alças coloridas: vermelho é o eixo X (lados), verde é o eixo Y (frente/trás) e azul é o eixo Z (cima/baixo). A criança arrasta a alça da cor que quer. Para desfazer qualquer erro, use Ctrl+Z. Pratique você mesmo 5 minutos antes da aula: abra o Blender, clique no cubo (ele fica com contorno laranja) e teste mover, girar e escalar. Se a criança arrastar pelo centro branco, o objeto vai para qualquer direção bagunçada; sempre lembre de puxar pela COR.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: Receba a turma e relembre a aula passada com uma pergunta: "Quem lembra como a gente girava o mundo?" Mostre no projetor que hoje é diferente: a câmera fica PARADA e quem se mexe é o cubo. Levante os três cartões coloridos e faça um joguinho: "vermelho é para os LADOS, verde é para FRENTE e TRÁS, azul é para CIMA e BAIXO". Repita com gestos de braço junto com as crianças.

15 min — Conteúdo novo guiado: No projetor, clique uma vez no cubo: aponte o contorno laranja e diga "ele está escolhido!". Vá na barrinha da esquerda e clique no ícone de Mover (quatro setas). Mostre as três setas coloridas saindo do cubo. Arraste devagar a seta vermelha para o lado, depois a verde, depois a azul. Em seguida clique no ícone Girar e mostre os círculos coloridos: gire pelo azul. Por fim clique no ícone Escala e puxe uma alça para deixar o cubo gigante e depois pequeno. A cada ação diga em voz alta a cor que está usando.

25 min — Mão na massa: Cada criança no seu computador. Peça para clicar no cubo (ver o laranja), escolher Mover e arrastar pela seta vermelha. Depois pela verde, depois pela azul. Quando dominarem, peça para adicionar mais cubos pelo menu Adicionar (Add > Mesh > Cubo) e espalhar cada um em um lugar diferente. Circule pela sala ajudando a puxar pela cor certa. Incentive girar um cubo e aumentar outro. Meta: cada aluno com pelo menos quatro cubos posicionados em alturas e tamanhos diferentes.

10 min — Desafio e compartilhar: Entregue a folha do "castelo de cubos" e desafie cada um a empilhar e espalhar cubos parecidos com o desenho, usando Mover, Girar e Escala. No fim, peça para dois ou três alunos mostrarem a cena no projetor e contarem qual cor usaram mais. Dê estrelinhas para todos que conseguiram posicionar os cubos.

## Como explicar para crianças

Use sempre analogias de brinquedo. Mover é "empurrar o carrinho na mesa". Girar é "virar o volante". Escala é "encher e murchar o balão". Para os eixos, transforme as cores em música: "vermelho vai pro lado, verde vai pra frente, azul lá pro alto!". Sempre mande puxar pela COR, nunca pelo meio branco. Repita que o contorno laranja é a "luzinha de escolhido".

## Erros comuns e como ajudar

O erro mais comum é arrastar pelo centro branco e o cubo voar para qualquer lado: lembre "puxe só na cor". Outro erro é girar a câmera achando que está movendo o cubo: mostre o contorno laranja e diga "se não tem laranja, clique no cubo primeiro". Alguns clicam no vazio e desselecionam tudo: basta clicar de novo no cubo. Se sumir uma ferramenta, mostre que ela está na barrinha da esquerda. E ensine Ctrl+Z como o "botão mágico de voltar" para tirar o medo de errar.`,
  exercicios: [
    {
      titulo: `Acende a luzinha laranja`,
      tipo: `Aquecimento guiado`,
      tempo: `5 minutos`,
      guiaProfessor: `Garanta que cada criança veja o contorno laranja antes de seguir. Esse é o primeiro hábito: escolher antes de mexer. Faça junto no projetor.`,
      atividade: `Clique uma vez no cubo do meio da tela e observe o que aparece em volta dele. Clique no vazio e veja o que acontece. Clique no cubo de novo.`,
      gabarito: `Ao clicar no cubo aparece um contorno laranja em volta, mostrando que ele está selecionado. Ao clicar no vazio, o contorno some (foi desselecionado). Clicando de novo no cubo, o laranja volta. O laranja significa "este objeto está escolhido e vai obedecer".`,
    },
    {
      titulo: `Passeio das três cores`,
      tipo: `Prática individual`,
      tempo: `6 minutos`,
      guiaProfessor: `Reforce puxar pela cor, nunca pelo centro branco. Diga as cores em voz alta junto com a turma. Use Ctrl+Z se o cubo escapar.`,
      atividade: `Com o cubo selecionado, clique no ícone Mover (quatro setas) na barra da esquerda. Arraste a seta vermelha para o lado, depois a verde para frente, depois a azul para cima.`,
      gabarito: `A seta vermelha (eixo X) move o cubo para os lados; a verde (eixo Y) move para frente e para trás; a azul (eixo Z) move para cima e para baixo. O cubo deve terminar em um lugar diferente de onde começou, deslocado nas três direções.`,
    },
    {
      titulo: `Roda e cresce`,
      tipo: `Prática combinada`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre primeiro no projetor a diferença entre Girar (círculos) e Escala (alças quadradas). Avise que girar não tira o cubo do lugar, só vira.`,
      atividade: `Clique no ícone Girar e gire o cubo pelo círculo azul. Depois clique no ícone Escala e puxe uma alça para deixar o cubo bem grande e em seguida bem pequeno.`,
      gabarito: `Girar pelo círculo azul roda o cubo em torno do eixo de cima, sem mudar de lugar. A ferramenta Escala aumenta o cubo quando você puxa a alça para fora e diminui quando puxa para dentro. O aluno deve ter um cubo virado e com tamanho alterado.`,
    },
    {
      titulo: `Espalhando a cidade de cubos`,
      tipo: `Construção orientada`,
      tempo: `8 minutos`,
      guiaProfessor: `Ensine a adicionar cubos pelo menu Adicionar (Add > Mesh > Cubo) no topo da tela. Circule ajudando a posicionar cada novo cubo pela cor certa.`,
      atividade: `Adicione mais três cubos pelo menu Adicionar. Mova cada um para um lugar diferente da cena, deixando um mais alto, um mais para o lado e um mais para frente.`,
      gabarito: `A cena deve ficar com quatro cubos no total, cada um em uma posição diferente: um deslocado pelo azul (mais alto), um pelo vermelho (para o lado) e um pelo verde (para frente). Cada cubo foi posicionado puxando a alça da cor correspondente.`,
    },
    {
      titulo: `Meu castelo de cubos`,
      tipo: `Desafio criativo`,
      tempo: `9 minutos`,
      guiaProfessor: `Use a folha do castelo como referência, mas aceite variações. O objetivo é combinar Mover, Girar e Escala com confiança. Premie com estrelinha quem montar.`,
      atividade: `Olhe o desenho do castelo de cubos na folha. Monte algo parecido empilhando e espalhando seus cubos: deixe alguns maiores (Escala), gire pelo menos um (Girar) e use as três cores para posicionar (Mover).`,
      gabarito: `Não há um único resultado certo. O castelo está correto se o aluno usou as três ferramentas: pelo menos um cubo aumentado com Escala, pelo menos um girado com Girar, e os cubos posicionados em alturas e lados diferentes usando os eixos vermelho, verde e azul. O importante é que a criança escolha o objeto (laranja) e puxe sempre pela cor certa.`,
    },
  ],
};
