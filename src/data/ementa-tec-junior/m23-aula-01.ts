import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Nossos Modelos Chegaram!",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Importar para o Roblox Studio os modelos 3D que cada criança criou no Maya e arrastá-los para dentro da cena, conhecendo a janela Explorer e o painel de objetos.`,
  descricao: `Chegou um dia muito especial: os modelos 3D que cada criança construiu no Maya, nas aulas anteriores, finalmente vão entrar no jogo! Até agora esses modelos moravam em outro programa, como brinquedos guardados numa caixa. Hoje a gente abre a caixa, traz cada peça para dentro do Roblox Studio e vê os personagens, árvores, casinhas e objetos aparecerem no mapa pela primeira vez. É o começo da construção do mundo do jogo do mês.

O Roblox Studio é o programa onde a gente monta o jogo. Ele tem uma área grande no meio, chamada Viewport, que é como uma janela mágica por onde enxergamos o mundo em três dimensões. E tem uma listinha no canto direito, chamada Explorer, que funciona como o índice de um livro: ela mostra o nome de tudo o que existe dentro da cena. Nesta aula a turma aprende a usar essas duas partes juntas: importar um arquivo de modelo e ver o nome dele aparecer no Explorer e a forma dele aparecer na Viewport.

Importar significa trazer uma coisa de fora para dentro do programa. Cada modelo do Maya foi salvo num arquivo (geralmente no formato .fbx ou .obj). No Roblox Studio, a gente usa o botão de importar para escolher esse arquivo no computador e mandar o programa colocá-lo na cena. Depois, com o mouse, arrastamos o modelo para o lugar certinho do mapa. É um momento de muita empolgação, porque a criança vê o próprio trabalho ganhando vida dentro do jogo.

Como a turma tem no máximo dez alunos, dá tempo de acompanhar cada criança com calma. O professor demonstra primeiro no projetor, com um modelo de exemplo, e depois ajuda mesa por mesa. No fim da aula, cada criança terá pelo menos um modelo seu importado e posicionado na cena, com o nome dele organizado no Explorer. Assim começamos a montar, peça por peça, o mundo do nosso jogo.`,
  materiais: [
    `Computadores com o Roblox Studio aberto, um projeto novo (Baseplate) já carregado para cada criança`,
    `Projetor ou TV conectado ao computador do professor para demonstrar o passo a passo`,
    `Os arquivos dos modelos 3D feitos no Maya, exportados em .fbx ou .obj e separados numa pasta por criança`,
    `Um modelo de exemplo já pronto na área de trabalho do professor para a demonstração ao vivo`,
    `Mouse com rodinha (scroll) em cada computador, para girar e dar zoom na cena com mais facilidade`,
    `Cartãozinho impresso com o desenho da janela Explorer e da Viewport para a turma consultar`,
    `Conexão de internet estável e contas Roblox de cada criança já logadas no Studio (conferir antes da aula)`,
  ],
  conceitosChave: [
    `Modelo 3D — um objeto com altura, largura e profundidade, como um brinquedo de verdade que dá para girar e ver por todos os lados.`,
    `Importar — trazer uma coisa de fora para dentro do programa, como tirar um brinquedo da caixa e colocar em cima da mesa.`,
    `Roblox Studio — o programa onde a gente monta o jogo, junta os pedaços e dá vida ao mundo.`,
    `Viewport — a janela grande do meio da tela, por onde enxergamos o mundo do jogo em três dimensões.`,
    `Explorer — a listinha do canto direito que mostra o nome de tudo o que existe dentro da cena, como o índice de um livro.`,
    `Arrastar — clicar e segurar um objeto com o mouse para levá-lo de um lugar para outro dentro da cena.`,
    `Cena — o espaço onde o nosso mundo é montado, com o chão, os modelos e tudo o que faz parte do jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Roblox para dar esta aula. O essencial é entender três coisas. Primeiro, o Roblox Studio tem uma área grande no meio chamada Viewport (onde se vê o mundo 3D) e uma lista no canto direito chamada Explorer (onde aparece o nome de cada objeto). Segundo, importar é trazer um arquivo de fora (os modelos feitos no Maya, salvos em .fbx ou .obj) para dentro da cena. Terceiro, depois de importar, o modelo é arrastado com o mouse até o lugar certo no mapa.

Antes da aula, faça três conferências: confirme que cada conta Roblox está logada no Studio, que os arquivos dos modelos de cada criança estão numa pasta fácil de achar e que um projeto novo (Baseplate) abre sem erro. Importe você mesmo o modelo de exemplo um dia antes para conhecer o caminho. O botão de importar fica na aba Home (Início), no grupo Insert (Inserir), na opção Import 3D (Importar 3D). Quando você importa, abre uma janelinha de prévia chamada Import Preview; basta clicar em Import (Importar) para confirmar.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Reúna a turma de frente para o projetor. Relembre que cada criança construiu modelos 3D no Maya. Pergunte com entusiasmo: "Lembram dos personagens e objetos que vocês criaram? Hoje eles vão entrar no jogo de verdade!". Mostre rapidamente a tela do Roblox Studio e aponte a Viewport (a janela grande do meio) e o Explorer (a lista do canto direito).

15 min — Conteúdo novo guiado (demonstração). No seu computador, com um projeto novo aberto, faça os passos devagar e narrando em voz alta. Clique na aba Home (Início), no alto da tela. No grupo Insert (Inserir), clique em Import 3D (Importar 3D). Na janela do computador que abre, escolha o arquivo do modelo de exemplo e clique em Open (Abrir). Vai aparecer a janela Import Preview (prévia); clique no botão Import (Importar). O modelo surge na Viewport e o nome dele aparece no Explorer. Agora, com o botão esquerdo do mouse, clique no modelo e arraste-o para o lugar desejado no chão (o Baseplate). Use a rodinha do mouse para dar zoom e o botão direito segurado para girar a câmera.

25 min — Mão na massa. Chame as crianças, uma de cada vez, ou vá de mesa em mesa. Conduza cada uma pelos mesmos passos: aba Home, Import 3D, escolher o arquivo dela, clicar em Import e depois arrastar o modelo para o mapa. Deixe a própria criança clicar e arrastar. Peça que ela procure o nome do modelo no Explorer e leia em voz alta. Enquanto uma criança importa, as outras podem desenhar no papel onde querem posicionar cada modelo no mapa.

10 min — Desafio e compartilhar. Cada criança mostra para a turma o modelo que importou e diz onde o colocou na cena. O desafio é importar um segundo modelo e deixar os dois lado a lado. Encerre celebrando: o mundo do jogo já começou a nascer.

## Como explicar para crianças

Use a analogia da caixa de brinquedos: "Seus modelos estavam guardados numa caixa, no programa Maya. Importar é abrir a caixa e colocar o brinquedo em cima da mesa do jogo." Para o Explorer, diga: "É a lista de chamada da nossa cena; cada objeto que entra ganha o nome dele escrito ali." Para a Viewport, diga: "É a janela mágica por onde a gente espia o mundo do jogo." Fale sempre com empolgação, porque hoje a criança vê o próprio trabalho ganhando vida.

## Erros comuns e como ajudar

O erro mais comum é a criança não achar o arquivo certo na hora de importar; deixe os arquivos organizados em pastas com o nome de cada um. Outro erro é clicar fora do modelo e achar que ele sumiu, quando na verdade só perdeu a seleção; mostre que o nome continua no Explorer e basta clicar nele de novo. Algumas crianças arrastam o modelo para fora do chão ou para muito longe; ensine a usar a rodinha do mouse para dar zoom e reencontrar a peça. Se a câmera ficar de cabeça para baixo, peça calma e ajude a girar segurando o botão direito do mouse. E se a criança quiser apertar tudo rápido, segure a mão dela com leveza e diga "vamos juntos, um passo de cada vez".`,
  exercicios: [
    {
      titulo: `Onde fica a janela mágica?`,
      tipo: `Pergunta oral em roda`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça no aquecimento, antes da demonstração. Mostre a tela do Roblox Studio no projetor e aponte as partes principais. Deixe as crianças responderem em voz alta apontando na tela; aceite respostas parecidas e elogie cada tentativa.`,
      atividade: `Olhando a tela do Roblox Studio no projetor, responda: qual é a janela grande do meio, por onde a gente vê o mundo do jogo? E qual é a listinha do canto direito que mostra o nome de cada objeto?`,
      gabarito: `A janela grande do meio é a Viewport (onde vemos o mundo em 3D). A listinha do canto direito é o Explorer (onde aparece o nome de tudo o que existe na cena). Acertou a criança que apontar corretamente as duas áreas.`,
    },
    {
      titulo: `O que é importar?`,
      tipo: `Roda de conversa com analogia`,
      tempo: `5 minutos`,
      guiaProfessor: `Use logo após mostrar o botão Import 3D. Conduza a conversa com a analogia da caixa de brinquedos. Deixe cada criança dar a sua explicação com as próprias palavras; o objetivo é que entendam a ideia, não decorar a frase.`,
      atividade: `Explique com as suas palavras: o que quer dizer "importar" um modelo para o Roblox Studio? Pense na caixa de brinquedos para ajudar.`,
      gabarito: `Importar é trazer uma coisa de fora para dentro do programa, como tirar um brinquedo da caixa e colocar em cima da mesa do jogo. Qualquer resposta que mostre essa ideia (trazer o modelo do Maya para dentro do Roblox) está correta.`,
    },
    {
      titulo: `A ordem certa de importar`,
      tipo: `Jogo de ordenar (sequência)`,
      tempo: `8 minutos`,
      guiaProfessor: `Escreva ou mostre os passos embaralhados no quadro. Peça que a turma os coloque na ordem certa, apontando. Faça junto com elas, reforçando o caminho enquanto ordena. Serve como revisão logo antes de cada criança importar o próprio modelo.`,
      atividade: `Coloque estes passos na ordem certa de importar um modelo: (A) clicar no botão Import (Importar); (B) clicar na aba Home (Início); (C) escolher o arquivo do modelo e clicar em Open (Abrir); (D) clicar em Import 3D (Importar 3D).`,
      gabarito: `A ordem correta é: B (clicar na aba Home), depois D (clicar em Import 3D), depois C (escolher o arquivo e clicar em Open) e por fim A (clicar em Import na janela de prévia). Assim o modelo entra na cena.`,
    },
    {
      titulo: `Meu modelo entrou no jogo!`,
      tipo: `Mão na massa guiada (prática real)`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o coração da aula. Sente-se ao lado de cada criança e conduza o caminho completo: aba Home, Import 3D, escolher o arquivo dela, clicar em Open e em Import, e depois arrastar o modelo para o chão. Deixe a própria criança clicar e arrastar. Confirme que o nome apareceu no Explorer antes de passar para a próxima.`,
      atividade: `Com o professor do seu lado, importe um modelo seu de verdade: clique na aba Home, depois em Import 3D, escolha o seu arquivo, clique em Import e arraste o modelo para o chão do mapa. Procure o nome dele no Explorer.`,
      gabarito: `O exercício está correto quando o modelo da criança aparece na Viewport, está posicionado sobre o chão (Baseplate) e o nome dele aparece na lista do Explorer. Sinal de êxito: a criança consegue clicar no nome no Explorer e ver o modelo ficar selecionado na cena.`,
    },
    {
      titulo: `Dois modelos lado a lado`,
      tipo: `Desafio de posicionamento na cena`,
      tempo: `7 minutos`,
      guiaProfessor: `Proponha depois que a criança importou o primeiro modelo com sucesso. Oriente a repetir o caminho de importar e, desta vez, a usar a rodinha do mouse para dar zoom e o botão direito para girar a câmera, deixando os dois modelos bem posicionados. Ajude quem perder a peça de vista a reencontrá-la pelo Explorer.`,
      atividade: `Importe um segundo modelo e arraste-o para ficar ao lado do primeiro, sem um ficar em cima do outro. Use a rodinha do mouse para dar zoom e veja os dois modelos juntos na cena.`,
      gabarito: `O desafio é cumprido quando os dois modelos estão na Viewport, separados e bem posicionados sobre o chão, e os dois nomes aparecem na lista do Explorer. Isso mostra que a criança já sabe importar e organizar mais de um modelo no mapa.`,
    },
  ],
};
