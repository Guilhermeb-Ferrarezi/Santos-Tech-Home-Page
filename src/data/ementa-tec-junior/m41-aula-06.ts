import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Exportando meu item do Maya",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender o que é exportar e salvar o item criado no Maya no formato certo para o Roblox, conferindo se o arquivo final ficou completo e pronto para o próximo passo.`,
  descricao: `Nas aulas anteriores o aluno modelou o seu item, pintou com vertex color e ajustou o material com brilho e cor. Agora chega o momento de tirar esse item de dentro do Maya e transformá-lo em um arquivo que o Roblox consegue entender. Esse processo tem um nome de gente grande: exportar. Exportar é como tirar uma foto pronta do trabalho e guardar essa foto em uma pastinha, num formato que outro programa saiba abrir.

O formato certo para o Roblox é o FBX. Pense no FBX como uma caixa especial que carrega tudo de uma vez: o formato do modelo, as cores que a criança pintou e os materiais que ela escolheu. Quando a criança exporta em FBX, ela está colocando o item inteiro dentro dessa caixa para levar para outro lugar sem perder nada pelo caminho. Salvar o projeto do Maya (o arquivo .mb) é diferente de exportar: o .mb é o caderno de rascunho que só o Maya abre; o FBX é a versão pronta para viajar.

Nesta aula o professor mostra, passo a passo, onde ficam os menus de exportação no Maya, quais botões apertar e como dar um nome organizado para o arquivo. As crianças praticam o processo com a ajuda do professor, exportam o próprio item e depois fazem uma conferência rápida: o arquivo apareceu na pasta? Ele tem o nome certo? O tamanho do arquivo não ficou zerado? Essa conferência ensina o hábito profissional de checar o trabalho antes de seguir em frente.

Ao final, cada criança terá um arquivo FBX guardado na pasta da turma, com o nome dela, pronto para a próxima etapa de conferência e publicação. É um passo curto, mas muito importante: sem exportar direito, o item lindo continua preso dentro do Maya e nunca chega à loja do Roblox.`,
  materiais: [
    `Computadores com o Maya aberto e o item de cada criança (o projeto .mb das aulas anteriores) já carregado`,
    `Projetor ou TV grande para o professor demonstrar o caminho dos menus de exportação`,
    `Uma pasta da turma já criada na área de trabalho, com o nome "ITENS_PARA_LOJA", onde todos vão salvar`,
    `Exemplo pronto: um arquivo FBX já exportado pelo professor, para mostrar como o ícone do arquivo deve ficar`,
    `Cartão impresso com o passo a passo da exportação (File, Export Selection, formato FBX, nome do arquivo)`,
    `Adesivos de "Item Exportado" para premiar quem concluir o arquivo na pasta`,
  ],
  conceitosChave: [
    `Exportar — tirar o item de dentro do Maya e salvar num formato que outro programa, como o Roblox, consegue abrir.`,
    `FBX — o formato de caixa que guarda o modelo, as cores e os materiais todos juntos para levar o item para outro lugar.`,
    `Salvar — guardar o projeto do Maya no arquivo .mb, que é o caderno de rascunho que só o Maya abre.`,
    `Selecionar — clicar no item para ele ficar marcado, avisando ao Maya que é só ele que vai ser exportado.`,
    `Nome do arquivo — o nome que a gente dá para encontrar o item depois, sem espaços e sem acentos para não dar erro.`,
    `Pasta — a gavetinha do computador onde guardamos o arquivo para achar fácil mais tarde.`,
    `Conferir — olhar com cuidado se o arquivo apareceu, com o nome certo, antes de seguir em frente.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Maya para dar esta aula. O passo de exportar é curto e sempre o mesmo. O caminho oficial é: menu "File" (Arquivo), no topo à esquerda da tela, e depois a opção "Export Selection..." (Exportar Seleção). Use "Export Selection" e não "Export All", porque assim só o item da criança vai junto, sem partes extras da cena. Antes de exportar, a criança precisa CLICAR no item dela uma vez, para ele ficar selecionado (aparece um contorno verde ou branco ao redor). Se nada estiver selecionado, o Maya avisa que não há o que exportar.

Quando você clica em "Export Selection...", abre uma janela de salvar. Nessa janela tem um campo embaixo chamado "Files of type" (Tipo de arquivo). Clique nele e escolha "FBX export". Em cima, há o campo "File name" (Nome do arquivo): é onde a criança digita o nome, por exemplo o primeiro nome dela seguido de "item" (sem espaços, sem acentos: use o traço de baixo, como em "ana_item"). Por fim, escolha a pasta "ITENS_PARA_LOJA" na lateral e clique no botão "Export Selection" para confirmar. Deixe a pasta criada antes da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Sente a turma de frente para o projetor. Pergunte o que cada um já fez no item: a forma, a pintura e o material. Mostre o item lindo na tela e diga: "Ele está pronto, mas ainda está preso dentro do Maya. Hoje vamos tirá-lo daqui para ele poder ir para a loja." Mostre o ícone de um arquivo FBX já pronto na pasta, para eles saberem o que vão produzir.

Conteúdo novo guiado (15 min): No projetor, faça VOCÊ a exportação devagar. Clique uma vez no item para selecionar (mostre o contorno aparecendo). Vá em "File", desça até "Export Selection..." e clique. Na janela, aponte o campo "Files of type" e escolha "FBX export". Digite um nome de exemplo no campo "File name", como "exemplo_item". Escolha a pasta "ITENS_PARA_LOJA". Clique em "Export Selection". Depois, abra a pasta e mostre o arquivo novo aparecendo lá. Repita o caminho duas vezes para fixar.

Mão na massa (25 min): Agora é a vez deles, um por um com a sua ajuda. Cada criança seleciona o próprio item, abre "File", clica em "Export Selection...", escolhe "FBX export" em "Files of type", digita o nome dela (nome_item) e salva na pasta "ITENS_PARA_LOJA". Circule pela sala. O passo que mais trava é esquecer de selecionar antes ou esquecer de trocar o tipo para FBX. Ao terminar, cada criança abre a pasta e confere se o arquivo dela apareceu.

Desafio e compartilhar (10 min): Desafie a turma a ser "detetive de arquivo": abrir a pasta "ITENS_PARA_LOJA" e encontrar o próprio FBX pelo nome, conferindo se está escrito certo e se o ícone do arquivo apareceu. Quem achou o seu item ganha o adesivo de "Item Exportado". Encerre com cada um mostrando, no projetor, o arquivo dele na pasta.

## Como explicar para crianças

Use a analogia da foto: "Modelar é construir o boneco; exportar é tirar uma foto dele e guardar a foto numa gaveta para mostrar para outras pessoas." Explique o FBX como uma "caixa mágica que leva tudo junto": o formato, as cores e o brilho, sem deixar nada para trás. Diga que selecionar é "dar um tapinha no ombro do item para avisar: é você que vai viajar". Combine que o nome do arquivo é "sem espaço e sem acento, senão o computador fica confuso".

## Erros comuns e como ajudar

A criança esquece de selecionar o item: lembre o "tapinha no ombro", peça para ela clicar no item antes de abrir o menu. Ela escolhe "Export All" em vez de "Export Selection": mostre a diferença e peça para usar sempre "Export Selection". Ela esquece de trocar o tipo para FBX e salva errado: aponte o campo "Files of type" e peça para escolher "FBX export" antes de clicar em salvar. Ela usa espaço ou acento no nome: ajude a digitar com traço de baixo, como "joao_item". Ela não acha o arquivo depois: confira se ele salvou na pasta certa, "ITENS_PARA_LOJA", e não em outra pasta.`,
  exercicios: [
    {
      titulo: `Foto ou rascunho? Salvar e exportar`,
      tipo: `Pergunta e resposta em roda`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça em roda, sem computador. Mostre na tela o arquivo .mb (o rascunho do Maya) e o arquivo FBX (a versão pronta). Explique que salvar guarda o rascunho e exportar tira a foto pronta. Aceite respostas com as palavras das crianças.`,
      atividade: `Responda: exportar é como tirar uma foto pronta do item ou é como guardar o caderno de rascunho? E qual deles o Roblox consegue abrir?`,
      gabarito: `Exportar é tirar a foto pronta. O Roblox abre o arquivo exportado (o FBX), não o rascunho .mb do Maya. Acerto = entender que exportar gera a versão pronta para viajar para outro programa.`,
    },
    {
      titulo: `Dando o tapinha no ombro: selecionar o item`,
      tipo: `Prática no Maya`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre que, ao clicar uma vez no item, aparece um contorno (verde ou branco) ao redor dele. Peça para a criança selecionar e depois clicar no vazio para ver o contorno sumir. Reforce que sem seleção o Maya não exporta.`,
      atividade: `No seu Maya, clique uma vez em cima do seu item para ele ficar selecionado, com o contorno em volta. Depois clique no vazio para o contorno sumir e selecione de novo.`,
      gabarito: `A criança consegue selecionar o item (contorno aparece) e deselecionar (contorno some). Acerto = saber deixar o item selecionado antes de exportar. Erro comum: clicar fora do item e não perceber que nada está marcado.`,
    },
    {
      titulo: `Achando o caminho: File e Export Selection`,
      tipo: `Caça ao menu`,
      tempo: `5 minutos`,
      guiaProfessor: `Aponte o menu "File" no canto superior esquerdo. Peça para a criança abrir e encontrar "Export Selection...". Não precisa clicar para exportar ainda; é só localizar o caminho. Compare com achar uma palavra num cardápio.`,
      atividade: `Abra o menu "File" lá no canto de cima da tela e encontre a opção escrita "Export Selection...". Coloque o dedo na tela em cima dela quando achar.`,
      gabarito: `A criança abre "File" e localiza "Export Selection...". Acerto = achar a opção certa, diferente de "Export All". Erro comum: confundir com "Save" ou com "Export All"; lembre que queremos exportar só a seleção.`,
    },
    {
      titulo: `Escolhendo a caixa FBX e o nome`,
      tipo: `Prática guiada no Maya`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe cada criança. Depois de selecionar e abrir "Export Selection...", ajude a escolher "FBX export" no campo "Files of type" e a digitar o nome no campo "File name" (nome_item, sem espaço e sem acento). Ainda não salve; o foco é preparar a janela certa.`,
      atividade: `Com o item selecionado, abra "Export Selection...". No campo "Files of type" escolha "FBX export". No campo "File name" digite o seu nome com a palavra item, assim: seunome_item. Sem espaço e sem acento.`,
      gabarito: `A janela mostra "FBX export" no tipo de arquivo e o nome no formato nome_item, sem espaço e sem acento. Exemplo: "lia_item". Acerto = deixar a caixa FBX escolhida e o nome certo antes de salvar.`,
    },
    {
      titulo: `Detetive de arquivo: exportar e conferir`,
      tipo: `Desafio final`,
      tempo: `10 minutos`,
      guiaProfessor: `Agora a criança conclui: clica em "Export Selection" para salvar na pasta "ITENS_PARA_LOJA" e depois abre a pasta para conferir. Oriente a checar três coisas: o arquivo apareceu, o nome está certo e ele não está com tamanho zero. Premie com o adesivo "Item Exportado".`,
      atividade: `Termine de exportar salvando o seu FBX na pasta "ITENS_PARA_LOJA". Depois vire detetive: abra a pasta e confira se o seu arquivo apareceu, se o nome está certinho e se ele não está vazio.`,
      gabarito: `O arquivo FBX da criança aparece na pasta "ITENS_PARA_LOJA", com o nome combinado (nome_item) e com tamanho maior que zero. Acerto = exportar e confirmar os três itens na conferência. Erro comum: salvar em outra pasta; nesse caso, refaça escolhendo a pasta certa.`,
    },
  ],
};
