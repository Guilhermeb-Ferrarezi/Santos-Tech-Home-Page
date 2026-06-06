import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Media queries na prática",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Usar media queries para mudar o layout conforme a largura da tela, fazendo o Flexbox empilhar no celular e ficar lado a lado no computador.`,
  descricao: `Na aula passada os alunos aprenderam a pensar em telas de todos os tamanhos. Agora chegou a hora de colocar isso em prática com a ferramenta mais poderosa do design responsivo: as media queries. Uma media query é como uma pergunta que o CSS faz para o navegador, do tipo "a tela está estreita?". Quando a resposta é sim, o CSS aplica um conjunto de regras especiais; quando é não, ele segue com as regras normais. É assim que o mesmo site consegue ficar bonito tanto num celular minúsculo quanto numa tela grande de computador.

O grande momento desta aula é transformar o layout de Flexbox que a turma já construiu. No computador, os cartões e as colunas ficam lado a lado, aproveitando a largura disponível. No celular, porém, lado a lado fica tudo apertado e ilegível. A solução é simples e poderosa: dentro de uma media query, trocamos a direção do Flexbox de linha para coluna, fazendo os elementos empilharem um embaixo do outro. Com pouquíssimo código, o site passa a se adaptar sozinho ao tamanho do aparelho.

Os alunos vão aprender a sintaxe exata da media query, a escolher um ponto de quebra (o famoso breakpoint) e a escrever as regras que entram em ação só quando a tela é estreita. Vão testar o resultado na hora usando a ferramenta de redimensionar do navegador, arrastando a janela e vendo o layout mudar diante dos olhos. Essa sensação de ver o site se reorganizar sozinho costuma ser um dos momentos mais empolgantes do mês.

Esta aula consolida o coração do design responsivo. Quando o aluno domina a media query, ele ganha controle total sobre como o site aparece em cada aparelho, sem precisar criar páginas separadas. É uma habilidade que ele vai usar em todas as próximas aulas e no entregável do mês, que é um site bonito e completo, bonito de verdade em qualquer tela.`,
  materiais: [
    `Computadores com editor de código (VS Code) e os arquivos HTML e CSS do site já em andamento, um por aluno`,
    `Navegador moderno (Chrome ou Edge) em cada computador para testar o site`,
    `Projetor ou TV para o professor demonstrar o código e a mudança de layout ao vivo`,
    `Arquivo de exemplo com dois cartões em Flexbox lado a lado, pronto para receber a media query`,
    `Folha impressa com a sintaxe da media query para os alunos consultarem`,
    `Acesso à ferramenta de redimensionar a janela do navegador (modo dispositivo das DevTools, tecla F12)`,
  ],
  conceitosChave: [
    `Media query — regra do CSS que aplica estilos só quando a tela atende a uma condição, como ter pouca largura.`,
    `Breakpoint (ponto de quebra) — a largura escolhida onde o layout muda, por exemplo 600 pixels.`,
    `max-width — condição que significa "até esta largura"; serve para mirar telas pequenas como as de celular.`,
    `min-width — condição que significa "a partir desta largura"; serve para mirar telas grandes como as de computador.`,
    `flex-direction — propriedade do Flexbox que define se os itens ficam em linha (row) ou empilhados em coluna (column).`,
    `Design responsivo — técnica de fazer o mesmo site se adaptar e ficar bonito em qualquer tamanho de tela.`,
    `Viewport — a área visível da página dentro do navegador; é a largura dela que a media query observa.`,
  ],
  treinamento: `## O que o professor precisa saber

Uma media query é um bloco de CSS que só vale quando uma condição sobre a tela é verdadeira. A sintaxe começa com a palavra "@media", seguida da condição entre parênteses, e depois um par de chaves que guarda as regras especiais. Antes da aula, decore esta estrutura: arroba-media, abre parênteses, max-width dois pontos 600px, fecha parênteses, abre chave, regras, fecha chave. O termo "max-width: 600px" significa "quando a tela tiver no máximo 600 pixels de largura". Tudo que estiver dentro dessa media query só entra em ação em telas estreitas, ou seja, celulares.

O truque central da aula é o Flexbox. Por padrão, um container com "display: flex" coloca os filhos em linha, lado a lado, porque o valor inicial de "flex-direction" é "row". Dentro da media query de tela estreita, basta escrever "flex-direction: column" para empilhar os itens um embaixo do outro. Teste isso em casa: abra o exemplo, encolha a janela e veja os cartões mudarem de lado a lado para empilhados. Saiba abrir as DevTools com a tecla F12 e ligar o modo dispositivo (o ícone de celular e tablet) para simular telas pequenas sem precisar de outro aparelho.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: Relembre a aula passada perguntando o que significa um site responsivo. Mostre no projetor o exemplo com dois cartões lado a lado e encolha a janela: os cartões ficam apertados. Pergunte à turma como resolver. Apresente a ideia da media query como uma pergunta que o CSS faz ao navegador.

15 min — Conteúdo novo guiado: No projetor, mostre o CSS atual do container. Escreva o bloco da media query linha a linha, explicando cada parte:

.cartoes {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

@media (max-width: 600px) {
  .cartoes {
    flex-direction: column;
  }
}

Explique: "display: flex" liga o Flexbox; "flex-direction: row" deixa em linha; "gap: 16px" dá espaço entre eles. A media query diz "se a tela tiver no máximo 600 pixels, troque a direção para column", o que empilha os cartões. Encolha a janela ao vivo para mostrar a mágica acontecendo.

25 min — Mão na massa: Cada aluno abre o próprio CSS e localiza o container em Flexbox que tem dois ou mais elementos lado a lado. Adicionam, no fim do arquivo, a media query com "max-width: 600px" trocando "flex-direction" para "column". Salvam e testam encolhendo a janela do navegador ou usando o modo dispositivo (F12). Circule pela sala conferindo se a chave fecha certo e se o nome da classe dentro da media query é igual ao do container.

10 min — Desafio e compartilhar: Lance o desafio de ajustar mais uma coisa no celular, como diminuir uma fonte ou esconder uma imagem dentro da mesma media query. Em duplas, cada um mostra o site encolhendo a janela e o colega confere se ficou bonito empilhado.

## Como explicar de forma clara (linguagem para a idade)

Compare a media query com uma roupa que muda sozinha conforme o clima: "se está frio, vista o casaco; se não, fique sem". O CSS pergunta "a tela está pequena?" e, se sim, veste regras diferentes. Use a imagem de uma estante: no computador os livros cabem lado a lado na prateleira larga; no celular, a prateleira é estreita, então empilhamos os livros um sobre o outro. Mostre que "row" é igual a uma fila em pé, e "column" é igual a uma pilha. Repita a frase-chave: "um código, várias telas".

## Erros comuns e como ajudar

O erro mais comum é esquecer de fechar uma das chaves: a media query tem chave de fora e chave de dentro, então são duas que abrem e duas que fecham. Mostre a contagem das chaves. Outro erro é escrever o nome da classe errado dentro da media query, diferente do container; lembre que precisa ser idêntico, com o ponto na frente. Muitos colocam um espaço errado em "max-width: 600px" ou esquecem o "px"; confira a pontuação com eles. Alguns testam e não veem mudança porque a janela ainda está larga; oriente a encolher bastante ou usar o modo dispositivo com a tecla F12. Por fim, há quem escreva "@media" sem a arroba ou sem os parênteses; mostre a sintaxe completa na folha impressa.`,
  exercicios: [
    {
      titulo: `Lendo a media query`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Projete o bloco de código e leia em voz alta com a turma. Faça perguntas em vez de dar a resposta pronta. Confirme que todos entendem o que "max-width: 600px" significa antes de seguir.`,
      atividade: `Olhe este código no projetor e responda em voz alta: o que acontece com os cartões quando a tela tem 400 pixels de largura? E quando tem 900 pixels? Como você descobriu? Código: arroba-media (max-width: 600px) e dentro dele .cartoes com flex-direction: column.`,
      gabarito: `Com 400 pixels a tela é menor que 600, então a condição "max-width: 600px" é verdadeira e os cartões ficam empilhados em coluna (flex-direction: column). Com 900 pixels a condição é falsa, então a regra da media query não vale e os cartões voltam ao padrão lado a lado em linha. O aluno descobre comparando o número da tela com o breakpoint de 600 pixels.`,
    },
    {
      titulo: `Empilhando no celular`,
      tipo: `prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Garanta que cada aluno encontre o container em Flexbox no próprio CSS. Confira se o nome da classe dentro da media query é idêntico ao do container e se as duas chaves fecham. Peça para testar encolhendo a janela.`,
      atividade: `No seu arquivo CSS, no fim do arquivo, adicione uma media query que empilhe os elementos do seu container Flexbox quando a tela for estreita. Use max-width de 600 pixels e troque o flex-direction para column. Salve e encolha a janela do navegador para testar.`,
      gabarito: `A solução é adicionar:

@media (max-width: 600px) {
  .cartoes {
    flex-direction: column;
  }
}

O nome ".cartoes" deve ser trocado pelo nome real da classe do container do aluno. Ao encolher a janela abaixo de 600 pixels, os elementos passam de lado a lado para empilhados. As duas chaves precisam fechar corretamente.`,
    },
    {
      titulo: `Escolhendo o breakpoint`,
      tipo: `desafio`,
      tempo: `9 minutos`,
      guiaProfessor: `Deixe cada aluno experimentar valores diferentes de breakpoint e observar onde o layout muda. Incentive testar 480, 600 e 768 pixels. Use o modo dispositivo (F12) para ver larguras exatas.`,
      atividade: `Mude o número do seu breakpoint para testar onde o layout fica melhor. Experimente max-width de 480px, depois 600px e depois 768px. Encolha a janela em cada caso e anote em qual valor o site fica mais bonito ao empilhar.`,
      gabarito: `Não há um único valor certo, mas a escolha deve ser justificada. Valores comuns: 480px mira celulares pequenos, 600px é um meio-termo muito usado, 768px já pega tablets. A resposta válida mostra que o aluno trocou o número dentro dos parênteses da media query (por exemplo max-width: 768px) e observou que, quanto maior o breakpoint, mais cedo (em telas mais largas) os elementos empilham.`,
    },
    {
      titulo: `Ajuste extra no celular`,
      tipo: `prática na ferramenta`,
      tempo: `11 minutos`,
      guiaProfessor: `Peça para adicionar mais uma regra dentro da mesma media query, sem criar outra. Confira que a nova regra está entre as chaves certas. Boas opções: reduzir font-size, diminuir padding ou centralizar texto.`,
      atividade: `Dentro da mesma media query que você criou, adicione mais uma melhoria para telas pequenas. Por exemplo, diminua o tamanho da fonte de um título ou reduza o espaçamento interno de um cartão. Salve e teste encolhendo a janela.`,
      gabarito: `O aluno deve acrescentar uma segunda regra dentro da media query existente, por exemplo:

@media (max-width: 600px) {
  .cartoes {
    flex-direction: column;
  }
  .titulo {
    font-size: 20px;
  }
}

Qualquer ajuste válido para telas pequenas é aceito (reduzir font-size, padding ou margin, ou centralizar com text-align: center), desde que esteja dentro das chaves da media query e tenha efeito visível ao encolher a janela.`,
    },
    {
      titulo: `Site bonito em qualquer tela`,
      tipo: `projeto curto`,
      tempo: `14 minutos`,
      guiaProfessor: `Avalie o site em duas larguras: cheia e estreita. O sucesso é o layout mudar de lado a lado para empilhado de forma legível. Peça uma frase explicando o que a media query fez. Aceite estilos diferentes desde que funcione nas duas telas.`,
      atividade: `Deixe seu site responsivo de ponta a ponta. Garanta que pelo menos um container empilhe no celular com a media query, e que tudo continue lado a lado no computador. Teste nas duas larguras usando o modo dispositivo (F12) e escreva uma frase explicando o que a sua media query faz.`,
      gabarito: `O site deve mostrar os elementos lado a lado em tela larga e empilhados em tela estreita, sem ficar apertado. O código contém ao menos uma media query com max-width e flex-direction: column aplicada a um container Flexbox real. A frase final deve explicar, com as palavras do aluno, que a media query troca o layout quando a tela fica menor que o breakpoint, deixando o site bonito tanto no celular quanto no computador.`,
    },
  ],
};
