import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Guardar e consultar dados",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Conectar um formulário do site a um banco de dados para salvar respostas reais e depois ler e filtrar esses dados para mostrá-los na própria página.`,
  descricao: `Na aula passada o aluno entendeu o que é um banco de dados e criou a primeira tabela, com colunas e tipos de dados. Agora chega a parte mais empolgante: fazer o site realmente conversar com o banco. O aluno vai pegar um formulário simples da página dele (um campo de nome e uma mensagem, por exemplo) e ligar esse formulário ao banco de dados, de modo que tudo que um visitante escrever fique guardado de verdade, sem se perder quando a página fecha.

A ideia central da aula é o caminho de ida e volta dos dados. Na ida, o visitante preenche o formulário, clica em enviar e o site manda essas informações para o banco, que cria uma nova linha na tabela (isso se chama inserir, ou INSERT). Na volta, o site pergunta ao banco "quais respostas você tem guardadas?", recebe a lista de linhas e mostra cada uma na página (isso se chama consultar, ou SELECT). Quando o aluno percebe que aquilo que ele digitou continua lá depois de atualizar a página, a ficha cai: o site ganhou memória.

O terceiro movimento da aula é filtrar. Nem sempre queremos ver tudo: às vezes queremos só as mensagens de uma pessoa, ou só as respostas mais recentes. O professor mostra que dá para pedir ao banco um recorte específico, usando uma condição. É o mesmo raciocínio de procurar uma figurinha específica num álbum em vez de folhear o álbum inteiro.

Para esta turma de Ano 3, usaremos um banco simples e visual (recomendamos o painel do serviço de hospedagem com banco já incluso, ou uma ferramenta como o Supabase, que mostra a tabela na tela e tem um editor de consultas). O foco não é decorar comandos, e sim entender o ciclo guardar e consultar, que vale para qualquer banco e qualquer linguagem que eles usem depois, inclusive no projeto de Python do ano.`,
  materiais: [
    `Computadores com acesso ao painel de Banco de dados + Domínio + Hospedagem (um por aluno), com a conta da turma já logada`,
    `Editor de código (VS Code) aberto com o site do aluno, que já tem ao menos uma página HTML e um arquivo JavaScript`,
    `Navegador (Chrome ou Edge) para abrir a página e o painel do banco lado a lado`,
    `Projetor ou TV ligado à máquina do professor para a demonstração ao vivo`,
    `Tabela de exemplo já criada na Aula 1 (sugestão: tabela "recados" com as colunas id, nome e mensagem)`,
    `Folha impressa de "comandos do dia" com INSERT, SELECT e SELECT com condição (WHERE) escritos por extenso`,
    `Arquivo de exemplo com um formulário HTML pronto, para quem ainda não tiver um na própria página`,
  ],
  conceitosChave: [
    `Inserir (INSERT) — comando que guarda uma nova linha de dados na tabela, como acrescentar uma ficha nova ao fichário.`,
    `Consultar (SELECT) — comando que lê dados da tabela e devolve as linhas pedidas, como abrir o fichário e ler as fichas.`,
    `Filtrar (WHERE) — parte da consulta que escolhe só as linhas que atendem a uma condição, como procurar só as fichas de uma pessoa.`,
    `Registro (linha) — cada item guardado na tabela; uma resposta do formulário vira um registro.`,
    `Campo (coluna) — cada pedaço de informação de um registro, como nome ou mensagem.`,
    `Formulário — área da página com campos onde o visitante digita e um botão para enviar os dados ao site.`,
    `Consulta (query) — o pedido que o site faz ao banco, seja para guardar, seja para ler dados.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje o aluno liga o formulário do site ao banco de dados. Você não precisa ser especialista: basta dominar três ideias. Inserir guarda uma linha nova. Consultar lê as linhas guardadas. Filtrar lê só as linhas que batem com uma condição. Antes da aula, entre no painel do banco da turma, abra a tabela criada na Aula 1 (sugestão: "recados", com colunas id, nome e mensagem) e localize o editor onde dá para escrever comandos SQL ou clicar para inserir uma linha. Faça você mesmo um teste: insira uma linha de mentira e depois consulte para vê-la aparecer. Tenha o site de exemplo aberto no VS Code, com um formulário HTML simples já pronto, para apoiar quem não tiver um.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento: pergunte "o que você digitou na aula passada continua salvo?". Mostre no projetor a tabela "recados" vazia. Explique que hoje ela vai encher com dados de verdade vindos do site. Relembre rápido o que é linha e coluna.

15 min — Conteúdo novo guiado: no projetor, mostre o formulário HTML. Escreva-o com a turma:

<form id="form-recado">
  <input type="text" id="campo-nome" placeholder="Seu nome">
  <textarea id="campo-mensagem" placeholder="Sua mensagem"></textarea>
  <button type="submit">Enviar</button>
</form>
<ul id="lista-recados"></ul>

Explique cada parte: o input guarda o nome, o textarea guarda a mensagem, o button envia, e a lista (ul) vai mostrar os recados. Em seguida, mostre no painel do banco os três comandos do dia, escritos na lousa:

Inserir: INSERT INTO recados (nome, mensagem) VALUES ("Ana", "Oi!");
Consultar tudo: SELECT * FROM recados;
Filtrar por nome: SELECT * FROM recados WHERE nome = "Ana";

Rode os três no painel, ao vivo, para a turma ver a linha aparecer, depois sumir do filtro quando o nome muda.

25 min — Mão na massa: cada aluno (1) garante o formulário na própria página; (2) no painel do banco, insere manualmente duas linhas com INSERT; (3) roda SELECT para ver tudo; (4) roda um SELECT com WHERE filtrando por um nome. Quem terminar liga o botão Enviar ao banco com um pequeno trecho de JavaScript que você projeta, usando o recurso de inserção do painel ou a API do serviço. Circule garantindo que todos vejam as linhas aparecendo.

10 min — Desafio e compartilhar: desafie a turma a escrever uma consulta que mostre só as mensagens de um nome específico. Dois ou três alunos projetam a tabela cheia e a consulta filtrada, explicando a diferença entre ver tudo e ver um recorte.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do fichário ou do álbum de figurinhas. A tabela é o álbum; cada linha é uma figurinha colada; cada coluna é uma informação da figurinha (nome do jogador, time). Inserir é colar uma figurinha nova. Consultar é abrir o álbum e olhar as figurinhas. Filtrar é dizer "me mostra só as figurinhas do time azul" em vez de folhear tudo. Diga que o site sem banco é como um quadro branco que apaga sozinho quando você sai da sala; com banco, é um caderno que guarda tudo. Reforce que enviar o formulário é mandar a ficha para o caderno, e atualizar a página é abrir o caderno de novo para conferir.

## Erros comuns e como ajudar

O erro mais comum é esquecer as aspas em volta dos textos no INSERT, o que faz o banco reclamar; mostre que palavras vão entre aspas e números não. Outro é trocar o nome da coluna (escrever "mensagens" em vez de "mensagem"); peça que comparem com a tabela real letra por letra. No filtro, alunos usam um único igual ou esquecem o WHERE e acham que "não filtrou"; reforce a estrutura WHERE coluna = valor. Há quem rode SELECT e ache que "não salvou" só porque a página do site não atualizou sozinha; explique que a página só mostra o que foi pedido na última consulta. Por fim, cuidado com maiúsculas no filtro: procurar por "ana" pode não achar "Ana"; combine com a turma um padrão de escrita.`,
  exercicios: [
    {
      titulo: `Preparando o formulário na página`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Projete o formulário e acompanhe enquanto cada aluno o coloca na própria página. Garanta que todos consigam abrir a página no navegador e ver os campos antes de avançar.`,
      atividade: `No arquivo HTML do seu site, acrescente um formulário com um campo de nome, um campo de mensagem, um botão Enviar e uma lista vazia para mostrar os recados. Salve e abra a página no navegador para conferir que os campos aparecem.`,
      gabarito: `A página mostra um formulário com um campo de texto (nome), uma área de mensagem, um botão Enviar e uma lista (ul) ainda vazia. O HTML está parecido com: um form contendo input com id campo-nome, textarea com id campo-mensagem, um button de enviar e uma ul com id lista-recados logo abaixo.`,
    },
    {
      titulo: `Guardando o primeiro registro`,
      tipo: `prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Mostre no painel onde se escreve o comando ou onde se clica para inserir uma linha. Reforce aspas nos textos. Confira a tabela de cada aluno para ver a linha aparecer.`,
      atividade: `No painel do banco, insira duas linhas na tabela "recados" usando o comando INSERT (ou o botão de inserir). Use nomes e mensagens à sua escolha. Depois confira na tabela que as duas linhas apareceram.`,
      gabarito: `A tabela "recados" tem duas linhas novas, cada uma com nome e mensagem preenchidos e um id gerado automaticamente. Exemplo de comando válido: INSERT INTO recados (nome, mensagem) VALUES ("Ana", "Oi, gostei do site!"); seguido de outro INSERT com dados diferentes.`,
    },
    {
      titulo: `Lendo tudo que foi guardado`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Explique que SELECT asterisco significa "traga todas as colunas". Mostre que o resultado é uma lista de linhas. Peça que contem quantos registros apareceram.`,
      atividade: `No painel do banco, escreva uma consulta que mostre todos os registros da tabela "recados". Conte quantas linhas apareceram e confira se são as mesmas que você inseriu.`,
      gabarito: `A consulta usada é SELECT * FROM recados; e o resultado lista todas as linhas existentes na tabela, com as colunas id, nome e mensagem. O número de linhas mostradas corresponde ao total de registros que o aluno inseriu.`,
    },
    {
      titulo: `Filtrando por um nome`,
      tipo: `desafio`,
      tempo: `12 min`,
      guiaProfessor: `Apresente a estrutura WHERE coluna = valor. Cuide das aspas e das maiúsculas. Estimule comparar o resultado do SELECT com filtro e sem filtro.`,
      atividade: `Insira mais uma linha com um nome repetido (use o mesmo nome de um registro anterior). Depois escreva uma consulta que mostre apenas os recados desse nome. Compare quantas linhas aparecem com e sem o filtro.`,
      gabarito: `A consulta com filtro é SELECT * FROM recados WHERE nome = "Ana"; (trocando "Ana" pelo nome escolhido). O resultado mostra somente as linhas cujo campo nome é igual ao valor pedido, e o total filtrado é menor que o total sem filtro. O aluno sabe explicar que o WHERE escolhe um recorte das linhas.`,
    },
    {
      titulo: `Ligando o botão Enviar ao banco`,
      tipo: `em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Projete o trecho de JavaScript e explique linha a linha. As duplas se ajudam: uma testa enviando pelo site, a outra confere no painel se a linha apareceu. Circule mediando.`,
      atividade: `Em dupla, liguem o botão Enviar do formulário ao banco usando JavaScript: ao enviar, o código lê o nome e a mensagem dos campos e manda guardar como um novo registro. Testem digitando um recado no site e confirmando no painel que a linha foi criada.`,
      gabarito: `Um trecho de JavaScript escuta o envio do formulário, lê os valores dos campos e chama a função de inserir do serviço de banco para criar a linha. Exemplo do raciocínio do código (adaptado ao serviço usado): pegar o elemento do form pelo id form-recado, no evento de submit usar event.preventDefault(), ler document.getElementById("campo-nome").value e document.getElementById("campo-mensagem").value, e então enviar esses dois valores ao banco com a função de inserção do painel ou da API. Após enviar um recado pelo site, uma nova linha com aquele nome e mensagem aparece na tabela "recados" do painel.`,
    },
  ],
};
