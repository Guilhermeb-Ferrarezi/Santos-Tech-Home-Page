import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Ferramentas de Palco e Ensaio",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender a usar as ferramentas ao vivo do PowerPoint — ponteiro laser, caneta, marca-texto e tela preta — e ensaiar a fala com cronômetro para ajustar o ritmo da apresentação.`,
  descricao: `Nas aulas anteriores a turma aprendeu a montar slides bonitos, com transições e animações, e deu os primeiros passos no Modo Apresentador. Agora chegou a hora de aprender as ferramentas que transformam um apresentador comum em alguém que domina o palco. Durante uma apresentação ao vivo, o PowerPoint oferece recursos escondidos que aparecem só quando a apresentação está rodando em tela cheia: o ponteiro laser, que vira o cursor em um pontinho vermelho brilhante; a caneta e o marca-texto, que permitem desenhar e destacar coisas direto no slide; e a tela preta, que apaga a projeção por um instante para a plateia olhar para você, e não para o slide.

Essas ferramentas existem por um motivo: guiar o olhar da plateia. Quando o aluno aponta o laser para uma palavra ou circula um número com a caneta, ele está dizendo "olhem para AQUI". Isso prende a atenção e deixa a fala muito mais clara. A tela preta tem o efeito contrário e igualmente poderoso: ela tira o slide do caminho para criar um momento de pausa, de conversa olho no olho, ou para esconder o conteúdo enquanto se faz uma pergunta à turma.

A segunda metade da aula é sobre tempo. Toda apresentação tem um relógio correndo: falar rápido demais confunde, falar devagar demais entedia. O PowerPoint tem um recurso chamado Ensaiar Cronometragem (ou Testar Intervalos), que grava quanto tempo o aluno gasta em cada slide enquanto ele pratica a fala em voz alta. Ao final, ele vê um resumo: "você levou 3 minutos no total, e 40 segundos só no slide 2". Com esse número na mão, o aluno aprende a ajustar — cortar um slide longo demais, ou dar mais ar a um slide que passou voando.

Esta aula é bem prática e divertida, perfeita para adolescentes de 10 a 15 anos, porque eles vão de fato apresentar um trecho para a turma usando o laser e a caneta, e vão se cronometrar. É um ensaio de verdade. A Aula 7 vai juntar tudo na montagem da apresentação de impacto, e a Aula 8 será o show ao vivo; aqui o foco é só treinar as ferramentas de palco e o controle do tempo, sem ainda finalizar o projeto final.`,
  materiais: [
    `Computadores com o PowerPoint instalado e aberto, um para cada aluno (até 10 alunos)`,
    `Projetor ou tela grande para o professor demonstrar e para os alunos apresentarem o trecho`,
    `Arquivo de exemplo pronto: uma apresentação curta de 4 a 5 slides sobre um tema simples (ex.: "Meu animal favorito"), compartilhada com a turma`,
    `Conta Microsoft 365 ativa e logada em cada computador (já criada nas aulas anteriores)`,
    `Cronômetro de apoio (pode ser o do celular do professor) para comparar com o tempo medido pelo PowerPoint`,
    `Lousa ou slide com o atalho-resumo: "B = tela preta, Ctrl+P = caneta, Ctrl+L = laser, E = apagar marcações"`,
    `Opcional: mouse com fio em cada máquina, pois o laser e a caneta ficam mais fáceis de controlar do que no touchpad`,
  ],
  conceitosChave: [
    `Ponteiro laser — recurso que transforma o cursor do mouse em um pontinho vermelho brilhante durante a apresentação, para apontar e guiar o olhar.`,
    `Caneta — ferramenta de desenho ao vivo que permite escrever ou circular coisas direto sobre o slide, como uma caneta de verdade.`,
    `Marca-texto — ferramenta parecida com a caneta, porém larga e transparente, usada para destacar palavras ou números sem cobri-los.`,
    `Tela preta — recurso que apaga a projeção (deixa a tela toda preta) para pausar, fazer a plateia olhar para você ou criar suspense; volta apertando a mesma tecla.`,
    `Ensaiar Cronometragem — função que grava o tempo gasto em cada slide enquanto você pratica a fala, para você ajustar o ritmo depois.`,
    `Ritmo — a velocidade com que você fala e avança os slides; nem rápido demais (confunde) nem devagar demais (entedia).`,
    `Tecla Esc — tecla que encerra a apresentação em tela cheia e volta para a tela normal de edição.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o PowerPoint. As ferramentas desta aula só aparecem quando a apresentação está rodando em tela cheia — por isso o primeiro passo é sempre iniciar a apresentação apertando a tecla F5 (começa do início) ou Shift+F5 (começa do slide atual). Com a apresentação rodando, mova o mouse e repare numa barrinha discreta que surge no canto inferior esquerdo: ali ficam os ícones do laser, da caneta e dos slides. Você também pode clicar com o botão direito em qualquer ponto da tela para abrir o mesmo menu, com a opção "Opções de Ponteiro". Decore quatro atalhos: a tecla B deixa a tela preta (aperte de novo para voltar), Ctrl+P liga a caneta, Ctrl+L liga o laser e a tecla E apaga tudo o que você desenhou. A tecla Esc encerra a apresentação. Tenha o arquivo de exemplo aberto e teste cada atalho UMA vez antes da turma chegar — leva dois minutos e evita susto.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra o arquivo de exemplo no projetor e inicie a apresentação com F5. Sem explicar nada ainda, mexa o mouse e aperte Ctrl+L para ligar o laser. Pergunte: "o que é esse pontinho vermelho?". A turma fica curiosa. Depois aperte B e a tela fica preta — todos olham para você. Esse pequeno espetáculo desperta o interesse pelas ferramentas.

Conteúdo novo guiado (15 min): com a apresentação rodando, demonstre cada recurso devagar. Ligue o laser (Ctrl+L) e aponte para um título. Ligue a caneta (Ctrl+P) e circule uma palavra; mostre que a tecla E apaga o desenho. Mostre o marca-texto pelo botão direito, em "Opções de Ponteiro", "Marca-texto". Aperte B para a tela preta e explique quando usar. Por fim, encerre com Esc. Depois, ainda no projetor, vá à aba "Apresentação de Slides" na faixa superior e clique em "Testar Intervalos" (ou "Ensaiar Cronometragem"); fale por uns segundos em cada slide e mostre o resumo de tempo que aparece no final.

Mão na massa (25 min): cada aluno abre a sua cópia do arquivo de exemplo. Tarefa 1: iniciar a apresentação com F5 e praticar os quatro atalhos (laser, caneta, marca-texto, tela preta) até fazerem sem olhar a lousa. Tarefa 2: usar "Testar Intervalos" para cronometrar a própria fala do começo ao fim, anotando o tempo total. Circule pela sala conferindo se conseguem ligar e desligar cada ferramenta.

Desafio e compartilhar (10 min): cada aluno apresenta no projetor um único slide do exemplo, usando pelo menos o laser e a caneta, em no máximo 40 segundos. A turma cronometra junto. Encerre relembrando os atalhos na lousa.

## Como explicar de forma clara

Use a imagem de um apresentador de TV ou de um youtuber: "o laser é o seu dedo apontando para a tela, mas de longe". Diga que a caneta é "rabiscar no slide igual num quadro". Para a tela preta, use a frase "quando a tela apaga, o holofote vira para você". Sobre o tempo, compare com um vídeo: "ninguém gosta de vídeo arrastado nem de vídeo acelerado; sua fala é igual". Repita que essas ferramentas servem para guiar o olhar — esse é o aprendizado real, mais importante que decorar atalhos.

## Erros comuns e como ajudar

O erro mais comum é tentar usar o laser ou a caneta com a apresentação ainda no modo de edição; lembre-os de apertar F5 primeiro. O segundo erro é deixar a tela preta ligada e achar que travou — explique que basta apertar B de novo para voltar. O terceiro é encher o slide de rabiscos e não saber apagar; ensine a tecla E. No cronômetro, muitos esquecem de falar em voz alta e o tempo fica curto demais; reforce que o ensaio só vale se eles falarem de verdade. Por fim, ao sair do ensaio, o PowerPoint pergunta se quer salvar os tempos — oriente a clicar "Sim" para guardar a cronometragem.`,
  exercicios: [
    {
      titulo: `Acendendo o laser e a caneta`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Garanta que cada aluno inicie a apresentação com F5 antes de tentar os atalhos. Caminhe pela sala conferindo quem esqueceu de entrar em tela cheia, pois é o erro número um.`,
      atividade: `Abra a apresentação de exemplo e aperte F5 para iniciar em tela cheia. Aperte Ctrl+L e mova o mouse: aponte o laser para o título do slide. Depois aperte Ctrl+P para ligar a caneta e circule uma palavra. Por fim, aperte a tecla E para apagar o desenho.`,
      gabarito: `O aluno consegue exibir o pontinho vermelho do laser sobre o título e desenhar um círculo com a caneta em volta de uma palavra. Após apertar E, o slide fica limpo de novo. Tudo isso só funciona porque ele iniciou a apresentação com F5 antes.`,
    },
    {
      titulo: `O poder da tela preta`,
      tipo: `desafio individual`,
      tempo: `7 min`,
      guiaProfessor: `Este exercício treina o momento de pausa. Peça silêncio total quando a tela ficar preta, para sentirem que a atenção vira para a pessoa. Reforce que a mesma tecla liga e desliga.`,
      atividade: `Com a apresentação rodando, aperte a tecla B para deixar a tela toda preta. Conte até três em voz alta e diga uma frase ("agora vocês olham para mim"). Depois aperte B de novo para o slide voltar. Repita uma vez para ter certeza de que sabe ligar e desligar.`,
      gabarito: `O aluno deixa a tela preta apertando B, fala a frase e traz o slide de volta apertando B novamente. Ele percebe que a tela preta não é um erro nem um travamento, mas uma ferramenta para pausar e atrair o olhar da plateia para o apresentador.`,
    },
    {
      titulo: `Cronometrando a minha fala`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre antes onde fica o botão. Lembre que precisam falar em voz alta de verdade, senão o tempo fica irreal. No fim, oriente a salvar os tempos clicando "Sim".`,
      atividade: `Na faixa superior, clique na aba "Apresentação de Slides" e depois em "Testar Intervalos" (ou "Ensaiar Cronometragem"). Fale em voz alta sobre cada slide, como numa apresentação de verdade, e avance até o fim. Anote no caderno o tempo total que apareceu no resumo.`,
      gabarito: `O aluno percorre toda a apresentação falando em voz alta e, ao terminar, vê uma janela com o tempo total (por exemplo, 2 minutos e 30 segundos) e o tempo de cada slide. Ele anota esse tempo total, que é a base para ajustar o ritmo depois.`,
    },
    {
      titulo: `Dupla de palco`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas. Um apresenta um slide usando laser e caneta; o outro cronometra com o celular e dá uma dica gentil. Depois trocam de papel. Incentive elogios específicos ("seu laser ajudou a entender").`,
      atividade: `Em dupla, escolham um slide do exemplo. O aluno A apresenta esse slide em até 45 segundos, usando o laser para apontar e a caneta para destacar algo. O aluno B cronometra no celular e anota uma coisa boa e uma dica. Depois troquem de papel e repitam.`,
      gabarito: `Cada aluno apresenta um slide dentro do tempo combinado usando laser e caneta, e o colega registra o tempo real e um comentário (por exemplo, "ficou em 50 segundos, passou um pouco; o laser ajudou muito"). A dupla pratica tanto as ferramentas quanto o controle do ritmo.`,
    },
    {
      titulo: `Meu trecho de impacto`,
      tipo: `projeto curto e roda de conversa`,
      tempo: `9 min`,
      guiaProfessor: `Feche a aula com uma roda no projetor. Cada aluno apresenta seu trecho usando as ferramentas e o tempo combinado. Valorize quem guiou o olhar da plateia com o laser ou a caneta, não só quem foi rápido. A montagem final fica para a Aula 7.`,
      atividade: `Escolha dois slides do exemplo e prepare um trecho de até 1 minuto. Apresente no projetor para a turma usando pelo menos o laser, a caneta e um momento de tela preta. Comece a fala só depois de iniciar a apresentação com F5. A turma cronometra junto.`,
      gabarito: `O aluno apresenta o trecho dentro de um minuto, iniciando com F5, apontando com o laser, destacando com a caneta e usando a tela preta em um momento de pausa. Ele demonstra que as ferramentas servem para guiar o olhar e que consegue controlar o tempo da própria fala.`,
    },
  ],
};
