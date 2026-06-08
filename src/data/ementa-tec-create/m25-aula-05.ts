import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Refinando os Detalhes",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Enriquecer o personagem com técnicas de detalhamento — inserir edge loops, suavizar superfícies e acrescentar pequenos elementos de personalidade — mantendo a malha leve o suficiente para rodar bem em um jogo.`,
  descricao: `Nesta aula o personagem deixa de ser apenas uma blocagem com a forma certa e começa a ganhar vida. Até aqui os alunos montaram a base e modelaram itens; agora eles aprendem a refinar, ou seja, a adicionar detalhes que dão personalidade sem deixar o modelo pesado. Refinar é como passar a tinta final em um desenho a lápis: a estrutura já existe, e agora cuidamos das bordas, das curvas e dos pequenos toques que fazem o personagem ser único.

A ferramenta central da aula é o edge loop, ou anel de arestas. Imagine cortar uma faixa de fita ao redor de um braço: esse corte cria novas arestas que permitem dobrar, arredondar ou esculpir aquela região. Sem edge loops, um modelo tem poucos pontos para puxar e fica sempre quadradão; com edge loops nos lugares certos, o aluno ganha controle para suavizar um ombro, marcar um detalhe ou dar volume a uma parte do corpo.

Os alunos também conhecem a suavização de superfície. No Maya, é possível pré-visualizar como o modelo ficaria mais arredondado pressionando a tecla 3 (modo suavizado) e voltar ao modelo bruto com a tecla 1. É importante entender que essa suavização é uma pré-visualização: o que conta para o jogo é a malha real, com poucos polígonos. Por isso a aula tem uma regra de ouro: detalhar com inteligência, usando edge loops apenas onde fazem diferença, para que a malha não fique pesada demais.

Por fim, cada aluno acrescenta pequenos elementos de personalidade: uma sobrancelha marcada, uma orelha pontuda, um botão na roupa, uma antena de robô. São toques simples que transformam um boneco genérico no personagem do jogo daquele aluno. Ao final da hora, o personagem estará mais detalhado, mais arredondado nas partes certas e ainda leve, pronto para as próximas etapas de preparação dos assets.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e funcionando (um por aluno)`,
    `Projetor ou TV para o professor demonstrar o detalhamento na tela grande`,
    `Arquivo de exemplo .mb ou .ma com o personagem das aulas anteriores já modelado`,
    `Imagem de antes e depois mostrando o mesmo modelo sem e com edge loops e suavização`,
    `Folha impressa com o passo a passo das teclas (1, 2, 3 e o atalho do Insert Edge Loop)`,
    `Mouse com três botões e scroll, para inserir arestas e orbitar a câmera com facilidade`,
  ],
  conceitosChave: [
    `Edge loop (anel de arestas) — faixa contínua de arestas que dá a volta no modelo e cria novos pontos para moldar e arredondar uma região.`,
    `Insert Edge Loop — ferramenta do Maya que adiciona um novo anel de arestas no lugar onde você clica.`,
    `Suavização (smooth preview) — pré-visualização que mostra o modelo mais arredondado; ativa com a tecla 3 e volta ao bruto com a tecla 1.`,
    `Topologia — a forma como as faces e arestas estão organizadas na malha; uma boa topologia facilita detalhar e deformar o modelo.`,
    `Malha leve (low poly) — modelo com poucos polígonos, que roda rápido no jogo; o oposto de uma malha pesada.`,
    `Detalhe de personalidade — pequeno elemento (orelha, botão, antena) que torna o personagem único e reconhecível.`,
    `Vertex (vértice) — ponto onde as arestas se encontram; é puxando vértices que damos forma fina ao detalhe.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya. Precisa dominar três ações simples e a ideia por trás delas. A primeira é inserir um edge loop: é cortar um anel de arestas ao redor do modelo para ganhar pontos de controle. No Maya, o caminho é o menu superior "Mesh Tools", opção "Insert Edge Loop"; depois é só passar o mouse sobre o modelo e clicar onde quer o corte. A segunda é a suavização: com o objeto selecionado, a tecla 3 mostra a versão arredondada (pré-visualização), a tecla 1 volta ao modelo bruto e a tecla 2 mostra os dois juntos. A terceira é puxar vértices: aperte a tecla W para mover e arraste os pontos para criar o detalhe. A regra de ouro da aula: edge loop só onde faz diferença, para a malha não ficar pesada. Antes da aula, abra o arquivo do personagem e teste inserir um ou dois edge loops e apertar 1 e 3 para se acostumar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): mostre no projetor a imagem de antes e depois do mesmo personagem, um quadradão e o outro arredondado e com detalhes. Pergunte: "O que mudou? Como deixar o modelo menos quadrado?" Conduza até a palavra detalhe e até a ideia de que dá para arredondar sem refazer tudo. Relembre que eles já têm a base do personagem pronta.

Conteúdo novo guiado (15 min): na tela grande, abra o personagem. Demonstre a suavização: selecione o corpo, aperte a tecla 3 (fica arredondado), depois a tecla 1 (volta ao bruto). Explique que a tecla 3 é só uma pré-visualização. Agora demonstre o edge loop: vá em "Mesh Tools", "Insert Edge Loop", passe o mouse sobre o braço e clique para criar um anel. Mostre que, com mais arestas, dá para puxar vértices (tecla W) e moldar um ombro ou um músculo. Por fim, adicione um detalhe de personalidade: crie uma esfera pequena com "Create", "Polygon Primitives", "Sphere" e posicione como um botão ou um olho com a tecla W.

Mão na massa (25 min): cada aluno refina o próprio personagem. Roteiro: 1) inserir de dois a quatro edge loops nas regiões que querem moldar (ombro, joelho, rosto); 2) puxar alguns vértices com a tecla W para arredondar ou marcar uma forma; 3) usar as teclas 1 e 3 para comparar o bruto com o suavizado; 4) acrescentar pelo menos um detalhe de personalidade (orelha, botão, antena, sobrancelha) com uma primitiva pequena. Circule lembrando a regra de ouro: poucos edge loops, nos lugares certos.

Desafio e compartilhar (10 min): proponha o desafio "menos é mais". Cada aluno conta quantos edge loops usou e tenta explicar por que cada um foi necessário. Faça uma rodada rápida: cada um mostra ao colega o detalhe de personalidade que criou e diz o que ele representa no personagem. Peça para salvar o arquivo com o nome do aluno.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Para edge loop, diga: "É como cortar uma fita ao redor do braço; cada corte te dá novos pontos para dobrar e moldar." Para suavização, diga: "A tecla 3 é como apertar um botão de visualizar; mostra como ficaria liso, mas o jogo ainda usa o modelo bruto." Para a malha leve, compare com uma mochila: "Quanto mais coisa você enfia, mais pesada fica; no jogo, polígono demais deixa tudo lento, então a gente só põe o necessário." Reforce sempre: detalhe é o que faz o personagem ser do aluno, e não de mais ninguém.

## Erros comuns e como ajudar

O erro mais comum é inserir edge loops demais, deixando a malha pesada; lembre a regra de ouro e peça para apagar os anéis que não ajudam. Outro erro é confundir a suavização da tecla 3 com o modelo final; explique que é só pré-visualização e que o jogo usa o bruto. Muitos puxam o vértice errado e deformam tudo; ensine a apertar Ctrl Z para desfazer e a clicar com calma no ponto certo. Há quem não consiga ver as arestas; oriente a apertar a tecla 4 para o modo de arame (wireframe) e a tecla 5 para voltar ao sólido. Por fim, se o aluno se perder na cena, ensine a apertar a tecla F com a peça selecionada para a câmera focar nela.`,
  exercicios: [
    {
      titulo: `Antes e depois: o que mudou?`,
      tipo: `Roda de conversa`,
      tempo: `5 min`,
      guiaProfessor: `Use no aquecimento. Mostre no projetor a imagem do mesmo personagem quadradão e depois arredondado e detalhado. Conduza a turma a perceber que dá para refinar sem refazer o modelo. Anote no quadro as palavras detalhe, arredondar e personalidade.`,
      atividade: `Observe as duas versões do mesmo personagem que o professor mostrar. Diga em uma frase o que mudou da primeira para a segunda e aponte um detalhe que dá personalidade ao modelo.`,
      gabarito: `Respostas válidas: "Ficou mais arredondado e menos quadrado", "Ganhou uma orelha e um botão", "As curvas ficaram mais suaves". Conclusão esperada: o personagem foi refinado com suavização, edge loops e pequenos detalhes, sem precisar começar do zero. O aluno deve citar pelo menos um detalhe de personalidade.`,
    },
    {
      titulo: `Ligar e desligar a suavização`,
      tipo: `Prática guiada`,
      tempo: `8 min`,
      guiaProfessor: `Faça junto no projetor. Garanta que cada aluno selecione o corpo antes de apertar as teclas. Reforce que a tecla 3 é pré-visualização e a tecla 1 é o modelo real do jogo.`,
      atividade: `Abra sua cena, selecione o corpo do personagem e aperte a tecla 3 para ver a versão suavizada. Depois aperte a tecla 1 para voltar ao modelo bruto. Repita algumas vezes e anote qual versão o jogo realmente usa.`,
      gabarito: `Procedimento fixo: clicar no corpo para selecionar; apertar a tecla 3 (modelo fica arredondado, é só pré-visualização); apertar a tecla 1 (volta ao bruto). Resposta esperada: "O jogo usa a versão bruta, da tecla 1; a tecla 3 só mostra como ficaria liso." O aluno deve conseguir alternar entre os dois modos.`,
    },
    {
      titulo: `Inserindo edge loops`,
      tipo: `Prática na ferramenta`,
      tempo: `12 min`,
      guiaProfessor: `Mostre o caminho "Mesh Tools" e "Insert Edge Loop". Confirme que cada aluno consegue clicar sobre o modelo para criar o anel. Reforce a regra de ouro: poucos loops, nos lugares certos.`,
      atividade: `No Maya, use a ferramenta de inserir anel de arestas para criar de dois a três edge loops no seu personagem, nas regiões que você quer moldar (por exemplo, o ombro, o joelho ou o rosto). Depois apague qualquer anel que você ache que não foi necessário.`,
      gabarito: `Caminho correto: menu "Mesh Tools", opção "Insert Edge Loop"; passar o mouse sobre o modelo e clicar onde quer o corte. O resultado deve ter de dois a três anéis de arestas novos em regiões úteis (ombro, joelho, rosto), e não espalhados sem motivo. Sucesso = mais pontos de controle nas regiões certas, mantendo a malha leve.`,
    },
    {
      titulo: `Moldando com vértices`,
      tipo: `Exercício individual`,
      tempo: `12 min`,
      guiaProfessor: `Reforce a tecla W para mover e o Ctrl Z para desfazer. Mostre a tecla 4 (wireframe) para enxergar melhor as arestas e a tecla 5 para voltar ao sólido. Circule ajudando quem deformar o modelo.`,
      atividade: `Com os edge loops criados, puxe alguns vértices usando a tecla W para arredondar ou marcar uma forma do seu personagem (por exemplo, dar volume a um ombro ou afinar uma cintura). Use as teclas 1 e 3 para comparar o resultado bruto com o suavizado.`,
      gabarito: `Procedimento: entrar no modo de vértices, clicar em um vértice, apertar a tecla W e arrastar com cuidado para moldar a forma; usar Ctrl Z se errar. Ao apertar a tecla 3, a forma moldada deve ficar mais suave e coerente. Resultado válido: uma região do corpo ganhou volume ou definição sem que o modelo todo ficasse deformado.`,
    },
    {
      titulo: `Detalhe de personalidade`,
      tipo: `Desafio`,
      tempo: `13 min`,
      guiaProfessor: `Incentive a criatividade, mas lembre que o detalhe deve ser simples para não pesar a malha. Mostre como criar uma primitiva pequena e posicioná-la. Conduza a rodada final de compartilhamento e peça para salvar o arquivo.`,
      atividade: `Acrescente pelo menos um detalhe de personalidade ao seu personagem: uma orelha pontuda, um botão na roupa, uma antena de robô ou uma sobrancelha marcada. Use uma primitiva pequena (esfera, cubo ou cilindro) e posicione-a com a tecla W. Conte quantos edge loops usou no total e salve o arquivo com o seu nome.`,
      gabarito: `Caminho para o detalhe: menu "Create", "Polygon Primitives", escolher "Sphere", "Cube" ou "Cylinder"; ajustar o tamanho com a tecla R e posicionar com a tecla W. O personagem deve ter pelo menos um detalhe de personalidade visível e bem posicionado, com a malha ainda leve (poucos edge loops, todos justificados). O arquivo deve estar salvo com o nome do aluno. Resposta esperada do desafio "menos é mais": o aluno consegue explicar por que cada edge loop foi necessário.`,
    },
  ],
};
