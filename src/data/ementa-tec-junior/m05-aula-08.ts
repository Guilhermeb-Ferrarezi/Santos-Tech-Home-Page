import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Nosso primeiro jogo jogável!",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança finaliza, testa do começo ao fim e apresenta para a turma o esqueleto do seu primeiro jogo 2D jogável feito no Construct 3.`,
  descricao: `Esta é a última aula do mês e o grande dia de fechar o projeto! Durante quatro semanas, as crianças aprenderam a colocar objetos no cenário, a usar a mágica do "quando... faça...", a mexer o personagem e a controlá-lo com as setas do teclado. Agora chegou a hora de juntar tudo num jogo de verdade, testar se ele funciona e mostrar com orgulho para os amigos.

A aula é uma aula de acabamento e celebração. Não vamos ensinar nenhuma ferramenta nova e difícil: vamos arrumar os últimos detalhes do esqueleto do jogo, conferir se o personagem anda, se as setas funcionam e se nada está quebrado. É como dar a última pincelada num desenho antes de pendurar na parede. O foco é deixar o jogo "redondinho" e pronto para jogar do início ao fim.

Por que isso importa? Porque testar e apresentar são partes do trabalho de quem cria jogos de verdade. Quando a criança joga o próprio jogo, ela descobre o que funciona e o que precisa melhorar — e aprende que errar e consertar faz parte. E quando ela mostra para a turma, ganha confiança e percebe que construiu algo que é só dela.

No fim da aula, cada aluno terá um esqueleto jogável salvo: um personagem que se mexe num cenário, com um começo e um fim simples. Esse esqueleto é a base que, no próximo mês, vai receber a arte própria da criança. Hoje a gente comemora: "Eu fiz um jogo!"`,
  materiais: [
    `Computadores ligados, um por aluno, com o Construct 3 já aberto no navegador e o projeto de cada criança carregado (o professor abre antes da aula começar).`,
    `Projetor ou TV grande conectado ao computador do professor, para mostrar os passos e, no fim, projetar o jogo de cada aluno na hora da apresentação.`,
    `Um projeto-exemplo simples do professor já pronto e testado (personagem que anda com as setas num cenário), para servir de modelo e de "plano B" caso algum aluno trave.`,
    `Lista de conferência impressa (checklist com desenhos): personagem aparece, personagem anda, setas funcionam, jogo não trava.`,
    `Adesivos, carimbos ou pequenas medalhas de papel para entregar na hora da apresentação ("Criador de Jogos").`,
    `Fones de ouvido (opcional), caso o jogo tenha algum som, para não atrapalhar os colegas.`,
    `Folhas de papel e lápis de cor para o exercício de desenho e para a roda de conversa final.`,
  ],
  conceitosChave: [
    `Jogo jogável — um jogo que a gente consegue abrir e brincar do começo ao fim sem ele travar.`,
    `Testar — apertar os botões e jogar para ver se está tudo funcionando direitinho.`,
    `Bug — um errinho no jogo, tipo o personagem que não anda; a gente acha e conserta.`,
    `Esqueleto do jogo — a base do jogo, com o personagem e o cenário, ainda sem os enfeites bonitos.`,
    `Botão Preview (Visualizar) — o botão de "play" do Construct 3 que abre o jogo para a gente brincar.`,
    `Apresentar — mostrar o seu jogo para a turma e contar o que você fez.`,
    `Salvar — guardar o jogo no computador para ele não se perder.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base tecnica)

Esta aula não traz recurso novo: ela consolida tudo do mês. Seu papel é de "mecânico de jogos" — ajudar cada criança a testar e arrumar o esqueleto que ela já montou. Antes da aula, abra cada projeto e clique no botão Preview (o ícone de "play", um triângulo no topo direito do Construct 3). Confirme que o personagem aparece, anda e responde às setas. Anote num papel quem está com problema, para priorizar esses alunos.

O Preview abre o jogo numa aba nova do navegador. Para fechar, basta fechar essa aba e voltar ao editor. As setas funcionam por causa do comportamento "8 Direction" (ou "Platform") adicionado ao personagem e dos eventos da aba "Event sheet" feitos nas aulas anteriores. Você não vai criar isso agora — só conferir se está lá. Para salvar, use o menu "Menu" (canto superior esquerdo, as três linhas) e a opção "Save" (ou Ctrl+S). Salve o projeto de cada criança ao final.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Construct 3)

10 min — Aquecimento/revisão: Reúna a turma na frente do projetor. Abra o seu projeto-exemplo e clique no botão Preview (triângulo, canto superior direito). Jogue na frente deles: "Olhem, o personagem anda!" Pergunte: "Lembram como a gente fez ele se mexer?" Deixe as crianças responderem. Feche a aba do Preview.

15 min — Conteúdo novo guiado (testar e consertar): Mostre no projetor a lista de conferência (checklist). Item por item, clique no Preview do exemplo e demonstre: personagem aparece? Aperte as setas — anda? Combine um gesto: polegar para cima quando o item funciona. Depois mostre um "bug" de propósito (apague um evento, rode, mostre que não anda) e conserte clicando para desfazer (Ctrl+Z). Diga: "Quando algo não funciona, a gente procura e arruma. Isso é normal!"

25 min — Mão na massa: Cada criança vai ao seu computador. Com a lista de conferência na mesa, ela clica no Preview do seu próprio jogo e testa cada item. Circule pela sala. Para quem está travado, sente ao lado e conserte junto, narrando o que faz. Quem terminou, ajuda a deixar o cenário arrumado e treina o que vai falar na apresentação. Ao final, salve cada projeto (Menu, Save).

10 min — Desafio + compartilhar: Roda de apresentações. Um a um, projete o jogo do aluno (abra o projeto dele e clique Preview). Ele joga rapidinho e diz uma frase: "Meu jogo é assim". Aplausos e entrega de medalha/adesivo "Criador de Jogos".

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use a ideia de "provar a comida antes de servir": o cozinheiro prova para ver se está gostoso; a gente testa o jogo para ver se está bom. Chame o botão Preview de "botão de brincar". Chame o bug de "errinho travesso que se escondeu no jogo" — e a gente é o detetive que acha ele. Diga que o jogo de hoje é o "esqueleto", como o de um boneco antes de ganhar roupa e cor: mês que vem a gente veste ele de bonito. Fale pouco e mostre muito: clique você, depois deixe a criança clicar.

## Erros comuns e como ajudar

Criança aperta as setas no editor e nada acontece: lembre que só funciona dentro do Preview, na aba de brincar. Personagem não anda: confira na aba "Event sheet" se os eventos das setas estão lá; se sumiram, refaça um junto. Personagem sai voando da tela: normal, é o esqueleto; diga que está ótimo assim. Aba do Preview não abre: pode ser o bloqueador do navegador; abra você pelo computador do professor. Criança tímida na apresentação: deixe ela só apertar a seta e você narra por ela. Ninguém precisa de jogo "perfeito" — o objetivo é jogável e apresentado com orgulho.`,
  exercicios: [
    {
      titulo: `Detetive de jogos`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `No tapete ou nas cadeiras em roda, antes de irem aos computadores. Explique que hoje todos serão "detetives de jogos", que testam para achar errinhos travessos. Mostre no projetor o seu jogo-exemplo funcionando e, depois, um errinho de propósito (personagem que não anda).`,
      atividade: `Pergunte à turma: "O que a gente aperta para o personagem andar?" e "Como a gente sabe se o jogo está funcionando?". Deixe cada criança responder ou apontar para a tela. Combine o gesto de polegar para cima quando algo funciona.`,
      gabarito: `As crianças apontam que se aperta as setas do teclado e que a gente sabe que funciona testando no botão de brincar (Preview) e vendo o personagem se mexer. Acertou quem participou e entendeu que testar é jogar para conferir.`,
    },
    {
      titulo: `Minha lista de conferência`,
      tipo: `Prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Distribua a lista de conferência com desenhos. No computador de cada um, ajude a abrir o jogo da criança e a clicar no botão Preview (triângulo, canto superior direito). Mostre como marcar cada item com um polegar para cima.`,
      atividade: `Cada criança testa o seu jogo e confere, item por item: 1) o personagem aparece na tela? 2) o personagem anda? 3) as setas funcionam? 4) o jogo não trava? Marca cada item que deu certo.`,
      gabarito: `A criança consegue abrir o Preview e marcar pelo menos os itens "personagem aparece" e "personagem anda". Acertou quem testou sozinha ou com pouca ajuda e identificou o que está funcionando e o que precisa de conserto.`,
    },
    {
      titulo: `Cacando o errinho travesso`,
      tipo: `Desafio na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Para quem encontrou um item que não funciona na lista. Sente ao lado e conserte junto, narrando: "Vamos ver na aba Event sheet se a regra das setas está aqui". Para quem está tudo certo, proponha o desafio de deixar o personagem começar num cantinho legal do cenário, arrastando-o no Layout.`,
      atividade: `Conserte com a criança o item que falhou (refazer um evento de seta ou reposicionar o personagem) e teste de novo no Preview. Se tudo já funciona, mova o personagem para um bom ponto de partida e teste.`,
      gabarito: `Depois do conserto, ao clicar no Preview o personagem anda com as setas. Acertou quando o item que estava com problema passa a funcionar, ou quando o personagem aparece num bom lugar do cenário ao iniciar.`,
    },
    {
      titulo: `Desenho do meu jogo`,
      tipo: `Desenho / papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue folha e lápis de cor para quem já testou e salvou. Diga que vão desenhar uma "foto" do jogo deles, como será quando ganhar arte bonita no próximo mês. Isso também serve de descanso para os olhos longe da tela.`,
      atividade: `Cada criança desenha o seu personagem dentro do cenário do jogo e, se quiser, uma seta mostrando para onde ele anda. Pode escrever ou ditar para o professor o nome do jogo.`,
      gabarito: `O desenho mostra um personagem e um cenário, ligados ao jogo que a criança fez. Acertou quem representou o seu próprio jogo (e não um desenho qualquer) e consegue contar o que está acontecendo nele.`,
    },
    {
      titulo: `Apresentando meu primeiro jogo`,
      tipo: `Apresentação / jogo`,
      tempo: `12 minutos`,
      guiaProfessor: `Momento de celebração. No projetor, abra o jogo de cada aluno e clique no Preview. Conduza com carinho, dando a vez para todos e puxando os aplausos. Para os tímidos, deixe a criança só apertar a seta enquanto você narra. Entregue a medalha "Criador de Jogos" ao final de cada um.`,
      atividade: `Um por vez, a criança joga rapidamente o seu jogo no telão, faz o personagem andar com as setas e diz uma frase: "Meu jogo se chama ___ e o personagem faz ___". A turma aplaude.`,
      gabarito: `A criança mostra o personagem andando no seu jogo e fala (ou aponta) ao menos uma coisa sobre ele. Acertou quem apresentou um jogo jogável do começo ao fim e participou da roda com orgulho — independentemente de o jogo estar "perfeito".`,
    },
  ],
};
