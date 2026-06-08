import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Explorando o ambiente na prática",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Navegar com confiança pelas três telas do Power BI (Relatório, Tabela e Modelo), abrir, nomear e salvar um arquivo .pbix e arrastar o primeiro campo para a tela.`,
  descricao: `Na aula passada o aluno descobriu o que é o Power BI e para que ele serve. Agora chegou a hora de colocar a mão na ferramenta de verdade. Esta aula é uma exploração guiada: o objetivo principal é que o aluno perca o medo da tela cheia de botões e entenda que o Power BI tem apenas três grandes "modos de ver" os mesmos dados. Quando ele percebe que pode clicar em tudo sem quebrar nada (basta não salvar por cima), a curiosidade toma o lugar da insegurança.

O Power BI Desktop organiza o trabalho em três telas que ficam empilhadas como três ícones na barra lateral esquerda. A tela de Relatório é o quadro em branco onde os gráficos vão nascer. A tela de Tabela (Dados) mostra as informações em linhas e colunas, parecido com o Excel. A tela de Modelo mostra as tabelas como caixinhas que podem ser ligadas umas às outras. Nesta aula o foco é reconhecer cada uma e transitar entre elas com tranquilidade, sem ainda criar relacionamentos ou gráficos complexos.

O aluno também aprende a rotina de qualquer projeto sério: abrir um arquivo, dar um nome com significado e salvar no formato .pbix (a extensão dos projetos do Power BI). Essa é uma habilidade de produtividade que vale para a vida toda — saber onde o trabalho fica guardado e como recuperá-lo. Usaremos um arquivo de exemplo já com uma tabela carregada, para que o aluno pratique clicar, ordenar colunas e arrastar um campo para o quadro em branco e ver algo aparecer na tela.

Ao final, o aluno deve estar confortável dizendo "essa é a tela de Relatório", "aqui eu vejo os dados em tabela" e "aqui ficam as caixinhas das tabelas". A aula é leve, exploratória e cheia de pequenas vitórias visuais, preparando o terreno para as próximas aulas em que dados de verdade serão importados, limpos e transformados em gráficos.`,
  materiais: [
    `Computadores (um por aluno) com o Power BI Desktop instalado e já aberto`,
    `Excel instalado nos mesmos computadores (será usado nas próximas aulas do mês)`,
    `Projetor ou tela grande para o professor demonstrar cada passo ao vivo`,
    `Arquivo de exemplo "vendas-lanchonete.pbix" já com uma tabela carregada, salvo em uma pasta combinada (ex.: Documentos/SantosTech)`,
    `Pasta de destino criada e visível para os alunos salvarem seus arquivos`,
    `Conta de usuário do Windows com permissão para salvar arquivos (não é necessária conta da nuvem nesta aula)`,
    `Folha impressa de apoio com os ícones das três telas (Relatório, Tabela e Modelo) para consulta rápida`,
  ],
  conceitosChave: [
    `Power BI Desktop — programa gratuito instalado no computador onde montamos os relatórios e painéis.`,
    `Arquivo .pbix — o formato de projeto do Power BI; guarda os dados, os gráficos e tudo que foi feito em um único arquivo.`,
    `Tela de Relatório — o quadro em branco onde arrastamos campos e criamos os gráficos.`,
    `Tela de Tabela (Dados) — mostra as informações em linhas e colunas, parecido com uma planilha do Excel.`,
    `Tela de Modelo — mostra as tabelas como caixinhas que podem ser conectadas entre si.`,
    `Painel Campos — a lista à direita com os nomes das tabelas e colunas que podemos arrastar para a tela.`,
    `Ordenar coluna — clicar no título de uma coluna para colocar os valores em ordem crescente ou decrescente.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Power BI para dar esta aula. O segredo é dominar três ícones que ficam na barra lateral esquerda do Power BI Desktop, empilhados na vertical: o primeiro (parece um gráfico de barras) é a tela de Relatório; o segundo (parece uma tabela/grade) é a tela de Tabela ou Dados; o terceiro (parece três caixinhas ligadas) é a tela de Modelo. Clicar nesses ícones apenas troca o modo de ver os mesmos dados — não apaga nada. Abra o arquivo de exemplo antes da aula e clique nos três para se familiarizar. À direita fica o painel Campos, com a lista de tabelas e colunas; é de lá que arrastamos itens para a tela.

## Passo a passo da aula

10 min — Aquecimento e revisão. Pergunte: "O que é o Power BI e para que serve?". Anote no quadro as respostas. Mostre no projetor o Power BI já aberto e diga que hoje vamos explorar a casa por dentro, sem medo de clicar.

15 min — Conteúdo novo guiado. No projetor, aponte a barra lateral esquerda e os três ícones. Clique no primeiro e diga "tela de Relatório, o quadro em branco". Clique no segundo e diga "tela de Tabela, parece o Excel". Clique no terceiro e diga "tela de Modelo, as caixinhas das tabelas". Repita o ciclo devagar. Depois mostre como salvar: menu Arquivo (canto superior esquerdo) > Salvar como, escolha a pasta combinada, digite o nome "meu-projeto-SEUNOME" e confirme. Aponte que o arquivo termina em .pbix. Por fim, na tela de Relatório, abra o painel Campos à direita, segure o botão do mouse sobre um campo (por exemplo "Produto") e arraste para o quadro em branco; uma tabela visual aparece.

25 min — Mão na massa. Cada aluno abre o arquivo de exemplo (Arquivo > Abrir), clica nos três ícones e diz em voz alta o nome de cada tela. Em seguida, faz Arquivo > Salvar como com o próprio nome na pasta combinada. Na tela de Tabela, clica no título de uma coluna para ordenar (uma seta aparece ao lado do nome); clica de novo para inverter a ordem. Por fim, volta à tela de Relatório e arrasta um campo do painel Campos para o quadro, vendo um primeiro visual surgir. Circule pela sala ajudando individualmente.

10 min — Desafio e compartilhar. Lance o desafio: "Em 3 minutos, deixe na tela de Relatório um visual com o campo Produto e descubra qual produto aparece primeiro depois de ordenar". Peça para dois ou três alunos virarem o monitor e mostrarem o que conseguiram.

## Como explicar de forma clara

Use a metáfora da casa com três cômodos: o Relatório é a sala de exposição (onde mostramos as coisas bonitas), a Tabela é a despensa (onde estão os ingredientes organizados em prateleiras) e o Modelo é a planta da casa (mostra como os cômodos se ligam). Repita que "clicar nos ícones é só trocar de cômodo, a casa continua a mesma". Para arrastar campos, diga "segura, leva e solta", como arrastar um app na tela do celular. Reforce sempre: "pode explorar à vontade, nada quebra se você não salvar por cima".

## Erros comuns e como ajudar

Aluno que confunde os três ícones: peça que ele leia em voz alta o nome do cômodo a cada clique. Aluno que arrasta o campo e nada aparece: verifique se ele soltou dentro do quadro branco do Relatório, não fora. Aluno que não acha o painel Campos: ele pode ter fechado a barra à direita; mostre a setinha para reabrir. Aluno que salva com nome sem sentido ou na pasta errada: pare e refaça o Salvar como junto com ele, escolhendo a pasta combinada. Aluno ansioso com medo de estragar: lembre que sempre dá para fechar sem salvar, e o arquivo de exemplo volta ao normal.`,
  exercicios: [
    {
      titulo: `Conhecendo os três cômodos`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha o arquivo de exemplo aberto. Peça que cliquem nos três ícones da barra esquerda em ordem e falem o nome de cada tela em voz alta. Passe pela sala confirmando.`,
      atividade: `Abra o arquivo de exemplo. Clique no primeiro ícone da barra lateral esquerda e diga qual tela é. Faça o mesmo com o segundo e o terceiro ícone. Anote no caderno o nome das três telas na ordem em que aparecem.`,
      gabarito: `De cima para baixo: 1) tela de Relatório (ícone de gráfico de barras); 2) tela de Tabela ou Dados (ícone de grade); 3) tela de Modelo (ícone de caixinhas ligadas).`,
    },
    {
      titulo: `Salvando meu primeiro projeto`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor o caminho Arquivo > Salvar como antes de soltar a turma. Combine o nome da pasta de destino. Verifique se o arquivo de cada aluno terminou em .pbix.`,
      atividade: `Use o menu Arquivo no canto superior esquerdo e escolha "Salvar como". Navegue até a pasta combinada pelo professor. Dê o nome "meu-projeto-" seguido do seu primeiro nome. Confirme e verifique que o arquivo termina em .pbix.`,
      gabarito: `O aluno deve ter um arquivo na pasta combinada com nome do tipo "meu-projeto-Ana.pbix". O formato correto do projeto do Power BI é .pbix.`,
    },
    {
      titulo: `Ordenando a despensa (em dupla)`,
      tipo: `em dupla`,
      tempo: `9 minutos`,
      guiaProfessor: `Forme duplas. Um aluno opera o mouse e o outro confere. Lembre que a seta ao lado do título da coluna indica a ordem. Incentive a troca de papéis na metade do tempo.`,
      atividade: `Vão para a tela de Tabela. O primeiro da dupla clica no título de uma coluna de texto (ex.: Produto) e observa a seta aparecer. Cliquem de novo para inverter a ordem. Troquem de lugar e repitam com uma coluna de números (ex.: Quantidade). Comparem o que mudou.`,
      gabarito: `Ao clicar no título, a coluna fica em ordem crescente (A a Z ou menor para maior) e a seta aponta para cima; ao clicar de novo, fica decrescente (Z a A ou maior para menor) e a seta aponta para baixo. Os números reorganizam as linhas da menor para a maior e vice-versa.`,
    },
    {
      titulo: `Meu primeiro campo na tela`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Confirme que cada aluno está na tela de Relatório com o painel Campos visível à direita. Reforce o gesto "segura, leva e solta" dentro do quadro branco. Ajude quem soltar fora da área.`,
      atividade: `Na tela de Relatório, encontre o painel Campos à direita. Arraste o campo Produto para o quadro em branco e solte. Em seguida arraste também o campo Quantidade para o mesmo visual. Observe o que apareceu na tela.`,
      gabarito: `Surge um visual em forma de tabela mostrando a coluna Produto; ao adicionar Quantidade, aparece um número ao lado de cada produto (a soma das quantidades). O aluno percebe que arrastar campos cria visuais automaticamente.`,
    },
    {
      titulo: `Roda de conversa: a casa de três cômodos`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Reúna a turma em roda. Conduza com perguntas abertas e deixe vários alunos responderem. Anote no quadro as boas comparações que surgirem. Encerre reforçando que explorar é seguro.`,
      atividade: `Em roda, cada aluno responde: qual das três telas você achou mais fácil de entender e por quê? Para que serve cada uma usando suas próprias palavras? O que você faria se clicasse em algo errado e quisesse voltar?`,
      gabarito: `Respostas esperadas: Relatório serve para criar e mostrar gráficos; Tabela serve para ver os dados em linhas e colunas como no Excel; Modelo serve para ver e conectar as tabelas. Se clicar errado, basta fechar sem salvar ou usar Desfazer (Ctrl+Z); nada estraga de verdade.`,
    },
  ],
};
