import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Materiais e Texturas na Unreal",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `O aluno aprende a importar os assets criados no Maya e a criar materiais com textura, cor base e rugosidade no Material Editor da Unreal para definir o visual do jogo final.`,
  descricao: `Nesta aula o aluno descobre como dar vida visual aos modelos 3D que ele mesmo criou no Maya. Até aqui, o jogo na Unreal Engine já tem mecânicas funcionando em Blueprints e em C++. Agora chega o momento de transformar formas cinzas e sem graça em superfícies que parecem metal, madeira, pedra ou plástico. A ferramenta central da aula é o Material Editor, o editor de materiais visual da Unreal, onde o aluno conecta nós (nodes) para descrever como a luz se comporta em cada superfície.

Um material na Unreal é como uma receita que diz à placa de vídeo como pintar um objeto. Os ingredientes principais são a cor base (Base Color), que define a cor que enxergamos; a rugosidade (Roughness), que controla se a superfície é brilhante como vidro ou fosca como giz; e o metálico (Metallic), que diz se o objeto é metal ou não. Quando o aluno combina esses ingredientes com texturas, que são imagens aplicadas sobre o modelo, ele consegue resultados muito realistas sem precisar pintar pixel por pixel.

O fluxo de trabalho desta aula segue a ordem natural de produção de um jogo profissional: primeiro o aluno exporta o modelo do Maya no formato FBX, depois importa esse arquivo na Unreal junto com as texturas, em seguida cria um Material no Content Browser e, por fim, arrasta esse material sobre o modelo dentro da cena. É exatamente assim que estúdios de verdade preparam os personagens e cenários dos jogos que os alunos jogam em casa.

Por ser o Ano 4, o aluno também usa o Claude como assistente: ele pode pedir ajuda para entender o que cada nó do Material Editor faz, ou para descobrir por que uma textura ficou esticada. O professor conduz a aula como um tutorial prático, mostrando onde clicar e o que cada conexão significa, sempre conectando a teoria ao resultado visual que aparece na tela em tempo real.`,
  materiais: [
    `Computadores com Unreal Engine instalada (versão 5) e compilador C++ configurado, um por aluno`,
    `Projetor para o professor demonstrar o Material Editor passo a passo`,
    `Arquivos de exemplo: um modelo FBX simples (caixa ou caixote) exportado do Maya, com mapas de textura (cor base, rugosidade e normal) em formato PNG`,
    `Pasta compartilhada com 3 a 4 texturas extras (madeira, metal, pedra) para os alunos experimentarem`,
    `Acesso ao Claude como assistente para tirar dúvidas sobre nós do Material Editor`,
    `Mouse com roda de rolagem (facilita muito navegar no gráfico de nós)`,
  ],
  conceitosChave: [
    `Material — receita visual que diz à Unreal como a luz se comporta na superfície de um objeto (cor, brilho, metal).`,
    `Material Editor — janela da Unreal onde você monta o material conectando nós (nodes) numa espécie de fluxograma.`,
    `Base Color — a cor pura da superfície, sem sombra nem brilho; é a cor que você vê quando pensa no objeto.`,
    `Roughness — número de 0 a 1 que controla a rugosidade: perto de 0 a superfície fica espelhada, perto de 1 fica fosca.`,
    `Metallic — valor que diz se o material é metal (1) ou não metal (0), mudando como ele reflete a luz.`,
    `Textura — imagem aplicada sobre o modelo 3D para dar detalhe, como a foto de uma madeira colada na superfície.`,
    `FBX — formato de arquivo usado para levar modelos 3D do Maya para a Unreal sem perder a geometria.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista. Um material na Unreal é só uma forma visual de descrever uma superfície. Pense numa receita de bolo: alguns ingredientes (cor, brilho, metal) e algumas conexões. A janela onde montamos isso se chama Material Editor, e ela funciona ligando caixinhas chamadas nós (nodes). Cada nó faz uma coisa e você liga a saída de um na entrada do outro, igual a um fluxograma.

Três propriedades resolvem quase tudo: Base Color (a cor), Roughness (o quanto é fosco; 0 é espelho, 1 é giz) e Metallic (1 para metal, 0 para o resto). Uma textura é só uma imagem (PNG) colada no modelo. O fluxo da aula é: exportar o modelo do Maya em FBX, importar na Unreal, criar um Material, conectar as texturas e arrastar o material sobre o modelo na cena. Tudo aparece na hora na tela, o que ajuda muito a explicar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Abra um jogo conhecido pelos alunos e pergunte por que a espada parece metal e a caixa parece madeira. Conduza até a resposta: é o material. Reveja rapidamente que eles já modelaram assets no Maya nos meses anteriores; hoje vamos vestir esses modelos.

Conteúdo novo guiado (15 min): No computador do professor, mostre o ciclo completo.
1. No Maya, com o modelo selecionado, vá em File maior que Export Selection, escolha o tipo FBX e salve.
2. Na Unreal, no Content Browser (painel de baixo), clique em Import, escolha o FBX e confirme. O modelo aparece como um Static Mesh.
3. Importe também as texturas: arraste os arquivos PNG (cor, rugosidade, normal) para dentro do Content Browser.
4. Clique com o botão direito no Content Browser maior que Material. Dê o nome M_Caixote. Dois cliques para abrir o Material Editor.
5. No Material Editor, arraste a textura de cor do painel e conecte a saída RGB no pino Base Color do nó principal. Faça o mesmo ligando a textura de rugosidade em Roughness e a normal em Normal.
6. Clique em Apply e Save. Arraste o material M_Caixote da pasta para cima do modelo na cena (viewport). O modelo ganha a textura.

Mão na massa (25 min): Cada aluno repete o ciclo com o caixote de exemplo. Depois cria um segundo material só com cor e rugosidade, sem textura, usando os nós Constant3Vector (cor) e Constant (rugosidade). Como não usamos código aqui, o segredo é nomear bem (prefixo M_ para material, T_ para textura) e salvar sempre.

Desafio e compartilhar (10 min): Cada aluno troca a textura do caixote por madeira, metal ou pedra da pasta compartilhada e ajusta a rugosidade para combinar (metal mais liso, pedra mais fosca). Quem termina mostra a cena no projetor e diz qual valor de Roughness usou e por quê.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Roughness é como a diferença entre um espelho (liso, reflete tudo, valor perto de 0) e uma parede pintada (fosca, valor perto de 1). Metallic é simples: ou é metal ou não é, quase nunca fica no meio. Base Color é a cor da camiseta antes de qualquer luz bater nela. Diga que os nós são como blocos de Lego: cada um tem encaixes (pinos), e a gente liga a saída de um na entrada do outro. Se travarem, peça para o aluno descrever em voz alta o que quer que a superfície pareça; o nome já indica o pino certo.

## Erros comuns e como ajudar

O modelo aparece todo cinza: o material não foi arrastado sobre ele, ou faltou clicar em Apply. A textura fica esticada ou borrada: o modelo veio sem UVs do Maya; nesta aula use o exemplo que já tem UV pronto. Conectaram a normal em Base Color e o objeto ficou azulado: lembre que cada pino tem seu lugar (azul é típico do mapa normal). Esqueceram de salvar e perderam o trabalho: crie o hábito de Ctrl mais S a cada passo. Importação do FBX sem textura: é normal, as texturas se importam separado e se ligam dentro do material. Incentive o uso do Claude para o aluno perguntar o que um nó faz antes de chamar o professor.`,
  exercicios: [
    {
      titulo: `Caça aos materiais no jogo`,
      tipo: `Observação e discussão`,
      tempo: `8 minutos`,
      guiaProfessor: `Aquecimento. Mostre uma cena de um jogo no projetor e peça para os alunos apontarem objetos e adivinharem se são metal, madeira ou pedra, e se são brilhantes ou foscos. Conecte cada palpite a uma propriedade do material.`,
      atividade: `Olhe a cena projetada e liste três objetos. Para cada um, diga qual seria o valor aproximado de Roughness (perto de 0 ou perto de 1) e se o Metallic seria 0 ou 1.`,
      gabarito: `Exemplo de resposta: Espada de metal: Metallic 1, Roughness perto de 0 (lisa e brilhante). Caixote de madeira: Metallic 0, Roughness perto de 0.7 (fosco). Parede de pedra: Metallic 0, Roughness perto de 0.9 (bem fosca). O importante é perceber que metal recebe Metallic 1 e superfícies foscas têm Roughness alto.`,
    },
    {
      titulo: `Importar o modelo do Maya`,
      tipo: `Prática guiada`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe o aluno no ciclo de importação. Verifique que o FBX entrou como Static Mesh e que as três texturas PNG aparecem no Content Browser. Reforce a nomeação com prefixos.`,
      atividade: `Importe o arquivo Caixote.fbx pela Unreal usando o botão Import do Content Browser. Em seguida, arraste as três texturas PNG (cor, rugosidade e normal) para a mesma pasta. Renomeie as texturas com o prefixo T_ (exemplo T_Caixote_Cor).`,
      gabarito: `Passos corretos: 1) Content Browser maior que Import maior que selecionar Caixote.fbx maior que Import All. O modelo vira um Static Mesh. 2) Arrastar os PNG direto para a pasta do Content Browser. 3) Clicar com botão direito em cada textura maior que Rename, aplicando T_Caixote_Cor, T_Caixote_Rugosidade e T_Caixote_Normal. Resultado: um Static Mesh e três texturas nomeadas na pasta.`,
    },
    {
      titulo: `Criar e aplicar o primeiro material`,
      tipo: `Prática guiada`,
      tempo: `12 minutos`,
      guiaProfessor: `Foco no Material Editor. Garanta que o aluno conecte cada textura no pino certo (RGB da cor em Base Color, rugosidade em Roughness, normal em Normal) e clique em Apply antes de arrastar para a cena.`,
      atividade: `Crie um Material chamado M_Caixote. Abra o Material Editor, conecte as três texturas nos pinos certos do nó principal, clique em Apply e Save, e arraste o material sobre o caixote na viewport.`,
      gabarito: `Solução: 1) Botão direito no Content Browser maior que Material, nome M_Caixote, dois cliques para abrir. 2) Arrastar T_Caixote_Cor para o gráfico e ligar a saída RGB no pino Base Color. 3) Ligar T_Caixote_Rugosidade no pino Roughness. 4) Ligar T_Caixote_Normal no pino Normal. 5) Apply e Save (Ctrl mais S). 6) Arrastar M_Caixote da pasta sobre o modelo na viewport. O caixote passa a exibir a textura.`,
    },
    {
      titulo: `Material só com cor e rugosidade (sem textura)`,
      tipo: `Prática`,
      tempo: `12 minutos`,
      guiaProfessor: `Agora sem imagens, só com números. Ensine o nó Constant3Vector para cor (atalho: segurar 3 e clicar) e o nó Constant para um valor único (atalho: segurar 1 e clicar). Mostre como editar o valor no painel Details.`,
      atividade: `Crie um material chamado M_PlasticoVermelho usando um nó Constant3Vector ligado em Base Color (cor vermelha) e um nó Constant ligado em Roughness com valor 0.3. Aplique a um objeto da cena.`,
      gabarito: `Solução: 1) Criar Material M_PlasticoVermelho e abrir. 2) Segurar a tecla 3 e clicar no gráfico para criar um Constant3Vector; no painel Details, definir R perto de 1, G e B perto de 0 (vermelho). Ligar em Base Color. 3) Segurar a tecla 1 e clicar para criar um Constant; definir o valor como 0.3 e ligar em Roughness. 4) Deixar Metallic em 0 (plástico não é metal). 5) Apply, Save e arrastar sobre o objeto. Resultado: superfície vermelha levemente brilhante.`,
    },
    {
      titulo: `Desafio: transformar em metal e comparar`,
      tipo: `Desafio aplicado`,
      tempo: `13 minutos`,
      guiaProfessor: `Avaliação do entendimento de Metallic e Roughness. Peça ao aluno que justifique cada valor. Incentive testar e observar a mudança na viewport. Pode usar o Claude para entender por que metal precisa de Roughness baixa.`,
      atividade: `Duplique o material M_PlasticoVermelho como M_MetalCromado. Mude o Metallic para 1 e a Roughness para 0.05. Aplique a um objeto e compare lado a lado com o plástico. Escreva uma frase explicando a diferença visual.`,
      gabarito: `Solução: 1) Botão direito em M_PlasticoVermelho maior que Duplicate, nome M_MetalCromado. 2) Abrir e criar (ou ajustar) um Constant em Metallic com valor 1, e um Constant em Roughness com valor 0.05. 3) Apply, Save e arrastar sobre um objeto. Explicação esperada: o objeto com Metallic 1 e Roughness 0.05 reflete o ambiente e parece cromado e espelhado, enquanto o plástico (Metallic 0, Roughness 0.3) mostra a cor própria com brilho suave. Conclusão: Metallic decide se reflete como metal e Roughness decide o quanto o reflexo é nítido.`,
    },
  ],
};
