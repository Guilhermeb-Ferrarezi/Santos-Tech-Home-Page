import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Resgatando os Modelos do Maya",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Abrir no Maya os modelos 3D dos personagens do jogo e exportá-los no formato correto (STL ou OBJ) para impressão, verificando antes se a malha está fechada e sem buracos.`,
  descricao: `Na aula passada a turma entendeu a missão do mês: tirar os personagens do jogo da tela e trazê-los para o mundo real com a impressão 3D. Hoje começa o trabalho de verdade. Cada aluno volta ao Maya, o programa onde modelou os personagens e os itens do jogo no início do ano, e resgata esses arquivos. O objetivo não é modelar nada novo, e sim recuperar o que já existe e prepará-lo para uma viagem: sair do Maya e chegar, inteiro e fechado, até o programa de impressão.

A grande novidade da aula é entender que a impressora 3D não fala a mesma língua do Maya. O Maya salva em formatos próprios, cheios de informações de animação, materiais e câmeras que a impressora nem usa. Para imprimir, precisamos de um formato simples, que descreva só a forma sólida do objeto: a malha. Os dois formatos mais usados para isso são o STL e o OBJ. Exportar é justamente traduzir o modelo para essa língua que a impressora e o Bambu Studio entendem.

Antes de exportar, porém, existe um cuidado que separa uma peça que imprime bem de uma peça que dá problema: a malha precisa estar fechada e sem buracos. Pense num modelo como um balão. Se o balão tiver um furo, ele não segura o ar; se a malha tiver um buraco, a impressora não sabe o que é dentro e o que é fora, e a peça sai falhada. Por isso o aluno aprende hoje a olhar o modelo com olhos de detetive, caçando faces abertas e bordas soltas antes de seguir adiante.

Ao fim da aula, cada aluno terá ao menos um personagem resgatado do Maya, verificado e exportado em STL ou OBJ, salvo numa pasta organizada com o próprio nome. Esse arquivo é a matéria-prima das próximas aulas, quando ele entra no Bambu Studio, vira fatias e finalmente sobe para a impressora. Sem esse arquivo bem exportado, nada do resto do mês acontece, então capricho e organização são parte da nota de hoje.`,
  materiais: [
    `Computadores com o Maya instalado e aberto (um por aluno), e com o Bambu Studio também instalado para conferência rápida no fim`,
    `Projetor ou TV grande para o professor mostrar cada clique do Maya na tela`,
    `Arquivos de exemplo: um modelo de personagem simples já pronto (.mb ou .ma) para quem não encontrar o seu, e um modelo de propósito com um buraco na malha para treinar a verificação`,
    `Pasta de rede ou pen drive onde os alunos guardaram os modelos feitos no início do ano, caso não estejam no computador local`,
    `Uma pasta criada na área de trabalho de cada máquina com o nome do aluno, para salvar os arquivos exportados`,
    `Ficha impressa com os passos de exportação (File, Export Selection, formato STL ou OBJ) colada na bancada`,
    `Peça já impressa de um personagem, passando de mão em mão, para lembrar a turma de onde tudo isso vai chegar`,
  ],
  conceitosChave: [
    `Malha (mesh) — a casca do modelo 3D, feita de muitos polígonos ligados, que forma a superfície do personagem.`,
    `Polígono — cada pedacinho plano (geralmente quadrado ou triângulo) que, somado a outros, monta a malha do objeto.`,
    `Exportar — traduzir e salvar o modelo num formato diferente para que outro programa, como a impressora, consiga abrir.`,
    `STL — formato de arquivo que descreve só a forma sólida do objeto em triângulos; é o preferido para impressão 3D.`,
    `OBJ — outro formato de exportação para 3D, também aceito na impressão, que pode guardar cor e textura além da forma.`,
    `Malha fechada (watertight) — modelo sem buracos nem bordas soltas, como um balão inteiro que segura o ar; é o que a impressora precisa.`,
    `Buraco na malha — falha onde falta uma face, deixando a casca aberta; faz a impressora se confundir e a peça sair com defeito.`,
  ],
  treinamento: `## O que o professor precisa saber

O Maya é o programa de modelagem 3D que a turma usou no começo do ano para criar os personagens. Hoje você não vai modelar, só abrir os arquivos existentes, verificar a malha e exportar. Antes da aula, faça o caminho completo uma vez: abra o Maya, abra um modelo, selecione o objeto e exporte em STL. O menu que importa é o "File" (arquivo), no canto superior esquerdo. Para exportar só o personagem, use "File", depois "Export Selection" (exportar seleção), e no campo de tipo de arquivo escolha "STL_DCE" para STL ou "OBJexport" para OBJ. Se essas opções não aparecerem, é porque o plug-in está desligado: abra "Windows", "Settings/Preferences", "Plug-in Manager" e marque "Loaded" em "stlTranslator.mll" e "objExport.mll". Faça isso nas máquinas antes da aula para não perder tempo. Para verificar buracos, o caminho é selecionar o objeto, abrir o menu "Mesh Display" e usar "Border Edges" (bordas de borda), que pinta de grosso qualquer borda aberta; numa malha fechada nada fica destacado. Outra forma é o menu "Mesh", "Cleanup", que aponta problemas. Tenha em mãos o modelo de exemplo com um buraco de propósito: ele torna a verificação visível e divertida.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a missão do mês mostrando a peça já impressa de mão em mão. Pergunte: "para a impressora entender nosso personagem, em que língua precisamos falar com ela?". Conduza até a ideia de que o Maya fala uma língua e a impressora fala outra, e que hoje vamos traduzir, ou seja, exportar.

Conteúdo novo guiado (15 min): no projetor, abra o Maya e abra um modelo de personagem com "File" e "Open Scene". Clique no personagem para selecioná-lo (ele fica destacado). Mostre a verificação: menu "Mesh Display", opção "Border Edges". Abra o modelo com buraco para a turma ver as bordas abertas ficarem grossas. Volte ao modelo bom, sem destaque. Agora exporte: "File", "Export Selection", escolha o tipo "STL_DCE", dê um nome com o nome do aluno e salve na pasta dele. Repita rápido escolhendo "OBJexport" para mostrar o segundo formato.

Mão na massa (25 min): cada aluno abre o seu modelo no Maya. Quem não achar usa o arquivo de exemplo. Todos selecionam o personagem, ligam "Border Edges" e confirmam que a malha está fechada (nada destacado). Em seguida exportam em STL com "File" e "Export Selection", salvando na pasta com o próprio nome. Circule conferindo a seleção e o formato. Quem terminar exporta também em OBJ.

Desafio e compartilhar (10 min): desafie a turma a abrir o arquivo STL exportado no Bambu Studio só para ver o personagem aparecer lá dentro, provando que a tradução funcionou. Feche com dois ou três alunos mostrando no projetor o modelo já dentro do Bambu Studio e dizendo qual formato usaram e por quê.

## Como explicar de forma clara (linguagem para a idade)

Use a comparação do balão e da língua estrangeira. Diga que a malha é a casca do personagem e que ela precisa estar inteira como um balão, sem furos, senão "vaza". Diga que exportar é como traduzir um texto: o Maya escreve numa língua, e a impressora só lê STL ou OBJ. Compare STL e OBJ assim: o STL guarda só a forma, é o mais usado para imprimir; o OBJ é primo dele e também guarda cor e textura. Sempre que disser um termo em inglês, fale o significado em português logo depois, como "watertight", que quer dizer à prova d'água, ou seja, fechado. Reforce que ninguém está modelando hoje, só resgatando e preparando, para que ninguém tenha medo de estragar o personagem.

## Erros comuns e como ajudar

O erro mais comum é exportar a cena inteira com "Export All" em vez de só o personagem; ensine a selecionar o objeto primeiro e usar "Export Selection". Muitos não encontram a opção STL no menu porque o plug-in está desligado; deixe os plug-ins carregados antes da aula. Alguns esquecem de clicar no personagem e exportam um arquivo vazio; mostre que o objeto precisa estar destacado. Outro tropeço é salvar fora da pasta e depois não achar o arquivo; reforce salvar sempre na pasta com o nome do aluno. Há quem ignore as bordas grossas do "Border Edges" e exporte um modelo furado; pare a turma e mostre, no exemplo com buraco, como é fácil ver o problema. Por fim, alguns confundem STL e OBJ; tranquilize dizendo que os dois funcionam para imprimir e que, na dúvida, o STL é a escolha segura.`,
  exercicios: [
    {
      titulo: `Resgatando o personagem no Maya`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Circule ajudando quem não acha o próprio arquivo e ofereça o modelo de exemplo a esses alunos. Mostre no projetor o caminho "File" e "Open Scene" e como selecionar o personagem clicando nele.`,
      atividade: `Abra o Maya, use "File" e "Open Scene" para abrir o seu modelo de personagem do jogo (ou o arquivo de exemplo, se não encontrar o seu) e clique no personagem para selecioná-lo.`,
      gabarito: `O modelo abre na cena do Maya e o personagem aparece destacado (com contorno) ao ser clicado, mostrando que está selecionado e pronto para os próximos passos.`,
    },
    {
      titulo: `Caçando buracos na malha`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor o menu "Mesh Display" e a opção "Border Edges". Use primeiro o modelo com buraco de propósito para a turma ver as bordas abertas ficarem grossas, depois o modelo bom, sem destaque.`,
      atividade: `Com o personagem selecionado, abra o menu "Mesh Display" e ligue "Border Edges". Observe se alguma borda fica grossa e destacada. Diga se a sua malha está fechada ou se tem buraco.`,
      gabarito: `Numa malha fechada, nenhuma borda fica destacada ao ligar "Border Edges". No modelo de exemplo com buraco, as bordas em volta da falha aparecem grossas e destacadas, indicando que a malha está aberta e precisa ser corrigida antes de imprimir.`,
    },
    {
      titulo: `Exportando em STL`,
      tipo: `prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Reforce selecionar o personagem antes de exportar e usar "Export Selection", nunca "Export All". Confira a pasta de destino e o tipo de arquivo "STL_DCE" passando de máquina em máquina.`,
      atividade: `Com o personagem selecionado, use "File" e depois "Export Selection". No tipo de arquivo escolha "STL_DCE", dê um nome com o seu nome (por exemplo, heroi-ana) e salve na pasta com o seu nome.`,
      gabarito: `Um arquivo com extensão .stl é criado na pasta do aluno, com nome que inclui o nome dele. O arquivo contém só o personagem exportado, porque foi usado "Export Selection" com o objeto selecionado, e não a cena inteira.`,
    },
    {
      titulo: `STL ou OBJ: comparando formatos`,
      tipo: `em dupla`,
      tempo: `9 minutos`,
      guiaProfessor: `Forme duplas. Um aluno exporta em STL e o outro em OBJ, depois comparam os dois arquivos na pasta. Conduza a conversa sobre a diferença: o STL guarda só a forma; o OBJ pode guardar cor e textura.`,
      atividade: `Em dupla, um exporta o mesmo personagem em STL ("STL_DCE") e o outro em OBJ ("OBJexport"), salvando os dois na pasta. Depois comparem: que extensão ficou em cada arquivo e qual deles também poderia guardar cor?`,
      gabarito: `A dupla cria dois arquivos do mesmo personagem, um com extensão .stl e outro com extensão .obj. Eles concluem que o STL guarda apenas a forma sólida (ideal e mais usado para impressão) e que o OBJ, além da forma, também pode guardar cor e textura.`,
    },
    {
      titulo: `Conferindo no Bambu Studio`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre rápido no projetor como abrir um arquivo no Bambu Studio (botão de abrir ou arrastar para a janela). Esta é só uma conferência: o objetivo é ver o personagem aparecer lá, confirmando que a exportação deu certo.`,
      atividade: `Abra o Bambu Studio e carregue o seu arquivo STL (pelo botão de abrir ou arrastando o arquivo para a janela). Confirme que o seu personagem aparece dentro do programa, em cima da mesa de impressão.`,
      gabarito: `O personagem exportado aparece dentro do Bambu Studio, posicionado sobre a placa de impressão. Isso prova que a malha foi exportada num formato que a impressora entende e que o arquivo está pronto para ser preparado nas próximas aulas. Se nada aparecer, o aluno volta ao Maya e refaz a exportação verificando a seleção e o formato.`,
    },
  ],
};
