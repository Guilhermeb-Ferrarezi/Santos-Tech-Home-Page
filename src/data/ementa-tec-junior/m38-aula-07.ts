import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Dando os últimos retoques no protótipo",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança finaliza o seu protótipo com IA conferindo se o treino, os blocos e a reação do jogo funcionam juntos do começo ao fim, e capricha nos detalhes (mensagem na tela e som) para a experiência ficar completa e pronta para mostrar.`,
  descricao: `Esta é a aula de "dar os últimos retoques". O protótipo com IA já existe: durante o mês a turma treinou um modelo no ML for Kids, trouxe esse modelo para o projeto, montou a ponte com os blocos e até testou e deixou a IA mais esperta. Hoje a gente não cria nada novo do zero; hoje a gente olha o jogo inteiro com carinho, do início ao fim, e arruma os detalhes que fazem a experiência parecer pronta de verdade. É como arrumar a mochila na noite antes do passeio: tudo já está aí, só falta conferir e caprichar.

A ideia central é a palavra "conferir". A criança vai percorrer o caminho completo do seu protótipo: eu digo (ou escrevo) uma coisa, a IA pensa e responde uma etiqueta, os blocos leem essa etiqueta e o jogo reage. Esse caminho do começo ao fim tem que funcionar liso, sem travar no meio. Quando alguma parte não responde, a gente descobre em qual pedaço o caminho quebrou: foi a IA que não reconheceu? Foi o bloco que estava ligado no lugar errado? Foi a reação do jogo que ninguém viu? Aprender a olhar parte por parte é a grande habilidade do dia.

Depois de conferir que tudo anda, vem o capricho. Um protótipo fica muito mais gostoso quando, além de funcionar, ele FALA com quem joga: uma mensagem que aparece na tela ("Acertou!", "Tente de novo"), uma corzinha que muda, um somzinho que toca quando a IA acerta. Esses detalhes pequenos são o que transforma um teste solto numa experiência completa, daquelas que dá orgulho de mostrar. As crianças adoram essa parte porque é onde o jogo ganha personalidade.

No fim, cada um faz um teste final sozinho, do início ao fim, como se fosse um colega vendo pela primeira vez. Se passar no teste sem travar e com os detalhes funcionando, o protótipo está pronto para o Showcase da próxima aula. É um momento de fechamento e de orgulho: o jogo com IA que começou como ideia agora roda inteiro.`,
  materiais: [
    `Computadores ligados, um por criança, com o projeto de cada um aberto e o site do ML for Kids (machinelearningforkids.co.uk) já logado na conta da turma.`,
    `Projetor ou TV grande para o professor mostrar a conferência do início ao fim na tela enorme.`,
    `Protótipo-exemplo pronto e funcionando ("jogo-IA-pronto"), com mensagem na tela e som, para a turma ver como fica um projeto completo.`,
    `Lista de conferência impressa (um "check-list" simples com desenhos): treino, bloco, reação, mensagem, som.`,
    `Fones de ouvido (ou caixinha de som), para quem for adicionar o detalhe de som testar sem bagunçar a sala.`,
    `Cópia de segurança dos projetos salva (exportada ou na nuvem da escola), caso alguma criança apague algo sem querer.`,
    `Crachás ou etiquetas com os nomes das crianças para identificar cada computador.`,
  ],
  conceitosChave: [
    `Protótipo — a primeira versão jogável do jogo, feita para testar a ideia; ainda é simples, mas já funciona de verdade.`,
    `Conferir (testar do início ao fim) — percorrer o caminho inteiro do jogo, do começo ao fim, para ver se nada trava no meio.`,
    `Caminho completo — a sequência "eu mostro algo, a IA pensa, o bloco lê a resposta e o jogo reage"; tudo isso ligado, sem buraco.`,
    `Retoque (detalhe) — um acabamento pequeno, como uma mensagem na tela ou um som, que deixa a experiência mais bonita e completa.`,
    `Feedback — a resposta que o jogo dá para quem joga (a mensagem "Acertou!", uma cor que muda, um som), avisando o que aconteceu.`,
    `Modelo treinado — a IA que a turma ensinou no ML for Kids; ela olha o que a gente mostra e devolve uma etiqueta (a resposta).`,
    `Bug — um errinho que faz alguma parte não funcionar; a gente acha conferindo pedaço por pedaço e conserta com calma.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar IA para dar esta aula. O modelo já foi treinado nas aulas anteriores no ML for Kids (o site machinelearningforkids.co.uk) e já está ligado ao projeto pelos blocos. Hoje o seu papel é conduzir uma CONFERÊNCIA: levar a criança a percorrer o protótipo inteiro e verificar se cada parte do caminho funciona. Tenha clara a sequência do caminho completo: a criança mostra algo à IA (digita uma frase, ou escolhe uma imagem, conforme o projeto da turma), a IA devolve uma etiqueta (por exemplo "feliz" ou "triste", "cachorro" ou "gato"), o bloco lê essa etiqueta e o jogo reage (muda de cena, soma ponto, mostra texto). Se algo não acontece, o problema está em UM desses elos, e a gente descobre qual olhando um de cada vez.

Vale você abrir o ML for Kids antes da aula e relembrar dois lugares: o botão "Test" dentro do projeto (lá você digita ou mostra algo e vê a etiqueta que a IA responde, com a porcentagem de confiança) e o botão "Make" (que leva aos blocos do Scratch onde o projeto vive). Confirme que o modelo está como "Trained" (treinado) na tela do projeto; se aparecer "Model not yet trained", é só clicar em "Train new machine learning model" e esperar.

## Passo a passo da aula

10 min — Aquecimento/revisão: no projetor, abra o protótipo-exemplo pronto e jogue ele inteiro na frente da turma, do início ao fim, narrando: "Olha, eu mostro isto, a IA pensa, o jogo responde e ainda aparece a mensagem e toca o som". Pergunte: "O que faltaria se eu tirasse a mensagem? E se eu tirasse o som?". Apresente a lista de conferência (treino, bloco, reação, mensagem, som).

15 min — Conteúdo novo guiado: mostre na sua tela como conferir parte por parte. Primeiro, no ML for Kids, clique em "Test" e digite (ou mostre) um exemplo: veja a etiqueta aparecer. Diga "a IA está respondendo, esse elo funciona". Depois volte aos blocos pelo "Make" e rode o jogo (bandeira verde do Scratch): mostre o bloco que lê a etiqueta e o bloco que faz a reação. Por fim, adicione um detalhe ao vivo: um bloco "diga [Acertou!] por 2 segundos" e um bloco "toque o som". Aperte a bandeira e mostre o jogo falando com a gente.

25 min — Mão na massa: cada criança abre o seu projeto e usa a lista de conferência. Risca cada item que funciona. Onde travar, ela chama você e vocês olham o elo quebrado. Quem estiver com tudo funcionando capricha nos retoques: adiciona uma mensagem na tela ("diga ... por ... segundos") e um som quando a IA acerta. Circule, ajoelhe ao lado de cada um e reforce "primeiro conferir, depois enfeitar".

10 min — Desafio + compartilhar: cada criança faz o TESTE FINAL sozinha, jogando do início ao fim como se fosse um colega novo. Quem passou sem travar mostra rapidinho um pedaço para a turma. Combine que na próxima aula é o Showcase.

## Como explicar para crianças

Use a ideia de "arrumar a mochila do passeio": "Tudo já está dentro, a gente só confere item por item para não esquecer nada". Para o caminho completo, faça com o corpo: aponte para si ("eu mostro"), bata na testa ("a IA pensa"), abra a mão ("o jogo responde"). Para os retoques, diga: "Um jogo bom não só funciona, ele CONVERSA com a gente: ele avisa quando a gente acerta". Chame o errinho de "bug" e diga que achar bug é coisa de detetive, não é fracasso: "vamos descobrir em que pedacinho o caminho quebrou".

## Erros comuns e como ajudar

O erro mais comum é a criança querer mudar tudo de novo em vez de só conferir; segure a empolgação com "hoje a gente arruma, não recomeça". Outro: testar a IA dentro do ML for Kids, ver a etiqueta certa, mas o jogo não reagir — quase sempre o bloco que lê a etiqueta está comparando com um nome escrito diferente do nome real da etiqueta (letra maiúscula, espaço, acento); confira se o texto no bloco é idêntico ao rótulo do ML for Kids. Tem quem coloque a mensagem ou o som no lugar errado do script, e nada aparece; lembre que o detalhe precisa estar DEPOIS do bloco que verifica o acerto. Alguns esquecem de salvar e perdem o capricho; peça para salvar a cada retoque. Por fim, se o modelo aparecer "not yet trained", basta clicar em "Train new machine learning model" e esperar a IA ficar pronta antes de testar.`,
  exercicios: [
    {
      titulo: `O caminho completo com o corpo`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Em roda, no projetor, jogue o protótipo-exemplo do início ao fim. Peça que a turma descreva o caminho que o jogo faz. Conduza os gestos (apontar para si, bater na testa, abrir a mão) para fixar as quatro etapas. Dê a vez para cada criança falar uma etapa.`,
      atividade: `Vamos contar o caminho do jogo juntos, com o corpo: aponte para você ("eu mostro algo"), bata de leve na testa ("a IA pensa e responde"), e abra a mão ("o jogo reage"). Agora digam em voz alta, na ordem, o que acontece do começo ao fim quando alguém joga.`,
      gabarito: `A ordem certa é: 1) a pessoa mostra algo à IA (digita ou escolhe); 2) a IA pensa e devolve uma etiqueta (a resposta); 3) o bloco lê essa etiqueta; 4) o jogo reage (muda de cena, soma ponto ou mostra texto). Acertou quem disse as etapas na sequência e entendeu que elas estão todas ligadas, uma puxando a outra.`,
    },
    {
      titulo: `Riscando a lista de conferência`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Entregue a lista de conferência (treino, bloco, reação, mensagem, som). Cada criança abre o seu projeto e roda o jogo do início ao fim, riscando o que funciona. Passe nas mesas conferindo se elas estão olhando um item de cada vez, sem pular etapas.`,
      atividade: `Pegue a sua lista de conferência. Rode o seu jogo do começo ao fim. Vá riscando o que já funciona: a IA respondeu? O bloco leu a resposta? O jogo reagiu? Já tem mensagem na tela? Já tem som? Risque só o que funcionar DE VERDADE quando você joga.`,
      gabarito: `A criança deve rodar o protótipo inteiro e marcar honestamente cada item que funciona, deixando sem riscar o que ainda falta. Acertou quem conseguiu dizer claramente quais partes já estão prontas e quais ainda precisam de ajuste, sem riscar tudo no chute.`,
    },
    {
      titulo: `Onde o caminho quebrou?`,
      tipo: `jogo de detetive`,
      tempo: `12 minutos`,
      guiaProfessor: `Prepare (ou use o do colega em dupla) um projeto com UM elo quebrado de propósito: por exemplo, a IA responde certo no botão "Test" do ML for Kids, mas o jogo não reage. Ajude a turma a testar elo por elo até achar onde parou. Mantenha o clima de investigação, não de erro.`,
      atividade: `Você é detetive de bug! Teste a IA no botão "Test" do ML for Kids: ela responde a etiqueta certa? Depois rode o jogo nos blocos: o bloco lê a etiqueta? O jogo reage? Descubra em QUAL pedacinho o caminho quebrou e conte para o professor onde está o problema.`,
      gabarito: `Se a IA acerta no "Test" mas o jogo não reage, o problema NÃO está na IA: está nos blocos (geralmente o bloco que lê a etiqueta está comparando com um texto escrito diferente do nome real da etiqueta, com maiúscula, espaço ou acento). Acertou o detetive que isolou o elo quebrado em vez de culpar a IA inteira.`,
    },
    {
      titulo: `Dando voz ao jogo: mensagem e som`,
      tipo: `prática na ferramenta`,
      tempo: `16 minutos`,
      guiaProfessor: `Mostre de novo, rapidinho, como adicionar um bloco "diga [Acertou!] por 2 segundos" e um bloco de tocar som logo DEPOIS do bloco que verifica o acerto da IA. Cada criança adiciona pelo menos a mensagem; o som é para quem tiver tempo. Lembre de salvar a cada retoque.`,
      atividade: `Deixe o seu jogo conversar com quem joga! Depois do bloco que verifica se a IA acertou, encaixe um bloco "diga [Acertou!] por 2 segundos". Se der tempo, adicione também um bloco para tocar um somzinho quando acertar. Rode o jogo e veja a mensagem aparecer e o som tocar.`,
      gabarito: `A mensagem ("Acertou!" ou parecida) deve aparecer na tela e o som tocar SOMENTE quando a IA acerta, porque os blocos de detalhe ficam depois do bloco que verifica o acerto. Acertou quem posicionou o retoque no lugar certo do script e viu o feedback aparecer ao jogar, sem que ele dispare na hora errada.`,
    },
    {
      titulo: `Teste final: pronto para o Showcase`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Cada criança faz sozinha um teste final, jogando do início ao fim como se fosse um colega vendo pela primeira vez. Use a lista de conferência como prova: tudo riscado? Faça uma mini-roda em que quem passou mostra um pedaço. Celebre cada protótipo pronto com palmas e anuncie o Showcase da próxima aula.`,
      atividade: `Hora do teste final! Jogue o seu protótipo do começo ao fim, devagar, como se fosse outra pessoa jogando pela primeira vez. A IA responde? O jogo reage? A mensagem aparece? O som toca? Se passar sem travar, o seu jogo com IA está PRONTO para o Showcase. Mostre um pedacinho para a turma!`,
      gabarito: `O protótipo está pronto quando roda do início ao fim sem travar, com o caminho completo funcionando (IA responde, bloco lê, jogo reage) e pelo menos a mensagem na tela aparecendo na hora certa. Acertou quem completou o teste final inteiro sem precisar consertar nada no meio e conseguiu apresentar o jogo funcionando.`,
    },
  ],
};
