import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Meu jogo funcionando",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada aluno finaliza, exporta e publica o próprio jogo 2D completo no Construct 3, apresenta o projeto para a turma e percebe que os personagens criados serão o próximo passo, virando modelos 3D impressos de verdade.`,
  descricao: `Esta é a aula que fecha o mês inteiro de Construct 3. Durante quatro semanas a turma conheceu o editor, explorou a janela de jogo, trouxe os sprites para a tela, montou o cenário completo, escreveu eventos como regras do jogo, ligou comportamentos de movimento e poliu tudo. Agora chega o momento mais esperado: deixar o jogo realmente pronto, gerar uma versão que roda fora do editor e mostrar para todo mundo. O entregável do mês é exatamente isto, um joguinho funcionando, feito por cada aluno.

O coração da aula é a publicação. Até hoje o jogo só rodava dentro do Construct 3, quando o aluno clicava em Preview. Nesta aula ele aprende a exportar: o Construct 3 empacota o projeto numa versão HTML5 que abre no navegador como qualquer site, sem precisar do editor aberto. É a diferença entre um desenho guardado na gaveta e um quadro pendurado na parede. Quando o aluno vê o próprio jogo abrindo numa aba do navegador, com o nome dele na tela, a ficha cai: ele construiu software de verdade, que outras pessoas podem jogar.

Depois de exportar, vem a apresentação. Cada aluno mostra o jogo no projetor, conta a ideia, joga um trecho ao vivo e deixa um colega experimentar. É um momento de orgulho e também de aprendizado: ver o jogo dos outros mostra soluções diferentes, bugs parecidos e ideias novas. O professor é o mestre de cerimônias, garante aplausos e ajuda quem travar na hora de jogar na frente da turma.

Por fim, a aula faz a ponte com o futuro. Os personagens que cada aluno desenhou e animou em pixel art e usou no jogo não vão parar por aqui. No próximo passo da trilha eles serão modelados em 3D e impressos de verdade, virando bonecos que o aluno leva para casa. Encerrar o mês olhando para esse próximo passo dá sentido a tudo: o personagem nasceu no papel, ganhou vida no jogo e logo vai existir no mundo real.`,
  materiais: [
    `Um computador por aluno com o Construct 3 aberto no navegador (editor.construct.net) e o projeto do jogo do mês já carregado e salvo`,
    `Projetor ou tela grande ligada ao computador do professor para demonstrar a exportação e conduzir as apresentações`,
    `Um projeto de exemplo do professor, já finalizado, para mostrar como fica um jogo exportado abrindo no navegador antes dos alunos tentarem`,
    `Conexão de internet estável, porque o Construct 3 roda no navegador e a exportação acontece pela nuvem`,
    `Uma pasta combinada (ou pen drive) para salvar o arquivo .c3p do projeto e o pacote exportado de cada aluno, para a família ver depois`,
    `Os modelos em pixel art dos personagens de cada aluno à mão, para mostrar na ponte final que eles virarão modelos 3D impressos`,
    `A impressora 3D da escola visível ou um boneco já impresso de outro projeto, como amostra do próximo passo da trilha`,
  ],
  conceitosChave: [
    `Preview — o botão de play do Construct 3 que roda o jogo dentro do editor, só para testar, sem gerar um arquivo separado.`,
    `Exportar — pedir ao Construct 3 que empacote o jogo numa versão que roda fora do editor, pronta para publicar ou compartilhar.`,
    `HTML5 — o formato de jogo que abre direto no navegador, como um site, sem precisar instalar nada.`,
    `Publicar — deixar o jogo disponível para outras pessoas jogarem, abrindo o pacote exportado no navegador.`,
    `Arquivo .c3p — o arquivo que guarda todo o projeto do Construct 3 (cenário, sprites e eventos) para abrir e continuar depois.`,
    `Bug — um erro no jogo que faz algo funcionar diferente do esperado, como um personagem que atravessa a parede.`,
    `Apresentar — mostrar o próprio jogo para a turma, contando a ideia e jogando um trecho ao vivo.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta é a aula de fechamento do mês. O objetivo não é ensinar mecânica nova, e sim FINALIZAR, EXPORTAR e APRESENTAR o jogo que cada aluno já vem montando. Antes da aula, abra o Construct 3 no navegador (editor.construct.net), carregue o seu projeto de exemplo e faça uma exportação completa para você dominar o caminho. O Construct 3 roda inteiro no navegador, então garanta internet estável.

Relembre a diferença central da aula: até agora os alunos usaram o botão Preview (o ícone de play no canto superior, atalho F5), que roda o jogo só dentro do editor. Hoje eles vão Exportar, que gera um pacote independente. O caminho é o menu Menu (o ícone de hambúrguer, três tracinhos, no canto superior esquerdo) e depois Project, e então Export project. Escolha a opção Web (HTML5), que é a mais simples. O Construct 3 processa e oferece um arquivo .zip para baixar; dentro dele há um index.html que, ao ser aberto, roda o jogo no navegador.

Saiba também salvar o projeto certo. Vá em Menu, Project, Save as, e escolha Download a copy para baixar o arquivo .c3p, que guarda o projeto inteiro. Tenha em mãos os personagens em pixel art de cada aluno para a ponte final, em que você conecta esses personagens ao próximo passo: transformá-los em modelos 3D impressos.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar em Construct 3)

1. Aquecimento e revisão (10 min). Peça que cada aluno abra o próprio projeto no Construct 3 e aperte F5 (Preview) para conferir se o jogo roda. No projetor, relembre o que o jogo precisa ter para estar pronto: começar, ter um objetivo claro e poder ser jogado do início ao fim. Anote no quadro os bugs que aparecerem, para resolver no mão na massa. Diga: "Hoje o seu jogo sai do editor e vira um jogo de verdade!"

2. Conteúdo novo guiado (15 min). No seu computador no projetor, mostre a exportação com o projeto de exemplo. Clique em Menu (os três tracinhos, canto superior esquerdo), depois Project, depois Export project. Escolha Web (HTML5) e avance. Quando o Construct 3 gerar o arquivo, baixe o .zip, abra a pasta e dê dois cliques no index.html: o jogo abre numa aba do navegador, rodando sozinho. Mostre que agora não precisa mais do editor. Em seguida ensine a salvar o projeto em Menu, Project, Save as, Download a copy (.c3p).

3. Mão na massa (25 min). Cada aluno finaliza o próprio jogo. Primeiro resolve os bugs anotados no quadro. Depois exporta seguindo os passos: Menu, Project, Export project, Web (HTML5), e baixa o pacote. Por fim abre o index.html para ver o jogo rodando fora do editor e salva o .c3p na pasta combinada. Circule de mesa em mesa, comemore cada jogo que abre no navegador e ajude quem se perder no menu de exportação.

4. Desafio e compartilhar (10 min). Cada aluno (ou alguns, se faltar tempo) apresenta no projetor: mostra o jogo, conta a ideia e joga um trecho ao vivo, deixando um colega experimentar. Toda a turma aplaude. Para fechar, faça a ponte: segure o personagem em pixel art de um aluno e diga que, no próximo passo, esse mesmo personagem vai virar um modelo 3D impresso de verdade, que ele leva para casa.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do jogo saindo da caixa. "Até hoje o seu jogo só vivia dentro do Construct 3; hoje a gente abre a porta e deixa ele andar pelo mundo." Mostre, não explique demais: exporte o exemplo no projetor e, quando o jogo abrir no navegador, diga "olha, agora ele roda sem o editor, como qualquer site!". Compare Preview e Exportar com um ensaio e o show: Preview é o ensaio dentro de casa; Exportar é subir no palco para todo mundo jogar. Para a ponte final, fale "esse personagem que você desenhou e colocou no jogo vai virar um boneco 3D de verdade", apontando a impressora.

## Erros comuns e como ajudar

O aluno confunde Preview com Exportar e acha que já publicou: explique que Preview só roda dentro do editor e que o jogo de verdade vem do Export project. O download do .zip não aparece: confira se o navegador bloqueou o download e libere; tente de novo pelo mesmo caminho. O index.html abre uma tela branca: geralmente o aluno abriu o arquivo errado dentro do .zip ou não descompactou a pasta; oriente a extrair tudo e abrir o index.html. O jogo tem um bug que aparece só no export: peça para testar de novo no Preview e comparar; muitas vezes é um evento faltando. O aluno esquece de salvar o .c3p e perde o projeto: faça Save as, Download a copy junto com ele no fim. Fica tímido para apresentar: deixe apresentar em dupla ou só jogar enquanto você narra a ideia.`,
  exercicios: [
    {
      titulo: `Conferindo o jogo no Preview`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Com o projeto de cada aluno aberto, peça que apertem F5 (ou cliquem no botão Preview, o ícone de play no canto superior) e joguem o próprio jogo do começo ao fim. Oriente a anotar tudo que não funciona como esperado. Passe nas mesas e ajude a identificar se o jogo começa, se tem objetivo e se dá para terminar. Anote no quadro os bugs encontrados.`,
      atividade: `Abra o seu jogo e aperte F5 para rodar no Preview. Jogue do início ao fim como se fosse um jogador novo. Anote: o jogo começa direito? Dá para chegar ao final? Tem algum bug, como o personagem atravessando a parede? Liste o que precisa arrumar.`,
      gabarito: `O aluno acerta quando roda o próprio jogo no Preview, joga do início ao fim e lista pelo menos um ponto a melhorar ou confirma que está tudo funcionando. Sinal de sucesso: ele identifica com clareza se o jogo começa, tem objetivo e pode ser terminado.`,
    },
    {
      titulo: `Exportando o jogo em HTML5`,
      tipo: `Prática na ferramenta`,
      tempo: `12 min`,
      guiaProfessor: `Mostre primeiro no projetor o caminho completo: Menu (os três tracinhos no canto superior esquerdo), Project, Export project, opção Web (HTML5). Quando o Construct 3 gerar o pacote, baixe o .zip. Depois acompanhe cada aluno fazendo o mesmo. Cuide para que escolham Web (HTML5) e não outra plataforma, e ajude quem não encontrar o item de exportação no menu.`,
      atividade: `Vamos tirar o jogo da caixa! Clique no Menu (os três tracinhos), depois em Project e em Export project. Escolha a opção Web (HTML5) e avance. Quando aparecer o arquivo para baixar, salve o .zip no computador. Pronto, o seu jogo agora é um pacote de verdade!`,
      gabarito: `O aluno acerta quando percorre o caminho Menu, Project, Export project, escolhe Web (HTML5) e baixa o arquivo .zip do jogo. Sinal de sucesso: o arquivo exportado aparece na pasta de downloads do computador.`,
    },
    {
      titulo: `Abrindo o jogo publicado`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Ensine a abrir o pacote exportado fora do editor. Oriente o aluno a extrair (descompactar) a pasta do .zip e dar dois cliques no arquivo index.html, que abre o jogo numa aba do navegador. Reforce que agora o jogo roda sem o Construct 3 aberto. Ajude quem abrir o arquivo errado ou esquecer de extrair a pasta antes.`,
      atividade: `Encontre o .zip que você baixou e descompacte a pasta. Lá dentro, ache o arquivo index.html e dê dois cliques nele. O seu jogo abriu numa aba do navegador, sem o editor? Jogue um pouquinho: ele está publicado e rodando sozinho!`,
      gabarito: `O aluno acerta quando descompacta a pasta, abre o index.html e vê o próprio jogo rodando no navegador sem o Construct 3 aberto. Sinal de sucesso: ele joga um trecho na versão publicada e percebe que ela funciona sozinha.`,
    },
    {
      titulo: `Jogando o jogo do colega`,
      tipo: `Em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas e peça que troquem de computador para jogar o jogo um do outro na versão exportada. Oriente cada um a dar um elogio e uma sugestão gentil ao colega. É um momento de testar com olhos novos: o jogador de fora costuma achar bugs que o autor não vê. Circule incentivando comentários respeitosos e específicos.`,
      atividade: `Troque de lugar com a sua dupla e jogue o jogo do colega. Depois de jogar, diga uma coisa que você adorou e uma ideia para deixar o jogo ainda melhor. Achou algum bug que o seu colega não tinha visto? Conte com gentileza.`,
      gabarito: `O aluno acerta quando joga o jogo da dupla até o fim, dá um elogio específico e uma sugestão construtiva, e relata qualquer bug encontrado de forma respeitosa. Sinal de sucesso: a dupla troca observações úteis e cada autor sai com pelo menos uma ideia de melhoria.`,
    },
    {
      titulo: `Apresentar o meu jogo e olhar o próximo passo`,
      tipo: `Desafio e roda de conversa`,
      tempo: `12 min`,
      guiaProfessor: `Conduza as apresentações no projetor como mestre de cerimônias. Combine antes os passos: mostrar o jogo, contar a ideia em uma frase e jogar um trecho ao vivo. Garanta aplausos para cada aluno. Para fechar, faça a ponte com o futuro: segure o personagem em pixel art de um aluno, aponte a impressora 3D e explique que esse personagem vira um modelo 3D impresso de verdade no próximo passo da trilha. Se o aluno for tímido, deixe apresentar em dupla ou só jogar enquanto você narra.`,
      atividade: `Chegou a sua vez de brilhar! No telão, mostre o seu jogo, conte a ideia dele em uma frase e jogue um pedaço ao vivo. Depois, olhe para o personagem que você desenhou e usou no jogo: no próximo passo, ele vai virar um boneco 3D impresso de verdade, que você leva para casa. Qual personagem você quer imprimir primeiro?`,
      gabarito: `O aluno acerta quando apresenta o próprio jogo dizendo a ideia e jogando um trecho ao vivo, mesmo com um empurrãozinho do professor, e consegue apontar qual dos seus personagens gostaria de transformar em modelo 3D impresso. O objetivo é o orgulho de ter um jogo funcionando e a empolgação com o próximo passo da trilha.`,
    },
  ],
};
