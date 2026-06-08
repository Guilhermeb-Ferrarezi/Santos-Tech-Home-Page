import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Suportes, preenchimento e fatiamento",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Entender o que é fatiar e configurar suportes, preenchimento e altura de camada para gerar o primeiro slice de um personagem no Bambu Studio.`,
  descricao: `Nas aulas anteriores o aluno trouxe o personagem do próprio jogo para a impressora e aprendeu a posicionar e orientar o modelo na mesa. Agora chega a parte mais importante antes de apertar o botão de imprimir: o fatiamento. Fatiar (ou "slicing") é o momento em que o Bambu Studio pega o modelo 3D e o transforma em centenas de camadas finas, uma em cima da outra, junto com as instruções exatas que a impressora vai seguir. Sem fatiar, a impressora não sabe o que fazer com o arquivo.

Nesta aula o professor apresenta três ajustes que mudam tudo no resultado: os suportes, o preenchimento (infill) e a altura de camada. Os suportes são "andaimes" temporários que seguram as partes do modelo que ficam no ar, como um braço esticado ou um chapéu saliente. O preenchimento é o miolo do objeto: a peça não é maciça por dentro, e sim preenchida por uma malha econômica que dá resistência sem gastar muito plástico nem muito tempo. A altura de camada controla o quão fininha é cada fatia, e é o ajuste que mais influencia a qualidade da superfície.

A grande ideia que o aluno precisa levar desta aula é que tudo é uma troca: quanto mais qualidade e resistência, mais tempo e mais material. Camadas mais finas deixam a peça mais lisa, mas dobram o tempo de impressão. Mais preenchimento deixa a peça mais forte, mas pesada e demorada. Mais suporte garante que partes difíceis não desabem, mas dá trabalho para remover depois. O professor vai conduzir os alunos a fazerem o primeiro slice de verdade e a lerem, no painel do Bambu Studio, quanto tempo e quantos gramas cada configuração custa.

Ao final, cada aluno terá um arquivo fatiado do seu personagem, com escolhas conscientes de suporte, preenchimento e altura de camada, pronto para a aula seguinte, em que a impressão acontece de verdade. O foco é o entendimento: o aluno deve saber explicar, com as próprias palavras, por que escolheu cada número.`,
  materiais: [
    `Computadores (1 por aluno) com o Bambu Studio instalado e aberto`,
    `Projetor ou TV para o professor mostrar a tela do Bambu Studio`,
    `Arquivos de exemplo: o modelo .3mf/.stl do personagem de cada aluno (das aulas 1 e 2) e um modelo curinga com partes salientes para testar suportes`,
    `Impressora 3D (Bambu Lab) ligada e calibrada, para mostrar o destino do arquivo fatiado`,
    `Uma peça já impressa cortada ao meio (ou foto) para mostrar o preenchimento por dentro`,
    `Folha-resumo impressa com os três ajustes (suporte, preenchimento, altura de camada) e o que cada um troca`,
  ],
  conceitosChave: [
    `Fatiar (slicing) — transformar o modelo 3D em camadas finas e gerar as instruções que a impressora vai seguir.`,
    `Camada (layer) — cada fatia horizontal da peça; a impressora monta o objeto empilhando camadas de baixo para cima.`,
    `Altura de camada — a espessura de cada fatia (ex.: 0,2 mm); menor deixa mais liso, porém mais lento.`,
    `Suporte (support) — estrutura temporária que sustenta partes salientes ou no ar e é removida depois da impressão.`,
    `Preenchimento (infill) — o miolo da peça; uma malha interna em porcentagem que dá resistência sem deixar a peça maciça.`,
    `Balanço (overhang) — parte do modelo muito inclinada ou no ar que tende a cair se não tiver suporte embaixo.`,
    `Tempo e material estimados — número de horas e gramas que o Bambu Studio calcula após o slice, mostrando o custo de cada ajuste.`,
  ],
  treinamento: `## O que o professor precisa saber

Fatiar é o passo entre o modelo pronto e a impressão. No Bambu Studio o modelo aparece na cena 3D (chamada de placa ou "plate"). O painel de ajustes fica à esquerda; o botão grande "Slice plate" (Fatiar placa) fica no canto superior direito. Você não precisa decorar tudo: para esta aula bastam três ajustes. Em "Quality" está a "Layer height" (altura de camada). Em "Strength" está o "Infill" (preenchimento). Em "Support" você liga ou desliga os suportes. Os valores padrão já funcionam; a aula é sobre entender o que cada número faz, não sobre achar o número perfeito.

Antes da aula, abra o Bambu Studio, importe um personagem de exemplo (File > Import, ou arraste o arquivo para a cena) e clique em "Slice plate" uma vez para ver onde aparecem o tempo e o peso estimados. Assim você não descobre os menus na frente dos alunos.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min): retome a aula 2. Pergunte por que orientar bem o modelo importa. Mostre no projetor a peça cortada ao meio e pergunte: "por que isto é vazado por dentro?". Apresente a palavra do dia: fatiar.

2. Conteúdo guiado (15 min): no projetor, com um modelo aberto, mostre na ordem: (a) o painel esquerdo e a aba "Quality"; mude a "Layer height" de 0,2 mm para 0,28 mm e depois 0,12 mm, explicando liso versus rápido; (b) a aba "Strength" e o campo "Infill"; mude de 15% para 50% e explique resistência versus tempo; (c) a seção "Support": marque "Enable support" e mostre, no modelo curinga com balanço, os andaimes aparecendo. Por fim clique em "Slice plate" e aponte onde o Bambu Studio mostra o tempo total e os gramas (canto direito, depois do slice).

3. Mão na massa (25 min): cada aluno abre o próprio personagem. Pede-se: altura de camada 0,2 mm, preenchimento 15%, suporte ligado se houver balanço. Cada um clica em "Slice plate" e anota tempo e peso. Depois experimenta um único ajuste por vez (só camada, ou só infill) e refaz o slice para comparar. Circule pela sala ajudando a ler os números.

4. Desafio e compartilhar (10 min): cada aluno diz à turma uma troca que descobriu (ex.: "dobrei o infill e o tempo subiu 40 minutos"). Salve o arquivo fatiado de cada um.

## Como explicar de forma clara (linguagem para a idade)

Use imagens do dia a dia. A camada é como empilhar fatias de pão até formar o personagem; fatias finas deixam a montanha mais lisinha, mas são muitas e demoram. O preenchimento é o miolo: ninguém faz um boneco de chocolate todo maciço, faz oco ou com favo de mel para gastar menos e ainda ficar firme. O suporte é o andaime de uma obra: segura o que está no ar e depois é retirado. Repita a frase-chave: "tudo é troca, qualidade custa tempo".

## Erros comuns e como ajudar

Esquecer de clicar em "Slice plate" e achar que nada mudou: lembre que o tempo só aparece depois de fatiar. Mexer em vários ajustes ao mesmo tempo e não saber qual mudou o resultado: peça um ajuste por vez. Ligar suporte em tudo "por segurança": mostre que peças sem balanço não precisam e que suporte demais dá trabalho para remover. Colocar 100% de preenchimento achando que fica "melhor": explique que dobra o tempo e quase não muda a aparência. Confundir altura de camada menor com peça menor: o tamanho do personagem não muda, só a espessura das fatias.`,
  exercicios: [
    {
      titulo: `Meu primeiro slice`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada aluno tenha o próprio personagem aberto na placa. Reforce onde fica o botão "Slice plate" e onde aparece o resultado.`,
      atividade: `Abra o seu personagem no Bambu Studio, deixe a altura de camada em 0,2 mm e o preenchimento em 15%, e clique em "Slice plate". Anote o tempo estimado e o peso em gramas que aparecem na tela.`,
      gabarito: `O aluno acerta quando consegue fatiar e ler os dois números (tempo em horas/minutos e peso em gramas). Não há valor único correto: cada personagem dá um resultado. O professor confere se o aluno aponta corretamente onde o tempo e o peso aparecem após o slice.`,
    },
    {
      titulo: `Liso ou rápido? A altura de camada`,
      tipo: `Desafio`,
      tempo: `8 min`,
      guiaProfessor: `Peça para mudar APENAS a altura de camada, fatiar de novo e comparar com o slice anterior. Mantenha o resto igual para isolar a variável.`,
      atividade: `Mude só a altura de camada para 0,12 mm e clique em "Slice plate". Depois teste 0,28 mm. Anote o tempo de cada um e responda: qual deixa a peça mais lisa e qual é mais rápido?`,
      gabarito: `0,12 mm deixa a peça mais lisa (mais detalhe na superfície) e é o mais lento; 0,28 mm é o mais rápido, porém com camadas mais visíveis. O tempo deve subir bastante ao reduzir a altura de camada. O aluno acerta ao relacionar camada menor = mais liso e mais lento.`,
    },
    {
      titulo: `Quanto preencher por dentro?`,
      tipo: `Em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas. Um aluno testa um valor de preenchimento, o colega testa outro, e juntos comparam tempo e peso. Lembre de mudar só o infill.`,
      atividade: `Em dupla, fatiem o mesmo modelo com preenchimentos diferentes: um usa 15% e o outro usa 50%. Comparem o tempo e o peso de cada slice e decidam qual vale mais a pena para um personagem de enfeite.`,
      gabarito: `50% pesa mais e demora bem mais que 15%, sem melhorar a aparência externa. Para um personagem de enfeite (que não precisa ser super resistente), 15% é a melhor escolha: economiza tempo e plástico. A dupla acerta ao justificar a escolha pela troca tempo/resistência.`,
    },
    {
      titulo: `Onde colocar suporte?`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Mostre no projetor o modelo curinga com um balanço claro (braço esticado ou chapéu). Conduza a turma a apontar onde o material cairia sem suporte.`,
      atividade: `Olhando o modelo na tela, apontem juntos quais partes ficam "no ar" e precisariam de suporte. Liguem e desliguem "Enable support" para ver os andaimes aparecerem e sumirem, e discutam: vale ligar suporte neste personagem?`,
      gabarito: `Partes salientes ou muito inclinadas (balanços) precisam de suporte; partes apoiadas na mesa ou com inclinação suave não precisam. A resposta certa depende do modelo: se houver braço esticado ou aba de chapéu no ar, liga-se o suporte ali; se o personagem for compacto e apoiado, pode-se deixar desligado. O aluno acerta ao identificar os balanços reais do modelo.`,
    },
    {
      titulo: `Receita do meu personagem`,
      tipo: `Projeto curto`,
      tempo: `11 min`,
      guiaProfessor: `Cada aluno define e salva a configuração final do próprio personagem, justificando cada escolha. Verifique se o slice foi gerado e o arquivo salvo para a aula de impressão.`,
      atividade: `Defina a configuração final do seu personagem (altura de camada, preenchimento e suporte ligado ou desligado), fatie com "Slice plate" e escreva uma frase para cada ajuste explicando por que escolheu aquele número. Salve o arquivo fatiado.`,
      gabarito: `O aluno acerta quando entrega um slice gerado com três escolhas coerentes e uma justificativa por ajuste, por exemplo: "camada 0,2 mm para equilibrar qualidade e tempo; preenchimento 15% porque é enfeite e não precisa ser muito forte; suporte ligado porque o braço fica no ar". Não há números únicos certos; o que importa é que cada escolha esteja justificada pela troca entre qualidade, tempo e material, e que o arquivo esteja salvo.`,
    },
  ],
};
