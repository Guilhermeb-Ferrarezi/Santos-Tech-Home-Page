import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Fatiar e Prever a Impressão",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Clicar em Fatiar no Orca Slicer, ler o tempo estimado e o gasto de filamento, navegar pela visualização camada por camada e gerar o arquivo final (G-code) do próprio personagem pronto para a impressora.`,
  descricao: `Nas aulas anteriores do mês os alunos conheceram o Orca Slicer, exploraram a mesa virtual, trouxeram o personagem do Maya para o programa e aprenderam a ligar suportes e ajustar o preenchimento. Agora chega o momento mais esperado e mais revelador de toda a etapa de impressão: apertar o botão Fatiar. Fatiar (em inglês, "Slice") é o ato de transformar o modelo 3D em centenas de camadas finíssimas e em um conjunto de instruções que a impressora consegue obedecer. É como pegar um pão inteiro e cortá-lo em fatias: a impressora só sabe construir uma fatia de cada vez, de baixo para cima.

O grande objetivo desta aula é o aluno entender que, antes de gastar plástico e horas de máquina, o computador já consegue prever tudo. Depois de fatiar, o Orca Slicer mostra na tela o tempo estimado da impressão e a quantidade de filamento que será usada (em gramas e em metros). Mais do que isso, ele abre uma visualização camada por camada: arrastando uma barrinha lateral, o aluno vê o boneco sendo "construído" virtualmente, da primeira até a última camada. Esse é o momento em que abstrações viram algo concreto e visível, e os adolescentes adoram esse efeito de raio-x do próprio modelo.

Nesta aula o professor vai guiar o clique em Fatiar, a leitura dos números que aparecem no painel lateral e o uso da barra de pré-visualização. Em seguida, cada aluno volta às configurações de suportes e preenchimento do próprio personagem, fatia de novo e compara: mais preenchimento significa mais tempo e mais filamento; menos suporte pode significar risco de o modelo desabar. Ajustar, fatiar, ler e decidir é o ciclo que todo criador de impressão 3D repete na vida real.

A aula é totalmente prática, com cada aluno usando o Orca Slicer no próprio computador e com o personagem que ele mesmo modelou. O fechamento é gerar e exportar o G-code, o arquivo final que será levado à impressora na próxima aula. Sem fatiar e exportar, não há impressão; por isso esta aula é a ponte direta para o entregável do mês, que é imprimir o personagem e levar para casa.`,
  materiais: [
    `Computadores (um por aluno) com o Orca Slicer instalado e aberto, já com a impressora do laboratório selecionada como perfil`,
    `Projetor ou TV conectada ao computador do professor para demonstrar cada clique na tela grande`,
    `Arquivo de exemplo já no formato 3MF/STL de um personagem simples, posicionado na mesa, para quem ficou para trás nas aulas anteriores`,
    `Pen drive ou cartão SD (um por aluno, ou compartilhados) para salvar o arquivo G-code exportado`,
    `Impressora 3D do laboratório ligada por perto, apenas para mostrar onde o G-code será usado na próxima aula (sem imprimir ainda)`,
    `Folha impressa de apoio com a sequência "Ajustar → Fatiar → Ler tempo e filamento → Pré-visualizar → Exportar G-code"`,
    `Cronômetro ou timer visível para controlar o ritmo de 10 / 15 / 25 / 10 minutos`,
  ],
  conceitosChave: [
    `Fatiar (Slice) — transformar o modelo 3D em centenas de camadas finas e em instruções que a impressora entende.`,
    `G-code — o arquivo final em forma de lista de comandos que diz à impressora para onde mover e quanto plástico soltar.`,
    `Tempo estimado — a previsão de quantas horas e minutos a impressão vai levar, mostrada após fatiar.`,
    `Gasto de filamento — a quantidade de plástico prevista para a peça, exibida em gramas e em metros.`,
    `Pré-visualização (Preview) — o modo do Orca Slicer que mostra o modelo camada por camada antes de imprimir.`,
    `Barra de camadas — a barrinha lateral que o aluno arrasta para subir e descer pelas camadas da peça.`,
    `Preenchimento (Infill) — o quanto a peça é cheia por dentro; mais preenchimento gasta mais tempo e mais filamento.`,
  ],
  treinamento: `## O que o professor precisa saber

Fatiar é só apertar um botão, mas o valor da aula está em ler o que aparece depois. No Orca Slicer, o botão Fatiar (Slice plate) fica no canto superior direito da janela, geralmente em destaque. Depois de clicar, o programa muda para a aba Pré-visualização (Preview) e mostra, no canto, o tempo total e o filamento previsto. Você não precisa ser especialista: precisa apenas saber que mais preenchimento e mais suportes aumentam o tempo e o gasto, e que tudo isso é só previsão, nada foi impresso ainda. Antes da aula, abra o Orca Slicer, carregue um personagem, clique em Fatiar uma vez e localize na tela os três elementos: o número do tempo, o número do filamento e a barra de camadas à direita. Faça isso em casa para chegar seguro e sem surpresas.

## Passo a passo da aula

Aquecimento (10 min): com o projetor ligado, mostre um pão sendo cortado em fatias (imagem ou desenho no quadro) e pergunte: "Como a impressora sabe fazer o boneco?". Conduza até a ideia de que ela constrói uma fatia (camada) de cada vez, de baixo para cima. Relembre rapidamente os suportes e o preenchimento da aula anterior.

Conteúdo novo guiado (15 min): no seu Orca Slicer, com o personagem na mesa, aponte o botão Fatiar (Slice plate), no alto à direita, e clique. O programa abre a aba Preview. Mostre, no painel do canto, o Tempo total estimado e o Filamento usado em gramas e metros. Em seguida, leve o cursor à barra de camadas, do lado direito, e arraste devagar de baixo para cima: o personagem aparece sendo montado camada por camada. Mostre também o seletor de cor por tipo (paredes, preenchimento, suportes) se quiser enriquecer. Por fim, volte para a aba Preparar, mude o preenchimento de 15% para 40%, clique em Fatiar de novo e mostre o tempo e o filamento aumentando. Para terminar, clique em "Exportar G-code" (ícone ao lado de Fatiar ou botão "Export plate sliced file"), escolha a pasta e salve.

Mão na massa (25 min): cada aluno fatia o próprio personagem, lê o tempo e o filamento e anota os números. Depois ajusta suportes e preenchimento, fatia de novo e compara. Por fim, exporta o G-code para o pen drive. Circule pela sala. O objetivo mínimo é cada aluno ter fatiado ao menos uma vez e exportado um G-code válido.

Desafio e compartilhar (10 min): proponha que cada aluno encontre a combinação que deixa a peça mais rápida sem ficar frágil demais. Depois, dois ou três alunos mostram na tela grande a pré-visualização camada por camada e dizem o tempo e o filamento da sua peça.

## Como explicar de forma clara

Use a comparação do pão e das fatias o tempo todo: "A impressora não sabe fazer o boneco inteiro de uma vez; ela faz fatia por fatia, e fatiar é cortar o boneco em fatias para ela." Para o tempo e o filamento, fale como uma viagem: "Antes de sair, o mapa já diz quanto tempo vai levar e quanta gasolina você vai gastar. Aqui é igual: o programa avisa o tempo e quanto plástico antes de imprimir." Sempre nomeie em voz alta cada número na tela: "Este é o Tempo, este é o Filamento." Ao arrastar a barra de camadas, diga "agora estamos vendo a peça pela metade". Evite a palavra "G-code" sozinha; diga "o arquivo final pronto para a impressora".

## Erros comuns e como ajudar

O erro número um é clicar em Fatiar com o modelo fora da mesa ou flutuando, e o programa avisa em vermelho; oriente a centralizar e apoiar a peça antes de fatiar. Outro erro frequente é exagerar no preenchimento (80% ou 100%) e assustar-se com horas de impressão; mostre que 15% a 20% já basta para um personagem. Alguns alunos confundem a aba Preparar com a Preview e tentam mexer na peça dentro do modo de pré-visualização; explique que para mudar algo é preciso voltar para Preparar e fatiar de novo. Há quem esqueça de exportar e ache que só fatiar já basta; reforce que o passo final é "Exportar G-code" e salvar no pen drive. Por fim, muitos não percebem que mudar uma configuração exige fatiar de novo para os números atualizarem; lembre sempre: mudou algo, fatie outra vez.`,
  exercicios: [
    {
      titulo: `Meu primeiro Fatiar`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe cada aluno no clique em Fatiar e na leitura dos números. Garanta que o personagem está apoiado na mesa antes de fatiar. Ajude quem não encontrar o botão no canto superior direito.`,
      atividade: `Com seu personagem na mesa, clique em Fatiar (Slice plate). Quando abrir a pré-visualização, encontre e anote no caderno o tempo estimado e o gasto de filamento em gramas.`,
      gabarito: `O aluno clica em Fatiar, o Orca Slicer abre a aba Preview e exibe no canto o tempo total (ex.: 1h 42min) e o filamento (ex.: 18 g / 6,1 m). O exercício está certo quando os dois números foram localizados e anotados corretamente.`,
    },
    {
      titulo: `Viajando pelas camadas`,
      tipo: `Desafio individual`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre de novo a barra de camadas no lado direito da pré-visualização. Peça que arrastem devagar. Ajude quem confundir a barra de camadas com outras barras da tela.`,
      atividade: `Na pré-visualização, arraste a barra de camadas de baixo para cima e pare exatamente na metade da altura do personagem. Observe o que aparece cheio (preenchimento) e o que aparece vazio por dentro.`,
      gabarito: `Ao parar a barra no meio, o aluno vê o personagem cortado pela metade, com as paredes externas e o padrão de preenchimento por dentro visíveis, e as camadas de cima ainda não desenhadas. Resposta correta descreve a peça "pela metade" e identifica o preenchimento interno.`,
    },
    {
      titulo: `Mais cheio, mais caro`,
      tipo: `Atividade em dupla`,
      tempo: `7 minutos`,
      guiaProfessor: `Forme duplas. Uma anota com 15% de preenchimento e a outra com 40%. Lembre que é preciso voltar para a aba Preparar, mudar o valor e fatiar de novo para os números atualizarem.`,
      atividade: `Em dupla, fatiem o mesmo personagem duas vezes: uma com 15% de preenchimento e outra com 40%. Comparem e digam quanto o tempo e o filamento aumentaram.`,
      gabarito: `Com 40% de preenchimento, tanto o tempo quanto o gasto de filamento ficam maiores do que com 15% (por exemplo, de 1h40 para 2h20 e de 18 g para 27 g). A dupla acerta ao concluir que mais preenchimento gasta mais tempo e mais plástico.`,
    },
    {
      titulo: `Roda de conversa: prever antes de gastar`,
      tipo: `Roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Reúna a turma em roda. Conduza para que percebam o valor de prever tempo e filamento antes de imprimir. Reforce que tudo o que viram ainda é previsão, nada foi impresso.`,
      atividade: `Cada aluno responde: por que é útil o programa mostrar o tempo e o filamento antes de a impressora começar? Dê um exemplo de uma decisão que esses números ajudam a tomar.`,
      gabarito: `Resposta válida explica que prever evita desperdício de plástico e tempo e ajuda a escolher configurações. Exemplo aceito: "Se vai levar 8 horas, eu diminuo o preenchimento" ou "Se vai faltar filamento, eu troco antes de começar". O importante é ligar os números a uma decisão.`,
    },
    {
      titulo: `Meu G-code pronto para imprimir`,
      tipo: `Projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe o ajuste final e a exportação. Deixe o aluno escolher um equilíbrio entre tempo e resistência. Garanta que cada um clique em Exportar G-code e salve no pen drive com um nome reconhecível.`,
      atividade: `Ajuste os suportes e o preenchimento do seu personagem como você achar melhor, fatie uma última vez, confira o tempo e o filamento e clique em Exportar G-code. Salve o arquivo no pen drive com o seu nome.`,
      gabarito: `O aluno termina com o personagem fatiado, suportes e preenchimento ajustados de forma coerente (ex.: 20% de preenchimento e suportes só onde há partes flutuantes) e um arquivo .gcode exportado e salvo no pen drive com nome reconhecível. O projeto está completo quando o G-code foi gerado e salvo com sucesso.`,
    },
  ],
};
