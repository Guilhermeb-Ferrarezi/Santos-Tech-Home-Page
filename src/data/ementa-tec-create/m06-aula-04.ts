import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Suportes e Aderência na Mesa",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprender a identificar partes do personagem que precisam de suportes e aplicar brim ou raft para garantir que a peça não descole da mesa durante a impressão.`,
  descricao: `Nesta aula o aluno dá um passo importante na preparação da impressão: entender por que algumas partes do modelo simplesmente não podem ser impressas no ar. Toda impressora 3D constrói a peça camada por camada, de baixo para cima, e cada camada precisa de algo embaixo para se apoiar. Quando o personagem tem braços abertos, um chapéu saliente, uma capa ou um queixo projetado, essas regiões ficam "flutuando" e desabam sem ajuda. A solução são os suportes: estruturas finas e temporárias que o Orca Slicer gera automaticamente para segurar essas partes durante a impressão e que depois são removidas.

Além dos suportes, a aula trata da aderência na mesa, que é o que impede a peça de descolar e arruinar a impressão. Personagens com base pequena ou pés finos têm pouca área de contato com a mesa e tendem a soltar no meio do processo. Para resolver isso, o Orca oferece dois recursos: o brim, uma "saia" fina de plástico ao redor da base que aumenta a área grudada, e o raft, uma plataforma completa impressa por baixo do modelo. O aluno vai comparar os dois e escolher o ideal para o próprio personagem.

O coração da aula é a prática: cada aluno abre o arquivo do personagem fatiado na aula anterior, gira a câmera para inspecionar onde ficam as saliências (overhangs), liga os suportes, decide entre brim ou raft e fatia novamente observando a prévia. Ao final, o aluno terá um arquivo realmente pronto para imprimir, com os parâmetros ajustados especificamente para a geometria do seu modelo.

Esta é a quarta de oito aulas do mês. Ela não cobre o envio para a impressora nem o acompanhamento ao vivo, que virão nas próximas semanas. Aqui o foco é dominar suportes e aderência e deixar o arquivo final fatiado e validado na prévia.`,
  materiais: [
    `Computadores com o Orca Slicer instalado e abertos, um por aluno`,
    `Arquivo do personagem de cada aluno (modelo importado e fatiado na aula anterior)`,
    `Arquivo de exemplo do professor com saliências evidentes (braço aberto, capa ou chapéu)`,
    `Projetor ou TV para o professor mostrar a tela do Orca Slicer ao vivo`,
    `Impressora 3D ligada para mostrar suportes reais e uma peça já impressa com brim`,
    `Folha impressa com a regra dos 45 graus e exemplos de overhang`,
  ],
  conceitosChave: [
    `Suporte (Support) — estrutura temporária que o programa cria para segurar partes que ficariam no ar durante a impressão.`,
    `Saliência (Overhang) — parte do modelo inclinada ou esticada para fora que não tem nada embaixo para se apoiar.`,
    `Regra dos 45 graus — inclinações maiores que 45 graus em relação à vertical normalmente precisam de suporte.`,
    `Brim — uma saia fina de plástico em volta da base que aumenta a área de contato e evita o descolamento.`,
    `Raft — uma plataforma completa impressa por baixo da peça, usada quando a base é muito pequena ou instável.`,
    `Aderência (Adhesion) — o quanto a primeira camada gruda na mesa; pouca aderência faz a peça soltar e estragar.`,
    `Ponte (Bridge) — trecho reto que liga dois pontos altos no ar e que às vezes imprime sem suporte se for curto.`,
  ],
  treinamento: `## O que o professor precisa saber

Impressoras 3D constroem de baixo para cima, então qualquer parte sem apoio embaixo desaba. A "regra dos 45 graus" resume tudo: superfícies inclinadas mais de 45 graus em relação à vertical pedem suporte. Suportes são colunas finas que o Orca gera sozinho e que depois quebramos com a mão ou alicate. Aderência é coisa diferente: trata de como a primeira camada gruda na mesa. Base pequena solta no meio da impressão. O brim é uma saia fina ao redor da base (fácil de remover); o raft é uma plataforma inteira por baixo (mais forte, gasta mais material). Para personagens com pés finos, comece pelo brim. Antes da aula, abra o Orca, garanta que o arquivo de exemplo tem uma saliência clara e teste você mesmo os passos abaixo uma vez.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento: mostre no projetor o personagem de exemplo. Gire a câmera (segure o botão direito do mouse e arraste) e pergunte: "Que parte ficaria no ar?". Aponte braços, capa, chapéu. Mostre uma peça impressa real com suportes ainda grudados e deixe os alunos tocarem.

15 min — Conteúdo novo guiado: no painel esquerdo do Orca, abra a aba "Suportes" (Support). Marque "Habilitar suporte" (Enable support). Em "Tipo de suporte" escolha "Normal(auto)". Aponte o campo "Limite de saliência" (Support threshold angle) e explique que 45 é o padrão seguro. Clique em "Fatiar" (Slice plate, atalho Ctrl+R) e mostre na prévia os suportes em cor diferente. Depois vá à aba "Outros" / "Aderência" (Adhesion) e no campo "Tipo de aderência" (Brim type) escolha "Brim externo" (Outer brim only); ajuste "Largura do brim" para algo entre 4 e 6 mm. Fatie de novo e mostre a saia ao redor da base.

25 min — Mão na massa: cada aluno abre o próprio arquivo. Tarefa: 1) girar a câmera e listar duas partes que precisam de suporte; 2) habilitar suporte Normal(auto); 3) escolher brim OU raft conforme o tamanho da base; 4) fatiar (Ctrl+R) e conferir na prévia se os suportes aparecem só onde deveriam. Circule pela sala ajudando individualmente.

10 min — Desafio e compartilhar: desafie quem terminar a baixar o limite para 30 graus, refatiar e comparar quanto suporte a mais aparece. Cada aluno mostra a prévia para a turma em uma frase: onde colocou suporte e por que escolheu brim ou raft.

## Como explicar de forma clara (linguagem para a idade)

Use imagens do dia a dia. Suporte é como o "escoramento" de uma construção: andaime temporário que segura enquanto o prédio sobe e depois é retirado. A regra dos 45 graus vira: "se a parede está mais deitada que em pé, ela precisa de muleta". Brim é "a saia da peça, que pisa mais largo na mesa para não cair", como abrir os braços para se equilibrar. Raft é "um tapete embaixo do personagem". Reforce que suporte não é parte do personagem: é lixo útil que vai para o lixo depois. Evite excesso de suporte porque dá trabalho remover e marca a peça.

## Erros comuns e como ajudar

O mais comum é ligar suporte em tudo e gerar uma "floresta" desnecessária; mostre que partes em pé não precisam de nada. Outro erro é esquecer de fatiar de novo (Ctrl+R) depois de mudar uma opção: a prévia continua igual e o aluno acha que não funcionou. Alguns confundem brim com suporte: lembre que brim é só na base, no chão. Há quem coloque brim largo demais e depois sofra para remover; 5 mm costuma bastar. Se o personagem tem base minúscula e mesmo com brim parece instável, troque para raft. Por fim, alguns esquecem de salvar antes de fatiar; oriente sempre Ctrl+S ao final.`,
  exercicios: [
    {
      titulo: `Caça aos overhangs`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno saiba girar a câmera com o botão direito do mouse antes de começar. Circule conferindo se eles estão olhando a peça por baixo também.`,
      atividade: `Abra o seu personagem no Orca Slicer, gire a câmera em volta dele e identifique pelo menos duas partes que ficariam no ar durante a impressão. Anote quais são.`,
      gabarito: `Resposta varia por modelo. Exemplos válidos: braços abertos, mãos esticadas, abas do chapéu, capa, queixo projetado, partes embaixo dos pés. O aluno deve apontar regiões com inclinação maior que 45 graus, sem apoio embaixo.`,
    },
    {
      titulo: `Ligando os suportes`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe a aba "Suportes" na tela de cada um. O erro frequente é esquecer o Ctrl+R; lembre a turma de fatiar para ver o resultado na prévia.`,
      atividade: `Na aba "Suportes", habilite o suporte no tipo "Normal(auto)" com limite de 45 graus. Fatie a peça (Ctrl+R) e confira na prévia se os suportes apareceram nas partes que você listou.`,
      gabarito: `Suporte habilitado, tipo Normal(auto), limite em 45 graus. Após Ctrl+R, a prévia mostra os suportes em cor diferente exatamente sob as saliências apontadas, e não embaixo de partes verticais.`,
    },
    {
      titulo: `Brim ou raft?`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Deixe o aluno decidir e justificar. Reforce que brim resolve a maioria dos casos e que raft é reservado para bases muito pequenas. Confira se refatiaram após escolher.`,
      atividade: `Olhe o tamanho da base do seu personagem. Escolha brim (saia fina, base normal) ou raft (base muito pequena ou instável), aplique na aba de aderência, ajuste a largura para cerca de 5 mm se for brim e fatie de novo.`,
      gabarito: `Escolha coerente com a base: base normal a grande usa brim externo de 4 a 6 mm; base minúscula ou pés muito finos usa raft. Após fatiar, a prévia mostra a saia ao redor da base (brim) ou a plataforma por baixo (raft).`,
    },
    {
      titulo: `Comparando dois limites`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Um aluno fatia com 45 graus e o outro com 30 graus no mesmo modelo de exemplo. Ajude-os a comparar a quantidade de suporte lado a lado na prévia.`,
      atividade: `Em dupla, peguem o mesmo modelo. Um fatia com limite de suporte em 45 graus, o outro em 30 graus. Comparem as prévias: qual gerou mais suporte? Qual seria mais fácil de limpar depois?`,
      gabarito: `O limite de 30 graus gera mais suporte, pois passa a apoiar inclinações que 45 graus deixava livres. Mais suporte significa impressão mais segura para saliências difíceis, porém mais material gasto e mais trabalho de remoção e marcas na peça.`,
    },
    {
      titulo: `Arquivo final pronto`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `É a entrega da aula. Verifique item por item antes de aprovar. Confirme que cada aluno salvou o projeto (Ctrl+S) e que a prévia está coerente, sem suporte sobrando.`,
      atividade: `Deixe o seu personagem totalmente pronto para impressão: suportes só onde precisam, brim ou raft escolhido, peça fatiada (Ctrl+R) e projeto salvo (Ctrl+S). Escreva uma frase explicando suas escolhas.`,
      gabarito: `Arquivo aprovado quando: suporte habilitado apenas sob saliências reais; aderência definida (brim de cerca de 5 mm ou raft, conforme a base); peça fatiada com prévia limpa; projeto salvo. A frase deve justificar onde há suporte e por que escolheu brim ou raft.`,
    },
  ],
};
