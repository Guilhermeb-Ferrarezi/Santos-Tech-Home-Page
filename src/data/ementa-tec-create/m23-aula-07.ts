import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Polir, Balancear e Preparar para Publicar",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Dar o acabamento final no jogo do Roblox, equilibrando a dificuldade, ajustando detalhes visuais e sonoros e configurando nome, ícone, descrição e permissões prontos para a publicação.`,
  descricao: `Nesta aula o aluno entra na etapa de acabamento do jogo. Depois de caçar os bugs na Aula 6, o jogo já funciona; agora o foco é deixá-lo gostoso de jogar e com cara de produto pronto. Polir significa cuidar dos detalhes: um som que falta, uma cor que não combina, um pulo alto demais, um inimigo rápido demais. São pequenos ajustes que, somados, fazem o jogador pensar "isso aqui é caprichado".

A parte mais importante de hoje é o balanceamento da dificuldade. Um jogo bom não é fácil nem impossível: ele é desafiador na medida certa. O aluno vai testar o próprio jogo com olhar de jogador e ajustar números no código Lua, como a velocidade de um inimigo, a quantidade de vida do jogador, o tempo de um cronômetro ou os pontos necessários para vencer. A ideia é mexer em um valor por vez e testar de novo, igual a um cozinheiro que prova a comida e acerta o tempero aos poucos.

Em seguida vem o acabamento de apresentação, que é o que aparece antes mesmo de a pessoa apertar "Jogar". No Roblox Studio o aluno vai abrir as configurações do jogo (Game Settings) e preencher o nome, escrever uma descrição que convide a jogar, definir o gênero e enviar um ícone e uma imagem de capa (thumbnail). É aqui que a arte criada com IA, vista na Aula 5, ganha um novo uso: virar o cartão de visitas do jogo.

Por fim, o aluno revisa as permissões e as opções de publicação. Vai conferir quem pode jogar (a opção de tornar público ou deixar privado), confirmar que o jogo está salvo na nuvem do Roblox e entender o que cada caixinha das configurações faz. Nada será publicado de fato hoje: a publicação real acontece na Aula 8. O objetivo de hoje é chegar ao fim com o jogo polido, balanceado e com todas as informações preenchidas, pronto para o grande dia.`,
  materiais: [
    `Computadores com o Roblox Studio instalado e atualizado, um por aluno, cada um logado na própria conta Roblox`,
    `Conta Roblox de cada aluno já criada e com o projeto do jogo salvo na nuvem (botão "Save to Roblox" feito nas aulas anteriores)`,
    `Projetor ou TV para o professor demonstrar os menus, o painel Explorer e a janela Game Settings em tela grande`,
    `Arquivo de exemplo do jogo (place .rbxl) com um inimigo, um cronômetro e um contador de pontos, para o professor mostrar os ajustes de balanceamento`,
    `Pasta com a arte da IA de cada aluno: ícone quadrado e imagem de capa (thumbnail) feitos nas aulas de imagem e UI`,
    `Lista impressa de checagem (checklist) com os itens de acabamento: som, cor, dificuldade, nome, ícone, descrição e permissões`,
    `Fones de ouvido para os alunos testarem os sons e a música sem atrapalhar a turma`,
  ],
  conceitosChave: [
    `Polir — dar o acabamento final no jogo, cuidando dos pequenos detalhes visuais e sonoros que deixam tudo mais caprichado.`,
    `Balanceamento — ajustar a dificuldade do jogo para não ficar nem fácil demais nem impossível, mexendo nos números do código.`,
    `Game Settings — a janela do Roblox Studio onde se configuram o nome, a descrição, o gênero, o ícone e as permissões do jogo.`,
    `Ícone — a imagem pequena e quadrada que representa o jogo na lista do Roblox, como a foto de perfil do jogo.`,
    `Thumbnail (capa) — a imagem maior que aparece na página do jogo para chamar a atenção de quem está escolhendo o que jogar.`,
    `Permissões (público ou privado) — a configuração que decide quem pode entrar e jogar: só você (privado) ou qualquer pessoa (público).`,
    `Playtest — o botão "Play" do Studio que roda o jogo para testar na hora, usado para conferir cada ajuste de balanceamento.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Roblox Studio para dar esta aula. Precisa entender três ideias. Primeira: balancear é mudar um número no código Lua e testar. Os números ficam dentro de scripts, geralmente em linhas como local velocidade = 16 ou local vida = 100. Mude o número, salve e aperte "Play" para sentir a diferença. Segunda: o acabamento de apresentação fica na janela Game Settings, aberta pelo menu "File" e depois "Game Settings", ou pela aba "Home". Lá você preenche nome, descrição, gênero, ícone e thumbnail. Terceira: as permissões de "público ou privado" ficam na aba "Permissions" dentro do mesmo Game Settings. Antes da aula, abra um projeto, encontre um número num script e mude-o uma vez; depois abra o Game Settings e veja as abas. Isso já te dá segurança.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão. Pergunte à turma: "O que faz um jogo parecer profissional?" Conduza até as respostas: dificuldade justa, sons no lugar, nome e capa bonitos. Mostre na tela grande um jogo bem acabado e um sem capa nem nome para criar contraste.

15 min, conteúdo novo guiado. No Studio, abra um script no painel Explorer (lado direito) com dois cliques. Encontre uma linha com um número, por exemplo local velocidade = 16. Mude para 24, aperte "Play" na aba "Home" e mostre o inimigo mais rápido. Volte ao Studio com o botão "Stop". Repita com a vida ou os pontos. Diga: "Um número por vez, sempre testando." Em seguida, vá no menu "File", clique em "Game Settings". Mostre a aba "Basic Info": preencha o nome e a descrição. Mostre onde enviar o "Game Icon" e o "Thumbnail". Por fim, abra a aba "Permissions" e explique "Public" e "Private".

25 min, mão na massa. Cada aluno ajusta pelo menos dois números de dificuldade no próprio jogo, testando com "Play" a cada mudança. Depois abre o Game Settings e preenche nome e descrição, envia o ícone e a thumbnail da pasta de arte da IA e revisa as permissões deixando em "Private" por enquanto. Use a checklist impressa. Circule pela sala e ajude quem travar.

10 min, desafio e compartilhar. Cada aluno troca de cadeira e joga o jogo do colega do lado por um minuto, depois diz: "estava fácil, difícil ou na medida?" Faça uma rodada rápida com o nome e a descrição que cada um escolheu.

## Como explicar de forma clara (linguagem para a idade)

Use comparações simples. Para balancear: "É como temperar comida; você prova, ajusta o sal e prova de novo. Mexa em um número de cada vez para saber o que mudou." Para o acabamento: "O ícone e a capa são a embalagem do jogo. Mesmo bom, ninguém clica se a embalagem for feia." Para descrição: "Escreva como um convite: o que a pessoa vai fazer e por que é divertido." Para permissões: "Privado é a porta fechada, só você entra; público é a porta aberta para todo mundo." Sempre conecte com o jogo do próprio aluno e com a arte que ele já criou com IA.

## Erros comuns e como ajudar

O erro mais comum é mudar vários números de uma vez e não saber qual deixou o jogo estranho. Insista: um por vez, testa, depois o próximo. Outro erro é esquecer de apertar "Stop" antes de editar e mexer no código com o jogo rodando; mostre que precisa parar primeiro. Muitos confundem ícone (quadrado pequeno) com thumbnail (capa grande) e enviam a imagem trocada; mostre os dois campos com calma. Alguns deixam a descrição vazia ou só com a palavra "jogo"; peça pelo menos duas frases. Por fim, há quem queira deixar tudo público e divulgar hoje; lembre que a publicação de verdade é na Aula 8 e que hoje fica em "Private". Se o ícone não aparecer, geralmente é porque o arquivo não foi salvo ou está num formato errado; peça uma imagem .png quadrada.`,
  exercicios: [
    {
      titulo: `Acertando um número: balancear na prática`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno encontre uma linha com um número dentro de um script pelo painel Explorer. Reforce a regra de mudar um número, salvar e apertar "Play" para testar antes de mexer em outro.`,
      atividade: `Abra um script do seu jogo, encontre um número que muda a dificuldade (velocidade, vida, pontos ou tempo) e ajuste-o. Aperte "Play", teste, aperte "Stop" e diga ao professor se o jogo ficou mais fácil ou mais difícil.`,
      gabarito: `O aluno deve localizar uma linha como local velocidade = 16, trocar o valor, salvar e testar com "Play". Resposta esperada: ele percebe a mudança ao jogar e descreve, por exemplo, "aumentei a velocidade do inimigo e ficou mais difícil". Se nada mudou, provavelmente alterou o número errado ou não salvou e testou. O importante é ter mexido em um único número por vez.`,
    },
    {
      titulo: `A embalagem do jogo: nome e descrição`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Abra o Game Settings pelo menu "File" e mostre a aba "Basic Info". Peça pelo menos duas frases na descrição. Circule conferindo se o nome combina com o estilo do jogo.`,
      atividade: `Abra o Game Settings, vá na aba "Basic Info" e escreva o nome do seu jogo e uma descrição convidativa com pelo menos duas frases, dizendo o que o jogador vai fazer e por que é divertido. Salve.`,
      gabarito: `O campo de nome deve estar preenchido com um título que combine com o jogo, e a descrição deve ter pelo menos duas frases convidativas. Exemplo válido: "Corrida da Floresta. Fuja dos inimigos e colete moedas. Cuidado com as armadilhas escondidas!". Resposta fraca a melhorar: descrição vazia ou só a palavra "jogo". Caminho correto: menu "File", "Game Settings", aba "Basic Info".`,
    },
    {
      titulo: `Ícone contra capa: enviar a arte da IA`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Um aluno envia o ícone e a thumbnail enquanto o outro confere se cada imagem foi para o campo certo. Lembre que ícone é o quadrado pequeno e thumbnail é a capa grande, e que o arquivo deve ser .png.`,
      atividade: `Em dupla, abram o Game Settings de um dos jogos. Enviem a imagem quadrada da IA no campo "Game Icon" e a imagem de capa no campo "Thumbnail". Um confere o do outro e expliquem qual é o ícone e qual é a thumbnail.`,
      gabarito: `O ícone (quadrado pequeno) deve ir para o campo "Game Icon" e a capa para o campo "Thumbnail", sem trocar. A dupla deve saber explicar a diferença: o ícone é a "foto de perfil" do jogo e a thumbnail é a capa que chama a atenção. Se a imagem não aparecer, o arquivo não foi salvo ou não está em .png quadrado; basta reenviar a imagem correta.`,
    },
    {
      titulo: `Roda de conversa: fácil, difícil ou na medida?`,
      tipo: `roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza a roda sem julgar. Faça os alunos descreverem a sensação de jogar o jogo do colega. Anote no quadro as palavras que aparecerem, como "rápido demais", "muito fácil" ou "na medida".`,
      atividade: `Em roda, cada aluno conta como o colega achou o seu jogo (fácil, difícil ou na medida) e diz qual número pretende ajustar por causa disso. Ouçam os colegas e deem uma sugestão amigável de ajuste para cada um.`,
      gabarito: `Não há resposta única, mas cada aluno deve ligar a opinião recebida a um ajuste concreto. Exemplos válidos: "Acharam difícil, então vou diminuir a velocidade do inimigo de 24 para 18"; "Acharam fácil, então vou aumentar os pontos para vencer". Resposta fraca a melhorar: "Está bom assim", sem refletir sobre o retorno do colega. O professor reforça que balancear é responder ao que o jogador sentiu.`,
    },
    {
      titulo: `Mini projeto: jogo polido e pronto para publicar`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Use a checklist impressa. Acompanhe cada aluno pelos itens: dificuldade ajustada, sons e cores conferidos, nome, descrição, ícone, thumbnail e permissão em "Private". Lembre que a publicação de verdade é só na Aula 8.`,
      atividade: `Finalize o acabamento do seu jogo seguindo a checklist: ajuste a dificuldade, confira sons e cores, preencha nome e descrição, envie ícone e thumbnail e deixe a permissão em "Private". Salve na nuvem com "Save to Roblox" e mostre tudo pronto ao professor.`,
      gabarito: `Ao final, o jogo deve estar com a dificuldade equilibrada, sons e cores revisados e, no Game Settings, nome e descrição preenchidos, ícone e thumbnail enviados e a aba "Permissions" em "Private". O projeto deve estar salvo na nuvem pelo "Save to Roblox". Caminho das configurações: menu "File", "Game Settings", abas "Basic Info" e "Permissions". Se faltar algum item da checklist, o aluno volta e completa antes de encerrar.`,
    },
  ],
};
