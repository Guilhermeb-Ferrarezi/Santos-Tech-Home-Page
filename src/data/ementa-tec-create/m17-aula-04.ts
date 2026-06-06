import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Legendas automáticas e revisão",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Gerar legendas automáticas a partir da voz criada no ElevenLabs e revisar erros de transcrição, tempo e posição para deixar o vídeo legível, sincronizado e acessível.`,
  descricao: `Nesta aula o aluno aprende que um vídeo profissional não depende só do que se ouve: ele também precisa do que se lê na tela. As legendas garantem acessibilidade para quem assiste sem som, para quem tem dificuldade auditiva e para quem fala outro idioma. No CapCut, existe um recurso chamado Captions (Legendas) que escuta o áudio e transforma a fala em texto automaticamente. Como a narração do projeto foi gerada com voz de IA no ElevenLabs, a transcrição costuma ficar bem próxima do original, mas nunca perfeita.

O coração da aula é a revisão. A IA acerta a maior parte das palavras, porém erra nomes próprios, números, termos técnicos e palavras parecidas. Além disso, as legendas podem aparecer rápido demais, atrasadas em relação à fala ou em uma posição que cobre o rosto do personagem ou a interface do jogo. O aluno vai aprender a abrir o painel de edição de legendas, clicar em cada bloco de texto, corrigir o que está escrito, ajustar o tempo de entrada e saída e mover a faixa de legenda para uma área segura da tela.

Também trabalhamos legibilidade: tamanho de fonte adequado, contraste entre o texto e o fundo, uso de um contorno ou caixa para o texto não se perder em cenas claras, e a regra de manter poucas linhas por vez. Uma legenda boa é aquela que o espectador lê sem esforço e que termina junto com a fala.

Ao final, o aluno terá um trecho do seu vídeo com legendas revisadas, sincronizadas e bem posicionadas. Esse é um passo direto rumo ao entregável do mês, o vídeo profissional, e cria o hábito de revisar antes de exportar, em vez de aceitar o que a máquina sugere de primeira.`,
  materiais: [
    `Computadores com o CapCut (versão desktop) instalado e atualizado, um por aluno`,
    `Conta CapCut ativa em cada máquina (login feito antes da aula)`,
    `Arquivo de vídeo de exemplo com narração em português gerada no ElevenLabs (clipe de 20 a 40 segundos)`,
    `Projetor ou tela para o professor demonstrar cada passo ao vivo`,
    `Fones de ouvido para os alunos conferirem a sincronia entre voz e texto`,
    `Lista impressa com 3 a 5 palavras difíceis do roteiro (nomes próprios, números, termos do jogo) para treinar a correção`,
    `Cartão de critérios de legenda legível (tamanho, contraste, posição, número de linhas)`,
  ],
  conceitosChave: [
    `Legenda automática — texto que o CapCut gera ouvindo o áudio e transformando a fala em palavras na tela.`,
    `Transcrição — o ato de converter o que foi falado em texto escrito; a IA faz isso, mas comete erros.`,
    `Sincronia — quando a legenda aparece e some no mesmo momento em que a fala começa e termina.`,
    `Acessibilidade — recursos que permitem que mais pessoas entendam o vídeo, como quem assiste sem som.`,
    `Contraste — diferença de cor entre o texto e o fundo que faz a legenda ser fácil de ler.`,
    `Área segura — região da tela onde a legenda não cobre rostos, interface do jogo nem informações importantes.`,
    `Bloco de legenda — cada pedaço de texto que aparece por alguns segundos e pode ser editado separadamente.`,
  ],
  treinamento: `## O que o professor precisa saber

O recurso de legendas do CapCut desktop fica no menu lateral esquerdo, no botão Text (Texto) e, dentro dele, na aba Auto captions (Legendas automáticas). O CapCut escuta a faixa de áudio selecionada e cria vários blocos de texto na linha do tempo, em uma faixa própria de legenda. Cada bloco é editável: você pode mudar a palavra, arrastar as bordas para alterar o tempo e mover a posição na tela. Importante: a transcrição automática nunca fica perfeita. O valor da aula está em revisar. Antes de começar, deixe o vídeo de exemplo já aberto em um projeto e a faixa de áudio do ElevenLabs visível na linha do tempo, para não perder tempo procurando.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): pergunte quem já assistiu vídeo com o som no mudo, no ônibus ou na sala. Mostre dois exemplos rápidos no projetor: um com legenda boa e outro com legenda atrasada e cobrindo o rosto. Pergunte qual é melhor e por quê. Conecte com a aula anterior, lembrando que eles já sabem cortar e dar ritmo.

Conteúdo novo guiado (15 min): no projetor, abra o projeto. Clique em Text no menu esquerdo, depois em Auto captions. Escolha o idioma Português, selecione a opção de transcrever a faixa de áudio da narração e clique em Generate (Gerar). Mostre os blocos aparecendo na faixa de legenda. Clique em um bloco e abra o painel de edição à direita. Demonstre três acertos: corrigir uma palavra errada digitando por cima; ajustar o tempo arrastando a borda do bloco; e mover a legenda para baixo, longe do rosto. Ajuste também fonte, tamanho e contorno para melhorar a leitura.

Mão na massa (25 min): cada aluno gera as legendas automáticas do próprio trecho (ou do clipe de exemplo). Em seguida, revisa bloco por bloco com fone de ouvido: lê a legenda, ouve a fala e corrige texto, tempo e posição. Circule pela sala. Foco nos três ajustes: texto certo, tempo certo, posição segura. Peça que confiram as palavras difíceis da lista impressa.

Desafio e compartilhar (10 min): cada aluno mostra um trecho com legenda revisada e diz qual erro a IA cometeu e como corrigiu. Reforce a ideia de sempre revisar.

## Como explicar de forma clara

Use a frase: a IA escuta e escreve, mas ela tem sotaque de robô e erra. Nosso trabalho é ser o revisor. Compare com legenda de jogo ou de vídeo que eles já viram. Para sincronia, diga: a legenda tem que entrar quando a boca começa e sair quando a fala acaba, igual karaokê. Para posição, use a ideia de área segura: a legenda não pode tapar o rosto nem os botões do jogo. Para legibilidade, diga: se você lê rápido e sem apertar os olhos, está bom; se precisa parar para entender, está ruim.

## Erros comuns e como ajudar

O erro mais comum é o aluno aceitar a transcrição sem ler. Peça que ouça cada bloco com o fone. Outro erro: corrigir o texto mas esquecer o tempo, deixando a legenda passar rápido demais; mostre como arrastar a borda do bloco para dar mais segundos. Muitos deixam a legenda cobrindo o rosto; ensine a arrastar o texto para a parte de baixo da tela. Também aparece texto com letra pequena ou sem contraste em cenas claras; oriente a aumentar a fonte e ativar o contorno ou a caixa atrás do texto. Por fim, alguns colocam linhas demais de uma vez; lembre a regra de poucas palavras por bloco.`,
  exercicios: [
    {
      titulo: `Gerando as legendas automáticas`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada aluno selecione a faixa de áudio da narração do ElevenLabs antes de gerar. Verifique se o idioma escolhido foi Português.`,
      atividade: `Abra o projeto, clique em Text, depois em Auto captions, escolha Português, selecione a faixa de narração e clique em Generate. Confirme que apareceram blocos de legenda na linha do tempo.`,
      gabarito: `O aluno tem uma faixa de legenda com vários blocos de texto sincronizados ao áudio. Caminho correto: Text - Auto captions - idioma Português - faixa da narração - Generate. Sucesso é ver o texto da fala escrito na tela.`,
    },
    {
      titulo: `Caçador de erros da IA`,
      tipo: `desafio`,
      tempo: `7 min`,
      guiaProfessor: `Entregue a lista de palavras difíceis. Estimule a ouvir cada bloco com fone antes de afirmar que está certo. Conte quantos erros cada aluno encontrou.`,
      atividade: `Ouça todos os blocos e encontre pelo menos três erros de transcrição (palavra errada, nome próprio ou número). Corrija cada um digitando o texto certo por cima.`,
      gabarito: `O aluno lista e corrige no mínimo três erros. Exemplos típicos: nome próprio trocado, número escrito errado e palavra parecida (por exemplo conserto e concerto). Após a correção, cada legenda mostra exatamente o que a voz fala.`,
    },
    {
      titulo: `Sincronia em dupla`,
      tipo: `em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Forme duplas. Um aluno assiste sem olhar a edição e aponta legendas atrasadas ou rápidas demais; o outro ajusta. Depois trocam de papel.`,
      atividade: `Em dupla, assistam ao trecho e marquem onde a legenda entra ou sai fora de hora. Ajustem arrastando as bordas dos blocos até a legenda entrar com a fala e sair junto com ela.`,
      gabarito: `As legendas aparecem quando a fala começa e somem quando ela termina, como em um karaokê. Ajuste feito arrastando as bordas de cada bloco na linha do tempo. Nenhuma legenda fica atrasada ou desaparece antes do fim da frase.`,
    },
    {
      titulo: `Roda de legibilidade`,
      tipo: `roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Use o cartão de critérios. Mostre dois exemplos no projetor (um legível e um ruim) e conduza a turma a justificar cada escolha com base em contraste, tamanho e posição.`,
      atividade: `Em roda, cada aluno mostra uma legenda do próprio vídeo e a turma avalia: dá para ler fácil? O contraste está bom? A posição cobre algo importante? Sugiram uma melhoria para cada caso.`,
      gabarito: `A turma identifica os três critérios de uma legenda legível: tamanho de fonte suficiente, bom contraste com o fundo e posição em área segura sem cobrir rosto ou interface. Cada aluno sai com pelo menos uma melhoria anotada para aplicar.`,
    },
    {
      titulo: `Trecho legendado e acessível`,
      tipo: `projeto curto`,
      tempo: `15 min`,
      guiaProfessor: `Este é o fechamento que alimenta o entregável do mês. Cobre os três ajustes juntos: texto, tempo e posição. Peça que assistam com o som no mudo para testar a acessibilidade.`,
      atividade: `Finalize um trecho de 20 a 40 segundos com legendas totalmente revisadas: texto correto, sincronizado e em área segura, com fonte legível e contorno ativado. Assista com o som desligado para conferir se dá para entender só pela leitura.`,
      gabarito: `O trecho entregue tem legendas sem erros de transcrição, entrando e saindo junto com a fala, posicionadas longe de rostos e da interface, com fonte grande e contorno ou caixa para contraste. Teste final: assistindo sem som, é possível entender a história apenas lendo. Isso comprova a acessibilidade.`,
    },
  ],
};
