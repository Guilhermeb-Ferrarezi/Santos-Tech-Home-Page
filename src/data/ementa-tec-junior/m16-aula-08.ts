import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Meu esqueleto de jogo pronto",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Consolidar e apresentar o esqueleto do jogo 2D no Construct 3, com pontos, níveis e power-ups funcionando, salvando o projeto e mostrando um jogo jogável para a turma.`,
  descricao: `Esta é a última aula do mês e também a mais especial: hoje cada criança coloca todas as peças no lugar e mostra que seu jogo está vivo. Durante quatro semanas a turma aprendeu a fazer os sprites entrarem em cena, o herói se mexer, criou as caixinhas mágicas (variáveis), montou a troca de fase, ligou os super poderes e adicionou itens com tempo de poder. Agora vamos juntar tudo numa revisão final e transformar essas peças num esqueleto de jogo completo e jogável.

O esqueleto de jogo é como o corpinho de um boneco antes das roupas: já tem braços, pernas e cabeça, mas ainda vai ganhar enfeites nos próximos meses. Hoje o aluno confere se os três sistemas principais estão funcionando: o sistema de pontos (a variável que sobe quando pega um item), o sistema de níveis (passar de fase quando cumpre um objetivo) e o sistema de power-up (o item que dá um poder temporário com tempo de duração). Não vamos criar nada novo; vamos revisar, testar, arrumar pequenos erros e deixar tudo redondo.

A grande estrela da aula é a apresentação. Cada criança roda o próprio jogo no modo Preview e mostra para os colegas o que construiu, contando o que cada sistema faz. Esse momento de compartilhar é poderoso: a criança percebe que terminou algo de verdade, ganha confiança e aprende vendo o jogo do amigo. O professor deve celebrar muito cada apresentação, por menor que seja o jogo.

Esta aula fecha a Etapa 2 de 4 do projeto do ano. O entregável do mês é justamente este: o esqueleto do jogo 2D com todos os sistemas, salvo na nuvem do Construct 3. Garanta que cada projeto esteja salvo com nome correto antes da criança ir embora, porque nos próximos meses ela vai continuar a partir daqui.`,
  materiais: [
    `Computadores com o Construct 3 já aberto no navegador e cada criança logada na sua conta`,
    `Projetor ou TV ligada na máquina do professor para mostrar passos e as apresentações`,
    `Um projeto-exemplo pronto do professor, com pontos, níveis e power-up funcionando, para servir de referência`,
    `Uma "Lista de Conferência" impressa ou no quadro (pontos, fase, power-up, salvar) para marcar com a turma`,
    `Crachás ou adesivos de "Game Pronto" para entregar após cada apresentação`,
    `Fones de ouvido (opcional), caso os jogos tenham som`,
  ],
  conceitosChave: [
    `Esqueleto de jogo — é o jogo com as partes principais funcionando, pronto para ganhar enfeites depois.`,
    `Sistema de pontos — a caixinha mágica (variável) que vai subindo de número cada vez que você pega algo.`,
    `Sistema de níveis — a regra que leva você para a próxima fase quando cumpre o objetivo.`,
    `Power-up — um item que dá um super poder por pouco tempo, como ficar mais rápido por alguns segundos.`,
    `Preview — o botão de play que faz seu jogo rodar de verdade para você testar.`,
    `Salvar na nuvem — guardar seu projeto na internet do Construct 3 para não perder e continuar depois.`,
    `Apresentar — mostrar seu jogo para a turma e contar o que cada parte faz.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você não vai ensinar nada novo: o trabalho é revisar, testar e celebrar. Antes da aula, abra o seu projeto-exemplo e confira que três coisas funcionam: o número de pontos sobe ao pegar um item, o jogo troca de Layout (fase) ao cumprir o objetivo, e o power-up liga e desliga sozinho com o tempo. No Construct 3, as fases são chamadas de "Layouts" (painel "Project" à direita). A lógica fica na aba "Event Sheet". O botão de testar é o "Preview" (ícone de play azul, no topo). Salvar é o ícone de disquete ou o menu "Menu > Save".

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): reúna a turma perto do projetor. Pergunte: "Quais são os três sistemas que montamos este mês?". Anote no quadro: PONTOS, FASE, POWER-UP. Rode o seu projeto-exemplo no Preview e mostre cada um acontecendo: pegue um item (os pontos sobem), cumpra o objetivo (troca de fase), pegue o power-up (o herói fica diferente por uns segundos). Diga: "Hoje cada um vai deixar o seu igualzinho, redondo e bonito!".

Conteúdo novo guiado (15 min): apresente a "Lista de Conferência" no quadro com quatro caixinhas: 1) Os pontos sobem? 2) Passa de fase? 3) O power-up liga e desliga? 4) O nome do projeto está certo? Mostre, no seu exemplo, ONDE conferir cada item. Para pontos e power-up, abra a aba "Event Sheet" e mostre o evento que muda a variável. Para a fase, mostre a ação "System > Go to layout". Para salvar, vá em "Menu" (canto superior esquerdo) e clique em "Save". Explique que salvar é como guardar o desenho na pasta para não perder.

Mão na massa (25 min): cada criança abre o próprio projeto e roda o Preview. Caminhe pela sala e ajude um a um a passar pela Lista de Conferência. Se algo não funciona, ajude a achar o evento certo na "Event Sheet" e arrume junto com a criança. Quando os quatro itens estiverem marcados, peça que a criança vá em "Menu > Save" e confira o nome do projeto (oriente um padrão, por exemplo "JogoDoNome"). Quem terminar antes pode ajustar pequenos detalhes, como o texto dos pontos na tela.

Desafio e compartilhar (10 min): chame as crianças, uma de cada vez, ao computador do professor (ou no próprio lugar com o projetor). Cada uma roda o Preview e mostra os três sistemas, dizendo em voz alta: "Aqui eu ganho ponto", "Aqui eu passo de fase", "Aqui é o meu poder". Entregue o adesivo de "Game Pronto". Termine com uma salva de palmas para a turma.

## Como explicar para crianças

Use a imagem do boneco: "Nosso jogo já é um bonequinho montado, com braço, perna e cabeça. Hoje a gente confere se cada parte mexe direitinho". Chame o salvar de "guardar na mochila da internet, para amanhã achar tudo no lugar". Diga que apresentar é "ser o dono do parque mostrando o brinquedo para os amigos". Reforce que não tem jogo errado: cada um é especial do jeito que é.

## Erros comuns e como ajudar

O erro mais comum é a criança esquecer de salvar ou salvar com nome trocado; circule pela sala e confirme um a um. Outra confusão é fechar o navegador sem salvar e achar que perdeu tudo; mostre que o Construct 3 guarda na conta. Algumas crianças vão querer mexer no jogo durante a apresentação do colega; combine antes que "mãos no colo quando o amigo está mostrando". Se um power-up não desligar, geralmente falta o evento de tempo ("System > Every X seconds" ou o "Wait"); abra a "Event Sheet" e arrume junto. Se a fase não trocar, confira se a ação "Go to layout" aponta para o Layout certo. Vá com calma: o objetivo hoje é cada criança sair feliz com um jogo que roda.`,
  exercicios: [
    {
      titulo: `Caça aos três sistemas`,
      tipo: `Revisão oral em grupo`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça com a turma toda, perto do projetor, no aquecimento. Rode o seu projeto-exemplo no Preview e peça que as crianças apontem na tela quando cada sistema acontecer. Vá nomeando: pontos, fase, power-up.`,
      atividade: `Observe o jogo do professor rodando e grite o nome do sistema certo na hora que ele acontecer: "PONTO!" quando o número subir, "FASE!" quando trocar de tela e "PODER!" quando o herói mudar com o power-up.`,
      gabarito: `O número subindo = sistema de pontos (variável). A troca de tela = sistema de níveis (ação Go to layout). O herói mudando por alguns segundos e voltando ao normal = power-up com tempo. São exatamente os três sistemas do mês.`,
    },
    {
      titulo: `A Lista de Conferência`,
      tipo: `Checklist individual`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue ou mostre a lista de quatro itens. Acompanhe cada criança abrindo o próprio projeto e rodando o Preview. Marque junto cada caixinha que funcionar.`,
      atividade: `Abra o seu jogo, clique no Preview (play azul) e teste: 1) os pontos sobem ao pegar o item? 2) você passa de fase ao cumprir o objetivo? 3) o power-up liga e depois desliga? 4) o nome do projeto está certo? Marque cada item que funcionar.`,
      gabarito: `Os quatro itens devem ficar marcados. Pontos: a variável aumenta no texto da tela. Fase: o jogo vai para o próximo Layout. Power-up: o poder aparece e some sozinho com o tempo. Nome: salvo como "JogoDoNome" ou o padrão combinado. Se algum falhar, é hora de arrumar na Event Sheet.`,
    },
    {
      titulo: `Conserto rápido na Event Sheet`,
      tipo: `Resolução de problema guiada`,
      tempo: `12 minutos`,
      guiaProfessor: `Para crianças cujo algum sistema não funcionou. Abra a "Event Sheet" junto com a criança e localize o evento problemático. Não conserte sozinho; guie a mão dela. Use o seu exemplo como referência ao lado.`,
      atividade: `Se o seu power-up não desligar, ache na Event Sheet o evento de tempo (System > Wait ou Every X seconds) e confira o número de segundos. Se a fase não trocar, ache a ação "Go to layout" e veja se ela aponta para a fase certa. Arrume com a ajuda do professor e teste de novo no Preview.`,
      gabarito: `Power-up que não desliga: faltava ou estava errado o evento de tempo que devolve o herói ao normal; ajustar o "Wait" ou o "Every X seconds" resolve. Fase que não troca: a ação "Go to layout" apontava para o Layout errado ou faltava a condição do objetivo; corrigir o destino faz a fase mudar. Após o conserto, o Preview deve mostrar o sistema funcionando.`,
    },
    {
      titulo: `Guardar na mochila da internet`,
      tipo: `Prática de salvamento`,
      tempo: `6 minutos`,
      guiaProfessor: `Garanta que TODA criança salve antes de apresentar. Verifique o nome de cada projeto um a um. Este é o passo que protege o entregável do mês.`,
      atividade: `Clique em "Menu" no canto de cima e depois em "Save". Confira se o nome do seu projeto está certo, no padrão combinado (por exemplo "JogoDoNome"). Espere aparecer a mensagem de que foi salvo.`,
      gabarito: `O projeto fica salvo na conta do Construct 3 (na nuvem), com o nome correto. A criança deve ver a confirmação de salvamento. Assim o esqueleto do jogo, que é o entregável do mês, não se perde e pode ser continuado nos próximos meses.`,
    },
    {
      titulo: `Eu sou o dono do meu jogo!`,
      tipo: `Apresentação para a turma`,
      tempo: `12 minutos`,
      guiaProfessor: `Momento alto da aula. Chame uma criança por vez. Peça silêncio respeitoso dos colegas ("mãos no colo"). Faça perguntas se a criança travar: "Como você ganha ponto?". Celebre cada apresentação com palmas e entregue o adesivo "Game Pronto".`,
      atividade: `Rode o seu jogo no Preview na frente da turma e mostre os três sistemas, falando em voz alta: "Aqui eu ganho ponto", "Aqui eu passo de fase" e "Aqui é o meu super poder". Conte uma coisa que você mais gostou de fazer no seu jogo.`,
      gabarito: `A criança roda o jogo jogável e demonstra os três sistemas funcionando, explicando cada um com suas palavras. Não há resposta errada: o sucesso é apresentar um esqueleto de jogo que roda e contar o que cada parte faz. Todos terminam com um jogo de verdade nas mãos, fechando a Etapa 2 de 4 do projeto.`,
    },
  ],
};
