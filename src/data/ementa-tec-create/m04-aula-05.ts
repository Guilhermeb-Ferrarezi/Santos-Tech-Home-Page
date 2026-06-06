import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Suportes e Preenchimento",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Entender por que partes flutuantes precisam de suportes e o que é o preenchimento interno (infill), ativando suportes automáticos e testando diferentes porcentagens de preenchimento no Orca Slicer.`,
  descricao: `Nas aulas anteriores do mês, os alunos abriram o Orca Slicer, exploraram a mesa virtual e trouxeram o próprio personagem para dentro do programa. A peça já está posicionada na mesa, mas ainda falta resolver dois segredos importantes antes de fatiar e imprimir: o que segura as partes que ficam no ar e o que existe dentro da peça. Esses dois segredos são os suportes e o preenchimento, o coração desta aula.

A impressora 3D constrói a peça camada por camada, sempre de baixo para cima, colocando plástico derretido sobre o que já está embaixo. O problema aparece quando uma parte do modelo começa flutuando, sem nada embaixo dela, como o braço esticado de um personagem ou a aba de um chapéu. Sem apoio, o plástico cai e vira um emaranhado. Os suportes são pequenas colunas de plástico que a própria impressora cria só para segurar essas partes durante a impressão; depois a gente quebra e joga fora. Por isso eles são como andaimes de uma obra: ficam ali só enquanto a construção precisa, e no fim são retirados.

O preenchimento, ou infill, é o que existe dentro da peça. Quase nenhum modelo é impresso totalmente maciço, porque isso gastaria muito plástico e levaria horas a mais. Em vez disso, o Orca Slicer cria uma estrutura interna em forma de favo de mel, grade ou outros padrões, e o aluno escolhe a porcentagem: 0% deixa a peça oca, 100% deixa totalmente maciça. Quanto maior a porcentagem, mais forte e mais pesada a peça fica, mas também mais lenta e cara de imprimir.

Nesta aula prática, cada aluno usa o Orca Slicer no próprio computador para ligar os suportes automáticos e comparar diferentes porcentagens de preenchimento, observando ao vivo como cada escolha muda o tempo estimado de impressão e a quantidade de material. É uma aula de decisões: o aluno aprende que imprimir bem não é só apertar um botão, é equilibrar força, tempo e gasto de plástico para o personagem dele.`,
  materiais: [
    `Computadores (um por aluno) com o Orca Slicer instalado e aberto, com o modelo 3D do personagem do mês já posicionado na mesa virtual`,
    `Projetor ou TV ligada ao computador do professor para demonstrar cada clique na tela grande`,
    `Arquivo de exemplo em formato 3MF ou STL com uma parte bem flutuante (um braço esticado ou uma ponte) para mostrar a necessidade de suporte`,
    `Quadro branco ou cartaz com as palavras-chave "Suporte = andaime" e "Preenchimento = recheio" bem visíveis`,
    `Folha impressa de apoio com o passo a passo: onde ficam "Support" e "Sparse infill density" no painel de configurações`,
    `Cronômetro ou timer visível para controlar o ritmo de 10 / 15 / 25 / 10 minutos`,
    `Opcional: duas peças já impressas, uma com pouco preenchimento e outra com muito, para os alunos sentirem a diferença de peso na mão`,
  ],
  conceitosChave: [
    `Suporte (Support) — colunas de plástico temporárias que a impressora cria para segurar partes que ficam no ar; depois são quebradas e descartadas.`,
    `Parte flutuante (overhang) — qualquer área do modelo que não tem nada embaixo dela e, sem apoio, despencaria durante a impressão.`,
    `Suporte automático — opção do Orca Slicer que detecta sozinha onde a peça precisa de apoio e gera os suportes para você.`,
    `Preenchimento (infill) — a estrutura interna da peça; define se ela fica oca, parcialmente cheia ou totalmente maciça por dentro.`,
    `Porcentagem de preenchimento (Sparse infill density) — número de 0% a 100% que controla quanto plástico vai dentro da peça e, com isso, sua força e seu peso.`,
    `Padrão de preenchimento (Infill pattern) — o desenho interno, como favo de mel (honeycomb) ou grade (grid), que dá resistência usando pouco material.`,
    `Tempo estimado de impressão — a previsão que o Orca Slicer mostra após fatiar, mudando conforme você ajusta suportes e preenchimento.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em impressão 3D para dar esta aula; precisa entender duas ideias simples. Primeira: a impressora constrói de baixo para cima, então qualquer parte no ar precisa de um "andaime", que chamamos de suporte. Segunda: a peça quase nunca é maciça por dentro; o preenchimento (infill) é o recheio, e a porcentagem decide o quanto a peça fica forte, pesada, lenta e cara. No Orca Slicer, as duas opções ficam no painel de configurações à direita: a aba "Support" para suportes e o campo "Sparse infill density" (dentro de "Strength" ou "Infill") para o preenchimento. Antes da aula, abra o Orca Slicer em casa, carregue o modelo do mês, ative os suportes e mude a porcentagem de preenchimento uma vez, observando o tempo estimado mudar após clicar em "Slice". Assim você chega seguro.

## Passo a passo da aula

Aquecimento (10 min): com o projetor ligado, mostre a peça de exemplo com uma parte flutuante. Pergunte: "Se a impressora coloca plástico de baixo para cima, o que acontece com este braço que está no ar?". Conduza até a resposta: ele cai. Escreva no quadro "Suporte = andaime" e "Preenchimento = recheio".

Conteúdo novo guiado (15 min): no seu Orca Slicer, com o modelo na mesa, vá ao painel direito e abra a aba "Support". Marque a caixa "Enable support". No campo "Type", deixe em "Normal (auto)" para suporte automático. Depois abra a aba de força, normalmente "Strength", e localize "Sparse infill density". Mostre o valor atual (por exemplo 15%) e mude para 100%, comentando que a peça ficará maciça. Logo abaixo, mostre o "Sparse infill pattern" e escolha "Honeycomb" (favo de mel). Agora clique no botão "Slice plate" (canto superior direito ou inferior) e mostre, na tela de prévia, o "Estimated time" e o material usado. Mude o preenchimento para 10%, fatie de novo e compare o tempo na tela grande.

Mão na massa (25 min): cada aluno repete no próprio computador. Primeiro, ativam o suporte automático e fatiam. Depois testam três porcentagens de preenchimento (por exemplo 10%, 50% e 100%), anotando o tempo estimado de cada uma. Circule pela sala. O objetivo mínimo é cada aluno ter ligado os suportes e comparado pelo menos duas porcentagens diferentes.

Desafio e compartilhar (10 min): peça que cada aluno escolha a porcentagem ideal para o próprio personagem e justifique (chaveiro forte pede mais; enfeite leve pede menos). Dois ou três alunos mostram na tela grande os tempos que anotaram e explicam a escolha.

## Como explicar de forma clara

Use comparações concretas. Para suporte: "É um andaime de obra; só fica ali enquanto a construção precisa e depois a gente tira." Para preenchimento: "É o recheio do bolo; 100% é um bolo maciço e pesado, 10% é quase oco e leve." Faça gestos: mão aberta segurando algo no ar (suporte) e dedos formando uma grade (preenchimento). Evite termos difíceis sem explicar; sempre diga o nome em inglês e a tradução juntos ("infill, o preenchimento"). Comemore quando o aluno vir o tempo mudar na tela, pois é o momento que mostra que a escolha dele tem efeito real.

## Erros comuns e como ajudar

O erro mais comum é esquecer de fatiar (clicar em "Slice") depois de mudar a porcentagem, então o tempo não atualiza; lembre sempre de fatiar de novo. Outro erro é confundir suporte com preenchimento; reforce que suporte fica do lado de fora segurando, e preenchimento fica dentro. Alguns alunos colocam 0% de preenchimento e estranham a peça oca e frágil; explique que é normal e mostre a diferença com 50%. Há quem ative suportes em uma peça que não precisa, gastando plástico à toa; mostre que peças sem partes flutuantes podem ficar sem suporte. Por fim, muitos não acham o campo "Sparse infill density"; oriente que ele fica na aba "Strength" do painel direito e que basta digitar o número.`,
  exercicios: [
    {
      titulo: `Ligando o suporte automático`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe cada aluno até marcar "Enable support" na aba "Support" e deixar o tipo em "Normal (auto)". Garanta que todos fatiem depois para ver os suportes na prévia.`,
      atividade: `No Orca Slicer, com seu personagem na mesa, abra a aba "Support", marque "Enable support", deixe o tipo "Normal (auto)" e clique em "Slice" para ver os suportes aparecerem na prévia.`,
      gabarito: `O aluno marca "Enable support" com tipo "Normal (auto)" e, após fatiar, a prévia mostra as colunas de suporte embaixo das partes flutuantes do modelo. Se a peça não tem partes no ar, quase nenhum suporte aparece, e isso também está correto.`,
    },
    {
      titulo: `Comparando três preenchimentos`,
      tipo: `Desafio individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que o aluno teste 10%, 50% e 100% no campo "Sparse infill density", fatiando após cada mudança e anotando o tempo estimado. Lembre sempre de clicar em "Slice" para o tempo atualizar.`,
      atividade: `Mude a porcentagem de preenchimento para 10%, depois 50% e depois 100%. Fatie a cada mudança e anote o "Estimated time" de cada uma numa folha.`,
      gabarito: `Os três tempos anotados devem crescer conforme a porcentagem sobe: 10% é o mais rápido e leve, 100% é o mais lento e pesado, e 50% fica no meio. O aluno percebe que mais preenchimento significa mais força, mais tempo e mais plástico.`,
    },
    {
      titulo: `Andaime ou recheio? Caça em dupla`,
      tipo: `Atividade em dupla`,
      tempo: `7 minutos`,
      guiaProfessor: `Forme duplas e prepare um projeto com configurações trocadas (suporte desligado numa peça que precisa, ou preenchimento em 0%). As duplas descobrem o problema e corrigem na ferramenta.`,
      atividade: `Em dupla, abra o projeto que o professor entregou, descubra se o problema é falta de suporte ou preenchimento errado e corrija. Fatie de novo para confirmar.`,
      gabarito: `Se a parte flutuante está sem apoio, a solução é marcar "Enable support". Se a peça está oca e frágil, a solução é subir o "Sparse infill density" para um valor como 15% ou mais. Após corrigir e fatiar, a prévia mostra os suportes ou o preenchimento corretos.`,
    },
    {
      titulo: `Roda de conversa: por que não 100% sempre?`,
      tipo: `Roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Reúna a turma em roda. Conduza para que percebam o equilíbrio entre força, peso, tempo e gasto de plástico. Reforce que cada peça pede uma escolha diferente.`,
      atividade: `Cada aluno responde: "Se mais preenchimento deixa a peça mais forte, por que não usar 100% em tudo?". Diga uma vantagem e uma desvantagem do preenchimento alto.`,
      gabarito: `Resposta válida reconhece a troca: 100% deixa a peça mais forte e pesada (vantagem para quem quer resistência), mas gasta muito mais plástico e demora muito mais para imprimir (desvantagem). A escolha depende do uso da peça.`,
    },
    {
      titulo: `A receita ideal do meu personagem`,
      tipo: `Projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Deixe o aluno definir suporte e preenchimento ideais para o próprio personagem e justificar. Ajude a relacionar o uso da peça (chaveiro, enfeite, brinquedo) com a porcentagem escolhida.`,
      atividade: `Decida a configuração final do seu personagem: ligue ou não o suporte e escolha a porcentagem de preenchimento. Fatie, anote o tempo final e escreva uma frase explicando sua escolha.`,
      gabarito: `O aluno entrega uma configuração coerente com o uso: suporte ligado se houver partes flutuantes; preenchimento maior (por exemplo 30% a 50%) para peças que serão manuseadas, ou menor (10% a 15%) para enfeites leves. A frase justifica a escolha ligando força, tempo e gasto de plástico.`,
    },
  ],
};
