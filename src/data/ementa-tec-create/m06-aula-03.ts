import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Os Segredos do Fatiamento",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Compreender como os parâmetros de altura de camada, preenchimento, paredes e velocidade mudam a qualidade, a resistência e o tempo da peça impressa no Orca Slicer.`,
  descricao: `Nesta aula os alunos abrem a cortina e descobrem o que acontece "por dentro" do Orca Slicer quando clicamos em fatiar. Até agora eles importaram o personagem feito no Blender; agora vão entender que o fatiamento é o momento em que o modelo 3D vira uma receita de camadas para a impressora. Cada camada é uma fininha linha de plástico empilhada, e os parâmetros que ajustamos decidem se a peça fica lisa, forte, rápida ou econômica.

O foco está em quatro ajustes principais: a altura de camada (quão grossa é cada fatia), o preenchimento ou infill (o quanto a peça é cheia ou oca por dentro), as paredes (quantas voltas o bico faz na borda externa) e a velocidade (quão rápido o bico se move). Esses quatro botões são como controles de um videogame: mexer em um sempre afeta os outros. Mais qualidade costuma custar mais tempo; mais resistência costuma gastar mais material.

Os alunos vão experimentar na prática, mudando um parâmetro de cada vez e observando como o tempo estimado e o gasto de filamento mostrados pelo Orca Slicer sobem ou descem. A ideia não é decorar números mágicos, e sim entender a lógica das trocas: o que ganho e o que perco em cada escolha. Assim, na próxima aula, eles saberão tomar decisões conscientes para o personagem deles.

Esta é uma aula de exploração consciente. Ainda não imprimimos de verdade aqui; apenas fatiamos, comparamos e anotamos. O entregável do mês continua sendo a peça impressa, então tudo o que aprendemos hoje serve para preparar um fatiamento de qualidade nas aulas seguintes.`,
  materiais: [
    `Computadores com o Orca Slicer instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar a tela do Orca Slicer`,
    `Arquivo de exemplo do personagem (modelo .stl ou .3mf) já importado, igual para todos`,
    `Uma impressora 3D na sala como referência visual (mesmo sem imprimir agora)`,
    `Folha ou planilha simples de anotações para registrar tempo, material e qualidade`,
    `Uma peça impressa pronta (boa) e uma peça com falhas, para passar de mão em mão`,
  ],
  conceitosChave: [
    `Fatiamento — processo em que o Orca Slicer corta o modelo 3D em camadas finas e gera as instruções para a impressora.`,
    `Altura de camada — espessura de cada fatia; quanto menor, mais lisa e detalhada a peça, porém mais lenta a impressão.`,
    `Preenchimento (infill) — estrutura interna da peça, medida em porcentagem; mais infill deixa a peça mais forte e mais pesada.`,
    `Paredes (perímetros) — número de contornos na borda externa; mais paredes deixam a peça mais resistente e com superfície melhor.`,
    `Velocidade — rapidez com que o bico se move; mais velocidade economiza tempo, mas pode piorar a qualidade.`,
    `Tempo estimado — previsão de quanto a impressão vai durar, mostrada pelo Orca Slicer após fatiar.`,
    `Trade-off (troca) — ideia de que melhorar uma coisa quase sempre custa em outra, como qualidade versus tempo.`,
  ],
  treinamento: `## O que o professor precisa saber

O fatiamento é o coração da impressão 3D. O Orca Slicer transforma o modelo do personagem em centenas de camadas e calcula um caminho para o bico da impressora. Os quatro parâmetros desta aula ficam todos na aba "Configurações da impressão" (ícone de engrenagem ou painel lateral à esquerda, chamado "Process"). Você não precisa ser especialista: basta saber onde cada controle está e o que ele faz. Antes da aula, abra o Orca Slicer, importe o arquivo de exemplo, clique em "Fatiar placa" (botão "Slice plate", canto inferior direito) uma vez para ver o tempo e o material aparecerem no canto. Assim você não descobre os botões na frente da turma.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: Recapitule a aula passada perguntando "o que fizemos com o personagem do Blender?". Passe de mão em mão a peça boa e a peça com falhas e pergunte: "por que será que uma ficou melhor?". Explique que hoje vamos descobrir os ajustes secretos por trás disso.

15 min — Conteúdo novo guiado: No projetor, mostre o painel "Process" (lado esquerdo). Apresente cada parâmetro clicando nele: em "Quality" mostre "Layer height" (altura de camada); em "Strength" mostre "Wall loops" (paredes) e "Sparse infill density" (preenchimento); em "Speed" mostre as velocidades. Mude a altura de camada de 0,2 mm para 0,28 mm, clique em "Slice plate" e mostre o tempo cair. Mude o infill de 15% para 50% e fatie de novo, mostrando o material subir. Diga em voz alta o que mudou em cada caso.

25 min — Mão na massa: Cada aluno, no seu computador, faz três testes com o mesmo arquivo. Teste 1: altura de camada 0,2 mm; teste 2: altura 0,12 mm; teste 3: infill 50%. Depois de cada "Slice plate", eles anotam o tempo e o material na folha. Circule pela sala conferindo se anotaram e pergunte "qual foi mais rápido? Qual gastou mais plástico?".

10 min — Desafio e compartilhar: Lance o desafio "encontre os ajustes de uma peça super rápida". Cada dupla mostra à turma o tempo que conseguiu e explica o que sacrificou. Feche reforçando a ideia de troca: qualidade, força, tempo e material puxam uns aos outros.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Altura de camada: "é como construir uma parede de tijolos; tijolos finos deixam a parede mais lisa, mas você empilha muito mais e demora". Preenchimento: "imagina um chocolate; pode ser maciço ou recheado de ar; mais recheio cheio deixa mais forte e mais pesado". Paredes: "é a casca da peça; quanto mais voltas, mais grossa e resistente a casca". Velocidade: "é como escrever com a mão; rápido demais e a letra sai feia". Repita sempre a frase-chave: "melhorar uma coisa quase sempre custa em outra". Mostre os números na tela para que eles vejam a troca acontecer, em vez de só ouvir.

## Erros comuns e como ajudar

O erro mais frequente é mudar vários parâmetros ao mesmo tempo e não saber o que causou a diferença; insista em mudar UM por vez e fatiar. Outro erro é esquecer de clicar em "Slice plate" depois de mudar o valor, então o tempo não atualiza; lembre-os de fatiar a cada mudança. Alguns confundem porcentagem de infill achando que 100% é sempre melhor; explique que 100% gasta muito plástico e tempo à toa. Há quem mexa na altura de camada e digite um valor maior que o bico permite (acima de 0,3 mm para bico de 0,4 mm); oriente a manter entre 0,12 mm e 0,28 mm. Por fim, vão querer apertar "imprimir" de verdade; avise que hoje só fatiamos e comparamos, a impressão real vem nas próximas aulas.`,
  exercicios: [
    {
      titulo: `Caça aos parâmetros`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que cada aluno encontre e clique nos quatro parâmetros no painel "Process". Confira pela sala apontando para a tela de quem travar. O objetivo é só localizar, ainda sem mudar valores.`,
      atividade: `No painel "Process" (lado esquerdo), encontre e clique em: altura de camada (Layer height, na aba Quality), preenchimento (Sparse infill density, na aba Strength), paredes (Wall loops, na aba Strength) e velocidade (na aba Speed). Anote o valor atual de cada um.`,
      gabarito: `Os quatro parâmetros estão no painel Process: Layer height na aba Quality; Wall loops e Sparse infill density na aba Strength; velocidades na aba Speed. Valores comuns de partida: altura 0,2 mm; infill 15%; paredes 2; velocidade de parede entre 200 e 300 mm/s no perfil padrão.`,
    },
    {
      titulo: `Mais fino, mais lento`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que mudem só a altura de camada e cliquem em "Slice plate" a cada teste. Reforce a leitura do tempo no canto inferior. Pergunte por que o tempo subiu.`,
      atividade: `Com o personagem de exemplo, fatie a peça três vezes mudando apenas a altura de camada: 0,28 mm, depois 0,2 mm, depois 0,12 mm. Anote o tempo estimado de cada um e responda: qual ficaria mais lisa? Qual demoraria mais?`,
      gabarito: `Quanto menor a altura de camada, maior o tempo de impressão e melhor o acabamento. A de 0,12 mm é a mais lisa e a mais demorada; a de 0,28 mm é a mais rápida e a mais "degrauzinha". O tempo sobe porque há mais camadas para empilhar.`,
    },
    {
      titulo: `Oco ou maciço, em dupla`,
      tipo: `em dupla`,
      tempo: `9 minutos`,
      guiaProfessor: `Cada dupla divide as tarefas: um muda o infill, o outro lê e anota tempo e material. Lembre-os de fatiar a cada mudança e de não tocar nos outros parâmetros.`,
      atividade: `Em dupla, fatie a peça com preenchimento de 10%, depois 25% e depois 60%. Anotem o material gasto (gramas) e o tempo de cada caso. Discutam: para um chaveiro do personagem que vai cair no chão, qual infill vocês escolheriam e por quê?`,
      gabarito: `Mais infill aumenta material gasto, tempo e resistência. Para um chaveiro que sofre quedas, um infill médio (em torno de 25% a 40%) é boa escolha: forte o bastante sem desperdiçar plástico. 60% deixaria muito pesado e demorado sem ganho real para esse uso.`,
    },
    {
      titulo: `Roda de conversa das trocas`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza perguntando, sem dar a resposta pronta. Anote no quadro as duplas "ganho x perda" que surgirem. Valorize quem perceber que tudo está conectado.`,
      atividade: `Em roda, cada aluno completa em voz alta: "Quando eu aumento ___, eu ganho ___, mas eu perco ___." Usem os quatro parâmetros da aula. Tentem não repetir o que o colega disse.`,
      gabarito: `Respostas válidas mostram trocas: aumentar paredes ganha resistência mas perde tempo e material; diminuir altura de camada ganha qualidade mas perde velocidade; aumentar velocidade ganha tempo mas pode perder qualidade; aumentar infill ganha força mas perde tempo e gasta mais plástico. A ideia central é o trade-off.`,
    },
    {
      titulo: `O fatiamento ideal do meu personagem`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Peça uma escolha justificada, não a "perfeita". Avalie se o aluno conecta cada parâmetro ao objetivo (mostrar detalhes ou ser resistente). Aceite escolhas diferentes desde que bem explicadas.`,
      atividade: `Decida um objetivo para o seu personagem: "mostrar bem os detalhes" ou "ser bem resistente para brincar". Escolha valores para os quatro parâmetros que combinem com esse objetivo, fatie e escreva 3 frases explicando suas escolhas e o tempo/material resultante.`,
      gabarito: `Para "mostrar detalhes": altura de camada baixa (0,12 a 0,16 mm), paredes 2 a 3, infill baixo (10% a 15%), velocidade moderada; aceita mais tempo em troca de acabamento. Para "ser resistente": altura média (0,2 mm), paredes 3 a 4, infill 30% a 50%, velocidade moderada; gasta mais material e tempo. A justificativa deve ligar cada valor ao objetivo escolhido.`,
    },
  ],
};
