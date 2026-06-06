import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Bateu, Encostou!",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança aprende a usar o bloco "se tocar em..." para o herói reagir com som e troca de fantasia quando encosta em outro personagem.`,
  descricao: `Nesta aula as crianças descobrem a colisão, que é o momento mágico em que dois personagens se tocam na tela. Quase todo jogo que elas conhecem usa colisão: o personagem pega uma moeda, esbarra num inimigo, encosta na bandeira do final da fase. Entender esse "encostar" é a base para construir jogos com regras, que é o foco deste mês inteiro.

No Scratch, a colisão é detectada por um bloco especial em formato de losango chamado "tocando em...?". Ele funciona como uma perguntinha que o computador faz o tempo todo: "o herói está tocando o outro? sim ou não?". Quando a resposta é "sim", a gente manda o herói reagir. Para essa reação acontecer, juntamos esse losango dentro de um bloco "se ... então", que é o bloco que decide as coisas. É a primeira vez que as crianças vão usar uma decisão de verdade no jogo delas.

Durante a prática guiada, todos vão montar a mesma cena simples: um herói que anda e um objeto parado (uma bolinha, uma estrela ou uma fruta). Quando o herói encosta no objeto, ele toca um som e troca de fantasia, como se ficasse surpreso ou feliz. Assim a criança vê, ouve e sente o resultado da colisão, o que é perfeito para a idade.

O objetivo não é fazer um jogo completo hoje, e sim plantar a semente: "quando eu encosto, alguma coisa acontece". Nas próximas aulas essa ideia vai virar pulo, vidas, fim de jogo e velocidade. Hoje basta a criança sorrir quando o herói dela reage ao toque.`,
  materiais: [
    `Computadores (1 por criança ou em duplas) com o Scratch já aberto na tela do editor, conectados à internet ou com o Scratch instalado offline.`,
    `Projetor ou TV grande para o professor mostrar a montagem dos blocos passo a passo.`,
    `Um projeto-modelo pronto pelo professor antes da aula, com o herói e o objeto já posicionados, para usar de exemplo e de "rede de segurança".`,
    `Fones de ouvido ou caixinhas de som com volume baixo, já que vários sons vão tocar ao mesmo tempo na sala.`,
    `Folhas de papel e lápis de cor para o exercício de desenho da colisão.`,
    `Adesivos ou carimbos de "Programador do Dia" para premiar quem fizer o herói reagir ao toque.`,
    `Uma lista impressa com os nomes dos blocos usados na aula, para o professor consultar rápido.`,
  ],
  conceitosChave: [
    `Colisão — é quando dois personagens se encostam na tela, como dois carrinhos que batem.`,
    `Tocando em...? — é o blocão em forma de losango que pergunta "estou encostando no outro? sim ou não?".`,
    `Se... então — é o bloco que decide: "SE acontecer isso, ENTÃO faça aquilo".`,
    `Fantasia — é a roupa ou a carinha do personagem, que a gente pode trocar para mostrar uma reação.`,
    `Som — é o barulho que o personagem faz, como um "ploc" quando encosta em algo.`,
    `Herói — é o personagem principal, que a criança controla e que vai reagir ao toque.`,
    `Reagir — é fazer alguma coisa em resposta, como mudar de cara e fazer barulho ao encostar.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base tecnica)

Colisão é a deteção de quando dois objetos se tocam. No Scratch isso é feito pelo bloco sensor "tocando em...?", que fica na categoria roxo-azulada chamada "Sensores". Esse bloco tem formato de losango (hexágono pontudo), o que significa que ele não funciona sozinho: ele é um "sim ou não" que precisa entrar dentro de outro bloco. O bloco que recebe essa resposta é o "se ... então", da categoria amarela "Controle". Pense no losango como uma pergunta e no "se ... então" como a decisão: a pergunta entra no buraquinho do "se", e o que você quer que aconteça fica dentro do "então". Para a pergunta ser feita o tempo todo, colocamos tudo dentro de um bloco "sempre" (laço de repetição), também do Controle. Resumo da estrutura que você vai montar com a turma: quando bandeira verde clicada, dentro de um "sempre", um "se tocando no objeto então" e, dentro dele, "toque o som" mais "mude para a fantasia". Domine montar isso em casa antes da aula; leva dois minutos depois que você pega o jeito.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Scratch)

10 min - Aquecimento: receba a turma e faça a brincadeira "esbarrão do bem": as crianças andam pela sala e, quando duas mãos se encostam de leve, elas fazem um som engraçado. Diga: "isso é colisão!". Conecte com jogos que elas amam.

15 min - Conteúdo novo guiado: no projetor, abra o projeto-modelo. Mostre os dois personagens na lista de "Atores" embaixo à direita. Clique no herói. Arraste da paleta o bloco "quando bandeira verde clicada" (categoria Eventos, amarelo). Encaixe abaixo o bloco "sempre" (Controle, laranja). Pegue o bloco "se ... então" e solte dentro do "sempre". Vá em Sensores (azul-claro), pegue "tocando em...?" e encaixe no espaço do "se"; clique na setinha e escolha o nome do objeto. Em Som (rosa), arraste "toque o som ... até o fim" para dentro do "então". Em Aparência (roxo), arraste "mude para a fantasia ..." e escolha uma fantasia diferente. Clique na bandeira verde e arraste o herói até o objeto: ele reage!

25 min - Mão na massa: cada criança (ou dupla) repete no próprio projeto-modelo. Circule pela sala. Peça para clicarem na bandeira verde e moverem o herói com o mouse até tocar o objeto. Celebre cada som que tocar.

10 min - Desafio e compartilhar: lance o desafio de trocar o som ou a fantasia por outro mais engraçado. Depois, faça uma volta rápida onde cada um mostra o herói reagindo.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use a analogia do cumprimento: "quando você encosta a mão na mão do amigo, vocês se cumprimentam. O herói também 'cumprimenta' o objeto fazendo barulho e mudando de cara". Chame o losango de "blocão perguntão" e o "se ... então" de "bloco do mágico que decide". Evite palavras técnicas longas; diga "encostou" em vez de "colidiu". Mostre com o corpo: encoste sua mão na mesa e faça um "ploc" com a boca. Deixe a criança apontar na tela onde ela acha que o herói vai encostar antes de testar.

## Erros comuns e como ajudar

O erro mais comum é esquecer de colocar o "se ... então" dentro do "sempre"; aí a colisão só é checada uma vez e parece que não funciona. Verifique se há o bloco "sempre" abraçando tudo. Outro erro: escolher o nome errado na setinha do "tocando em...?" (o herói não pode tocar "nele mesmo"); confira se está escolhido o objeto. Crianças também soltam blocos fora do encaixe; mostre o brilho/sombra que aparece quando o bloco vai grudar. Por fim, se o som não toca, confira o volume e se o bloco de som está dentro do "então", e não embaixo dele.`,
  exercicios: [
    {
      titulo: `Encosta e Faz Ploc`,
      tipo: `Prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Apresente como o "primeiro feitiço de colisão". Mostre no projetor a estrutura pronta e peça que cada criança monte igual no próprio computador, encaixando um bloco de cada vez junto com você.`,
      atividade: `No seu projeto, monte: "quando bandeira verde clicada", "sempre", e dentro dele "se tocando no objeto então toque o som". Clique na bandeira verde e arraste o herói até o objeto.`,
      gabarito: `Acertou quando, ao arrastar o herói até o objeto, o som toca no momento em que eles se encostam. Se o som não tocar, falta o bloco "sempre" abraçando o "se" ou o nome do objeto está errado na setinha.`,
    },
    {
      titulo: `Trocou de Cara!`,
      tipo: `Desafio na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Lance como um desafio: "agora o herói também vai mudar de carinha quando encostar". Mostre onde ficam as fantasias na aba "Fantasias", no canto superior esquerdo.`,
      atividade: `Dentro do "então", logo abaixo do som, adicione o bloco "mude para a fantasia ..." e escolha uma fantasia diferente da inicial. Teste encostando o herói no objeto.`,
      gabarito: `Acertou quando o herói troca de fantasia e toca o som ao mesmo tempo em que encosta no objeto. Se a fantasia não mudar, o bloco "mude para a fantasia" está fora do "então" ou aponta para a mesma fantasia de antes.`,
    },
    {
      titulo: `Caça à Colisão`,
      tipo: `Jogo / roda de observação`,
      tempo: `7 minutos`,
      guiaProfessor: `Reúna a turma em roda em frente ao projetor com um jogo simples do Scratch rodando. Conduza como uma caça ao tesouro visual, pausando a cena nos momentos de toque.`,
      atividade: `Assistam juntos a um joguinho. Toda vez que dois personagens se encostarem, todos gritam "ENCOSTOU!" e levantam a mão. Contem quantas colisões aparecem.`,
      gabarito: `Acertou quando a criança grita "ENCOSTOU!" exatamente nos momentos em que dois personagens se tocam (e não quando estão separados). Espera-se que percebam pelo menos 3 ou 4 colisões claras.`,
    },
    {
      titulo: `Desenhe o Encostão`,
      tipo: `Desenho / papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue papel e lápis de cor. Peça que desenhem em dois quadrinhos: o "antes" (personagens separados) e o "depois" (personagens encostados reagindo). Reforce que reagir é fazer som e mudar de cara.`,
      atividade: `Faça dois desenhos lado a lado. No primeiro, dois personagens longe um do outro. No segundo, eles encostados, com um balãozinho de som e a carinha diferente do herói.`,
      gabarito: `Acertou quando o segundo desenho mostra os personagens se tocando E alguma marca de reação (balão de som, estrelinhas, ou carinha mudada). O desenho deve deixar claro que algo só acontece quando eles encostam.`,
    },
    {
      titulo: `Mestre da Colisão`,
      tipo: `Desafio criativo (avançado)`,
      tempo: `10 minutos`,
      guiaProfessor: `Para quem terminou os anteriores. Convide a criança a personalizar a reação combinando som novo e fantasia nova, e a explicar em voz alta o que montou, virando "professora por um minuto".`,
      atividade: `Troque o som por outro mais engraçado (botão "Sons", à esquerda) e escolha uma fantasia bem diferente. Depois, mostre para um colega e explique: "quando o herói encosta, ele faz ___ e fica ___".`,
      gabarito: `Acertou quando o herói reage com um som diferente e uma fantasia diferente ao encostar, e a criança consegue explicar com as próprias palavras que a reação só acontece no momento do toque (a colisão).`,
    },
  ],
};
