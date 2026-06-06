import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "SE e filtros: decisões inteligentes",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Usar a função SE para que a planilha tome decisões sozinha (aprovado ou reprovado, em estoque ou esgotado) e combinar com filtros para organizar os dados que aparecem na tela.`,
  descricao: `Na aula passada o aluno conheceu o PROCX, o detetive que busca uma informação dentro de uma tabela. Agora ele dá um passo enorme: a planilha vai parar de só guardar números e vai começar a pensar. A estrela da aula é a função SE. Ela funciona como uma pergunta de sim ou não: "a nota é maior ou igual a 6?". Se a resposta for sim, a célula escreve uma coisa; se for não, escreve outra. É a primeira vez que o aluno programa uma decisão, mesmo sem escrever código ainda. Esse raciocínio de "se isto, então aquilo" é exatamente o que ele vai reencontrar no Apps Script nas próximas semanas.

A função SE tem três partes dentro dos parênteses, sempre separadas por ponto e vírgula: a condição (o teste), o que fazer se for verdadeiro e o que fazer se for falso. Por exemplo, =SE(B2>=6; "Aprovado"; "Reprovado") olha a célula B2 e devolve a palavra certa automaticamente. O mais mágico é que, ao mudar o número digitado em B2, o resultado muda na hora. A planilha reage sozinha. O aluno percebe que escreveu uma regra uma única vez e ela passa a valer para sempre.

A segunda ferramenta da aula é o filtro. Depois que a planilha já sabe classificar as linhas (aprovado ou reprovado, em estoque ou esgotado), o filtro permite mostrar apenas as linhas que interessam num dado momento. É como ter uma lista gigante e poder dizer "agora só quero ver os reprovados" sem apagar nada. Os outros dados continuam guardados, apenas escondidos. SE classifica; o filtro organiza o que aparece.

Ao final, cada aluno monta uma mini planilha que reage sozinha aos valores digitados: uma lista de alunos com notas que se marcam como aprovado ou reprovado, ou um pequeno estoque que muda entre "Em estoque" e "Esgotado". Essa planilha viva é a base que será automatizada com Apps Script nas aulas seguintes do mês, cujo entregável é uma automação simples funcionando.`,
  materiais: [
    `Computadores com o Google Planilhas aberto no navegador (e o editor de Apps Script disponível pelo menu Extensões), um por aluno`,
    `Conta Google de cada aluno já conectada, com acesso ao Google Drive`,
    `Projetor ou tela grande para o professor demonstrar cada fórmula passo a passo`,
    `Arquivo de exemplo no Google Drive: uma planilha "Notas da turma" com nomes e notas já preenchidos`,
    `Segundo arquivo de exemplo: uma planilha "Estoque da lojinha" com produtos e quantidades`,
    `Folha impressa ou slide com a estrutura da função SE (condição; valor se verdadeiro; valor se falso)`,
    `Conexão com a internet, já que o Google Planilhas funciona online`,
  ],
  conceitosChave: [
    `Função SE — fórmula que faz uma pergunta de sim ou não e devolve um resultado diferente para cada resposta.`,
    `Condição — o teste lógico que a função SE verifica, como B2>=6 (a nota é maior ou igual a seis?).`,
    `Verdadeiro e falso — os dois caminhos possíveis: o que a célula mostra se a condição for atendida e o que mostra se não for.`,
    `Operador de comparação — sinais usados no teste, como maior ou igual (>=), menor (<) e igual (=).`,
    `Filtro — recurso que esconde temporariamente as linhas que não interessam, mostrando só as escolhidas, sem apagar nada.`,
    `Ponto e vírgula — sinal que separa as três partes da função SE dentro dos parênteses no Google Planilhas.`,
    `Planilha que reage — quando o resultado muda sozinho assim que o aluno digita um novo valor, sem refazer a fórmula.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em planilhas. Precisa dominar uma única função: a SE. Ela tem três partes dentro dos parênteses, sempre nesta ordem e separadas por ponto e vírgula: a condição (o teste), o valor se verdadeiro e o valor se falso. Decore este modelo: =SE(B2>=6; "Aprovado"; "Reprovado"). Faça a planilha de exemplo inteira sozinho uma vez antes da aula. Assim você saberá onde cada menu fica e não travará na frente da turma.

Três ideias guiam a aula: condição, decisão e filtro. A condição é a pergunta. A decisão é a função SE escolhendo entre duas respostas. O filtro é mostrar só o que interessa. Repita que a planilha não inventa nada: ela segue a regra que o aluno escreveu, e por isso reage sozinha quando o valor muda.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min). Abra a planilha de exemplo "Notas da turma" no projetor. Relembre o PROCX da Aula 1 e pergunte: "e se a planilha pudesse decidir sozinha quem passou?". Faça uma votação de mãos: nota 7 é aprovado? E nota 4? Mostre que todos usam a mesma regra na cabeça. Hoje vamos ensinar essa regra para a planilha.

Conteúdo novo guiado (15 min). Na planilha, clique numa célula vazia ao lado da primeira nota (por exemplo C2). Digite o sinal de igual e a função, devagar, narrando cada parte: =SE(B2>=6; "Aprovado"; "Reprovado"). Pressione Enter. Explique no projetor: B2>=6 é a condição; "Aprovado" é o que aparece se for verdadeiro; "Reprovado" é o falso. Mude a nota em B2 ao vivo e mostre o resultado virando sozinho. Depois ensine a copiar a fórmula para baixo: clique na célula C2, leve o cursor ao quadradinho do canto inferior direito (a alça) e arraste até o fim da lista, ou use Ctrl+C e cole nas demais. Por fim, mostre o filtro: selecione o intervalo, vá no menu Dados e clique em Criar um filtro; toque no ícone de funil que aparece no cabeçalho da coluna de resultado e marque só "Reprovado".

Mão na massa (25 min). Cada aluno escreve a fórmula SE na planilha "Notas da turma", copia para todas as linhas e cria um filtro para ver só os reprovados. Quem terminar abre a "Estoque da lojinha" e faz =SE(B2>0; "Em estoque"; "Esgotado"). Circule pela sala. Confira o ponto e vírgula, as aspas nas palavras e se a fórmula foi mesmo copiada para baixo.

Desafio e compartilhar (10 min). Proponha trocar a nota de corte de 6 para 7, ou marcar "Comprar mais" quando a quantidade for menor que 3. Convide dois ou três alunos a mostrar a tela e explicar a regra que escreveram. Elogie quem souber dizer a condição em voz alta.

## Como explicar de forma clara (linguagem para a idade)

Compare a função SE com uma porta com dois caminhos: a condição é a placa na entrada, e a planilha vai por um lado se for verdade e por outro se for mentira. Use exemplos da vida deles: "se a bateria do celular estiver abaixo de 20 por cento, aparece o aviso vermelho; senão, fica normal". Diga que o ponto e vírgula é a vírgula da planilha: separa as três partes. Lembre que palavras precisam de aspas, mas números não. E mostre que o filtro é como o funil de busca do feed: tudo continua lá, só escondemos o que não queremos ver agora.

## Erros comuns e como ajudar

O erro mais comum é usar vírgula no lugar do ponto e vírgula; no Google Planilhas em português o separador é ponto e vírgula. Outro clássico é esquecer as aspas nas palavras: sem aspas, "Aprovado" vira um erro. Há quem digite a fórmula sem começar com o sinal de igual, e a célula mostra só o texto. Cuidado também com a condição invertida (usar menor quando queria maior ou igual): peça para o aluno ler a regra em voz alta antes de conferir. Se a fórmula não desce para as outras linhas, mostre de novo a alça de preenchimento no canto da célula. Por fim, se o filtro esconder tudo, é porque nenhuma linha bate com a opção marcada; reabra o funil e ajuste as caixas. Lembre a turma de que a planilha fica salva sozinha no Drive.`,
  exercicios: [
    {
      titulo: `Minha primeira decisão`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Garanta que cada aluno esteja com a planilha "Notas da turma" aberta e clique numa célula ao lado da primeira nota. Circule conferindo o sinal de igual no começo e o ponto e vírgula.`,
      atividade: `Na célula ao lado da primeira nota (por exemplo C2), digite =SE(B2>=6; "Aprovado"; "Reprovado") e pressione Enter. Depois mude o número da nota em B2 e veja o resultado mudar sozinho.`,
      gabarito: `A célula deve mostrar "Aprovado" quando a nota for 6 ou mais e "Reprovado" quando for menor que 6. Ao trocar a nota em B2, o texto muda na hora. A fórmula correta é =SE(B2>=6; "Aprovado"; "Reprovado"), com sinal de igual no início, ponto e vírgula separando as partes e aspas nas palavras.`,
    },
    {
      titulo: `Decisão para a turma toda`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Mostre de novo a alça de preenchimento (o quadradinho no canto inferior direito da célula). O erro comum é arrastar errado ou copiar só metade da lista.`,
      atividade: `Clique na célula com a sua fórmula SE. Leve o cursor ao quadradinho do canto inferior direito e arraste até a última linha de alunos, ou use Ctrl+C e cole nas demais células. Confira se cada linha mostra o resultado certo.`,
      gabarito: `Todas as linhas devem ter a função SE preenchida, e cada aluno aparece como "Aprovado" ou "Reprovado" conforme a própria nota. A fórmula se ajusta sozinha em cada linha (B3, B4, B5 e assim por diante). Nenhuma célula fica vazia e nenhuma mostra erro.`,
    },
    {
      titulo: `Só os reprovados, por favor`,
      tipo: `desafio`,
      tempo: `6 min`,
      guiaProfessor: `Acompanhe a criação do filtro pelo menu Dados. Reforce que filtrar não apaga: as linhas voltam ao desmarcar. O erro clássico é confundir filtro com excluir.`,
      atividade: `Selecione a tabela, vá ao menu Dados e clique em Criar um filtro. No cabeçalho da coluna de resultado, toque no ícone de funil, desmarque "Aprovado" e deixe só "Reprovado" marcado. Veja a lista mostrar apenas os reprovados.`,
      gabarito: `A planilha deve exibir somente as linhas com "Reprovado"; as de "Aprovado" ficam escondidas, não apagadas. Ao reabrir o funil e marcar "Aprovado" de novo, todas as linhas voltam. O aluno deve perceber que o filtro organiza a visão sem perder dados.`,
    },
    {
      titulo: `Conferindo a regra em dupla`,
      tipo: `em dupla`,
      tempo: `7 min`,
      guiaProfessor: `Forme duplas e oriente que cada um leia em voz alta a condição da fórmula do colega antes de conferir o resultado. Dê uma pergunta-guia: "essa regra faz sentido?".`,
      atividade: `Troque de computador com o colega. Leia a fórmula SE dele em voz alta, dizendo a condição (por exemplo, "se a nota for maior ou igual a 6"). Confira se o resultado de cada linha está coerente e aponte um erro ou uma melhoria, se houver.`,
      gabarito: `Cada dupla deve identificar corretamente a condição usada e dizer se ela corresponde aos resultados na tela. Erros possíveis a detectar: vírgula no lugar do ponto e vírgula, falta de aspas, sinal de comparação trocado (menor em vez de maior ou igual) ou fórmula não copiada até o fim. O objetivo é o aluno ler e entender uma regra, não só escrevê-la.`,
    },
    {
      titulo: `Estoque que se vira sozinho`,
      tipo: `projeto curto`,
      tempo: `8 min`,
      guiaProfessor: `Este é o fechamento prático. Abra a planilha "Estoque da lojinha". Verifique se o aluno escreveu uma nova função SE com a própria condição e se a planilha reage ao mudar a quantidade. Convide alguns a compartilhar a tela.`,
      atividade: `Na planilha "Estoque da lojinha", escreva ao lado da quantidade do primeiro produto a fórmula =SE(B2>0; "Em estoque"; "Esgotado") e copie para baixo. Como desafio, crie outra coluna que mostre "Comprar mais" quando a quantidade for menor que 3, usando =SE(B2<3; "Comprar mais"; "OK"). Mude algumas quantidades e veja a planilha reagir.`,
      gabarito: `A coluna de situação deve mostrar "Em estoque" quando a quantidade for maior que zero e "Esgotado" quando for zero. A coluna de alerta deve mostrar "Comprar mais" quando a quantidade for menor que 3 e "OK" nos demais casos. Ao trocar qualquer quantidade, os dois resultados mudam sozinhos. As fórmulas corretas são =SE(B2>0; "Em estoque"; "Esgotado") e =SE(B2<3; "Comprar mais"; "OK"), com ponto e vírgula e aspas nas palavras.`,
    },
  ],
};
