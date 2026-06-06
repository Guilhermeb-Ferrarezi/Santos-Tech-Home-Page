import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Modelo pronto pra imprimir",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada criança faz os últimos ajustes, salva e exporta o modelo no formato correto para impressão 3D, fechando o entregável do mês.`,
  descricao: `Esta é a aula de fechamento do mês! Durante quatro semanas as crianças planejaram uma peça no papel, aprenderam a mexer no Maya, construíram a forma, colocaram detalhes e capricharam no acabamento. Agora chegou a hora mais esperada: deixar o modelo pronto de verdade para a impressora 3D. Significa conferir tudo uma última vez, salvar o arquivo do jeito certo e exportar no formato que a impressora entende, que é o STL.

O STL é como uma "foto da casca" do modelo. A impressora 3D não enxerga as cores, nem os menus do Maya: ela só quer saber o formato da superfície da peça, ou seja, por onde passa a casquinha do objeto. Por isso a gente exporta o trabalho do Maya para esse formato simples e universal, que quase toda impressora consegue ler.

Antes de exportar, a turma faz um último checklist (que elas já conheceram na aula passada): a peça precisa estar fechada (sem buracos), com o tamanho certo, apoiada no chão da cena e com a história centralizada. Depois, cada criança aprende o caminho exato para salvar o projeto do Maya e gerar o arquivo STL. No final, todo mundo apresenta a peça finalizada para a turma e deixa o arquivo guardado na pasta combinada, pronto para virar um objeto real.

Como é a última aula do mês, reserve um clima de celebração. Esse modelo é o entregável do mês inteiro e representa muito esforço. Valorize cada peça, mesmo as mais simples, e mostre que todas estão prontas para a aventura final: sair da tela e ganhar vida na impressora.`,
  materiais: [
    `Computadores com o Maya aberto, um para cada criança, com o projeto da peça do mês já salvo`,
    `Projetor ligado para o professor mostrar o caminho dos menus na tela grande`,
    `Um exemplo de peça já exportada em STL para a turma ver como fica o arquivo pronto`,
    `Uma pasta combinada no computador (ou pen drive) chamada "Pecas-Para-Imprimir" para guardar os arquivos`,
    `Cartaz ou slide com o "Checklist da Impressora" da aula 7 para conferir item por item`,
    `Folha de "Crachá da Peça" para cada criança anotar o nome do arquivo, o tamanho e o autor`,
    `Opcional: uma peça impressa de verdade de aulas anteriores para mostrar o resultado final`,
  ],
  conceitosChave: [
    `Exportar — é tirar o trabalho de dentro do Maya e salvar em um formato que outro programa, como o da impressora, consegue abrir.`,
    `STL — é o tipo de arquivo que a impressora 3D entende; ele guarda só o formato da casquinha do objeto, sem cor.`,
    `Salvar o projeto — é guardar o arquivo original do Maya para você poder abrir e mexer de novo depois.`,
    `Formato de arquivo — é o "sobrenome" do arquivo (como .mb ou .stl) que diz para o computador que tipo de coisa é aquela.`,
    `Checklist — é uma listinha de conferência; você marca cada item para ter certeza de que não esqueceu nada antes de imprimir.`,
    `Entregável — é o trabalho final pronto que mostra tudo o que você aprendeu no mês; aqui é o modelo pronto para imprimir.`,
    `Fechado (estanque) — é quando a peça não tem nenhum buraco na superfície, como um balão cheio que não deixa o ar escapar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya. Esta aula tem dois objetivos simples: salvar o projeto e exportar em STL. O STL é o formato que a impressora lê; ele só guarda a superfície da peça, sem cores. Antes de exportar, é preciso conferir o checklist da aula 7 (peça fechada, tamanho certo, apoiada no chão). Faça você mesmo o processo uma vez antes da aula, no computador da escola, para já saber onde ficam os menus. Tenha um exemplo de STL pronto para mostrar. Combine com a turma uma pasta única, por exemplo "Pecas-Para-Imprimir", para todos guardarem o arquivo no mesmo lugar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Abra o checklist da aula 7 no projetor. Peça para cada criança abrir o seu projeto no Maya (menu "File", depois "Open Scene") e olhar a própria peça. Pergunte em voz alta: "Está fechada? Apoiada no chão? Do tamanho certo?". Cada um responde sobre a sua peça.

Conteúdo novo guiado (15 min): No projetor, mostre o caminho do salvamento. Clique em "File", depois "Save Scene As". Mostre que o nome do arquivo termina em .mb (esse é o arquivo do Maya, para mexer depois). Agora mostre a exportação: selecione a peça clicando nela, vá em "File", depois "Export Selection". Na janelinha que abre, no campo "Files of type" escolha "STL_DCE" (ou a opção que tiver STL no nome). Digite um nome sem espaço e sem acento, por exemplo "espada-joao", e clique em "Export Selection". Explique que agora existem dois arquivos: o do Maya e o STL.

Mão na massa (25 min): Cada criança repete os passos no próprio computador. Primeiro salva o projeto (File, Save Scene As). Depois seleciona a peça e exporta (File, Export Selection, tipo STL). Circule pela sala ajudando um a um. Confira com cada criança se o arquivo STL apareceu na pasta combinada. Quem terminar preenche o "Crachá da Peça" com o nome do arquivo, o tamanho e o seu nome de autor.

Desafio e compartilhar (10 min): Cada criança mostra a peça finalizada no projetor por trinta segundos e diz o que mais gostou de criar. A turma bate palma. Encerre lembrando que esses arquivos vão virar objetos de verdade na impressora.

## Como explicar para crianças

Use analogias do dia a dia. Diga que exportar em STL é como tirar uma foto da casquinha do objeto para mandar pela internet: a impressora só precisa do formato, não das cores. Compare o arquivo .mb com um caderno de rascunho (dá para apagar e mexer) e o STL com uma carta já fechada no envelope, pronta para enviar. Reforce que salvar o projeto é como guardar o desenho na mochila para não perder. Fale que o nome do arquivo é a identidade da peça, por isso ele precisa ser claro e sem acento, para nenhum computador se confundir.

## Erros comuns e como ajudar

O erro mais comum é exportar sem selecionar a peça primeiro: o STL sai vazio. Sempre clique na peça antes de "Export Selection" e confira se ela ficou destacada. Outro erro é usar acento ou espaço no nome do arquivo, o que pode dar problema na impressora; peça nomes simples como "robo-ana". Algumas crianças confundem "Save" com "Export" e acham que já exportaram só porque salvaram; mostre a diferença na pasta, onde aparecem os dois arquivos. Tem quem feche o Maya sem salvar e perca o trabalho; lembre todos de salvar antes de exportar. Por fim, alguém pode esquecer de guardar o STL na pasta combinada; confira a pasta junto com a criança antes de ela apresentar.`,
  exercicios: [
    {
      titulo: `Caça ao formato certo`,
      tipo: `Quiz rápido oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça as perguntas em voz alta para a turma toda responder junto. É um aquecimento para fixar qual formato a impressora usa. Aceite respostas em coro e comemore os acertos.`,
      atividade: `Responda rápido: 1) Qual é o formato de arquivo que a impressora 3D entende? 2) Esse formato guarda as cores da peça? 3) Para que serve o arquivo .mb do Maya?`,
      gabarito: `1) O formato STL. 2) Não, ele guarda só o formato da casquinha (a superfície), sem cores. 3) Serve para guardar o projeto original do Maya, para você abrir e mexer de novo depois.`,
    },
    {
      titulo: `Conferindo o checklist da impressora`,
      tipo: `Conferência guiada com a própria peça`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre o checklist no projetor e leia item por item. Cada criança olha a própria peça no Maya e marca mentalmente. Passe pela sala confirmando. Se alguma peça tiver buraco ou estiver flutuando, ajude a corrigir antes de exportar.`,
      atividade: `Olhe a sua peça e confira: ela está fechada (sem buracos)? Está apoiada no chão da cena? Está do tamanho que você planejou? Marque um certo para cada item e me chame se algum estiver faltando.`,
      gabarito: `A peça deve passar nos três itens: fechada, apoiada no chão e no tamanho certo. Se faltar algum, a correção é fechar buracos, descer a peça até o chão ou ajustar a escala antes de exportar. Só está pronta quando os três estão com certo.`,
    },
    {
      titulo: `Salvando o projeto do Maya`,
      tipo: `Prática individual no computador`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe cada criança no caminho do menu. O objetivo é salvar o arquivo .mb com um nome claro, sem acento e sem espaço. Circule conferindo se o arquivo foi salvo na pasta combinada.`,
      atividade: `No Maya, clique em "File" e depois em "Save Scene As". Digite um nome simples para o seu projeto, como "espada-joao", sem acento e sem espaço. Clique em salvar e me mostre que o arquivo apareceu.`,
      gabarito: `O caminho correto é File, depois Save Scene As. O arquivo salvo termina em .mb e tem um nome simples, sem acento e sem espaço. O sucesso é o arquivo do Maya aparecer na pasta combinada e a criança conseguir abri-lo de novo.`,
    },
    {
      titulo: `Exportando em STL`,
      tipo: `Prática individual passo a passo`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o coração da aula. Reforce que é preciso selecionar a peça antes. Confira em cada computador se o arquivo STL realmente apareceu na pasta. O erro mais comum é exportar sem selecionar, gerando arquivo vazio.`,
      atividade: `Clique na sua peça para selecioná-la (ela fica destacada). Vá em "File", depois "Export Selection". Em "Files of type", escolha a opção com STL no nome. Dê um nome sem acento, clique em "Export Selection" e confira se o arquivo STL apareceu na pasta.`,
      gabarito: `A criança seleciona a peça, vai em File, Export Selection, escolhe o tipo STL, dá um nome simples e exporta. O resultado correto é um arquivo .stl na pasta combinada, ao lado do arquivo .mb. Se o STL estiver vazio, ela exportou sem selecionar a peça e precisa repetir selecionando primeiro.`,
    },
    {
      titulo: `Crachá da peça e apresentação`,
      tipo: `Registro e apresentação para a turma`,
      tempo: `15 minutos`,
      guiaProfessor: `Feche a aula com celebração. Cada criança preenche o crachá e apresenta a peça no projetor por trinta segundos. Garanta que todos guardaram o STL na pasta combinada. Valorize cada trabalho, mesmo os mais simples, pois é o entregável do mês.`,
      atividade: `Preencha o "Crachá da Peça" com: nome do arquivo STL, tamanho aproximado da peça e seu nome de autor. Depois mostre a peça finalizada para a turma e conte em uma frase o que você mais gostou de criar.`,
      gabarito: `O crachá deve ter os três campos preenchidos: nome do arquivo (sem acento, terminando em .stl), tamanho da peça e nome do autor. A apresentação está completa quando a criança mostra a peça, diz uma frase sobre ela e o arquivo STL já está guardado na pasta combinada, pronto para a impressora.`,
    },
  ],
};
