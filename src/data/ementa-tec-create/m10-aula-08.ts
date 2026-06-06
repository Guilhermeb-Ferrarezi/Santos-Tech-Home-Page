import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Entrega final: meu jogo 2D pronto",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Dar os retoques finais, exportar o jogo 2D completo no Construct 3 e apresentá-lo à turma como o entregável do mês, conectando os personagens do jogo aos modelos 3D que serão impressos na trilha.`,
  descricao: `Esta é a aula mais especial do mês: o dia da entrega. Durante quatro semanas, o aluno trouxe o personagem à vida com animações, fez a animação trocar na hora certa, criou o sistema de pontos, montou vidas e telas de game over, colocou inimigos em ação, adicionou som e música e, na aula anterior, juntou tudo em um único projeto. Agora, o jogo está praticamente pronto. O foco de hoje não é criar coisas novas, e sim polir, exportar e celebrar. É o momento de transformar um projeto que rodava só no computador da escola em um arquivo de jogo de verdade, que pode ser jogado e mostrado para os colegas, a família e o professor.

A aula começa com um pente-fino. O aluno abre o próprio projeto no Construct 3 e roda uma checklist de qualidade: o personagem anima certo, o placar conta os pontos, as vidas funcionam, a tela de game over aparece, os inimigos se movem e o som toca. Pequenos ajustes finais entram aqui, como corrigir um botão de reiniciar, alinhar um texto do placar ou regular o volume de um efeito. Não é hora de inventar mecânicas novas, e sim de deixar o que já existe redondo e sem bugs visíveis.

O coração técnico da aula é a exportação. No Construct 3, o aluno aprende a usar o menu Menu (o ícone de hambúrguer no canto superior esquerdo), escolher Project, depois Export e selecionar o formato Web (HTML5). O Construct 3 gera uma pasta compactada (.zip) com tudo que o jogo precisa para rodar em qualquer navegador. Esse é o entregável do mês: o jogo 2D completo, fechado e exportado, com o nome do aluno. O professor guarda esses arquivos, pois eles também serão a base para a vitrine de fim de ano.

Por fim, a aula amarra a ponte com a trilha 3D. Cada aluno apresenta o jogo no projetor, recebe feedback positivo e específico dos colegas e do professor, e olha para os personagens que criou. A pergunta que fecha o mês é: qual desses personagens vai virar um modelo 3D impresso? O aluno escolhe um personagem ou item do próprio jogo (o herói, um inimigo, a moeda) para, mais adiante na trilha, modelar no MagicaVoxel ou no Blender e imprimir de verdade na Bambu Studio ou Orca Slicer. Assim, o jogo digital de hoje vira um objeto físico no futuro, e o aluno entende que tudo na Santos Tech se conecta.`,
  materiais: [
    `Computadores com Construct 3 instalado e aberto, um por aluno, com o projeto do jogo de cada um já carregado`,
    `Projetor ou TV grande conectada ao computador do professor para as apresentações da turma`,
    `Arquivo de exemplo "checklist_entrega.pdf" com a lista de verificação de qualidade do jogo, um por aluno`,
    `Arquivo de exemplo "jogo_modelo_exportado.zip" mostrando um jogo já exportado em Web (HTML5) para o professor demonstrar`,
    `Pen drive ou pasta compartilhada na rede para o professor guardar os arquivos .zip exportados de cada aluno`,
    `Impressora 3D da escola ligada e visível na sala (ou fotos dos modelos já impressos) para mostrar onde os personagens vão parar`,
    `Folha impressa "Meu personagem vira 3D" para o aluno escolher e desenhar o personagem que será modelado na trilha`,
  ],
  conceitosChave: [
    `Entregável — o produto final acabado que o aluno entrega no fim do mês; aqui, o jogo 2D completo e exportado.`,
    `Exportar — gerar um arquivo do jogo que roda fora do Construct 3, em qualquer navegador, pronto para ser jogado e compartilhado.`,
    `Web (HTML5) — formato de exportação que empacota o jogo numa pasta .zip para abrir em navegadores como Chrome ou Edge.`,
    `Checklist de qualidade — lista de verificação que confirma, item por item, que cada parte do jogo funciona antes da entrega.`,
    `Polimento — fase final de pequenos ajustes (textos, volume, botões) que deixa o jogo redondo, sem trocar mecânicas.`,
    `Feedback — comentário construtivo e específico que o colega ou o professor dá para valorizar o que ficou bom e sugerir melhorias.`,
    `Ponte 3D — escolha de um personagem ou item do jogo para, na trilha, virar modelo 3D modelado e impresso de verdade.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Construct 3 para conduzir esta aula. O trabalho pesado de programação já foi feito nas sete aulas anteriores; hoje é polir, exportar e celebrar. O único passo técnico de verdade é a exportação, e ele é curto. Memorize este caminho: no canto superior esquerdo da tela do Construct 3 existe o ícone de Menu (três risquinhos, o hambúrguer). Clique nele, vá em Project, depois em Export. Vai abrir um assistente; escolha a opção Web (HTML5) e clique em Next até o fim. O Construct 3 gera um arquivo .zip para baixar. Antes da aula, abra o "jogo_modelo_exportado.zip" e teste no navegador para você ver como fica. Tenha o "checklist_entrega.pdf" impresso e a impressora 3D (ou fotos dela) à vista, pois o fechamento conecta o jogo com a trilha de impressão.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: Reúna a turma e relembre o caminho do mês, aula por aula: animação, troca de animação, placar, vidas, inimigos, som, montagem. Diga que hoje é o dia da entrega. Entregue o "checklist_entrega.pdf" e peça que cada aluno abra o próprio projeto no Construct 3 (Menu, Project, Open) e rode o jogo apertando o botão de Play (o triângulo no topo, ou a tecla F5) para ver como está.

15 min — Conteúdo novo guiado: No projetor, mostre a exportação passo a passo com o jogo modelo. Clique no ícone de Menu (hambúrguer, canto superior esquerdo), vá em Project, depois Export. No assistente, escolha Web (HTML5) e clique em Next. Explique cada tela sem pressa e finalize baixando o .zip. Abra o .zip e mostre o arquivo "index.html" rodando no navegador: o jogo deles vai virar isto. Depois, faça uma rodada rápida pela checklist no projetor: personagem anima, placar conta, vidas funcionam, game over aparece, inimigo se mexe, som toca.

25 min — Mão na massa: Cada aluno roda a própria checklist, corrige os pequenos ajustes que encontrar (texto do placar, volume, botão de reiniciar) e então exporta o jogo em Web (HTML5). Circule pela sala. Garanta que cada um gere o .zip e salve no pen drive ou na pasta da rede com o nome "jogo_NOME.zip". Quem terminar antes ajuda um colega ou testa o próprio jogo exportado no navegador.

10 min — Desafio e compartilhar: Cada aluno apresenta o jogo no projetor por um minuto. A turma dá um feedback positivo e específico. Para fechar, entregue a folha "Meu personagem vira 3D" e peça que cada um escolha um personagem ou item do próprio jogo para, na trilha, virar modelo 3D impresso. Mostre a impressora 3D e celebre a entrega do mês.

## Como explicar de forma clara (linguagem para a idade)

Comece com a ideia de "fechar a caixa": "O jogo está pronto dentro do computador, mas agora vamos colocá-lo numa caixinha que qualquer um pode abrir e jogar." Para exportar, diga: "Vamos transformar o seu projeto num arquivo de jogo de verdade, igual aos que você baixa." Para a checklist, use a imagem do piloto antes de decolar: "Todo piloto confere cada item antes de voar; vamos conferir cada parte do jogo antes de entregar." Para o feedback, ensine a fórmula "Eu gostei de... e ficaria ainda melhor se...". E para a ponte 3D, aponte para a impressora: "O herói que está na tela vai sair daqui de dentro, em plástico, na sua mão."

## Erros comuns e como ajudar

O erro mais comum é o aluno tentar exportar sem salvar antes; lembre de salvar o projeto (Menu, Project, Save) antes do Export. Muitos escolhem o formato errado no assistente: reforce que é Web (HTML5), não as outras opções. Alguns esquecem de baixar o .zip ou não acham onde ele foi parar; oriente a olhar na pasta de Downloads e a renomear para "jogo_NOME.zip". Outro tropeço é querer inventar mecânicas novas na hora da entrega e quebrar o jogo: deixe claro que hoje é polir, não criar. Na apresentação, alunos tímidos travam; ofereça começar você jogando enquanto ele narra. E há quem queira escolher um personagem 3D impossível de imprimir; ajude a escolher algo simples e fechado, como a moeda ou o herói de corpo inteiro.`,
  exercicios: [
    {
      titulo: `Checklist do piloto`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue o "checklist_entrega.pdf" e garanta que cada aluno abra o próprio projeto e aperte Play (F5) para testar. O foco é olhar com calma para cada item e marcar o que funciona e o que precisa de ajuste, sem ainda corrigir.`,
      atividade: `Abra seu jogo no Construct 3 e aperte Play para testar. Marque na checklist cada item: o personagem anima, o placar conta os pontos, as vidas funcionam, o game over aparece, o inimigo se mexe e o som toca.`,
      gabarito: `O aluno deve ter a checklist preenchida com cada item marcado como pronto ou como precisa de ajuste, baseado no que viu rodando o jogo. O esperado é que ele identifique pelo menos um ponto a melhorar, mostrando que testou de verdade e não só marcou tudo no automático.`,
    },
    {
      titulo: `Exportando para o mundo`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe a exportação na sala. Lembre de salvar antes (Menu, Project, Save). Verifique que cada aluno escolha o formato Web (HTML5) no assistente, clique em Next até o fim e baixe o .zip, salvando com o nome "jogo_NOME.zip".`,
      atividade: `Salve seu projeto. Depois clique no ícone de Menu, vá em Project, depois Export, escolha Web (HTML5) e clique em Next até gerar o arquivo. Baixe o .zip e salve com o nome "jogo_SEUNOME.zip" na pasta indicada pelo professor.`,
      gabarito: `Existe um arquivo .zip exportado, com o nome do aluno, salvo no pen drive ou na pasta da rede. Ao descompactar e abrir o "index.html" no navegador, o jogo carrega e roda. Isso comprova que o aluno exportou no formato Web (HTML5) corretamente.`,
    },
    {
      titulo: `Caça aos retoques`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Em duplas, os alunos jogam o jogo um do outro procurando pequenos defeitos (texto torto, som alto demais, botão que não reinicia). Reforce que são ajustes de polimento, não mecânicas novas. Cada um anota o que achou e corrige no próprio projeto.`,
      atividade: `Troque de computador com o colega e jogue o jogo dele procurando três retoques possíveis: um texto desalinhado, um volume errado ou um botão que falha. Anote os três, volte ao seu jogo e corrija pelo menos um retoque que o colega achou no seu.`,
      gabarito: `A dupla deve listar pelo menos três retoques de polimento observados (não mecânicas novas) e cada aluno deve ter corrigido ao menos um deles no próprio projeto. Exemplos válidos: centralizar o texto do placar, baixar o volume de um efeito, consertar o botão de reiniciar. O jogo continua funcionando após a correção.`,
    },
    {
      titulo: `Apresentando meu jogo`,
      tipo: `roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza a roda de apresentações no projetor, um aluno por vez, cerca de um minuto cada. Ensine a turma a dar feedback com a fórmula "Eu gostei de... e ficaria ainda melhor se...". Garanta que todo aluno receba pelo menos um elogio específico e uma sugestão gentil.`,
      atividade: `Apresente seu jogo no projetor em um minuto, mostrando o personagem, o placar e os inimigos. Depois, dê feedback para um colega usando a frase "Eu gostei de... e ficaria ainda melhor se...".`,
      gabarito: `Cada aluno apresenta o jogo mostrando ao menos três elementos (personagem, placar, inimigo ou som) e dá um feedback a um colega no formato pedido, com um elogio específico e uma sugestão. O sucesso é todos terem apresentado e recebido feedback construtivo, sem críticas vagas ou ofensivas.`,
    },
    {
      titulo: `Meu personagem vira 3D`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Entregue a folha "Meu personagem vira 3D" e mostre a impressora 3D (ou as fotos). Cada aluno escolhe um personagem ou item do próprio jogo, justifica a escolha e desenha um rascunho simples. Ajude a escolher formas fechadas e simples, viáveis de modelar e imprimir mais adiante na trilha.`,
      atividade: `Escolha um personagem ou item do seu jogo (o herói, um inimigo ou a moeda) para virar modelo 3D impresso na trilha. Na folha, escreva por que escolheu ele e faça um rascunho simples de como ele é visto de frente e de lado.`,
      gabarito: `O aluno entrega a folha com um personagem ou item do próprio jogo escolhido, uma justificativa curta (por exemplo, "é o herói, a estrela do jogo") e um rascunho simples de frente e de lado. A escolha deve ser uma forma fechada e razoavelmente simples, viável de modelar no MagicaVoxel ou Blender e imprimir, fechando a ponte entre o jogo 2D e a impressão 3D.`,
    },
  ],
};
