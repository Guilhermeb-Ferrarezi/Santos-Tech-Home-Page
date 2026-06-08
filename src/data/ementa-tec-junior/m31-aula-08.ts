import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Pronto pra Imprimir!",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Fazer a revisão final do modelo no Blender, exportar o arquivo pronto para impressão e apresentar a peça finalizada para a turma, celebrando o trabalho do mês.`,
  descricao: `Hoje é o grande dia do mês! Depois de imaginar a ideia, planejar a peça, modelar as primeiras formas, montar com capricho, lixar os cantos, dar os detalhes e fazer o teste de impressão, cada criança vai finalmente deixar o seu modelo pronto pra imprimir de verdade na Bambu Lab. Esta aula é a festa de fechamento: a hora de revisar com carinho, salvar o arquivo do jeito certo e mostrar a criação para todo mundo.

O foco da aula não é criar coisas novas, e sim conferir e exportar. As crianças vão olhar o modelo com olhos de inspetor: será que a peça está fechada (sem buracos)? Será que ela fica de pé sozinha? Será que tem alguma parte muito fininha que pode quebrar? Depois dessa conferência final, o professor mostra como exportar o arquivo no formato que a impressora entende, o STL. Exportar é como tirar uma foto do modelo e guardar num envelope que a impressora 3D sabe abrir.

Para o professor iniciante, a boa notícia é que exportar no Blender é simples: são poucos cliques no menu Arquivo (File). O segredo está em ensinar a criança a olhar a peça antes de exportar, usando os hábitos que ela já treinou nas aulas anteriores. Você não precisa dominar o Blender inteiro; precisa apenas guiar a revisão e os cliques certos, com calma e na ordem.

O fechamento é tão importante quanto a parte técnica. Cada criança vai apresentar a sua peça em poucas frases: o que é, como foi feita e do que mais se orgulha. Esse momento de compartilhar valoriza o esforço de todo o mês e prepara a turma para a emoção de ver, em breve, o brinquedo saindo quentinho da Bambu Lab.`,
  materiais: [
    `Computadores com o Blender já aberto e o arquivo .blend de cada criança salvo`,
    `Projetor ou TV para o professor demonstrar a exportação passo a passo`,
    `Um modelo de exemplo já finalizado e exportado pelo professor (.blend e .stl prontos)`,
    `Uma peça de verdade impressa na Bambu Lab para mostrar o resultado final`,
    `Pasta (ou área no computador) organizada para salvar os arquivos .stl da turma`,
    `Cartões ou folha com 3 perguntas para a apresentação (O que é? Como fiz? Do que me orgulho?)`,
    `Adesivos ou carimbos de "Modelo Pronto pra Imprimir" para premiar cada criança`,
  ],
  conceitosChave: [
    `Exportar — é salvar o modelo num formato especial pra outro programa ou máquina conseguir abrir, como guardar um desenho num envelope que a impressora sabe ler.`,
    `STL — é o tipo de arquivo que a impressora 3D entende; é a "língua" que a Bambu Lab fala.`,
    `Revisão final — é o momento de olhar a peça com calma e conferir se está tudo certo antes de mandar imprimir.`,
    `Modelo fechado — é quando a peça não tem nenhum buraquinho na casca, igual a um balão sem furo que segura o ar.`,
    `Base estável — é a parte de baixo da peça, bem chapada, que faz o modelo ficar de pé sozinho sem cair.`,
    `Espessura — é a grossura das partes; se ficar fina demais, igual papel, pode quebrar na impressão.`,
    `Entregável — é a criação final pronta deste mês: o modelo salvo e prontinho pra ir pra impressora.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula consolida o entregável do mês: o modelo pronto pra impressão. Você não vai modelar nada novo; vai guiar a revisão final e a exportação do arquivo STL. Antes da aula, abra o Blender, abra um modelo seu e treine o caminho de exportação uma vez: menu Arquivo (File) no canto superior esquerdo, depois Exportar (Export), depois Stl (.stl). Salve numa pasta de teste para ver que funciona. Conhecer esse caminho de cor deixa você tranquilo na frente das crianças. Tenha também uma peça de verdade já impressa na Bambu Lab em cima da mesa: é o que mais empolga a turma.

## Passo a passo da aula

Aquecimento (10 min): Receba a turma com a peça impressa de verdade na mão e pergunte: "Quem está pronto pra imprimir o seu modelo hoje?". Faça uma revisão rápida em roda: relembre o que é uma peça fechada, uma base que fica de pé e uma parede grossinha. Peça que cada criança abra o seu arquivo .blend (menu Arquivo, depois Abrir Recente / Open Recent).

Conteúdo novo guiado (15 min): No projetor, mostre a revisão final em três olhadas. Primeira: gire a peça segurando o botão do meio do mouse (a rodinha) para olhar por todos os lados e procurar buracos. Segunda: pressione a tecla N para abrir o painel lateral e conferir se a peça está apoiada no chão da grade. Terceira: olhe partes finas, como orelhas ou rabos. Depois, demonstre a exportação: clique em Arquivo (File), desça até Exportar (Export) e escolha Stl (.stl). Na janela que abre, marque a caixinha "Selection Only" se quiser exportar só a peça selecionada, dê um nome simples (sem acento e sem espaço, como "robo_lucas") e clique no botão azul Exportar STL (Export STL).

Mão na massa (25 min): Cada criança faz a sua própria revisão nas três olhadas e, com você passando de mesa em mesa, exporta o seu arquivo STL para a pasta da turma. Confira junto de cada uma se o arquivo .stl apareceu na pasta. Quem terminar antes ajuda o colega ou melhora um detalhe pequeno.

Desafio e compartilhar (10 min): Cada criança mostra a sua peça na tela para a turma e responde três perguntas: O que é? Como eu fiz? Do que mais me orgulho? Entregue o adesivo "Modelo Pronto pra Imprimir" e comemore com palmas. Conte que, em breve, esses arquivos vão para a Bambu Lab virar brinquedo de verdade.

## Como explicar para crianças

Use a analogia do envelope: "Salvar STL é como colocar o seu desenho num envelope mágico que só a impressora sabe abrir". Para a revisão, fale em "olhos de detetive": procurar buraquinhos escondidos. Para a base, diga "a peça precisa ficar de pé sozinha, igual a um boneco que não cai". Para a espessura, compare partes finas com biscoito: "se for fininho demais, quebra fácil". Sempre celebre cada exportação como uma conquista: "Pronto, o seu modelo está dentro do envelope!".

## Erros comuns e como ajudar

O erro mais comum é a criança colocar acento ou espaço no nome do arquivo; peça nomes simples como "gato_ana". Outra confusão é clicar em Salvar (Save) em vez de Exportar (Export); lembre que Salvar guarda o .blend para mexer depois, e Exportar cria o .stl para a impressora. Algumas crianças esquecem de selecionar a peça antes e exportam vazio; oriente clicar na peça (ela fica com contorno laranja) antes de exportar, ou desmarcar "Selection Only". Há quem ache buracos imaginários e queira mexer demais; lembre que hoje o foco é conferir e salvar, não refazer. Por fim, se o arquivo não aparece na pasta, confira juntos o caminho escolhido na janela de exportação antes de clicar no botão azul.`,
  exercicios: [
    {
      titulo: `Olhos de Detetive`,
      tipo: `Observação guiada`,
      tempo: `5 min`,
      guiaProfessor: `Projete um modelo simples com um buraco proposital e peça que a turma encontre o problema girando a peça com a rodinha do mouse.`,
      atividade: `Olhe o modelo na tela girando por todos os lados e diga em voz alta: a peça está fechada ou tem um buraquinho escondido?`,
      gabarito: `A criança identifica o buraco na casca e entende que uma peça precisa estar fechada, sem furos, para imprimir bem. Resposta certa: "Tem um buraco, precisa fechar antes de imprimir".`,
    },
    {
      titulo: `Fica de Pé Sozinho?`,
      tipo: `Teste prático`,
      tempo: `5 min`,
      guiaProfessor: `Peça que cada criança gire o próprio modelo e confira se a base está apoiada no chão da grade, sem flutuar e sem afundar.`,
      atividade: `Olhe a parte de baixo da sua peça: ela tem uma base chapada que faz o modelo ficar de pé sozinho? Mostre essa base ao professor.`,
      gabarito: `A criança aponta a base plana apoiada na grade. Se o modelo estiver flutuando ou tombando, ela reconhece que precisa apoiar a base no chão antes de exportar.`,
    },
    {
      titulo: `Caça às Partes Finas`,
      tipo: `Inspeção`,
      tempo: `5 min`,
      guiaProfessor: `Mostre exemplos de partes finas (orelhas, rabos, antenas) e explique a analogia do biscoito que quebra. Ajude a criança a localizar essas partes no seu modelo.`,
      atividade: `Procure no seu modelo as partes mais fininhas. Aponte uma e diga se ela parece grossinha e firme ou fina demais como papel.`,
      gabarito: `A criança encontra ao menos uma parte fina e avalia a espessura. Resposta correta: identifica partes muito finas como risco de quebra e percebe quais já estão firmes.`,
    },
    {
      titulo: `Salvar ou Exportar?`,
      tipo: `Quiz de conceito`,
      tempo: `5 min`,
      guiaProfessor: `Faça perguntas rápidas para diferenciar Salvar (guarda o .blend) de Exportar (cria o .stl). Use a analogia do envelope mágico da impressora.`,
      atividade: `Responda: para mandar a peça pra impressora 3D, eu uso Salvar ou Exportar? E qual tipo de arquivo a impressora entende?`,
      gabarito: `Uso Exportar, não Salvar. O arquivo que a impressora entende é o STL. Salvar guarda o .blend para mexer depois; Exportar cria o STL para a Bambu Lab.`,
    },
    {
      titulo: `Exportar de Verdade e Apresentar`,
      tipo: `Projeto final`,
      tempo: `10 min`,
      guiaProfessor: `Acompanhe cada criança no caminho Arquivo, depois Exportar, depois Stl (.stl). Confira o nome sem acento e sem espaço e veja se o .stl apareceu na pasta. Depois conduza a apresentação com as três perguntas.`,
      atividade: `Exporte o seu modelo: clique em Arquivo (File), depois Exportar (Export), depois Stl (.stl), dê um nome simples e clique em Exportar STL. Depois mostre a peça pra turma e responda: o que é, como fiz e do que me orgulho?`,
      gabarito: `O arquivo .stl da criança aparece na pasta da turma com nome simples, sem acento e sem espaço, e a peça está fechada e de pé. A criança apresenta o modelo respondendo às três perguntas. Entregável do mês concluído.`,
    },
  ],
};
