import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Meu mundo navegável está pronto!",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar a primeira versão do mundo navegável no Roblox Studio, salvar o projeto e apresentar o mundo para a turma percorrer.`,
  descricao: `Esta é a última aula do mês e a grande celebração do trabalho de todos! Durante quatro semanas, cada criança trouxe seus modelos do Maya, colocou cada peça no lugar certo, construiu o chão do mundo, espalhou os itens pelo cenário, caçou os problemas e arrumou o que faltava. Agora chegou o momento de juntar tudo, dar os últimos retoques e dizer com orgulho: "Meu mundo está pronto para ser visitado!"

Nesta aula o foco é a finalização. Vamos fazer os ajustes finais nos caminhos por onde o personagem anda, garantir que o jogo começa em um lugar bom (o ponto de partida, chamado de spawn) e que dá para caminhar do início ao fim sem ficar preso. Não é hora de inventar coisas novas: é hora de deixar bonito e funcionando o que já existe. Pense como quem arruma a casa antes de receber visita.

Depois dos ajustes, cada aluno vai salvar o projeto com cuidado, usando o menu File e a opção Save (ou Publish to Roblox para guardar na nuvem). Salvar é tão importante quanto construir, porque protege todo o esforço da criança. Um mundo salvo é um mundo que não se perde.

Por fim, vem o melhor momento: a apresentação. Cada criança mostra o mundo no projetor e a turma percorre o cenário juntos, andando com o personagem, descobrindo os caminhos e elogiando as ideias dos colegas. É a entrega do mês acontecendo na frente de todos, com aplausos e muita alegria. O professor conduz com gentileza, valorizando cada mundo, por mais simples que seja.`,
  materiais: [
    `Computadores com o Roblox Studio aberto, um por aluno, com o projeto do mês já carregado`,
    `Projetor ou TV grande conectado ao computador do professor para as apresentações`,
    `Um mundo-exemplo já finalizado e testado pelo professor, para mostrar como fica o resultado pronto`,
    `Lista de verificação impressa (checklist) com os itens "tem spawn?", "dá para andar?", "está salvo?"`,
    `Crachás ou adesivos de "Criador de Mundos" para entregar a cada criança no final`,
    `Caixa de som do computador para tocar uma musiquinha de celebração durante a roda de apresentações`,
  ],
  conceitosChave: [
    `Mundo navegável — um cenário onde o personagem consegue andar do começo ao fim sem ficar preso.`,
    `Spawn — o lugar onde o personagem nasce quando o jogo começa; é o ponto de partida da aventura.`,
    `Play (botão de teste) — o botão verde de jogar que deixa você entrar no mundo e andar para testar.`,
    `Salvar — guardar o projeto no computador ou na nuvem para que o trabalho não se perca nunca.`,
    `Publish to Roblox — guardar o jogo na nuvem da Roblox, como mandar a foto para um álbum na internet.`,
    `Apresentação — o momento de mostrar o seu mundo para a turma e deixar todos passearem por ele.`,
    `Versão final — a forma pronta e arrumada do projeto, depois de todos os ajustes do mês.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é mais simples no técnico e mais rica no emocional: o objetivo é fechar o entregável do mês. Não introduza nada novo. Use o que a turma já construiu. Antes da aula, abra o Roblox Studio e o projeto-exemplo. Confira três coisas no seu mundo: existe um objeto SpawnLocation (o tapetinho onde o personagem nasce), o botão azul Play no topo funciona, e o menu File mostra a opção Save ou Publish to Roblox. Saber onde fica o botão Play (canto superior, na faixa azul chamada barra de ferramentas) e o botão Stop (quadradinho vermelho ao lado) é o suficiente. Se aparecer SpawnLocation no painel Explorer (lista à direita), está tudo certo para começar.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: reúna a turma e relembre a jornada do mês. Pergunte: "O que vocês já fizeram no mundo?" Mostre o mundo-exemplo no projetor, clique no botão Play (faixa azul, no topo) e ande com as setas do teclado para a turma ver um mundo pronto. Diga que hoje todos vão deixar o mundo deles assim.

15 min — Conteúdo novo guiado: ensine duas coisas. Primeiro, o ponto de partida. No painel Explorer (à direita), procure SpawnLocation; se não houver, vá em Home, clique em Spawn (ou arraste um SpawnLocation) e posicione num caminho aberto. Segundo, salvar. Abra o menu File (canto superior esquerdo) e mostre Save to File e Publish to Roblox. Faça uma vez na frente deles, devagar, narrando cada clique.

25 min — Mão na massa: cada aluno, no seu computador, faz três tarefas com a checklist na mesa. Tarefa 1: clicar em Play e tentar andar do spawn até o outro lado do mapa; se travar em algum lugar, afastar o objeto que está no caminho e testar de novo. Tarefa 2: conferir se o spawn está num lugar bom e plano. Tarefa 3: salvar pelo menu File. Circule pela sala, ajude um por um, e clique em Stop (quadradinho vermelho) com quem esquecer de sair do teste.

10 min — Desafio e compartilhar: roda de apresentações. Conecte o computador de cada criança (ou peça que tragam o arquivo) ao projetor. Cada aluno aperta Play e mostra um cantinho favorito enquanto a turma "passeia" junto. Aplauda todos. Entregue o crachá de Criador de Mundos.

## Como explicar para crianças

Use a analogia da casa pronta para a visita: "Antes dos amigos chegarem, a gente arruma a casa, abre a porta e deixa o caminho livre. Hoje vamos arrumar o nosso mundo para a turma visitar!" Para o spawn, diga: "É o lugar onde o seu personagem acorda quando o jogo começa, como a porta da frente." Para o salvar, use a foto: "Salvar é como tirar uma foto do seu mundo para nunca perder." Fale com entusiasmo, celebre cada conquista e lembre que mundo simples também é mundo lindo.

## Erros comuns e como ajudar

O erro mais comum é a criança esquecer de clicar em Stop e continuar mexendo no modo de teste; mostre o quadradinho vermelho e diga "primeiro a gente sai do jogo, depois arruma". Outro erro é o personagem nascer caindo no vazio, porque o spawn ficou fora do chão; ajude a arrastar o SpawnLocation para cima de uma parte plana do mapa. Algumas crianças travam num item no caminho; mostre como selecionar e afastar a peça com a ferramenta Move (a setinha de quatro pontas). Há quem esqueça de salvar; faça do salvar um ritual coletivo, todos juntos no menu File ao mesmo tempo. Por fim, na apresentação, valorize quem está tímido com perguntas gentis como "qual foi a parte mais difícil de construir?".`,
  exercicios: [
    {
      titulo: `Checklist do mundo pronto`,
      tipo: `Verificação guiada`,
      tempo: `5 minutos`,
      guiaProfessor: `Distribua a lista impressa e leia item por item em voz alta. As crianças marcam um X em cada coisa que já está pronta no mundo delas. Ande pela sala confirmando junto.`,
      atividade: `Olhe o seu mundo e marque na lista: 1) Tem o tapetinho de nascer (spawn)? 2) Dá para andar pelo menos um pouquinho? 3) O mundo está salvo?`,
      gabarito: `As três respostas devem ficar marcadas como "sim". Se algum item ficar sem marca, é justamente o que a criança vai arrumar durante a aula. O professor confirma cada marcação olhando o painel Explorer (spawn) e testando o Play.`,
    },
    {
      titulo: `Achando o ponto de partida`,
      tipo: `Caça ao objeto na tela`,
      tempo: `7 minutos`,
      guiaProfessor: `Peça que cada aluno encontre o SpawnLocation no painel Explorer (lista à direita) e clique nele. Se não existir, ajude a adicionar pelo botão Spawn no menu Home.`,
      atividade: `Procure no painel da direita (Explorer) a palavra "SpawnLocation" e clique nela. O tapetinho de nascer vai ficar selecionado no mundo. Mostre para o professor onde ele está.`,
      gabarito: `O SpawnLocation aparece selecionado (com contorno) sobre uma parte plana do chão. Se não havia spawn, depois do exercício deve existir um, posicionado num caminho aberto e não no vazio.`,
    },
    {
      titulo: `Teste de caminhada`,
      tipo: `Teste prático no Play`,
      tempo: `8 minutos`,
      guiaProfessor: `Oriente a clicar no botão Play (faixa azul, topo) e andar com as setas do teclado. Observe se o personagem trava em algum item e ajude a afastar o obstáculo com a ferramenta Move. Lembre de clicar em Stop ao terminar.`,
      atividade: `Clique em Play e ande com o seu personagem do começo do mapa até o outro lado. Se ficar preso em algum lugar, anote onde travou. Depois clique em Stop para sair do teste.`,
      gabarito: `O personagem consegue caminhar do spawn por boa parte do mapa. Pontos onde ele trava são obstáculos a afastar. Sucesso é completar a travessia ou identificar e corrigir pelo menos um ponto de bloqueio.`,
    },
    {
      titulo: `Salvando o meu mundo`,
      tipo: `Tarefa de finalização`,
      tempo: `5 minutos`,
      guiaProfessor: `Conduza o salvamento coletivo. Todos abrem o menu File ao mesmo tempo e escolhem Save to File ou Publish to Roblox. Confira na tela de cada um que o salvamento concluiu.`,
      atividade: `Abra o menu File (canto superior esquerdo) e clique em Save to File para guardar o seu mundo no computador. Espere a mensagem de que foi salvo.`,
      gabarito: `O projeto é salvo com sucesso, sem mensagem de erro. O nome do arquivo aparece na barra de título da janela. Toda criança termina com o seu mundo guardado e protegido.`,
    },
    {
      titulo: `Apresentando para a turma`,
      tipo: `Apresentação e celebração`,
      tempo: `10 minutos`,
      guiaProfessor: `Conecte o computador de cada aluno ao projetor. Cada criança aperta Play e guia um pequeno passeio pelo mundo, mostrando um cantinho favorito. Conduza os aplausos e faça uma pergunta gentil a quem estiver tímido.`,
      atividade: `Mostre o seu mundo no projetor, aperte Play e leve a turma para um passeio pelo lugar que você mais gostou de construir. Conte uma coisa que foi difícil e uma que foi divertida.`,
      gabarito: `Cada aluno apresenta o seu mundo navegável funcionando, conduz o passeio e responde às duas perguntas. Sucesso é todos compartilharem, com a turma percorrendo cada mundo e aplaudindo os colegas.`,
    },
  ],
};
