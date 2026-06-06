import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Exportar sem perder qualidade",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Exportar o vídeo no CapCut ajustando resolução, taxa de quadros, bitrate e codec para conseguir o melhor equilíbrio entre qualidade de imagem e tamanho do arquivo, conferindo o resultado final antes da entrega.`,
  descricao: `Editar um vídeo é só metade do trabalho. A outra metade, que muita gente esquece, é a exportação: o momento em que o CapCut junta todos os cortes, textos, músicas e efeitos e cria um único arquivo de vídeo pronto para assistir e compartilhar. Se essa etapa for feita de qualquer jeito, um projeto lindo pode virar um vídeo borrado, travado ou com som baixo. Por isso esta aula é tão importante para o entregável do mês.

Nesta aula o aluno vai entender o que acontece "por dentro" na hora de exportar. Vamos falar de resolução (quantos pontinhos formam a imagem), taxa de quadros ou FPS (quantas imagens passam por segundo), bitrate (quanta informação o arquivo guarda por segundo) e codec (a forma como o vídeo é compactado, normalmente o H.264). O segredo profissional é encontrar o ponto de equilíbrio: qualidade alta o bastante para ficar nítido, mas com um tamanho de arquivo que não fique gigante nem demore horas para enviar.

A parte central da aula é prática. Cada aluno vai abrir o próprio projeto, entrar na tela de exportação do CapCut e exportar de verdade, testando configurações diferentes e comparando os resultados. Eles vão aprender a ler o tamanho do arquivo que o CapCut mostra na tela e a ajustar o bitrate para subir ou descer esse número de forma consciente.

Por fim, o aluno aprende a conferir o vídeo exportado: assistir do começo ao fim, checar se a imagem ficou nítida, se o áudio está no volume certo e se não apareceu nenhum problema de compressão (como blocos quadrados na imagem ou som estourado). Conferir antes de entregar é um hábito profissional que evita retrabalho e garante que o vídeo final represente bem o trabalho de todo o mês.`,
  materiais: [
    `Computadores com o CapCut instalado e atualizado (versão para desktop), um por aluno`,
    `Conta do CapCut já logada em cada computador`,
    `Projeto de vídeo de cada aluno aberto no CapCut (o trabalho que vem sendo montado no mês)`,
    `Projetor ou TV conectada ao computador do professor para demonstrar a tela de exportação`,
    `Um projeto de exemplo pronto, fornecido pelo professor, para exportar caso algum aluno não tenha projeto à mão`,
    `Fone de ouvido para cada aluno conferir o áudio sem atrapalhar os colegas`,
    `Espaço livre no disco (pelo menos 2 GB) para salvar os vídeos exportados`,
  ],
  conceitosChave: [
    `Exportar — transformar o projeto editado em um único arquivo de vídeo (geralmente .mp4) pronto para assistir e compartilhar.`,
    `Resolução — a quantidade de pontinhos que forma a imagem, como 1080p (Full HD) ou 4K; quanto maior, mais nítida e mais pesada.`,
    `Taxa de quadros (FPS) — quantas imagens passam por segundo; 30 fps deixa o vídeo fluido e 60 fps deixa o movimento ainda mais suave.`,
    `Bitrate — quanta informação o vídeo guarda por segundo; bitrate alto melhora a qualidade, mas aumenta o tamanho do arquivo.`,
    `Codec — a forma de compactar o vídeo; o H.264 é o mais usado porque pesa pouco e funciona em quase todos os aparelhos.`,
    `Compressão — o processo de diminuir o tamanho do arquivo; se for exagerada, aparecem defeitos como blocos quadrados e perda de nitidez.`,
    `Tamanho do arquivo — o "peso" do vídeo em megabytes (MB) ou gigabytes (GB); o CapCut mostra uma estimativa antes de exportar.`,
  ],
  treinamento: `## O que o professor precisa saber

A exportação no CapCut acontece no botão "Exportar" (canto superior direito da tela de edição). Ao clicar, abre uma janela com as opções principais: Resolução, Taxa de quadros, Taxa de bits (que é o bitrate), Codec e Formato. Bem perto, o CapCut mostra uma estimativa do tamanho do arquivo. Você não precisa decorar números: precisa entender que três botões mexem na qualidade e no peso — resolução, taxa de quadros e bitrate — e mostrar isso na prática. Para a entrega deste mês, o padrão recomendado é 1080p, 30 fps, codec H.264 e taxa de bits "Recomendada" (ou em torno de 8 a 12 Mbps). Teste a exportação você mesmo antes da aula para saber onde cada opção fica na sua versão, pois a posição pode mudar um pouco.

## Passo a passo da aula

Aquecimento (10 min): retome a aula anterior com uma pergunta rápida: "O que muda quando um vídeo tem mais ou menos qualidade?". Anote as respostas no quadro. Mostre dois arquivos do mesmo trecho, um nítido e um bem comprimido, e pergunte qual eles entregariam. Isso cria a necessidade da aula.

Conteúdo novo guiado (15 min): com o projetor ligado, abra um projeto e clique em "Exportar". Mostre cada campo devagar: clique em Resolução e mostre 480p, 720p, 1080p e 4K, explicando que mais alto é mais nítido e mais pesado. Em Taxa de quadros, mostre 24, 30 e 60 fps. Em Taxa de bits, troque de "Recomendada" para "Personalizada" e mova o número para cima e para baixo, apontando como a estimativa de tamanho do arquivo muda na hora. Mostre que o Codec H.264 é a escolha segura. Defina com a turma o padrão da entrega: 1080p, 30 fps, H.264.

Mão na massa (25 min): cada aluno abre o próprio projeto e faz três exportações curtas (use um trecho curto para economizar tempo): uma em 720p com bitrate baixo, uma em 1080p com bitrate recomendado e uma em 1080p com bitrate alto. Peça que anotem o tamanho de cada arquivo. Depois, eles abrem os três vídeos e comparam nitidez e peso. O objetivo é eles sentirem na prática o equilíbrio e escolherem a melhor versão para a entrega.

Desafio e compartilhar (10 min): cada aluno escolhe a configuração final que vai usar e exporta o vídeo completo. Em seguida, assiste do início ao fim conferindo imagem e áudio com o fone. Quem terminar mostra para a turma a versão escolhida e diz por que ela ficou no melhor equilíbrio.

## Como explicar de forma clara

Use comparações do dia a dia. Resolução é como o tamanho de um pôster: quanto mais pontinhos, mais detalhe. Bitrate é como encher uma mala: mais informação cabe mais coisa, mas a mala fica mais pesada. Compressão exagerada é como apertar demais a mala até amassar a roupa — por isso aparecem os "quadradinhos" na imagem. Diga sempre: "qualidade alta é ótima, mas um arquivo pesado demais é difícil de enviar; o profissional acha o meio-termo". Evite jargão sem explicar; cada palavra nova (bitrate, codec) deve vir com um exemplo concreto na tela.

## Erros comuns e como ajudar

O erro mais comum é exportar em qualidade baixa sem perceber, deixando 480p marcado. Peça que sempre confiram a resolução antes de clicar em exportar. Outro erro é colocar bitrate altíssimo achando que "mais é sempre melhor", gerando arquivos enormes sem ganho visível — mostre que acima de certo ponto o olho não nota diferença. Muitos esquecem de conferir o áudio: lembre-os de assistir com fone. Alguns fecham o CapCut achando que travou durante a barra de exportação — explique que exportar leva tempo e a barra de progresso é normal. Por fim, alguns não sabem onde o arquivo foi salvo: mostre o botão de abrir a pasta ao final da exportação.`,
  exercicios: [
    {
      titulo: `Conhecendo a tela de exportação`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha um projeto aberto. Circule pela sala confirmando que todos encontraram o botão "Exportar" e a janela de opções. O foco é só localizar e reconhecer os campos, sem exportar ainda.`,
      atividade: `Abra seu projeto, clique em "Exportar" e localize na janela os campos Resolução, Taxa de quadros, Taxa de bits e Codec. Anote no caderno o valor que está marcado em cada um agora.`,
      gabarito: `O aluno deve listar os quatro campos com os valores atuais do projeto, por exemplo: Resolução 1080p, Taxa de quadros 30 fps, Taxa de bits Recomendada, Codec H.264. Os números podem variar, mas os quatro campos precisam estar identificados corretamente.`,
    },
    {
      titulo: `Subindo e descendo o bitrate`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre antes como trocar a Taxa de bits de "Recomendada" para "Personalizada". Reforce que eles devem olhar a estimativa de tamanho do arquivo mudar na tela. Ajude quem não achar o controle deslizante.`,
      atividade: `Na janela de exportação, mude a Taxa de bits para "Personalizada". Coloque um valor baixo e anote o tamanho estimado do arquivo. Depois coloque um valor alto e anote de novo. Escreva o que aconteceu com o tamanho.`,
      gabarito: `O aluno deve registrar dois tamanhos diferentes e concluir que bitrate maior gera arquivo maior e bitrate menor gera arquivo menor. Exemplo válido: bitrate baixo resultou em cerca de 15 MB e bitrate alto em cerca de 60 MB para o mesmo trecho.`,
    },
    {
      titulo: `O detetive da compressão (em dupla)`,
      tipo: `em dupla`,
      tempo: `9 minutos`,
      guiaProfessor: `Forme duplas. Cada dupla exporta o mesmo trecho curto em duas versões: uma em 720p com bitrate baixo e outra em 1080p com bitrate recomendado. Oriente que comparem lado a lado e procurem defeitos de compressão (blocos, perda de nitidez).`,
      atividade: `Com seu colega, exportem o mesmo trecho em duas versões (720p bitrate baixo e 1080p bitrate recomendado). Assistam as duas e apontem três diferenças que vocês conseguem perceber entre elas.`,
      gabarito: `A dupla deve apontar diferenças como: a versão de baixa qualidade tem imagem menos nítida, pode mostrar blocos quadrados em áreas com movimento e tem arquivo menor; a versão de 1080p é mais nítida, com cores mais limpas e arquivo maior. Três observações coerentes nesse sentido são suficientes.`,
    },
    {
      titulo: `Achando o equilíbrio ideal`,
      tipo: `desafio`,
      tempo: `9 minutos`,
      guiaProfessor: `Peça que cada aluno teste três configurações e decida qual usaria na entrega. O critério é equilíbrio: nitidez boa com arquivo razoável. Provoque a justificativa, não só a escolha. Ajude quem estiver inseguro a comparar os tamanhos anotados.`,
      atividade: `Exporte um trecho em três configurações: (1) 720p bitrate baixo, (2) 1080p bitrate recomendado, (3) 1080p bitrate alto. Escolha qual você usaria na entrega final do mês e escreva duas frases explicando por quê.`,
      gabarito: `Espera-se que o aluno escolha a opção 2 (1080p com bitrate recomendado) ou justifique bem a opção 3. A justificativa deve citar o equilíbrio: imagem nítida o suficiente sem deixar o arquivo pesado demais. Escolher a opção 1 só é aceitável se o aluno explicar uma necessidade real de arquivo muito leve.`,
    },
    {
      titulo: `Exportar, conferir e aprovar (roda de conversa)`,
      tipo: `projeto curto e roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Cada aluno exporta o vídeo completo na configuração escolhida, assiste com fone e usa uma checklist de conferência. Depois, conduza uma roda rápida em que cada um diz se aprovaria o próprio vídeo para entrega e o que corrigiria. Valorize o hábito de conferir antes de entregar.`,
      atividade: `Exporte seu vídeo completo na configuração que você escolheu. Assista do começo ao fim conferindo: a imagem está nítida? O áudio está no volume certo? Apareceu algum defeito de compressão? Diga na roda se você aprovaria esse vídeo para a entrega e o que ainda mudaria.`,
      gabarito: `O aluno deve apresentar um vídeo exportado e relatar a conferência usando os três pontos: nitidez da imagem, volume do áudio e ausência de defeitos de compressão. Uma resposta completa inclui um veredito ("aprovo" ou "preciso ajustar") com pelo menos um motivo concreto, mostrando que entendeu o hábito de revisar antes de entregar.`,
    },
  ],
};
