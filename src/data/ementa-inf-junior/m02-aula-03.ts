import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Guardar é Salvar: Meu Primeiro Arquivo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança entende que salvar guarda o trabalho dentro do computador, sabe achar o botão Salvar, dá um nome simples ao arquivo e percebe que ele continua lá mesmo depois de fechar o programa.`,
  descricao: `Salvar é uma das ideias mais importantes de toda a informática, e é também uma das que mais confundem quem está começando. Para a criança, o que ela escreve ou desenha aparece na tela e parece estar "guardado" só por estar ali. Mas não está: se o computador desligar ou o programa fechar sem salvar, tudo some. Esta aula existe para plantar essa ideia com carinho e sem susto: o trabalho só fica guardado de verdade quando a gente manda salvar, e aí ele vira um arquivo com nome.

Nesta idade, de 5 a 9 anos, muitas crianças leem e escrevem pouco, então o caminho é mostrar e fazer junto, bem devagar. A gente vai usar uma analogia simples: salvar é como guardar um desenho numa gaveta com etiqueta. Enquanto o desenho está só na mão (na tela), ele pode cair e se perder. Quando a gente guarda na gaveta e escreve o nome na etiqueta, ele fica seguro e a gente sabe achar depois. O botão Salvar é o ato de guardar; o nome do arquivo é a etiqueta.

Na prática, cada criança vai criar um trabalho pequeno e seu: digitar uma frase curta no Bloco de Notas (por exemplo, "Eu gosto de pizza") ou fazer um desenho simples no Paint. Em seguida, todos salvam juntos, no mesmo passo, guiados pelo professor: clicar em Salvar, escolher a pasta Documentos, escrever um nome curtinho e clicar no botão Salvar da janelinha. O momento mágico vem no final: a gente fecha o programa, abre de novo e o trabalho está lá, intacto. Esse "ele voltou!" é o que fixa o conceito.

Esta é a terceira aula do mês de digitação e arquivos. As aulas 1 e 2 cuidaram do teclado e das mãos; agora a criança já consegue produzir algo na tela. A aula 3 ensina a guardar esse algo. As próximas aulas vão crescer em cima daqui: a aula 4 ensina a abrir de novo e trocar o nome do arquivo, e as aulas 5 e 6 entram nas pastas. Por isso, aqui a meta é só uma e bem firme: entender que salvar guarda, que o arquivo tem nome e que ele não some quando fechamos.`,
  materiais: [
    `Um computador ligado por aluno (até 10), com o Windows na área de trabalho funcionando e o teclado limpo.`,
    `O Bloco de Notas aberto em cada computador, com a fonte grande para a criança enxergar (caminho: menu Iniciar, digitar Bloco de Notas, clicar para abrir; depois Formatar, Fonte, tamanho 36 ou maior). Como alternativa, o Paint aberto para quem preferir desenhar (menu Iniciar, digitar Paint, clicar para abrir).`,
    `Projetor ou TV ligada ao computador do professor, para todos verem a janela de salvar e o botão Salvar bem grandes.`,
    `Um exemplo pronto e já salvo pelo professor (por exemplo, um arquivo chamado "frase-do-professor") para mostrar à turma como fica um arquivo guardado e que ele abre de novo.`,
    `Uma gaveta de verdade, uma caixa ou um envelope com etiquetas de papel, para fazer a brincadeira de "guardar e dar nome" antes de ir ao computador.`,
    `Folhas de papel com o desenho de uma janelinha de salvar (com um espaço para o nome e um botão Salvar) e lápis de cor, para a atividade no papel.`,
    `Adesivos ou carimbos de estrela para premiar quem conseguir salvar e ver o arquivo voltar.`,
  ],
  conceitosChave: [
    `Salvar — mandar o computador guardar o seu trabalho para ele não se perder, como guardar um desenho numa gaveta.`,
    `Arquivo — o seu trabalho já guardado dentro do computador; é como uma pastinha com o seu desenho ou a sua frase lá dentro.`,
    `Nome do arquivo — a etiqueta que você escreve para saber o que tem dentro e achar depois.`,
    `Botão Salvar — o botãozinho que a gente clica para guardar; fica no menu Arquivo, lá em cima à esquerda.`,
    `Documentos — a gavetona do Windows onde a gente costuma guardar os trabalhos para achar fácil depois.`,
    `Fechar — apertar o X no canto de cima para sair do programa; depois de salvar, o arquivo continua guardado mesmo fechando.`,
    `Abrir — chamar de volta um arquivo já guardado para ele aparecer de novo na tela do jeitinho que estava.`,
  ],
  treinamento: `## O que o professor precisa saber

Quando a criança digita ou desenha, o trabalho fica numa memória temporária do computador, chamada memória RAM. Essa memória é rápida, mas é esquecida: ela se apaga quando o programa fecha ou o computador desliga. Salvar é o ato de copiar esse trabalho da memória temporária para o disco, que é o lugar permanente. Por isso o que não foi salvo se perde, e o que foi salvo continua lá. Você não precisa explicar RAM e disco para as crianças; precisa só ter clareza de que existe um "rascunho na tela" e um "guardado de verdade", e que salvar é o que transforma um no outro.

Cada coisa salva vira um arquivo, e todo arquivo tem um nome. O nome serve para a gente reconhecer e achar depois. No Windows, o lugar mais comum para guardar é a pasta Documentos. Quando você clica em Salvar pela primeira vez, abre uma janela perguntando onde guardar e com que nome; depois disso, salvar de novo é só repetir, sem perguntar nada. Saiba também que o Bloco de Notas salva um arquivo de texto (.txt) e o Paint salva uma imagem (.png); não fale de extensões com as crianças, mas não se assuste se elas aparecerem no nome.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar no Windows)

1. Aquecimento e revisão (10 min): receba a turma e relembre as aulas do teclado. Faça a brincadeira da gaveta: mostre um desenho na mão, finja que ele caiu e sumiu, depois guarde-o numa gaveta com uma etiqueta escrita. Pergunte: "Onde o desenho fica mais seguro, na mão ou na gaveta com nome?". Ligue isso ao computador: "Hoje vamos guardar nosso trabalho numa gaveta dentro do computador".

2. Conteúdo novo guiado (15 min): no projetor, mostre o seu exemplo já salvo. Digite uma frase nova no Bloco de Notas e diga: "Isto está só na tela, ainda não guardado". Agora salve devagar, narrando: clique em "Arquivo", no canto de cima à esquerda; clique em "Salvar"; na janela que abrir, mostre a pasta "Documentos" do lado esquerdo; clique no espaço do nome e escreva um nome curtinho; clique no botão "Salvar". Repita uma vez para fixar o caminho.

3. Mão na massa (25 min): cada criança vai ao seu computador. Quem quiser digita uma frase curta no Bloco de Notas (ex.: "Eu gosto de pizza"); quem preferir desenha algo simples no Paint. Conte até três e salvem juntos, no mesmo ritmo: "Clica em Arquivo... clica em Salvar... vê a pasta Documentos... clica no nome e escreve... clica em Salvar". Passe nas mesas ajudando a achar o menu e a escrever o nome. Depois, o momento mágico: feche o programa no X e abra de novo (Arquivo, Abrir, ou clicando duas vezes no arquivo) para o trabalho reaparecer.

4. Desafio e compartilhar (10 min): peça que cada criança salve um segundo trabalho com outro nome, para ver que dá para ter vários arquivos guardados. No fim, cada um mostra a tela e conta o nome que deu ao arquivo. Entregue a estrelinha para quem conseguiu salvar e ver o arquivo voltar.

## Como explicar para crianças de 5 a 9 anos

Use sempre a gaveta: "A tela é a sua mão; salvar é guardar na gaveta para não cair". Chame o botão Salvar de "botão guardar" e o nome do arquivo de "etiqueta". Diga que o computador é meio esquecido: se a gente não guardar, ele esquece o que a gente fez. Faça o gesto de guardar com as mãos toda vez. Quando o arquivo voltar depois de fechar, comemore bem alto: "Olha, ele voltou! Estava guardado!". Essa surpresa alegre é o que faz a criança entender, mais do que qualquer explicação.

## Erros comuns e como ajudar

Achar que já está guardado só por estar na tela: mostre fechando sem salvar um rascunho de teste seu e ele sumir, depois um salvo voltar. Procurar o botão Salvar na tela toda: aponte que ele mora dentro do menu Arquivo, no alto à esquerda. Querer escrever um nome enorme: peça um nome curtinho, uma palavra só. Travar na hora de digitar o nome: deixe usar o nome dele ou uma palavra fácil, e ajude a achar as letras. Fechar no X antes de salvar e perder tudo: ensine a sempre salvar primeiro, e se aparecer a pergunta "Deseja salvar?", clicar em "Salvar". Salvar em qualquer lugar e não achar depois: combine que todo mundo guarda em "Documentos".`,
  exercicios: [
    {
      titulo: `A gaveta com etiqueta`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Sente a turma em roda com a gaveta (ou caixa) e as etiquetas. Mostre um desenho na mão e finja que ele caiu e se perdeu. Depois guarde-o na gaveta e escreva uma etiqueta com o nome. Pergunte onde o desenho fica mais seguro. Conduza até as crianças dizerem que é guardado e com nome. Ligue tudo ao computador antes de terminar.`,
      atividade: `Olhe o desenho na mão do professor cair e sumir. Agora veja ele ser guardado na gaveta com uma etiqueta. Responda em voz alta: onde o desenho fica mais seguro, na mão ou guardado na gaveta com nome? Para que serve a etiqueta?`,
      gabarito: `O desenho fica mais seguro guardado na gaveta com nome, porque na mão ele pode cair e se perder. A etiqueta serve para a gente saber o que está guardado e achar depois. Acertou quem entendeu que guardar protege o trabalho e que o nome (a etiqueta) ajuda a encontrar.`,
    },
    {
      titulo: `Meu primeiro Salvar`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Leve cada criança ao computador com o Bloco de Notas (ou Paint) aberto. Faça junto, no projetor, e conte até três para todos clicarem no mesmo ritmo. Narre cada passo bem devagar e repita os nomes dos botões. Passe nas mesas para ajudar a achar o menu Arquivo e a escrever o nome. Garanta que todos guardem em Documentos.`,
      atividade: `Digite uma frase curtinha (por exemplo: Eu gosto de pizza) ou faça um desenho simples. Agora salve com o professor: clique em Arquivo, lá em cima à esquerda; clique em Salvar; veja a pasta Documentos; clique no espaço do nome e escreva um nome curto; clique no botão Salvar. Pronto, está guardado!`,
      gabarito: `O trabalho foi guardado: a janela de salvar fechou sem erro e o nome escolhido aparece no alto da janela do programa. Exemplos de nome: minha-frase, pizza, sol. Acertou quem percorreu o caminho Arquivo, Salvar, Documentos, nome, botão Salvar, mesmo com ajuda para achar as letras.`,
    },
    {
      titulo: `Cadê o meu trabalho?`,
      tipo: `Jogo`,
      tempo: `10 min`,
      guiaProfessor: `Transforme o fechar e abrir num joguinho de surpresa. Depois de todos terem salvado, dê o comando para fecharem o programa no X. Crie suspense: "Será que sumiu?". Em seguida, ajude a abrir de novo (clicando duas vezes no arquivo em Documentos, ou em Arquivo, Abrir). Comemore alto quando o trabalho voltar. Faça uma vez todos juntos.`,
      atividade: `Feche o programa clicando no X do canto de cima. A tela ficou vazia, o trabalho sumiu? Agora abra de novo: encontre o seu arquivo em Documentos e clique duas vezes nele. Olhe a tela: o seu trabalho voltou igualzinho! Comemore com o professor.`,
      gabarito: `Depois de fechar, o programa some da tela, mas, ao abrir o arquivo de novo, o trabalho reaparece exatamente como estava, porque foi salvo. Acertou quem viu o arquivo voltar e entendeu que ele estava guardado o tempo todo, mesmo com o programa fechado.`,
    },
    {
      titulo: `Desenho da janelinha de salvar`,
      tipo: `Desenho`,
      tempo: `12 min`,
      guiaProfessor: `Entregue a folha com a janelinha de salvar desenhada (com uma linha para o nome e um quadrado escrito Salvar) e os lápis de cor. No projetor, mostre a janela de verdade ao lado para eles compararem. Peça que escrevam um nome de arquivo na linha e pintem o botão Salvar. Para quem ainda não escreve, deixe desenhar a etiqueta ou copiar o próprio nome.`,
      atividade: `Na sua folha, você tem a janelinha de salvar. Escreva na linha do nome um nome curto para o seu arquivo (pode ser seu nome ou uma palavra que você gosta). Depois pinte o botão Salvar de uma cor bem viva. Capriche na etiqueta!`,
      gabarito: `A folha mostra um nome escrito na linha do nome do arquivo e o botão Salvar pintado. Exemplos de nome: ana, sol, gato, minha-frase. Acertou quem colocou um nome no lugar certo (a etiqueta) e identificou o botão Salvar pintando-o, mostrando que entendeu as duas partes de salvar.`,
    },
    {
      titulo: `Dois arquivos guardados`,
      tipo: `Desafio`,
      tempo: `10 min`,
      guiaProfessor: `Este é o ponto alto. Depois de já terem salvado o primeiro trabalho, proponha criar um segundo com outro nome, para mostrar que dá para guardar vários. Oriente: apague ou comece um trabalho novo, digite ou desenhe outra coisa e salve com um nome diferente do primeiro. Acompanhe para que escolham nomes diferentes e guardem em Documentos. Comemore cada dupla de arquivos com a estrelinha.`,
      atividade: `Você já tem um trabalho guardado. Agora crie outro: escreva uma frase nova ou faça outro desenho. Salve com um nome diferente do primeiro (clique em Arquivo, Salvar, escreva o novo nome, clique em Salvar). Agora você tem dois arquivos guardados! Mostre os dois nomes para o professor.`,
      gabarito: `Existem dois arquivos diferentes salvos em Documentos, cada um com seu próprio nome (por exemplo: minha-frase e meu-desenho). Acertou quem salvou o segundo trabalho com um nome diferente do primeiro e entendeu que o computador pode guardar muitos arquivos, cada um com sua etiqueta.`,
    },
  ],
};
