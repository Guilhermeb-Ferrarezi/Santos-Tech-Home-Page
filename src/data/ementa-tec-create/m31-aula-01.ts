import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "O Segredo das Caixas (Box Model)",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Entender que todo elemento HTML é uma caixa formada por conteúdo, padding, borda e margem, usando o DevTools do navegador para enxergar essas caixas e aplicando padding, border e margin em divs para sentir como o espaço funciona.`,
  descricao: `Esta é a primeira aula do mês de HTML e CSS intermediário, e ela revela um dos segredos mais importantes de quem cria sites bonitos: todo elemento na página é, na verdade, uma caixa. O título, o parágrafo, a imagem, o botão, tudo é uma caixinha retangular, mesmo quando não conseguimos ver a borda dela. Esse modelo de caixas tem um nome técnico: box model. Quando o aluno entende o box model, ele para de "brigar" com o CSS e passa a controlar o espaço da página com calma.

Cada caixa é feita de quatro camadas, de dentro para fora. No centro fica o conteúdo (o texto ou a imagem). Em volta do conteúdo vem o padding, que é um espaço interno, como o enchimento entre o presente e a parede da caixa de papelão. Depois vem a borda (border), que é a linha que desenha o contorno da caixa. E por último vem a margem (margin), que é o espaço externo, o ar que empurra uma caixa para longe das outras. Saber a diferença entre padding (espaço dentro) e margin (espaço fora) é a grande virada de chave da aula.

Para que o aluno realmente enxergue essas camadas, vamos usar uma ferramenta que já vem dentro de todo navegador: o DevTools (Ferramentas do Desenvolvedor). Com a tecla F12, o navegador abre um painel que mostra cada elemento pintado em cores diferentes: azul para o conteúdo, verde para o padding, amarelo para a margem. É como colocar um óculos de raio-x na página. O aluno vai passar o mouse sobre os elementos e ver as caixas se acenderem, descobrindo que aquilo que parecia mágica é só geometria organizada.

O entregável do mês é um site bonito e completo, e o box model é a fundação de tudo. Sem dominar o espaço entre os elementos, qualquer site fica apertado ou bagunçado. Por isso, nesta aula o foco não é fazer algo lindo ainda, e sim sentir o espaço: o aluno vai criar algumas divs coloridas e mexer em padding, border e margin até entender, no dedo, o que cada propriedade faz. Nas próximas aulas usaremos o Flexbox e a responsividade; hoje plantamos a raiz.`,
  materiais: [
    `Computadores com editor de código instalado (VS Code recomendado), um por aluno`,
    `Navegador moderno em cada máquina (Chrome ou Edge) para abrir a página e usar o DevTools`,
    `Projetor ou TV para o professor demonstrar o código e o DevTools em tela grande`,
    `Arquivo de exemplo inicial com index.html e style.css já criados na pasta da aula`,
    `Imagem ou slide com o desenho do box model (conteúdo, padding, border, margin) para mostrar as camadas`,
    `Folha impressa de apoio com as quatro propriedades e a tecla F12 anotada, para consulta rápida do aluno`,
  ],
  conceitosChave: [
    `Box model — a ideia de que todo elemento HTML é uma caixa retangular formada por quatro camadas.`,
    `Content (conteúdo) — o miolo da caixa, onde fica o texto ou a imagem do elemento.`,
    `Padding — o espaço interno entre o conteúdo e a borda da caixa, como um enchimento por dentro.`,
    `Border (borda) — a linha que desenha o contorno da caixa, com espessura, estilo e cor.`,
    `Margin (margem) — o espaço externo que empurra a caixa para longe das outras caixas vizinhas.`,
    `DevTools — as Ferramentas do Desenvolvedor do navegador, abertas com a tecla F12, que mostram as caixas pintadas em cores.`,
    `div — uma caixa genérica do HTML, usada para agrupar conteúdo e praticar o espaçamento.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em CSS. Precisa segurar uma frase: todo elemento é uma caixa com quatro camadas, de dentro para fora: conteúdo, padding, border e margin. O padding é o espaço por dentro (entre o conteúdo e a borda). A margin é o espaço por fora (entre uma caixa e a vizinha). A border fica no meio das duas. Decore também a tecla mágica: F12 abre o DevTools, e na aba "Elements" (ou "Elementos") aparece um diagrama colorido do box model quando você seleciona um elemento. Antes da aula, abra o arquivo de exemplo no navegador, aperte F12 e passe o mouse sobre uma div para ver as cores acenderem. Faça isso uma vez e você vai ensinar com confiança.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

10 min, aquecimento e revisão. Abra o navegador na tela grande e pergunte: "Onde estão as caixas nesta página?" Aperte F12, vá na aba "Elements", passe o mouse sobre os elementos e mostre os retângulos coloridos acendendo. Diga que hoje todos vão aprender a controlar essas caixas.

15 min, conteúdo novo guiado. No editor, abra o arquivo index.html e mostre uma div. Digite junto com a turma, dentro da tag body:

<div class="caixa">Eu sou uma caixa</div>

Agora abra o style.css e escreva, explicando cada linha:

.caixa {
  background-color: lightblue;
  padding: 20px;
  border: 4px solid navy;
  margin: 30px;
}

Explique linha a linha: background-color pinta o fundo para vermos a caixa; padding: 20px afasta o texto da borda por dentro; border: 4px solid navy desenha um contorno de 4 pixels, linha sólida, cor azul-marinho; margin: 30px empurra a caixa para longe das bordas da tela. Salve, recarregue o navegador, aperte F12 e mostre o diagrama do box model com os valores 20 e 30 aparecendo.

25 min, mão na massa. Cada aluno cria três divs com classes diferentes (caixa1, caixa2, caixa3) e dá cores de fundo diferentes. Eles devem mudar os valores de padding e margin em cada uma e observar no DevTools como o espaço muda. Peça que deixem uma div sem padding e outra com padding bem grande para sentir a diferença. Circule pela sala apontando o diagrama colorido do F12.

10 min, desafio e compartilhar. Desafie: "Faça duas caixas ficarem bem coladas e depois bem separadas, mexendo só na margin." Cada aluno mostra ao colega do lado a caixa que mais gostou e diz uma frase: o que o padding faz e o que a margin faz.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem de um presente. O conteúdo é o brinquedo; o padding é o plástico-bolha em volta do brinquedo (espaço por dentro); a border é a caixa de papelão; a margin é a distância entre uma caixa e outra na prateleira. Repita: "Padding é por dentro, margin é por fora." Mostre, não só fale: cada vez que mudar um número, recarregue a página e aponte o que mexeu. Chame o DevTools de "óculos de raio-x da página". Evite termos difíceis; diga "espaço interno" e "espaço externo" antes de dizer padding e margin.

## Erros comuns e como ajudar

O erro mais comum é confundir padding com margin. Quando isso acontecer, mande o aluno abrir o F12 e olhar a cor: verde é padding, laranja ou amarelo é margin. Outro erro frequente é esquecer a unidade px (escrever padding: 20 em vez de padding: 20px); sem a unidade, o navegador ignora a regra. Há quem esqueça de salvar o arquivo antes de recarregar e jura que "não mudou nada"; ensine o hábito de salvar com Ctrl+S e recarregar. Alguns esquecem o ponto antes do nome da classe no CSS (escrevem caixa em vez de .caixa), e a regra não funciona. Por fim, se a div não aparece, geralmente falta o background-color para ela ficar visível, já que sem fundo a caixa é transparente.`,
  exercicios: [
    {
      titulo: `Raio-x da página com o DevTools`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que todos abram o arquivo de exemplo no navegador. Mostre a tecla F12 e a aba "Elements". Reforce as cores: azul é conteúdo, verde é padding, amarelo é margem.`,
      atividade: `Abra a página de exemplo no navegador, aperte F12 e clique na aba "Elements". Passe o mouse sobre uma div e observe as cores que acendem. Diga ao professor qual cor é o padding e qual é a margem.`,
      gabarito: `O aluno deve identificar, no diagrama do DevTools, que a faixa verde é o padding (espaço interno) e a faixa amarela ou laranja é a margin (espaço externo), com o conteúdo em azul no centro. Caminho: F12, aba "Elements", passar o mouse sobre o elemento para acender o box model colorido.`,
    },
    {
      titulo: `Minha primeira caixa com padding`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe a digitação. Verifique o ponto antes do nome da classe no CSS e a unidade px. Peça que salvem com Ctrl+S e recarreguem antes de avaliar.`,
      atividade: `No index.html, crie uma div com a classe "caixa" e o texto "Olá Box Model". No style.css, dê a ela um fundo de cor, um padding de 20px e uma borda sólida. Salve e veja o resultado no navegador.`,
      gabarito: `HTML: <div class="caixa">Olá Box Model</div>
CSS:
.caixa {
  background-color: lightgreen;
  padding: 20px;
  border: 3px solid green;
}
A caixa deve aparecer com fundo colorido, o texto afastado 20px da borda por dentro e um contorno verde sólido. Se nada mudar, conferir o ponto antes de caixa, a unidade px e se o arquivo foi salvo.`,
    },
    {
      titulo: `Padding por dentro contra margin por fora`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Peça duas divs lado a lado. Deixe claro que só uma muda o padding e só a outra muda a margin, para o aluno isolar o efeito. Use o F12 para comprovar.`,
      atividade: `Crie duas divs: "caixaA" e "caixaB", cada uma com um fundo de cor. Na caixaA, use só padding grande (40px) e margem zero. Na caixaB, use padding zero e margem grande (40px). Compare no navegador o que mudou em cada uma e explique a diferença em uma frase.`,
      gabarito: `CSS:
.caixaA {
  background-color: gold;
  padding: 40px;
  margin: 0;
}
.caixaB {
  background-color: salmon;
  padding: 0;
  margin: 40px;
}
A caixaA fica "gorda" por dentro, com o texto bem afastado da borda, mas colada nas vizinhas. A caixaB fica apertada por dentro (texto rente à borda), porém bem separada das outras caixas. Frase esperada: "O padding empurra o conteúdo para dentro; a margin empurra a caixa para fora."`,
    },
    {
      titulo: `Lados diferentes: controlando cada direção`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Apresente as propriedades por lado: padding-top, padding-right, padding-bottom e padding-left. Mostre no F12 que os quatro valores podem ser diferentes. Cuidado com a unidade px em cada um.`,
      atividade: `Crie uma div chamada "caixaLados" com fundo e borda. Aplique um padding diferente em cada lado: 10px em cima, 40px à direita, 10px embaixo e 40px à esquerda. Veja no DevTools os quatro valores e descreva o formato que a caixa ganhou.`,
      gabarito: `CSS:
.caixaLados {
  background-color: lightpink;
  border: 2px solid purple;
  padding-top: 10px;
  padding-right: 40px;
  padding-bottom: 10px;
  padding-left: 40px;
}
O texto fica com pouco espaço em cima e embaixo e muito espaço nas laterais, deixando a caixa larga e baixa em relação ao conteúdo. No DevTools, o diagrama mostra 10 nas faixas de cima e de baixo e 40 nas laterais. Forma atalho aceita: padding: 10px 40px; (cima/baixo 10, laterais 40).`,
    },
    {
      titulo: `Mini projeto: três cartões organizados`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Estimule a turma a usar a mesma classe nos três cartões para reaproveitar o CSS. Verifique no F12 se o espaçamento entre eles vem da margin. Peça que salvem o arquivo com o nome do aluno.`,
      atividade: `Monte uma página com três divs iguais da classe "cartao", cada uma com um texto curto dentro (por exemplo "Cartão 1", "Cartão 2", "Cartão 3"). Dê a elas fundo, borda, um padding confortável e uma margin que separe bem os cartões. Confira no DevTools que o espaço entre eles vem da margin e salve o arquivo com o seu nome.`,
      gabarito: `HTML:
<div class="cartao">Cartão 1</div>
<div class="cartao">Cartão 2</div>
<div class="cartao">Cartão 3</div>
CSS:
.cartao {
  background-color: lightyellow;
  border: 2px solid orange;
  padding: 20px;
  margin: 15px;
}
Os três cartões devem aparecer com o mesmo visual, texto afastado da borda pelo padding e um espaço claro entre eles vindo da margin. Como usam a mesma classe, basta uma regra CSS para os três. No DevTools, a faixa amarela (margin) é o que cria o respiro entre os cartões. Arquivo salvo com o nome do aluno.`,
    },
  ],
};
