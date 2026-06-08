import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Meu primeiro código: console e alert",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Escrever os primeiros comandos em JavaScript dentro de uma página HTML, usando a tag script, e aprender a abrir o console do navegador para ver mensagens com console.log, mostrar avisos com alert e ler os erros para corrigi-los.`,
  descricao: `Na aula anterior os alunos descobriram o que é o JavaScript e por que ele dá vida ao site. Agora chega o momento mais esperado: escrever de verdade o primeiro código e ver o computador responder. Esta aula é a porta de entrada prática para o resto do mês, porque ensina duas ferramentas que o aluno vai usar em todas as próximas aulas: o console do navegador, que é a janela secreta onde o JavaScript conversa com a gente, e os primeiros comandos console.log e alert, que fazem o código falar.

O coração da aula é entender onde o JavaScript mora dentro de uma página. Assim como o CSS entra com a tag style, o JavaScript entra com a tag script. O aluno vai aprender a posição certa dessa tag (logo antes do fechamento do body) e por que isso importa: o navegador lê a página de cima para baixo, então o script precisa rodar depois que o conteúdo já existe. É uma regra simples que evita muita dor de cabeça mais adiante.

Em seguida vem a magia de fazer o código se comunicar. O comando console.log escreve uma mensagem no console, um lugar discreto que só o programador vê, ótimo para testar e investigar. Já o alert abre uma caixinha pop-up na tela, bem na cara do visitante, ótima para chamar atenção. O aluno escreve, salva, atualiza a página e vê o resultado na hora. Esse ciclo escrever, salvar, atualizar é o ritmo natural de quem programa para web, e quanto mais cedo ele virar hábito, melhor.

Por fim, a aula trata os erros como parte normal do trabalho, e não como fracasso. O aluno vai, de propósito, escrever um comando errado (por exemplo, esquecer o ponto e vírgula ou trocar console.log por consola.log) para ver a mensagem vermelha aparecer no console. Aprender a ler essa mensagem, identificar a linha e corrigir é uma das habilidades mais valiosas de um programador. Sair desta aula sabendo abrir o console e ler um erro vale ouro para todas as semanas seguintes.`,
  materiais: [
    `Computadores ligados, um por aluno, com um editor de código instalado (VS Code de preferência) e um navegador atualizado (Chrome ou Edge) para abrir as páginas e o console.`,
    `Projetor ou TV grande conectado ao computador do professor, para demonstrar onde colocar a tag script e como abrir o console passo a passo.`,
    `Arquivo de exemplo pronto chamado index.html (uma página HTML básica e vazia, já com a estrutura inicial), copiado na pasta de cada aluno antes da aula para não perder tempo.`,
    `Uma pasta nomeada por aluno (por exemplo, aula02 seguido do primeiro nome) onde ele salvará o arquivo index.html do dia.`,
    `Cartaz ou slide com o atalho para abrir o console em cada navegador (tecla F12, ou Ctrl mais Shift mais J no Chrome) e com a estrutura da tag script.`,
    `Folha impressa de apoio com os dois comandos do dia (console.log e alert) escritos corretamente, para o aluno copiar com calma e comparar.`,
  ],
  conceitosChave: [
    `Tag script — a marca do HTML que serve para colocar código JavaScript dentro da página; tudo que está entre a abertura e o fechamento dela é lido como JavaScript.`,
    `Console do navegador — uma janela escondida nas ferramentas do desenvolvedor onde o JavaScript escreve mensagens e mostra erros; é o lugar onde o programador investiga o que está acontecendo.`,
    `console.log — comando que escreve uma mensagem no console; serve para o programador testar e ver valores sem atrapalhar o visitante.`,
    `alert — comando que abre uma caixinha pop-up na tela com uma mensagem; serve para avisar o visitante na cara dele, e precisa ser fechada para a página continuar.`,
    `Comando (instrução) — uma ordem que damos ao computador em uma linha de código, normalmente terminada por ponto e vírgula.`,
    `Erro de sintaxe — quando o código está escrito de forma que o navegador não entende; ele para e mostra uma mensagem vermelha no console dizendo o problema e a linha.`,
    `Ponto e vírgula — o sinal que marca o fim de um comando em JavaScript, como o ponto final de uma frase; ajuda o navegador a separar uma ordem da outra.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar JavaScript para dar esta aula; basta praticar os passos uma vez antes. Três ideias bastam. Primeira: o JavaScript entra na página dentro da tag script, e o melhor lugar é logo antes de fechar o body, porque o navegador lê de cima para baixo. Segunda: o console do navegador é aberto pela tecla F12 (ou pelo menu, em Mais ferramentas, Ferramentas do desenvolvedor) e tem uma aba chamada Console; é lá que console.log mostra mensagens e que os erros aparecem em vermelho. Terceira: console.log escreve no console (só o programador vê) e alert abre uma caixinha na tela (o visitante vê). Antes da aula, abra o arquivo index.html, escreva um console.log, salve, atualize a página com F5 e veja a mensagem no console. Faça isso uma vez e você estará pronto.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Relembre a aula passada perguntando o que o JavaScript faz num site. Diga que hoje todos vão escrever o primeiro código de verdade. No projetor, abra o index.html no navegador, aperte F12 e mostre o console vazio: é aqui que o código vai falar com a gente.

Conteúdo novo guiado (15 min): No editor, mostre a estrutura e adicione a tag script logo antes de fechar o body. Digite, explicando linha a linha:

  <script>
    console.log("Ola, mundo!");
  </script>

Diga que a tag script abre e fecha, e que dentro dela mora o JavaScript. Explique que console.log é um comando que manda uma mensagem para o console, que o texto fica entre aspas, e que o ponto e vírgula marca o fim da ordem. Salve, volte ao navegador, aperte F5 e mostre a mensagem aparecendo no console. Em seguida, troque por um alert para comparar:

  <script>
    alert("Bem-vindo ao meu site!");
  </script>

Salve, atualize e mostre a caixinha pop-up surgindo na tela. Pergunte qual a diferença: o console só o programador vê; o alert todo mundo vê.

Mão na massa (25 min): Cada aluno abre o seu index.html no editor. Oriente a adicionar a tag script antes do fechamento do body e escrever um console.log com uma mensagem própria, por exemplo o próprio nome. Salvar, atualizar com F5 e conferir a mensagem no console. Depois, adicionar um alert com outra mensagem e ver a caixinha. Reforce o ciclo escrever, salvar, atualizar. Circule pela sala conferindo cada console e cada pop-up.

Desafio e compartilhar (10 min): Peça que cada aluno escreva, de propósito, um comando errado, como consola.log no lugar de console.log, salve e olhe o erro vermelho no console. Pergunte: qual linha o erro aponta? Em seguida, peça que corrijam. Para fechar, cada aluno mostra a tela com a sua mensagem no console e o seu alert funcionando.

## Como explicar de forma clara (linguagem para a idade)

Para a idade de 10 a 15 anos, use comparações do dia a dia. Diga que a tag script é uma caixinha onde guardamos as ordens em JavaScript. Chame o console de bilhetinho secreto entre o programador e o navegador, e o alert de aviso no megafone, que aparece para todo mundo. Explique que o ponto e vírgula é como o ponto final de uma frase: marca onde a ordem acaba. Repita a regra de ouro: console.log é para mim, alert é para o visitante. E valorize muito o ciclo escrever, salvar, atualizar, dizendo que todo programador faz isso o tempo todo. Comemore cada mensagem que aparece, porque ver o código funcionar é o que prende a atenção deles.

## Erros comuns e como ajudar

O erro mais comum é esquecer de salvar o arquivo antes de atualizar a página; ensine a olhar a bolinha ou o ponto na aba do editor que indica não salvo, e o atalho Ctrl mais S. Muitos esquecem as aspas em volta do texto ou trocam por aspas tortas vindas de outro programa; mostre as aspas retas e simples. Outro tropeço é digitar Console.log com C maiúsculo ou consola.log; explique que o computador é exigente e que tudo deve ser igualzinho. Há quem coloque a tag script fora do body ou esqueça de fechar a tag; confira a posição e o fechamento. Por fim, alguns não acham o console: relembre o F12 e a aba Console, e mostre como limpar mensagens antigas para não confundir.`,
  exercicios: [
    {
      titulo: `Abrindo a janela secreta`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Cada aluno no seu computador com o index.html aberto no navegador. Guie a abertura do console e confirme aluno por aluno que viram a aba Console vazia. Mostre também o atalho no cartaz.`,
      atividade: `Abra o seu arquivo index.html no navegador. Aperte a tecla F12 para abrir as Ferramentas do desenvolvedor e clique na aba Console. Observe que ela está vazia por enquanto.`,
      gabarito: `As Ferramentas do desenvolvedor abrem ao apertar F12 (ou pelo menu, em Mais ferramentas, Ferramentas do desenvolvedor). A aba Console fica visível e, como ainda não escrevemos código, aparece em branco, pronta para receber as nossas mensagens.`,
    },
    {
      titulo: `Minha primeira mensagem no console`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Guie a criação da tag script antes do fechamento do body e o uso do console.log. Reforce o ciclo escrever, salvar (Ctrl mais S), atualizar (F5). Circule conferindo a mensagem no console de cada aluno.`,
      atividade: `No editor, dentro do seu index.html, adicione a tag script logo antes de fechar o body e escreva uma mensagem com o seu nome. Salve com Ctrl mais S, volte ao navegador e aperte F5 para ver a mensagem no console.`,
      gabarito: `O código correto fica assim, antes de fechar o body:

  <script>
    console.log("Ola, eu sou a Ana!");
  </script>

Ao salvar e atualizar, a frase Ola, eu sou a Ana! aparece na aba Console. O texto fica entre aspas e o comando termina com ponto e vírgula.`,
    },
    {
      titulo: `Aviso na tela com alert`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre a diferença entre o console (só o programador vê) e o alert (todos veem). Confirme que a caixinha aparece e lembre que é preciso clicar em OK para a página seguir. Circule pela sala.`,
      atividade: `Dentro da sua tag script, adicione um comando alert com uma mensagem de boas-vindas. Salve e atualize a página com F5. Veja a caixinha pop-up surgir e clique em OK para fechá-la.`,
      gabarito: `O código correto inclui a linha:

  <script>
    alert("Bem-vindo ao meu site!");
  </script>

Ao salvar e atualizar, uma caixinha pop-up aparece no centro da tela com a mensagem. A página só continua depois de clicar em OK. Diferente do console.log, o alert é visto por qualquer visitante.`,
    },
    {
      titulo: `Caçando o erro vermelho (em dupla)`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Um aluno escreve, de propósito, um comando errado e o outro ajuda a ler a mensagem de erro no console, identificando a linha. Depois trocam os papéis. Reforce que errar é parte de programar.`,
      atividade: `Em dupla, troque console.log por consola.log no código de um dos computadores. Salve, atualize e abra o console. Leiam juntos a mensagem vermelha: o que ela diz e em qual linha está o problema? Depois corrijam.`,
      gabarito: `Como consola.log não existe, o navegador mostra uma mensagem de erro em vermelho no console, do tipo Uncaught ReferenceError: consola is not defined, com a indicação do arquivo e da linha. A correção é voltar para console.log escrito certinho; ao salvar e atualizar, o erro some e a mensagem volta a aparecer normalmente.`,
    },
    {
      titulo: `Desafio: a ordem das mensagens`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Desafie cada aluno a usar três console.log seguidos e prever, antes de atualizar, em que ordem as mensagens vão aparecer. Intervenha só se travar. Depois cada um mostra o console e conta o que descobriu sobre a ordem.`,
      atividade: `Sozinho, escreva três comandos console.log, um embaixo do outro, com mensagens diferentes (por exemplo, Primeira, Segunda e Terceira). Antes de atualizar, escreva num papel em que ordem você acha que vão aparecer. Salve, aperte F5 e confira.`,
      gabarito: `O código fica assim dentro da tag script:

  <script>
    console.log("Primeira");
    console.log("Segunda");
    console.log("Terceira");
  </script>

No console, as mensagens aparecem na mesma ordem em que foram escritas: Primeira, Segunda e Terceira. Isso mostra que o JavaScript executa os comandos de cima para baixo, um de cada vez.`,
    },
  ],
};
