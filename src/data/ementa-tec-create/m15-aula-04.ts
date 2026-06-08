import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Narração e diálogos profissionais",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Escrever um roteiro com várias falas e gerar no ElevenLabs uma narração e diálogos que soem naturais, ajustando estabilidade, emoção e ritmo, e exportar os arquivos de voz prontos para o vídeo e para o jogo.`,
  descricao: `Na aula passada os alunos deram a primeira voz aos personagens. Agora eles vão dar um passo de profissional: em vez de uma frase solta, vão escrever um roteiro com várias falas — uma narração para o vídeo e um pequeno diálogo entre dois personagens do jogo. Falar bem não é só ter uma voz bonita; é ter ritmo, pausa e emoção na medida certa. É isso que separa um áudio amador de um áudio que parece de filme.

O coração da aula são três controles do ElevenLabs: a estabilidade (Stability), que decide se a voz fica sempre igual e calma ou mais solta e expressiva; a similaridade/clareza (Similarity), que mantém o timbre fiel; e o exagero de estilo (Style Exaggeration), que aumenta a emoção. Quando o aluno entende esses controles, ele para de "torcer para dar certo" e passa a dirigir a voz como um diretor dirige um ator: pede mais calma aqui, mais animação ali.

O ritmo vem do próprio roteiro. Uma vírgula, um ponto e o uso de reticências mudam onde a voz respira e faz pausa. Escrever "Cuidado... há algo atrás de você." soa muito diferente de "Cuidado há algo atrás de você". Os alunos vão descobrir que pontuação é a partitura da fala: ela diz à IA quando desacelerar, quando parar e quando dar ênfase. Vamos também separar bem os dois usos: a narração do vídeo (uma voz que conta a história, de fora) e os diálogos do jogo (personagens conversando entre si, cada um com sua voz).

Ao final, cada aluno terá pelo menos dois arquivos de áudio exportados: uma narração para o vídeo e um diálogo com duas falas de personagens diferentes. Esses arquivos entram direto no CapCut e, mais para frente, dentro do jogo no Roblox. Não precisa ficar perfeito de primeira: o objetivo é aprender a ouvir, ajustar os controles e gerar de novo até a voz soar natural.`,
  materiais: [
    `Computadores com acesso ao ElevenLabs (música e voz por IA), um por aluno, com login feito antes da aula`,
    `Conta no ElevenLabs ativa, com a aba "Text to Speech" disponível para cada aluno`,
    `Conta no Suno disponível, caso o aluno queira gerar uma musiquinha de fundo leve para testar a narração`,
    `Projetor ou TV para o professor mostrar a tela e demonstrar onde clicar`,
    `Fones de ouvido para cada aluno escutar a própria voz sem atrapalhar a turma`,
    `Folha impressa com um roteiro-modelo: 3 frases de narração e 1 diálogo de 2 personagens`,
    `Pasta no computador para salvar os arquivos de áudio exportados (.mp3), com o nome de cada aluno`,
  ],
  conceitosChave: [
    `Roteiro — o texto escrito com todas as falas em ordem, separando o que é narração e o que é diálogo de cada personagem.`,
    `Narração — uma voz que conta a história de fora, sem ser um personagem; guia quem assiste ao vídeo.`,
    `Diálogo — a conversa entre dois ou mais personagens, cada um com a sua própria voz.`,
    `Estabilidade (Stability) — controle que deixa a voz mais igual e calma (alta) ou mais solta e expressiva (baixa).`,
    `Exagero de estilo (Style) — controle que aumenta a emoção e a intenção da voz; pouco é mais seguro, muito pode distorcer.`,
    `Pontuação como pausa — vírgulas, pontos e reticências dizem à IA onde respirar, parar e dar ênfase.`,
    `Exportar (Download) — gerar o arquivo de áudio (.mp3) pronto para usar no CapCut e no jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser dublador nem dominar o ElevenLabs. A aula gira em torno de uma única tela: a aba "Text to Speech" (Texto para Fala). Nela há três áreas. No centro fica a caixa de texto grande, onde colamos o roteiro. No alto, o seletor de voz (Voice), onde escolhemos qual voz vai falar. À direita (ou logo abaixo, dependendo da versão), os controles deslizantes: "Stability" (Estabilidade), "Similarity" (Similaridade/Clareza) e "Style Exaggeration" (Exagero de estilo). Embaixo fica o botão grande "Generate" (Gerar) e, depois de gerar, aparece o player com o botão de play e o "Download" para baixar o .mp3. O segredo é simples: escreve, ajusta os deslizadores, gera, ouve e repete. Cada geração consome créditos, então combine com a turma para escrever bem antes de clicar em "Generate".

## Passo a passo da aula

Aquecimento (10 min): Toque dois áudios curtos: a mesma frase dita de forma robótica e depois de forma emocionada. Pergunte qual parece de verdade e por quê. Conduza para a ideia de que pausa, emoção e ritmo fazem a diferença. Relembre rapidamente a aula 3 (escolher voz e gerar uma fala).

Conteúdo novo guiado (15 min): No projetor, abra o ElevenLabs e clique em "Text to Speech". Cole no campo de texto uma narração de três frases, usando vírgulas e reticências de propósito. Em "Voice", escolha uma voz de narrador. Mostre o deslizador "Stability": arraste para a esquerda (mais expressivo) e gere; depois para a direita (mais calmo) e gere de novo, para a turma ouvir a diferença. Faça o mesmo com "Style Exaggeration" em valor baixo. Clique em "Generate", ouça e clique em "Download". Em seguida, escreva um diálogo de dois personagens: gere a fala 1 com a voz A, troque a voz para B e gere a fala 2, baixando cada uma separadamente.

Mão na massa (25 min): Cada aluno escreve no caderno (ou direto na caixa) um roteiro com três frases de narração e um diálogo de duas falas. Eles ajustam estabilidade e estilo, geram, ouvem com fone e regeram até soar natural. Por fim, exportam os arquivos com nomes claros (narracao_nome.mp3, fala1_nome.mp3, fala2_nome.mp3). Circule ajudando a ajustar os deslizadores e a pontuação.

Desafio + compartilhar (10 min): Cada aluno toca a narração e o diálogo para o colega do lado e recebe uma dica. Dois ou três voluntários apresentam no projetor e contam qual ajuste deixou a voz mais natural.

## Como explicar de forma clara

Use a comparação do diretor de cinema: o aluno é o diretor e a IA é o ator; os deslizadores são as instruções ("fica mais calmo", "coloca emoção"). Diga que a pontuação é a partitura da voz: a vírgula é uma respirada curta, o ponto é uma parada, e as reticências são um suspense. Explique a estabilidade como um botão de "calma": para a direita, a voz fica mais comportada e igual; para a esquerda, fica mais animada, mas pode escorregar. Mostre sempre antes de pedir para fazer, e fale o nome dos botões em voz alta enquanto aponta. Evite termos difíceis: prefira "deixar mais animado" a "reduzir a estabilidade".

## Erros comuns e como ajudar

O erro mais comum é escrever tudo sem pontuação, e a voz sai corrida; mostre como uma vírgula bem colocada cria a pausa que faltava. Outro erro é exagerar no "Style Exaggeration", o que deixa a voz distorcida e estranha; oriente a usar valores baixos e subir aos poucos. Muitos esquecem de trocar a voz no diálogo e os dois personagens ficam idênticos; lembre-os de mudar o seletor "Voice" antes de gerar a segunda fala. Há quem clique em "Generate" várias vezes seguidas, gastando créditos à toa; ensine a ouvir e ajustar o texto antes de gerar de novo. Por fim, alguns esquecem de baixar o áudio e perdem o trabalho; reforce o "Download" e o nome do arquivo logo após gerar.`,
  exercicios: [
    {
      titulo: `Pontuação que respira`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Garanta que cada aluno esteja na aba "Text to Speech". Mostre como a vírgula e as reticências mudam as pausas. Peça para gerarem as duas versões e compararem com fone.`,
      atividade: `Cole a frase "Cuidado há algo atrás de você" e gere. Depois reescreva como "Cuidado... há algo atrás de você." e gere de novo. Ouça as duas e diga qual soou mais natural.`,
      gabarito: `O aluno gerou as duas versões e percebe que a segunda, com reticências, cria uma pausa de suspense e soa mais natural. Ele consegue explicar que a pontuação criou a respirada.`,
    },
    {
      titulo: `Mexendo na estabilidade`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre o deslizador "Stability". Oriente a gerar a mesma frase com o valor baixo e depois alto. Reforce que estilo alto demais distorce a voz.`,
      atividade: `Escreva uma frase de narração e gere com a estabilidade bem baixa; depois gere a mesma frase com a estabilidade bem alta. Escolha qual versão fica melhor para um narrador calmo.`,
      gabarito: `O aluno gerou as duas versões e escolheu, com razão, a de estabilidade mais alta para um narrador calmo, explicando que a voz ficou mais igual e comportada.`,
    },
    {
      titulo: `Roteiro de narração do vídeo`,
      tipo: `projeto curto`,
      tempo: `7 minutos`,
      guiaProfessor: `Ajude a escolher uma voz de narrador. Verifique se o aluno usou pontuação para dar ritmo e se exportou o arquivo com nome claro.`,
      atividade: `Escreva uma narração de três frases que apresente o seu jogo (começo, meio e fim). Ajuste a voz, gere, ouça e exporte como narracao_seunome.mp3.`,
      gabarito: `O aluno tem um arquivo .mp3 de narração com três frases em ordem, voz de narrador escolhida, pontuação criando pausas e o arquivo salvo com nome claro na pasta.`,
    },
    {
      titulo: `Diálogo em dupla`,
      tipo: `em dupla`,
      tempo: `6 minutos`,
      guiaProfessor: `Forme duplas. Cada aluno escreve a fala de um personagem e escolhe vozes diferentes. Reforce trocar o seletor "Voice" antes de gerar a segunda fala.`,
      atividade: `Em dupla, criem um diálogo de duas falas entre dois personagens. Gerem a fala 1 com a voz A e a fala 2 com a voz B, ajustando a emoção de cada uma. Exportem os dois arquivos.`,
      gabarito: `A dupla tem dois arquivos de áudio com vozes claramente diferentes, cada fala com emoção própria, e consegue explicar por que escolheu cada voz para cada personagem.`,
    },
    {
      titulo: `Roda de conversa: o que deixa a voz natural`,
      tipo: `roda de conversa`,
      tempo: `4 minutos`,
      guiaProfessor: `Reúna a turma em roda e conduza com perguntas abertas. Anote no quadro as descobertas para retomar nas próximas aulas de áudio.`,
      atividade: `Em roda, cada aluno diz um ajuste que descobriu hoje para deixar a voz mais natural (por exemplo, usar reticências, baixar o exagero de estilo ou trocar a voz no diálogo).`,
      gabarito: `A turma levanta ao menos quatro ideias válidas, como: usar pontuação para criar pausas, manter a estabilidade equilibrada, não exagerar no estilo e usar vozes diferentes para personagens diferentes.`,
    },
  ],
};
