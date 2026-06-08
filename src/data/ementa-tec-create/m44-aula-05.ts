import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Playtest e Caça aos Bugs",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender a testar o jogo do início ao fim de forma organizada, anotando bugs e travamentos, e usar Debug.Log com a janela Console do Unity para localizar erros, descrevendo cada problema ao Claude para sugerir correções.`,
  descricao: `Nas aulas anteriores do mês os alunos escreveram os scripts de movimento em C#, definiram as mecânicas e regras, configuraram a física com Rigidbody e montaram a interface, o HUD e os efeitos sonoros. O jogo já é jogável de ponta a ponta. Agora chega o momento que todo estúdio profissional leva muito a sério: o playtest, ou teste de jogo. É a hora de jogar o próprio jogo com olhar crítico, procurando tudo o que está quebrado ou estranho antes de pensar em publicar.

Um bug é qualquer comportamento errado do jogo: o personagem atravessa uma parede, a pontuação não soma, o som não toca, a fase não termina, ou o jogo simplesmente trava. Caçar bugs não é sinal de que o aluno fez algo errado; é parte normal e esperada de criar software. Programadores experientes sabem que escrever o código é só metade do trabalho; a outra metade é testar, encontrar problemas e corrigir. Nesta aula o aluno vira, ao mesmo tempo, testador e detetive do próprio jogo.

A ferramenta principal desta investigação é a janela Console do Unity, combinada com o comando Debug.Log. O Debug.Log funciona como um bilhete que o programa deixa para você: ao rodar o jogo, ele escreve uma mensagem no Console dizendo o que está acontecendo naquele ponto do código. Assim o aluno descobre se uma função foi chamada, qual era o valor de uma variável, ou onde exatamente o jogo parou de funcionar. O Console também mostra sozinho os erros vermelhos quando algo dá muito errado, apontando o arquivo e a linha do problema.

A aula é totalmente prática, com cada aluno no próprio computador testando o jogo que vem construindo o mês inteiro. Além do Console, o aluno treina uma habilidade essencial da trilha avançada: descrever um problema com clareza. Ao copiar a mensagem de erro e explicar ao Claude o que esperava que acontecesse e o que aconteceu de fato, o aluno recebe sugestões de correção e aprende a conversar com a inteligência artificial como um parceiro de programação, sem só copiar respostas prontas.`,
  materiais: [
    `Computadores (um por aluno) com o Unity instalado e o projeto do jogo do mês já aberto e jogável`,
    `Projetor ou TV ligada ao computador do professor para demonstrar a janela Console e o uso do Debug.Log na tela grande`,
    `Acesso ao Claude (no navegador ou na ferramenta usada pela escola) para descrever bugs e receber sugestões de correção`,
    `Arquivo de exemplo: um projeto Unity simples com dois ou três bugs propositais (um erro vermelho no Console e um comportamento estranho) para a prática de caça`,
    `Folha impressa de "Relatório de Bug" com os campos: o que eu fiz, o que esperava, o que aconteceu, mensagem do Console`,
    `Quadro branco ou cartaz com a frase-chave "Reproduzir, Localizar, Corrigir" bem visível`,
    `Cronômetro ou timer visível para controlar o ritmo de 10 / 15 / 25 / 10 minutos`,
  ],
  conceitosChave: [
    `Playtest — testar o jogo jogando do início ao fim com olhar crítico, procurando bugs e anotando tudo o que está errado ou estranho.`,
    `Bug — qualquer comportamento errado do jogo, como atravessar paredes, pontuação que não soma ou um travamento inesperado.`,
    `Console — a janela do Unity que mostra mensagens, avisos amarelos e erros vermelhos enquanto o jogo roda.`,
    `Debug.Log — comando de C# que escreve uma mensagem no Console para o programador ver o que está acontecendo dentro do código.`,
    `Reproduzir o bug — conseguir fazer o erro acontecer de novo, sempre da mesma forma, para entender o que o causa.`,
    `Stack trace — a lista que o erro vermelho mostra apontando o arquivo e a linha exata onde o problema aconteceu.`,
    `Relatório de bug — anotação clara do que foi feito, do que se esperava e do que de fato aconteceu, usada para corrigir e para pedir ajuda ao Claude.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar C# nem o Unity para conduzir esta aula; precisa entender três ideias simples. Primeira: testar é parte normal de programar, e achar bugs é vitória, não fracasso. Segunda: a janela Console do Unity (menu Window, depois Analysis, depois Console, ou o atalho Ctrl mais Shift mais C) é onde aparecem as mensagens e os erros vermelhos. Terceira: o comando Debug.Log escreve um texto no Console quando o jogo passa por aquele ponto do código, funcionando como um bilhete que o programa deixa para você.

Antes da aula, abra um projeto em casa, adicione uma linha Debug.Log dentro de uma função, rode o jogo apertando o botão Play (o triângulo no topo) e veja a mensagem surgir no Console. Cause também um erro de propósito (apague um ponto e vírgula) para ver o erro vermelho e o stack trace apontando arquivo e linha. Assim você chega seguro.

## Passo a passo da aula

Aquecimento (10 min): com o projetor ligado, jogue rapidamente o jogo de exemplo e finja não notar um bug, depois pergunte: "Vocês viram algo errado?". Conduza para a ideia de que jogo bom é jogo testado. Escreva no quadro "Reproduzir, Localizar, Corrigir".

Conteúdo novo guiado (15 min): no seu Unity, abra a janela Console pelo menu Window, depois Analysis, depois Console. Mostre que ela fica vazia até o jogo rodar. Abra um script qualquer com duplo clique e, dentro do método Update ou Start, adicione esta linha de código:

Debug.Log("Cheguei aqui no Update e a vida vale " + vida);

Explique cada parte: Debug.Log e o comando; o texto entre aspas e a mensagem; o sinal de mais junta o texto com o valor da variável vida (usamos concatenacao com mais, nunca interpolacao). Salve o arquivo, volte ao Unity, aperte Play e mostre a mensagem aparecendo no Console a cada quadro. Depois cause um erro vermelho de proposito (remova um ponto e virgula), aponte o stack trace e mostre que ao dar duplo clique no erro o Unity abre o arquivo na linha exata.

Mão na massa (25 min): cada aluno joga o próprio jogo do início ao fim preenchendo o Relatório de Bug a cada problema encontrado. Em seguida, adiciona pelo menos um Debug.Log num ponto suspeito, roda o jogo e observa o Console. Quem encontrar um erro vermelho copia a mensagem e descreve ao Claude o que fez, o que esperava e o que aconteceu, pedindo sugestão de correção. Circule pela sala. O objetivo mínimo é cada aluno registrar ao menos um bug e usar um Debug.Log.

Desafio e compartilhar (10 min): cada aluno corrige um bug usando a sugestão do Claude e testa de novo para confirmar. Dois ou três alunos mostram na tela grande o bug, a mensagem do Console e a correção, explicando o caminho que seguiram.

## Como explicar de forma clara

Use a imagem do detetive: "O Console é a cena do crime, e a mensagem de erro é a pista que diz onde procurar." Para o Debug.Log, diga: "É um bilhete que o seu jogo deixa avisando: passei por aqui." Comemore cada bug encontrado, dizendo que cada um achado agora é um problema a menos para o jogador depois. Reforce a ordem "Reproduzir, Localizar, Corrigir": primeiro fazer o erro acontecer de novo, depois descobrir onde ele mora, só então arrumar. Ao usar o Claude, peça que o aluno escreva com as próprias palavras o problema, em vez de só colar e copiar a resposta sem entender.

## Erros comuns e como ajudar

O erro número um é esquecer de salvar o script antes de voltar ao Unity, e então o Debug.Log não aparece; lembre sempre de salvar com Ctrl mais S. Outro erro é não abrir a janela Console e achar que nada aconteceu; mostre o caminho pelo menu Window. Muitos ignoram os erros vermelhos por acharem assustadores; ensine que o erro é amigo, pois aponta arquivo e linha. Alguns alunos descrevem o bug de forma vaga ("não funciona"); ajude a detalhar o que fez, o que esperava e o que aconteceu. Há quem tente corrigir antes de reproduzir o bug; insista em fazer o erro acontecer de novo primeiro. Por fim, alguns deixam vários Debug.Log espalhados e poluem o Console; oriente a remover os bilhetes depois de resolver o problema.`,
  exercicios: [
    {
      titulo: `Abrindo o Console e deixando um bilhete`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe cada aluno até abrir a janela Console e adicionar um Debug.Log dentro de uma função do próprio jogo. Garanta que salvem o script antes de apertar Play e confira que a mensagem aparece no Console.`,
      atividade: `Abra a janela Console pelo menu Window, depois Analysis, depois Console. Em um script do seu jogo, dentro do método Start, adicione uma linha de Debug.Log com uma mensagem sua. Salve, aperte Play e veja a mensagem no Console.`,
      gabarito: `Dentro do método Start o aluno escreve: Debug.Log("O jogo comecou"); . Apos salvar o script e apertar Play, a mensagem "O jogo comecou" aparece uma vez na janela Console assim que a cena inicia.`,
    },
    {
      titulo: `Espiando o valor de uma variável`,
      tipo: `Desafio individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que o aluno mostre no Console o valor de uma variável real do jogo, como vida ou pontuação, usando concatenação com o sinal de mais. Reforce que nunca usamos interpolação com cifrão; sempre juntamos texto e valor com mais.`,
      atividade: `Escolha uma variável do seu jogo, como vida ou pontos. Dentro do método Update, escreva um Debug.Log que mostre um texto junto com o valor dessa variável usando o sinal de mais. Rode o jogo e observe o valor mudar no Console.`,
      gabarito: `Supondo uma variável chamada pontos, o aluno escreve dentro do Update: Debug.Log("Pontos agora: " + pontos); . Ao rodar e ganhar pontos no jogo, o numero exibido no Console muda em tempo real, mostrando o valor atual da variável.`,
    },
    {
      titulo: `Caça ao erro vermelho em dupla`,
      tipo: `Atividade em dupla`,
      tempo: `7 minutos`,
      guiaProfessor: `Forme duplas e entregue o projeto de exemplo com um erro vermelho proposital (por exemplo, um ponto e vírgula faltando ou um nome de variável escrito errado). As duplas devem ler o Console, dar duplo clique no erro para ir até a linha e corrigir.`,
      atividade: `Em dupla, abra o projeto com defeito que o professor entregou e aperte Play. Leia a mensagem vermelha no Console, dê duplo clique nela para abrir o arquivo na linha exata, descubra o erro e corrija. Rode de novo para confirmar.`,
      gabarito: `O erro tipico e um ponto e virgula faltando no fim de uma linha ou um nome de variável digitado errado. O Console mostra o arquivo e a linha; ao dar duplo clique, o Unity abre o código nesse ponto. A correcao e adicionar o ponto e virgula que falta ou corrigir o nome da variável. Depois disso o erro vermelho some e o jogo roda.`,
    },
    {
      titulo: `Relatório de bug bem escrito`,
      tipo: `Roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Reúna a turma em roda. Conduza para que cada aluno descreva um bug do próprio jogo nos três passos: o que fiz, o que esperava, o que aconteceu. Reforce que descrever bem é o primeiro passo para corrigir e para pedir ajuda ao Claude.`,
      atividade: `Conte para a turma um bug que você encontrou no seu jogo, respondendo aos três campos do relatório: o que eu fiz, o que eu esperava que acontecesse e o que de fato aconteceu.`,
      gabarito: `Um relatorio valido separa claramente os três campos. Exemplo: "Eu fiz: pulei perto da parede. Eu esperava: bater na parede e cair. Aconteceu: o personagem atravessou a parede." A resposta e boa quando da para outra pessoa reproduzir o bug so de ler.`,
    },
    {
      titulo: `Detetive com o Claude: encontrar e corrigir`,
      tipo: `Projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Deixe o aluno escolher um bug real do próprio jogo, descrevê-lo ao Claude com o relatório e a mensagem do Console, aplicar a sugestão e testar. Oriente a entender a sugestão antes de aplicar, em vez de só colar o código. Ajude quem não conseguir reproduzir o bug.`,
      atividade: `Escolha um bug do seu jogo. Copie a mensagem do Console (se houver) e descreva ao Claude o que fez, o que esperava e o que aconteceu, pedindo uma sugestão de correção. Aplique a sugestão, rode o jogo de novo e confirme se o bug sumiu.`,
      gabarito: `O aluno entrega o ciclo completo: reproduziu o bug, descreveu com clareza ao Claude (com o texto do Console quando havia erro vermelho), aplicou a correcao sugerida entendendo o que mudou e testou novamente. O resultado correto e o bug resolvido e o jogo funcionando como esperado. Exemplo de correcao: trocar uma comparacao errada por uma condição certa, ou adicionar um collider que faltava para o personagem parar de atravessar a parede.`,
    },
  ],
};
