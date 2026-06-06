import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Acabamento profissional do painel",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Refinar o painel do Power BI com identidade visual, ícones, tooltips e textos explicativos para que pareça um produto profissional de verdade.`,
  descricao: `Nesta aula o aluno deixa de ter apenas um conjunto de gráficos e passa a ter um produto acabado. A diferença entre um painel amador e um painel profissional quase nunca está nos dados: está nos detalhes de acabamento. Cores que combinam, um título claro, ícones que ajudam a leitura, dicas que aparecem quando o mouse passa por cima e pequenos textos que explicam o que o usuário está vendo. É isso que faz alguém olhar e pensar: isto foi feito por gente que sabe o que faz.

O foco aqui é a identidade visual. O aluno vai escolher uma paleta de cores consistente, padronizar fontes e tamanhos, aplicar ícones nos cartões e ajustar os tooltips (as caixinhas que surgem ao passar o mouse sobre um gráfico). Também vai escrever textos curtos de apoio, como uma legenda explicando uma métrica ou uma frase guiando o leitor pela tela. Tudo isso já existe pronto dentro do Power BI: o trabalho é saber onde clicar e ter bom gosto.

A segunda metade da aula é sobre revisão de qualidade. Assim como um programador revisa o código antes de entregar, o aluno vai revisar cada visual procurando erros: números desalinhados, títulos cortados, cores que brigam entre si, filtros que ficaram esquecidos. Depois aprende a exportar o painel (em PDF ou imagem) e a preparar uma apresentação curta, de um minuto, explicando o que o painel mostra e por quê.

Esta é a penúltima aula do mês. Na próxima vem a entrega final e o certificado do Ano 2, então aqui o painel precisa ficar pronto e bonito. O professor deve incentivar o capricho sem deixar o aluno travar buscando perfeição: o objetivo é um produto bom e finalizado, não um produto impossível.`,
  materiais: [
    `Computadores com Excel e Power BI Desktop instalados e abertos, um por aluno`,
    `Projetor ou TV para o professor demonstrar cada passo na tela grande`,
    `Arquivo de exemplo .pbix com o painel das aulas anteriores (vendas de uma lanchonete ou loja de jogos)`,
    `Paleta de cores impressa ou em slide (3 a 4 cores que combinam) para inspirar os alunos`,
    `Conjunto de ícones gratuitos em PNG (ou os ícones internos do Power BI) para usar nos cartões`,
    `Conta Microsoft (gratuita) caso a turma vá publicar no Power BI Service`,
    `Folha de checklist de revisão impressa, com itens como título, cores, alinhamento e filtros`,
  ],
  conceitosChave: [
    `Identidade visual — conjunto de cores, fontes e estilo que dá uma cara única e consistente ao painel.`,
    `Paleta de cores — grupo pequeno de cores escolhidas que combinam entre si e se repetem em todo o painel.`,
    `Tooltip — caixinha de informação que aparece quando o mouse passa por cima de um gráfico, mostrando detalhes.`,
    `Ícone — pequena imagem ou símbolo que representa uma ideia (um carrinho para vendas, um relógio para tempo).`,
    `Texto explicativo — frase curta dentro do painel que ajuda o leitor a entender o que está vendo.`,
    `Tema do relatório — arquivo de cores e estilos que o Power BI aplica de uma vez em todos os visuais.`,
    `Exportar — salvar o painel em outro formato, como PDF ou imagem, para enviar ou apresentar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser designer. Acabamento profissional é, na prática, repetir poucas regras simples: escolher de três a quatro cores e usar só elas, deixar tudo alinhado, dar títulos claros e acrescentar pequenas ajudas (ícones, tooltips, textos). No Power BI Desktop quase tudo isso fica em dois lugares: o painel "Formatar visual" (o ícone de pincel ou rolo de tinta, na lateral direita, quando um visual está selecionado) e o menu "Exibição", onde ficam os Temas. Antes da aula, abra o arquivo de exemplo e clique em "Exibição" para ver a galeria de temas prontos. Teste aplicar um e veja todas as cores mudarem de uma vez. Isso vai te dar confiança.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): mostre no projetor dois painéis lado a lado, um cru e um caprichado, com os mesmos dados. Pergunte: "qual parece feito por profissional?" Eles vão apontar o segundo. Liste com a turma o que faz a diferença (cores, ícones, organização). Diga que hoje eles vão aplicar isso ao painel deles.

Conteúdo novo guiado (15 min): com o arquivo aberto, vá em "Exibição" e aplique um Tema pronto; mostre como todas as cores se ajustam juntas. Depois selecione um cartão, abra "Formatar visual" (ícone de pincel), e mostre onde mudar a cor do fundo, ativar a borda e adicionar um ícone (em alguns cartões há a seção de imagem; senão, use o visual "Imagem" para inserir um PNG). Selecione um gráfico, vá em "Formatar visual", procure "Dicas de ferramenta" (tooltip) e mostre que ali dá para ligar e personalizar. Por fim, insira uma caixa de texto pela aba "Inserir" e escreva uma frase guia.

Mão na massa (25 min): cada aluno aplica um tema ao próprio painel, escolhe a paleta, padroniza os títulos dos visuais (mesmo tamanho de fonte), adiciona ao menos um ícone e uma caixa de texto explicativa, e confere os tooltips. Circule pela sala. Quando a base estiver pronta, entregue a folha de checklist e peça que revisem cada item, corrigindo o que encontrarem.

Desafio e compartilhar (10 min): cada aluno exporta o painel (menu "Arquivo", depois "Exportar", depois "PDF") e prepara uma frase de um minuto: "Este painel mostra ___ e serve para ___." Dois ou três voluntários apresentam para a turma.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de "embalagem": o conteúdo é o mesmo, mas a embalagem faz a pessoa querer abrir. Compare com o perfil de um jogo ou de um app na loja: ícone bonito, cores certas e uma descrição clara fazem você confiar. Diga que escolher poucas cores é como montar um time de uniforme: se cada um veste uma cor diferente, vira bagunça. Para tooltip, use a comparação com passar o mouse num item de jogo e ver os detalhes aparecerem. Reforce a regra de ouro: menos é mais; é melhor três cores bem usadas do que dez espalhadas.

## Erros comuns e como ajudar

O erro mais frequente é usar cores demais; oriente a fixar a paleta no tema e só repetir aquelas cores. Outro é o texto que some no fundo (letra clara em fundo claro): peça para testar o contraste lendo de longe. Alguns vão querer mexer em tudo e travar; dê um limite, por exemplo "escolha duas melhorias e termine". Títulos cortados acontecem quando o visual é pequeno: ensine a arrastar a borda para aumentar ou diminuir a fonte em "Formatar visual". Se um ícone ficar gigante ou esticado, mostre como redimensionar segurando o canto da imagem. E lembre sempre: salvar com frequência usando o atalho Ctrl mais S.`,
  exercicios: [
    {
      titulo: `Aplicando um tema de cores`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Garanta que cada aluno esteja com o próprio painel aberto. Mostre no projetor o caminho exato antes de soltar a turma.`,
      atividade: `Abra seu painel no Power BI Desktop. Clique na aba "Exibição", abra a galeria de Temas e aplique um tema que combine com o assunto do painel. Observe como todas as cores mudam de uma só vez. Depois confira se os textos continuam legíveis.`,
      gabarito: `O aluno acessa Exibição, escolhe um tema da galeria e o aplica. O resultado esperado é um painel com cores consistentes vindas do tema, sem cores soltas fora do padrão, e com todos os textos ainda legíveis sobre o novo fundo.`,
    },
    {
      titulo: `Ícone e texto explicativo`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Tenha PNGs de ícones prontos numa pasta. Mostre a aba "Inserir" para imagem e para caixa de texto. Reforce redimensionar pelo canto.`,
      atividade: `No seu painel, insira um ícone que represente o tema (por exemplo, um carrinho para vendas) usando "Inserir" e depois "Imagem". Em seguida, insira uma caixa de texto pela aba "Inserir" e escreva uma frase curta explicando o que o painel mostra.`,
      gabarito: `O painel passa a ter pelo menos um ícone bem posicionado e do tamanho adequado (não esticado) e uma caixa de texto com uma frase clara, como "Vendas da lanchonete por mês". O ícone deve fazer sentido com o tema escolhido.`,
    },
    {
      titulo: `Personalizando o tooltip`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre onde fica "Dicas de ferramenta" em "Formatar visual". Deixe o aluno descobrir o efeito passando o mouse sobre o gráfico depois de ativar.`,
      atividade: `Selecione um gráfico do seu painel. Abra "Formatar visual" (ícone de pincel), encontre a seção "Dicas de ferramenta" e ative-a. Passe o mouse sobre o gráfico e veja a caixinha de informação aparecer. Desafio: deixe a dica mostrando um número útil, como o total.`,
      gabarito: `Ao passar o mouse sobre o gráfico, surge um tooltip com informação relevante (por exemplo, o valor exato daquela barra ou o total). O aluno demonstra que ativou e conferiu o tooltip funcionando, não apenas que mexeu na opção.`,
    },
    {
      titulo: `Revisão em dupla com checklist`,
      tipo: `em dupla`,
      tempo: `9 minutos`,
      guiaProfessor: `Forme duplas e entregue a folha de checklist. Cada um revisa o painel do colega, anota e devolve. Incentive feedback gentil e específico.`,
      atividade: `Troque de lugar com um colega e revise o painel dele usando o checklist: o título está claro? As cores combinam? Os textos estão legíveis? Há algum filtro esquecido? Anote o que encontrar. Depois voltem aos próprios lugares e corrijam os problemas apontados.`,
      gabarito: `Cada dupla produz uma lista de pelo menos dois pontos de melhoria por painel (por exemplo, "título cortado" ou "cor do texto fraca") e o aluno corrige esses pontos no próprio painel. O painel final deve estar sem os erros apontados pelo colega.`,
    },
    {
      titulo: `Painel finalizado e mini apresentação`,
      tipo: `projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre o caminho Arquivo, Exportar, PDF. Cronometre a fala de um minuto. Aplauda cada apresentação para criar um ambiente seguro.`,
      atividade: `Finalize seu painel com todos os acabamentos. Exporte-o em PDF pelo menu "Arquivo", depois "Exportar", depois "PDF". Prepare uma fala de um minuto completando: "Este painel mostra ___ e serve para ___." Apresente para a turma ou para a sua dupla.`,
      gabarito: `O aluno gera um arquivo PDF do painel acabado (com tema, ícone, texto e tooltip aplicados) e faz uma apresentação curta e clara dizendo o que o painel mostra e para que serve. Espera-se um produto finalizado, exportado com sucesso e uma fala objetiva de cerca de um minuto.`,
    },
  ],
};
