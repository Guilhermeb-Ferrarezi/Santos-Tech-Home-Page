import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Exportando para o Unity",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Dominar o fluxo correto de exportação do Blender para o Unity: aplicar transformações, definir a escala em metros e gerar um arquivo FBX que entra na engine com tamanho, orientação e materiais corretos.`,
  descricao: `Depois de semanas modelando, texturizando e cuidando dos materiais, chegou a hora de tirar o asset do Blender e colocá-lo dentro do Unity, onde o jogo de verdade acontece. Essa ponte entre o programa de modelagem e a engine é onde muita gente tropeça: o modelo lindo que você fez aparece gigante, deitado de lado, ou com as texturas fora do lugar. Nada disso é azar. É quase sempre um detalhe de exportação que ficou para trás.

O formato que usamos para atravessar essa ponte é o FBX. Ele é como uma mala bem arrumada que carrega a geometria, a posição dos vértices, as normais, as coordenadas de UV e a referência dos materiais. Mas, assim como uma mala, ele só chega organizado se a gente arrumar antes de fechar. Arrumar, aqui, significa três coisas: aplicar as transformações (zerar rotação e escala que ficaram penduradas no objeto), conferir que a unidade está em metros (porque o Unity pensa em metros, e um cubo de 1 metro no Blender deve virar um cubo de 1 metro no Unity), e marcar as opções certas na janela de exportação.

A grande sacada desta aula é que exportar não é apertar um botão e torcer. É um checklist. Quando o aluno aprende a aplicar transformações com Ctrl+A antes de exportar, a definir a escala da cena em metros, e a usar as configurações de FBX que o Unity espera, o asset entra na engine do tamanho certo, em pé, e com o material aparecendo. O aluno faz a viagem completa: exporta do Blender, importa no Unity, e valida com os próprios olhos se ficou tudo no lugar.

Esta é a penúltima aula do mês. O modelo que vem sendo lapidado desde a primeira semana finalmente cruza a fronteira e vira um asset utilizável dentro do projeto de jogo. Na próxima aula vamos montar o pacote final com vários assets organizados; por isso, hoje o foco é dominar o processo de um único asset com perfeição, para repetir esse mesmo ritual com confiança depois.`,
  materiais: [
    `Computadores com o Blender e o Unity instalados e abertos, um por aluno`,
    `Projetor ou TV para o professor demonstrar a janela de exportação e a importação na tela grande`,
    `O modelo 3D que cada aluno vem desenvolvendo nas aulas anteriores, com materiais e texturas já aplicados (arquivo .blend salvo)`,
    `Um projeto do Unity já criado e aberto, com uma pasta chamada Assets/Modelos pronta para receber os FBX`,
    `Arquivo de exemplo preparado pelo professor: um modelo simples com rotação e escala propositalmente penduradas, para a turma praticar o aplicar transformações`,
    `Uma cápsula ou cubo de referência de 1 metro dentro da cena do Unity, para o aluno comparar visualmente o tamanho do asset importado`,
  ],
  conceitosChave: [
    `FBX — formato de arquivo que transporta geometria, normais, UVs e referências de material do Blender para o Unity; é a mala que leva o asset de um programa ao outro.`,
    `Aplicar transformações — operação (Ctrl+A no Blender) que zera rotação e escala penduradas no objeto, gravando esses valores direto na malha para que a engine receba o modelo limpo.`,
    `Escala em metros — unidade que o Unity entende; um objeto de 1 metro no Blender precisa chegar com 1 metro no Unity, sem encolher nem inflar.`,
    `Orientação de eixos — o Blender usa Z para cima e o Unity usa Y para cima; a exportação precisa converter isso para o modelo não chegar deitado.`,
    `Importar — ato de trazer o FBX para dentro do Unity arrastando o arquivo para a janela Project, gerando um asset utilizável na cena.`,
    `Origem do objeto (origin) — o ponto de referência do modelo; se estiver longe da malha, o asset aparece deslocado ao ser posicionado no Unity.`,
    `Validar a importação — conferir, com os próprios olhos, se o asset chegou com tamanho, orientação e material corretos antes de seguir adiante.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser veterano em Unity para dar esta aula. Basta entender uma ideia: exportar é um checklist, não um chute. Três pontos resolvem 90 por cento dos problemas. Primeiro, aplicar transformações no Blender com Ctrl+A, escolhendo Rotation e Scale, para que rotação e escala penduradas não viajem como surpresa. Segundo, conferir que a cena está em metros, em Scene Properties > Units, com Unit System em Metric. Terceiro, marcar as opções corretas na janela de exportação FBX. Antes da aula, abra o arquivo de exemplo (aquele com rotação e escala de propósito), faça a exportação uma vez e importe no Unity para ganhar confiança no caminho. Tenha o projeto do Unity já aberto com a pasta Assets/Modelos criada.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): mostre na tela grande um asset importado errado, gigante e deitado, e pergunte: "o modelo era bonito no Blender, por que ele chegou assim no Unity?". Deixe a turma palpitar. Conduza para a ideia de que faltou arrumar a mala antes de fechar.

Conteúdo novo guiado (15 min): com o objeto selecionado no Blender, mostre o passo de limpeza. Aplique as transformações: Object > Apply > All Transforms, ou o atalho Ctrl+A escolhendo All Transforms. Explique que isso zera rotação e escala. Em seguida, abra Scene Properties (o ícone de cone e bola) e confirme Unit System em Metric, com Unit Scale 1.0. Agora exporte: File > Export > FBX (.fbx). Na janela de exportação, no painel direito, marque em Include a opção Limit to > Selected Objects para sair só o objeto certo. Na seção Transform, deixe Scale em 1.00, Apply Scalings em All Local, Forward em -Z Forward e Up em Y Up. Em Geometry, mantenha Apply Modifiers ligado. Dê um nome ao arquivo, escolha a pasta Assets/Modelos do projeto Unity e clique em Export FBX. No Unity, abra a janela Project, encontre o FBX e arraste-o para dentro da cena. Ao lado, deixe a cápsula de referência de 1 metro para comparar o tamanho.

Mão na massa (25 min): cada aluno repete o ritual com o próprio modelo. Sequência na lousa: 1) selecionar o objeto; 2) Ctrl+A > All Transforms; 3) conferir metros em Scene Properties; 4) File > Export > FBX com as opções certas, salvando em Assets/Modelos; 5) no Unity, arrastar o FBX para a cena ao lado da cápsula de 1 metro. Circule pela sala conferindo tamanho, orientação e se o material apareceu. Peça que comparem o asset com a cápsula de referência.

Desafio e compartilhar (10 min): cada aluno mostra o asset dele dentro do Unity ao lado da cápsula e diz se o tamanho, a orientação e o material ficaram corretos. Comemore os que acertaram de primeira e ajude os que precisam reexportar.

## Como explicar de forma clara

Use a imagem da mala de viagem: o FBX é a mala que leva o modelo de uma cidade (Blender) para outra (Unity). Se você não dobrar as roupas antes (aplicar transformações), chega tudo amassado. Para a escala, diga que o Blender e o Unity precisam falar a mesma língua de tamanho, que é o metro, senão o boneco chega do tamanho de um prédio. Para a orientação de eixos, conte que o Blender acha que o céu fica no Z e o Unity acha que fica no Y, então avisamos na exportação para o modelo não chegar deitado. Chame o passo de comparar com a cápsula de "prova dos nove": é o momento de olhar e confirmar que deu certo.

## Erros comuns e como ajudar

O erro mais comum é esquecer de aplicar as transformações: o asset chega gigante ou minúsculo no Unity. Volte ao Blender, faça Ctrl+A > All Transforms e reexporte. Outro clássico é o modelo chegar deitado: confira Forward em -Z Forward e Up em Y Up na janela de FBX. Quando o material some, lembre que o FBX leva só a referência; o aluno talvez precise reaplicar o material no Unity ou conferir se a textura foi para a pasta certa. Muitos esquecem de marcar Selected Objects e exportam a cena inteira, inclusive a câmera e a luz; mostre o Limit to. Por fim, alguns salvam o FBX em qualquer lugar e não o acham no Unity; oriente sempre salvar dentro de Assets/Modelos do projeto.`,
  exercicios: [
    {
      titulo: `Arrumando a mala: aplicar transformações`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Use o arquivo de exemplo com rotação e escala penduradas de propósito. Mostre o painel N (aba Item) antes e depois, para o aluno ver os valores de Rotation e Scale voltarem a zero e a um. Confirme que todos selecionaram o objeto antes do Ctrl+A.`,
      atividade: `Abra o arquivo de exemplo. Aperte a tecla N e olhe os valores de Rotation e Scale do objeto na aba Item. Selecione o objeto e use Object > Apply > All Transforms (ou Ctrl+A e escolha All Transforms). Olhe os valores de novo e anote o que mudou.`,
      gabarito: `Depois de aplicar, a Rotation de todos os eixos deve ficar em 0 graus e a Scale deve ficar em 1.000 nos três eixos (X, Y e Z). O aluno deve anotar que a rotação que estava torta zerou e que a escala voltou para 1, mas que a forma do objeto na tela continuou exatamente igual, porque os valores foram gravados dentro da malha.`,
    },
    {
      titulo: `Falando a mesma língua: a escala em metros`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Mostre onde fica Scene Properties (ícone de cone e bola na barra de propriedades) e a seção Units. Reforce que o Unit System deve estar em Metric e o Unit Scale em 1.0. Use a aba Item (tecla N) para ler as dimensões reais do objeto em metros.`,
      atividade: `No Blender, abra Scene Properties e confira se o Unit System está em Metric com Unit Scale 1.0. Depois aperte N, veja as dimensões (Dimensions) do seu objeto e escreva qual seria o tamanho real dele em metros se ele entrasse agora no Unity.`,
      gabarito: `O aluno confirma que Unit System está em Metric e Unit Scale em 1.0. Ele deve ler as dimensões na aba Item e converter para metros corretamente: por exemplo, um valor de 0.5 significa meio metro (50 cm), e 2.0 significa dois metros. A resposta correta relaciona o número das Dimensions diretamente ao tamanho que o objeto terá dentro do Unity, porque os dois programas usam metros.`,
    },
    {
      titulo: `Exportando o FBX em dupla`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas em que um aluno opera e o outro confere o checklist em voz alta. Reforce a sequência das opções na janela de FBX: Limit to Selected Objects, Scale 1.00, Forward em -Z Forward, Up em Y Up, Apply Modifiers ligado. Garanta que salvem em Assets/Modelos.`,
      atividade: `Em dupla, exportem o objeto do arquivo de exemplo. Sigam o checklist: selecionar o objeto, File > Export > FBX, marcar Limit to Selected Objects, deixar Scale em 1.00, Forward em -Z Forward e Up em Y Up. Salvem o arquivo na pasta Assets/Modelos do projeto Unity com um nome claro, por exemplo asset_exemplo.fbx.`,
      gabarito: `A dupla deve gerar um arquivo .fbx dentro da pasta Assets/Modelos do projeto Unity. O checklist correto é: apenas o objeto selecionado exportado (e não a câmera ou a luz), Scale em 1.00, Forward em -Z Forward e Up em Y Up. A prova de que deu certo é o arquivo aparecer na janela Project do Unity logo depois, sem mensagens de erro.`,
    },
    {
      titulo: `Roda de conversa: por que o asset chega errado?`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Conduza a conversa com a cápsula de 1 metro visível na tela grande. Mostre exemplos de asset gigante, deitado e sem material. Para cada caso, pergunte qual etapa do checklist foi esquecida. Conecte cada sintoma com a sua causa.`,
      atividade: `Em roda, discutam três situações: um asset que chegou no Unity dez vezes maior que a cápsula; um asset que chegou deitado de lado; e um asset que chegou cinza, sem o material. Para cada caso, digam qual passo da exportação foi provavelmente esquecido.`,
      gabarito: `Respostas esperadas: o asset gigante indica que faltou aplicar as transformações (Ctrl+A > All Transforms) ou que a escala não estava em metros. O asset deitado indica que as opções de eixo estavam erradas, e deveriam ser Forward em -Z Forward e Up em Y Up. O asset cinza indica que o material não veio junto, e precisa ser reaplicado no Unity ou que a textura não foi para a pasta correta. O aluno deve ligar cada sintoma à sua causa no checklist.`,
    },
    {
      titulo: `A viagem completa do meu asset`,
      tipo: `projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Cada aluno trabalha no próprio modelo. Oriente a percorrer o checklist inteiro e a posicionar o asset ao lado da cápsula de 1 metro no Unity. Valorize quem validar tamanho, orientação e material. Não deixe ninguém pular a etapa de comparar com a cápsula.`,
      atividade: `Faça a viagem completa com o seu modelo: 1) aplique as transformações; 2) confira a escala em metros; 3) exporte em FBX com as opções certas para a pasta Assets/Modelos; 4) no Unity, arraste o FBX para a cena ao lado da cápsula de 1 metro. Depois escreva um pequeno relatório de validação respondendo: o tamanho ficou parecido com a cápsula? O asset está em pé? O material apareceu?`,
      gabarito: `O relatório deve responder às três perguntas de validação. Um bom resultado é o asset chegar com tamanho coerente em relação à cápsula de 1 metro (nem gigante nem minúsculo), em pé (não deitado), e com o material visível. Se algo ficou errado, o aluno deve nomear o problema e dizer qual etapa vai refazer, por exemplo: "ele chegou deitado, vou reexportar com Up em Y Up". Nenhum relatório deve vir vazio: mesmo um asset perfeito rende o relatório "tamanho correto, em pé, material aparecendo, importação validada".`,
    },
  ],
};
