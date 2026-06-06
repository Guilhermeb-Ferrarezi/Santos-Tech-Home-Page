import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Testar, Ajustar e Deixar Top",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança aprende a apertar o botão Play para testar o próprio jogo e, com ajuda do professor, ajusta posições, troca cores e arruma detalhes até ele ficar pronto para jogar.`,
  descricao: `Nesta aula entramos numa parte muito importante da criação de jogos: testar e melhorar. Até agora as crianças construíram o cenário e colocaram o personagem no mundo novo. Mas todo jogo de verdade precisa ser experimentado antes de ficar pronto. É como provar a comida antes de servir: a gente prova, sente o que falta e ajusta o tempero. No Roblox Studio, "provar" o jogo é apertar o botão Play e entrar dentro dele para ver o que acontece.

Quando a criança aperta Play, ela vira jogadora do próprio jogo. Ela anda, pula, olha o cenário de pertinho e descobre coisas que não dava para ver só montando: uma parede no lugar errado, uma cor que ficou estranha, um bloco flutuando no ar ou um buraco no chão. Esse momento de descobrir o que precisa melhorar se chama "testar". É super divertido e mostra para a criança que errar faz parte e que todo jogo pode ficar melhor.

Depois de testar, vem o ajuste. O professor mostra como sair do modo de jogar (apertar Stop), voltar para o modo de montar e arrumar o que foi descoberto. Ajustar é mover peças para o lugar certo, trocar a cor de um objeto, levantar algo que afundou no chão ou aproximar duas peças que ficaram longe. A cada ajuste, a criança testa de novo. Esse ciclo de testar, ajustar e testar outra vez é o coração do trabalho de quem faz jogos.

No fim, o objetivo é deixar o jogo "top": funcionando direitinho, bonito e gostoso de jogar. As crianças não precisam de um jogo perfeito; precisam aprender que olhar com carinho, perceber o que dá para melhorar e mexer com calma deixa qualquer projeto melhor. Essa aula prepara o terreno para a próxima semana, quando o jogo finalmente vai ser publicado.`,
  materiais: [
    `Computadores (um por aluno, ou em duplas) com o Roblox Studio aberto no projeto do mês de cada criança.`,
    `Projetor ou TV grande para o professor demonstrar onde clicar e mostrar o passo a passo.`,
    `Um projeto de exemplo simples, com alguns "errinhos" de propósito (um bloco flutuando, uma cor feia, uma peça torta) para o professor mostrar como testar e ajustar.`,
    `Fones de ouvido para cada criança, caso os jogos tenham sons (opcional, mas ajuda na concentração).`,
    `Cartões "ANTES e DEPOIS": papéis grandes para a criança desenhar um detalhe do jogo antes e depois do ajuste.`,
    `Adesivos ou carimbos de "TOP!" para celebrar cada melhoria feita.`,
    `Lista de checagem ilustrada (com figurinhas): chão, cores, personagem no lugar, sem buracos, sem peça voando.`,
  ],
  conceitosChave: [
    `Testar — apertar o botão Play e entrar no jogo para ver o que funciona e o que está estranho.`,
    `Botão Play — o botão de seta (triângulo) no topo do Roblox Studio que faz a gente entrar no jogo e começar a jogar.`,
    `Botão Stop — o botão de quadradinho que faz a gente sair do jogo e voltar a montar.`,
    `Ajustar — arrumar um detalhe: mover uma peça, trocar a cor, levantar algo que afundou no chão.`,
    `Bug — um errinho do jogo, tipo uma peça voando ou um buraco no chão onde a gente cai.`,
    `Cor (Color) — a propriedade que deixa um objeto de uma cor diferente; a gente troca no painel de propriedades.`,
    `Deixar top — o momento em que o jogo está funcionando, bonito e gostoso de jogar.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Esta aula gira em torno de um ciclo simples: testar, ajustar, testar de novo. No Roblox Studio, "testar" é entrar no modo de jogo apertando o botão Play; "ajustar" é voltar ao modo de edição e corrigir o que apareceu de errado. Você não precisa dominar programação para conduzir esta aula. Precisa apenas saber três botões e três tipos de ajuste.

Os botões ficam na aba "Home" (Início), no topo da tela, num grupo chamado "Test" (Teste). O botão Play é o triângulo (seta) e tem o atalho F5. Quando você aperta, o personagem aparece no mundo e você joga de verdade: anda com as teclas W, A, S, D e pula com a barra de espaço. O botão Stop é o quadradinho (atalho Shift+F5) e te devolve ao modo de montar. Regra de ouro: tudo que a criança mexer DENTRO do modo Play (com o jogo rodando) NÃO é salvo. Os ajustes de verdade são feitos com o jogo PARADO (depois do Stop).

Os três ajustes que as crianças mais vão precisar: 1) mover uma peça para o lugar certo, usando a ferramenta "Move" (Mover, as setas coloridas) ao clicar e arrastar; 2) levantar uma peça que afundou no chão, arrastando a seta verde (eixo de cima) para cima; 3) trocar a cor, selecionando a peça e mudando o campo "Color" no painel "Properties" (Propriedades), ou usando o botão "Color" na aba Home.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: Receba a turma e relembre o que cada um construiu. Pergunte: "O que será que acontece quando a gente entra dentro do nosso jogo?" Mostre no projetor seu projeto de exemplo cheio de errinhos e diga que hoje vamos virar detetives de jogo.

15 min — Conteúdo novo guiado: No projetor, vá na aba "Home" e mostre o botão Play (seta) no grupo "Test". Aperte e entre no jogo de exemplo. Ande, pule, mostre um erro de propósito ("Olha, esse bloco está voando!"). Aperte "Stop" (quadradinho) e volte a montar. Corrija o bloco com a ferramenta "Move" e troque uma cor feia no painel "Properties", campo "Color". Aperte Play de novo e mostre que melhorou. Repita devagar, nomeando cada botão.

25 min — Mão na massa: Cada criança aperta Play no próprio jogo e testa. Passe de mesa em mesa. Peça que digam um errinho que acharam. Ajude a apertar Stop e a corrigir: mover peça, levantar do chão ou trocar cor. Incentive testar de novo depois de cada ajuste. Use a lista de checagem ilustrada para guiar o olhar.

10 min — Desafio e compartilhar: Lance o desafio "ache e conserte 1 coisa". Depois, cada um mostra rapidinho um "antes e depois" para a turma. Dê o adesivo "TOP!" para cada melhoria.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a ideia de "provar a comida": antes de servir, a gente prova e ajusta o tempero. Testar o jogo é provar; ajustar é temperar. Outra analogia: somos "detetives de jogo" procurando pistas do que está estranho. Chame os erros de "errinhos" ou "bugs", nunca de fracasso. Diga sempre: "Errinho é normal, todo jogo tem, e a gente conserta!" Use gestos grandes ao mostrar o botão de seta (Play) e o quadradinho (Stop). Para cor, diga "vamos pintar essa peça". Comemore cada ajuste em voz alta.

## Erros comuns e como ajudar

O erro mais comum é a criança ajustar DENTRO do modo Play e o trabalho sumir ao parar. Reforce sempre: "Para arrumar, primeiro aperta o quadradinho (Stop)." Outro erro é mover a peça por engano para muito longe ou para baixo do chão; ensine a usar só a seta verde para subir e a olhar de vários ângulos. Algumas crianças apagam peças sem querer: mostre o "Undo" (Desfazer, a setinha curva, atalho Ctrl+Z). Há quem queira mexer em tudo e se perca; combine "um errinho de cada vez". E se a criança travar achando que está "feio demais", lembre que o objetivo é melhorar um pouquinho, não ficar perfeito.`,
  exercicios: [
    {
      titulo: `Detetive do Play`,
      tipo: `Prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Reúna a turma de olho no projetor e relembre onde fica o botão Play (seta) na aba Home, grupo Test. Explique que cada um vai apertar Play no próprio jogo só para olhar, como um detetive procurando pistas. Diga que ainda não é hora de arrumar, só de descobrir.`,
      atividade: `Aperte o botão Play (a seta) e entre no seu jogo. Ande com as teclas W, A, S, D e pule com a barra de espaço. Encontre UMA coisa estranha (um bloco voando, um buraco, uma cor feia). Depois aperte Stop (o quadradinho) para voltar a montar.`,
      gabarito: `A criança acerta se conseguir entrar no jogo apertando Play, andar/pular pelo cenário, apontar em voz alta pelo menos um detalhe estranho e voltar ao modo de montar apertando Stop. O professor confirma vendo o personagem se mexer na tela e a criança nomeando um "errinho".`,
    },
    {
      titulo: `Levanta esse Bloco!`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre no projetor uma peça que afundou no chão e ensine a ferramenta Move (Mover), as setas coloridas. Destaque que a seta VERDE sobe e desce. Lembre a regra de ouro: arrumar só com o jogo PARADO (depois do Stop). Passe nas mesas ajudando a selecionar a peça certa.`,
      atividade: `Com o jogo parado, clique numa peça que está afundada ou torta. Use a ferramenta Move (as setas) e puxe a seta verde para cima para deixá-la em cima do chão, no lugar certinho. Aperte Play e veja se melhorou.`,
      gabarito: `A criança acerta quando a peça escolhida fica apoiada no chão, sem afundar nem flutuar, e ela consegue confirmar a melhora apertando Play. O professor checa olhando a peça alinhada ao cenário e a criança usando a seta verde de propósito.`,
    },
    {
      titulo: `Pintando o Jogo`,
      tipo: `Desenho / papel + ferramenta`,
      tempo: `9 min`,
      guiaProfessor: `Entregue os cartões "ANTES e DEPOIS". Primeiro a criança desenha no papel a cor que quer dar a um objeto do jogo. Depois mostre no Studio como trocar a cor: selecionar a peça e mudar o campo Color no painel Properties (ou o botão Color na aba Home). Assim ela planeja e executa.`,
      atividade: `No papel, pinte como você quer que fique uma peça do seu jogo (ex.: a casa azul). Depois, no Roblox Studio, clique nessa peça e troque a cor no campo Color até ficar igual ao seu desenho. Mostre o antes (no papel) e o depois (na tela).`,
      gabarito: `A criança acerta quando a cor da peça no jogo corresponde à cor que ela planejou no desenho, e ela sabe dizer que mexeu no campo Color. O professor confirma comparando o cartão com a tela e vendo a cor realmente trocada.`,
    },
    {
      titulo: `Roda dos Errinhos`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Sente a turma em roda. Conduza a conversa com a ideia de que "errinho é normal e a gente conserta". Cada criança conta um errinho que achou e como arrumou (ou como vai arrumar). Valide cada fala e ensine o nome "bug" de um jeito leve e divertido.`,
      atividade: `Na roda, cada um responde: "Qual errinho (bug) você achou no seu jogo?" e "Como você arrumou ou vai arrumar?". Escute os colegas e dê uma ideia para ajudar um amigo que ainda não sabe como consertar o dele.`,
      gabarito: `A criança acerta quando descreve com suas palavras pelo menos um problema do jogo e uma ação de ajuste (mover, levantar, trocar cor) e consegue ouvir e dar uma sugestão a um colega. O professor avalia pela participação e pela ligação entre o erro citado e a solução proposta.`,
    },
    {
      titulo: `Desafio Deixar Top`,
      tipo: `Desafio`,
      tempo: `10 min`,
      guiaProfessor: `Apresente como o desafio final da aula: usar tudo que aprenderam para deixar o jogo "top". Entregue a lista de checagem ilustrada e diga que o objetivo é consertar pelo menos um detalhe e fazer o ciclo completo: testar, ajustar e testar de novo. Circule garantindo que cada um aperte Stop antes de arrumar e Play depois.`,
      atividade: `Use a lista de checagem (chão, cores, personagem no lugar, sem buracos, sem peça voando). Aperte Play e teste. Ache um detalhe para melhorar, aperte Stop e ajuste (mover, levantar ou trocar cor). Aperte Play de novo para conferir. Mostre seu "antes e depois" para a turma e ganhe o adesivo TOP!`,
      gabarito: `A criança acerta quando completa o ciclo testar-ajustar-testar pelo menos uma vez, mostrando uma melhoria real (um item da lista resolvido) e explicando o que mudou. O professor confirma vendo o antes e depois e a criança usando Play e Stop nos momentos certos.`,
    },
  ],
};
