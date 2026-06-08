import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Misturando tudo no CapCut",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Juntar música, vozes e efeitos no CapCut, equilibrando volumes para a narração ficar clara sobre a trilha, sincronizando o som com as cenas e criando transições suaves de áudio.`,
  descricao: `Esta aula é o momento em que tudo o que os alunos criaram no mês finalmente se encontra. Durante as semanas anteriores eles geraram música no Suno, vozes e narração no ElevenLabs e gravaram efeitos sonoros. Agora chega a hora de empilhar todos esses sons numa única linha do tempo e fazer com que conversem entre si. O CapCut é o estúdio de mixagem dos alunos: é nele que a trilha vira fundo, a voz vira protagonista e os efeitos entram nos momentos certos.

A grande ideia da aula é a mixagem, ou seja, o equilíbrio de volumes. Um erro clássico de quem começa é deixar tudo no volume máximo: a música abafa a voz e ninguém entende a narração. O aluno aprende que cada som tem um papel. A voz fica na frente, alta e nítida. A música fica atrás, mais baixa, dando clima. Os efeitos pontuam momentos específicos sem atropelar o resto. Esse jogo de camadas é o que separa um vídeo amador de um vídeo que parece profissional.

Além de equilibrar volumes, o aluno aprende a sincronizar o áudio com a imagem. Um efeito de pulo precisa tocar exatamente quando o personagem pula. Uma fala precisa começar quando a boca do personagem se mexe ou quando a cena pede. Para isso, eles vão arrastar os clipes de áudio com precisão na linha do tempo e usar o cursor de reprodução como referência. Quando o som bate certo com a imagem, o vídeo ganha vida.

Por fim, entram as transições suaves de áudio, que são o fade in e o fade out. Em vez de a música cortar de repente, ela surge devagar no começo e some devagar no final. Esse acabamento simples deixa o resultado muito mais agradável aos ouvidos e prepara o material para a entrega final do mês, que é o pacote de áudio pronto para usar no vídeo e nos jogos.`,
  materiais: [
    `Computadores com o CapCut instalado (versão de computador) e login feito em cada conta`,
    `Arquivos de música exportados do Suno (formato mp3) de cada aluno`,
    `Arquivos de voz e narração exportados do ElevenLabs (formato mp3) de cada aluno`,
    `Efeitos sonoros gravados ou baixados nas aulas anteriores, salvos numa pasta organizada`,
    `Um vídeo curto de exemplo (10 a 20 segundos) para servir de base da mixagem, caso o aluno ainda não tenha o próprio`,
    `Projetor ou TV para o professor demonstrar a linha do tempo do CapCut para a turma`,
    `Fones de ouvido para cada aluno conferir o equilíbrio dos volumes sem atrapalhar o colega`,
  ],
  conceitosChave: [
    `Mixagem — equilibrar os volumes de música, voz e efeitos para que todos sejam ouvidos no momento certo.`,
    `Faixa de áudio — cada linha separada na linha do tempo onde fica um tipo de som (uma para a voz, outra para a música, outra para os efeitos).`,
    `Linha do tempo — a área de baixo do CapCut onde os clipes ficam empilhados em ordem, da esquerda para a direita.`,
    `Sincronizar — alinhar o som com a imagem para que o efeito ou a fala aconteça no instante exato da cena.`,
    `Fade in e fade out — transição suave em que o som surge devagar no início e some devagar no final, sem corte seco.`,
    `Volume — o quão alto ou baixo um clipe toca, medido em decibéis (dB) e ajustável faixa por faixa.`,
    `Cursor de reprodução — a linha vertical branca que mostra exatamente em que ponto do vídeo o som está tocando.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser editor de vídeo para dar esta aula. O CapCut é amigável e tudo o que importa hoje cabe em poucos comandos. A regra de ouro, que você vai repetir o tempo todo, é simples: a voz na frente, a música atrás, os efeitos nos momentos certos. Se você guardar só isso, já consegue conduzir a turma.

Primeiro, entenda a tela do CapCut de computador. No alto, à esquerda, fica o painel de mídia, onde os arquivos importados aparecem. No centro, a janela de pré-visualização, onde o vídeo toca. Embaixo, ocupando toda a largura, fica a linha do tempo. À direita, ao clicar num clipe, abre o painel de propriedades, onde está o controle de volume e os botões de fade.

Para importar os sons: clique em "Importar" (ou "Import") no painel de mídia e selecione os arquivos mp3 do Suno e do ElevenLabs. Para colocar na linha do tempo, arraste cada arquivo para baixo. O CapCut cria automaticamente faixas separadas quando você solta um áudio numa linha vazia. O objetivo é ter três faixas: voz, música e efeitos.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento e revisão: Toque para a turma dois exemplos no projetor: o mesmo trecho com a música alta abafando a voz e depois com a voz na frente. Pergunte qual ficou melhor e por quê. Anote no quadro a regra "voz na frente, música atrás".

15 min - Conteúdo novo guiado: No seu CapCut, mostre passo a passo: importe um mp3 de voz e um de música, arraste os dois para faixas diferentes na linha do tempo. Clique na faixa da música, vá ao painel da direita e baixe o volume para perto de menos 15 dB. Clique na voz e deixe perto de zero dB. Depois, ainda no painel da música, arraste o botão de fade in e o de fade out para criar a entrada e a saída suaves.

25 min - Mão na massa: Cada aluno importa a própria voz, música e efeitos e monta as três faixas na linha do tempo. Em seguida, equilibra os volumes (voz alta, música baixa) e sincroniza pelo menos um efeito com uma cena, arrastando o clipe até o cursor de reprodução bater no momento certo. Circule conferindo se cada um separou as faixas e se a voz está nítida sobre a música.

10 min - Desafio e compartilhar: Cada aluno aplica fade in e fade out na música e mostra ao colega ao lado um trecho de 10 segundos com tudo misturado. Feche pedindo a um ou dois voluntários para reproduzir no projetor.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem de uma banda. Diga: "A voz é o cantor, todo mundo precisa ouvir bem. A música é a banda atrás, importante, mas mais baixa. Os efeitos são os solos, entram na hora certa e somem." Para o volume, compare com o controle da TV: "Quando a vovó liga a TV no máximo, dói o ouvido. A música no máximo abafa a sua narração." Para o fade, fale em "som que acende e apaga devagar, como uma luz com dimmer, em vez de um interruptor seco".

## Erros comuns e como ajudar

O erro mais comum é deixar todos os sons na mesma faixa, empilhados; mostre que cada som precisa da própria linha para ser controlado separado. Outro é esquecer de baixar a música, e a voz some; lembre a regra dos menos 15 dB para a trilha. Muitos arrastam o efeito a olho e ele fica fora do tempo; ensine a parar o cursor de reprodução na cena e encostar o clipe nele. Há quem aplique fade tão longo que o som quase desaparece; oriente um fade curto, de um a dois segundos. Por fim, alguns esquecem o fone e mixam pelo som ambiente da sala; insista no uso do fone para ouvir o equilíbrio de verdade.`,
  exercicios: [
    {
      titulo: `Importar e separar em faixas`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Confira se cada aluno importa os mp3 e cria faixas separadas. Circule olhando a linha do tempo: deve haver linhas distintas para voz, música e efeitos.`,
      atividade: `No CapCut, clique em "Importar" e traga seus arquivos de voz, música e efeito. Arraste cada um para uma linha diferente da linha do tempo, criando três faixas separadas.`,
      gabarito: `O aluno acerta quando a linha do tempo mostra três faixas distintas, uma com a voz, uma com a música e uma com o efeito, cada clipe na própria linha e nenhum som empilhado em cima do outro.`,
    },
    {
      titulo: `Equilibrar a voz sobre a música`,
      tipo: `prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Reforce a regra "voz na frente, música atrás". Ajude a achar o controle de volume no painel da direita. Peça que ouçam com fone antes de decidir.`,
      atividade: `Clique na faixa da música e baixe o volume para perto de menos 15 dB. Clique na voz e deixe perto de zero dB. Ouça com o fone e ajuste até entender a narração com clareza sobre a trilha.`,
      gabarito: `A mixagem está correta quando, ao reproduzir, a voz é entendida palavra por palavra e a música fica nítida porém ao fundo. A música deve estar visivelmente mais baixa que a voz, em torno de menos 15 dB contra zero dB da narração.`,
    },
    {
      titulo: `Sincronizar o efeito com a cena`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `Desafie o aluno a fazer o efeito tocar no instante exato da ação. Ensine a parar o cursor de reprodução na cena e encostar o clipe do efeito nesse ponto.`,
      atividade: `Escolha uma ação no vídeo (um pulo, uma porta abrindo, um clique). Mova o cursor de reprodução até esse instante e arraste o clipe do efeito para começar exatamente ali. Reproduza para conferir.`,
      gabarito: `O desafio é vencido quando, ao reproduzir, o som do efeito acontece no mesmo instante da ação na imagem, sem atraso nem adiantamento perceptível. O início do clipe de efeito deve encostar na posição do cursor sobre a cena escolhida.`,
    },
    {
      titulo: `Fade in e fade out em dupla`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas. Cada um aplica fade na própria música e o colega confere de ouvido se a entrada e a saída ficaram suaves, sem corte seco. Oriente fades curtos, de um a dois segundos.`,
      atividade: `Clique na faixa da música e arraste o botão de fade in no começo e o de fade out no final, criando entrada e saída suaves. Depois, ouça o trecho do colega e diga se o som "acendeu e apagou" sem corte brusco.`,
      gabarito: `O exercício é válido quando a música surge crescendo no início e some diminuindo no final, em vez de começar e terminar de forma seca. O feedback do colega deve confirmar a suavidade ou apontar se o fade ficou longo demais e quase apagou o som.`,
    },
    {
      titulo: `Roda de conversa: o que deixa o áudio profissional`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Sente a turma em roda. Conduza com perguntas sobre as escolhas de mixagem e ajude cada aluno a explicar, com palavras próprias, por que a voz fica na frente e a música atrás.`,
      atividade: `Em roda, conte qual parte da mixagem mais melhorou o seu vídeo: equilibrar os volumes, sincronizar o efeito ou aplicar os fades. Explique por que a voz deve ficar mais alta que a música.`,
      gabarito: `A participação é completa quando o aluno cita pelo menos uma técnica da aula com um motivo claro e justifica que a voz fica na frente para que a narração seja entendida, enquanto a música fica atrás para dar clima sem abafar a fala.`,
    },
  ],
};
