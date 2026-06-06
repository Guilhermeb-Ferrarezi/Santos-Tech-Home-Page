import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Revisão e Limpeza dos Modelos",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Revisar cada asset 3D no Maya conferindo contagem de polígonos, nomes organizados no Outliner e pivôs no lugar certo, deixando os modelos leves e prontos para o Roblox Studio.`,
  descricao: `Esta aula é a faxina técnica do mês. Durante as semanas anteriores os alunos modelaram o personagem, os itens e o cenário da fase. Cada modelo funciona, mas ainda está "bagunçado por dentro": nomes genéricos como pCube1, pivôs no lugar errado e muitos polígonos sobrando. Hoje o aluno aprende a olhar para o próprio trabalho com olhos de profissional e a deixar tudo arrumado antes de exportar.

A ideia central é simples: um modelo bonito na tela não é necessariamente um modelo bom para um jogo. O Roblox Studio precisa de assets leves, com nomes claros e com o pivô (o ponto de origem que o objeto usa para girar e se posicionar) bem colocado. Se o pivô estiver no canto errado, a peça vai "voar" para um lugar estranho quando o aluno tentar posicioná-la dentro do jogo. Se a contagem de polígonos estiver alta demais, o jogo trava. Se os nomes estiverem confusos, ninguém acha nada na hora de montar a cena.

Por isso a aula apresenta três checagens que viram uma rotina: contar os polígonos no Heads Up Display, renomear cada objeto no Outliner com um nome que diga o que ele é, e conferir se o pivô de cada peça está na base ou no centro, do jeito certo. O aluno passa por cada modelo da pasta do jogo, aplica a checagem e marca o que já está pronto. É um trabalho de detetive: procurar o que está fora do lugar e corrigir.

Ao final, cada aluno tem seus assets revisados, mais leves e com nomes que qualquer pessoa entende. Esse cuidado prepara diretamente a Aula 8, em que os modelos serão exportados para o Roblox Studio. Um asset limpo hoje é uma exportação sem dor de cabeça amanhã.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e os modelos 3D do jogo já criados (personagem, itens e cenário das aulas anteriores)`,
    `Projetor ou TV para mostrar o Outliner, o Heads Up Display e a ferramenta de pivô para a turma toda`,
    `Pasta de projeto do Maya organizada, com as cenas (.mb ou .ma) de cada aluno salvas`,
    `Arquivo de exemplo preparado pelo professor: uma cena "bagunçada" de propósito (nomes feios, pivô errado, polígonos a mais) para demonstrar a limpeza`,
    `Folha ou documento de checklist impresso com os três itens: contagem de polígonos, nomes no Outliner e pivôs`,
    `Mouse com botão do meio (scroll) em cada máquina, pois ele é muito usado para navegar e mover pivôs no Maya`,
  ],
  conceitosChave: [
    `Polígono — cada pequena face plana (geralmente um quadrado ou triângulo) que junta com outras para formar a superfície do modelo 3D.`,
    `Contagem de polígonos — o número total de faces de um modelo; quanto menor, mais leve e mais rápido o jogo roda.`,
    `Heads Up Display (HUD) — painel de informações que aparece sobre a cena no Maya e pode mostrar a contagem de polígonos em tempo real.`,
    `Outliner — a lista lateral do Maya que mostra todos os objetos da cena pelo nome, como um índice da cena.`,
    `Pivô — o ponto de origem do objeto, usado como centro para girar, escalar e posicionar; precisa estar no lugar certo (base ou centro).`,
    `Histórico de construção — o registro de cada passo que o Maya guarda do objeto; apagar esse histórico deixa o modelo mais leve e estável.`,
    `Asset — cada peça pronta do jogo (personagem, item ou parte do cenário) que será usada dentro do Roblox Studio.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya para dar esta aula. Hoje não há modelagem nova: o trabalho é revisar e arrumar. São três checagens simples, e vou ensinar cada uma passo a passo. Se você nunca abriu o Maya, basta saber que a lista lateral chama-se Outliner, que objetos têm nomes e pivôs, e que existe um número de polígonos que queremos manter baixo.

Para ver a contagem de polígonos, ligue o contador: no menu do topo, clique em "Display", depois em "Heads Up Display" e marque "Poly Count". Vai aparecer, no canto superior esquerdo da cena, uma lista de números. O que interessa é a linha "Tris" (triângulos) ou "Faces". Selecione um objeto e o número à direita mostra quantos polígonos ele tem. Para itens simples de um jogo no Roblox, queremos números baixos, na casa de centenas, não de milhares.

Para abrir o Outliner, vá no menu "Windows", depois "Outliner". Ali aparece a lista de todos os objetos. Para renomear, dê dois cliques no nome (por exemplo pCube1) e digite um nome claro, como "espada" ou "porta". Para conferir e mover o pivô, selecione o objeto, aperte a tecla "W" (ferramenta Move) e depois pressione e segure "D" (ou "Insert") para entrar no modo de mover apenas o pivô; arraste-o para a base ou o centro e solte a tecla. Para apagar o histórico, vá em "Edit", depois "Delete by Type" e "History" (atalho Alt+Shift+D).

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento e revisão: Abra a cena "bagunçada" de exemplo no projetor. Pergunte: "O que está estranho aqui?" Mostre os nomes feios (pCube1, pSphere2) e diga que hoje vamos arrumar a casa antes de mudar para o Roblox.

15 min - Conteúdo novo guiado: Demonstre as três checagens na cena de exemplo. Primeiro ligue o "Poly Count" em Display, Heads Up Display, e mostre o número de um objeto. Depois abra o Outliner em Windows, Outliner e renomeie um objeto com dois cliques. Por fim selecione uma peça, aperte W, segure D e arraste o pivô para a base. Termine apagando o histórico com Edit, Delete by Type, History.

25 min - Mão na massa: Cada aluno abre a própria cena e passa o checklist em todos os seus assets, um por um: confere a contagem de polígonos, renomeia no Outliner e ajusta o pivô. Circule pela sala conferindo se o "Poly Count" está ligado e se os nomes ficaram claros. Lembre todos de salvar com Ctrl+S ao terminar cada modelo.

10 min - Desafio e compartilhar: Em duplas, cada aluno abre o Outliner do colega e tenta achar, só pelos nomes, a espada ou a porta. Feche pedindo a dois voluntários que mostrem no projetor o antes e o depois de um modelo.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem de arrumar o quarto: "O modelo já existe; hoje a gente guarda cada coisa na gaveta certa." Compare a contagem de polígonos a uma mochila: "Quanto mais peso desnecessário, mais devagar você anda. O jogo é igual." Para o pivô, diga: "É a maçaneta do objeto. Se a maçaneta está no lugar errado, a porta abre torta." Para os nomes, fale: "Imagine procurar a sua espada numa lista cheia de pCube1, pCube2. Dê nomes que você entenderia daqui a um mês." Reforce que esse é o trabalho silencioso dos profissionais de games.

## Erros comuns e como ajudar

O erro mais comum é esquecer de selecionar o objeto antes de olhar o "Poly Count" e achar que o número está errado; lembre-os de clicar na peça primeiro. Outro é mover o objeto inteiro quando queriam mover só o pivô: garanta que estão segurando a tecla D antes de arrastar. Muitos dão nomes com acento ou espaço (como "porta da fase"); oriente nomes simples, sem espaço, como "porta_fase". Alguns esquecem de apagar o histórico e o modelo fica pesado; passe de mesa em mesa lembrando do Edit, Delete by Type, History. Por fim, há quem renomeie e esqueça de salvar; peça Ctrl+S a cada modelo concluído.`,
  exercicios: [
    {
      titulo: `Ligar o contador de polígonos`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Confira se cada aluno consegue ligar o "Poly Count" e ler o número de um objeto. Circule olhando o canto superior esquerdo da tela de cada um.`,
      atividade: `No Maya, abra o menu "Display", depois "Heads Up Display" e marque "Poly Count". Clique em um dos seus modelos e leia o número de polígonos que aparece no canto superior esquerdo. Anote esse número.`,
      gabarito: `O aluno acerta quando o painel "Poly Count" aparece no canto da cena e, ao selecionar um objeto, consegue dizer quantos polígonos (Tris ou Faces) aquele modelo tem. Qualquer número anotado corretamente do objeto selecionado vale como correto.`,
    },
    {
      titulo: `Renomear tudo no Outliner`,
      tipo: `prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Abra o Outliner no projetor antes de começar. Ajude com dois cliques no nome e oriente nomes simples, sem acento e sem espaço. Confira se cada objeto recebeu um nome que diga o que é.`,
      atividade: `Abra o Outliner em "Windows", depois "Outliner". Dê dois cliques em cada nome genérico (como pCube1) e troque por um nome claro do que a peça é, por exemplo "espada", "porta" ou "bau". Use só letras simples, sem acento e sem espaço.`,
      gabarito: `Está correto quando nenhum objeto importante ainda se chama pCube1, pSphere2 e parecidos. Cada peça deve ter um nome que descreva o que ela é. Exemplo válido de lista: espada, escudo, porta_fase, bau, plataforma. Nomes com acento ou espaço contam como erro a corrigir.`,
    },
    {
      titulo: `Ajustar o pivô de uma peça`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `Demonstre uma vez segurando a tecla D antes de arrastar. Desafie cada aluno a colocar o pivô na base dos objetos que ficam no chão (como a porta) e no centro dos que giram. Confira se moveram o pivô, e não o objeto.`,
      atividade: `Escolha uma peça que fica no chão, como a porta ou o baú. Aperte a tecla "W", depois pressione e segure a tecla "D" e arraste o pivô para a base do objeto (onde ele toca o chão). Solte a tecla e teste girando a peça para ver se ela gira do lugar certo.`,
      gabarito: `O desafio é vencido quando o pivô aparece na base do objeto que fica no chão (ou no centro de um objeto que gira) e, ao rotacionar, a peça gira em torno desse ponto sem "voar" para longe. Se o objeto inteiro se moveu em vez do pivô, o aluno deve refazer segurando a tecla D.`,
    },
    {
      titulo: `Inspeção cruzada do Outliner`,
      tipo: `em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Forme duplas e peça que cada um abra a cena do colega. O objetivo é achar peças só pelo nome no Outliner. Oriente um feedback gentil: um elogio e uma sugestão de nome mais claro.`,
      atividade: `Troque de lugar com um colega e abra a cena dele. No Outliner, tente encontrar a espada e a porta usando só os nomes da lista. Depois diga ao colega um nome que ficou muito claro e um que poderia melhorar.`,
      gabarito: `A dupla acerta quando cada um consegue localizar pelo menos dois objetos do colega apenas lendo os nomes do Outliner, sem precisar clicar em tudo. O feedback é válido se traz um elogio concreto (ex.: "porta_fase ficou ótimo") e uma sugestão clara (ex.: "troque obj1 por chave").`,
    },
    {
      titulo: `Roda de conversa: por que limpar os modelos?`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Sente a turma em roda. Conduza com perguntas sobre o porquê de cada checagem. Conecte tudo com a Aula 8, em que os assets vão para o Roblox Studio. Garanta que cada aluno fale ao menos uma vez.`,
      atividade: `Em roda, responda: por que um modelo com muitos polígonos atrapalha o jogo? Por que o pivô no lugar errado dá problema ao posicionar a peça no Roblox? E por que nomes claros ajudam o time inteiro?`,
      gabarito: `A participação é completa quando o aluno liga pelo menos uma checagem ao seu motivo. Respostas aceitas: "muitos polígonos deixam o jogo lento ou travado"; "pivô errado faz a peça aparecer no lugar errado no Roblox"; "nomes claros fazem qualquer pessoa achar a peça rápido na hora de montar a fase".`,
    },
  ],
};
