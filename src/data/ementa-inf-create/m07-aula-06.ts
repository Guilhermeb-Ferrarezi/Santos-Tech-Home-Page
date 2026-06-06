import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Preparar e imprimir com capricho",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Ajustar margens, orientação e tamanho do papel, conferir o documento na visualização de impressão e salvá-lo como PDF para enviar à impressora corretamente.`,
  descricao: `Depois de aprender a escrever, formatar e enriquecer o documento com imagens, cabeçalho e rodapé, chega a hora de prepará-lo para sair da tela e ganhar o mundo. Esta aula é totalmente prática: o aluno vai aprender que um documento bonito na tela ainda precisa de alguns ajustes para ficar perfeito no papel ou em PDF. É o capricho final, aquele cuidado que separa um trabalho comum de um trabalho profissional.

O foco está no menu Layout (ou Disposição) e na aba Arquivo do Word. No Layout, o aluno encontra os botões de Margens, Orientação e Tamanho. As margens são o espaço em branco em volta do texto; a orientação decide se a folha fica em pé (retrato) ou deitada (paisagem); e o tamanho define o papel, normalmente A4 no Brasil. Pequenas escolhas que mudam completamente como o documento se encaixa na folha.

Em seguida, o aluno descobre a visualização de impressão, dentro de Arquivo > Imprimir. Ali aparece uma prévia exata de como o documento sairá: dá para ver se sobrou uma página quase vazia, se uma imagem ficou cortada na margem ou se o texto invadiu a borda. É como provar a roupa antes de sair de casa.

Por fim, vem a parte mais útil para a vida digital: salvar como PDF. O PDF é um formato que congela o documento, mantendo a aparência igual em qualquer computador ou celular. O aluno aprende que enviar um PDF é mais seguro do que enviar o arquivo do Word, porque ninguém bagunça a formatação sem querer. Ao fim da aula, cada um terá um documento pronto para imprimir ou compartilhar com orgulho.`,
  materiais: [
    `Computadores com Microsoft Word instalado e aberto (um por aluno)`,
    `Projetor ou tela grande para o professor demonstrar os passos`,
    `Arquivo de exemplo: um documento com 2 ou 3 páginas, texto e uma imagem (para praticar margens e prévia)`,
    `Conta Microsoft ativa em cada computador (para salvar e exportar)`,
    `Pasta compartilhada ou pen drive para guardar os PDFs gerados`,
    `Impressora disponível ou impressora virtual "Microsoft Print to PDF" para a demonstração de impressão`,
  ],
  conceitosChave: [
    `Margem — espaço em branco entre o texto e a borda da folha; protege o conteúdo de ficar cortado na impressão.`,
    `Orientação — direção da folha; retrato deixa a página em pé e paisagem deixa a página deitada.`,
    `Tamanho do papel — medida da folha que será impressa; no Brasil o mais comum é o A4.`,
    `Visualização de impressão — prévia exata de como o documento vai sair no papel, vista em Arquivo > Imprimir.`,
    `PDF — formato que congela o documento e mantém a aparência igual em qualquer aparelho.`,
    `Exportar — ação de transformar o documento do Word em outro formato, como o PDF.`,
    `Quebra de página — limite invisível onde uma página termina e a próxima começa.`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula você vai usar só dois lugares do Word: a aba **Layout** (em algumas versões aparece como **Disposição**) e a aba **Arquivo**. Na aba Layout ficam os três botões da vez: **Margens**, **Orientação** e **Tamanho**, todos no grupo "Configurar Página", do lado esquerdo da faixa. Na aba Arquivo fica a opção **Imprimir**, que mostra a prévia e os ajustes finais, e a opção **Exportar** (ou **Salvar como**), usada para gerar o PDF. Abra o arquivo de exemplo antes da aula e teste cada botão uma vez, para não hesitar na frente da turma. Lembre-se: no Brasil o papel padrão é o **A4** e a orientação padrão é **Retrato**.

## Passo a passo da aula (ritmo 10/15/25/10)

**Aquecimento (10 min).** Abra um documento na tela do projetor e pergunte: "Como esse texto sairia se eu mandasse imprimir agora?" Mostre rapidamente Arquivo > Imprimir só para criar curiosidade. Relembre o cabeçalho e rodapé da aula passada e diga que hoje o documento vai "se vestir" para o papel.

**Conteúdo novo guiado (15 min).** Com o arquivo de exemplo aberto, clique na aba **Layout**. Clique em **Margens** e escolha "Normal"; depois mostre "Estreita" para a turma ver a diferença ao vivo. Clique em **Orientação** e alterne entre **Retrato** e **Paisagem**, comentando o que muda. Clique em **Tamanho** e escolha **A4**. Em seguida vá em **Arquivo > Imprimir** e mostre a prévia do lado direito: aponte o número de páginas embaixo. Por fim, vá em **Arquivo > Exportar > Criar Documento PDF/XPS** (ou **Salvar como** e escolha o tipo **PDF**), nomeie o arquivo e clique em **Publicar**.

**Mão na massa (25 min).** Cada aluno abre o arquivo de exemplo. Peça que apliquem margem "Normal", orientação **Retrato** e tamanho **A4**. Depois pedem para abrir a visualização de impressão e conferir se nenhuma imagem está cortada. Por último, salvam o documento como **PDF** na pasta combinada, com o próprio nome no arquivo. Circule pela sala ajudando quem travar.

**Desafio e compartilhar (10 min).** Lance o desafio: "Transforme uma página para paisagem e salve um segundo PDF." Quem terminar abre o PDF na tela e mostra ao colega do lado a diferença entre retrato e paisagem.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que a **margem** é como a moldura de uma foto: sem ela, a imagem encosta na borda e fica feia. A **orientação** é fácil: retrato é o jeito de tirar selfie em pé; paisagem é virar o celular para gravar um vídeo deitado. O **PDF** é como tirar uma foto do documento: depois disso, ninguém consegue mexer sem querer, e ele fica igual em qualquer celular. A **visualização de impressão** é provar a roupa no espelho antes de sair: melhor descobrir o problema agora do que depois de gastar papel.

## Erros comuns e como ajudar

O erro mais frequente é o aluno procurar Margens na aba errada; lembre que tudo está em **Layout**, nunca em Página Inicial. Outro tropeço é confundir **Salvar** com **Exportar**: salvar só guarda o arquivo do Word; para virar PDF é preciso **Exportar** ou escolher o tipo PDF em Salvar como. Muitos esquecem de escolher **A4** e deixam o papel em "Carta", o que desalinha tudo na impressão brasileira. Há quem aperte Imprimir achando que vai sair papel de verdade; explique que estão só conferindo a prévia. Por fim, vários esquecem de dar um nome ao PDF e depois não acham o arquivo; combine um padrão, como "trabalho-nome.pdf", e mostre onde ele foi salvo.`,
  exercicios: [
    {
      titulo: `Vestindo a folha`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno esteja na aba Layout antes de começar. Mostre no projetor onde ficam os três botões do grupo Configurar Página e peça que apliquem na ordem indicada.`,
      atividade: `Abra o arquivo de exemplo. Na aba Layout, defina a margem como "Normal", a orientação como "Retrato" e o tamanho do papel como "A4". Não mude mais nada.`,
      gabarito: `Aba Layout aberta; Margens definidas em "Normal"; Orientação em "Retrato" (folha em pé); Tamanho em "A4". O documento continua em pé, com margens iguais nos quatro lados.`,
    },
    {
      titulo: `Espelho antes de sair`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Lembre a turma de que a visualização não imprime nada de verdade. Peça que olhem com atenção a prévia do lado direito e o número de páginas no rodapé da tela.`,
      atividade: `Vá em Arquivo > Imprimir. Observe a prévia do documento. Responda por escrito: quantas páginas o documento tem? Alguma imagem está cortada na margem? Volte ao texto e ajuste se precisar.`,
      gabarito: `O aluno acessa Arquivo > Imprimir, conta as páginas corretamente (de acordo com o arquivo de exemplo) e identifica se há imagem cortada. Se houver corte, reduz a imagem ou ajusta a margem para que nada encoste na borda.`,
    },
    {
      titulo: `Congelando em PDF`,
      tipo: `desafio`,
      tempo: `9 minutos`,
      guiaProfessor: `Mostre os dois caminhos possíveis (Exportar e Salvar como). Combine o padrão de nome do arquivo e o local da pasta antes que comecem, para ninguém perder o PDF.`,
      atividade: `Salve o documento como PDF na pasta combinada, usando o padrão de nome "trabalho-seunome.pdf". Depois abra o PDF gerado e confira se ficou igual ao Word.`,
      gabarito: `Arquivo salvo com extensão .pdf, nomeado no padrão "trabalho-seunome.pdf", na pasta correta. Ao abrir, o PDF mostra o mesmo conteúdo e formatação do documento do Word, sem alterações.`,
    },
    {
      titulo: `Retrato ou paisagem?`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Cada aluno gera uma versão e os dois comparam na tela. Incentive que expliquem um ao outro qual orientação combina mais com o conteúdo.`,
      atividade: `Em dupla, criem dois PDFs do mesmo documento: um em Retrato e outro em Paisagem. Coloquem as duas telas lado a lado e decidam juntos qual orientação ficou melhor para esse texto e por quê.`,
      gabarito: `Existem dois PDFs do mesmo conteúdo, um em Retrato e outro em Paisagem. A dupla escolhe uma orientação e justifica (ex.: Retrato é melhor para texto corrido; Paisagem é melhor quando há imagens largas ou tabelas grandes). Qualquer justificativa coerente é válida.`,
    },
    {
      titulo: `Roda do capricho`,
      tipo: `roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Reúna a turma em círculo. Conduza a conversa com perguntas e deixe cada aluno citar um cuidado. Anote no quadro a lista final de "cuidados antes de imprimir".`,
      atividade: `Na roda, cada aluno diz um cuidado importante antes de imprimir ou enviar um documento. Juntos, montem uma lista de pelo menos quatro cuidados para usar no documento final do mês.`,
      gabarito: `A turma cita cuidados como: escolher o tamanho A4; conferir a orientação certa; ajustar as margens para nada ficar cortado; usar a visualização de impressão antes de mandar imprimir; salvar como PDF para preservar a formatação; e dar um nome claro ao arquivo. A lista final tem quatro ou mais itens válidos.`,
    },
  ],
};
