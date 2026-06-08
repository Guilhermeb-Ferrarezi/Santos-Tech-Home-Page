import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Layout: espaços que organizam",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Levar o aluno a organizar a própria página usando tamanho de fonte, alinhamento, margem e padding, deixando o visual respirável e equilibrado.`,
  descricao: `Na aula passada o aluno descobriu como dar cor e estilo à página com CSS. Agora a missão é diferente e tão importante quanto: aprender a controlar o espaço. Um site bonito não é só aquele que tem cores legais; é aquele em que o texto não fica grudado nas bordas, os títulos têm tamanho certo e cada bloco respira. É exatamente essa sensação de organização que separa uma página amadora de uma página caprichada.

O coração desta aula são quatro ferramentas do CSS: o tamanho da fonte, o alinhamento, a margem e o padding. O tamanho da fonte cria a hierarquia, ou seja, faz o título gritar e o texto comum falar baixo. O alinhamento decide se o conteúdo fica à esquerda, no centro ou à direita. A margem é o espaço por fora do elemento, empurrando os vizinhos para longe. O padding é o espaço por dentro, afastando o conteúdo da borda da caixa. Entender a diferença entre margem e padding é o grande aprendizado do dia.

Para os alunos, a ideia mais poderosa é enxergar todo elemento HTML como uma caixa. Tudo na página, do parágrafo ao botão, é uma caixinha invisível. Quando o aluno percebe isso, ele para de empilhar conteúdo no escuro e começa a desenhar com intenção: aqui quero mais ar, ali quero centralizar, neste título quero letra maior. É a transição do "deu certo por sorte" para o "eu decidi que ficasse assim".

Esta é a sexta de oito aulas do mês, dentro do projeto da primeira página no ar. Não vamos publicar ainda, nem reescrever o conteúdo; o foco é refinar o que já existe, equilibrando os espaços. Ao final, cada aluno deve olhar para a própria página e dizer com orgulho: agora ela está organizada, e eu sei explicar por quê.`,
  materiais: [
    `Computadores com editor de código instalado (VS Code), um por aluno, com o arquivo da página já começado nas aulas anteriores`,
    `Navegador web (Chrome, Edge ou Firefox) para abrir a página e ver as mudanças`,
    `Projetor ou TV para o professor demonstrar o código e o resultado lado a lado`,
    `Arquivo de exemplo index.html com style.css já ligado, para quem precisar recomeçar`,
    `Folha impressa com o diagrama da caixa (conteúdo, padding, borda, margem)`,
    `Quadro branco ou flip chart para desenhar a diferença entre margem e padding`,
  ],
  conceitosChave: [
    `Modelo de caixa — ideia de que todo elemento HTML é uma caixa retangular, com conteúdo no centro e espaços ao redor.`,
    `font-size — propriedade do CSS que define o tamanho da letra, geralmente em pixels (px).`,
    `text-align — propriedade que alinha o texto à esquerda (left), ao centro (center) ou à direita (right).`,
    `margin — espaço por fora da caixa, que afasta o elemento dos vizinhos e das bordas da página.`,
    `padding — espaço por dentro da caixa, entre o conteúdo e a borda do próprio elemento.`,
    `Pixel (px) — unidade de medida da tela usada para definir tamanhos e espaços no CSS.`,
    `Hierarquia visual — organização que usa tamanho e espaço para mostrar o que é mais e menos importante na página.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar CSS para dar esta aula; precisa entender quatro propriedades e uma metáfora. A metáfora é o modelo de caixa: imagine cada elemento como uma caixa de presente. O conteúdo é o brinquedo dentro; o padding é o papel amassado que protege o brinquedo por dentro; a borda é a parede da caixa; a margem é o espaço vazio entre uma caixa e outra na prateleira. As quatro propriedades são: font-size (tamanho da letra), text-align (alinhamento), margin (espaço por fora) e padding (espaço por dentro). Todas vão no arquivo style.css, dentro das chaves de cada seletor (h1, p, body). Antes da aula, abra o arquivo de exemplo e teste você mesmo cada uma, vendo o efeito no navegador ao salvar e atualizar (tecla F5).

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Pergunte: "O que o CSS fez pela nossa página na aula passada?" Relembre cor e fonte. No projetor, mostre uma página com texto colado nas bordas e pergunte: "O que está incomodando os olhos de vocês aqui?" Conduza a turma a perceber que falta espaço.

15 min — Conteúdo novo guiado. No projetor, abra o style.css e digite com a turma, explicando linha a linha. Primeiro o tamanho e alinhamento do título:

h1 {
  font-size: 32px;
  text-align: center;
}

Explique: font-size deixa a letra do título maior (32 pixels) e text-align centraliza. Salve e atualize o navegador para ver. Depois, o respiro do corpo da página:

body {
  margin: 20px;
}

Diga que isso empurra todo o conteúdo para longe das bordas da janela. Por fim, o padding de um bloco. Se a página tiver uma caixa de destaque, use a classe dela; senão, use o parágrafo:

p {
  padding: 10px;
  text-align: left;
}

Mostre, ativando as ferramentas do desenvolvedor (tecla F12), como o navegador pinta margem e padding em cores diferentes.

25 min — Mão na massa. Cada aluno aplica na própria página: aumenta o font-size do h1, centraliza o título, coloca margin no body e padding em pelo menos um bloco. Circule e peça que cada um salve e atualize o navegador a cada mudança, para ver o efeito acontecer.

10 min — Desafio e compartilhar. Desafie: "Deixe sua página com mais ar sem mudar nenhuma palavra do texto." Depois, cada aluno mostra a página para o colega ao lado e explica uma mudança de espaço que fez e por quê.

## Como explicar de forma clara (linguagem para a idade)

Use a caixa de presente o tempo todo. Padding é "o enchimento dentro da caixa, que afasta o brinquedo da parede". Margem é "o espaço entre uma caixa e outra, para elas não se esbarrarem". Diga que font-size grande é "o título falando alto" e o texto comum é "alguém falando em tom normal". Para alinhamento, peça que imaginem uma folha de caderno: o texto começa na margem esquerda, mas um título de prova fica no centro. Repita a regra de ouro: "Padding é por dentro, margem é por fora."

## Erros comuns e como ajudar

O erro mais comum é trocar margin por padding e vice-versa; volte sempre ao desenho da caixa no quadro. Muitos esquecem a unidade px (escrevem font-size: 32 em vez de 32px) e o estilo não funciona; mostre que o número precisa do px colado. Outro clássico é esquecer o ponto e vírgula no fim da linha, quebrando tudo abaixo dela; ensine a conferir o ponto e vírgula. Há quem edite o CSS, salve e não veja mudança: quase sempre faltou atualizar o navegador (F5) ou o arquivo style.css não está ligado ao HTML. Por fim, alguns exageram nos espaços e a página fica espalhada demais; lembre que organizar é equilíbrio, não enfeite sem fim.`,
  exercicios: [
    {
      titulo: `Caixa por dentro, caixa por fora`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Use o desenho da caixa no quadro. Faça perguntas rápidas e peça que os alunos respondam apontando para o desenho, sem mexer no computador ainda.`,
      atividade: `Olhando o desenho da caixa, responda em voz alta: onde fica o padding? E a margem? Se eu quiser afastar dois parágrafos um do outro, uso margem ou padding? E se eu quiser afastar o texto da borda do próprio bloco?`,
      gabarito: `Padding fica por dentro, entre o conteúdo e a borda. Margem fica por fora, entre uma caixa e outra. Para afastar dois parágrafos, usa-se margem. Para afastar o texto da borda do próprio bloco, usa-se padding.`,
    },
    {
      titulo: `Título que fala alto`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Confirme que cada aluno está editando o style.css e não o HTML. Lembre-os de salvar e atualizar o navegador para ver o efeito.`,
      atividade: `No seu style.css, faça o título principal (h1) ficar maior e centralizado. Salve e atualize o navegador para conferir.`,
      gabarito: `h1 {
  font-size: 32px;
  text-align: center;
}

O aluno acerta se o título aparecer maior e no centro da página depois de salvar e atualizar. O valor exato em px pode variar (por exemplo, 28px ou 36px); o que importa é a fonte maior e o text-align center.`,
    },
    {
      titulo: `Dando ar para a página`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Verifique se cada aluno aplicou margin no body e padding em algum bloco. Peça que comparem o antes e o depois atualizando o navegador.`,
      atividade: `Adicione margem ao corpo da página (body) para afastar o conteúdo das bordas e coloque padding em um parágrafo para o texto não grudar na borda do bloco.`,
      gabarito: `body {
  margin: 20px;
}

p {
  padding: 10px;
}

O aluno acerta se o conteúdo se afastar das bordas da janela (margem) e o texto do parágrafo ficar com folga interna (padding). Valores como 16px ou 24px também são aceitáveis.`,
    },
    {
      titulo: `Conserta o espaço quebrado`,
      tipo: `desafio`,
      tempo: `9 minutos`,
      guiaProfessor: `Prepare um trecho de CSS com três erros propositais: um número sem px, um ponto e vírgula faltando e padding escrito onde deveria ser margin. Projete e desafie a turma a achar.`,
      atividade: `Olhe este CSS e encontre os três erros que impedem o espaço de funcionar:

h1 {
  font-size: 30
  text-align: center;
}

body {
  padding: 20px;
}

Conserte para que o título fique grande e centralizado e o conteúdo fique afastado das bordas da janela.`,
      gabarito: `Os três problemas: 1) font-size: 30 está sem a unidade px; 2) falta o ponto e vírgula depois do 30; 3) o body deveria usar margin (espaço por fora, que afasta das bordas da janela), não padding. Versão corrigida:

h1 {
  font-size: 30px;
  text-align: center;
}

body {
  margin: 20px;
}`,
    },
    {
      titulo: `Minha página respirável`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o fechamento prático. Circule garantindo que cada aluno aplique font-size, text-align, margin e padding na própria página, sem mudar o texto. Ao final, peça que expliquem uma escolha ao colega.`,
      atividade: `Refine a sua página usando as quatro ferramentas de hoje, sem mudar nenhuma palavra do texto: deixe o título maior e centralizado, dê margem ao corpo da página e padding a pelo menos um bloco. Salve, atualize o navegador e mostre ao colega ao lado, explicando uma das mudanças de espaço.`,
      gabarito: `Não há resposta única, mas a página deve usar as quatro propriedades. Um exemplo de style.css que atende ao pedido:

body {
  margin: 20px;
}

h1 {
  font-size: 32px;
  text-align: center;
}

p {
  padding: 10px;
  text-align: left;
}

O aluno acerta se a página ficar visivelmente mais organizada e respirável, o texto continuar o mesmo e ele conseguir explicar a diferença entre uma mudança de margem (por fora) e uma de padding (por dentro).`,
    },
  ],
};
