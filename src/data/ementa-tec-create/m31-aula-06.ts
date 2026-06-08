import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Montando as seções da página",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Construir a estrutura completa de uma página, com cabeçalho, banner principal (hero), área de conteúdo e rodapé, encaixando os componentes da aula anterior e cuidando da hierarquia visual e do espaçamento.`,
  descricao: `Nas aulas anteriores o aluno aprendeu a controlar caixas com o Box Model, a alinhar elementos com Flexbox, a deixar o site adaptável com media queries e a criar componentes reutilizáveis, como cards e botões. Agora chega a hora de juntar tudo: nesta aula esses pedaços param de ficar soltos e ganham um lugar fixo na página. Cada um vai morar dentro de uma seção com função bem definida.

Pense num site como uma casa com cômodos. Cada cômodo tem um papel: a sala recebe, a cozinha alimenta, o quarto descansa. Numa página é a mesma coisa. O cabeçalho (header) é o topo, onde ficam o nome do site e o menu. O banner principal, chamado de hero, é a grande faixa de boas-vindas logo abaixo, com um título forte e um botão de ação. A área de conteúdo, no meio, mostra os cards e os textos importantes. E o rodapé (footer) fecha a página com contatos e direitos. Quando cada parte está no seu lugar, o visitante entende, num relance, onde está e para onde pode ir.

A grande virada desta aula é perceber que uma página bonita não é só a soma de peças bonitas: é a organização dessas peças. Para isso usamos etiquetas HTML que já carregam o nome da função, como header, main e footer, e usamos espaçamento (padding e margin) para dar respiro entre as seções. Também alternamos cores de fundo, para que o olho perceba sozinho onde uma área termina e outra começa.

Ao final, cada aluno terá a estrutura completa do site montada de cima a baixo: cabeçalho, hero, conteúdo e rodapé, com os cards e botões da aula anterior já encaixados nos lugares certos. Essa página estruturada será a base do site bonito e completo do mês, pronta para receber o polimento visual nas próximas aulas.`,
  materiais: [
    `Computadores (até 10) com editor de código (VS Code) e navegador instalados, um por aluno, com os arquivos index.html e estilo.css do site já iniciados nas aulas anteriores`,
    `Projetor ou TV ligado ao computador do professor para mostrar o HTML, o CSS e o resultado no navegador lado a lado`,
    `Arquivo de exemplo do professor com as quatro seções já montadas (cabeçalho, hero, conteúdo e rodapé), para servir de mapa visual do destino final`,
    `Os componentes da aula anterior (a classe do card e a classe do botão) já prontos no CSS, para serem encaixados dentro das seções`,
    `Pasta de imagens com uma foto grande para o hero e três ou quatro capas para os cards da área de conteúdo`,
    `Folha impressa ou slide com o mapa das seções (cabeçalho, hero, conteúdo e rodapé, de cima para baixo) para o aluno consultar`,
    `Quadro branco para desenhar a casa com cômodos e listar as etiquetas semânticas header, main e footer`,
  ],
  conceitosChave: [
    `Seção semântica — bloco da página com uma etiqueta HTML que descreve seu papel (header, main, footer), em vez de uma div genérica.`,
    `Cabeçalho (header) — etiqueta do topo da página, onde ficam o nome ou logo do site e o menu de navegação.`,
    `Hero (banner principal) — primeira faixa grande logo abaixo do cabeçalho, com um título de impacto e um botão de ação.`,
    `Área de conteúdo (main) — parte central da página, onde ficam os cards e os textos mais importantes do site.`,
    `Rodapé (footer) — etiqueta do fim da página, com contatos, redes sociais e direitos autorais.`,
    `Padding — espaço interno da caixa, entre a borda e o conteúdo; é o respiro dentro de cada seção.`,
    `Cor de fundo alternada — usar background-color diferente em seções vizinhas para o olho perceber onde uma termina e a outra começa.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em HTML para dar esta aula. Basta entender duas ideias. A primeira: existem etiquetas HTML com nome de função. A etiqueta header marca o topo, a etiqueta main marca o miolo (a área de conteúdo) e a etiqueta footer marca o rodapé. Usar essas etiquetas no lugar de div deixa o código mais claro e ainda ajuda na acessibilidade e nas buscas do Google. A segunda ideia: para separar as seções, usamos padding (respiro por dentro) e background-color (cor de fundo). Quando duas seções vizinhas têm cores diferentes, o olho enxerga a divisão sem precisar de linha nenhuma.

Antes da aula, abra o arquivo de exemplo pronto no navegador e role a página de cima a baixo, observando as quatro áreas: cabeçalho, hero, conteúdo e rodapé. Deixe esse exemplo no projetor como destino. Confirme que os componentes da aula anterior (a classe do card e a classe do botão) ainda estão no estilo.css, porque serão encaixados nas seções de hoje.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

1. Aquecimento e revisão (10 min): desenhe no quadro uma casa com cômodos e diga que o site também tem cômodos. Liste as quatro seções na ordem de cima para baixo. Relembre os componentes da aula passada (card e botão) e diga que hoje eles vão morar dentro das seções.

2. Conteúdo novo guiado (15 min): no projetor, digite no index.html, dentro do body, o esqueleto semântico:

<header class="topo">
  <h1>Meu Site</h1>
  <nav><a href="#">Inicio</a> <a href="#">Sobre</a></nav>
</header>
<section class="hero">
  <h2>Bem-vindo ao meu mundo!</h2>
  <a href="#" class="botao">Ver projetos</a>
</section>
<main class="conteúdo">
  <div class="card">Projeto 1</div>
  <div class="card">Projeto 2</div>
</main>
<footer class="rodape">
  <p>Feito por mim - 2026</p>
</footer>

Agora abra o estilo.css e escreva as regras que dão respiro e cor a cada área:

.topo, .hero, .conteúdo, .rodape {
  padding: 40px;
}
.hero {
  background-color: lightblue;
  text-align: center;
}
.conteúdo {
  background-color: white;
  display: flex;
  gap: 20px;
}
.rodape {
  background-color: navy;
  color: white;
  text-align: center;
}

Salve com Ctrl + S, atualize o navegador com F5 e mostre como as cores alternadas fazem cada seção saltar aos olhos.

3. Mão na massa (25 min): cada aluno monta as quatro seções no próprio index.html, aplica o padding e as cores no estilo.css e depois encaixa os componentes da aula anterior: o botão dentro do hero e três cards dentro da área de conteúdo. Circule pela sala ajudando individualmente e reforçando o ciclo salvar e atualizar.

4. Desafio e compartilhar (10 min): desafie quem terminou a deixar o cabeçalho fixo no topo ao rolar a página e a centralizar o conteúdo do hero. Dois ou três voluntários mostram a página inteira no projetor e contam qual seção foi mais difícil de organizar.

## Como explicar de forma clara (linguagem para a idade)

Para adolescentes de 10 a 15 anos, use a casa com cômodos: ninguém cozinha no quarto, cada cômodo tem sua função, e cada seção do site também. Explique a etiqueta semântica como um crachá: a etiqueta header é o crachá que diz ao navegador aqui é o topo. Para o espaçamento, fale em respiro: uma seção colada na outra sufoca, e o padding é o ar que cabe lá dentro. Para a cor alternada, use a ideia de listras: se duas faixas têm cores parecidas, o olho não vê onde uma acaba; alternando a cor, fica óbvio.

## Erros comuns e como ajudar

O erro mais comum é esquecer de fechar a etiqueta, abrindo section ou main e não escrevendo a barra de fechamento, o que faz o conteúdo seguinte entrar na seção errada; mostre que toda etiqueta de abertura tem uma de fechamento com barra. Outro erro é nenhuma cor mudar: quase sempre a classe no HTML está escrita diferente do CSS, com maiúscula de um lado e minúscula do outro; lembre que o navegador exige nomes idênticos, letra por letra. Há quem esqueça de salvar antes de atualizar; combine o gesto salvar e atualizar como dupla inseparável. E quem deixa tudo grudado em cima: peça para aumentar o padding e ver o respiro aparecer.`,
  exercicios: [
    {
      titulo: `Caça as seções no site pronto`,
      tipo: `observação guiada`,
      tempo: `7 min`,
      guiaProfessor: `Com o site de exemplo aberto no projetor, peça que os alunos identifiquem, só olhando, onde começa e termina cada uma das quatro seções. Conduza a turma a perceber que a mudança de cor de fundo é a pista visual. O objetivo é treinar o olho antes de programar.`,
      atividade: `Olhando o site de exemplo, escreva no caderno a ordem das quatro seções de cima para baixo e diga, em cada uma, qual é a cor de fundo que ajuda a separá-la da vizinha.`,
      gabarito: `Ordem correta: cabeçalho (topo), hero, área de conteúdo e rodapé. O aluno deve notar que seções vizinhas usam cores de fundo diferentes (por exemplo, hero azul-claro, conteúdo branco, rodapé azul-escuro) e que essa alternância é o que marca a divisão entre elas.`,
    },
    {
      titulo: `Montando o esqueleto semântico`,
      tipo: `prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Os alunos digitam no index.html as quatro etiquetas semânticas na ordem certa, ainda sem CSS. Circule conferindo se cada etiqueta de abertura tem a de fechamento com barra. O foco é a estrutura HTML correta, não o visual.`,
      atividade: `No seu index.html, dentro do body, crie as quatro seções na ordem: um header, uma section hero, um main de conteúdo e um footer. Coloque um título dentro de cada uma para identificar.`,
      gabarito: `O código correto é:

<header class="topo"><h1>Meu Site</h1></header>
<section class="hero"><h2>Bem-vindo!</h2></section>
<main class="conteúdo"><h2>Projetos</h2></main>
<footer class="rodape"><p>Rodape</p></footer>

Acertou quem usou as etiquetas semânticas header, section, main e footer na ordem correta e fechou todas com a barra.`,
    },
    {
      titulo: `Dando respiro e cor às seções`,
      tipo: `prática na ferramenta`,
      tempo: `12 min`,
      guiaProfessor: `Agora vem o CSS. Peça que apliquem padding em todas as seções e cores de fundo alternadas em pelo menos duas delas. Reforce o ciclo salvar e atualizar e a regra de que a classe no HTML e no CSS deve ser idêntica, letra por letra.`,
      atividade: `No seu estilo.css, dê padding de 40px nas quatro seções e coloque cores de fundo diferentes em pelo menos duas seções vizinhas, para que o olho perceba a divisão. Salve e atualize o navegador.`,
      gabarito: `O código correto é:

.topo, .hero, .conteúdo, .rodape { padding: 40px; }
.hero { background-color: lightblue; }
.conteúdo { background-color: white; }
.rodape { background-color: navy; color: white; }

Acertou quem aplicou o padding em todas as seções e usou cores de fundo diferentes entre seções vizinhas, vendo o respiro e a divisão aparecerem na tela.`,
    },
    {
      titulo: `Encaixando os componentes`,
      tipo: `prática na ferramenta`,
      tempo: `14 min`,
      guiaProfessor: `Hora de reusar o trabalho da aula anterior. O botão vai para o hero e os cards vão para a área de conteúdo. Mostre que basta reaproveitar as classes já existentes no CSS. Use display flex e gap no conteúdo para os cards ficarem lado a lado.`,
      atividade: `Coloque um link com a classe botao dentro da sua section hero e crie três div com a classe card dentro do main de conteúdo. No conteúdo, use display flex e gap de 20px para os cards ficarem lado a lado.`,
      gabarito: `No HTML, dentro do hero: <a href="#" class="botao">Ver projetos</a>
Dentro do conteúdo: <div class="card">1</div> <div class="card">2</div> <div class="card">3</div>
No CSS: .conteúdo { display: flex; gap: 20px; }

Acertou quem reaproveitou as classes botao e card já existentes e deixou os três cards lado a lado com flex e gap.`,
    },
    {
      titulo: `Desafio: cabeçalho fixo e hero centralizado`,
      tipo: `desafio`,
      tempo: `12 min`,
      guiaProfessor: `Desafie quem terminou a deixar o cabeçalho sempre visível no topo ao rolar a página (position fixed) e a centralizar o conteúdo do hero. É um passo a mais; ajude com a ideia de que position fixed gruda o elemento na tela e que text-align center alinha o texto no meio. Quem não chegar lá não tem problema, pois é desafio.`,
      atividade: `Deixe o seu cabeçalho fixo no topo, sempre visível quando a página rolar, e centralize o título e o botão do hero no meio da faixa.`,
      gabarito: `O código correto é:

.topo { position: fixed; top: 0; left: 0; width: 100%; background-color: white; }
.hero { text-align: center; padding-top: 100px; }

O position fixed gruda o cabeçalho no topo da tela; o width 100% faz ele ocupar toda a largura; o text-align center centraliza o conteúdo do hero; e o padding-top extra evita que o cabeçalho fixo cubra o começo do hero. Acertou quem deixou o cabeçalho visível ao rolar e o hero centralizado.`,
    },
  ],
};
