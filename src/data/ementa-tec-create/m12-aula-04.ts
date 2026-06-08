import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Mãos à obra: imprimir de verdade",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Enviar o arquivo fatiado para a impressora 3D e acompanhar a impressão real do primeiro personagem, observando a primeira camada e a adesão à mesa.`,
  descricao: `Esta é a aula mais esperada do mês: o personagem que o aluno modelou, posicionou e fatiou finalmente sai da tela e vira um objeto de plástico de verdade. Depois de preparar tudo no Bambu Studio nas aulas anteriores, agora chegou a hora de apertar o botão de impressão e ver a impressora 3D trabalhar diante dos olhos da turma.

O foco da aula é o momento do envio e o começo da impressão. O aluno aprende a mandar o arquivo para a impressora (por cabo, por Wi-Fi ou por cartão), a acompanhar o aquecimento da mesa e do bico, e a observar com atenção a primeira camada — que é a parte mais importante e mais delicada de qualquer impressão 3D. Se a primeira camada gruda bem na mesa, o resto costuma dar certo.

Como cada impressão leva mais tempo do que uma hora de aula, a estratégia é começar a impressão do primeiro personagem no início da parte prática e observar os primeiros minutos juntos. O professor pode usar uma impressão já adiantada (preparada antes) para mostrar como fica depois de algumas camadas. A turma de até 10 alunos permite que todos cheguem perto da máquina em segurança e acompanhem de pertinho.

Esta aula também ensina o aluno a ser um observador paciente e atento: reparar se o filamento está saindo certinho, se a peça não descolou da mesa e se não há ruídos estranhos. Pequenos problemas no começo são normais e fáceis de resolver — e aprender a perceber e corrigir isso faz parte da experiência de quem cria de verdade.`,
  materiais: [
    `Computadores com o Bambu Studio instalado e aberto, com o projeto fatiado da aula anterior já salvo`,
    `Projetor ligado para mostrar a tela do Bambu Studio e o botão de impressão para a turma toda`,
    `Impressora 3D ligada, com filamento carregado e a mesa limpa`,
    `Arquivo de exemplo já fatiado (um personagem pequeno) caso o do aluno apresente problema`,
    `Cartão microSD ou pendrive (caso o envio seja por cartão), e o cabo USB de reserva`,
    `Espátula, luvas e um pano para a área da impressora; lixeira por perto para sobras`,
    `Cronômetro ou relógio para acompanhar o tempo da primeira camada`,
  ],
  conceitosChave: [
    `Enviar para a impressão — mandar o arquivo fatiado do Bambu Studio para a impressora, por cabo, Wi-Fi ou cartão.`,
    `Primeira camada — a camada mais embaixo da peça; é a base que gruda na mesa e segura toda a impressão.`,
    `Adesão à mesa — o quanto a peça consegue grudar na mesa de impressão para não soltar no meio do caminho.`,
    `Aquecimento — o tempo em que a mesa e o bico esquentam até a temperatura certa antes de imprimir.`,
    `Pré-visualização (Preview) — a aba do Bambu Studio que mostra, camada por camada, como a peça vai ser impressa.`,
    `Brim (saia/borda) — uma bordinha extra ao redor da base que ajuda a peça a grudar melhor na mesa.`,
    `Spaghetti — a bagunça de filamento solto que acontece quando a peça descola; sinal de que algo deu errado.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista. Nesta aula o trabalho pesado já foi feito: o arquivo está fatiado. Sua função é conduzir o envio do arquivo e ensinar a turma a observar a primeira camada. O conceito central é simples: a primeira camada é a base de tudo. Se ela gruda firme e fica lisinha, a impressão tende a dar certo. Antes da aula, ligue a impressora, confira se há filamento e se a mesa está limpa (sem gordura de dedo — passe um pano se precisar). Deixe também uma impressão já adiantada, feita antes da aula, para mostrar como a peça fica depois de várias camadas.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min): retome a aula anterior. Pergunte: "O que vocês ajustaram no fatiamento?" Abra o Bambu Studio no projetor, mostre o projeto fatiado e a aba "Preview" (canto superior, ao lado de "Prepare"). Arraste a barrinha lateral de camadas para a turma ver a peça sendo "construída" do zero.

2. Conteúdo novo guiado (15 min): explique como enviar para a impressora. No Bambu Studio, depois de fatiar, aparece o botão "Print" (ou "Print plate") no canto inferior direito. Clique nele: abre uma janela para escolher a impressora e o método (rede/Wi-Fi). Se for por cartão, use "Export G-code" (ícone perto do "Slice"), salve no cartão e leve até a máquina. Mostre, no projetor, onde fica cada botão. Explique o aquecimento: a mesa e o bico precisam esquentar primeiro; isso leva alguns minutos e é normal.

3. Mão na massa (25 min): com a turma reunida em segurança ao redor da impressora, envie o primeiro personagem. Acompanhem juntos o aquecimento e a linha de limpeza (purge line) que a máquina faz na borda. Observem a primeira camada saindo: ela deve sair grudada e lisinha. Peça que cada aluno anote no caderno uma observação (grudou bem? ficou liso? saiu filamento parelho?). Enquanto a primeira peça imprime, mostre a peça adiantada que você preparou antes.

4. Desafio + compartilhar (10 min): cada aluno descreve em uma frase como está a primeira camada da sua peça e o que faria se ela não grudasse. Combine quem vai acompanhar a retirada na próxima aula.

## Como explicar de forma clara (linguagem para a idade)

Compare a primeira camada com a fundação de uma casa: se a base está torta ou solta, a casa inteira fica em risco. Diga que a impressora "desenha" a peça com um lápis de plástico derretido, uma camada de cada vez, de baixo para cima. O aquecimento é como esperar a chapa esquentar antes de fazer uma panqueca. Use a palavra "spaghetti" para o erro de quando a peça descola e vira uma bagunça de fios — eles vão rir e lembrar para sempre.

## Erros comuns e como ajudar

- A peça não gruda na mesa: geralmente é mesa suja ou ponto zero alto demais. Pause, limpe a mesa e ative um "Brim" nas configurações antes de reenviar.
- Aluno mexe na peça enquanto imprime: combine a regra "olhos sim, mãos não" perto da máquina quente.
- Esquecer de selecionar a impressora certa no envio: confira o nome do dispositivo na janela de "Print" antes de confirmar.
- Ansiedade pela demora: explique que impressão 3D é paciência; mostre a peça adiantada para matar a curiosidade.
- Filamento sai falhado: pode ser bico entupido ou filamento acabando; chame o professor responsável pela manutenção.`,
  exercicios: [
    {
      titulo: `Encontrando o botão de impressão`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada aluno esteja com o projeto fatiado aberto na aba "Preview". Caminhe pela sala conferindo as telas. O objetivo é só localizar e reconhecer os botões, sem ainda enviar nada para a máquina.`,
      atividade: `Abra o seu projeto fatiado no Bambu Studio. Encontre e mostre ao colega do lado: o botão "Print" (canto inferior direito), o botão de "Export G-code" e a barrinha de camadas da aba "Preview". Não clique em imprimir ainda.`,
      gabarito: `O aluno aponta corretamente os três elementos: "Print" no canto inferior direito, "Export G-code" perto do botão de fatiar, e a barra lateral de camadas que mostra a peça sendo montada de baixo para cima.`,
    },
    {
      titulo: `Diário da primeira camada`,
      tipo: `Desafio de observação`,
      tempo: `10 min`,
      guiaProfessor: `Faça este exercício enquanto a primeira peça da turma está imprimindo a base. Reúna os alunos em segurança ao redor da impressora e peça silêncio para todos observarem com atenção.`,
      atividade: `Observe a primeira camada da impressão e responda no caderno: (1) A peça grudou na mesa? (2) A camada ficou lisa ou com falhas? (3) O filamento saiu parelho ou irregular? Escreva uma frase de conclusão: "A minha primeira camada está ___".`,
      gabarito: `Resposta completa quando o aluno avalia os três pontos (adesão, lisura e regularidade do filamento) e fecha com uma conclusão coerente, por exemplo: "A minha primeira camada está boa, grudou bem e ficou lisinha" ou "está com falhas, preciso limpar a mesa".`,
    },
    {
      titulo: `Detetives do problema (em dupla)`,
      tipo: `Atividade em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Mostre no projetor (ou em fotos) três situações: peça grudada e lisa, peça descolando da mesa e a bagunça "spaghetti". Forme duplas. O foco é treinar o diagnóstico, não a manutenção da máquina.`,
      atividade: `Em dupla, olhem as três imagens que o professor mostrou. Para cada uma, decidam juntos: está tudo certo ou há um problema? Se houver problema, qual é o nome dele e o que a dupla faria para resolver?`,
      gabarito: `Imagem 1: tudo certo (camada grudada e lisa). Imagem 2: problema de adesão à mesa — solução: pausar, limpar a mesa e ativar o Brim. Imagem 3: "spaghetti", a peça descolou — solução: cancelar, limpar a mesa e reenviar com Brim e mesa bem nivelada.`,
    },
    {
      titulo: `Roda de conversa: por que a primeira camada importa tanto?`,
      tipo: `Roda de conversa`,
      tempo: `12 min`,
      guiaProfessor: `Conduza sentados em círculo. Use a comparação com a fundação de uma casa para abrir a conversa. Deixe vários alunos falarem antes de fechar a ideia. Anote no quadro as boas respostas.`,
      atividade: `Em roda, conversem: por que a primeira camada é a parte mais importante da impressão? O que pode acontecer com a peça inteira se a base não grudar direito? Que cuidados ajudam a primeira camada a dar certo?`,
      gabarito: `A turma deve chegar a: a primeira camada é a base que segura a peça toda; se ela não gruda, a peça descola e vira "spaghetti"; cuidados que ajudam são mesa limpa, mesa nivelada e usar Brim. Compara-se com a fundação de uma casa.`,
    },
    {
      titulo: `Enviar e dar a largada (projeto curto)`,
      tipo: `Projeto curto`,
      tempo: `15 min`,
      guiaProfessor: `Conduza o envio real com supervisão total. Faça um aluno por vez (ou a turma acompanhando a sua tela no projetor) percorrer os passos. Confirme a impressora certa antes de qualquer clique. Reforce a regra "olhos sim, mãos não" perto da máquina quente.`,
      atividade: `Envie a sua peça para a impressora seguindo os passos: (1) confirme que está fatiada na aba "Preview"; (2) clique em "Print"; (3) escolha a impressora correta na janela; (4) confirme e acompanhe o aquecimento; (5) observe a primeira camada e avise o professor se algo parecer errado.`,
      gabarito: `O aluno percorre os cinco passos na ordem certa, seleciona a impressora correta antes de confirmar, acompanha o aquecimento sem tocar na máquina e identifica se a primeira camada saiu bem ou se precisa de ajuste. O sucesso é a impressão começar com a base grudada e lisa.`,
    },
  ],
};
