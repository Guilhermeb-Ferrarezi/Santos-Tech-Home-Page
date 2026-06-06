import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Cabeçalho e rodapé do documento",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Adicionar cabeçalho e rodapé a um documento do Word, inserindo título no topo, número de página e data no rodapé, de modo que essas informações apareçam automaticamente em todas as páginas.`,
  descricao: `Todo documento profissional tem duas faixas especiais que os alunos talvez nunca tenham notado: o cabeçalho, a área no alto de cada página, e o rodapé, a área embaixo. É ali que ficam as informações que se repetem em folha após folha, como o título do trabalho, o nome do autor, a data e o número da página. A grande sacada é que você digita uma vez e o Word espalha aquilo em todas as páginas sozinho. Se o documento crescer de duas para dez páginas, o cabeçalho e o rodapé continuam lá, certinhos, sem trabalho extra.

Nesta aula introdutória, o aluno descobre para que servem essas faixas e como ativá-las. No Word, tudo começa na aba "Inserir", no grupo "Cabeçalho e Rodapé", onde existem três botões: "Cabeçalho", "Rodapé" e "Número de Página". Ao clicar em "Cabeçalho", o Word abre a área do topo e mostra uma aba nova e temporária chamada "Cabeçalho e Rodapé" (ou "Design"), com ferramentas próprias. Enquanto essa área está aberta, o texto normal do documento fica esmaecido (mais clarinho), sinal de que você está trabalhando na faixa, e não no corpo do texto.

O número de página é o recurso mais útil e o que mais encanta a turma. Em vez de digitar "1", "2", "3" à mão (o que daria errado assim que o texto mudasse de lugar), o aluno aprende a usar o botão "Número de Página", que insere um contador automático: o Word numera tudo sozinho, na ordem, em cada página. A data segue a mesma lógica: pelo botão "Data e Hora" dá para inserir a data atual, que pode até se atualizar sozinha sempre que o arquivo for aberto.

Ao final, cada aluno terá um documento com seu título lá no alto, repetido em toda página, e com a data e o número da página no rodapé. É um salto de qualidade enorme: o trabalho deixa de parecer um texto solto e passa a ter cara de documento de verdade, pronto para ser entregue ou impresso. Essa aula prepara o terreno para a Aula 6, quando o documento será preparado para impressão.`,
  materiais: [
    `Computador para cada aluno com o Microsoft Word instalado e aberto`,
    `Projetor ou TV para o professor demonstrar cada clique na tela grande`,
    `Um documento de exemplo com pelo menos duas páginas de texto (pode ser um texto de aulas anteriores), para que o cabeçalho e o rodapé apareçam repetidos`,
    `Conta Microsoft da escola ativa para cada aluno, caso usem o Word com salvamento na nuvem (OneDrive)`,
    `Um modelo impresso (ou no projetor) de um documento real com cabeçalho e rodapé bem feitos, como exemplo a imitar`,
    `Pen drive ou pasta na rede para salvar os arquivos, caso não usem a nuvem`,
  ],
  conceitosChave: [
    `Cabeçalho — faixa no topo de cada página onde fica informação que se repete, como o título do documento ou o nome do autor.`,
    `Rodapé — faixa na parte de baixo de cada página, usada normalmente para número de página, data e fonte do documento.`,
    `Número de página automático — contador que o Word insere e atualiza sozinho, numerando todas as páginas na ordem certa.`,
    `Campo de data — informação de data inserida pelo Word que pode se atualizar sozinha sempre que o documento é aberto.`,
    `Aba Inserir — aba da Faixa de Opções onde ficam os botões "Cabeçalho", "Rodapé" e "Número de Página".`,
    `Área esmaecida — quando o cabeçalho ou rodapé está aberto, o texto do corpo fica mais claro, mostrando que você edita a faixa e não o texto principal.`,
    `Fechar Cabeçalho e Rodapé — botão que sai da área da faixa e volta a editar o texto normal do documento.`,
  ],
  treinamento: `## O que o professor precisa saber

Cabeçalho e rodapé são duas faixas que o Word repete automaticamente em todas as páginas. Antes da aula, abra um documento com pelo menos duas páginas (se o seu texto for curto, copie e cole até passar de uma página) para que os alunos enxerguem a repetição acontecer de verdade. Faça este teste rápido: vá na aba "Inserir", clique em "Cabeçalho", escolha "Em Branco", digite um título e role a página para baixo. Veja o mesmo título aparecer na página seguinte sem você digitar de novo. Esse "milagre" é o que vende a aula.

Memorize os três botões do grupo "Cabeçalho e Rodapé", todos na aba "Inserir": "Cabeçalho", "Rodapé" e "Número de Página". Saiba também que, ao abrir qualquer faixa, surge uma aba temporária no topo (chamada "Cabeçalho e Rodapé" ou "Design") com o botão "Data e Hora", o botão "Número de Página" e o importante "Fechar Cabeçalho e Rodapé". Para sair da faixa, basta clicar nesse botão de fechar ou dar um duplo clique no meio do texto normal.

## Passo a passo da aula

10 min — Aquecimento. Mostre no projetor um documento de duas páginas SEM cabeçalho e rodapé. Pergunte: "Se eu quiser que o título apareça no alto de toda página, eu digito em cada uma?" Deixe alguém responder que sim e então mostre como seria trabalhoso. Crie o suspense de que o Word faz isso sozinho.

15 min — Conteúdo novo guiado. Clique na aba "Inserir". No grupo "Cabeçalho e Rodapé", clique em "Cabeçalho" e escolha o modelo "Em Branco". Note que o texto do corpo ficou esmaecido. Digite o título do documento. Role para baixo e mostre o título repetido. Agora clique em "Rodapé", escolha "Em Branco" e, na aba temporária do topo, clique em "Número de Página", depois em "Fim da Página" e escolha um formato. Ainda no rodapé, clique em "Data e Hora", escolha um formato e confirme. Por fim, clique em "Fechar Cabeçalho e Rodapé".

25 min — Mão na massa. Cada aluno abre seu documento de duas páginas. Pelo caminho "Inserir" maior que "Cabeçalho" maior que "Em Branco", digita o título do trabalho. Depois, em "Inserir" maior que "Rodapé" maior que "Em Branco", insere o número de página pelo botão "Número de Página" e a data pelo botão "Data e Hora". Fecha a faixa e confere se tudo se repete nas duas páginas. Circule pela sala conferindo o número de página automático (não digitado à mão).

10 min — Desafio e compartilhar. Lance o desafio: colocar o próprio nome no cabeçalho, ao lado do título, e a data atualizável no rodapé. Cada aluno mostra o documento ao colega ao lado, que confere se o número de página muda de uma folha para a outra. Encerre projetando um ou dois trabalhos para a turma ver o resultado.

## Como explicar de forma clara

Compare o cabeçalho e o rodapé com o uniforme da escola: todos os alunos usam o mesmo, então não precisa decidir folha por folha. Diga: "Você veste o documento uma vez e todas as páginas saem iguais." Para o número de página, use a ideia da fila do recreio: ninguém precisa gritar o próprio número, a fila se organiza sozinha; se alguém entra no meio, todos se ajustam. É exatamente o que o número automático faz quando o texto cresce.

Reforce o sinal visual: "Quando o texto fica clarinho, você está dentro da faixa. Quando ele volta a ficar escuro, você saiu." Esse detalhe evita muita confusão.

## Erros comuns e como ajudar

O erro mais comum é digitar os números das páginas à mão. Mostre que, ao apagar um parágrafo, a numeração manual quebra, enquanto a automática se ajusta. Sempre use o botão "Número de Página". O segundo erro é tentar digitar o cabeçalho no corpo do texto: o aluno não percebeu que precisa abrir a faixa primeiro pela aba "Inserir". O terceiro é ficar "preso" na faixa e não conseguir voltar a escrever o texto normal; ensine o botão "Fechar Cabeçalho e Rodapé" ou o duplo clique no meio da página. O quarto é o documento ter só uma página, então o aluno não vê a repetição; tenha um arquivo de duas páginas pronto para emprestar.`,
  exercicios: [
    {
      titulo: `Meu primeiro cabeçalho`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada aluno esteja com um documento de pelo menos duas páginas aberto. Mostre no projetor o caminho "Inserir" maior que "Cabeçalho" maior que "Em Branco". O foco é apenas inserir um título no topo e perceber que ele se repete.`,
      atividade: `Abra o seu documento. Clique na aba "Inserir", depois em "Cabeçalho" e escolha "Em Branco". Digite o título do seu trabalho (por exemplo, "Trabalho de História - Egito Antigo"). Role a página para baixo e veja o título aparecer também na segunda página. Clique em "Fechar Cabeçalho e Rodapé".`,
      gabarito: `O documento deve ter o título escrito na faixa do topo, repetido igual na primeira e na segunda página, sem o aluno ter digitado duas vezes. Ao rolar para baixo, o mesmo título aparece em toda página. O texto do corpo deve estar normal (escuro), sinal de que a faixa foi fechada.`,
    },
    {
      titulo: `Número de página automático`,
      tipo: `Desafio individual`,
      tempo: `10 min`,
      guiaProfessor: `Reforce no projetor que o número deve vir do botão "Número de Página", e não ser digitado. Mostre o caminho "Inserir" maior que "Número de Página" maior que "Fim da Página". Verifique aluno por aluno se a página 1 mostra 1 e a página 2 mostra 2.`,
      atividade: `No seu documento, clique na aba "Inserir" e depois em "Número de Página". Escolha "Fim da Página" e selecione um formato (por exemplo, número centralizado). Feche a faixa pelo botão "Fechar Cabeçalho e Rodapé". Confira: a primeira página mostra 1 e a segunda mostra 2.`,
      gabarito: `O rodapé deve exibir o número da página de forma automática: 1 na primeira folha e 2 na segunda. Para confirmar que é automático, o aluno pode apagar um parágrafo e ver que a numeração continua correta. Não deve haver número digitado à mão.`,
    },
    {
      titulo: `Cabeçalho ou rodapé?`,
      tipo: `Roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Conduza a conversa mostrando exemplos reais no projetor (uma prova da escola, um livro, um boletim). Peça que a turma aponte o que está no topo e o que está embaixo. Corrija na hora quem confundir as duas faixas.`,
      atividade: `Em roda, respondam juntos: (a) Qual é a diferença entre cabeçalho e rodapé? (b) Onde costuma ficar o número da página, no topo ou embaixo? (c) Que informação faz sentido repetir em todas as páginas de um trabalho da escola? Cada aluno dá um exemplo de algo que colocaria no cabeçalho.`,
      gabarito: `Respostas esperadas: (a) o cabeçalho fica no topo da página e o rodapé fica embaixo. (b) o número da página costuma ficar no rodapé (embaixo). (c) informações que se repetem, como o título do trabalho, o nome do aluno, a turma ou a data. Exemplos válidos de cabeçalho: título do trabalho, nome do autor, nome da matéria.`,
    },
    {
      titulo: `Data e nome em dupla`,
      tipo: `Atividade em dupla`,
      tempo: `15 min`,
      guiaProfessor: `Forme duplas. Cada aluno acrescenta o próprio nome ao cabeçalho (ao lado do título) e a data ao rodapé, pelo botão "Data e Hora". Os pares conferem o trabalho um do outro. Mostre como marcar "Atualizar automaticamente" na janela de data.`,
      atividade: `Com o seu par: 1. Abra o cabeçalho e escreva o seu nome ao lado do título. 2. Abra o rodapé e clique em "Data e Hora" (na aba do topo), escolha um formato e marque "Atualizar automaticamente". 3. Feche a faixa. 4. Troque de lugar com o par e confira no documento dele se há nome no cabeçalho e data no rodapé, repetidos em todas as páginas.`,
      gabarito: `Cada documento deve ter, no cabeçalho, o título mais o nome do aluno, e no rodapé, a data e o número da página, tudo repetido em todas as páginas. O par confirma em voz alta que encontrou esses quatro elementos. A data deve ter sido inserida pelo botão "Data e Hora", não digitada à mão.`,
    },
    {
      titulo: `Documento com cara profissional`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Este é o fechamento. Cada aluno monta um cabeçalho e rodapé completos no próprio trabalho e o deixa pronto para entrega. Antes de encerrar, peça que rolem o documento inteiro para conferir que tudo se repete. Projete um ou dois resultados para a turma.`,
      atividade: `Deixe o seu documento com cara profissional: 1. No cabeçalho, coloque o título do trabalho e o seu nome. 2. No rodapé, insira a data (pelo botão "Data e Hora") e o número de página automático. 3. Feche a faixa e role o documento inteiro do começo ao fim. 4. Confira que cabeçalho e rodapé aparecem iguais em todas as páginas e salve o arquivo.`,
      gabarito: `O documento final deve apresentar, em todas as páginas: no cabeçalho, título e nome do aluno; no rodapé, data e número de página automático. Ao rolar do início ao fim, nada deve estar faltando ou diferente entre as páginas. O número de página deve ser automático (correto em cada folha) e o arquivo deve estar salvo.`,
    },
  ],
};
