import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Exportando para a Loja",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Ensinar cada criança a salvar e exportar o próprio item do Blender no formato aceito pela loja do Roblox, conferindo se o arquivo ficou correto.`,
  descricao: `Depois de modelar, dar materiais, capricho nas cores e deixar tudo no tamanho certo, chegou o grande momento: tirar o item de dentro do Blender e transformá-lo em um arquivo que a loja do Roblox consegue ler. É como tirar um bolo do forno e colocar numa caixa bonita para entregar: o bolo já está pronto, mas agora precisa sair do forno (o Blender) e ir para a caixa certa (o arquivo de exportação).

Exportar é diferente de salvar. Salvar guarda o trabalho dentro do Blender no formato dele, o arquivo que termina em ponto blend, para a criança poder abrir e continuar editando depois. Exportar cria uma cópia do item num formato que outros programas entendem. A loja do Roblox aceita o formato FBX, que guarda a forma do objeto, os materiais e as cores tudo junto num pacote só. Nesta aula a criança aprende a fazer as duas coisas: primeiro salvar, para nunca perder o trabalho, e depois exportar o FBX, para levar o item até a loja.

O segredo de uma exportação que dá certo está em três cuidados simples: selecionar só o item certo antes de exportar, escolher o formato FBX no menu e dar um nome organizado ao arquivo, sem espaços nem acentos, guardando numa pasta que a criança consiga achar depois. Se algum desses passos for pulado, o arquivo pode sair vazio, com o nome errado ou perdido no computador. Por isso o professor acompanha de pertinho cada clique.

Ao final da aula, cada aluno terá o próprio arquivo FBX salvo numa pasta com o nome dele, conferido e pronto para a aula seguinte, quando o item vai de fato para a vitrine. É a ponte entre o trabalho artístico das semanas anteriores e o item de verdade na loja.`,
  materiais: [
    `Computadores com o Blender aberto e o projeto de cada criança (o arquivo ponto blend) já carregado`,
    `Projetor ou TV grande para o professor demonstrar cada clique do menu de exportação`,
    `Uma pasta criada na área de trabalho de cada computador chamada "Itens da Loja" para guardar os arquivos`,
    `Exemplo pronto: um item já exportado em FBX pelo professor, para mostrar como deve ficar o arquivo final`,
    `Cartão impresso com o passo a passo da exportação (Salvar, depois File, Export, FBX)`,
    `Adesivos de "Item Exportado" para premiar quem conferir o próprio arquivo`,
  ],
  conceitosChave: [
    `Salvar — guardar o trabalho dentro do Blender para poder continuar editando depois; o arquivo termina em ponto blend.`,
    `Exportar — criar uma cópia do item num formato que outros programas, como a loja, conseguem abrir.`,
    `FBX — o formato de caixa que a loja do Roblox aceita; guarda a forma, os materiais e as cores tudo junto.`,
    `Formato de arquivo — o tipo da caixa onde o item fica guardado; cada programa entende tipos diferentes.`,
    `Selecionar — clicar no item para avisar ao computador que é só ele que você quer exportar.`,
    `Pasta — a gavetinha do computador onde guardamos o arquivo para achar de novo depois.`,
    `Nome de arquivo — o nome que damos ao arquivo; o melhor é sem espaços e sem acentos para a loja não se confundir.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Blender. Esta aula tem poucos cliques, mas eles precisam ser feitos na ordem certa. Antes da aula, abra você mesmo um item e teste a exportação uma vez para se sentir seguro. Há duas ações bem diferentes: SALVAR e EXPORTAR. Salvar usa o menu "File" e a opção "Save" (ou aperte as teclas Ctrl e S juntas); isso guarda o arquivo ponto blend, que é o trabalho original. Exportar usa o menu "File", depois "Export", depois "FBX (.fbx)"; isso cria a caixa que a loja entende.

O caminho exato no Blender é assim: no canto superior esquerdo da tela existe a palavra "File" (Arquivo). Ao clicar nela, abre um menu. Passe o mouse sobre "Export" e aparece uma lista de formatos. Clique em "FBX (.fbx)". Abre uma janela grande para escolher onde salvar. No alto dessa janela você navega até a pasta "Itens da Loja". Embaixo, no campo branco do nome, a criança digita o nome do item. À direita há um botão grande azul "Export FBX". Antes de tudo isso, é importante clicar no item na tela para ele ficar com a bordinha laranja de selecionado, e marcar a caixinha "Selected Objects" (Objetos Selecionados) no painel direito da janela de exportação, para sair só o item certo.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Em roda, relembre a jornada do mês mostrando o item de cada criança na tela. Pergunte: "O que falta para o item ir para a loja?" Conduza até a ideia de tirar o item do Blender. Use a analogia do bolo saindo do forno para a caixa. Mostre no projetor o seu arquivo FBX de exemplo dentro da pasta.

Conteúdo novo guiado (15 min): No projetor, faça você o passo a passo devagar. Primeiro SALVE: clique em "File", depois "Save". Diga em voz alta "salvar é guardar o original". Depois EXPORTE: clique no item para ficar laranja, clique em "File", "Export", "FBX (.fbx)". Mostre a janela, navegue até "Itens da Loja", marque "Selected Objects", digite um nome simples sem espaços nem acentos e clique no botão azul "Export FBX". Mostre o arquivo aparecendo na pasta.

Mão na massa (25 min): Agora cada criança repete no próprio computador, com o cartão do passo a passo ao lado. Passe de mesa em mesa. A ordem é sempre: 1) Salvar (Ctrl e S); 2) clicar no item até ficar laranja; 3) File, Export, FBX; 4) achar a pasta "Itens da Loja"; 5) marcar "Selected Objects"; 6) digitar o nome; 7) clicar em "Export FBX". Quem terminar abre a pasta e confere se o arquivo com o nome dele está lá.

Desafio e compartilhar (10 min): Desafie cada criança a abrir a pasta "Itens da Loja" e mostrar o próprio arquivo FBX para um colega, falando o nome que deu. Quem conferir ganha o adesivo de "Item Exportado". Encerre lembrando que na próxima aula esse arquivo vai para a vitrine.

## Como explicar para crianças

Use a analogia do bolo: "O item já está pronto, igual a um bolo no forno. Salvar é anotar a receita para fazer de novo. Exportar é tirar o bolo do forno e colocar na caixa certa para entregar. A caixa da loja se chama FBX." Explique que selecionar o item (deixá-lo laranja) é como apontar para ele e dizer "é esse aqui que eu quero levar". Sobre o nome do arquivo, diga que a loja é como um carteiro que se confunde com nomes cheios de espaço e acento, então escrevemos juntinho, tipo "espadadeouro".

## Erros comuns e como ajudar

A criança confunde salvar com exportar: repita "salvar guarda o original, exportar faz a caixa para a loja". O arquivo sai vazio: ela esqueceu de clicar no item (deixar laranja) ou de marcar "Selected Objects"; volte e faça os dois. A criança não acha a pasta: deixe a pasta "Itens da Loja" já criada e fixada na área de trabalho antes da aula. O nome sai com espaços ou acentos: peça para apagar e escrever tudo junto, sem acento. A criança clica em outro formato da lista: mostre que o certo é "FBX (.fbx)" e que os outros não servem para esta loja. Ela fecha a janela sem clicar no botão azul: lembre que só está exportado depois de clicar em "Export FBX".`,
  exercicios: [
    {
      titulo: `Salvar ou exportar?`,
      tipo: `Pergunta e resposta em roda`,
      tempo: `6 minutos`,
      guiaProfessor: `Em roda, leia situações e peça para a criança dizer se é SALVAR ou EXPORTAR. Use a analogia do bolo. O objetivo é fixar que salvar guarda o original e exportar cria a caixa para a loja.`,
      atividade: `Escute cada frase e responda "salvar" ou "exportar": guardar o trabalho para continuar amanhã; fazer a caixa FBX para mandar para a loja; anotar a receita do bolo; tirar o bolo do forno para entregar.`,
      gabarito: `Respostas certas: guardar o trabalho para continuar = salvar; fazer a caixa FBX para a loja = exportar; anotar a receita = salvar; tirar o bolo para entregar = exportar. Acerto = entender que salvar é o original em ponto blend e exportar é a cópia em FBX.`,
    },
    {
      titulo: `Selecionar o item certo`,
      tipo: `Prática no Blender`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre que clicar no item deixa a bordinha laranja. Explique que só o item laranja vai para a caixa. Peça para clicar no item e depois clicar no fundo vazio (some o laranja) para ver a diferença.`,
      atividade: `No seu computador, clique no seu item até ele ficar com a bordinha laranja. Depois clique no fundo vazio e veja o laranja sumir. Por fim, clique no item de novo para deixá-lo selecionado.`,
      gabarito: `A criança clica e o item fica laranja; ao clicar no vazio, o laranja some; ao clicar de novo, volta. Acerto = saber deixar só o item certo selecionado. Erro comum: achar que o item continua escolhido depois de clicar no fundo; o laranja precisa estar visível.`,
    },
    {
      titulo: `Guardar o original (salvar)`,
      tipo: `Prática no Blender`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre o caminho File, Save, ou as teclas Ctrl e S juntas. Reforce que isso guarda o arquivo ponto blend, o original. Peça para todos salvarem antes de exportar, para nunca perder o trabalho.`,
      atividade: `Salve o seu trabalho no Blender: clique em "File" lá em cima e depois em "Save", ou aperte as teclas Ctrl e S ao mesmo tempo. Pronto, o seu original está guardado.`,
      gabarito: `A criança usa File, Save ou Ctrl e S e o trabalho fica salvo no formato ponto blend. Acerto = salvar antes de exportar. Exemplo: a barra do título deixa de mostrar o aviso de mudanças não salvas depois do clique.`,
    },
    {
      titulo: `Exportar o FBX passo a passo`,
      tipo: `Atividade guiada principal`,
      tempo: `12 minutos`,
      guiaProfessor: `Acompanhe de mesa em mesa com o cartão do passo a passo. A ordem é: clicar no item (laranja), File, Export, FBX (.fbx); achar a pasta "Itens da Loja"; marcar "Selected Objects"; digitar o nome sem espaços nem acentos; clicar em "Export FBX". Confira o "Selected Objects" de cada um.`,
      atividade: `Exporte o seu item: deixe-o laranja, clique em "File", "Export", "FBX (.fbx)". Na janela, ache a pasta "Itens da Loja", marque a caixinha "Selected Objects", digite um nome juntinho e sem acento e clique no botão azul "Export FBX".`,
      gabarito: `O arquivo FBX é criado na pasta "Itens da Loja" com o nome que a criança digitou, contendo só o item selecionado. Acerto = passar por todos os passos na ordem. Erro comum: arquivo vazio por esquecer de selecionar o item ou de marcar "Selected Objects".`,
    },
    {
      titulo: `Detetive do arquivo`,
      tipo: `Desafio de conferência`,
      tempo: `6 minutos`,
      guiaProfessor: `Desafie cada criança a abrir a pasta "Itens da Loja" e conferir três coisas: o arquivo existe, o nome é o que ela digitou e termina em ponto fbx. Quem conferir mostra para um colega e ganha o adesivo de "Item Exportado".`,
      atividade: `Vire detetive do seu arquivo: abra a pasta "Itens da Loja" e confira três pistas. O arquivo está lá? O nome é o que você digitou? Ele termina em ponto fbx? Mostre para um colega o que achou.`,
      gabarito: `A criança encontra o arquivo, confirma o nome digitado e vê que termina em ponto fbx. Acerto = as três pistas conferidas. Se faltar o arquivo, ela volta e refaz a exportação; se o nome estiver com espaço ou acento, exporta de novo com o nome juntinho.`,
    },
  ],
};
