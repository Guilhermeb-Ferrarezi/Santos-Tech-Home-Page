import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Polindo o Projeto: Testes e Ajustes",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Testar cada interação do site, caçar e corrigir bugs com o console do navegador e aplicar os últimos refinamentos de mensagens, feedback visual e responsividade.`,
  descricao: `Esta aula é a fase de "polimento" do projeto. Durante o mês inteiro, os alunos construíram um site interativo com JavaScript: decisões com if/else, repetições com loops, formulários que capturam dados, eventos que respondem ao usuário e funções que conectam tudo. Hoje eles param de adicionar coisas novas e passam a olhar com cuidado para o que já existe. O objetivo é simples e poderoso: deixar o site sólido, claro e bonito de usar.

Polir um projeto é uma habilidade profissional. Programadores de verdade gastam boa parte do tempo testando e corrigindo, não só escrevendo código novo. Nesta aula, o aluno aprende a ser um "detetive de bugs": ele clica em cada botão, preenche cada campo, testa o que acontece quando deixa um campo vazio e observa se o site reage como deveria. Quando algo dá errado, ele abre o console do navegador (a tela secreta onde o JavaScript conta seus problemas) e lê a mensagem de erro para descobrir a linha e a causa.

Além de corrigir erros, a aula trabalha a experiência de quem usa o site. Uma mensagem como "Erro" não ajuda ninguém; já "Por favor, preencha seu nome" guia a pessoa. Um botão que muda de cor ao ser clicado dá a sensação de que o site está vivo. E um layout que não quebra no celular mostra cuidado. São pequenos ajustes que transformam um projeto "que funciona" em um projeto "que é bom de verdade".

Ao final, cada aluno terá uma lista de testes feita, pelo menos um bug encontrado e corrigido, mensagens mais claras e algum refinamento visual aplicado. Isso prepara diretamente a Aula 8, a entrega e apresentação do site interativo pronto.`,
  materiais: [
    `Computadores com editor de código (VS Code) e os arquivos do site de cada aluno (index.html, style.css, script.js)`,
    `Navegador moderno (Chrome ou Edge) com as Ferramentas do Desenvolvedor disponíveis`,
    `Projetor ou TV para o professor demonstrar o console e os testes ao vivo`,
    `Folha impressa ou documento digital com a "Lista de Testes" (checklist) para preencher`,
    `Arquivo de exemplo com um bug proposital para a turma praticar a caça ao erro`,
    `Bloco de notas ou documento para anotar os bugs encontrados e o que foi corrigido`,
  ],
  conceitosChave: [
    `Bug — um erro ou comportamento inesperado no código, algo que não funciona como deveria.`,
    `Console do navegador — a tela secreta das Ferramentas do Desenvolvedor onde o JavaScript mostra erros e onde você pode imprimir mensagens com console.log.`,
    `Depurar (debug) — o processo de procurar, entender e corrigir um bug no código.`,
    `Lista de testes — uma sequência de coisas para verificar uma a uma, garantindo que cada interação do site funciona.`,
    `Feedback visual — qualquer resposta que o site dá ao usuário (mudar cor, mostrar mensagem, destacar um campo) para confirmar uma ação.`,
    `Mensagem clara — um texto que explica de forma simples o que aconteceu ou o que a pessoa precisa fazer.`,
    `Responsividade — a capacidade do site de se ajustar bem a telas de tamanhos diferentes, como celular, tablet e computador.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em JavaScript para dar esta aula. O segredo é dominar uma única ferramenta: o console do navegador. Para abri-lo, peça à turma para apertar a tecla F12 (ou clicar com o botão direito na página e escolher "Inspecionar"). Vai abrir um painel; lá em cima, clique na aba "Console". É nesse lugar que o navegador escreve, em vermelho, as mensagens de erro. Cada erro costuma trazer o nome do arquivo e o número da linha onde o problema aconteceu, por exemplo "script.js:12". Ensine os alunos a lerem isso: a linha indicada é o melhor ponto de partida para olhar o código.

Outra ferramenta poderosa é o comando console.log. Ele serve para "espiar" o que o código está fazendo. Quando uma variável parece errada, o aluno escreve uma linha como console.log("valor do nome:", nome) e o valor aparece no console. É a forma mais simples de descobrir se o problema está nos dados ou na lógica. Memorize: erros em vermelho contam o que quebrou; console.log conta o que está acontecendo.

Lembre que esta é a aula de polimento. Os alunos NÃO devem começar funcionalidades novas. O trabalho de hoje é testar, corrigir e melhorar o que já existe.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento e revisão: Abra o site de exemplo no projetor e pergunte: "Como a gente sabe se um site está realmente pronto?" Anote ideias no quadro (testar tudo, sem erros, bonito no celular). Aperte F12, mostre a aba "Console" e provoque um erro de propósito (por exemplo, chamando uma função que não existe) para a turma ver a mensagem vermelha aparecer.

15 min - Conteúdo novo guiado: Ensine os três pilares do polimento. Primeiro, ler o console: mostre como o erro aponta arquivo e linha. Segundo, usar console.log para espiar valores; digite ao vivo:

console.log("Testando o botão");

Terceiro, melhorar mensagens e feedback. Mostre uma validação clara e um feedback visual simples (sem template literal, usando concatenação com mais):

if (nome === "") {
  aviso.textContent = "Por favor, digite seu nome.";
  aviso.style.color = "red";
} else {
  aviso.textContent = "Bem-vindo, " + nome + "!";
  aviso.style.color = "green";
}

25 min - Mão na massa: Cada aluno abre seu próprio site e segue a Lista de Testes: clicar em todos os botões, preencher e enviar o formulário, e testar campos vazios. Ao achar um bug, abre o console, lê o erro e corrige. Em seguida, melhora pelo menos uma mensagem (deixando-a clara) e adiciona um feedback visual (mudar cor de um texto ou botão). Circule pela sala lendo os erros junto com quem travar.

10 min - Desafio e compartilhar: Desafie a turma a deixar o site bom no celular. No navegador, com F12 aberto, clique no ícone de celular/tablet (modo dispositivo) e veja se o layout quebra. Para ajustar, mostre uma regra simples de responsividade no CSS:

img {
  max-width: 100%;
  height: auto;
}

Feche pedindo que dois voluntários mostrem um bug que corrigiram e contem como descobriram.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do "detetive de bugs": "Todo site tem erros escondidos; seu trabalho é encontrar as pistas." Diga que o console é "a sala de interrogatório onde o JavaScript confessa o que deu errado". Explique o console.log como "uma lanterna que você acende dentro do código para ver o que está acontecendo lá dentro". Para mensagens claras, pergunte: "Se sua avó usasse o site, ela entenderia esse aviso?" Para responsividade, fale: "Seu site precisa ficar bonito tanto no computador da escola quanto no celular do seu bolso."

## Erros comuns e como ajudar

O erro mais comum é o aluno não ler a mensagem do console e só tentar adivinhar; sente ao lado e leia o erro em voz alta com ele, apontando o número da linha. Outro é confundir o sinal de igual: lembre que para comparar usamos === (três iguais) e para guardar usamos = (um igual). Muitos esquecem de salvar o arquivo e recarregar a página, achando que a correção não funcionou; reforce salvar (Ctrl+S) e atualizar (F5). Há quem queira criar funcionalidades novas em vez de polir; redirecione para a Lista de Testes. Por fim, alguns escrevem mensagens vagas como "Erro"; peça sempre uma frase que diga o que a pessoa deve fazer.`,
  exercicios: [
    {
      titulo: `Abrir o console e ler um erro`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada aluno abra o console com F12 e encontre a aba "Console". Use o arquivo de exemplo com bug proposital. Ajude a ler o nome do arquivo e o número da linha no erro em vermelho.`,
      atividade: `Abra o site de exemplo, aperte F12 e clique na aba "Console". Encontre a mensagem de erro em vermelho e anote no papel: qual arquivo e qual número de linha o navegador apontou.`,
      gabarito: `O aluno acerta quando localiza a aba "Console", identifica a mensagem em vermelho e anota corretamente o arquivo e a linha indicados, por exemplo "script.js, linha 12". O ponto principal é entender que a linha indicada é onde começar a procurar o problema.`,
    },
    {
      titulo: `Espiar um valor com console.log`,
      tipo: `prática de código`,
      tempo: `8 min`,
      guiaProfessor: `Mostre onde colocar a linha de console.log dentro da função que trata o botão ou o formulário. Reforce salvar e recarregar a página antes de olhar o console.`,
      atividade: `No seu script.js, dentro da função que responde ao clique do botão, adicione uma linha para espiar o valor digitado. Salve, recarregue a página, clique no botão e veja o valor aparecer no console.`,
      gabarito: `Solução esperada (dentro da função do clique):

console.log("valor digitado:", nome);

Ao clicar no botão, o console deve mostrar o texto "valor digitado:" seguido do que foi escrito no campo. Se aparecer vazio ou indefinido, isso já é uma pista de bug a investigar.`,
    },
    {
      titulo: `Corrigir uma mensagem confusa`,
      tipo: `melhoria de experiência`,
      tempo: `10 min`,
      guiaProfessor: `Peça que cada aluno encontre uma mensagem vaga no próprio site. Ajude a reescrever de forma que diga o que a pessoa deve fazer. Confira o uso de === na comparação.`,
      atividade: `Encontre no seu site uma mensagem pouco clara (como "Erro"). Reescreva-a para orientar o usuário. Por exemplo, quando o campo de nome estiver vazio, mostre uma mensagem que peça o nome.`,
      gabarito: `Solução esperada:

if (nome === "") {
  aviso.textContent = "Por favor, digite seu nome.";
} else {
  aviso.textContent = "Bem-vindo, " + nome + "!";
}

A mensagem está correta quando explica em linguagem simples o que fazer, em vez de só dizer "Erro". O uso de aspas e do sinal de mais para juntar o nome também deve estar correto.`,
    },
    {
      titulo: `Adicionar feedback visual ao clicar`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `Desafie o aluno a fazer o site "responder" de forma visível. O mais simples é mudar a cor de um texto ou de um botão. Confira se o elemento foi selecionado corretamente antes de mudar o estilo.`,
      atividade: `Faça seu site dar um sinal visual quando o usuário acertar a ação. Mude a cor do aviso para verde quando o nome for preenchido e para vermelho quando estiver vazio.`,
      gabarito: `Solução esperada:

if (nome === "") {
  aviso.textContent = "Por favor, digite seu nome.";
  aviso.style.color = "red";
} else {
  aviso.textContent = "Tudo certo, " + nome + "!";
  aviso.style.color = "green";
}

O feedback está correto quando, ao testar, a cor muda de fato: vermelha com campo vazio e verde com o nome preenchido. Isso confirma que o site reage à ação do usuário.`,
    },
    {
      titulo: `Lista de testes completa e ajuste no celular`,
      tipo: `projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Entregue a Lista de Testes e oriente a percorrer item por item, marcando o que passou e anotando o que falhou. Depois, mostre o modo dispositivo (ícone de celular no F12) e ajude a aplicar a regra de imagem responsiva.`,
      atividade: `Percorra toda a Lista de Testes do seu site (botões, formulário, campos vazios), marcando cada item. Depois, abra o modo celular (F12 e o ícone de dispositivo) e ajuste o que estiver quebrado, garantindo que as imagens não saiam da tela.`,
      gabarito: `A Lista de Testes está completa quando todos os itens foram verificados e os que falharam foram corrigidos e remarcados como aprovados. Para a responsividade, a solução esperada no style.css é:

img {
  max-width: 100%;
  height: auto;
}

No modo celular, as imagens devem caber na largura da tela sem cortar nem ultrapassar as bordas, e o conteúdo deve continuar legível.`,
    },
  ],
};
