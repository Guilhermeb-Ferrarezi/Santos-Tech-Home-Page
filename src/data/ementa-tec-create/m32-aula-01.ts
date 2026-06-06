import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "JavaScript: a linguagem que dá vida ao site",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Entender o que é JavaScript e por que ele torna as páginas web interativas, diferenciando-o do HTML (estrutura) e do CSS (estilo) já estudados.`,
  descricao: `Nos meses anteriores os alunos aprenderam a construir o esqueleto de uma página com HTML e a deixá-la bonita com CSS. Agora chega a terceira peça do trio: o JavaScript, a linguagem que dá vida ao site. Se o HTML é o esqueleto e o CSS é a roupa, o JavaScript é o cérebro e os músculos: é ele que faz a página reagir quando alguém clica num botão, digita um nome, arrasta uma imagem ou rola a tela. Sem JavaScript, uma página é como uma foto bonita; com JavaScript, ela vira algo vivo, que conversa com quem está usando.

Nesta primeira aula o objetivo não é programar muito, e sim entender o papel do JavaScript e despertar a curiosidade. Os alunos vão ver, ao vivo, exemplos de páginas que reagem ao usuário: um botão que muda de cor ao ser clicado, um contador que aumenta, uma mensagem que aparece. A grande ideia que precisa ficar clara é que o JavaScript roda dentro do navegador (Chrome, Edge, Firefox). Não é preciso instalar nada novo nem enviar o código para um servidor distante: o próprio navegador entende e executa o JavaScript na hora.

Para reforçar a diferença entre as três linguagens, o professor mostra a mesma página em três camadas. Primeiro, só o HTML: textos e botões "crus", sem cor. Depois, com o CSS: tudo ganha cores, espaçamento e estilo, mas ainda parado. Por fim, com o JavaScript: a página passa a responder a cliques e a mudar sozinha. Essa progressão visual ajuda os adolescentes a enxergar que cada linguagem tem um trabalho diferente e que elas se completam.

Ao final, cada aluno já terá visto o Console do navegador, o lugar onde o JavaScript fala com a gente, e terá uma noção clara do que vai construir ao longo do mês: uma página interativa de verdade. A aula planta a semente do entregável do mês e deixa todos animados para, na próxima aula, escreverem seu primeiro código.`,
  materiais: [
    `Computadores com um navegador moderno instalado (Chrome ou Edge), um por aluno`,
    `Editor de código instalado (VS Code) para abrir os arquivos de exemplo`,
    `Projetor ou TV para o professor demonstrar os exemplos ao vivo`,
    `Arquivo de exemplo "exemplo-tres-camadas" com três versões da mesma página: só HTML, HTML + CSS e HTML + CSS + JavaScript`,
    `Conexão com a internet para visitar dois ou três sites interativos conhecidos dos alunos`,
    `Quadro branco para desenhar a comparação esqueleto (HTML), roupa (CSS) e cérebro (JavaScript)`,
    `Folha impressa com a frase-chave do dia: "JavaScript roda no navegador e faz a página reagir"`,
  ],
  conceitosChave: [
    `JavaScript — a linguagem de programação que roda no navegador e faz a página reagir ao usuário.`,
    `HTML — a linguagem que monta a estrutura da página: textos, botões, imagens; é o esqueleto.`,
    `CSS — a linguagem que cuida da aparência: cores, tamanhos, espaçamento; é a roupa.`,
    `Interatividade — quando a página responde a uma ação da pessoa, como clicar, digitar ou rolar a tela.`,
    `Navegador — o programa (Chrome, Edge, Firefox) que abre páginas web e executa o JavaScript.`,
    `Console — a janela do navegador onde o JavaScript mostra mensagens e onde podemos testar pequenos comandos.`,
    `Evento — um acontecimento na página, como um clique, que o JavaScript pode "ouvir" para reagir.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar JavaScript para dar esta aula. Precisa apenas entender a ideia central e saber abrir o Console do navegador. A mensagem do dia é simples: HTML é a estrutura, CSS é o estilo e JavaScript é o comportamento. As três trabalham juntas, mas cada uma tem uma função. O JavaScript roda dentro do navegador, sem instalar nada, e serve para fazer a página reagir ao usuário.

Antes da aula, abra o arquivo de exemplo e teste no seu computador. Aprenda a abrir o Console: no Chrome ou Edge, aperte a tecla F12 (ou clique com o botão direito na página e escolha "Inspecionar") e vá até a aba "Console". É ali que o JavaScript fala com a gente. Teste digitar um comando simples e ver a resposta aparecer.

## Passo a passo da aula

Aquecimento e revisão (10 min): no quadro, desenhe um boneco palito. Diga que o HTML é o esqueleto, o CSS é a roupa e pergunte: "o que falta para o boneco se mexer?". Conduza até a resposta: o cérebro e os músculos, que são o JavaScript. Relembre rapidamente uma página que eles já fizeram com HTML e CSS.

Conteúdo novo guiado (15 min): com o projetor, abra o arquivo de exemplo nas três versões. Primeiro só o HTML (cru), depois com CSS (bonito, mas parado), por fim com JavaScript (reage ao clique). Em seguida, visite um ou dois sites conhecidos e mostre algo interativo (um menu que abre, um botão de curtir). Depois abra o Console com F12 e digite ao vivo este comando, explicando cada parte:

console.log("Ola, eu sou o JavaScript!");

Explique: "console" é a janelinha de mensagens; "log" quer dizer "escreva aqui"; o texto entre aspas é a mensagem; o ponto e vírgula no fim marca o fim do comando. Aperte Enter e mostre a frase aparecendo.

Mão na massa (25 min): cada aluno abre o navegador, aperta F12, vai até o Console e digita a mesma linha, trocando o texto por uma frase sua. Depois peça para testarem uma conta de matemática direto no Console, digitando por exemplo:

console.log(7 * 6);

Mostre que o navegador responde 42. Em seguida, peça que abram o arquivo de exemplo com JavaScript e cliquem no botão para ver a página reagir. Circule pela sala ajudando quem não achou a aba Console.

Desafio e compartilhar (10 min): desafie quem terminou a escrever, no Console, duas mensagens diferentes e uma conta de multiplicação. Cada aluno mostra em poucos segundos a frase que escreveu e diz, com as próprias palavras, uma coisa que o JavaScript faz numa página.

## Como explicar de forma clara

Use a comparação do corpo humano o tempo todo: esqueleto (HTML), roupa (CSS), cérebro (JavaScript). Diga que o Console é como um "campo de testes" onde a gente conversa com o navegador e ele responde na hora. Para a ideia de evento, use o exemplo da campainha: "quando alguém aperta a campainha, o som toca; o clique é a campainha e a reação da página é o som". Reforce sempre que o JavaScript já está dentro do navegador, então é só usar.

## Erros comuns e como ajudar

Erro 1: o aluno não acha o Console; mostre de novo o F12 e a aba "Console". Erro 2: esquece as aspas em volta do texto e aparece um erro vermelho; explique que texto precisa de aspas. Erro 3: digita "Console" com C maiúsculo e dá erro; lembre que em JavaScript maiúsculas e minúsculas importam, e o certo é "console". Erro 4: acha que precisa instalar um programa; reforce que o navegador já entende JavaScript. Erro 5: confunde os papéis e acha que o CSS faz a página reagir; volte à comparação esqueleto, roupa e cérebro. Erro 6: fica preso ao ler o erro vermelho e trava; tranquilize que erro é normal, faz parte de programar, e mostre como corrigir e tentar de novo.`,
  exercicios: [
    {
      titulo: `Quem faz o quê?`,
      tipo: `pergunta e resposta`,
      tempo: `5 min`,
      guiaProfessor: `Faça oralmente ou no quadro. O objetivo é fixar a divisão de papéis entre HTML, CSS e JavaScript antes de qualquer código.`,
      atividade: `Para cada item, diga se é trabalho do HTML, do CSS ou do JavaScript: (a) colocar um botão na página; (b) deixar o botão azul; (c) fazer aparecer uma mensagem quando o botão é clicado.`,
      gabarito: `(a) HTML — cria a estrutura, o botão em si. (b) CSS — cuida da aparência, a cor azul. (c) JavaScript — cuida do comportamento, a reação ao clique.`,
    },
    {
      titulo: `Abrindo o Console`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Garanta que todos consigam abrir o Console antes de seguir. Quem não achar pela tecla, ensine pelo botão direito e "Inspecionar".`,
      atividade: `Abra o navegador, aperte a tecla F12 e clique na aba "Console". Encontre o cursor piscando, onde dá para digitar.`,
      gabarito: `O aluno consegue abrir as ferramentas do desenvolvedor com F12 e localizar a aba "Console", deixando o cursor pronto para digitar. Caminho alternativo: botão direito na página e depois "Inspecionar".`,
    },
    {
      titulo: `Minha primeira mensagem`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Mostre uma vez no projetor e deixe o aluno digitar sozinho. Reforce as aspas e o "console" em minúsculas.`,
      atividade: `No Console, digite o comando abaixo trocando o texto por uma frase sua e aperte Enter:

console.log("Ola, eu sou o JavaScript!");`,
      gabarito: `console.log("Ola, eu sou o JavaScript!");

Ao apertar Enter, a frase digitada aparece no Console. A linha deve ter "console" em minúsculas, o texto entre aspas e o ponto e vírgula no fim. Qualquer frase própria do aluno vale, desde que dentro das aspas.`,
    },
    {
      titulo: `O navegador faz contas`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Mostre que o Console também calcula. Use multiplicação (*) e soma (+). Comemore a resposta que aparece na hora.`,
      atividade: `No Console, peça ao navegador para calcular duas contas. Digite cada linha e aperte Enter:

console.log(7 * 6);
console.log(125 + 75);`,
      gabarito: `console.log(7 * 6);
console.log(125 + 75);

A primeira linha mostra 42 e a segunda mostra 200. O sinal * é multiplicação e o sinal + é soma. Mostra que o JavaScript entende números, não só texto.`,
    },
    {
      titulo: `Caça ao erro`,
      tipo: `análise de código`,
      tempo: `10 min`,
      guiaProfessor: `Apresente a linha com erro no projetor. Conduza a turma a descobrir o problema observando a mensagem vermelha do Console. Trabalhe a ideia de que erro é normal.`,
      atividade: `A linha abaixo foi digitada no Console e deu erro vermelho. Descubra o que está errado e escreva a versão correta:

Console.log(Ola turma);`,
      gabarito: `console.log("Ola turma");

Havia dois erros: "Console" estava com C maiúsculo (o certo é "console", tudo minúsculo) e o texto estava sem aspas. Texto precisa ficar entre aspas. Depois de corrigir, a frase aparece normalmente no Console.`,
    },
  ],
};
