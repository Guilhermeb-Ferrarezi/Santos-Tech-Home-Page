import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Montando a Planilha Automatizada",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Unir o fluxo de macros, o cadastro e o tratamento de erros num único arquivo organizado e com aparência de sistema profissional.`,
  descricao: `Esta é a aula da montagem final. Durante o mês inteiro, o aluno construiu peças separadas: um fluxo que conecta várias macros, um cadastro que grava dados na planilha com VBA e um código que se protege quando algo dá errado. Hoje essas peças deixam de ser pedaços soltos e viram um produto só. O aluno abre o arquivo do mini-sistema e organiza tudo: as abas na ordem certa, os botões com nomes claros, as cores combinando e a aba de relatório pronta para mostrar resultados.

A ideia central é a de integração. Um sistema de verdade não é um monte de macros jogadas na planilha; é um conjunto de partes que conversam entre si e que qualquer pessoa consegue usar sem precisar abrir o editor de código. Por isso, a aula gasta tempo no acabamento: renomear botões para que digam exatamente o que fazem, escolher uma paleta de cores agradável, esconder colunas técnicas e deixar a tela inicial limpa e convidativa.

O professor conduz o aluno a olhar o próprio trabalho com olhos de usuário, e não de programador. A pergunta-guia é simples: se eu entregasse essa planilha para minha mãe ou para um colega, ele saberia usar sozinho? Esse exercício de empatia transforma um exercício escolar num entregável que dá orgulho de mostrar.

Ao final, o aluno tem em mãos a versão quase pronta da Planilha Automatizada, o entregável do mês. A próxima aula será de ensaio e demonstração; esta aula garante que o sistema esteja inteiro, bonito e funcionando antes do grande dia.`,
  materiais: [
    `Computadores com Microsoft Excel instalado e a guia Desenvolvedor habilitada (Arquivo, Opções, Personalizar Faixa de Opções, marcar Desenvolvedor)`,
    `Editor do VBA acessível pelo atalho Alt + F11 em cada máquina`,
    `Projetor ou tela compartilhada para o professor demonstrar passo a passo`,
    `Arquivo de exemplo do mini-sistema das aulas anteriores (cadastro, fluxo de macros e tratamento de erros já prontos)`,
    `Modelo pronto de uma planilha bem acabada, para servir de referência visual de um sistema profissional`,
    `Folha impressa ou slide com a checklist de acabamento (nomes de botões, cores, aba de relatório, salvar como .xlsm)`,
    `Pen drive ou pasta na nuvem para cada aluno salvar uma cópia de segurança do arquivo`,
  ],
  conceitosChave: [
    `Integração — juntar peças que funcionavam separadas (fluxo, cadastro e tratamento de erros) num único arquivo que trabalha como um só sistema.`,
    `Mini-sistema — planilha com botões e macros que executam tarefas completas sem o usuário precisar abrir o código.`,
    `Botão de macro — retângulo clicável na planilha que dispara uma macro; pode ser renomeado clicando com o botão direito e escolhendo Editar Texto.`,
    `Aba de relatório — planilha de saída onde os dados cadastrados aparecem organizados, geralmente com totais ou um gráfico simples.`,
    `Formatação condicional — recurso que muda a cor de uma célula automaticamente conforme o valor, deixando o relatório mais fácil de ler.`,
    `Interface — tudo o que o usuário vê e usa: nomes, cores, botões e mensagens; é o que faz a planilha parecer um sistema de verdade.`,
    `Arquivo .xlsm — formato do Excel que guarda macros; salvar nele garante que o código não se perca ao fechar o arquivo.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje o aluno não escreve macros novas; ele organiza e dá acabamento ao que já existe. Antes da aula, abra o arquivo do mini-sistema e confirme que três partes funcionam: o fluxo que chama várias macros em sequência, o botão de cadastro que grava uma linha na planilha e o tratamento de erros com a estrutura On Error. Teste cada botão uma vez. Se algo falhar, anote para resolver junto com a turma, pois isso vira aprendizado real. Lembre-se: o arquivo precisa ser salvo como Pasta de Trabalho Habilitada para Macros, com extensão .xlsm, senão o código some ao fechar.

## Passo a passo da aula

Aquecimento (10 min): abra o arquivo no projetor e pergunte à turma o que cada botão faz. Clique em um botão e mostre o resultado. Diga que hoje vamos transformar essas peças soltas num sistema só, com cara profissional.

Conteúdo novo guiado (15 min): mostre como dar acabamento. Para renomear um botão, clique com o botão direito sobre ele e escolha Editar Texto; troque por algo claro como Cadastrar Aluno ou Limpar Tudo. Para colorir abas, clique com o botão direito na aba, escolha Cor da Guia. Na aba de relatório, selecione as células de valores, vá em Página Inicial, Formatação Condicional, Escalas de Cor, e escolha uma. Mostre também como esconder uma coluna técnica: clique com o botão direito no cabeçalho da coluna e escolha Ocultar. Por fim, vá em Arquivo, Salvar Como, e confirme o tipo Pasta de Trabalho Habilitada para Macros do Excel.

Mão na massa (25 min): cada aluno aplica o acabamento no próprio arquivo. Eles renomeiam todos os botões, escolhem cores para as abas, formatam a aba de relatório e organizam a ordem das abas arrastando-as. Circule pela sala ajudando individualmente. Peça que cada um teste o fluxo completo do começo ao fim pelo menos uma vez, como se fosse um usuário novo.

Desafio e compartilhar (10 min): proponha que adicionem um toque pessoal, como um título grande na primeira aba ou um pequeno gráfico no relatório. Peça a dois ou três alunos para mostrarem a tela e explicarem em uma frase o que o sistema faz.

## Como explicar de forma clara

Use a comparação com um aplicativo de celular. Quando abrimos um app, não vemos o código; vemos botões bonitos com nomes que entendemos. Diga: hoje vocês vão fazer o mesmo com a planilha. O código continua lá embaixo, mas a pessoa só vê os botões. Reforce a pergunta-guia: se eu entregar isso para alguém que nunca viu, ele saberia usar sozinho? Se a resposta for não, falta acabamento. Trate cor e nome de botão como parte do trabalho, não como enfeite: é o que separa um exercício de um sistema.

## Erros comuns e como ajudar

O erro mais frequente é salvar como .xlsx comum e perder as macros ao reabrir; insista no formato .xlsm e peça para todos confirmarem a extensão. Outro tropeço é renomear um botão e achar que mudou a macro: explique que o texto do botão é só a etiqueta; a macro ligada a ele continua a mesma. Alguns alunos vão deixar colunas técnicas à mostra ou abas bagunçadas; oriente a esconder o que é interno e a colocar a aba inicial em primeiro lugar. Por fim, vários vão esquecer de testar o fluxo inteiro depois das mudanças; peça sempre um teste final do começo ao fim, porque mexer no visual às vezes desfaz uma ligação de botão por acidente.`,
  exercicios: [
    {
      titulo: `Renomeando os botões`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre primeiro no projetor o clique com o botão direito sobre um botão e a opção Editar Texto. Garanta que o aluno mude apenas o texto, sem desvincular a macro.`,
      atividade: `Abra o arquivo do mini-sistema e renomeie todos os botões com nomes claros que digam o que cada um faz, como Cadastrar Aluno, Limpar Lista ou Gerar Relatório. Depois clique em cada botão e confirme que ele ainda funciona.`,
      gabarito: `Todos os botões ficam com nomes em português que descrevem a ação. Ao clicar, cada macro continua executando normalmente, provando que renomear o texto não quebra a ligação com o código.`,
    },
    {
      titulo: `Deixando o relatório bonito`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Demonstre o caminho Página Inicial, Formatação Condicional, Escalas de Cor. Mostre também como colorir a guia da aba pelo botão direito, Cor da Guia.`,
      atividade: `Na aba de relatório, aplique uma formatação condicional de Escala de Cor nas células de valores e escolha uma cor para a guia da aba. Ajuste a largura das colunas para que nenhum texto fique cortado.`,
      gabarito: `A aba de relatório mostra as células coloridas conforme o valor, a guia tem uma cor escolhida e nenhum dado aparece cortado. O relatório fica mais fácil de ler à primeira vista.`,
    },
    {
      titulo: `Auditoria em dupla`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas e peça que cada aluno teste o sistema do colega como se nunca tivesse visto. Incentive anotações respeitosas e específicas, não críticas vagas.`,
      atividade: `Troque de computador com o colega e use o sistema dele sem pedir ajuda. Anote tudo o que não ficou claro: botões com nome confuso, colunas técnicas à mostra, abas fora de ordem. Devolva a lista e corrija o seu próprio arquivo a partir das anotações que você recebeu.`,
      gabarito: `Cada aluno recebe uma lista de pelo menos dois pontos a melhorar e aplica as correções. Ao final, os botões ficam compreensíveis para alguém de fora, as colunas internas ficam ocultas e as abas em ordem lógica.`,
    },
    {
      titulo: `Roda de conversa: parece um sistema?`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza a discussão com a pergunta-guia. Liste no quadro os critérios que a turma achar importantes para algo parecer um sistema profissional, e transforme isso numa checklist comum.`,
      atividade: `Em roda, discuta: o que faz uma planilha parecer um sistema de verdade e não um exercício de escola? Cada aluno cita um critério que considera essencial, sem repetir o do colega.`,
      gabarito: `A turma constrói uma lista coletiva com itens como nomes de botões claros, cores combinando, aba inicial limpa, colunas técnicas escondidas, mensagens de erro amigáveis e arquivo salvo em .xlsm. Essa lista vira referência de qualidade para todos.`,
    },
    {
      titulo: `Montagem final do entregável`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Acompanhe individualmente. Exija um teste do fluxo completo do início ao fim após o acabamento e confirme que cada aluno salvou uma cópia de segurança em .xlsm.`,
      atividade: `Finalize a Planilha Automatizada: confira a ordem das abas, os nomes dos botões, as cores, a aba de relatório e o tratamento de erros funcionando. Coloque um título na aba inicial, teste o sistema inteiro uma vez como usuário e salve uma cópia de segurança no formato .xlsm.`,
      gabarito: `O aluno entrega um arquivo .xlsm único e organizado, com aba inicial titulada, botões com nomes claros, relatório formatado e fluxo completo funcionando sem travar. Existe uma cópia de segurança salva. O sistema está pronto para o ensaio da próxima aula.`,
    },
  ],
};
