import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Do Jogo para a Vida Real: A Missão da Impressão 3D",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Apresentar a etapa final do projeto do jogo — transformar os personagens digitais em objetos físicos — fazendo o aluno entender o fluxo Maya, Bambu Studio e impressora 3D e escolher quais personagens e itens vai imprimir.`,
  descricao: `Nesta aula começa uma fase mágica do Ano 3: pegar os personagens e itens que o aluno criou no jogo e trazê-los para o mundo real, em plástico, na palma da mão. Até agora tudo viveu dentro da tela — no Roblox Studio o aluno programou em Lua, e no Maya modelou e deu acabamento nos personagens e objetos. Agora esses modelos vão virar miniaturas de verdade, impressas em 3D. É o momento em que o jogo "sai do computador".

Para isso, o aluno precisa entender um caminho com três paradas, como uma viagem. A primeira parada é o Maya, onde o personagem nasceu em 3D: de lá sai um arquivo do modelo. A segunda parada é o Bambu Studio, um programa que prepara o modelo para a impressão, decidindo tamanho, posição e como o plástico vai ser depositado camada por camada. A terceira parada é a impressora 3D, a máquina que constrói o objeto na vida real, derretendo um fio de plástico e empilhando camadas finíssimas até formar a peça. Cada parada tem uma função, e nenhuma pode ser pulada.

Esta primeira aula é mais de planejamento e visão do que de cliques. O aluno ainda não vai imprimir nada hoje — vai entender o processo inteiro, ver exemplos de peças impressas e, principalmente, escolher com cuidado quais personagens e itens do próprio jogo fazem sentido imprimir. Nem tudo que é lindo na tela imprime bem: peças muito finas quebram, partes soltas no ar precisam de apoio e detalhes minúsculos somem. Por isso o aluno vai aprender a olhar os próprios modelos com olhos de quem vai fabricá-los.

O foco do mês é "Imprimir os personagens do jogo", e o entregável é ter os personagens e itens do jogo na vida real. Esta aula planta a semente: ao final, cada aluno terá uma lista escrita de 2 a 4 peças escolhidas, sabendo justificar por que escolheu cada uma. As próximas aulas vão resgatar os modelos do Maya, conhecer o Bambu Studio a fundo, ajustar, fatiar, imprimir, dar acabamento e apresentar. Hoje é o mapa da missão.`,
  materiais: [
    `Computadores com o Bambu Studio (impressão 3D) já instalado, um por aluno, apenas para abrir e olhar a tela inicial`,
    `Projetor ou TV grande para o professor mostrar o fluxo Maya, Bambu Studio e impressora 3D`,
    `Impressora 3D da sala ligada e visível (ou fotos e um vídeo curto, caso a máquina ainda não esteja disponível)`,
    `Peças já impressas em 3D para passar de mão em mão (miniaturas, chaveiros, um personagem simples)`,
    `Arquivos de exemplo: um modelo 3D de personagem (.stl ou .3mf) e um print da cena do jogo de exemplo`,
    `Folha de planejamento impressa ou documento simples para o aluno listar as peças que vai imprimir`,
    `Editor de código e navegador disponíveis para abrir o projeto do jogo do aluno e revisar os personagens`,
  ],
  conceitosChave: [
    `Impressão 3D — técnica que constrói um objeto físico camada por camada, derretendo e empilhando fio de plástico até formar a peça.`,
    `Fluxo de produção — o caminho completo do projeto: Maya (modelo) para Bambu Studio (preparação) para impressora 3D (peça real).`,
    `Modelo 3D — o arquivo digital com a forma do personagem ou item, feito no Maya, que será impresso.`,
    `Bambu Studio — programa que prepara o modelo para a impressão: define tamanho, posição e como o plástico será depositado.`,
    `Filamento — o fio de plástico (geralmente PLA) que a impressora derrete para construir a peça.`,
    `Imprimível — característica de um modelo que pode ser impresso sem quebrar: sem partes muito finas ou frágeis demais.`,
    `Entregável do mês — o resultado final combinado: os personagens e itens do jogo transformados em objetos reais.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar a impressão 3D para dar esta aula. Ela é de visão geral e escolha, não de operação da máquina. Você precisa segurar três ideias com firmeza. Primeira: existe um caminho de três paradas — Maya, Bambu Studio e impressora — e o aluno deve saber nomear cada uma e o que ela faz. Segunda: a impressora trabalha por camadas, empilhando plástico derretido de baixo para cima, igual a construir um bolo com fatias muito finas. Terceira: nem todo modelo bonito é imprimível; peças muito finas, pontudas ou com partes soltas no ar dão problema. Se possível, antes da aula, abra o Bambu Studio uma vez só para ver a tela inicial e ter uma peça impressa na mão para mostrar. Isso já basta.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão. Mostre na tela grande um personagem do jogo de exemplo, ainda dentro do Maya ou do Roblox. Pergunte: "E se a gente pudesse pegar este personagem e botar na mão de verdade?" Passe uma peça impressa de mão em mão. Deixe a turma reagir. Conecte: "Foi assim que esta peça nasceu — começou numa tela, igual aos seus personagens."

15 min, conteúdo novo guiado. Desenhe no quadro as três paradas da viagem: Maya, Bambu Studio, impressora 3D. Explique cada uma em uma frase. No projetor, abra o Bambu Studio só para mostrar a tela inicial e a plataforma de impressão (a área onde a peça aparece). Não mexa em nada técnico ainda. Depois, mostre a impressora real (ou o vídeo) construindo uma peça camada por camada. Por fim, mostre dois modelos: um bom para imprimir (formato cheio e firme) e um ruim (espada fininha, antena pontuda) e pergunte qual deles vai quebrar.

25 min, mão na massa. Cada aluno abre o próprio projeto do jogo no editor ou no navegador e revê seus personagens e itens. Com a folha de planejamento, lista de 2 a 4 peças que gostaria de imprimir. Para cada peça, escreve o nome, por que escolheu e um possível problema (parte fina, detalhe pequeno). Circule pela sala ajudando a julgar o que é imprimível. Quem quiser, abre o Bambu Studio para olhar a tela enquanto pensa.

10 min, desafio e compartilhar. Cada aluno conta para a turma a peça preferida da sua lista e o motivo. Faça uma votação rápida: "Qual peça da turma vai ficar mais legal impressa?" Encerre lembrando o entregável do mês: os personagens do jogo na vida real, e diga que na próxima aula eles vão resgatar esses modelos lá do Maya.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem da viagem com três paradas: "O personagem pega um ônibus. Sobe no Maya, troca de ônibus no Bambu Studio e desce na impressora, já em plástico." Para as camadas, diga: "A impressora não esculpe; ela empilha. É como construir uma torre de panquecas muito finas." Para o que é imprimível, use a mão: "Se uma parte é mais fina que um espaguete, ela quebra. Se tem um braço esticado no ar sem apoio, ele cai." Sempre amarre no jogo do aluno: "Qual personagem seu você mais quer segurar na mão?" Evite termos técnicos pesados; fale "preparar para imprimir" antes de falar "fatiar".

## Erros comuns e como ajudar

O erro mais comum nesta aula é o aluno querer imprimir o cenário inteiro do jogo de uma vez. Reoriente para personagens e itens pequenos e marcantes. Outro erro é escolher peças impossíveis de imprimir — muito finas ou cheias de detalhes minúsculos; ajude a perceber o problema com a regra do espaguete. Alguns acham que vão imprimir hoje e ficam ansiosos; deixe claro que hoje é planejamento e que a impressão chega nas próximas aulas. Há quem confunda as três paradas; volte ao desenho do quadro sempre que precisar. Por fim, se um aluno não achar o próprio modelo, tranquilize: na Aula 2 a turma inteira vai resgatar os arquivos do Maya juntos.`,
  exercicios: [
    {
      titulo: `As três paradas da viagem`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Mantenha o desenho das três paradas visível no quadro. Faça a turma repetir a ordem em voz alta antes de pedir respostas individuais. Aceite respostas com as próprias palavras.`,
      atividade: `Em uma frase para cada parada, explique o que acontece no Maya, no Bambu Studio e na impressora 3D, na ordem certa do caminho.`,
      gabarito: `Maya: é onde o modelo 3D do personagem é criado e de onde sai o arquivo. Bambu Studio: prepara o modelo para a impressão, definindo tamanho, posição e como o plástico será depositado. Impressora 3D: constrói a peça real, camada por camada, derretendo o filamento. A ordem correta é Maya, depois Bambu Studio, depois impressora.`,
    },
    {
      titulo: `Vai imprimir ou vai quebrar?`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre pares de modelos no projetor: um firme e um frágil. Use a regra do espaguete: mais fino que um espaguete, quebra. Peça que justifiquem cada escolha.`,
      atividade: `Olhe três modelos mostrados pelo professor (por exemplo: um boneco cheinho, uma espada fininha e uma estrela com pontas longas e finas). Para cada um, escreva "imprime bem" ou "pode quebrar" e diga por quê.`,
      gabarito: `Boneco cheinho: imprime bem, porque é firme e não tem partes muito finas. Espada fininha: pode quebrar, porque a lâmina é fina demais e frágil. Estrela com pontas longas e finas: pode quebrar, porque as pontas são finas e podem partir. A justificativa precisa citar a espessura ou a fragilidade da parte.`,
    },
    {
      titulo: `Minha lista de peças do jogo`,
      tipo: `prática no computador`,
      tempo: `12 minutos`,
      guiaProfessor: `Garanta que cada aluno abra o próprio projeto do jogo. Limite a lista a 2 a 4 peças e exija um motivo por peça. Circule ajudando a evitar escolhas impossíveis de imprimir.`,
      atividade: `Abra o seu jogo e escolha de 2 a 4 personagens ou itens que você quer imprimir. Na folha de planejamento, escreva o nome de cada peça e, ao lado, uma frase com o motivo da escolha.`,
      gabarito: `A lista deve ter de 2 a 4 peças do próprio jogo, cada uma com um motivo. Exemplo válido: "Herói principal — é o personagem mais importante do meu jogo"; "Moeda dourada — é o item que aparece o tempo todo". A lista está correta quando todas as peças vêm do jogo do aluno e têm justificativa, evitando cenários grandes demais.`,
    },
    {
      titulo: `Caça ao problema na minha peça`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Cada aluno analisa a peça preferida do colega procurando partes finas, soltas no ar ou detalhes minúsculos. Reforce que apontar problema cedo evita peça quebrada depois.`,
      atividade: `Em dupla, troquem as listas. Escolha a peça preferida do colega e aponte pelo menos um possível problema para imprimir (parte fina, parte solta no ar ou detalhe muito pequeno). Anote a sugestão na folha do colega.`,
      gabarito: `Cada dupla deve identificar ao menos um problema real de impressão por peça analisada. Exemplos válidos: "O cabelo do personagem é muito fino, pode quebrar"; "O braço está esticado para o lado e vai precisar de apoio"; "O botão da roupa é detalhe pequeno demais e pode sumir". A resposta está correta quando o problema apontado tem relação com espessura, partes soltas no ar ou detalhes minúsculos.`,
    },
    {
      titulo: `O mapa da missão do mês`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Peça que o aluno organize a folha de planejamento como um pequeno plano do mês. Conecte cada item ao entregável: personagens do jogo na vida real. Use o resultado como ponto de partida da Aula 2.`,
      atividade: `Monte o seu "mapa da missão": no topo, escreva o entregável do mês (meus personagens do jogo na vida real). Abaixo, liste em ordem de prioridade as peças escolhidas, cada uma com o motivo e o possível problema já anotado pela dupla. Termine escrevendo qual peça você quer imprimir primeiro.`,
      gabarito: `O mapa deve conter: o entregável do mês no topo; uma lista priorizada de 2 a 4 peças do próprio jogo; para cada peça, um motivo e um possível problema de impressão; e uma peça escolhida como a primeira a imprimir. Exemplo de fechamento válido: "Quero imprimir primeiro o Herói principal, porque é o mais importante e não tem partes muito finas." O mapa está completo quando todas essas partes aparecem e fazem sentido com o jogo do aluno.`,
    },
  ],
};
