import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Assets prontos: exportando para o jogo",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Exportar os modelos 3D finalizados no formato certo e fazer a galeria do mês, deixando os novos assets prontos para entrar no jogo da trilha.`,
  descricao: `Chegou o grande dia! Durante o mês inteiro a turma voltou à modelagem no Maya, criou itens novos, pintou com vertex color, caprichou no acabamento e até imprimiu modelos em 3D para levar pra casa. Agora vamos fechar com chave de ouro: pegar cada modelo finalizado e transformá-lo em um arquivo que o jogo consegue ler e usar. Isso se chama exportar, e é o momento em que o trabalho da criança sai do Maya e vira um asset de verdade, pronto para entrar no game da trilha.

Exportar é como tirar um bolo do forno e colocar numa embalagem para presentear alguém. O bolo (o modelo) já está pronto, mas precisa do formato certo para viajar. No mundo dos jogos, o formato mais comum é o FBX, que carrega o modelo, as cores e as informações de tamanho tudo junto. Nesta aula o professor vai mostrar onde clicar no Maya para gerar esse arquivo, como dar um nome organizado e onde salvar para não se perder.

Depois da exportação vem a parte mais gostosa: a galeria do mês. Cada criança vai apresentar seus novos assets 3D para a turma, contando o que criou, qual foi a parte mais difícil e do que mais se orgulha. Apresentar é tão importante quanto modelar, porque ensina a criança a falar do próprio trabalho, ouvir os colegas e perceber o quanto evoluiu desde a primeira aula do mês.

No fim, consolidamos o entregável do mês: uma pasta organizada com os novos assets 3D exportados e prontos. O professor não precisa ser especialista em Maya para conduzir isso. Basta seguir o passo a passo, celebrar cada conquista e lembrar que o objetivo é a criança sentir orgulho de ver sua criação virando peça de um jogo de verdade.`,
  materiais: [
    `Computadores com o Maya aberto e os modelos do mês já salvos`,
    `Projetor ou TV para o professor demonstrar a exportação passo a passo`,
    `Exemplos prontos: dois ou três arquivos FBX já exportados para mostrar como fica`,
    `Uma pasta criada na área de trabalho chamada "Assets do Jogo" para organizar tudo`,
    `Crachás ou plaquinhas com o nome de cada criança para a galeria`,
    `Cronômetro grande na tela para marcar o tempo de cada etapa`,
  ],
  conceitosChave: [
    `Exportar — é tirar o modelo de dentro do Maya e salvá-lo num arquivo que o jogo entende, como guardar um desenho num envelope para mandar pra alguém.`,
    `FBX — é um tipo de arquivo "caixa mágica" que leva o modelo 3D, as cores e o tamanho tudo junto para o jogo.`,
    `Asset — é qualquer pecinha pronta que entra no jogo: um personagem, uma árvore, uma espada. Cada modelo seu vira um asset.`,
    `Formato de arquivo — é o "sabor" do arquivo, mostrado pela terminação depois do ponto. O jogo só come o sabor FBX.`,
    `Nomear — é dar um nome claro e organizado para o arquivo, tipo "espada_azul", para a gente achar depois sem confusão.`,
    `Pasta — é a gavetinha do computador onde guardamos os arquivos juntos para não perder nenhum.`,
    `Galeria — é o momento de mostrar e contar para os amigos o que a gente criou, com orgulho.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Maya para dar esta aula. Sua missão é mostrar três coisas simples: como abrir um modelo salvo, como exportá-lo em FBX e como guardá-lo numa pasta organizada. Antes da aula, abra o Maya, abra um modelo qualquer e teste a exportação você mesmo uma vez. Assim, na hora, você fará com segurança. Crie na área de trabalho uma pasta chamada "Assets do Jogo" onde toda a turma vai salvar. Lembre-se: exportar é só "embalar o presente" para o jogo poder usar. A palavra-chave da aula é orgulho — cada criança termina o mês vendo sua criação virar peça de game.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): receba a turma animado e pergunte "quem lembra o que a gente fez esse mês?". Relembre rapidinho: modelamos, pintamos, caprichamos, imprimimos. Mostre no projetor um exemplo pronto em FBX e diga: "hoje a gente faz a mágica de mandar nossos modelos pro jogo!".

Conteúdo novo guiado (15 min): no projetor, abra um modelo no Maya. No menu de cima, clique em "File". Depois clique em "Export All..." (exportar tudo). Vai abrir uma janela. Embaixo, no campo "Files of type", escolha "FBX export". No campo do nome, digite algo claro, como "arvore_verde". Em "Look in", escolha a pasta "Assets do Jogo". Clique no botão grande "Export All". Pronto: nasceu o arquivo! Mostre a pasta com o FBX aparecendo e comemore.

Mão na massa (25 min): cada criança abre seu próprio modelo salvo (File depois Open). Acompanhe mesa por mesa. Guie: File, Export All, escolher FBX export, dar o nome, salvar na pasta "Assets do Jogo", clicar em Export All. Quem terminar um modelo pode exportar o próximo. Vá conferindo se o arquivo apareceu na pasta. Elogie cada exportação concluída.

Desafio e compartilhar (10 min): hora da galeria do mês! Cada criança mostra na tela seu asset exportado e conta em uma frase o que criou e do que mais gostou. Palmas para todos. Feche dizendo: "todos esses assets agora estão prontos pra entrar no nosso jogo!".

## Como explicar para crianças

Use sempre analogias do dia a dia. Diga que exportar é como "tirar o bolo do forno e colocar na caixa para dar de presente". O Maya é a cozinha; o FBX é a caixa; o jogo é o amigo que vai receber. Explique que o nome do arquivo é como escrever no presente para quem é, senão a gente esquece. Mostre que a pasta é a gaveta onde guardamos tudo junto. Repita a sequência mágica em voz alta com eles, como uma musiquinha: "File, Export All, FBX, nome, salvar!". Crianças adoram repetir passos, e isso ajuda a fixar.

## Erros comuns e como ajudar

O erro mais comum é a criança esquecer de escolher "FBX export" e salvar no formato errado. Passe nas mesas conferindo essa parte. Outro erro: dar nomes confusos como "aaa" ou deixar espaços e acentos, que podem dar problema no jogo; ensine nomes simples com sublinhado, tipo "espada_azul". Algumas crianças salvam em qualquer lugar e perdem o arquivo; sempre aponte para a pasta "Assets do Jogo". Há quem feche a janela sem clicar em "Export All", achando que já salvou; reforce que só vale depois do clique final. Se travar, peça para a criança respirar e refazer a sequência com você devagar. E na galeria, ajude as crianças mais tímidas com perguntas simples: "qual a cor do seu modelo?", "foi difícil?". O importante é todo mundo terminar o mês com seus assets prontos e muito orgulho.`,
  exercicios: [
    {
      titulo: `A sequência mágica`,
      tipo: `Revisão oral em grupo`,
      tempo: `5 minutos`,
      guiaProfessor: `Reúna a turma e diga a sequência de exportar como uma musiquinha. Repita três vezes com eles batendo palma no ritmo. Pergunte qual passo vem primeiro.`,
      atividade: `Em roda, todos repetem juntos a sequência mágica de exportar o modelo no Maya. Depois cada criança diz qual é o primeiro passo de todos.`,
      gabarito: `A sequência é: File, Export All, escolher FBX export, dar o nome, salvar na pasta, clicar em Export All. O primeiro passo é clicar em "File" no menu de cima.`,
    },
    {
      titulo: `Que sabor é esse?`,
      tipo: `Pergunta e resposta`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor um arquivo terminando em ".fbx". Explique de novo que o formato é o "sabor" do arquivo. Pergunte qual sabor o jogo consegue comer.`,
      atividade: `Olhando a tela, a criança responde qual é o formato de arquivo que o jogo entende e por que precisamos dele.`,
      gabarito: `O formato é o FBX (arquivo terminado em .fbx). Precisamos dele porque é a "caixa mágica" que leva o modelo, as cores e o tamanho tudo junto para o jogo conseguir usar.`,
    },
    {
      titulo: `Dando nome ao presente`,
      tipo: `Atividade prática individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça para cada criança pensar num nome claro para o seu modelo antes de exportar. Ensine a usar sublinhado e evitar espaços e acentos. Confira mesa por mesa.`,
      atividade: `Cada criança escolhe um nome organizado para o seu asset (exemplo: "espada_azul") e digita esse nome no campo de nome na hora de exportar.`,
      gabarito: `Um bom nome é curto, claro e mostra o que é o modelo, usando sublinhado no lugar de espaço, como "arvore_verde" ou "espada_azul". Não vale nome confuso como "aaa" nem usar acentos.`,
    },
    {
      titulo: `Exportando de verdade`,
      tipo: `Mão na massa no Maya`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe cada criança fazendo a exportação completa do próprio modelo. Confira se ela escolheu FBX export e salvou na pasta "Assets do Jogo". Confirme que o arquivo apareceu.`,
      atividade: `A criança abre seu modelo salvo e faz toda a exportação sozinha: File, Export All, FBX export, nome, salvar na pasta certa e clicar em Export All. Depois confere se o arquivo apareceu na pasta.`,
      gabarito: `A exportação deu certo quando o arquivo ".fbx" com o nome escolhido aparece dentro da pasta "Assets do Jogo". Se não apareceu, conferir se faltou escolher FBX export ou clicar no botão final "Export All".`,
    },
    {
      titulo: `Minha galeria, meu orgulho`,
      tipo: `Apresentação e desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Conduza a galeria do mês. Cada criança mostra seu asset exportado e conta o que criou e do que mais gostou. Ajude os mais tímidos com perguntas simples e puxe palmas para todos.`,
      atividade: `Na frente da turma, a criança mostra seu asset 3D exportado e apresenta em poucas frases: o que é, qual foi a parte mais difícil e do que mais se orgulha. O desafio extra é dizer onde esse asset poderia aparecer no jogo.`,
      gabarito: `A apresentação está completa quando a criança mostra o modelo exportado e diz o que criou, a parte difícil e o orgulho. No desafio, qualquer resposta lógica vale, por exemplo: "minha árvore pode ficar na floresta do jogo" ou "minha espada pode ser do herói". O importante é a criança falar do próprio trabalho com confiança.`,
    },
  ],
};
