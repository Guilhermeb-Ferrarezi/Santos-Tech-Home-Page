import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Bum! A explosão pequena vira grande",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Nesta aula a criança vai animar uma explosão que começa pequena e vai crescendo quadro a quadro até estourar grande, usando cores quentes, um clarão no meio e uma fumacinha que se dissipa no final.`,
  descricao: `Hoje a aula é pura ação! Depois de animar o herói andando, parado e atacando, chegou a hora do efeito mais empolgante de todo jogo: a explosão. Toda criança adora ver as coisas estourarem, e a melhor parte é descobrir que uma explosão de jogo nada mais é do que alguns quadrinhos de desenho que passam bem rápido, um atrás do outro. Não tem mágica nenhuma, tem desenho e ordem.

A ideia central do dia é a escala quadro a quadro. Escala é só uma palavra grande para "tamanho". No primeiro quadro a explosão é pequenininha, do tamanho de uma ervilha. No quadro seguinte ela já é maior, depois maior ainda, e no quadro do meio ela fica gigante, com um clarão branco bem no centro, como se a luz tivesse acabado de nascer. Quando esses desenhos passam rápido na tela, o olho junta tudo e a gente vê uma bola de fogo nascendo e crescendo de verdade. É o mesmo truque de quando a gente desenha bonequinhos no canto do caderno e folheia depressa.

As cores também contam uma história. A explosão usa cores quentes: amarelo no miolo, que é a parte mais quente, depois laranja em volta e vermelho nas pontas, que é a parte que já está esfriando. No quadro do estouro maior, colocamos um clarão, um ponto branco ou amarelo bem claro no centro, que dá aquela sensação de "luz forte demais para olhar". Esse clarão é o segredo que faz a explosão parecer poderosa.

E como toda explosão termina? Com fumaça. Nos últimos quadrinhos, o fogo já apagou e sobram só umas bolinhas cinzas e arredondadas que vão ficando maiores, mais separadas e mais clarinhas, até sumir no ar. Isso se chama dissipar: a fumaça se espalha e some devagar. Ao final da aula, cada criança terá uma animação completa de explosão, do "bum" pequeno até a fumaça que se dissipa, pronta para deixar qualquer jogo muito mais emocionante.`,
  materiais: [
    `Computadores com o Aseprite já aberto, um por criança (ou em duplas), com um arquivo novo de 48x48 pixels criado antes da aula começar`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar cada clique na tela cheia`,
    `Animação de exemplo pronta do professor: uma explosão de 6 a 8 quadros que começa pequena, cresce com clarão e termina em fumaça, já salva para mostrar girando em loop`,
    `Folha impressa em sequência mostrando os quadros da explosão lado a lado (pequena, média, grande com clarão, fumaça), para a criança ver a progressão de tamanho com os próprios olhos`,
    `Cartão com a paleta de cores quentes (amarelo, laranja, vermelho) e um quadradinho branco marcado como "clarão", para a criança copiar as cores certas`,
    `Adesivos ou carimbos para premiar quem conseguir fazer a explosão crescer direitinho do menor para o maior`,
  ],
  conceitosChave: [
    `Explosão — efeito de jogo feito de poucos quadrinhos que começa pequeno, cresce e depois vira fumaça.`,
    `Escala — palavra elegante para tamanho; mudar a escala é deixar o desenho maior ou menor de um quadro para o outro.`,
    `Quadro a quadro — desenhar um pouquinho diferente em cada quadrinho, para que, passando rápido, vire movimento.`,
    `Cores quentes — amarelo, laranja e vermelho, as cores do fogo, que deixam a explosão com cara de quente.`,
    `Clarão — um ponto branco ou bem clarinho no meio do estouro maior, que dá a sensação de luz forte e poder.`,
    `Fumaça — bolinhas cinzas e arredondadas que aparecem no fim, espalhando-se e clareando até sumir.`,
    `Dissipar — quando a fumaça vai se espalhando e ficando mais clara até desaparecer no ar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista nem dominar o Aseprite. A explosão é a animação mais perdoadora que existe: é só uma bola de cores quentes que vai crescendo. Mesmo um desenho tosco fica bonito porque passa rápido. O segredo único da aula é o tamanho mudando: quadro 1 pequeno, quadro do meio gigante com clarão, últimos quadros viram fumaça. Antes da aula, abra a animação de exemplo e aperte a tecla Enter para vê-la rodar em loop, só para sentir o ritmo. Os lugares do Aseprite que você mais vai usar hoje são: a Timeline (a faixa de quadros embaixo da tela), o botão "New Frame" (o ícone de folha com sinal de mais, no canto da Timeline), a ferramenta "Pencil" (lápis) e a paleta de cores no lado esquerdo.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: Pergunte "quem já viu uma explosão em jogo?" Mostre a animação de exemplo no projetor rodando em loop (aperte Enter no Aseprite). Pergunte: ela começa grande ou pequena? Faça a turma perceber junto que ela cresce. Mostre a folha impressa com os quadros em sequência.

15 min — Conteúdo novo guiado (demonstre no projetor): Comece no quadro 1 da Timeline. Pegue o Pencil (lápis), escolha o amarelo na paleta e desenhe uma bolinha bem pequena no centro, do tamanho de uma ervilha. Agora clique no botão "New Frame" para criar o quadro 2; desenhe a mesma bolinha um pouco maior, com amarelo no meio e laranja na borda. Crie o quadro 3 maior ainda, somando vermelho nas pontas. No quadro 4, o estouro máximo: faça a bola bem grande e coloque um ponto branco no centro, esse é o clarão. Daí em diante a explosão diminui: quadros 5 e 6 já são fumaça, troque para o cinza e desenhe bolinhas redondas, separadas e cada vez mais clarinhas. Para testar, aperte Enter e veja rodar.

25 min — Mão na massa: Cada criança faz a própria explosão com pelo menos 6 quadros: pequena, média, grande com clarão e dois de fumaça. Passe de mesa em mesa lembrando a regra de ouro: cada quadro deve ser MAIOR que o anterior até o clarão. Quem terminar cedo ajusta a velocidade da animação e capricha na fumaça.

10 min — Desafio e compartilhar: Lance o desafio de deixar a explosão ainda mais forte (mais quadros, clarão maior, mais fumaça). Peça para duas ou três crianças mostrarem a explosão rodando no projetor e contarem qual quadro é o favorito delas.

## Como explicar para crianças

Use comparações de tamanho que a criança conhece: "No primeiro quadro a explosão é do tamanho de uma ervilha; no meio, do tamanho de uma bola de futebol!" Para as cores quentes, diga: "O amarelo é a parte mais quentinha, bem no centro; o vermelho é a beiradinha que já está esfriando." Para o clarão: "É a luz tão forte que machuca os olhos, por isso fica branca." Para a fumaça: "Quando o fogo apaga, sobra a fumacinha cinza que se espalha e some no ar." Sempre mostre na tela rodando, porque a criança entende muito mais vendo do que ouvindo.

## Erros comuns e como ajudar

O erro mais comum é desenhar todos os quadros do mesmo tamanho; aí a explosão fica parada em vez de crescer. Peça para a criança olhar a folha impressa e checar se cada quadro está maior que o anterior. Outro erro é esquecer de criar um quadro novo e desenhar tudo em cima do mesmo, apagando o anterior; mostre de novo o botão "New Frame" e como cada quadro fica separado na Timeline. Algumas crianças pintam a explosão inteira de uma cor só; lembre que são três cores quentes empilhadas, amarelo no meio, laranja em volta e vermelho na ponta. Tem quem esqueça o clarão; reforce que é só um pontinho branco no centro do estouro maior. E se a animação parecer travada, quase sempre faltam quadros entre o pequeno e o grande, ou os tamanhos pularam muito de uma vez.`,
  exercicios: [
    {
      titulo: `Caça à explosão que cresce`,
      tipo: `Observação e identificação`,
      tempo: `5 minutos`,
      guiaProfessor: `Rode a animação de exemplo no projetor (aperte Enter) bem devagar, parando quadro a quadro com as setas do teclado. Aponte cada quadro enquanto avança.`,
      atividade: `As crianças assistem o professor avançar quadro a quadro e gritam "MENOR" ou "MAIOR" comparando cada quadro com o anterior. Depois apontam em qual quadro aparece o clarão e em qual começa a fumaça.`,
      gabarito: `Do quadro 1 até o estouro máximo a resposta é sempre "MAIOR", porque a explosão cresce. O clarão (ponto branco) aparece no quadro do estouro máximo, por volta do quadro 4. A fumaça (bolinhas cinzas) começa nos últimos quadros, depois do clarão. Acertar é reconhecer que a explosão cresce até o clarão e depois vira fumaça.`,
    },
    {
      titulo: `As três cores quentes na ordem certa`,
      tipo: `Prática guiada`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre na paleta de cores onde ficam o amarelo, o laranja e o vermelho. Demonstre desenhar uma bola com amarelo no centro, laranja em volta e vermelho na ponta, nessa ordem de dentro para fora.`,
      atividade: `Em um único quadro, a criança desenha uma bola de explosão usando as três cores quentes empilhadas: amarelo bem no meio, laranja em volta e vermelho na borda de fora.`,
      gabarito: `A bola correta tem três camadas de cor: amarelo no centro (a parte mais quente), laranja em volta e vermelho na borda externa (a parte que esfria). Se a criança usar só uma cor, ou inverter a ordem deixando o vermelho no meio, peça para corrigir de dentro para fora: amarelo, laranja, vermelho.`,
    },
    {
      titulo: `Do pequeno ao grande, quadro a quadro`,
      tipo: `Mão na massa com escala`,
      tempo: `12 minutos`,
      guiaProfessor: `Acompanhe a criação dos quadros com o botão "New Frame". Verifique especialmente se cada quadro novo tem uma bola MAIOR que o quadro anterior. Use a folha impressa como referência ao lado da criança.`,
      atividade: `A criança cria quatro quadros na Timeline e desenha a explosão crescendo: quadro 1 pequenininho, quadro 2 médio, quadro 3 grande e quadro 4 bem grande. Depois aperta Enter para ver rodar.`,
      gabarito: `A sequência correta tem cada quadro maior que o anterior: quadro 1 menor de todos, quadro 4 maior de todos. Ao apertar Enter, a explosão deve parecer nascer e crescer. Se todos os quadros têm o mesmo tamanho, a animação fica parada; se um quadro for menor que o anterior no meio do crescimento, a explosão "pisca" para trás e precisa ser ajustada.`,
    },
    {
      titulo: `O clarão do estouro máximo`,
      tipo: `Desafio de detalhe`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre escolher o branco na paleta e pintar um pontinho bem no centro do quadro do estouro maior. Reforce que o clarão vai SÓ no quadro grande, não em todos.`,
      atividade: `No quadro em que a explosão está maior, a criança escolhe a cor branca e pinta um clarão: um ponto branco bem no centro da bola de fogo. Depois compara com o quadro anterior, que não tem clarão.`,
      gabarito: `O clarão correto é um ponto branco (ou amarelo bem claro) no centro do quadro do estouro máximo, e aparece apenas nesse quadro. Ao rodar a animação, deve dar a sensação de uma luz forte que pisca no momento do "bum". Se a criança colocou branco em todos os quadros, peça para apagar dos demais e deixar só no maior.`,
    },
    {
      titulo: `A fumaça que se dissipa`,
      tipo: `Criação livre e finalização`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre como trocar para o cinza na paleta e desenhar bolinhas redondas e separadas. Explique que de um quadro para o outro a fumaça fica maior, mais espalhada e mais clarinha, até sumir.`,
      atividade: `Depois do clarão, a criança cria dois quadros novos de fumaça: no primeiro, algumas bolinhas cinzas juntas; no segundo, bolinhas maiores, mais separadas e mais clarinhas. Por fim, roda a animação completa do "bum" até a fumaça.`,
      gabarito: `A fumaça correta usa bolinhas cinzas arredondadas que, do penúltimo para o último quadro, ficam maiores, mais separadas e mais claras, dando a ideia de dissipar (espalhar e sumir). A animação completa deve começar pequena, crescer até o clarão e terminar com a fumaça clareando. Se a fumaça aparece igualzinha nos dois quadros, lembre a criança de espalhar e clarear mais no último.`,
    },
  ],
};
