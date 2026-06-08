import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Brilho da Moeda",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Animar uma moeda coletável giratória com brilho pulsante usando poucos quadros e o princípio de squash and stretch para dar peso e charme ao item.`,
  descricao: `A moeda giratória é um dos efeitos mais clássicos dos jogos 2D. Pense em Mario, Sonic ou qualquer jogo de plataforma: aquele item dourado que gira sem parar e pisca para chamar a atenção do jogador. Nesta aula, o aluno aprende que não é preciso desenhar dezenas de quadros para criar essa ilusão de rotação. Com apenas quatro a seis frames bem pensados, a moeda parece girar de verdade, e o segredo está em mostrar a moeda de frente, depois mais fina (de lado) e de novo de frente. Isso é animação de efeito, diferente da animação de personagem que os alunos já viram nas aulas anteriores.

Nesta aula entra um conceito poderoso de animação tradicional: o squash and stretch (esmagar e esticar). Quando a moeda gira e fica vista de perfil, ela "esmaga" na largura, ficando bem fininha, quase uma linha vertical. Quando volta a mostrar a face, ela "estica" de volta à largura cheia. Esse esmagar e esticar engana o olho e cria a sensação de volume e de rotação tridimensional usando só pixels chapados. É a mesma ideia que faz uma bola de borracha parecer pesada quando bate no chão.

O segundo ingrediente da aula é o brilho pulsante. Em uma camada separada, o aluno adiciona um pequeno reflexo branco ou amarelo-claro que aparece, cresce e some em ritmo próprio. Esse brilho não precisa acompanhar a rotação: ele tem seu próprio ciclo, mais lento ou mais rápido, e isso dá vida e valor ao item. O aluno percebe que usar camadas separadas (uma para a moeda, outra para o brilho) facilita ajustar cada elemento sem estragar o outro.

Ao final, o aluno tem um sprite de moeda que gira em loop perfeito e brilha, pronto para virar o item coletável do jogo que a turma está construindo. É uma vitória rápida e visível, perfeita para manter o engajamento e mostrar como pouquíssimos quadros, bem aproveitados, valem mais do que muitos quadros mal pensados.`,
  materiais: [
    `Computadores com Aseprite instalado e aberto, um por aluno`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar passo a passo`,
    `Arquivo de exemplo "moeda_base.aseprite" com a face da moeda já desenhada em um único quadro`,
    `Arquivo de exemplo "moeda_pronta.gif" mostrando o resultado final (moeda girando com brilho) para referência`,
    `Paleta de cores dourada pré-carregada (tons de amarelo, laranja e branco) salva como .gpl`,
    `Folha impressa com a sequência dos 4 quadros da rotação (frente, meio, perfil, meio) para os alunos consultarem`,
  ],
  conceitosChave: [
    `Animação de efeito — animação de um objeto do cenário (moeda, brilho, fogo) e não de um personagem; costuma usar poucos quadros em loop.`,
    `Squash and stretch — princípio de esmagar e esticar a forma para dar peso, volume e a ilusão de rotação ou movimento.`,
    `Rotação em poucos quadros — truque de mostrar o objeto de frente, depois fino de perfil e de frente de novo para simular giro 3D com pixels chapados.`,
    `Brilho pulsante — pequeno reflexo de luz que aparece, cresce e some em um ciclo próprio para destacar e valorizar o item.`,
    `Camada (Layer) — folha transparente empilhada onde se desenha um elemento separado; permite editar a moeda e o brilho sem misturar um no outro.`,
    `Loop perfeito — animação cujo último quadro liga suavemente no primeiro, sem solavanco, repetindo para sempre.`,
    `Economia de frames — desenhar o mínimo de quadros necessários para criar a ilusão, em vez de muitos quadros repetidos ou desnecessários.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista. A moeda giratória é o efeito mais fácil de animar bem com pouquíssimos quadros. O coração da aula é uma ideia simples: a moeda gira mostrando a face, depois fica fina de perfil, depois mostra a face de novo. Apenas isso já engana o olho. Em Aseprite, cada quadro fica na linha de baixo (a Timeline). As camadas (Layers) ficam na coluna da esquerda dentro dessa mesma Timeline. Atalhos que você vai repetir: Alt+B abre/fecha a Timeline; barra de espaço com o botão direito serve para navegar; e a tecla Enter inicia o preview da animação. Abra o arquivo "moeda_base.aseprite" antes da aula e deixe o "moeda_pronta.gif" pronto para mostrar no projetor.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: Pergunte quantos quadros eles acham que uma moeda de jogo usa para girar. Mostre o "moeda_pronta.gif" no projetor e revele: só quatro quadros. Relembre a Timeline (Alt+B) e o conceito de loop visto na Aula 2.

15 min — Conteúdo novo guiado: No projetor, abra "moeda_base.aseprite". Mostre a moeda de frente no quadro 1. Crie o quadro 2 clicando no botão "New Frame" (ícone de + na Timeline, ou atalho Alt+N). Nesse quadro 2, use a ferramenta de seleção (atalho M) para selecionar a moeda e aperte a tecla S ou use Edit > Transform para "esmagar" a largura: arraste a alça lateral para dentro, deixando a moeda mais estreita. Esse é o squash. No quadro 3, deixe a moeda bem fininha, quase uma linha vertical (o perfil). No quadro 4, repita o quadro 2 (largura média) para fazer a volta. Explique que do quadro 4 ele liga de novo no quadro 1, fechando o loop. Agora crie uma camada nova clicando em "New Layer" (atalho Shift+N), nomeie "Brilho" e desenhe com o lápis (B) um pontinho branco que aparece só em um ou dois quadros e some nos outros.

25 min — Mão na massa: Cada aluno repete em seu computador, partindo do "moeda_base.aseprite". Circule pela sala. Garanta que cada um tenha de quatro a seis quadros, use squash and stretch na largura e tenha uma camada separada chamada "Brilho". Mande apertar Enter para ver o preview rodando.

10 min — Desafio e compartilhar: Desafie a mudar a velocidade do brilho (clicando duas vezes no quadro na Timeline para ajustar a duração em milissegundos). Cada aluno mostra sua moeda girando para a turma.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem de uma moeda de verdade girando na mesa: "Quando ela está de frente, você vê o desenho inteiro; quando vira de lado, ela some quase virando um risquinho." Diga: "Não vamos desenhar a moeda girando de pouquinho em pouquinho. Vamos só mostrar gorda, magra, gorda, e o olho acredita." Para o squash and stretch, diga que é como apertar uma bexiga: "esmaga de um lado, estica do outro." Para o brilho: "é o brilho que faz parecer caro, tipo o brilho de tesouro."

## Erros comuns e como ajudar

O erro mais comum é desenhar a moeda magra ainda larga: lembre de puxar bem a alça lateral até quase virar uma linha. Outro erro é desenhar o brilho na mesma camada da moeda e apagar parte dela sem querer; reforce criar a camada "Brilho" separada com Shift+N. Muitos esquecem que o quadro final precisa ligar no primeiro, e a animação fica com um "soluço": peça para comparar o último e o primeiro quadro lado a lado. Alguns colocam quadros demais e a moeda gira devagar e estranho; lembre que menos quadros, mais rápido e mais charmoso. Por fim, há quem esqueça de apertar Enter e ache que não funcionou: mostre o preview rodando.`,
  exercicios: [
    {
      titulo: `Esmagando a moeda`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno abra o "moeda_base.aseprite" e use a ferramenta de seleção (M) mais Transform para estreitar a moeda. O foco é sentir o squash na largura, sem se preocupar ainda com o loop completo.`,
      atividade: `Abra o arquivo da moeda. Crie um segundo quadro e, nele, esmague a moeda na largura usando a seleção e a transformação, deixando-a mais fina que a original.`,
      gabarito: `O aluno deve ter dois quadros: o quadro 1 com a moeda na largura cheia e o quadro 2 com a moeda visivelmente mais estreita (esmagada), mantendo a mesma altura. A largura reduzida demonstra o início do squash and stretch.`,
    },
    {
      titulo: `O giro completo em quatro quadros`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça a sequência frente, meio, perfil, meio. Verifique se o quadro do perfil está bem fino (quase uma linha) e se o aluno entende que o quadro 4 liga de volta no quadro 1.`,
      atividade: `Monte os quatro quadros da rotação: frente (largura cheia), meio (mais estreita), perfil (bem fininha, quase uma linha) e meio de novo. Aperte Enter e veja a moeda girar em loop.`,
      gabarito: `Quatro quadros na ordem largura cheia, média, fina, média. Ao rodar com Enter, a moeda parece girar continuamente sem solavanco, pois o quadro 4 conecta suavemente ao quadro 1. O perfil deve ser estreito o bastante para sugerir o lado da moeda.`,
    },
    {
      titulo: `Brilho na camada certa`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Em duplas, um aluno cria a camada "Brilho" com Shift+N e o outro confere se o brilho está mesmo em camada separada e aparece só em um ou dois quadros. Depois trocam de papel. Reforce a checagem visual da lista de camadas.`,
      atividade: `Com o colega, crie uma camada nova chamada "Brilho" acima da moeda. Desenhe um pontinho claro que aparece em apenas um ou dois quadros e some nos outros. Confiram juntos se a moeda continua intacta na camada de baixo.`,
      gabarito: `Deve existir uma camada separada chamada "Brilho" listada acima da camada da moeda. O reflexo aparece em um ou dois quadros e está ausente nos demais. A camada da moeda permanece sem buracos ou apagados, provando que as camadas isolam os elementos.`,
    },
    {
      titulo: `Ritmo do brilho`,
      tipo: `roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza uma conversa em grupo sobre velocidade. Mostre no projetor a mesma moeda com brilho rápido e com brilho lento. Pergunte qual parece mais valiosa e por quê. Ensine a clicar duas vezes no quadro na Timeline para mudar a duração em milissegundos.`,
      atividade: `Discutam em roda: o brilho deve piscar rápido ou devagar para a moeda parecer mais valiosa? Cada aluno ajusta a duração de pelo menos um quadro do brilho na Timeline e explica para a turma a escolha que fez.`,
      gabarito: `Não há resposta única, mas cada aluno deve justificar sua escolha com um critério claro, por exemplo "brilho mais lento parece tesouro caro" ou "rápido chama mais atenção". O importante é que tenham alterado a duração de um quadro e percebido o efeito do ritmo na sensação de valor.`,
    },
    {
      titulo: `Moeda do nosso jogo`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Peça a moeda final completa: rotação em loop com squash and stretch e brilho pulsante em camada separada, pronta para ser o coletável do jogo da turma. Verifique loop fechado, camada "Brilho" isolada e economia de frames (entre quatro e seis quadros).`,
      atividade: `Finalize sua moeda coletável: rotação de quatro a seis quadros com esmagar e esticar, brilho pulsante em camada própria e loop perfeito. Salve o arquivo com o nome "moeda_NOME.aseprite" e mostre rodando para a turma.`,
      gabarito: `Arquivo salvo com moeda girando em loop sem solavanco, usando de quatro a seis quadros (economia de frames), squash and stretch visível na largura e camada "Brilho" separada com reflexo pulsante. A moeda está pronta para virar o item coletável do jogo da turma.`,
    },
  ],
};
