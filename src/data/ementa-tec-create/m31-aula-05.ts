import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Componentes Reutilizáveis",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Entender a ideia de componente reaproveitável e criar um card de jogo estiloso (imagem, título e botão) usando classes CSS que servem para vários cards, com um efeito de hover para dar vida.`,
  descricao: `Nesta aula, os alunos descobrem um dos segredos mais poderosos de quem cria sites de verdade: os componentes. Um componente é um bloco visual que se repete na página, como um card, um botão ou um item de menu. Em vez de escrever o mesmo código várias vezes, criamos o desenho de um bloco uma única vez e reaproveitamos quantas vezes quisermos. Pense numa loja de jogos online: dezenas de cards iguais por fora, mudando só a imagem e o nome do jogo.

O coração da aula é a ideia de classe reaproveitável. Uma classe é como um adesivo que colamos em vários elementos do HTML para que todos recebam o mesmo estilo do CSS. Quando criamos a classe "card", todo elemento que receber essa classe vira um card automaticamente. Assim, mudar a aparência de todos os cards de uma vez é fácil: basta editar a regra da classe no CSS, em um único lugar.

O aluno também conhece o hover, que é o estilo que aparece quando o mouse passa por cima de um elemento. O hover dá vida ao componente: o card pode subir um pouquinho, ganhar uma sombra mais forte ou o botão pode mudar de cor. Esse pequeno movimento faz a página parecer profissional e convida o usuário a clicar.

Ao final, cada aluno terá um card de jogo bonito e completo, com imagem no topo, título, um pequeno texto e um botão de ação, tudo montado com classes reaproveitáveis. Esse card será uma peça importante do site do mês, e nas próximas aulas ele vai se juntar a outras seções para formar a página inteira.`,
  materiais: [
    `Computadores com editor de código instalado (VS Code), um por aluno`,
    `Navegador de internet (Chrome, Edge ou Firefox) para ver o resultado e usar a tecla F12`,
    `Projetor ou TV para o professor demonstrar cada passo na tela grande`,
    `Arquivos de exemplo: uma pasta com index.html e estilo.css já criados na aula anterior`,
    `Pasta com 3 ou 4 imagens de jogos (capas em formato quadrado) para usar nos cards`,
    `Folha impressa com o código do card pronto, para o aluno consultar se travar`,
    `Quadro branco ou slide com a comparação "um molde, muitos bolos" para explicar componente`,
  ],
  conceitosChave: [
    `Componente — um bloco visual que se repete na página, como um card, um botão ou um menu, criado uma vez e reaproveitado várias.`,
    `Classe CSS — um nome (um adesivo) que colamos em elementos do HTML para que todos recebam o mesmo estilo de uma só regra.`,
    `Reaproveitar — usar a mesma classe em vários elementos para não repetir código e mudar tudo de um lugar só.`,
    `Card — um cartão com borda e sombra que agrupa imagem, título e botão sobre um assunto, como um jogo.`,
    `Hover — o estilo que aparece quando o mouse passa por cima do elemento, dando movimento e vida ao componente.`,
    `Transição (transition) — o ajuste que faz a mudança do hover acontecer de forma suave, e não num pulo seco.`,
    `Sombra (box-shadow) — uma sombra atrás do elemento que dá sensação de profundidade e faz o card parecer flutuar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar CSS para dar esta aula. A ideia central é simples: um componente é um pedaço de tela que se repete, e a classe CSS é o que faz vários pedaços ficarem iguais. No HTML, usamos a etiqueta div com o atributo class para marcar cada card. No CSS, escrevemos uma regra para a classe usando o ponto antes do nome, assim: .card. Tudo que estiver dentro dessa regra vale para todos os elementos que tiverem class igual a "card". O hover é só uma variação: escrevemos .card:hover para dizer o que muda quando o mouse passa por cima. Lembre que esta aula usa apenas HTML e CSS, sem JavaScript.

## Passo a passo da aula

Aquecimento (10 min): Abra uma loja de jogos conhecida no projetor e peça que a turma observe os cards. Pergunte: "o que se repete em todos eles?". Conduza para a resposta: imagem, título e botão, sempre no mesmo formato. Explique que vamos construir esse bloco que se repete, o componente.

Conteúdo novo guiado (15 min): No VS Code, abra o index.html da aula anterior. Dentro do body, escreva o HTML do card. Digite linha a linha, explicando cada parte:

<div class="card">
  <img class="card-imagem" src="jogo.png" alt="Capa do jogo">
  <h3 class="card-titulo">Aventura Espacial</h3>
  <p class="card-texto">Explore planetas e vença chefões.</p>
  <button class="card-botao">Jogar agora</button>
</div>

Explique que a div com class "card" é a caixa de fora e que cada filho tem sua própria classe. Agora abra o estilo.css e escreva as regras:

.card {
  width: 220px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card-imagem {
  width: 100%;
  border-radius: 8px;
}

.card-botao {
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

Salve e abra no navegador. Passe o mouse por cima para mostrar o card subindo. Diga que a mágica da transition deixa o movimento suave.

Mão na massa (25 min): Cada aluno monta o seu card seguindo o código, troca a imagem por uma das capas da pasta de exemplo e muda o título e o texto para um jogo que goste. Em seguida, copia o bloco da div "card" duas vezes para ter três cards lado a lado, provando que a mesma classe serve para todos. Circule pela sala ajudando individualmente.

Desafio + compartilhar (10 min): Peça que cada aluno mude apenas a cor do botão na regra .card-botao e veja todos os botões mudarem juntos. Dois ou três voluntários mostram seus cards no projetor.

## Como explicar de forma clara

Use a comparação do molde de bolo: a classe é o molde e cada card é um bolo feito com ele. Mudar o molde muda todos os bolos. Diga que a classe é um adesivo que colamos em vários lugares para deixá-los iguais. Para o hover, peça que imaginem um botão de videogame que acende quando você chega perto: o hover é esse "acender" ao passar o mouse. Mostre sempre na tela antes de pedir que façam, e fale o nome das propriedades em voz alta enquanto digita.

## Erros comuns e como ajudar

O erro mais comum é esquecer o ponto antes do nome da classe no CSS (escrever card em vez de .card); mostre que sem o ponto a regra não funciona. Outro é escrever a classe com nome diferente no HTML e no CSS (card e cards); peça que confiram letra por letra. Muitos esquecem de salvar o arquivo antes de atualizar o navegador; ensine o atalho Ctrl + S e depois F5. Alguns colocam a imagem com caminho errado e ela não aparece; verifique se o arquivo está na pasta e o nome em src bate. Por fim, há quem espere o hover funcionar sem mover o mouse; lembre que o efeito só aparece com o mouse por cima.`,
  exercicios: [
    {
      titulo: `Caça aos componentes`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre no projetor uma loja de jogos ou um site de filmes. Conduza a turma a apontar os blocos que se repetem. Anote no quadro as respostas.`,
      atividade: `Olhando o site na tela, aponte três blocos visuais que se repetem e diga o que cada um tem em comum (por exemplo, todos os cards têm imagem, título e botão).`,
      gabarito: `O aluno identifica blocos repetidos como cards, botões e itens de menu, e percebe que cada tipo segue sempre o mesmo formato, mudando só o conteúdo de dentro. Resposta esperada: "os cards de jogo se repetem e todos têm imagem em cima, título no meio e botão embaixo".`,
    },
    {
      titulo: `Meu primeiro card`,
      tipo: `prática no computador`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe os alunos enquanto digitam o HTML do card. Confira se a div tem class igual a "card" e se cada filho recebeu sua classe.`,
      atividade: `No index.html, dentro do body, escreva o HTML de um card com imagem, título, um texto curto e um botão, dando uma classe a cada parte.`,
      gabarito: `O código correto é:

<div class="card">
  <img class="card-imagem" src="jogo.png" alt="Capa do jogo">
  <h3 class="card-titulo">Aventura Espacial</h3>
  <p class="card-texto">Explore planetas e vença chefões.</p>
  <button class="card-botao">Jogar agora</button>
</div>

O card aparece no navegador com a imagem, o título, o texto e o botão, mesmo ainda sem estilo.`,
    },
    {
      titulo: `Estilo reaproveitável`,
      tipo: `prática no computador`,
      tempo: `8 minutos`,
      guiaProfessor: `Verifique se cada aluno usou o ponto antes do nome da classe no CSS e se os nomes batem com os do HTML. Lembre de salvar com Ctrl + S antes de atualizar o navegador.`,
      atividade: `No estilo.css, crie a regra .card com fundo branco, cantos arredondados, sombra e um espaçamento interno, e estilize o botão com a regra .card-botao.`,
      gabarito: `O código correto é:

.card {
  width: 220px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
}

.card-botao {
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}

O card ganha caixa branca com sombra e o botão fica colorido e arredondado.`,
    },
    {
      titulo: `Vida com hover`,
      tipo: `desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre a diferença entre ter e não ter a propriedade transition. Peça que passem o mouse por cima para ver o card subir suavemente.`,
      atividade: `Adicione a regra .card:hover para o card subir um pouco e ganhar uma sombra mais forte ao passar o mouse, e coloque a transition na regra .card para o movimento ficar suave.`,
      gabarito: `O código correto é:

.card {
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

Ao passar o mouse, o card sobe seis pixels de forma suave e a sombra aumenta, parecendo flutuar.`,
    },
    {
      titulo: `Três cards, uma classe só`,
      tipo: `prática no computador`,
      tempo: `10 minutos`,
      guiaProfessor: `Oriente os alunos a copiar o bloco inteiro da div "card" duas vezes e trocar só a imagem, o título e o texto. Reforce que nenhuma classe nova precisa ser criada.`,
      atividade: `Copie o seu card mais duas vezes para ter três cards de jogos diferentes lado a lado, reaproveitando as mesmas classes. Depois, mude a cor do botão só na regra .card-botao e veja todos mudarem juntos.`,
      gabarito: `O HTML tem três blocos div com class "card", cada um com imagem, título e texto próprios, mas usando as mesmas classes. Exemplo da estrutura repetida:

<div class="card"> ... primeiro jogo ... </div>
<div class="card"> ... segundo jogo ... </div>
<div class="card"> ... terceiro jogo ... </div>

Ao trocar a cor na regra .card-botao (por exemplo, de orange para purple), todos os três botões mudam de cor ao mesmo tempo, provando que a classe é reaproveitada.`,
    },
  ],
};
