import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Dando vida ao site",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Refinar o site com detalhes que encantam — tipografia bonita, paleta de cores harmônica, espaçamentos consistentes e transições suaves no hover — revisando o responsivo e corrigindo problemas de alinhamento para deixar tudo polido.`,
  descricao: `O site do aluno já tem estrutura: as seções estão montadas, os componentes encaixados e o layout se adapta a telas de tamanhos diferentes. Mas estrutura não é a mesma coisa que beleza. Um prédio com as paredes no lugar ainda não é uma casa aconchegante. Nesta aula, o aluno deixa de pensar em "será que funciona?" e passa a pensar em "será que está bonito e gostoso de usar?". É o momento do polimento, quando pequenos detalhes transformam um site comum num site que dá vontade de ficar olhando.

Quatro detalhes fazem quase toda a diferença. O primeiro é a tipografia: escolher uma fonte agradável, ajustar o tamanho e o espaço entre as linhas para o texto ficar fácil de ler. O segundo é a paleta de cores: em vez de cores escolhidas no chute, usar um conjunto pequeno e harmônico, com uma cor principal, uma de destaque e tons neutros. O terceiro é o espaçamento consistente: usar sempre os mesmos valores de respiro (por exemplo, múltiplos de 8 pixels), para que tudo pareça organizado e proposital, e não bagunçado. O quarto é a transição suave no hover: quando o mouse passa por cima de um botão ou cartão, ele reage com um movimento delicado, em vez de mudar de forma brusca.

Esses ajustes parecem pequenos, mas é exatamente isso que separa um trabalho de iniciante de um trabalho profissional. Designers chamam isso de "atenção aos detalhes". O olho humano percebe quando os espaços estão alinhados, quando as cores conversam entre si e quando os elementos respondem ao toque. Mesmo sem saber explicar o porquê, a pessoa sente que o site é "caprichado". Nesta aula, o aluno aprende a provocar essa sensação de propósito.

A aula também reserva um tempo para revisar o responsivo da Semana 3 e caçar problemas de alinhamento que sobraram: um botão torto, um texto colado na borda, um cartão de tamanho diferente dos outros. Polir é tanto adicionar brilho quanto corrigir o que está fora do lugar. No fim, o aluno terá um site quase pronto para a entrega final da próxima aula — bonito, harmônico e com aquela vida que faz a diferença.`,
  materiais: [
    `Computadores (até 10) com editor de código (VS Code) e navegador instalados, com os arquivos index.html e style.css do site já montados nas aulas anteriores`,
    `Projetor ou TV ligado no computador do professor para mostrar o CSS e o resultado no navegador lado a lado, com a janela de tamanho ajustável para testar o responsivo`,
    `Arquivo de exemplo do professor com o site "antes" (sem polimento) e o site "depois" (polido) para comparar lado a lado e mostrar o impacto dos detalhes`,
    `Lista impressa ou slide com uma paleta de cores pronta (cor principal, cor de destaque e neutros, com os códigos hexadecimais) para os alunos copiarem`,
    `Acesso à internet para escolher e importar uma fonte do Google Fonts; como alternativa offline, uma lista de fontes seguras do sistema (Arial, Verdana, Georgia)`,
    `Folha de "escala de espaçamento" (8, 16, 24, 32, 40 pixels) impressa ou no slide, para o aluno usar sempre os mesmos valores`,
    `Quadro branco ou flip chart para desenhar a régua de espaçamento e anotar a paleta da turma`,
  ],
  conceitosChave: [
    `Tipografia — arte de escolher e ajustar as fontes do texto (tipo de letra, tamanho e espaço entre linhas) para deixá-lo bonito e fácil de ler.`,
    `Paleta de cores — conjunto pequeno e harmônico de cores usadas no site, normalmente uma cor principal, uma de destaque e alguns tons neutros.`,
    `Espaçamento consistente — usar sempre os mesmos valores de margin e padding (por exemplo, múltiplos de 8) para que tudo pareça organizado e proposital.`,
    `Transição (transition) — propriedade CSS que faz uma mudança de estilo acontecer de forma suave, em um tempo definido, em vez de instantânea.`,
    `Hover — estado de um elemento quando o mouse está em cima dele; no CSS é escrito com o seletor dois-pontos seguido de hover.`,
    `Google Fonts — biblioteca gratuita de fontes na internet que pode ser importada no site com uma linha de link no HTML.`,
    `Polimento — etapa final em que se ajustam detalhes pequenos (cores, espaços, alinhamento, transições) para o trabalho parecer profissional.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser designer para conduzir esta aula. Basta dominar quatro ideias simples e saber onde colá-las no CSS. Primeira, tipografia: dá para trocar a fonte de todo o site definindo font-family no seletor body, e melhorar a leitura com line-height (espaço entre linhas). Segunda, paleta de cores: escolha poucas cores que combinem e repita só elas; menos é mais. Terceira, espaçamento consistente: em vez de inventar números aleatórios, use sempre uma escala (8, 16, 24, 32, 40). Quarta, transição no hover: a propriedade transition faz a mudança no hover acontecer suavemente.

Antes da aula, abra o arquivo "antes e depois" no projetor. Mostre primeiro a versão sem polimento e depois a polida, lado a lado. O impacto visual é o melhor argumento para a turma se empolgar. Tenha em mãos uma paleta pronta e o endereço do Google Fonts caso queira importar uma fonte ao vivo.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

1. Aquecimento e revisão (10 min): Mostre no projetor o "antes e depois". Pergunte: "o que mudou?". Guie a turma a perceber os quatro detalhes (fonte, cores, espaços, hover). Relembre rapidamente o responsivo da Semana 3 e diga que hoje vamos polir e corrigir o que ficou torto.

2. Conteúdo novo guiado (15 min): No style.css, digite ao vivo. Comece pela tipografia, importando uma fonte. No HTML, dentro do head:

   <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

   No CSS:

   body {
     font-family: "Poppins", Arial, sans-serif;
     line-height: 1.6;
     color: #333333;
   }

   Agora a paleta de cores, anotada no topo do arquivo como comentário-guia e aplicada nos elementos:

   /* Paleta: principal 2563eb, destaque f59e0b, neutro 333333, fundo f8fafc */
   body { background-color: #f8fafc; }
   .botao { background-color: #2563eb; color: white; }

   Depois o espaçamento consistente, sempre múltiplos de 8:

   .hero { padding: 40px; }
   .cartao { margin: 16px; padding: 24px; }

   Por fim, a transição suave no hover:

   .botao {
     transition: background-color 0.3s, transform 0.3s;
   }
   .botao:hover {
     background-color: #f59e0b;
     transform: scale(1.05);
   }

   Salve, atualize e passe o mouse sobre o botão para mostrar o efeito suave.

3. Mão na massa (25 min): Os alunos aplicam os quatro detalhes no próprio site: trocam a fonte, adotam a paleta, ajustam os espaçamentos para a escala e adicionam transição no hover de botões e cartões. Circule ajudando um de cada vez.

4. Desafio e compartilhar (10 min): Quem terminar adiciona um efeito de hover nos cartões e revisa o responsivo redimensionando a janela. No fim, dois ou três alunos mostram o "antes e depois" do próprio site para a turma.

## Como explicar de forma clara (linguagem para a idade)

Para adolescentes de 10 a 15 anos, compare polir um site com finalizar um desenho: "o desenho já está pronto, agora você pinta com capricho e contorna as linhas". Explique a paleta como um time de futebol: "poucas cores que jogam juntas; cor demais é como onze atacantes, vira bagunça". Para o espaçamento, use a régua: "em vez de chutar os espaços, todo mundo usa a mesma régua, então tudo fica alinhado". Para o hover, fale em reação: "o botão é educado, ele responde quando você chega perto, com um movimento suave, não com um susto".

## Erros comuns e como ajudar

O erro mais comum é a fonte não mudar: quase sempre o link do Google Fonts não foi colado no head ou o nome em font-family está diferente do nome importado. Confira os dois e lembre que precisa ser idêntico. Outro erro é exagerar nas cores: oriente a usar só as cores da paleta combinada. No espaçamento, alguns inventam números soltos (13px, 27px); peça para arredondar para a escala (8, 16, 24). No hover, o efeito pode ficar brusco porque a transição foi escrita na regra hover em vez da regra normal: explique que transition fica no elemento base, e o hover só diz o destino. Por fim, há quem esqueça de salvar antes de atualizar; mantenha o gesto "salvar e atualizar" como dupla inseparável.`,
  exercicios: [
    {
      titulo: `Caça aos Detalhes: Antes e Depois`,
      tipo: `Observação guiada`,
      tempo: `7 min`,
      guiaProfessor: `Com as versões "antes" e "depois" do site abertas lado a lado no projetor, conduza a turma a listar tudo o que mudou. O objetivo é treinar o olho para perceber detalhes que normalmente passam despercebidos, antes de mexer no código.`,
      atividade: `Olhando o site "antes" e o site "depois" no projetor, escreva no caderno pelo menos quatro detalhes que mudaram entre as duas versões.`,
      gabarito: `Espera-se que o aluno identifique os quatro pilares do polimento: a fonte (tipografia) ficou mais bonita e legível; as cores passaram a formar uma paleta harmônica; os espaços ficaram consistentes e organizados; e os botões ou cartões ganharam reação suave ao passar o mouse (hover com transição). Acertou quem citou ao menos quatro desses pontos.`,
    },
    {
      titulo: `Trocando a Fonte do Site`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Os alunos importam uma fonte do Google Fonts e a aplicam no body. Se não houver internet, oriente a usar uma fonte segura do sistema. Confira se o link foi colado no head e se o nome em font-family bate exatamente com o nome importado.`,
      atividade: `Importe uma fonte do Google Fonts colando o link no head do seu HTML e aplique-a no body do site, junto com um line-height de 1.6 para o texto respirar.`,
      gabarito: `No HTML, dentro do head:
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
No CSS:
body { font-family: "Poppins", Arial, sans-serif; line-height: 1.6; }
Acertou quem colou o link no head e usou em font-family o mesmo nome importado, com line-height de 1.6 deixando o texto mais arejado.`,
    },
    {
      titulo: `Aplicando a Paleta de Cores`,
      tipo: `Prática na ferramenta`,
      tempo: `12 min`,
      guiaProfessor: `Entregue (ou projete) uma paleta pronta com códigos hexadecimais. Os alunos aplicam a cor principal, a de destaque e os neutros nos lugares certos. Reforce a ideia de usar poucas cores e repeti-las, em vez de inventar uma cor nova a cada elemento.`,
      atividade: `Usando a paleta combinada, defina a cor de fundo da página, a cor principal dos botões e a cor do texto. Use só as cores da paleta, sem inventar novas.`,
      gabarito: `/* Paleta combinada: principal 2563eb, destaque f59e0b, neutro 333333, fundo f8fafc */
body { background-color: #f8fafc; color: #333333; }
.botao { background-color: #2563eb; color: white; }
Acertou quem aplicou apenas as cores da paleta nos lugares certos (fundo claro, texto neutro escuro e botão na cor principal), mantendo a harmonia.`,
    },
    {
      titulo: `Espaçamento na Régua`,
      tipo: `Prática na ferramenta`,
      tempo: `13 min`,
      guiaProfessor: `Os alunos ajustam todos os paddings e margins do site para os valores da escala (8, 16, 24, 32, 40). O objetivo é trocar números soltos por uma régua consistente. Peça que procurem no CSS qualquer número fora da escala e arredondem para o valor mais próximo.`,
      atividade: `Reveja todos os padding e margin do seu style.css e ajuste-os para usar somente os valores da escala: 8, 16, 24, 32 ou 40 pixels. Troque qualquer número que esteja fora dessa régua.`,
      gabarito: `.hero { padding: 40px; }
.galeria { padding: 24px; gap: 16px; }
.cartao { margin: 16px; padding: 24px; }
.rodape { padding: 32px; }
Acertou quem substituiu os números soltos por valores da escala (múltiplos de 8), deixando os espaçamentos consistentes em todo o site.`,
    },
    {
      titulo: `Desafio: Hover Suave nos Cartões`,
      tipo: `Desafio`,
      tempo: `13 min`,
      guiaProfessor: `Desafie quem terminou a dar vida aos cartões: ao passar o mouse, o cartão sobe um pouco e ganha sombra, de forma suave. Reforce que a propriedade transition fica na regra base do cartão, e o estado hover só descreve o destino. Quem não chegar lá não tem problema, é desafio.`,
      atividade: `Faça os cartões da galeria reagirem ao mouse: ao passar por cima, o cartão deve subir um pouco e ganhar uma sombra, com transição suave (não brusca).`,
      gabarito: `.cartao {
  transition: transform 0.3s, box-shadow 0.3s;
}
.cartao:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
A propriedade transition fica na regra base e define o tempo (0.3s); o estado hover descreve o destino: o translateY negativo faz o cartão subir e o box-shadow cria a sombra. Acertou quem deixou o cartão subir e ganhar sombra de forma suave ao passar o mouse.`,
    },
  ],
};
