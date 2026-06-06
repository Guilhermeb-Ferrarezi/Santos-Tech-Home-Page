import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Montando minha biblioteca de sons",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Gerar um conjunto completo de efeitos sonoros para as ações do jogo, ajustar o volume e a duração de cada som e organizá-los em uma pasta nomeada e pronta para usar.`,
  descricao: `Nesta aula, os alunos deixam de criar sons soltos e passam a pensar como um verdadeiro estúdio de áudio: eles vão montar uma biblioteca de sons. Uma biblioteca é uma pasta organizada com todos os efeitos sonoros (os SFX) que o jogo precisa, cada um com um nome claro e pronto para ser arrastado para dentro do projeto. Em vez de procurar "aquele som do pulo" no meio de vários arquivos sem nome, o aluno terá tudo no lugar certo.

O ElevenLabs tem uma ferramenta chamada Sound Effects (Efeitos Sonoros), onde escrevemos em inglês uma descrição curta do som que queremos (um prompt) e a IA gera o áudio. Nesta aula, o foco é criar um conjunto coerente: o som de pulo, o de moeda coletada, o de dano, o de vitória, o de clique no menu e o passo do personagem. A ideia é que esses sons combinem entre si e formem a identidade sonora do jogo.

Depois de gerar, vem a parte de ajuste fino. Nem todo som nasce no tamanho ou no volume certo. Um efeito de clique não pode durar três segundos; um som de vitória não pode estourar o ouvido. Os alunos vão aprender a recortar a duração, a baixar ou subir o volume e a deixar todos os sons no mesmo "peso", para que nenhum fique alto demais ou sumido demais dentro do jogo.

Ao final, cada aluno terá uma pasta no computador chamada Sons_do_Jogo, com subpastas por categoria e arquivos nomeados de forma padronizada (por exemplo, sfx_pulo.mp3, sfx_moeda.mp3). Essa organização é o que separa um projeto amador de um profissional: quando o som está nomeado e arrumado, montar o jogo no Roblox Studio depois fica muito mais rápido e fácil.`,
  materiais: [
    `Computadores com acesso ao ElevenLabs (ferramenta Sound Effects) pelo navegador, um por aluno`,
    `Conta no ElevenLabs já criada e com login feito antes da aula, com créditos disponíveis`,
    `Projetor ou TV para o professor demonstrar cada passo na tela grande`,
    `Fones de ouvido para cada aluno escutar e comparar os efeitos sem atrapalhar a turma`,
    `Pasta de exemplo já pronta (Sons_do_Jogo) mostrando a organização modelo com subpastas e nomes padronizados`,
    `Lista impressa ou slide com as ações do jogo que precisam de som (pulo, moeda, dano, vitória, clique, passo)`,
    `Folha de "tabela de sons" para o aluno anotar o nome do arquivo, a ação e a duração de cada efeito`,
  ],
  conceitosChave: [
    `Biblioteca de sons — pasta organizada que reúne todos os efeitos sonoros do jogo, cada um nomeado e pronto para usar.`,
    `SFX (efeito sonoro) — som curto que representa uma ação do jogo, como pulo, moeda coletada ou dano.`,
    `Prompt de som — a descrição curta, em inglês, que escrevemos no ElevenLabs para a IA gerar o efeito.`,
    `Duração — o tempo que o som dura, medido em segundos; efeitos de ação costumam ser bem curtos.`,
    `Volume (nível) — o quão alto ou baixo o som toca; sons da mesma biblioteca devem ter volumes parecidos.`,
    `Padrão de nomes — a regra de como nomear os arquivos (por exemplo, sfx_acao.mp3) para achar tudo rápido.`,
    `Categoria — o grupo a que um som pertence (ações, menu, ambiente), usado para criar as subpastas.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em áudio. Esta aula gira em torno de três ações: gerar, ajustar e organizar. No ElevenLabs, a ferramenta usada é a "Sound Effects" (Efeitos Sonoros), encontrada no menu lateral esquerdo. Nela há uma caixa de texto onde escrevemos o prompt (em inglês, que funciona melhor), um controle de duração (Duration) e o botão "Generate" (Gerar). Cada som gerado aparece numa lista; ao lado de cada um há um botão de play (tocar) e um de download (baixar), geralmente um ícone de seta para baixo. Os prompts são curtos e diretos, por exemplo: "short coin pickup sound, 8-bit, bright" (som curto de pegar moeda, estilo 8-bit, brilhante). Esses são os termos que você vai apontar na tela.

## Passo a passo da aula

Aquecimento (10 min): Retome a aula anterior perguntando quais efeitos a turma já criou. Mostre um trecho de gameplay no projetor e peça para os alunos listarem todas as ações que pedem som: pular, coletar, levar dano, vencer, clicar no menu, andar. Escreva a lista no quadro. Explique que hoje vão transformar essa lista numa biblioteca organizada.

Conteúdo novo guiado (15 min): No projetor, abra o ElevenLabs e clique em "Sound Effects" no menu esquerdo. Escreva o prompt "short jump sound for platformer game, retro, bright" e ajuste a duração (Duration) para cerca de 1 segundo. Clique em "Generate". Toque o resultado, gere uma ou duas variações e escolha a melhor. Clique no ícone de download para baixar em MP3. Mostre como renomear o arquivo para sfx_pulo.mp3 e movê-lo para a subpasta "Acoes" dentro da pasta Sons_do_Jogo. Repita rápido com "coin pickup". Reforce: prompt curto, duração pequena, nome padronizado.

Mão na massa (25 min): Cada aluno gera os seis efeitos da lista (pulo, moeda, dano, vitória, clique, passo), escolhendo a melhor versão de cada. Em seguida, baixa, renomeia no padrão sfx_acao.mp3 e guarda nas subpastas certas (Acoes, Menu). Peça que confiram a duração de cada som e cortem ou regerem os que ficaram longos demais. Oriente a igualar o volume: sons muito altos devem ser regerados ou baixados. Circule pela sala ajudando individualmente e conferindo a tabela de sons.

Desafio + compartilhar (10 min): Cada aluno toca a biblioteca para o colega do lado, que tenta adivinhar qual ação é cada som só de ouvir. Dois ou três voluntários mostram a pasta organizada no projetor.

## Como explicar de forma clara

Use a comparação da "caixa de ferramentas": cada som é uma ferramenta, e a biblioteca é a caixa onde cada uma tem seu lugar marcado. Diga que nomear arquivos é como etiquetar gavetas: sem etiqueta, você perde tempo procurando. Explique que o prompt em inglês é como dar uma "receita" curta para a IA, e que quanto mais simples e direta, melhor o resultado. Sobre volume, use a ideia do rádio: todos os sons devem tocar mais ou menos no mesmo "ponto", sem nenhum gritando nem sumindo. Mostre sempre na tela antes de pedir para fazer, e repita o padrão de nomes várias vezes para fixar.

## Erros comuns e como ajudar

O erro mais comum é o prompt longo e confuso; mostre que descrições curtas em inglês geram sons melhores. Outro é deixar a duração alta, criando um efeito arrastado: lembre que sons de ação duram menos de um a dois segundos. Muitos esquecem de renomear e ficam com nomes como "ElevenLabs_audio(3).mp3"; pare e mostre o padrão sfx_acao.mp3 antes que a bagunça cresça. Alguns jogam tudo numa pasta só; reforce as subpastas por categoria. Há quem gere sons com volumes muito diferentes; ensine a regerar ou ajustar para igualar. Por fim, alguns esquecem de preencher a tabela de sons; passe conferindo, pois ela é o mapa da biblioteca.`,
  exercicios: [
    {
      titulo: `Gerando o primeiro efeito`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno encontre a ferramenta "Sound Effects" no menu esquerdo e use um prompt curto em inglês com duração baixa. Confira se baixaram o arquivo em MP3.`,
      atividade: `No ElevenLabs, abra "Sound Effects", escreva o prompt "short jump sound for platformer game, retro" com duração de cerca de 1 segundo, gere, escolha a melhor versão e baixe o arquivo.`,
      gabarito: `O aluno tem um arquivo de áudio do pulo baixado no computador, curto (perto de 1 segundo), gerado a partir de um prompt em inglês e com som adequado a um pulo de jogo.`,
    },
    {
      titulo: `Nomeando e arrumando a gaveta`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre o padrão de nomes sfx_acao.mp3 e as subpastas. Confira se os arquivos foram movidos para a categoria certa e renomeados sem espaços estranhos.`,
      atividade: `Crie a pasta Sons_do_Jogo com as subpastas Acoes e Menu. Renomeie o som do pulo para sfx_pulo.mp3 e mova-o para a subpasta Acoes.`,
      gabarito: `Existe a pasta Sons_do_Jogo com as subpastas Acoes e Menu, e o arquivo sfx_pulo.mp3 está dentro de Acoes, com o nome no padrão correto e sem caracteres bagunçados.`,
    },
    {
      titulo: `Conjunto de seis sons`,
      tipo: `projeto curto`,
      tempo: `6 minutos`,
      guiaProfessor: `Incentive variar os prompts para cada ação, mas mantendo um estilo parecido (por exemplo, todos retro). Lembre de checar a duração e igualar volumes.`,
      atividade: `Gere os seis efeitos do jogo (pulo, moeda, dano, vitória, clique, passo), baixe cada um, nomeie no padrão sfx_acao.mp3 e guarde na subpasta certa.`,
      gabarito: `A biblioteca tem os seis sons baixados, todos nomeados no padrão e distribuídos nas subpastas Acoes e Menu, com durações curtas e volumes parecidos entre si.`,
    },
    {
      titulo: `Adivinha o som`,
      tipo: `em dupla`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas. Oriente que um aluno toque os sons em ordem aleatória e o outro tente identificar a ação só de ouvir, sem ver a tela.`,
      atividade: `Em dupla, toque sua biblioteca para o colega, que deve adivinhar qual ação cada som representa. Anotem juntos os sons que não ficaram claros.`,
      gabarito: `A dupla identifica corretamente a maioria dos sons e aponta pelo menos um efeito que precisa melhorar para ficar mais reconhecível, explicando o porquê.`,
    },
    {
      titulo: `Roda de conversa: o que faz uma boa biblioteca`,
      tipo: `roda de conversa`,
      tempo: `4 minutos`,
      guiaProfessor: `Reúna a turma e conduza com perguntas abertas. Anote no quadro as regras que surgirem para retomar na próxima aula, sobre misturar tudo no CapCut.`,
      atividade: `Em roda, cada aluno diz uma regra que aprendeu hoje para organizar sons (por exemplo, nomear no padrão, separar por categoria ou igualar volumes).`,
      gabarito: `A turma levanta ao menos quatro ideias válidas, como: usar nomes padronizados, separar em subpastas por categoria, manter durações curtas e deixar os volumes parecidos entre os sons.`,
    },
  ],
};
