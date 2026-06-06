import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Reunindo todos os assets 3D",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Juntar todos os personagens e itens 3D feitos no mês, conferir cor e acabamento de cada um e organizar os arquivos com nomes claros para achar tudo facilmente.`,
  descricao: `Nesta aula a turma faz uma grande "arrumação da mochila" de tudo o que modelou no mês. Durante as semanas anteriores, cada criança criou personagens e itens em 3D no Maya, pintou com vertex color e deu um acabamento caprichado. Agora chegou a hora de reunir esses assets num lugar só e conferir se nenhum ficou sem cor, sem acabamento ou perdido numa pasta esquecida.

Organizar é tão importante quanto criar. Imagine uma caixa de brinquedos toda bagunçada: quando você precisa de uma peça, demora horas para achar. Com os arquivos do jogo é igual. Se cada modelo tiver um nome bom (como "espada" em vez de "novo_arquivo_final2") e estiver na pasta certa, depois fica muito fácil colocar tudo dentro do jogo. Esta aula ensina a criança a pensar como uma pessoa que faz jogos de verdade: arrumada e organizada.

O professor vai guiar a turma a abrir cada modelo no Maya, olhar com carinho se está completo (tem cor? tem acabamento? está bem feito?) e preencher uma listinha de conferência, como um checklist de astronauta antes de decolar. Depois, a turma renomeia os objetos no Outliner e salva cada arquivo com um nome claro numa pasta única chamada "assets_do_jogo".

No fim, todos terão uma coleção bonita e organizada de assets 3D, prontinha para a última aula, quando vão exportar tudo para o jogo. É um momento de orgulho: ver juntos tudo o que construíram durante o mês inteiro.`,
  materiais: [
    `Computadores com o Maya aberto (um por criança, modelos do mês já salvos)`,
    `Projetor ligado no computador do professor para demonstrar cada passo`,
    `Uma pasta vazia já criada no computador chamada "assets_do_jogo"`,
    `Exemplos prontos de 2 ou 3 modelos bem nomeados e bem acabados`,
    `Folha de checklist impressa (cor? acabamento? nome bom? salvo na pasta?)`,
    `Lápis ou canetinha para a criança marcar o checklist`,
    `Adesivos ou estrelinhas para premiar cada asset conferido`,
  ],
  conceitosChave: [
    `Asset — cada pecinha do jogo, como um personagem, uma espada ou uma árvore que você modelou.`,
    `Organizar — guardar cada coisa no lugar certo para achar rapidinho depois.`,
    `Checklist — uma listinha de conferência onde você marca o que já está pronto.`,
    `Renomear — trocar o nome de um arquivo ou objeto por um nome fácil de entender.`,
    `Outliner — o painel do Maya que mostra a lista com o nome de tudo que está na cena.`,
    `Pasta — a "caixinha" do computador onde a gente guarda vários arquivos juntos.`,
    `Coleção — todos os assets reunidos num lugar só, prontos para usar.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é de organização, não de criação. O objetivo é reunir tudo o que a turma fez no mês num único lugar e conferir a qualidade. Você não precisa modelar nada novo. Precisa saber três coisas no Maya: abrir um arquivo (menu File > Open Scene), ver os nomes dos objetos no painel Outliner (menu Windows > Outliner) e salvar com um nome novo (File > Save Scene As). O Outliner fica geralmente do lado esquerdo e mostra a lista de tudo na cena. Para renomear, dê dois cliques rápidos no nome do objeto dentro do Outliner, digite o novo nome e aperte Enter. Antes da aula, crie no desktop uma pasta chamada "assets_do_jogo". Tenha 2 ou 3 modelos bem feitos abertos como exemplo.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Reúna a turma perto do projetor. Pergunte: "O que vocês fizeram este mês?" Deixe cada criança falar um asset. Mostre no projetor uma pasta bagunçada (com nomes como "sem_titulo3") e uma pasta arrumada. Pergunte qual é mais fácil de usar. Combine o "Dia da Arrumação".

Conteúdo novo guiado (15 min): No projetor, abra um modelo com File > Open Scene. Abra o Outliner em Windows > Outliner. Mostre a lista de nomes. Faça a pergunta do checklist em voz alta: "Tem cor? Tem acabamento? O nome é fácil?" Dê dois cliques no nome ruim no Outliner, apague e digite um nome bom, como "espada". Aperte Enter. Depois vá em File > Save Scene As, escolha a pasta "assets_do_jogo" e salve com nome claro.

Mão na massa (25 min): Cada criança abre seus modelos do mês, um de cada vez. Para cada um: olha cor e acabamento, marca o checklist na folha, renomeia o objeto no Outliner e salva na pasta "assets_do_jogo" com nome bom. Circule pela sala ajudando a abrir arquivos e a digitar nomes. Cole uma estrelinha em cada asset conferido.

Desafio e compartilhar (10 min): Cada criança abre a pasta "assets_do_jogo" e conta quantos assets juntou. Quem ajuda um colega a achar um arquivo perdido ganha aplauso. Tirem uma "foto da coleção" no projetor.

## Como explicar para crianças

Use a ideia da mochila ou da caixa de brinquedos. Diga: "Hoje a gente não vai construir, vai arrumar! É como guardar os brinquedos numa caixa, cada um no lugar certo, com nome para achar rapidinho." Compare o nome ruim com um presente sem etiqueta: você não sabe o que tem dentro. O nome bom é a etiqueta. Fale que pessoas que fazem jogos de verdade são super organizadas, e que hoje elas vão ser essas pessoas.

## Erros comuns e como ajudar

As crianças costumam dar nomes com espaços ou acentos nos arquivos (isso pode dar problema no jogo); peça nomes simples e curtos, sem espaço (use "espada_azul"). Algumas salvam por cima do colega ou na pasta errada; sempre confira junto que estão dentro de "assets_do_jogo". Outras esquecem de apertar Enter ao renomear no Outliner; lembre que o nome só "cola" depois do Enter. Há quem feche o arquivo sem salvar; reforce o passo File > Save Scene As antes de abrir o próximo. Por fim, alguém pode achar que faltou cor: abra o modelo, mostre que é só pintura faltando e tranquilize, pois dá para anotar no checklist e ajustar.`,
  exercicios: [
    {
      titulo: `Caça aos assets do mês`,
      tipo: `Aquecimento oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça uma rodada rápida em que cada criança diz em voz alta um asset 3D que fez no mês. Escreva os nomes no quadro para formar a lista da turma.`,
      atividade: `Lembre de um personagem ou item que você modelou neste mês e conte para a turma qual é.`,
      gabarito: `Respostas variam por aluno. Exemplos válidos: "Fiz uma espada", "Fiz um monstrinho", "Fiz uma árvore", "Fiz uma moeda". Qualquer asset feito no mês está correto.`,
    },
    {
      titulo: `Nome bom ou nome ruim?`,
      tipo: `Atividade de classificação`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor pares de nomes. A criança levanta a mão (ou um cartão verde/vermelho) para dizer se o nome é fácil de achar ou não. Explique cada resposta.`,
      atividade: `Olhe estes nomes e diga qual é bom e qual é ruim: "espada_azul", "sem_titulo3", "moeda", "novo_arquivo_final2".`,
      gabarito: `Bons: "espada_azul" e "moeda" (dizem o que é, são simples). Ruins: "sem_titulo3" e "novo_arquivo_final2" (não dizem o que é, são confusos).`,
    },
    {
      titulo: `Conferindo com o checklist`,
      tipo: `Mão na massa guiado`,
      tempo: `12 minutos`,
      guiaProfessor: `Cada criança abre um modelo no Maya (File > Open Scene), olha o objeto e marca a folha de checklist. Circule confirmando que olharam cor e acabamento de verdade.`,
      atividade: `Abra um dos seus modelos e responda no checklist: tem cor? tem acabamento? o nome é fácil? está salvo na pasta certa?`,
      gabarito: `O checklist deve ter as quatro perguntas respondidas com sim ou não. Exemplo correto: cor = sim, acabamento = sim, nome fácil = não (vou renomear), na pasta = ainda não (vou salvar agora).`,
    },
    {
      titulo: `Renomeando no Outliner`,
      tipo: `Tarefa prática`,
      tempo: `15 minutos`,
      guiaProfessor: `Mostre como abrir o Outliner (Windows > Outliner) e dar dois cliques no nome para editar. Garanta que cada criança aperte Enter e salve em "assets_do_jogo" com File > Save Scene As.`,
      atividade: `Renomeie o objeto do seu modelo no Outliner para um nome simples e sem espaço (como "espada_azul") e salve o arquivo na pasta "assets_do_jogo".`,
      gabarito: `O objeto aparece no Outliner com o novo nome simples, sem espaços nem acentos, e o arquivo fica salvo dentro da pasta "assets_do_jogo". Exemplo: objeto "espada_azul" salvo como espada_azul na pasta certa.`,
    },
    {
      titulo: `A coleção completa da turma`,
      tipo: `Desafio e compartilhar`,
      tempo: `10 minutos`,
      guiaProfessor: `Cada criança abre a pasta "assets_do_jogo" e conta quantos assets reuniu. Peça que confiram se algum ficou sem cor ou com nome ruim e ajudem um colega a achar um arquivo. Celebre a coleção no projetor.`,
      atividade: `Abra a pasta "assets_do_jogo", conte quantos assets você juntou e verifique se todos têm nome bom e cor. Depois ajude um colega a encontrar um arquivo dele.`,
      gabarito: `A criança consegue dizer o número de assets na pasta e confirmar que todos têm nome claro e cor. Exemplo: "Tenho 5 assets, todos com nome bom e pintados." Ajudar o colega a localizar um arquivo conclui o desafio.`,
    },
  ],
};
