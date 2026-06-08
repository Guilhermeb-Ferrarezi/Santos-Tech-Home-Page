import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Novos Assets Prontos!",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Fechar a etapa 3 de 5 do ano consolidando o entregável do mês: cada aluno finaliza e exporta o pacote completo de novos assets, importa tudo no Roblox Studio e apresenta os modelos posicionados no cenário do jogo.`,
  descricao: `Esta é a aula de fechamento do terceiro mês de modelagem 3D. Durante as últimas semanas, cada aluno planejou, modelou, aplicou materiais, detalhou e otimizou uma nova leva de assets do cenário. Hoje não criamos nada novo do zero: o trabalho é juntar tudo, exportar o pacote final em formato leve e levar os modelos para dentro do Roblox Studio, onde o jogo realmente acontece. É o momento de ver o esforço do mês virar parte de verdade do mundo do jogo.

A aula tem um clima de entrega e celebração, mas com rigor técnico. Antes de exportar, fazemos uma última conferência rápida de cada modelo: a escala está coerente com o personagem, os materiais estão aplicados, a contagem de polígonos está enxuta e o nome do objeto está claro. Em seguida, exportamos cada asset (ou o conjunto) em FBX a partir do Maya, com as opções corretas para que o Roblox entenda a geometria e os materiais. Esse é o ponto em que o trabalho sai da ferramenta de modelagem e entra na ferramenta de jogo.

Dentro do Roblox Studio, os alunos usam o recurso de importação (Asset Manager, opção Import 3D) para trazer os arquivos. Cada modelo importado vira um MeshPart, que é posicionado no cenário, redimensionado se necessário e nomeado com clareza. Como o curso também ensina Lua, fechamos com um pequeno script opcional que confirma no Output quantos assets foram colocados, reforçando a ligação entre modelagem e programação. Não é um script complexo: é uma forma divertida de provar que os modelos estão mesmo lá.

Para o professor iniciante, a mensagem é de tranquilidade: o difícil já foi feito nas aulas anteriores. Hoje você guia uma sequência de passos repetível, item por item. Se cada aluno terminar com os novos assets exportados, importados, posicionados no cenário e apresentados para a turma, a etapa 3 de 5 está oficialmente concluída e o mês cumpriu sua promessa: novos assets prontos para uso.`,
  materiais: [
    `Computadores com o Maya e o Roblox Studio instalados e já abertos antes da aula, para não perder tempo com carregamento`,
    `Projetor ou TV ligado ao computador do professor, para mostrar cada clique da exportação e da importação na tela grande`,
    `Os arquivos de cena do Maya de cada aluno, com os assets do mês já modelados, com material e otimizados`,
    `Uma pasta de destino criada antes da aula (por exemplo, uma pasta chamada assets-mes-3) para guardar os arquivos FBX exportados`,
    `Arquivo de exemplo do professor: um asset simples já exportado em FBX e já importado no Roblox Studio, para demonstrar o caminho completo`,
    `Folha impressa com o checklist de entrega: escala, material, polígonos, nome do objeto, exportado, importado, posicionado`,
    `O projeto do jogo no Roblox Studio de cada aluno (ou o projeto da turma), onde os novos assets serão posicionados`,
  ],
  conceitosChave: [
    `Asset — peça pronta usada no jogo; aqui são os modelos 3D novos do cenário que vamos entregar.`,
    `Exportar — salvar o modelo em um formato de arquivo que outra ferramenta consegue abrir; do Maya para o Roblox usamos FBX.`,
    `FBX — formato de arquivo 3D que carrega a geometria e os materiais do modelo, entendido pelo Roblox Studio.`,
    `Importar — trazer um arquivo de fora para dentro do projeto; no Roblox Studio usamos o Asset Manager, opção Import 3D.`,
    `MeshPart — o tipo de objeto que o Roblox cria quando você importa um modelo 3D; é o seu asset já dentro do jogo.`,
    `Output — a janela do Roblox Studio onde aparecem as mensagens do código; usamos para confirmar que os assets foram colocados.`,
    `Checklist de entrega — lista de itens a conferir antes de dar o trabalho como pronto, evitando esquecer um passo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista nem no Maya nem no Roblox Studio para conduzir esta aula. O trabalho pesado de modelar já aconteceu; hoje é uma sequência de passos repetível. Treine três coisas antes da aula. Primeiro, exportar no Maya: selecione um objeto, vá em "File" maior que "Export Selection", escolha o tipo de arquivo "FBX export" e salve na pasta de destino. Segundo, importar no Roblox Studio: abra o "Asset Manager" (menu "View"), clique no ícone de importação e escolha "Import 3D", selecione o FBX e confirme. Terceiro, posicionar: o modelo entra como um MeshPart que você arrasta para o lugar e redimensiona pelas alças. Tenha um asset de exemplo já exportado e importado, para mostrar o resultado final logo no começo e dar segurança à turma. O script de Lua do fim é opcional e curtíssimo; se você não se sentir à vontade, pode pular sem prejuízo ao entregável.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

10 min, aquecimento e revisão: Projete o asset de exemplo já dentro do Roblox. Diga a frase-chave: "Hoje o nosso trabalho do mês entra no jogo." Mostre o checklist de entrega e leia cada item: escala, material, polígonos, nome, exportar, importar, posicionar. Peça que cada aluno abra a cena do Maya e o projeto do Roblox.

15 min, conteúdo novo guiado: No seu Maya, selecione um objeto, vá em "File" maior que "Export Selection", escolha "FBX export" no campo de tipo e salve na pasta de destino com um nome claro, como barril_v1. Em seguida, abra o Roblox Studio, vá em "View" maior que "Asset Manager", clique no ícone de importar, escolha "Import 3D", selecione o FBX e confirme. Mostre o MeshPart aparecendo, arraste-o para o cenário e redimensione. Por fim, mostre o script opcional de confirmação. Abra um "Script" dentro do "ServerScriptService" e digite, linha a linha:

local pasta = workspace
local total = 0
for _, item in ipairs(pasta:GetChildren()) do
  if item:IsA("MeshPart") then
    total = total + 1
  end
end
print("Assets no cenario: ", total)

Explique cada parte: "local pasta = workspace" guarda onde vamos olhar; "local total = 0" cria um contador começando em zero; o "for" passa por cada filho do workspace; o "if item:IsA('MeshPart')" só conta se o objeto for um modelo importado; "total = total + 1" soma um a cada MeshPart; e o "print" mostra o resultado no Output. Repare que usamos vírgula no print para juntar o texto e o número, sem chaves de interpolação.

25 min, mão na massa: Cada aluno repete o ciclo para todos os assets do mês: conferir o checklist, exportar em FBX, importar no Roblox, posicionar e nomear. Circule pela sala confirminando que cada modelo virou um MeshPart visível no cenário. Quem quiser, cola o script no "ServerScriptService" e roda para ver o total no Output.

10 min, desafio e compartilhar: Desafie cada aluno a posicionar os assets de forma que conte uma pequena história no cenário (por exemplo, caixas empilhadas perto de uma porta). Peça que dois ou três mostrem o jogo com os novos modelos no lugar. Encerre celebrando o fim da etapa 3 de 5 e peça que todos salvem o projeto do Roblox e a cena do Maya.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de mudança de casa: exportar é "colocar o móvel no caminhão" e importar é "montar o móvel na casa nova". Chame o FBX de "a caixa de mudança do modelo 3D". Diga que o MeshPart é "o seu modelo já morando dentro do jogo". Para o script, compare o contador com "contar quantos amigos chegaram na festa: começamos em zero e somamos um a cada chegada". Nomeie sempre o caminho do menu em voz alta enquanto clica e repita duas vezes. Comemore cada asset que aparece no cenário, porque ver o próprio trabalho dentro do jogo é o que mais motiva nessa idade.

## Erros comuns e como ajudar

O erro mais comum é exportar a cena inteira em vez do objeto selecionado; reforce "File maior que Export Selection" e conferir que o objeto certo está selecionado. Outro tropeço é o modelo entrar gigante ou minúsculo no Roblox; lembre que basta redimensionar pelas alças e comparar com o personagem. Se o material não aparecer, verifique se ele foi mesmo aplicado no Maya antes de exportar. Nomes repetidos ou confusos atrapalham; oriente nomes claros como caixa_v1. No script, o esquecimento clássico é não fechar o "end" do "for" ou do "if"; mostre no projetor a indentação correta. Se o print não mostra nada, confirme que a janela "Output" está aberta em "View" maior que "Output".`,
  exercicios: [
    {
      titulo: `Checklist de entrega`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Projete o checklist e leia item por item. Conduza a turma a conferir cada asset do mês antes de exportar. Aceite que alguns modelos ainda precisem de um ajuste rápido e oriente a corrigir antes da exportação. O objetivo é ninguém exportar um asset inacabado.`,
      atividade: `Abra a sua cena do Maya e confira cada asset do mês usando o checklist: a escala está coerente com o personagem? O material está aplicado? A contagem de polígonos está enxuta? O nome do objeto está claro? Marque o que já está pronto e o que ainda falta ajustar.`,
      gabarito: `Uma boa conferência passa pelos cinco pontos do checklist para cada asset: escala coerente com o cubo de referência do personagem, material aplicado, contagem de polígonos baixa, nome claro (por exemplo, barril_v1) e modelo finalizado. A resposta certa identifica com honestidade o que está pronto e aponta o que precisa de um último ajuste antes de exportar.`,
    },
    {
      titulo: `Exportando o primeiro asset em FBX`,
      tipo: `prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Mostre o caminho completo no projetor antes. Reforce que é "Export Selection", e não exportar a cena toda. Passe de mesa em mesa confirmando que o objeto certo está selecionado e que o arquivo FBX apareceu na pasta de destino com nome claro.`,
      atividade: `No Maya, selecione um dos seus assets. Vá em "File" maior que "Export Selection", escolha o tipo "FBX export" e salve na pasta de destino com um nome claro, como caixa_v1. Confira que o arquivo apareceu na pasta.`,
      gabarito: `O objeto é selecionado primeiro. O caminho é "File" maior que "Export Selection". No campo de tipo de arquivo escolhe-se "FBX export". O arquivo é salvo na pasta de destino combinada (por exemplo, assets-mes-3) com um nome claro, como caixa_v1.fbx. A confirmação correta é ver o arquivo FBX dentro da pasta.`,
    },
    {
      titulo: `Importando e posicionando no Roblox`,
      tipo: `desafio individual`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre a importação no projetor uma vez. Reforce o caminho do Asset Manager e a opção Import 3D. Caminhe pela sala conferindo que cada FBX virou um MeshPart visível no cenário, na escala certa e com nome claro. Ajude quem importar o modelo gigante ou minúsculo a redimensionar pelas alças.`,
      atividade: `No Roblox Studio, abra "View" maior que "Asset Manager". Clique no ícone de importar, escolha "Import 3D", selecione o seu FBX e confirme. Arraste o MeshPart para o cenário, redimensione comparando com o personagem e renomeie o objeto com clareza.`,
      gabarito: `No Roblox Studio, o caminho é "View" maior que "Asset Manager", depois o ícone de importar e a opção "Import 3D". Seleciona-se o arquivo FBX e confirma-se a importação. O modelo entra como um MeshPart, que é arrastado para o cenário, redimensionado pelas alças até ficar coerente com o personagem e renomeado com clareza (por exemplo, Caixa). A confirmação correta é o modelo visível no cenário, na escala certa.`,
    },
    {
      titulo: `Contando os assets com Lua`,
      tipo: `prática de código`,
      tempo: `12 minutos`,
      guiaProfessor: `Este exercício é opcional para quem terminou a importação. Mostre o script no projetor e digite junto, explicando cada linha. Reforce fechar todos os "end" e abrir a janela "Output". Quem não chegar até aqui não fica para trás, pois o entregável já está cumprido com os assets posicionados.`,
      atividade: `No "ServerScriptService", crie um "Script" e escreva um código em Lua que percorra o workspace, conte quantos objetos são MeshPart e mostre o total no Output. Rode o jogo e confira o número que aparece.`,
      gabarito: `Um código-solução correto é:

local pasta = workspace
local total = 0
for _, item in ipairs(pasta:GetChildren()) do
  if item:IsA("MeshPart") then
    total = total + 1
  end
end
print("Assets no cenario: ", total)

A variável total começa em zero, o laço for percorre os filhos do workspace, o if soma um a cada MeshPart encontrado e o print mostra o resultado no Output. O número impresso deve bater com a quantidade de assets que o aluno posicionou no cenário.`,
    },
    {
      titulo: `Apresentação dos novos assets`,
      tipo: `apresentação curta`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que dois ou três alunos mostrem o jogo com os novos assets no cenário. Faça perguntas que liguem o trabalho ao mês inteiro: "Como esse item ficou no jogo? Que detalhe você mais gostou?" Valorize o caminho completo, do Maya ao Roblox. Encerre celebrando o fim da etapa 3 de 5 e peça que todos salvem o projeto e a cena.`,
      atividade: `Apresente em meio minuto os seus novos assets já dentro do jogo: mostre cada modelo no cenário, diga a função dele e conte um detalhe do processo (modelar, dar material ou otimizar). Salve o projeto do Roblox e a cena do Maya ao final.`,
      gabarito: `Uma boa apresentação mostra os assets posicionados no cenário do Roblox, explica a função de cada um no jogo e cita ao menos uma etapa do processo do mês (planejar, modelar, aplicar material, detalhar ou otimizar). O fechamento correto inclui salvar o projeto do Roblox e a cena do Maya, confirmando que a etapa 3 de 5 está concluída com os novos assets prontos para uso.`,
    },
  ],
};
