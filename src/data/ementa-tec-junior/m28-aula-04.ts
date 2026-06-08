import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Meu modelo chegou ao Roblox",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Cada criança vai usar o Import 3D do Roblox Studio para trazer o próprio modelo voxel, vê-lo aparecer no mundo do jogo e salvar o lugar pela primeira vez.`,
  descricao: `Chegou o grande momento que toda a turma esperava: o modelo que a criança modelou no Blender e exportou nas aulas passadas vai finalmente "viajar" para dentro do Roblox. Nesta aula a estrela é o botão Import 3D, que fica na aba Avatar do Roblox Studio. É por ele que o arquivo sai do computador e aparece dentro do mundo 3D, como uma encomenda que chega pelo correio e é aberta na frente de todos.

A aula é bem prática e cheia de emoção. Cada aluno vai abrir o seu próprio arquivo, esperar a barrinha de carregamento e ver a criação surgir na tela. Esse instante de "uau, é o MEU modelo!" é o coração do dia, e o professor deve celebrar cada aparição como uma pequena vitória. Como nem sempre tudo sai perfeito de primeira, a turma também vai aprender, juntinha, a resolver os dois perrengues mais comuns: o modelo que chega sem cor (todo branco ou cinza) e o modelo que chega pequenininho demais, quase invisível.

Além de importar, as crianças vão aprender um hábito de gente grande que faz games: salvar o trabalho. Pela primeira vez elas vão dar um nome ao lugar e guardar tudo, para que nada se perca. Salvar é como guardar um desenho na pasta certa: se não guardar, da próxima vez que abrir o computador o desenho some.

Ao final, todos terão um arquivo do Roblox com a própria criação dentro, salvo e seguro, prontos para na próxima semana começar a mover, girar e posicionar o modelo no cenário. É um passo enorme rumo ao entregável do mês: um cenário com o modelo próprio publicado no Roblox.`,
  materiais: [
    `Computadores (um por aluno) com o Roblox Studio aberto e conectados à internet`,
    `Os arquivos de modelo de cada criança já exportados nas Aulas 1 e 2 (formato .obj ou .fbx), salvos numa pasta fácil de achar na Área de Trabalho`,
    `Projetor ou TV grande ligada ao computador do professor para a demonstração passo a passo`,
    `Um modelo de exemplo já pronto e testado pelo professor (para mostrar o caminho completo antes dos alunos começarem)`,
    `Um segundo arquivo de exemplo "com problema" (sem cor ou bem pequeno) para treinar a correção na frente da turma`,
    `Crachás ou etiquetas para nomear os modelos e folha de "checklist da importação" impressa`,
    `Caixa de som baixinha (opcional) para um clima de comemoração quando os modelos aparecerem`,
  ],
  conceitosChave: [
    `Importar — é trazer um arquivo de fora para dentro do Roblox, como abrir uma encomenda que chegou pelo correio.`,
    `Import 3D — o botão mágico do Roblox Studio (na aba Avatar) que abre o seu arquivo e coloca o modelo dentro do mundo.`,
    `Carregar — a espera enquanto o computador "lê" o arquivo; aparece uma barrinha e a gente espera com paciência.`,
    `Modelo (Model) — o objeto 3D que você criou; no Roblox ele vira uma peça do seu mundo.`,
    `Textura/Cor — a "roupa colorida" do modelo; às vezes ela não vem junto e o modelo chega branquinho.`,
    `Escala (tamanho) — o quão grande ou pequeno o modelo está; dá para crescer ou diminuir se vier do tamanho errado.`,
    `Salvar — guardar o trabalho com um nome para não perder nada, como guardar o desenho na pasta certa.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser expert em Roblox para dar esta aula. Só precisa ter feito o caminho UMA vez antes. O ponto central é o botão "Import 3D", que fica na faixa superior do Roblox Studio, na aba "Avatar". Ele abre uma janela para você escolher o arquivo do computador (o .obj ou .fbx que as crianças exportaram). Depois de escolher, aparece uma pré-visualização do modelo; você clica em "Import" e o modelo entra no mundo, dentro do painel "Explorer" (a lista de tudo que existe no jogo), do lado direito.

Antes da aula: abra o Studio, crie um lugar novo (template "Baseplate", que é só um chão plano), importe um modelo de teste e salve. Faça isso uma vez para não travar na frente da turma. Tenha os arquivos das crianças numa pasta única na Área de Trabalho, cada um com o nome do aluno. Dois perrengues são quase certos: modelo sem cor (chega branco/cinza) e modelo pequeno demais (some no chão). Os dois têm solução simples, mostrada abaixo.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): Pergunte: "Onde está guardado o nosso modelo agora?" Relembre que ele foi exportado do Blender e está "dormindo" numa pasta. Mostre no projetor a pasta com os arquivos. Diga que hoje cada modelo vai "acordar" dentro do Roblox.

CONTEÚDO NOVO GUIADO (15 min): No seu computador, com o projetor ligado, mostre devagar: 1) Abra o Roblox Studio e clique em "New" e depois no template "Baseplate". 2) Vá até a aba "Avatar" no topo. 3) Clique no botão "Import 3D". 4) Na janela que abrir, ache a pasta e clique no arquivo de exemplo, depois em "Open"/"Abrir". 5) Espere a barrinha de carregamento. 6) Olhe a pré-visualização e clique em "Import". 7) Mostre que o modelo apareceu no "Explorer" (direita) e na tela 3D. Diga em voz alta cada clique. Depois mostre, de propósito, um modelo sem cor e um pequenininho, e como arrumar (veja "Erros comuns").

MÃO NA MASSA (25 min): Cada criança repete no próprio computador, com o arquivo dela. Circule pela sala. Use o checklist: abriu Baseplate? achou a aba Avatar? clicou em Import 3D? escolheu o arquivo certo? esperou carregar? clicou em Import? viu o modelo aparecer? Celebre cada aparição. Por fim, ensine a SALVAR: menu "File" (canto superior esquerdo) maior que "Save to File", escolha a Área de Trabalho, dê um nome com o nome da criança (ex.: "Joao_meu_mundo") e clique "Salvar".

DESAFIO + COMPARTILHAR (10 min): Desafio: girar a câmera ao redor do próprio modelo segurando o botão direito do mouse e usando as teclas W, A, S, D para chegar pertinho. Depois, cada criança mostra ao colega do lado o modelo que apareceu e diz uma coisa que mais gostou.

## Como explicar para crianças

Use a história do correio: "O nosso modelo foi viajar numa caixa (o arquivo). O botão Import 3D é a tesoura que abre a caixa, e o modelo pula para dentro do mundo!" Para a espera, diga: "O computador está lendo a carta com calma, por isso a barrinha anda devagar; a gente espera respirando fundo." Para salvar: "Salvar é guardar o desenho na pasta certinha. Se não guardar, ele some quando a gente desliga o computador." Fale sempre o nome dos botões em voz alta e aponte na tela grande, porque criança aprende vendo onde clicar.

## Erros comuns e como ajudar

Modelo chega sem cor (branco/cinza): muitas vezes a textura não veio junto. Solução simples nesta aula: clique no modelo no Explorer, depois na peça, e troque a cor pela propriedade "Color" no painel "Properties" (canto inferior direito), só para ele não ficar invisível. Diga: "Hoje a gente pinta de uma cor só; semana que vem deixamos lindo."

Modelo pequeno demais (some no chão): no "Import 3D", antes de confirmar, existe um campo de tamanho/escala; aumente o número. Se já importou, selecione o modelo e use a ferramenta "Scale" (aba "Model") para puxar e crescer. Analogia: "Ele chegou tamanho formiga; vamos crescer até virar tamanho dinossauro."

Outros: criança não acha a aba Avatar (mostre apontando no projetor), escolhe o arquivo errado (confira o nome), ou esquece de salvar (passe de mesa em mesa conferindo o checklist e o nome do arquivo salvo).`,
  exercicios: [
    {
      titulo: `Encontre o botão mágico`,
      tipo: `Reconhecimento na tela (oral e apontando)`,
      tempo: `5 minutos`,
      guiaProfessor: `Com o Roblox Studio aberto no projetor, peça que as crianças apontem para a tela ou venham mostrar onde fica o botão de importar. Reforce que ele está na aba "Avatar", no topo.`,
      atividade: `Olhe para a tela do Roblox Studio e mostre com o dedo onde fica o botão que serve para trazer o nosso modelo de fora para dentro do jogo. Em que aba ele mora?`,
      gabarito: `O botão é o "Import 3D" e ele fica na aba "Avatar", na faixa de botões do topo do Roblox Studio.`,
    },
    {
      titulo: `Coloque os passos na ordem`,
      tipo: `Ordenação de etapas`,
      tempo: `7 minutos`,
      guiaProfessor: `Leia em voz alta os passos embaralhados e peça que a turma diga a ordem certa, ou entregue tirinhas de papel com cada passo para ordenarem na mesa. Confira juntos no projetor.`,
      atividade: `Coloque na ordem certa: (a) clicar em "Import" para confirmar; (b) escolher o arquivo do meu modelo; (c) clicar no botão "Import 3D"; (d) esperar a barrinha carregar; (e) abrir a aba "Avatar".`,
      gabarito: `A ordem correta é: e (abrir a aba Avatar), c (clicar em Import 3D), b (escolher o arquivo), d (esperar carregar) e a (clicar em Import para confirmar).`,
    },
    {
      titulo: `Importe o meu modelo de verdade`,
      tipo: `Mão na massa individual`,
      tempo: `12 minutos`,
      guiaProfessor: `Acompanhe cada criança usando o checklist da importação. Ajude quem travar a achar a pasta e o arquivo. Celebre cada modelo que aparece na tela.`,
      atividade: `No seu computador, abra um lugar novo com o "Baseplate", use o "Import 3D" para trazer o SEU arquivo e espere até ver a sua criação aparecer no mundo 3D do Roblox.`,
      gabarito: `O aluno conclui quando o próprio modelo aparece na tela 3D e na lista do "Explorer" (lado direito). Sinal de sucesso: a criança consegue ver e girar a câmera ao redor da própria criação.`,
    },
    {
      titulo: `Resgate o modelo com problema`,
      tipo: `Resolução de problema guiada`,
      tempo: `10 minutos`,
      guiaProfessor: `Use o arquivo de exemplo "com problema". Apresente um modelo sem cor e um pequeno demais. Conduza a turma a descobrir a solução de cada caso antes de mostrar.`,
      atividade: `Apareceu um modelo todo branquinho e outro do tamanho de uma formiguinha. O que fazer em cada caso para arrumar?`,
      gabarito: `Modelo sem cor: selecionar a peça e mudar a cor pela propriedade "Color" no painel "Properties". Modelo pequeno: aumentar o número de tamanho/escala no "Import 3D" antes de confirmar, ou usar a ferramenta "Scale" (aba "Model") para crescer depois de importado.`,
    },
    {
      titulo: `Guarde o seu mundo com nome`,
      tipo: `Mão na massa + nomear arquivo`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre o menu "File" maior que "Save to File". Garanta que cada criança salve na Área de Trabalho e dê um nome com o próprio nome. Confira mesa por mesa se o arquivo foi salvo.`,
      atividade: `Salve o seu lugar pela primeira vez: vá em "File", depois "Save to File", escolha a Área de Trabalho e dê um nome que comece com o seu nome (por exemplo: "Maria_meu_mundo"). Clique em "Salvar".`,
      gabarito: `O lugar é salvo como um arquivo na Área de Trabalho com um nome que identifica o aluno. Sinal de sucesso: ao fechar e abrir de novo, o modelo continua lá, mostrando que nada se perdeu.`,
    },
  ],
};
