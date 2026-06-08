import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Suportes, Tempo e Plate Pronta",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender a ativar suportes para partes salientes, ler o tempo e o gasto de filamento estimados e revisar tudo no Bambu Studio para gerar a Plate pronta para a máquina.`,
  descricao: `Nesta aula a turma dá o passo final dentro do Bambu Studio antes da impressão de verdade: transformar um modelo bem posicionado em um arquivo de impressão completo e revisado. Até aqui os alunos já sabem abrir o programa, ajustar a peça na placa e fatiar. Agora vamos entender três coisas que separam uma impressão que dá certo de uma que falha: os suportes, as estimativas de tempo e filamento, e a revisão final antes de enviar.

Suportes são estruturas que o programa cria por baixo de partes que ficam "no ar" (chamadas de saliências ou overhangs). Sem nada embaixo, o filamento derretido não tem onde se apoiar e a peça desaba ou fica feia. O aluno vai aprender a reconhecer quando uma parte precisa de suporte, a ligar e desligar os suportes no painel e a ver, na pré-visualização, onde eles aparecem em volta do modelo.

Depois de fatiar, o Bambu Studio mostra duas informações preciosas no canto da tela: o tempo estimado de impressão e o quanto de filamento (em gramas e em metros) a peça vai gastar. Ler esses números ajuda o aluno a tomar decisões reais: uma peça que leva oito horas talvez precise ser menor; uma que gasta filamento demais talvez precise de menos preenchimento. É aqui que a matemática e a prática se encontram.

Por fim, a aula treina o hábito profissional de revisar tudo antes de mandar imprimir: a peça está grudada na placa, o filamento certo está selecionado, os suportes estão como queremos e o tempo cabe na aula. Quando esse checklist está completo, o aluno gera a Plate pronta (o arquivo de impressão) e a guarda. Na próxima aula, ela vira objeto de verdade.`,
  materiais: [
    `Computadores com o Bambu Studio instalado e aberto, um por aluno`,
    `Projetor ou TV grande para o professor mostrar onde clicar`,
    `Arquivo de exemplo com saliência (uma letra com braço para fora, um arco ou uma figura com braços abertos) em .3mf ou .stl`,
    `Um segundo arquivo de exemplo simples, sem saliências, para comparação`,
    `Impressora 3D da Bambu Lab ligada na sala para conferir as estimativas na vida real`,
    `Folha impressa com o checklist final (peça na placa, filamento, suportes, tempo)`,
    `Cartão ou rascunho de papel para os alunos anotarem tempo e gramas estimados`,
  ],
  conceitosChave: [
    `Suporte — estrutura de apoio que o programa cria embaixo de partes no ar para o filamento não cair; depois ela é quebrada e jogada fora.`,
    `Saliência (overhang) — parte da peça que fica pendurada sem nada embaixo, como o braço de um boneco aberto; é o que costuma precisar de suporte.`,
    `Tempo estimado — previsão de quanto a impressão vai durar, mostrada pelo Bambu Studio depois de fatiar.`,
    `Filamento estimado — quanto de plástico a peça vai gastar, mostrado em gramas e em metros após o fatiamento.`,
    `Plate (placa de impressão) — o arquivo final pronto que reúne a peça, as configurações e os suportes para enviar à máquina.`,
    `Revisão final — checklist rápido (peça grudada, filamento certo, suportes, tempo) feito antes de enviar para evitar erros.`,
    `Preenchimento (infill) — quantidade de plástico dentro da peça; mais preenchimento deixa a peça mais forte, mais pesada e mais demorada.`,
  ],
  treinamento: `## O que o professor precisa saber

Suportes existem porque a impressora deposita plástico camada por camada, de baixo para cima. Se uma parte da peça começa "no ar", sem nada por baixo, o plástico derretido não tem onde se apoiar. O Bambu Studio resolve isso criando colunas finas e quebráveis embaixo dessas partes. No fim, você quebra os suportes com a mão e a peça fica pronta. A regra prática que você vai ensinar é a do ângulo: paredes verticais e inclinações suaves não precisam de suporte; partes muito horizontais ou pontas saindo para fora precisam. Você não precisa decorar números, basta olhar o modelo e perguntar: "isso aqui tem algo embaixo segurando?".

As estimativas aparecem depois de clicar em Slice plate (Fatiar). No canto, o programa mostra um relógio com o tempo total e um carretel com o peso de filamento. Esses dois números são o coração desta aula. Antes da aula, abra o arquivo de exemplo, fatie e anote os valores para não ser pego de surpresa.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula anterior. Pergunte "o que é fatiar?" e mostre rapidamente a peça simples já fatiada. Levante a mão de quem lembra onde aparece o botão Slice plate. Apresente o arquivo de hoje, o que tem uma saliência, e pergunte: "onde vocês acham que isso vai cair?".

Conteúdo novo guiado (15 min): no seu computador projetado, abra o arquivo com saliência. No painel direito (Process / Configurações), encontre a seção Support. Marque a caixa Enable support. Escolha o tipo "normal(auto)". Clique em Slice plate. Mude para a aba Preview (Pré-visualização) no topo. Mostre os suportes pintados de cor diferente embaixo da saliência. Agora desmarque Enable support, fatie de novo e mostre, no Preview, que sem suporte a parte fica solta. Aponte para o relógio e o carretel no canto inferior e leia em voz alta: tantas horas, tantos gramas.

Mão na massa (25 min): cada aluno abre o mesmo arquivo. Tarefa: ativar os suportes, fatiar, abrir o Preview e anotar no cartão o tempo e os gramas. Depois, desligar os suportes, fatiar de novo e anotar de novo, comparando os dois números. Por fim, com os suportes ligados, fazer a revisão final usando o checklist e gerar a Plate pronta, salvando o arquivo na pasta da turma.

Desafio e compartilhar (10 min): peça que cada dupla diga qual peça gastou mais tempo e por quê. Quem terminar tenta mudar o preenchimento (Infill) de baixo para mais alto, fatia e vê o tempo subir.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do andaime: "Quando um pedreiro precisa construir uma varanda que fica para fora da parede, ele monta um andaime embaixo para segurar. Depois que a varanda fica pronta, ele tira o andaime. O suporte é o andaime da nossa peça." Para as estimativas, fale como tempo de jogo: "O programa é como um GPS, ele te diz quanto tempo a viagem vai durar antes de você sair." Para o filamento, compare com tinta de caneta: quanto mais você desenha, mais tinta gasta.

## Erros comuns e como ajudar

Muitos alunos ligam suporte em peças que não precisam, desperdiçando filamento e tempo; mostre que paredes retas não precisam. Outros esquecem de clicar em Slice plate de novo depois de mudar uma opção e acham que "não funcionou" - lembre que toda mudança pede um novo fatiamento. Alguns confundem a aba Prepare com a aba Preview e não acham os suportes; aponte sempre o topo da tela. Há quem leia o tempo errado, confundindo minutos com horas; leia junto em voz alta. Por fim, alguns esquecem de salvar a Plate; faça todos salvarem ao mesmo tempo, contando "três, dois, um, salvar".`,
  exercicios: [
    {
      titulo: `Ligando o andaime`,
      tipo: `Prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Confirme que cada aluno está com o arquivo de saliência aberto. Circule e verifique se acharam a seção Support no painel direito antes de fatiar.`,
      atividade: `Abra o arquivo de exemplo com a saliência. No painel de configurações, marque a caixa Enable support no modo "normal(auto)". Clique em Slice plate e vá para a aba Preview. Encontre os suportes embaixo da parte que fica no ar.`,
      gabarito: `A caixa Enable support fica marcada; após Slice plate, na aba Preview, aparecem colunas finas de cor diferente exatamente embaixo da saliência, mostrando que o programa criou o apoio.`,
    },
    {
      titulo: `Lendo o relógio e o carretel`,
      tipo: `Desafio individual`,
      tempo: `5 min`,
      guiaProfessor: `Mostre no projetor onde ficam os ícones de tempo e de peso no canto inferior. Peça que anotem no cartão. Confira se sabem diferenciar horas de minutos e gramas de metros.`,
      atividade: `Com a peça já fatiada e os suportes ligados, encontre no canto da tela o tempo estimado e o gasto de filamento. Anote no seu cartão: quantas horas e minutos e quantos gramas a impressão vai levar.`,
      gabarito: `O aluno anota corretamente os dois valores lidos na tela, por exemplo "1 hora e 20 minutos" e "15 gramas". O importante é localizar o relógio (tempo) e o carretel (peso) e copiar os números certos.`,
    },
    {
      titulo: `Com ou sem suporte?`,
      tipo: `Em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Forme duplas. Cada dupla testa ligado e desligado e compara os números. Reforce que precisam fatiar de novo a cada mudança. Ajude quem não encontra a diferença no Preview.`,
      atividade: `Em dupla, fatiem a peça com os suportes ligados e anotem tempo e gramas. Depois desliguem Enable support, fatiem de novo e anotem outra vez. Comparem: o que mudou no tempo e no gasto de filamento? Por que isso acontece?`,
      gabarito: `Com suporte, o tempo e o gasto de filamento ficam maiores, porque a impressora também imprime as colunas de apoio. Sem suporte, gasta menos, mas a parte no ar fica solta ou cai. A dupla deve perceber que suporte custa tempo e plástico, então só vale a pena quando a peça precisa.`,
    },
    {
      titulo: `Roda do checklist`,
      tipo: `Roda de conversa`,
      tempo: `6 min`,
      guiaProfessor: `Sente a turma em roda. Conduza o checklist em voz alta, item por item, deixando cada aluno responder pela sua própria tela. Anote no quadro os quatro itens da revisão final.`,
      atividade: `Em roda, vamos revisar juntos. Olhando para a sua tela, responda: a peça está grudada na placa? O filamento certo está selecionado? Os suportes estão como você quer? O tempo cabe na aula? Conte para a turma um item que quase passou despercebido.`,
      gabarito: `Resposta esperada: o aluno confirma os quatro itens da revisão final (peça na placa, filamento certo, suportes definidos, tempo adequado) e cita pelo menos um que poderia ter esquecido. O objetivo é criar o hábito de revisar antes de enviar.`,
    },
    {
      titulo: `Minha Plate pronta`,
      tipo: `Projeto curto`,
      tempo: `10 min`,
      guiaProfessor: `Este é o entregável da aula. Acompanhe cada aluno até gerar e salvar o arquivo na pasta da turma com o próprio nome. Faça todos salvarem juntos, contando "três, dois, um".`,
      atividade: `Faça a revisão final completa na sua peça com os suportes do jeito que decidiu. Fatie uma última vez, confira o tempo e o filamento e gere a Plate pronta. Salve o arquivo na pasta da turma com o seu nome. Essa é a sua peça pronta para a máquina.`,
      gabarito: `O aluno conclui o checklist, fatia sem erros e salva um arquivo de impressão (Plate) com o próprio nome na pasta combinada. O arquivo contém a peça posicionada, o filamento selecionado e os suportes definidos, pronto para a aula de impressão de verdade.`,
    },
  ],
};
