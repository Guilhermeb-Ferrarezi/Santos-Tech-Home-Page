import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Dashboard interativo na prática",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Montar um dashboard completo no Power BI em que cartões, gráficos e segmentações respondem juntos aos cliques, testando a navegação como um usuário real.`,
  descricao: `Nas aulas anteriores o aluno aprendeu cada peça do Power BI separada: importou dados do Excel, criou gráficos e cartões, aplicou filtros e montou segmentações (slicers) e o layout da tela. Nesta aula tudo se junta. O objetivo não é criar elementos novos, e sim fazer com que todos os elementos já existentes conversem entre si e formem um painel único que funciona de verdade quando alguém clica nele.

A ideia central é a interatividade. Num dashboard profissional, quando o usuário clica em uma fatia da rosca ou escolhe uma opção na segmentação, todos os outros visuais se atualizam ao mesmo tempo para mostrar só aquele recorte dos dados. O aluno vai garantir que isso aconteça da forma certa, decidindo quais visuais filtram quais, e usando a ferramenta de Interações de Visuais do Power BI para ligar e desligar essas conexões.

A segunda metade da aula é dedicada ao teste de uso. O aluno deixa de ser o construtor e vira o usuário: clica em tudo, escolhe filtros diferentes, observa se os números fazem sentido e se a leitura é clara. É um momento parecido com testar um jogo antes de lançar, procurando o que trava, o que confunde ou o que não responde.

Ao final, cada aluno terá um painel interativo testado e ajustado, pronto para receber o acabamento profissional na próxima aula. Esse painel é o coração do entregável do mês, então esta aula é onde o projeto realmente ganha vida.`,
  materiais: [
    `Computadores com Excel e Power BI Desktop instalados e abertos (um por aluno)`,
    `Projetor ou TV para o professor demonstrar passo a passo na tela grande`,
    `Arquivo de exemplo "vendas-lanchonete.xlsx" já importado no Power BI pelos alunos nas aulas anteriores`,
    `Arquivo .pbix de cada aluno salvo da Aula 5 (com cartões, gráficos e segmentações já criados)`,
    `Conta Microsoft de cada aluno (caso usem o Power BI já logado)`,
    `Folha impressa de "checklist de teste do dashboard" para a fase de mão na massa`,
  ],
  conceitosChave: [
    `Dashboard interativo — painel em que clicar em um visual atualiza automaticamente os outros visuais da mesma página.`,
    `Interação de visuais — recurso do Power BI que define se um visual filtra, destaca ou ignora os outros quando recebe um clique.`,
    `Filtro cruzado — quando um clique em um gráfico filtra os demais, mostrando só os dados daquela seleção.`,
    `Destaque (realce) — quando o clique escurece o restante e ilumina só a parte selecionada, sem esconder os outros dados.`,
    `Segmentação (slicer) — botão ou lista na tela que deixa o usuário escolher um filtro com um clique, como mês ou produto.`,
    `Teste de uso — ato de navegar pelo dashboard como um usuário real para encontrar o que confunde ou não responde.`,
    `Limpar seleção — ação de desfazer os cliques e voltar o painel ao estado original, mostrando todos os dados de novo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Power BI para dar esta aula bem. O segredo é que todos os visuais já existem do trabalho das aulas anteriores; hoje só vamos ligá-los entre si. O recurso-chave chama-se Interações de Visuais. No Power BI Desktop, ao clicar em um visual, aparece a aba Formato (faixa superior). Nela há o botão Editar interações. Ao ativá-lo, o Power BI mostra, sobre cada um dos outros visuais, três pequenos ícones: um funil (filtrar), um gráfico com destaque (realçar) e um círculo cortado (nenhuma). É só clicar no ícone desejado em cada visual. Teste no seu computador uma vez antes da aula para chegar seguro.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento. Abra seu .pbix no projetor. Pergunte: o que acontece se eu clicar numa fatia do gráfico de pizza? Clique e mostre os outros visuais mudando. Relembre, da Aula 4, o que é uma segmentação. Peça que cada aluno abra o próprio arquivo salvo da Aula 5.

15 min — Conteúdo novo guiado. Mostre na tela grande: clique em um gráfico, vá na aba Formato, clique em Editar interações. Aponte os ícones funil, realçar e nenhuma que surgem sobre os outros visuais. Demonstre clicar no funil de um cartão para que ele seja filtrado, e no realçar de um gráfico de barras. Mostre também que clicar na segmentação filtra a página inteira. Explique a diferença entre filtrar (esconde o resto) e realçar (escurece o resto).

25 min — Mão na massa. Cada aluno percorre seus visuais um a um com Editar interações ligado, definindo como cada clique afeta os outros. Regra simples que você dita: a segmentação filtra tudo; o gráfico principal realça os cartões e filtra os demais gráficos. Depois, peça que desliguem Editar interações e usem o checklist impresso: clicar em cada elemento, conferir se os números mudam, anotar o que não respondeu. Circule pela sala ajudando.

10 min — Desafio e compartilhar. Desafio: deixar a segmentação de mês com a opção Limpar seleção funcionando (ícone de borracha no canto da segmentação). Cada aluno mostra ao colega do lado um clique que faz o painel inteiro reagir.

## Como explicar de forma clara (linguagem para a idade)

Compare o dashboard a um videogame: a segmentação é o controle e os gráficos são a tela que reage. Quando você aperta um botão, a tela toda muda junta, não só um pedacinho. Diga: filtrar é como apagar a luz dos dados que você não escolheu; realçar é como deixar todos visíveis, mas acender um holofote só no que você clicou. Use a palavra conversar: os visuais precisam conversar entre si. Se um aluno clica e nada acontece em outro visual, diga que eles ainda não estão se falando, e que vamos conectá-los.

## Erros comuns e como ajudar

Erro 1: o aluno clica e nada muda. Quase sempre a interação está como nenhuma (círculo cortado). Mande ligar Editar interações e trocar para funil. Erro 2: o painel filtra demais e some quase tudo. Provavelmente dois filtros estão somando; oriente clicar em área vazia para limpar a seleção. Erro 3: o aluno esquece de desligar Editar interações e acha que o painel quebrou. Lembre que esse botão é só de configuração. Erro 4: a segmentação não limpa. Mostre o ícone de borracha no canto superior da segmentação, ativado em Formato. Reforce sempre salvar com Ctrl+S antes de testar.`,
  exercicios: [
    {
      titulo: `Ligando o primeiro filtro`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Garanta que cada aluno tenha o .pbix da Aula 5 aberto. Mostre uma vez no projetor onde fica Editar interações antes de soltá-los.`,
      atividade: `Clique no seu gráfico principal, vá na aba Formato e clique em Editar interações. Sobre um dos cartões, clique no ícone de funil para que ele seja filtrado quando você clicar no gráfico. Depois desligue Editar interações e teste clicando numa barra do gráfico.`,
      gabarito: `Ao clicar numa barra ou fatia do gráfico principal, o número do cartão escolhido muda para mostrar só os dados daquela seleção. O ícone de funil sobre o cartão indica que a interação ficou como filtrar.`,
    },
    {
      titulo: `Filtrar ou realçar?`,
      tipo: `desafio`,
      tempo: `5 min`,
      guiaProfessor: `Reforce a diferença: filtrar esconde o resto, realçar escurece mas mantém visível. Deixe o aluno comparar os dois no mesmo gráfico.`,
      atividade: `Com Editar interações ligado, configure o seu gráfico de barras para realçar outro gráfico (ícone de gráfico com destaque) em vez de filtrar. Teste e descreva em uma frase a diferença que você viu na tela.`,
      gabarito: `No modo realçar, ao clicar, o gráfico de destino mantém todas as colunas visíveis, mas escurece as que não foram selecionadas e acende só a parte escolhida. No modo filtrar, as demais colunas desaparecem. Frase esperada: realçar mostra tudo com holofote; filtrar esconde o que não escolhi.`,
    },
    {
      titulo: `Conectando o painel inteiro`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Dite a regra única para a turma: a segmentação filtra todos os visuais. Circule conferindo se cada aluno aplicou em todos os elementos.`,
      atividade: `Selecione a sua segmentação de mês. Em Editar interações, garanta que todos os outros visuais estejam com o ícone de funil ativado. Desligue Editar interações e escolha um mês na segmentação. Observe se cartões e gráficos mudam juntos.`,
      gabarito: `Ao escolher um mês na segmentação, todos os cartões e gráficos da página se atualizam ao mesmo tempo mostrando apenas os dados daquele mês. Se algum visual não muda, sua interação está como nenhuma e precisa virar funil.`,
    },
    {
      titulo: `Teste de uso em dupla`,
      tipo: `em dupla`,
      tempo: `7 min`,
      guiaProfessor: `Entregue o checklist impresso. Oriente que cada um teste o painel do colega como usuário, sem explicação prévia, e anote o que confundiu.`,
      atividade: `Troque de computador com o colega. Use o painel dele como se fosse um usuário novo: clique em cada gráfico, escolha filtros na segmentação e tente voltar ao estado inicial. Anote no checklist tudo que não respondeu, confundiu ou pareceu travado. Depois, devolvam os apontamentos um ao outro.`,
      gabarito: `Cada dupla entrega um checklist preenchido com pelo menos dois apontamentos reais, por exemplo: o cartão de total não mudava ao clicar no gráfico, ou a segmentação não tinha como limpar a seleção. O painel deve permitir clicar, filtrar e voltar ao estado original.`,
    },
    {
      titulo: `Painel interativo testado e ajustado`,
      tipo: `projeto curto`,
      tempo: `8 min`,
      guiaProfessor: `Esta é a entrega da aula. Confira que cada aluno corrigiu pelo menos um problema do teste em dupla e que a segmentação tem Limpar seleção ativo.`,
      atividade: `Com base nos apontamentos do colega, corrija ao menos um problema do seu painel. Ative o botão Limpar seleção na segmentação de mês (Formato, ícone de borracha). Salve com Ctrl+S e faça um teste final clicando em três elementos diferentes e limpando a seleção ao final.`,
      gabarito: `O painel final responde aos cliques em todos os visuais, a segmentação filtra a página e tem o botão de limpar seleção funcionando, e pelo menos um problema apontado pelo colega foi corrigido. Ao limpar a seleção, o painel volta a mostrar todos os dados. Arquivo salvo em .pbix.`,
    },
  ],
};
