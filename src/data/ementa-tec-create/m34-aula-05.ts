import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "O que é hospedar um site?",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Entender o que é hospedagem de sites, comparar opções de hospedagem e preparar a pasta com os arquivos do site (HTML, CSS, JavaScript e banco) pronta para o envio.`,
  descricao: `Até agora os alunos criaram o site inteiro dentro do próprio computador: o HTML, o CSS, o JavaScript e o banco de dados ficam guardados em uma pasta no HD da máquina deles. O problema é simples: ninguém mais consegue ver esse site. Se um amigo em outra cidade quiser abrir a página, não tem como, porque os arquivos estão presos em um computador que nem fica ligado o tempo todo. É aqui que entra a hospedagem.

Hospedar um site é guardar os arquivos dele em um computador especial chamado servidor, que fica ligado vinte e quatro horas por dia, sete dias por semana, conectado à internet. Quando alguém digita o endereço do site no navegador, esse servidor entrega os arquivos para a pessoa. Pense na hospedagem como alugar uma "casa" na internet para o seu site morar: o domínio (que os alunos registraram na aula passada) é o endereço dessa casa, e a hospedagem é a casa em si, onde as coisas realmente ficam guardadas.

Nesta aula os alunos vão comparar as opções de hospedagem mais comuns para iniciantes. Existem serviços gratuitos e ótimos para projetos de estudante, como o Netlify, o Vercel e o GitHub Pages, e existem serviços pagos com banco de dados incluído, como a Hostinger e a Hostgator. Cada opção tem vantagens: alguns são muito fáceis de usar (basta arrastar a pasta), outros aceitam banco de dados, outros pedem cartão de crédito. O objetivo é que cada aluno escolha, com consciência, a opção que combina com o site dele.

Para fechar, os alunos vão organizar e preparar a pasta do site para o envio. Isso significa conferir o nome do arquivo principal (index.html), checar se os caminhos dos arquivos de CSS e JavaScript estão corretos, e juntar tudo em uma pasta limpa, sem arquivos sobrando. Sair desta aula com a pasta arrumada e a hospedagem escolhida deixa tudo pronto para a próxima aula, quando o site finalmente vai para o ar.`,
  materiais: [
    `Computadores com editor de código (VS Code) e navegador (Chrome ou Edge) instalados, um por aluno`,
    `Conexão de internet estável para acessar os sites das hospedagens`,
    `Projetor ou TV para o professor demonstrar a comparação das opções e a organização da pasta`,
    `Pasta com um site de exemplo já pronto (index.html, style.css, script.js e um arquivo de banco/dados)`,
    `Folha impressa ou slide com a tabela comparativa das hospedagens (gratuita x paga, com banco x sem banco, fácil x difícil)`,
    `Acesso aos sites netlify.com, vercel.com e hostinger.com.br para olhar (sem precisar criar conta ainda)`,
    `Bloco de notas ou caderno para cada aluno anotar a opção escolhida e o motivo`,
  ],
  conceitosChave: [
    `Hospedagem — serviço que guarda os arquivos do seu site em um computador ligado o tempo todo, para qualquer pessoa acessar pela internet.`,
    `Servidor — o computador especial, sempre ligado e conectado, que entrega os arquivos do site para quem digita o endereço no navegador.`,
    `Domínio — o endereço do site (por exemplo, meusite.com.br); é o nome que as pessoas digitam para chegar até a sua "casa" na internet.`,
    `Deploy — o ato de enviar os arquivos do seu computador para o servidor, ou seja, colocar o site no ar.`,
    `index.html — o arquivo principal do site; é a página que o servidor mostra primeiro quando alguém abre o endereço.`,
    `Hospedagem gratuita — serviço sem custo, ótimo para estudar (Netlify, Vercel, GitHub Pages); geralmente serve melhor para sites sem banco de dados.`,
    `Caminho do arquivo — o endereço interno que diz onde está cada arquivo (por exemplo, o CSS em "style.css"); se estiver errado, o site abre quebrado.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ter colocado um site no ar antes para dar esta aula. O conceito é simples: hospedagem é "guardar os arquivos do site em um computador que fica sempre ligado na internet". Nesta aula NÃO vamos publicar o site ainda (isso é a Aula 6). Aqui o foco é entender o conceito, comparar opções e deixar a pasta de arquivos arrumada. Tenha em mãos a pasta de exemplo com quatro arquivos: index.html, style.css, script.js e um arquivo de dados (pode ser um dados.json simples). Antes da aula, abra o site netlify.com, o vercel.com e o hostinger.com.br no navegador, só para você reconhecer as telas. Saiba diferenciar dois tipos: hospedagem de site estático (HTML, CSS e JS, sem banco no servidor) e hospedagem com banco de dados (que aceita guardar dados de verdade). Para um projeto de estudante, o Netlify gratuito resolve a maior parte dos casos.

## Passo a passo da aula

Aquecimento (10 min): Pergunte: "O site de vocês está no computador da escola. Como o seu primo em outra cidade ia conseguir ver?" Deixe a turma pensar. Conduza até a resposta: precisamos guardar o site em algum lugar que fique ligado e na internet o tempo todo. Esse lugar é a hospedagem. Relembre rapidamente o domínio registrado na aula passada (o endereço) e diga que hoje vamos entender a "casa".

Conteúdo novo guiado (15 min): No projetor, desenhe ou mostre o caminho: navegador pede o endereço, o servidor responde mandando os arquivos. Abra netlify.com, vercel.com e hostinger.com.br e mostre a cara de cada um. Monte no quadro uma tabela com três colunas: Nome, É gratuita?, Aceita banco de dados? Em seguida, abra a pasta de exemplo no VS Code e mostre o arquivo principal. Mostre dentro do index.html como o CSS e o JS são chamados, por exemplo com as linhas: <link rel="stylesheet" href="style.css"> e <script src="script.js"></script>. Explique que o nome no href e no src precisa bater exatamente com o nome do arquivo na pasta, senão o site abre sem cor ou sem funcionar.

Mão na massa (25 min): Cada aluno abre a própria pasta do site no VS Code. Tarefa 1: conferir se existe um arquivo chamado exatamente index.html (tudo minúsculo). Tarefa 2: abrir o index.html e verificar se as linhas do CSS e do JS apontam para os nomes certos. Tarefa 3: apagar arquivos que não fazem parte do site (rascunhos, cópias com nome "teste"). Tarefa 4: preencher no caderno a tabela comparativa e escrever qual hospedagem escolheram e por quê. Circule ajudando a achar caminhos errados.

Desafio + compartilhar (10 min): Cada aluno diz em voz alta a hospedagem que escolheu e um motivo. Dois ou três voluntários mostram a pasta arrumada no projetor.

## Como explicar de forma clara

Use a comparação da casa o tempo todo: o domínio é o endereço escrito no envelope, a hospedagem é a casa de verdade onde as coisas moram, e o servidor é o porteiro que nunca dorme e abre a porta quando alguém chega. Para a pasta de arquivos, diga que é como arrumar a mochila antes da viagem: só leva o que vai usar e cada coisa no lugar certo. Fale "site estático" como "site que só mostra páginas" e "site com banco" como "site que guarda informações das pessoas". Sempre aponte na tela enquanto fala o nome dos botões e dos arquivos.

## Erros comuns e como ajudar

O erro mais comum é o arquivo principal ter outro nome (Index.html com I maiúsculo, ou página.html). Ensine que precisa ser index.html, tudo minúsculo. Outro erro frequente é o caminho do CSS ou do JS estar errado (href apontando para um nome que não existe), e o site abre sem cor; mostre como comparar o nome no código com o nome real do arquivo na pasta. Alguns alunos confundem domínio com hospedagem; reforce a comparação endereço x casa. Há quem queira já publicar agora; explique com calma que hoje é preparação e que a publicação é na próxima aula. Por fim, muitos deixam arquivos de rascunho na pasta; oriente a deixar só o necessário para o envio ficar limpo.`,
  exercicios: [
    {
      titulo: `Casa, endereço ou porteiro?`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza com a comparação da casa. Diga uma palavra e peça que a turma classifique. Anote as respostas no quadro e corrija com gentileza.`,
      atividade: `Para cada palavra, diga se ela representa o endereço, a casa ou o porteiro: 1) domínio; 2) hospedagem; 3) servidor.`,
      gabarito: `1) domínio = o endereço (o nome que se digita no navegador); 2) hospedagem = a casa (onde os arquivos do site ficam guardados); 3) servidor = o porteiro (o computador sempre ligado que entrega os arquivos a quem chega).`,
    },
    {
      titulo: `Tabela das hospedagens`,
      tipo: `pesquisa guiada`,
      tempo: `7 minutos`,
      guiaProfessor: `Deixe os alunos olharem netlify.com, vercel.com e hostinger.com.br só para observar. Não precisam criar conta. Ajude a preencher a tabela no caderno.`,
      atividade: `Monte uma tabela com três opções de hospedagem. Para cada uma, anote: o nome, se é gratuita e se aceita banco de dados.`,
      gabarito: `Exemplo válido: Netlify — gratuita — melhor para site sem banco (estático). Vercel — gratuita — melhor para site sem banco (estático). Hostinger — paga — aceita banco de dados. Aceite outras opções corretas que o aluno encontrar, desde que classifique certo gratuita/paga e com/sem banco.`,
    },
    {
      titulo: `Achando o arquivo principal`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Confira se cada aluno tem um arquivo chamado exatamente index.html, tudo minúsculo. Mostre como renomear no VS Code clicando com o botão direito e escolhendo Renomear (Rename).`,
      atividade: `Abra a pasta do seu site no VS Code e confirme que existe um arquivo chamado index.html, tudo em letras minúsculas. Se o nome estiver diferente, renomeie para index.html.`,
      gabarito: `A pasta passa a ter um arquivo chamado exatamente index.html, em letras minúsculas. Não há mais nomes como Index.html, home.html ou página.html ocupando o lugar do arquivo principal.`,
    },
    {
      titulo: `Caminhos certos do CSS e do JS`,
      tipo: `correção de código`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre como comparar o nome dentro do href e do src com o nome real do arquivo na pasta. Lembre que precisa bater letra por letra. Explique que o site abre sem cor quando o caminho do CSS está errado.`,
      atividade: `O HTML abaixo está com os caminhos errados. Os arquivos na pasta se chamam style.css e script.js. Corrija as duas linhas. Linha 1: <link rel="stylesheet" href="estilo.css"> Linha 2: <script src="java.js"></script>`,
      gabarito: `Linha 1 corrigida: <link rel="stylesheet" href="style.css"> Linha 2 corrigida: <script src="script.js"></script> O nome dentro do href e do src precisa ser igual ao nome real do arquivo na pasta, letra por letra.`,
    },
    {
      titulo: `Mochila pronta para a viagem`,
      tipo: `desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Oriente a deixar na pasta só os arquivos necessários. Peça que o aluno justifique a escolha da hospedagem com um motivo claro. Apoie quem tiver dúvida sobre o que apagar.`,
      atividade: `Deixe sua pasta pronta para o envio: mantenha apenas os arquivos do site (index.html, style.css, script.js e o arquivo de dados) e apague rascunhos. Depois, escreva no caderno qual hospedagem você escolheu e um motivo.`,
      gabarito: `A pasta contém só os arquivos do site, sem rascunhos ou cópias de teste, e o index.html abre certo. No caderno há uma hospedagem escolhida com um motivo válido, por exemplo: escolhi o Netlify porque é gratuito e meu site não precisa de banco no servidor; ou escolhi a Hostinger porque meu site guarda dados e preciso de banco de dados.`,
    },
  ],
};
