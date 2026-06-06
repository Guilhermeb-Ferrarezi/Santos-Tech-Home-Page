import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Flexbox: organizando na tela",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Usar o Flexbox para alinhar e distribuir elementos em linha e em coluna, aplicando display: flex, justify-content, align-items e gap para montar um menu e uma fileira de cards, criando o primeiro layout de verdade do site.`,
  descricao: `Na aula passada o aluno descobriu que todo elemento é uma caixa, com seu padding, sua borda e sua margem. Mas só sabíamos empilhar essas caixas, uma embaixo da outra, do jeito que o navegador faz por padrão. Hoje damos um salto enorme: vamos aprender a organizar as caixas onde quisermos, lado a lado, centralizadas, espalhadas ou agrupadas. A ferramenta que faz essa mágica se chama Flexbox, e é a base de quase todos os sites modernos.

O Flexbox funciona com uma ideia simples: existe uma caixa-mãe (o container) e as caixas-filhas (os itens) que ficam dentro dela. Quando escrevemos display: flex no container, ele ganha superpoderes e passa a comandar como os filhos se organizam. Por padrão, os filhos entram em fila, um ao lado do outro, na horizontal. A partir daí, três propriedades fazem quase todo o trabalho: justify-content distribui os itens ao longo da linha (encostados à esquerda, ao centro, à direita ou espalhados); align-items alinha os itens na outra direção (em cima, no meio ou embaixo); e gap cria um espaço igual entre todos eles, sem precisar ficar calculando margem item por item.

O nome "flex" vem de flexível, e é exatamente isso: os itens se ajustam ao espaço disponível como se fossem elásticos. Em vez de o aluno brigar com margens para tentar centralizar algo (o velho pesadelo de quem aprende CSS), ele simplesmente diz ao container o que quer e o Flexbox resolve. Centralizar perfeitamente uma caixa no meio da tela, que parecia impossível, vira uma linha de código. Essa sensação de controle é o que transforma o aluno de "quem desenha textos soltos" em "quem monta layouts".

Para sentir esse poder na prática, o aluno vai construir dois componentes que aparecem em quase todo site: um menu de navegação no topo, com vários links em fila, e uma fileira de cards lado a lado, como os cartões de produtos de uma loja. Esses dois blocos serão reaproveitados no site final do mês. Hoje plantamos o esqueleto do layout; nas próximas aulas vamos deixar tudo responsivo e bonito em qualquer tela.`,
  materiais: [
    `Computadores com editor de código instalado (VS Code recomendado), um por aluno`,
    `Navegador moderno em cada máquina (Chrome ou Edge) para abrir a página e usar o DevTools com a tecla F12`,
    `Projetor ou TV para o professor demonstrar o código e o resultado em tela grande`,
    `Arquivo de exemplo inicial com index.html e style.css na pasta da aula, já contendo algumas divs para virar menu e cards`,
    `Imagem ou slide mostrando o eixo principal (horizontal) e o eixo cruzado (vertical) do Flexbox`,
    `Folha de apoio impressa com as quatro propriedades do dia (display, justify-content, align-items, gap) e seus valores mais comuns`,
  ],
  conceitosChave: [
    `Flexbox — sistema do CSS que organiza caixas em linha ou em coluna de forma flexível, sem precisar calcular margens manualmente.`,
    `Container (caixa-mãe) — o elemento que recebe display: flex e passa a comandar como os filhos se organizam dentro dele.`,
    `Item (caixa-filha) — cada elemento que está direto dentro do container flex e obedece às regras dele.`,
    `display: flex — a propriedade que liga o Flexbox no container e coloca os filhos em fila, lado a lado, por padrão.`,
    `justify-content — distribui os itens ao longo da linha principal: à esquerda, ao centro, à direita ou espalhados (space-between).`,
    `align-items — alinha os itens na direção cruzada: no topo, no meio (center) ou na base do container.`,
    `gap — cria um espaço igual entre todos os itens de uma vez, substituindo o trabalho de colocar margem em cada um.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar CSS. Precisa segurar uma ideia central: o Flexbox tem uma caixa-mãe (o container) e caixas-filhas (os itens). Você liga o Flexbox escrevendo display: flex no container, e a partir daí os filhos entram em fila, lado a lado. Depois, três propriedades fazem quase tudo. A justify-content distribui os itens na horizontal (a "linha principal"); os valores mais usados são flex-start (à esquerda), center (no centro), flex-end (à direita) e space-between (um item em cada ponta e o resto espalhado). A align-items alinha na vertical (a "linha cruzada"); o valor estrela é center, que joga tudo para o meio. E a gap cria um espaço igual entre os itens. Decore uma frase: "justify mexe na fila, align mexe na altura". Antes da aula, abra o exemplo no navegador, troque os valores de justify-content e veja os itens deslizarem; faça isso uma vez e ensinará com tranquilidade.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

10 min, aquecimento e revisão. Abra a página da aula 1 e pergunte: "Por que as caixas ficam uma embaixo da outra?" Mostre que esse é o padrão do navegador. Diga que hoje vamos colocá-las lado a lado e centralizá-las com uma ferramenta nova: o Flexbox.

15 min, conteúdo novo guiado. No index.html, mostre um menu simples dentro do body:

<nav class="menu">
  <a href="#">Início</a>
  <a href="#">Sobre</a>
  <a href="#">Contato</a>
</nav>

No style.css, escreva junto com a turma, explicando cada linha:

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: navy;
  padding: 15px;
}

Explique: display: flex liga o Flexbox e coloca os links em fila; justify-content: center junta os três no meio da barra; align-items: center alinha tudo na mesma altura; gap: 20px cria um espaço igual entre os links; o resto pinta o fundo e dá respiro. Salve, recarregue e troque justify-content para space-between, mostrando os links se espalharem.

25 min, mão na massa. Cada aluno monta uma fileira de cards. No HTML:

<div class="cards">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>

No CSS:

.cards {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}
.card {
  background-color: lightblue;
  padding: 30px;
  border: 2px solid navy;
}

Peça que troquem os valores de justify-content e gap e observem o efeito. Circule pela sala.

10 min, desafio e compartilhar. Desafie: "Centralize um único card no meio exato da barra usando justify-content e align-items." Cada aluno mostra ao colega seu menu ou seus cards e diz uma frase sobre o que o display: flex fez.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem de uma fila de pessoas. O container é o corredor; os itens são as pessoas na fila. O display: flex é dizer "todos em fila!". O justify-content decide se a fila fica encostada na porta, no meio do corredor ou espalhada. O align-items decide a altura: todos com a cabeça no mesmo nível. O gap é o espaço que cada um deixa para o vizinho. Mostre, não só fale: cada vez que trocar um valor, recarregue e aponte quem se moveu. Repita o bordão "justify mexe na fila, align mexe na altura".

## Erros comuns e como ajudar

O erro mais comum é colocar display: flex na caixa errada: lembre que é sempre na MÃE, nunca nos filhos. Outro clássico é esperar que align-items: center funcione sozinho sem que o container tenha altura, então o efeito não aparece; mostre o resultado no F12 e, se preciso, dê uma altura ao container para ver o alinhamento vertical. Há quem esqueça a unidade px no gap (escrever gap: 20 em vez de gap: 20px) e a regra é ignorada. Muitos confundem justify-content com align-items; mande olhar o bordão e testar trocando um valor de cada vez. Por fim, se os itens não ficam lado a lado, quase sempre falta o display: flex no container ou ele foi escrito num seletor errado; confira o ponto antes do nome da classe.`,
  exercicios: [
    {
      titulo: `Ligando o Flexbox`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha um container com três divs filhas. O objetivo é só sentir a virada: antes empilhadas, depois em fila. Reforce que display: flex vai na mãe.`,
      atividade: `No arquivo de exemplo, encontre uma div com três caixas dentro. No style.css, adicione display: flex ao container e veja as três caixas saírem de cima para baixo e irem para o lado a lado. Salve e recarregue.`,
      gabarito: `CSS:
.container {
  display: flex;
}
As três caixas, que antes ficavam empilhadas (uma embaixo da outra), passam a aparecer lado a lado, na horizontal. Se nada mudar, conferir se o display: flex foi escrito no container (a mãe) e não nos filhos, e se há o ponto antes do nome da classe.`,
    },
    {
      titulo: `Menu centralizado com gap`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe a digitação do nav com três links. Verifique justify-content: center e a unidade px no gap. Peça que salvem com Ctrl+S e recarreguem antes de avaliar.`,
      atividade: `Monte um menu com a tag nav e três links (Início, Sobre, Contato). No CSS, dê ao menu display: flex, centralize os links com justify-content: center e separe-os com um gap de 20px. Pinte o fundo para enxergar a barra.`,
      gabarito: `HTML:
<nav class="menu">
  <a href="#">Início</a>
  <a href="#">Sobre</a>
  <a href="#">Contato</a>
</nav>
CSS:
.menu {
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: navy;
  padding: 15px;
}
Os três links devem aparecer em fila, centralizados na barra azul-marinho, com um espaço igual de 20px entre eles. Se ficarem grudados, faltou o gap com px; se ficarem à esquerda, faltou o justify-content: center.`,
    },
    {
      titulo: `Espalhando os cards com space-between`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre a diferença entre center e space-between trocando só o valor. Peça que descrevam em uma frase o que mudou. Use o F12 para confirmar que o espaço extra fica entre os cards.`,
      atividade: `Crie uma fileira com três cards dentro de um container. Dê ao container display: flex e use justify-content: space-between para empurrar um card para cada ponta e espalhar o do meio. Depois troque para center e compare o resultado.`,
      gabarito: `HTML:
<div class="cards">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
CSS:
.cards {
  display: flex;
  justify-content: space-between;
}
.card {
  background-color: lightblue;
  padding: 30px;
  border: 2px solid navy;
}
Com space-between, o primeiro card cola na esquerda, o terceiro na direita e o espaço sobra entre eles. Com center, os três ficam juntos no meio. Frase esperada: "space-between joga os itens para as pontas; center junta tudo no centro."`,
    },
    {
      titulo: `Centralizado nos dois eixos`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Aqui entra o align-items. Dê uma altura ao container para o alinhamento vertical ficar visível. Reforce o bordão: justify mexe na fila, align mexe na altura.`,
      atividade: `Crie um container alto (altura de 200px) com um único card dentro. Use display: flex, justify-content: center e align-items: center para deixar o card no centro exato da caixa, tanto na horizontal quanto na vertical. Confira no DevTools.`,
      gabarito: `HTML:
<div class="palco">
  <div class="card">No centro</div>
</div>
CSS:
.palco {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: lightyellow;
}
.card {
  background-color: salmon;
  padding: 20px;
}
O card deve ficar exatamente no meio do container, sem encostar em nenhuma borda. Se ele subir para o topo, faltou o align-items: center ou o container não tem altura definida; sem height, não há espaço vertical para centralizar.`,
    },
    {
      titulo: `Mini projeto: topo do site`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Este bloco será reaproveitado no site final do mês. Peça que juntem menu e cards na mesma página, cada um em seu container flex. Verifique o uso de gap e o ponto antes das classes. Peça que salvem com o nome do aluno.`,
      atividade: `Monte o começo de uma página de verdade: no topo, um menu com três links em fila usando Flexbox; logo abaixo, uma fileira com três cards lado a lado, também com Flexbox. Use justify-content e gap para deixar tudo organizado e salve o arquivo com o seu nome.`,
      gabarito: `HTML:
<nav class="menu">
  <a href="#">Início</a>
  <a href="#">Sobre</a>
  <a href="#">Contato</a>
</nav>
<div class="cards">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
CSS:
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: navy;
  padding: 15px;
}
.cards {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 20px;
}
.card {
  background-color: lightblue;
  border: 2px solid navy;
  padding: 30px;
}
A página deve ter, no topo, um menu com os três links centralizados e espaçados e, abaixo, três cards iguais lado a lado com espaço entre eles. Ambos os blocos usam display: flex no container. Arquivo salvo com o nome do aluno, pronto para virar o topo do site nas próximas aulas.`,
    },
  ],
};
