import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Meus primeiros gráficos",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Criar os primeiros visuais no Power BI — cartão (KPI), gráfico de colunas, gráfico de pizza e tabela — escolhendo o gráfico certo para cada pergunta e formatando cores e títulos.`,
  descricao: `Depois de trazer os dados do Excel, limpar a bagunça e criar relacionamentos entre as tabelas, chegou o momento mais divertido: transformar números em imagens. Nesta aula o aluno descobre que um gráfico não é enfeite — é uma forma de responder perguntas rapidamente. Em vez de olhar centenas de linhas, ele arrasta um campo e a resposta aparece em segundos. Essa é a virada de chave do Power BI: os dados ganham forma e passam a contar uma história.

O aluno vai conhecer quatro visuais essenciais. O cartão (também chamado de KPI) mostra um único número grande e importante, como o total de vendas ou a quantidade de alunos. O gráfico de colunas compara categorias lado a lado, perfeito para responder "qual foi o maior?". O gráfico de pizza mostra como um total se divide em fatias, respondendo "quanto cada parte representa do todo?". E a tabela exibe os dados organizados em linhas e colunas, ótima para conferir números exatos.

A grande lição da aula é parar de pensar "qual gráfico é mais bonito?" e começar a pensar "qual gráfico responde melhor a minha pergunta?". O professor vai guiar essa escolha: comparar é coluna, somar um número único é cartão, dividir um total é pizza, conferir detalhes é tabela. Cada formato existe por um motivo.

Por fim, o aluno aprende que um bom visual precisa ser compreendido em poucos segundos. Para isso, ele vai formatar: trocar cores, escrever títulos claros e ajustar o tamanho. No fim da hora, cada estudante terá de três a quatro visuais funcionando com os dados já tratados e relacionados nas aulas anteriores — o esqueleto do painel que será montado na aula final.`,
  materiais: [
    `Computadores (1 por aluno) com Power BI Desktop instalado e o arquivo .pbix das aulas anteriores já aberto, com dados importados e relacionamentos prontos`,
    `Excel instalado, com a planilha de exemplo original disponível para consulta`,
    `Projetor ou TV para o professor demonstrar onde clicar na tela`,
    `Arquivo de exemplo de backup (.pbix) com os dados já tratados, para o aluno que perdeu o progresso ou faltou em aula anterior`,
    `Folha impressa "Qual gráfico para qual pergunta?" como apoio de consulta rápida na mesa do aluno`,
    `Conta Microsoft (opcional, apenas para quem quiser salvar na nuvem; o trabalho da aula é local no Power BI Desktop)`,
    `Quadro branco ou flip chart para anotar as perguntas que cada visual responde`,
  ],
  conceitosChave: [
    `Visual — qualquer elemento que mostra dados na tela do Power BI, como um gráfico, um cartão ou uma tabela.`,
    `Cartão (KPI) — visual que exibe um único número grande e importante, como o total de vendas ou a média de notas.`,
    `Gráfico de colunas — visual de barras em pé que compara valores de categorias diferentes lado a lado.`,
    `Gráfico de pizza — visual circular que mostra como um total se divide em fatias, ou seja, a proporção de cada parte.`,
    `Eixo — o campo que define as categorias do gráfico (o "agrupamento"); fica no eixo X das colunas, por exemplo a coluna Produto.`,
    `Valor — o campo numérico que o gráfico mede e soma, como Quantidade ou Total em reais; é o que dá a altura das colunas.`,
    `Painel de Visualizações — área à direita da tela onde o aluno escolhe o tipo de gráfico e arrasta os campos para Eixo e Valores.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Power BI. Precisa apenas dominar quatro visuais e uma ideia central: cada gráfico responde a uma pergunta diferente. Antes da aula, abra o arquivo .pbix da turma e confirme que os dados e relacionamentos das aulas anteriores estão lá. À direita da tela existem dois painéis importantes: o painel "Visualizações" (os ícones dos gráficos) e o painel "Dados" (a lista de tabelas e campos). O segredo do Power BI é arrastar campos do painel Dados para dentro das caixas "Eixo" e "Valores" do visual selecionado. Decore esta regra simples para repassar aos alunos: comparar categorias é coluna, mostrar um número único é cartão, dividir um total é pizza, ver detalhes exatos é tabela.

## Passo a passo da aula (ritmo 10 / 15 / 25 / 10)

Aquecimento (10 min): pergunte à turma "se eu quisesse saber qual produto vendeu mais, eu olharia 500 linhas uma por uma?". Mostre no projetor a tabela crua e diga que hoje vamos transformá-la em imagens que respondem na hora. Abra rapidamente o arquivo e revise onde estão os painéis Visualizações e Dados.

Conteúdo novo guiado (15 min): demonstre os quatro visuais, um de cada vez, no projetor. Para o cartão: clique numa área vazia da tela, depois clique no ícone "Cartão" no painel Visualizações; arraste um campo numérico (por exemplo Total) para a caixa "Campos". Para o gráfico de colunas: clique em área vazia, clique no ícone "Colunas agrupadas"; arraste Produto para "Eixo X" e Total para "Eixo Y" (Valores). Para a pizza: ícone "Pizza", arraste Categoria para "Legenda" e Total para "Valores". Para a tabela: ícone "Tabela", marque as caixinhas dos campos desejados. Mostre como formatar clicando no ícone de pincel (Formatar): troque a cor, ative o título e digite um nome claro.

Mão na massa (25 min): cada aluno cria de três a quatro visuais com os próprios dados. Circule pela sala. Peça que comecem sempre clicando em área vazia antes de criar um visual novo, senão eles substituem o anterior por engano. Oriente um por vez: primeiro um cartão, depois um gráfico de colunas, depois pizza, depois tabela. Lembre-os de dar um título claro a cada visual.

Desafio e compartilhar (10 min): proponha "crie um visual que responda a uma pergunta que NINGUÉM da turma pensou ainda". Convide dois ou três alunos a apresentar a tela no projetor, dizendo qual pergunta o gráfico responde.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do videogame: "Eixo é onde fica a lista de personagens; Valor é a pontuação de cada um." Diga que o cartão é como o placar de moedas no canto da tela — um número grande e sozinho. A pizza é a pizza de verdade: o todo dividido em fatias. As colunas são uma corrida de quem é mais alto. Reforce sempre a pergunta antes do gráfico: "primeiro decida o que você quer saber, depois escolha o formato". Evite o termo "agregação"; diga "o Power BI soma sozinho para você".

## Erros comuns e como ajudar

O erro mais comum é o aluno criar um visual em cima do outro: ensine a clicar primeiro numa área vazia. Outro: arrastar o campo para a caixa errada (categoria em Valores ou número em Eixo) — mostre que texto vai no Eixo/Legenda e número vai em Valores. Se a pizza ficar com fatias demais e ilegível, sugira trocar por colunas. Se o número do cartão aparecer estranho (como contagem em vez de soma), clique na setinha ao lado do campo em Valores e confirme "Soma". Se o aluno reclamar que "não aparece nada", confirme se ele selecionou o visual antes de arrastar o campo. Tranquilize: errar e desfazer com Ctrl+Z faz parte; nada quebra de verdade.`,
  exercicios: [
    {
      titulo: `Meu primeiro cartão`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Guie a turma toda ao mesmo tempo, passo a passo no projetor. Garanta que todos cliquem em área vazia antes de criar o cartão. Verifique se o campo arrastado é numérico e se o resultado mostra "Soma".`,
      atividade: `Crie um visual do tipo Cartão que mostre o total geral de vendas (ou a quantidade total de itens). Passos: 1) clique numa área vazia do relatório; 2) no painel Visualizações, clique no ícone Cartão; 3) arraste o campo Total (ou Quantidade) para a caixa de campos do cartão; 4) confira se aparece um número grande na tela.`,
      gabarito: `O aluno deve ter um cartão exibindo um único número grande correspondente à soma do campo escolhido. Por exemplo, se a coluna Total somar R$ 12.500, o cartão mostra "12.500" ou "12,5 mil". Se aparecer a quantidade de linhas em vez da soma, o aluno arrastou um campo de texto ou a medida está como Contagem — corrigir clicando na setinha do campo em Valores e escolhendo Soma.`,
    },
    {
      titulo: `Colunas para comparar`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Reforce a diferença entre Eixo (categoria, texto) e Valores (número). Circule conferindo se cada aluno colocou o campo certo em cada caixa. Lembre de clicar em área vazia antes de criar o novo visual.`,
      atividade: `Crie um gráfico de Colunas agrupadas que compare o total de vendas por produto (ou por categoria). Passos: 1) clique em área vazia; 2) clique no ícone Colunas agrupadas no painel Visualizações; 3) arraste Produto para a caixa Eixo X; 4) arraste Total para a caixa Eixo Y (Valores); 5) ative um título claro pelo ícone de pincel (Formatar), por exemplo "Vendas por produto".`,
      gabarito: `O aluno deve ter um gráfico de colunas com uma coluna para cada produto, alturas diferentes conforme as vendas, e um título escrito. A coluna mais alta corresponde ao produto que mais vendeu. Espera-se que o aluno identifique corretamente, lendo o gráfico, qual produto teve o maior valor — essa é a pergunta que o gráfico de colunas responde.`,
    },
    {
      titulo: `Pizza ou coluna? Decidam juntos`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Deixe que discutam antes de criar o visual. O objetivo é o raciocínio, não só o clique. Ajude duplas que travarem perguntando "vocês querem comparar tamanhos ou ver fatias de um todo?". Aceite respostas justificadas.`,
      atividade: `Em dupla, escolham UMA pergunta sobre os dados (ex.: "quanto cada categoria representa do total de vendas?"). Decidam juntos se a melhor resposta é um gráfico de pizza ou de colunas, e justifiquem a escolha em uma frase. Depois criem o visual escolhido no Power BI: para pizza, ícone Pizza, Categoria na Legenda e Total em Valores; para colunas, como no exercício anterior. Anotem a pergunta e a justificativa.`,
      gabarito: `Resposta esperada: se a pergunta é sobre proporção/parte do todo ("quanto cada parte representa"), a pizza é adequada, desde que haja poucas categorias (até cerca de 5 fatias). Se a pergunta é "qual é o maior" ou há muitas categorias, colunas são melhores. Exemplo válido de justificativa: "Escolhemos pizza porque queríamos ver a fatia de cada categoria no total, e só temos quatro categorias." O visual criado deve corresponder à escolha justificada.`,
    },
    {
      titulo: `Tabela e formatação caprichada`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Este desafio junta criar a tabela e formatar bem. Incentive a personalização (cores, título). Mostre o ícone de pincel (Formatar) para quem não achar. Valorize visuais que se entendem em poucos segundos.`,
      atividade: `Crie uma Tabela com pelo menos três campos (ex.: Produto, Quantidade e Total) marcando as caixinhas no painel Dados com o visual Tabela selecionado. Em seguida, formate TODOS os seus visuais da aula: 1) dê um título claro a cada um pelo ícone de pincel; 2) troque a cor das colunas/fatias para uma cor de sua preferência; 3) confira se qualquer pessoa entenderia cada visual sem você explicar.`,
      gabarito: `O aluno deve ter uma tabela mostrando linhas com os campos escolhidos e seus valores corretos (a coluna Total deve bater com a soma vista no cartão e no gráfico de colunas). Todos os visuais devem ter títulos escritos e ao menos uma cor personalizada. Critério de sucesso: um colega que nunca viu o relatório consegue dizer, só de olhar, o que cada visual mostra.`,
    },
    {
      titulo: `Roda de conversa: que história os dados contam?`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Reúna a turma em roda (ou em volta do projetor). Conduza com perguntas abertas, sem certo ou errado rígido. O foco é o aluno conectar gráfico e pergunta, e perceber que visual diferente conta história diferente. Anote no quadro as melhores observações.`,
      atividade: `Cada aluno mostra UM dos seus visuais e responde em voz alta: "Que pergunta este gráfico responde?" e "Por que escolhi este formato e não outro?". A turma comenta se trocaria por outro tipo de visual e por quê.`,
      gabarito: `Não há resposta única, mas toda resposta válida deve ligar o visual a uma pergunta concreta e justificar o formato. Exemplos aceitáveis: "Meu cartão responde quanto vendemos no total, por isso usei um número único"; "Minhas colunas respondem qual produto vendeu mais, por isso comparei lado a lado"; "Minha pizza mostra a fatia de cada categoria no total." Considere ótima a participação do aluno que percebe que mudar o tipo de gráfico mudaria a pergunta respondida.`,
    },
  ],
};
