import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Pacote Completo e Galeria do Jogo",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar e organizar o pacote completo de assets voxel exportado para o Roblox e apresentar tudo numa galeria para a turma.`,
  descricao: `Chegamos à última aula do mês! Durante quatro semanas, cada criança construiu no MagicaVoxel um conjunto de peças para o próprio jogo: itens mágicos, obstáculos que desafiam, peças pintadas com cores vivas e variações do mesmo objeto em cores diferentes. Hoje juntamos tudo num único lugar bem arrumado, conferimos se cada modelo está pronto e exportado, e fechamos o entregável do mês: o pacote de assets voxel completo.

Esta aula é de consolidação e celebração. Não vamos criar modelos novos do zero. O foco é revisar o que já existe, completar o que ficou faltando, garantir que cada arquivo foi salvo e exportado corretamente, e organizar a pasta de assets de um jeito que a criança consiga encontrar tudo depois quando for montar o jogo no Roblox. Pensar em organização é uma habilidade de verdade dos criadores de jogos profissionais: ninguém quer perder uma peça importante no meio de dezenas de arquivos.

Na segunda metade da aula acontece o momento mais especial: a galeria do jogo. Cada criança mostra no projetor (ou na própria tela) os itens, obstáculos e variações que produziu, conta o que cada peça faz no jogo e ouve os elogios e ideias dos colegas. É um momento de orgulho, de falar em público com carinho e de aprender vendo o trabalho dos outros.

Para o professor, mesmo iniciante em MagicaVoxel, esta aula é tranquila porque o trabalho pesado já foi feito nas semanas anteriores. O seu papel principal é conferir junto com cada criança se a pasta está completa, ajudar quem ficou para trás a terminar uma ou duas peças, e conduzir uma galeria animada e acolhedora. Tudo o que você precisa de cliques e menus está descrito no treinamento abaixo.`,
  materiais: [
    `Computadores com o MagicaVoxel já aberto (um por criança)`,
    `Projetor ou TV ligada na máquina do professor para a galeria`,
    `Pasta "Meu Pacote de Assets" criada na área de trabalho de cada computador`,
    `Exemplo pronto de um pacote completo e organizado, feito pelo professor`,
    `Lista de conferência impressa (checklist) com os tipos de peça do mês`,
    `Adesivos ou carimbos de "Asset Aprovado" para premiar cada pacote conferido`,
    `Fones de ouvido ou ambiente silencioso para o momento de apresentação`,
  ],
  conceitosChave: [
    `Asset — cada pecinha pronta do jogo, como um item, um obstáculo ou uma variação.`,
    `Pacote de assets — a coleção de todas as suas peças guardadas juntas na mesma pasta.`,
    `Exportar — transformar o modelo do MagicaVoxel num arquivo que outros programas, como o Roblox, conseguem abrir.`,
    `Organizar — guardar cada arquivo com nome claro e no lugar certo para encontrar depois.`,
    `Galeria — momento em que mostramos nossas criações para a turma, como num museu de jogos.`,
    `Checklist — listinha de conferência que ajuda a ver se não esqueceu nenhuma peça.`,
    `Apresentar — contar para os outros, com as próprias palavras, o que cada peça faz no jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje é dia de fechar o pacote e celebrar. As crianças não vão modelar peças novas do zero: elas vão reunir, conferir, exportar o que faltar e organizar. No MagicaVoxel cada modelo vive num arquivo .vox, e para o Roblox a gente exporta em formato .obj. O trabalho de exportar foi ensinado nas aulas 5 e 6, então aqui você apenas confere e completa. Antes da aula, abra o seu pacote-exemplo já pronto e organizado para mostrar no projetor: ver o resultado final motiva muito. Tenha em mãos um checklist simples com os quatro tipos de peça do mês (itens mágicos, obstáculos, peças pintadas e variações de cor).

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): reúna a turma diante do projetor. Mostre o seu pacote-exemplo: a pasta com os arquivos .vox e os arquivos .obj exportados, cada um com nome claro. Pergunte: "Quantas peças vocês acham que fizeram este mês?" Deixe contarem. Relembre rapidamente como exportar no MagicaVoxel: no painel direito, na seção "Export", clique no botão "obj"; o arquivo é salvo na pasta de exportação do programa.

Conteúdo novo guiado (15 min): ensine a organizar. No computador de uma criança, abra a pasta "Meu Pacote de Assets" na área de trabalho. Mostre como renomear um arquivo com clique direito e "Renomear", dando nomes claros como "item-pocao", "obstaculo-espinho", "variacao-azul". Explique que dentro do MagicaVoxel cada modelo aberto aparece na barra de projetos à esquerda. Para salvar, use o menu superior, opção de salvar o .vox; para exportar, painel direito, seção "Export", botão "obj". Mostre como arrastar o .vox salvo e o .obj exportado para dentro da pasta organizada.

Mão na massa (25 min): cada criança abre o MagicaVoxel e a sua pasta. Com o checklist na mão, confere peça por peça: o item mágico está salvo e exportado? O obstáculo? As peças pintadas? As variações de cor? O que estiver faltando, ela termina agora: abre o modelo na barra de projetos à esquerda, ajusta se precisar, salva o .vox e clica em "Export" e depois "obj". Em seguida arrasta os arquivos para a pasta e renomeia com nome claro. Circule pela sala, confira cada pasta e carimbe "Asset Aprovado" nos pacotes completos.

Desafio e compartilhar (10 min): abre a galeria. Cada criança vai ao projetor (ou mostra na própria tela) e apresenta duas ou três peças favoritas, dizendo o que cada uma faz no jogo. A turma bate palmas e dá uma ideia gentil para cada apresentação.

## Como explicar para crianças

Use a ideia de "caixa de brinquedos do jogo": cada peça é um brinquedo e a pasta é a caixa onde guardamos tudo arrumado. Diga: "Um criador de games guarda cada peça com um nome bem claro, igual a colocar etiqueta na gaveta, para achar rapidinho depois." Para exportar, fale: "Exportar é como tirar uma cópia da peça num idioma que o Roblox entende." Para a galeria, diga: "Vamos virar um museu de jogos! Cada um mostra suas criações e a gente aplaude o trabalho dos amigos."

## Erros comuns e como ajudar

A confusão mais comum é a criança achar que salvou mas só exportou, ou o contrário. Lembre sempre: salvar o .vox guarda o desenho para editar; exportar o .obj cria a cópia para o Roblox. As duas coisas são necessárias. Outro erro é dar nomes como "novo1" e "semtitulo", impossíveis de achar depois; insista em nomes que descrevem a peça. Algumas crianças esquecem de arrastar o arquivo para a pasta e ele fica perdido na pasta de exportação do programa; ajude a localizar e mover. Na galeria, quem é mais tímido pode travar: faça duas perguntas simples ("O que essa peça faz?" e "Qual cor você mais gostou?") para destravar a fala com carinho.`,
  exercicios: [
    {
      titulo: `Contando o Meu Pacote`,
      tipo: `Revisão oral e contagem`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça no aquecimento. Peça que cada criança abra a barra de projetos à esquerda do MagicaVoxel e a pasta "Meu Pacote de Assets" e conte em voz alta quantas peças tem. Use para descobrir quem está completo e quem precisará de mais ajuda na mão na massa.`,
      atividade: `Abra a sua pasta de assets e conte quantas peças você criou este mês. Diga o número em voz alta e fale qual é a sua peça favorita.`,
      gabarito: `Cada criança deve conseguir contar suas peças e nomear ao menos uma favorita. Espera-se pelo menos quatro peças (um item mágico, um obstáculo, uma peça pintada e uma variação de cor). Se houver menos de quatro, marque essa criança para receber atenção extra na etapa de mão na massa.`,
    },
    {
      titulo: `Etiqueta na Peça`,
      tipo: `Organização de arquivos`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre primeiro no seu computador como renomear: clique direito no arquivo, "Renomear", digite um nome claro. Ajude com a digitação as crianças menores. Reforce nomes que descrevem a peça, sem espaços confusos.`,
      atividade: `Escolha três arquivos da sua pasta e dê a cada um um nome bem claro que diga o que a peça é, por exemplo "item-pocao", "obstaculo-espinho" e "variacao-azul".`,
      gabarito: `Os três arquivos devem ficar com nomes que descrevem a peça (tipo + característica), sem nomes vagos como "novo1" ou "semtitulo". Exemplos corretos: "item-coracao", "obstaculo-pedra", "variacao-vermelho". O importante é que a própria criança consiga dizer o que cada nome significa.`,
    },
    {
      titulo: `Salvar e Exportar Sem Esquecer`,
      tipo: `Prática guiada no MagicaVoxel`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe de perto. Lembre a regra das duas ações: salvar o .vox (menu superior, salvar) e exportar o .obj (painel direito, seção "Export", botão "obj"). Confira se o .obj realmente apareceu na pasta de exportação e ajude a arrastar para a pasta organizada.`,
      atividade: `Pegue uma peça que ainda não estava exportada. Salve o arquivo .vox e depois clique em "Export" e em "obj" para criar o arquivo do Roblox. Por fim, arraste os dois arquivos para a sua pasta de assets.`,
      gabarito: `Ao final, a pasta da criança deve conter, para essa peça, tanto o arquivo .vox (desenho editável) quanto o arquivo .obj (cópia para o Roblox). Conferir abrindo a pasta: os dois arquivos presentes e com nome claro. Se faltar o .obj, a criança esqueceu de exportar; se faltar o .vox, esqueceu de salvar.`,
    },
    {
      titulo: `Conferência com o Checklist`,
      tipo: `Verificação com lista`,
      tempo: `7 minutos`,
      guiaProfessor: `Entregue o checklist impresso com os quatro tipos de peça do mês. Acompanhe enquanto a criança marca cada item conferindo a pasta. Onde faltar, ela completa agora. Ao final, carimbe "Asset Aprovado" nos pacotes completos.`,
      atividade: `Use a sua lista de conferência. Para cada tipo de peça (item mágico, obstáculo, peça pintada e variação de cor), confira se está salva e exportada na pasta. Marque o que já tem e termine o que faltar.`,
      gabarito: `O checklist deve terminar com todos os quatro tipos marcados, cada um com .vox salvo e .obj exportado dentro da pasta organizada. Um pacote completo tem, no mínimo: um item mágico, um obstáculo, uma peça pintada e uma variação de cor, todos exportados. Pacotes assim recebem o carimbo "Asset Aprovado".`,
    },
    {
      titulo: `Galeria do Jogo`,
      tipo: `Apresentação para a turma`,
      tempo: `10 minutos`,
      guiaProfessor: `Conduza com acolhimento. Cada criança apresenta no projetor ou na própria tela. Para os tímidos, faça duas perguntas-âncora: "O que essa peça faz no jogo?" e "Qual cor você mais gostou?". Combine que a turma sempre aplaude e dá uma ideia gentil ao final de cada fala.`,
      atividade: `Mostre para a turma duas ou três peças favoritas do seu pacote. Para cada uma, diga o nome dela e o que ela faz no jogo. Depois, ouça e aplauda os colegas.`,
      gabarito: `Cada criança deve apresentar pelo menos duas peças, dizendo o nome e a função de cada uma no jogo (por exemplo: "Esta poção dá vida extra" ou "Este espinho machuca quem encosta"). A turma participa aplaudindo e oferecendo uma ideia gentil. Sucesso é toda criança falar ao menos uma frase sobre o próprio trabalho e ouvir os colegas com respeito.`,
    },
  ],
};
